var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, a = 1, i = arguments.length; a < i; a++) for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }).apply(this, arguments);
}, t = function(e, t, a, i) {
    return new (a || (a = Promise))(function(n, o) {
        function s(e) {
            try {
                d(i.next(e));
            } catch (e) {
                o(e);
            }
        }
        function r(e) {
            try {
                d(i.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function d(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                e(t);
            })).then(s, r);
        }
        d((i = i.apply(e, t || [])).next());
    });
}, a = function(e, t) {
    var a, i, n, o, s = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
        },
        trys: [],
        ops: []
    };
    return o = {
        next: r(0),
        throw: r(1),
        return: r(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
    }), o;
    function r(o) {
        return function(r) {
            return function(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;s; ) try {
                    if (a = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 
                    0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                    switch (i = 0, n && (o = [ 2 & o[0], n.value ]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;

                      case 4:
                        return s.label++, {
                            value: o[1],
                            done: !1
                        };

                      case 5:
                        s.label++, i = o[1], o = [ 0 ];
                        continue;

                      case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                            s.label = o[1];
                            break;
                        }
                        if (6 === o[0] && s.label < n[1]) {
                            s.label = n[1], n = o;
                            break;
                        }
                        if (n && s.label < n[2]) {
                            s.label = n[2], s.ops.push(o);
                            break;
                        }
                        n[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                } catch (e) {
                    o = [ 6, e ], i = 0;
                } finally {
                    a = n = 0;
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }([ o, r ]);
        };
    }
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("@xhs/logan-services-mewtwo"), n = require("../../../services/appuser"), o = require("../../../libs/event-bus"), s = require("../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), r = require("../../../services/system"), d = require("../../../utils/version"), l = require("../../../utils/page"), u = require("../../../utils/ab-test"), c = require("../../../utils/user"), h = require("../../../utils/api"), g = require("../../../utils/path"), f = require("../../../utils/enum"), p = require("../../../utils/datetime"), v = require("./utils/tag"), I = require("./utils/shareInfo"), w = h.default.getSystemInfoSync();

Page({
    $eagletPageMeta: {
        pageInstance: "note_detail_r10",
        instanceId: function(e) {
            return e.id;
        },
        needImpression: !0,
        impressionSelector: ".related-notes>>>.eaglet-impression",
        pageview: !0
    },
    data: {
        noteId: "",
        currentNoteId: "",
        navigationBarConfig: {},
        noteList: [],
        videoFeedList: [],
        videoFeedIndex: 0,
        fetchedRelatedNotes: !1,
        isShowSkeleton: !0,
        note: void 0,
        navigationBarTrueHeight: l.getTopSectionHeight(),
        isIphoneX: h.default.$instance.globalData.isIPhoneX,
        relatedNotesPageInfo: {
            page: 1,
            pageSize: 8
        },
        showLoginModal: !1,
        showLoginModalSource: "",
        noteTags: [],
        shareInfo: void 0,
        addMyMp: {
            hasClose: !1,
            isShowAddMp: !1
        },
        shareUserId: "",
        illegalInfo: void 0,
        swiperHeight: 0,
        imageTags: [],
        initDone: !1
    },
    onLoad: function(e) {
        return t(this, void 0, void 0, function() {
            var t, i, n, o, l, u, c, h = this;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return i = (t = e || {}).id, n = t.appuid, o = t.scene, l = [], o && !i && 24 === o.length && (i = o), 
                    this.setData({
                        noteId: i,
                        shareUserId: n || ""
                    }), r.postRecord({
                        noteId: i,
                        pasteboard: ""
                    }), this.initSafety(), this.initAddMyMp(), [ 4, this.fetchNote(i || "") ];

                  case 1:
                    return a.sent(), (u = this.data.note) && this.initShareInfo(u), c = function() {
                        wx.$eaglet.page.setConfig({
                            $eagletPageMeta: h.$eagletPageMeta
                        }), wx.$eaglet.page.startImpression(), wx.$eaglet.page.initPage(e);
                    }, d.versionCompare(w.SDKVersion, "2.7.7", 3) < 1 ? (wx.showModal({
                        title: "提示",
                        content: "请升级微信版本",
                        success: function() {
                            g.navigateBack();
                        }
                    }), [ 2 ]) : "video" !== (null == u ? void 0 : u.type) ? [ 3, 3 ] : [ 4, this.fetchRelatedNotes(u.type) ];

                  case 2:
                    return a.sent(), l = this.data.videoFeedList, u && l.unshift(u), this.initVideoNote(), 
                    c(), wx.$eaglet.page.trackPageView(s.tracker[2104]({
                        shareUserId: n
                    })), this.setData({
                        videoFeedList: l
                    }), [ 3, 4 ];

                  case 3:
                    this.fetchRelatedNotes(null == u ? void 0 : u.type), this.initNormalNote(), c(), 
                    wx.$eaglet.page.trackPageView(s.tracker[2565]({
                        shareUserId: n
                    })), this.initImageStickers(i || ""), a.label = 4;

                  case 4:
                    return [ 2 ];
                }
            });
        });
    },
    onPageScroll: function() {
        wx.$eaglet.page.debounceImpression();
    },
    onShow: function() {
        wx.$eaglet.page.resetPage(), wx.$eaglet.page.startImpression(), this.initEventBus();
    },
    onHide: function() {
        this.removeEventBus(), wx.$eaglet.flush();
    },
    onUnload: function() {
        this.removeEventBus(), wx.$eaglet.page.stopImpression(), wx.$eaglet.page.destroyPage();
    },
    onReachBottom: function() {
        var e = this.data.note;
        e && this.fetchRelatedNotes(e.type);
    },
    onShareAppMessage: function() {
        return t(this, void 0, void 0, function() {
            var e, t, i, n, o, r, d, l, u, h, f, p, v, I, w;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    if (e = this.data, t = e.note, i = e.videoFeedIndex, n = e.currentNoteId, o = e.videoFeedList, 
                    "video" !== (null == t ? void 0 : t.type)) return [ 3, 4 ];
                    a.label = 1;

                  case 1:
                    return a.trys.push([ 1, 3, , 4 ]), [ 4, this.initShareInfo(o[i]) ];

                  case 2:
                    return a.sent(), [ 3, 4 ];

                  case 3:
                    return a.sent(), [ 3, 4 ];

                  case 4:
                    return r = this.data.shareInfo, d = (null == r ? void 0 : r.noteId) || n, l = null == r ? void 0 : r.noteType, 
                    u = c.default.getUserInfo(), h = u.appUserId, f = u.openid, p = {
                        id: d,
                        type: l,
                        appuid: h,
                        mpoid: f,
                        shareImageType: (null == r ? void 0 : r.shareImageUrl) ? "new" : "old"
                    }, v = (null == r ? void 0 : r.shareImageUrl) || (null == r ? void 0 : r.cover.url), 
                    I = (null == r ? void 0 : r.shareTitle) || "@" + (null == r ? void 0 : r.user.nickname) + " 发了一篇笔记，快点来看吧！" || "小红书·标记我的生活", 
                    "video" === (null == t ? void 0 : t.type) ? (w = 0 === i ? 2121 : 2122, wx.$eaglet.push(s.tracker[w]({
                        objectPosition: i + 1,
                        noteId: d,
                        noteType: "video_note",
                        authorId: h || "Null",
                        noteTarget_trackId: "none"
                    }))) : wx.$eaglet.push(s.tracker[2713]({
                        objectPosition: 1,
                        noteId: d,
                        noteType: "video" === l ? "video_note" : "short_note",
                        authorId: h || "Null"
                    })), [ 2, {
                        title: I,
                        desc: "小红书·标记我的生活",
                        path: g.makeSharePath("NoteDetail", p),
                        imageUrl: v
                    } ];
                }
            });
        });
    },
    fetchNote: function(e) {
        return t(this, void 0, void 0, function() {
            var t, n, o, s;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return a.trys.push([ 0, 2, , 3 ]), [ 4, i.getFeApiBurdockWeixinV2NoteByNoteIdSingleFeed({
                        resourceParams: {
                            noteId: e
                        }
                    }) ];

                  case 1:
                    return (t = a.sent()) && t.id ? ((null == t ? void 0 : t.cover.width) && (null == t ? void 0 : t.cover.height) && (t.cover.url = t.cover.url.replace("1080", "800"), 
                    n = w.windowWidth * t.cover.height / t.cover.width || 0, this.setData({
                        swiperHeight: n
                    })), this.setData({
                        note: t,
                        initDone: !0
                    }), [ 3, 3 ]) : (this.setData({
                        illegalInfo: {
                            desc: "该笔记暂时无法查看"
                        },
                        isShowSkeleton: !1,
                        canShowLoginModal: !0,
                        initDone: !0
                    }), [ 2 ]);

                  case 2:
                    return o = a.sent(), s = (null == o ? void 0 : o.detail.msg) ? o.detail.msg : "服务器开小差了", 
                    this.setData({
                        illegalInfo: {
                            desc: s
                        },
                        initDone: !0
                    }), [ 3, 3 ];

                  case 3:
                    return this.setData({
                        isShowSkeleton: !1,
                        canShowLoginModal: !0
                    }), [ 2 ];
                }
            });
        });
    },
    fetchNoteTags: function(e) {
        var t = this;
        i.getFeApiBurdockV2NoteByNoteIdTags({
            resourceParams: {
                noteId: e
            }
        }).then(function(e) {
            e && t.setData({
                noteTags: e
            });
        });
    },
    fetchRelatedVideoFeed: function() {
        return t(this, void 0, void 0, function() {
            var t, n, o, s, r, d, l, u, h;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return a.trys.push([ 0, 2, , 3 ]), t = this.data, n = t.note, o = t.relatedNotesPageInfo, 
                    s = o.page, r = o.pageSize, d = c.default.getUserInfo(), l = d.openid, [ 4, i.getFeApiBurdockWeixinV2NoteByNoteIdFeed({
                        params: {
                            openId: l,
                            page: s,
                            pageSize: r
                        },
                        resourceParams: {
                            noteId: (null == n ? void 0 : n.id) || ""
                        }
                    }) ];

                  case 1:
                    return (u = a.sent()) && 0 !== u.length ? (this.setData({
                        relatedNotesPageInfo: e(e({}, this.data.relatedNotesPageInfo), {
                            page: this.data.relatedNotesPageInfo.page + 1
                        })
                    }), h = this.data.videoFeedList.concat(u), this.setData({
                        videoFeedList: h,
                        fetchedRelatedNotes: !0
                    }), [ 3, 3 ]) : (wx.showToast({
                        title: "暂无更多内容，刷新试试",
                        icon: "none"
                    }), [ 2 ]);

                  case 2:
                    return a.sent(), [ 3, 3 ];

                  case 3:
                    return [ 2 ];
                }
            });
        });
    },
    fetchRelatedNotesFeed: function() {
        return t(this, void 0, void 0, function() {
            var t, n, o, s, r, d, l, u, h;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    t = this.data, n = t.note, o = t.relatedNotesPageInfo, s = o.page, r = o.pageSize, 
                    a.label = 1;

                  case 1:
                    return a.trys.push([ 1, 3, , 4 ]), d = c.default.getUserInfo(), l = d.openid, [ 4, i.getFeApiBurdockWeixinV2NoteByNoteIdRelated({
                        params: {
                            openId: l,
                            page: s,
                            pageSize: r,
                            noteType: 1,
                            needVideo: !1,
                            needCount: !0
                        },
                        resourceParams: {
                            noteId: (null == n ? void 0 : n.id) || ""
                        }
                    }) ];

                  case 2:
                    return u = a.sent() || [], this.setData({
                        relatedNotesPageInfo: e(e({}, this.data.relatedNotesPageInfo), {
                            page: this.data.relatedNotesPageInfo.page + 1
                        })
                    }), h = this.data.noteList.concat(u), this.setData({
                        noteList: h,
                        fetchedRelatedNotes: !0
                    }), [ 3, 4 ];

                  case 3:
                    return a.sent(), [ 3, 4 ];

                  case 4:
                    return [ 2 ];
                }
            });
        });
    },
    fetchRelatedNotes: function(e) {
        e && ("video" === e ? this.fetchRelatedVideoFeed() : this.fetchRelatedNotesFeed());
    },
    initNormalNote: function() {
        this.setData({
            navigationBarConfig: {
                titleText: "笔记详情",
                backgroundColor: "#FFFFFF",
                textStyle: "black"
            }
        });
    },
    initVideoNote: function() {
        this.$eagletPageMeta.pageInstance = "video_feed", this.setData({
            navigationBarConfig: {
                titleText: "",
                backgroundColor: "transparent",
                textStyle: "white"
            }
        });
    },
    initAddMyMp: function() {
        var t = this, a = wx.getStorageSync(f.STORAGE_KEY.PIN_MINI_PROGRAM_FLAG), i = (wx.getStorageSync(f.STORAGE_KEY.USER_INFO) || {}).isNewWxmpUser, n = new Date().getTime();
        if (!a) return a = n, this.setData({
            addMyMp: e(e({}, this.data.addMyMp), {
                isShowAddMp: !0
            })
        }), i ? this.setData({
            addMyMp: e(e({}, this.data.addMyMp), {
                hasClose: !0
            })
        }) : setTimeout(function() {
            t.setData({
                addMyMp: e(e({}, t.data.addMyMp), {
                    isShowAddMp: !1
                })
            });
        }, 3e3), void wx.setStorage({
            key: f.STORAGE_KEY.PIN_MINI_PROGRAM_FLAG,
            data: a
        });
        a && n - a > p.getTimeStampByDay(7) && (this.setData({
            addMyMp: e(e({}, this.data.addMyMp), {
                isShowAddMp: !0
            })
        }), i ? this.setData({
            addMyMp: e(e({}, this.data.addMyMp), {
                hasClose: !0
            })
        }) : setTimeout(function() {
            t.setData({
                addMyMp: e(e({}, t.data.addMyMp), {
                    isShowAddMp: !1
                })
            });
        }, 3e3), a = n, wx.setStorage({
            key: f.STORAGE_KEY.PIN_MINI_PROGRAM_FLAG,
            data: a
        }));
    },
    initSafety: function() {
        1 === u.default.getABTestFlagValue("wx_mp_openid_need_login") && !c.default.getUserId() && g.navigateTo("LoginIndex", {
            theme: "openidForce"
        });
    },
    initImageStickers: function(e) {
        return t(this, void 0, void 0, function() {
            var t, n, o, s;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return [ 4, i.getFeApiBurdockWeixinV2NoteByNoteIdImageStickers({
                        transform: !0,
                        resourceParams: {
                            noteId: e
                        }
                    }) ];

                  case 1:
                    return t = a.sent(), n = this.data.note, o = (null == n ? void 0 : n.imageList) || [], 
                    s = v.TagUtil.prototype.transform(t, o.map(function(e) {
                        return e.fileId;
                    })), this.setData({
                        imageTags: s
                    }), [ 2 ];
                }
            });
        });
    },
    initShareInfo: function(t) {
        var a = this;
        return I.initShareInfo({
            canvasId: "share-canvas",
            note: t
        }).then(function(i) {
            i && a.setData({
                shareInfo: e(e({}, i), {
                    noteId: null == t ? void 0 : t.id,
                    noteType: null == t ? void 0 : t.type,
                    cover: null == t ? void 0 : t.cover,
                    user: null == t ? void 0 : t.user
                })
            });
        });
    },
    initEventBus: function() {
        var e = this;
        o.default.on("goToLogin", function(t) {
            var a = t.source;
            1 === u.default.getABTestFlagValue("wx_mp_login_modal") ? e.setData({
                showLoginModalSource: a,
                showLoginModal: !0
            }) : g.navigateTo("LoginIndex", {
                source: a
            });
        });
    },
    removeEventBus: function() {
        o.default.off("goToLogin");
    },
    handleCloseModal: function() {
        this.setData({
            showLoginModal: !1
        });
    },
    handleSetVideoFeedListValue: function(e) {
        var t, a = e.detail, i = a.index, n = a.key, o = a.value, s = "videoFeedList[" + i + "]." + n;
        this.setData(((t = {})[s] = o, t));
    },
    handleSetVideoFeedListObjectValue: function(e) {
        var t, a = e.detail, i = a.index, n = a.value, o = "videoFeedList[" + i + "]";
        this.setData(((t = {})[o] = n, t));
    },
    handlehandleresetVideoFeedNote: function(t) {
        var a, i = t.detail.id, n = this.data.videoFeedList, o = null == n ? void 0 : n.findIndex(function(e) {
            return e.id === i;
        }), s = "videoFeedList[" + o + "]";
        this.setData(((a = {})[s] = e(e({}, n[o]), {
            isPlaying: !0,
            isEnd: !1
        }), a));
    },
    handleFetchMoreVideoFeed: function() {
        this.fetchRelatedNotes("video");
    },
    handleChangeVideoFeedNote: function(e) {
        var t = e.detail, a = t.id, i = t.authorId, n = this.data, o = n.videoFeedList, r = n.shareUserId, d = o.findIndex(function(e) {
            return e.id === a;
        });
        if (d > -1) {
            wx.$eaglet.page.initPage({
                id: a
            });
            var l = 0 === d ? 2104 : 2187;
            wx.$eaglet.page.trackPageView(s.tracker[l]({
                trackId: "None",
                shareUserId: r
            })), this.setData({
                videoFeedIndex: d
            });
        }
        wx.$eaglet.page.trackPageView(s.tracker[2124]({
            adsTarget_trackId: "",
            trackUrl: "none",
            objectPosition: this.data.videoFeedIndex + 1,
            noteId: a,
            noteTarget_trackId: "none",
            noteType: "video_note",
            authorId: i,
            videoPlaySource: "AUTO_PLAY_NEXT"
        })), this.setData({
            currentNoteId: a
        });
    },
    handleFollowAppUser: function(e) {
        var t = this, a = this.data, i = a.videoFeedIndex, o = a.videoFeedList, r = e.user, d = -1;
        o.forEach(function(t, a) {
            t.id === e.id && (d = a);
        });
        var l = "videoFeedList[" + d + "].user.isFollowed";
        r.isFollowed ? n.unfollowUser({
            userId: r.id
        }).then(function() {
            var e;
            t.setData(((e = {})[l] = !1, e));
        }) : (0 === i ? wx.$eaglet.page.trackPageView(s.tracker[2140]({
            objectPosition: i + 1,
            noteId: e.id,
            noteType: "video_note",
            authorId: r.id,
            userId: c.default.getUserId()
        })) : wx.$eaglet.page.trackPageView(s.tracker[2141]({
            adsTarget_trackId: "",
            noteTarget_trackId: "none",
            objectPosition: i + 1,
            noteId: e.id,
            noteType: "video_note",
            authorId: r.id,
            userId: c.default.getUserId()
        })), n.followUser({
            userId: r.id
        }).then(function() {
            var e;
            t.setData(((e = {})[l] = !0, e));
        }));
    },
    handleFocuseOn: function(e) {
        return t(this, void 0, void 0, function() {
            var t;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return t = e.detail.detail, [ 4, c.default.ensureLogin() ];

                  case 1:
                    return a.sent(), this.handleFollowAppUser(t), [ 2 ];
                }
            });
        });
    }
});