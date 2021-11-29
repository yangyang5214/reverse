var _typeof2 = require("../../../@babel/runtime/helpers/typeof"), $jscomp = $jscomp || {};

$jscomp.scope = {}, $jscomp.findInternal = function(e, t, r) {
    e instanceof String && (e = String(e));
    for (var o = e.length, n = 0; n < o; n++) {
        var s = e[n];
        if (t.call(r, s, n, e)) return {
            i: n,
            v: s
        };
    }
    return {
        i: -1,
        v: void 0
    };
}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, 
$jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, r) {
    e != Array.prototype && e != Object.prototype && (e[t] = r.value);
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
}, $jscomp.global = $jscomp.getGlobal(void 0), $jscomp.polyfill = function(e, t, r, o) {
    if (t) {
        for (r = $jscomp.global, e = e.split("."), o = 0; o < e.length - 1; o++) {
            var n = e[o];
            n in r || (r[n] = {}), r = r[n];
        }
        (t = t(o = r[e = e[e.length - 1]])) != o && null != t && $jscomp.defineProperty(r, e, {
            configurable: !0,
            writable: !0,
            value: t
        });
    }
}, $jscomp.polyfill("Array.prototype.findIndex", function(e) {
    return e || function(e, t) {
        return $jscomp.findInternal(this, e, t).i;
    };
}, "es6", "es3"), $jscomp.checkStringArgs = function(e, t, r) {
    if (null == e) throw new TypeError("The 'this' value for String.prototype." + r + " must not be null or undefined");
    if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + r + " must not be a regular expression");
    return e + "";
}, $jscomp.polyfill("String.prototype.startsWith", function(e) {
    return e || function(e, t) {
        var r = $jscomp.checkStringArgs(this, e, "startsWith");
        e += "";
        var o = r.length, n = e.length;
        t = Math.max(0, Math.min(0 | t, r.length));
        for (var s = 0; s < n && t < o; ) if (r[t++] != e[s++]) return !1;
        return s >= n;
    };
}, "es6", "es3"), $jscomp.polyfill("String.prototype.endsWith", function(e) {
    return e || function(e, t) {
        var r = $jscomp.checkStringArgs(this, e, "endsWith");
        e += "", void 0 === t && (t = r.length), t = Math.max(0, Math.min(0 | t, r.length));
        for (var o = e.length; 0 < o && 0 < t; ) if (r[--t] != e[--o]) return !1;
        return 0 >= o;
    };
}, "es6", "es3"), $jscomp.polyfill("String.prototype.repeat", function(e) {
    return e || function(e) {
        var t = $jscomp.checkStringArgs(this, null, "repeat");
        if (0 > e || 1342177279 < e) throw new RangeError("Invalid count value");
        e |= 0;
        for (var r = ""; e; ) 1 & e && (r += t), (e >>>= 1) && (t += t);
        return r;
    };
}, "es6", "es3"), $jscomp.polyfill("Array.prototype.find", function(e) {
    return e || function(e, t) {
        return $jscomp.findInternal(this, e, t).v;
    };
}, "es6", "es3");

var COMPILED = !0, goog = goog || {};

goog.global = {}, goog.isDef = function(e) {
    return void 0 !== e;
}, goog.isString = function(e) {
    return "string" == typeof e;
}, goog.isBoolean = function(e) {
    return "boolean" == typeof e;
}, goog.isNumber = function(e) {
    return "number" == typeof e;
}, goog.exportPath_ = function(e, t, r) {
    e = e.split("."), r = r || goog.global, e[0] in r || void 0 === r.execScript || r.execScript("var " + e[0]);
    for (var o; e.length && (o = e.shift()); ) !e.length && goog.isDef(t) ? r[o] = t : r = r[o] && r[o] !== Object.prototype[o] ? r[o] : r[o] = {};
}, goog.define = function(e, t) {
    if (!COMPILED) {
        var r = goog.global.CLOSURE_UNCOMPILED_DEFINES, o = goog.global.CLOSURE_DEFINES;
        r && void 0 === r.nodeType && Object.prototype.hasOwnProperty.call(r, e) ? t = r[e] : o && void 0 === o.nodeType && Object.prototype.hasOwnProperty.call(o, e) && (t = o[e]);
    }
    return goog.exportPath_(e, t), t;
}, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, 
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, 
goog.provide = function(e) {
    if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
    if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
    goog.constructNamespace_(e);
}, goog.constructNamespace_ = function(e, t) {
    if (!COMPILED) {
        delete goog.implicitNamespaces_[e];
        for (var r = e; (r = r.substring(0, r.lastIndexOf("."))) && !goog.getObjectByName(r); ) goog.implicitNamespaces_[r] = !0;
    }
    goog.exportPath_(e, t);
}, goog.getScriptNonce = function(e) {
    return e && e != goog.global ? goog.getScriptNonce_(e.document) : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)), 
    goog.cspNonce_);
}, goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/, goog.cspNonce_ = null, goog.getScriptNonce_ = function(e) {
    return (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(e) ? e : "";
}, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(e) {
    if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
    if (!goog.isInGoogModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
    if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
    if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
        if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
        delete goog.implicitNamespaces_[e];
    }
}, goog.module.get = function(e) {
    return goog.module.getInternal_(e);
}, goog.module.getInternal_ = function(e) {
    if (!COMPILED) {
        if (e in goog.loadedModules_) return goog.loadedModules_[e].exports;
        if (!goog.implicitNamespaces_[e]) return null != (e = goog.getObjectByName(e)) ? e : null;
    }
    return null;
}, goog.ModuleType = {
    ES6: "es6",
    GOOG: "goog"
}, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
    return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
}, goog.isInGoogModuleLoader_ = function() {
    return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
}, goog.isInEs6ModuleLoader_ = function() {
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0;
    var e = goog.global.$jscomp;
    return !!e && ("function" == typeof e.getCurrentModulePath && !!e.getCurrentModulePath());
}, goog.module.declareLegacyNamespace = function() {
    if (!COMPILED && !goog.isInGoogModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
    if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
    goog.moduleLoaderState_.declareLegacyNamespace = !0;
}, goog.declareModuleId = function(e) {
    if (!COMPILED) {
        if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) throw Error("goog.declareModuleId may only be called once per module.");
        if (e in goog.loadedModules_) throw Error('Module with namespace "' + e + '" already exists.');
    }
    if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = e; else {
        var t = goog.global.$jscomp;
        if (!t || "function" != typeof t.getCurrentModulePath) throw Error('Module with namespace "' + e + '" has been loaded incorrectly.');
        t = t.require(t.getCurrentModulePath()), goog.loadedModules_[e] = {
            exports: t,
            type: goog.ModuleType.ES6,
            moduleId: e
        };
    }
}, goog.module.declareNamespace = goog.declareModuleId, goog.setTestOnly = function(e) {
    if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."));
}, goog.forwardDeclare = function(e) {}, COMPILED || (goog.isProvided_ = function(e) {
    return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e));
}, goog.implicitNamespaces_ = {
    "goog.module": !0
}), goog.getObjectByName = function(e, t) {
    e = e.split("."), t = t || goog.global;
    for (var r = 0; r < e.length; r++) if (t = t[e[r]], !goog.isDefAndNotNull(t)) return null;
    return t;
}, goog.globalize = function(e, t) {
    for (var r in t = t || goog.global, e) t[r] = e[r];
}, goog.addDependency = function(e, t, r, o) {
    !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(e, t, r, o);
}, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(e) {
    goog.global.console && goog.global.console.error(e);
}, goog.require = function(e) {
    if (!COMPILED) {
        if (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e), goog.isProvided_(e)) {
            if (goog.isInModuleLoader_()) return goog.module.getInternal_(e);
        } else if (goog.ENABLE_DEBUG_LOADER) {
            var t = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
                goog.debugLoader_.load_(e);
            } finally {
                goog.moduleLoaderState_ = t;
            }
        }
        return null;
    }
}, goog.requireType = function(e) {
    return {};
}, goog.basePath = "", goog.nullFunction = function() {}, goog.abstractMethod = function() {
    throw Error("unimplemented abstract method");
}, goog.addSingletonGetter = function(e) {
    e.instance_ = void 0, e.getInstance = function() {
        return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), 
        e.instance_ = new e());
    };
}, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, 
goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, 
goog.TRANSPILE = "detect", goog.ASSUME_ES_MODULES_TRANSPILED = !1, goog.TRANSPILE_TO_LANGUAGE = "", 
goog.TRANSPILER = "transpile.js", goog.hasBadLetScoping = null, goog.useSafari10Workaround = function() {
    if (null == goog.hasBadLetScoping) {
        try {
            var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
        } catch (e) {
            a = !1;
        }
        goog.hasBadLetScoping = a;
    }
    return goog.hasBadLetScoping;
}, goog.workaroundSafari10EvalBug = function(e) {
    return "(function(){" + e + "\n;})();\n";
}, goog.loadModule = function(e) {
    var t = goog.moduleLoaderState_;
    try {
        if (goog.moduleLoaderState_ = {
            moduleName: "",
            declareLegacyNamespace: !1,
            type: goog.ModuleType.GOOG
        }, goog.isFunction(e)) var r = e.call(void 0, {}); else {
            if (!goog.isString(e)) throw Error("Invalid module definition");
            goog.useSafari10Workaround() && (e = goog.workaroundSafari10EvalBug(e)), r = goog.loadModuleFromSource_.call(void 0, e);
        }
        var o = goog.moduleLoaderState_.moduleName;
        if (!goog.isString(o) || !o) throw Error('Invalid module name "' + o + '"');
        goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(o, r) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == _typeof2(r) && null != r && Object.seal(r), 
        goog.loadedModules_[o] = {
            exports: r,
            type: goog.ModuleType.GOOG,
            moduleId: goog.moduleLoaderState_.moduleName
        };
    } finally {
        goog.moduleLoaderState_ = t;
    }
}, goog.loadModuleFromSource_ = function(a) {
    return eval(a), {};
}, goog.normalizePath_ = function(e) {
    e = e.split("/");
    for (var t = 0; t < e.length; ) "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
    return e.join("/");
}, goog.loadFileSync_ = function(e) {
    if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
    try {
        var t = new goog.global.XMLHttpRequest();
        return t.open("get", e, !1), t.send(), 0 == t.status || 200 == t.status ? t.responseText : null;
    } catch (e) {
        return null;
    }
}, goog.transpile_ = function(a, b, c) {
    var d = goog.global.$jscomp;
    d || (goog.global.$jscomp = d = {});
    var e = d.transpile;
    if (!e) {
        var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
        if (g) {
            if (function() {
                eval(g + "\n//# sourceURL=" + f);
            }.call(goog.global), goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile, d = goog.global.$jscomp, 
            e = d.transpile;
        }
    }
    return e || (e = d.transpile = function(e, t) {
        return goog.logToConsole_(t + " requires transpilation but no transpiler was found."), 
        e;
    }), e(a, b, c);
}, goog.typeOf = function(e) {
    var t = _typeof2(e);
    if ("object" == t) {
        if (!e) return "null";
        if (e instanceof Array) return "array";
        if (e instanceof Object) return t;
        var r = Object.prototype.toString.call(e);
        if ("[object Window]" == r) return "object";
        if ("[object Array]" == r || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == r || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function";
    } else if ("function" == t && void 0 === e.call) return "object";
    return t;
}, goog.isNull = function(e) {
    return null === e;
}, goog.isDefAndNotNull = function(e) {
    return null != e;
}, goog.isArray = function(e) {
    return "array" == goog.typeOf(e);
}, goog.isArrayLike = function(e) {
    var t = goog.typeOf(e);
    return "array" == t || "object" == t && "number" == typeof e.length;
}, goog.isDateLike = function(e) {
    return goog.isObject(e) && "function" == typeof e.getFullYear;
}, goog.isFunction = function(e) {
    return "function" == goog.typeOf(e);
}, goog.isObject = function(e) {
    var t = _typeof2(e);
    return "object" == t && null != e || "function" == t;
}, goog.getUid = function(e) {
    return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_);
}, goog.hasUid = function(e) {
    return !!e[goog.UID_PROPERTY_];
}, goog.removeUid = function(e) {
    null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
    try {
        delete e[goog.UID_PROPERTY_];
    } catch (e) {}
}, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, 
goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if ("function" == typeof e.clone) return e.clone();
        for (var r in t = "array" == t ? [] : {}, e) t[r] = goog.cloneObject(e[r]);
        return t;
    }
    return e;
}, goog.bindNative_ = function(e, t, r) {
    return e.call.apply(e.bind, arguments);
}, goog.bindJs_ = function(e, t, r) {
    if (!e) throw Error();
    if (2 < arguments.length) {
        var o = Array.prototype.slice.call(arguments, 2);
        return function() {
            var r = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(r, o), e.apply(t, r);
        };
    }
    return function() {
        return e.apply(t, arguments);
    };
}, goog.bind = function(e, t, r) {
    return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, 
    goog.bind.apply(null, arguments);
}, goog.partial = function(e, t) {
    var r = Array.prototype.slice.call(arguments, 1);
    return function() {
        var t = r.slice();
        return t.push.apply(t, arguments), e.apply(this, t);
    };
}, goog.mixin = function(e, t) {
    for (var r in t) e[r] = t[r];
}, goog.now = goog.TRUSTED_SITE && Date.now || function() {
    return +new Date();
}, goog.globalEval = function(e) {
    if (goog.global.execScript) goog.global.execScript(e, "JavaScript"); else {
        if (!goog.global.eval) throw Error("goog.globalEval not available");
        if (null == goog.evalWorksForGlobals_) {
            try {
                goog.global.eval("var _evalTest_ = 1;");
            } catch (e) {}
            if (void 0 !== goog.global._evalTest_) {
                try {
                    delete goog.global._evalTest_;
                } catch (e) {}
                goog.evalWorksForGlobals_ = !0;
            } else goog.evalWorksForGlobals_ = !1;
        }
        if (goog.evalWorksForGlobals_) goog.global.eval(e); else {
            var t = goog.global.document, r = t.createElement("SCRIPT");
            r.type = "text/javascript", r.defer = !1, r.appendChild(t.createTextNode(e)), t.head.appendChild(r), 
            t.head.removeChild(r);
        }
    }
}, goog.evalWorksForGlobals_ = null, goog.getCssName = function(e, t) {
    if ("." == String(e).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
    var r = function(e) {
        return goog.cssNameMapping_[e] || e;
    }, o = function(e) {
        e = e.split("-");
        for (var t = [], o = 0; o < e.length; o++) t.push(r(e[o]));
        return t.join("-");
    };
    return o = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? r : o : function(e) {
        return e;
    }, e = t ? e + "-" + o(t) : o(e), goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e) : e;
}, goog.setCssNameMapping = function(e, t) {
    goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t;
}, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), 
goog.getMsg = function(e, t) {
    return t && (e = e.replace(/\{\$([^}]+)}/g, function(e, r) {
        return null != t && r in t ? t[r] : e;
    })), e;
}, goog.getMsgWithFallback = function(e, t) {
    return e;
}, goog.exportSymbol = function(e, t, r) {
    goog.exportPath_(e, t, r);
}, goog.exportProperty = function(e, t, r) {
    e[t] = r;
}, goog.inherits = function(e, t) {
    function r() {}
    r.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new r(), e.prototype.constructor = e, 
    e.base = function(e, r, o) {
        for (var n = Array(arguments.length - 2), s = 2; s < arguments.length; s++) n[s - 2] = arguments[s];
        return t.prototype[r].apply(e, n);
    };
}, goog.base = function(e, t, r) {
    var o = arguments.callee.caller;
    if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !o) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (void 0 !== o.superClass_) {
        for (var n = Array(arguments.length - 1), s = 1; s < arguments.length; s++) n[s - 1] = arguments[s];
        return o.superClass_.constructor.apply(e, n);
    }
    if ("string" != typeof t && "symbol" != _typeof2(t)) throw Error("method names provided to goog.base must be a string or a symbol");
    for (n = Array(arguments.length - 2), s = 2; s < arguments.length; s++) n[s - 2] = arguments[s];
    s = !1;
    for (var i = e.constructor; i; i = i.superClass_ && i.superClass_.constructor) if (i.prototype[t] === o) s = !0; else if (s) return i.prototype[t].apply(e, n);
    if (e[t] === o) return e.constructor.prototype[t].apply(e, n);
    throw Error("goog.base called from a method of one name to a method of a different name");
}, goog.scope = function(e) {
    if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
    e.call(goog.global);
}, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(e, t) {
    var r = t.constructor, o = t.statics;
    return r && r != Object.prototype.constructor || (r = function() {
        throw Error("cannot instantiate an interface (no constructor defined).");
    }), r = goog.defineClass.createSealingConstructor_(r, e), e && goog.inherits(r, e), 
    delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(r.prototype, t), 
    null != o && (o instanceof Function ? o(r) : goog.defineClass.applyProperties_(r, o)), 
    r;
}, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(e, t) {
    if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
    var r = !goog.defineClass.isUnsealable_(t);
    return function t() {
        var o = e.apply(this, arguments) || this;
        return o[goog.UID_PROPERTY_] = o[goog.UID_PROPERTY_], this.constructor === t && r && Object.seal instanceof Function && Object.seal(o), 
        o;
    };
}, goog.defineClass.isUnsealable_ = function(e) {
    return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
}, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), 
goog.defineClass.applyProperties_ = function(e, t) {
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    for (var o = 0; o < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; o++) r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[o], 
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}, goog.tagUnsealableClass = function(e) {
    !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
}, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", 
!COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
    var e = goog.global.document;
    return null != e && "write" in e;
}, goog.isDocumentLoading_ = function() {
    var e = goog.global.document;
    return e.attachEvent ? "complete" != e.readyState : "loading" == e.readyState;
}, goog.findBasePath_ = function() {
    if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH; else if (goog.inHtmlDocument_()) {
        var e = goog.global.document, t = e.currentScript;
        for (t = (e = t ? [ t ] : e.getElementsByTagName("SCRIPT")).length - 1; 0 <= t; --t) {
            var r = e[t].src, o = r.lastIndexOf("?");
            if (o = -1 == o ? r.length : o, "base.js" == r.substr(o - 7, 7)) {
                goog.basePath = r.substr(0, o - 7);
                break;
            }
        }
    }
}, goog.findBasePath_(), goog.Transpiler = function() {
    this.requiresTranspilation_ = null, this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
}, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
    function a(t, r) {
        e ? d[t] = !0 : r() ? (c = t, d[t] = !1) : e = d[t] = !0;
    }
    function b(a) {
        try {
            return !!eval(a);
        } catch (e) {
            return !1;
        }
    }
    var c = "es3", d = {
        es3: !1
    }, e = !1, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
    return a("es5", function() {
        return b("[1,].length==1");
    }), a("es6", function() {
        return !f.match(/Edge\/(\d+)(\.\d)*/i) && b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
    }), a("es6-impl", function() {
        return !0;
    }), a("es7", function() {
        return b("2 ** 2 == 4");
    }), a("es8", function() {
        return b("async () => 1, true");
    }), a("es9", function() {
        return b("({...rest} = {}), true");
    }), a("es_next", function() {
        return !1;
    }), {
        target: c,
        map: d
    };
}, goog.Transpiler.prototype.needsTranspile = function(e, t) {
    if ("always" == goog.TRANSPILE) return !0;
    if ("never" == goog.TRANSPILE) return !1;
    if (!this.requiresTranspilation_) {
        var r = this.createRequiresTranspilation_();
        this.requiresTranspilation_ = r.map, this.transpilationTarget_ = this.transpilationTarget_ || r.target;
    }
    if (e in this.requiresTranspilation_) return !!this.requiresTranspilation_[e] || !(!goog.inHtmlDocument_() || "es6" != t || "noModule" in goog.global.document.createElement("script"));
    throw Error("Unknown language mode: " + e);
}, goog.Transpiler.prototype.transpile = function(e, t) {
    return goog.transpile_(e, t, this.transpilationTarget_);
}, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(e) {
    return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
}, goog.DebugLoader_ = function() {
    this.dependencies_ = {}, this.idToPath_ = {}, this.written_ = {}, this.loadingDeps_ = [], 
    this.depsToLoad_ = [], this.paused_ = !1, this.factory_ = new goog.DependencyFactory(goog.transpiler_), 
    this.deferredCallbacks_ = {}, this.deferredQueue_ = [];
}, goog.DebugLoader_.prototype.bootstrap = function(e, t) {
    function r() {
        o && (goog.global.setTimeout(o, 0), o = null);
    }
    var o = t;
    if (e.length) {
        t = [];
        for (var n = 0; n < e.length; n++) {
            var s = this.getPathFromDeps_(e[n]);
            if (!s) throw Error("Unregonized namespace: " + e[n]);
            t.push(this.dependencies_[s]);
        }
        s = goog.require;
        var i = 0;
        for (n = 0; n < e.length; n++) s(e[n]), t[n].onLoad(function() {
            ++i == e.length && r();
        });
    } else r();
}, goog.DebugLoader_.prototype.loadClosureDeps = function() {
    this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1)), 
    this.loadDeps_();
}, goog.DebugLoader_.prototype.requested = function(e, t) {
    (e = this.getPathFromDeps_(e)) && (t || this.areDepsLoaded_(this.dependencies_[e].requires)) && (t = this.deferredCallbacks_[e]) && (delete this.deferredCallbacks_[e], 
    t());
}, goog.DebugLoader_.prototype.setDependencyFactory = function(e) {
    this.factory_ = e;
}, goog.DebugLoader_.prototype.load_ = function(e) {
    if (!this.getPathFromDeps_(e)) throw e = "goog.require could not find: " + e, goog.logToConsole_(e), 
    Error(e);
    var t = this, r = [];
    !function e(o) {
        var n = t.getPathFromDeps_(o);
        if (!n) throw Error("Bad dependency path or symbol: " + o);
        if (!t.written_[n]) {
            for (t.written_[n] = !0, o = t.dependencies_[n], n = 0; n < o.requires.length; n++) goog.isProvided_(o.requires[n]) || e(o.requires[n]);
            r.push(o);
        }
    }(e), e = !!this.depsToLoad_.length, this.depsToLoad_ = this.depsToLoad_.concat(r), 
    this.paused_ || e || this.loadDeps_();
}, goog.DebugLoader_.prototype.loadDeps_ = function() {
    for (var e = this, t = this.paused_; this.depsToLoad_.length && !t; ) !function() {
        var r = !1, o = e.depsToLoad_.shift(), n = !1;
        e.loading_(o);
        var s = {
            pause: function() {
                if (r) throw Error("Cannot call pause after the call to load.");
                t = !0;
            },
            resume: function() {
                r ? e.resume_() : t = !1;
            },
            loaded: function() {
                if (n) throw Error("Double call to loaded.");
                n = !0, e.loaded_(o);
            },
            pending: function() {
                for (var t = [], r = 0; r < e.loadingDeps_.length; r++) t.push(e.loadingDeps_[r]);
                return t;
            },
            setModuleState: function(e) {
                goog.moduleLoaderState_ = {
                    type: e,
                    moduleName: "",
                    declareLegacyNamespace: !1
                };
            },
            registerEs6ModuleExports: function(e, t, r) {
                r && (goog.loadedModules_[r] = {
                    exports: t,
                    type: goog.ModuleType.ES6,
                    moduleId: r || ""
                });
            },
            registerGoogModuleExports: function(e, t) {
                goog.loadedModules_[e] = {
                    exports: t,
                    type: goog.ModuleType.GOOG,
                    moduleId: e
                };
            },
            clearModuleState: function() {
                goog.moduleLoaderState_ = null;
            },
            defer: function(t) {
                if (r) throw Error("Cannot register with defer after the call to load.");
                e.defer_(o, t);
            },
            areDepsLoaded: function() {
                return e.areDepsLoaded_(o.requires);
            }
        };
        try {
            o.load(s);
        } finally {
            r = !0;
        }
    }();
    t && this.pause_();
}, goog.DebugLoader_.prototype.pause_ = function() {
    this.paused_ = !0;
}, goog.DebugLoader_.prototype.resume_ = function() {
    this.paused_ && (this.paused_ = !1, this.loadDeps_());
}, goog.DebugLoader_.prototype.loading_ = function(e) {
    this.loadingDeps_.push(e);
}, goog.DebugLoader_.prototype.loaded_ = function(e) {
    for (var t = 0; t < this.loadingDeps_.length; t++) if (this.loadingDeps_[t] == e) {
        this.loadingDeps_.splice(t, 1);
        break;
    }
    for (t = 0; t < this.deferredQueue_.length; t++) if (this.deferredQueue_[t] == e.path) {
        this.deferredQueue_.splice(t, 1);
        break;
    }
    if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) for (;this.deferredQueue_.length; ) this.requested(this.deferredQueue_.shift(), !0);
    e.loaded();
}, goog.DebugLoader_.prototype.areDepsLoaded_ = function(e) {
    for (var t = 0; t < e.length; t++) {
        var r = this.getPathFromDeps_(e[t]);
        if (!r || !(r in this.deferredCallbacks_) && !goog.isProvided_(e[t])) return !1;
    }
    return !0;
}, goog.DebugLoader_.prototype.getPathFromDeps_ = function(e) {
    return e in this.idToPath_ ? this.idToPath_[e] : e in this.dependencies_ ? e : null;
}, goog.DebugLoader_.prototype.defer_ = function(e, t) {
    this.deferredCallbacks_[e.path] = t, this.deferredQueue_.push(e.path);
}, goog.LoadController = function() {}, goog.LoadController.prototype.pause = function() {}, 
goog.LoadController.prototype.resume = function() {}, goog.LoadController.prototype.loaded = function() {}, 
goog.LoadController.prototype.pending = function() {}, goog.LoadController.prototype.registerEs6ModuleExports = function(e, t, r) {}, 
goog.LoadController.prototype.setModuleState = function(e) {}, goog.LoadController.prototype.clearModuleState = function() {}, 
goog.LoadController.prototype.defer = function(e) {}, goog.LoadController.prototype.areDepsLoaded = function() {}, 
goog.Dependency = function(e, t, r, o, n) {
    this.path = e, this.relativePath = t, this.provides = r, this.requires = o, this.loadFlags = n, 
    this.loaded_ = !1, this.loadCallbacks_ = [];
}, goog.Dependency.prototype.getPathName = function() {
    var e = this.path, t = e.indexOf("://");
    return 0 <= t && (0 <= (t = (e = e.substring(t + 3)).indexOf("/")) && (e = e.substring(t + 1))), 
    e;
}, goog.Dependency.prototype.onLoad = function(e) {
    this.loaded_ ? e() : this.loadCallbacks_.push(e);
}, goog.Dependency.prototype.loaded = function() {
    this.loaded_ = !0;
    var e = this.loadCallbacks_;
    this.loadCallbacks_ = [];
    for (var t = 0; t < e.length; t++) e[t]();
}, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(e) {
    var t = Math.random().toString(32);
    return goog.Dependency.callbackMap_[t] = e, t;
}, goog.Dependency.unregisterCallback_ = function(e) {
    delete goog.Dependency.callbackMap_[e];
}, goog.Dependency.callback_ = function(e, t) {
    if (!(e in goog.Dependency.callbackMap_)) throw Error("Callback key " + e + " does not exist (was base.js loaded more than once?).");
    for (var r = goog.Dependency.callbackMap_[e], o = [], n = 1; n < arguments.length; n++) o.push(arguments[n]);
    r.apply(void 0, o);
}, goog.Dependency.prototype.load = function(e) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause(); else if (goog.inHtmlDocument_()) {
        var t = goog.global.document;
        if ("complete" == t.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            if (/\bdeps.js$/.test(this.path)) return void e.loaded();
            throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
            var r = goog.Dependency.registerCallback_(function(t) {
                goog.DebugLoader_.IS_OLD_IE_ && "complete" != t.readyState || (goog.Dependency.unregisterCallback_(r), 
                e.loaded());
            }), o = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
            t.write('<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + r + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + o + "><\/script>");
        } else {
            var n = t.createElement("script");
            n.defer = goog.Dependency.defer_, n.async = !1, n.type = "text/javascript", (o = goog.getScriptNonce()) && n.setAttribute("nonce", o), 
            goog.DebugLoader_.IS_OLD_IE_ ? (e.pause(), n.onreadystatechange = function() {
                "loaded" != n.readyState && "complete" != n.readyState || (e.loaded(), e.resume());
            }) : n.onload = function() {
                n.onload = null, e.loaded();
            }, n.src = this.path, t.head.appendChild(n);
        }
    } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), 
    "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), 
    e.loaded()) : e.pause();
}, goog.Es6ModuleDependency = function(e, t, r, o, n) {
    goog.Dependency.call(this, e, t, r, o, n);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(e) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause(); else if (goog.inHtmlDocument_()) {
        var t = goog.global.document, r = this;
        if (goog.isDocumentLoading_()) {
            var o = function(e, r) {
                r ? t.write('<script type="module" crossorigin>' + r + "<\/script>") : t.write('<script type="module" crossorigin src="' + e + '"><\/script>');
            };
            goog.Dependency.defer_ = !0;
        } else o = function(e, r) {
            var o = t.createElement("script");
            o.defer = !0, o.async = !1, o.type = "module", o.setAttribute("crossorigin", !0);
            var n = goog.getScriptNonce();
            n && o.setAttribute("nonce", n), r ? o.textContent = r : o.src = e, t.head.appendChild(o);
        };
        var n = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(n), e.setModuleState(goog.ModuleType.ES6);
        });
        o(void 0, 'goog.Dependency.callback_("' + n + '")'), o(this.path, void 0);
        var s = goog.Dependency.registerCallback_(function(t) {
            goog.Dependency.unregisterCallback_(s), e.registerEs6ModuleExports(r.path, t, goog.moduleLoaderState_.moduleName);
        });
        o(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + s + '", m)');
        var i = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(i), e.clearModuleState(), e.loaded();
        });
        o(void 0, 'goog.Dependency.callback_("' + i + '")');
    } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), 
    e.pause();
}, goog.TransformedDependency = function(e, t, r, o, n) {
    goog.Dependency.call(this, e, t, r, o, n), this.contents_ = null, this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(e) {
    function t() {
        o.contents_ = goog.loadFileSync_(o.path), o.contents_ && (o.contents_ = o.transform(o.contents_), 
        o.contents_ && (o.contents_ += "\n//# sourceURL=" + o.path));
    }
    function r() {
        if (o.lazyFetch_ && t(), o.contents_) {
            n && e.setModuleState(goog.ModuleType.ES6);
            try {
                var r = o.contents_;
                if (o.contents_ = null, goog.globalEval(r), n) var s = goog.moduleLoaderState_.moduleName;
            } finally {
                n && e.clearModuleState();
            }
            n && goog.global.$jscomp.require.ensure([ o.getPathName() ], function() {
                e.registerEs6ModuleExports(o.path, goog.global.$jscomp.require(o.getPathName()), s);
            }), e.loaded();
        }
    }
    var o = this;
    if (goog.global.CLOSURE_IMPORT_SCRIPT) t(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, 
    e.loaded()) : e.pause(); else {
        var n = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || t();
        var s = 1 < e.pending().length, i = s && goog.DebugLoader_.IS_OLD_IE_;
        if (s = goog.Dependency.defer_ && (s || goog.isDocumentLoading_()), i || s) e.defer(function() {
            r();
        }); else {
            var a = goog.global.document;
            if (i = goog.inHtmlDocument_() && "ActiveXObject" in goog.global, n && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !i) {
                goog.Dependency.defer_ = !0, e.pause();
                var g = a.onreadystatechange;
                a.onreadystatechange = function() {
                    "interactive" == a.readyState && (a.onreadystatechange = g, r(), e.resume()), goog.isFunction(g) && g.apply(void 0, arguments);
                };
            } else !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? function() {
                var e = goog.global.document, t = goog.Dependency.registerCallback_(function() {
                    goog.Dependency.unregisterCallback_(t), r();
                });
                e.write('<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + t + '");') + "<\/script>");
            }() : r();
        }
    }
}, goog.TransformedDependency.prototype.transform = function(e) {}, goog.TranspiledDependency = function(e, t, r, o, n, s) {
    goog.TransformedDependency.call(this, e, t, r, o, n), this.transpiler = s;
}, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(e) {
    return this.transpiler.transpile(e, this.getPathName());
}, goog.PreTranspiledEs6ModuleDependency = function(e, t, r, o, n) {
    goog.TransformedDependency.call(this, e, t, r, o, n);
}, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), 
goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(e) {
    return e;
}, goog.GoogModuleDependency = function(e, t, r, o, n, s, i) {
    goog.TransformedDependency.call(this, e, t, r, o, n), this.needsTranspile_ = s, 
    this.transpiler_ = i;
}, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(e) {
    return this.needsTranspile_ && (e = this.transpiler_.transpile(e, this.getPathName())), 
    goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(e + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + e + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), 
goog.DebugLoader_.prototype.addDependency = function(e, t, r, o) {
    t = t || [], e = e.replace(/\\/g, "/");
    var n = goog.normalizePath_(goog.basePath + e);
    for (o && "boolean" != typeof o || (o = o ? {
        module: goog.ModuleType.GOOG
    } : {}), r = this.factory_.createDependency(n, e, t, r, o, goog.transpiler_.needsTranspile(o.lang || "es3", o.module)), 
    this.dependencies_[n] = r, r = 0; r < t.length; r++) this.idToPath_[t[r]] = n;
    this.idToPath_[e] = n;
}, goog.DependencyFactory = function(e) {
    this.transpiler = e;
}, goog.DependencyFactory.prototype.createDependency = function(e, t, r, o, n, s) {
    return n.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(e, t, r, o, n, s, this.transpiler) : s ? new goog.TranspiledDependency(e, t, r, o, n, this.transpiler) : n.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(e, t, r, o, n) : new goog.Es6ModuleDependency(e, t, r, o, n) : new goog.Dependency(e, t, r, o, n);
}, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
    goog.debugLoader_.loadClosureDeps();
}, goog.setDependencyFactory = function(e) {
    goog.debugLoader_.setDependencyFactory(e);
}, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(e, t) {
    goog.debugLoader_.bootstrap(e, t);
});

var jspb = {
    BinaryConstants: {},
    ConstBinaryMessage: function() {},
    BinaryMessage: function() {}
};

jspb.BinaryConstants.FieldType = {
    INVALID: -1,
    DOUBLE: 1,
    FLOAT: 2,
    INT64: 3,
    UINT64: 4,
    INT32: 5,
    FIXED64: 6,
    FIXED32: 7,
    BOOL: 8,
    STRING: 9,
    GROUP: 10,
    MESSAGE: 11,
    BYTES: 12,
    UINT32: 13,
    ENUM: 14,
    SFIXED32: 15,
    SFIXED64: 16,
    SINT32: 17,
    SINT64: 18,
    FHASH64: 30,
    VHASH64: 31
}, jspb.BinaryConstants.WireType = {
    INVALID: -1,
    VARINT: 0,
    FIXED64: 1,
    DELIMITED: 2,
    START_GROUP: 3,
    END_GROUP: 4,
    FIXED32: 5
}, jspb.BinaryConstants.FieldTypeToWireType = function(e) {
    var t = jspb.BinaryConstants.FieldType, r = jspb.BinaryConstants.WireType;
    switch (e) {
      case t.INT32:
      case t.INT64:
      case t.UINT32:
      case t.UINT64:
      case t.SINT32:
      case t.SINT64:
      case t.BOOL:
      case t.ENUM:
      case t.VHASH64:
        return r.VARINT;

      case t.DOUBLE:
      case t.FIXED64:
      case t.SFIXED64:
      case t.FHASH64:
        return r.FIXED64;

      case t.STRING:
      case t.MESSAGE:
      case t.BYTES:
        return r.DELIMITED;

      case t.FLOAT:
      case t.FIXED32:
      case t.SFIXED32:
        return r.FIXED32;

      default:
        return r.INVALID;
    }
}, jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1, jspb.BinaryConstants.FLOAT32_EPS = 1.401298464324817e-45, 
jspb.BinaryConstants.FLOAT32_MIN = 1.1754943508222875e-38, jspb.BinaryConstants.FLOAT32_MAX = 3.4028234663852886e38, 
jspb.BinaryConstants.FLOAT64_EPS = 5e-324, jspb.BinaryConstants.FLOAT64_MIN = 2.2250738585072014e-308, 
jspb.BinaryConstants.FLOAT64_MAX = 1.7976931348623157e308, jspb.BinaryConstants.TWO_TO_20 = 1048576, 
jspb.BinaryConstants.TWO_TO_23 = 8388608, jspb.BinaryConstants.TWO_TO_31 = 2147483648, 
jspb.BinaryConstants.TWO_TO_32 = 4294967296, jspb.BinaryConstants.TWO_TO_52 = 4503599627370496, 
jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000, jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000, 
jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0", goog.dom = {}, goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
}, goog.debug = {}, goog.debug.Error = function(e) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error); else {
        var t = Error().stack;
        t && (this.stack = t);
    }
    e && (this.message = String(e)), this.reportErrorToServer = !0;
}, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", 
goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(e, t) {
    goog.debug.Error.call(this, goog.asserts.subs_(e, t)), this.messagePattern = e;
}, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", 
goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
    throw e;
}, goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER, goog.asserts.subs_ = function(e, t) {
    for (var r = "", o = (e = e.split("%s")).length - 1, n = 0; n < o; n++) r += e[n] + (n < t.length ? t[n] : "%s");
    return r + e[o];
}, goog.asserts.doAssertFailure_ = function(e, t, r, o) {
    var n = "Assertion failed";
    if (r) {
        n += ": " + r;
        var s = o;
    } else e && (n += ": " + e, s = t);
    e = new goog.asserts.AssertionError("" + n, s || []), goog.asserts.errorHandler_(e);
}, goog.asserts.setErrorHandler = function(e) {
    goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e);
}, goog.asserts.assert = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.fail = function(e, t) {
    goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)));
}, goog.asserts.assertNumber = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertString = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertFunction = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertObject = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertArray = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertBoolean = function(e, t, r) {
    return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertElement = function(e, t, r) {
    return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [ goog.typeOf(e), e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertInstanceof = function(e, t, r, o) {
    return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [ goog.asserts.getType_(t), goog.asserts.getType_(e) ], r, Array.prototype.slice.call(arguments, 3)), 
    e;
}, goog.asserts.assertFinite = function(e, t, r) {
    return !goog.asserts.ENABLE_ASSERTS || "number" == typeof e && isFinite(e) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [ e ], t, Array.prototype.slice.call(arguments, 2)), 
    e;
}, goog.asserts.assertObjectPrototypeIsIntact = function() {
    for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.");
}, goog.asserts.getType_ = function(e) {
    return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : _typeof2(e);
}, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = !1, 
goog.array.peek = function(e) {
    return e[e.length - 1];
}, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(e, t, r) {
    return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, r);
} : function(e, t, r) {
    if (r = null == r ? 0 : 0 > r ? Math.max(0, e.length + r) : r, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, r) : -1;
    for (;r < e.length; r++) if (r in e && e[r] === t) return r;
    return -1;
}, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(e, t, r) {
    return goog.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, t, null == r ? e.length - 1 : r);
} : function(e, t, r) {
    if (0 > (r = null == r ? e.length - 1 : r) && (r = Math.max(0, e.length + r)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, r) : -1;
    for (;0 <= r; r--) if (r in e && e[r] === t) return r;
    return -1;
}, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(e, t, r) {
    goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, r);
} : function(e, t, r) {
    for (var o = e.length, n = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) s in n && t.call(r, n[s], s, e);
}, goog.array.forEachRight = function(e, t, r) {
    var o = e.length, n = goog.isString(e) ? e.split("") : e;
    for (--o; 0 <= o; --o) o in n && t.call(r, n[o], o, e);
}, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(e, t, r) {
    return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, r);
} : function(e, t, r) {
    for (var o = e.length, n = [], s = 0, i = goog.isString(e) ? e.split("") : e, a = 0; a < o; a++) if (a in i) {
        var g = i[a];
        t.call(r, g, a, e) && (n[s++] = g);
    }
    return n;
}, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(e, t, r) {
    return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, t, r);
} : function(e, t, r) {
    for (var o = e.length, n = Array(o), s = goog.isString(e) ? e.split("") : e, i = 0; i < o; i++) i in s && (n[i] = t.call(r, s[i], i, e));
    return n;
}, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(e, t, r, o) {
    return goog.asserts.assert(null != e.length), o && (t = goog.bind(t, o)), Array.prototype.reduce.call(e, t, r);
} : function(e, t, r, o) {
    var n = r;
    return goog.array.forEach(e, function(r, s) {
        n = t.call(o, n, r, s, e);
    }), n;
}, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(e, t, r, o) {
    return goog.asserts.assert(null != e.length), goog.asserts.assert(null != t), o && (t = goog.bind(t, o)), 
    Array.prototype.reduceRight.call(e, t, r);
} : function(e, t, r, o) {
    var n = r;
    return goog.array.forEachRight(e, function(r, s) {
        n = t.call(o, n, r, s, e);
    }), n;
}, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(e, t, r) {
    return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, t, r);
} : function(e, t, r) {
    for (var o = e.length, n = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) if (s in n && t.call(r, n[s], s, e)) return !0;
    return !1;
}, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(e, t, r) {
    return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, t, r);
} : function(e, t, r) {
    for (var o = e.length, n = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) if (s in n && !t.call(r, n[s], s, e)) return !1;
    return !0;
}, goog.array.count = function(e, t, r) {
    var o = 0;
    return goog.array.forEach(e, function(e, n, s) {
        t.call(r, e, n, s) && ++o;
    }, r), o;
}, goog.array.find = function(e, t, r) {
    return 0 > (t = goog.array.findIndex(e, t, r)) ? null : goog.isString(e) ? e.charAt(t) : e[t];
}, goog.array.findIndex = function(e, t, r) {
    for (var o = e.length, n = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) if (s in n && t.call(r, n[s], s, e)) return s;
    return -1;
}, goog.array.findRight = function(e, t, r) {
    return 0 > (t = goog.array.findIndexRight(e, t, r)) ? null : goog.isString(e) ? e.charAt(t) : e[t];
}, goog.array.findIndexRight = function(e, t, r) {
    var o = e.length, n = goog.isString(e) ? e.split("") : e;
    for (--o; 0 <= o; o--) if (o in n && t.call(r, n[o], o, e)) return o;
    return -1;
}, goog.array.contains = function(e, t) {
    return 0 <= goog.array.indexOf(e, t);
}, goog.array.isEmpty = function(e) {
    return 0 == e.length;
}, goog.array.clear = function(e) {
    if (!goog.isArray(e)) for (var t = e.length - 1; 0 <= t; t--) delete e[t];
    e.length = 0;
}, goog.array.insert = function(e, t) {
    goog.array.contains(e, t) || e.push(t);
}, goog.array.insertAt = function(e, t, r) {
    goog.array.splice(e, r, 0, t);
}, goog.array.insertArrayAt = function(e, t, r) {
    goog.partial(goog.array.splice, e, r, 0).apply(null, t);
}, goog.array.insertBefore = function(e, t, r) {
    var o;
    2 == arguments.length || 0 > (o = goog.array.indexOf(e, r)) ? e.push(t) : goog.array.insertAt(e, t, o);
}, goog.array.remove = function(e, t) {
    var r;
    return (r = 0 <= (t = goog.array.indexOf(e, t))) && goog.array.removeAt(e, t), r;
}, goog.array.removeLast = function(e, t) {
    return 0 <= (t = goog.array.lastIndexOf(e, t)) && (goog.array.removeAt(e, t), !0);
}, goog.array.removeAt = function(e, t) {
    return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length;
}, goog.array.removeIf = function(e, t, r) {
    return 0 <= (t = goog.array.findIndex(e, t, r)) && (goog.array.removeAt(e, t), !0);
}, goog.array.removeAllIf = function(e, t, r) {
    var o = 0;
    return goog.array.forEachRight(e, function(n, s) {
        t.call(r, n, s, e) && goog.array.removeAt(e, s) && o++;
    }), o;
}, goog.array.concat = function(e) {
    return Array.prototype.concat.apply([], arguments);
}, goog.array.join = function(e) {
    return Array.prototype.concat.apply([], arguments);
}, goog.array.toArray = function(e) {
    var t = e.length;
    if (0 < t) {
        for (var r = Array(t), o = 0; o < t; o++) r[o] = e[o];
        return r;
    }
    return [];
}, goog.array.clone = goog.array.toArray, goog.array.extend = function(e, t) {
    for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        if (goog.isArrayLike(o)) {
            var n = e.length || 0, s = o.length || 0;
            e.length = n + s;
            for (var i = 0; i < s; i++) e[n + i] = o[i];
        } else e.push(o);
    }
}, goog.array.splice = function(e, t, r, o) {
    return goog.asserts.assert(null != e.length), Array.prototype.splice.apply(e, goog.array.slice(arguments, 1));
}, goog.array.slice = function(e, t, r) {
    return goog.asserts.assert(null != e.length), 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, r);
}, goog.array.removeDuplicates = function(e, t, r) {
    t = t || e;
    var o = function(e) {
        return goog.isObject(e) ? "o" + goog.getUid(e) : _typeof2(e).charAt(0) + e;
    };
    r = r || o, o = {};
    for (var n = 0, s = 0; s < e.length; ) {
        var i = e[s++], a = r(i);
        Object.prototype.hasOwnProperty.call(o, a) || (o[a] = !0, t[n++] = i);
    }
    t.length = n;
}, goog.array.binarySearch = function(e, t, r) {
    return goog.array.binarySearch_(e, r || goog.array.defaultCompare, !1, t);
}, goog.array.binarySelect = function(e, t, r) {
    return goog.array.binarySearch_(e, t, !0, void 0, r);
}, goog.array.binarySearch_ = function(e, t, r, o, n) {
    for (var s, i = 0, a = e.length; i < a; ) {
        var g = i + a >> 1, p = r ? t.call(n, e[g], g, e) : t(o, e[g]);
        0 < p ? i = g + 1 : (a = g, s = !p);
    }
    return s ? i : ~i;
}, goog.array.sort = function(e, t) {
    e.sort(t || goog.array.defaultCompare);
}, goog.array.stableSort = function(e, t) {
    for (var r = Array(e.length), o = 0; o < e.length; o++) r[o] = {
        index: o,
        value: e[o]
    };
    var n = t || goog.array.defaultCompare;
    for (goog.array.sort(r, function(e, t) {
        return n(e.value, t.value) || e.index - t.index;
    }), o = 0; o < e.length; o++) e[o] = r[o].value;
}, goog.array.sortByKey = function(e, t, r) {
    var o = r || goog.array.defaultCompare;
    goog.array.sort(e, function(e, r) {
        return o(t(e), t(r));
    });
}, goog.array.sortObjectsByKey = function(e, t, r) {
    goog.array.sortByKey(e, function(e) {
        return e[t];
    }, r);
}, goog.array.isSorted = function(e, t, r) {
    t = t || goog.array.defaultCompare;
    for (var o = 1; o < e.length; o++) {
        var n = t(e[o - 1], e[o]);
        if (0 < n || 0 == n && r) return !1;
    }
    return !0;
}, goog.array.equals = function(e, t, r) {
    if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
    var o = e.length;
    r = r || goog.array.defaultCompareEquality;
    for (var n = 0; n < o; n++) if (!r(e[n], t[n])) return !1;
    return !0;
}, goog.array.compare3 = function(e, t, r) {
    r = r || goog.array.defaultCompare;
    for (var o = Math.min(e.length, t.length), n = 0; n < o; n++) {
        var s = r(e[n], t[n]);
        if (0 != s) return s;
    }
    return goog.array.defaultCompare(e.length, t.length);
}, goog.array.defaultCompare = function(e, t) {
    return e > t ? 1 : e < t ? -1 : 0;
}, goog.array.inverseDefaultCompare = function(e, t) {
    return -goog.array.defaultCompare(e, t);
}, goog.array.defaultCompareEquality = function(e, t) {
    return e === t;
}, goog.array.binaryInsert = function(e, t, r) {
    return 0 > (r = goog.array.binarySearch(e, t, r)) && (goog.array.insertAt(e, t, -(r + 1)), 
    !0);
}, goog.array.binaryRemove = function(e, t, r) {
    return 0 <= (t = goog.array.binarySearch(e, t, r)) && goog.array.removeAt(e, t);
}, goog.array.bucket = function(e, t, r) {
    for (var o = {}, n = 0; n < e.length; n++) {
        var s = e[n], i = t.call(r, s, n, e);
        goog.isDef(i) && (o[i] || (o[i] = [])).push(s);
    }
    return o;
}, goog.array.toObject = function(e, t, r) {
    var o = {};
    return goog.array.forEach(e, function(n, s) {
        o[t.call(r, n, s, e)] = n;
    }), o;
}, goog.array.range = function(e, t, r) {
    var o = [], n = 0, s = e;
    if (void 0 !== t && (n = e, s = t), 0 > (r = r || 1) * (s - n)) return [];
    if (0 < r) for (e = n; e < s; e += r) o.push(e); else for (e = n; e > s; e += r) o.push(e);
    return o;
}, goog.array.repeat = function(e, t) {
    for (var r = [], o = 0; o < t; o++) r[o] = e;
    return r;
}, goog.array.flatten = function(e) {
    for (var t = [], r = 0; r < arguments.length; r++) {
        var o = arguments[r];
        if (goog.isArray(o)) for (var n = 0; n < o.length; n += 8192) {
            var s = goog.array.slice(o, n, n + 8192);
            s = goog.array.flatten.apply(null, s);
            for (var i = 0; i < s.length; i++) t.push(s[i]);
        } else t.push(o);
    }
    return t;
}, goog.array.rotate = function(e, t) {
    return goog.asserts.assert(null != e.length), e.length && (0 < (t %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))), 
    e;
}, goog.array.moveItem = function(e, t, r) {
    goog.asserts.assert(0 <= t && t < e.length), goog.asserts.assert(0 <= r && r < e.length), 
    t = Array.prototype.splice.call(e, t, 1), Array.prototype.splice.call(e, r, 0, t[0]);
}, goog.array.zip = function(e) {
    if (!arguments.length) return [];
    for (var t = [], r = arguments[0].length, o = 1; o < arguments.length; o++) arguments[o].length < r && (r = arguments[o].length);
    for (o = 0; o < r; o++) {
        for (var n = [], s = 0; s < arguments.length; s++) n.push(arguments[s][o]);
        t.push(n);
    }
    return t;
}, goog.array.shuffle = function(e, t) {
    t = t || Math.random;
    for (var r = e.length - 1; 0 < r; r--) {
        var o = Math.floor(t() * (r + 1)), n = e[r];
        e[r] = e[o], e[o] = n;
    }
}, goog.array.copyByIndex = function(e, t) {
    var r = [];
    return goog.array.forEach(t, function(t) {
        r.push(e[t]);
    }), r;
}, goog.array.concatMap = function(e, t, r) {
    return goog.array.concat.apply([], goog.array.map(e, t, r));
}, goog.crypt = {}, goog.crypt.stringToByteArray = function(e) {
    for (var t = [], r = 0, o = 0; o < e.length; o++) {
        var n = e.charCodeAt(o);
        255 < n && (t[r++] = 255 & n, n >>= 8), t[r++] = n;
    }
    return t;
}, goog.crypt.byteArrayToString = function(e) {
    if (8192 >= e.length) return String.fromCharCode.apply(null, e);
    for (var t = "", r = 0; r < e.length; r += 8192) {
        var o = goog.array.slice(e, r, r + 8192);
        t += String.fromCharCode.apply(null, o);
    }
    return t;
}, goog.crypt.byteArrayToHex = function(e, t) {
    return goog.array.map(e, function(e) {
        return 1 < (e = e.toString(16)).length ? e : "0" + e;
    }).join(t || "");
}, goog.crypt.hexToByteArray = function(e) {
    goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
    for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substring(r, r + 2), 16));
    return t;
}, goog.crypt.stringToUtf8ByteArray = function(e) {
    for (var t = [], r = 0, o = 0; o < e.length; o++) {
        var n = e.charCodeAt(o);
        128 > n ? t[r++] = n : (2048 > n ? t[r++] = n >> 6 | 192 : (55296 == (64512 & n) && o + 1 < e.length && 56320 == (64512 & e.charCodeAt(o + 1)) ? (n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++o)), 
        t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128) : t[r++] = n >> 12 | 224, t[r++] = n >> 6 & 63 | 128), 
        t[r++] = 63 & n | 128);
    }
    return t;
}, goog.crypt.utf8ByteArrayToString = function(e) {
    for (var t = [], r = 0, o = 0; r < e.length; ) {
        var n = e[r++];
        if (128 > n) t[o++] = String.fromCharCode(n); else if (191 < n && 224 > n) {
            var s = e[r++];
            t[o++] = String.fromCharCode((31 & n) << 6 | 63 & s);
        } else if (239 < n && 365 > n) {
            s = e[r++];
            var i = e[r++];
            n = ((7 & n) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & e[r++]) - 65536, t[o++] = String.fromCharCode(55296 + (n >> 10)), 
            t[o++] = String.fromCharCode(56320 + (1023 & n));
        } else s = e[r++], i = e[r++], t[o++] = String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | 63 & i);
    }
    return t.join("");
}, goog.crypt.xorByteArray = function(e, t) {
    goog.asserts.assert(e.length == t.length, "XOR array lengths must match");
    for (var r = [], o = 0; o < e.length; o++) r.push(e[o] ^ t[o]);
    return r;
}, goog.string = {}, goog.string.internal = {}, goog.string.internal.startsWith = function(e, t) {
    return 0 == e.lastIndexOf(t, 0);
}, goog.string.internal.endsWith = function(e, t) {
    var r = e.length - t.length;
    return 0 <= r && e.indexOf(t, r) == r;
}, goog.string.internal.caseInsensitiveStartsWith = function(e, t) {
    return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(0, t.length));
}, goog.string.internal.caseInsensitiveEndsWith = function(e, t) {
    return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length));
}, goog.string.internal.caseInsensitiveEquals = function(e, t) {
    return e.toLowerCase() == t.toLowerCase();
}, goog.string.internal.isEmptyOrWhitespace = function(e) {
    return /^[\s\xa0]*$/.test(e);
}, goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(e) {
    return e.trim();
} : function(e) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1];
}, goog.string.internal.caseInsensitiveCompare = function(e, t) {
    return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase()) ? -1 : e == t ? 0 : 1;
}, goog.string.internal.newLineToBr = function(e, t) {
    return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>");
}, goog.string.internal.htmlEscape = function(e, t) {
    if (t) e = e.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;"); else {
        if (!goog.string.internal.ALL_RE_.test(e)) return e;
        -1 != e.indexOf("&") && (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")), 
        -1 != e.indexOf("<") && (e = e.replace(goog.string.internal.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.internal.GT_RE_, "&gt;")), 
        -1 != e.indexOf('"') && (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")), 
        -1 != e.indexOf("'") && (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")), 
        -1 != e.indexOf("\0") && (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"));
    }
    return e;
}, goog.string.internal.AMP_RE_ = /&/g, goog.string.internal.LT_RE_ = /</g, goog.string.internal.GT_RE_ = />/g, 
goog.string.internal.QUOT_RE_ = /"/g, goog.string.internal.SINGLE_QUOTE_RE_ = /'/g, 
goog.string.internal.NULL_RE_ = /\x00/g, goog.string.internal.ALL_RE_ = /[\x00&<>"']/, 
goog.string.internal.whitespaceEscape = function(e, t) {
    return goog.string.internal.newLineToBr(e.replace(/  /g, " &#160;"), t);
}, goog.string.internal.contains = function(e, t) {
    return -1 != e.indexOf(t);
}, goog.string.internal.caseInsensitiveContains = function(e, t) {
    return goog.string.internal.contains(e.toLowerCase(), t.toLowerCase());
}, goog.string.internal.compareVersions = function(e, t) {
    var r = 0;
    e = goog.string.internal.trim(String(e)).split("."), t = goog.string.internal.trim(String(t)).split(".");
    for (var o = Math.max(e.length, t.length), n = 0; 0 == r && n < o; n++) {
        var s = e[n] || "", i = t[n] || "";
        do {
            if (s = /(\d*)(\D*)(.*)/.exec(s) || [ "", "", "", "" ], i = /(\d*)(\D*)(.*)/.exec(i) || [ "", "", "", "" ], 
            0 == s[0].length && 0 == i[0].length) break;
            r = 0 == s[1].length ? 0 : parseInt(s[1], 10);
            var a = 0 == i[1].length ? 0 : parseInt(i[1], 10);
            r = goog.string.internal.compareElements_(r, a) || goog.string.internal.compareElements_(0 == s[2].length, 0 == i[2].length) || goog.string.internal.compareElements_(s[2], i[2]), 
            s = s[3], i = i[3];
        } while (0 == r);
    }
    return r;
}, goog.string.internal.compareElements_ = function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, 
goog.string.Unicode = {
    NBSP: " "
}, goog.string.startsWith = goog.string.internal.startsWith, goog.string.endsWith = goog.string.internal.endsWith, 
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith, 
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith, 
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals, 
goog.string.subs = function(e, t) {
    for (var r = e.split("%s"), o = "", n = Array.prototype.slice.call(arguments, 1); n.length && 1 < r.length; ) o += r.shift() + n.shift();
    return o + r.join("%s");
}, goog.string.collapseWhitespace = function(e) {
    return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
}, goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace, goog.string.isEmptyString = function(e) {
    return 0 == e.length;
}, goog.string.isEmpty = goog.string.isEmptyOrWhitespace, goog.string.isEmptyOrWhitespaceSafe = function(e) {
    return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e));
}, goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe, goog.string.isBreakingWhitespace = function(e) {
    return !/[^\t\n\r ]/.test(e);
}, goog.string.isAlpha = function(e) {
    return !/[^a-zA-Z]/.test(e);
}, goog.string.isNumeric = function(e) {
    return !/[^0-9]/.test(e);
}, goog.string.isAlphaNumeric = function(e) {
    return !/[^a-zA-Z0-9]/.test(e);
}, goog.string.isSpace = function(e) {
    return " " == e;
}, goog.string.isUnicodeChar = function(e) {
    return 1 == e.length && " " <= e && "~" >= e || "" <= e && "�" >= e;
}, goog.string.stripNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)+/g, " ");
}, goog.string.canonicalizeNewlines = function(e) {
    return e.replace(/(\r\n|\r|\n)/g, "\n");
}, goog.string.normalizeWhitespace = function(e) {
    return e.replace(/\xa0|\s/g, " ");
}, goog.string.normalizeSpaces = function(e) {
    return e.replace(/\xa0|[ \t]+/g, " ");
}, goog.string.collapseBreakingSpaces = function(e) {
    return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}, goog.string.trim = goog.string.internal.trim, goog.string.trimLeft = function(e) {
    return e.replace(/^[\s\xa0]+/, "");
}, goog.string.trimRight = function(e) {
    return e.replace(/[\s\xa0]+$/, "");
}, goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare, 
goog.string.numberAwareCompare_ = function(e, t, r) {
    if (e == t) return 0;
    if (!e) return -1;
    if (!t) return 1;
    for (var o = e.toLowerCase().match(r), n = t.toLowerCase().match(r), s = Math.min(o.length, n.length), i = 0; i < s; i++) {
        r = o[i];
        var a = n[i];
        if (r != a) return e = parseInt(r, 10), !isNaN(e) && (t = parseInt(a, 10), !isNaN(t) && e - t) ? e - t : r < a ? -1 : 1;
    }
    return o.length != n.length ? o.length - n.length : e < t ? -1 : 1;
}, goog.string.intAwareCompare = function(e, t) {
    return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g);
}, goog.string.floatAwareCompare = function(e, t) {
    return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g);
}, goog.string.numerateCompare = goog.string.floatAwareCompare, goog.string.urlEncode = function(e) {
    return encodeURIComponent(String(e));
}, goog.string.urlDecode = function(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
}, goog.string.newLineToBr = goog.string.internal.newLineToBr, goog.string.htmlEscape = function(e, t) {
    return e = goog.string.internal.htmlEscape(e, t), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;")), 
    e;
}, goog.string.E_RE_ = /e/g, goog.string.unescapeEntities = function(e) {
    return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e;
}, goog.string.unescapeEntitiesWithDocument = function(e, t) {
    return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e;
}, goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
    var r = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, o = t ? t.createElement("div") : goog.global.document.createElement("div");
    return e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
        var n = r[e];
        return n || ("#" == t.charAt(0) && (t = Number("0" + t.substr(1)), isNaN(t) || (n = String.fromCharCode(t))), 
        n || (o.innerHTML = e + " ", n = o.firstChild.nodeValue.slice(0, -1)), r[e] = n);
    });
}, goog.string.unescapePureXmlEntities_ = function(e) {
    return e.replace(/&([^;]+);/g, function(e, t) {
        switch (t) {
          case "amp":
            return "&";

          case "lt":
            return "<";

          case "gt":
            return ">";

          case "quot":
            return '"';

          default:
            return "#" != t.charAt(0) || (t = Number("0" + t.substr(1)), isNaN(t)) ? e : String.fromCharCode(t);
        }
    });
}, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(e, t) {
    return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t);
}, goog.string.preserveSpaces = function(e) {
    return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
}, goog.string.stripQuotes = function(e, t) {
    for (var r = t.length, o = 0; o < r; o++) {
        var n = 1 == r ? t : t.charAt(o);
        if (e.charAt(0) == n && e.charAt(e.length - 1) == n) return e.substring(1, e.length - 1);
    }
    return e;
}, goog.string.truncate = function(e, t, r) {
    return r && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), 
    r && (e = goog.string.htmlEscape(e)), e;
}, goog.string.truncateMiddle = function(e, t, r, o) {
    if (r && (e = goog.string.unescapeEntities(e)), o && e.length > t) {
        o > t && (o = t);
        var n = e.length - o;
        e = e.substring(0, t - o) + "..." + e.substring(n);
    } else e.length > t && (o = Math.floor(t / 2), n = e.length - o, e = e.substring(0, o + t % 2) + "..." + e.substring(n));
    return r && (e = goog.string.htmlEscape(e)), e;
}, goog.string.specialEscapeChars_ = {
    "\0": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\v": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "<"
}, goog.string.jsEscapeCache_ = {
    "'": "\\'"
}, goog.string.quote = function(e) {
    e = String(e);
    for (var t = [ '"' ], r = 0; r < e.length; r++) {
        var o = e.charAt(r), n = o.charCodeAt(0);
        t[r + 1] = goog.string.specialEscapeChars_[o] || (31 < n && 127 > n ? o : goog.string.escapeChar(o));
    }
    return t.push('"'), t.join("");
}, goog.string.escapeString = function(e) {
    for (var t = [], r = 0; r < e.length; r++) t[r] = goog.string.escapeChar(e.charAt(r));
    return t.join("");
}, goog.string.escapeChar = function(e) {
    if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
    if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
    var t = e.charCodeAt(0);
    if (31 < t && 127 > t) var r = e; else 256 > t ? (r = "\\x", (16 > t || 256 < t) && (r += "0")) : (r = "\\u", 
    4096 > t && (r += "0")), r += t.toString(16).toUpperCase();
    return goog.string.jsEscapeCache_[e] = r;
}, goog.string.contains = goog.string.internal.contains, goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains, 
goog.string.countOf = function(e, t) {
    return e && t ? e.split(t).length - 1 : 0;
}, goog.string.removeAt = function(e, t, r) {
    var o = e;
    return 0 <= t && t < e.length && 0 < r && (o = e.substr(0, t) + e.substr(t + r, e.length - t - r)), 
    o;
}, goog.string.remove = function(e, t) {
    return e.replace(t, "");
}, goog.string.removeAll = function(e, t) {
    return t = new RegExp(goog.string.regExpEscape(t), "g"), e.replace(t, "");
}, goog.string.replaceAll = function(e, t, r) {
    return t = new RegExp(goog.string.regExpEscape(t), "g"), e.replace(t, r.replace(/\$/g, "$$$$"));
}, goog.string.regExpEscape = function(e) {
    return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
}, goog.string.repeat = String.prototype.repeat ? function(e, t) {
    return e.repeat(t);
} : function(e, t) {
    return Array(t + 1).join(e);
}, goog.string.padNumber = function(e, t, r) {
    return -1 == (r = (e = goog.isDef(r) ? e.toFixed(r) : String(e)).indexOf(".")) && (r = e.length), 
    goog.string.repeat("0", Math.max(0, t - r)) + e;
}, goog.string.makeSafe = function(e) {
    return null == e ? "" : String(e);
}, goog.string.buildString = function(e) {
    return Array.prototype.join.call(arguments, "");
}, goog.string.getRandomString = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
}, goog.string.compareVersions = goog.string.internal.compareVersions, goog.string.hashCode = function(e) {
    for (var t = 0, r = 0; r < e.length; ++r) t = 31 * t + e.charCodeAt(r) >>> 0;
    return t;
}, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
    return "goog_" + goog.string.uniqueStringCounter_++;
}, goog.string.toNumber = function(e) {
    var t = Number(e);
    return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t;
}, goog.string.isLowerCamelCase = function(e) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(e);
}, goog.string.isUpperCamelCase = function(e) {
    return /^([A-Z][a-z]*)+$/.test(e);
}, goog.string.toCamelCase = function(e) {
    return String(e).replace(/\-([a-z])/g, function(e, t) {
        return t.toUpperCase();
    });
}, goog.string.toSelectorCase = function(e) {
    return String(e).replace(/([A-Z])/g, "-$1").toLowerCase();
}, goog.string.toTitleCase = function(e, t) {
    return t = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s", e.replace(new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"), function(e, t, r) {
        return t + r.toUpperCase();
    });
}, goog.string.capitalize = function(e) {
    return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase();
}, goog.string.parseInt = function(e) {
    return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN;
}, goog.string.splitLimit = function(e, t, r) {
    e = e.split(t);
    for (var o = []; 0 < r && e.length; ) o.push(e.shift()), r--;
    return e.length && o.push(e.join(t)), o;
}, goog.string.lastComponent = function(e, t) {
    if (!t) return e;
    "string" == typeof t && (t = [ t ]);
    for (var r = -1, o = 0; o < t.length; o++) if ("" != t[o]) {
        var n = e.lastIndexOf(t[o]);
        n > r && (r = n);
    }
    return -1 == r ? e : e.slice(r + 1);
}, goog.string.editDistance = function(e, t) {
    var r = [], o = [];
    if (e == t) return 0;
    if (!e.length || !t.length) return Math.max(e.length, t.length);
    for (var n = 0; n < t.length + 1; n++) r[n] = n;
    for (n = 0; n < e.length; n++) {
        o[0] = n + 1;
        for (var s = 0; s < t.length; s++) o[s + 1] = Math.min(o[s] + 1, r[s + 1] + 1, r[s] + Number(e[n] != t[s]));
        for (s = 0; s < r.length; s++) r[s] = o[s];
    }
    return o[t.length];
}, goog.labs = {}, goog.labs.userAgent = {}, goog.labs.userAgent.util = {}, goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
    var e = goog.labs.userAgent.util.getNavigator_();
    return e && (e = e.userAgent) ? e : "";
}, goog.labs.userAgent.util.getNavigator_ = function() {
    return goog.global.navigator;
}, goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(), 
goog.labs.userAgent.util.setUserAgent = function(e) {
    goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_();
}, goog.labs.userAgent.util.getUserAgent = function() {
    return goog.labs.userAgent.util.userAgent_;
}, goog.labs.userAgent.util.matchUserAgent = function(e) {
    var t = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.contains(t, e);
}, goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(e) {
    var t = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.caseInsensitiveContains(t, e);
}, goog.labs.userAgent.util.extractVersionTuples = function(e) {
    for (var t, r = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, o = []; t = r.exec(e); ) o.push([ t[1], t[2], t[3] || void 0 ]);
    return o;
}, goog.labs.userAgent.platform = {}, goog.labs.userAgent.platform.isAndroid = function() {
    return goog.labs.userAgent.util.matchUserAgent("Android");
}, goog.labs.userAgent.platform.isIpod = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPod");
}, goog.labs.userAgent.platform.isIphone = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
}, goog.labs.userAgent.platform.isIpad = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPad");
}, goog.labs.userAgent.platform.isIos = function() {
    return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
}, goog.labs.userAgent.platform.isMacintosh = function() {
    return goog.labs.userAgent.util.matchUserAgent("Macintosh");
}, goog.labs.userAgent.platform.isLinux = function() {
    return goog.labs.userAgent.util.matchUserAgent("Linux");
}, goog.labs.userAgent.platform.isWindows = function() {
    return goog.labs.userAgent.util.matchUserAgent("Windows");
}, goog.labs.userAgent.platform.isChromeOS = function() {
    return goog.labs.userAgent.util.matchUserAgent("CrOS");
}, goog.labs.userAgent.platform.isChromecast = function() {
    return goog.labs.userAgent.util.matchUserAgent("CrKey");
}, goog.labs.userAgent.platform.isKaiOS = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
}, goog.labs.userAgent.platform.isGo2Phone = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
}, goog.labs.userAgent.platform.getVersion = function() {
    var e = goog.labs.userAgent.util.getUserAgent(), t = "";
    return goog.labs.userAgent.platform.isWindows() ? t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? t = (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isAndroid() ? t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]), 
    t || "";
}, goog.labs.userAgent.platform.isVersionOrHigher = function(e) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e);
}, goog.object = {}, goog.object.is = function(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}, goog.object.forEach = function(e, t, r) {
    for (var o in e) t.call(r, e[o], o, e);
}, goog.object.filter = function(e, t, r) {
    var o, n = {};
    for (o in e) t.call(r, e[o], o, e) && (n[o] = e[o]);
    return n;
}, goog.object.map = function(e, t, r) {
    var o, n = {};
    for (o in e) n[o] = t.call(r, e[o], o, e);
    return n;
}, goog.object.some = function(e, t, r) {
    for (var o in e) if (t.call(r, e[o], o, e)) return !0;
    return !1;
}, goog.object.every = function(e, t, r) {
    for (var o in e) if (!t.call(r, e[o], o, e)) return !1;
    return !0;
}, goog.object.getCount = function(e) {
    var t, r = 0;
    for (t in e) r++;
    return r;
}, goog.object.getAnyKey = function(e) {
    for (var t in e) return t;
}, goog.object.getAnyValue = function(e) {
    for (var t in e) return e[t];
}, goog.object.contains = function(e, t) {
    return goog.object.containsValue(e, t);
}, goog.object.getValues = function(e) {
    var t, r = [], o = 0;
    for (t in e) r[o++] = e[t];
    return r;
}, goog.object.getKeys = function(e) {
    var t, r = [], o = 0;
    for (t in e) r[o++] = t;
    return r;
}, goog.object.getValueByKeys = function(e, t) {
    var r = goog.isArrayLike(t), o = r ? t : arguments;
    for (r = r ? 0 : 1; r < o.length; r++) {
        if (null == e) return;
        e = e[o[r]];
    }
    return e;
}, goog.object.containsKey = function(e, t) {
    return null !== e && t in e;
}, goog.object.containsValue = function(e, t) {
    for (var r in e) if (e[r] == t) return !0;
    return !1;
}, goog.object.findKey = function(e, t, r) {
    for (var o in e) if (t.call(r, e[o], o, e)) return o;
}, goog.object.findValue = function(e, t, r) {
    return (t = goog.object.findKey(e, t, r)) && e[t];
}, goog.object.isEmpty = function(e) {
    for (var t in e) return !1;
    return !0;
}, goog.object.clear = function(e) {
    for (var t in e) delete e[t];
}, goog.object.remove = function(e, t) {
    var r;
    return (r = t in e) && delete e[t], r;
}, goog.object.add = function(e, t, r) {
    if (null !== e && t in e) throw Error('The object already contains the key "' + t + '"');
    goog.object.set(e, t, r);
}, goog.object.get = function(e, t, r) {
    return null !== e && t in e ? e[t] : r;
}, goog.object.set = function(e, t, r) {
    e[t] = r;
}, goog.object.setIfUndefined = function(e, t, r) {
    return t in e ? e[t] : e[t] = r;
}, goog.object.setWithReturnValueIfNotSet = function(e, t, r) {
    return t in e ? e[t] : (r = r(), e[t] = r);
}, goog.object.equals = function(e, t) {
    for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
    for (r in t) if (!(r in e)) return !1;
    return !0;
}, goog.object.clone = function(e) {
    var t, r = {};
    for (t in e) r[t] = e[t];
    return r;
}, goog.object.unsafeClone = function(e) {
    var t = goog.typeOf(e);
    if ("object" == t || "array" == t) {
        if (goog.isFunction(e.clone)) return e.clone();
        for (var r in t = "array" == t ? [] : {}, e) t[r] = goog.object.unsafeClone(e[r]);
        return t;
    }
    return e;
}, goog.object.transpose = function(e) {
    var t, r = {};
    for (t in e) r[e[t]] = t;
    return r;
}, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), 
goog.object.extend = function(e, t) {
    for (var r, o, n = 1; n < arguments.length; n++) {
        for (r in o = arguments[n]) e[r] = o[r];
        for (var s = 0; s < goog.object.PROTOTYPE_FIELDS_.length; s++) r = goog.object.PROTOTYPE_FIELDS_[s], 
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
}, goog.object.create = function(e) {
    var t = arguments.length;
    if (1 == t && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
    if (t % 2) throw Error("Uneven number of arguments");
    for (var r = {}, o = 0; o < t; o += 2) r[arguments[o]] = arguments[o + 1];
    return r;
}, goog.object.createSet = function(e) {
    var t = arguments.length;
    if (1 == t && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
    for (var r = {}, o = 0; o < t; o++) r[arguments[o]] = !0;
    return r;
}, goog.object.createImmutableView = function(e) {
    var t = e;
    return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), 
    t;
}, goog.object.isImmutableView = function(e) {
    return !!Object.isFrozen && Object.isFrozen(e);
}, goog.object.getAllPropertyNames = function(e, t, r) {
    if (!e) return [];
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(e);
    for (var o = {}; e && (e !== Object.prototype || t) && (e !== Function.prototype || r); ) {
        for (var n = Object.getOwnPropertyNames(e), s = 0; s < n.length; s++) o[n[s]] = !0;
        e = Object.getPrototypeOf(e);
    }
    return goog.object.getKeys(o);
}, goog.labs.userAgent.browser = {}, goog.labs.userAgent.browser.matchOpera_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Opera");
}, goog.labs.userAgent.browser.matchIE_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
}, goog.labs.userAgent.browser.matchEdge_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edge");
}, goog.labs.userAgent.browser.matchFirefox_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
}, goog.labs.userAgent.browser.matchSafari_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdge_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
}, goog.labs.userAgent.browser.matchCoast_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Coast");
}, goog.labs.userAgent.browser.matchIosWebview_ = function() {
    return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
}, goog.labs.userAgent.browser.matchChrome_ = function() {
    return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdge_();
}, goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
}, goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_, 
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_, goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdge_, 
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_, 
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_, 
goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_, goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_, 
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_, 
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_, 
goog.labs.userAgent.browser.isSilk = function() {
    return goog.labs.userAgent.util.matchUserAgent("Silk");
}, goog.labs.userAgent.browser.getVersion = function() {
    function e(e) {
        return e = goog.array.find(e, o), r[e] || "";
    }
    var t = goog.labs.userAgent.util.getUserAgent();
    if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(t);
    t = goog.labs.userAgent.util.extractVersionTuples(t);
    var r = {};
    goog.array.forEach(t, function(e) {
        r[e[0]] = e[1];
    });
    var o = goog.partial(goog.object.containsKey, r);
    return goog.labs.userAgent.browser.isOpera() ? e([ "Version", "Opera" ]) : goog.labs.userAgent.browser.isEdge() ? e([ "Edge" ]) : goog.labs.userAgent.browser.isChrome() ? e([ "Chrome", "CriOS" ]) : (t = t[2]) && t[1] || "";
}, goog.labs.userAgent.browser.isVersionOrHigher = function(e) {
    return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), e);
}, goog.labs.userAgent.browser.getIEVersion_ = function(e) {
    var t = /rv: *([\d\.]*)/.exec(e);
    if (t && t[1]) return t[1];
    t = "";
    var r = /MSIE +([\d\.]+)/.exec(e);
    if (r && r[1]) if (e = /Trident\/(\d.\d)/.exec(e), "7.0" == r[1]) if (e && e[1]) switch (e[1]) {
      case "4.0":
        t = "8.0";
        break;

      case "5.0":
        t = "9.0";
        break;

      case "6.0":
        t = "10.0";
        break;

      case "7.0":
        t = "11.0";
    } else t = "7.0"; else t = r[1];
    return t;
}, goog.reflect = {}, goog.reflect.object = function(e, t) {
    return t;
}, goog.reflect.objectProperty = function(e, t) {
    return e;
}, goog.reflect.sinkValue = function(e) {
    return goog.reflect.sinkValue[" "](e), e;
}, goog.reflect.sinkValue[" "] = goog.nullFunction, goog.reflect.canAccessProperty = function(e, t) {
    try {
        return goog.reflect.sinkValue(e[t]), !0;
    } catch (e) {}
    return !1;
}, goog.reflect.cache = function(e, t, r, o) {
    return o = o ? o(t) : t, Object.prototype.hasOwnProperty.call(e, o) ? e[o] : e[o] = r(t);
}, goog.labs.userAgent.engine = {}, goog.labs.userAgent.engine.isPresto = function() {
    return goog.labs.userAgent.util.matchUserAgent("Presto");
}, goog.labs.userAgent.engine.isTrident = function() {
    return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
}, goog.labs.userAgent.engine.isEdge = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edge");
}, goog.labs.userAgent.engine.isWebKit = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
}, goog.labs.userAgent.engine.isGecko = function() {
    return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
}, goog.labs.userAgent.engine.getVersion = function() {
    var e = goog.labs.userAgent.util.getUserAgent();
    if (e) {
        e = goog.labs.userAgent.util.extractVersionTuples(e);
        var t, r = goog.labs.userAgent.engine.getEngineTuple_(e);
        if (r) return "Gecko" == r[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox") : r[1];
        if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t))) return t[1];
    }
    return "";
}, goog.labs.userAgent.engine.getEngineTuple_ = function(e) {
    if (!goog.labs.userAgent.engine.isEdge()) return e[1];
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if ("Edge" == r[0]) return r;
    }
}, goog.labs.userAgent.engine.isVersionOrHigher = function(e) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e);
}, goog.labs.userAgent.engine.getVersionForKey_ = function(e, t) {
    return (e = goog.array.find(e, function(e) {
        return t == e[0];
    })) && e[1] || "";
}, goog.userAgent = {}, goog.userAgent.ASSUME_IE = !1, goog.userAgent.ASSUME_EDGE = !1, 
goog.userAgent.ASSUME_GECKO = !1, goog.userAgent.ASSUME_WEBKIT = !1, goog.userAgent.ASSUME_MOBILE_WEBKIT = !1, 
goog.userAgent.ASSUME_OPERA = !1, goog.userAgent.ASSUME_ANY_VERSION = !1, goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA, 
goog.userAgent.getUserAgentString = function() {
    return goog.labs.userAgent.util.getUserAgent();
}, goog.userAgent.getNavigatorTyped = function() {
    return goog.global.navigator || null;
}, goog.userAgent.getNavigator = function() {
    return goog.userAgent.getNavigatorTyped();
}, goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(), 
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(), 
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(), 
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE, goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(), 
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(), 
goog.userAgent.isMobile_ = function() {
    return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
}, goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(), 
goog.userAgent.SAFARI = goog.userAgent.WEBKIT, goog.userAgent.determinePlatform_ = function() {
    var e = goog.userAgent.getNavigatorTyped();
    return e && e.platform || "";
}, goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(), goog.userAgent.ASSUME_MAC = !1, 
goog.userAgent.ASSUME_WINDOWS = !1, goog.userAgent.ASSUME_LINUX = !1, goog.userAgent.ASSUME_X11 = !1, 
goog.userAgent.ASSUME_ANDROID = !1, goog.userAgent.ASSUME_IPHONE = !1, goog.userAgent.ASSUME_IPAD = !1, 
goog.userAgent.ASSUME_IPOD = !1, goog.userAgent.ASSUME_KAIOS = !1, goog.userAgent.ASSUME_GO2PHONE = !1, 
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD, 
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(), 
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(), 
goog.userAgent.isLegacyLinux_ = function() {
    return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
}, goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(), 
goog.userAgent.isX11_ = function() {
    var e = goog.userAgent.getNavigatorTyped();
    return !!e && goog.string.contains(e.appVersion || "", "X11");
}, goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(), 
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(), 
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(), 
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), 
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod(), 
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos(), 
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS(), 
goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone(), 
goog.userAgent.determineVersion_ = function() {
    var e = "", t = goog.userAgent.getVersionRegexResult_();
    return t && (e = t ? t[1] : ""), goog.userAgent.IE && (null != (t = goog.userAgent.getDocumentMode_()) && t > parseFloat(e)) ? String(t) : e;
}, goog.userAgent.getVersionRegexResult_ = function() {
    var e = goog.userAgent.getUserAgentString();
    return goog.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : goog.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0;
}, goog.userAgent.getDocumentMode_ = function() {
    var e = goog.global.document;
    return e ? e.documentMode : void 0;
}, goog.userAgent.VERSION = goog.userAgent.determineVersion_(), goog.userAgent.compare = function(e, t) {
    return goog.string.compareVersions(e, t);
}, goog.userAgent.isVersionOrHigherCache_ = {}, goog.userAgent.isVersionOrHigher = function(e) {
    return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, e, function() {
        return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e);
    });
}, goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher, goog.userAgent.isDocumentModeOrHigher = function(e) {
    return Number(goog.userAgent.DOCUMENT_MODE) >= e;
}, goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher, goog.userAgent.DOCUMENT_MODE = function() {
    var e = goog.global.document, t = goog.userAgent.getDocumentMode_();
    if (e && goog.userAgent.IE) return t || ("CSS1Compat" == e.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5);
}(), goog.userAgent.product = {}, goog.userAgent.product.ASSUME_FIREFOX = !1, goog.userAgent.product.ASSUME_IPHONE = !1, 
goog.userAgent.product.ASSUME_IPAD = !1, goog.userAgent.product.ASSUME_ANDROID = !1, 
goog.userAgent.product.ASSUME_CHROME = !1, goog.userAgent.product.ASSUME_SAFARI = !1, 
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI, 
goog.userAgent.product.OPERA = goog.userAgent.OPERA, goog.userAgent.product.IE = goog.userAgent.IE, 
goog.userAgent.product.EDGE = goog.userAgent.EDGE, goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(), 
goog.userAgent.product.isIphoneOrIpod_ = function() {
    return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
}, goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(), 
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), 
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(), 
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(), 
goog.userAgent.product.isSafariDesktop_ = function() {
    return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
}, goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(), 
goog.crypt.base64 = {}, goog.crypt.base64.byteToCharMap_ = null, goog.crypt.base64.charToByteMap_ = null, 
goog.crypt.base64.byteToCharMapWebSafe_ = null, goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/=", goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.", 
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA, 
goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa, 
goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob, 
goog.crypt.base64.encodeByteArray = function(e, t) {
    goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"), 
    goog.crypt.base64.init_(), t = t ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_;
    for (var r = [], o = 0; o < e.length; o += 3) {
        var n = e[o], s = o + 1 < e.length, i = s ? e[o + 1] : 0, a = o + 2 < e.length, g = a ? e[o + 2] : 0, p = n >> 2;
        n = (3 & n) << 4 | i >> 4, i = (15 & i) << 2 | g >> 6, g &= 63, a || (g = 64, s || (i = 64)), 
        r.push(t[p], t[n], t[i], t[g]);
    }
    return r.join("");
}, goog.crypt.base64.encodeString = function(e, t) {
    return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t);
}, goog.crypt.base64.decodeString = function(e, t) {
    if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t) return goog.global.atob(e);
    var r = "";
    return goog.crypt.base64.decodeStringInternal_(e, function(e) {
        r += String.fromCharCode(e);
    }), r;
}, goog.crypt.base64.decodeStringToByteArray = function(e, t) {
    var r = [];
    return goog.crypt.base64.decodeStringInternal_(e, function(e) {
        r.push(e);
    }), r;
}, goog.crypt.base64.decodeStringToUint8Array = function(e) {
    goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
    var t = e.length, r = 0;
    "=" === e[t - 2] ? r = 2 : "=" === e[t - 1] && (r = 1);
    var o = new Uint8Array(Math.ceil(3 * t / 4) - r), n = 0;
    return goog.crypt.base64.decodeStringInternal_(e, function(e) {
        o[n++] = e;
    }), o.subarray(0, n);
}, goog.crypt.base64.decodeStringInternal_ = function(e, t) {
    function r(t) {
        for (;o < e.length; ) {
            var r = e.charAt(o++), n = goog.crypt.base64.charToByteMap_[r];
            if (null != n) return n;
            if (!goog.string.isEmptyOrWhitespace(r)) throw Error("Unknown base64 encoding at char: " + r);
        }
        return t;
    }
    goog.crypt.base64.init_();
    for (var o = 0; ;) {
        var n = r(-1), s = r(0), i = r(64), a = r(64);
        if (64 === a && -1 === n) break;
        t(n << 2 | s >> 4), 64 != i && (t(s << 4 & 240 | i >> 2), 64 != a && t(i << 6 & 192 | a));
    }
}, goog.crypt.base64.init_ = function() {
    if (!goog.crypt.base64.byteToCharMap_) {
        goog.crypt.base64.byteToCharMap_ = {}, goog.crypt.base64.charToByteMap_ = {}, goog.crypt.base64.byteToCharMapWebSafe_ = {};
        for (var e = 0; e < goog.crypt.base64.ENCODED_VALS.length; e++) goog.crypt.base64.byteToCharMap_[e] = goog.crypt.base64.ENCODED_VALS.charAt(e), 
        goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[e]] = e, goog.crypt.base64.byteToCharMapWebSafe_[e] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e), 
        e >= goog.crypt.base64.ENCODED_VALS_BASE.length && (goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)] = e);
    }
}, jspb.utils = {}, jspb.utils.split64Low = 0, jspb.utils.split64High = 0, jspb.utils.splitUint64 = function(e) {
    var t = e >>> 0;
    e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0, jspb.utils.split64Low = t, 
    jspb.utils.split64High = e;
}, jspb.utils.splitInt64 = function(e) {
    var t = 0 > e, r = (e = Math.abs(e)) >>> 0;
    e = Math.floor((e - r) / jspb.BinaryConstants.TWO_TO_32), e >>>= 0, t && (e = ~e >>> 0, 
    4294967295 < (r = 1 + (~r >>> 0)) && (r = 0, 4294967295 < ++e && (e = 0))), jspb.utils.split64Low = r, 
    jspb.utils.split64High = e;
}, jspb.utils.splitZigzag64 = function(e) {
    var t = 0 > e;
    e = 2 * Math.abs(e), jspb.utils.splitUint64(e), e = jspb.utils.split64Low;
    var r = jspb.utils.split64High;
    t && (0 == e ? 0 == r ? r = e = 4294967295 : (r--, e = 4294967295) : e--), jspb.utils.split64Low = e, 
    jspb.utils.split64High = r;
}, jspb.utils.splitFloat32 = function(e) {
    var t = 0 > e ? 1 : 0;
    if (0 === (e = t ? -e : e)) 0 < 1 / e ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, 
    jspb.utils.split64Low = 2147483648); else if (isNaN(e)) jspb.utils.split64High = 0, 
    jspb.utils.split64Low = 2147483647; else if (e > jspb.BinaryConstants.FLOAT32_MAX) jspb.utils.split64High = 0, 
    jspb.utils.split64Low = (t << 31 | 2139095040) >>> 0; else if (e < jspb.BinaryConstants.FLOAT32_MIN) e = Math.round(e / Math.pow(2, -149)), 
    jspb.utils.split64High = 0, jspb.utils.split64Low = (t << 31 | e) >>> 0; else {
        var r = Math.floor(Math.log(e) / Math.LN2);
        e *= Math.pow(2, -r), e = 8388607 & Math.round(e * jspb.BinaryConstants.TWO_TO_23), 
        jspb.utils.split64High = 0, jspb.utils.split64Low = (t << 31 | r + 127 << 23 | e) >>> 0;
    }
}, jspb.utils.splitFloat64 = function(e) {
    var t = 0 > e ? 1 : 0;
    if (0 === (e = t ? -e : e)) jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648, 
    jspb.utils.split64Low = 0; else if (isNaN(e)) jspb.utils.split64High = 2147483647, 
    jspb.utils.split64Low = 4294967295; else if (e > jspb.BinaryConstants.FLOAT64_MAX) jspb.utils.split64High = (t << 31 | 2146435072) >>> 0, 
    jspb.utils.split64Low = 0; else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
        var r = e / Math.pow(2, -1074);
        e = r / jspb.BinaryConstants.TWO_TO_32, jspb.utils.split64High = (t << 31 | e) >>> 0, 
        jspb.utils.split64Low = r >>> 0;
    } else {
        var o = Math.floor(Math.log(e) / Math.LN2);
        1024 == o && (o = 1023), e = (r = e * Math.pow(2, -o)) * jspb.BinaryConstants.TWO_TO_20 & 1048575, 
        r = r * jspb.BinaryConstants.TWO_TO_52 >>> 0, jspb.utils.split64High = (t << 31 | o + 1023 << 20 | e) >>> 0, 
        jspb.utils.split64Low = r;
    }
}, jspb.utils.splitHash64 = function(e) {
    var t = e.charCodeAt(0), r = e.charCodeAt(1), o = e.charCodeAt(2), n = e.charCodeAt(3), s = e.charCodeAt(4), i = e.charCodeAt(5), a = e.charCodeAt(6);
    e = e.charCodeAt(7), jspb.utils.split64Low = t + (r << 8) + (o << 16) + (n << 24) >>> 0, 
    jspb.utils.split64High = s + (i << 8) + (a << 16) + (e << 24) >>> 0;
}, jspb.utils.joinUint64 = function(e, t) {
    return t * jspb.BinaryConstants.TWO_TO_32 + e;
}, jspb.utils.joinInt64 = function(e, t) {
    var r = 2147483648 & t;
    return r && (t = ~t >>> 0, 0 == (e = 1 + ~e >>> 0) && (t = t + 1 >>> 0)), e = jspb.utils.joinUint64(e, t), 
    r ? -e : e;
}, jspb.utils.joinZigzag64 = function(e, t) {
    var r = 1 & e;
    return e = (e >>> 1 | t << 31) >>> 0, t >>>= 1, r && (0 == (e = e + 1 >>> 0) && (t = t + 1 >>> 0)), 
    e = jspb.utils.joinUint64(e, t), r ? -e : e;
}, jspb.utils.joinFloat32 = function(e, t) {
    t = 2 * (e >> 31) + 1;
    var r = e >>> 23 & 255;
    return e &= 8388607, 255 == r ? e ? NaN : 1 / 0 * t : 0 == r ? t * Math.pow(2, -149) * e : t * Math.pow(2, r - 150) * (e + Math.pow(2, 23));
}, jspb.utils.joinFloat64 = function(e, t) {
    var r = 2 * (t >> 31) + 1, o = t >>> 20 & 2047;
    return e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e, 2047 == o ? e ? NaN : 1 / 0 * r : 0 == o ? r * Math.pow(2, -1074) * e : r * Math.pow(2, o - 1075) * (e + jspb.BinaryConstants.TWO_TO_52);
}, jspb.utils.joinHash64 = function(e, t) {
    return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255);
}, jspb.utils.DIGITS = "0123456789abcdef".split(""), jspb.utils.joinUnsignedDecimalString = function(e, t) {
    function r(e) {
        for (var t = 1e7, r = 0; 7 > r; r++) {
            var o = e / (t /= 10) % 10 >>> 0;
            (0 != o || s) && (s = !0, i += n[o]);
        }
    }
    if (2097151 >= t) return "" + (jspb.BinaryConstants.TWO_TO_32 * t + e);
    var o = (e >>> 24 | t << 8) >>> 0 & 16777215;
    e = (16777215 & e) + 6777216 * o + 6710656 * (t = t >> 16 & 65535), o += 8147497 * t, 
    t *= 2, 1e7 <= e && (o += Math.floor(e / 1e7), e %= 1e7), 1e7 <= o && (t += Math.floor(o / 1e7), 
    o %= 1e7);
    var n = jspb.utils.DIGITS, s = !1, i = "";
    return (t || s) && r(t), (o || s) && r(o), (e || s) && r(e), i;
}, jspb.utils.joinSignedDecimalString = function(e, t) {
    var r = 2147483648 & t;
    return r && (t = ~t + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0), e = jspb.utils.joinUnsignedDecimalString(e, t), 
    r ? "-" + e : e;
}, jspb.utils.hash64ToDecimalString = function(e, t) {
    jspb.utils.splitHash64(e), e = jspb.utils.split64Low;
    var r = jspb.utils.split64High;
    return t ? jspb.utils.joinSignedDecimalString(e, r) : jspb.utils.joinUnsignedDecimalString(e, r);
}, jspb.utils.hash64ArrayToDecimalStrings = function(e, t) {
    for (var r = Array(e.length), o = 0; o < e.length; o++) r[o] = jspb.utils.hash64ToDecimalString(e[o], t);
    return r;
}, jspb.utils.decimalStringToHash64 = function(e) {
    function t(e, t) {
        for (var r = 0; 8 > r && (1 !== e || 0 < t); r++) t = e * o[r] + t, o[r] = 255 & t, 
        t >>>= 8;
    }
    goog.asserts.assert(0 < e.length);
    var r = !1;
    "-" === e[0] && (r = !0, e = e.slice(1));
    for (var o = [ 0, 0, 0, 0, 0, 0, 0, 0 ], n = 0; n < e.length; n++) t(10, jspb.utils.DIGITS.indexOf(e[n]));
    return r && (function() {
        for (var e = 0; 8 > e; e++) o[e] = 255 & ~o[e];
    }(), t(1, 1)), goog.crypt.byteArrayToString(o);
}, jspb.utils.splitDecimalString = function(e) {
    jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e));
}, jspb.utils.hash64ToHexString = function(e) {
    var t = Array(18);
    t[0] = "0", t[1] = "x";
    for (var r = 0; 8 > r; r++) {
        var o = e.charCodeAt(7 - r);
        t[2 * r + 2] = jspb.utils.DIGITS[o >> 4], t[2 * r + 3] = jspb.utils.DIGITS[15 & o];
    }
    return t.join("");
}, jspb.utils.hexStringToHash64 = function(e) {
    e = e.toLowerCase(), goog.asserts.assert(18 == e.length), goog.asserts.assert("0" == e[0]), 
    goog.asserts.assert("x" == e[1]);
    for (var t = "", r = 0; 8 > r; r++) {
        var o = jspb.utils.DIGITS.indexOf(e[2 * r + 2]), n = jspb.utils.DIGITS.indexOf(e[2 * r + 3]);
        t = String.fromCharCode(16 * o + n) + t;
    }
    return t;
}, jspb.utils.hash64ToNumber = function(e, t) {
    jspb.utils.splitHash64(e), e = jspb.utils.split64Low;
    var r = jspb.utils.split64High;
    return t ? jspb.utils.joinInt64(e, r) : jspb.utils.joinUint64(e, r);
}, jspb.utils.numberToHash64 = function(e) {
    return jspb.utils.splitInt64(e), jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.utils.countVarints = function(e, t, r) {
    for (var o = 0, n = t; n < r; n++) o += e[n] >> 7;
    return r - t - o;
}, jspb.utils.countVarintFields = function(e, t, r, o) {
    var n = 0;
    if (128 > (o = 8 * o + jspb.BinaryConstants.WireType.VARINT)) for (;t < r && e[t++] == o; ) for (n++; ;) {
        var s = e[t++];
        if (0 == (128 & s)) break;
    } else for (;t < r; ) {
        for (s = o; 128 < s; ) {
            if (e[t] != (127 & s | 128)) return n;
            t++, s >>= 7;
        }
        if (e[t++] != s) break;
        for (n++; 0 != (128 & (s = e[t++])); ) ;
    }
    return n;
}, jspb.utils.countFixedFields_ = function(e, t, r, o, n) {
    var s = 0;
    if (128 > o) for (;t < r && e[t++] == o; ) s++, t += n; else for (;t < r; ) {
        for (var i = o; 128 < i; ) {
            if (e[t++] != (127 & i | 128)) return s;
            i >>= 7;
        }
        if (e[t++] != i) break;
        s++, t += n;
    }
    return s;
}, jspb.utils.countFixed32Fields = function(e, t, r, o) {
    return jspb.utils.countFixedFields_(e, t, r, 8 * o + jspb.BinaryConstants.WireType.FIXED32, 4);
}, jspb.utils.countFixed64Fields = function(e, t, r, o) {
    return jspb.utils.countFixedFields_(e, t, r, 8 * o + jspb.BinaryConstants.WireType.FIXED64, 8);
}, jspb.utils.countDelimitedFields = function(e, t, r, o) {
    var n = 0;
    for (o = 8 * o + jspb.BinaryConstants.WireType.DELIMITED; t < r; ) {
        for (var s = o; 128 < s; ) {
            if (e[t++] != (127 & s | 128)) return n;
            s >>= 7;
        }
        if (e[t++] != s) break;
        n++;
        for (var i = 0, a = 1; i += (127 & (s = e[t++])) * a, a *= 128, 0 != (128 & s); ) ;
        t += i;
    }
    return n;
}, jspb.utils.debugBytesToTextFormat = function(e) {
    var t = '"';
    if (e) {
        e = jspb.utils.byteSourceToUint8Array(e);
        for (var r = 0; r < e.length; r++) t += "\\x", 16 > e[r] && (t += "0"), t += e[r].toString(16);
    }
    return t + '"';
}, jspb.utils.debugScalarToTextFormat = function(e) {
    return goog.isString(e) ? goog.string.quote(e) : e.toString();
}, jspb.utils.stringToByteArray = function(e) {
    for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
        var o = e.charCodeAt(r);
        if (255 < o) throw Error("Conversion error: string contains codepoint outside of byte range");
        t[r] = o;
    }
    return t;
}, jspb.utils.byteSourceToUint8Array = function(e) {
    return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || "undefined" != typeof Buffer && e.constructor === Buffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Type not convertible to Uint8Array."), 
    new Uint8Array(0));
}, jspb.BinaryIterator = function(e, t, r) {
    this.elements_ = this.nextMethod_ = this.decoder_ = null, this.cursor_ = 0, this.nextValue_ = null, 
    this.atEnd_ = !0, this.init_(e, t, r);
}, jspb.BinaryIterator.prototype.init_ = function(e, t, r) {
    e && t && (this.decoder_ = e, this.nextMethod_ = t), this.elements_ = r || null, 
    this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !this.decoder_ && !this.elements_, 
    this.next();
}, jspb.BinaryIterator.instanceCache_ = [], jspb.BinaryIterator.alloc = function(e, t, r) {
    if (jspb.BinaryIterator.instanceCache_.length) {
        var o = jspb.BinaryIterator.instanceCache_.pop();
        return o.init_(e, t, r), o;
    }
    return new jspb.BinaryIterator(e, t, r);
}, jspb.BinaryIterator.prototype.free = function() {
    this.clear(), 100 > jspb.BinaryIterator.instanceCache_.length && jspb.BinaryIterator.instanceCache_.push(this);
}, jspb.BinaryIterator.prototype.clear = function() {
    this.decoder_ && this.decoder_.free(), this.elements_ = this.nextMethod_ = this.decoder_ = null, 
    this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !0;
}, jspb.BinaryIterator.prototype.get = function() {
    return this.nextValue_;
}, jspb.BinaryIterator.prototype.atEnd = function() {
    return this.atEnd_;
}, jspb.BinaryIterator.prototype.next = function() {
    var e = this.nextValue_;
    return this.decoder_ ? this.decoder_.atEnd() ? (this.nextValue_ = null, this.atEnd_ = !0) : this.nextValue_ = this.nextMethod_.call(this.decoder_) : this.elements_ && (this.cursor_ == this.elements_.length ? (this.nextValue_ = null, 
    this.atEnd_ = !0) : this.nextValue_ = this.elements_[this.cursor_++]), e;
}, jspb.BinaryDecoder = function(e, t, r) {
    this.bytes_ = null, this.tempHigh_ = this.tempLow_ = this.cursor_ = this.end_ = this.start_ = 0, 
    this.error_ = !1, e && this.setBlock(e, t, r);
}, jspb.BinaryDecoder.instanceCache_ = [], jspb.BinaryDecoder.alloc = function(e, t, r) {
    if (jspb.BinaryDecoder.instanceCache_.length) {
        var o = jspb.BinaryDecoder.instanceCache_.pop();
        return e && o.setBlock(e, t, r), o;
    }
    return new jspb.BinaryDecoder(e, t, r);
}, jspb.BinaryDecoder.prototype.free = function() {
    this.clear(), 100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
}, jspb.BinaryDecoder.prototype.clone = function() {
    return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
}, jspb.BinaryDecoder.prototype.clear = function() {
    this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1;
}, jspb.BinaryDecoder.prototype.getBuffer = function() {
    return this.bytes_;
}, jspb.BinaryDecoder.prototype.setBlock = function(e, t, r) {
    this.bytes_ = jspb.utils.byteSourceToUint8Array(e), this.start_ = goog.isDef(t) ? t : 0, 
    this.end_ = goog.isDef(r) ? this.start_ + r : this.bytes_.length, this.cursor_ = this.start_;
}, jspb.BinaryDecoder.prototype.getEnd = function() {
    return this.end_;
}, jspb.BinaryDecoder.prototype.setEnd = function(e) {
    this.end_ = e;
}, jspb.BinaryDecoder.prototype.reset = function() {
    this.cursor_ = this.start_;
}, jspb.BinaryDecoder.prototype.getCursor = function() {
    return this.cursor_;
}, jspb.BinaryDecoder.prototype.setCursor = function(e) {
    this.cursor_ = e;
}, jspb.BinaryDecoder.prototype.advance = function(e) {
    this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_);
}, jspb.BinaryDecoder.prototype.atEnd = function() {
    return this.cursor_ == this.end_;
}, jspb.BinaryDecoder.prototype.pastEnd = function() {
    return this.cursor_ > this.end_;
}, jspb.BinaryDecoder.prototype.getError = function() {
    return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
}, jspb.BinaryDecoder.prototype.readSplitVarint64_ = function() {
    for (var e, t, r = 0, o = 0; 4 > o; o++) if (r |= (127 & (e = this.bytes_[this.cursor_++])) << 7 * o, 
    128 > e) return this.tempLow_ = r >>> 0, void (this.tempHigh_ = 0);
    if (r |= (127 & (e = this.bytes_[this.cursor_++])) << 28, t = 0 | (127 & e) >> 4, 
    128 > e) this.tempLow_ = r >>> 0, this.tempHigh_ = t >>> 0; else {
        for (o = 0; 5 > o; o++) if (t |= (127 & (e = this.bytes_[this.cursor_++])) << 7 * o + 3, 
        128 > e) return this.tempLow_ = r >>> 0, void (this.tempHigh_ = t >>> 0);
        goog.asserts.fail("Failed to read varint, encoding is invalid."), this.error_ = !0;
    }
}, jspb.BinaryDecoder.prototype.skipVarint = function() {
    for (;128 & this.bytes_[this.cursor_]; ) this.cursor_++;
    this.cursor_++;
}, jspb.BinaryDecoder.prototype.unskipVarint = function(e) {
    for (;128 < e; ) this.cursor_--, e >>>= 7;
    this.cursor_--;
}, jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
    var e = this.bytes_, t = e[this.cursor_ + 0], r = 127 & t;
    return 128 > t ? (this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), 
    r) : (r |= (127 & (t = e[this.cursor_ + 1])) << 7, 128 > t ? (this.cursor_ += 2, 
    goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (127 & (t = e[this.cursor_ + 2])) << 14, 
    128 > t ? (this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (127 & (t = e[this.cursor_ + 3])) << 21, 
    128 > t ? (this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (15 & (t = e[this.cursor_ + 4])) << 28, 
    128 > t ? (this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), r >>> 0) : (this.cursor_ += 5, 
    128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && goog.asserts.assert(!1), 
    goog.asserts.assert(this.cursor_ <= this.end_), r)))));
}, jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32, 
jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
    return this.readUnsignedVarint32().toString();
}, jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
    return this.readSignedVarint32().toString();
}, jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
    var e = this.readUnsignedVarint32();
    return e >>> 1 ^ -(1 & e);
}, jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
    return this.readSplitVarint64_(), jspb.utils.joinUint64(this.tempLow_, this.tempHigh_);
}, jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
    return this.readSplitVarint64_(), jspb.utils.joinUnsignedDecimalString(this.tempLow_, this.tempHigh_);
}, jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
    return this.readSplitVarint64_(), jspb.utils.joinInt64(this.tempLow_, this.tempHigh_);
}, jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
    return this.readSplitVarint64_(), jspb.utils.joinSignedDecimalString(this.tempLow_, this.tempHigh_);
}, jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
    return this.readSplitVarint64_(), jspb.utils.joinZigzag64(this.tempLow_, this.tempHigh_);
}, jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
    return this.readZigzagVarint64().toString();
}, jspb.BinaryDecoder.prototype.readUint8 = function() {
    var e = this.bytes_[this.cursor_ + 0];
    return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e;
}, jspb.BinaryDecoder.prototype.readUint16 = function() {
    var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1];
    return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8;
}, jspb.BinaryDecoder.prototype.readUint32 = function() {
    var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1], r = this.bytes_[this.cursor_ + 2], o = this.bytes_[this.cursor_ + 3];
    return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8 | r << 16 | o << 24) >>> 0;
}, jspb.BinaryDecoder.prototype.readUint64 = function() {
    var e = this.readUint32(), t = this.readUint32();
    return jspb.utils.joinUint64(e, t);
}, jspb.BinaryDecoder.prototype.readUint64String = function() {
    var e = this.readUint32(), t = this.readUint32();
    return jspb.utils.joinUnsignedDecimalString(e, t);
}, jspb.BinaryDecoder.prototype.readInt8 = function() {
    var e = this.bytes_[this.cursor_ + 0];
    return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e << 24 >> 24;
}, jspb.BinaryDecoder.prototype.readInt16 = function() {
    var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1];
    return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8) << 16 >> 16;
}, jspb.BinaryDecoder.prototype.readInt32 = function() {
    var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1], r = this.bytes_[this.cursor_ + 2], o = this.bytes_[this.cursor_ + 3];
    return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8 | r << 16 | o << 24;
}, jspb.BinaryDecoder.prototype.readInt64 = function() {
    var e = this.readUint32(), t = this.readUint32();
    return jspb.utils.joinInt64(e, t);
}, jspb.BinaryDecoder.prototype.readInt64String = function() {
    var e = this.readUint32(), t = this.readUint32();
    return jspb.utils.joinSignedDecimalString(e, t);
}, jspb.BinaryDecoder.prototype.readFloat = function() {
    var e = this.readUint32();
    return jspb.utils.joinFloat32(e, 0);
}, jspb.BinaryDecoder.prototype.readDouble = function() {
    var e = this.readUint32(), t = this.readUint32();
    return jspb.utils.joinFloat64(e, t);
}, jspb.BinaryDecoder.prototype.readBool = function() {
    return !!this.bytes_[this.cursor_++];
}, jspb.BinaryDecoder.prototype.readEnum = function() {
    return this.readSignedVarint32();
}, jspb.BinaryDecoder.prototype.readString = function(e) {
    var t = this.bytes_, r = this.cursor_;
    e = r + e;
    for (var o = [], n = ""; r < e; ) {
        var s = t[r++];
        if (128 > s) o.push(s); else {
            if (192 > s) continue;
            if (224 > s) {
                var i = t[r++];
                o.push((31 & s) << 6 | 63 & i);
            } else if (240 > s) {
                i = t[r++];
                var a = t[r++];
                o.push((15 & s) << 12 | (63 & i) << 6 | 63 & a);
            } else if (248 > s) {
                s = (7 & s) << 18 | (63 & (i = t[r++])) << 12 | (63 & (a = t[r++])) << 6 | 63 & t[r++], 
                s -= 65536, o.push(55296 + (s >> 10 & 1023), 56320 + (1023 & s));
            }
        }
        8192 <= o.length && (n += String.fromCharCode.apply(null, o), o.length = 0);
    }
    return n += goog.crypt.byteArrayToString(o), this.cursor_ = r, n;
}, jspb.BinaryDecoder.prototype.readStringWithLength = function() {
    var e = this.readUnsignedVarint32();
    return this.readString(e);
}, jspb.BinaryDecoder.prototype.readBytes = function(e) {
    if (0 > e || this.cursor_ + e > this.bytes_.length) return this.error_ = !0, goog.asserts.fail("Invalid byte length!"), 
    new Uint8Array(0);
    var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
    return this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_), t;
}, jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
    return this.readSplitVarint64_(), jspb.utils.joinHash64(this.tempLow_, this.tempHigh_);
}, jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
    var e = this.bytes_, t = this.cursor_, r = e[t + 0], o = e[t + 1], n = e[t + 2], s = e[t + 3], i = e[t + 4], a = e[t + 5], g = e[t + 6];
    return e = e[t + 7], this.cursor_ += 8, String.fromCharCode(r, o, n, s, i, a, g, e);
}, jspb.BinaryReader = function(e, t, r) {
    this.decoder_ = jspb.BinaryDecoder.alloc(e, t, r), this.fieldCursor_ = this.decoder_.getCursor(), 
    this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, 
    this.error_ = !1, this.readCallbacks_ = null;
}, jspb.BinaryReader.instanceCache_ = [], jspb.BinaryReader.alloc = function(e, t, r) {
    if (jspb.BinaryReader.instanceCache_.length) {
        var o = jspb.BinaryReader.instanceCache_.pop();
        return e && o.decoder_.setBlock(e, t, r), o;
    }
    return new jspb.BinaryReader(e, t, r);
}, jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc, jspb.BinaryReader.prototype.free = function() {
    this.decoder_.clear(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, 
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null, 
    100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
}, jspb.BinaryReader.prototype.getFieldCursor = function() {
    return this.fieldCursor_;
}, jspb.BinaryReader.prototype.getCursor = function() {
    return this.decoder_.getCursor();
}, jspb.BinaryReader.prototype.getBuffer = function() {
    return this.decoder_.getBuffer();
}, jspb.BinaryReader.prototype.getFieldNumber = function() {
    return this.nextField_;
}, jspb.BinaryReader.prototype.getWireType = function() {
    return this.nextWireType_;
}, jspb.BinaryReader.prototype.isEndGroup = function() {
    return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
}, jspb.BinaryReader.prototype.getError = function() {
    return this.error_ || this.decoder_.getError();
}, jspb.BinaryReader.prototype.setBlock = function(e, t, r) {
    this.decoder_.setBlock(e, t, r), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, 
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
}, jspb.BinaryReader.prototype.reset = function() {
    this.decoder_.reset(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, 
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
}, jspb.BinaryReader.prototype.advance = function(e) {
    this.decoder_.advance(e);
}, jspb.BinaryReader.prototype.nextField = function() {
    if (this.decoder_.atEnd()) return !1;
    if (this.getError()) return goog.asserts.fail("Decoder hit an error"), !1;
    this.fieldCursor_ = this.decoder_.getCursor();
    var e = this.decoder_.readUnsignedVarint32(), t = e >>> 3;
    return (e &= 7) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (goog.asserts.fail("Invalid wire type: %s (at position %s)", e, this.fieldCursor_), 
    this.error_ = !0, !1) : (this.nextField_ = t, this.nextWireType_ = e, !0);
}, jspb.BinaryReader.prototype.unskipHeader = function() {
    this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
}, jspb.BinaryReader.prototype.skipMatchingFields = function() {
    var e = this.nextField_;
    for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e; ) this.skipField();
    this.decoder_.atEnd() || this.unskipHeader();
}, jspb.BinaryReader.prototype.skipVarintField = function() {
    this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), 
    this.skipField()) : this.decoder_.skipVarint();
}, jspb.BinaryReader.prototype.skipDelimitedField = function() {
    if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED) goog.asserts.fail("Invalid wire type for skipDelimitedField"), 
    this.skipField(); else {
        var e = this.decoder_.readUnsignedVarint32();
        this.decoder_.advance(e);
    }
}, jspb.BinaryReader.prototype.skipFixed32Field = function() {
    this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), 
    this.skipField()) : this.decoder_.advance(4);
}, jspb.BinaryReader.prototype.skipFixed64Field = function() {
    this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), 
    this.skipField()) : this.decoder_.advance(8);
}, jspb.BinaryReader.prototype.skipGroup = function() {
    for (var e = this.nextField_; ;) {
        if (!this.nextField()) {
            goog.asserts.fail("Unmatched start-group tag: stream EOF"), this.error_ = !0;
            break;
        }
        if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != e && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = !0);
            break;
        }
        this.skipField();
    }
}, jspb.BinaryReader.prototype.skipField = function() {
    switch (this.nextWireType_) {
      case jspb.BinaryConstants.WireType.VARINT:
        this.skipVarintField();
        break;

      case jspb.BinaryConstants.WireType.FIXED64:
        this.skipFixed64Field();
        break;

      case jspb.BinaryConstants.WireType.DELIMITED:
        this.skipDelimitedField();
        break;

      case jspb.BinaryConstants.WireType.FIXED32:
        this.skipFixed32Field();
        break;

      case jspb.BinaryConstants.WireType.START_GROUP:
        this.skipGroup();
        break;

      default:
        goog.asserts.fail("Invalid wire encoding for field.");
    }
}, jspb.BinaryReader.prototype.registerReadCallback = function(e, t) {
    goog.isNull(this.readCallbacks_) && (this.readCallbacks_ = {}), goog.asserts.assert(!this.readCallbacks_[e]), 
    this.readCallbacks_[e] = t;
}, jspb.BinaryReader.prototype.runReadCallback = function(e) {
    return goog.asserts.assert(!goog.isNull(this.readCallbacks_)), e = this.readCallbacks_[e], 
    goog.asserts.assert(e), e(this);
}, jspb.BinaryReader.prototype.readAny = function(e) {
    this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
    var t = jspb.BinaryConstants.FieldType;
    switch (e) {
      case t.DOUBLE:
        return this.readDouble();

      case t.FLOAT:
        return this.readFloat();

      case t.INT64:
        return this.readInt64();

      case t.UINT64:
        return this.readUint64();

      case t.INT32:
        return this.readInt32();

      case t.FIXED64:
        return this.readFixed64();

      case t.FIXED32:
        return this.readFixed32();

      case t.BOOL:
        return this.readBool();

      case t.STRING:
        return this.readString();

      case t.GROUP:
        goog.asserts.fail("Group field type not supported in readAny()");

      case t.MESSAGE:
        goog.asserts.fail("Message field type not supported in readAny()");

      case t.BYTES:
        return this.readBytes();

      case t.UINT32:
        return this.readUint32();

      case t.ENUM:
        return this.readEnum();

      case t.SFIXED32:
        return this.readSfixed32();

      case t.SFIXED64:
        return this.readSfixed64();

      case t.SINT32:
        return this.readSint32();

      case t.SINT64:
        return this.readSint64();

      case t.FHASH64:
        return this.readFixedHash64();

      case t.VHASH64:
        return this.readVarintHash64();

      default:
        goog.asserts.fail("Invalid field type in readAny()");
    }
    return 0;
}, jspb.BinaryReader.prototype.readMessage = function(e, t) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var r = this.decoder_.getEnd(), o = this.decoder_.readUnsignedVarint32();
    o = this.decoder_.getCursor() + o, this.decoder_.setEnd(o), t(e, this), this.decoder_.setCursor(o), 
    this.decoder_.setEnd(r);
}, jspb.BinaryReader.prototype.readGroup = function(e, t, r) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP), 
    goog.asserts.assert(this.nextField_ == e), r(t, this), this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), 
    this.error_ = !0);
}, jspb.BinaryReader.prototype.getFieldDecoder = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var e = this.decoder_.readUnsignedVarint32(), t = this.decoder_.getCursor(), r = t + e;
    return e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e), this.decoder_.setCursor(r), 
    e;
}, jspb.BinaryReader.prototype.readInt32 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readSignedVarint32();
}, jspb.BinaryReader.prototype.readInt32String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readSignedVarint32String();
}, jspb.BinaryReader.prototype.readInt64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readSignedVarint64();
}, jspb.BinaryReader.prototype.readInt64String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readSignedVarint64String();
}, jspb.BinaryReader.prototype.readUint32 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readUnsignedVarint32();
}, jspb.BinaryReader.prototype.readUint32String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readUnsignedVarint32String();
}, jspb.BinaryReader.prototype.readUint64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readUnsignedVarint64();
}, jspb.BinaryReader.prototype.readUint64String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readUnsignedVarint64String();
}, jspb.BinaryReader.prototype.readSint32 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readZigzagVarint32();
}, jspb.BinaryReader.prototype.readSint64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readZigzagVarint64();
}, jspb.BinaryReader.prototype.readSint64String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readZigzagVarint64String();
}, jspb.BinaryReader.prototype.readFixed32 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), 
    this.decoder_.readUint32();
}, jspb.BinaryReader.prototype.readFixed64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), 
    this.decoder_.readUint64();
}, jspb.BinaryReader.prototype.readFixed64String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), 
    this.decoder_.readUint64String();
}, jspb.BinaryReader.prototype.readSfixed32 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), 
    this.decoder_.readInt32();
}, jspb.BinaryReader.prototype.readSfixed32String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), 
    this.decoder_.readInt32().toString();
}, jspb.BinaryReader.prototype.readSfixed64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), 
    this.decoder_.readInt64();
}, jspb.BinaryReader.prototype.readSfixed64String = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), 
    this.decoder_.readInt64String();
}, jspb.BinaryReader.prototype.readFloat = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), 
    this.decoder_.readFloat();
}, jspb.BinaryReader.prototype.readDouble = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), 
    this.decoder_.readDouble();
}, jspb.BinaryReader.prototype.readBool = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    !!this.decoder_.readUnsignedVarint32();
}, jspb.BinaryReader.prototype.readEnum = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readSignedVarint64();
}, jspb.BinaryReader.prototype.readString = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var e = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readString(e);
}, jspb.BinaryReader.prototype.readBytes = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var e = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readBytes(e);
}, jspb.BinaryReader.prototype.readVarintHash64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), 
    this.decoder_.readVarintHash64();
}, jspb.BinaryReader.prototype.readFixedHash64 = function() {
    return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), 
    this.decoder_.readFixedHash64();
}, jspb.BinaryReader.prototype.readPackedField_ = function(e) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var t = this.decoder_.readUnsignedVarint32();
    t = this.decoder_.getCursor() + t;
    for (var r = []; this.decoder_.getCursor() < t; ) r.push(e.call(this.decoder_));
    return r;
}, jspb.BinaryReader.prototype.readPackedInt32 = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint32);
}, jspb.BinaryReader.prototype.readPackedInt32String = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint32String);
}, jspb.BinaryReader.prototype.readPackedInt64 = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint64);
}, jspb.BinaryReader.prototype.readPackedInt64String = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint64String);
}, jspb.BinaryReader.prototype.readPackedUint32 = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint32);
}, jspb.BinaryReader.prototype.readPackedUint32String = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
}, jspb.BinaryReader.prototype.readPackedUint64 = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint64);
}, jspb.BinaryReader.prototype.readPackedUint64String = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
}, jspb.BinaryReader.prototype.readPackedSint32 = function() {
    return this.readPackedField_(this.decoder_.readZigzagVarint32);
}, jspb.BinaryReader.prototype.readPackedSint64 = function() {
    return this.readPackedField_(this.decoder_.readZigzagVarint64);
}, jspb.BinaryReader.prototype.readPackedSint64String = function() {
    return this.readPackedField_(this.decoder_.readZigzagVarint64String);
}, jspb.BinaryReader.prototype.readPackedFixed32 = function() {
    return this.readPackedField_(this.decoder_.readUint32);
}, jspb.BinaryReader.prototype.readPackedFixed64 = function() {
    return this.readPackedField_(this.decoder_.readUint64);
}, jspb.BinaryReader.prototype.readPackedFixed64String = function() {
    return this.readPackedField_(this.decoder_.readUint64String);
}, jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
    return this.readPackedField_(this.decoder_.readInt32);
}, jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
    return this.readPackedField_(this.decoder_.readInt64);
}, jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
    return this.readPackedField_(this.decoder_.readInt64String);
}, jspb.BinaryReader.prototype.readPackedFloat = function() {
    return this.readPackedField_(this.decoder_.readFloat);
}, jspb.BinaryReader.prototype.readPackedDouble = function() {
    return this.readPackedField_(this.decoder_.readDouble);
}, jspb.BinaryReader.prototype.readPackedBool = function() {
    return this.readPackedField_(this.decoder_.readBool);
}, jspb.BinaryReader.prototype.readPackedEnum = function() {
    return this.readPackedField_(this.decoder_.readEnum);
}, jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
    return this.readPackedField_(this.decoder_.readVarintHash64);
}, jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
    return this.readPackedField_(this.decoder_.readFixedHash64);
}, jspb.Map = function(e, t) {
    this.arr_ = e, this.valueCtor_ = t, this.map_ = {}, this.arrClean = !0, 0 < this.arr_.length && this.loadFromArray_();
}, jspb.Map.prototype.loadFromArray_ = function() {
    for (var e = 0; e < this.arr_.length; e++) {
        var t = this.arr_[e], r = t[0];
        this.map_[r.toString()] = new jspb.Map.Entry_(r, t[1]);
    }
    this.arrClean = !0;
}, jspb.Map.prototype.toArray = function() {
    if (this.arrClean) {
        if (this.valueCtor_) {
            var e, t = this.map_;
            for (e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
                var r = t[e].valueWrapper;
                r && r.toArray();
            }
        }
    } else {
        for (this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0; e < t.length; e++) {
            var o = this.map_[t[e]];
            (r = o.valueWrapper) && r.toArray(), this.arr_.push([ o.key, o.value ]);
        }
        this.arrClean = !0;
    }
    return this.arr_;
}, jspb.Map.prototype.toObject = function(e, t) {
    for (var r = this.toArray(), o = [], n = 0; n < r.length; n++) {
        var s = this.map_[r[n][0].toString()];
        this.wrapEntry_(s);
        var i = s.valueWrapper;
        i ? (goog.asserts.assert(t), o.push([ s.key, t(e, i) ])) : o.push([ s.key, s.value ]);
    }
    return o;
}, jspb.Map.fromObject = function(e, t, r) {
    t = new jspb.Map([], t);
    for (var o = 0; o < e.length; o++) {
        var n = e[o][0], s = r(e[o][1]);
        t.set(n, s);
    }
    return t;
}, jspb.Map.ArrayIteratorIterable_ = function(e) {
    this.idx_ = 0, this.arr_ = e;
}, jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
    return this.idx_ < this.arr_.length ? {
        done: !1,
        value: this.arr_[this.idx_++]
    } : {
        done: !0,
        value: void 0
    };
}, "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
    return this;
}), jspb.Map.prototype.getLength = function() {
    return this.stringKeys_().length;
}, jspb.Map.prototype.clear = function() {
    this.map_ = {}, this.arrClean = !1;
}, jspb.Map.prototype.del = function(e) {
    e = e.toString();
    var t = this.map_.hasOwnProperty(e);
    return delete this.map_[e], this.arrClean = !1, t;
}, jspb.Map.prototype.getEntryList = function() {
    var e = [], t = this.stringKeys_();
    t.sort();
    for (var r = 0; r < t.length; r++) {
        var o = this.map_[t[r]];
        e.push([ o.key, o.value ]);
    }
    return e;
}, jspb.Map.prototype.entries = function() {
    var e = [], t = this.stringKeys_();
    t.sort();
    for (var r = 0; r < t.length; r++) {
        var o = this.map_[t[r]];
        e.push([ o.key, this.wrapEntry_(o) ]);
    }
    return new jspb.Map.ArrayIteratorIterable_(e);
}, jspb.Map.prototype.keys = function() {
    var e = [], t = this.stringKeys_();
    t.sort();
    for (var r = 0; r < t.length; r++) e.push(this.map_[t[r]].key);
    return new jspb.Map.ArrayIteratorIterable_(e);
}, jspb.Map.prototype.values = function() {
    var e = [], t = this.stringKeys_();
    t.sort();
    for (var r = 0; r < t.length; r++) e.push(this.wrapEntry_(this.map_[t[r]]));
    return new jspb.Map.ArrayIteratorIterable_(e);
}, jspb.Map.prototype.forEach = function(e, t) {
    var r = this.stringKeys_();
    r.sort();
    for (var o = 0; o < r.length; o++) {
        var n = this.map_[r[o]];
        e.call(t, this.wrapEntry_(n), n.key, this);
    }
}, jspb.Map.prototype.set = function(e, t) {
    var r = new jspb.Map.Entry_(e);
    return this.valueCtor_ ? (r.valueWrapper = t, r.value = t.toArray()) : r.value = t, 
    this.map_[e.toString()] = r, this.arrClean = !1, this;
}, jspb.Map.prototype.wrapEntry_ = function(e) {
    return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)), 
    e.valueWrapper) : e.value;
}, jspb.Map.prototype.get = function(e) {
    if (e = this.map_[e.toString()]) return this.wrapEntry_(e);
}, jspb.Map.prototype.has = function(e) {
    return e.toString() in this.map_;
}, jspb.Map.prototype.serializeBinary = function(e, t, r, o, n) {
    var s = this.stringKeys_();
    s.sort();
    for (var i = 0; i < s.length; i++) {
        var a = this.map_[s[i]];
        t.beginSubMessage(e), r.call(t, 1, a.key), this.valueCtor_ ? o.call(t, 2, this.wrapEntry_(a), n) : o.call(t, 2, a.value), 
        t.endSubMessage();
    }
}, jspb.Map.deserializeBinary = function(e, t, r, o, n, s) {
    for (var i = void 0; t.nextField() && !t.isEndGroup(); ) {
        var a = t.getFieldNumber();
        1 == a ? s = r.call(t) : 2 == a && (e.valueCtor_ ? (goog.asserts.assert(n), i = new e.valueCtor_(), 
        o.call(t, i, n)) : i = o.call(t));
    }
    goog.asserts.assert(null != s), goog.asserts.assert(null != i), e.set(s, i);
}, jspb.Map.prototype.stringKeys_ = function() {
    var e, t = this.map_, r = [];
    for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
    return r;
}, jspb.Map.Entry_ = function(e, t) {
    this.key = e, this.value = t, this.valueWrapper = void 0;
}, jspb.ExtensionFieldInfo = function(e, t, r, o, n) {
    this.fieldIndex = e, this.fieldName = t, this.ctor = r, this.toObjectFn = o, this.isRepeated = n;
}, jspb.ExtensionFieldBinaryInfo = function(e, t, r, o, n, s) {
    this.fieldInfo = e, this.binaryReaderFn = t, this.binaryWriterFn = r, this.binaryMessageSerializeFn = o, 
    this.binaryMessageDeserializeFn = n, this.isPacked = s;
}, jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
    return !!this.ctor;
}, jspb.Message = function() {}, jspb.Message.GENERATE_TO_OBJECT = !0, jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE, 
jspb.Message.GENERATE_TO_STRING = !0, jspb.Message.ASSUME_LOCAL_ARRAYS = !1, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0, 
jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array, jspb.Message.prototype.getJsPbMessageId = function() {
    return this.messageId_;
}, jspb.Message.getIndex_ = function(e, t) {
    return t + e.arrayIndexOffset_;
}, jspb.Message.hiddenES6Property_ = function() {}, jspb.Message.getFieldNumber_ = function(e, t) {
    return t - e.arrayIndexOffset_;
}, jspb.Message.initialize = function(e, t, r, o, n, s) {
    if (e.wrappers_ = null, t || (t = r ? [ r ] : []), e.messageId_ = r ? String(r) : void 0, 
    e.arrayIndexOffset_ = 0 === r ? -1 : 0, e.array = t, jspb.Message.initPivotAndExtensionObject_(e, o), 
    e.convertedPrimitiveFields_ = {}, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = n), 
    n) for (t = 0; t < n.length; t++) (r = n[t]) < e.pivot_ ? (r = jspb.Message.getIndex_(e, r), 
    e.array[r] = e.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e), 
    e.extensionObject_[r] = e.extensionObject_[r] || jspb.Message.EMPTY_LIST_SENTINEL_);
    if (s && s.length) for (t = 0; t < s.length; t++) jspb.Message.computeOneofCase(e, s[t]);
}, jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [], 
jspb.Message.isArray_ = function(e) {
    return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : goog.isArray(e);
}, jspb.Message.isExtensionObject_ = function(e) {
    return !(null === e || "object" != _typeof2(e) || jspb.Message.isArray_(e) || jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array);
}, jspb.Message.initPivotAndExtensionObject_ = function(e, t) {
    var r = e.array.length, o = -1;
    if (r && (o = r - 1, r = e.array[o], jspb.Message.isExtensionObject_(r))) return e.pivot_ = jspb.Message.getFieldNumber_(e, o), 
    void (e.extensionObject_ = r);
    -1 < t ? (e.pivot_ = Math.max(t, jspb.Message.getFieldNumber_(e, o + 1)), e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE;
}, jspb.Message.maybeInitEmptyExtensionObject_ = function(e) {
    var t = jspb.Message.getIndex_(e, e.pivot_);
    e.array[t] || (e.extensionObject_ = e.array[t] = {});
}, jspb.Message.toObjectList = function(e, t, r) {
    for (var o = [], n = 0; n < e.length; n++) o[n] = t.call(e[n], r, e[n]);
    return o;
}, jspb.Message.toObjectExtension = function(e, t, r, o, n) {
    for (var s in r) {
        var i = r[s], a = o.call(e, i);
        if (null != a) {
            for (var g in i.fieldName) if (i.fieldName.hasOwnProperty(g)) break;
            t[g] = i.toObjectFn ? i.isRepeated ? jspb.Message.toObjectList(a, i.toObjectFn, n) : i.toObjectFn(n, a) : a;
        }
    }
}, jspb.Message.serializeBinaryExtensions = function(e, t, r, o) {
    for (var n in r) {
        var s = r[n], i = s.fieldInfo;
        if (!s.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
        var a = o.call(e, i);
        if (null != a) if (i.isMessageType()) {
            if (!s.binaryMessageSerializeFn) throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
            s.binaryWriterFn.call(t, i.fieldIndex, a, s.binaryMessageSerializeFn);
        } else s.binaryWriterFn.call(t, i.fieldIndex, a);
    }
}, jspb.Message.readBinaryExtension = function(e, t, r, o, n) {
    var s = r[t.getFieldNumber()];
    if (s) {
        if (r = s.fieldInfo, !s.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
        if (r.isMessageType()) {
            var i = new r.ctor();
            s.binaryReaderFn.call(t, i, s.binaryMessageDeserializeFn);
        } else i = s.binaryReaderFn.call(t);
        r.isRepeated && !s.isPacked ? (t = o.call(e, r)) ? t.push(i) : n.call(e, r, [ i ]) : n.call(e, r, i);
    } else t.skipField();
}, jspb.Message.getField = function(e, t) {
    if (t < e.pivot_) {
        t = jspb.Message.getIndex_(e, t);
        var r = e.array[t];
        return r === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[t] = [] : r;
    }
    if (e.extensionObject_) return (r = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : r;
}, jspb.Message.getRepeatedField = function(e, t) {
    return jspb.Message.getField(e, t);
}, jspb.Message.getOptionalFloatingPointField = function(e, t) {
    return null == (e = jspb.Message.getField(e, t)) ? e : +e;
}, jspb.Message.getBooleanField = function(e, t) {
    return null == (e = jspb.Message.getField(e, t)) ? e : !!e;
}, jspb.Message.getRepeatedFloatingPointField = function(e, t) {
    var r = jspb.Message.getRepeatedField(e, t);
    if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}), !e.convertedPrimitiveFields_[t]) {
        for (var o = 0; o < r.length; o++) r[o] = +r[o];
        e.convertedPrimitiveFields_[t] = !0;
    }
    return r;
}, jspb.Message.getRepeatedBooleanField = function(e, t) {
    var r = jspb.Message.getRepeatedField(e, t);
    if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}), !e.convertedPrimitiveFields_[t]) {
        for (var o = 0; o < r.length; o++) r[o] = !!r[o];
        e.convertedPrimitiveFields_[t] = !0;
    }
    return r;
}, jspb.Message.bytesAsB64 = function(e) {
    return null == e || goog.isString(e) ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)), 
    null);
}, jspb.Message.bytesAsU8 = function(e) {
    return null == e || e instanceof Uint8Array ? e : goog.isString(e) ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)), 
    null);
}, jspb.Message.bytesListAsB64 = function(e) {
    return jspb.Message.assertConsistentTypes_(e), !e.length || goog.isString(e[0]) ? e : goog.array.map(e, jspb.Message.bytesAsB64);
}, jspb.Message.bytesListAsU8 = function(e) {
    return jspb.Message.assertConsistentTypes_(e), !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8);
}, jspb.Message.assertConsistentTypes_ = function(e) {
    if (goog.DEBUG && e && 1 < e.length) {
        var t = goog.typeOf(e[0]);
        goog.array.forEach(e, function(e) {
            goog.typeOf(e) != t && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + t);
        });
    }
}, jspb.Message.getFieldWithDefault = function(e, t, r) {
    return null == (e = jspb.Message.getField(e, t)) ? r : e;
}, jspb.Message.getBooleanFieldWithDefault = function(e, t, r) {
    return null == (e = jspb.Message.getBooleanField(e, t)) ? r : e;
}, jspb.Message.getFloatingPointFieldWithDefault = function(e, t, r) {
    return null == (e = jspb.Message.getOptionalFloatingPointField(e, t)) ? r : e;
}, jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault, jspb.Message.getMapField = function(e, t, r, o) {
    return e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_ ? e.wrappers_[t] : r ? void 0 : ((r = jspb.Message.getField(e, t)) || (r = [], 
    jspb.Message.setField(e, t, r)), e.wrappers_[t] = new jspb.Map(r, o));
}, jspb.Message.setField = function(e, t, r) {
    t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = r : (jspb.Message.maybeInitEmptyExtensionObject_(e), 
    e.extensionObject_[t] = r);
}, jspb.Message.setProto3IntField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
}, jspb.Message.setProto3FloatField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
}, jspb.Message.setProto3BooleanField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, !1);
}, jspb.Message.setProto3StringField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
}, jspb.Message.setProto3BytesField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
}, jspb.Message.setProto3EnumField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
}, jspb.Message.setProto3StringIntField = function(e, t, r) {
    jspb.Message.setFieldIgnoringDefault_(e, t, r, "0");
}, jspb.Message.setFieldIgnoringDefault_ = function(e, t, r, o) {
    r !== o ? jspb.Message.setField(e, t, r) : e.array[jspb.Message.getIndex_(e, t)] = null;
}, jspb.Message.addToRepeatedField = function(e, t, r, o) {
    e = jspb.Message.getRepeatedField(e, t), null != o ? e.splice(o, 0, r) : e.push(r);
}, jspb.Message.setOneofField = function(e, t, r, o) {
    (r = jspb.Message.computeOneofCase(e, r)) && r !== t && void 0 !== o && (e.wrappers_ && r in e.wrappers_ && (e.wrappers_[r] = void 0), 
    jspb.Message.setField(e, r, void 0)), jspb.Message.setField(e, t, o);
}, jspb.Message.computeOneofCase = function(e, t) {
    for (var r, o, n = 0; n < t.length; n++) {
        var s = t[n], i = jspb.Message.getField(e, s);
        null != i && (r = s, o = i, jspb.Message.setField(e, s, void 0));
    }
    return r ? (jspb.Message.setField(e, r, o), r) : 0;
}, jspb.Message.getWrapperField = function(e, t, r, o) {
    if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r]) {
        var n = jspb.Message.getField(e, r);
        (o || n) && (e.wrappers_[r] = new t(n));
    }
    return e.wrappers_[r];
}, jspb.Message.getRepeatedWrapperField = function(e, t, r) {
    return jspb.Message.wrapRepeatedField_(e, t, r), (t = e.wrappers_[r]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[r] = []), 
    t;
}, jspb.Message.wrapRepeatedField_ = function(e, t, r) {
    if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r]) {
        for (var o = jspb.Message.getRepeatedField(e, r), n = [], s = 0; s < o.length; s++) n[s] = new t(o[s]);
        e.wrappers_[r] = n;
    }
}, jspb.Message.setWrapperField = function(e, t, r) {
    e.wrappers_ || (e.wrappers_ = {});
    var o = r ? r.toArray() : r;
    e.wrappers_[t] = r, jspb.Message.setField(e, t, o);
}, jspb.Message.setOneofWrapperField = function(e, t, r, o) {
    e.wrappers_ || (e.wrappers_ = {});
    var n = o ? o.toArray() : o;
    e.wrappers_[t] = o, jspb.Message.setOneofField(e, t, r, n);
}, jspb.Message.setRepeatedWrapperField = function(e, t, r) {
    e.wrappers_ || (e.wrappers_ = {}), r = r || [];
    for (var o = [], n = 0; n < r.length; n++) o[n] = r[n].toArray();
    e.wrappers_[t] = r, jspb.Message.setField(e, t, o);
}, jspb.Message.addToRepeatedWrapperField = function(e, t, r, o, n) {
    jspb.Message.wrapRepeatedField_(e, o, t);
    var s = e.wrappers_[t];
    return s || (s = e.wrappers_[t] = []), r = r || new o(), e = jspb.Message.getRepeatedField(e, t), 
    null != n ? (s.splice(n, 0, r), e.splice(n, 0, r.toArray())) : (s.push(r), e.push(r.toArray())), 
    r;
}, jspb.Message.toMap = function(e, t, r, o) {
    for (var n = {}, s = 0; s < e.length; s++) n[t.call(e[s])] = r ? r.call(e[s], o, e[s]) : e[s];
    return n;
}, jspb.Message.prototype.syncMapFields_ = function() {
    if (this.wrappers_) for (var e in this.wrappers_) {
        var t = this.wrappers_[e];
        if (goog.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && t[r].toArray(); else t && t.toArray();
    }
}, jspb.Message.prototype.toArray = function() {
    return this.syncMapFields_(), this.array;
}, jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
    return this.syncMapFields_(), this.array.toString();
}), jspb.Message.prototype.getExtension = function(e) {
    if (this.extensionObject_) {
        this.wrappers_ || (this.wrappers_ = {});
        var t = e.fieldIndex;
        if (e.isRepeated) {
            if (e.isMessageType()) return this.wrappers_[t] || (this.wrappers_[t] = goog.array.map(this.extensionObject_[t] || [], function(t) {
                return new e.ctor(t);
            })), this.wrappers_[t];
        } else if (e.isMessageType()) return !this.wrappers_[t] && this.extensionObject_[t] && (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])), 
        this.wrappers_[t];
        return this.extensionObject_[t];
    }
}, jspb.Message.prototype.setExtension = function(e, t) {
    this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this);
    var r = e.fieldIndex;
    return e.isRepeated ? (t = t || [], e.isMessageType() ? (this.wrappers_[r] = t, 
    this.extensionObject_[r] = goog.array.map(t, function(e) {
        return e.toArray();
    })) : this.extensionObject_[r] = t) : e.isMessageType() ? (this.wrappers_[r] = t, 
    this.extensionObject_[r] = t ? t.toArray() : t) : this.extensionObject_[r] = t, 
    this;
}, jspb.Message.difference = function(e, t) {
    if (!(e instanceof t.constructor)) throw Error("Messages have different types.");
    var r = e.toArray();
    t = t.toArray();
    var o = [], n = 0, s = r.length > t.length ? r.length : t.length;
    for (e.getJsPbMessageId() && (o[0] = e.getJsPbMessageId(), n = 1); n < s; n++) jspb.Message.compareFields(r[n], t[n]) || (o[n] = t[n]);
    return new e.constructor(o);
}, jspb.Message.equals = function(e, t) {
    return e == t || !(!e || !t) && e instanceof t.constructor && jspb.Message.compareFields(e.toArray(), t.toArray());
}, jspb.Message.compareExtensions = function(e, t) {
    e = e || {}, t = t || {};
    var r, o = {};
    for (r in e) o[r] = 0;
    for (r in t) o[r] = 0;
    for (r in o) if (!jspb.Message.compareFields(e[r], t[r])) return !1;
    return !0;
}, jspb.Message.compareFields = function(e, t) {
    if (e == t) return !0;
    if (!goog.isObject(e) || !goog.isObject(t)) return !!(goog.isNumber(e) && isNaN(e) || goog.isNumber(t) && isNaN(t)) && String(e) == String(t);
    if (e.constructor != t.constructor) return !1;
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
        if (e.length != t.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
        return !0;
    }
    if (e.constructor === Array) {
        var o = void 0, n = void 0, s = Math.max(e.length, t.length);
        for (r = 0; r < s; r++) {
            var i = e[r], a = t[r];
            if (i && i.constructor == Object && (goog.asserts.assert(void 0 === o), goog.asserts.assert(r === e.length - 1), 
            o = i, i = void 0), a && a.constructor == Object && (goog.asserts.assert(void 0 === n), 
            goog.asserts.assert(r === t.length - 1), n = a, a = void 0), !jspb.Message.compareFields(i, a)) return !1;
        }
        return !o && !n || (o = o || {}, n = n || {}, jspb.Message.compareExtensions(o, n));
    }
    if (e.constructor === Object) return jspb.Message.compareExtensions(e, t);
    throw Error("Invalid type in JSPB array");
}, jspb.Message.prototype.cloneMessage = function() {
    return jspb.Message.cloneMessage(this);
}, jspb.Message.prototype.clone = function() {
    return jspb.Message.cloneMessage(this);
}, jspb.Message.clone = function(e) {
    return jspb.Message.cloneMessage(e);
}, jspb.Message.cloneMessage = function(e) {
    return new e.constructor(jspb.Message.clone_(e.toArray()));
}, jspb.Message.copyInto = function(e, t) {
    goog.asserts.assertInstanceof(e, jspb.Message), goog.asserts.assertInstanceof(t, jspb.Message), 
    goog.asserts.assert(e.constructor == t.constructor, "Copy source and target message should have the same type."), 
    e = jspb.Message.clone(e);
    for (var r = t.toArray(), o = e.toArray(), n = r.length = 0; n < o.length; n++) r[n] = o[n];
    t.wrappers_ = e.wrappers_, t.extensionObject_ = e.extensionObject_;
}, jspb.Message.clone_ = function(e) {
    if (goog.isArray(e)) {
        for (var t = Array(e.length), r = 0; r < e.length; r++) {
            var o = e[r];
            null != o && (t[r] = "object" == _typeof2(o) ? jspb.Message.clone_(goog.asserts.assert(o)) : o);
        }
        return t;
    }
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array) return new Uint8Array(e);
    for (r in t = {}, e) null != (o = e[r]) && (t[r] = "object" == _typeof2(o) ? jspb.Message.clone_(goog.asserts.assert(o)) : o);
    return t;
}, jspb.Message.registerMessageType = function(e, t) {
    jspb.Message.registry_[e] = t, t.messageId = e;
}, jspb.Message.registry_ = {}, jspb.Message.messageSetExtensions = {}, jspb.Message.messageSetExtensionsBinary = {}, 
jspb.arith = {}, jspb.arith.UInt64 = function(e, t) {
    this.lo = e, this.hi = t;
}, jspb.arith.UInt64.prototype.cmp = function(e) {
    return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1;
}, jspb.arith.UInt64.prototype.rightShift = function() {
    return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0);
}, jspb.arith.UInt64.prototype.leftShift = function() {
    return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
}, jspb.arith.UInt64.prototype.msb = function() {
    return !!(2147483648 & this.hi);
}, jspb.arith.UInt64.prototype.lsb = function() {
    return !!(1 & this.lo);
}, jspb.arith.UInt64.prototype.zero = function() {
    return 0 == this.lo && 0 == this.hi;
}, jspb.arith.UInt64.prototype.add = function(e) {
    return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0);
}, jspb.arith.UInt64.prototype.sub = function(e) {
    return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0);
}, jspb.arith.UInt64.mul32x32 = function(e, t) {
    var r = 65535 & e, o = 65535 & t, n = t >>> 16;
    for (t = r * o + 65536 * (r * n & 65535) + 65536 * ((e >>>= 16) * o & 65535), r = e * n + (r * n >>> 16) + (e * o >>> 16); 4294967296 <= t; ) t -= 4294967296, 
    r += 1;
    return new jspb.arith.UInt64(t >>> 0, r >>> 0);
}, jspb.arith.UInt64.prototype.mul = function(e) {
    var t = jspb.arith.UInt64.mul32x32(this.lo, e);
    return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo, e.lo = 0, t.add(e);
}, jspb.arith.UInt64.prototype.div = function(e) {
    if (0 == e) return [];
    var t = new jspb.arith.UInt64(0, 0), r = new jspb.arith.UInt64(this.lo, this.hi);
    e = new jspb.arith.UInt64(e, 0);
    for (var o = new jspb.arith.UInt64(1, 0); !e.msb(); ) e = e.leftShift(), o = o.leftShift();
    for (;!o.zero(); ) 0 >= e.cmp(r) && (t = t.add(o), r = r.sub(e)), e = e.rightShift(), 
    o = o.rightShift();
    return [ t, r ];
}, jspb.arith.UInt64.prototype.toString = function() {
    for (var e = "", t = this; !t.zero(); ) {
        var r = (t = t.div(10))[0];
        e = t[1].lo + e, t = r;
    }
    return "" == e && (e = "0"), e;
}, jspb.arith.UInt64.fromString = function(e) {
    for (var t = new jspb.arith.UInt64(0, 0), r = new jspb.arith.UInt64(0, 0), o = 0; o < e.length; o++) {
        if ("0" > e[o] || "9" < e[o]) return null;
        var n = parseInt(e[o], 10);
        r.lo = n, t = t.mul(10).add(r);
    }
    return t;
}, jspb.arith.UInt64.prototype.clone = function() {
    return new jspb.arith.UInt64(this.lo, this.hi);
}, jspb.arith.Int64 = function(e, t) {
    this.lo = e, this.hi = t;
}, jspb.arith.Int64.prototype.add = function(e) {
    return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0);
}, jspb.arith.Int64.prototype.sub = function(e) {
    return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0);
}, jspb.arith.Int64.prototype.clone = function() {
    return new jspb.arith.Int64(this.lo, this.hi);
}, jspb.arith.Int64.prototype.toString = function() {
    var e = 0 != (2147483648 & this.hi), t = new jspb.arith.UInt64(this.lo, this.hi);
    return e && (t = new jspb.arith.UInt64(0, 0).sub(t)), (e ? "-" : "") + t.toString();
}, jspb.arith.Int64.fromString = function(e) {
    var t = 0 < e.length && "-" == e[0];
    return t && (e = e.substring(1)), null === (e = jspb.arith.UInt64.fromString(e)) ? null : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)), 
    new jspb.arith.Int64(e.lo, e.hi));
}, jspb.BinaryEncoder = function() {
    this.buffer_ = [];
}, jspb.BinaryEncoder.prototype.length = function() {
    return this.buffer_.length;
}, jspb.BinaryEncoder.prototype.end = function() {
    var e = this.buffer_;
    return this.buffer_ = [], e;
}, jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(e, t) {
    for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), 
    goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 0 < t || 127 < e; ) this.buffer_.push(127 & e | 128), 
    e = (e >>> 7 | t << 25) >>> 0, t >>>= 7;
    this.buffer_.push(e);
}, jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(e, t) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), 
    goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), 
    this.writeUint32(e), this.writeUint32(t);
}, jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(e) {
    for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e; ) this.buffer_.push(127 & e | 128), 
    e >>>= 7;
    this.buffer_.push(e);
}, jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(e) {
    if (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 
    0 <= e) this.writeUnsignedVarint32(e); else {
        for (var t = 0; 9 > t; t++) this.buffer_.push(127 & e | 128), e >>= 7;
        this.buffer_.push(1);
    }
}, jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), 
    jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), 
    jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 
    this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0);
}, jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), 
    jspb.utils.splitZigzag64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(e) {
    this.writeZigzagVarint64(parseInt(e, 10));
}, jspb.BinaryEncoder.prototype.writeUint8 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && 256 > e), 
    this.buffer_.push(e >>> 0 & 255);
}, jspb.BinaryEncoder.prototype.writeUint16 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && 65536 > e), 
    this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255);
}, jspb.BinaryEncoder.prototype.writeUint32 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), 
    this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), 
    this.buffer_.push(e >>> 24 & 255);
}, jspb.BinaryEncoder.prototype.writeUint64 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), 
    jspb.utils.splitUint64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeInt8 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-128 <= e && 128 > e), 
    this.buffer_.push(e >>> 0 & 255);
}, jspb.BinaryEncoder.prototype.writeInt16 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-32768 <= e && 32768 > e), 
    this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255);
}, jspb.BinaryEncoder.prototype.writeInt32 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 
    this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), 
    this.buffer_.push(e >>> 24 & 255);
}, jspb.BinaryEncoder.prototype.writeInt64 = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), 
    jspb.utils.splitInt64(e), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeInt64String = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63), 
    jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeFloat = function(e) {
    goog.asserts.assert(e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX), 
    jspb.utils.splitFloat32(e), this.writeUint32(jspb.utils.split64Low);
}, jspb.BinaryEncoder.prototype.writeDouble = function(e) {
    goog.asserts.assert(e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX), 
    jspb.utils.splitFloat64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeBool = function(e) {
    goog.asserts.assert(goog.isBoolean(e) || goog.isNumber(e)), this.buffer_.push(e ? 1 : 0);
}, jspb.BinaryEncoder.prototype.writeEnum = function(e) {
    goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 
    this.writeSignedVarint32(e);
}, jspb.BinaryEncoder.prototype.writeBytes = function(e) {
    this.buffer_.push.apply(this.buffer_, e);
}, jspb.BinaryEncoder.prototype.writeVarintHash64 = function(e) {
    jspb.utils.splitHash64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeFixedHash64 = function(e) {
    jspb.utils.splitHash64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High);
}, jspb.BinaryEncoder.prototype.writeString = function(e) {
    for (var t = this.buffer_.length, r = 0; r < e.length; r++) {
        var o = e.charCodeAt(r);
        if (128 > o) this.buffer_.push(o); else if (2048 > o) this.buffer_.push(o >> 6 | 192), 
        this.buffer_.push(63 & o | 128); else if (65536 > o) if (55296 <= o && 56319 >= o && r + 1 < e.length) {
            var n = e.charCodeAt(r + 1);
            56320 <= n && 57343 >= n && (o = 1024 * (o - 55296) + n - 56320 + 65536, this.buffer_.push(o >> 18 | 240), 
            this.buffer_.push(o >> 12 & 63 | 128), this.buffer_.push(o >> 6 & 63 | 128), this.buffer_.push(63 & o | 128), 
            r++);
        } else this.buffer_.push(o >> 12 | 224), this.buffer_.push(o >> 6 & 63 | 128), this.buffer_.push(63 & o | 128);
    }
    return this.buffer_.length - t;
}, jspb.BinaryWriter = function() {
    this.blocks_ = [], this.totalLength_ = 0, this.encoder_ = new jspb.BinaryEncoder(), 
    this.bookmarks_ = [];
}, jspb.BinaryWriter.prototype.appendUint8Array_ = function(e) {
    var t = this.encoder_.end();
    this.blocks_.push(t), this.blocks_.push(e), this.totalLength_ += t.length + e.length;
}, jspb.BinaryWriter.prototype.beginDelimited_ = function(e) {
    return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), e = this.encoder_.end(), 
    this.blocks_.push(e), this.totalLength_ += e.length, e.push(this.totalLength_), 
    e;
}, jspb.BinaryWriter.prototype.endDelimited_ = function(e) {
    var t = e.pop();
    for (t = this.totalLength_ + this.encoder_.length() - t, goog.asserts.assert(0 <= t); 127 < t; ) e.push(127 & t | 128), 
    t >>>= 7, this.totalLength_++;
    e.push(t), this.totalLength_++;
}, jspb.BinaryWriter.prototype.writeSerializedMessage = function(e, t, r) {
    this.appendUint8Array_(e.subarray(t, r));
}, jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(e, t, r) {
    null != e && null != t && null != r && this.writeSerializedMessage(e, t, r);
}, jspb.BinaryWriter.prototype.reset = function() {
    this.blocks_ = [], this.encoder_.end(), this.totalLength_ = 0, this.bookmarks_ = [];
}, jspb.BinaryWriter.prototype.getResultBuffer = function() {
    goog.asserts.assert(0 == this.bookmarks_.length);
    for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), t = this.blocks_, r = t.length, o = 0, n = 0; n < r; n++) {
        var s = t[n];
        e.set(s, o), o += s.length;
    }
    return t = this.encoder_.end(), e.set(t, o), o += t.length, goog.asserts.assert(o == e.length), 
    this.blocks_ = [ e ], e;
}, jspb.BinaryWriter.prototype.getResultBase64String = function(e) {
    return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e);
}, jspb.BinaryWriter.prototype.beginSubMessage = function(e) {
    this.bookmarks_.push(this.beginDelimited_(e));
}, jspb.BinaryWriter.prototype.endSubMessage = function() {
    goog.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop());
}, jspb.BinaryWriter.prototype.writeFieldHeader_ = function(e, t) {
    goog.asserts.assert(1 <= e && e == Math.floor(e)), this.encoder_.writeUnsignedVarint32(8 * e + t);
}, jspb.BinaryWriter.prototype.writeAny = function(e, t, r) {
    var o = jspb.BinaryConstants.FieldType;
    switch (e) {
      case o.DOUBLE:
        this.writeDouble(t, r);
        break;

      case o.FLOAT:
        this.writeFloat(t, r);
        break;

      case o.INT64:
        this.writeInt64(t, r);
        break;

      case o.UINT64:
        this.writeUint64(t, r);
        break;

      case o.INT32:
        this.writeInt32(t, r);
        break;

      case o.FIXED64:
        this.writeFixed64(t, r);
        break;

      case o.FIXED32:
        this.writeFixed32(t, r);
        break;

      case o.BOOL:
        this.writeBool(t, r);
        break;

      case o.STRING:
        this.writeString(t, r);
        break;

      case o.GROUP:
        goog.asserts.fail("Group field type not supported in writeAny()");
        break;

      case o.MESSAGE:
        goog.asserts.fail("Message field type not supported in writeAny()");
        break;

      case o.BYTES:
        this.writeBytes(t, r);
        break;

      case o.UINT32:
        this.writeUint32(t, r);
        break;

      case o.ENUM:
        this.writeEnum(t, r);
        break;

      case o.SFIXED32:
        this.writeSfixed32(t, r);
        break;

      case o.SFIXED64:
        this.writeSfixed64(t, r);
        break;

      case o.SINT32:
        this.writeSint32(t, r);
        break;

      case o.SINT64:
        this.writeSint64(t, r);
        break;

      case o.FHASH64:
        this.writeFixedHash64(t, r);
        break;

      case o.VHASH64:
        this.writeVarintHash64(t, r);
        break;

      default:
        goog.asserts.fail("Invalid field type in writeAny()");
    }
}, jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(t));
}, jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t));
}, jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(t));
}, jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(t));
}, jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(t));
}, jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(t));
}, jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(t));
}, jspb.BinaryWriter.prototype.writeInt32 = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), 
    this.writeSignedVarint32_(e, t));
}, jspb.BinaryWriter.prototype.writeInt32String = function(e, t) {
    null != t && (t = parseInt(t, 10), goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), 
    this.writeSignedVarint32_(e, t));
}, jspb.BinaryWriter.prototype.writeInt64 = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), 
    this.writeSignedVarint64_(e, t));
}, jspb.BinaryWriter.prototype.writeInt64String = function(e, t) {
    null != t && (t = jspb.arith.Int64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), 
    this.encoder_.writeSplitVarint64(t.lo, t.hi));
}, jspb.BinaryWriter.prototype.writeUint32 = function(e, t) {
    null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), 
    this.writeUnsignedVarint32_(e, t));
}, jspb.BinaryWriter.prototype.writeUint32String = function(e, t) {
    null != t && (t = parseInt(t, 10), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), 
    this.writeUnsignedVarint32_(e, t));
}, jspb.BinaryWriter.prototype.writeUint64 = function(e, t) {
    null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), 
    this.writeUnsignedVarint64_(e, t));
}, jspb.BinaryWriter.prototype.writeUint64String = function(e, t) {
    null != t && (t = jspb.arith.UInt64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), 
    this.encoder_.writeSplitVarint64(t.lo, t.hi));
}, jspb.BinaryWriter.prototype.writeSint32 = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), 
    this.writeZigzagVarint32_(e, t));
}, jspb.BinaryWriter.prototype.writeSint64 = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), 
    this.writeZigzagVarint64_(e, t));
}, jspb.BinaryWriter.prototype.writeSint64String = function(e, t) {
    null != t && (goog.asserts.assert(+t >= -jspb.BinaryConstants.TWO_TO_63 && +t < jspb.BinaryConstants.TWO_TO_63), 
    this.writeZigzagVarint64String_(e, t));
}, jspb.BinaryWriter.prototype.writeFixed32 = function(e, t) {
    null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), 
    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(t));
}, jspb.BinaryWriter.prototype.writeFixed64 = function(e, t) {
    null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), 
    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(t));
}, jspb.BinaryWriter.prototype.writeFixed64String = function(e, t) {
    null != t && (t = jspb.arith.UInt64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), 
    this.encoder_.writeSplitFixed64(t.lo, t.hi));
}, jspb.BinaryWriter.prototype.writeSfixed32 = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), 
    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(t));
}, jspb.BinaryWriter.prototype.writeSfixed64 = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), 
    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(t));
}, jspb.BinaryWriter.prototype.writeSfixed64String = function(e, t) {
    null != t && (t = jspb.arith.Int64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), 
    this.encoder_.writeSplitFixed64(t.lo, t.hi));
}, jspb.BinaryWriter.prototype.writeFloat = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), 
    this.encoder_.writeFloat(t));
}, jspb.BinaryWriter.prototype.writeDouble = function(e, t) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), 
    this.encoder_.writeDouble(t));
}, jspb.BinaryWriter.prototype.writeBool = function(e, t) {
    null != t && (goog.asserts.assert(goog.isBoolean(t) || goog.isNumber(t)), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), 
    this.encoder_.writeBool(t));
}, jspb.BinaryWriter.prototype.writeEnum = function(e, t) {
    null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), 
    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t));
}, jspb.BinaryWriter.prototype.writeString = function(e, t) {
    null != t && (e = this.beginDelimited_(e), this.encoder_.writeString(t), this.endDelimited_(e));
}, jspb.BinaryWriter.prototype.writeBytes = function(e, t) {
    null != t && (t = jspb.utils.byteSourceToUint8Array(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(t.length), this.appendUint8Array_(t));
}, jspb.BinaryWriter.prototype.writeMessage = function(e, t, r) {
    null != t && (e = this.beginDelimited_(e), r(t, this), this.endDelimited_(e));
}, jspb.BinaryWriter.prototype.writeMessageSet = function(e, t, r) {
    null != t && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), 
    this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(e), 
    e = this.beginDelimited_(3), r(t, this), this.endDelimited_(e), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
}, jspb.BinaryWriter.prototype.writeGroup = function(e, t, r) {
    null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), 
    r(t, this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP));
}, jspb.BinaryWriter.prototype.writeFixedHash64 = function(e, t) {
    null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), 
    this.encoder_.writeFixedHash64(t));
};

jspb.BinaryWriter.prototype.writeVarintHash64 = function(e, t) {
    null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), 
    this.encoder_.writeVarintHash64(t));
}, jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeSignedVarint32_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeInt32String(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeSignedVarint64_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeInt64String(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeUnsignedVarint32_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeUint32String(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeUnsignedVarint64_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeUint64String(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeZigzagVarint32_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeZigzagVarint64_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeZigzagVarint64String_(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeFixed32(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeFixed64(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeFixed64String(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeSfixed32(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeSfixed64(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeSfixed64String(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedFloat = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeFloat(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedDouble = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeDouble(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedBool = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeBool(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedEnum = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeEnum(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedString = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeString(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedBytes = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeBytes(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedMessage = function(e, t, r) {
    if (null != t) for (var o = 0; o < t.length; o++) {
        var n = this.beginDelimited_(e);
        r(t[o], this), this.endDelimited_(n);
    }
}, jspb.BinaryWriter.prototype.writeRepeatedGroup = function(e, t, r) {
    if (null != t) for (var o = 0; o < t.length; o++) this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), 
    r(t[o], this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP);
}, jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeFixedHash64(e, t[r]);
}, jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(e, t) {
    if (null != t) for (var r = 0; r < t.length; r++) this.writeVarintHash64(e, t[r]);
}, jspb.BinaryWriter.prototype.writePackedInt32 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeSignedVarint32(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedInt32String = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeSignedVarint32(parseInt(t[r], 10));
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedInt64 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeSignedVarint64(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedInt64String = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) {
            var o = jspb.arith.Int64.fromString(t[r]);
            this.encoder_.writeSplitVarint64(o.lo, o.hi);
        }
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedUint32 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeUnsignedVarint32(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedUint32String = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeUnsignedVarint32(parseInt(t[r], 10));
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedUint64 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeUnsignedVarint64(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedUint64String = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) {
            var o = jspb.arith.UInt64.fromString(t[r]);
            this.encoder_.writeSplitVarint64(o.lo, o.hi);
        }
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedSint32 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeZigzagVarint32(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedSint64 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeZigzagVarint64(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedSint64String = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeZigzagVarint64(parseInt(t[r], 10));
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedFixed32 = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(4 * t.length), e = 0; e < t.length; e++) this.encoder_.writeUint32(t[e]);
}, jspb.BinaryWriter.prototype.writePackedFixed64 = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeUint64(t[e]);
}, jspb.BinaryWriter.prototype.writePackedFixed64String = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) {
        var r = jspb.arith.UInt64.fromString(t[e]);
        this.encoder_.writeSplitFixed64(r.lo, r.hi);
    }
}, jspb.BinaryWriter.prototype.writePackedSfixed32 = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(4 * t.length), e = 0; e < t.length; e++) this.encoder_.writeInt32(t[e]);
}, jspb.BinaryWriter.prototype.writePackedSfixed64 = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeInt64(t[e]);
}, jspb.BinaryWriter.prototype.writePackedSfixed64String = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeInt64String(t[e]);
}, jspb.BinaryWriter.prototype.writePackedFloat = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(4 * t.length), e = 0; e < t.length; e++) this.encoder_.writeFloat(t[e]);
}, jspb.BinaryWriter.prototype.writePackedDouble = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeDouble(t[e]);
}, jspb.BinaryWriter.prototype.writePackedBool = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(t.length), e = 0; e < t.length; e++) this.encoder_.writeBool(t[e]);
}, jspb.BinaryWriter.prototype.writePackedEnum = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeEnum(t[r]);
        this.endDelimited_(e);
    }
}, jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(e, t) {
    if (null != t && t.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), 
    this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeFixedHash64(t[e]);
}, jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(e, t) {
    if (null != t && t.length) {
        e = this.beginDelimited_(e);
        for (var r = 0; r < t.length; r++) this.encoder_.writeVarintHash64(t[r]);
        this.endDelimited_(e);
    }
}, jspb.Export = {}, exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, 
exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, 
exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, 
exports.inherits = goog.inherits, exports.object = {
    extend: goog.object.extend
}, exports.typeOf = goog.typeOf;