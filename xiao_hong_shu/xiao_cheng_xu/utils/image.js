Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFormatedUrl = exports.getCiUrl = exports.getCiUrlById = exports.getImageId = exports.replaceImageOrigin = exports.isImageUrl = exports.isCiUrl = exports.replaceProtocol = exports.IMAGE_SOURCE_TYPE = void 0;

var t = /(https?):\/\/(img|ci)\.xiaohongshu\.com\//, o = /(https?):\/\/sns-img-(qc|ws|qn|bd|up)\.xhscdn\.com\//, e = {
    IMG_SOURCE: "img",
    CI_SOURCE: "ci"
};

exports.IMAGE_SOURCE_TYPE = e;

var r = function(t) {
    return (t = t || "").replace(/https?:\/\//, "");
};

exports.replaceProtocol = r;

exports.isCiUrl = function(t) {
    return /ci\.xiaohongshu\.com/.test(t = t || "");
};

exports.isImageUrl = function(t) {
    return /img\.xiaohongshu\.com/.test(t = t || "");
};

var c = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = e;
    return t.test(e) ? r = r.replace(t, "") : o.test(e) && (r = r.replace(o, "")), r;
};

exports.replaceImageOrigin = c;

var a = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e = t;
    o || (e = c(e));
    var r = e.substr(0, 36);
    return r;
};

exports.getImageId = a;

exports.getCiUrlById = function(t) {
    return "".concat(e.CI_SOURCE, ".").concat("xiaohongshu.com", "/").concat(t);
};

exports.getCiUrl = function(t) {
    var o = t = t || {}, c = o.width, n = o.height, s = o.url, i = o.quality, p = o.abbrevType, u = o.isMogr2, g = o.scale, l = o.blur, h = "".concat(e.CI_SOURCE, ".").concat("xiaohongshu.com", "/");
    i = i || 92, s = (s = r(s)).replace(h, "");
    var x = a(s, !0), m = [];
    return u ? (g && m.push("/thumbnail/!".concat(g, "p")), l && m.push("/blur/".concat(l.radius, "x").concat(l.sigma)), 
    m.push("/quality/".concat(i)), "".concat("http://").concat(h).concat(x, "?imageMogr2").concat(m.join(""))) : (c && m.push("/w/".concat(c)), 
    n && m.push("/h/".concat(n)), m.push("/q/".concat(i)), p = p || 0, "".concat("http://").concat(h).concat(x, "?imageView2/").concat(p, "/").concat(m.join("")));
};

exports.getFormatedUrl = function(t) {
    var o = (t = t || {}).url;
    return o = r(o), o = "https://".concat(o);
};