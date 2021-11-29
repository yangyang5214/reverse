Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    246: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord, n = e.searchLandingPage, o = e.channelTabName;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a,
                    searchLandingPage: {
                        type: "PageInstance",
                        value: n
                    }
                }
            },
            index: {
                type: "Index",
                value: {
                    channelTabName: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "search"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_style_confirm"
                    }
                }
            }
        };
    },
    247: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.recommendSearchWords, n = e.searchLandingPage, o = e.objectPosition;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    recommendSearchWords: a,
                    searchLandingPage: {
                        type: "PageInstance",
                        value: n
                    }
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "search"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_style_history"
                    }
                }
            }
        };
    },
    248: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.recommendSearchWords, n = e.wordRequestId, o = e.recommendSearchWordsTypeArray, r = e.recommendDisplaySearchWords, p = e.objectPosition, i = e.route;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    recommendSearchWords: a,
                    wordRequestId: n,
                    recommendSearchWordsTypeArray: o,
                    recommendDisplaySearchWords: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            browser: {
                type: "Browser",
                value: {
                    route: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "search"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_style_trending"
                    }
                }
            }
        };
    },
    249: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWordFrom, n = e.route;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: a
                    }
                }
            },
            browser: {
                type: "Browser",
                value: {
                    route: n
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    251: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.searchSessionId, n = e.searchWord, o = e.searchWordFrom, r = e.filterOptions, p = e.noteSortType, i = e.noteId, y = e.noteType, l = e.authorId, u = e.likeNum, d = e.adsId, T = e.adsType, c = e.trackId, v = e.trackUrl;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: a,
                    searchWord: n,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: o
                    },
                    filterOptions: r,
                    noteSortType: {
                        type: "NoteSortType",
                        value: p
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: i,
                    noteType: {
                        type: "NoteType",
                        value: y
                    },
                    authorId: l,
                    likeNum: u
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: d,
                    adsType: {
                        type: "AdsType",
                        value: T
                    },
                    trackId: c,
                    trackUrl: v
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_result"
                    }
                }
            }
        };
    },
    254: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord, n = e.recommendSearchWords, o = e.searchLandingPage, r = e.searchCplId, p = e.wordRequestId, i = e.objectPosition, y = e.channelTabName;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a,
                    recommendSearchWords: n,
                    searchLandingPage: {
                        type: "PageInstance",
                        value: o
                    },
                    searchCplId: r,
                    wordRequestId: p
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: i,
                    channelTabName: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "search"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_style_auto_complete"
                    }
                }
            }
        };
    },
    255: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord, n = e.searchCplId, o = e.wordRequestId, r = e.userId;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a,
                    searchCplId: n,
                    wordRequestId: o
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    userId: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "user"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "search"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_style_auto_complete"
                    }
                }
            }
        };
    },
    309: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    601: function() {
        return {
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    603: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.recommendReason, p = e.impFromCache, i = e.objectPosition, y = e.channelTabId, l = e.channelTabName, u = e.channelTabIndex, d = e.adsId, T = e.adsName, c = e.adsTarget_trackId, v = e.trackUrl, s = e.liveSubscribe;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    recommendReason: r,
                    impFromCache: p
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: i,
                    channelTabId: y,
                    channelTabName: l,
                    channelTabIndex: u
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: d,
                    adsName: T,
                    trackId: c,
                    adsType: {
                        type: "AdsType",
                        value: "ADS_TYPE_NOTE"
                    },
                    trackUrl: v
                }
            },
            liveTarget: {
                type: "LiveTarget",
                value: {
                    liveSubscribe: s
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    }
                }
            }
        };
    },
    604: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.inDemoMode, p = e.recommendReason, i = e.objectPosition, y = e.channelTabId, l = e.channelTabName, u = e.channelTabIndex, d = e.adsId, T = e.adsName, c = e.adsType, v = e.adsTarget_trackId, s = e.trackUrl, g = e.liveSubscribe;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    inDemoMode: r,
                    recommendReason: p
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: i,
                    channelTabId: y,
                    channelTabName: l,
                    channelTabIndex: u
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: d,
                    adsName: T,
                    adsType: c,
                    trackId: v,
                    trackUrl: s
                }
            },
            liveTarget: {
                type: "LiveTarget",
                value: {
                    liveSubscribe: g
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    }
                }
            }
        };
    },
    605: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition, p = e.channelTabId, i = e.channelTabName, y = e.channelTabIndex;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r,
                    channelTabId: p,
                    channelTabName: i,
                    channelTabIndex: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    }
                }
            }
        };
    },
    606: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition, p = e.channelTabId, i = e.channelTabName, y = e.channelTabIndex;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r,
                    channelTabId: p,
                    channelTabName: i,
                    channelTabIndex: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike"
                    }
                }
            }
        };
    },
    610: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.index_channelTabId, a = e.index_channelTabName, n = e.index_channelTabIndex, o = e.channelTabTarget_channelTabId, r = e.channelTabTarget_channelTabName, p = e.channelTabTarget_channelTabIndex;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabId: t,
                    channelTabName: a,
                    channelTabIndex: n
                }
            },
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabId: o,
                    channelTabName: r,
                    channelTabIndex: p
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "goto_channel_tab"
                    }
                }
            }
        };
    },
    763: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "goto_channel_tab"
                    }
                }
            }
        };
    },
    764: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.isOnTop, p = e.channelTabId, i = e.channelTabName;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o,
                    isOnTop: r,
                    channelTabId: p,
                    channelTabName: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    765: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.isOnTop, n = e.channelTabId, o = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t,
                    isOnTop: a,
                    channelTabId: n,
                    channelTabName: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    766: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.isOnTop, n = e.channelTabId, o = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t,
                    isOnTop: a,
                    channelTabId: n,
                    channelTabName: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    767: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.isOnTop, n = e.channelTabId, o = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t,
                    isOnTop: a,
                    channelTabId: n,
                    channelTabName: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    768: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.isOnTop, n = e.channelTabId, o = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t,
                    isOnTop: a,
                    channelTabId: n,
                    channelTabName: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    785: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.isOnTop, p = e.channelTabId, i = e.channelTabName;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o,
                    isOnTop: r,
                    channelTabId: p,
                    channelTabName: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    789: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    885: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.searchSessionId, n = e.searchWord, o = e.searchWordFrom, r = e.noteSortType, p = e.wordRequestId, i = e.noteId, y = e.noteType, l = e.authorId, u = e.picLoadStatus, d = e.likeNum, T = e.adsId, c = e.adsType, v = e.trackId, s = e.trackUrl;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: a,
                    searchWord: n,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: o
                    },
                    noteSortType: {
                        type: "NoteSortType",
                        value: r
                    },
                    wordRequestId: p
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: i,
                    noteType: {
                        type: "NoteType",
                        value: y
                    },
                    authorId: l,
                    picLoadStatus: u,
                    likeNum: d
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: T,
                    adsType: {
                        type: "AdsType",
                        value: c
                    },
                    trackId: v,
                    trackUrl: s
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_result"
                    }
                }
            }
        };
    },
    976: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_entry_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "goto_search_entry_by_click_input"
                    }
                }
            }
        };
    },
    978: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_entry_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "goto_search_entry_by_clear_input"
                    }
                }
            }
        };
    },
    1171: function() {
        return {
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    1185: function() {
        return {
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    1792: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.noteId, p = e.noteType, i = e.authorId;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: r,
                    noteType: {
                        type: "NoteType",
                        value: p
                    },
                    authorId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_board_tab"
                    }
                }
            }
        };
    },
    1793: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.noteId, p = e.noteType, i = e.authorId;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: r,
                    noteType: {
                        type: "NoteType",
                        value: p
                    },
                    authorId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_board_tab"
                    }
                }
            }
        };
    },
    1794: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.noteId, n = e.noteType;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    }
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_board_tab"
                    }
                }
            }
        };
    },
    2078: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.noteId, p = e.noteType;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: r,
                    noteType: {
                        type: "NoteType",
                        value: p
                    }
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_board_tab"
                    }
                }
            }
        };
    },
    2079: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.noteId, p = e.noteType;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: r,
                    noteType: {
                        type: "NoteType",
                        value: p
                    }
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_board_tab"
                    }
                }
            }
        };
    },
    2080: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.fansCount, n = e.ownNotesCount, o = e.objectPosition, r = e.noteId, p = e.noteType;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t,
                    fansCount: a,
                    ownNotesCount: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: r,
                    noteType: {
                        type: "NoteType",
                        value: p
                    }
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_board_tab"
                    }
                }
            }
        };
    },
    2104: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.shareUserId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    shareUserId: t
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2105: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.trackId, a = e.noteFeedTypeExtraInfo;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: t
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteFeedTypeExtraInfo: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "page_end"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2106: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteFeedTypeExtraInfo, r = e.inDemoMode, p = e.videoPause, i = e.objectPosition;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "like_btn_onclick"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    noteFeedTypeExtraInfo: o,
                    inDemoMode: r,
                    videoPause: p
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: i
                }
            }
        };
    },
    2107: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.noteFeedTypeExtraInfo, p = e.inDemoMode, i = e.videoPause, y = e.objectPosition, l = e.adsTarget_trackId;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "like_btn_onclick"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    noteFeedTypeExtraInfo: r,
                    inDemoMode: p,
                    videoPause: i
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: y
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: l
                }
            }
        };
    },
    2108: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteFeedTypeExtraInfo, r = e.inDemoMode, p = e.objectPosition;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "like_note_image_double_click"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    noteFeedTypeExtraInfo: o,
                    inDemoMode: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            }
        };
    },
    2109: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.noteFeedTypeExtraInfo, p = e.inDemoMode, i = e.objectPosition, y = e.adsTarget_trackId;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "like_note_image_double_click"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    noteFeedTypeExtraInfo: r,
                    inDemoMode: p
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: i
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: y
                }
            }
        };
    },
    2110: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2112: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.videoPause, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    videoPause: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "fav"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2113: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.videoPause, p = e.objectPosition, i = e.adsTarget_trackId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    videoPause: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "fav"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2121: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.videoPause, r = e.objectPosition;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "share_feed_note_head"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "share_attempt"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    videoPause: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            }
        };
    },
    2122: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.videoPause, p = e.objectPosition, i = e.adsTarget_trackId;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "share_feed_note_head"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "share_attempt"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    videoPause: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: i
                }
            }
        };
    },
    2124: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.videoPlaySource, p = e.objectPosition, i = e.adsTarget_trackId, y = e.trackUrl;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o,
                    videoPlaySource: {
                        type: "VideoPlaySource",
                        value: r
                    }
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: i,
                    trackUrl: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2140: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.userId, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    userId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_author"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "follow"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2141: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.userId, p = e.objectPosition, i = e.adsTarget_trackId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    userId: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_author"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "follow"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2146: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteFeedTypeExtraInfo, r = e.objectPosition, p = e.channelTabId, i = e.trackId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: a,
                    authorId: n,
                    noteFeedTypeExtraInfo: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r,
                    channelTabId: p
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_video"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "video_end"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2147: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteTarget_trackId, r = e.noteFeedTypeExtraInfo, p = e.objectPosition, i = e.channelTabId, y = e.adsTarget_trackId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: a,
                    authorId: n,
                    trackId: o,
                    noteFeedTypeExtraInfo: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p,
                    channelTabId: i
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_video"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "video_end"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2161: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.videoPause, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    videoPause: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    },
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "enter_cmt_list_by_click_cmt_button"
                    }
                }
            }
        };
    },
    2163: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteTarget_trackId, r = e.videoPause, p = e.objectPosition, i = e.adsTarget_trackId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    trackId: o,
                    videoPause: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    },
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "enter_cmt_list_by_click_cmt_button"
                    }
                }
            }
        };
    },
    2171: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteFeedTypeExtraInfo, r = e.videoPause, p = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    noteFeedTypeExtraInfo: o,
                    videoPause: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "slide_to_bottom"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2172: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteTarget_trackId, n = e.noteType, o = e.authorId, r = e.objectPosition, p = e.adsTarget_trackId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "slide_to_top"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2177: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "slide_to_top"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2187: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.trackId, a = e.shareUserId;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: t
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    shareUserId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2188: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.trackId, a = e.trackUrl, n = e.noteFeedTypeExtraInfo;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    trackId: t,
                    trackUrl: a
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteFeedTypeExtraInfo: n
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "page_end"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2318: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "comment_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2565: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.shareUserId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    shareUserId: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "pageview"
                    }
                }
            }
        };
    },
    2567: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteFeedTypeExtraInfo, r = e.userId, p = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    noteFeedTypeExtraInfo: o
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    userId: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_author"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2573: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.authorId, n = e.inDemoMode, o = e.noteFeedTypeExtraInfo, r = e.commentId, p = e.isReply, i = e.parentCommentId, y = e.rootCommentId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: "short_note"
                    },
                    authorId: a,
                    inDemoMode: n,
                    noteFeedTypeExtraInfo: o
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    commentId: r,
                    isReply: p,
                    parentCommentId: i,
                    rootCommentId: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "comment_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2575: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.commentId, r = e.isReply, p = e.parentCommentId, i = e.rootCommentId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    commentId: o,
                    isReply: r,
                    parentCommentId: p,
                    rootCommentId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2577: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2578: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    2579: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition, r = e.isReply, p = e.commentId, i = e.commentPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: r,
                    commentId: p,
                    commentPosition: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_unfold"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2656: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "like"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    },
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "like_btn_onclick"
                    }
                }
            }
        };
    },
    2657: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2659: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "fav"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2660: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unfav"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2661: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.userId, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    userId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_author"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "follow"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2710: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.imageNum, r = e.noteFeedTypeExtraInfo, p = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    imageNum: o,
                    noteFeedTypeExtraInfo: r
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "slide_to_right"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2711: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.noteFeedTypeExtraInfo, r = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n,
                    noteFeedTypeExtraInfo: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "slide_to_left"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2713: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            event: {
                type: "Event",
                value: {
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "share_feed_note_head"
                    },
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "share_attempt"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            }
        };
    },
    2759: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "add_comment"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    },
                    actionInteractionType: {
                        type: "ActionInteractionType",
                        value: "add_comment_engage_bar"
                    }
                }
            }
        };
    },
    2782: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.commentId, r = e.isReply, p = e.parentCommentId, i = e.rootCommentId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    commentId: o,
                    isReply: r,
                    parentCommentId: p,
                    rootCommentId: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "unlike_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    2800: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition, r = e.userId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    userId: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "user"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_author"
                    }
                }
            }
        };
    },
    2909: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "goto_channel_tab"
                    }
                }
            }
        };
    },
    3551: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "download_attempt"
                    }
                }
            }
        };
    },
    3552: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "download_attempt"
                    }
                }
            }
        };
    },
    3601: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition, r = e.isReply, p = e.commentId, i = e.commentPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: r,
                    commentId: p,
                    commentPosition: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_unfold"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    3602: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.noteType, n = e.authorId, o = e.objectPosition, r = e.isReply, p = e.commentId, i = e.commentPosition;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    authorId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: o
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: r,
                    commentId: p,
                    commentPosition: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_unfold"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    3781: function() {
        return {
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "download_attempt"
                    }
                }
            }
        };
    },
    4121: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.authorId, a = e.noteType, n = e.noteId, o = e.channelTabId, r = e.channelTabIndex, p = e.channelTabName;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    authorId: t,
                    noteType: {
                        type: "NoteType",
                        value: a
                    },
                    noteId: n
                }
            },
            index: {
                type: "Index",
                value: {
                    channelTabId: o,
                    channelTabIndex: r,
                    channelTabName: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_author"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    }
                }
            }
        };
    },
    4154: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "take_screenshot"
                    }
                }
            }
        };
    },
    4161: function() {
        return {
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "take_screenshot"
                    }
                }
            }
        };
    },
    4163: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId;
        return {
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "take_screenshot"
                    }
                }
            }
        };
    },
    4179: function() {
        return {
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "take_screenshot"
                    }
                }
            }
        };
    },
    4195: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt"
                    }
                }
            }
        };
    },
    4196: function() {
        return {
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    }
                }
            }
        };
    },
    4197: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt"
                    }
                }
            }
        };
    },
    4198: function() {
        return {
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    }
                }
            }
        };
    },
    4199: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt_success"
                    }
                }
            }
        };
    },
    4200: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt_success"
                    }
                }
            }
        };
    },
    4201: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt_success"
                    }
                }
            }
        };
    },
    4202: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_got_phone"
                    }
                }
            }
        };
    },
    4203: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_got_phone"
                    }
                }
            }
        };
    },
    4204: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_got_phone"
                    }
                }
            }
        };
    },
    4205: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_auth_deny"
                    }
                }
            }
        };
    },
    4206: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_auth_deny"
                    }
                }
            }
        };
    },
    4207: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_auth_deny"
                    }
                }
            }
        };
    },
    4210: function() {
        return {
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "more_notes_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    }
                }
            }
        };
    },
    4211: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_auth_deny"
                    }
                }
            }
        };
    },
    4212: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt"
                    }
                }
            }
        };
    },
    4213: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_attempt_success"
                    }
                }
            }
        };
    },
    4214: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "login_got_phone"
                    }
                }
            }
        };
    },
    4345: function() {
        return {
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_image_in_recommend"
                    }
                }
            }
        };
    },
    4346: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId;
        return {
            channelTabTarget: {
                type: "ChannelTabTarget",
                value: {
                    channelTabName: t,
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_image_in_recommend"
                    }
                }
            }
        };
    },
    5623: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId, n = e.objectPosition;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a,
                    objectPosition: n
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "launch_app"
                    }
                }
            }
        };
    },
    5624: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId, n = e.objectPosition;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a,
                    objectPosition: n
                }
            },
            event: {
                type: "Event",
                value: {
                    action: {
                        type: "NormalizedAction",
                        value: "launch_app"
                    }
                }
            }
        };
    },
    5625: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "launch_app_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    }
                }
            }
        };
    },
    5626: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "launch_app_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    }
                }
            }
        };
    },
    5843: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId, n = e.channelTabIndex;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a,
                    channelTabIndex: n
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "channel_tab_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "goto_page"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "target_in_page_outapp"
                    }
                }
            }
        };
    },
    5844: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId, n = e.channelTabIndex;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a,
                    channelTabIndex: n
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "channel_tab_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "goto_page"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "target_in_page_outapp"
                    }
                }
            }
        };
    },
    5845: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId, n = e.channelTabIndex;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a,
                    channelTabIndex: n
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "channel_tab_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "target_in_page_outapp"
                    }
                }
            }
        };
    },
    5846: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName, a = e.channelTabId, n = e.channelTabIndex;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t,
                    channelTabId: a,
                    channelTabIndex: n
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "channel_tab_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "target_in_page_outapp"
                    }
                }
            }
        };
    },
    6033: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.adsId, a = e.landingUrl, n = e.searchSessionId, o = e.searchWord;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: t,
                    landingUrl: a
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: n,
                    searchWord: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "ads_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "middle_entrance"
                    }
                }
            }
        };
    },
    6034: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.adsId, a = e.landingUrl, n = e.searchSessionId, o = e.searchWord;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: t,
                    landingUrl: a
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: n,
                    searchWord: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "ads_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "middle_entrance"
                    }
                }
            }
        };
    },
    6035: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.adsId, a = e.landingUrl, n = e.searchSessionId, o = e.searchWord;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: t,
                    adsType: {
                        type: "AdsType",
                        value: "ADS_TYPE_PIC"
                    },
                    landingUrl: a
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: n,
                    searchWord: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "ads_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_close"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "middle_entrance"
                    }
                }
            }
        };
    },
    6043: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.adsId, a = e.landingUrl, n = e.searchSessionId, o = e.searchWord;
        return {
            adsTarget: {
                type: "AdsTarget",
                value: {
                    adsId: t,
                    landingUrl: a
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: n,
                    searchWord: o
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "ads_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "video_end"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "middle_entrance"
                    }
                }
            }
        };
    },
    6798: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_result_pois_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "goto_page"
                    }
                }
            }
        };
    },
    7579: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition, p = e.channelTabId, i = e.channelTabName, y = e.channelTabIndex, l = e.wordRequestId, u = e.recommendSearchWords;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r,
                    channelTabId: p,
                    channelTabName: i,
                    channelTabIndex: y
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    wordRequestId: l,
                    recommendSearchWords: u
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_after_discovery_return"
                    }
                }
            }
        };
    },
    7580: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition, p = e.channelTabId, i = e.channelTabName, y = e.channelTabIndex, l = e.wordRequestId, u = e.recommendSearchWords;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r,
                    channelTabId: p,
                    channelTabName: i,
                    channelTabIndex: y
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    wordRequestId: l,
                    recommendSearchWords: u
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "search"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_after_discovery_return"
                    }
                }
            }
        };
    },
    7581: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.trackId, n = e.noteType, o = e.authorId, r = e.objectPosition, p = e.channelTabId, i = e.channelTabName, y = e.channelTabIndex, l = e.wordRequestId, u = e.recommendSearchWords;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    trackId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: r,
                    channelTabId: p,
                    channelTabName: i,
                    channelTabIndex: y
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    wordRequestId: l,
                    recommendSearchWords: u
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_word_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_close"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_word_display_after_discovery_return"
                    }
                }
            }
        };
    },
    7684: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.authorId, n = e.objectPosition, o = e.channelTabId, r = e.isOnTop, p = e.danmakuId, i = e.danmakuContent, y = e.danmakuUserid, l = e.danmakuTime;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: "video_note"
                    },
                    authorId: a
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: n,
                    channelTabId: o,
                    isOnTop: r
                }
            },
            danmakuTarget: {
                type: "DanmakuTarget",
                value: {
                    danmakuId: p,
                    danmakuContent: i,
                    danmakuUserid: y,
                    danmakuTime: l
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "danmaku"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "delete_confirm"
                    }
                }
            }
        };
    },
    7685: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.authorId, n = e.objectPosition, o = e.channelTabId, r = e.isOnTop;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: "video_note"
                    },
                    authorId: a
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: n,
                    channelTabId: o,
                    isOnTop: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "danmaku"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "delete_attempt"
                    }
                }
            }
        };
    },
    7686: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.authorId, n = e.objectPosition, o = e.channelTabId, r = e.channelTabName;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: "video_note"
                    },
                    authorId: a
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: n,
                    channelTabId: o,
                    channelTabName: r
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "danmaku"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_edit"
                    }
                }
            }
        };
    },
    7806: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.searchSessionId, n = e.searchWord, o = e.searchWordFrom, r = e.noteSortType, p = e.isSearchCustomized;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: a,
                    searchWord: n,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: o
                    },
                    noteSortType: {
                        type: "NoteSortType",
                        value: r
                    }
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    isSearchCustomized: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_custom_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_result"
                    }
                }
            }
        };
    },
    7807: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.searchSessionId, n = e.searchWord, o = e.searchWordFrom, r = e.noteSortType, p = e.isSearchCustomized;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t
                }
            },
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: a,
                    searchWord: n,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: o
                    },
                    noteSortType: {
                        type: "NoteSortType",
                        value: r
                    }
                }
            },
            userTarget: {
                type: "UserTarget",
                value: {
                    isSearchCustomized: p
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "search_custom_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_result"
                    }
                }
            }
        };
    },
    8396: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectPosition, a = e.noteId, n = e.noteType, o = e.authorId, r = e.userId, p = e.fansCount, i = e.ownNotesCount;
        return {
            index: {
                type: "Index",
                value: {
                    objectPosition: t
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: a,
                    noteType: {
                        type: "NoteType",
                        value: n
                    },
                    authorId: o
                }
            },
            brandingUserTarget: {
                type: "BrandingUserTarget",
                value: {
                    userId: r,
                    fansCount: p,
                    ownNotesCount: i
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "just_read_tag"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_in_user_page_note_tab"
                    }
                }
            }
        };
    },
    8445: function() {
        return {
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "send_comment"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    8879: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.reportSource, a = e.reportType, n = e.reportTargetId, o = e.reportSourceId, r = e.reportEntrance, p = e.noteFeedTypeStr, i = e.noteFeedTypeExtraInfo, y = e.isRelatedNote, l = e.relatedNoteId, u = e.objectPosition, d = e.isReply;
        return {
            reportTarget: {
                type: "ReportTarget",
                value: {
                    reportSource: t,
                    reportType: a,
                    reportTargetId: n,
                    reportSourceId: o,
                    reportEntrance: r
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteFeedTypeStr: p,
                    noteFeedTypeExtraInfo: i,
                    isRelatedNote: y,
                    relatedNoteId: l
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: u
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: d
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "report_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "report_attempt"
                    }
                }
            }
        };
    },
    8880: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.reportSource, a = e.reportType, n = e.reportTargetId, o = e.reportSourceId, r = e.reportEntrance, p = e.noteFeedTypeStr, i = e.noteFeedTypeExtraInfo, y = e.isRelatedNote, l = e.relatedNoteId, u = e.videoPause, d = e.objectPosition, T = e.isReply;
        return {
            reportTarget: {
                type: "ReportTarget",
                value: {
                    reportSource: t,
                    reportType: a,
                    reportTargetId: n,
                    reportSourceId: o,
                    reportEntrance: r
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteFeedTypeStr: p,
                    noteFeedTypeExtraInfo: i,
                    isRelatedNote: y,
                    relatedNoteId: l,
                    videoPause: u
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: d
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: T
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "report_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "report_attempt"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_source"
                    }
                }
            }
        };
    },
    8881: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.reportSource, a = e.reportType, n = e.reportTargetId, o = e.reportSourceId, r = e.reportEntrance, p = e.noteFeedTypeStr, i = e.noteFeedTypeExtraInfo, y = e.isRelatedNote, l = e.relatedNoteId, u = e.videoPause, d = e.objectPosition, T = e.isReply;
        return {
            reportTarget: {
                type: "ReportTarget",
                value: {
                    reportSource: t,
                    reportType: a,
                    reportTargetId: n,
                    reportSourceId: o,
                    reportEntrance: r
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteFeedTypeStr: p,
                    noteFeedTypeExtraInfo: i,
                    isRelatedNote: y,
                    relatedNoteId: l,
                    videoPause: u
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: d
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: T
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "report_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "report_attempt"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    8888: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.reportSource, a = e.reportType, n = e.reportTargetId, o = e.reportSourceId, r = e.reportEntrance, p = e.noteFeedTypeStr, i = e.noteFeedTypeExtraInfo, y = e.objectPosition, l = e.isReply;
        return {
            reportTarget: {
                type: "ReportTarget",
                value: {
                    reportSource: t,
                    reportType: a,
                    reportTargetId: n,
                    reportSourceId: o,
                    reportEntrance: r
                }
            },
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteFeedTypeStr: p,
                    noteFeedTypeExtraInfo: i
                }
            },
            index: {
                type: "Index",
                value: {
                    objectPosition: y
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    isReply: l
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "report_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "report_attempt"
                    }
                }
            }
        };
    },
    9093: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord, n = e.searchWordFrom, o = e.noteSortType;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: n
                    },
                    noteSortType: {
                        type: "NoteSortType",
                        value: o
                    }
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "return_top_button"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_result"
                    }
                }
            }
        };
    },
    9094: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.searchSessionId, a = e.searchWord, n = e.searchWordFrom, o = e.noteSortType;
        return {
            searchTarget: {
                type: "SearchTarget",
                value: {
                    searchSessionId: t,
                    searchWord: a,
                    searchWordFrom: {
                        type: "SearchWordFrom",
                        value: n
                    },
                    noteSortType: {
                        type: "NoteSortType",
                        value: o
                    }
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "return_top_button"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "click"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "search_result"
                    }
                }
            }
        };
    },
    9319: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.noteId, a = e.authorId, n = e.inDemoMode, o = e.noteFeedTypeExtraInfo, r = e.commentId, p = e.isReply, i = e.parentCommentId, y = e.rootCommentId;
        return {
            noteTarget: {
                type: "NoteTarget",
                value: {
                    noteId: t,
                    noteType: {
                        type: "NoteType",
                        value: "short_note"
                    },
                    authorId: a,
                    inDemoMode: n,
                    noteFeedTypeExtraInfo: o
                }
            },
            noteCommentTarget: {
                type: "NoteCommentTarget",
                value: {
                    commentId: r,
                    isReply: p,
                    parentCommentId: i,
                    rootCommentId: y
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "comment_api"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "note_related_notes"
                    }
                }
            }
        };
    },
    9472: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_unfold"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_at"
                    }
                }
            }
        };
    },
    9473: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.channelTabName;
        return {
            index: {
                type: "Index",
                value: {
                    channelTabName: t
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "note_comment_page_target"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "target_unfold"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_at"
                    }
                }
            }
        };
    },
    9475: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.channelTabId;
        return {
            user: {
                type: "User",
                value: {
                    userId: t
                }
            },
            index: {
                type: "Index",
                value: {
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "user_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_at"
                    }
                }
            }
        };
    },
    9476: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.channelTabId;
        return {
            user: {
                type: "User",
                value: {
                    userId: t
                }
            },
            index: {
                type: "Index",
                value: {
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "user_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "impression"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_at"
                    }
                }
            }
        };
    },
    9478: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.channelTabId;
        return {
            user: {
                type: "User",
                value: {
                    userId: t
                }
            },
            index: {
                type: "Index",
                value: {
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "user_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "add_comment"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_at"
                    }
                }
            }
        };
    },
    9479: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.userId, a = e.channelTabId;
        return {
            user: {
                type: "User",
                value: {
                    userId: t
                }
            },
            index: {
                type: "Index",
                value: {
                    channelTabId: a
                }
            },
            event: {
                type: "Event",
                value: {
                    targetType: {
                        type: "RichTargetType",
                        value: "user_image"
                    },
                    action: {
                        type: "NormalizedAction",
                        value: "add_comment"
                    },
                    targetDisplayType: {
                        type: "TargetDisplayType",
                        value: "user_in_note_comment_at"
                    }
                }
            }
        };
    }
};

exports.default = e;