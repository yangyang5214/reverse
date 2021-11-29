module.exports = function(n, t, u) {
    var l, e, r, o, a;
    function i() {
        var c = Date.now() - o;
        c < t && c > 0 ? l = setTimeout(i, t - c) : (l = null, u || (a = n.apply(r, e), 
        r = e = null));
    }
    null == t && (t = 100);
    var c = function() {
        r = this, e = arguments, o = Date.now();
        var c = u && !l;
        return l || (l = setTimeout(i, t)), c && (a = n.apply(r, e), r = e = null), a;
    };
    return c.clear = function() {
        l && (clearTimeout(l), l = null);
    }, c;
};