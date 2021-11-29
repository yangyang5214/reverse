var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../../@babel/runtime/helpers/defineProperty"), n = e(require("../../../../../@babel/runtime/regenerator")), r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../../../../libs/event-bus")), a = require("../../../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), i = e(require("../../../../../utils/user")), s = require("../../../../../utils/path"), u = require("../../../../../services/note"), d = require("../../../../../libs/vuefy.js");

Component({
    properties: {
        note: Object,
        launchAppParameter: String,
        videoNoteId: String,
        canLaunchApp: Boolean,
        isLaunchError: Boolean,
        feedIndex: Number
    },
    data: {
        noteId: "",
        hasLiked: !1,
        hasCollect: !1,
        likeNum: 0,
        commentNum: 0,
        collectNum: 0
    },
    attached: function() {
        (0, d.computed)(this, {
            likeIconSrc: function() {
                return this.data.note && this.data.note.isLiked ? "./assets/like_white_fill.svg" : "./assets/like_white.svg";
            },
            likeNumText: function() {
                return this.data.note && this.data.note.likes ? this.formatNum(this.data.note.likes) : "点赞";
            },
            commentIconSrc: function() {
                return "./assets/comment_white.svg";
            },
            commentNumText: function() {
                return this.data.note && this.data.note.comments ? this.formatNum(this.data.note.comments) : "评论";
            },
            collectIconSrc: function() {
                return this.data.note && this.data.note.isCollected ? "./assets/collect_white_fill.svg" : "./assets/collect_white.svg";
            },
            collectNumText: function() {
                return this.data.note && this.data.note.collects ? this.formatNum(this.data.note.collects) : "收藏";
            }
        });
    },
    methods: {
        handleTapLike: function() {
            var e = this;
            return r(n.default.mark(function t() {
                var r, s, d, c;
                return n.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (i.default.getUserId()) {
                            t.next = 3;
                            break;
                        }
                        return o.default.emit("goToLogin", {
                            source: "note-like"
                        }), t.abrupt("return");

                      case 3:
                        return r = e.data.note || {}, s = r.id, d = r.isLiked, c = d ? u.dislikeNote : u.likeNote, 
                        t.prev = 6, t.next = 9, c({
                            noteId: s
                        });

                      case 9:
                        e.triggerEvent("actionChange", "like"), d || wx.$eaglet.push(a.tracker[2107]({
                            objectPosition: e.data.feedIndex + 1,
                            noteId: s,
                            trackId: "Null",
                            noteType: "video_note",
                            authorId: r.user.id,
                            noteTarget_trackId: "none"
                        })), t.next = 15;
                        break;

                      case 13:
                        t.prev = 13, t.t0 = t.catch(6);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 6, 13 ] ]);
            }))();
        },
        handleTapCollect: function() {
            var e = this;
            return r(n.default.mark(function r() {
                var s, d, c, l, h, f;
                return n.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (s = e.data, d = s.note, c = s.feedIndex, l = d.id, h = d.isCollected, f = h ? u.deleteCollectNote : u.collectNote, 
                        i.default.getUserId()) {
                            n.next = 6;
                            break;
                        }
                        return o.default.emit("goToLogin", {
                            source: "note-collect"
                        }), n.abrupt("return");

                      case 6:
                        return n.prev = 6, n.next = 9, f({
                            noteId: l
                        });

                      case 9:
                        e.triggerEvent("actionChange", "collect"), h || (0 === c ? wx.$eaglet.push(a.tracker[2112]({
                            objectPosition: e.data.feedIndex + 1,
                            noteId: l,
                            noteType: "video_note",
                            authorId: d.user.id
                        })) : wx.$eaglet.push(a.tracker[2113](t({
                            adsTarget_trackId: "None",
                            noteTarget_trackId: "None",
                            objectPosition: e.data.feedIndex + 1,
                            noteId: l,
                            noteType: "video_note",
                            authorId: d.user.id
                        }, "noteTarget_trackId", "none")))), n.next = 15;
                        break;

                      case 13:
                        n.prev = 13, n.t0 = n.catch(6);

                      case 15:
                      case "end":
                        return n.stop();
                    }
                }, r, null, [ [ 6, 13 ] ]);
            }))();
        },
        handleTapAuthor: function(e) {
            var t = e.currentTarget.dataset.id;
            i.default.ensureLogin().then(function() {
                (0, s.navigateTo)("AuthorPage", {
                    author_id: t
                });
            });
        },
        handleShowComment: function() {
            if (i.default.getUserId()) {
                var e = this.data, t = e.feedIndex, n = e.note, r = n.id, s = n.comments;
                0 === t ? wx.$eaglet.push(a.tracker[2161]({
                    objectPosition: this.data.feedIndex + 1,
                    noteId: r,
                    noteType: "video_note",
                    authorId: n.user.id
                })) : wx.$eaglet.push(a.tracker[2163]({
                    adsTarget_trackId: "None",
                    noteTarget_trackId: "None",
                    objectPosition: this.data.feedIndex + 1,
                    noteId: r,
                    noteType: "video_note",
                    authorId: n.user.id
                })), s && this.triggerEvent("showComment", r);
            } else o.default.emit("goToLogin", {
                source: "note-comments"
            });
        },
        formatNum: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e >= 1e4 ? (e = Math.round(10 * (e / 1e4).toFixed(1)) / 10, "".concat(e, "万")) : e;
        }
    }
});