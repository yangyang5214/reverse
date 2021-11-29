require("../@babel/runtime/helpers/Arrayincludes");

var e = require("../@babel/runtime/helpers/slicedToArray");

require("../@babel/runtime/helpers/Objectentries");

var r = Page;

Page = function(n) {
    var t = n.mixins;
    Array.isArray(t) && (Reflect.deleteProperty(n, "mixins"), function(r, n) {
        r.reverse().forEach(function(r) {
            if ("Object" === Object.prototype.toString.call(r).slice(8, -1)) for (var t = function() {
                var t = e(o[i], 2), c = t[0], l = t[1];
                if ("data" === c) n.data = Object.assign({}, l, n.data); else if (a.includes(c)) {
                    var s = n[c];
                    n[c] = function() {
                        for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                        return l.call.apply(l, [ this ].concat(r)), s && s.call.apply(s, [ this ].concat(r));
                    };
                } else n = Object.assign({}, r, n);
            }, i = 0, o = Object.entries(r); i < o.length; i++) t();
        });
    }(t, n)), r(n);
}, Object.entries || (Object.entries = function(e) {
    for (var r = Object.keys(e), a = r.length, n = new Array(a); a--; ) n[a] = [ r[a], e[r[a]] ];
    return n;
});

var a = [ "data", "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap" ];