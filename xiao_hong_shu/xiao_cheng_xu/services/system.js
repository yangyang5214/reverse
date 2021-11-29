Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAbTest = function(t) {
    return (0, e.get)("AB_TEST", {
        params: t
    });
}, exports.collectFormId = function() {
    return new Promise(function(e) {
        e();
    });
}, exports.getMineInfo = function() {
    return (0, e.get)("MINE_INFO_DETAIL");
}, exports.editMineInfo = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.key, o = t.value;
    return (0, e.post)("EDIT_MINE_INFO", {
        key: r,
        value: o
    }, {
        transform: !0,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}, exports.getQrCode = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, e.get)("GER_MP_QRCODE_URL", {
        params: t,
        transform: !0
    });
}, exports.postRecord = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, e.post)("RECORD_PLATFORM_SOURCE", t, {});
}, exports.getShareCode = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, e.post)("GET_SHARE_CODE", t, {});
};

var e = require("../utils/http");