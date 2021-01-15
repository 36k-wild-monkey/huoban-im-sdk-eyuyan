var _this,v8core;
('undefine' !== typeof global) && (_this = global) || ('undefine' !== typeof globalThis) && (_this = globalThis) || ('undefine' !== typeof window) && (_this = window) || (_this = this);
(!_this.v8core) && (_this.v8core = {});
v8core = _this.v8core;


!function(t) {
    t.$hashCount = 1;
    var e = function() {
        function e() {
            this.$hashCode = t.$hashCount++
        }
        return Object.defineProperty(e.prototype, "hashCode", {
            get: function() {
                return this.$hashCode
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    t.HashObject = e,
    _this.__reflect(e.prototype, "v8core.HashObject", ["v8core.IHashObject"])
}(v8core || (v8core = {}));