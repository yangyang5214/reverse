Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = function(e, t) {
    var r, o, n, a = function() {
        for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        e.apply(void 0, n), o = r;
    };
    return function() {
        for (var e = arguments.length, i = new Array(e), l = 0; l < e; l++) i[l] = arguments[l];
        if (r = Date.now(), n && (clearTimeout(n), n = null), o) {
            var u = t - (r - o);
            u < 0 ? a.apply(void 0, i) : n = setTimeout(function() {
                a.apply(void 0, i);
            }, u);
        } else a();
    };
};