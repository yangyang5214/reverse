var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHot = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.num, t = void 0 === r ? 4 : r;
    return (0, n.get)("HOT", {
        params: {
            num: t
        }
    }).then(o);
}, exports.searchAuto = function() {
    return i.apply(this, arguments);
}, exports.search = function(e) {
    return s.apply(this, arguments);
}, exports.TRENDING_TYPE = void 0;

var r = e(require("../@babel/runtime/regenerator")), t = require("../@babel/runtime/helpers/asyncToGenerator"), n = require("../utils/http"), a = require("../utils/page");

exports.TRENDING_TYPE = {
    SEARCH: "search_trending",
    GOODS: "goods_trending"
};

var u = {
    trending_data: "searchTrending",
    search_trending: "searchTrending",
    goods_trending: "goodsTrending"
}, o = function(e) {
    var r = {};
    return Object.keys(e).forEach(function(t) {
        var n = t;
        u[t] && (n = u[t]), r[n] = e[t];
    }), r;
};

function i() {
    return (i = t(r.default.mark(function e() {
        var t, a, u, i, s, p = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = p.length > 0 && void 0 !== p[0] ? p[0] : {}, a = t.keyword, u = void 0 === a ? "" : a, 
                i = t.num, s = void 0 === i ? 3 : i, u) {
                    e.next = 3;
                    break;
                }
                return e.abrupt("return", new Error("must provide keyword to searchAuto"));

              case 3:
                return e.abrupt("return", (0, n.get)("SEARCH", {
                    params: {
                        keyword: u,
                        page: 1,
                        page_size: s
                    }
                }).then(o));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function s() {
    return (s = t(r.default.mark(function e(t) {
        var u, i, s, p;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (u = t.keyword, i = t.type, s = t.pagination, p = void 0 === s ? a.DEFAULT_PAGINATION_ARGS : s, 
                u) {
                    e.next = 3;
                    break;
                }
                return e.abrupt("return", new Error("must provide keyword to searchFull"));

              case 3:
                return e.abrupt("return", (0, n.get)("SEARCH", {
                    params: {
                        keyword: u,
                        type: i,
                        page: p.page,
                        page_size: p.pageSize
                    }
                }).then(o));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}