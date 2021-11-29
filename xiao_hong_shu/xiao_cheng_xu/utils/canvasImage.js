Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), n = require("./track"), i = new (function() {
    function i() {
        e(this, i), this.imageInfoCache = {}, this.cdnOrigin = "https://ci.xiaohongshu.com/";
    }
    return t(i, [ {
        key: "privateGetImageInfo",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return new Promise(function(i, o) {
                var a;
                t && (a = setTimeout(function() {
                    o();
                }, 3e3)), wx.getImageInfo({
                    src: e,
                    success: function(e) {
                        a && clearTimeout(a), i(e);
                    },
                    fail: function() {
                        a && clearTimeout(a), o({}), (0, n.trackNormalData)({
                            action: "get_image_info_error",
                            property: e
                        });
                    }
                });
            });
        }
    }, {
        key: "getImageInfo",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.imageInfoCache, n = this.cdnOrigin, i = this.privateGetImageInfo;
            return new Promise(function(o) {
                var a = e.pathId, r = e.width, c = e.path;
                if (c) i(c).then(function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(e);
                }); else {
                    var u = r ? "".concat(a, "_").concat(r) : "".concat(a);
                    if (!t[u] || t[u].isGetting) if (t[u] && t[u].isGetting) t[u].queue.push(function(e) {
                        o(e);
                    }); else {
                        t[u] || (t[u] = {
                            queue: [],
                            info: {},
                            isGetting: !0
                        });
                        var s = c || "".concat(n).concat(a);
                        r && !c && (s = "".concat(s, "?imageView2/0//w/").concat(r), console.log(s)), i(s).then(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.path;
                            t[u].isGetting = !1, e.url = s, t[u].info = e, t[u].queue.forEach(function(t) {
                                t(e);
                            }), t[u].queue = [], n || delete t[u], o(e);
                        });
                    } else o(t[u].info);
                }
            });
        }
    } ]), i;
}())();

exports.default = i;