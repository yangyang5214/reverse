var r, t, e, n = require("../../@babel/runtime/helpers/typeof");

module.exports = (r = {}, e = function(t, e) {
    if (!r[t]) return require(e);
    if (!r[t].status) {
        var o = r[t].m;
        o._exports = o._tempexports;
        var u = Object.getOwnPropertyDescriptor(o, "exports");
        u && u.configurable && Object.defineProperty(o, "exports", {
            set: function(r) {
                "object" === n(r) && r !== o._exports && (o._exports.__proto__ = r.__proto__, Object.keys(r).forEach(function(t) {
                    o._exports[t] = r[t];
                })), o._tempexports = r;
            },
            get: function() {
                return o._tempexports;
            }
        }), r[t].status = 1, r[t].func(r[t].req, o, o.exports);
    }
    return r[t].m.exports;
}, (t = function(t, e, n) {
    r[t] = {
        status: 0,
        func: e,
        req: n,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
})(1631872123686, function(r, t, e) {
    var n = r("./v1"), o = r("./v4"), u = o;
    u.v1 = n, u.v4 = o, t.exports = u;
}, function(r) {
    return e({
        "./v1": 1631872123687,
        "./v4": 1631872123690
    }[r], r);
}), t(1631872123687, function(r, t, e) {
    var n, o, u = r("./lib/rng"), i = r("./lib/bytesToUuid"), s = 0, c = 0;
    t.exports = function(r, t, e) {
        var f = t && e || 0, a = t || [], p = (r = r || {}).node || n, v = void 0 !== r.clockseq ? r.clockseq : o;
        if (null == p || null == v) {
            var l = u();
            null == p && (p = n = [ 1 | l[0], l[1], l[2], l[3], l[4], l[5] ]), null == v && (v = o = 16383 & (l[6] << 8 | l[7]));
        }
        var b = void 0 !== r.msecs ? r.msecs : new Date().getTime(), x = void 0 !== r.nsecs ? r.nsecs : c + 1, d = b - s + (x - c) / 1e4;
        if (d < 0 && void 0 === r.clockseq && (v = v + 1 & 16383), (d < 0 || b > s) && void 0 === r.nsecs && (x = 0), 
        x >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        s = b, c = x, o = v;
        var _ = (1e4 * (268435455 & (b += 122192928e5)) + x) % 4294967296;
        a[f++] = _ >>> 24 & 255, a[f++] = _ >>> 16 & 255, a[f++] = _ >>> 8 & 255, a[f++] = 255 & _;
        var m = b / 4294967296 * 1e4 & 268435455;
        a[f++] = m >>> 8 & 255, a[f++] = 255 & m, a[f++] = m >>> 24 & 15 | 16, a[f++] = m >>> 16 & 255, 
        a[f++] = v >>> 8 | 128, a[f++] = 255 & v;
        for (var y = 0; y < 6; ++y) a[f + y] = p[y];
        return t || i(a);
    };
}, function(r) {
    return e({
        "./lib/rng": 1631872123688,
        "./lib/bytesToUuid": 1631872123689
    }[r], r);
}), t(1631872123688, function(r, t, e) {
    var n = r("crypto");
    t.exports = function() {
        return n.randomBytes(16);
    };
}, function(r) {
    return e({}[r], r);
}), t(1631872123689, function(r, t, e) {
    for (var n = [], o = 0; o < 256; ++o) n[o] = (o + 256).toString(16).substr(1);
    t.exports = function(r, t) {
        var e = t || 0, o = n;
        return [ o[r[e++]], o[r[e++]], o[r[e++]], o[r[e++]], "-", o[r[e++]], o[r[e++]], "-", o[r[e++]], o[r[e++]], "-", o[r[e++]], o[r[e++]], "-", o[r[e++]], o[r[e++]], o[r[e++]], o[r[e++]], o[r[e++]], o[r[e++]] ].join("");
    };
}, function(r) {
    return e({}[r], r);
}), t(1631872123690, function(r, t, e) {
    var n = r("./lib/rng"), o = r("./lib/bytesToUuid");
    t.exports = function(r, t, e) {
        var u = t && e || 0;
        "string" == typeof r && (t = "binary" === r ? new Array(16) : null, r = null);
        var i = (r = r || {}).random || (r.rng || n)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) for (var s = 0; s < 16; ++s) t[u + s] = i[s];
        return t || o(i);
    };
}, function(r) {
    return e({
        "./lib/rng": 1631872123688,
        "./lib/bytesToUuid": 1631872123689
    }[r], r);
}), e(1631872123686));