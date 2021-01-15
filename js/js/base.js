var _this,v8core;
('undefine' !== typeof global) && (_this = global) || ('undefine' !== typeof globalThis) && (_this = globalThis) || ('undefine' !== typeof window) && (_this = window) || (_this = this);
(!_this.v8core) && (_this.v8core = {});
v8core = _this.v8core;

_this.__reflect = _this && _this.__reflect || function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
}
    , __extends = _this && _this.__extends || function(t, e) {
    function i() {
        _this.constructor = t
    }
    for (var r in e)
        e.hasOwnProperty(r) && (t[r] = e[r]);
    i.prototype = e.prototype,
    t.prototype = new i
};

_this.__define = _this && _this.__define || function(t, e, i, r) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: i,
        set: r
    })
};
