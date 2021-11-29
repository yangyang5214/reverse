function t() {}

function r(t, r) {
    return Math.floor(Math.random() * (r - t + 1)) + t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, t.maxFromBits = function(t) {
    return Math.pow(2, t);
}, t.limitUI04 = t.maxFromBits(4), t.limitUI06 = t.maxFromBits(6), t.limitUI08 = t.maxFromBits(8), 
t.limitUI12 = t.maxFromBits(12), t.limitUI14 = t.maxFromBits(14), t.limitUI16 = t.maxFromBits(16), 
t.limitUI32 = t.maxFromBits(32), t.limitUI40 = t.maxFromBits(40), t.limitUI48 = t.maxFromBits(48), 
t.randomUI04 = function() {
    return r(0, t.limitUI04 - 1);
}, t.randomUI06 = function() {
    return r(0, t.limitUI06 - 1);
}, t.randomUI08 = function() {
    return r(0, t.limitUI08 - 1);
}, t.randomUI12 = function() {
    return r(0, t.limitUI12 - 1);
}, t.randomUI14 = function() {
    return r(0, t.limitUI14 - 1);
}, t.randomUI16 = function() {
    return r(0, t.limitUI16 - 1);
}, t.randomUI32 = function() {
    return r(0, t.limitUI32 - 1);
}, t.randomUI40 = function() {
    return (0 | Math.random() * (1 << 30)) + (0 | 1024 * Math.random()) * (1 << 30);
}, t.randomUI48 = function() {
    return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30);
}, t.paddedString = function(t, r, n) {
    n = n || "0";
    for (var i = r - (t = String(t)).length; i > 0; i >>>= 1, n += n) 1 & i && (t = n + t);
    return t;
}, t.prototype.fromParts = function(r, n, i, e, o, a) {
    return this.version = i >> 12 & 15, this.hex = t.paddedString(r.toString(16), 8) + "-" + t.paddedString(n.toString(16), 4) + "-" + t.paddedString(i.toString(16), 4) + "-" + t.paddedString(e.toString(16), 2) + t.paddedString(o.toString(16), 2) + "-" + t.paddedString(a.toString(16), 12), 
    this;
}, t.prototype.toString = function() {
    return this.hex;
}, t.prototype.toURN = function() {
    return "urn:uuid:" + this.hex;
}, t.prototype.toBytes = function() {
    for (var t = this.hex.split("-"), r = [], n = 0, i = 0; i < t.length; i++) for (var e = 0; e < t[i].length; e += 2) r[n++] = parseInt(t[i].substr(e, 2), 16);
    return r;
}, t.prototype.equals = function(t) {
    return t instanceof UUID && this.hex === t.hex;
}, t.getTimeFieldValues = function(t) {
    var r = t - Date.UTC(1582, 9, 15), n = r / 4294967296 * 1e4 & 268435455;
    return {
        low: 1e4 * (268435455 & r) % 4294967296,
        mid: 65535 & n,
        hi: n >>> 16,
        timestamp: r
    };
}, t._create4 = function() {
    return new t().fromParts(t.randomUI32(), t.randomUI16(), 16384 | t.randomUI12(), 128 | t.randomUI06(), t.randomUI08(), t.randomUI48());
}, t._create1 = function() {
    var r = new Date().getTime(), n = t.randomUI14(), i = 1099511627776 * (1 | t.randomUI08()) + t.randomUI40(), e = t.randomUI04(), o = 0;
    r != o ? (r < o && n++, o = r, e = t.randomUI04()) : Math.random() < 1 / 4 && e < 9984 ? e += 1 + t.randomUI04() : n++;
    var a = t.getTimeFieldValues(o), m = a.low + e, u = 4095 & a.hi | 4096, d = (n &= 16383) >>> 8 | 128, f = 255 & n;
    return new t().fromParts(m, a.mid, u, d, f, i);
}, t.create = function(t) {
    var r = this["_create" + (t = t || 4)];
    return r ? r() : {};
}, t.fromTime = function(r, n) {
    n = n || !1;
    var i = t.getTimeFieldValues(r), e = i.low, o = 4095 & i.hi | 4096;
    return !1 === n ? new t().fromParts(e, i.mid, o, 0, 0, 0) : new t().fromParts(e, i.mid, o, 128 | t.limitUI06, t.limitUI08 - 1, t.limitUI48 - 1);
}, t.firstFromTime = function(r) {
    return t.fromTime(r, !1);
}, t.lastFromTime = function(r) {
    return t.fromTime(r, !0);
}, t.fromURN = function(r) {
    var n;
    return (n = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(r)) ? new t().fromParts(parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16), parseInt(n[4], 16), parseInt(n[5], 16), parseInt(n[6], 16)) : null;
}, t.fromBytes = function(r) {
    if (r.length < 5) return null;
    for (var n = "", i = 0, e = [ 4, 2, 2, 2, 6 ], o = 0; o < e.length; o++) {
        for (var a = 0; a < e[o]; a++) {
            var m = r[i++].toString(16);
            1 == m.length && (m = "0" + m), n += m;
        }
        6 !== e[o] && (n += "-");
    }
    return t.fromURN(n);
}, t.fromBinary = function(r) {
    for (var n = [], i = 0; i < r.length; i++) if (n[i] = r.charCodeAt(i), n[i] > 255 || n[i] < 0) throw new Error("Unexpected byte in binary data.");
    return t.fromBytes(n);
}, t.new = function() {
    return this.create(4);
}, t.newTS = function() {
    return this.create(1);
};

var n = t;

exports.default = n;