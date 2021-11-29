var e, t = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), n = require("../../../../../@babel/runtime/helpers/toConsumableArray"), o = t(require("../../../../../@babel/runtime/regenerator")), r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../../../../services/note"), i = require("../../../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), s = (require("../../../../../utils/path"), 
t(require("../../../../../utils/user")), t(require("../../../../../utils/api"))), u = require("../../../../../libs/vuefy.js");

Component({
    properties: {
        user: Object,
        poi: Object,
        note: Object,
        commentList: Array,
        imageTags: Array,
        swiperHeight: Number,
        isExpand: Boolean,
        noteItemHeight: {
            type: Number,
            observer: function(e, t) {
                t > 0 && e !== t && this.setData({
                    isSettingHeight: !1
                });
            }
        },
        supportComment: {
            type: Boolean
        },
        noteTags: {
            type: Array,
            value: []
        }
    },
    data: {
        isFollowed: null,
        isSettingHeight: !1,
        subComment: [],
        commentsTotal: 0,
        isAddComment: !1,
        current: 1,
        isIOS: !1,
        showCommentInput: !1,
        commentInputFocus: !0
    },
    ready: (e = r(o.default.mark(function e() {
        var t, n, r;
        return o.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                this.setData({
                    isIOS: s.default.$instance.globalData.isIOS
                }), (t = this.data).user, n = t.note, r = t.commentList, this.setData({
                    subComment: r,
                    commentsTotal: n.comments
                }), (0, u.computed)(this, {
                    totalImgCount: function() {
                        var e = this.data.note;
                        return Number(e.imageList.length);
                    }
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return e.apply(this, arguments);
    }),
    methods: {
        handleTrackAction: function(e) {
            var t = e.detail, n = this.data.note;
            "like" === t ? wx.$eaglet.push(i.tracker[2656]({
                objectPosition: 1,
                noteId: n.id,
                noteType: "short_note",
                authorId: n.user.id
            })) : "collect" === t && wx.$eaglet.push(i.tracker[2659]({
                objectPosition: 1,
                noteId: n.id,
                noteType: "short_note",
                authorId: n.user.id
            }));
        },
        handleShowCommentInput: function() {
            var e = this.data.note || {}, t = e.id, n = (e.type, e.user), o = void 0 === n ? {} : n;
            wx.$eaglet.push(i.tracker[2759]({
                objectPosition: 1,
                noteId: t,
                noteType: "short_note",
                authorId: o.id
            })), this.setData({
                showCommentInput: !0
            });
        },
        handleHideCommentInput: function() {
            this.setData({
                showCommentInput: !1
            });
        },
        handleCreateComment: function() {
            var e = (this.data.note || {}).id;
            e && (this._fetchNoteSummaryComment({
                id: e
            }), this.setData({
                showCommentInput: !1
            }));
        },
        handleNoteImageSwitched: function(e) {
            var t = e.detail.current;
            this.setData({
                current: t
            });
        },
        _fetchNoteSummaryComment: function(e) {
            var t = this, o = e.id, r = this.data.subComment;
            (0, a.getNoteCommentDetail)({
                noteId: o,
                pageSize: 1
            }).then(function(e) {
                var o = e.comments.map(function(e) {
                    return e.user.name = e.user.nickname, e;
                }), a = n(r);
                a.splice(0, 1, o[0]), t.setData({
                    subComment: a,
                    commentsTotal: e.commentsTotal,
                    isAddComment: !0
                });
            });
        }
    }
});