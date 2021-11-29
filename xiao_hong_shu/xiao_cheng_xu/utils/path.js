var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isPage = function(e) {
    return (0, t.getRoute)(e);
}, exports.makePath = n, exports.makeSharePath = function(e, t) {
    var r = t || {};
    return r.share = !0, n(e, r);
}, exports.getPageUrl = function() {
    var e = [], t = r.default.getGlobalData().launchOps || {}, n = getCurrentPages(), o = n[n.length - 1], a = o = o || {}, i = a.route, u = a.options, c = t.scene, s = "", p = "", l = "";
    i = i || "", u = u || {}, c && (u.scene = c);
    for (var g in u) Object.prototype.hasOwnProperty.call(u, g) && ("from" === g && (s = u[g]), 
    "source" === g && (p = u[g]), "appuid" === g && (l = u[g]), e.push("".concat(g, "=").concat(u[g])));
    var h = e.length > 0 ? "?".concat(e.join("&")) : "";
    return {
        from: s,
        source: p,
        appuid: l,
        scene: c,
        query: u,
        route: i,
        url: "".concat(i).concat(h)
    };
}, exports.makePathByRouteKey = function(e, r) {
    var n = (0, t.getRoute)(e);
    if (!n) throw new Error("[path] could not found path via name ".concat(e));
    r && (n += "?", Object.keys(r).forEach(function(e, t) {
        if (r[e]) {
            t > 0 && (n += "&");
            var o = String(r[e]);
            n += "".concat(e, "=").concat(o);
        }
    }));
    return n;
}, exports.getLinkVariable = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = e.split("&");
    e = e || "", t = t || "";
    for (var n = 0; n < r.length; n++) {
        var o = r[n].split("=");
        if (o[0] === t && o[1]) return o[1];
    }
    return !1;
}, exports.relaunchLastPage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = getCurrentPages() || [];
    if (1 === t.length) u("HomePage"); else {
        var r = t[t.length - (1 + e)], o = r && r.route, a = r && r.options, i = "/" + n(o, a);
        wx.reLaunch({
            url: i
        });
    }
}, exports.getCurrentPage = function() {
    var e = getCurrentPages();
    if (e.length > 0) return e[e.length - 1];
    return {};
}, exports.navigateBack = exports.MINIPROGRAM_STORE = exports.reLaunch = exports.switchTab = exports.redirectTo = exports.navigateTo = exports.getIdFromDeeplink = void 0;

var t = require("../routes"), r = e(require("./api"));

function n(e, r) {
    var n = (0, t.getRoute)(e), o = "";
    if (r && r.plain) return e;
    if (!e && !n) throw new Error("[path] could not found path via name ".concat(e));
    return o = n || e, r && (o += "?", Object.keys(r).forEach(function(e, t) {
        if (r[e]) {
            t > 0 && (o += "&");
            var n = String(r[e]);
            o += "".concat(e, "=").concat(n);
        }
    })), o;
}

exports.MINIPROGRAM_STORE = {
    TARGET: "miniProgram",
    APP_ID: "wx4554c1e6dfadc8ed",
    VERSION: "release"
};

var o = function(e) {
    return function(o, a) {
        var i = {}, u = (0, t.getRoute)(o);
        if (u && (i.url = "/".concat(u)), i.url) return i.url.indexOf("/webview") > -1 && a.link && "string" == typeof a.link && a.link.indexOf("http") > -1 && (a.link = encodeURIComponent(decodeURIComponent(a.link))), 
        i.url = n(i.url, a), r.default[e](i);
        console.error("[path] must provide url parameter");
    };
};

exports.getIdFromDeeplink = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e.match(/([a-f\d]{24}|[A-F\d]{24})/g);
    return t && t.length > 0 ? t[0] : (t = e.match(/picasso_pages\/(\S*)(\?)/)) && t.length > 2 ? t[1] : "null";
};

var a = o("navigateTo");

exports.navigateTo = a;

var i = o("redirectTo");

exports.redirectTo = i;

var u = o("switchTab");

exports.switchTab = u;

var c = o("reLaunch");

exports.reLaunch = c;

exports.navigateBack = function() {
    return r.default.navigateBack();
};