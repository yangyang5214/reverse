var t = require("../@babel/runtime/helpers/defineProperty");

function e(t, e, a, n) {
    var r = t["$" + e] || [];
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return t.$target && (r.push(t.$target), t["$" + e] = r), a;
        },
        set: function(t) {
            t !== a && (n && n(t), r.length && setTimeout(function() {
                r.forEach(function(t) {
                    return t();
                });
            }, 0), a = t);
        }
    });
}

module.exports = {
    watch: function(t, a) {
        Object.keys(a).forEach(function(n) {
            e(t.data, n, t.data[n], function(e) {
                a[n].call(t, e);
            });
        });
    },
    computed: function(a, n) {
        var r = Object.keys(n);
        Object.keys(a.data).forEach(function(t) {
            e(a.data, t, a.data[t]);
        });
        var c = r.reduce(function(e, r) {
            return a.data.$target = function() {
                a.setData(t({}, r, n[r].call(a)));
            }, e[r] = n[r].call(a), a.data.$target = null, e;
        }, {});
        a.setData(c);
    }
};