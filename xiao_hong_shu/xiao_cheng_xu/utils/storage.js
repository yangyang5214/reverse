var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getStorage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return a(e, !1);
}, exports.getStorageSync = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return a(e, !0);
}, exports.setStorageSync = function(e) {
    var t = e.key, r = e.data, n = e.expireHours, a = i(n);
    return o(t, r, a, !0);
}, exports.setStorage = function(e) {
    var t = e.key, r = e.data, n = e.expireHours, a = i(n);
    return o(t, r, a, !1);
};

var t = e(require("./api")), r = require("../utils/enum"), n = function(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
};

var a = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], o = r.STORAGE_KEY[e];
    if (!o) throw new Error("not find this key ".concat(e, " in STORAGE_KEY"));
    var i = Date.parse(new Date());
    if (a) {
        var u = t.default.getStorageSync(o);
        if (n(u)) {
            var d = u.expire, v = u.data;
            return 0 !== d && d < i ? void 0 : v;
        }
        return u;
    }
    return t.default.getStorage({
        key: o
    }).then(function(e) {
        var t = e.data;
        if (e.data) {
            if (n(t)) {
                var r = t.expire, a = t.data;
                return 0 !== r && r < i ? void 0 : a;
            }
            return t;
        }
    });
}, o = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 ? arguments[2] : void 0, o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = r.STORAGE_KEY[e], u = {
        expire: a,
        data: n
    };
    if (!i) throw new Error("not find this key ".concat(e, " in STORAGE_KEY"));
    return o ? t.default.setStorageSync(i, u) : t.default.setStorage({
        key: i,
        data: u
    });
}, i = function(e) {
    return isNaN(e) ? 0 : 60 * e * 60 * 1e3 + Date.parse(new Date());
};