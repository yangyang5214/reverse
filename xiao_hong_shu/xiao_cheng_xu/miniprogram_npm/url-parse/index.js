var e, t, o = require("../../@babel/runtime/helpers/typeof");

module.exports = (e = {}, t = function(t, r) {
    if (!e[t]) return require(r);
    if (!e[t].status) {
        var s = e[t].m;
        s._exports = s._tempexports;
        var n = Object.getOwnPropertyDescriptor(s, "exports");
        n && n.configurable && Object.defineProperty(s, "exports", {
            set: function(e) {
                "object" === o(e) && e !== s._exports && (s._exports.__proto__ = e.__proto__, Object.keys(e).forEach(function(t) {
                    s._exports[t] = e[t];
                })), s._tempexports = e;
            },
            get: function() {
                return s._tempexports;
            }
        }), e[t].status = 1, e[t].func(e[t].req, s, s.exports);
    }
    return e[t].m.exports;
}, function(t, o, r) {
    e[t] = {
        status: 0,
        func: o,
        req: r,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
}(1631872123685, function(e, t, r) {
    var s = e("requires-port"), n = e("querystringify"), a = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/, p = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i, i = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
    function u(e) {
        return (e || "").toString().replace(i, "");
    }
    var c = [ [ "#", "hash" ], [ "?", "query" ], function(e) {
        return e.replace("\\", "/");
    }, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], h = {
        hash: 1,
        query: 1
    };
    function l(e) {
        var t, r = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).location || {}, s = {}, n = o(e = e || r);
        if ("blob:" === e.protocol) s = new m(unescape(e.pathname), {}); else if ("string" === n) for (t in s = new m(e, {}), 
        h) delete s[t]; else if ("object" === n) {
            for (t in e) t in h || (s[t] = e[t]);
            void 0 === s.slashes && (s.slashes = a.test(e.href));
        }
        return s;
    }
    function f(e) {
        e = u(e);
        var t = p.exec(e);
        return {
            protocol: t[1] ? t[1].toLowerCase() : "",
            slashes: !!(t[2] && t[2].length >= 2),
            rest: t[2] && 1 === t[2].length ? "/" + t[3] : t[3]
        };
    }
    function m(e, t, r) {
        if (e = u(e), !(this instanceof m)) return new m(e, t, r);
        var a, p, i, h, x, g, y = c.slice(), d = o(t), b = this, v = 0;
        for ("object" !== d && "string" !== d && (r = t, t = null), r && "function" != typeof r && (r = n.parse), 
        t = l(t), a = !(p = f(e || "")).protocol && !p.slashes, b.slashes = p.slashes || a && t.slashes, 
        b.protocol = p.protocol || t.protocol || "", e = p.rest, p.slashes || (y[3] = [ /(.*)/, "pathname" ]); v < y.length; v++) "function" != typeof (h = y[v]) ? (i = h[0], 
        g = h[1], i != i ? b[g] = e : "string" == typeof i ? ~(x = e.indexOf(i)) && ("number" == typeof h[2] ? (b[g] = e.slice(0, x), 
        e = e.slice(x + h[2])) : (b[g] = e.slice(x), e = e.slice(0, x))) : (x = i.exec(e)) && (b[g] = x[1], 
        e = e.slice(0, x.index)), b[g] = b[g] || a && h[3] && t[g] || "", h[4] && (b[g] = b[g].toLowerCase())) : e = h(e);
        r && (b.query = r(b.query)), a && t.slashes && "/" !== b.pathname.charAt(0) && ("" !== b.pathname || "" !== t.pathname) && (b.pathname = function(e, t) {
            if ("" === e) return t;
            for (var o = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = o.length, s = o[r - 1], n = !1, a = 0; r--; ) "." === o[r] ? o.splice(r, 1) : ".." === o[r] ? (o.splice(r, 1), 
            a++) : a && (0 === r && (n = !0), o.splice(r, 1), a--);
            return n && o.unshift(""), "." !== s && ".." !== s || o.push(""), o.join("/");
        }(b.pathname, t.pathname)), "/" !== b.pathname.charAt(0) && b.hostname && (b.pathname = "/" + b.pathname), 
        s(b.port, b.protocol) || (b.host = b.hostname, b.port = ""), b.username = b.password = "", 
        b.auth && (h = b.auth.split(":"), b.username = h[0] || "", b.password = h[1] || ""), 
        b.origin = b.protocol && b.host && "file:" !== b.protocol ? b.protocol + "//" + b.host : "null", 
        b.href = b.toString();
    }
    m.prototype = {
        set: function(e, t, o) {
            var r = this;
            switch (e) {
              case "query":
                "string" == typeof t && t.length && (t = (o || n.parse)(t)), r[e] = t;
                break;

              case "port":
                r[e] = t, s(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, 
                r[e] = "");
                break;

              case "hostname":
                r[e] = t, r.port && (t += ":" + r.port), r.host = t;
                break;

              case "host":
                r[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), r.port = t.pop(), r.hostname = t.join(":")) : (r.hostname = t, 
                r.port = "");
                break;

              case "protocol":
                r.protocol = t.toLowerCase(), r.slashes = !o;
                break;

              case "pathname":
              case "hash":
                if (t) {
                    var a = "pathname" === e ? "/" : "#";
                    r[e] = t.charAt(0) !== a ? a + t : t;
                } else r[e] = t;
                break;

              default:
                r[e] = t;
            }
            for (var p = 0; p < c.length; p++) {
                var i = c[p];
                i[4] && (r[i[1]] = r[i[1]].toLowerCase());
            }
            return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", 
            r.href = r.toString(), r;
        },
        toString: function(e) {
            e && "function" == typeof e || (e = n.stringify);
            var t, r = this, s = r.protocol;
            s && ":" !== s.charAt(s.length - 1) && (s += ":");
            var a = s + (r.slashes ? "//" : "");
            return r.username && (a += r.username, r.password && (a += ":" + r.password), a += "@"), 
            a += r.host + r.pathname, (t = "object" === o(r.query) ? e(r.query) : r.query) && (a += "?" !== t.charAt(0) ? "?" + t : t), 
            r.hash && (a += r.hash), a;
        }
    }, m.extractProtocol = f, m.location = l, m.trimLeft = u, m.qs = n, t.exports = m;
}, function(e) {
    return t({}[e], e);
}), t(1631872123685));