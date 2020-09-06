export default {
    version: "2.5.1",
    build: 2009060,

    optimizeUrl: "https://gitee.com/kirainmoe/hasee-tongfang-macos/raw/scripts/sleep.sh",
    HiDPIUrl: "https://gitee.com/kirainmoe/static-files/raw/master/hidpi.sh",
    fnDaemonUrl:
        "https://gitee.com/kirainmoe/hasee-tongfang-macos/raw/scripts/install_daemon.sh",
    itlwmUrl: 'https://api-aliyun.kirainmoe.com:2333/itlwm.zip',

    supported_machine: [
        {
            brand: '通用 (General for all brands)',
            vendorTag: 'tongfang',
            models: [
                {
                    model: "Tongfang GK5CN6X / GK5CN5X (8th gen)",
                    barebone: "GK5CN6X"
                },
                {
                    model: "Tongfang GK5CN5Z / GK5CN6Z (8th gen)",
                    barebone: "GK5CN6Z"
                },
                {
                    model: "Tongfang GJ5CN64 (8th gen)",
                    barebone: "GJ5CN64"
                },
                {
                    model: "Tongfang GI5CN54 (8th gen)",
                    barebone: "GI5CN54"
                },
                {
                    model: "Tongfang GK7CP6R / GK7CR0V (9th gen)",
                    barebone: "GK7CP6R"
                },
                {
                    model: "Tongfang GK5CP6Z / GK5CP5Z (9th gen)",
                    barebone: "GK5CP6Z"
                },                
                {
                    model: "Tongfang GK5CP6X / GK5CP5X (9th gen)",
                    barebone: "GK5CP6X"
                },
                {
                    model: "Tongfang GK5CP6V / GK5CP5V (9th gen)",
                    barebone: "GK5CP6V"
                }          
            ]
        },        
        {
            brand: "神舟 (Hasee)",
            vendorTag: 'hasee',
            models: [
                {
                    model: "神舟战神 Z7-KP7GZ",
                    barebone: "GK5CN6X"
                },
                {
                    model: "神舟战神 Z7-KP7Z",
                    barebone: "GK5CN6X"
                },
                {
                    model: "神舟战神 Z7M-KP7GZ",
                    barebone: "GK5CN5X"
                },

                {
                    model: "神舟战神 Z7M-KP7Z",
                    barebone: "GK5CN5X"
                },
                {
                    model: "神舟战神 Z7M-KP5GZ",
                    barebone: "GK5CN5X"
                },

                {
                    model: "神舟战神 Z7M-KP5Z",
                    barebone: "GK5CN5X"
                },
                {
                    model: "神舟战神 Z7-KP7EC",
                    barebone: "GJ5CN64"
                },
                {
                    model: "神舟战神 Z7-KP7GC",
                    barebone: "GJ5CN64"
                },
                {
                    model: "神舟战神 Z7-KP7GA",
                    barebone: "GJ5CN64"
                },
                {
                    model: "神舟战神 Z7-KP7GE",
                    barebone: "GJ5CN64"
                },
                {
                    model: "神舟战神 Z7-KP7GH",
                    barebone: "GJ5CN64"
                },
                {
                    model: "神舟战神 Z7M-KP7GC",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7M-KP5GC",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7-CT7GK",
                    barebone: "GK7CP6R"
                },
                {
                    model: "神舟战神 Z7-CT5GA",
                    barebone: "GK7CP6R"
                },
                {
                    model: "神舟战神 Z7-CT7VH",
                    barebone: "GK7CP6R"
                },
                {
                    model: "神舟战神 Z7-CT7VA",
                    barebone: "GK7CP6R"
                },
                {
                    model: "神舟战神 G7-CT7VK",
                    barebone: "GK7CP6R"
                },
                {
                    model: "神舟战神 Z7M-CT7GS",
                    barebone: "GK5CP6X"
                },
                {
                    model: "神舟战神 Z7M-CT5GA",
                    barebone: "GK5CP6X"
                },
                {
                    model: "神舟战神 Z7M-KP7GA",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7M-KP5GA",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7M-KP7GE",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7M-KP5GE",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7M-KP7GH",
                    barebone: "GI5CN54"
                },
                {
                    model: "神舟战神 Z7M-KP5GH",
                    barebone: "GI5CN54"
                }
            ]
        },
        {
            brand: "炫龙 (Shinelon)",
            vendorTag: 'shinelon',
            models: [
                {
                    model: "炫龙 耀7000",
                    barebone: "GK5CN5X"
                },
                {
                    model: "炫龙 耀9000 II",
                    barebone: "GK5CN6X"
                },
                {
                    model: "炫龙 T3Ti - 710S5R (实验性)",
                    barebone: "GK7CP6R"
                }, 
                {
                    model: "炫龙 T3Ti - 710S5V (实验性)",
                    barebone: "GK5CP6X"
                }, 
                {
                    model: "炫龙 T3Ti - 510S5V (实验性)",
                    barebone: "GK5CP6X"
                },                                 
                {
                    model: "炫龙 T2Ti (实验性)",
                    barebone: "GI5CN54"
                },                                        
            ]
        },
        {
            brand: '机械革命 (Mechrevo)',
            vendorTag: 'mechrevo',
            models: [
                {
                    model: "机械革命 Z2 系列 (8 代)",
                    barebone: "GK5CN6Z"
                },
                {
                    model: "机械革命 Z2 Air (8 代)",
                    barebone: "GK5CN6X"
                },
                {
                    model: "机械革命 Z2-G 系列 (9 代)",
                    barebone: "GK5CP6Z"
                },                
                {
                    model: "机械革命 Z2 Air-G (9 代)",
                    barebone: "GK5CP6X"
                },
                {
                    model: "机械革命 X3",
                    barebone: "GK7CP6R"
                },
                {
                    model: "机械革命 X8Ti（实验性）",
                    barebone: "GK5CN5Z"
                }                                            
            ]
        },
        {
            brand: 'Monster (Turkey Reseller)',
            vendorTag: 'monster',
            models: [
                {
                    model: 'Monster Abra A7 v10.1 (Tested by Se7Touch)',
                    barebone: 'GK7CN6S'
                },
                {
                    model: 'Monster Abra A5 v13.4 (Tested by ugurrdemirel)',
                    barebone: 'GK7CN6S'
                },
                {
                    model: "Monster Tulpar T7 v19.3 (Tested by Se7Touch)",
                    barebone: 'GK7CP6R'
                },
                {
                    model: "Monster Tulpar T7 V20.1 (Tested by sutsurup)",
                    barebone: 'GK7CP6R'
                }
            ]
        },
        {
            brand: 'EVDO',
            vendorTag: 'tongfang',
            models: [
                {
                    model: 'EVOO 15.6" model laptops LP4/LP5 (Tested by EricHemingway)',
                    barebone: 'GK5CP6X'
                }
            ]
        }
    ],

    download_url: {
        bitbucket: "https://bitbucket.org/ayamita/hasee-tongfang-macos/get/oc-general.zip",
        github: "https://github.com/kirainmoe/hasee-tongfang-macos/archive/oc-general.zip",
        jsdelivr: "https://cdn.jsdelivr.net/gh/kirainmoe/hasee-tongfang-macos-build/hasee-tongfang-macos"
    }
};
