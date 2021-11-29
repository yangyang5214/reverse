var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getNoteDeepLink = void 0;

var o = e(require("../../../../utils/user"));

exports.getNoteDeepLink = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, c = arguments.length > 3 ? arguments[3] : void 0, n = o.default.getUserInfo() || {}, i = n.openid, a = [ "openid=".concat(i) ];
    Object.keys(r).forEach(function(e) {
        a.push("".concat(e, "=").concat(r[e]));
    });
    var d = a.join("&");
    if (a.length > 0 && (d = "&".concat(d)), "video" === t) {
        var s = c || "xhsdiscover://video_feed/".concat(e);
        return "".concat(s, "?sourceId=miniprogram&feedType=video").concat(d);
    }
    var u = c || "xhsdiscover://portrait_feed/".concat(e);
    return "".concat(u, "?sourceId=miniprogram&feedType=normal&title=%e7%ac%94%e8%ae%b0").concat(d);
};