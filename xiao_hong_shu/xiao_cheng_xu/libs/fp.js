var t, e, n, r, c = require("../@babel/runtime/helpers/typeof"), o = {
    appId: "default",
    channel: "",
    organization: "",
    apiHost: "fp-it.fengkongcloud.com",
    apiPath: "/v3/profile/weapp",
    authConf: {
        location: !1
    }
}, i = (t = function() {
    var t = new Date(), e = t.getFullYear().toString(), n = (t.getMonth() + 1).toString(), r = t.getDate().toString(), c = t.getHours().toString(), o = t.getMinutes().toString(), i = t.getSeconds().toString();
    return e + (n = 9 >= n ? "0" + n : n) + (r = 9 >= r ? "0" + r : r) + (c = 9 >= c ? "0" + c : c) + (o = 9 >= o ? "0" + o : o) + (i = 9 >= i ? "0" + i : i);
}(), e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    var e = 0 | 16 * Math.random();
    return ("x" == t ? e : 8 | 3 & e).toString(16);
}), n = t + y(e) + "00", r = y("smsk_weapp_" + n).substr(0, 14), n + r + 0), a = {
    key: A("%5B%A0%C0%DB%DD%E2%D2%CE"),
    deviceId: i,
    timestamp: A("%3Eelollnmmnhck")
}, u = {
    sign: "",
    timestamp: "",
    deviceId: "",
    length: 0
}, s = +new Date(), f = function() {
    var t = +new Date(), e = Math.floor(1e8 * Math.random());
    return t + "-" + e;
}();

function h(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
}

function d(t, e, n, r, c, o) {
    return h(function(t, e) {
        return t << e | t >>> 32 - e;
    }(h(h(e, t), h(r, o)), c), n);
}

function l(t, e, n, r, c, o, i) {
    return d(e & n | ~e & r, t, e, c, o, i);
}

function g(t, e, n, r, c, o, i) {
    return d(e & r | n & ~r, t, e, c, o, i);
}

function v(t, e, n, r, c, o, i) {
    return d(e ^ n ^ r, t, e, c, o, i);
}

function m(t, e, n, r, c, o, i) {
    return d(n ^ (e | ~r), t, e, c, o, i);
}

function p(t) {
    return function(t) {
        var e, n = "", r = 32 * t.length;
        for (e = 0; e < r; e += 8) n += String.fromCharCode(255 & t[e >> 5] >>> e % 32);
        return n;
    }(function(t, e) {
        t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
        var n, r, c, o, i, a = 1732584193, u = -271733879, s = -1732584194, f = 271733878;
        for (n = 0; n < t.length; n += 16) r = a, c = u, o = s, i = f, a = l(a, u, s, f, t[n], 7, -680876936), 
        f = l(f, a, u, s, t[n + 1], 12, -389564586), s = l(s, f, a, u, t[n + 2], 17, 606105819), 
        u = l(u, s, f, a, t[n + 3], 22, -1044525330), a = l(a, u, s, f, t[n + 4], 7, -176418897), 
        f = l(f, a, u, s, t[n + 5], 12, 1200080426), s = l(s, f, a, u, t[n + 6], 17, -1473231341), 
        u = l(u, s, f, a, t[n + 7], 22, -45705983), a = l(a, u, s, f, t[n + 8], 7, 1770035416), 
        f = l(f, a, u, s, t[n + 9], 12, -1958414417), s = l(s, f, a, u, t[n + 10], 17, -42063), 
        u = l(u, s, f, a, t[n + 11], 22, -1990404162), a = l(a, u, s, f, t[n + 12], 7, 1804603682), 
        f = l(f, a, u, s, t[n + 13], 12, -40341101), s = l(s, f, a, u, t[n + 14], 17, -1502002290), 
        a = g(a, u = l(u, s, f, a, t[n + 15], 22, 1236535329), s, f, t[n + 1], 5, -165796510), 
        f = g(f, a, u, s, t[n + 6], 9, -1069501632), s = g(s, f, a, u, t[n + 11], 14, 643717713), 
        u = g(u, s, f, a, t[n], 20, -373897302), a = g(a, u, s, f, t[n + 5], 5, -701558691), 
        f = g(f, a, u, s, t[n + 10], 9, 38016083), s = g(s, f, a, u, t[n + 15], 14, -660478335), 
        u = g(u, s, f, a, t[n + 4], 20, -405537848), a = g(a, u, s, f, t[n + 9], 5, 568446438), 
        f = g(f, a, u, s, t[n + 14], 9, -1019803690), s = g(s, f, a, u, t[n + 3], 14, -187363961), 
        u = g(u, s, f, a, t[n + 8], 20, 1163531501), a = g(a, u, s, f, t[n + 13], 5, -1444681467), 
        f = g(f, a, u, s, t[n + 2], 9, -51403784), s = g(s, f, a, u, t[n + 7], 14, 1735328473), 
        a = v(a, u = g(u, s, f, a, t[n + 12], 20, -1926607734), s, f, t[n + 5], 4, -378558), 
        f = v(f, a, u, s, t[n + 8], 11, -2022574463), s = v(s, f, a, u, t[n + 11], 16, 1839030562), 
        u = v(u, s, f, a, t[n + 14], 23, -35309556), a = v(a, u, s, f, t[n + 1], 4, -1530992060), 
        f = v(f, a, u, s, t[n + 4], 11, 1272893353), s = v(s, f, a, u, t[n + 7], 16, -155497632), 
        u = v(u, s, f, a, t[n + 10], 23, -1094730640), a = v(a, u, s, f, t[n + 13], 4, 681279174), 
        f = v(f, a, u, s, t[n], 11, -358537222), s = v(s, f, a, u, t[n + 3], 16, -722521979), 
        u = v(u, s, f, a, t[n + 6], 23, 76029189), a = v(a, u, s, f, t[n + 9], 4, -640364487), 
        f = v(f, a, u, s, t[n + 12], 11, -421815835), s = v(s, f, a, u, t[n + 15], 16, 530742520), 
        a = m(a, u = v(u, s, f, a, t[n + 2], 23, -995338651), s, f, t[n], 6, -198630844), 
        f = m(f, a, u, s, t[n + 7], 10, 1126891415), s = m(s, f, a, u, t[n + 14], 15, -1416354905), 
        u = m(u, s, f, a, t[n + 5], 21, -57434055), a = m(a, u, s, f, t[n + 12], 6, 1700485571), 
        f = m(f, a, u, s, t[n + 3], 10, -1894986606), s = m(s, f, a, u, t[n + 10], 15, -1051523), 
        u = m(u, s, f, a, t[n + 1], 21, -2054922799), a = m(a, u, s, f, t[n + 8], 6, 1873313359), 
        f = m(f, a, u, s, t[n + 15], 10, -30611744), s = m(s, f, a, u, t[n + 6], 15, -1560198380), 
        u = m(u, s, f, a, t[n + 13], 21, 1309151649), a = m(a, u, s, f, t[n + 4], 6, -145523070), 
        f = m(f, a, u, s, t[n + 11], 10, -1120210379), s = m(s, f, a, u, t[n + 2], 15, 718787259), 
        u = m(u, s, f, a, t[n + 9], 21, -343485551), a = h(a, r), u = h(u, c), s = h(s, o), 
        f = h(f, i);
        return [ a, u, s, f ];
    }(function(t) {
        var e, n = [];
        for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
        var r = 8 * t.length;
        for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return n;
    }(t), 8 * t.length));
}

function x(t) {
    return p(function(t) {
        return unescape(encodeURIComponent(t));
    }(t));
}

function y(t) {
    return function(t) {
        return function(t) {
            var e, n, r = "0123456789abcdef", c = "";
            for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), c += r.charAt(15 & e >>> 4) + r.charAt(15 & e);
            return c;
        }(x(t));
    }(t);
}

function A(t) {
    t = unescape(t);
    for (var e = String.fromCharCode, n = e(t.charCodeAt(0) - t.length), r = 1; r < t.length; r++) n += e(t.charCodeAt(r) - n.charCodeAt(r - 1));
    return n;
}

function C() {
    var t = function() {
        try {
            return wx.getSystemInfoSync();
        } catch (t) {
            return {};
        }
    }(), e = +new Date(), n = S(), r = t.version, c = function() {
        var t = {};
        try {
            t = wx.getLaunchOptionsSync();
        } catch (t) {}
        return t;
    }();
    return delete t.version, Object.assign({
        appId: o.appId,
        channel: o.channel,
        deviceId: n,
        time: e - s,
        sessionId: f,
        version: "2.0.0",
        subVersion: "2.0.10",
        weAppVerion: r,
        res: "".concat(t.screenWidth, "_").concat(t.screenHeight),
        launchOptions: c
    }, t);
}

function w(t) {
    var e = [];
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = t[n];
        "object" == c(t[n]) && (r = JSON.stringify(r)), e.push(n + "=" + encodeURIComponent(r));
    }
    return e.join("&");
}

function S() {
    var t;
    try {
        var e = "".concat(wx.env.USER_DATA_PATH, "/SMFP.txt");
        t = wx.getFileSystemManager().readFileSync(e, "utf8");
    } catch (t) {}
    try {
        t = wx.getStorageSync("smidV2", null);
    } catch (t) {}
    return t || (t = i), I(t), t;
}

function I(t) {
    try {
        var e = "".concat(wx.env.USER_DATA_PATH, "/SMFP.txt"), n = wx.getFileSystemManager();
        wx.setStorageSync("smidV2", t), n.writeFileSync(e, t, "utf8");
    } catch (t) {}
}

function P(t, e, n, r) {
    u.deviceId = t, u.sign = e, u.timestamp = n, u.length = 1 * r;
}

function b() {
    return {
        deviceId: u.deviceId,
        sign: u.sign,
        timestamp: u.timestamp,
        length: u.length
    };
}

function D() {
    return {
        deviceId: S(),
        sign: null,
        timestamp: a.timestamp
    };
}

function T(t, e) {
    try {
        var n = b().timestamp;
        return O(t(e)) + n;
    } catch (t) {
        var r = D().timestamp;
        return O(k(M, e)) + r;
    }
}

function k(t, e, n, r, c, o) {
    return t = t || M, n = n || a.key, r = 0 == r ? 0 : 1, n += "", 0 == (c = 2 == c ? 1 : 0) ? t(n, e, r) : t(n, e, r, c, o);
}

function M(t, e, n, r, c, o) {
    var i, a, u, s, f, h, d, l, g, v, m, p, x, y, A = String.fromCharCode, C = [ 16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756 ], w = [ -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344 ], S = [ 520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584 ], I = [ 8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928 ], P = [ 256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080 ], b = [ 536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312 ], D = [ 2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154 ], T = [ 268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696 ], k = function(t) {
        for (var e, n, r, c = [ 0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964 ], o = [ 0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697 ], i = [ 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272 ], a = [ 0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144 ], u = [ 0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256 ], s = [ 0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488 ], f = [ 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746 ], h = [ 0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568 ], d = [ 0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578 ], l = [ 0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488 ], g = [ 0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800 ], v = [ 0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744 ], m = [ 0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128 ], p = [ 0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261 ], x = 8 < t.length ? 3 : 1, y = Array(32 * x), A = [ 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0 ], C = 0, w = 0, S = 0; S < x; S++) {
            var I = t.charCodeAt(C++) << 24 | t.charCodeAt(C++) << 16 | t.charCodeAt(C++) << 8 | t.charCodeAt(C++), P = t.charCodeAt(C++) << 24 | t.charCodeAt(C++) << 16 | t.charCodeAt(C++) << 8 | t.charCodeAt(C++);
            I ^= (r = 252645135 & (I >>> 4 ^ P)) << 4, I ^= r = 65535 & ((P ^= r) >>> -16 ^ I), 
            I ^= (r = 858993459 & (I >>> 2 ^ (P ^= r << -16))) << 2, I ^= r = 65535 & ((P ^= r) >>> -16 ^ I), 
            I ^= (r = 1431655765 & (I >>> 1 ^ (P ^= r << -16))) << 1, I ^= r = 16711935 & ((P ^= r) >>> 8 ^ I), 
            r = (I ^= (r = 1431655765 & (I >>> 1 ^ (P ^= r << 8))) << 1) << 8 | 240 & (P ^= r) >>> 20, 
            I = P << 24 | 16711680 & P << 8 | 65280 & P >>> 8 | 240 & P >>> 24, P = r;
            for (var b = 0; b < A.length; b++) A[b] ? (I = I << 2 | I >>> 26, P = P << 2 | P >>> 26) : (I = I << 1 | I >>> 27, 
            P = P << 1 | P >>> 27), r = 65535 & ((n = h[(P &= -15) >>> 28] | d[15 & P >>> 24] | l[15 & P >>> 20] | g[15 & P >>> 16] | v[15 & P >>> 12] | m[15 & P >>> 8] | p[15 & P >>> 4]) >>> 16 ^ (e = c[(I &= -15) >>> 28] | o[15 & I >>> 24] | i[15 & I >>> 20] | a[15 & I >>> 16] | u[15 & I >>> 12] | s[15 & I >>> 8] | f[15 & I >>> 4])), 
            y[w++] = e ^ r, y[w++] = n ^ r << 16;
        }
        return y;
    }(t), M = 0, O = e.length, W = 0, B = 32 == k.length ? 3 : 9;
    l = 3 == B ? n ? [ 0, 32, 2 ] : [ 30, -2, -2 ] : n ? [ 0, 32, 2, 62, 30, -2, 64, 96, 2 ] : [ 94, 62, -2, 32, 64, 2, 30, -2, -2 ], 
    2 == o ? e += "        " : 1 == o ? (e += A(u = 8 - O % 8, u, u, u, u, u, u, u), 
    8 == u && (O += 8)) : !o && (e += "\0\0\0\0\0\0\0\0");
    var F = "", L = "";
    for (1 == r && (g = c.charCodeAt(M++) << 24 | c.charCodeAt(M++) << 16 | c.charCodeAt(M++) << 8 | c.charCodeAt(M++), 
    m = c.charCodeAt(M++) << 24 | c.charCodeAt(M++) << 16 | c.charCodeAt(M++) << 8 | c.charCodeAt(M++), 
    M = 0); M < O; ) {
        for (h = e.charCodeAt(M++) << 24 | e.charCodeAt(M++) << 16 | e.charCodeAt(M++) << 8 | e.charCodeAt(M++), 
        d = e.charCodeAt(M++) << 24 | e.charCodeAt(M++) << 16 | e.charCodeAt(M++) << 8 | e.charCodeAt(M++), 
        1 == r && (n ? (h ^= g, d ^= m) : (v = g, p = m, g = h, m = d)), h ^= (u = 252645135 & (h >>> 4 ^ d)) << 4, 
        h ^= (u = 65535 & (h >>> 16 ^ (d ^= u))) << 16, h ^= u = 858993459 & ((d ^= u) >>> 2 ^ h), 
        h ^= u = 16711935 & ((d ^= u << 2) >>> 8 ^ h), h = (h ^= (u = 1431655765 & (h >>> 1 ^ (d ^= u << 8))) << 1) << 1 | h >>> 31, 
        d = (d ^= u) << 1 | d >>> 31, a = 0; a < B; a += 3) {
            for (x = l[a + 1], y = l[a + 2], i = l[a]; i != x; i += y) s = d ^ k[i], f = (d >>> 4 | d << 28) ^ k[i + 1], 
            u = h, h = d, d = u ^ (w[63 & s >>> 24] | I[63 & s >>> 16] | b[63 & s >>> 8] | T[63 & s] | C[63 & f >>> 24] | S[63 & f >>> 16] | P[63 & f >>> 8] | D[63 & f]);
            u = h, h = d, d = u;
        }
        d = d >>> 1 | d << 31, d ^= u = 1431655765 & ((h = h >>> 1 | h << 31) >>> 1 ^ d), 
        d ^= (u = 16711935 & (d >>> 8 ^ (h ^= u << 1))) << 8, d ^= (u = 858993459 & (d >>> 2 ^ (h ^= u))) << 2, 
        d ^= u = 65535 & ((h ^= u) >>> 16 ^ d), d ^= u = 252645135 & ((h ^= u << 16) >>> 4 ^ d), 
        h ^= u << 4, 1 == r && (n ? (g = h, m = d) : (h ^= v, d ^= p)), L += A(h >>> 24, 255 & h >>> 16, 255 & h >>> 8, 255 & h, d >>> 24, 255 & d >>> 16, 255 & d >>> 8, 255 & d), 
        512 == (W += 8) && (F += L, L = "", W = 0);
    }
    return F + L;
}

function O(t) {
    var e, n, r, c, o, i, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (r = t.length, n = 0, e = ""; n < r; ) {
        if (c = 255 & t.charCodeAt(n++), n == r) {
            e += a.charAt(c >> 2), e += a.charAt((3 & c) << 4), e += "==";
            break;
        }
        if (o = t.charCodeAt(n++), n == r) {
            e += a.charAt(c >> 2), e += a.charAt((3 & c) << 4 | (240 & o) >> 4), e += a.charAt((15 & o) << 2), 
            e += "=";
            break;
        }
        i = t.charCodeAt(n++), e += a.charAt(c >> 2), e += a.charAt((3 & c) << 4 | (240 & o) >> 4), 
        e += a.charAt((15 & o) << 2 | (192 & i) >> 6), e += a.charAt(63 & i);
    }
    return e;
}

function W(t, e) {
    var n = b().length;
    try {
        var r = k(M, function(t) {
            var e, n, r, c, o, i, a, u = String.fromCharCode, s = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1 ];
            for (i = t.length, o = 0, a = ""; o < i; ) {
                do {
                    e = s[255 & t.charCodeAt(o++)];
                } while (o < i && -1 == e);
                if (-1 == e) break;
                do {
                    n = s[255 & t.charCodeAt(o++)];
                } while (o < i && -1 == n);
                if (-1 == n) break;
                a += u(e << 2 | (48 & n) >> 4);
                do {
                    if (61 == (r = 255 & t.charCodeAt(o++))) return a;
                    r = s[r];
                } while (o < i && -1 == r);
                if (-1 == r) break;
                a += u((15 & n) << 4 | (60 & r) >> 2);
                do {
                    if (61 == (c = 255 & t.charCodeAt(o++))) return a;
                    c = s[c];
                } while (o < i && -1 == c);
                if (-1 == c) break;
                a += u((3 & r) << 6 | c);
            }
            return a;
        }(t), "", 0).substr(0, n).split(","), c = function(t) {
            var e = [ null, M ];
            return e[t] ? e[t] : null;
        }(r[0]), o = null;
        return "function" == typeof c && (o = function(t) {
            return k(c, t, r[2], r[1], r[3]);
        }), "W" + T(o, e);
    } catch (t) {
        return "W" + T(M, e);
    }
}

function B(t) {
    return new Promise(function(e) {
        var n = w(t), r = "https://" + o.apiHost + o.apiPath, c = D();
        P(c.deviceId, c.sign, c.timestamp, 0), function(t, e, n) {
            try {
                wx.request({
                    url: t,
                    data: e,
                    method: "POST",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        var e = {
                            code: 1902,
                            detail: {},
                            deviceId: "",
                            message: "数据解析异常",
                            requestId: "",
                            riskLevel: ""
                        };
                        try {
                            var r = t.data, c = r.match(/smCB\((.*)\)/);
                            if (c) {
                                var o = c[1];
                                try {
                                    n(JSON.parse(o));
                                } catch (t) {
                                    n(e);
                                }
                            } else n(e);
                        } catch (t) {
                            n(e);
                        }
                    }
                });
            } catch (t) {}
        }(r, {
            organization: o.organization,
            smdata: W(c.sign, n),
            os: "weapp",
            version: "2.0.0"
        }, function(t) {
            try {
                if (1100 == t.code) {
                    var n = t.deviceId || S() || a.deviceId, r = t.detail ? t.detail.timestamp : "", c = t.detail ? t.detail.sign : "", o = t.detail ? t.detail.len : 0;
                    n && c && r && o && (I(n), P(n, c, r, o));
                }
            } catch (t) {}
            e();
        });
    });
}

function F(t, e) {
    var n = t;
    try {
        return e && (n = t.sort(function(t, n) {
            return 0 > t[e] - n[e];
        })), n.slice(0, 10);
    } catch (t) {
        return n.slice(0, 10);
    }
}

function L() {
    try {
        var t = o.authConf && !0 === o.authConf.location, e = C(), n = [ new Promise(function(t) {
            var e = [];
            try {
                wx.onAccelerometerChange(function(n) {
                    try {
                        e.push(n), setTimeout(function() {}, 6e3), t(e);
                    } catch (n) {
                        t(e);
                    }
                }), setTimeout(function() {
                    t(e);
                }, 1e3);
            } catch (n) {
                t(e);
            }
        }), new Promise(function(t) {
            var e = [];
            try {
                wx.onCompassChange(function(n) {
                    try {
                        e.push(n.direction), setTimeout(function() {}, 6e3), t(e);
                    } catch (n) {
                        t(e);
                    }
                }), setTimeout(function() {
                    t(e);
                }, 1e3);
            } catch (n) {
                t(e);
            }
        }), new Promise(function(t) {
            try {
                wx.getScreenBrightness({
                    success: function(e) {
                        try {
                            t(e.value);
                        } catch (e) {
                            t(-1);
                        }
                    },
                    fail: function() {
                        t(-1);
                    }
                });
            } catch (e) {
                t(-1);
            }
        }), new Promise(function(t) {
            try {
                wx.getNetworkType({
                    success: function(e) {
                        try {
                            t(e.networkType);
                        } catch (e) {
                            t("");
                        }
                    },
                    fail: function() {
                        t("");
                    }
                });
            } catch (e) {
                t("");
            }
        }), new Promise(function(t) {
            try {
                wx.openBluetoothAdapter({
                    success: function() {
                        try {
                            wx.startBluetoothDevicesDiscovery({
                                success: function() {
                                    var e = [], n = [];
                                    try {
                                        wx.onBluetoothDeviceFound(function(r) {
                                            try {
                                                for (var c = r.devices, o = 0; o < c.length; o++) -1 == n.indexOf(c[o].deviceId) && (n.push(c[o].deviceId), 
                                                e.push({
                                                    deviceId: c[o].deviceId,
                                                    name: c[o].name,
                                                    RSSI: c[o].RSSI
                                                }));
                                            } catch (n) {
                                                t(e);
                                            }
                                        });
                                    } catch (n) {
                                        t(e);
                                    }
                                    setTimeout(function() {
                                        t(e);
                                    }, 2e3);
                                },
                                fail: function() {
                                    t([]);
                                }
                            });
                        } catch (e) {
                            t([]);
                        }
                    },
                    fail: function() {
                        t([]);
                    }
                });
            } catch (e) {
                t([]);
            }
        }), new Promise(function(t) {
            try {
                try {
                    wx.startWifi({
                        success: function() {
                            wx.getConnectedWifi({
                                complete: function(e) {
                                    try {
                                        e.wifi ? t(e.wifi) : t({});
                                    } catch (e) {
                                        t({});
                                    }
                                }
                            });
                        },
                        fail: function() {
                            t([]);
                        }
                    });
                } catch (e) {
                    t([]);
                }
            } catch (e) {
                t({});
            }
        }) ];
        t && (n.push(new Promise(function(t) {
            var e = C();
            try {
                wx.startWifi({
                    success: function() {
                        if ("android" == e.platform) try {
                            wx.getWifiList({
                                success: function() {
                                    try {
                                        wx.onGetWifiList(function(e) {
                                            try {
                                                t(e.wifiList);
                                            } catch (e) {
                                                t([]);
                                            }
                                        });
                                    } catch (t) {}
                                    setTimeout(function() {
                                        t([]);
                                    }, 1e3);
                                },
                                fail: function() {
                                    t([]);
                                }
                            });
                        } catch (e) {
                            t([]);
                        } else t([]);
                    },
                    fail: function() {
                        t([]);
                    }
                });
            } catch (e) {
                t([]);
            }
        })), n.push(new Promise(function(t) {
            try {
                wx.getLocation({
                    altitude: !0,
                    success: function(e) {
                        try {
                            delete e.errMsg, t(e);
                        } catch (e) {
                            t({});
                        }
                    },
                    fail: function() {
                        t({});
                    }
                });
            } catch (e) {
                t({});
            }
        }))), Promise.all(n).then(function(r) {
            try {
                var c = {
                    accelerometer: F(r[0]),
                    compass: F(r[1]),
                    screenBright: r[2],
                    networkType: r[3],
                    bluetooth: F(r[4], "RSSI"),
                    connectedWifi: r[5]
                };
                t && (c.wifiList = F(r[n.length - 2], "signalStrength"), c.location = r[n.length - 1]), 
                B(Object.assign(e, c));
            } catch (t) {
                B(e);
            }
        }, function() {
            B(e);
        });
    } catch (t) {}
}

setTimeout(function() {
    B(C()).then(function() {
        try {
            setTimeout(L, 2e3);
        } catch (t) {}
    });
    try {
        wx.startAccelerometer && wx.startAccelerometer(), wx.startCompass && wx.startCompass();
    } catch (t) {}
}, 0), module.exports = {
    initConf: function(t) {
        o = Object.assign({}, o, t);
    },
    getDeviceId: function() {
        var t = w(function() {
            var t = S();
            new Date();
            return {
                deviceId: t,
                version: "2.0.0"
            };
        }());
        return W(b().sign, t);
    }
};