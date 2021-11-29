Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), a = require("./path"), i = new (function() {
    function i() {
        e(this, i), this.intervalMaps = {}, this.nowPageKey = null;
    }
    return t(i, [ {
        key: "addIntervalTask",
        value: function(e, t) {
            var i = (0, a.getPageUrl)().url;
            this.nowPageKey = i;
            var s = this.nowPageKey;
            this.intervalMaps[s] || (this.intervalMaps[s] = []);
            var r = setInterval(e, t);
            this.intervalMaps[s].push({
                fn: e,
                time: t,
                task: r
            });
        }
    }, {
        key: "sleep",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = this.intervalMaps[e];
            t && (t.forEach(function(e) {
                clearTimeout(e.task), e.task = null;
            }), this.intervalMaps[e] = t);
        }
    }, {
        key: "wakeUp",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = this.intervalMaps[e];
            t && t.forEach(function(e) {
                var t = e.fn, a = e.time;
                e.task = setInterval(t, a);
            });
        }
    }, {
        key: "clean",
        value: function() {
            if (this.intervalMaps && Object.keys(this.intervalMaps).length > 0) for (var e in this.intervalMaps) Object.prototype.hasOwnProperty.call(this.intervalMaps, e) && this.intervalMaps[e].forEach(function(e) {
                clearTimeout(e.task), e.task = null;
            });
            this.intervalMaps = {};
        }
    } ]), i;
}())();

exports.default = i;