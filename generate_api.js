/**
 * cc.view is the shared view object.
 * @type {cc.EGLView}
 * @name cc.view
 * @memberof cc
 */
cc.view = cc.EGLView._getInstance();

/**
 * @type {cc.Director}
 * @name cc.director
 * @memberof cc
 */
cc.director = cc.Director._getInstance();
/**
 * cc.winSize is the alias object for the size of the current game window.
 * @type {cc.Size}
 * @name cc.winSize
 * @memberof cc
 */
cc.winSize = cc.director.getWinSize();

(function(){
    /**
     * System variables
     * @name cc.sys
     */
    var sys = cc.sys;

    /**
     * English language code
     * @memberof cc.sys
     * @name LANGUAGE_ENGLISH
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_ENGLISH = "en";

    /**
     * Chinese language code
     * @memberof cc.sys
     * @name LANGUAGE_CHINESE
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_CHINESE = "zh";

    /**
     * French language code
     * @memberof cc.sys
     * @name LANGUAGE_FRENCH
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_FRENCH = "fr";

    /**
     * Italian language code
     * @memberof cc.sys
     * @name LANGUAGE_ITALIAN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_ITALIAN = "it";

    /**
     * German language code
     * @memberof cc.sys
     * @name LANGUAGE_GERMAN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_GERMAN = "de";

    /**
     * Spanish language code
     * @memberof cc.sys
     * @name LANGUAGE_SPANISH
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_SPANISH = "es";

    /**
     * Spanish language code
     * @memberof cc.sys
     * @name LANGUAGE_DUTCH
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_DUTCH = "du";

    /**
     * Russian language code
     * @memberof cc.sys
     * @name LANGUAGE_RUSSIAN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_RUSSIAN = "ru";

    /**
     * Korean language code
     * @memberof cc.sys
     * @name LANGUAGE_KOREAN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_KOREAN = "ko";

    /**
     * Japanese language code
     * @memberof cc.sys
     * @name LANGUAGE_JAPANESE
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_JAPANESE = "ja";

    /**
     * Hungarian language code
     * @memberof cc.sys
     * @name LANGUAGE_HUNGARIAN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_HUNGARIAN = "hu";

    /**
     * Portuguese language code
     * @memberof cc.sys
     * @name LANGUAGE_PORTUGUESE
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_PORTUGUESE = "pt";

    /**
     * Arabic language code
     * @memberof cc.sys
     * @name LANGUAGE_ARABIC
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_ARABIC = "ar";

    /**
     * Norwegian language code
     * @memberof cc.sys
     * @name LANGUAGE_NORWEGIAN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_NORWEGIAN = "no";

    /**
     * Polish language code
     * @memberof cc.sys
     * @name LANGUAGE_POLISH
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_POLISH = "pl";

    /**
     * Unknown language code
     * @memberof cc.sys
     * @name LANGUAGE_UNKNOWN
     * @constant
     * @type {Number}
     */
    sys.LANGUAGE_UNKNOWN = "unkonwn";

    /**
     * @memberof cc.sys
     * @name OS_IOS
     * @constant
     * @type {string}
     */
    sys.OS_IOS = "iOS";
    /**
     * @memberof cc.sys
     * @name OS_ANDROID
     * @constant
     * @type {string}
     */
    sys.OS_ANDROID = "Android";
    /**
     * @memberof cc.sys
     * @name OS_WINDOWS
     * @constant
     * @type {string}
     */
    sys.OS_WINDOWS = "Windows";
    /**
     * @memberof cc.sys
     * @name OS_MARMALADE
     * @constant
     * @type {string}
     */
    sys.OS_MARMALADE = "Marmalade";
    /**
     * @memberof cc.sys
     * @name OS_LINUX
     * @constant
     * @type {string}
     */
    sys.OS_LINUX = "Linux";
    /**
     * @memberof cc.sys
     * @name OS_BADA
     * @constant
     * @type {string}
     */
    sys.OS_BADA = "Bada";
    /**
     * @memberof cc.sys
     * @name OS_BLACKBERRY
     * @constant
     * @type {string}
     */
    sys.OS_BLACKBERRY = "Blackberry";
    /**
     * @memberof cc.sys
     * @name OS_OSX
     * @constant
     * @type {string}
     */
    sys.OS_OSX = "OS X";
    /**
     * @memberof cc.sys
     * @name OS_WP8
     * @constant
     * @type {string}
     */
    sys.OS_WP8 = "WP8";
    /**
     * @memberof cc.sys
     * @name OS_WINRT
     * @constant
     * @type {string}
     */
    sys.OS_WINRT = "WINRT";
    /**
     * @memberof cc.sys
     * @name OS_UNKNOWN
     * @constant
     * @type {string}
     */
    sys.OS_UNKNOWN = "Unknown";

    /**
     * @memberof cc.sys
     * @name UNKNOWN
     * @constant
     * @default
     * @type {Number}
     */
    sys.UNKNOWN = -1;
    /**
     * @memberof cc.sys
     * @name WIN32
     * @constant
     * @default
     * @type {Number}
     */
    sys.WIN32 = 0;
    /**
     * @memberof cc.sys
     * @name LINUX
     * @constant
     * @default
     * @type {Number}
     */
    sys.LINUX = 1;
    /**
     * @memberof cc.sys
     * @name MACOS
     * @constant
     * @default
     * @type {Number}
     */
    sys.MACOS = 2;
    /**
     * @memberof cc.sys
     * @name ANDROID
     * @constant
     * @default
     * @type {Number}
     */
    sys.ANDROID = 3;
    /**
     * @memberof cc.sys
     * @name IOS
     * @constant
     * @default
     * @type {Number}
     */
    sys.IPHONE = 4;
    /**
     * @memberof cc.sys
     * @name IOS
     * @constant
     * @default
     * @type {Number}
     */
    sys.IPAD = 5;
    /**
     * @memberof cc.sys
     * @name BLACKBERRY
     * @constant
     * @default
     * @type {Number}
     */
    sys.BLACKBERRY = 6;
    /**
     * @memberof cc.sys
     * @name NACL
     * @constant
     * @default
     * @type {Number}
     */
    sys.NACL = 7;
    /**
     * @memberof cc.sys
     * @name EMSCRIPTEN
     * @constant
     * @default
     * @type {Number}
     */
    sys.EMSCRIPTEN = 8;
    /**
     * @memberof cc.sys
     * @name TIZEN
     * @constant
     * @default
     * @type {Number}
     */
    sys.TIZEN = 9;
    /**
     * @memberof cc.sys
     * @name WINRT
     * @constant
     * @default
     * @type {Number}
     */
    sys.WINRT = 10;
    /**
     * @memberof cc.sys
     * @name WP8
     * @constant
     * @default
     * @type {Number}
     */
    sys.WP8 = 11;
    /**
     * @memberof cc.sys
     * @name MOBILE_BROWSER
     * @constant
     * @default
     * @type {Number}
     */
    sys.MOBILE_BROWSER = 100;
    /**
     * @memberof cc.sys
     * @name DESKTOP_BROWSER
     * @constant
     * @default
     * @type {Number}
     */
    sys.DESKTOP_BROWSER = 101;

    sys.BROWSER_TYPE_WECHAT = "wechat";
    sys.BROWSER_TYPE_ANDROID = "androidbrowser";
    sys.BROWSER_TYPE_IE = "ie";
    sys.BROWSER_TYPE_QQ_APP = "qq"; // QQ App
    sys.BROWSER_TYPE_QQ = "qqbrowser";
    sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
    sys.BROWSER_TYPE_UC = "ucbrowser";
    sys.BROWSER_TYPE_360 = "360browser";
    sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
    sys.BROWSER_TYPE_BAIDU = "baidubrowser";
    sys.BROWSER_TYPE_MAXTHON = "maxthon";
    sys.BROWSER_TYPE_OPERA = "opera";
    sys.BROWSER_TYPE_OUPENG = "oupeng";
    sys.BROWSER_TYPE_MIUI = "miuibrowser";
    sys.BROWSER_TYPE_FIREFOX = "firefox";
    sys.BROWSER_TYPE_SAFARI = "safari";
    sys.BROWSER_TYPE_CHROME = "chrome";
    sys.BROWSER_TYPE_LIEBAO = "liebao";
    sys.BROWSER_TYPE_QZONE = "qzone";
    sys.BROWSER_TYPE_SOUGOU = "sogou";
    sys.BROWSER_TYPE_UNKNOWN = "unknown";
    /**
     * Is native ? This is set to be true in jsb auto.
     * @memberof cc.sys
     * @name isNative
     * @type {Boolean}
     */
    sys.isNative = false;
    /**
     * Indicate whether system is mobile system
     * @memberof cc.sys
     * @name isMobile
     * @type {Boolean}
     */
    sys.isMobile = /mobile|android|iphone|ipad/.test(ua);
    /**
     * Indicate the running platform
     * @memberof cc.sys
     * @name platform
     * @type {Number}
     */
    sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
    /**
     * Indicate the current language of the running system
     * @memberof cc.sys
     * @name language
     * @type {String}
     */
    sys.language = currLanguage;
    /**
     * Indicate the running os name
     * @memberof cc.sys
     * @name os
     * @type {String}
     */
    sys.os = osName;
    /**
     * Indicate the running os version string
     * @memberof cc.sys
     * @name osVersion
     * @type {String}
     */
    sys.osVersion = osVersion;
    /**
     * Indicate the running os main version number
     * @memberof cc.sys
     * @name osMainVersion
     * @type {Number}
     */
    sys.osMainVersion = osMainVersion;

    /**
     * Indicate the running browser type
     * @memberof cc.sys
     * @name browserType
     * @type {String}
     */
    sys.browserType = sys.BROWSER_TYPE_UNKNOWN;

    /**
     * Indicate the running browser version
     * @memberof cc.sys
     * @name browserVersion
     * @type {String}
     */
    sys.browserVersion = "";
    /**
     * Indicate the real pixel resolution of the whole game window
     * @memberof cc.sys
     * @name windowPixelResolution
     * @type {Size}
     */
    sys.windowPixelResolution = {
        width: ratio * w,
        height: ratio * h
    };
    /**
     * Forces the garbage collection, only available in JSB
     * @memberof cc.sys
     * @name garbageCollect
     * @function
     */
    sys.garbageCollect = function () {
        // N/A in cocos2d-html5
    };

    /**
     * Dumps rooted objects, only available in JSB
     * @memberof cc.sys
     * @name dumpRoot
     * @function
     */
    sys.dumpRoot = function () {
        // N/A in cocos2d-html5
    };

    /**
     * Restart the JS VM, only available in JSB
     * @memberof cc.sys
     * @name restartVM
     * @function
     */
    sys.restartVM = function () {
        // N/A in cocos2d-html5
    };

    /**
     * Clean a script in the JS VM, only available in JSB
     * @memberof cc.sys
     * @name cleanScript
     * @param {String} jsfile
     * @function
     */
    sys.cleanScript = function (jsfile) {
        // N/A in cocos2d-html5
    };

    /**
     * Check whether an object is valid,
     * In web engine, it will return true if the object exist
     * In native engine, it will return true if the JS object and the correspond native object are both valid
     * @memberof cc.sys
     * @name isObjectValid
     * @param {Object} obj
     * @return {boolean} Validity of the object
     * @function
     */
    sys.isObjectValid = function (obj) {
    };

    /**
     * Dump system informations
     * @memberof cc.sys
     * @name dump
     * @function
     */
    sys.dump = function () {
    };

    /**
     * Open a url in browser
     * @memberof cc.sys
     * @name openURL
     * @param {String} url
     */
    sys.openURL = function(url){
    };

    /**
     * Get the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     * @memberof cc.sys
     * @name now
     * @return {Number}
     */
    sys.now = function () {
    };
})()