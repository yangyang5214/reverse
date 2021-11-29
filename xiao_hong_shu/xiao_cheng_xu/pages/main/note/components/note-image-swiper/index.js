var e, t = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../../../@babel/runtime/regenerator")), r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../../../../utils/path"), n = t(require("../../../../../utils/api")), u = require("../../../../../utils/image"), s = require("../../../../../libs/vuefy.js"), d = t(require("../../../../../libs/event-bus"));

Component({
    properties: {
        images: Object,
        imageTags: Array,
        swiperHeight: Number,
        authorId: String,
        noteId: String
    },
    data: {
        current: 1,
        opacity: 0,
        zindex: 0,
        stickerPointData: {},
        hideTag: !1
    },
    ready: (e = r(a.default.mark(function e() {
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.$instance.globalData.promise;

              case 2:
                (0, s.computed)(this, {
                    formatedImages: function() {
                        return this.data.images.map(function(e) {
                            return Object.assign({}, e, {
                                url: (0, u.getFormatedUrl)({
                                    url: e.url,
                                    width: 800,
                                    quality: 85
                                })
                            });
                        });
                    }
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return e.apply(this, arguments);
    }),
    methods: {
        handleAudioTagTap: function() {
            d.default.emit("tapAudioTagTap");
        },
        handleSwiperTagTap: function(e) {
            if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.sticker) {
                var t = e.currentTarget.dataset.sticker, a = t.event.value.link || "", r = a.indexOf("/goods/"), n = a.indexOf("/user/"), u = "goods" === t.type, s = "user" === t.type, d = a.indexOf("/page/") > -1 || a.indexOf("/tag/") > -1;
                if (u) {
                    var o = a.substr(r + "/goods/".length, 24);
                    (0, i.navigateTo)("Webview", {
                        link: "/goods/".concat(o)
                    });
                } else if (s) {
                    var g = a.substr(n + "/user/".length, 24);
                    (0, i.navigateTo)("AuthorPage", {
                        id: g
                    });
                } else d && a ? (0, i.navigateTo)("Webview", {
                    link: a
                }) : (0, i.navigateTo)("SearchResult", {
                    keyValue: t.event.value.name
                });
            }
        },
        handleSwiperItemTap: function() {
            this.setData({
                hideTag: !this.data.hideTag
            });
        },
        handleImageLoad: function(e) {
            e && e.target && e.target.dataset && void 0 !== e.target.dataset.index && this.setData({
                opacity: 1,
                zindex: 1
            });
        },
        handleNoteImageSwitched: function(e) {
            if (e && e.detail && void 0 !== e.detail.current) {
                var t = e.detail.current, a = Math.min(this.data.images.length, t + 1);
                this.setData({
                    current: a
                }), this.triggerEvent("noteImageSwitched", {
                    current: a
                });
            }
        }
    }
});