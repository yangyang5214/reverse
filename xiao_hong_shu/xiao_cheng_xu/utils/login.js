var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("./user")), n = e(require("./ab-test")), o = !1, i = {
    canShowLoginModal: function() {
        if (o) return !1;
        if (1 !== n.default.getABTestFlagValue("wx_mp_login_modal")) return !1;
        var e = getCurrentPages(), i = e && e.length > 0 ? e[e.length - 1] : null;
        return !(!i || i.options && i.options.redirect_path) && (!t.default.getUserId() && (o = !0, 
        !0));
    },
    isAuth: function(e) {
        return new Promise(function(t) {
            wx.getSetting({
                success: function(n) {
                    n.authSetting["scope.".concat(e)] ? t(!0) : t(!1);
                },
                fail: function() {
                    t(!1);
                }
            });
        });
    },
    saveUserInfo: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.default.setUserInfo({
            token: e.userId,
            openid: e.openid,
            sid: e.sessionId,
            authorization: e.authorization,
            appUserId: e.appUserId,
            appUserInfo: e.appUserInfo,
            isPhoneLogin: e.isPhoneLogin
        });
    },
    goToSetting: function() {
        t.default.openSettingModal(function(e) {
            e.authSetting["scope.userInfo"];
        });
    }
};

exports.default = i;