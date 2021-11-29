var r = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.loginWithCode = function(r) {
    t || (t = n());
    return (0, o.post)("LOGIN", {
        code: r,
        platform: t,
        mp_source: "SELECTED"
    }, {
        transform: !0
    });
}, exports.postUserInfoToServerAndGetSid = function(r) {
    r.platform || (r.platform = n());
    return r.mp_source = "SELECTED", (0, o.post)("USER_INFO", r, {
        transform: !0
    });
}, exports.logout = function() {
    return (0, o.get)("LOGOUT");
}, exports.mobileLogin = function(r) {
    t || (t = t = n());
    return r.mp_source = "SELECTED", r.platform = t, (0, o.post)("MOBILE_LOGIN", r, {
        transform: !0
    });
}, exports.telephoneLogin = function(r) {
    t || (t = t = n());
    return r.platform = t, r.mp_source = "SELECTED", (0, o.post)("MOBILE_LOGIN", r, {
        transform: !0
    });
}, exports.WXMobileLogin = function(r) {
    r.platform || (r.platform = n());
    return r.mp_source = "SELECTED", (0, o.post)("WX_MOBILE_LOGIN", r, {
        transform: !0
    });
}, exports.getVerifyCode = function(r) {
    t || (t = t = n());
    return r.platform = t, (0, o.post)("VFC_CODE", r);
}, exports.becomeFriend = function(r) {
    var e = r.fromUid, t = r.toUid, n = r.sid;
    return (0, o.post)("WX_FRIEND", {
        fromUid: e,
        toUid: t
    }, {
        resourceParams: {
            sid: n
        },
        transform: !0
    });
}, exports.becomeRawFriend = function(r) {
    var e = r.fromUnionId, t = void 0 === e ? "" : e, n = r.fromUserId, i = void 0 === n ? "" : n, s = r.toUnionId, u = void 0 === s ? "" : s, p = r.toUserId, f = void 0 === p ? "" : p, a = r.source, d = void 0 === a ? "" : a;
    return (0, o.post)("WX_RAW_FRIEND", {
        fromUnionid: t,
        fromUserid: i,
        toUnionid: u,
        toUserid: f,
        source: d
    }, {
        transform: !0
    });
}, exports.getPhoneZones = function() {
    return (0, o.get)("GET_PHONE_ZONES");
}, exports.updateSessionKey = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, o.put)("ACTIVITY_UPDATE_SESSION_KEY", r, {
        resourceParams: {}
    });
}, exports.updateUserInfo = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = r.data;
    return (0, o.put)("ACTIVITY_UPDATE_WEIXIN_INFO", e, {
        resourceParams: {}
    });
};

require("../http.config");

var o = require("../utils/http"), e = r(require("../utils/api")), t = (require("../utils/fe-api-sign"), 
r(require("../libs/deep-clone")), null);

function n() {
    var r = e.default.getSystemInfoSync().platform;
    return "devtools" === r ? "ios" : r;
}