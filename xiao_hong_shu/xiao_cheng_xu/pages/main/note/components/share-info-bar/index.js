var e, r = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../@babel/runtime/regenerator")), a = require("../../../../../@babel/runtime/helpers/objectSpread2"), i = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), t = require("../../../../../services/author"), n = require("../../../../../utils/path");

Component({
    properties: {
        shareUserId: String,
        navigationBarTrueHeight: Number
    },
    data: {
        image: "",
        nickname: "",
        redOfficialVerified: 0,
        desc: ""
    },
    ready: (e = i(r.default.mark(function e() {
        var i, n, s, u, c, d, o;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return i = this.properties.shareUserId, n = {}, e.prev = 2, e.next = 5, (0, t.getUserInfo)({
                    userId: i
                });

              case 5:
                n = e.sent, e.next = 10;
                break;

              case 8:
                e.prev = 8, e.t0 = e.catch(2);

              case 10:
                u = (s = n || {}).image, c = s.nickname, d = s.redOfficialVerified, u && c && (o = {
                    image: u,
                    nickname: c,
                    redOfficialVerified: d
                }, this.setData(a(a({}, o), {}, {
                    desc: "“我在小红书发现一篇笔记”"
                })));

              case 12:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 2, 8 ] ]);
    })), function() {
        return e.apply(this, arguments);
    }),
    methods: {
        handleUserProfile: function() {
            (0, n.navigateTo)("AuthorPage", {
                id: this.data.shareUserId
            });
        }
    }
});