var r = require("./shallow-clone"), e = require("kind-of");

function t(n, o) {
    switch (e(n)) {
      case "object":
        return function(r, n) {
            if ("function" == typeof n) return n(r);
            if ("object" === e(r)) {
                var o = new r.constructor();
                for (var u in r) o[u] = t(r[u], n);
                return o;
            }
            return r;
        }(n, o);

      case "array":
        return function(r, e) {
            for (var n = new r.constructor(r.length), o = 0; o < r.length; o++) n[o] = t(r[o], e);
            return n;
        }(n, o);

      default:
        return r(n);
    }
}

module.exports = t;