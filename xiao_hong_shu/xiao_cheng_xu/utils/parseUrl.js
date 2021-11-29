var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isUriProtocol = o, exports.isUriSymbol = i, exports.transUriSymbolToSafe = s, 
exports.transUriProtocolToSafe = u, exports.transUriToSafe = function(t) {
    if (o(t)) return u(t);
    if (i(t)) return s(t);
    return t;
}, exports.changeQuery = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.link, n = t.type, o = t.key, i = t.value;
    if (!r) return "";
    if (!n) return r;
    var s = "set", u = "remove";
    if (-1 === [ s, u ].indexOf(n)) return r;
    var a = (0, e.default)(r), c = i || "", f = [], p = [], l = !1;
    a.query.indexOf("?") > -1 && (f = a.query.split("?")[1].split("&"));
    f.forEach(function(t) {
        n === u ? -1 === t.indexOf("".concat(o, "=")) && p.push(t) : n === s && (t.indexOf("".concat(o, "=")) > -1 ? (l = !0, 
        p.push("".concat(o, "=").concat(c))) : p.push(t));
    }), n !== s || l || p.push("".concat(o, "=").concat(c));
    return a.set("query", "?".concat(p.join("&"))), a.toString();
}, exports.cleanSpecialKeys = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = t;
    return e = (e = e.replace("?sid", "?mp_env=2&sid")).replace(/[&|?]sid=session\.[\d]{19}/g, "");
}, exports.getAbsoluteLink = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.link;
    if (!r) return "";
    var n = "pages.xiaohongshu.com", o = "www.xiaohongshu.com", i = [ /\/goods\/[\S]{24}/, /\/vendor\/[\S]{24}\/events\/[\S]{24}/ ];
    0 !== r.indexOf("/") && 0 !== r.indexOf("http") && (r = "//".concat(r));
    var s = (0, e.default)(r);
    ([ n, o ].indexOf(s.hostname) > -1 || !s.hostname) && s.set("protocol", "https:");
    if (!s.host) {
        s.set("host", o);
        var u = !1;
        i.some(function(t) {
            if (t.test(s.pathname)) return u = !0, !0;
        }), u && s.set("host", n);
    }
    return s.toString();
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

function i(t) {
    return n.test(t);
}

function s(t) {
    return t.replace(n, "https://");
}

function u(t) {
    return t.replace(r, "https:");
}