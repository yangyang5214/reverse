Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHotSearch = function() {
    return (0, e.get)("NOTES_HOT_SEARCH", {
        transform: !0
    }).then(t);
}, exports.getSearchRecommend = function(t) {
    var r = t.keyword;
    return (0, e.get)("SEARCH_NOTES_AUTO_COMPLETE", {
        transform: !0,
        params: {
            keyword: r
        }
    }).then(n);
}, exports.getNotesPlaceholder = function(t) {
    var n = t.openid;
    return (0, e.get)("SEARCH_NOTES_PLACEHOLDER", {
        transform: !0,
        params: {
            openid: n
        }
    }).then(r);
}, exports.hasValue = function(e) {
    var t = !1, r = -1;
    return this.data.historys.forEach(function(n, o) {
        n.name === e && (t = !0, r = o);
    }), {
        flag: t,
        index: r
    };
}, exports.removeEleBaseIndex = function(e) {
    e > -1 && this.data.historys.splice(e, 1);
};

var e = require("../utils/http"), t = function(e) {
    return e || [];
}, r = function(e) {
    var t = getCurrentPages();
    return "pages/main/home/index" === t[t.length - 1].route ? e.home : "pages/main/store/index" === t[t.length - 1].route ? e.store : void 0;
};

var n = function(e) {
    return e ? e.map(function(e) {
        return {
            name: e.text,
            description: e.desc,
            searchType: e.searchType
        };
    }) : [];
};