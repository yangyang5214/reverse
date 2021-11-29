Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = require("../../../@babel/runtime/helpers/createForOfIteratorHelper");

var e = {
    getTextLength: function(r, e) {
        for (var t = 0, n = 0; n < r.length; n++) {
            var o = r.charCodeAt(n);
            o >= 1 && o <= 126 || 65376 <= o && o <= 65439 ? t++ : t += e ? 2 : 1;
        }
        return t;
    },
    transferBorder: function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = r.match(/(\w+)px\s(\w+)\s(.*)/), t = {};
        return e && (t = {
            width: +e[1],
            style: e[2],
            color: e[3]
        }), e ? t : null;
    },
    transferColor: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = "#";
        (e = (e = e.replace(/^rgba?\(/, "").replace(/\)$/, "")).split(", ")).length > 3 && (e.length = 3);
        var n, o = r(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                var a = n.value;
                t += (a = parseInt(a || 0)) < 10 ? "0" + a : a.toString(16);
            }
        } catch (r) {
            o.e(r);
        } finally {
            o.f();
        }
        return t;
    },
    transferPadding: function() {
        for (var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0 0 0 0", e = 0, t = (r = r.split(" ")).length; e < t; e++) r[e] = +r[e].replace("px", "");
        return r;
    },
    transferBoxShadow: function() {
        var r, e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (t && "none" !== t) return (e = t.match(/(\w+)\s(\w+)\s(\w+)\s(rgb.*)/)) ? (e.shift(), 
        t = e, r = e[3] || "#ffffff") : (r = (e = t.split(") "))[0] + ")", t = e[1].split("px ")), 
        {
            offsetX: +t[0] || 0,
            offsetY: +t[1] || 0,
            blur: +t[2] || 0,
            color: r
        };
    },
    getUid: function(r) {
        return (r = r || "") + "xxyxxyxx".replace(/[xy]/g, function(r) {
            var e = 16 * Math.random() | 0;
            return ("x" === r ? e : 3 & e | 8).toString(16);
        });
    }
};

exports.default = e;