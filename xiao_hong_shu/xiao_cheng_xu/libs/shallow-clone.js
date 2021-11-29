var r = Symbol.prototype.valueOf, e = require("kind-of");

module.exports = function(t, a) {
    switch (e(t)) {
      case "array":
        return t.slice();

      case "object":
        return Object.assign({}, t);

      case "date":
        return new t.constructor(+t);

      case "map":
        return new Map(t);

      case "set":
        return new Set(t);

      case "buffer":
        return function(r) {
            var e = r.length, t = Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e);
            return r.copy(t), t;
        }(t);

      case "symbol":
        return function(e) {
            return r ? Object(r.call(e)) : {};
        }(t);

      case "arraybuffer":
        return function(r) {
            var e = new r.constructor(r.byteLength);
            return new Uint8Array(e).set(new Uint8Array(r)), e;
        }(t);

      case "float32array":
      case "float64array":
      case "int16array":
      case "int32array":
      case "int8array":
      case "uint16array":
      case "uint32array":
      case "uint8clampedarray":
      case "uint8array":
        return function(r, e) {
            return new r.constructor(r.buffer, r.byteOffset, r.length);
        }(t);

      case "regexp":
        return function(r) {
            var e = new r.constructor(r.source, /\w+$/.exec(r));
            return e.lastIndex = r.lastIndex, e;
        }(t);

      case "error":
        return Object.create(t);

      default:
        return t;
    }
};