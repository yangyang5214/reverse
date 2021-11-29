Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.filterGoods = function(e) {
    var t = e.slice(), o = [];
    return t.forEach(function(e) {
        /立减/.test(e.promotionText) || /选/.test(e.promotionText) || o.push(e);
    }), o;
}, exports.getSearchFromKeyword = function(t) {
    var o = t.keyword, r = t.pagination;
    return (0, e.get)("SEARCH_FROM_KEYWORD", {
        transform: !0,
        params: {
            keyword: o,
            page: r.page,
            perPage: r.pageSize
        }
    }).then(n);
}, exports.createData = exports.mapPage = exports.DEFAULT_DATA = void 0;

var e = require("../utils/http"), t = require("../utils/parse-url"), o = require("../utils/page"), r = require("../utils/string"), i = Object.assign({}, {}, {
    goods: []
});

exports.DEFAULT_DATA = i;

var n = function(e) {
    var o = e.items.slice(), r = [];
    return o.forEach(function(e) {
        var o = e.promotionText ? [ {
            name: e.promotionText
        } ] : [];
        r.push({
            id: e.id,
            image: (0, t.transUriToSafe)(e.image),
            title: e.title,
            desc: e.desc,
            discountPrice: e.discountPrice,
            price: e.price,
            vendorIcon: (0, t.transUriToSafe)(e.vendorIcon),
            newArriving: e.newArriving || !1,
            promotionTag: o,
            promotionText: e.promotionText
        });
    }), {
        totalCount: e.totalCount,
        goods: r
    };
};

exports.mapPage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = r.page, n = r.pageSize, a = r.homeFeeds, s = (0, 
    o.mapPage)(e.goods, t.goods, {
        page: i,
        pageSize: n,
        homeFeeds: a
    }), p = s.list, g = s.pagination;
    return Object.assign({}, t, {
        goods: p,
        pagination: g
    });
};

exports.createData = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e || console.error("[goods-list] could not found goods array");
    var o = e.map(function(e) {
        return Object.assign(e, {
            title: (0, r.escapeNoteString)(e.title),
            desc: (0, r.escapeNoteString)(e.desc)
        });
    }), n = Object.assign({}, i, t, {
        goods: o
    });
    return n;
};