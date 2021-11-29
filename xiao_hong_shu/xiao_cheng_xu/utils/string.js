Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isWebViewLink = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return /^(https?):\/\/.+$/.test(e);
}, exports.escapeNoteString = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/(\u2028|\u2029)/g, "\n");
}, exports.compareVersion = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    e = e.split("."), t = t.split(".");
    var r = Math.max(e.length, t.length);
    for (;e.length < r; ) e.push("0");
    for (;t.length < r; ) t.push("0");
    for (var n = 0; n < r; n++) {
        var o = parseInt(e[n], 10), u = parseInt(t[n], 10);
        if (o > u) return 1;
        if (o < u) return -1;
    }
    return 0;
}, exports.toLowerLine = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}, exports.subMaxLengthString = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, r = e.match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\S/g), n = r.length, o = [], u = 0;
    if (n > t) return r.some(function(e) {
        if (u > t - 3) return !0;
        o.push(e), u++;
    }), o.join("") + "...";
    return e;
};