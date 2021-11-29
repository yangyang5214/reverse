var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.encryptFeApiToken = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "X", n = e.url, i = void 0 === n ? "" : n, a = e.params, c = e.transform, u = void 0 !== c && c;
    i = i.slice(i.indexOf("/fe_api/"), i.length);
    var p = "";
    a && (p = o(a, u));
    if (p = p ? "?".concat(p) : "", "X" === t) return "".concat(t).concat((0, r.default)(i + p + "WSUDD"));
    return "";
}, exports.DEFAULT_SIGN_API_PATH = exports.DEFAULT_SIGN_HEADER = void 0;

var r = e(require("../libs/md5"));

exports.DEFAULT_SIGN_HEADER = "X-Sign";

exports.DEFAULT_SIGN_API_PATH = "/fe_api/";

function o(e, r) {
    var o = [];
    return Object.keys(e).forEach(function(t) {
        if (void 0 !== e[t]) {
            var n = r ? function(e) {
                return e.replace(/([A-Z])/g, "_$1").toLowerCase();
            }(t) : t;
            o.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(e[t])));
        }
    }), o.join("&");
}