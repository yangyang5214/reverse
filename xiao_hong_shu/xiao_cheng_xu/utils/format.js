Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shortenNumber = function(r) {
    if (!/^\d+$/.test(r)) return console.error("参数需要是自然数"), r;
    if (r < 1e4) return String(parseInt(String(r), 10));
    var e = Math.round(r / 1e3) / 10;
    if (e < 1e4) return "".concat(String(e), "万");
    return e = Math.round(e / 1e3) / 10, "".concat(String(e), "亿");
};