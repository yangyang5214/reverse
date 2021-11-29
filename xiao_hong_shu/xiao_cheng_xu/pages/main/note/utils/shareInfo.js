var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initShareInfo = function() {
    return u.apply(this, arguments);
};

var t = e(require("../../../../@babel/runtime/regenerator")), r = require("../../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../../utils/canvas")), n = e(require("../../../../utils/api")), i = new a.default(), c = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return e >= 1e4 ? "".concat(Number((e / 1e4).toFixed(t)), "万") : e >= 1e8 ? "".concat(Number((e / 1e8).toFixed(t)), "亿") : e;
};

function u() {
    return (u = r(t.default.mark(function e() {
        var r, a, u, s, h, o, l, d, p, x, v, b, f, g, m, w, F, k, y, I, T, q, P, R, S, W, j, z, M, N, _, A, B, C, D = arguments;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = D.length > 0 && void 0 !== D[0] ? D[0] : {}, a = "https://ci.xiaohongshu.com", 
                s = (u = r || {}).canvasId, h = u.note, o = {}, i.initCanvas(s), d = (l = h || {}).imageList, 
                p = l.cover, x = l.likes, v = void 0 === x ? 0 : x, b = l.collects, f = void 0 === b ? 0 : b, 
                g = l.comments, m = void 0 === g ? 0 : g, w = l.user, F = l.type, k = i.context, 
                y = 210, I = 168, q = (T = w || {}).nickname, P = T.image, o.shareTitle = "@".concat(q, " 发了一篇笔记，快点来看吧！"), 
                h.title ? o.shareTitle = h.title : h.desc && (o.shareTitle = h.desc), k.setFillStyle("white"), 
                k.fillRect(0, 0, y, I), p && "video" === F && (d = [ p ]), d && 0 !== d.length) {
                    e.next = 17;
                    break;
                }
                return e.abrupt("return");

              case 17:
                if (!(d.length < 3)) {
                    e.next = 42;
                    break;
                }
                if (d[0].fileId) {
                    e.next = 20;
                    break;
                }
                return e.abrupt("return");

              case 20:
                return e.prev = 20, (R = {
                    x: 0,
                    y: 0,
                    width: 210,
                    height: 168,
                    radius: 2
                }).path = "".concat(a, "/").concat(d[0].fileId, "?imageMogr2/crop/").concat(2 * R.width, "x").concat(2 * R.height, "/gravity/center"), 
                e.next = 25, i.drawImageWithRadius(R);

              case 25:
                e.next = 30;
                break;

              case 27:
                return e.prev = 27, e.t0 = e.catch(20), e.abrupt("return");

              case 30:
                if ("video" !== F) {
                    e.next = 40;
                    break;
                }
                return e.prev = 31, S = {
                    path: "https://ci.xiaohongshu.com/91b3be0e-c47e-4bdd-85f0-857675c29bc6",
                    x: 90,
                    y: 80,
                    width: 30,
                    height: 30
                }, e.next = 35, i.drawImage(S);

              case 35:
                e.next = 40;
                break;

              case 37:
                return e.prev = 37, e.t1 = e.catch(31), e.abrupt("return");

              case 40:
                e.next = 60;
                break;

              case 42:
                W = [ {
                    x: 0,
                    y: 0,
                    width: 133,
                    height: 168,
                    radius: 2
                }, {
                    x: 135,
                    y: 0,
                    width: 75,
                    height: 83,
                    radius: 2
                }, {
                    x: 135,
                    y: 86,
                    width: 75,
                    height: 83,
                    radius: 2
                } ], j = 0;

              case 44:
                if (!(j < 3)) {
                    e.next = 60;
                    break;
                }
                if (e.prev = 45, z = W[j], d[j].fileId) {
                    e.next = 49;
                    break;
                }
                return e.abrupt("return");

              case 49:
                return z.path = "".concat(a, "/").concat(d[j].fileId, "?imageView2/1/w/").concat(3 * W[j].width, "/h/").concat(3 * W[j].height, "/format/jpg"), 
                e.next = 52, i.drawImageWithRadius(z);

              case 52:
                e.next = 57;
                break;

              case 54:
                return e.prev = 54, e.t2 = e.catch(45), e.abrupt("return");

              case 57:
                j++, e.next = 44;
                break;

              case 60:
                if (i.drawStatusBar(), (M = [ {
                    text: "赞",
                    value: v
                }, {
                    text: "评论",
                    value: m
                }, {
                    text: "收藏",
                    value: f
                } ].reduce(function(e, t) {
                    return e.value > t.value ? e : t;
                }, {
                    value: 0
                })).value > 0 && (N = {
                    text: "".concat(c(M.value, 1), " ").concat(M.text),
                    color: "#FFFFFF",
                    x: 205,
                    y: 160,
                    size: 10,
                    align: "right"
                }, i.drawText(N)), !P) {
                    e.next = 67;
                    break;
                }
                return _ = {
                    path: P,
                    x: 17,
                    y: 155,
                    width: 16
                }, e.next = 67, i.drawAvatar(_);

              case 67:
                return q && (A = {
                    text: q,
                    color: "#FFFFFF",
                    x: 28,
                    y: 160,
                    size: 10,
                    align: "left"
                }, i.drawText(A)), B = function() {
                    return new Promise(function(e) {
                        k.draw(!0, function() {
                            e();
                        });
                    });
                }, e.next = 71, B();

              case 71:
                return e.prev = 71, e.next = 74, n.default.canvasToTempFilePath({
                    canvasId: s,
                    width: 210,
                    height: 168,
                    destWidth: 840,
                    destHeight: 672,
                    fileType: "png"
                });

              case 74:
                C = e.sent, e.next = 80;
                break;

              case 77:
                return e.prev = 77, e.t3 = e.catch(71), e.abrupt("return");

              case 80:
                return C && C.tempFilePath && (o.shareImageUrl = C.tempFilePath), e.abrupt("return", o);

              case 82:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 20, 27 ], [ 31, 37 ], [ 45, 54 ], [ 71, 77 ] ]);
    }))).apply(this, arguments);
}