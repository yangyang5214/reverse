Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFormatTag = s, exports.getExpressionIcon = h, exports.getFormatedExpressionArr = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = [], t = e, o = JSON.parse(JSON.stringify(n)), a = t.indexOf("[") > -1 && t.indexOf("]") > -1;
    !a && t.indexOf("@") > -1 && (a = !0);
    if (!a) return [ {
        type: "text",
        text: t
    } ];
    t = t.replace(/\[商品]|\[话题]|\[地区]|\[自定义]|\[品牌]|\[地点]|\[店铺]|\[影视]/g, "");
    for (;t.length > 0; ) {
        var u = t.indexOf("["), c = t.indexOf("]");
        if (-1 === u || -1 === c || c < u) {
            r = r.concat(s(t, o, i)), t = "";
            break;
        }
        r = r.concat(s(t.substr(0, u), o, i));
        var g = t.substr(u + 1, c - u - 1);
        if (h(g)) r.push({
            type: "image",
            url: h(g),
            text: t.substr(u, c - u + 1)
        }); else {
            var p = t.substr(u, c - u + 1);
            r = r.concat(s(p, o, i));
        }
        t = t.substr(c + 1, t.length);
    }
    return r;
}, exports.filterUnSupportDiscovery = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = [];
    return e.forEach(function(e) {
        c(e) && n.push(e);
    }), n;
}, exports.getNoTagNoFaceIconText = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/\[(.+?)\]/g, "");
}, exports.isSupportDiscovery = exports.getGoodsId = void 0;

var e, n = require("../@babel/runtime/helpers/defineProperty"), i = require("./enum"), r = require("./icons"), t = (n(e = {
    oldDeyi: "得意",
    xihuan: "喜欢",
    huoli: "活力",
    shaonv: "少女心",
    buman: "不满",
    taoyan: "讨厌",
    wuyu: "无语L",
    oldShengqi: "生气",
    koubi: "抠鼻",
    zhuangku: "装酷",
    zhenjing: "震惊L",
    shihua: "石化",
    haipa: "害怕",
    kuku: "哭哭",
    fanu: "发怒",
    fuhei: "腹黑",
    weiqu: "委屈",
    keshui: "瞌睡",
    baji: "吧唧R",
    bishi: "鄙视R",
    deyi: "得意R",
    feiwen: "飞吻R",
    fuqiang: "扶墙R",
    haixiu: "害羞R",
    hanyan: "汗颜R",
    jingkong: "惊恐R",
    kure: "哭惹R",
    mengmengda: "萌萌哒R",
    sese: "色色R",
    shengqi: "生气R",
    tanqi: "叹气R",
    touxiao: "偷笑R",
    xiaoku: "笑哭R",
    zaijian: "再见R",
    zan: "赞R",
    zhuakuang: "抓狂R",
    r_xieyan: "斜眼R",
    r_kelian: "可怜R",
    r_zhoumei: "皱眉R",
    angry: "无语",
    han: "汗",
    blind: "瞎",
    cool: "酷",
    cry: "哭",
    cute: "萌",
    kiss: "么么哒",
    dignose: "挖鼻孔",
    koushui: "口水",
    baiyan: "白眼",
    frozen: "好冷",
    shy: "害羞",
    titter: "嘿嘿",
    xixi: "嘻嘻",
    haha: "哈哈",
    oops: "好雷",
    question: "啊？",
    rish: "土豪",
    shock: "震惊",
    shoo: "嘘",
    dizzy: "晕",
    h_tushetou: "吐舌头H",
    h_jingxia: "惊吓H",
    h_chelian: "扯脸H",
    r_anzhongguancha: "暗中观察R",
    r_chigua: "吃瓜R",
    r_daxiao: "大笑R",
    r_heishuwenhao: "黑薯问号R",
    r_henaicha: "喝奶茶R",
    r_huangjinshu: "黄金薯R"
}, "r_kelian", "可怜R"), n(e, "r_koubi", "抠鼻R"), n(e, "r_maibao", "买爆R"), n(e, "r_paidui", "派对R"), 
n(e, "r_shihua", "石化R"), n(e, "r_shiwang", "失望R"), n(e, "r_shuijiao", "睡觉R"), n(e, "r_wa", "哇R"), 
n(e, "r_weixiao", "微笑R"), n(e, "r_wulian", "捂脸R"), n(e, "r_zipai", "自拍R"), n(e, "r_nidongde", "你懂的R"), 
n(e, "r_sang", "丧R"), e), o = Object.keys(t).reduce(function(e, n) {
    var i = t[n];
    return 0 === n.indexOf("old") && n.split("old").length > 1 && (n = n.split("old")[1].toLowerCase()), 
    e[i] = n, e;
}, {}), a = function(e) {
    return e.link && e.link.indexOf("xhsdiscover") > -1;
};

function u() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = e.trim().split("@"), r = [], t = !1;
    return i.forEach(function(e, i) {
        var o = i > 0 && e ? "@" : "", a = !1;
        n.some(function(n) {
            if (e.indexOf(n.nickname) > -1) {
                a = !0, t = !0, r.push({
                    type: "userTag",
                    text: "@ " + n.nickname,
                    id: n.userid || n.id
                });
                var i = e.replace(n.nickname, "");
                return i.trim() && r.push({
                    type: "text",
                    text: i
                }), !0;
            }
        }), !a && e && r.push({
            type: "text",
            text: "".concat(o).concat(e)
        });
    }), {
        result: r,
        hasUserTag: t
    };
}

function s() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], t = JSON.parse(JSON.stringify(n)), o = e.split(/[#]/), s = [];
    return o.forEach(function(e) {
        if (e) {
            var n = !1, o = !1, h = !1;
            if (t.some(function(i) {
                if (i.link = i.link || "", e === i.name && a(i) && (h = !0), e === i.name && !a(i)) return n = !0, 
                s.push({
                    type: "pageTag",
                    sourceType: i.type,
                    text: e,
                    link: i.link,
                    iconUrl: (0, r.getPageTagIconUrl)(i.type)
                }), !0;
            }), h && e && e.trim() && (e = "#".concat(e, "#")), e.indexOf("@") > -1 && i.length > 0) {
                var c = u(e, i);
                (o = c.hasUserTag) && (s = s.concat(c.result));
            }
            n || o || s.push({
                type: "text",
                text: e
            });
        }
    }), s;
}

function h(e) {
    if (!e) return null;
    var n = JSON.parse(JSON.stringify(o));
    for (var i in n) if (i === e) return "https://ci.xiaohongshu.com/xy_emo_".concat(o[i], ".png?v=2");
    return null;
}

exports.getGoodsId = function(e) {
    var n = e.indexOf("/goods/"), i = e || "";
    return e.indexOf("http") > -1 && (i = e.substr(n + "/goods/".length, 24)), i;
};

var c = function(e) {
    return e.type !== i.NOTE_TYPE.MULTI;
};

exports.isSupportDiscovery = c;