var t = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../../../utils/discovery"), n = t(require("../../../../../utils/user")), r = require("../../../../../libs/vuefy.js"), i = require("../../../../../utils/path");

Component({
    properties: {
        commentsCount: Number,
        commentList: Array,
        noteId: String
    },
    ready: function() {
        (0, r.computed)(this, {
            commentListData: function() {
                var t = this.data.commentList.map(function(t) {
                    var n = t.content.split("\n").map(function(t) {
                        return (0, e.getFormatedExpressionArr)(t, [], []);
                    });
                    return Object.assign({}, t, {
                        formatedDesc: n
                    });
                });
                return t;
            }
        });
    },
    methods: {
        handleGoCommentPage: function() {
            var t = this.data.noteId;
            n.default.ensureLogin().then(function() {
                (0, i.navigateTo)("NoteCommentDetail", {
                    id: t
                });
            });
        },
        handleShowCommentInput: function() {
            var t = this;
            this.data.noteId;
            n.default.ensureLogin().then(function() {
                t.setData({
                    commentid: "",
                    showCommentInput: !0
                });
            });
        }
    }
});