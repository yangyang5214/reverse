var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), o = e(require("./api")), i = require("./enum"), r = require("../services/user"), s = require("./path"), a = e(require("./ab-test")), u = new (function() {
    function e() {
        n(this, e), this.platform = this.getPlatform(), this.cacheUserInfo = null;
    }
    return t(e, [ {
        key: "getPlatform",
        value: function() {
            var e = o.default.getSystemInfoSync().platform;
            return "devtools" === e ? "ios" : e;
        }
    }, {
        key: "getUserInfo",
        value: function() {
            var e = {};
            return this.cacheUserInfo ? e = this.cacheUserInfo : (e = o.default.getStorageSync(i.STORAGE_KEY.USER_INFO) || {}, 
            this.cacheUserInfo = e), e;
        }
    }, {
        key: "getEagletUserInfo",
        value: function() {
            var e = this.getUserInfo(), n = a.default.getExpIds(), t = a.default.getExpIdsTrace(), o = e.appUserInfo, i = void 0 === o ? {} : o;
            return {
                exp: n,
                userId: e.appUserId,
                wxOpenid: e.openid || "",
                wxUnionid: e.unionid || "",
                mpIsAppUser: i.isAppUser,
                mpIsNewMpUser: e.isNewWxmpUser,
                expIdsTrace: t
            };
        }
    }, {
        key: "getSid",
        value: function() {
            var e = this.getUserInfo();
            return e.sid && "undefined" !== e.sid ? e.sid : "";
        }
    }, {
        key: "getUserId",
        value: function() {
            return this.getUserInfo().appUserId || "";
        }
    }, {
        key: "getNickname",
        value: function() {
            var e = this.getUserInfo().appUserInfo;
            return (e = e || {}).nickname || "";
        }
    }, {
        key: "getWeixinNickname",
        value: function() {
            var e = this.getUserInfo().wxUserInfo;
            return (e = e || {}).nickname || "";
        }
    }, {
        key: "getWxUserInfo",
        value: function() {
            var e = this.getUserInfo().wxUserInfo;
            return e = e || {};
        }
    }, {
        key: "setWxUserInfo",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.avatar && e.nickname) {
                var n = this.getUserInfo();
                n.wxUserInfo = e, this.setUserInfo(n);
            }
        }
    }, {
        key: "isMale",
        value: function() {
            var e = this.getUserInfo().appUserInfo;
            return 0 === (e = e || {}).gender;
        }
    }, {
        key: "setWxUserInfoGender",
        value: function(e) {
            var n = this.getUserInfo(), t = n.wxUserInfo;
            (t = t || {}).gender = e, this.setUserInfo(n);
        }
    }, {
        key: "isMaleByWeixin",
        value: function() {
            var e = this.getUserInfo().wxUserInfo;
            return 1 === (e = e || {}).gender;
        }
    }, {
        key: "checkLogin",
        value: function() {
            var e = this.getUserInfo();
            return Boolean(e.appUserId);
        }
    }, {
        key: "checkSession",
        value: function() {
            return new Promise(function(e, n) {
                var t = setTimeout(function() {
                    console.error("check_session_error"), n();
                }, 3e3);
                wx.checkSession({
                    success: function() {
                        t && clearTimeout(t), e();
                    },
                    fail: function() {
                        t && clearTimeout(t), n();
                    }
                });
            });
        }
    }, {
        key: "ensureLogin",
        value: function() {
            var e = this;
            return new Promise(function(n) {
                e.checkLogin() ? n() : e.goToLogin();
            });
        }
    }, {
        key: "goToLogin",
        value: function() {
            var e = this.getUserInfo();
            if (e.sid) return e.sid = "", void this.setUserInfo(e).then(function() {
                o.default.showToast({
                    title: "登录过期",
                    icon: "loading",
                    success: function() {
                        (0, s.navigateTo)("LoginIndex");
                    }
                });
            });
            (0, s.navigateTo)("LoginIndex");
        }
    }, {
        key: "privateGetWeixinCode",
        value: function() {
            return new Promise(function(e) {
                o.default.login({
                    timeout: 5e3,
                    success: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e(n.code);
                    },
                    fail: function() {
                        e();
                    }
                });
            });
        }
    }, {
        key: "setUserInfo",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.getUserInfo(), t = Object.assign({}, n, e, {
                updateTime: new Date().getTime()
            }), r = this;
            return t.authorization || console.error("no authorization !!!"), new Promise(function(e) {
                o.default.setStorage({
                    key: i.STORAGE_KEY.USER_INFO,
                    data: t,
                    success: function() {
                        r.cacheUserInfo = t;
                        try {
                            var n = r.getEagletUserInfo();
                            wx.$eaglet.resetABInfo(n);
                        } catch (e) {
                            console.log(e);
                        }
                        e(t);
                    },
                    fail: function() {
                        e(!1);
                    }
                });
            });
        }
    }, {
        key: "loginWithCode",
        value: function() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = n.noAutoGoToLogin, o = n.forceWeixinLogin;
            return new Promise(function(n, i) {
                e.privateGetWeixinCode().then(function(s) {
                    if (s) {
                        var a = e.getUserInfo(), u = a.isPhoneLogin, f = a.phone, c = a.zone;
                        u && !o ? (0, r.telephoneLogin)({
                            phone: f,
                            zone: c,
                            weixin_code: s
                        }).then(function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.setUserInfo({
                                userId: t.userId,
                                authorization: t.authorization,
                                openid: t.openid,
                                sid: t.sessionId,
                                unionid: t.unionid,
                                appUserId: t.appUserId,
                                appUserInfo: t.appUserInfo,
                                wxUserInfo: t.wxUserInfo,
                                isNewWxmpUser: t.isNewWxmpUser
                            }).then(function(e) {
                                n(e);
                            });
                        }).catch(function() {
                            t ? n() : (e.goToLogin(), i());
                        }) : (0, r.loginWithCode)(s, a.token).then(function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.setUserInfo({
                                userId: t.userId,
                                authorization: t.authorization,
                                openid: t.openid,
                                sid: t.sessionId,
                                unionid: t.unionid,
                                appUserId: t.appUserId,
                                appUserInfo: t.appUserInfo,
                                wxUserInfo: t.wxUserInfo,
                                isNewWxmpUser: t.isNewWxmpUser
                            }).then(function(e) {
                                n(e);
                            });
                        }).catch(function() {
                            i();
                        });
                    } else i();
                });
            });
        }
    }, {
        key: "loginWithWeixinUserInfo",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.platform = this.platform;
            var n = this.getUserInfo().token || "";
            return (0, r.postUserInfoToServerAndGetSid)(e, n);
        }
    }, {
        key: "loginWithWeixinUserInfoAndCode",
        value: function() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function(t, o) {
                e.loginWithCode({
                    noAutoGoToLogin: !0,
                    forceWeixinLogin: !0
                }).then(function() {
                    n.platform = e.platform;
                    var i = e.getUserInfo().token || "";
                    (0, r.postUserInfoToServerAndGetSid)(n, i).then(function(e) {
                        t(e);
                    }).catch(function() {
                        o(), wx.showToast({
                            title: "登录失败，请稍候重试",
                            icon: "none",
                            duration: 2e3
                        });
                    });
                });
            });
        }
    }, {
        key: "loginWidthEncryptedData",
        value: function(e) {
            var n = e.encryptedData, t = e.iv, o = this.getUserInfo(), i = o.token, s = o.openid, a = {
                encryptedData: n,
                iv: t,
                platform: this.platform,
                openid: s
            };
            return (0, r.WXMobileLogin)(a, i || "");
        }
    }, {
        key: "openSettingModal",
        value: function(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = t.title, r = t.confirmText, s = t.cancelText, a = t.content;
            o.default.showModal({
                title: i || "打开设置页面重新授权",
                content: a,
                confirmText: r || "去设置",
                cancelText: s || "取消",
                success: function(t) {
                    t.confirm ? o.default.openSetting({
                        success: function(n) {
                            e(n);
                        }
                    }) : n && n();
                }
            });
        }
    } ]), e;
}())();

exports.default = u;