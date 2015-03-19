﻿var makefile =
{
    "Config": {
        "PROJECT_NAME": "CavoBoutique",
        "PROJECT_DISPLAY_NAME": "CavoBoutique",
        "PROJECT_PACKAGE": "com.mobilefx.CavoBoutique",
        "PROJECT_VERSION": "1.0.0",
        "PROJECT_VERSION_SHORT": "1.0",
        "PROJECT_FRAMEWORKS": "org.coconut2d.sdk.common;org.coconut2d.sdk.html5;org.coconut2d.sdk.webgl;org.coconut2d.sdk.anim;org.coconut2d.sdk.net;org.coconut2d.sdk.ui;org.coconut2d.sdk.server",
        "CONFIGURATION": "Debug",
        "DEBUG_HOST_IP": "192.168.1.184",
        "DEBUG_HOST_PORT": "9999",
        "TAGS": {
            "OG_COMPANY_ADDRESS": "52 Electras str",
            "OG_COMPANY_COUNTRY": "Greece",
            "OG_COMPANY_EMAIL": "info@mobilefx.com",
            "OG_COMPANY_NAME": "mobileFX",
            "OG_COMPANY_PHONE": "+302109522504",
            "OG_COMPANY_POSTCODE": "17673",
            "OG_COMPANY_REGION": "N. Attikis",
            "OG_COPYRIGHT": "Copyright (C) 2014 mobileFX, All Rights Reserved",
            "OG_CURRENCY": "Eur",
            "OG_DEMO_VIDEO_HEIGHT": "385",
            "OG_DEMO_VIDEO_URL": "http://www.youtube.com/mobileFX",
            "OG_DEMO_VIDEO_WIDTH": "640",
            "OG_DESCRIPTION": "mobileFX presents CavoBoutique",
            "OG_PRICE": "Free",
            "OG_PUBLISHER": "mobileFX",
            "OG_TITLE": "CavoBoutique",
            "OG_HOST": "http://www.mobilefx.com/games",
            "OG_URL": "http://www.mobilefx.com/games/CavoBoutique.html"
        },
        "FACEBOOK": {
            "APPID": "1517024211872165"
        },
        "PROJECT_PATHS": {
            "TARGETS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.targets",
            "SDK": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK",
            "SOURCES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/src",
            "NATIVE_COMMON": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.targets/native/_Common",
            "SOURCES_MASK": "*.jspp",
            "ANIMATION_SCRIPTS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/src/animations",
            "ICON_2048x2048": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/icon.png",
            "ASSETS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets",
            "ASSETS_ANIMATIONS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/animations",
            "ASSETS_FONTS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/fonts",
            "ASSETS_IMAGES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/images",
            "ASSETS_SOUNDS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/sounds",
            "ASSETS_VIDEOS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/videos"
        },
        "DEVICE_VIEWPORT": {
            "VIEW_WIDTH": "0",
            "VIEW_HEIGHT": "0",
            "VIEW_PIXEL_RATIO": "0"
        },
        "TARGETS": {
            "node.js": {
                "TARGET_INPUT_SOURCES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server",
                "TARGET_ROOT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server",
                "TARGET_CLIENT_OBJ": "obj",
                "TARGET_SERVER_OBJ": "objs",
                "TARGET_OBJ": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/objs",
                "TARGET_OUTPUT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/node.js",
                "TARGET_CLEAN": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/obj;D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/objs",
                "TARGET_EXPORT": "nodejs",
                "TARGET_ADDITIONAL_FRAMEWORKS": null,
                "TARGET_ADDITIONAL_NATIVE_SOURCES": null,
                "TARGET_CLIENT_FRAMEWORKS": "org.coconut2d.sdk.common;org.coconut2d.sdk.net",
                "TARGET_NATIVE_MASK": null,
                "TARGET_RESOURCES_MASK": null,
                "RELOAD_AFTER_BUILD": true,
                "DEVICE_WRAPPER": {
                    "CLASS": "JAVASCRIPT",
                    "PATH": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers/web/node.js",
                    "TEMPLATES": "node.js;web.config;node_start.cmd",
                    "TEMPLATE_EXCLUDE_VARS": null
                },
                "DEVICES": {
                    "Chrome": {
                        "Debugger": "Debugger_NodeJS",
                        "Debug": "<C:/Program Files (x86)/Google/Chrome/Application/chrome.exe> <http://192.168.1.184> --flag-switches-begin --js-flags=<--harmony --harmony_symbols --harmony_typeof> -–allow-file-access-from-files --always-enable-dev-tools --debug-packed-apps --disable-breakpad --disable-desktop-notifications --disable-extensions --disable-new-tab-first-run --disable-restore-background-contents --disable-translate --enable-webgl --enable-accelerated-2d-canvas --enable-accelerated-filters --enable-accelerated-painting --enable-compact-navigation --enable-devtools-experiments --enable-experimental-extension-apis --enable-experimental-webkit-features --enable-new-dialog-style --enable-smooth-scrolling --enable-sync-favicons --keep-mouse-cursor --noerrdialogs --no-first-run --disable-application-cache --allow-running-insecure-content --sync-keystore-encryption --user-data-dir=remote-profile --flag-switches-end",
                        "Release": "<C:/Program Files (x86)/Google/Chrome/Application/chrome.exe> <http://192.168.1.184> --flag-switches-begin --js-flags=<--harmony --harmony_symbols --harmony_typeof> -–allow-file-access-from-files --always-enable-dev-tools --debug-packed-apps --disable-breakpad --disable-desktop-notifications --disable-extensions --disable-new-tab-first-run --disable-restore-background-contents --disable-translate --enable-webgl --enable-accelerated-2d-canvas --enable-accelerated-filters --enable-accelerated-painting --enable-compact-navigation --enable-devtools-experiments --enable-experimental-extension-apis --enable-experimental-webkit-features --enable-new-dialog-style --enable-smooth-scrolling --enable-sync-favicons --keep-mouse-cursor --noerrdialogs --no-first-run --disable-application-cache --allow-running-insecure-content --sync-keystore-encryption --user-data-dir=remote-profile --flag-switches-end"
                    },
                    "FireFox": {
                        "Debugger": "Debugger_NodeJS",
                        "Debug": "<C:/Program Files (x86)/Mozilla Firefox/firefox.exe> -jsconsole -url <http://192.168.1.184>",
                        "Release": "<C:/Program Files (x86)/Mozilla Firefox/firefox.exe> -url <http://192.168.1.184>"
                    },
                    "Internet Explorer": {
                        "Debugger": "Debugger_NodeJS",
                        "Debug": "<C:/Program Files/Internet Explorer/iexplore.exe> <http://192.168.1.184>",
                        "Release": "<C:/Program Files/Internet Explorer/iexplore.exe> <http://192.168.1.184>"
                    },
                    "Safari": {
                        "Debugger": "Debugger_NodeJS",
                        "Debug": "<C:/Program Files (x86)/Safari/Safari.exe> -jsconsole -url <http://192.168.1.184>",
                        "Release": "<C:/Program Files (x86)/Safari/Safari.exe> -url <http://192.168.1.184>"
                    }
                },
                "APP_ICONS": {
                    "16": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/favicon.ico",
                    "72": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-72x72.png",
                    "76": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-76x76.png",
                    "114": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-114x114.png",
                    "120": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-120x120.png",
                    "144": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-144x144.png",
                    "152": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-152x152.png"
                }
            }
        }
    },
    "Vars": {
        "APP_PATH": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio",
        "USERPROFILE": "C:/Users/admin",
        "TARGET": "node.js",
        "TARGET_ROOT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server",
        "TARGET_DEVICE": "Chrome",
        "CHROME_DEBUG_PORT": "9999",
        "TARGET_OUTPUT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/node.js",
        "SURFACE_WIDTH": "480",
        "SURFACE_HEIGHT": "320",
        "LOCALHOST_IP": "192.168.1.184",
        "ACTIVE_DEVICE_ID": "",
        "ANDROID_APK": "",
        "APK": "",
        "ANDROID_DEBUG_PORT": "5039",
        "ANDROID_ACTIVITY": "com.mobilefx.CavoBoutique.MainActivity",
        "ANDROID_PACKAGE": "com.mobilefx.CavoBoutique",
        "APK_PACKAGE": "com.mobilefx.CavoBoutique",
        "ADB": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/android-sdk/platform-tools/adb.exe",
        "NDK_GDB": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/android-ndk/ndk-gdb-py.cmd",
        "ABI_ARCH": "armeabi-v7a",
        "PROJECT_NAME": "CavoBoutique",
        "PROJECT_DISPLAY_NAME": "CavoBoutique",
        "PROJECT_PACKAGE": "com.mobilefx.CavoBoutique",
        "PROJECT_VERSION": "1.0.0",
        "PROJECT_VERSION_SHORT": "1.0",
        "PROJECT_FRAMEWORKS": "org.coconut2d.sdk.common;org.coconut2d.sdk.html5;org.coconut2d.sdk.webgl;org.coconut2d.sdk.anim;org.coconut2d.sdk.net;org.coconut2d.sdk.ui;org.coconut2d.sdk.server",
        "CONFIGURATION": "Debug",
        "DEBUG_HOST_IP": "192.168.1.184",
        "DEBUG_HOST_PORT": "9999",
        "TAGS.OG_COMPANY_ADDRESS": "52 Electras str",
        "TAGS.OG_COMPANY_COUNTRY": "Greece",
        "TAGS.OG_COMPANY_EMAIL": "info@mobilefx.com",
        "TAGS.OG_COMPANY_NAME": "mobileFX",
        "TAGS.OG_COMPANY_PHONE": "+302109522504",
        "TAGS.OG_COMPANY_POSTCODE": "17673",
        "TAGS.OG_COMPANY_REGION": "N. Attikis",
        "TAGS.OG_COPYRIGHT": "Copyright (C) 2014 mobileFX, All Rights Reserved",
        "TAGS.OG_CURRENCY": "Eur",
        "TAGS.OG_DEMO_VIDEO_HEIGHT": "385",
        "TAGS.OG_DEMO_VIDEO_URL": "http://www.youtube.com/mobileFX",
        "TAGS.OG_DEMO_VIDEO_WIDTH": "640",
        "TAGS.OG_DESCRIPTION": "mobileFX presents CavoBoutique",
        "TAGS.OG_PRICE": "Free",
        "TAGS.OG_PUBLISHER": "mobileFX",
        "TAGS.OG_TITLE": "CavoBoutique",
        "TAGS.OG_HOST": "http://www.mobilefx.com/games",
        "TAGS.OG_URL": "http://www.mobilefx.com/games/CavoBoutique.html",
        "FACEBOOK.APPID": "1517024211872165",
        "PROJECT_PATHS.TARGETS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.targets",
        "PROJECT_PATHS.SDK": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK",
        "PROJECT_PATHS.SOURCES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/src",
        "PROJECT_PATHS.NATIVE_COMMON": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.targets/native/_Common",
        "PROJECT_PATHS.SOURCES_MASK": "*.jspp",
        "PROJECT_PATHS.ANIMATION_SCRIPTS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/src/animations",
        "PROJECT_PATHS.ICON_2048x2048": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/icon.png",
        "PROJECT_PATHS.ASSETS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets",
        "PROJECT_PATHS.ASSETS_ANIMATIONS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/animations",
        "PROJECT_PATHS.ASSETS_FONTS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/fonts",
        "PROJECT_PATHS.ASSETS_IMAGES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/images",
        "PROJECT_PATHS.ASSETS_SOUNDS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/sounds",
        "PROJECT_PATHS.ASSETS_VIDEOS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/assets/videos",
        "DEVICE_VIEWPORT.VIEW_WIDTH": "0",
        "DEVICE_VIEWPORT.VIEW_HEIGHT": "0",
        "DEVICE_VIEWPORT.VIEW_PIXEL_RATIO": "0",
        "TARGETS.node.js.TARGET_INPUT_SOURCES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server",
        "TARGETS.node.js.TARGET_ROOT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server",
        "TARGETS.node.js.TARGET_CLIENT_OBJ": "obj",
        "TARGETS.node.js.TARGET_SERVER_OBJ": "objs",
        "TARGETS.node.js.TARGET_OBJ": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/objs",
        "TARGETS.node.js.TARGET_OUTPUT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/node.js",
        "TARGETS.node.js.TARGET_CLEAN": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/obj;D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/objs",
        "TARGETS.node.js.TARGET_EXPORT": "nodejs",
        "TARGETS.node.js.TARGET_CLIENT_FRAMEWORKS": "org.coconut2d.sdk.common;org.coconut2d.sdk.net",
        "TARGETS.node.js.RELOAD_AFTER_BUILD": "true",
        "TARGETS.node.js.DEVICE_WRAPPER.CLASS": "JAVASCRIPT",
        "TARGETS.node.js.DEVICE_WRAPPER.PATH": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers/web/node.js",
        "TARGETS.node.js.DEVICE_WRAPPER.TEMPLATES": "node.js;web.config;node_start.cmd",
        "TARGETS.node.js.DEVICES.Chrome.Debugger": "Debugger_NodeJS",
        "TARGETS.node.js.DEVICES.Chrome.Debug": "<C:/Program Files (x86)/Google/Chrome/Application/chrome.exe> <http://192.168.1.184> --flag-switches-begin --js-flags",
        "TARGETS.node.js.DEVICES.Chrome.Release": "<C:/Program Files (x86)/Google/Chrome/Application/chrome.exe> <http://192.168.1.184> --flag-switches-begin --js-flags",
        "TARGETS.node.js.DEVICES.FireFox.Debugger": "Debugger_NodeJS",
        "TARGETS.node.js.DEVICES.FireFox.Debug": "<C:/Program Files (x86)/Mozilla Firefox/firefox.exe> -jsconsole -url <http://192.168.1.184>",
        "TARGETS.node.js.DEVICES.FireFox.Release": "<C:/Program Files (x86)/Mozilla Firefox/firefox.exe> -url <http://192.168.1.184>",
        "TARGETS.node.js.DEVICES['Internet Explorer'].Debugger": "Debugger_NodeJS",
        "TARGETS.node.js.DEVICES['Internet Explorer'].Debug": "<C:/Program Files/Internet Explorer/iexplore.exe> <http://192.168.1.184>",
        "TARGETS.node.js.DEVICES['Internet Explorer'].Release": "<C:/Program Files/Internet Explorer/iexplore.exe> <http://192.168.1.184>",
        "TARGETS.node.js.DEVICES.Safari.Debugger": "Debugger_NodeJS",
        "TARGETS.node.js.DEVICES.Safari.Debug": "<C:/Program Files (x86)/Safari/Safari.exe> -jsconsole -url <http://192.168.1.184>",
        "TARGETS.node.js.DEVICES.Safari.Release": "<C:/Program Files (x86)/Safari/Safari.exe> -url <http://192.168.1.184>",
        "TARGETS.node.js.APP_ICONS.16": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/favicon.ico",
        "TARGETS.node.js.APP_ICONS.72": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-72x72.png",
        "TARGETS.node.js.APP_ICONS.76": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-76x76.png",
        "TARGETS.node.js.APP_ICONS.114": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-114x114.png",
        "TARGETS.node.js.APP_ICONS.120": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-120x120.png",
        "TARGETS.node.js.APP_ICONS.144": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-144x144.png",
        "TARGETS.node.js.APP_ICONS.152": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.server/apple-touch-icon-152x152.png",
        "PATH_IDE": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio",
        "PATH_3RD_PARTY": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party",
        "PATH_3RD_PARTY_MAKE": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/make",
        "PATH_3RD_PARTY_CLOSURE": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/closure",
        "PATH_3RD_PARTY_FFMPEG": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/ffmpeg",
        "PATH_3RD_PARTY_FIGLET": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/figlet",
        "PATH_3RD_PARTY_GRAPHVIZ": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/graphviz",
        "PATH_3RD_PARTY_GIT": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/git",
        "PATH_3RD_PARTY_JSON": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/json",
        "PATH_3RD_PARTY_LIBMOBILEDEVICE": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/libmobiledevice",
        "PATH_3RD_PARTY_ANT": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/ant",
        "PATH_3RD_PARTY_JAVA": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/java",
        "PATH_3RD_PARTY_WINDBG": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/WinDBG",
        "PATH_3RD_PARTY_MINGW": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/MinGW",
        "PATH_3RD_PARTY_CLANG": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/Clang3.5S-Mingw64",
        "PATH_3RD_PARTY_GDB": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/MinGW/bin",
        "PATH_3RD_PARTY_EMSDK": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/emsdk",
        "PATH_3RD_PARTY_LLDB": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/LLDB",
        "PATH_3RD_PARTY_EMSCRIPTEN": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/emsdk/emscripten/1.12.0",
        "PATH_3RD_PARTY_LLVM": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/emsdk/clang/3.2_32bit",
        "PATH_3RD_PARTY_NODEJS": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/emsdk/node/0.10.17_32bit",
        "PATH_3RD_PARTY_PYTHON": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/emsdk/python/2.7.5.3_32bit",
        "PATH_3RD_PARTY_ANDROID_SDK": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/android-sdk",
        "PATH_3RD_PARTY_ANDROID_NDK": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/android-ndk",
        "PATH_3RD_PARTY_IOS_BUILD_ENV": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/3rd_party/iOS",
        "PATH_IDE_CONFIG": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/config",
        "FILE_PATH_SETTINGS_DEFAULT": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/config/settings.ini",
        "FILE_PATH_DEVICES_XML": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/config/devices.xml",
        "FILE_PATH_DATABASE_TEMPLATE": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/config/project.db",
        "PATH_IDE_DOCS": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/docs",
        "PATH_IDE_ICONS": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/icons",
        "PATH_IDE_CODEMAX_LANGUAGES": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/languages",
        "PATH_IDE_CODEMAX_MEMBERLISTS": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/memberlists",
        "FILE_PATH_SETTINGS_USER": "C:/Users/admin/Coconut2D/settings.ini",
        "PATH_SDK": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/.SDK",
        "FILE_PATH_SDK_FRAMEWORKS_REGISTRY": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/.SDK/Frameworks/Frameworks.json",
        "FILE_PATH_SDK_SHADERS_REGISTRY": "D:/mobileFX/Projects/Software/Coconut/IDE/Studio/etc/.SDK/Shaders/shaders.json",
        "PATH_SDK_DEVICE_WRAPPERS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers",
        "PATH_SDK_COMMON": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers/native/_Common",
        "PATH_SDK_INCLUDES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers/native/_Includes",
        "PATH_SDK_LIBRARIES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers/native/_Libraries",
        "PATH_SDK_FRAMEWORKS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks",
        "PATH_SDK_FRAMEWORKS_WEB": "web",
        "PATH_SDK_FRAMEWORKS_NATIVE": "native",
        "PATH_SDK_FRAMEWORKS_GEN": "gen",
        "PATH_SDK_FRAMEWORKS_SRC": "src",
        "PATH_SDK_FRAMEWORKS_LIB": "lib",
        "PATH_SDK_FRAMEWORKS_EMS": "ems",
        "PATH_SDK_TEMPLATES": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Templates",
        "PATH_SDK_TEMPLATE_COCO_PROJECT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Templates/Coco.Project",
        "FILE_PATH_TEMPLATE_PROJECT_JSON": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Templates/Coco.Project/project.json",
        "PATH_SDK_TEMPLATE_XCODE": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Templates/XCode.Project",
        "PATH_SDK_TEMPLATE_MSVC2010": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Templates/MSVC2010.Project",
        "PATH_SDK_TEMPLATE_ECLIPSE": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Templates/Eclipse.Project",
        "PATH_SDK_TOOLCHAIN": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Toolchain",
        "PATH_SDK_COMPILER": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Toolchain/Compiler",
        "PATH_SDK_DEBUGGER": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Toolchain/Debugger",
        "PATH_SDK_EXTERNS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Toolchain/Externs",
        "FILE_PATH_SDK_CRL_COCONUT2D_HPP": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/DeviceWrappers/native/_Common/Coconut2D.hpp",
        "PROJECT_ROOT": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project",
        "ORG.COCONUT2D.SDK.COMMON": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.common",
        "ORG.COCONUT2D.SDK.HTML5": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.html5",
        "ORG.COCONUT2D.SDK.WEBGL": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.webgl",
        "ORG.COCONUT2D.SDK.ANIM": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.anim",
        "ORG.COCONUT2D.SDK.NET": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.net",
        "ORG.COCONUT2D.SDK.SOCIAL": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.social",
        "ORG.COCONUT2D.SDK.UI": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.ui",
        "ORG.EMSCRIPTEN.BOX2D": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.emscripten.box2d",
        "ORG.COCONUT2D.SDK.GAME2D": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.game2d",
        "COM.VERMANTIA.GAME.SLOTS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/com.vermantia.game.slots",
        "ORG.COCONUT2D.SDK.TESTS": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.tests",
        "ORG.COCONUT2D.SDK.SERVER": "D:/mobileFX/Projects/Software/Coconut/Projects/CavoBoutique.project/.SDK/Frameworks/org.coconut2d.sdk.server",
        "TEXT_FILES": "*.mk;*.asp;*.c;*.cc;*.cpp;*.css;*.csv;*.cxx;*.doc;*.gdl;*.h;*.hh;*.hpp;*.hta;*.htc;*.htm;*.html;*.inc;*.include;*.j;*.java;*.javascript;*.jspp;*.js;*.jscript;*.glsl;*.json;*.jx;*.log;*.m;*.makefile;*.mx;*.mxx;*.pbxproj;*.pch;*.plist;*.strings;*.txt;*.xhtml;*.xml;*.xsd;*.xslt;*.bat;*.cmd;*.ini;*.mm;*.settings;*.jobj;*.md;*.lst;*.properties;*.conf;*.gdb;*.gitignore;*.njsp;*.setup;*.asa;*.gv;*.config"
    },
    "Components": {
        "Frameworks": {
            "org.coconut2d.sdk.common": {
                "Name": "Coconut2D Common Utility Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_COMMON",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.common",
                "Description": "",
                "Dependencies": "",
                "FSM": false,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32;node.js"
            },
            "org.coconut2d.sdk.html5": {
                "Name": "Coconut2D HTML5 Bindings Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_HTML5",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.html5",
                "Description": "",
                "Dependencies": "",
                "FSM": false,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.webgl": {
                "Name": "Coconut2D WebGL Bindings Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_WEBGL",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.webgl",
                "Description": "",
                "Dependencies": "",
                "FSM": false,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.anim": {
                "Name": "Coconut2D Core Animation Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_ANIMATION",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.anim",
                "Description": "",
                "Dependencies": "",
                "FSM": true,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.net": {
                "Name": "Coconut2D Core Network Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_NET",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.net",
                "Description": "",
                "Dependencies": "",
                "FSM": false,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.social": {
                "Name": "Coconut2D Social Networks Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_SOCIAL",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.social",
                "Description": "",
                "Dependencies": "",
                "FSM": false,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.ui": {
                "Name": "Coconut2D Core Application Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_APPLICATION",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.ui",
                "Description": "",
                "Dependencies": "org.coconut2d.sdk.anim",
                "FSM": true,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.emscripten.box2d": {
                "Name": "Box2D Physics Engine",
                "Version": "2.1",
                "Type": "Emscripten Library",
                "Copyright": "Copyright (c) 2006-2010 Erin Catto - http://www.gphysics.com",
                "License": "zlib license + acknowledgement",
                "PrecompilerVarName": "EMS_BOX2D",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.emscripten.box2d",
                "Description": "Box2D is an open source C++ engine for simulating rigid bodies in 2D. Box2D is developed by Erin Catto and has the zlib license. While the zlib license does not require acknowledgement, we encourage you to give credit to Box2D in your product.",
                "Dependencies": "org.coconut2d.sdk.anim",
                "Include": "Box2D/Box2D.h",
                "FSM": false,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.game2d": {
                "Name": "Coconut2D Core 2D Game Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_GAME2D",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.game2d",
                "Description": "",
                "Dependencies": "org.coconut2d.sdk.anim",
                "FSM": true,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "com.vermantia.game.slots": {
                "Name": "Vermantia 2D Slot Machine Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2015, Vermantia. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_GAME_SLOTS",
                "Path": "$(PATH_SDK_FRAMEWORKS)/com.vermantia.game.slots",
                "Description": "",
                "Dependencies": "org.coconut2d.sdk.anim",
                "FSM": true,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.tests": {
                "Name": "Coconut2D Tests Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_ANIMATION",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.tests",
                "Description": "",
                "Dependencies": "",
                "FSM": true,
                "Platforms": "CocoPlayer;HTML5;Android;iOS;Win32"
            },
            "org.coconut2d.sdk.server": {
                "Name": "Coconut2D Core Server Framework",
                "Version": "0.1",
                "Type": "CocoScript",
                "Copyright": "Copyright (C) 2014, mobileFX. All Rights Reserved",
                "License": "MIT",
                "PrecompilerVarName": "COCONUT2D_SERVER",
                "Path": "$(PATH_SDK_FRAMEWORKS)/org.coconut2d.sdk.server",
                "Description": "",
                "Dependencies": "",
                "FSM": false,
                "Platforms": "node.js"
            }
        }
    }
};