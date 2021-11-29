Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), u = require("../@babel/runtime/helpers/createClass"), t = new (function() {
    function t() {
        e(this, t), this.PubSubCache = {
            $uid: 0
        };
    }
    return u(t, [ {
        key: "on",
        value: function(e, u) {
            var t = this.PubSubCache[e] || (this.PubSubCache[e] = {});
            u.$uid = u.$uid || this.PubSubCache.$uid++, t[u.$uid] = u;
        }
    }, {
        key: "emit",
        value: function(e) {
            var u, t = this.PubSubCache[e];
            if (t) {
                for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) a[r - 1] = arguments[r];
                for (u in t) {
                    var h;
                    t[u], (h = t[u]).call.apply(h, [ this ].concat(a));
                }
            }
        }
    }, {
        key: "off",
        value: function(e, u) {
            var t, i = 0, a = this.PubSubCache[e];
            if (null == u) return !a || !!this.PubSubCache[e] && delete this.PubSubCache[e];
            for (t in this.PubSubCache[e] && delete this.PubSubCache[e][u.$uid], a) i++;
            return !i && delete this.PubSubCache[e];
        }
    } ]), t;
}())();

exports.default = t;