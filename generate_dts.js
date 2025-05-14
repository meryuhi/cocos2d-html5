// @ts-check
const { generateDeclaration, Placeholder } = require("@techcross/ts-migrate");
const fs = require("fs");
const moduleConfig = require("./moduleConfig.json");

/**
 * @param {string[]} files
 * @param {string[]} result
 */
function collectFiles(files, result) {
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
    const files = collectFiles(moduleConfig.module.extensions, []);
    await generateDeclaration(files, {
        tsOptions: {
            outFile: "build/cocos2d.d.ts",
        },
        methodDeclarationPluginOptions: {},
        classPluginOptions: {
            classCreator: `cc.Class.extend(${Placeholder.Body})`,
            classExtender: `${Placeholder.Name}.extend(${Placeholder.Body})`,
        },
        namespacePluginOptions: {
            globalVarMap: {
                cc: "cc",
                ccui: "ccui",
                cclegacy: "cclegacy",
            },
            topFunctionArgumentsRange: { min: -1, max: -1 },
            prevertParseNames: ["prototype", "_tmp"],
            removeGlobalVars: ["_p"]
        }
    });
})()