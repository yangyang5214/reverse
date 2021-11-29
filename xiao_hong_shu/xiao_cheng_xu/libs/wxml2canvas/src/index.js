var t = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../@babel/runtime/helpers/classCallCheck"), i = require("../../../@babel/runtime/helpers/createClass"), r = t(require("./util")), a = [ "scaleToFill", "aspectFit", "aspectFill", "widthFix", "top", "bottom", "center", "left", "right", "top left", "top right", "bottom left", "bottom right" ], s = function() {
    function t() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e(this, t), this.device = wx.getSystemInfoSync && wx.getSystemInfoSync() || {}, 
        i.zoom ? this.zoom = i.zoom || 1 : this.zoom = this.device.windowWidth / 375, this.element = i.element, 
        this.object = i.obj, this.width = i.width * this.zoom || 0, this.height = i.height * this.zoom || 0, 
        this.destZoom = i.destZoom || 3, this.destWidth = this.width * this.destZoom, this.destHeight = this.height * this.destZoom, 
        this.translateX = i.translateX * this.zoom || 0, this.translateY = i.translateY * this.zoom || 0, 
        this.gradientBackground = i.gradientBackground || null, this.background = i.background || "#ffffff", 
        this.finishDraw = i.finish || function(t) {}, this.errorHandler = i.error || function(t) {}, 
        this.progress = i.progress || function(t) {}, this.textAlign = i.textAlign || "left", 
        this.fullText = i.fullText || !1, this.font = i.font || "14px PingFang SC", this._init();
    }
    return i(t, [ {
        key: "draw",
        value: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0, r = this;
            this.data = e, this.fef = i, this.progress(10), this._preloadImage(e.list).then(function(e) {
                t.progress(30), r._draw();
            }).catch(function(t) {
                r.errorHandler(t);
            });
        }
    }, {
        key: "measureWidth",
        value: function(t, e) {
            return e && (this.ctx.font = e), this.ctx.measureText && (this.ctx.measureText(t) || {}).width || 0;
        }
    }, {
        key: "_init",
        value: function() {
            this.progressPercent = 0, this.data = null, this.ref = null, this.allPic = [], this.screenList = [], 
            this.asyncList = [], this.imgUrl = "", this.progressPercent = 0, this.distance = 0, 
            this.progress(0), this.ctx = wx.createCanvasContext(this.element, this.obj), this.ctx.font = this.font, 
            this.ctx.setTextBaseline("top"), this.ctx.setStrokeStyle("white"), this.debug = "devtools" === this.device.platform, 
            this._drawBakcground();
        }
    }, {
        key: "_drawBakcground",
        value: function() {
            if (this.gradientBackground) {
                var t = {
                    fill: {
                        line: this.gradientBackground.line || [ 0, 0, 0, this.height ],
                        color: this.gradientBackground.color || [ "#fff", "#fff" ]
                    }
                };
                this._drawRectToCanvas(0, 0, this.width, this.height, t);
            } else {
                var e = {
                    fill: this.background
                };
                this._drawRectToCanvas(0, 0, this.width, this.height, e);
            }
        }
    }, {
        key: "_draw",
        value: function() {
            var t = this, e = this.data.list || [], i = 0, r = [], a = 0;
            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = arguments.length > 1 ? arguments[1] : void 0;
                e.forEach(function(e, s) {
                    r[i++] = new Promise(function(i, r) {
                        var s = e.style;
                        e.progress = t.distance, a && (e.delay = 0), "radius-image" === e.type ? t._drawCircle(e, s, i, r, "image") : "text" === e.type ? t._drawText(e, s, i, r) : "line" === e.type ? t._drawLine(e, s, i, r) : "circle" === e.type ? t._drawCircle(e, s, i, r) : "rect" === e.type ? t._drawRect(e, s, i, r) : "image" === e.type ? t._drawRect(e, s, i, r, "image") : "wxml" === e.type ? t._drawWxml(e, s, i, r) : i();
                    });
                });
            }
            e.forEach(function(t) {
                "wxml" === t.type ? a += 3 : a += 1;
            }), this.distance = 60 / (a || 1), this.progressPercent = 30, this.asyncList = e.filter(function(t) {
                return 1 == t.delay;
            }), s(e = e.filter(function(t) {
                return 1 != t.delay;
            })), Promise.all(r).then(function(e) {
                i = 0, s(t.asyncList, !0), Promise.all(r).then(function(e) {
                    t.progress(90), t._saveCanvasToImage();
                });
            }).catch(function(e) {
                console.log(e), t.errorHandler(e);
            });
        }
    }, {
        key: "_saveCanvasToImage",
        value: function() {
            var t = this;
            setTimeout(function() {
                t.progress(95);
                var e = {
                    x: 0,
                    y: 0,
                    width: t.width,
                    height: t.height,
                    canvasId: t.element,
                    success: function(e) {
                        t.progress(100), t.imgUrl = e.tempFilePath, t.finishDraw(t.imgUrl);
                    },
                    fail: function(e) {
                        t.errorHandler({
                            errcode: 1e3,
                            errmsg: "save canvas error",
                            e: e
                        });
                    }
                };
                3 !== t.destZoom && (e.destWidth = t.destWidth, e.destHeight = t.destHeight), wx.canvasToTempFilePath(e, t.object);
            }, -1 === t.device.system.indexOf("iOS") ? 300 : 100);
        }
    }, {
        key: "_preloadImage",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = this, i = [], r = 0;
            return t.forEach(function(t, a) {
                t.url && -1 === e._findPicIndex(t.url) && (e.allPic.push({
                    url: t.url,
                    local: ""
                }), i[r++] = new Promise(function(i, r) {
                    if (!/^http/.test(t.url) || /^http:\/\/(tmp)|(usr)\//.test(t.url) || /^http:\/\/127\.0\.0\.1/.test(t.url)) {
                        var a = function(t) {
                            wx.getImageInfo({
                                src: t,
                                success: function(r) {
                                    var a = e._findPicIndex(t);
                                    a > -1 && (e.allPic[a].local = t, e.allPic[a].width = r.width, e.allPic[a].height = r.height), 
                                    i({
                                        tempFilePath: t
                                    });
                                },
                                fail: function(t) {
                                    r(t);
                                }
                            });
                        };
                        if (t.isBase64) wx.getFileSystemManager().writeFile({
                            filePath: t.url,
                            data: t.isBase64.replace(/data:image\/(.*);base64,/, ""),
                            encoding: "base64",
                            success: function(e) {
                                a(t.url);
                            },
                            fail: function(t) {
                                r(t);
                            }
                        }); else a(t.url);
                    } else wx.downloadFile({
                        url: t.url.replace(/^https?/, "https"),
                        success: function(a) {
                            wx.getImageInfo({
                                src: a.tempFilePath,
                                success: function(r) {
                                    var s = e._findPicIndex(t.url);
                                    s > -1 && (e.allPic[s].local = a.tempFilePath, e.allPic[s].width = r.width, e.allPic[s].height = r.height), 
                                    i(a);
                                },
                                fail: function(t) {
                                    r(t);
                                }
                            });
                        },
                        fail: function(t) {
                            r({
                                errcode: 1001,
                                errmsg: "download pic error"
                            });
                        }
                    });
                }));
            }), Promise.all(i).then(function(t) {
                return new Promise(function(t) {
                    t();
                });
            }).catch(function(t) {
                return new Promise(function(e, i) {
                    i(t);
                });
            });
        }
    }, {
        key: "_findPicIndex",
        value: function(t) {
            return this.allPic.findIndex(function(e) {
                return e.url === t;
            });
        }
    }, {
        key: "_drawRect",
        value: function(t, e, i, r, s, n) {
            var o = this.zoom, l = 0, h = e.width, d = e.height, c = e.width, f = e.height, u = null;
            try {
                var g;
                if (t.x = this._resetPositionX(t, e), t.y = this._resetPositionY(t, e), s) {
                    var x = this._findPicIndex(t.url);
                    x > -1 ? (g = this.allPic[x].local, c = this.allPic[x].width, f = this.allPic[x].height) : g = t.url;
                }
                if (e.padding = e.padding || [], "inline-wxml" === n && (t.x = t.x + (e.padding[3] && e.padding[3] || 0), 
                t.y = t.y + (e.padding[0] && e.padding[0] || 0)), l = t.x + e.width + (e.padding[1] && e.padding[1] || 0), 
                n || (h *= o, d *= o), e.dataset && e.dataset.mode && a.indexOf(e.dataset.mode) > -1 && (u = {
                    type: e.dataset.mode,
                    width: c,
                    height: f
                }), this._drawRectToCanvas(t.x, t.y, h, d, e, g, u), this._updateProgress(t.progress), 
                !i) return {
                    leftOffset: l,
                    topOffset: 0
                };
                i();
            } catch (t) {
                r && r({
                    errcode: s ? 1003 : 1002,
                    errmsg: s ? "drawImage error" : "drawRect error",
                    e: t
                });
            }
        }
    }, {
        key: "_drawRectToCanvas",
        value: function(t, e, i, r, a, s, n) {
            var o = this, l = a.fill, h = a.border, d = a.boxShadow;
            this.ctx.save(), this._drawBoxShadow(d, function(a) {
                l && "string" != typeof l && !o.debug && (o.ctx.setFillStyle(a.color || "#ffffff"), 
                o.ctx.fillRect(t, e, i, r));
            }), s ? n ? this._resetImageByMode(s, t, e, i, r, n) : this.ctx.drawImage(s, t, e, i, r) : this._setFill(l, function() {
                o.ctx.fillRect(t, e, i, r);
            }), this._drawBorder(h, a, function(a) {
                var s = a.width;
                o.ctx.strokeRect(t - s / 2, e - s / 2, i + s, r + s);
            }), this.ctx.draw(!0), this.ctx.restore();
        }
    }, {
        key: "_resetImageByMode",
        value: function(t, e, i, r, a, s) {
            var n = this, o = 0, l = 0, h = s.width, d = s.height;
            switch (s.type) {
              case "scaleToFill":
                h = r, d = a, n.ctx.drawImage(t, e, i, r, a);
                break;

              case "widthFix":
                a = r / ((h || 1) / (d || 1)), n.ctx.drawImage(t, e, i, r, a);
                break;

              case "aspectFit":
                if (h > d) {
                    var c = r / ((h || 1) / (d || 1));
                    l = -(a - c) / 2, h = r, d = c;
                } else {
                    var f = a / ((d || 1) / (h || 1));
                    o = -(r - f) / 2, h = f, d = a;
                }
                x();
                break;

              case "aspectFill":
                if (h > d) {
                    var u = h / ((d || 1) / (a || 1));
                    o = (u - r) / 2, h = u, d = a;
                } else {
                    var g = d / ((h || 1) / (r || 1));
                    l = (g - a) / 2, h = r, d = g;
                }
                x();
                break;

              case "top left":
                x();
                break;

              case "top":
                o = (s.width - r) / 2, x();
                break;

              case "top right":
                o = s.width - r, x();
                break;

              case "left":
                l = (s.height - a) / 2, x();
                break;

              case "center":
                o = (s.width - r) / 2, l = (s.height - a) / 2, x();
                break;

              case "right":
                o = s.width - r, l = (s.height - a) / 2, x();
                break;

              case "bottom left":
                l = s.height - a, x();
                break;

              case "bottom":
                o = (s.width - r) / 2, l = s.height - a, x();
                break;

              case "bottom right":
                o = s.width - r, l = s.height - a, x();
                break;

              default:
                h = r, d = a;
            }
            function x() {
                n.ctx.save(), n.ctx.beginPath(), n.ctx.rect(e, i, r, a), n.ctx.clip(), n.ctx.drawImage(t, e - o, i - l, h, d), 
                n.ctx.closePath(), n.ctx.restore();
            }
        }
    }, {
        key: "_drawText",
        value: function(t, e, i, a, s, n) {
            var o = this.zoom, l = 0, h = 0;
            try {
                e.fontSize = this._parseNumber(e.fontSize);
                var d = Math.ceil((e.fontSize || 14) * o);
                this.ctx.setTextBaseline("top"), this.ctx.font = "".concat(e.fontWeight ? e.fontWeight : "normal", " ").concat(d, "px ").concat(e.fontFamily || "PingFang SC"), 
                this.ctx.setFillStyle(e.color || "#454545");
                var c = t.text || "", f = Math.floor(this.measureWidth(c, e.font || this.ctx.font)), u = this._getLineHeight(e), g = Math.ceil(f / (e.width || f)) * u, x = Math.ceil((e.width || f) * (n ? 1 : o)), p = e.whiteSpace || "wrap", m = 0, v = 0;
                if ("string" == typeof e.padding && (e.padding = r.default.transferPadding(e.padding)), 
                t.x = this._resetPositionX(t, e), t.y = this._resetPositionY(t, e, g), this._drawBoxShadow(e.boxShadow), 
                (e.background || e.border) && this._drawTextBackgroud(t, e, f, g, n), "inline-text" === s) if (x = t.maxWidth, 
                t.leftOffset + f > x) {
                    var w = Math.max(Math.floor(f / x), 1), y = c.length, _ = Math.floor(y / w), b = t.leftOffset ? t.leftOffset - t.originX : 0, k = this._getTextSingleLine(c, x, _, 0, b), P = k.endIndex, T = k.single, S = k.singleWidth;
                    m = this._resetTextPositionX(t, e, S), v = this._resetTextPositionY(t, e), this.ctx.fillText(T, m, v), 
                    l = m + S, h = v, c = c.substring(P, c.length), P = 0, w = Math.max(Math.floor(f / x), 1), 
                    f = Math.floor(this.measureWidth(c, e.font || this.ctx.font)), t.x = t.originX;
                    for (var I = 0; I < w; I++) {
                        var W = this._getTextSingleLine(c, x, _, P), C = W.endIndex, B = W.single, z = W.singleWidth;
                        P = C, B && (m = this._resetTextPositionX(t, e, z, x), v = this._resetTextPositionY(t, e, I + 1), 
                        this.ctx.fillText(B, m, v), I === w - 1 && (l = m + z, h = u * w));
                    }
                    var F = c.substring(P, y), L = this.measureWidth(F);
                    F && (m = this._resetTextPositionX(t, e, L, x), v = this._resetTextPositionY(t, e, w + 1), 
                    this.ctx.fillText(F, m, v), l = m + L, h = u * (w + 1));
                } else m = this._resetTextPositionX(t, e, f, x), v = this._resetTextPositionY(t, e), 
                this.ctx.fillText(t.text, m, v), l = m + f, h = u; else if (x && f > x && "nowrap" !== p) {
                    var O = Math.max(Math.floor(f / x), 1), M = c.length, R = Math.floor(M / O), X = 0;
                    e.lineClamp && O + 1 > e.lineClamp && (O = e.lineClamp - 1);
                    for (var Y = 0; Y < O; Y++) {
                        var H = this._getTextSingleLine(c, x, R, X), N = H.endIndex, j = H.single, E = H.singleWidth;
                        X = N, m = this._resetTextPositionX(t, e, E, x), v = this._resetTextPositionY(t, e, Y), 
                        this.ctx.fillText(j, m, v);
                    }
                    var A = c.substring(X, M), D = this.measureWidth(A);
                    if (D > x) {
                        var q = this._getTextSingleLine(A, x, R), U = q.single;
                        D = q.singleWidth, A = U.substring(0, U.length - 1) + "...";
                    }
                    m = this._resetTextPositionX(t, e, D, x), v = this._resetTextPositionY(t, e, O), 
                    this.ctx.fillText(A, m, v);
                } else m = this._resetTextPositionX(t, e, f, x), v = this._resetTextPositionY(t, e), 
                this.ctx.fillText(t.text, m, v);
                if (this.ctx.draw(!0), this._updateProgress(t.progress), !i) return {
                    leftOffset: l,
                    topOffset: h
                };
                i();
            } catch (t) {
                a && a({
                    errcode: 1004,
                    errmsg: "drawText error",
                    e: t
                });
            }
        }
    }, {
        key: "_drawTextBackgroud",
        value: function(t, e, i, r, a) {
            if (e.width) {
                var s = a ? 1 : this.zoom, n = e.width || i, o = e.height || r, l = {
                    fill: e.background,
                    border: e.border
                };
                e.padding = e.padding || [ 0, 0, 0, 0 ], n += (e.padding[1] || 0) + (e.padding[3] || 0), 
                o += (e.padding[0] || 0) + (e.padding[2] || 0), n *= s, o *= s, this._drawRectToCanvas(t.x, t.y, n, o, l);
            }
        }
    }, {
        key: "_drawCircle",
        value: function(t, e, i, r, a, s) {
            var n = this.zoom, o = e.r;
            try {
                var l;
                if (t.x = this._resetPositionX(t, e), t.y = this._resetPositionY(t, e), a) {
                    var h = this._findPicIndex(t.url);
                    l = h > -1 ? this.allPic[h].local : t.url;
                }
                s || (o *= n), e.radius ? this._drawRoundRect(t.x, t.y, e.width, e.height, e.radius, e, l) : this._drawCircleToCanvas(t.x, t.y, o, e, l), 
                this._updateProgress(t.progress), i && i();
            } catch (t) {
                r && r({
                    errcode: a ? 1006 : 1005,
                    errmsg: a ? "drawCircleImage error" : "drawCircle error",
                    e: t
                });
            }
        }
    }, {
        key: "_drawRoundRect",
        value: function(t, e, i, r, a, s, n) {
            var o = this, l = s.fill, h = function() {
                o.ctx.save(), o.ctx.beginPath(), o.ctx.moveTo(t + a[0], e), o.ctx.arcTo(t + i, e, t + i, e + r, a[0]), 
                o.ctx.arcTo(t + i, e + r, t, e + r, a[1]), o.ctx.arcTo(t, e + r, t, e, a[2]), o.ctx.arcTo(t, e, t + i, e, a[3]);
            };
            l ? this._setFill(l, function() {
                h(), o.ctx.fill();
            }) : (h(), this.ctx.clip(), this.ctx.drawImage(n, t, e, i, r), this.ctx.closePath(), 
            this.ctx.restore()), this.ctx.draw(!0), this.ctx.restore();
        }
    }, {
        key: "_drawCircleToCanvas",
        value: function(t, e, i, r, a) {
            var s = this, n = r.fill, o = r.border, l = r.boxShadow;
            this.ctx.save(), this._drawBoxShadow(l, function(r) {
                (n && "string" != typeof n || a && r.color) && (s.ctx.setFillStyle(r.color || "#ffffff"), 
                s.ctx.beginPath(), s.ctx.arc(t + i, e + i, i, 0, 2 * Math.PI), s.ctx.closePath(), 
                s.ctx.fill());
            }), a ? (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t + i, e + i, i, 0, 2 * Math.PI), 
            this.ctx.clip(), this.ctx.drawImage(a, t, e, 2 * i, 2 * i), this.ctx.closePath(), 
            this.ctx.restore()) : this._setFill(n, function() {
                s.ctx.beginPath(), s.ctx.arc(t + i, e + i, i, 0, 2 * Math.PI), s.ctx.closePath(), 
                s.ctx.fill();
            }), this._drawBorder(o, r, function(r) {
                s.ctx.beginPath(), s.ctx.arc(t + i, e + i, i + r.width / 2, 0, 2 * Math.PI), s.ctx.stroke(), 
                s.ctx.closePath();
            }), this.ctx.draw(!0), this.ctx.restore();
        }
    }, {
        key: "_drawLine",
        value: function(t, e, i, r, a) {
            var s = this.zoom;
            try {
                var n = t.x * s + this.translateX, o = t.y * s + this.translateY, l = t.x2 * s + this.translateX, h = t.y2 * s + this.translateY;
                this._drawLineToCanvas(n, o, l, h, e), this._updateProgress(t.progress), i && i();
            } catch (t) {
                r && r({
                    errcode: 1007,
                    errmsg: "drawLine error",
                    e: t
                });
            }
        }
    }, {
        key: "_drawLineToCanvas",
        value: function(t, e, i, r, a) {
            var s = a.stroke, n = a.dash, o = a.boxShadow;
            if (this.ctx.save(), s && this._setStroke(s), this._drawBoxShadow(o), n) {
                var l = [ a.dash[0] || 5, a.dash[1] || 5 ], h = a.dash[2] || 0;
                this.ctx.setLineDash(l, h || 0);
            }
            this.ctx.moveTo(t, e), this.ctx.setLineWidth((a.width || 1) * this.zoom), this.ctx.lineTo(i, r), 
            this.ctx.stroke(), this.ctx.draw(!0), this.ctx.restore();
        }
    }, {
        key: "_drawImage",
        value: function(t, e, i, r, a) {
            var s = this.zoom;
            try {
                t.x = this._resetPositionX(t, e), t.y = this._resetPositionY(t, e), t.x = t.x + (e.padding[3] || 0), 
                t.y = t.y + (e.padding[0] || 0);
                var n = this._findPicIndex(t.url), o = n > -1 ? this.allPic[n].local : t.url;
                this._drawImageToCanvas(o, t.x, t.y, e.width * s, e.height * s, e), this._updateProgress(t.progress), 
                i && i();
            } catch (t) {
                r && r({
                    errcode: 1012,
                    errmsg: "drawRect error",
                    e: t
                });
            }
        }
    }, {
        key: "_drawImageToCanvas",
        value: function(t, e, i, r, a, s) {
            var n = this, o = (s.fill, s.border), l = s.boxShadow;
            this.ctx.save(), this._drawBoxShadow(l), this.ctx.drawImage(t, e, i, r, a), this._drawBorder(o, s, function(t) {
                var s = t.width;
                n.ctx.strokeRect(e - s / 2, i - s / 2, r + s, a + s);
            }), this.ctx.draw(!0), this.ctx.restore();
        }
    }, {
        key: "_drawWxml",
        value: function(t, e, i, r) {
            var a = this, s = this, n = [];
            try {
                this._getWxml(t, e).then(function(e) {
                    console.log("**********", e);
                    var o, l = s._sortListByTop(e[0]), h = 0;
                    Object.keys(l).forEach(function(t) {
                        h += l[t].length;
                    }), o = 3 * a.distance / (h || 1), n = a._drawWxmlBlock(t, l, n, o, e[1]), n = a._drawWxmlInline(t, l, n, o, e[1]), 
                    Promise.all(n).then(function(t) {
                        i && i();
                    }).catch(function(t) {
                        r && r(t);
                    });
                });
            } catch (t) {
                r && r({
                    errcode: 1008,
                    errmsg: "drawWxml error"
                });
            }
        }
    }, {
        key: "_drawWxmlBlock",
        value: function(t, e, i, r, a) {
            var s = this, n = a ? a.left : 0, o = a ? a.top : 0;
            return Object.keys(e).forEach(function(a, l) {
                var h = e[a].sort(function(t, e) {
                    return t.left - e.left;
                });
                (h = h.filter(function(t) {
                    return t.dataset.type && -1 === t.dataset.type.indexOf("inline");
                })).forEach(function(e, a) {
                    i[a] = new Promise(function(i, a) {
                        (e = s._transferWxmlStyle(e, t, n, o)).progress = r;
                        var l = e.dataset.type;
                        function h() {
                            "text" === l ? s._drawWxmlText(e, i, a) : "image" === l ? s._drawWxmlImage(e, i, a) : "radius-image" === l ? s._drawWxmlCircleImage(e, i, a) : "background-image" === l && s._drawWxmlBackgroundImage(e, i, a);
                        }
                        e.dataset.delay ? setTimeout(function() {
                            h();
                        }, e.dataset.delay) : h();
                    });
                });
            }), i;
        }
    }, {
        key: "_drawWxmlInline",
        value: function(t, e, i, r, a) {
            var s = this, n = 0, o = 0, l = 0, h = a ? a.left : 0, d = a ? a.top : 0, c = new Promise(function(i, a) {
                var c, f = 1 / 0, u = 0;
                Object.keys(e).forEach(function(t) {
                    e[t].filter(function(t) {
                        return t.dataset.type && t.dataset.type.indexOf("inline") > -1;
                    }).forEach(function(t) {
                        t.left < f && (f = t.left), t.right > u && (u = t.right);
                    });
                }), c = Math.ceil(u - f || s.width), Object.keys(e).forEach(function(i, a) {
                    for (var f = e[i].sort(function(t, e) {
                        return t.left - e.left;
                    }), u = -1, g = 0, x = f.length; g < x; g++) if (f[g] && f[g + 1] && f[g].bottom > f[g + 1].bottom) {
                        u = g;
                        break;
                    }
                    u > -1 && f.push(f.splice(u, 1)[0]);
                    var p = f.filter(function(t) {
                        return t.dataset.type && t.dataset.type.indexOf("inline") > -1;
                    }), m = p[0] ? p[0].left : 0;
                    (Math.abs(n + l - i) > 2 || o - m - h >= c || o <= m - h - 2) && (o = 0), l = +i, 
                    n = 0, p.forEach(function(e, i) {
                        (e = s._transferWxmlStyle(e, t, h, d)).progress = r;
                        var a = e.dataset.type;
                        if ("inline-text" === a) {
                            var l = s._drawWxmlInlineText(e, o, c);
                            o = l.leftOffset, n = l.topOffset;
                        } else if ("inline-image" === a) {
                            var f = s._drawWxmlImage(e) || {};
                            o = f.leftOffset || 0, n = f.topOffset || 0;
                        }
                    });
                }), i();
            });
            return i.push(c), i;
        }
    }, {
        key: "_drawWxmlInlineText",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 ? arguments[2] : void 0, r = t.dataset.text || "";
            t.dataset.maxlength && r.length > t.dataset.maxlength && (r = r.substring(0, t.dataset.maxlength) + "...");
            var a = {
                text: r,
                originX: t.left,
                x: e || t.left,
                y: t.top,
                progress: t.progress,
                leftOffset: e,
                maxWidth: i
            };
            "rgba(0, 0, 0, 0)" !== t.backgroundColor ? t.background = t.backgroundColor : t.background = "rgba(0, 0, 0, 0)", 
            t.dataset.background && (t.background = t.dataset.background);
            var s = this._drawText(a, t, null, null, "inline-text", "wxml");
            return s;
        }
    }, {
        key: "_drawWxmlText",
        value: function(t, e, i) {
            var r = t.dataset.text || "";
            t.dataset.maxlength && r.length > t.dataset.maxlength && (r = r.substring(0, t.dataset.maxlength) + "...");
            var a = {
                text: r,
                x: t.left,
                y: t.top,
                progress: t.progress
            };
            "rgba(0, 0, 0, 0)" !== t.backgroundColor ? t.background = t.backgroundColor : t.background = "rgba(0, 0, 0, 0)", 
            t.dataset.background && (t.background = t.dataset.background), this._drawText(a, t, e, i, "text", "wxml");
        }
    }, {
        key: "_drawWxmlImage",
        value: function(t, e, i) {
            var r = {
                url: t.dataset.url,
                x: t.left,
                y: t.top,
                progress: t.progress
            };
            return this._drawRect(r, t, e, i, "image", "inline-wxml");
        }
    }, {
        key: "_drawWxmlCircleImage",
        value: function(t, e, i) {
            var r = {
                url: t.dataset.url,
                x: t.left,
                y: t.top,
                progress: t.progress
            };
            t.r = t.width / 2, this._drawCircle(r, t, e, i, !0, "wxml");
        }
    }, {
        key: "_drawWxmlBackgroundImage",
        value: function(t, e, i) {
            var r = t.dataset.url, a = this._findPicIndex(r);
            r = a > -1 ? this.allPic[a].local : r;
            t.backgroundSize.replace(/px/g, "").split(" ");
            var s = {
                url: r,
                x: t.left,
                y: t.top,
                progress: t.progress
            };
            this._drawRect(s, t, e, i, "image", "wxml");
        }
    }, {
        key: "_getWxml",
        value: function(t, e) {
            var i, r = this;
            i = this.obj ? wx.createSelectorQuery().in(this.obj) : wx.createSelectorQuery();
            var a = new Promise(function(e, a) {
                var s = 0;
                i.selectAll("".concat(t.class)).fields({
                    dataset: !0,
                    size: !0,
                    rect: !0,
                    computedStyle: [ "width", "height", "font", "fontSize", "fontFamily", "fontWeight", "fontStyle", "textAlign", "color", "lineHeight", "border", "borderColor", "borderStyle", "borderWidth", "verticalAlign", "boxShadow", "background", "backgroundColor", "backgroundImage", "backgroundPosition", "backgroundSize", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom" ]
                }, function(t) {
                    if (0 == s++) {
                        var i = r._formatImage(t), n = i.list;
                        t = i.res, r._preloadImage(n).then(function(i) {
                            e(t);
                        }).catch(function(t) {
                            a && a({
                                errcode: 1009,
                                errmsg: "drawWxml preLoadImage error"
                            });
                        });
                    }
                }).exec();
            }), s = new Promise(function(e, a) {
                t.limit || e({
                    top: 0,
                    width: r.width / r.zoom
                }), i.select("".concat(t.limit)).fields({
                    dataset: !0,
                    size: !0,
                    rect: !0
                }, function(t) {
                    e(t);
                }).exec();
            });
            return Promise.all([ a, s ]);
        }
    }, {
        key: "_getLineHeight",
        value: function(t) {
            var e, i = this.zoom;
            return t.dataset && t.dataset.type && (i = 1), !isNaN(t.lineHeight) && t.lineHeight > t.fontSize ? e = t.lineHeight : (t.lineHeight = (t.lineHeight || "") + "", 
            e = (e = +t.lineHeight.replace("px", "")) || 1.2 * (t.fontSize || 14)), e * i;
        }
    }, {
        key: "_formatImage",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [];
            return t.forEach(function(i, a) {
                var s = i.dataset, n = r.default.getUid(), o = "".concat(wx.env.USER_DATA_PATH, "/").concat(n, ".png");
                if ("image" !== s.type && "radius-image" !== s.type || !s.url) {
                    if ("background-image" === s.type && i.backgroundImage.indexOf("url") > -1) {
                        var l = i.backgroundImage.replace(/url\((\"|\')?/, "").replace(/(\"|\')?\)$/, ""), h = {
                            url: s.base64 ? o : l,
                            isBase64: !!s.base64 && l
                        };
                        t[a].dataset = Object.assign(t[a].dataset, h), e.push(h);
                    }
                } else {
                    var d = {
                        url: s.base64 ? o : s.url,
                        isBase64: !!s.base64 && s.url
                    };
                    t[a].dataset = Object.assign(t[a].dataset, d), e.push(d);
                }
            }), {
                list: e,
                res: t
            };
        }
    }, {
        key: "_updateProgress",
        value: function(t) {
            this.progressPercent += t, this.progress(this.progressPercent);
        }
    }, {
        key: "_sortListByTop",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = {};
            return t.forEach(function(t, i) {
                var r = t.top;
                e[r] || (e[r - 2] ? r -= 2 : e[r - 1] ? r -= 1 : e[r + 1] ? r += 1 : e[r + 2] ? r += 2 : e[r] = []), 
                e[r].push(t);
            }), e;
        }
    }, {
        key: "_parseNumber",
        value: function(t) {
            return isNaN(t) ? +(t || "").replace("px", "") : t;
        }
    }, {
        key: "_transferWxmlStyle",
        value: function(t, e, i, a) {
            var s = +t.dataset.left || 0, n = +t.dataset.top || 0;
            t.width = this._parseNumber(t.width), t.height = this._parseNumber(t.height), t.left = this._parseNumber(t.left) - i + (s + (e.x || 0)) * this.zoom, 
            t.top = this._parseNumber(t.top) - a + (n + (e.y || 0)) * this.zoom;
            var o = t.dataset.padding || "0 0 0 0";
            "string" == typeof o && (o = r.default.transferPadding(o));
            var l = Number(t.paddingTop.replace("px", "")) + Number(o[0]), h = Number(t.paddingRight.replace("px", "")) + Number(o[1]), d = Number(t.paddingBottom.replace("px", "")) + Number(o[2]), c = Number(t.paddingLeft.replace("px", "")) + Number(o[3]);
            return t.padding = [ l, h, d, c ], t;
        }
    }, {
        key: "_resetPositionX",
        value: function(t, e) {
            var i = this.zoom, r = 0;
            return e.dataset && e.dataset.type && (i = 1), r = t.x < 0 && t.type ? this.width + t.x * i - e.width * i : t.x * i, 
            parseInt(e.borderWidth) && (r += parseInt(e.borderWidth)), r + this.translateX;
        }
    }, {
        key: "_resetPositionY",
        value: function(t, e, i) {
            var r = this.zoom, a = 0;
            return e.dataset && e.dataset.type && (r = 1), a = t.y < 0 ? this.height + t.y * r - (i || e.height * r) : t.y * r, 
            parseInt(e.borderWidth) && (a += parseInt(e.borderWidth)), a + this.translateY;
        }
    }, {
        key: "_resetTextPositionX",
        value: function(t, e, i, r) {
            var a = e.textAlign || "left", s = t.x;
            return "center" === a ? s = (r - i) / 2 + t.x : "right" === a && (s = r - i + t.x), 
            s + (e.padding && e.padding[3] || 0) + this.translateX;
        }
    }, {
        key: "_resetTextPositionY",
        value: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = this.zoom;
            e.dataset && e.dataset.type && (r = 1);
            var a = this._getLineHeight(e), s = Math.ceil((e.fontSize || 14) * r), n = (e.dataset && e.dataset.type || "").indexOf("inline") > -1 ? 0 : (a - s) / 2, o = e.padding && e.padding[0] || 0;
            return t.y + n + i * a + o + this.translateY;
        }
    }, {
        key: "_getTextSingleLine",
        value: function(t, e, i) {
            for (var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, s = 0, n = r + i + s, o = t.substring(r, n), l = this.measureWidth(o); Math.round(a + l) > e; ) n = r + i + --s, 
            o = t.substring(r, n), l = this.measureWidth(o);
            return {
                endIndex: n,
                single: o,
                singleWidth: l
            };
        }
    }, {
        key: "_drawBorder",
        value: function(t, e, i) {
            var a = this.zoom;
            if (e.dataset && e.dataset.type && (a = 1), (t = r.default.transferBorder(t)) && t.width) {
                if (this._drawBoxShadow(), t) {
                    if (this.ctx.setLineWidth(t.width * a), "dashed" === t.style) {
                        var s = e.dash || [ 5, 5, 0 ], n = s[2] || 0, o = [ s[0] || 5, s[1] || 5 ];
                        this.ctx.setLineDash(o, n);
                    }
                    this.ctx.setStrokeStyle(t.color);
                }
                i && i(t);
            }
        }
    }, {
        key: "_drawBoxShadow",
        value: function(t, e) {
            (t = r.default.transferBoxShadow(t)) ? this.ctx.setShadow(t.offsetX, t.offsetY, t.blur, t.color) : this.ctx.setShadow(0, 0, 0, "#ffffff"), 
            e && e(t || {});
        }
    }, {
        key: "_setFill",
        value: function(t, e) {
            if (t) {
                if ("string" == typeof t) this.ctx.setFillStyle(t); else {
                    var i = t.line, r = t.color, a = this.ctx.createLinearGradient(i[0], i[1], i[2], i[3]);
                    a.addColorStop(0, r[0]), a.addColorStop(1, r[1]), this.ctx.setFillStyle(a);
                }
                e && e();
            }
        }
    }, {
        key: "_setStroke",
        value: function(t, e) {
            if (t) {
                if ("string" == typeof t) this.ctx.setStrokeStyle(t); else {
                    var i = t.line, r = t.color, a = this.ctx.createLinearGradient(i[0], i[1], i[2], i[3]);
                    a.addColorStop(0, r[0]), a.addColorStop(1, r[1]), this.ctx.setStrokeStyle(a);
                }
                e && e();
            }
        }
    } ]), t;
}();

exports.default = s;