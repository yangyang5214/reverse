var t = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../utils/user")), e = require("../../../../../services/comment.js"), n = require("../../../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), o = !1, a = t.default.getUserInfo();

Component({
    behaviors: [],
    properties: {
        noteId: String,
        authorId: String,
        commentId: {
            type: String,
            value: ""
        },
        commentHolder: {
            type: String,
            value: "写评论..."
        },
        focus: {
            type: Boolean,
            value: !1
        },
        hasMask: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        avatar: a && a.appUserInfo && a.appUserInfo.avatar,
        content: "",
        adjustPosition: !0,
        inputStyle: "",
        isFocus: !1
    },
    methods: {
        handleToComment: function() {
            var a = this, i = this.data, r = i.content, u = i.noteId, s = i.commentId, l = i.authorId;
            this.triggerEvent("hideCommentInput"), r && !o && (o = !0, t.default.ensureLogin().then(function() {
                r ? (0, e.comment)({
                    content: r,
                    noteId: u,
                    commentId: s
                }).then(function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    o = !1;
                    var e = t && t.length && t[0] && t[0].id;
                    wx.$eaglet.push(n.tracker[2573]({
                        commentId: e,
                        isReply: !1,
                        parentCommentId: "",
                        rootCommentId: "",
                        noteId: u,
                        authorId: l,
                        inDemoMode: !1
                    })), wx.showToast({
                        title: "评论已发布",
                        icon: "none"
                    }), a.triggerEvent("commented"), a.setData({
                        content: ""
                    });
                }).catch(function(t) {
                    o = !1, t.detail && t.detail.msg && wx.showToast({
                        title: t.detail.msg,
                        icon: "none"
                    });
                }) : o = !1;
            }));
        },
        handleClickInput: function() {},
        handleInputBlur: function() {
            var t = this;
            setTimeout(function() {
                o || t.triggerEvent("blur");
            }, 100);
        },
        handleHideInput: function() {
            this.triggerEvent("blur");
        },
        handleInputValue: function(t) {
            this.setData({
                content: t.detail.value
            });
        }
    }
});