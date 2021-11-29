var e = "".concat("pages/", "main/"), o = "".concat("pages/", "common/"), n = "".concat("pages/", "secondary/"), t = {
    HomePage: "".concat(e, "home/index"),
    StoreHomePage: "".concat(e, "store/index"),
    UserCenterPage: "".concat(e, "mine/index"),
    Webview: "".concat(e, "webview/index"),
    JumpPage: "".concat(e, "jump/page"),
    OldWebview: "".concat("main/", "webview/index"),
    OldJumpPage: "".concat("main/", "jump/page"),
    OldLoginIndex: "".concat("main/", "login-page/index"),
    OldMemberIndex: "".concat("main/", "member/index"),
    OldShareGoods: "".concat("main/", "share-goods/index"),
    NoteDetail: "".concat(e, "note/index"),
    VideoNoteDetail: "".concat(e, "video-note/index"),
    ShareGoods: "".concat(e, "share-goods/index"),
    OldSearchResult: "".concat("search/", "result/index"),
    JumpToApp: "".concat(o, "jump-to-app/index"),
    NotFound: "".concat(o, "not-found/index"),
    ErrorPage: "".concat(o, "error/index"),
    LoginIndex: "".concat(o, "login/index"),
    MobileLogin: "".concat(o, "login/mobile-login"),
    LoginTerms: "".concat(o, "login/terms"),
    LoginPrivacy: "".concat(o, "login/privacy"),
    ContactPage: "".concat(o, "contact/index"),
    Feedback: "".concat(o, "feedback/index"),
    PrivacyPolicy: "".concat(o, "privacy-policy/index"),
    SearchIndex: "".concat(n, "search/index"),
    AuthorPage: "".concat(n, "author/index"),
    NoteCommentDetail: "".concat(n, "comment/index"),
    VerPage: "".concat(n, "verify/index"),
    SettingsPage: "".concat(n, "mine/setting"),
    OldNote: "".concat("community/", "discovery/note"),
    OldVideoNote: "".concat("community/", "discovery/video-note"),
    OldFeedNote: "".concat("community/", "note/index"),
    OldAuthorPage: "".concat("community/", "author/index"),
    NoteV1: "pages/notev1/note/index",
    NoteV2: "pages/notev2/note/index"
}, a = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = "";
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        var a = t[n];
        if (e === a) {
            o = n;
            break;
        }
    }
    return o;
}, i = function(e) {
    return [ "HomePage", "StoreHomePage", "UserCenterPage" ].indexOf(e) > -1;
};

module.exports = {
    getRoute: function(e) {
        return t[e];
    },
    isSwitchTab: i,
    MainRoot: e,
    OldMainRoot: "main/",
    CommonRoot: o,
    SecondaryRoot: n,
    OldCommunityRoot: "community/",
    RouteMap: t,
    getCategory: a,
    getCategoryByPath: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = "";
        for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
            var a = t[n];
            if (e.indexOf(a) > -1) {
                o = n;
                break;
            }
        }
        return o;
    },
    GetPages: function(e) {
        var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = [];
        for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
            var i = t[a];
            if (i && 0 === i.indexOf(e)) {
                var c = o ? i.replace(e, "") : i;
                n.push(c);
            }
        }
        return n;
    },
    NoNavigationBarRoutes: [],
    getCategoryByoldRoute: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = {
            HomePage: {
                oldRoute: [ "main/home/page" ]
            },
            AuthorPage: {
                oldRoute: [ "community/author/index" ]
            },
            Webview: {
                oldRoute: [ "main/webview/index" ]
            },
            LoginIndex: {
                oldRoute: [ "main/login-page/index" ]
            },
            JumpToApp: {
                oldRoute: [ "main/jump-to-app/index" ]
            },
            NoteDetail: {
                oldRoute: [ "community/discovery/note", "community/discovery/video-note", "community/note/index" ]
            },
            FOLLOWINGS: {
                oldRoute: [ "community/author/followings" ]
            },
            FOLLOWERS: {
                oldRoute: [ "community/author/followers" ]
            }
        }, n = {}, t = "pages/".concat(e), c = a(t);
        return c ? (n.category = c, n.isSwitchTab = i(c), n) : (Object.keys(o).some(function(t) {
            if (o[t].oldRoute.indexOf(e) > -1) return n = {
                category: t,
                isSwitchTab: i(t)
            }, !0;
        }), n);
    },
    OldSearchRoot: "search/"
};