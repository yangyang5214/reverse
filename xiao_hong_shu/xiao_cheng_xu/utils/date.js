Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dateStringToTimestamp = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+08:00";
    return new Date(e.trim().replace(" ", "T") + "".concat(t)).getTime();
}, exports.default = void 0;

var e = require("../@babel/runtime/helpers/typeof"), t = require("../@babel/runtime/helpers/classCallCheck"), r = require("../@babel/runtime/helpers/createClass"), s = {
    default: "YYYY-MM-DD HH:mm:ss",
    shortTime: "mm:ss",
    mediumTime: "HH:mm:ss",
    longTime: "DD HH:mm:ss"
}, i = {
    shortTime: "mm: ss",
    mediumTimeDistance: "距离结束还有 HH: mm: ss",
    mediumTimeRemain: "还剩HH小时mm分ss秒",
    longTime: "还剩D天HH小时mm分ss秒"
}, a = {
    "D+": "days",
    "H+": "hours",
    "m+": "minutes",
    "s+": "seconds"
}, u = function() {
    function e(r, i) {
        t(this, e), this.fmt = s[r] || r, this.timezone = i, this.week = {
            0: "/u65e5",
            1: "/u4e00",
            2: "/u4e8c",
            3: "/u4e09",
            4: "/u56db",
            5: "/u4e94",
            6: "/u516d"
        };
    }
    return r(e, [ {
        key: "getODate",
        value: function(e) {
            return {
                "M+": {
                    regexp: /(M+)/,
                    value: e.getMonth() + 1
                },
                "D+": {
                    regexp: /(D+)/,
                    value: e.getDate()
                },
                "h+": {
                    regexp: /(h+)/,
                    value: e.getHours() % 12 == 0 ? 12 : e.getHours() % 12
                },
                "H+": {
                    regexp: /(H+)/,
                    value: e.getHours()
                },
                "m+": {
                    regexp: /(m+)/,
                    value: e.getMinutes()
                },
                "s+": {
                    regexp: /(s+)/,
                    value: e.getSeconds()
                },
                "q+": {
                    regexp: /(q+)/,
                    value: Math.floor((e.getMonth() + 3) / 3)
                },
                S: {
                    regexp: /(S)/,
                    value: e.getMilliseconds()
                }
            };
        }
    }, {
        key: "normalize",
        value: function(e) {
            if (isNaN(Number(e)) || "[object Null]" === Object.prototype.toString.call(e)) throw new Error("Wrong parameter: dateSource ".concat(e));
            if (e instanceof Date) return e;
            var t = this.adjustTimezone(1e3 * e, this.timezone);
            return new Date(t);
        }
    }, {
        key: "adjustTimezone",
        value: function(e) {
            var t = 60 * Number(this.timezone.replace(":00", ""));
            return e + 6e4 * (new Date().getTimezoneOffset() + t);
        }
    }, {
        key: "format",
        value: function(e) {
            var t = this.normalize(e), r = this.getODate(t);
            for (var s in /(Y+)/.test(this.fmt) && (this.fmt = this.fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), 
            /(E+)/.test(this.fmt) && (this.fmt = this.fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + this.week[t.getDay() + ""])), 
            r) r[s].regexp.test(this.fmt) && (this.fmt = this.fmt.replace(RegExp.$1, 1 === RegExp.$1.length ? r[s].value : ("00" + r[s].value).substr(("" + r[s].value).length)));
            return this.fmt;
        }
    } ]), e;
}(), n = function() {
    function s(e) {
        t(this, s), this.fmt = i[e] || e;
    }
    return r(s, [ {
        key: "getOTime",
        value: function(e) {
            var t = this.getTimestampObject(e);
            return {
                "D+": {
                    regexp: /(D+)/,
                    value: t.days
                },
                "H+": {
                    regexp: /(H+)/,
                    value: t.hours
                },
                "m+": {
                    regexp: /(m+)/,
                    value: t.minutes
                },
                "s+": {
                    regexp: /(s+)/,
                    value: t.seconds
                }
            };
        }
    }, {
        key: "getTimestampObject",
        value: function(e) {
            return {
                days: Math.floor(e / 864e5),
                hours: Math.floor(e % 864e5 / 36e5),
                minutes: Math.floor(e % 36e5 / 6e4),
                seconds: Math.floor(e % 6e4 / 1e3)
            };
        }
    }, {
        key: "getAutoFmt",
        value: function() {
            for (var e = s.splitFmt(this.fmt), t = [], r = !0, i = e.length, a = this.getTimestampObject(this.timestamp), u = 0; u < i; ) {
                var n = e[u], m = s.isMatch(n), o = a[s.searchKey(n)];
                if (m || 0 !== u) if (r && m) {
                    if (0 === o && i - u > 2) {
                        s.isMatch(e[u + 1]) ? u++ : u += 2;
                        continue;
                    }
                    u++, r = !1, t.push(o);
                } else m ? (t.push(("00" + a[s.searchKey(n)]).slice(-n.length)), u++) : (t.push(n), 
                u++); else t.push(n), u++;
            }
            return t.join("");
        }
    }, {
        key: "format",
        value: function(e, t, r) {
            if (this.timestamp = s.normalize(e), r) {
                var i = s.splitFmt(this.fmt), a = this.getTimestampObject(this.timestamp), u = [];
                return i.forEach(function(e) {
                    s.isMatch(e) ? u.push({
                        key: e,
                        value: ("00" + a[s.searchKey(e)]).slice(-e.length)
                    }) : u.push({
                        key: "separator",
                        value: e
                    });
                }), u;
            }
            if (t) return this.getAutoFmt();
            var n = this.getOTime(this.timestamp);
            for (var m in n) n[m].regexp.test(this.fmt) && (this.fmt = this.fmt.replace(RegExp.$1, 1 === RegExp.$1.length ? n[m].value : ("00" + n[m].value).substr(("" + n[m].value).length)));
            return this.fmt;
        }
    } ], [ {
        key: "normalize",
        value: function(t) {
            if (isNaN(Number(t)) || "object" === e(t)) throw new Error("Wrong parameter: dateSource ".concat(t));
            return Number(t);
        }
    }, {
        key: "isMatch",
        value: function(e) {
            return /D+|H+|m+|s+/g.test(e);
        }
    }, {
        key: "splitFmt",
        value: function(e) {
            return e.match(/D+|H+|m+|s+|[^D+|H+|m+|s+]+/g);
        }
    }, {
        key: "searchKey",
        value: function(e) {
            var t = "";
            for (var r in a) {
                if (Object.prototype.hasOwnProperty.call(a, r)) RegExp("".concat(r), "g").test(e) && (t = a[r]);
            }
            return t;
        }
    } ]), s;
}();

var m = {
    formatDateTime: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "+08:00", s = new u(t, r);
        return s.format(e);
    },
    formatTime: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "shortTime", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = r.auto, i = void 0 !== s && s, a = r.fmtArray, u = new n(t);
        return u.format(e, i, a);
    }
};

exports.default = m;