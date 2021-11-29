Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSearchFromKeyword = function(t) {
    var r = t.keyword, o = t.pagination, a = t.sort, n = void 0 === a ? "general" : a, s = t.needGifCover, i = t.prependNoteIds, p = void 0 === i ? "" : i, g = {
        keyword: r,
        sortBy: n,
        page: o.page,
        pageSize: o.pageSize,
        prependNoteIds: p
    };
    s && (g.needGifCover = s);
    return (0, e.get)("SEARCH_NOTES_FROM_KEYWORD", {
        params: g
    });
}, exports.getTopicFromKeyword = function(t) {
    var r = t.keyword;
    return (0, e.get)("SEARCH_TOPIC", {
        transform: !0,
        params: {
            keyword: r
        }
    });
}, exports.createData = exports.mapPage = exports.DEFAULT_DATA = void 0;

var e = require("../utils/http"), t = require("../utils/page"), r = require("../utils/string"), o = Object.assign({}, {}, {
    notes: []
});

exports.DEFAULT_DATA = o;

exports.mapPage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, a = o.page, n = o.pageSize, s = o.homeFeeds, i = (0, 
    t.mapPage)(e.notes, r.notes, {
        page: a,
        pageSize: n,
        homeFeeds: s
    }), p = i.list, g = i.pagination;
    return Object.assign({}, r, {
        notes: p,
        pagination: g
    });
};

exports.createData = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e || console.error("[notes-list] could not found notes array");
    var a = e.map(function(e) {
        return Object.assign(e, {
            title: (0, r.escapeNoteString)(e.title),
            desc: (0, r.escapeNoteString)(e.desc)
        });
    }), n = Object.assign({}, o, t, {
        notes: a
    });
    return n;
};