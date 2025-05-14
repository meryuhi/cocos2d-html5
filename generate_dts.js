// @ts-check
const { generateDeclaration, Placeholder } = require("@techcross/ts-migrate");
const { glob } = require("glob");

(async () => {
    await generateDeclaration([
        "cocos2d/core/event-manager/CCEventHelper.js",
        "CCDebugger.js",
        "cocos2d/core/utils/BinaryLoader.js",
        "Base64Images.js",
        "cocos2d/core/platform/CCClass.js",
        "cocos2d/core/platform/CCCommon.js",
        "cocos2d/core/cocoa/CCGeometry.js",
        "cocos2d/core/platform/CCSAXParser.js",
        "cocos2d/core/platform/CCLoaders.js",
        "cocos2d/core/platform/CCConfig.js",
        "cocos2d/core/platform/miniFramework.js",
        "cocos2d/core/platform/CCMacro.js",
        "cocos2d/core/platform/CCTypes.js",
        "cocos2d/core/platform/CCEGLView.js",
        "cocos2d/core/platform/CCScreen.js",
        "cocos2d/core/platform/CCVisibleRect.js",

        "cocos2d/core/platform/CCInputManager.js",
        "cocos2d/core/platform/CCInputExtension.js",

        "cocos2d/core/cocoa/CCAffineTransform.js",
        "cocos2d/core/support/CCPointExtension.js",

    ], {
        tsOptions: {
            outFile: "cocos2d.d.ts",
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
        }
    });
})()