Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.TagUtil = void 0;

var e = require("../../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../../@babel/runtime/helpers/createClass"), t = require("../../../../utils/icons"), n = function() {
    function n() {
        e(this, n);
    }
    return r(n, [ {
        key: "transform",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0, n = r.map(function(r) {
                var n = [];
                return e.some(function(e) {
                    return e.fileid === r && (n = e.stickers.floating.map(function(e) {
                        var r = {};
                        try {
                            r.anchorCenter = JSON.parse("[" + e.anchorCenter.replace("{", "").replace("}", "") + "]"), 
                            r.containerSize = JSON.parse("[" + e.containerSize.replace("{", "").replace("}", "") + "]"), 
                            r.unitCenter = JSON.parse("[" + e.unitCenter.replace("{", "").replace("}", "") + "]");
                        } catch (r) {
                            return e;
                        }
                        r.icon = (0, t.getStickerUrl)(e.type), "audio" === e.type && (r.duration = (e.audioInfo.duration / 1e3).toFixed(0));
                        var n = 1 === e.style, i = 100 * r.unitCenter[0], a = (r.unitCenter[1], 206), l = 4;
                        return (n && i >= 55 || !n && i <= 45) && (l = 10), n && i <= 20 || !n && i >= 80 ? (l = 1.28, 
                        r.innerStyle = n ? "margin-left: -50%;" : "margin-left: -65%;") : r.innerStyle = "margin-left: -50%;", 
                        a = n ? (100 - i) * l : i * l, r.textStyle = "max-width: ".concat(a, "rpx;"), Object.assign({}, e, r);
                    })), e.fileid === r;
                }), n;
            });
            return n;
        }
    } ]), n;
}();

exports.TagUtil = n;