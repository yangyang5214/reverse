var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/objectWithoutProperties"), a = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = e(require("Base64")), o = require("../../../libs/vuefy.js"), r = e(require("../../../libs/event-bus")), s = require("../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), c = require("../../../utils/track"), l = e(require("../../../utils/verify")), u = require("../../../utils/path"), d = e(require("../../../utils/user")), h = e(require("../../../utils/api")), g = e(require("../../../utils/ab-test.js")), f = require("../../../utils/storage"), p = require("../../../services/tracker"), v = require("../../../services/note"), L = require("../../../services/note-search"), m = require("../../../services/homepage"), k = [ "redirect_path" ], w = h.default.$instance.globalData.isIOS ? 120 : 80, b = null;

function y() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e.substring(e.lastIndexOf("."), e.length);
    return ".webp" === t && (e = e.slice(0, e.lastIndexOf(".")) + ".jpg"), e;
}

function x(e, t) {
    return "[object Array]" === Object.prototype.toString.call(e) && e.length > t;
}

Page({
    $eagletPageMeta: {
        pageInstance: "explore_feed",
        instanceId: function() {
            return "";
        },
        needImpression: !1,
        pageview: !1
    },
    data: {
        navigationBarConfig: {
            titleText: "小红书",
            backgroundColor: "#FFFFFF",
            textStyle: "black"
        },
        showTopContainerSkeleton: !0,
        showFeedsSkeleton: !0,
        skeletonsCategoryList: [ , , , , ,  ],
        categoryList: [],
        categoryActiveIndex: 0,
        isFetchingNoteList: !1,
        skeletonsNoteList: [ , , , ,  ],
        noteList: [],
        noteListPage: 1,
        isLastFailGetNoteList: !1,
        pageSize: 20,
        searchDefaultValue: "",
        searchPlaceholder: "",
        isRefreshing: !1,
        scrollTop: 0,
        isFirstLogin: !1,
        isNeverFillInRecommendTagForm: !1,
        canLike: !0,
        showActivityEntry: !1,
        containerHeight: 0,
        isShowAddMp: !1,
        isShowBanner: !1,
        isLoadMoreNoteList: !1,
        isLoginStatus: null,
        scrollIntoViewId: "",
        banner: {},
        canLaunchApp: !1,
        geo: "",
        showLoginModal: !1,
        showLoginModalSource: ""
    },
    handleCloseLoginModal: function() {
        this.setData({
            showLoginModal: !1
        });
    },
    handleMaskTap: function() {
        this.setData({
            isShowAddMp: !1
        });
    },
    handleTapBanner: function() {
        this.data.banner.link && ((0, c.trackNormalData)({
            action: "click_activity_banner"
        }), 0 === this.data.banner.link.indexOf("/") ? wx.navigateTo({
            url: this.data.banner.link
        }) : (0, u.navigateTo)("Webview", {
            link: encodeURIComponent(this.data.banner.link)
        }));
    },
    handleTapCategory: function(e) {
        var t = this, a = e.currentTarget.dataset, n = a.index, o = a.item;
        if ((0, c.trackClick)({
            label: "category",
            property: o.oid,
            context: {}
        }), n === this.data.categoryActiveIndex && this.data.noteList.length > 0) h.default.pageScrollTo({
            scrollTop: 0,
            duration: 100
        }); else if (this.setData({
            isFetchingNoteList: !1,
            isRefreshing: !1,
            categoryActiveIndex: n,
            noteList: []
        }), "附近" === o.name) {
            var r = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = {
                    latitude: e.latitude,
                    longitude: e.longitude
                };
                t.data.geo = i.default.btoa(JSON.stringify(a)), t.renderNoteList({
                    clearList: !0,
                    oid: o.oid,
                    geo: t.data.geo
                });
            };
            h.default.getLocation().then(function(e) {
                r(e);
            }, function() {
                d.default.openSettingModal(function(e) {
                    (0, c.trackNormalData)({
                        action: "click",
                        label: "confrim_auth_location"
                    }), e.authSetting["scope.userLocation"] && setTimeout(function() {
                        h.default.getLocation().then(function(e) {
                            r(e);
                        }), (0, c.trackNormalData)({
                            action: "click",
                            label: "auth_location_success"
                        });
                    }, 0);
                }, function() {
                    (0, c.trackNormalData)({
                        action: "click",
                        label: "cancel_auth_location"
                    });
                }, {
                    title: "还不知道你在哪个城市呢",
                    content: "打开“位置信息”查看更多",
                    confirmText: "去授权",
                    cancelText: "取消"
                });
            });
        } else this.data.geo = "", this.renderNoteList({
            oid: o.oid,
            clearList: !0
        });
    },
    handleSearch: function() {
        var e = this.data.searchDefaultValue;
        1 !== g.default.getABTestFlagValue("wx_mp_login_modal") || d.default.getUserId() ? d.default.ensureLogin().then(function() {
            (0, c.trackClick)({
                label: "search_input",
                context: {}
            }), (0, u.navigateTo)("SearchIndex", {
                defaultValue: e
            });
        }) : this.setData({
            showLoginModal: !0,
            showLoginModalSource: "search-input"
        });
    },
    handleScrollBottom: function() {
        this.fetchMoreNoteList();
    },
    handleScrollPullDown: function() {
        var e, t = this, a = this.getCurrentCategory();
        (0, c.trackNormalData)({
            action: "refresh",
            property: a.oid
        }), e = {
            oid: a.oid,
            clearList: !0
        }, this.setData({
            isRefreshing: !0
        }), this.renderNoteList(e).then(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            e && e.length > 0 && t.setData({
                isRefreshing: !1
            }), h.default.stopPullDownRefresh();
        });
    },
    handleNoteItemTap: function(e) {
        var t = e.detail, a = this.data.categoryActiveIndex, n = this.data.categoryList[a], i = {
            adsId: "none",
            adsName: "none",
            adsTarget_trackId: "none",
            trackUrl: "none",
            objectPosition: t.objectPosition,
            channelTabId: n.oid,
            channelTabName: n.name,
            channelTabIndex: a + 1,
            noteId: t.id,
            noteTarget_trackId: "none",
            noteType: "video" === t.type ? "video_note" : "short_note",
            authorId: t.user.userid,
            inDemoMode: !1,
            recommendReason: "none"
        };
        wx.$eaglet.push(s.tracker[604](i));
    },
    getCategoryList: function() {
        return n(a.default.mark(function e() {
            var t, n, i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = d.default.isMale(), n = {
                        isMale: t
                    }, i = [], e.prev = 3, e.next = 6, (0, m.getHomeFeedsCategories)(n);

                  case 6:
                    i = e.sent, e.next = 13;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(3), console.warn("get category list err", e.t0), i = (0, 
                    m.getDefaultCategories)();

                  case 13:
                    return e.abrupt("return", i);

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 3, 9 ] ]);
        }))();
    },
    formatNoteList: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.map(function(e, t) {
            var a = e.cover || {}, n = e.user || {}, i = y(a.url);
            return e.image = {
                originalUrl: a.url,
                url: i,
                width: a.width,
                height: a.height
            }, e.user = {
                image: n.image,
                nickname: n.nickname,
                userid: n.id,
                followed: n.followed,
                redOfficialVerified: n.redOfficialVerified
            }, e.objectPosition = t + 1, e;
        });
        return t;
    },
    setNoteListCache: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        try {
            if (0 !== this.data.categoryActiveIndex) return;
            var t = JSON.parse(JSON.stringify(e));
            (0, f.setStorage)({
                key: "HOME_PAGE_FEEDS",
                data: t
            }).then(function() {
                console.info("set Storage note list success", t.length);
            });
        } catch (e) {
            console.warn("set Storage note list fail", e);
        }
    },
    getNoteList: function() {
        var e = arguments, t = this;
        return n(a.default.mark(function n() {
            var i, o, r, s, c, l, u, f, p, v, L, k, y, x, D, S, N, I;
            return a.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return i = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = t.data, r = o.noteList, 
                    s = o.noteListPage, c = o.pageSize, l = o.geo, u = i.oid, f = i.clearList, p = d.default.checkLogin(), 
                    v = p ? "homefeed_recommend" : "recommend", L = s, k = r.length > 0 ? r[r.length - 1].cursorScore || r[r.length - 1].id : "", 
                    f && (L = 1, k = ""), y = {
                        category: u = u || v,
                        cursorScore: k,
                        geo: l,
                        page: L,
                        pageSize: c
                    }, 1 === g.default.getABTestFlagValue("wechat_note_video_use_gif") && (y.needGifCover = !0), 
                    x = r, D = [], S = {}, N = "", t.data.isLastFailGetNoteList && y.cursorScore && (y.cursorScore = ""), 
                    t.setData({
                        isLastFailGetNoteList: !1
                    }), a.prev = 17, a.next = 20, (0, m.getHomeFeeds)(y);

                  case 20:
                    D = a.sent, D = t.formatNoteList(D || []), a.next = 27;
                    break;

                  case 24:
                    a.prev = 24, a.t0 = a.catch(17), t.setData({
                        isLastFailGetNoteList: !0
                    });

                  case 27:
                    if (!(!D || 0 === D.length)) {
                        a.next = 32;
                        break;
                    }
                    return S.noNewResult = !0, t.setData({
                        isLastFailGetNoteList: !0
                    }), a.abrupt("return", {
                        result: x,
                        resultInfo: S
                    });

                  case 32:
                    return I = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        if (e.length < w) return e;
                        var a = e.length - 15, n = t.data.pageSize;
                        return e = e.slice(a), N = "page-scroll-start", console.warn("性能长度限制，只保留", e.length), 
                        b = setTimeout(function() {
                            h.default.showToast({
                                icon: "none",
                                title: "为你推荐".concat(n, "条新笔记")
                            });
                        }, 2e3), e;
                    }, x = f ? D : I(x).concat(D), a.abrupt("return", {
                        result: x,
                        resultInfo: S,
                        scrollIntoViewId: N
                    });

                  case 35:
                  case "end":
                    return a.stop();
                }
            }, n, null, [ [ 17, 24 ] ]);
        }))();
    },
    renderNoteList: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(a, n) {
            e.data.isFetchingNoteList ? n() : (e.setData({
                isFetchingNoteList: !0
            }), e.getNoteList(t).then(function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = t.result, o = t.resultInfo, r = t.scrollIntoViewId, s = x(e.data.notelist, 0), c = x(i, 0);
                e.setData({
                    showFeedsSkeleton: !1,
                    isFetchingNoteList: !1
                }), o.noResult && s ? n() : (0 !== e.data.categoryActiveIndex || c || s || (console.warn("首页推荐降级方案", i), 
                i = (0, f.getStorageSync)("HOME_PAGE_FEEDS") || []), e.setData({
                    noteList: i,
                    scrollIntoViewId: r
                }), a(i, o));
            }));
        });
    },
    renderCategoryList: function() {
        var e = this;
        return n(a.default.mark(function t() {
            var n;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.getCategoryList();

                  case 2:
                    n = t.sent, e.setData({
                        categoryList: n,
                        showTopContainerSkeleton: !1
                    });

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    initSearchPlaceHolder: function() {
        return n(a.default.mark(function e() {
            var t, n, i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = {
                        placeholder: "搜索小红书的笔记",
                        defaultValue: ""
                    }, d.default.checkLogin()) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 3:
                    return e.prev = 3, e.next = 6, (0, L.getHotSearch)();

                  case 6:
                    x(n = e.sent, 0) && (i = n[0] || {}, t.placeholder = "大家都在搜“".concat(i.name, "”"), 
                    t.defaultValue = i.name), e.next = 12;
                    break;

                  case 10:
                    e.prev = 10, e.t0 = e.catch(3);

                  case 12:
                    return e.abrupt("return", t);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 3, 10 ] ]);
        }))();
    },
    initBasic: function() {
        this.setData({
            noteListPage: 1,
            categoryActiveIndex: 0
        }), this.renderCategoryList(), this.renderNoteList({
            clearList: !0,
            canCache: !0
        });
    },
    initSecondary: function() {
        var e = this;
        (0, this.initSearchPlaceHolder)().then(function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.setData({
                searchPlaceholder: t.placeholder,
                searchDefaultValue: t.defaultValue
            });
        });
    },
    getCurrentCategory: function() {
        var e = {
            name: "推荐",
            oid: "homefeed_recommend"
        }, t = this.data, a = t.categoryList, n = t.categoryActiveIndex;
        return x(a, n) && (e = a[n]), e;
    },
    fetchMoreNoteList: function() {
        var e = this, t = this.data, a = t.categoryList, n = t.noteList;
        if (this.data.isLoadMoreNoteList) console.warn("拦截more note list"); else if (x(a, 0) && x(n, 0)) {
            this.setData({
                isLoadMoreNoteList: !0
            });
            var i = this.getCurrentCategory().oid, o = {
                oid: i
            };
            (0, c.trackNormalData)({
                action: "more-feeds",
                property: i
            }), this.setData({
                noteListPage: this.data.noteListPage + 1
            }), this.renderNoteList(o).then(function() {
                e.setData({
                    isLoadMoreNoteList: !1
                });
            }).catch(function() {
                e.setData({
                    isLoadMoreNoteList: !1
                });
            });
        }
    },
    initEventBus: function() {
        var e = this;
        r.default.on("likeTaped", function(t) {
            var a = null, n = -1;
            if (x(e.data.noteList, 0) && e.data.noteList.some(function(e, i) {
                if (t === e.id) return a = e, n = i, !0;
            }), a) {
                var i = a.isLiked, o = v.likeNote, r = "like-increase";
                i && (o = v.dislikeNote, r = "like-decrease"), o({
                    noteId: t
                }).then(function(o) {
                    p.wxTrack.call(e, {
                        action: r,
                        property: t
                    }), a.likes = i ? --a.likes : ++a.likes, a.isLiked = !i;
                    var s = e.data.noteList;
                    s[n] = a, e.setData({
                        noteList: s
                    });
                });
            }
        });
    },
    setBanner: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.from, a = e.to, n = e.link, i = e.image;
        if (n && t && a && i) {
            var o = new Date(), r = g.default.getABTestFlagValue("wxmp_jay_banner");
            1 === r && o > new Date(t) && o < new Date(a) && ((0, c.trackNormalData)({
                action: "impression_activity_banner"
            }), this.setData({
                isShowBanner: !0,
                banner: {
                    image: i,
                    link: n
                }
            }));
        }
    },
    redirectPage: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.redirect_path && l.default.canJumpToVerifyPage()) {
            var a = e.redirect_path, n = t(e, k), i = [];
            Object.keys(n).forEach(function(e) {
                i.push("".concat(e, "=").concat(n[e]));
            });
            var o = decodeURIComponent(a);
            o = o.indexOf("?") > -1 ? "".concat(o, "&").concat(i.join("&")) : "".concat(o, "?").concat(i.join("&")), 
            (0, c.trackNormalData)({
                action: "goto_page_success",
                label: "share_note",
                property: o
            }), wx.navigateTo({
                url: o
            });
        }
    },
    onLoad: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = h.default.$instance.globalData.promise, r = {};
        this.setData({
            canLaunchApp: h.default.$instance.globalData.canLaunchApp
        }), i && (i.then(n(a.default.mark(function n() {
            var i, o;
            return a.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.prev = 0, a.next = 3, (0, m.getActivityBannerInfo)().catch(function() {
                        return {
                            homefeed: {}
                        };
                    });

                  case 3:
                    i = a.sent, o = i.homefeed, r = o, a.next = 11;
                    break;

                  case 8:
                    a.prev = 8, a.t0 = a.catch(0), console.error(a.t0);

                  case 11:
                    setTimeout(function() {
                        e.redirectPage(t);
                    }, 500), e.setBanner(r), e.setData({
                        isLoginStatus: d.default.checkLogin()
                    }), e.initSecondary(), e.initBasic(), wx.$eaglet.page.setConfig({
                        $eagletPageMeta: e.$eagletPageMeta
                    }), wx.$eaglet.page.initPage(t), wx.$eaglet.page.trackPageView(s.tracker[601]());

                  case 19:
                  case "end":
                    return a.stop();
                }
            }, n, null, [ [ 0, 8 ] ]);
        }))), (0, o.computed)(this, {
            launchAppParameter: function() {
                var e = (d.default.getUserInfo() || {}).openid;
                return "xhsdiscover://home?sourceId=miniprogram&openid=".concat(e, "&position=wxmp-home-default&mpid=mewtwo");
            }
        }));
    },
    onShow: function() {
        if (this.initEventBus(), this.setData({
            canLaunchApp: h.default.$instance.globalData.canLaunchApp
        }), null !== this.data.isLoginStatus && !this.data.isLoginStatus) {
            var e = d.default.checkLogin();
            !1 === this.data.isLoginStatus && e && (console.info("新用户刷新内容"), this.setData({
                isLoginStatus: e
            }), this.initBasic());
        }
    },
    onUnload: function() {
        r.default.off("likeTaped"), b && clearTimeout(b);
    },
    onHide: function() {
        r.default.off("likeTaped"), b && clearTimeout(b);
    },
    onShareAppMessage: function() {
        return (0, c.trackNormalData)({
            action: "share"
        }), {
            title: "小红书·标记我的生活",
            path: "/pages/main/home/index"
        };
    }
});