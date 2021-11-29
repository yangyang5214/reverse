var e, t = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), i = require("../../../../../@babel/runtime/helpers/objectSpread2"), a = (require("../../../../../libs/vuefy.js"), 
require("../../../../../utils/path")), s = t(require("../../../../../utils/system")), o = require("../../../../../services/note"), n = s.default.getSystemInfo().statusBarHeight, r = require("miniprogram-computed").behavior, d = null;

Component({
    behaviors: [ r ],
    properties: {
        noteId: String,
        note: Object,
        videoNotes: Array,
        canLaunchApp: Boolean
    },
    data: {
        shareUserInfo: {},
        indicatorDots: !1,
        autoplay: !1,
        duration: 400,
        animation: "easeOutCubic",
        vertical: !0,
        isSlideDown: !0,
        showControls: !0,
        isAutoplay: !0,
        isLoop: !1,
        isMuted: !1,
        currentItemId: "",
        currentItemIndex: 0,
        current: 0,
        videoIsPlaying: !1,
        isShowEndBox: !1,
        countTime: 5,
        isNoMore: !1,
        isError: !1,
        errorMsg: "",
        showSlideGuide: !1,
        showComments: !1,
        commmentsData: {},
        shareIconType: "",
        isLaunchError: !1,
        videoStyle: "margin-top: ".concat(n, "px;"),
        lastCurrent: 0,
        isFetchingMoreNotes: !1,
        isFetchingMoreComments: !1,
        isNoMoreComments: !1,
        videoIsPause: !1
    },
    pageLifetimes: {
        hide: function() {
            clearInterval(void 0), clearTimeout(e);
        }
    },
    attached: function() {
        var e = this.data.videoNotes && this.data.videoNotes[0] && this.data.videoNotes[0].id;
        this.setData({
            isFetchingMoreNotes: !1,
            showSlideGuide: !0,
            currentItemId: e
        });
    },
    watch: {
        videoNotes: function(e) {
            e && e.length > 0 && this.setData({
                isFetchingMoreNotes: !1
            });
        },
        current: function(e) {
            var t = this.data, i = t.current, a = t.shareUserInfo;
            a.isShowShareInfo = 0 === e, this.setData({
                shareUserInfo: a
            }), e > i ? this.setData({
                isSlideDown: !0
            }) : this.setData({
                isSlideDown: !1
            });
        },
        isNoMore: function(t) {
            var i = this;
            t ? e = setTimeout(function() {
                i.setData({
                    isNoMore: !1
                });
            }, 2e3) : clearTimeout(e);
        }
    },
    methods: {
        handlePause: function() {
            var e = this.data.currentItemId, t = wx.createVideoContext(e, this);
            t && t.pause();
        },
        handleLaunchError: function() {
            this.setData({
                isLaunchError: !0
            });
        },
        handleFetchMoreComment: function() {
            var e = this, t = this.data, a = t.isNoMoreComments, s = t.isFetchingMoreComments, n = t.commmentsData, r = t.currentItemId;
            if (!a && !s && n && 0 !== n.comments.length) {
                var d = n.comments, c = d[d.length - 1].id;
                this.setData({
                    isFetchingMoreComments: !0
                }), (0, o.getNoteCommentDetail)({
                    noteId: r,
                    endId: c
                }).then(function(t) {
                    e.setData({
                        isFetchingMoreComments: !1
                    });
                    var a = d.concat(t.comments);
                    e.setData({
                        isNoMoreComments: 0 === t.comments.length,
                        commmentsData: i(i({}, e.data.commmentsData), {}, {
                            comments: a
                        })
                    });
                });
            }
        },
        handleShowComment: function(e) {
            var t = this, i = e.detail;
            this.data.commmentsData && this.data.commmentsData.comments && this.data.commmentsData.targetNoteId === i ? this.setData({
                showComments: !0
            }) : (0, o.getNoteCommentDetail)({
                noteId: i
            }).then(function(e) {
                t.setData({
                    showComments: !0,
                    isNoMoreComments: !1,
                    commmentsData: e
                });
            });
        },
        handleChange: function(e) {
            var t = e.detail.current, i = this.data, a = i.videoNotes, s = i.lastCurrent, o = i.isFetchingMoreNotes, n = a[s];
            n && wx.createVideoContext(n.id, this).pause();
            var r = {};
            if (t === a.length - 1) {
                if (o) return;
                r.isFetchingMoreNotes = !0, this.triggerEvent("fetchMore");
            }
            r.videoIsPause = !1, this.setData(r);
        },
        handleAnimationFnish: function(e) {
            var t = this;
            d && clearTimeout(d), d = setTimeout(function() {
                var i = t.data.videoNotes, a = e.detail.current;
                if (t.setData({
                    lastCurrent: a
                }), i[a]) {
                    var s = i[a].id, o = i[a] && i[a].user && i[a].user.id;
                    t.triggerEvent("changeNote", {
                        id: s,
                        authorId: o
                    }), wx.createVideoContext(s, t).play(), t.setData({
                        currentItemId: s,
                        currentItemIndex: a
                    });
                }
            }, 200);
        },
        handleVideoPlay: function() {
            this.setData({
                videoIsPause: !1
            });
        },
        handleVideo: function() {
            var e = this.data, t = e.videoNotes, i = e.currentItemId, a = t.findIndex(function(e) {
                return e.id === i;
            });
            if (t[a]) {
                var s = wx.createVideoContext(i, this);
                this.data.videoIsPause ? s.play() : s.pause(), this.setData({
                    videoIsPause: !this.data.videoIsPause
                });
            }
        },
        handleVideoEnded: function(e) {},
        handleReplay: function(e) {
            var t = e.currentTarget.dataset.id, i = this.data.videoNotes, a = i.findIndex(function(e) {
                return e.id === t;
            });
            i[a] && (this.triggerEvent("handleSetVideoFeedListValue", {
                index: a,
                key: "isEnd",
                value: !1
            }), wx.createVideoContext(t, this).play(), this.setData({
                isShowEndBox: !1
            }));
        },
        handleErrorBtn: function() {
            (0, a.switchTab)("HomePage");
        },
        closeSlideGuide: function() {
            this.setData({
                showSlideGuide: !1
            });
        },
        handleComments: function() {
            this.setData({
                showComments: !this.data.showComments
            });
        },
        handleFocuse: function(e) {
            this.triggerEvent("focuseOn", e);
        },
        handleActionChange: function(e) {
            var t = e.detail, a = this.data, s = a.videoNotes, o = a.currentItemId, n = {}, r = s.findIndex(function(e) {
                return e.id === o;
            }), d = s[r];
            switch (t) {
              case "collect":
                n = i(i({}, d), {}, {
                    isCollected: !d.isCollected,
                    collects: d.isCollected ? d.collects - 1 : d.collects + 1
                });
                break;

              case "like":
                n = i(i({}, d), {}, {
                    isLiked: !d.isLiked,
                    likes: d.isLiked ? d.likes - 1 : d.likes + 1
                });
                break;

              default:
                n = {};
            }
            this.triggerEvent("handleSetVideoFeedListObjectValue", {
                index: r,
                value: n
            });
        }
    }
});