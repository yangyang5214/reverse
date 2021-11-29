Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHomeFeeds = function(e) {
    var i = e.cursorScore, o = e.categoryid;
    return (0, r.get)("HOMEFEEDS", {
        transform: !0,
        params: {
            source: "wx",
            cursorScore: i,
            categoryid: o
        }
    }).then(t);
}, exports.checkIfNewUser = function(e) {
    var t = e.sid;
    return (0, r.get)("CHECK_IF_NEW_USER", {
        transform: !0,
        params: {
            source: "wx",
            sid: t
        }
    });
}, exports.getFulisheCategoryBanner = function(e) {
    var t = e.tabId, i = {};
    t && (i.tabId = t);
    return (0, r.get)("FULISHE_CATEGORIES_BANNERS", {
        transform: !0,
        params: i
    });
};

var r = require("../utils/http"), e = require("../utils/parse-url"), t = function(r) {
    var t = [], i = r.length > 0 && r.slice(-1)[0], o = i && i.cursorScore, a = r.length > 0 || !1;
    return r.forEach(function(r) {
        var i = r.type, o = r.id, a = r.image, s = r.link, c = r.desc, n = r.title, u = r.itemPrice, p = r.newArriving, d = r.vendorIcon, g = r.promotionText;
        if (!/立减|选/.test(g)) {
            var m = g ? [ {
                name: g
            } ] : [], f = {
                type: i,
                id: o,
                image: (0, e.transUriToSafe)(a),
                title: n,
                link: s,
                desc: c,
                newArriving: p || !1,
                vendorIcon: (0, e.transUriToSafe)(d),
                promotionTag: m
            };
            u && Array.isArray(u) && u.forEach(function(r) {
                var e = r.type, t = r.price;
                switch (e) {
                  case "origin_price":
                    f.price = t;
                    break;

                  case "sale_price":
                    f.discountPrice = t;
                    break;

                  case "member_price":
                    f.memberPrice = t;
                }
            }), t.push(f);
        }
    }), {
        cursorScore: o,
        goods: t,
        hasMore: a
    };
};