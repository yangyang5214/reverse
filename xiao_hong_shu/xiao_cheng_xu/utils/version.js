Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.versionCompare = function(r, t, e) {
    var n, o;
    if (e = e || 2, !r || !t) throw new Error("Need two versions to compare!");
    if (r === t) return 0;
    return o = Math.max(r.split(".").length, t.split(".").length), n = function(r, t) {
        return function(e) {
            return function(r, t, e) {
                var n;
                if (arguments.length < 3) return 0;
                return n = r.split("."), r = 0, n.forEach(function(n, o, i) {
                    r += n * Math.pow(10, t * e - 1), t--;
                }), r;
            }(e, r, t);
        };
    }(o, e), r = n(r), t = n(t), r > t ? 1 : r < t ? -1 : 0;
};