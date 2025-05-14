import { generateDeclaration, ClassPluginPlaceholder } from "@techcross/ts-migrate";
import ts from "typescript";
import moduleConfig from "./moduleConfig.json" with { type: "json" };

function collectFiles(files: string[], result: string[]) {
    files.forEach(file => {
        if (moduleConfig.module[file]) {
            collectFiles(moduleConfig.module[file], result);
        }
        else if (result.indexOf(file) === -1) {
            result.push(file);
        }
    });
    return result;
}

(async () => {
    const files = collectFiles(["cocos2d", "extensions", "generate_api.js"], [moduleConfig.bootFile]);
    await generateDeclaration(files, {
        additionalTSCode: `
        type int = number;
        type long = number;
        type Bool = boolean;
        namespace cc
        {
            export class DrawingPrimitive{}
            export class Texture2D{}
            export class DirectorDelegate{}
            export class Scale9Sprite extends Node {}
            export namespace color{}
            export namespace loader{}
            export namespace Codec{}
            export namespace inputManager{}
        }
        namespace ccui
        {
            import Scale9Sprite = cc.Scale9Sprite;
            export { Scale9Sprite }
        }
        namespace ccs
        {
            export class Shape{}
        }
        `,
        tsOptions: {
            outFile: "build/cocos2d.d.ts",
        },
        assignmentPluginOptions: { breakChain: true },
        functionPluginOptions: {
            removeNames: ["_createRenderCmd", "features", "VertexType","_registerAccelerometerEvent"],
            omitCallNames: { require: "{}" },
            normalizeSignatureMethodNames: ["init", "initWithString", "initWithDuration", "initWithAction", "initWithFile", "startWithTarget", "onTouchBegan", "onTouchCancelled", "onEnter"]
        },
        classPluginOptions: {
            classCreators: [
                `cc.Class.extend(${ClassPluginPlaceholder.Body})`,
                `ccs.Class.extend(${ClassPluginPlaceholder.Body})`,
                `${ClassPluginPlaceholder.Extend}.extend(${ClassPluginPlaceholder.Body})`,
            ],
        },
        namespacePluginOptions: {
            globalVarMap: {
                cc: "cc",
                cclegacy: "cclegacy",
                ccui: "ccui",
                ccs: "ccs",
            },
            prevertParseNames: ["prototype", "create", "_tmp", "_LogInfos", "Scale9Sprite"],
            removeGlobalVars: ["_p", "__extends", "proto", "sp", "spine"],
        },
        tsIgnorePluginOptions: {
            classDeclaration: (_, p) => p && "We need to ignore the TS2416 error because cocos2d uses the same static factory method name \"create\" to create objects, which is not currently supported by Typescript.",
            classElement: (n, _, e) =>
                (n === "ParallaxNode" && e === "addChild")
                    || (n === "ArmatureAnimation" && e === "play")
                    || (n === "Tween" && e === "play")
                    ? "We need to ignore the TS2416 error because cocos2d uses different signatures at different inheritance levels." : undefined
        },
        tsdReplacer: (code) => {
            return code
                .replace(/Uint8Array<.*>/g, "Uint8Array")
                .replace(/Float32Array<.*>/g, "Float32Array")
                .replace(/Uint32Array<.*>/g, "Uint32Array")
                .replace(/override /g, "")
        }
    });
})()