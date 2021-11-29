var t, e, r = require("../../@babel/runtime/helpers/typeof");

module.exports = (t = {}, e = function(e, s) {
    if (!t[e]) return require(s);
    if (!t[e].status) {
        var o = t[e].m;
        o._exports = o._tempexports;
        var n = Object.getOwnPropertyDescriptor(o, "exports");
        n && n.configurable && Object.defineProperty(o, "exports", {
            set: function(t) {
                "object" === r(t) && t !== o._exports && (o._exports.__proto__ = t.__proto__, Object.keys(t).forEach(function(e) {
                    o._exports[e] = t[e];
                })), o._tempexports = t;
            },
            get: function() {
                return o._tempexports;
            }
        }), t[e].status = 1, t[e].func(t[e].req, o, o.exports);
    }
    return t[e].m.exports;
}, function(e, r, s) {
    t[e] = {
        status: 0,
        func: r,
        req: s,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
}(1631872123683, function(t, e, r) {
    e.exports = function(t, e) {
        if (e = e.split(":")[0], !(t = +t)) return !1;
        switch (e) {
          case "http":
          case "ws":
            return 80 !== t;

          case "https":
          case "wss":
            return 443 !== t;

          case "ftp":
            return 21 !== t;

          case "gopher":
            return 70 !== t;

          case "file":
            return !1;
        }
        return 0 !== t;
    };
}, function(t) {
    return e({}[t], t);
}), e(1631872123683));