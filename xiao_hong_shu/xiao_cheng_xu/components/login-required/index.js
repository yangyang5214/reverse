var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../utils/user")), r = require("../../utils/track"), n = require("../../utils/path"), i = e(require("../../utils/login")), l = e(require("../../utils/api")), u = require("miniprogram-computed").behavior;

Component({
    behaviors: [ u ],
    properties: {
        showLoginModal: Boolean,
        showLoginModalSource: String,
        noNeedRelaunch: Boolean
    },
    data: {
        autoShow: !1,
        isReady: !1,
        canShowLoginModal: !1
    },
    methods: {
        handleGetPhoneNumber: function(e) {
            var a = this, t = e.detail || {}, u = t.errMsg, c = t.encryptedData, s = t.iv;
            (0, r.trackNormalData)({
                action: "get_user_phone_number"
            }), u.indexOf("getPhoneNumber:fail") > -1 || u.indexOf("deny") > -1 ? (0, r.trackNormalData)({
                action: "get_user_phone_number_failed"
            }) : o.default.loginWidthEncryptedData({
                encryptedData: c,
                iv: s
            }).then(function(e) {
                if (e && i.default.saveUserInfo(e), a.setData({
                    autoShow: !1
                }), a.triggerEvent("closeLoginModal"), !a.data.noNeedRelaunch && o.default.getUserId()) try {
                    var t = getCurrentPages(), r = t[t.length - 1], u = r && r.route, c = r && r.options, s = "/" + (0, 
                    n.makePath)(u, c);
                    l.default.reLaunch({
                        url: s
                    });
                } catch (e) {}
            }).catch(function(a) {
                (0, r.trackNormalData)({
                    action: "update_user_info_fail",
                    property: JSON.stringify(e),
                    label: a.detail.result
                }), wx.showToast({
                    title: "登录失败，请稍候重试",
                    icon: "none",
                    duration: 2e3,
                    success: function() {
                        (0, n.redirectTo)("LoginIndex");
                    }
                });
            }).catch(function() {
                (0, r.trackNormalData)({
                    action: "login_with_weixin_fail",
                    property: JSON.stringify(e.detail)
                });
            });
        },
        handleCloseModal: function() {
            this.setData({
                autoShow: !1
            }), this.triggerEvent("closeLoginModal");
        },
        handleClickModal: function() {},
        handleGoToMobileLogin: function() {
            var e = this.data.showLoginModalSource ? this.data.showLoginModalSource : "default";
            (0, r.trackNormalData)({
                property: "login_request",
                action: "click_to_login",
                label: e
            }), (0, n.navigateTo)("MobileLogin", {
                source: e,
                from: "login_modal"
            });
        }
    },
    computed: {
        show: function(e) {
            var a = e.showLoginModal, t = e.autoShow;
            if (a || t) {
                var o = e.showLoginModalSource ? e.showLoginModalSource : "default";
                return (0, r.trackNormalData)({
                    property: "login_request",
                    action: "impression",
                    label: o
                }), !0;
            }
            return !1;
        }
    },
    created: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, l.default.$instance.globalData.promise;

                  case 2:
                    i.default.canShowLoginModal() && !e.data.autoShow && e.setData({
                        autoShow: !0
                    });

                  case 3:
                  case "end":
                    return a.stop();
                }
            }, t);
        }))();
    }
});