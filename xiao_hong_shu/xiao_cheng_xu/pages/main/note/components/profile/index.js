var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../@babel/runtime/regenerator")), r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../../../../libs/vuefy.js"), a = require("../../../../../utils/path"), i = e(require("../../../../../utils/user")), n = require("../../../../../services/appuser"), s = require("../../../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js");

Component({
    behaviors: [],
    properties: {
        user: Object,
        poi: Object,
        note: Object
    },
    data: {
        isFollowed: null,
        showFollowModal: !1
    },
    ready: function() {
        var e = this.data.user;
        e && e.hasOwnProperty("isFollowed") && this.setData({
            isFollowed: e.isFollowed
        }), (0, o.computed)(this, {
            isShowLocation: function() {
                return 0 !== Object.keys(this.data.poi).length;
            }
        });
    },
    methods: {
        handleTapAvatar: function(e) {
            var t = e.currentTarget.dataset.id;
            i.default.ensureLogin().then(function() {
                (0, a.navigateTo)("AuthorPage", {
                    author_id: t
                });
            });
        },
        handleTapPoi: function() {
            var e = this.data.poi;
            e.link && (0, a.navigateTo)("Webview", {
                link: e.link
            });
        },
        handleTriggleFollow: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var o, a, n;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, i.default.ensureLogin();

                      case 2:
                        o = e.data, a = o.isFollowed, n = o.user, a ? e.setData({
                            showFollowModal: !0
                        }) : e._followAppUser(n);

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        _followAppUser: function(e) {
            var t = this, r = this.data.note, o = i.default.getUserInfo().appUserId;
            (0, n.followUser)({
                userId: e.id
            }).then(function() {
                t.setData({
                    isFollowed: !0
                }), wx.$eaglet.push(s.tracker[2661]({
                    objectPosition: 1,
                    noteId: r.id,
                    trackId: "Null",
                    noteType: "video" === r.type ? "video_note" : "short_note",
                    authorId: e.id,
                    userId: o
                }));
            });
        },
        _unfollowAppUser: function(e) {
            var t = this, r = e.detail.user;
            (0, n.unfollowUser)({
                userId: r.id
            }).then(function() {
                t.setData({
                    isFollowed: !1
                });
            });
        }
    }
});