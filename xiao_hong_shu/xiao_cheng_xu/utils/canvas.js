var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = t(require("../@babel/runtime/regenerator")), a = require("../@babel/runtime/helpers/asyncToGenerator"), n = require("../@babel/runtime/helpers/classCallCheck"), i = require("../@babel/runtime/helpers/createClass"), o = t(require("./api")), r = t(require("./canvasImage")), s = function() {
    function t() {
        n(this, t), this.context = {};
    }
    var s, c, h;
    return i(t, [ {
        key: "initCanvas",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            this.context = o.default.createCanvasContext(t);
        }
    }, {
        key: "drawImage",
        value: (h = a(e.default.mark(function t() {
            var a, n, i, o, s, c, h, l = arguments;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = l.length > 0 && void 0 !== l[0] ? l[0] : {}, n = a.x, i = a.y, o = a.width, 
                    s = a.height, c = {}, a.pathId && (c.pathId = a.pathId), a.path && (c.path = a.path), 
                    t.next = 7, r.default.getImageInfo(c);

                  case 7:
                    (h = t.sent).path && this.context.drawImage(h.path, n, i, o, s);

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function() {
            return h.apply(this, arguments);
        })
    }, {
        key: "drawStatusBar",
        value: function() {
            this.context.save(), this.context.beginPath();
            var t = this.context.createLinearGradient(0, 168, 0, 135);
            t.addColorStop(0, "rgba(0,0,0,0.55)"), t.addColorStop(1, "rgba(0,0,0,0)"), this.context.fillStyle = t, 
            this.context.fillRect(0, 135, 210, 168), this.context.closePath(), this.context.restore();
        }
    }, {
        key: "drawImageWithRadius",
        value: (c = a(e.default.mark(function t() {
            var a, n, i, o, r, s, c = arguments;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = c.length > 0 && void 0 !== c[0] ? c[0] : {}, n = a.x, i = a.y, o = a.width, 
                    r = a.height, s = a.radius, this.context.save(), this.context.beginPath(), this.context.arc(n + s, i + s, s, Math.PI, 3 * Math.PI / 2), 
                    this.context.lineTo(o - s + n, i), this.context.arc(o - s + n, s + i, s, 3 * Math.PI / 2, 2 * Math.PI), 
                    this.context.lineTo(o + n, r + i - s), this.context.arc(o - s + n, r - s + i, s, 0, 1 * Math.PI / 2), 
                    this.context.lineTo(s + n, r + i), this.context.arc(s + n, r - s + i, s, 1 * Math.PI / 2, Math.PI), 
                    this.context.closePath(), this.context.fill(), this.context.clip(), t.next = 16, 
                    this.drawImage(a);

                  case 16:
                    console.log("............"), this.context.restore();

                  case 18:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function() {
            return c.apply(this, arguments);
        })
    }, {
        key: "drawAvatar",
        value: (s = a(e.default.mark(function t() {
            var a, n, i, o, s, c, h, l, d, u, x, v, f = arguments;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = f.length > 0 && void 0 !== f[0] ? f[0] : {}, n = a.x, i = a.y, o = a.width, 
                    s = a.borderWidth, c = a.borderColor, h = a.defaultUrl, l = a.path, d = l, t.next = 5, 
                    r.default.privateGetImageInfo(d, 5e3);

                  case 5:
                    if (u = t.sent, console.log(u), x = "", v = "", h = h || "https://ci.xiaohongshu.com/23eafaab-11fa-4d51-bc08-5636a3c988d0", 
                    !u.path) {
                        t.next = 14;
                        break;
                    }
                    v = u.path, t.next = 19;
                    break;

                  case 14:
                    if (!h) {
                        t.next = 18;
                        break;
                    }
                    return t.next = 17, r.default.privateGetImageInfo(h);

                  case 17:
                    x = t.sent;

                  case 18:
                    v = x.path;

                  case 19:
                    this.context.save(), this.context.beginPath(), this.context.arc(n, i, o / 2, 0, 2 * Math.PI), 
                    this.context.clip(), this.context.drawImage(v, n - o / 2, i - o / 2, o, o), this.context.restore(), 
                    this.context.beginPath(), this.context.arc(n, i, o / 2 + s / 2, 0, 2 * Math.PI), 
                    this.context.setStrokeStyle(c), this.context.setLineWidth(s), this.context.stroke();

                  case 30:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function() {
            return s.apply(this, arguments);
        })
    }, {
        key: "drawText",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.size, a = void 0 === e ? 15 : e, n = t.color, i = void 0 === n ? "black" : n, o = t.text, r = void 0 === o ? "" : o, s = t.x, c = void 0 === s ? 0 : s, h = t.y, l = void 0 === h ? 0 : h, d = t.align, u = void 0 === d ? "left" : d, x = t.isBlod;
            this.context.font = x ? "normal bold ".concat(a, "px sans-serif") : "".concat(a, "px sans-serif"), 
            this.context.setTextAlign(u), this.context.setFontSize(a), this.context.setFillStyle(i), 
            this.context.fillText(r, c, l);
        }
    }, {
        key: "drawRect",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.color, a = void 0 === e ? "black" : e, n = t.x, i = void 0 === n ? 0 : n, o = t.y, r = void 0 === o ? 0 : o, s = t.width, c = void 0 === s ? 0 : s, h = t.height, l = void 0 === h ? 0 : h;
            this.context.setFillStyle(a), this.context.fillRect(i, r, c, l);
        }
    }, {
        key: "drawTrue",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.onDrawedCallBack;
            this.context.draw(!0, function() {
                e && e();
            });
        }
    }, {
        key: "getTextWidth",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.size, a = void 0 === e ? 15 : e, n = t.text, i = void 0 === n ? "" : n, o = t.isBlod;
            return this.context.font = o ? "normal bold ".concat(a, "px sans-serif") : "".concat(a, "px sans-serif"), 
            this.context.measureText(i).width;
        }
    } ]), t;
}();

exports.default = s;