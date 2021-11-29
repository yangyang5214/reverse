var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/objectSpread2"), i = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../services/author"), s = require("../../../services/collect"), o = require("../../../utils/track"), r = e(require("../../../utils/user")), c = require("../../../services/note"), u = require("../../../services/tracker"), h = e(require("../../../libs/event-bus")), d = require("../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), l = require("../../../utils/path"), g = require("../../../components/note-list/scroll-feeds");

function f(e) {
    return e.map(function(e) {
        var t = e.image.url;
        return ".webp" === t.substring(t.lastIndexOf("."), t.length) && (t = t.slice(0, t.lastIndexOf(".")) + ".jpg"), 
        e.image.url = t, e;
    });
}

var p = !1;

Page({
    $eagletPageMeta: {
        pageInstance: "profile_page",
        instanceId: function() {
            return "";
        },
        needImpression: !1,
        pageview: !1
    },
    data: {
        isMinePage: !0,
        isLogin: !1,
        noteList: [],
        navigationBarConfig: {
            titleText: "",
            backgroundColor: "none",
            noBackgroundColor: !0,
            textStyle: "white"
        },
        type: "white",
        pageConfig: {
            fullScreen: !0,
            pageContentPadding: !1
        },
        canLike: !1,
        page: 1,
        userInfo: {
            noteCollectionIsPublic: !0
        },
        isMembership: !1,
        bottomStart: "",
        switchTab: "notes",
        isFetchEnd: !1,
        showNavigationBar: !1
    },
    init: function(e) {
        this.refreshUserInfo(e), this.refreshNotes(e), this.getMemberInfo(e), this.initEventBus();
    },
    refreshNotes: function(e) {
        var t = e;
        if ("collect" === this.data.switchTab) return this.setData({
            bottomStart: ""
        }), void this.fetchCollectFeed();
        "notes" !== this.data.switchTab || this.fetchAuthorNotes({
            userId: t
        });
    },
    onLoad: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = r.default.getUserInfo(), a = i.appUserId;
        r.default.ensureLogin().then(function() {
            e.init(a);
        }), wx.$eaglet.page.setConfig({
            $eagletPageMeta: this.$eagletPageMeta
        }), wx.$eaglet.page.initPage(t), wx.$eaglet.page.trackPageView(d.tracker[1185]()), 
        this.setData({
            userId: a,
            isLogin: r.default.checkLogin()
        });
    },
    onUnload: function() {
        h.default.off("likeTaped");
    },
    onHide: function() {
        h.default.off("likeTaped");
    },
    fetchCollectFeed: function() {
        var e = this, t = r.default.getUserInfo().appUserId, i = this.data.bottomStart || "";
        return p ? new Promise(function(e) {
            return e();
        }) : (p = !0, (0, s.getAuthorFaved)({
            start: i,
            userId: t
        }).then(function(t) {
            t && 0 !== t.length && (t = e.formatNoteList(t), e.setData({
                noteList: e.data.noteList.concat(t)
            }), e.setData({
                bottomStart: t[t.length - 1].id
            })), e.setData({
                isFetchEnd: !0
            }), p = !1;
        }, function() {
            e.setData({
                isFetchEnd: !0
            }), p = !1;
        }));
    },
    fetchAuthorNotes: function(e) {
        var t = this, i = e.userId, a = e.page, s = void 0 === a ? 1 : a, o = e.pageSize, r = void 0 === o ? 15 : o;
        return p ? new Promise(function(e) {
            return e();
        }) : (p = !0, (0, n.getNoteUser)({
            userId: i,
            page: s,
            pageSize: r
        }).then(function(e) {
            if (e && 0 !== e.length) {
                var i = t.formatNoteList(e);
                t.setData({
                    noteList: t.data.noteList.concat(i)
                });
            }
            p = !1, t.setData({
                page: t.data.page + 1,
                isFetchEnd: !0
            });
        }, function(e) {
            t.setData({
                isFetchEnd: !0
            }), p = !1, console.log("err", e);
        }));
    },
    pushMoreFeeds: function() {
        0 !== this.data.noteList.length && ("collect" === this.data.switchTab && this.fetchCollectFeed(), 
        "notes" === this.data.switchTab && this.fetchAuthorNotes({
            userId: this.data.userId,
            page: this.data.page,
            pageSize: this.data.pageSize
        }));
    },
    getMemberInfo: function(e) {
        var t = this;
        return a(i.default.mark(function a() {
            var s;
            return i.default.wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, (0, n.fetchMemberInfo)(e);

                  case 2:
                    s = i.sent, t.setData({
                        isMembership: s && s.isMembership
                    });

                  case 4:
                  case "end":
                    return i.stop();
                }
            }, a);
        }))();
    },
    formatNoteList: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.map(function(e) {
            return Object.assign({}, e, {
                image: e.cover,
                user: {
                    id: e.user.id,
                    image: e.user.image,
                    nickname: e.user.nickname,
                    userid: e.user.id || e.user.userId,
                    redOfficialVerifyShowIcon: e.user.redOfficialVerifyShowIcon
                }
            });
        });
        return f(t);
    },
    refreshUserInfo: function(e) {
        var t = this;
        (0, n.getUserInfo)({
            userId: e
        }).then(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t.setData({
                userInfo: e
            });
        });
    },
    handleGoLoginPage: function() {
        (0, l.navigateTo)("LoginIndex");
    },
    initEventBus: function() {
        var e = this;
        h.default.on("likeTaped", function(t) {
            e.data.noteList.some(function(i, a) {
                if (t === i.id) {
                    var n = i.isLiked, s = c.likeNote, o = "like-increase";
                    return n && (s = c.dislikeNote, o = "like-decrease"), s({
                        noteId: t
                    }).then(function(s) {
                        u.wxTrack.call(e, {
                            action: o,
                            property: t
                        }), i.likes = n ? --i.likes : ++i.likes, i.isLiked = !n;
                        var r = e.data.noteList;
                        r[a] = i, e.setData({
                            noteList: r
                        });
                    }), !0;
                }
            });
        });
    },
    handleEditInfo: function() {
        this.isLogin ? ((0, o.trackClick)({
            label: "edit_info",
            context: {},
            timeStamp: new Date().getTime()
        }), (0, l.navigateTo)("InfoPage")) : (0, l.navigateTo)("LoginIndex");
    },
    handleScroll: function(e) {
        this.data.noteList.length > g.REFRESH_FEEDS_NOTES_LENGTH && (wx.showToast({
            icon: "none",
            title: "正在加载更多内容"
        }), this.setData({
            noteList: this.data.noteList.slice(g.REFRESH_FEEDS_NOTES_LENGTH - 10)
        }));
        var i = e.detail.scrollTop, a = e.detail.scrollHeight;
        i > 200 && !this.data.showNavigationBar && this.setData({
            showNavigationBar: !0,
            navigationBarConfig: t(t({}, this.data.navigationBarConfig), {}, {
                titleText: "我的",
                backgroundColor: "#7A6E69"
            })
        }), i <= 200 && this.data.showNavigationBar && this.setData({
            showNavigationBar: !1,
            navigationBarConfig: t(t({}, this.data.navigationBarConfig), {}, {
                titleText: "",
                backgroundColor: "none"
            })
        }), a - i < g.PUSH_MORE_SCOLL_TOP ? this.data.isLoadingFeeds || (this.setData({
            isLoadingFeeds: !0
        }), this.pushMoreFeeds()) : this.setData({
            isLoadingFeeds: !1
        });
    },
    handleScrollToLower: function() {
        this.pushMoreFeeds();
    },
    handleTapSwitchTabType: function(e) {
        var t = e.detail;
        this.setData({
            switchTab: t,
            noteList: [],
            isFetchEnd: !1
        }), this.refreshNotes(this.data.userInfo.id);
    },
    handleTapSettings: function() {
        this.data.isLogin && ((0, o.trackClick)({
            label: "settings",
            context: {},
            timeStamp: new Date().getTime()
        }), (0, l.navigateTo)("SettingsPage"));
    }
});