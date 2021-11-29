Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHomeFeeds = function() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, e.get)("COMMUNITY_HOMEFEEDS", {
        params: o
    });
}, exports.getHomeFeedsCategories = function() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, e.get)("COMMUNITY_CATEGORIES", {
        params: o
    });
}, exports.getDefaultCategories = o, exports.getHomeFeedsCategoriesWithoutSid = function() {
    var e = [ {
        name: "推荐",
        oid: "recommend"
    }, {
        name: "时尚",
        oid: "fasion"
    }, {
        name: "美妆",
        oid: "cosmetics"
    }, {
        name: "美食",
        oid: "food"
    }, {
        name: "运动",
        oid: "sport"
    }, {
        name: "旅行",
        oid: "travel"
    }, {
        name: "居家",
        oid: "home"
    }, {
        name: "母婴",
        oid: "babycare"
    }, {
        name: "读书",
        oid: "books"
    }, {
        name: "数码",
        oid: "digital"
    }, {
        name: "时尚男士",
        oid: "mens_fasion"
    } ];
    return new Promise(function(o) {
        o(e);
    });
}, exports.getHomeFeedsWithoutSid = function(o) {
    var n = o.oid, i = o.page, t = o.pageSize;
    return (0, e.get)("COMMUNITY_HOMEFEEDS", {
        transform: !0,
        params: {
            oid: n,
            page: i,
            pageSize: t
        }
    });
}, exports.checkIsDefaultCategories = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], o = [ {
        name: "推荐",
        oid: "recommend"
    }, {
        name: "时尚",
        oid: "fasion"
    }, {
        name: "美妆",
        oid: "cosmetics"
    }, {
        name: "美食",
        oid: "food"
    }, {
        name: "运动",
        oid: "sport"
    }, {
        name: "旅行",
        oid: "travel"
    }, {
        name: "居家",
        oid: "home"
    }, {
        name: "母婴",
        oid: "babycare"
    }, {
        name: "读书",
        oid: "books"
    }, {
        name: "数码",
        oid: "digital"
    }, {
        name: "时尚男士",
        oid: "mens_fasion"
    } ];
    if (0 === e.length || e.length !== o.length) return !1;
    return e.forEach(function(e, n) {
        if (o[n] && e.oid !== o[n].oid) return !1;
    }), !0;
}, exports.getActivityBannerSwitch = function() {
    return (0, e.get)("INDEX_ACTIVITY_SWITCH", {
        transform: !0
    });
}, exports.getActivityBannerInfo = function() {
    return (0, e.get)("ACTIVITY_BANNER_INFO", {
        transform: !0
    });
};

var e = require("../utils/http");

function o() {
    return [ {
        name: "推荐",
        oid: "recommend"
    }, {
        name: "时尚",
        oid: "fasion"
    }, {
        name: "美妆",
        oid: "cosmetics"
    }, {
        name: "美食",
        oid: "food"
    }, {
        name: "运动",
        oid: "sport"
    }, {
        name: "旅行",
        oid: "travel"
    }, {
        name: "居家",
        oid: "home"
    }, {
        name: "母婴",
        oid: "babycare"
    }, {
        name: "读书",
        oid: "books"
    }, {
        name: "数码",
        oid: "digital"
    }, {
        name: "时尚男士",
        oid: "mens_fasion"
    } ];
}