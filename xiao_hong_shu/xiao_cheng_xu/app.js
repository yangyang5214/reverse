var e = require("@babel/runtime/helpers/interopRequireWildcard"), t = require("@babel/runtime/helpers/interopRequireDefault"), a = t(require("@babel/runtime/regenerator")), r = require("@babel/runtime/helpers/asyncToGenerator");

require("@babel/runtime/helpers/Arrayincludes"), require("@xhs/eaglet-mp/index");

var n = require("./http.config"), i = require("./routes"), o = require("./utils/http"), c = t(require("./utils/user")), u = require("./utils/track"), s = require("./utils/path"), l = t(require("./utils/api")), p = t(require("./utils/ab-test")), f = require("./utils/enum"), d = require("./utils/page"), g = require("./utils/string"), h = t(require("./utils/verify")), _ = t(require("./utils/usageTime")), m = e(require("./libs/@xhs/protobuf-mp-chakra-tracker/mp.js")), A = require("./services/verify");

wx.$eaglet.init({
    tracker: m
});

var b = require("./libs/fp");

function v(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !(!t || ![ f.HISTORY_SCENE, f.OTHER_MP_BACK_SCENE, f.MAIN_CHAT_SCENE ].includes(e)) || (e === f.SHARE_MEESAGE_SCENE || e === f.MAIN_CHAT_SCENE || e === f.HISTORY_SCENE) && e === f.SHARE_MEESAGE_SCENE;
}

function S() {
    l.default.getSystemInfo({
        success: function(e) {
            var t = e.SDKVersion;
            if ((0, g.compareVersion)(t, "1.9.91") >= 0) {
                var a = wx.getUpdateManager();
                a.onCheckForUpdate(function(e) {
                    e.hasUpdate && (a.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success: function(e) {
                                e.confirm && a.applyUpdate();
                            }
                        });
                    }), a.onUpdateFailed(function() {
                        wx.showToast({
                            title: "新版本下载失败",
                            icon: "none",
                            duration: 2e3
                        });
                    }));
                });
            }
        }
    });
}

(0, o.configure)({
    baseURL: n.config.BASE_URL.production,
    apiList: n.config.API_LIST
}), b.initConf({
    organization: "eR46sBuqF0fdw7KWFLYa",
    channel: "miniProgram"
}), App({
    globalData: {
        promise: new Promise(function(e) {
            p.default.checkReady() ? e() : p.default.AddQueue(e);
        }),
        canLaunchApp: !1,
        launchOps: null,
        scene: null,
        navigateToLoginPageCount: 0,
        navigateToLoginPageTime: null,
        isIPhoneX: !1,
        isLongScreen: !1,
        isIOS: !0,
        systemInfo: {},
        SMSdk: b,
        referrerInfo: {},
        noteFeedLaunched: !1,
        noteCommentLaunched: !1
    },
    $eagletAppMeta: {
        artifactName: "mewtwo",
        artifactVersion: function() {
            try {
                var e = wx.getAccountInfoSync().miniProgram, t = e.envVersion, a = e.version;
                return "release" === t ? a : t;
            } catch (e) {
                return "1.0.2";
            }
        }
    },
    $eagletGetUserInfo: function() {
        return new Promise(function(e) {
            e(c.default.getEagletUserInfo());
        });
    },
    onPageNotFound: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.path, a = e.query, r = function() {
            (0, s.redirectTo)("NotFound");
        };
        (0, u.trackApm)({
            action: "page_not_found",
            property: t
        });
        var n = JSON.parse(JSON.stringify(a)), o = (0, i.getCategoryByoldRoute)(t);
        if (o.category) {
            var c = o.isSwitchTab ? s.switchTab : s.redirectTo, l = o.isSwitchTab ? void 0 : n;
            r = function() {
                c(o.category, l);
            };
        } else (0, u.trackApm)({
            action: "page_not_found_failure",
            property: t
        });
        setTimeout(function() {
            r();
        }, 400);
    },
    initRequest: function() {
        o.interceptors.response.use(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e;
        }), o.interceptors.request.use(function(e) {
            var t = c.default.getSid(), a = "";
            try {
                a = b.getDeviceId(), e.header = e.header || {}, e.header["Device-Fingerprint"] = a;
            } catch (e) {
                console.error(e);
            }
            var r = !1;
            return n.NO_SID_API_LIST.some(function(t) {
                if (e.url.indexOf(t) > -1) return r = !0, !0;
            }), r || t && !e.url.includes("/fe_api/burdock") && "undefined" !== t && (e.params || (e.params = {}), 
            e.params.sid = t), e;
        });
    },
    initNewbie: function() {
        return r(a.default.mark(function e() {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (l.default.getStorageSync(f.STORAGE_KEY.NEWBIE_FLAG)) {
                        e.next = 4;
                        break;
                    }
                    return e.next = 4, l.default.setStorage({
                        key: f.STORAGE_KEY.NEWBIE_FLAG,
                        data: {
                            hintTapAvatarMine: !0,
                            hintTapAvatarNote: !0
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))();
    },
    initGlobalData: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e || {}, a = t.scene, r = t.path;
        this.globalData.launchOps = e, this.globalData.scene = a, this.globalData.canLaunchApp = v(a, this.globalData.canLaunchApp);
        var n = this;
        l.default.getSystemInfo({
            success: function(e) {
                n.globalData.isLongScreen = (0, d.getScreenRatio)(), n.globalData.isIPhoneX = e.model.search("iPhone X") >= 0, 
                n.globalData.isIOS = e.system.search("iOS") >= 0, n.globalData.systemInfo = e, (0, 
                u.trackApm)({
                    action: "init_globaldata_end",
                    sourceRoute: r,
                    sourceScene: a
                });
            }
        });
        var i = l.default.getAccountInfoSync();
        this.globalData.version = i.version;
    },
    initAddMpCache: function() {
        "boolean" != typeof l.default.getStorageSync(f.STORAGE_KEY.CAN_SHOW_FULL_ADD_MP) && l.default.setStorage({
            key: f.STORAGE_KEY.CAN_SHOW_FULL_ADD_MP,
            data: !0
        });
    },
    checkWeixinCaptcha: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.captchaTicketExpire || (this.captchaTicketExpire = {}), 1038 === e.scene && "wx5a3a7366fd07e119" === e.referrerInfo.appId) {
            var t = e.referrerInfo.extraData || {};
            if (0 === t.ret) {
                (0, u.trackNormalData)({
                    action: "verify_success",
                    label: "tencent"
                });
                var a = {
                    status: 1,
                    ticket: t.ticket,
                    randStr: t.randstr,
                    callFrom: "wxMiniProgram"
                };
                (0, A.sendVertifyCode)(a).then(function(e) {
                    (0, u.trackNormalData)({
                        action: "verify_api_success",
                        label: "tencent"
                    }), null != e && e.passed ? ((0, u.trackNormalData)({
                        action: "verify_api_passed",
                        label: "tencent"
                    }), h.default.relaunchBeforeVerifyPage()) : (0, u.trackNormalData)({
                        action: "verify_api_fail",
                        label: "tencent"
                    });
                }).catch(function() {
                    (0, u.trackNormalData)({
                        action: "send_verify_error",
                        label: "tencent"
                    }), (0, s.redirectTo)("ErrorPage");
                });
            } else (0, u.trackNormalData)({
                action: "verify_fail",
                label: "tencent",
                property: t.ret
            });
        }
    },
    onLaunch: function() {
        var e = arguments, t = this;
        return r(a.default.mark(function r() {
            var n, i, o, s, l, f, d, g, _, m;
            return a.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    n = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = (i = n || {}).path, s = i.scene, 
                    (0, u.trackApm)({
                        action: "miniprogram_launch",
                        sourceRoute: o,
                        sourceScene: s
                    }), l = c.default.getUserInfo(), f = l.openid, d = l.isNewWxmpUser, g = f, h.default.setAvailableVerifyPage(), 
                    setTimeout(function() {
                        try {
                            p.default.checkReady() || (p.default.init({
                                openid: g
                            }), (0, u.trackApm)({
                                action: "app_launch_data",
                                property: "get_abtest_timeout"
                            }));
                        } catch (e) {
                            console.log(e);
                        }
                    }, 5e3);
                    try {
                        wx.$eaglet.app.setConfig({
                            $eagletAppMeta: t.$eagletAppMeta,
                            $eagletGetUserInfo: t.$eagletGetUserInfo
                        }), wx.$eaglet.app.initApp(n);
                    } catch (e) {
                        (0, u.trackApm)({
                            action: "init_new_track_error",
                            sourceRoute: o,
                            sourceScene: s
                        });
                    }
                    return _ = c.default.getEagletUserInfo(), wx.$eaglet.resetABInfo(_), t.initGlobalData(n), 
                    t.initRequest(), (0, u.trackApm)({
                        action: "init_request_end",
                        sourceRoute: o,
                        sourceScene: s
                    }), t.initNewbie(), (0, u.trackApm)({
                        action: "init_new_bie_end",
                        sourceRoute: o,
                        sourceScene: s
                    }), t.initAddMpCache(), a.prev = 17, a.next = 20, c.default.loginWithCode({
                        noAutoGoToLogin: !0
                    });

                  case 20:
                    (0, u.trackApm)({
                        action: "app_launch_data",
                        property: "auto_login_success"
                    }), g = c.default.getUserInfo().openid, d && (l.isNewWxmpUser = !1, c.default.setUserInfo(l)), 
                    a.next = 29;
                    break;

                  case 25:
                    a.prev = 25, a.t0 = a.catch(17), (0, u.trackApm)({
                        action: "app_launch_data",
                        property: "login_with_code_fail",
                        label: a.t0
                    }), console.error("loginWithCode", a.t0);

                  case 29:
                    return a.prev = 29, a.next = 32, p.default.init({
                        openid: g
                    });

                  case 32:
                    (0, u.trackApm)({
                        action: "app_launch_data",
                        property: "get_ab_data_success"
                    }), m = c.default.getEagletUserInfo(), wx.$eaglet.resetABInfo(m), a.next = 41;
                    break;

                  case 37:
                    a.prev = 37, a.t1 = a.catch(29), (0, u.trackApm)({
                        action: "app_launch_data",
                        property: "get_ab_data_fail",
                        label: a.t1
                    }), console.error("abtest init", a.t1);

                  case 41:
                    (0, u.trackApm)({
                        action: "miniprogram_launch_end",
                        sourceRoute: o,
                        sourceScene: s
                    }), S();

                  case 43:
                  case "end":
                    return a.stop();
                }
            }, r, null, [ [ 17, 25 ], [ 29, 37 ] ]);
        }))();
    },
    onError: function(e) {
        (0, u.trackError)(e);
    },
    onShow: function(e) {
        this.globalData.launchOps = e;
        var t = (e || {}).scene;
        this.globalData.scene = t, this.globalData.canLaunchApp = v(t, this.globalData.canLaunchApp);
        try {
            h.default.setAvailableVerifyPage(), wx.$eaglet.app.startFlushInterval();
        } catch (e) {
            console.log(e);
        }
        (0, u.trackApm)({
            action: "miniprogram_show",
            sourceRoute: e.path,
            sourceScene: e.scene
        }), _.default.start(), this.checkWeixinCaptcha(e);
    },
    onHide: function() {
        wx.$eaglet.app.stopFlushInterval(), (0, u.trackApm)({
            action: "miniprogram_hide"
        }), _.default.isHealthy() && (0, u.trackApm)({
            action: "session",
            label: "timespent",
            property: _.default.getUsageTime()
        }), _.default.close();
    }
});