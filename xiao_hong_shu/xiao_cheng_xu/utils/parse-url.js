var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isUriProtocol = o, exports.isUriSymbol = s, exports.transUriSymbolToSafe = i, 
exports.transUriProtocolToSafe = u, exports.transUriToSafe = function(t) {
    if (o(t)) return u(t);
    if (s(t)) return i(t);
    return t;
}, exports.changeQuery = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.link, n = t.type, o = t.key, s = t.value;
    if (!r) return "";
    if (!n) return r;
    var i = "set", u = "remove";
    if (-1 === [ i, u ].indexOf(n)) return r;
    var a = (0, e.default)(r), c = s || "", p = [], f = [], l = !1;
    a.query.indexOf("?") > -1 && (p = a.query.split("?")[1].split("&"));
    p.forEach(function(t) {
        n === u ? -1 === t.indexOf("".concat(o, "=")) && f.push(t) : n === i && (t.indexOf("".concat(o, "=")) > -1 ? (l = !0, 
        f.push("".concat(o, "=").concat(c))) : f.push(t));
    }), n !== i || l || f.push("".concat(o, "=").concat(c));
    return a.set("query", "?".concat(f.join("&"))), a.toString();
}, exports.cleanSpecialKeys = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = t;
    return e = (e = e.replace("?sid", "?mp_env=2&sid")).replace(/[&|?]sid=session\.[\d]{19}/g, "");
}, exports.getAbsoluteLink = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.link;
    if (!r) return "";
    var n = "pages.xiaohongshu.com", o = "www.xiaohongshu.com", s = [ /\/goods\/[\S]{24}/, /\/vendor\/[\S]{24}\/events\/[\S]{24}/ ];
    0 !== r.indexOf("/") && 0 !== r.indexOf("http") && (r = "//".concat(r));
    var i = (0, e.default)(r);
    ([ n, o ].indexOf(i.hostname) > -1 || !i.hostname) && i.set("protocol", "https:");
    if (!i.host || "127.0.0.1" === i.hostname) {
        i.set("host", o), i.set("protocol", "https:");
        var u = !1;
        s.some(function(t) {
            if (t.test(i.pathname)) return u = !0, !0;
        }), u && i.set("host", n);
    }
    return i.toString();
}, exports.setSafeProtocol = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!t) return t;
    var r = (0, e.default)(t);
    return r.set("protocol", "https:"), r.toString();
};

var e = t(require("url-parse")), r = /^https?:/, n = /^\/\//;

function o(t) {
    return r.test(t);
}

function s(t) {
    return n.test(t);
}

function i(t) {
    return t.replace(n, "https://");
}

function u(t) {
    return t.replace(r, "https:");
}