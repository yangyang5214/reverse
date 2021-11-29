var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../../libs/vuefy.js"), a = require("../../../../../utils/path"), r = e(require("../../../../../utils/user")), n = require("../../../../../utils/discovery"), i = e(require("../../../../../libs/event-bus"));

e(require("../../../../../utils/system")), require("../../../../../utils/version");

Component({
    properties: {
        formatedDesc: Array,
        noteTags: Array
    },
    data: {
        unExpandFormatedDesc: [],
        canExpand: !1,
        isExpand: !1
    },
    ready: function() {
        var e = this;
        i.default.on("expandText", function() {
            e.setData({
                isExpand: !0
            });
        }), (0, t.watch)(this, {
            formatedDesc: function(e) {
                var t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 128, a = 0, r = [], n = !1, i = 0;
                    return !!Array.isArray(e) && (e.some(function(e) {
                        var s = [];
                        return i++, e.some(function(e) {
                            var r;
                            switch (e.type) {
                              case "text":
                                for (var o = 0; o < e.text.length; o++) {
                                    var u = e.text.charCodeAt(o);
                                    if (a += u >= 19968 && u <= 40869 ? 2 : u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 ? 1 : 2, 
                                    i > 2) n = !0; else if (a > t) {
                                        n = !0, r = {
                                            type: "text",
                                            text: e.text.substring(0, o - 8).concat("...")
                                        };
                                        break;
                                    }
                                }
                                break;

                              case "image":
                                a += 2, i > 2 ? n = !0 : a > t && (n = !0, r = {
                                    type: "text",
                                    text: "..."
                                });
                                break;

                              case "userTag":
                                for (var d = 0; d < e.text.length; d++) {
                                    var c = e.text.charCodeAt(d);
                                    a += c >= 19968 && c <= 40869 ? 2 : c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 ? 1 : 2;
                                }
                                a += 4, i > 2 ? n = !0 : a > t && (n = !0, r = {
                                    type: "text",
                                    text: "..."
                                });
                                break;

                              case "pageTag":
                                for (var p = 0; p < e.text.length; p++) {
                                    var x = e.text.charCodeAt(p);
                                    a += x >= 19968 && x <= 40869 ? 2 : x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 ? 1 : 2;
                                }
                                a += 4, i > 2 ? n = !0 : a > t && (n = !0, r = {
                                    type: "text",
                                    text: "..."
                                });
                            }
                            return n ? s.push(r) : s.push(e), n;
                        }), n ? r.push(s) : r.push(e), n;
                    }), {
                        canExpand: n,
                        unExpandFormatedDesc: r
                    });
                }(e), a = t.unExpandFormatedDesc, r = t.canExpand;
                this.setData({
                    unExpandFormatedDesc: a,
                    canExpand: r
                });
            }
        });
    },
    methods: {
        handleNoteTag: function(e) {
            var t = e.currentTarget.dataset, r = t.link;
            t.pageId;
            (0, a.navigateTo)("Webview", {
                link: r
            });
        },
        handleTriggerExpand: function() {
            this.setData({
                isExpand: !this.data.isExpand
            });
        },
        handlePageTap: function(e) {
            var t = e.target.dataset, r = t.type, i = t.link;
            "goods" !== r ? "vendor" !== r && (0, a.navigateTo)("Webview", {
                link: i
            }) : (0, a.navigateTo)("Webview", {
                link: "/goods/".concat((0, n.getGoodsId)(i))
            });
        },
        handleUserTap: function(e) {
            var t = e.target.dataset.itemId;
            r.default.ensureLogin().then(function() {
                (0, a.navigateTo)("AuthorPage", {
                    id: t
                });
            });
        }
    }
});