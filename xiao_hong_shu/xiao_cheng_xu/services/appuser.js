var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSearchFromKeyword = function(e) {
    var t = e.keyword, o = e.pagination;
    return (0, r.get)("SEARCH_USERS_FROM_KEYWORD", {
        params: {
            keyword: t,
            page: o.page,
            pageSize: o.pageSize
        }
    });
}, exports.followUser = a, exports.unfollowUser = n, exports.getFollowings = function(e) {
    var t = e.userId, o = e.start, s = void 0 === o ? "" : o;
    return (0, r.get)("SNS_USER_FOLLOWINGS", {
        resourceParams: {
            id: t
        },
        params: {
            start: s
        },
        transform: !0
    });
}, exports.getFollowers = function(e) {
    var t = e.userId, o = e.start, s = void 0 === o ? "" : o;
    return (0, r.get)("SNS_USER_FOLLOWERS", {
        resourceParams: {
            id: t
        },
        params: {
            start: s
        },
        transform: !0
    });
}, exports.triggerFollow = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = !1;
    e && e.hasOwnProperty("followed") && !e.followed && (r = !0);
    e && !e.hasOwnProperty("followed") && -1 === [ "follows", "both" ].indexOf(e.fstatus) && (r = !0);
    return new Promise(function(o, s) {
        r ? a({
            userId: e.userid || e.id
        }).then(function() {
            e.hasOwnProperty("followed") ? e.followed = !0 : e.fstatus = "follows", o(e);
        }).catch(function() {
            s();
        }) : t.default.showModal({
            title: "是否取消关注",
            confirmText: "确认",
            cancelText: "取消",
            success: function(r) {
                r.confirm && n({
                    userId: e.userid || e.id
                }).then(function() {
                    e.hasOwnProperty("followed") ? e.followed = !1 : e.fstatus = "none", o(e);
                }).catch(function() {
                    s();
                });
            }
        });
    });
}, exports.mapPage = exports.DEFAULT_DATA = void 0;

var r = require("../utils/http"), t = e(require("../utils/api")), o = require("../utils/page"), s = Object.assign({}, {}, {
    users: []
});

exports.DEFAULT_DATA = s;

function a(e) {
    var t = e.userId;
    return (0, r.post)("FOLLOW", {}, {
        resourceParams: {
            userId: t
        }
    });
}

function n(e) {
    var t = e.userId;
    return (0, r.post)("UNFOLLOW", {}, {
        resourceParams: {
            userId: t
        }
    });
}

exports.mapPage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 ? arguments[2] : void 0, s = t.page, a = t.pageSize, n = (0, 
    o.mapPage)(e.users, r.users, {
        page: s,
        pageSize: a
    }), i = n.list, u = n.pagination;
    return {
        users: i,
        pagination: u
    };
};