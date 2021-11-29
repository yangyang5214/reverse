var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../@babel/runtime/regenerator")), a = require("../../../../../@babel/runtime/helpers/defineProperty"), n = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../../../libs/vuefy.js"), l = e(require("../../../../../utils/user")), o = e(require("../../../../../utils/api")), u = e(require("../../../../../libs/event-bus")), i = require("../../../../../utils/path"), s = require("../../../../../services/note"), c = {
    like: {
        type: "like",
        tapNote: s.likeNote,
        disTapNote: s.dislikeNote,
        hasHandled: "hasLiked",
        num: "likeNum"
    },
    collect: {
        type: "collect",
        tapNote: s.collectNote,
        disTapNote: s.deleteCollectNote,
        hasHandled: "hasCollected",
        num: "collectNum"
    }
};

Component({
    properties: {
        liked: Boolean,
        collected: Boolean,
        likedCount: Number,
        sharedCount: Number,
        collectedCount: Number,
        commentCount: Number,
        noteId: String,
        illegalInfo: Object,
        supportComment: Boolean
    },
    data: {
        shareIconSrc: "../../../../../assets/images/share_black.svg",
        hasCollected: null,
        collectNum: null,
        hasLiked: null,
        likeNum: null,
        sharedNum: null
    },
    ready: function() {
        var e = this.data, t = e.collected, a = e.collectedCount, n = e.liked, l = e.likedCount, o = e.sharedCount, u = e.commentCount;
        this.setData({
            hasCollected: t,
            collectNum: a,
            hasLiked: n,
            likeNum: l,
            sharedNum: o,
            commentNum: u
        }), (0, r.computed)(this, {
            likeIconSrc: function() {
                return this.data.hasLiked ? "../../../../../assets/images/like_red.svg" : "../../../../../assets/images/like_black.svg";
            },
            collectIconSrc: function() {
                return this.data.hasCollected ? "../../../../../assets/images/collect_yellow.svg" : "../../../../../assets/images/collect_black.svg";
            },
            likeNumText: function() {
                var e = this.data.likeNum;
                return e ? this._formatNum(e) : "点赞";
            },
            collectNumText: function() {
                var e = this.data.collectNum;
                return e ? this._formatNum(e) : "收藏";
            },
            sharedNumText: function() {
                var e = this.data.sharedNum;
                return e ? this._formatNum(e) : "";
            },
            commentNumText: function() {
                var e = this.data.commentCount;
                return e ? this._formatNum(e) : "评论";
            }
        });
    },
    methods: {
        handleTapCollect: function() {
            this._handleTap(c.collect);
        },
        handleTapLike: function() {
            u.default.emit("showFullAddMp"), this._handleTap(c.like);
        },
        handleGoCommentPage: function() {
            var e = this;
            l.default.ensureLogin().then(function() {
                if (e.data.supportComment) {
                    e.data.commentNum;
                    e.triggerEvent("triggerShowCommentInput");
                } else (0, i.navigateTo)("NoteCommentDetail", {
                    id: e.data.noteId,
                    from: "engagebar"
                });
            });
        },
        _formatNum: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e >= 1e4 ? (e = Math.round(10 * (e / 1e4).toFixed(1)) / 10, "".concat(e, "万")) : e;
        },
        _checkIsIllegal: function() {
            var e = this.data.illegalInfo;
            if (e && e.status) {
                var t;
                switch (e.status) {
                  case 1:
                    t = "该笔记已删除";
                    break;

                  case 2:
                    t = "该笔记已违规";
                    break;

                  default:
                    t = "该笔记已删除";
                }
                return o.default.showToast({
                    title: t,
                    icon: "none"
                }), !0;
            }
            return !1;
        },
        _handleTap: function() {
            var e = arguments, r = this;
            return n(t.default.mark(function n() {
                var o, i, s, c, d, m, h, f, p, N, k, g;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (i = e.length > 0 && void 0 !== e[0] ? e[0] : {}, s = r.data, c = s.noteId, d = s.hasCollected, 
                        m = s.collectNum, h = s.hasLiked, f = s.likeNum, p = "like" === i.type ? h : d, 
                        N = "like" === i.type ? f : m, k = p ? i.disTapNote : i.tapNote, !r._checkIsIllegal()) {
                            t.next = 7;
                            break;
                        }
                        return t.abrupt("return");

                      case 7:
                        if (l.default.getUserId()) {
                            t.next = 10;
                            break;
                        }
                        return u.default.emit("goToLogin", {
                            source: "note-".concat(i.type)
                        }), t.abrupt("return");

                      case 10:
                        return t.next = 12, l.default.ensureLogin();

                      case 12:
                        return r.setData((a(o = {}, i.hasHandled, !p), a(o, i.num, p ? N - 1 : N + 1), o)), 
                        t.prev = 13, t.next = 16, k({
                            noteId: c
                        });

                      case 16:
                        p || r.triggerEvent("triggerTrackAction", i.type), t.next = 22;
                        break;

                      case 19:
                        t.prev = 19, t.t0 = t.catch(13), r.setData((a(g = {}, i.hasHandled, p), a(g, i.num, N), 
                        g));

                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 13, 19 ] ]);
            }))();
        }
    }
});