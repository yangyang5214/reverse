Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/classCallCheck"), i = require("../../../../@babel/runtime/helpers/createClass"), t = function() {
    function t() {
        e(this, t), this.videoMap = {};
    }
    return i(t, [ {
        key: "getIsPlaying",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId;
            return !!this.videoMap[i] && this.videoMap[i].isPlaying;
        }
    }, {
        key: "setIsPlaying",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = e.value;
            this.videoMap[i] && (this.videoMap[i].isPlaying = t);
        }
    }, {
        key: "getIsStoped",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId;
            return !!this.videoMap[i] && this.videoMap[i].isStoped;
        }
    }, {
        key: "setIsStoped",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = e.value;
            this.videoMap[i] && (this.videoMap[i].isStoped = t);
        }
    }, {
        key: "getVideoContext",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = e.self, o = wx.createVideoContext(i, t);
            return o;
        }
    }, {
        key: "init",
        value: function() {
            var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = i.videoIds, o = i.self;
            t.forEach(function(i, t) {
                e.videoMap[i] || (e.videoMap[i] = {
                    context: e.getVideoContext({
                        videoId: i,
                        self: o
                    }),
                    isPlaying: !1
                });
            });
        }
    }, {
        key: "destroy",
        value: function() {
            var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = i.videoIds, o = i.onDestroyCallBack;
            Object.keys(this.videoMap).forEach(function(i) {
                -1 === t.indexOf(i) && delete e.videoMap[i];
            }), o && o();
        }
    }, {
        key: "destroyAll",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.onDestroyAllCallBack;
            this.videoMap = {}, i && i();
        }
    }, {
        key: "pauseAll",
        value: function() {
            var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = i.onPauseAllCallBack;
            Object.keys(this.videoMap).forEach(function(i) {
                e.videoMap[i].isPlaying && e.pause({
                    videoId: i
                });
            }), t && t();
        }
    }, {
        key: "start",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = e.self;
            this.videoMap[i] || (this.videoMap[i] = {
                context: this.getVideoContext({
                    videoId: i,
                    self: t
                }),
                isPlaying: !1,
                isStoped: !1
            });
            var o = this.videoMap[i], a = o || {}, d = (a.context, a.isPlaying);
            d || this.play({
                videoId: i
            });
        }
    }, {
        key: "play",
        value: function() {
            var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = i.videoId, o = this.videoMap[t], a = o || {}, d = a.context;
            Object.keys(this.videoMap).forEach(function(i) {
                e.videoMap[i].isStoped ? e.videoMap[i].context.play() : i !== t && e.stop({
                    videoId: i
                });
            }), o && (d.play(), o.isPlaying = !0, o.isStoped = !1);
        }
    }, {
        key: "replay",
        value: function() {
            var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = i.videoId, o = this.videoMap[t], a = o || {}, d = a.context;
            Object.keys(this.videoMap).forEach(function(i) {
                i !== t && e.stop({
                    videoId: i
                });
            }), o && (d.seek(0), d.play(), o.isPlaying = !0, o.isStoped = !1);
        }
    }, {
        key: "ended",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = this.videoMap[i];
            t && (t.isPlaying = !1, t.isStoped = !0);
        }
    }, {
        key: "pause",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = this.videoMap[i], o = t || {}, a = o.context;
            t && (a.pause(), t.isPlaying = !1);
        }
    }, {
        key: "stop",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            console.log("@@@@");
            var i = e.videoId, t = this.videoMap[i], o = t || {}, a = o.context;
            t && (a.pause(), a.seek(0), t.isPlaying = !1, t.isStoped = !0);
        }
    }, {
        key: "requestFullScreen",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = this.videoMap[i], o = t || {}, a = o.context;
            t && a.requestFullScreen();
        }
    }, {
        key: "exitFullScreen",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.videoId, t = this.videoMap[i], o = t || {}, a = o.context;
            t && a.exitFullScreen();
        }
    } ]), t;
}();

exports.default = t;