Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTimeStampByDay = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return 1e3 * e * 60 * 60 * 24;
}, exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), r = new (function() {
    function r() {
        e(this, r);
    }
    return t(r, [ {
        key: "getFormatObj",
        value: function(e) {
            var t = new Date(e), r = {
                year: t.getFullYear(),
                month: t.getMonth() + 1,
                day: t.getDate(),
                hour: t.getHours(),
                minute: t.getMinutes(),
                seconds: t.getSeconds()
            }, n = {};
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = this.formatNumber(r[a]));
            return n;
        }
    }, {
        key: "formatNumber",
        value: function(e) {
            return e < 10 ? "0" + e : e.toString();
        }
    }, {
        key: "getTimeStampByDay",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return 1e3 * e * 60 * 60 * 24;
        }
    } ]), r;
}())();

exports.default = r;