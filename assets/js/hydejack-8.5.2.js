!function (t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }

    r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 146)
}([, function (t, e, r) {
    var n = r(2), i = r(20), o = r(13), s = r(14), a = r(27), c = function t(e, r, c) {
        var u, l, h, p, d = e & t.F, f = e & t.G, m = e & t.P, v = e & t.B,
            y = f ? n : e & t.S ? n[r] || (n[r] = {}) : (n[r] || {}).prototype, g = f ? i : i[r] || (i[r] = {}),
            b = g.prototype || (g.prototype = {});
        for (u in f && (c = r), c) h = ((l = !d && y && void 0 !== y[u]) ? y : c)[u], p = v && l ? a(h, n) : m && "function" == typeof h ? a(Function.call, h) : h, y && s(y, u, h, e & t.U), g[u] != h && o(g, u, p), m && b[u] != h && (b[u] = h)
    };
    n.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function (t, e) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}, function (t, e, r) {
    var n = r(26)("wks"), i = r(22), o = r(2).Symbol, s = "function" == typeof o;
    (t.exports = function (t) {
        return n[t] || (n[t] = s && o[t] ||Hydejack v8.5.2 (s ? o : i)("Symbol." + t))
    }).store = n
}, function (t, e, r) {
    t.exports = !r(7)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, r) {
    "use strict";
    (function (t) {
        r.d(e, "a", function () {
            return o
        });
        var n = "undefined" != typeof window && window,
            i = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            o = n || void 0 !== t && t || i
    }).call(this, r(48))
}, function (t, e, r) {
    var n = r(11);
    t.exports = function (t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, r) {
    var n = r(1), i = r(7), o = r(18), s = /"/g, a = function (t, e, r, n) {
        var i = String(o(t)), a = "<" + e;
        return "" !== r && (a += " " + r + '="' + String(n).replace(s, "&quot;") + '"'), a + ">" + i + "</" + e + ">"
    };
    t.exports = function (t, e) {
        var r = {};
        r[t] = e(a), n(n.P + n.F * i(function () {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }), "String", r)
    }
}, , function (t, e, r) {
    var n = r(6), i = r(51), o = r(21), s = Object.defineProperty;
    e.f = r(4) ? Object.defineProperty : function (t, e, r) {
        if (n(t), e = o(e, !0), n(r), i) try {
            return s(t, e, r)
        } catch (t) {
        }
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value), t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, r) {
    var n = r(18);
    t.exports = function (t) {
        return Object(n(t))
    }
}, function (t, e, r) {
    var n = r(10), i = r(25);
    t.exports = r(4) ? function (t, e, r) {
        return n.f(t, e, i(1, r))
    } : function (t, e, r) {
        return t[e] = r, t
    }
}, function (t, e, r) {
    var n = r(2), i = r(13), o = r(15), s = r(22)("src"), a = r(68), c = ("" + a).split("toString");
    r(20).inspectSource = function (t) {
        return a.call(t)
    }, (t.exports = function (t, e, r, a) {
        var u = "function" == typeof r;
        u && (o(r, "name") || i(r, "name", e)), t[e] !== r && (u && (o(r, s) || i(r, s, t[e] ? "" + t[e] : c.join(String(e)))), t === n ? t[e] = r : a ? t[e] ? t[e] = r : i(t, e, r) : (delete t[e], i(t, e, r)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[s] || a.call(this)
    })
}, function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return r.call(t, e)
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, r) {
    var n = r(28), i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, r) {
    var n = r(79), i = r(18);
    t.exports = function (t) {
        return n(i(t))
    }
}, function (t, e) {
    var r = t.exports = {version: "2.6.5"};
    "number" == typeof __e && (__e = r)
}, function (t, e, r) {
    var n = r(11);
    t.exports = function (t, e) {
        if (!n(t)) return t;
        var r, i;
        if (e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
        if ("function" == typeof (r = t.valueOf) && !n(i = r.call(t))) return i;
        if (!e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    var r = 0, n = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36))
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
        return r.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, r) {
    var n = r(20), i = r(2), o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: n.version,
        mode: r(23) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e, r) {
    var n = r(16);
    t.exports = function (t, e, r) {
        if (n(t), void 0 === e) return t;
        switch (r) {
            case 1:
                return function (r) {
                    return t.call(e, r)
                };
            case 2:
                return function (r, n) {
                    return t.call(e, r, n)
                };
            case 3:
                return function (r, n, i) {
                    return t.call(e, r, n, i)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    var r = Math.ceil, n = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
    }
}, function (t, e, r) {
    "use strict";
    t.exports = r(23) || !r(7)(function () {
        var t = Math.random();
        __defineSetter__.call(null, t, function () {
        }), delete r(2)[t]
    })
}, function (t, e, r) {
    var n = r(41), i = r(25), o = r(19), s = r(21), a = r(15), c = r(51), u = Object.getOwnPropertyDescriptor;
    e.f = r(4) ? u : function (t, e) {
        if (t = o(t), e = s(e, !0), c) try {
            return u(t, e)
        } catch (t) {
        }
        if (a(t, e)) return i(!n.f.call(t, e), t[e])
    }
}, function (t, e, r) {
    "use strict";
    var n = r(6);
    t.exports = function () {
        var t = n(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, r) {
    "use strict";
    var n = r(93), i = RegExp.prototype.exec;
    t.exports = function (t, e) {
        var r = t.exec;
        if ("function" == typeof r) {
            var o = r.call(t, e);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== n(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e)
    }
}, function (t, e, r) {
    "use strict";
    r(94);
    var n = r(14), i = r(13), o = r(7), s = r(18), a = r(3), c = r(45), u = a("species"), l = !o(function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
    }), h = function () {
        var t = /(?:)/, e = t.exec;
        t.exec = function () {
            return e.apply(this, arguments)
        };
        var r = "ab".split(t);
        return 2 === r.length && "a" === r[0] && "b" === r[1]
    }();
    t.exports = function (t, e, r) {
        var p = a(t), d = !o(function () {
            var e = {};
            return e[p] = function () {
                return 7
            }, 7 != ""[t](e)
        }), f = d ? !o(function () {
            var e = !1, r = /a/;
            return r.exec = function () {
                return e = !0, null
            }, "split" === t && (r.constructor = {}, r.constructor[u] = function () {
                return r
            }), r[p](""), !e
        }) : void 0;
        if (!d || !f || "replace" === t && !l || "split" === t && !h) {
            var m = /./[p], v = r(s, p, ""[t], function (t, e, r, n, i) {
                return e.exec === c ? d && !i ? {done: !0, value: m.call(e, r, n)} : {
                    done: !0,
                    value: t.call(r, e, n)
                } : {done: !1}
            }), y = v[0], g = v[1];
            n(String.prototype, t, y), i(RegExp.prototype, p, 2 == e ? function (t, e) {
                return g.call(t, this, e)
            } : function (t) {
                return g.call(t, this)
            })
        }
    }
}, function (t, e, r) {
    var n = r(55), i = r(43);
    t.exports = Object.keys || function (t) {
        return n(t, i)
    }
}, function (t, e, r) {
    "use strict";
    (function (t) {
        var r = function () {
                if ("undefined" != typeof Map) return Map;

                function t(t, e) {
                    var r = -1;
                    return t.some(function (t, n) {
                        return t[0] === e && (r = n, !0)
                    }), r
                }

                return function () {
                    function e() {
                        this.__entries__ = []
                    }

                    return Object.defineProperty(e.prototype, "size", {
                        get: function () {
                            return this.__entries__.length
                        }, enumerable: !0, configurable: !0
                    }), e.prototype.get = function (e) {
                        var r = t(this.__entries__, e), n = this.__entries__[r];
                        return n && n[1]
                    }, e.prototype.set = function (e, r) {
                        var n = t(this.__entries__, e);
                        ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r])
                    }, e.prototype.delete = function (e) {
                        var r = this.__entries__, n = t(r, e);
                        ~n && r.splice(n, 1)
                    }, e.prototype.has = function (e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function () {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function (t, e) {
                        void 0 === e && (e = null);
                        for (var r = 0, n = this.__entries__; r < n.length; r++) {
                            var i = n[r];
                            t.call(e, i[1], i[0])
                        }
                    }, e
                }()
            }(), n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            i = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
            o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function (t) {
                return setTimeout(function () {
                    return t(Date.now())
                }, 1e3 / 60)
            }, s = 2;
        var a = 20, c = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            u = "undefined" != typeof MutationObserver, l = function () {
                function t() {
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                        var r = !1, n = !1, i = 0;

                        function a() {
                            r && (r = !1, t()), n && u()
                        }

                        function c() {
                            o(a)
                        }

                        function u() {
                            var t = Date.now();
                            if (r) {
                                if (t - i < s) return;
                                n = !0
                            } else r = !0, n = !1, setTimeout(c, e);
                            i = t
                        }

                        return u
                    }(this.refresh.bind(this), a)
                }

                return t.prototype.addObserver = function (t) {
                    ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                }, t.prototype.removeObserver = function (t) {
                    var e = this.observers_, r = e.indexOf(t);
                    ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_()
                }, t.prototype.refresh = function () {
                    this.updateObservers_() && this.refresh()
                }, t.prototype.updateObservers_ = function () {
                    var t = this.observers_.filter(function (t) {
                        return t.gatherActive(), t.hasActive()
                    });
                    return t.forEach(function (t) {
                        return t.broadcastActive()
                    }), t.length > 0
                }, t.prototype.connect_ = function () {
                    n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                }, t.prototype.disconnect_ = function () {
                    n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                }, t.prototype.onTransitionEnd_ = function (t) {
                    var e = t.propertyName, r = void 0 === e ? "" : e;
                    c.some(function (t) {
                        return !!~r.indexOf(t)
                    }) && this.refresh()
                }, t.getInstance = function () {
                    return this.instance_ || (this.instance_ = new t), this.instance_
                }, t.instance_ = null, t
            }(), h = function (t, e) {
                for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                    var i = n[r];
                    Object.defineProperty(t, i, {value: e[i], enumerable: !1, writable: !1, configurable: !0})
                }
                return t
            }, p = function (t) {
                return t && t.ownerDocument && t.ownerDocument.defaultView || i
            }, d = b(0, 0, 0, 0);

        function f(t) {
            return parseFloat(t) || 0
        }

        function m(t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            return e.reduce(function (e, r) {
                return e + f(t["border-" + r + "-width"])
            }, 0)
        }

        function v(t) {
            var e = t.clientWidth, r = t.clientHeight;
            if (!e && !r) return d;
            var n = p(t).getComputedStyle(t), i = function (t) {
                for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
                    var i = n[r], o = t["padding-" + i];
                    e[i] = f(o)
                }
                return e
            }(n), o = i.left + i.right, s = i.top + i.bottom, a = f(n.width), c = f(n.height);
            if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= m(n, "left", "right") + o), Math.round(c + s) !== r && (c -= m(n, "top", "bottom") + s)), !function (t) {
                return t === p(t).document.documentElement
            }(t)) {
                var u = Math.round(a + o) - e, l = Math.round(c + s) - r;
                1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(l) && (c -= l)
            }
            return b(i.left, i.top, a, c)
        }

        var y = "undefined" != typeof SVGGraphicsElement ? function (t) {
            return t instanceof p(t).SVGGraphicsElement
        } : function (t) {
            return t instanceof p(t).SVGElement && "function" == typeof t.getBBox
        };

        function g(t) {
            return n ? y(t) ? function (t) {
                var e = t.getBBox();
                return b(0, 0, e.width, e.height)
            }(t) : v(t) : d
        }

        function b(t, e, r, n) {
            return {x: t, y: e, width: r, height: n}
        }

        var _ = function () {
            function t(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = t
            }

            return t.prototype.isActive = function () {
                var t = g(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function () {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
        }(), w = function (t, e) {
            var r, n, i, o, s, a, c,
                u = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), h(c, {
                    x: n,
                    y: i,
                    width: o,
                    height: s,
                    top: i,
                    right: n + o,
                    bottom: s + i,
                    left: n
                }), c);
            h(this, {target: t, contentRect: u})
        }, S = function () {
            function t(t, e, n) {
                if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
            }

            return t.prototype.observe = function (t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new _(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function (t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function () {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function () {
                var t = this;
                this.clearActive(), this.observations_.forEach(function (e) {
                    e.isActive() && t.activeObservations_.push(e)
                })
            }, t.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                    var t = this.callbackCtx_, e = this.activeObservations_.map(function (t) {
                        return new w(t.target, t.broadcastRect())
                    });
                    this.callback_.call(t, e, t), this.clearActive()
                }
            }, t.prototype.clearActive = function () {
                this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function () {
                return this.activeObservations_.length > 0
            }, t
        }(), E = "undefined" != typeof WeakMap ? new WeakMap : new r, x = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var r = l.getInstance(), n = new S(e, r, this);
            E.set(this, n)
        };
        ["observe", "unobserve", "disconnect"].forEach(function (t) {
            x.prototype[t] = function () {
                var e;
                return (e = E.get(this))[t].apply(e, arguments)
            }
        });
        var C = void 0 !== i.ResizeObserver ? i.ResizeObserver : x;
        e.a = C
    }).call(this, r(48))
}, function (t, e, r) {
    "use strict";
    var n = r(141), i = r(144), o = [].slice, s = ["keyword", "gray", "hex"], a = {};
    Object.keys(i).forEach(function (t) {
        a[o.call(i[t].labels).sort().join("")] = t
    });
    var c = {};

    function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);
        if (e && e in s && (e = null), e && !(e in i)) throw new Error("Unknown model: " + e);
        var r, l;
        if (null == t) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1; else if (t instanceof u) this.model = t.model, this.color = t.color.slice(), this.valpha = t.valpha; else if ("string" == typeof t) {
            var h = n.get(t);
            if (null === h) throw new Error("Unable to parse color from string: " + t);
            this.model = h.model, l = i[this.model].channels, this.color = h.value.slice(0, l), this.valpha = "number" == typeof h.value[l] ? h.value[l] : 1
        } else if (t.length) {
            this.model = e || "rgb", l = i[this.model].channels;
            var p = o.call(t, 0, l);
            this.color = d(p, l), this.valpha = "number" == typeof t[l] ? t[l] : 1
        } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [t >> 16 & 255, t >> 8 & 255, 255 & t], this.valpha = 1; else {
            this.valpha = 1;
            var f = Object.keys(t);
            "alpha" in t && (f.splice(f.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
            var m = f.sort().join("");
            if (!(m in a)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
            this.model = a[m];
            var v = i[this.model].labels, y = [];
            for (r = 0; r < v.length; r++) y.push(t[v[r]]);
            this.color = d(y)
        }
        if (c[this.model]) for (l = i[this.model].channels, r = 0; r < l; r++) {
            var g = c[this.model][r];
            g && (this.color[r] = g(this.color[r]))
        }
        this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
    }

    function l(t, e, r) {
        return (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
            (c[t] || (c[t] = []))[e] = r
        }), t = t[0], function (n) {
            var i;
            return arguments.length ? (r && (n = r(n)), (i = this[t]()).color[e] = n, i) : (i = this[t]().color[e], r && (i = r(i)), i)
        }
    }

    function h(t) {
        return function (e) {
            return Math.max(0, Math.min(t, e))
        }
    }

    function p(t) {
        return Array.isArray(t) ? t : [t]
    }

    function d(t, e) {
        for (var r = 0; r < e; r++) "number" != typeof t[r] && (t[r] = 0);
        return t
    }

    u.prototype = {
        toString: function () {
            return this.string()
        },
        toJSON: function () {
            return this[this.model]()
        },
        string: function (t) {
            var e = this.model in n.to ? this : this.rgb(),
                r = 1 === (e = e.round("number" == typeof t ? t : 1)).valpha ? e.color : e.color.concat(this.valpha);
            return n.to[e.model](r)
        },
        percentString: function (t) {
            var e = this.rgb().round("number" == typeof t ? t : 1),
                r = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
            return n.to.rgb.percent(r)
        },
        array: function () {
            return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
        },
        object: function () {
            for (var t = {}, e = i[this.model].channels, r = i[this.model].labels, n = 0; n < e; n++) t[r[n]] = this.color[n];
            return 1 !== this.valpha && (t.alpha = this.valpha), t
        },
        unitArray: function () {
            var t = this.rgb().color;
            return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), t
        },
        unitObject: function () {
            var t = this.rgb().object();
            return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), t
        },
        round: function (t) {
            return t = Math.max(t || 0, 0), new u(this.color.map(function (t) {
                return function (e) {
                    return function (t, e) {
                        return Number(t.toFixed(e))
                    }(e, t)
                }
            }(t)).concat(this.valpha), this.model)
        },
        alpha: function (t) {
            return arguments.length ? new u(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha
        },
        red: l("rgb", 0, h(255)),
        green: l("rgb", 1, h(255)),
        blue: l("rgb", 2, h(255)),
        hue: l(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (t) {
            return (t % 360 + 360) % 360
        }),
        saturationl: l("hsl", 1, h(100)),
        lightness: l("hsl", 2, h(100)),
        saturationv: l("hsv", 1, h(100)),
        value: l("hsv", 2, h(100)),
        chroma: l("hcg", 1, h(100)),
        gray: l("hcg", 2, h(100)),
        white: l("hwb", 1, h(100)),
        wblack: l("hwb", 2, h(100)),
        cyan: l("cmyk", 0, h(100)),
        magenta: l("cmyk", 1, h(100)),
        yellow: l("cmyk", 2, h(100)),
        black: l("cmyk", 3, h(100)),
        x: l("xyz", 0, h(100)),
        y: l("xyz", 1, h(100)),
        z: l("xyz", 2, h(100)),
        l: l("lab", 0, h(100)),
        a: l("lab", 1),
        b: l("lab", 2),
        keyword: function (t) {
            return arguments.length ? new u(t) : i[this.model].keyword(this.color)
        },
        hex: function (t) {
            return arguments.length ? new u(t) : n.to.hex(this.rgb().round().color)
        },
        rgbNumber: function () {
            var t = this.rgb().color;
            return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2]
        },
        luminosity: function () {
            for (var t = this.rgb().color, e = [], r = 0; r < t.length; r++) {
                var n = t[r] / 255;
                e[r] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function (t) {
            var e = this.luminosity(), r = t.luminosity();
            return e > r ? (e + .05) / (r + .05) : (r + .05) / (e + .05)
        },
        level: function (t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        isDark: function () {
            var t = this.rgb().color;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        isLight: function () {
            return !this.isDark()
        },
        negate: function () {
            for (var t = this.rgb(), e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
            return t
        },
        lighten: function (t) {
            var e = this.hsl();
            return e.color[2] += e.color[2] * t, e
        },
        darken: function (t) {
            var e = this.hsl();
            return e.color[2] -= e.color[2] * t, e
        },
        saturate: function (t) {
            var e = this.hsl();
            return e.color[1] += e.color[1] * t, e
        },
        desaturate: function (t) {
            var e = this.hsl();
            return e.color[1] -= e.color[1] * t, e
        },
        whiten: function (t) {
            var e = this.hwb();
            return e.color[1] += e.color[1] * t, e
        },
        blacken: function (t) {
            var e = this.hwb();
            return e.color[2] += e.color[2] * t, e
        },
        grayscale: function () {
            var t = this.rgb().color, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return u.rgb(e, e, e)
        },
        fade: function (t) {
            return this.alpha(this.valpha - this.valpha * t)
        },
        opaquer: function (t) {
            return this.alpha(this.valpha + this.valpha * t)
        },
        rotate: function (t) {
            var e = this.hsl(), r = e.color[0];
            return r = (r = (r + t) % 360) < 0 ? 360 + r : r, e.color[0] = r, e
        },
        mix: function (t, e) {
            if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
            var r = t.rgb(), n = this.rgb(), i = void 0 === e ? .5 : e, o = 2 * i - 1, s = r.alpha() - n.alpha(),
                a = ((o * s == -1 ? o : (o + s) / (1 + o * s)) + 1) / 2, c = 1 - a;
            return u.rgb(a * r.red() + c * n.red(), a * r.green() + c * n.green(), a * r.blue() + c * n.blue(), r.alpha() * i + n.alpha() * (1 - i))
        }
    }, Object.keys(i).forEach(function (t) {
        if (-1 === s.indexOf(t)) {
            var e = i[t].channels;
            u.prototype[t] = function () {
                if (this.model === t) return new u(this);
                if (arguments.length) return new u(arguments, t);
                var r = "number" == typeof arguments[e] ? e : this.valpha;
                return new u(p(i[this.model][t].raw(this.color)).concat(r), t)
            }, u[t] = function (r) {
                return "number" == typeof r && (r = d(o.call(arguments), e)), new u(r, t)
            }
        }
    }), t.exports = u
}, function (t, e, r) {
    var n = r(11), i = r(2).document, o = n(i) && n(i.createElement);
    t.exports = function (t) {
        return o ? i.createElement(t) : {}
    }
}, function (t, e, r) {
    var n = r(24);
    t.exports = Array.isArray || function (t) {
        return "Array" == n(t)
    }
}, function (t, e, r) {
    var n = r(15), i = r(12), o = r(40)("IE_PROTO"), s = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = i(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}, function (t, e, r) {
    var n = r(26)("keys"), i = r(22);
    t.exports = function (t) {
        return n[t] || (n[t] = i(t))
    }
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, r) {
    var n = r(55), i = r(43).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return n(t, i)
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, r) {
    "use strict";
    var n = r(92)(!0);
    t.exports = function (t, e, r) {
        return e + (r ? n(t, e).length : 1)
    }
}, function (t, e, r) {
    "use strict";
    var n, i, o = r(31), s = RegExp.prototype.exec, a = String.prototype.replace, c = s,
        u = (n = /a/, i = /b*/g, s.call(n, "a"), s.call(i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (u || l) && (c = function (t) {
        var e, r, n, i, c = this;
        return l && (r = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))), u && (e = c.lastIndex), n = s.call(c, t), u && n && (c.lastIndex = c.global ? n.index + n[0].length : e), l && n && n.length > 1 && a.call(n[0], r, function () {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0)
        }), n
    }), t.exports = c
}, function (t, e, r) {
    var n = r(10).f, i = r(15), o = r(3)("toStringTag");
    t.exports = function (t, e, r) {
        t && !i(t = r ? t : t.prototype, o) && n(t, o, {configurable: !0, value: e})
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e, r) {
    "use strict";
    var n;
    t.exports = ((n = document.createElement("div")).setAttribute("data-a-b", "c"), Boolean(n.dataset && "c" === n.dataset.aB) ? function (t) {
        return t.dataset
    } : t => {
        var e = {}, {attributes: r} = t;

        function n() {
            return this.value
        }

        function i(t, e) {
            void 0 === e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }

        for (var o = 0, s = r.length; o < s; o++) {
            var a = r[o];
            if (a) {
                var {name: c} = a;
                if (0 === c.indexOf("data-")) {
                    var u = c.slice(5).replace(/-./g, t => t.charAt(1).toUpperCase()), {value: l} = a;
                    Object.defineProperty(e, u, {enumerable: !0, get: n.bind({value: l || ""}), set: i.bind(t, c)})
                }
            }
        }
        return e
    })
}, , function (t, e, r) {
    t.exports = !r(4) && !r(7)(function () {
        return 7 != Object.defineProperty(r(37)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, r) {
    var n = r(3)("unscopables"), i = Array.prototype;
    null == i[n] && r(13)(i, n, {}), t.exports = function (t) {
        i[n][t] = !0
    }
}, function (t, e) {
    t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function (t, e, r) {
    var n = r(6), i = r(16), o = r(3)("species");
    t.exports = function (t, e) {
        var r, s = n(t).constructor;
        return void 0 === s || null == (r = n(s)[o]) ? e : i(r)
    }
}, function (t, e, r) {
    var n = r(15), i = r(19), o = r(88)(!1), s = r(40)("IE_PROTO");
    t.exports = function (t, e) {
        var r, a = i(t), c = 0, u = [];
        for (r in a) r != s && n(a, r) && u.push(r);
        for (; e.length > c;) n(a, r = e[c++]) && (~o(u, r) || u.push(r));
        return u
    }
}, function (t, e, r) {
    var n = r(11), i = r(24), o = r(3)("match");
    t.exports = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function (t, e, r) {
    r(4) && "g" != /./g.flags && r(10).f(RegExp.prototype, "flags", {configurable: !0, get: r(31)})
}, function (t, e, r) {
    e.f = r(3)
}, function (t, e, r) {
    var n = r(2), i = r(20), o = r(23), s = r(58), a = r(10).f;
    t.exports = function (t) {
        var e = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {value: s.f(t)})
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, r) {
    var n = r(6), i = r(102), o = r(43), s = r(40)("IE_PROTO"), a = function () {
    }, c = function () {
        var t, e = r(37)("iframe"), n = o.length;
        for (e.style.display = "none", r(62).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; n--;) delete c.prototype[o[n]];
        return c()
    };
    t.exports = Object.create || function (t, e) {
        var r;
        return null !== t ? (a.prototype = n(t), r = new a, a.prototype = null, r[s] = t) : r = c(), void 0 === e ? r : i(r, e)
    }
}, function (t, e, r) {
    var n = r(2).document;
    t.exports = n && n.documentElement
}, function (t, e, r) {
    var n = r(1), i = r(18), o = r(7), s = r(119), a = "[" + s + "]", c = RegExp("^" + a + a + "*"),
        u = RegExp(a + a + "*$"), l = function (t, e, r) {
            var i = {}, a = o(function () {
                return !!s[t]() || "​" != "​"[t]()
            }), c = i[t] = a ? e(h) : s[t];
            r && (i[r] = c), n(n.P + n.F * a, "String", i)
        }, h = l.trim = function (t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t
        };
    t.exports = l
}, function (t, e, r) {
    "use strict";
    t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function (t, e, r) {
    var n = r(64), i = {};
    for (var o in n) n.hasOwnProperty(o) && (i[n[o]] = o);
    var s = t.exports = {
        rgb: {channels: 3, labels: "rgb"},
        hsl: {channels: 3, labels: "hsl"},
        hsv: {channels: 3, labels: "hsv"},
        hwb: {channels: 3, labels: "hwb"},
        cmyk: {channels: 4, labels: "cmyk"},
        xyz: {channels: 3, labels: "xyz"},
        lab: {channels: 3, labels: "lab"},
        lch: {channels: 3, labels: "lch"},
        hex: {channels: 1, labels: ["hex"]},
        keyword: {channels: 1, labels: ["keyword"]},
        ansi16: {channels: 1, labels: ["ansi16"]},
        ansi256: {channels: 1, labels: ["ansi256"]},
        hcg: {channels: 3, labels: ["h", "c", "g"]},
        apple: {channels: 3, labels: ["r16", "g16", "b16"]},
        gray: {channels: 1, labels: ["gray"]}
    };
    for (var a in s) if (s.hasOwnProperty(a)) {
        if (!("channels" in s[a])) throw new Error("missing channels property: " + a);
        if (!("labels" in s[a])) throw new Error("missing channel labels property: " + a);
        if (s[a].labels.length !== s[a].channels) throw new Error("channel and label counts mismatch: " + a);
        var c = s[a].channels, u = s[a].labels;
        delete s[a].channels, delete s[a].labels, Object.defineProperty(s[a], "channels", {value: c}), Object.defineProperty(s[a], "labels", {value: u})
    }
    s.rgb.hsl = function (t) {
        var e, r, n = t[0] / 255, i = t[1] / 255, o = t[2] / 255, s = Math.min(n, i, o), a = Math.max(n, i, o),
            c = a - s;
        return a === s ? e = 0 : n === a ? e = (i - o) / c : i === a ? e = 2 + (o - n) / c : o === a && (e = 4 + (n - i) / c), (e = Math.min(60 * e, 360)) < 0 && (e += 360), r = (s + a) / 2, [e, 100 * (a === s ? 0 : r <= .5 ? c / (a + s) : c / (2 - a - s)), 100 * r]
    }, s.rgb.hsv = function (t) {
        var e, r, n, i, o, s = t[0] / 255, a = t[1] / 255, c = t[2] / 255, u = Math.max(s, a, c),
            l = u - Math.min(s, a, c), h = function (t) {
                return (u - t) / 6 / l + .5
            };
        return 0 === l ? i = o = 0 : (o = l / u, e = h(s), r = h(a), n = h(c), s === u ? i = n - r : a === u ? i = 1 / 3 + e - n : c === u && (i = 2 / 3 + r - e), i < 0 ? i += 1 : i > 1 && (i -= 1)), [360 * i, 100 * o, 100 * u]
    }, s.rgb.hwb = function (t) {
        var e = t[0], r = t[1], n = t[2];
        return [s.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(r, n))), 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(r, n)))]
    }, s.rgb.cmyk = function (t) {
        var e, r = t[0] / 255, n = t[1] / 255, i = t[2] / 255;
        return [100 * ((1 - r - (e = Math.min(1 - r, 1 - n, 1 - i))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * e]
    }, s.rgb.keyword = function (t) {
        var e = i[t];
        if (e) return e;
        var r, o, s, a = 1 / 0;
        for (var c in n) if (n.hasOwnProperty(c)) {
            var u = n[c],
                l = (o = t, s = u, Math.pow(o[0] - s[0], 2) + Math.pow(o[1] - s[1], 2) + Math.pow(o[2] - s[2], 2));
            l < a && (a = l, r = c)
        }
        return r
    }, s.keyword.rgb = function (t) {
        return n[t]
    }, s.rgb.xyz = function (t) {
        var e = t[0] / 255, r = t[1] / 255, n = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * r + .0722 * n), 100 * (.0193 * e + .1192 * r + .9505 * n)]
    }, s.rgb.lab = function (t) {
        var e = s.rgb.xyz(t), r = e[0], n = e[1], i = e[2];
        return n /= 100, i /= 108.883, r = (r /= 95.047) > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (r - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
    }, s.hsl.rgb = function (t) {
        var e, r, n, i, o, s = t[0] / 360, a = t[1] / 100, c = t[2] / 100;
        if (0 === a) return [o = 255 * c, o, o];
        e = 2 * c - (r = c < .5 ? c * (1 + a) : c + a - c * a), i = [0, 0, 0];
        for (var u = 0; u < 3; u++) (n = s + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (r - e) * n : 2 * n < 1 ? r : 3 * n < 2 ? e + (r - e) * (2 / 3 - n) * 6 : e, i[u] = 255 * o;
        return i
    }, s.hsl.hsv = function (t) {
        var e = t[0], r = t[1] / 100, n = t[2] / 100, i = r, o = Math.max(n, .01);
        return r *= (n *= 2) <= 1 ? n : 2 - n, i *= o <= 1 ? o : 2 - o, [e, 100 * (0 === n ? 2 * i / (o + i) : 2 * r / (n + r)), 100 * ((n + r) / 2)]
    }, s.hsv.rgb = function (t) {
        var e = t[0] / 60, r = t[1] / 100, n = t[2] / 100, i = Math.floor(e) % 6, o = e - Math.floor(e),
            s = 255 * n * (1 - r), a = 255 * n * (1 - r * o), c = 255 * n * (1 - r * (1 - o));
        switch (n *= 255, i) {
            case 0:
                return [n, c, s];
            case 1:
                return [a, n, s];
            case 2:
                return [s, n, c];
            case 3:
                return [s, a, n];
            case 4:
                return [c, s, n];
            case 5:
                return [n, s, a]
        }
    }, s.hsv.hsl = function (t) {
        var e, r, n, i = t[0], o = t[1] / 100, s = t[2] / 100, a = Math.max(s, .01);
        return n = (2 - o) * s, r = o * a, [i, 100 * (r = (r /= (e = (2 - o) * a) <= 1 ? e : 2 - e) || 0), 100 * (n /= 2)]
    }, s.hwb.rgb = function (t) {
        var e, r, n, i, o, s, a, c = t[0] / 360, u = t[1] / 100, l = t[2] / 100, h = u + l;
        switch (h > 1 && (u /= h, l /= h), n = 6 * c - (e = Math.floor(6 * c)), 0 != (1 & e) && (n = 1 - n), i = u + n * ((r = 1 - l) - u), e) {
            default:
            case 6:
            case 0:
                o = r, s = i, a = u;
                break;
            case 1:
                o = i, s = r, a = u;
                break;
            case 2:
                o = u, s = r, a = i;
                break;
            case 3:
                o = u, s = i, a = r;
                break;
            case 4:
                o = i, s = u, a = r;
                break;
            case 5:
                o = r, s = u, a = i
        }
        return [255 * o, 255 * s, 255 * a]
    }, s.cmyk.rgb = function (t) {
        var e = t[0] / 100, r = t[1] / 100, n = t[2] / 100, i = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))]
    }, s.xyz.rgb = function (t) {
        var e, r, n, i = t[0] / 100, o = t[1] / 100, s = t[2] / 100;
        return r = -.9689 * i + 1.8758 * o + .0415 * s, n = .0557 * i + -.204 * o + 1.057 * s, e = (e = 3.2406 * i + -1.5372 * o + -.4986 * s) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
    }, s.xyz.lab = function (t) {
        var e = t[0], r = t[1], n = t[2];
        return r /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (e - r), 200 * (r - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
    }, s.lab.xyz = function (t) {
        var e, r, n, i = t[0];
        e = t[1] / 500 + (r = (i + 16) / 116), n = r - t[2] / 200;
        var o = Math.pow(r, 3), s = Math.pow(e, 3), a = Math.pow(n, 3);
        return r = o > .008856 ? o : (r - 16 / 116) / 7.787, e = s > .008856 ? s : (e - 16 / 116) / 7.787, n = a > .008856 ? a : (n - 16 / 116) / 7.787, [e *= 95.047, r *= 100, n *= 108.883]
    }, s.lab.lch = function (t) {
        var e, r = t[0], n = t[1], i = t[2];
        return (e = 360 * Math.atan2(i, n) / 2 / Math.PI) < 0 && (e += 360), [r, Math.sqrt(n * n + i * i), e]
    }, s.lch.lab = function (t) {
        var e, r = t[0], n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [r, n * Math.cos(e), n * Math.sin(e)]
    }, s.rgb.ansi16 = function (t) {
        var e = t[0], r = t[1], n = t[2], i = 1 in arguments ? arguments[1] : s.rgb.hsv(t)[2];
        if (0 === (i = Math.round(i / 50))) return 30;
        var o = 30 + (Math.round(n / 255) << 2 | Math.round(r / 255) << 1 | Math.round(e / 255));
        return 2 === i && (o += 60), o
    }, s.hsv.ansi16 = function (t) {
        return s.rgb.ansi16(s.hsv.rgb(t), t[2])
    }, s.rgb.ansi256 = function (t) {
        var e = t[0], r = t[1], n = t[2];
        return e === r && r === n ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(n / 255 * 5)
    }, s.ansi16.rgb = function (t) {
        var e = t % 10;
        if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
        var r = .5 * (1 + ~~(t > 50));
        return [(1 & e) * r * 255, (e >> 1 & 1) * r * 255, (e >> 2 & 1) * r * 255]
    }, s.ansi256.rgb = function (t) {
        if (t >= 232) {
            var e = 10 * (t - 232) + 8;
            return [e, e, e]
        }
        var r;
        return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((r = t % 36) / 6) / 5 * 255, r % 6 / 5 * 255]
    }, s.rgb.hex = function (t) {
        var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
        return "000000".substring(e.length) + e
    }, s.hex.rgb = function (t) {
        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e) return [0, 0, 0];
        var r = e[0];
        3 === e[0].length && (r = r.split("").map(function (t) {
            return t + t
        }).join(""));
        var n = parseInt(r, 16);
        return [n >> 16 & 255, n >> 8 & 255, 255 & n]
    }, s.rgb.hcg = function (t) {
        var e, r = t[0] / 255, n = t[1] / 255, i = t[2] / 255, o = Math.max(Math.max(r, n), i),
            s = Math.min(Math.min(r, n), i), a = o - s;
        return e = a <= 0 ? 0 : o === r ? (n - i) / a % 6 : o === n ? 2 + (i - r) / a : 4 + (r - n) / a + 4, e /= 6, [360 * (e %= 1), 100 * a, 100 * (a < 1 ? s / (1 - a) : 0)]
    }, s.hsl.hcg = function (t) {
        var e = t[1] / 100, r = t[2] / 100, n = 1, i = 0;
        return (n = r < .5 ? 2 * e * r : 2 * e * (1 - r)) < 1 && (i = (r - .5 * n) / (1 - n)), [t[0], 100 * n, 100 * i]
    }, s.hsv.hcg = function (t) {
        var e = t[1] / 100, r = t[2] / 100, n = e * r, i = 0;
        return n < 1 && (i = (r - n) / (1 - n)), [t[0], 100 * n, 100 * i]
    }, s.hcg.rgb = function (t) {
        var e = t[0] / 360, r = t[1] / 100, n = t[2] / 100;
        if (0 === r) return [255 * n, 255 * n, 255 * n];
        var i, o = [0, 0, 0], s = e % 1 * 6, a = s % 1, c = 1 - a;
        switch (Math.floor(s)) {
            case 0:
                o[0] = 1, o[1] = a, o[2] = 0;
                break;
            case 1:
                o[0] = c, o[1] = 1, o[2] = 0;
                break;
            case 2:
                o[0] = 0, o[1] = 1, o[2] = a;
                break;
            case 3:
                o[0] = 0, o[1] = c, o[2] = 1;
                break;
            case 4:
                o[0] = a, o[1] = 0, o[2] = 1;
                break;
            default:
                o[0] = 1, o[1] = 0, o[2] = c
        }
        return i = (1 - r) * n, [255 * (r * o[0] + i), 255 * (r * o[1] + i), 255 * (r * o[2] + i)]
    }, s.hcg.hsv = function (t) {
        var e = t[1] / 100, r = e + t[2] / 100 * (1 - e), n = 0;
        return r > 0 && (n = e / r), [t[0], 100 * n, 100 * r]
    }, s.hcg.hsl = function (t) {
        var e = t[1] / 100, r = t[2] / 100 * (1 - e) + .5 * e, n = 0;
        return r > 0 && r < .5 ? n = e / (2 * r) : r >= .5 && r < 1 && (n = e / (2 * (1 - r))), [t[0], 100 * n, 100 * r]
    }, s.hcg.hwb = function (t) {
        var e = t[1] / 100, r = e + t[2] / 100 * (1 - e);
        return [t[0], 100 * (r - e), 100 * (1 - r)]
    }, s.hwb.hcg = function (t) {
        var e = t[1] / 100, r = 1 - t[2] / 100, n = r - e, i = 0;
        return n < 1 && (i = (r - n) / (1 - n)), [t[0], 100 * n, 100 * i]
    }, s.apple.rgb = function (t) {
        return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
    }, s.rgb.apple = function (t) {
        return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
    }, s.gray.rgb = function (t) {
        return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
    }, s.gray.hsl = s.gray.hsv = function (t) {
        return [0, 0, t[0]]
    }, s.gray.hwb = function (t) {
        return [0, 100, t[0]]
    }, s.gray.cmyk = function (t) {
        return [0, 0, 0, t[0]]
    }, s.gray.lab = function (t) {
        return [t[0], 0, 0]
    }, s.gray.hex = function (t) {
        var e = 255 & Math.round(t[0] / 100 * 255), r = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
        return "000000".substring(r.length) + r
    }, s.rgb.gray = function (t) {
        return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
    }
}, function (t, e, r) {
    !function () {
        "use strict";
        t.exports = {
            polyfill: function () {
                var t = window, e = document;
                if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                    var r, n = t.HTMLElement || t.Element, i = 468, o = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: n.prototype.scroll || c,
                            scrollIntoView: n.prototype.scrollIntoView
                        }, s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                        a = (r = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(r) ? 1 : 0);
                    t.scroll = t.scrollTo = function () {
                        void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? m.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : o.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }, t.scrollBy = function () {
                        void 0 !== arguments[0] && (u(arguments[0]) ? o.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                    }, n.prototype.scroll = n.prototype.scrollTo = function () {
                        if (void 0 !== arguments[0]) if (!0 !== u(arguments[0])) {
                            var t = arguments[0].left, e = arguments[0].top;
                            m.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                        } else {
                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                            o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                        }
                    }, n.prototype.scrollBy = function () {
                        void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }, n.prototype.scrollIntoView = function () {
                        if (!0 !== u(arguments[0])) {
                            var r = d(this), n = r.getBoundingClientRect(), i = this.getBoundingClientRect();
                            r !== e.body ? (m.call(this, r, r.scrollLeft + i.left - n.left, r.scrollTop + i.top - n.top), "fixed" !== t.getComputedStyle(r).position && t.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth"
                            })) : t.scrollBy({left: i.left, top: i.top, behavior: "smooth"})
                        } else o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }

                function c(t, e) {
                    this.scrollLeft = t, this.scrollTop = e
                }

                function u(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                    if ("object" == typeof t && "smooth" === t.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function l(t, e) {
                    return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
                }

                function h(e, r) {
                    var n = t.getComputedStyle(e, null)["overflow" + r];
                    return "auto" === n || "scroll" === n
                }

                function p(t) {
                    var e = l(t, "Y") && h(t, "Y"), r = l(t, "X") && h(t, "X");
                    return e || r
                }

                function d(t) {
                    for (; t !== e.body && !1 === p(t);) t = t.parentNode || t.host;
                    return t
                }

                function f(e) {
                    var r, n, o, a, c = (s() - e.startTime) / i;
                    a = c = c > 1 ? 1 : c, r = .5 * (1 - Math.cos(Math.PI * a)), n = e.startX + (e.x - e.startX) * r, o = e.startY + (e.y - e.startY) * r, e.method.call(e.scrollable, n, o), n === e.x && o === e.y || t.requestAnimationFrame(f.bind(t, e))
                }

                function m(r, n, i) {
                    var a, u, l, h, p = s();
                    r === e.body ? (a = t, u = t.scrollX || t.pageXOffset, l = t.scrollY || t.pageYOffset, h = o.scroll) : (a = r, u = r.scrollLeft, l = r.scrollTop, h = c), f({
                        scrollable: a,
                        method: h,
                        startTime: p,
                        startX: u,
                        startY: l,
                        x: n,
                        y: i
                    })
                }
            }
        }
    }()
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(69), o = r(12), s = r(17), a = r(16), c = r(70);
    n(n.P, "Array", {
        flatMap: function (t) {
            var e, r, n = o(this);
            return a(t), e = s(n.length), r = c(n, 0), i(r, n, n, e, 0, 1, t, arguments[1]), r
        }
    }), r(52)("flatMap")
}, function (t, e, r) {
    t.exports = r(26)("native-function-to-string", Function.toString)
}, function (t, e, r) {
    "use strict";
    var n = r(38), i = r(11), o = r(17), s = r(27), a = r(3)("isConcatSpreadable");
    t.exports = function t(e, r, c, u, l, h, p, d) {
        for (var f, m, v = l, y = 0, g = !!p && s(p, d, 3); y < u;) {
            if (y in c) {
                if (f = g ? g(c[y], y, r) : c[y], m = !1, i(f) && (m = void 0 !== (m = f[a]) ? !!m : n(f)), m && h > 0) v = t(e, r, f, o(f.length), v, h - 1) - 1; else {
                    if (v >= 9007199254740991) throw TypeError();
                    e[v] = f
                }
                v++
            }
            y++
        }
        return v
    }
}, function (t, e, r) {
    var n = r(71);
    t.exports = function (t, e) {
        return new (n(t))(e)
    }
}, function (t, e, r) {
    var n = r(11), i = r(38), o = r(3)("species");
    t.exports = function (t) {
        var e;
        return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), n(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(16), o = r(12), s = r(7), a = [].sort, c = [1, 2, 3];
    n(n.P + n.F * (s(function () {
        c.sort(void 0)
    }) || !s(function () {
        c.sort(null)
    }) || !r(73)(a)), "Array", {
        sort: function (t) {
            return void 0 === t ? a.call(o(this)) : a.call(o(this), i(t))
        }
    })
}, function (t, e, r) {
    "use strict";
    var n = r(7);
    t.exports = function (t, e) {
        return !!t && n(function () {
            e ? t.call(null, function () {
            }, 1) : t.call(null)
        })
    }
}, function (t, e, r) {
    var n = r(1), i = r(2).isFinite;
    n(n.S, "Number", {
        isFinite: function (t) {
            return "number" == typeof t && i(t)
        }
    })
}, function (t, e, r) {
    var n = r(1);
    n(n.S, "Number", {
        isNaN: function (t) {
            return t != t
        }
    })
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(12), o = r(16), s = r(10);
    r(4) && n(n.P + r(29), "Object", {
        __defineGetter__: function (t, e) {
            s.f(i(this), t, {get: o(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(12), o = r(16), s = r(10);
    r(4) && n(n.P + r(29), "Object", {
        __defineSetter__: function (t, e) {
            s.f(i(this), t, {set: o(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(12), o = r(21), s = r(39), a = r(30).f;
    r(4) && n(n.P + r(29), "Object", {
        __lookupGetter__: function (t) {
            var e, r = i(this), n = o(t, !0);
            do {
                if (e = a(r, n)) return e.get
            } while (r = s(r))
        }
    })
}, function (t, e, r) {
    var n = r(24);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == n(t) ? t.split("") : Object(t)
    }
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(12), o = r(21), s = r(39), a = r(30).f;
    r(4) && n(n.P + r(29), "Object", {
        __lookupSetter__: function (t) {
            var e, r = i(this), n = o(t, !0);
            do {
                if (e = a(r, n)) return e.set
            } while (r = s(r))
        }
    })
}, function (t, e, r) {
    var n = r(1);
    n(n.S, "Object", {is: r(53)})
}, function (t, e, r) {
    "use strict";
    var n = r(1), i = r(20), o = r(2), s = r(54), a = r(83);
    n(n.P + n.R, "Promise", {
        finally: function (t) {
            var e = s(this, i.Promise || o.Promise), r = "function" == typeof t;
            return this.then(r ? function (r) {
                return a(e, t()).then(function () {
                    return r
                })
            } : t, r ? function (r) {
                return a(e, t()).then(function () {
                    throw r
                })
            } : t)
        }
    })
}, function (t, e, r) {
    var n = r(6), i = r(11), o = r(84);
    t.exports = function (t, e) {
        if (n(t), i(e) && e.constructor === t) return e;
        var r = o.f(t);
        return (0, r.resolve)(e), r.promise
    }
}, function (t, e, r) {
    "use strict";
    var n = r(16);

    function i(t) {
        var e, r;
        this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            e = t, r = n
        }), this.resolve = n(e), this.reject = n(r)
    }

    t.exports.f = function (t) {
        return new i(t)
    }
}, function (t, e, r) {
    var n = r(2), i = r(86), o = r(10).f, s = r(42).f, a = r(56), c = r(31), u = n.RegExp, l = u, h = u.prototype,
        p = /a/g, d = /a/g, f = new u(p) !== p;
    if (r(4) && (!f || r(7)(function () {
        return d[r(3)("match")] = !1, u(p) != p || u(d) == d || "/a/i" != u(p, "i")
    }))) {
        u = function (t, e) {
            var r = this instanceof u, n = a(t), o = void 0 === e;
            return !r && n && t.constructor === u && o ? t : i(f ? new l(n && !o ? t.source : t, e) : l((n = t instanceof u) ? t.source : t, n && o ? c.call(t) : e), r ? this : h, u)
        };
        for (var m = function (t) {
            t in u || o(u, t, {
                configurable: !0, get: function () {
                    return l[t]
                }, set: function (e) {
                    l[t] = e
                }
            })
        }, v = s(l), y = 0; v.length > y;) m(v[y++]);
        h.constructor = u, u.prototype = h, r(14)(n, "RegExp", u)
    }
    r(90)("RegExp")
}, function (t, e, r) {
    var n = r(11), i = r(87).set;
    t.exports = function (t, e, r) {
        var o, s = e.constructor;
        return s !== r && "function" == typeof s && (o = s.prototype) !== r.prototype && n(o) && i && i(t, o), t
    }
}, function (t, e, r) {
    var n = r(11), i = r(6), o = function (t, e) {
        if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
            try {
                (n = r(27)(Function.call, r(30).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function (t, r) {
                return o(t, r), e ? t.__proto__ = r : n(t, r), t
            }
        }({}, !1) : void 0), check: o
    }
}, function (t, e, r) {
    var n = r(19), i = r(17), o = r(89);
    t.exports = function (t) {
        return function (e, r, s) {
            var a, c = n(e), u = i(c.length), l = o(s, u);
            if (t && r != r) {
                for (; u > l;) if ((a = c[l++]) != a) return !0
            } else for (; u > l; l++) if ((t || l in c) && c[l] === r) return t || l || 0;
            return !t && -1
        }
    }
}, function (t, e, r) {
    var n = r(28), i = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e)
    }
}, function (t, e, r) {
    "use strict";
    var n = r(2), i = r(10), o = r(4), s = r(3)("species");
    t.exports = function (t) {
        var e = n[t];
        o && e && !e[s] && i.f(e, s, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, r) {
    "use strict";
    var n = r(6), i = r(17), o = r(44), s = r(32);
    r(33)("match", 1, function (t, e, r, a) {
        return [function (r) {
            var n = t(this), i = null == r ? void 0 : r[e];
            return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n))
        }, function (t) {
            var e = a(r, t, this);
            if (e.done) return e.value;
            var c = n(t), u = String(this);
            if (!c.global) return s(c, u);
            var l = c.unicode;
            c.lastIndex = 0;
            for (var h, p = [], d = 0; null !== (h = s(c, u));) {
                var f = String(h[0]);
                p[d] = f, "" === f && (c.lastIndex = o(u, i(c.lastIndex), l)), d++
            }
            return 0 === d ? null : p
        }]
    })
}, function (t, e, r) {
    var n = r(28), i = r(18);
    t.exports = function (t) {
        return function (e, r) {
            var o, s, a = String(i(e)), c = n(r), u = a.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function (t, e, r) {
    var n = r(24), i = r(3)("toStringTag"), o = "Arguments" == n(function () {
        return arguments
    }());
    t.exports = function (t) {
        var e, r, s;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), i)) ? r : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
    }
}, function (t, e, r) {
    "use strict";
    var n = r(45);
    r(1)({target: "RegExp", proto: !0, forced: n !== /./.exec}, {exec: n})
}, function (t, e, r) {
    "use strict";
    var n = r(6), i = r(12), o = r(17), s = r(28), a = r(44), c = r(32), u = Math.max, l = Math.min, h = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g, d = /\$([$&`']|\d\d?)/g;
    r(33)("replace", 2, function (t, e, r, f) {
        return [function (n, i) {
            var o = t(this), s = null == n ? void 0 : n[e];
            return void 0 !== s ? s.call(n, o, i) : r.call(String(o), n, i)
        }, function (t, e) {
            var i = f(r, t, this, e);
            if (i.done) return i.value;
            var h = n(t), p = String(this), d = "function" == typeof e;
            d || (e = String(e));
            var v = h.global;
            if (v) {
                var y = h.unicode;
                h.lastIndex = 0
            }
            for (var g = []; ;) {
                var b = c(h, p);
                if (null === b) break;
                if (g.push(b), !v) break;
                "" === String(b[0]) && (h.lastIndex = a(p, o(h.lastIndex), y))
            }
            for (var _, w = "", S = 0, E = 0; E < g.length; E++) {
                b = g[E];
                for (var x = String(b[0]), C = u(l(s(b.index), p.length), 0), T = [], N = 1; N < b.length; N++) T.push(void 0 === (_ = b[N]) ? _ : String(_));
                var O = b.groups;
                if (d) {
                    var M = [x].concat(T, C, p);
                    void 0 !== O && M.push(O);
                    var A = String(e.apply(void 0, M))
                } else A = m(x, p, C, T, O, e);
                C >= S && (w += p.slice(S, C) + A, S = C + x.length)
            }
            return w + p.slice(S)
        }];

        function m(t, e, n, o, s, a) {
            var c = n + t.length, u = o.length, l = d;
            return void 0 !== s && (s = i(s), l = p), r.call(a, l, function (r, i) {
                var a;
                switch (i.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return t;
                    case"`":
                        return e.slice(0, n);
                    case"'":
                        return e.slice(c);
                    case"<":
                        a = s[i.slice(1, -1)];
                        break;
                    default:
                        var l = +i;
                        if (0 === l) return r;
                        if (l > u) {
                            var p = h(l / 10);
                            return 0 === p ? r : p <= u ? void 0 === o[p - 1] ? i.charAt(1) : o[p - 1] + i.charAt(1) : r
                        }
                        a = o[l - 1]
                }
                return void 0 === a ? "" : a
            })
        }
    })
}, function (t, e, r) {
    "use strict";
    var n = r(56), i = r(6), o = r(54), s = r(44), a = r(17), c = r(32), u = r(45), l = r(7), h = Math.min, p = [].push,
        d = !l(function () {
            RegExp(4294967295, "y")
        });
    r(33)("split", 2, function (t, e, r, l) {
        var f;
        return f = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
            var i = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!n(t)) return r.call(i, t, e);
            for (var o, s, a, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, d = void 0 === e ? 4294967295 : e >>> 0, f = new RegExp(t.source, l + "g"); (o = u.call(f, i)) && !((s = f.lastIndex) > h && (c.push(i.slice(h, o.index)), o.length > 1 && o.index < i.length && p.apply(c, o.slice(1)), a = o[0].length, h = s, c.length >= d));) f.lastIndex === o.index && f.lastIndex++;
            return h === i.length ? !a && f.test("") || c.push("") : c.push(i.slice(h)), c.length > d ? c.slice(0, d) : c
        } : "0".split(void 0, 0).length ? function (t, e) {
            return void 0 === t && 0 === e ? [] : r.call(this, t, e)
        } : r, [function (r, n) {
            var i = t(this), o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, i, n) : f.call(String(i), r, n)
        }, function (t, e) {
            var n = l(f, t, this, e, f !== r);
            if (n.done) return n.value;
            var u = i(t), p = String(this), m = o(u, RegExp), v = u.unicode,
                y = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (d ? "y" : "g"),
                g = new m(d ? u : "^(?:" + u.source + ")", y), b = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === b) return [];
            if (0 === p.length) return null === c(g, p) ? [p] : [];
            for (var _ = 0, w = 0, S = []; w < p.length;) {
                g.lastIndex = d ? w : 0;
                var E, x = c(g, d ? p : p.slice(w));
                if (null === x || (E = h(a(g.lastIndex + (d ? 0 : w)), p.length)) === _) w = s(p, w, v); else {
                    if (S.push(p.slice(_, w)), S.length === b) return S;
                    for (var C = 1; C <= x.length - 1; C++) if (S.push(x[C]), S.length === b) return S;
                    w = _ = E
                }
            }
            return S.push(p.slice(_)), S
        }]
    })
}, function (t, e, r) {
    "use strict";
    var n = r(6), i = r(53), o = r(32);
    r(33)("search", 1, function (t, e, r, s) {
        return [function (r) {
            var n = t(this), i = null == r ? void 0 : r[e];
            return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n))
        }, function (t) {
            var e = s(r, t, this);
            if (e.done) return e.value;
            var a = n(t), c = String(this), u = a.lastIndex;
            i(u, 0) || (a.lastIndex = 0);
            var l = o(a, c);
            return i(a.lastIndex, u) || (a.lastIndex = u), null === l ? -1 : l.index
        }]
    })
}, function (t, e, r) {
    "use strict";
    r(57);
    var n = r(6), i = r(31), o = r(4), s = /./.toString, a = function (t) {
        r(14)(RegExp.prototype, "toString", t, !0)
    };
    r(7)(function () {
        return "/a/b" != s.call({source: "a", flags: "b"})
    }) ? a(function () {
        var t = n(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
    }) : "toString" != s.name && a(function () {
        return s.call(this)
    })
}, function (t, e, r) {
    "use strict";
    var n = r(2), i = r(15), o = r(4), s = r(1), a = r(14), c = r(100).KEY, u = r(7), l = r(26), h = r(46), p = r(22),
        d = r(3), f = r(58), m = r(59), v = r(101), y = r(38), g = r(6), b = r(11), _ = r(12), w = r(19), S = r(21),
        E = r(25), x = r(61), C = r(103), T = r(30), N = r(60), O = r(10), M = r(34), A = T.f, k = O.f, R = C.f,
        P = n.Symbol, I = n.JSON, L = I && I.stringify, j = d("_hidden"), D = d("toPrimitive"),
        F = {}.propertyIsEnumerable, H = l("symbol-registry"), q = l("symbols"), B = l("op-symbols"),
        U = Object.prototype, z = "function" == typeof P && !!N.f, V = n.QObject,
        W = !V || !V.prototype || !V.prototype.findChild, $ = o && u(function () {
            return 7 != x(k({}, "a", {
                get: function () {
                    return k(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, e, r) {
            var n = A(U, e);
            n && delete U[e], k(t, e, r), n && t !== U && k(U, e, n)
        } : k, X = function (t) {
            var e = q[t] = x(P.prototype);
            return e._k = t, e
        }, Y = z && "symbol" == typeof P.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof P
        }, G = function (t, e, r) {
            return t === U && G(B, e, r), g(t), e = S(e, !0), g(r), i(q, e) ? (r.enumerable ? (i(t, j) && t[j][e] && (t[j][e] = !1), r = x(r, {enumerable: E(0, !1)})) : (i(t, j) || k(t, j, E(1, {})), t[j][e] = !0), $(t, e, r)) : k(t, e, r)
        }, K = function (t, e) {
            g(t);
            for (var r, n = v(e = w(e)), i = 0, o = n.length; o > i;) G(t, r = n[i++], e[r]);
            return t
        }, J = function (t) {
            var e = F.call(this, t = S(t, !0));
            return !(this === U && i(q, t) && !i(B, t)) && (!(e || !i(this, t) || !i(q, t) || i(this, j) && this[j][t]) || e)
        }, Z = function (t, e) {
            if (t = w(t), e = S(e, !0), t !== U || !i(q, e) || i(B, e)) {
                var r = A(t, e);
                return !r || !i(q, e) || i(t, j) && t[j][e] || (r.enumerable = !0), r
            }
        }, Q = function (t) {
            for (var e, r = R(w(t)), n = [], o = 0; r.length > o;) i(q, e = r[o++]) || e == j || e == c || n.push(e);
            return n
        }, tt = function (t) {
            for (var e, r = t === U, n = R(r ? B : w(t)), o = [], s = 0; n.length > s;) !i(q, e = n[s++]) || r && !i(U, e) || o.push(q[e]);
            return o
        };
    z || (a((P = function () {
        if (this instanceof P) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function e(r) {
            this === U && e.call(B, r), i(this, j) && i(this[j], t) && (this[j][t] = !1), $(this, t, E(1, r))
        };
        return o && W && $(U, t, {configurable: !0, set: e}), X(t)
    }).prototype, "toString", function () {
        return this._k
    }), T.f = Z, O.f = G, r(42).f = C.f = Q, r(41).f = J, N.f = tt, o && !r(23) && a(U, "propertyIsEnumerable", J, !0), f.f = function (t) {
        return X(d(t))
    }), s(s.G + s.W + s.F * !z, {Symbol: P});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; et.length > rt;) d(et[rt++]);
    for (var nt = M(d.store), it = 0; nt.length > it;) m(nt[it++]);
    s(s.S + s.F * !z, "Symbol", {
        for: function (t) {
            return i(H, t += "") ? H[t] : H[t] = P(t)
        }, keyFor: function (t) {
            if (!Y(t)) throw TypeError(t + " is not a symbol!");
            for (var e in H) if (H[e] === t) return e
        }, useSetter: function () {
            W = !0
        }, useSimple: function () {
            W = !1
        }
    }), s(s.S + s.F * !z, "Object", {
        create: function (t, e) {
            return void 0 === e ? x(t) : K(x(t), e)
        },
        defineProperty: G,
        defineProperties: K,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: tt
    });
    var ot = u(function () {
        N.f(1)
    });
    s(s.S + s.F * ot, "Object", {
        getOwnPropertySymbols: function (t) {
            return N.f(_(t))
        }
    }), I && s(s.S + s.F * (!z || u(function () {
        var t = P();
        return "[null]" != L([t]) || "{}" != L({a: t}) || "{}" != L(Object(t))
    })), "JSON", {
        stringify: function (t) {
            for (var e, r, n = [t], i = 1; arguments.length > i;) n.push(arguments[i++]);
            if (r = e = n[1], (b(e) || void 0 !== t) && !Y(t)) return y(e) || (e = function (t, e) {
                if ("function" == typeof r && (e = r.call(this, t, e)), !Y(e)) return e
            }), n[1] = e, L.apply(I, n)
        }
    }), P.prototype[D] || r(13)(P.prototype, D, P.prototype.valueOf), h(P, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0)
}, function (t, e, r) {
    var n = r(22)("meta"), i = r(11), o = r(15), s = r(10).f, a = 0, c = Object.isExtensible || function () {
        return !0
    }, u = !r(7)(function () {
        return c(Object.preventExtensions({}))
    }), l = function (t) {
        s(t, n, {value: {i: "O" + ++a, w: {}}})
    }, h = t.exports = {
        KEY: n, NEED: !1, fastKey: function (t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, n)) {
                if (!c(t)) return "F";
                if (!e) return "E";
                l(t)
            }
            return t[n].i
        }, getWeak: function (t, e) {
            if (!o(t, n)) {
                if (!c(t)) return !0;
                if (!e) return !1;
                l(t)
            }
            return t[n].w
        }, onFreeze: function (t) {
            return u && h.NEED && c(t) && !o(t, n) && l(t), t
        }
    }
}, function (t, e, r) {
    var n = r(34), i = r(60), o = r(41);
    t.exports = function (t) {
        var e = n(t), r = i.f;
        if (r) for (var s, a = r(t), c = o.f, u = 0; a.length > u;) c.call(t, s = a[u++]) && e.push(s);
        return e
    }
}, function (t, e, r) {
    var n = r(10), i = r(6), o = r(34);
    t.exports = r(4) ? Object.defineProperties : function (t, e) {
        i(t);
        for (var r, s = o(e), a = s.length, c = 0; a > c;) n.f(t, r = s[c++], e[r]);
        return t
    }
}, function (t, e, r) {
    var n = r(19), i = r(42).f, o = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
        return s && "[object Window]" == o.call(t) ? function (t) {
            try {
                return i(t)
            } catch (t) {
                return s.slice()
            }
        }(t) : i(n(t))
    }
}, function (t, e, r) {
    r(59)("asyncIterator")
}, function (t, e, r) {
    "use strict";
    r(8)("anchor", function (t) {
        return function (e) {
            return t(this, "a", "name", e)
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("big", function (t) {
        return function () {
            return t(this, "big", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("blink", function (t) {
        return function () {
            return t(this, "blink", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("bold", function (t) {
        return function () {
            return t(this, "b", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("fixed", function (t) {
        return function () {
            return t(this, "tt", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("fontcolor", function (t) {
        return function (e) {
            return t(this, "font", "color", e)
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("fontsize", function (t) {
        return function (e) {
            return t(this, "font", "size", e)
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("italics", function (t) {
        return function () {
            return t(this, "i", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("link", function (t) {
        return function (e) {
            return t(this, "a", "href", e)
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("small", function (t) {
        return function () {
            return t(this, "small", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("strike", function (t) {
        return function () {
            return t(this, "strike", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("sub", function (t) {
        return function () {
            return t(this, "sub", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(8)("sup", function (t) {
        return function () {
            return t(this, "sup", "", "")
        }
    })
}, function (t, e, r) {
    "use strict";
    r(63)("trimLeft", function (t) {
        return function () {
            return t(this, 1)
        }
    }, "trimStart")
}, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (t, e, r) {
    "use strict";
    r(63)("trimRight", function (t) {
        return function () {
            return t(this, 2)
        }
    }, "trimEnd")
}, function (t, e, r) {
    var n = r(2), i = r(1), o = r(122), s = [].slice, a = /MSIE .\./.test(o), c = function (t) {
        return function (e, r) {
            var n = arguments.length > 2, i = !!n && s.call(arguments, 2);
            return t(n ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, i)
            } : e, r)
        }
    };
    i(i.G + i.B + i.F * a, {setTimeout: c(n.setTimeout), setInterval: c(n.setInterval)})
}, function (t, e, r) {
    var n = r(2).navigator;
    t.exports = n && n.userAgent || ""
}, function (t, e, r) {
    var n = r(1), i = r(124);
    n(n.G + n.B, {setImmediate: i.set, clearImmediate: i.clear})
}, function (t, e, r) {
    var n, i, o, s = r(27), a = r(125), c = r(62), u = r(37), l = r(2), h = l.process, p = l.setImmediate,
        d = l.clearImmediate, f = l.MessageChannel, m = l.Dispatch, v = 0, y = {}, g = function () {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t], e()
            }
        }, b = function (t) {
            g.call(t.data)
        };
    p && d || (p = function (t) {
        for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
        return y[++v] = function () {
            a("function" == typeof t ? t : Function(t), e)
        }, n(v), v
    }, d = function (t) {
        delete y[t]
    }, "process" == r(24)(h) ? n = function (t) {
        h.nextTick(s(g, t, 1))
    } : m && m.now ? n = function (t) {
        m.now(s(g, t, 1))
    } : f ? (o = (i = new f).port2, i.port1.onmessage = b, n = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function (t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : n = "onreadystatechange" in u("script") ? function (t) {
        c.appendChild(u("script")).onreadystatechange = function () {
            c.removeChild(this), g.call(t)
        }
    } : function (t) {
        setTimeout(s(g, t, 1), 0)
    }), t.exports = {set: p, clear: d}
}, function (t, e) {
    t.exports = function (t, e, r) {
        var n = void 0 === r;
        switch (e.length) {
            case 0:
                return n ? t() : t.call(r);
            case 1:
                return n ? t(e[0]) : t.call(r, e[0]);
            case 2:
                return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
            case 3:
                return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
            case 4:
                return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
        }
        return t.apply(r, e)
    }
}, function (t, e, r) {
    for (var n = r(127), i = r(34), o = r(14), s = r(2), a = r(13), c = r(47), u = r(3), l = u("iterator"), h = u("toStringTag"), p = c.Array, d = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, f = i(d), m = 0; m < f.length; m++) {
        var v, y = f[m], g = d[y], b = s[y], _ = b && b.prototype;
        if (_ && (_[l] || a(_, l, p), _[h] || a(_, h, y), c[y] = p, g)) for (v in n) _[v] || o(_, v, n[v], !0)
    }
}, function (t, e, r) {
    "use strict";
    var n = r(52), i = r(128), o = r(47), s = r(19);
    t.exports = r(129)(Array, "Array", function (t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
    }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, r) {
    "use strict";
    var n = r(23), i = r(1), o = r(14), s = r(13), a = r(47), c = r(130), u = r(46), l = r(39), h = r(3)("iterator"),
        p = !([].keys && "next" in [].keys()), d = function () {
            return this
        };
    t.exports = function (t, e, r, f, m, v, y) {
        c(r, e, f);
        var g, b, _, w = function (t) {
                if (!p && t in C) return C[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new r(this, t)
                        }
                }
                return function () {
                    return new r(this, t)
                }
            }, S = e + " Iterator", E = "values" == m, x = !1, C = t.prototype, T = C[h] || C["@@iterator"] || m && C[m],
            N = T || w(m), O = m ? E ? w("entries") : N : void 0, M = "Array" == e && C.entries || T;
        if (M && (_ = l(M.call(new t))) !== Object.prototype && _.next && (u(_, S, !0), n || "function" == typeof _[h] || s(_, h, d)), E && T && "values" !== T.name && (x = !0, N = function () {
            return T.call(this)
        }), n && !y || !p && !x && C[h] || s(C, h, N), a[e] = N, a[S] = d, m) if (g = {
            values: E ? N : w("values"),
            keys: v ? N : w("keys"),
            entries: O
        }, y) for (b in g) b in C || o(C, b, g[b]); else i(i.P + i.F * (p || x), e, g);
        return g
    }
}, function (t, e, r) {
    "use strict";
    var n = r(61), i = r(25), o = r(46), s = {};
    r(13)(s, r(3)("iterator"), function () {
        return this
    }), t.exports = function (t, e, r) {
        t.prototype = n(s, {next: i(1, r)}), o(t, e + " Iterator")
    }
}, function (t, e) {
    !function () {
        "use strict";
        if ("object" == typeof window) if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function () {
                return this.intersectionRatio > 0
            }
        }); else {
            var t = window.document, e = [];
            n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function (t) {
                if (!this._observationTargets.some(function (e) {
                    return e.element == t
                })) {
                    if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: t,
                        entry: null
                    }), this._monitorIntersections(), this._checkForIntersections()
                }
            }, n.prototype.unobserve = function (t) {
                this._observationTargets = this._observationTargets.filter(function (e) {
                    return e.element != t
                }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
            }, n.prototype.disconnect = function () {
                this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
            }, n.prototype.takeRecords = function () {
                var t = this._queuedEntries.slice();
                return this._queuedEntries = [], t
            }, n.prototype._initThresholds = function (t) {
                var e = t || [0];
                return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, r) {
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return t !== r[e - 1]
                })
            }, n.prototype._parseRootMargin = function (t) {
                var e = (t || "0px").split(/\s+/).map(function (t) {
                    var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                    if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                    return {value: parseFloat(e[1]), unit: e[2]}
                });
                return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
            }, n.prototype._monitorIntersections = function () {
                this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(window, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
            }, n.prototype._unmonitorIntersections = function () {
                this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(window, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
            }, n.prototype._checkForIntersections = function () {
                var t = this._rootIsInDom(),
                    e = t ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
                this._observationTargets.forEach(function (n) {
                    var i = n.element, o = s(i), a = this._rootContainsTarget(i), c = n.entry,
                        u = t && a && this._computeTargetAndRootIntersection(i, e), l = n.entry = new r({
                            time: window.performance && performance.now && performance.now(),
                            target: i,
                            boundingClientRect: o,
                            rootBounds: e,
                            intersectionRect: u
                        });
                    c ? t && a ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }, n.prototype._computeTargetAndRootIntersection = function (e, r) {
                if ("none" != window.getComputedStyle(e).display) {
                    for (var n, i, o, a, u, l, h, p, d = s(e), f = c(e), m = !1; !m;) {
                        var v = null, y = 1 == f.nodeType ? window.getComputedStyle(f) : {};
                        if ("none" == y.display) return;
                        if (f == this.root || f == t ? (m = !0, v = r) : f != t.body && f != t.documentElement && "visible" != y.overflow && (v = s(f)), v && (n = v, i = d, o = void 0, a = void 0, u = void 0, l = void 0, h = void 0, p = void 0, o = Math.max(n.top, i.top), a = Math.min(n.bottom, i.bottom), u = Math.max(n.left, i.left), l = Math.min(n.right, i.right), p = a - o, !(d = (h = l - u) >= 0 && p >= 0 && {
                            top: o,
                            bottom: a,
                            left: u,
                            right: l,
                            width: h,
                            height: p
                        }))) break;
                        f = c(f)
                    }
                    return d
                }
            }, n.prototype._getRootRect = function () {
                var e;
                if (this.root) e = s(this.root); else {
                    var r = t.documentElement, n = t.body;
                    e = {
                        top: 0,
                        left: 0,
                        right: r.clientWidth || n.clientWidth,
                        width: r.clientWidth || n.clientWidth,
                        bottom: r.clientHeight || n.clientHeight,
                        height: r.clientHeight || n.clientHeight
                    }
                }
                return this._expandRectByRootMargin(e)
            }, n.prototype._expandRectByRootMargin = function (t) {
                var e = this._rootMarginValues.map(function (e, r) {
                    return "px" == e.unit ? e.value : e.value * (r % 2 ? t.width : t.height) / 100
                }), r = {top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3]};
                return r.width = r.right - r.left, r.height = r.bottom - r.top, r
            }, n.prototype._hasCrossedThreshold = function (t, e) {
                var r = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                    n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                if (r !== n) for (var i = 0; i < this.thresholds.length; i++) {
                    var o = this.thresholds[i];
                    if (o == r || o == n || o < r != o < n) return !0
                }
            }, n.prototype._rootIsInDom = function () {
                return !this.root || a(t, this.root)
            }, n.prototype._rootContainsTarget = function (e) {
                return a(this.root || t, e)
            }, n.prototype._registerInstance = function () {
                e.indexOf(this) < 0 && e.push(this)
            }, n.prototype._unregisterInstance = function () {
                var t = e.indexOf(this);
                -1 != t && e.splice(t, 1)
            }, window.IntersectionObserver = n, window.IntersectionObserverEntry = r
        }

        function r(t) {
            this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect, r = e.width * e.height, n = this.intersectionRect, i = n.width * n.height;
            this.intersectionRatio = r ? Number((i / r).toFixed(4)) : this.isIntersecting ? 1 : 0
        }

        function n(t, e) {
            var r, n, i, o = e || {};
            if ("function" != typeof t) throw new Error("callback must be a function");
            if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = (r = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function () {
                i || (i = setTimeout(function () {
                    r(), i = null
                }, n))
            }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
                return t.value + t.unit
            }).join(" ")
        }

        function i(t, e, r, n) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, r, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, r)
        }

        function o(t, e, r, n) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, r, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, r)
        }

        function s(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {
            }
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }), e) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
        }

        function a(t, e) {
            for (var r = e; r;) {
                if (r == t) return !0;
                r = c(r)
            }
            return !1
        }

        function c(t) {
            var e = t.parentNode;
            return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
        }
    }()
}, function (t, e) {
    var r, n;
    n = {}, function (t, e) {
        function r() {
            this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = p
        }

        function n() {
            return t.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0)
        }

        function i(e, n, i) {
            var o = new r;
            return n && (o.fill = "both", o.duration = "auto"), "number" != typeof e || isNaN(e) ? void 0 !== e && Object.getOwnPropertyNames(e).forEach(function (r) {
                if ("auto" != e[r]) {
                    if (("number" == typeof o[r] || "duration" == r) && ("number" != typeof e[r] || isNaN(e[r]))) return;
                    if ("fill" == r && -1 == l.indexOf(e[r])) return;
                    if ("direction" == r && -1 == h.indexOf(e[r])) return;
                    if ("playbackRate" == r && 1 !== e[r] && t.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
                    o[r] = e[r]
                }
            }) : o.duration = e, o
        }

        function o(t, e, r, n) {
            return t < 0 || t > 1 || r < 0 || r > 1 ? p : function (i) {
                function o(t, e, r) {
                    return 3 * t * (1 - r) * (1 - r) * r + 3 * e * (1 - r) * r * r + r * r * r
                }

                if (i <= 0) {
                    var s = 0;
                    return t > 0 ? s = e / t : !e && r > 0 && (s = n / r), s * i
                }
                if (i >= 1) {
                    var a = 0;
                    return r < 1 ? a = (n - 1) / (r - 1) : 1 == r && t < 1 && (a = (e - 1) / (t - 1)), 1 + a * (i - 1)
                }
                for (var c = 0, u = 1; c < u;) {
                    var l = (c + u) / 2, h = o(t, r, l);
                    if (Math.abs(i - h) < 1e-5) return o(e, n, l);
                    h < i ? c = l : u = l
                }
                return o(e, n, l)
            }
        }

        function s(t, e) {
            return function (r) {
                if (r >= 1) return 1;
                var n = 1 / t;
                return (r += e * n) - r % n
            }
        }

        function a(t) {
            y || (y = document.createElement("div").style), y.animationTimingFunction = "", y.animationTimingFunction = t;
            var e = y.animationTimingFunction;
            if ("" == e && n()) throw new TypeError(t + " is not a valid value for easing");
            return e
        }

        function c(t) {
            if ("linear" == t) return p;
            var e = b.exec(t);
            if (e) return o.apply(this, e.slice(1).map(Number));
            var r = _.exec(t);
            if (r) return s(Number(r[1]), m);
            var n = w.exec(t);
            return n ? s(Number(n[1]), {start: d, middle: f, end: m}[n[2]]) : v[t] || p
        }

        function u(t, e, r) {
            if (null == e) return S;
            var n = r.delay + t + r.endDelay;
            return e < Math.min(r.delay, n) ? E : e >= Math.min(r.delay + t, n) ? x : C
        }

        var l = "backwards|forwards|both|none".split("|"), h = "reverse|alternate|alternate-reverse".split("|"),
            p = function (t) {
                return t
            };
        r.prototype = {
            _setMember: function (e, r) {
                this["_" + e] = r, this._effect && (this._effect._timingInput[e] = r, this._effect._timing = t.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = t.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
            }, get playbackRate() {
                return this._playbackRate
            }, set delay(t) {
                this._setMember("delay", t)
            }, get delay() {
                return this._delay
            }, set endDelay(t) {
                this._setMember("endDelay", t)
            }, get endDelay() {
                return this._endDelay
            }, set fill(t) {
                this._setMember("fill", t)
            }, get fill() {
                return this._fill
            }, set iterationStart(t) {
                if ((isNaN(t) || t < 0) && n()) throw new TypeError("iterationStart must be a non-negative number, received: " + t);
                this._setMember("iterationStart", t)
            }, get iterationStart() {
                return this._iterationStart
            }, set duration(t) {
                if ("auto" != t && (isNaN(t) || t < 0) && n()) throw new TypeError("duration must be non-negative or auto, received: " + t);
                this._setMember("duration", t)
            }, get duration() {
                return this._duration
            }, set direction(t) {
                this._setMember("direction", t)
            }, get direction() {
                return this._direction
            }, set easing(t) {
                this._easingFunction = c(a(t)), this._setMember("easing", t)
            }, get easing() {
                return this._easing
            }, set iterations(t) {
                if ((isNaN(t) || t < 0) && n()) throw new TypeError("iterations must be non-negative, received: " + t);
                this._setMember("iterations", t)
            }, get iterations() {
                return this._iterations
            }
        };
        var d = 1, f = .5, m = 0, v = {
                ease: o(.25, .1, .25, 1),
                "ease-in": o(.42, 0, 1, 1),
                "ease-out": o(0, 0, .58, 1),
                "ease-in-out": o(.42, 0, .58, 1),
                "step-start": s(1, d),
                "step-middle": s(1, f),
                "step-end": s(1, m)
            }, y = null, g = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
            b = new RegExp("cubic-bezier\\(" + g + "," + g + "," + g + "," + g + "\\)"), _ = /steps\(\s*(\d+)\s*\)/,
            w = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/, S = 0, E = 1, x = 2, C = 3;
        t.cloneTimingInput = function (t) {
            if ("number" == typeof t) return t;
            var e = {};
            for (var r in t) e[r] = t[r];
            return e
        }, t.makeTiming = i, t.numericTimingToObject = function (t) {
            return "number" == typeof t && (t = isNaN(t) ? {duration: 0} : {duration: t}), t
        }, t.normalizeTimingInput = function (e, r) {
            return i(e = t.numericTimingToObject(e), r)
        }, t.calculateActiveDuration = function (t) {
            return Math.abs(function (t) {
                return 0 === t.duration || 0 === t.iterations ? 0 : t.duration * t.iterations
            }(t) / t.playbackRate)
        }, t.calculateIterationProgress = function (t, e, r) {
            var n = u(t, e, r), i = function (t, e, r, n, i) {
                switch (n) {
                    case E:
                        return "backwards" == e || "both" == e ? 0 : null;
                    case C:
                        return r - i;
                    case x:
                        return "forwards" == e || "both" == e ? t : null;
                    case S:
                        return null
                }
            }(t, r.fill, e, n, r.delay);
            if (null === i) return null;
            var o = function (t, e, r, n, i) {
                var o = i;
                return 0 === t ? e !== E && (o += r) : o += n / t, o
            }(r.duration, n, r.iterations, i, r.iterationStart), s = function (t, e, r, n, i, o) {
                var s = t === 1 / 0 ? e % 1 : t % 1;
                return 0 !== s || r !== x || 0 === n || 0 === i && 0 !== o || (s = 1), s
            }(o, r.iterationStart, n, r.iterations, i, r.duration), a = function (t, e, r, n) {
                return t === x && e === 1 / 0 ? 1 / 0 : 1 === r ? Math.floor(n) - 1 : Math.floor(n)
            }(n, r.iterations, s, o), c = function (t, e, r) {
                var n = t;
                if ("normal" !== t && "reverse" !== t) {
                    var i = e;
                    "alternate-reverse" === t && (i += 1), n = "normal", i !== 1 / 0 && i % 2 != 0 && (n = "reverse")
                }
                return "normal" === n ? r : 1 - r
            }(r.direction, a, s);
            return r._easingFunction(c)
        }, t.calculatePhase = u, t.normalizeEasing = a, t.parseEasingFunction = c
    }(r = {}), function (t, e) {
        function r(t, e) {
            return t in c && c[t][e] || e
        }

        function n(t, e, n) {
            if (!function (t) {
                return "display" === t || 0 === t.lastIndexOf("animation", 0) || 0 === t.lastIndexOf("transition", 0)
            }(t)) {
                var i = o[t];
                if (i) for (var a in s.style[t] = e, i) {
                    var c = i[a], u = s.style[c];
                    n[c] = r(c, u)
                } else n[t] = r(t, e)
            }
        }

        function i(t) {
            var e = [];
            for (var r in t) if (!(r in ["easing", "offset", "composite"])) {
                var n = t[r];
                Array.isArray(n) || (n = [n]);
                for (var i, o = n.length, s = 0; s < o; s++) (i = {}).offset = "offset" in t ? t.offset : 1 == o ? 1 : s / (o - 1), "easing" in t && (i.easing = t.easing), "composite" in t && (i.composite = t.composite), i[r] = n[s], e.push(i)
            }
            return e.sort(function (t, e) {
                return t.offset - e.offset
            }), e
        }

        var o = {
                background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
                border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
                borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
                borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
                borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
                borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
                borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
                borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
                flex: ["flexGrow", "flexShrink", "flexBasis"],
                font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
                margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
                outline: ["outlineColor", "outlineStyle", "outlineWidth"],
                padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
            }, s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            a = {thin: "1px", medium: "3px", thick: "5px"}, c = {
                borderBottomWidth: a,
                borderLeftWidth: a,
                borderRightWidth: a,
                borderTopWidth: a,
                fontSize: {
                    "xx-small": "60%",
                    "x-small": "75%",
                    small: "89%",
                    medium: "100%",
                    large: "120%",
                    "x-large": "150%",
                    "xx-large": "200%"
                },
                fontWeight: {normal: "400", bold: "700"},
                outlineWidth: a,
                textShadow: {none: "0px 0px 0px transparent"},
                boxShadow: {none: "0px 0px 0px 0px transparent"}
            };
        t.convertToArrayForm = i, t.normalizeKeyframes = function (e) {
            if (null == e) return [];
            window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || (e = i(e));
            for (var r = e.map(function (e) {
                var r = {};
                for (var i in e) {
                    var o = e[i];
                    if ("offset" == i) {
                        if (null != o) {
                            if (o = Number(o), !isFinite(o)) throw new TypeError("Keyframe offsets must be numbers.");
                            if (o < 0 || o > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.")
                        }
                    } else if ("composite" == i) {
                        if ("add" == o || "accumulate" == o) throw{
                            type: DOMException.NOT_SUPPORTED_ERR,
                            name: "NotSupportedError",
                            message: "add compositing is not supported"
                        };
                        if ("replace" != o) throw new TypeError("Invalid composite mode " + o + ".")
                    } else o = "easing" == i ? t.normalizeEasing(o) : "" + o;
                    n(i, o, r)
                }
                return null == r.offset && (r.offset = null), null == r.easing && (r.easing = "linear"), r
            }), o = !0, s = -1 / 0, a = 0; a < r.length; a++) {
                var c = r[a].offset;
                if (null != c) {
                    if (c < s) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
                    s = c
                } else o = !1
            }
            return r = r.filter(function (t) {
                return t.offset >= 0 && t.offset <= 1
            }), o || function () {
                var t = r.length;
                null == r[t - 1].offset && (r[t - 1].offset = 1), t > 1 && null == r[0].offset && (r[0].offset = 0);
                for (var e = 0, n = r[0].offset, i = 1; i < t; i++) {
                    var o = r[i].offset;
                    if (null != o) {
                        for (var s = 1; s < i - e; s++) r[e + s].offset = n + (o - n) * s / (i - e);
                        e = i, n = o
                    }
                }
            }(), r
        }
    }(r), function (t) {
        var e = {};
        t.isDeprecated = function (t, r, n, i) {
            var o = i ? "are" : "is", s = new Date, a = new Date(r);
            return a.setMonth(a.getMonth() + 3), !(s < a && (t in e || console.warn("Web Animations: " + t + " " + o + " deprecated and will stop working on " + a.toDateString() + ". " + n), e[t] = !0, 1))
        }, t.deprecated = function (e, r, n, i) {
            var o = i ? "are" : "is";
            if (t.isDeprecated(e, r, n, i)) throw new Error(e + " " + o + " no longer supported. " + n)
        }
    }(r), function () {
        if (document.documentElement.animate) {
            var t = document.documentElement.animate([], 0), e = !0;
            if (t && (e = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (r) {
                void 0 === t[r] && (e = !0)
            })), !e) return
        }
        !function (t, e, r) {
            e.convertEffectInput = function (r) {
                var n = function (t) {
                    for (var e = {}, r = 0; r < t.length; r++) for (var n in t[r]) if ("offset" != n && "easing" != n && "composite" != n) {
                        var i = {offset: t[r].offset, easing: t[r].easing, value: t[r][n]};
                        e[n] = e[n] || [], e[n].push(i)
                    }
                    for (var o in e) {
                        var s = e[o];
                        if (0 != s[0].offset || 1 != s[s.length - 1].offset) throw{
                            type: DOMException.NOT_SUPPORTED_ERR,
                            name: "NotSupportedError",
                            message: "Partial keyframes are not supported"
                        }
                    }
                    return e
                }(t.normalizeKeyframes(r)), i = function (r) {
                    var n = [];
                    for (var i in r) for (var o = r[i], s = 0; s < o.length - 1; s++) {
                        var a = s, c = s + 1, u = o[a].offset, l = o[c].offset, h = u, p = l;
                        0 == s && (h = -1 / 0, 0 == l && (c = a)), s == o.length - 2 && (p = 1 / 0, 1 == u && (a = c)), n.push({
                            applyFrom: h,
                            applyTo: p,
                            startOffset: o[a].offset,
                            endOffset: o[c].offset,
                            easingFunction: t.parseEasingFunction(o[a].easing),
                            property: i,
                            interpolation: e.propertyInterpolation(i, o[a].value, o[c].value)
                        })
                    }
                    return n.sort(function (t, e) {
                        return t.startOffset - e.startOffset
                    }), n
                }(n);
                return function (t, r) {
                    if (null != r) i.filter(function (t) {
                        return r >= t.applyFrom && r < t.applyTo
                    }).forEach(function (n) {
                        var i = r - n.startOffset, o = n.endOffset - n.startOffset,
                            s = 0 == o ? 0 : n.easingFunction(i / o);
                        e.apply(t, n.property, n.interpolation(s))
                    }); else for (var o in n) "offset" != o && "easing" != o && "composite" != o && e.clear(t, o)
                }
            }
        }(r, n), function (t, e, r) {
            function n(t) {
                return t.replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase()
                })
            }

            function i(t, e, r) {
                o[r] = o[r] || [], o[r].push([t, e])
            }

            var o = {};
            e.addPropertiesHandler = function (t, e, r) {
                for (var o = 0; o < r.length; o++) i(t, e, n(r[o]))
            };
            var s = {
                backgroundColor: "transparent",
                backgroundPosition: "0% 0%",
                borderBottomColor: "currentColor",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderBottomWidth: "3px",
                borderLeftColor: "currentColor",
                borderLeftWidth: "3px",
                borderRightColor: "currentColor",
                borderRightWidth: "3px",
                borderSpacing: "2px",
                borderTopColor: "currentColor",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderTopWidth: "3px",
                bottom: "auto",
                clip: "rect(0px, 0px, 0px, 0px)",
                color: "black",
                fontSize: "100%",
                fontWeight: "400",
                height: "auto",
                left: "auto",
                letterSpacing: "normal",
                lineHeight: "120%",
                marginBottom: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                marginTop: "0px",
                maxHeight: "none",
                maxWidth: "none",
                minHeight: "0px",
                minWidth: "0px",
                opacity: "1.0",
                outlineColor: "invert",
                outlineOffset: "0px",
                outlineWidth: "3px",
                paddingBottom: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "0px",
                right: "auto",
                strokeDasharray: "none",
                strokeDashoffset: "0px",
                textIndent: "0px",
                textShadow: "0px 0px 0px transparent",
                top: "auto",
                transform: "",
                verticalAlign: "0px",
                visibility: "visible",
                width: "auto",
                wordSpacing: "normal",
                zIndex: "auto"
            };
            e.propertyInterpolation = function (r, i, a) {
                var c = r;
                /-/.test(r) && !t.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (c = n(r)), "initial" != i && "initial" != a || ("initial" == i && (i = s[c]), "initial" == a && (a = s[c]));
                for (var u = i == a ? [] : o[c], l = 0; u && l < u.length; l++) {
                    var h = u[l][0](i), p = u[l][0](a);
                    if (void 0 !== h && void 0 !== p) {
                        var d = u[l][1](h, p);
                        if (d) {
                            var f = e.Interpolation.apply(null, d);
                            return function (t) {
                                return 0 == t ? i : 1 == t ? a : f(t)
                            }
                        }
                    }
                }
                return e.Interpolation(!1, !0, function (t) {
                    return t ? a : i
                })
            }
        }(r, n), function (t, e, r) {
            e.KeyframeEffect = function (r, n, i, o) {
                var s, a = function (e) {
                    var r = t.calculateActiveDuration(e), n = function (n) {
                        return t.calculateIterationProgress(r, n, e)
                    };
                    return n._totalDuration = e.delay + r + e.endDelay, n
                }(t.normalizeTimingInput(i)), c = e.convertEffectInput(n), u = function () {
                    c(r, s)
                };
                return u._update = function (t) {
                    return null !== (s = a(t))
                }, u._clear = function () {
                    c(r, null)
                }, u._hasSameTarget = function (t) {
                    return r === t
                }, u._target = r, u._totalDuration = a._totalDuration, u._id = o, u
            }
        }(r, n), function (t, e) {
            function r(t, e, r) {
                r.enumerable = !0, r.configurable = !0, Object.defineProperty(t, e, r)
            }

            function n(t) {
                this._element = t, this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style, this._style = t.style, this._length = 0, this._isAnimatedProperty = {}, this._updateSvgTransformAttr = function (t, e) {
                    return !(!e.namespaceURI || -1 == e.namespaceURI.indexOf("/svg")) && (o in t || (t[o] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)), t[o])
                }(window, t), this._savedTransformAttr = null;
                for (var e = 0; e < this._style.length; e++) {
                    var r = this._style[e];
                    this._surrogateStyle[r] = this._style[r]
                }
                this._updateIndices()
            }

            function i(t) {
                if (!t._webAnimationsPatchedStyle) {
                    var e = new n(t);
                    try {
                        r(t, "style", {
                            get: function () {
                                return e
                            }
                        })
                    } catch (e) {
                        t.style._set = function (e, r) {
                            t.style[e] = r
                        }, t.style._clear = function (e) {
                            t.style[e] = ""
                        }
                    }
                    t._webAnimationsPatchedStyle = t.style
                }
            }

            var o = "_webAnimationsUpdateSvgTransformAttr", s = {cssText: 1, length: 1, parentRule: 1}, a = {
                getPropertyCSSValue: 1,
                getPropertyPriority: 1,
                getPropertyValue: 1,
                item: 1,
                removeProperty: 1,
                setProperty: 1
            }, c = {removeProperty: 1, setProperty: 1};
            for (var u in n.prototype = {
                get cssText() {
                    return this._surrogateStyle.cssText
                }, set cssText(t) {
                    for (var e = {}, r = 0; r < this._surrogateStyle.length; r++) e[this._surrogateStyle[r]] = !0;
                    for (this._surrogateStyle.cssText = t, this._updateIndices(), r = 0; r < this._surrogateStyle.length; r++) e[this._surrogateStyle[r]] = !0;
                    for (var n in e) this._isAnimatedProperty[n] || this._style.setProperty(n, this._surrogateStyle.getPropertyValue(n))
                }, get length() {
                    return this._surrogateStyle.length
                }, get parentRule() {
                    return this._style.parentRule
                }, _updateIndices: function () {
                    for (; this._length < this._surrogateStyle.length;) Object.defineProperty(this, this._length, {
                        configurable: !0,
                        enumerable: !1,
                        get: function (t) {
                            return function () {
                                return this._surrogateStyle[t]
                            }
                        }(this._length)
                    }), this._length++;
                    for (; this._length > this._surrogateStyle.length;) this._length--, Object.defineProperty(this, this._length, {
                        configurable: !0,
                        enumerable: !1,
                        value: void 0
                    })
                }, _set: function (e, r) {
                    this._style[e] = r, this._isAnimatedProperty[e] = !0, this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (null == this._savedTransformAttr && (this._savedTransformAttr = this._element.getAttribute("transform")), this._element.setAttribute("transform", t.transformToSvgMatrix(r)))
                }, _clear: function (e) {
                    this._style[e] = this._surrogateStyle[e], this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (this._savedTransformAttr ? this._element.setAttribute("transform", this._savedTransformAttr) : this._element.removeAttribute("transform"), this._savedTransformAttr = null), delete this._isAnimatedProperty[e]
                }
            }, a) n.prototype[u] = function (t, e) {
                return function () {
                    var r = this._surrogateStyle[t].apply(this._surrogateStyle, arguments);
                    return e && (this._isAnimatedProperty[arguments[0]] || this._style[t].apply(this._style, arguments), this._updateIndices()), r
                }
            }(u, u in c);
            for (var l in document.documentElement.style) l in s || l in a || function (t) {
                r(n.prototype, t, {
                    get: function () {
                        return this._surrogateStyle[t]
                    }, set: function (e) {
                        this._surrogateStyle[t] = e, this._updateIndices(), this._isAnimatedProperty[t] || (this._style[t] = e)
                    }
                })
            }(l);
            t.apply = function (e, r, n) {
                i(e), e.style._set(t.propertyName(r), n)
            }, t.clear = function (e, r) {
                e._webAnimationsPatchedStyle && e.style._clear(t.propertyName(r))
            }
        }(n), function (t) {
            window.Element.prototype.animate = function (e, r) {
                var n = "";
                return r && r.id && (n = r.id), t.timeline._play(t.KeyframeEffect(this, e, r, n))
            }
        }(n), function (t, e) {
            t.Interpolation = function (t, e, r) {
                return function (n) {
                    return r(function t(e, r, n) {
                        if ("number" == typeof e && "number" == typeof r) return e * (1 - n) + r * n;
                        if ("boolean" == typeof e && "boolean" == typeof r) return n < .5 ? e : r;
                        if (e.length == r.length) {
                            for (var i = [], o = 0; o < e.length; o++) i.push(t(e[o], r[o], n));
                            return i
                        }
                        throw"Mismatched interpolation arguments " + e + ":" + r
                    }(t, e, n))
                }
            }
        }(n), function (t, e) {
            var r = function () {
                function t(t, e) {
                    for (var r = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], n = 0; n < 4; n++) for (var i = 0; i < 4; i++) for (var o = 0; o < 4; o++) r[n][i] += e[n][o] * t[o][i];
                    return r
                }

                return function (e, r, n, i, o) {
                    for (var s = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], a = 0; a < 4; a++) s[a][3] = o[a];
                    for (a = 0; a < 3; a++) for (var c = 0; c < 3; c++) s[3][a] += e[c] * s[c][a];
                    var u = i[0], l = i[1], h = i[2], p = i[3],
                        d = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
                    d[0][0] = 1 - 2 * (l * l + h * h), d[0][1] = 2 * (u * l - h * p), d[0][2] = 2 * (u * h + l * p), d[1][0] = 2 * (u * l + h * p), d[1][1] = 1 - 2 * (u * u + h * h), d[1][2] = 2 * (l * h - u * p), d[2][0] = 2 * (u * h - l * p), d[2][1] = 2 * (l * h + u * p), d[2][2] = 1 - 2 * (u * u + l * l), s = t(s, d);
                    var f = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
                    for (n[2] && (f[2][1] = n[2], s = t(s, f)), n[1] && (f[2][1] = 0, f[2][0] = n[0], s = t(s, f)), n[0] && (f[2][0] = 0, f[1][0] = n[0], s = t(s, f)), a = 0; a < 3; a++) for (c = 0; c < 3; c++) s[a][c] *= r[a];
                    return function (t) {
                        return 0 == t[0][2] && 0 == t[0][3] && 0 == t[1][2] && 0 == t[1][3] && 0 == t[2][0] && 0 == t[2][1] && 1 == t[2][2] && 0 == t[2][3] && 0 == t[3][2] && 1 == t[3][3]
                    }(s) ? [s[0][0], s[0][1], s[1][0], s[1][1], s[3][0], s[3][1]] : s[0].concat(s[1], s[2], s[3])
                }
            }();
            t.composeMatrix = r, t.quat = function (e, r, n) {
                var i = t.dot(e, r), o = [];
                if (1 === (i = function (t, e, r) {
                    return Math.max(Math.min(t, r), e)
                }(i, -1, 1))) o = e; else for (var s = Math.acos(i), a = 1 * Math.sin(n * s) / Math.sqrt(1 - i * i), c = 0; c < 4; c++) o.push(e[c] * (Math.cos(n * s) - i * a) + r[c] * a);
                return o
            }
        }(n), function (t, e, r) {
            t.sequenceNumber = 0;
            var n = function (t, e, r) {
                this.target = t, this.currentTime = e, this.timelineTime = r, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
            };
            e.Animation = function (e) {
                this.id = "", e && e._id && (this.id = e._id), this._sequenceNumber = t.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = e, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1
            }, e.Animation.prototype = {
                _ensureAlive: function () {
                    this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, e.timeline._animations.push(this))
                }, _tickCurrentTime: function (t, e) {
                    t != this._currentTime && (this._currentTime = t, this._isFinished && !e && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive())
                }, get currentTime() {
                    return this._idle || this._currentTimePending ? null : this._currentTime
                }, set currentTime(t) {
                    t = +t, isNaN(t) || (e.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - t / this._playbackRate), this._currentTimePending = !1, this._currentTime != t && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(t, !0), e.applyDirtiedAnimation(this)))
                }, get startTime() {
                    return this._startTime
                }, set startTime(t) {
                    t = +t, isNaN(t) || this._paused || this._idle || (this._startTime = t, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), e.applyDirtiedAnimation(this))
                }, get playbackRate() {
                    return this._playbackRate
                }, set playbackRate(t) {
                    if (t != this._playbackRate) {
                        var r = this.currentTime;
                        this._playbackRate = t, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)), null != r && (this.currentTime = r)
                    }
                }, get _isFinished() {
                    return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
                }, get _totalDuration() {
                    return this._effect._totalDuration
                }, get playState() {
                    return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
                }, _rewind: function () {
                    if (this._playbackRate >= 0) this._currentTime = 0; else {
                        if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
                        this._currentTime = this._totalDuration
                    }
                }, play: function () {
                    this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)
                }, pause: function () {
                    this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0
                }, finish: function () {
                    this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, e.applyDirtiedAnimation(this))
                }, cancel: function () {
                    this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), e.applyDirtiedAnimation(this))
                }, reverse: function () {
                    this.playbackRate *= -1, this.play()
                }, addEventListener: function (t, e) {
                    "function" == typeof e && "finish" == t && this._finishHandlers.push(e)
                }, removeEventListener: function (t, e) {
                    if ("finish" == t) {
                        var r = this._finishHandlers.indexOf(e);
                        r >= 0 && this._finishHandlers.splice(r, 1)
                    }
                }, _fireEvents: function (t) {
                    if (this._isFinished) {
                        if (!this._finishedFlag) {
                            var e = new n(this, this._currentTime, t),
                                r = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                            setTimeout(function () {
                                r.forEach(function (t) {
                                    t.call(e.target, e)
                                })
                            }, 0), this._finishedFlag = !0
                        }
                    } else this._finishedFlag = !1
                }, _tick: function (t, e) {
                    this._idle || this._paused || (null == this._startTime ? e && (this.startTime = t - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((t - this._startTime) * this.playbackRate)), e && (this._currentTimePending = !1, this._fireEvents(t))
                }, get _needsTick() {
                    return this.playState in {pending: 1, running: 1} || !this._finishedFlag
                }, _targetAnimations: function () {
                    var t = this._effect._target;
                    return t._activeAnimations || (t._activeAnimations = []), t._activeAnimations
                }, _markTarget: function () {
                    var t = this._targetAnimations();
                    -1 === t.indexOf(this) && t.push(this)
                }, _unmarkTarget: function () {
                    var t = this._targetAnimations(), e = t.indexOf(this);
                    -1 !== e && t.splice(e, 1)
                }
            }
        }(r, n), function (t, e, r) {
            function n(t) {
                var e = u;
                u = [], t < m.currentTime && (t = m.currentTime), m._animations.sort(i), m._animations = a(t, !0, m._animations)[0], e.forEach(function (e) {
                    e[1](t)
                }), s()
            }

            function i(t, e) {
                return t._sequenceNumber - e._sequenceNumber
            }

            function o() {
                this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0
            }

            function s() {
                d.forEach(function (t) {
                    t()
                }), d.length = 0
            }

            function a(t, r, n) {
                f = !0, p = !1, e.timeline.currentTime = t, h = !1;
                var i = [], o = [], s = [], a = [];
                return n.forEach(function (e) {
                    e._tick(t, r), e._inEffect ? (o.push(e._effect), e._markTarget()) : (i.push(e._effect), e._unmarkTarget()), e._needsTick && (h = !0);
                    var n = e._inEffect || e._needsTick;
                    e._inTimeline = n, n ? s.push(e) : a.push(e)
                }), d.push.apply(d, i), d.push.apply(d, o), h && requestAnimationFrame(function () {
                }), f = !1, [s, a]
            }

            var c = window.requestAnimationFrame, u = [], l = 0;
            window.requestAnimationFrame = function (t) {
                var e = l++;
                return 0 == u.length && c(n), u.push([e, t]), e
            }, window.cancelAnimationFrame = function (t) {
                u.forEach(function (e) {
                    e[0] == t && (e[1] = function () {
                    })
                })
            }, o.prototype = {
                _play: function (r) {
                    r._timing = t.normalizeTimingInput(r.timing);
                    var n = new e.Animation(r);
                    return n._idle = !1, n._timeline = this, this._animations.push(n), e.restart(), e.applyDirtiedAnimation(n), n
                }
            };
            var h = !1, p = !1;
            e.restart = function () {
                return h || (h = !0, requestAnimationFrame(function () {
                }), p = !0), p
            }, e.applyDirtiedAnimation = function (t) {
                if (!f) {
                    t._markTarget();
                    var r = t._targetAnimations();
                    r.sort(i), a(e.timeline.currentTime, !1, r.slice())[1].forEach(function (t) {
                        var e = m._animations.indexOf(t);
                        -1 !== e && m._animations.splice(e, 1)
                    }), s()
                }
            };
            var d = [], f = !1, m = new o;
            e.timeline = m
        }(r, n), function (t, e) {
            function r(t, e) {
                for (var r = 0, n = 0; n < t.length; n++) r += t[n] * e[n];
                return r
            }

            function n(t, e) {
                return [t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15]]
            }

            function i(t) {
                var e = t.rad || 0;
                return ((t.deg || 0) / 360 + (t.grad || 0) / 400 + (t.turn || 0)) * (2 * Math.PI) + e
            }

            function o(t) {
                switch (t.t) {
                    case"rotatex":
                        var e = i(t.d[0]);
                        return [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1];
                    case"rotatey":
                        return e = i(t.d[0]), [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1];
                    case"rotate":
                    case"rotatez":
                        return e = i(t.d[0]), [Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"rotate3d":
                        var r = t.d[0], n = t.d[1], o = t.d[2], s = (e = i(t.d[3]), r * r + n * n + o * o);
                        if (0 === s) r = 1, n = 0, o = 0; else if (1 !== s) {
                            var a = Math.sqrt(s);
                            r /= a, n /= a, o /= a
                        }
                        var c = Math.sin(e / 2), u = c * Math.cos(e / 2), l = c * c;
                        return [1 - 2 * (n * n + o * o) * l, 2 * (r * n * l + o * u), 2 * (r * o * l - n * u), 0, 2 * (r * n * l - o * u), 1 - 2 * (r * r + o * o) * l, 2 * (n * o * l + r * u), 0, 2 * (r * o * l + n * u), 2 * (n * o * l - r * u), 1 - 2 * (r * r + n * n) * l, 0, 0, 0, 0, 1];
                    case"scale":
                        return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"scalex":
                        return [t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"scaley":
                        return [1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"scalez":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1];
                    case"scale3d":
                        return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, t.d[2], 0, 0, 0, 0, 1];
                    case"skew":
                        var h = i(t.d[0]), p = i(t.d[1]);
                        return [1, Math.tan(p), 0, 0, Math.tan(h), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"skewx":
                        return e = i(t.d[0]), [1, 0, 0, 0, Math.tan(e), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"skewy":
                        return e = i(t.d[0]), [1, Math.tan(e), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    case"translate":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r = t.d[0].px || 0, n = t.d[1].px || 0, 0, 1];
                    case"translatex":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r = t.d[0].px || 0, 0, 0, 1];
                    case"translatey":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, n = t.d[0].px || 0, 0, 1];
                    case"translatez":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, o = t.d[0].px || 0, 1];
                    case"translate3d":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r = t.d[0].px || 0, n = t.d[1].px || 0, o = t.d[2].px || 0, 1];
                    case"perspective":
                        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t.d[0].px ? -1 / t.d[0].px : 0, 0, 0, 0, 1];
                    case"matrix":
                        return [t.d[0], t.d[1], 0, 0, t.d[2], t.d[3], 0, 0, 0, 0, 1, 0, t.d[4], t.d[5], 0, 1];
                    case"matrix3d":
                        return t.d
                }
            }

            function s(t) {
                return 0 === t.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : t.map(o).reduce(n)
            }

            var a = function () {
                function t(t) {
                    return t[0][0] * t[1][1] * t[2][2] + t[1][0] * t[2][1] * t[0][2] + t[2][0] * t[0][1] * t[1][2] - t[0][2] * t[1][1] * t[2][0] - t[1][2] * t[2][1] * t[0][0] - t[2][2] * t[0][1] * t[1][0]
                }

                function e(t) {
                    var e = n(t);
                    return [t[0] / e, t[1] / e, t[2] / e]
                }

                function n(t) {
                    return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
                }

                function i(t, e, r, n) {
                    return [r * t[0] + n * e[0], r * t[1] + n * e[1], r * t[2] + n * e[2]]
                }

                return function (o) {
                    var s = [o.slice(0, 4), o.slice(4, 8), o.slice(8, 12), o.slice(12, 16)];
                    if (1 !== s[3][3]) return null;
                    for (var a = [], c = 0; c < 4; c++) a.push(s[c].slice());
                    for (c = 0; c < 3; c++) a[c][3] = 0;
                    if (0 === t(a)) return null;
                    var u, l = [];
                    s[0][3] || s[1][3] || s[2][3] ? (l.push(s[0][3]), l.push(s[1][3]), l.push(s[2][3]), l.push(s[3][3]), u = function (t, e) {
                        for (var r = [], n = 0; n < 4; n++) {
                            for (var i = 0, o = 0; o < 4; o++) i += t[o] * e[o][n];
                            r.push(i)
                        }
                        return r
                    }(l, function (t) {
                        return [[t[0][0], t[1][0], t[2][0], t[3][0]], [t[0][1], t[1][1], t[2][1], t[3][1]], [t[0][2], t[1][2], t[2][2], t[3][2]], [t[0][3], t[1][3], t[2][3], t[3][3]]]
                    }(function (e) {
                        for (var r = 1 / t(e), n = e[0][0], i = e[0][1], o = e[0][2], s = e[1][0], a = e[1][1], c = e[1][2], u = e[2][0], l = e[2][1], h = e[2][2], p = [[(a * h - c * l) * r, (o * l - i * h) * r, (i * c - o * a) * r, 0], [(c * u - s * h) * r, (n * h - o * u) * r, (o * s - n * c) * r, 0], [(s * l - a * u) * r, (u * i - n * l) * r, (n * a - i * s) * r, 0]], d = [], f = 0; f < 3; f++) {
                            for (var m = 0, v = 0; v < 3; v++) m += e[3][v] * p[v][f];
                            d.push(m)
                        }
                        return d.push(1), p.push(d), p
                    }(a)))) : u = [0, 0, 0, 1];
                    var h = s[3].slice(0, 3), p = [];
                    p.push(s[0].slice(0, 3));
                    var d = [];
                    d.push(n(p[0])), p[0] = e(p[0]);
                    var f = [];
                    p.push(s[1].slice(0, 3)), f.push(r(p[0], p[1])), p[1] = i(p[1], p[0], 1, -f[0]), d.push(n(p[1])), p[1] = e(p[1]), f[0] /= d[1], p.push(s[2].slice(0, 3)), f.push(r(p[0], p[2])), p[2] = i(p[2], p[0], 1, -f[1]), f.push(r(p[1], p[2])), p[2] = i(p[2], p[1], 1, -f[2]), d.push(n(p[2])), p[2] = e(p[2]), f[1] /= d[2], f[2] /= d[2];
                    var m = function (t, e) {
                        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                    }(p[1], p[2]);
                    if (r(p[0], m) < 0) for (c = 0; c < 3; c++) d[c] *= -1, p[c][0] *= -1, p[c][1] *= -1, p[c][2] *= -1;
                    var v, y, g = p[0][0] + p[1][1] + p[2][2] + 1;
                    return g > 1e-4 ? (v = .5 / Math.sqrt(g), y = [(p[2][1] - p[1][2]) * v, (p[0][2] - p[2][0]) * v, (p[1][0] - p[0][1]) * v, .25 / v]) : p[0][0] > p[1][1] && p[0][0] > p[2][2] ? y = [.25 * (v = 2 * Math.sqrt(1 + p[0][0] - p[1][1] - p[2][2])), (p[0][1] + p[1][0]) / v, (p[0][2] + p[2][0]) / v, (p[2][1] - p[1][2]) / v] : p[1][1] > p[2][2] ? (v = 2 * Math.sqrt(1 + p[1][1] - p[0][0] - p[2][2]), y = [(p[0][1] + p[1][0]) / v, .25 * v, (p[1][2] + p[2][1]) / v, (p[0][2] - p[2][0]) / v]) : (v = 2 * Math.sqrt(1 + p[2][2] - p[0][0] - p[1][1]), y = [(p[0][2] + p[2][0]) / v, (p[1][2] + p[2][1]) / v, .25 * v, (p[1][0] - p[0][1]) / v]), [h, d, f, y, u]
                }
            }();
            t.dot = r, t.makeMatrixDecomposition = function (t) {
                return [a(s(t))]
            }, t.transformListToMatrix = s
        }(n), function (t) {
            function e(t, e) {
                var r = t.exec(e);
                if (r) return [r = t.ignoreCase ? r[0].toLowerCase() : r[0], e.substr(r.length)]
            }

            function r(t, e) {
                var r = t(e = e.replace(/^\s*/, ""));
                if (r) return [r[0], r[1].replace(/^\s*/, "")]
            }

            function n(t, e, r, n, i) {
                for (var o = [], s = [], a = [], c = function (t, e) {
                    for (var r = t, n = e; r && n;) r > n ? r %= n : n %= r;
                    return t * e / (r + n)
                }(n.length, i.length), u = 0; u < c; u++) {
                    var l = e(n[u % n.length], i[u % i.length]);
                    if (!l) return;
                    o.push(l[0]), s.push(l[1]), a.push(l[2])
                }
                return [o, s, function (e) {
                    var n = e.map(function (t, e) {
                        return a[e](t)
                    }).join(r);
                    return t ? t(n) : n
                }]
            }

            t.consumeToken = e, t.consumeTrimmed = r, t.consumeRepeated = function (t, n, i) {
                t = r.bind(null, t);
                for (var o = []; ;) {
                    var s = t(i);
                    if (!s) return [o, i];
                    if (o.push(s[0]), !(s = e(n, i = s[1])) || "" == s[1]) return [o, i];
                    i = s[1]
                }
            }, t.consumeParenthesised = function (t, e) {
                for (var r = 0, n = 0; n < e.length && (!/\s|,/.test(e[n]) || 0 != r); n++) if ("(" == e[n]) r++; else if (")" == e[n] && (0 == --r && n++, r <= 0)) break;
                var i = t(e.substr(0, n));
                return null == i ? void 0 : [i, e.substr(n)]
            }, t.ignore = function (t) {
                return function (e) {
                    var r = t(e);
                    return r && (r[0] = void 0), r
                }
            }, t.optional = function (t, e) {
                return function (r) {
                    return t(r) || [e, r]
                }
            }, t.consumeList = function (e, r) {
                for (var n = [], i = 0; i < e.length; i++) {
                    var o = t.consumeTrimmed(e[i], r);
                    if (!o || "" == o[0]) return;
                    void 0 !== o[0] && n.push(o[0]), r = o[1]
                }
                if ("" == r) return n
            }, t.mergeNestedRepeated = n.bind(null, null), t.mergeWrappedNestedRepeated = n, t.mergeList = function (t, e, r) {
                for (var n = [], i = [], o = [], s = 0, a = 0; a < r.length; a++) if ("function" == typeof r[a]) {
                    var c = r[a](t[s], e[s++]);
                    n.push(c[0]), i.push(c[1]), o.push(c[2])
                } else !function (t) {
                    n.push(!1), i.push(!1), o.push(function () {
                        return r[t]
                    })
                }(a);
                return [n, i, function (t) {
                    for (var e = "", r = 0; r < t.length; r++) e += o[r](t[r]);
                    return e
                }]
            }
        }(n), function (t) {
            function e(e) {
                var r = {inset: !1, lengths: [], color: null}, n = t.consumeRepeated(function (e) {
                    var n = t.consumeToken(/^inset/i, e);
                    return n ? (r.inset = !0, n) : (n = t.consumeLengthOrPercent(e)) ? (r.lengths.push(n[0]), n) : (n = t.consumeColor(e)) ? (r.color = n[0], n) : void 0
                }, /^/, e);
                if (n && n[0].length) return [r, n[1]]
            }

            var r = function (e, r, n, i) {
                function o(t) {
                    return {inset: t, color: [0, 0, 0, 0], lengths: [{px: 0}, {px: 0}, {px: 0}, {px: 0}]}
                }

                for (var s = [], a = [], c = 0; c < n.length || c < i.length; c++) {
                    var u = n[c] || o(i[c].inset), l = i[c] || o(n[c].inset);
                    s.push(u), a.push(l)
                }
                return t.mergeNestedRepeated(e, r, s, a)
            }.bind(null, function (e, r) {
                for (; e.lengths.length < Math.max(e.lengths.length, r.lengths.length);) e.lengths.push({px: 0});
                for (; r.lengths.length < Math.max(e.lengths.length, r.lengths.length);) r.lengths.push({px: 0});
                if (e.inset == r.inset && !!e.color == !!r.color) {
                    for (var n, i = [], o = [[], 0], s = [[], 0], a = 0; a < e.lengths.length; a++) {
                        var c = t.mergeDimensions(e.lengths[a], r.lengths[a], 2 == a);
                        o[0].push(c[0]), s[0].push(c[1]), i.push(c[2])
                    }
                    if (e.color && r.color) {
                        var u = t.mergeColors(e.color, r.color);
                        o[1] = u[0], s[1] = u[1], n = u[2]
                    }
                    return [o, s, function (t) {
                        for (var r = e.inset ? "inset " : " ", o = 0; o < i.length; o++) r += i[o](t[0][o]) + " ";
                        return n && (r += n(t[1])), r
                    }]
                }
            }, ", ");
            t.addPropertiesHandler(function (r) {
                var n = t.consumeRepeated(e, /^,/, r);
                if (n && "" == n[1]) return n[0]
            }, r, ["box-shadow", "text-shadow"])
        }(n), function (t, e) {
            function r(t) {
                return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")
            }

            function n(t, e, r) {
                return Math.min(e, Math.max(t, r))
            }

            function i(t) {
                if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t)
            }

            function o(t, e) {
                return function (i, o) {
                    return [i, o, function (i) {
                        return r(n(t, e, i))
                    }]
                }
            }

            function s(t) {
                var e = t.trim().split(/\s*[\s,]\s*/);
                if (0 !== e.length) {
                    for (var r = [], n = 0; n < e.length; n++) {
                        var o = i(e[n]);
                        if (void 0 === o) return;
                        r.push(o)
                    }
                    return r
                }
            }

            t.clamp = n, t.addPropertiesHandler(s, function (t, e) {
                if (t.length == e.length) return [t, e, function (t) {
                    return t.map(r).join(" ")
                }]
            }, ["stroke-dasharray"]), t.addPropertiesHandler(i, o(0, 1 / 0), ["border-image-width", "line-height"]), t.addPropertiesHandler(i, o(0, 1), ["opacity", "shape-image-threshold"]), t.addPropertiesHandler(i, function (t, e) {
                if (0 != t) return o(0, 1 / 0)(t, e)
            }, ["flex-grow", "flex-shrink"]), t.addPropertiesHandler(i, function (t, e) {
                return [t, e, function (t) {
                    return Math.round(n(1, 1 / 0, t))
                }]
            }, ["orphans", "widows"]), t.addPropertiesHandler(i, function (t, e) {
                return [t, e, Math.round]
            }, ["z-index"]), t.parseNumber = i, t.parseNumberList = s, t.mergeNumbers = function (t, e) {
                return [t, e, r]
            }, t.numberToString = r
        }(n), function (t, e) {
            t.addPropertiesHandler(String, function (t, e) {
                if ("visible" == t || "visible" == e) return [0, 1, function (r) {
                    return r <= 0 ? t : r >= 1 ? e : "visible"
                }]
            }, ["visibility"])
        }(n), function (t, e) {
            function r(t) {
                t = t.trim(), o.fillStyle = "#000", o.fillStyle = t;
                var e = o.fillStyle;
                if (o.fillStyle = "#fff", o.fillStyle = t, e == o.fillStyle) {
                    o.fillRect(0, 0, 1, 1);
                    var r = o.getImageData(0, 0, 1, 1).data;
                    o.clearRect(0, 0, 1, 1);
                    var n = r[3] / 255;
                    return [r[0] * n, r[1] * n, r[2] * n, n]
                }
            }

            function n(e, r) {
                return [e, r, function (e) {
                    function r(t) {
                        return Math.max(0, Math.min(255, t))
                    }

                    if (e[3]) for (var n = 0; n < 3; n++) e[n] = Math.round(r(e[n] / e[3]));
                    return e[3] = t.numberToString(t.clamp(0, 1, e[3])), "rgba(" + e.join(",") + ")"
                }]
            }

            var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            i.width = i.height = 1;
            var o = i.getContext("2d");
            t.addPropertiesHandler(r, n, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), t.consumeColor = t.consumeParenthesised.bind(null, r), t.mergeColors = n
        }(n), function (t, e) {
            function r(t) {
                function e() {
                    var e = s.exec(t);
                    o = e ? e[0] : void 0
                }

                function r() {
                    if ("(" !== o) return function () {
                        var t = Number(o);
                        return e(), t
                    }();
                    e();
                    var t = i();
                    return ")" !== o ? NaN : (e(), t)
                }

                function n() {
                    for (var t = r(); "*" === o || "/" === o;) {
                        var n = o;
                        e();
                        var i = r();
                        "*" === n ? t *= i : t /= i
                    }
                    return t
                }

                function i() {
                    for (var t = n(); "+" === o || "-" === o;) {
                        var r = o;
                        e();
                        var i = n();
                        "+" === r ? t += i : t -= i
                    }
                    return t
                }

                var o, s = /([\+\-\w\.]+|[\(\)\*\/])/g;
                return e(), i()
            }

            function n(t, e) {
                if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0) return {px: 0};
                if (/^[^(]*$|^calc/.test(e)) {
                    e = e.replace(/calc\(/g, "(");
                    var n = {};
                    e = e.replace(t, function (t) {
                        return n[t] = null, "U" + t
                    });
                    for (var i = "U(" + t.source + ")", o = e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + i, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), s = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], a = 0; a < s.length;) s[a].test(o) ? (o = o.replace(s[a], "$1"), a = 0) : a++;
                    if ("D" == o) {
                        for (var c in n) {
                            var u = r(e.replace(new RegExp("U" + c, "g"), "").replace(new RegExp(i, "g"), "*0"));
                            if (!isFinite(u)) return;
                            n[c] = u
                        }
                        return n
                    }
                }
            }

            function i(t, e) {
                return o(t, e, !0)
            }

            function o(e, r, n) {
                var i, o = [];
                for (i in e) o.push(i);
                for (i in r) o.indexOf(i) < 0 && o.push(i);
                return e = o.map(function (t) {
                    return e[t] || 0
                }), r = o.map(function (t) {
                    return r[t] || 0
                }), [e, r, function (e) {
                    var r = e.map(function (r, i) {
                        return 1 == e.length && n && (r = Math.max(r, 0)), t.numberToString(r) + o[i]
                    }).join(" + ");
                    return e.length > 1 ? "calc(" + r + ")" : r
                }]
            }

            var s = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc", a = n.bind(null, new RegExp(s, "g")),
                c = n.bind(null, new RegExp(s + "|%", "g")), u = n.bind(null, /deg|rad|grad|turn/g);
            t.parseLength = a, t.parseLengthOrPercent = c, t.consumeLengthOrPercent = t.consumeParenthesised.bind(null, c), t.parseAngle = u, t.mergeDimensions = o;
            var l = t.consumeParenthesised.bind(null, a), h = t.consumeRepeated.bind(void 0, l, /^/),
                p = t.consumeRepeated.bind(void 0, h, /^,/);
            t.consumeSizePairList = p;
            var d = t.mergeNestedRepeated.bind(void 0, i, " "), f = t.mergeNestedRepeated.bind(void 0, d, ",");
            t.mergeNonNegativeSizePair = d, t.addPropertiesHandler(function (t) {
                var e = p(t);
                if (e && "" == e[1]) return e[0]
            }, f, ["background-size"]), t.addPropertiesHandler(c, i, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), t.addPropertiesHandler(c, o, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"])
        }(n), function (t, e) {
            function r(e) {
                return t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
            }

            function n(e) {
                var n = t.consumeList([t.ignore(t.consumeToken.bind(null, /^rect/)), t.ignore(t.consumeToken.bind(null, /^\(/)), t.consumeRepeated.bind(null, r, /^,/), t.ignore(t.consumeToken.bind(null, /^\)/))], e);
                if (n && 4 == n[0].length) return n[0]
            }

            var i = t.mergeWrappedNestedRepeated.bind(null, function (t) {
                return "rect(" + t + ")"
            }, function (e, r) {
                return "auto" == e || "auto" == r ? [!0, !1, function (n) {
                    var i = n ? e : r;
                    if ("auto" == i) return "auto";
                    var o = t.mergeDimensions(i, i);
                    return o[2](o[0])
                }] : t.mergeDimensions(e, r)
            }, ", ");
            t.parseBox = n, t.mergeBoxes = i, t.addPropertiesHandler(n, i, ["clip"])
        }(n), function (t, e) {
            function r(t) {
                return function (e) {
                    var r = 0;
                    return t.map(function (t) {
                        return t === u ? e[r++] : t
                    })
                }
            }

            function n(t) {
                return t
            }

            function i(e) {
                if ("none" == (e = e.toLowerCase().trim())) return [];
                for (var r, n = /\s*(\w+)\(([^)]*)\)/g, i = [], o = 0; r = n.exec(e);) {
                    if (r.index != o) return;
                    o = r.index + r[0].length;
                    var s = r[1], a = p[s];
                    if (!a) return;
                    var c = r[2].split(","), u = a[0];
                    if (u.length < c.length) return;
                    for (var d = [], f = 0; f < u.length; f++) {
                        var m, v = c[f], y = u[f];
                        if (void 0 === (m = v ? {
                            A: function (e) {
                                return "0" == e.trim() ? h : t.parseAngle(e)
                            }, N: t.parseNumber, T: t.parseLengthOrPercent, L: t.parseLength
                        }[y.toUpperCase()](v) : {a: h, n: d[0], t: l}[y])) return;
                        d.push(m)
                    }
                    if (i.push({t: s, d: d}), n.lastIndex == e.length) return i
                }
            }

            function o(t) {
                return t.toFixed(6).replace(".000000", "")
            }

            function s(e, r) {
                if (e.decompositionPair !== r) {
                    e.decompositionPair = r;
                    var n = t.makeMatrixDecomposition(e)
                }
                if (r.decompositionPair !== e) {
                    r.decompositionPair = e;
                    var i = t.makeMatrixDecomposition(r)
                }
                return null == n[0] || null == i[0] ? [[!1], [!0], function (t) {
                    return t ? r[0].d : e[0].d
                }] : (n[0].push(0), i[0].push(1), [n, i, function (e) {
                    var r = t.quat(n[0][3], i[0][3], e[5]);
                    return t.composeMatrix(e[0], e[1], e[2], r, e[4]).map(o).join(",")
                }])
            }

            function a(t) {
                return t.replace(/[xy]/, "")
            }

            function c(t) {
                return t.replace(/(x|y|z|3d)?$/, "3d")
            }

            var u = null, l = {px: 0}, h = {deg: 0}, p = {
                matrix: ["NNNNNN", [u, u, 0, 0, u, u, 0, 0, 0, 0, 1, 0, u, u, 0, 1], n],
                matrix3d: ["NNNNNNNNNNNNNNNN", n],
                rotate: ["A"],
                rotatex: ["A"],
                rotatey: ["A"],
                rotatez: ["A"],
                rotate3d: ["NNNA"],
                perspective: ["L"],
                scale: ["Nn", r([u, u, 1]), n],
                scalex: ["N", r([u, 1, 1]), r([u, 1])],
                scaley: ["N", r([1, u, 1]), r([1, u])],
                scalez: ["N", r([1, 1, u])],
                scale3d: ["NNN", n],
                skew: ["Aa", null, n],
                skewx: ["A", null, r([u, h])],
                skewy: ["A", null, r([h, u])],
                translate: ["Tt", r([u, u, l]), n],
                translatex: ["T", r([u, l, l]), r([u, l])],
                translatey: ["T", r([l, u, l]), r([l, u])],
                translatez: ["L", r([l, l, u])],
                translate3d: ["TTL", n]
            };
            t.addPropertiesHandler(i, function (e, r) {
                var n = t.makeMatrixDecomposition && !0, i = !1;
                if (!e.length || !r.length) {
                    e.length || (i = !0, e = r, r = []);
                    for (var o = 0; o < e.length; o++) {
                        var u = e[o].t, l = e[o].d, h = "scale" == u.substr(0, 5) ? 1 : 0;
                        r.push({
                            t: u, d: l.map(function (t) {
                                if ("number" == typeof t) return h;
                                var e = {};
                                for (var r in t) e[r] = h;
                                return e
                            })
                        })
                    }
                }
                var d = function (t, e) {
                    return "perspective" == t && "perspective" == e || ("matrix" == t || "matrix3d" == t) && ("matrix" == e || "matrix3d" == e)
                }, f = [], m = [], v = [];
                if (e.length != r.length) {
                    if (!n) return;
                    f = [(E = s(e, r))[0]], m = [E[1]], v = [["matrix", [E[2]]]]
                } else for (o = 0; o < e.length; o++) {
                    var y = e[o].t, g = r[o].t, b = e[o].d, _ = r[o].d, w = p[y], S = p[g];
                    if (d(y, g)) {
                        if (!n) return;
                        var E = s([e[o]], [r[o]]);
                        f.push(E[0]), m.push(E[1]), v.push(["matrix", [E[2]]])
                    } else {
                        if (y == g) u = y; else if (w[2] && S[2] && a(y) == a(g)) u = a(y), b = w[2](b), _ = S[2](_); else {
                            if (!w[1] || !S[1] || c(y) != c(g)) {
                                if (!n) return;
                                f = [(E = s(e, r))[0]], m = [E[1]], v = [["matrix", [E[2]]]];
                                break
                            }
                            u = c(y), b = w[1](b), _ = S[1](_)
                        }
                        for (var x = [], C = [], T = [], N = 0; N < b.length; N++) E = ("number" == typeof b[N] ? t.mergeNumbers : t.mergeDimensions)(b[N], _[N]), x[N] = E[0], C[N] = E[1], T.push(E[2]);
                        f.push(x), m.push(C), v.push([u, T])
                    }
                }
                if (i) {
                    var O = f;
                    f = m, m = O
                }
                return [f, m, function (t) {
                    return t.map(function (t, e) {
                        var r = t.map(function (t, r) {
                            return v[e][1][r](t)
                        }).join(",");
                        return "matrix" == v[e][0] && 16 == r.split(",").length && (v[e][0] = "matrix3d"), v[e][0] + "(" + r + ")"
                    }).join(" ")
                }]
            }, ["transform"]), t.transformToSvgMatrix = function (e) {
                var r = t.transformListToMatrix(i(e));
                return "matrix(" + o(r[0]) + " " + o(r[1]) + " " + o(r[4]) + " " + o(r[5]) + " " + o(r[12]) + " " + o(r[13]) + ")"
            }
        }(n), function (t) {
            function e(e) {
                return e = 100 * Math.round(e / 100), 400 === (e = t.clamp(100, 900, e)) ? "normal" : 700 === e ? "bold" : String(e)
            }

            t.addPropertiesHandler(function (t) {
                var e = Number(t);
                if (!(isNaN(e) || e < 100 || e > 900 || e % 100 != 0)) return e
            }, function (t, r) {
                return [t, r, e]
            }, ["font-weight"])
        }(n), function (t) {
            function e(t) {
                var e = {};
                for (var r in t) e[r] = -t[r];
                return e
            }

            function r(e) {
                return t.consumeToken(/^(left|center|right|top|bottom)\b/i, e) || t.consumeLengthOrPercent(e)
            }

            function n(e, n) {
                var i = t.consumeRepeated(r, /^/, n);
                if (i && "" == i[1]) {
                    var s = i[0];
                    if (s[0] = s[0] || "center", s[1] = s[1] || "center", 3 == e && (s[2] = s[2] || {px: 0}), s.length == e) {
                        if (/top|bottom/.test(s[0]) || /left|right/.test(s[1])) {
                            var a = s[0];
                            s[0] = s[1], s[1] = a
                        }
                        if (/left|right|center|Object/.test(s[0]) && /top|bottom|center|Object/.test(s[1])) return s.map(function (t) {
                            return "object" == typeof t ? t : o[t]
                        })
                    }
                }
            }

            function i(n) {
                var i = t.consumeRepeated(r, /^/, n);
                if (i) {
                    for (var s = i[0], a = [{"%": 50}, {"%": 50}], c = 0, u = !1, l = 0; l < s.length; l++) {
                        var h = s[l];
                        "string" == typeof h ? (u = /bottom|right/.test(h), a[c = {
                            left: 0,
                            right: 0,
                            center: c,
                            top: 1,
                            bottom: 1
                        }[h]] = o[h], "center" == h && c++) : (u && ((h = e(h))["%"] = (h["%"] || 0) + 100), a[c] = h, c++, u = !1)
                    }
                    return [a, i[1]]
                }
            }

            var o = {left: {"%": 0}, center: {"%": 50}, right: {"%": 100}, top: {"%": 0}, bottom: {"%": 100}},
                s = t.mergeNestedRepeated.bind(null, t.mergeDimensions, " ");
            t.addPropertiesHandler(n.bind(null, 3), s, ["transform-origin"]), t.addPropertiesHandler(n.bind(null, 2), s, ["perspective-origin"]), t.consumePosition = i, t.mergeOffsetList = s;
            var a = t.mergeNestedRepeated.bind(null, s, ", ");
            t.addPropertiesHandler(function (e) {
                var r = t.consumeRepeated(i, /^,/, e);
                if (r && "" == r[1]) return r[0]
            }, a, ["background-position", "object-position"])
        }(n), function (t) {
            var e = t.consumeParenthesised.bind(null, t.parseLengthOrPercent),
                r = t.consumeRepeated.bind(void 0, e, /^/),
                n = t.mergeNestedRepeated.bind(void 0, t.mergeDimensions, " "),
                i = t.mergeNestedRepeated.bind(void 0, n, ",");
            t.addPropertiesHandler(function (n) {
                var i = t.consumeToken(/^circle/, n);
                if (i && i[0]) return ["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), e, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], i[1]));
                var o = t.consumeToken(/^ellipse/, n);
                if (o && o[0]) return ["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), r, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], o[1]));
                var s = t.consumeToken(/^polygon/, n);
                return s && s[0] ? ["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), t.optional(t.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), t.consumeSizePairList, t.ignore(t.consumeToken.bind(void 0, /^\)/))], s[1])) : void 0
            }, function (e, r) {
                if (e[0] === r[0]) return "circle" == e[0] ? t.mergeList(e.slice(1), r.slice(1), ["circle(", t.mergeDimensions, " at ", t.mergeOffsetList, ")"]) : "ellipse" == e[0] ? t.mergeList(e.slice(1), r.slice(1), ["ellipse(", t.mergeNonNegativeSizePair, " at ", t.mergeOffsetList, ")"]) : "polygon" == e[0] && e[1] == r[1] ? t.mergeList(e.slice(2), r.slice(2), ["polygon(", e[1], i, ")"]) : void 0
            }, ["shape-outside"])
        }(n), function (t, e) {
            function r(t, e) {
                e.concat([t]).forEach(function (e) {
                    e in document.documentElement.style && (n[t] = e), i[e] = t
                })
            }

            var n = {}, i = {};
            r("transform", ["webkitTransform", "msTransform"]), r("transformOrigin", ["webkitTransformOrigin"]), r("perspective", ["webkitPerspective"]), r("perspectiveOrigin", ["webkitPerspectiveOrigin"]), t.propertyName = function (t) {
                return n[t] || t
            }, t.unprefixedPropertyName = function (t) {
                return i[t] || t
            }
        }(n)
    }(), function () {
        if (void 0 === document.createElement("div").animate([]).oncancel) {
            if (window.performance && performance.now) var t = function () {
                return performance.now()
            }; else t = function () {
                return Date.now()
            };
            var e = function (t, e, r) {
                this.target = t, this.currentTime = e, this.timelineTime = r, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
            }, r = window.Element.prototype.animate;
            window.Element.prototype.animate = function (n, i) {
                var o = r.call(this, n, i);
                o._cancelHandlers = [], o.oncancel = null;
                var s = o.cancel;
                o.cancel = function () {
                    s.call(this);
                    var r = new e(this, null, t()),
                        n = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
                    setTimeout(function () {
                        n.forEach(function (t) {
                            t.call(r.target, r)
                        })
                    }, 0)
                };
                var a = o.addEventListener;
                o.addEventListener = function (t, e) {
                    "function" == typeof e && "cancel" == t ? this._cancelHandlers.push(e) : a.call(this, t, e)
                };
                var c = o.removeEventListener;
                return o.removeEventListener = function (t, e) {
                    if ("cancel" == t) {
                        var r = this._cancelHandlers.indexOf(e);
                        r >= 0 && this._cancelHandlers.splice(r, 1)
                    } else c.call(this, t, e)
                }, o
            }
        }
    }(), function (t) {
        var e = document.documentElement, r = null, n = !1;
        try {
            var i = "0" == getComputedStyle(e).getPropertyValue("opacity") ? "1" : "0";
            (r = e.animate({opacity: [i, i]}, {duration: 1})).currentTime = 0, n = getComputedStyle(e).getPropertyValue("opacity") == i
        } catch (t) {
        } finally {
            r && r.cancel()
        }
        if (!n) {
            var o = window.Element.prototype.animate;
            window.Element.prototype.animate = function (e, r) {
                return window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || null === e || (e = t.convertToArrayForm(e)), o.call(this, e, r)
            }
        }
    }(r)
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, r) {
    (function (t) {
        (function () {
            "use strict";
            var e;

            function r(t) {
                var e = 0;
                return function () {
                    return e < t.length ? {done: !1, value: t[e++]} : {done: !0}
                }
            }

            function n(t) {
                var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                return e ? e.call(t) : {next: r(t)}
            }

            function i(t) {
                for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                return r
            }

            var o = "undefined" != typeof window && window === this ? this : void 0 !== t && null != t ? t : this;

            function s(t, e) {
                return {index: t, o: [], v: e}
            }

            function a(t, e, r, n) {
                var i = 0, o = 0, a = 0, u = 0, l = Math.min(e - i, n - o);
                if (0 == i && 0 == o) t:{
                    for (a = 0; a < l; a++) if (t[a] !== r[a]) break t;
                    a = l
                }
                if (e == t.length && n == r.length) {
                    u = t.length;
                    for (var h = r.length, p = 0; p < l - a && c(t[--u], r[--h]);) p++;
                    u = p
                }
                if (o += a, n -= u, 0 == (e -= u) - (i += a) && 0 == n - o) return [];
                if (i == e) {
                    for (e = s(i, 0); o < n;) e.o.push(r[o++]);
                    return [e]
                }
                if (o == n) return [s(i, e - i)];
                for (n = n - (a = o) + 1, u = e - (l = i) + 1, e = Array(n), h = 0; h < n; h++) e[h] = Array(u), e[h][0] = h;
                for (h = 0; h < u; h++) e[0][h] = h;
                for (h = 1; h < n; h++) for (p = 1; p < u; p++) if (t[l + p - 1] === r[a + h - 1]) e[h][p] = e[h - 1][p - 1]; else {
                    var d = e[h - 1][p] + 1, f = e[h][p - 1] + 1;
                    e[h][p] = d < f ? d : f
                }
                for (l = e.length - 1, a = e[0].length - 1, n = e[l][a], t = []; 0 < l || 0 < a;) 0 == l ? (t.push(2), a--) : 0 == a ? (t.push(3), l--) : (u = e[l - 1][a - 1], (d = (h = e[l - 1][a]) < (p = e[l][a - 1]) ? h < u ? h : u : p < u ? p : u) == u ? (u == n ? t.push(0) : (t.push(1), n = u), l--, a--) : d == h ? (t.push(3), l--, n = h) : (t.push(2), a--, n = p));
                for (t.reverse(), e = void 0, l = [], a = 0; a < t.length; a++) switch (t[a]) {
                    case 0:
                        e && (l.push(e), e = void 0), i++, o++;
                        break;
                    case 1:
                        e || (e = s(i, 0)), e.v++, i++, e.o.push(r[o]), o++;
                        break;
                    case 2:
                        e || (e = s(i, 0)), e.v++, i++;
                        break;
                    case 3:
                        e || (e = s(i, 0)), e.o.push(r[o]), o++
                }
                return e && l.push(e), l
            }

            function c(t, e) {
                return t === e
            }

            function u() {
            }

            function l(t) {
                return t.__shady || (t.__shady = new u), t.__shady
            }

            function h(t) {
                return t && t.__shady
            }

            u.prototype.toJSON = function () {
                return {}
            };
            var p = window.ShadyDOM || {};
            p.U = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
            var d = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
            p.f = !!(d && d.configurable && d.get), p.F = p.force || !p.U, p.g = p.noPatch || !1, p.J = p.preferPerformance;
            var f = navigator.userAgent.match("Trident");

            function m(t) {
                return (t = h(t)) && void 0 !== t.firstChild
            }

            function v(t) {
                return "ShadyRoot" === t.R
            }

            function y(t) {
                return (t = (t = h(t)) && t.root) && Rt(t)
            }

            p.L = f;
            var g = Element.prototype,
                b = g.matches || g.matchesSelector || g.mozMatchesSelector || g.msMatchesSelector || g.oMatchesSelector || g.webkitMatchesSelector,
                _ = document.createTextNode(""), w = 0, S = [];

            function E(t) {
                S.push(t), _.textContent = w++
            }

            new MutationObserver(function () {
                for (; S.length;) try {
                    S.shift()()
                } catch (t) {
                    throw _.textContent = w++, t
                }
            }).observe(_, {characterData: !0});
            var x = !!document.contains;

            function C(t, e) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.__shady_parentNode
                }
                return !1
            }

            function T(t) {
                for (var e = t.length - 1; 0 <= e; e--) {
                    var r = t[e], i = r.getAttribute("id") || r.getAttribute("name");
                    i && "length" !== i && isNaN(i) && (t[i] = r)
                }
                return t.item = function (e) {
                    return t[e]
                }, t.namedItem = function (e) {
                    if ("length" !== e && isNaN(e) && t[e]) return t[e];
                    for (var r = n(t), i = r.next(); !i.done; i = r.next()) if (((i = i.value).getAttribute("id") || i.getAttribute("name")) == e) return i;
                    return null
                }, t
            }

            function N(t) {
                var e = [];
                for (t = t.__shady_native_firstChild; t; t = t.__shady_native_nextSibling) e.push(t);
                return e
            }

            function O(t) {
                var e = [];
                for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) e.push(t);
                return e
            }

            function M(t, e, r, n) {
                for (var i in r = void 0 === r ? "" : r, e) {
                    var o = e[i];
                    if (!(n && 0 <= n.indexOf(i))) {
                        o.configurable = !0;
                        var s = r + i;
                        if (o.value) t[s] = o.value; else try {
                            Object.defineProperty(t, s, o)
                        } catch (t) {
                        }
                    }
                }
            }

            function A(t) {
                var e = {};
                return Object.getOwnPropertyNames(t).forEach(function (r) {
                    e[r] = Object.getOwnPropertyDescriptor(t, r)
                }), e
            }

            var k, R = [];

            function P(t) {
                k || (k = !0, E(I)), R.push(t)
            }

            function I() {
                k = !1;
                for (var t = !!R.length; R.length;) R.shift()();
                return t
            }

            I.list = R;
            var L, j = A({
                get childNodes() {
                    return this.__shady_childNodes
                }, get firstChild() {
                    return this.__shady_firstChild
                }, get lastChild() {
                    return this.__shady_lastChild
                }, get childElementCount() {
                    return this.__shady_childElementCount
                }, get children() {
                    return this.__shady_children
                }, get firstElementChild() {
                    return this.__shady_firstElementChild
                }, get lastElementChild() {
                    return this.__shady_lastElementChild
                }, get shadowRoot() {
                    return this.__shady_shadowRoot
                }
            }), D = A({
                get textContent() {
                    return this.__shady_textContent
                }, set textContent(t) {
                    this.__shady_textContent = t
                }, get innerHTML() {
                    return this.__shady_innerHTML
                }, set innerHTML(t) {
                    return this.__shady_innerHTML = t
                }
            }), F = A({
                get parentElement() {
                    return this.__shady_parentElement
                }, get parentNode() {
                    return this.__shady_parentNode
                }, get nextSibling() {
                    return this.__shady_nextSibling
                }, get previousSibling() {
                    return this.__shady_previousSibling
                }, get nextElementSibling() {
                    return this.__shady_nextElementSibling
                }, get previousElementSibling() {
                    return this.__shady_previousElementSibling
                }, get className() {
                    return this.__shady_className
                }, set className(t) {
                    return this.__shady_className = t
                }
            });
            for (L in j) j[L].enumerable = !1;
            for (var H in D) D[H].enumerable = !1;
            for (var q in F) F[q].enumerable = !1;
            var B = p.f || p.g, U = B ? function () {
            } : function (t) {
                var e = l(t);
                e.N || (e.N = !0, M(t, F))
            }, z = B ? function () {
            } : function (t) {
                var e = l(t);
                e.M || (e.M = !0, M(t, j), window.customElements && !p.g || M(t, D))
            };

            function V(t, e, r, n) {
                U(t), n = n || null;
                var i = l(t), o = n ? l(n) : null;
                i.previousSibling = n ? o.previousSibling : e.__shady_lastChild, (o = h(i.previousSibling)) && (o.nextSibling = t), (o = h(i.nextSibling = n)) && (o.previousSibling = t), i.parentNode = e, n ? n === r.firstChild && (r.firstChild = t) : (r.lastChild = t, r.firstChild || (r.firstChild = t)), r.childNodes = null
            }

            function W(t, e) {
                var r = l(t);
                if (e || void 0 === r.firstChild) {
                    r.childNodes = null;
                    var n = r.firstChild = t.__shady_native_firstChild;
                    for (r.lastChild = t.__shady_native_lastChild, z(t), r = n, n = void 0; r; r = r.__shady_native_nextSibling) {
                        var i = l(r);
                        i.parentNode = e || t, i.nextSibling = r.__shady_native_nextSibling, i.previousSibling = n || null, n = r, U(r)
                    }
                }
            }

            var $ = window.document, X = p.J, Y = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
                G = Y && Y.get;

            function K(t) {
                for (var e; e = t.__shady_firstChild;) t.__shady_removeChild(e)
            }

            function J(t, e, r) {
                (t = (t = h(t)) && t.m) && (e && t.addedNodes.push(e), r && t.removedNodes.push(r), function (t) {
                    t.a || (t.a = !0, E(function () {
                        t.flush()
                    }))
                }(t))
            }

            var Z = A({
                get parentNode() {
                    var t = h(this);
                    return void 0 !== (t = t && t.parentNode) ? t : this.__shady_native_parentNode
                }, get firstChild() {
                    var t = h(this);
                    return void 0 !== (t = t && t.firstChild) ? t : this.__shady_native_firstChild
                }, get lastChild() {
                    var t = h(this);
                    return void 0 !== (t = t && t.lastChild) ? t : this.__shady_native_lastChild
                }, get nextSibling() {
                    var t = h(this);
                    return void 0 !== (t = t && t.nextSibling) ? t : this.__shady_native_nextSibling
                }, get previousSibling() {
                    var t = h(this);
                    return void 0 !== (t = t && t.previousSibling) ? t : this.__shady_native_previousSibling
                }, get childNodes() {
                    if (m(this)) {
                        var t = h(this);
                        if (!t.childNodes) {
                            t.childNodes = [];
                            for (var e = this.__shady_firstChild; e; e = e.__shady_nextSibling) t.childNodes.push(e)
                        }
                        var r = t.childNodes
                    } else r = this.__shady_native_childNodes;
                    return r.item = function (t) {
                        return r[t]
                    }, r
                }, get parentElement() {
                    var t = h(this);
                    return (t = t && t.parentNode) && t.nodeType !== Node.ELEMENT_NODE && (t = null), void 0 !== t ? t : this.__shady_native_parentElement
                }, get isConnected() {
                    if (G && G.call(this)) return !0;
                    if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
                    var t = this.ownerDocument;
                    if (x) {
                        if (t.__shady_native_contains(this)) return !0
                    } else if (t.documentElement && t.documentElement.__shady_native_contains(this)) return !0;
                    for (t = this; t && !(t instanceof Document);) t = t.__shady_parentNode || (v(t) ? t.host : void 0);
                    return !!(t && t instanceof Document)
                }, get textContent() {
                    if (m(this)) {
                        for (var t = [], e = this.__shady_firstChild; e; e = e.__shady_nextSibling) e.nodeType !== Node.COMMENT_NODE && t.push(e.__shady_textContent);
                        return t.join("")
                    }
                    return this.__shady_native_textContent
                }, set textContent(t) {
                    switch (null == t && (t = ""), this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            if (!m(this) && p.f) {
                                var e = this.__shady_firstChild;
                                (e != this.__shady_lastChild || e && e.nodeType != Node.TEXT_NODE) && K(this), this.__shady_native_textContent = t
                            } else K(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(t));
                            break;
                        default:
                            this.nodeValue = t
                    }
                }, insertBefore: function (t, e) {
                    if (this.ownerDocument !== $ && t.ownerDocument !== $) return this.__shady_native_insertBefore(t, e), t;
                    if (t === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
                    if (e) {
                        var r = h(e);
                        if (void 0 !== (r = r && r.parentNode) && r !== this || void 0 === r && e.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")
                    }
                    if (e === t) return t;
                    var o = [], s = (r = jt(this)) ? r.host.localName : xe(this), a = t.__shady_parentNode;
                    if (a) {
                        var c = xe(t), u = !!r || !jt(t) || X && void 0 !== this.__noInsertionPoint;
                        a.__shady_removeChild(t, u)
                    }
                    a = !0;
                    var p = (!X || void 0 === t.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !function t(e, r) {
                        var n = Se();
                        if (!n) return !0;
                        if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            for (n = !0, e = e.__shady_firstChild; e; e = e.__shady_nextSibling) n = n && t(e, r);
                            return n
                        }
                        return e.nodeType !== Node.ELEMENT_NODE || n.currentScopeForNode(e) === r
                    }(t, s), d = r && !t.__noInsertionPoint && (!X || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
                    return (d || p) && (p && (c = c || xe(t)), Ce(t, function (t) {
                        if (d && "slot" === t.localName && o.push(t), p) {
                            var e = c;
                            Se() && (e && Ee(t, e), (e = Se()) && e.scopeNode(t, s))
                        }
                    })), o.length && (Ot(r), r.c.push.apply(r.c, o instanceof Array ? o : i(n(o))), Et(r)), m(this) && (function (t, e, r) {
                        z(e);
                        var n = l(e);
                        if (void 0 !== n.firstChild && (n.childNodes = null), t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (t = t.__shady_native_firstChild; t; t = t.__shady_native_nextSibling) V(t, e, n, r); else V(t, e, n, r)
                    }(t, this, e), r = h(this), y(this) ? (Et(r.root), a = !1) : r.root && (a = !1)), a ? (r = v(this) ? this.host : this, e ? (e = function t(e) {
                        var r = e;
                        return e && "slot" === e.localName && (r = (r = (r = h(e)) && r.l) && r.length ? r[0] : t(e.__shady_nextSibling)), r
                    }(e), r.__shady_native_insertBefore(t, e)) : r.__shady_native_appendChild(t)) : t.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(t), J(this, t), t
                }, appendChild: function (t) {
                    if (this != t || !v(t)) return this.__shady_insertBefore(t)
                }, removeChild: function (t, e) {
                    if (e = void 0 !== e && e, this.ownerDocument !== $) return this.__shady_native_removeChild(t);
                    if (t.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + t);
                    var r = jt(t), n = r && function (t, e) {
                        if (t.a) {
                            Mt(t);
                            var r, n = t.b;
                            for (r in n) for (var i = n[r], o = 0; o < i.length; o++) {
                                var s = i[o];
                                if (C(e, s)) {
                                    i.splice(o, 1);
                                    var a = t.a.indexOf(s);
                                    if (0 <= a && (t.a.splice(a, 1), (a = h(s.__shady_parentNode)) && a.u && a.u--), o--, s = h(s), a = s.l) for (var c = 0; c < a.length; c++) {
                                        var u = a[c], l = u.__shady_native_parentNode;
                                        l && l.__shady_native_removeChild(u)
                                    }
                                    s.l = [], s.assignedNodes = [], a = !0
                                }
                            }
                            return a
                        }
                    }(r, t), i = h(this);
                    if (m(this) && (function (t, e) {
                        var r = l(t);
                        t === (e = l(e)).firstChild && (e.firstChild = r.nextSibling), t === e.lastChild && (e.lastChild = r.previousSibling), t = r.previousSibling;
                        var n = r.nextSibling;
                        t && (l(t).nextSibling = n), n && (l(n).previousSibling = t), r.parentNode = r.previousSibling = r.nextSibling = void 0, void 0 !== e.childNodes && (e.childNodes = null)
                    }(t, this), y(this))) {
                        Et(i.root);
                        var o = !0
                    }
                    if (Se() && !e && r && t.nodeType !== Node.TEXT_NODE) {
                        var s = xe(t);
                        Ce(t, function (t) {
                            Ee(t, s)
                        })
                    }
                    return function t(e) {
                        var r = h(e);
                        if (r && void 0 !== r.A) for (r = e.__shady_firstChild; r; r = r.__shady_nextSibling) t(r);
                        (e = h(e)) && (e.A = void 0)
                    }(t), r && ((e = this && "slot" === this.localName) && (o = !0), (n || e) && Et(r)), o || (o = v(this) ? this.host : this, (!i.root && "slot" !== t.localName || o === t.__shady_native_parentNode) && o.__shady_native_removeChild(t)), J(this, null, t), t
                }, replaceChild: function (t, e) {
                    return this.__shady_insertBefore(t, e), this.__shady_removeChild(e), t
                }, cloneNode: function (t) {
                    if ("template" == this.localName) return this.__shady_native_cloneNode(t);
                    var e = this.__shady_native_cloneNode(!1);
                    if (t && e.nodeType !== Node.ATTRIBUTE_NODE) {
                        t = this.__shady_firstChild;
                        for (var r; t; t = t.__shady_nextSibling) r = t.__shady_cloneNode(!0), e.__shady_appendChild(r)
                    }
                    return e
                }, getRootNode: function (t) {
                    if (this && this.nodeType) {
                        var e = l(this), r = e.A;
                        return void 0 === r && (v(this) ? (r = this, e.A = r) : (r = (r = this.__shady_parentNode) ? r.__shady_getRootNode(t) : this, document.documentElement.__shady_native_contains(this) && (e.A = r))), r
                    }
                }, contains: function (t) {
                    return C(this, t)
                }
            });

            function Q(t, e, r) {
                var n = [];
                return function t(e, r, n, i) {
                    for (e = e.__shady_firstChild; e; e = e.__shady_nextSibling) {
                        var o;
                        if (o = e.nodeType === Node.ELEMENT_NODE) {
                            var s = r, a = n, c = i, u = s(o = e);
                            u && c.push(o), a && a(u) ? o = u : (t(o, s, a, c), o = void 0)
                        }
                        if (o) break
                    }
                }(t, e, r, n), n
            }

            var tt = A({
                get firstElementChild() {
                    var t = h(this);
                    if (t && void 0 !== t.firstChild) {
                        for (t = this.__shady_firstChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_nextSibling;
                        return t
                    }
                    return this.__shady_native_firstElementChild
                }, get lastElementChild() {
                    var t = h(this);
                    if (t && void 0 !== t.lastChild) {
                        for (t = this.__shady_lastChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_previousSibling;
                        return t
                    }
                    return this.__shady_native_lastElementChild
                }, get children() {
                    return m(this) ? T(Array.prototype.filter.call(O(this), function (t) {
                        return t.nodeType === Node.ELEMENT_NODE
                    })) : this.__shady_native_children
                }, get childElementCount() {
                    var t = this.__shady_children;
                    return t ? t.length : 0
                }
            }), et = A({
                querySelector: function (t) {
                    return Q(this, function (e) {
                        return b.call(e, t)
                    }, function (t) {
                        return !!t
                    })[0] || null
                }, querySelectorAll: function (t, e) {
                    if (e) {
                        e = Array.prototype.slice.call(this.__shady_native_querySelectorAll(t));
                        var r = this.__shady_getRootNode();
                        return e.filter(function (t) {
                            return t.__shady_getRootNode() == r
                        })
                    }
                    return Q(this, function (e) {
                        return b.call(e, t)
                    })
                }
            }), rt = p.J && !p.g ? Object.assign({}, tt) : tt;
            Object.assign(tt, et);
            var nt = A({
                getElementById: function (t) {
                    return "" === t ? null : Q(this, function (e) {
                        return e.id == t
                    }, function (t) {
                        return !!t
                    })[0] || null
                }
            }), it = A({
                get activeElement() {
                    var t = p.f ? document.__shady_native_activeElement : document.activeElement;
                    if (!t || !t.nodeType) return null;
                    var e = !!v(this);
                    if (!(this === document || e && this.host !== t && this.host.__shady_native_contains(t))) return null;
                    for (e = jt(t); e && e !== this;) e = jt(t = e.host);
                    return this === document ? e ? null : t : e === this ? t : null
                }
            }), ot = /[&\u00A0"]/g, st = /[&\u00A0<>]/g;

            function at(t) {
                switch (t) {
                    case"&":
                        return "&amp;";
                    case"<":
                        return "&lt;";
                    case">":
                        return "&gt;";
                    case'"':
                        return "&quot;";
                    case" ":
                        return "&nbsp;"
                }
            }

            function ct(t) {
                for (var e = {}, r = 0; r < t.length; r++) e[t[r]] = !0;
                return e
            }

            var ut = ct("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                lt = ct("style script xmp iframe noembed noframes plaintext noscript".split(" "));

            function ht(t, e) {
                "template" === t.localName && (t = t.content);
                for (var r = "", n = e ? e(t) : t.childNodes, i = 0, o = n.length, s = void 0; i < o && (s = n[i]); i++) {
                    t:{
                        var a = s, c = t, u = e;
                        switch (a.nodeType) {
                            case Node.ELEMENT_NODE:
                                for (var l, h = "<" + (c = a.localName), p = a.attributes, d = 0; l = p[d]; d++) h += " " + l.name + '="' + l.value.replace(ot, at) + '"';
                                h += ">", a = ut[c] ? h : h + ht(a, u) + "</" + c + ">";
                                break t;
                            case Node.TEXT_NODE:
                                a = a.data, a = c && lt[c.localName] ? a : a.replace(st, at);
                                break t;
                            case Node.COMMENT_NODE:
                                a = "\x3c!--" + a.data + "--\x3e";
                                break t;
                            default:
                                throw window.console.error(a), Error("not implemented")
                        }
                    }
                    r += a
                }
                return r
            }

            var pt = document.implementation.createHTMLDocument("inert"), dt = A({
                get innerHTML() {
                    return m(this) ? ht("template" === this.localName ? this.content : this, O) : this.__shady_native_innerHTML
                }, set innerHTML(t) {
                    if ("template" === this.localName) this.__shady_native_innerHTML = t; else {
                        K(this);
                        var e = this.localName || "div";
                        for (e = this.namespaceURI && this.namespaceURI !== pt.namespaceURI ? pt.createElementNS(this.namespaceURI, e) : pt.createElement(e), p.f ? e.__shady_native_innerHTML = t : e.innerHTML = t; t = e.__shady_firstChild;) this.__shady_insertBefore(t)
                    }
                }
            }), ft = A({
                addEventListener: function (t, e, r) {
                    "object" != typeof r && (r = {capture: !!r}), r.i = r.i || this, this.host.__shady_addEventListener(t, e, r)
                }, removeEventListener: function (t, e, r) {
                    "object" != typeof r && (r = {capture: !!r}), r.i = r.i || this, this.host.__shady_removeEventListener(t, e, r)
                }
            });

            function mt(t, e) {
                M(t, ft, e), M(t, it, e), M(t, dt, e), M(t, tt, e), p.g && !e ? (M(t, Z, e), M(t, nt, e)) : p.f || (M(t, F), M(t, j), M(t, D))
            }

            var vt, yt, gt = {}, bt = p.deferConnectionCallbacks && "loading" === document.readyState;

            function _t(t) {
                var e = [];
                do {
                    e.unshift(t)
                } while (t = t.__shady_parentNode);
                return e
            }

            function wt(t, e, r) {
                if (t !== gt) throw new TypeError("Illegal constructor");
                this.a = null, St(this, e, r)
            }

            function St(t, e, r) {
                if (t.R = "ShadyRoot", t.host = e, t.mode = r && r.mode, W(t.host), (e = l(t.host)).root = t, e.V = "closed" !== t.mode ? t : null, (e = l(t)).firstChild = e.lastChild = e.parentNode = e.nextSibling = e.previousSibling = null, p.preferPerformance) for (; e = t.host.__shady_native_firstChild;) t.host.__shady_native_removeChild(e); else Et(t)
            }

            function Et(t) {
                t.j || (t.j = !0, P(function () {
                    return xt(t)
                }))
            }

            function xt(t) {
                var e;
                if (e = t.j) {
                    for (var r; t;) t.j && (r = t), v(t = (e = t).host.__shady_getRootNode()) && (e = h(e.host)) && 0 < e.u || (t = void 0);
                    e = r
                }
                (r = e) && r._renderSelf()
            }

            function Ct(t, e, r) {
                var n = l(e), i = n.C;
                n.C = null, r || (r = (t = t.b[e.__shady_slot || "__catchall"]) && t[0]), r ? (l(r).assignedNodes.push(e), n.assignedSlot = r) : n.assignedSlot = void 0, i !== n.assignedSlot && n.assignedSlot && (l(n.assignedSlot).D = !0)
            }

            function Tt(t, e, r) {
                for (var n = 0, i = void 0; n < r.length && (i = r[n]); n++) if ("slot" == i.localName) {
                    var o = h(i).assignedNodes;
                    o && o.length && Tt(t, e, o)
                } else e.push(r[n])
            }

            function Nt(t, e) {
                e.__shady_native_dispatchEvent(new Event("slotchange")), (e = h(e)).assignedSlot && Nt(t, e.assignedSlot)
            }

            function Ot(t) {
                t.c = t.c || [], t.a = t.a || [], t.b = t.b || {}
            }

            function Mt(t) {
                if (t.c && t.c.length) {
                    for (var e, r = t.c, n = 0; n < r.length; n++) {
                        var i = r[n];
                        W(i);
                        var o = i.__shady_parentNode;
                        W(o), (o = h(o)).u = (o.u || 0) + 1, o = At(i), t.b[o] ? ((e = e || {})[o] = !0, t.b[o].push(i)) : t.b[o] = [i], t.a.push(i)
                    }
                    if (e) for (var s in e) t.b[s] = kt(t.b[s]);
                    t.c = []
                }
            }

            function At(t) {
                var e = t.name || t.getAttribute("name") || "__catchall";
                return t.O = e
            }

            function kt(t) {
                return t.sort(function (t, e) {
                    t = _t(t);
                    for (var r = _t(e), n = 0; n < t.length; n++) {
                        e = t[n];
                        var i = r[n];
                        if (e !== i) return (t = O(e.__shady_parentNode)).indexOf(e) - t.indexOf(i)
                    }
                })
            }

            function Rt(t) {
                return Mt(t), !(!t.a || !t.a.length)
            }

            if (wt.prototype._renderSelf = function () {
                var t = bt;
                if (bt = !0, this.j = !1, this.a) {
                    Mt(this);
                    for (var e, r = 0; r < this.a.length; r++) {
                        var n = h(e = this.a[r]), i = n.assignedNodes;
                        if (n.assignedNodes = [], n.l = [], n.H = i) for (n = 0; n < i.length; n++) {
                            var o = h(i[n]);
                            o.C = o.assignedSlot, o.assignedSlot === e && (o.assignedSlot = null)
                        }
                    }
                    for (r = this.host.__shady_firstChild; r; r = r.__shady_nextSibling) Ct(this, r);
                    for (r = 0; r < this.a.length; r++) {
                        if (!(i = h(e = this.a[r])).assignedNodes.length) for (n = e.__shady_firstChild; n; n = n.__shady_nextSibling) Ct(this, n, e);
                        if ((n = (n = h(e.__shady_parentNode)) && n.root) && (Rt(n) || n.j) && n._renderSelf(), Tt(this, i.l, i.assignedNodes), n = i.H) {
                            for (o = 0; o < n.length; o++) h(n[o]).C = null;
                            i.H = null, n.length > i.assignedNodes.length && (i.D = !0)
                        }
                        i.D && (i.D = !1, Nt(this, e))
                    }
                    for (e = this.a, r = [], i = 0; i < e.length; i++) (o = h(n = e[i].__shady_parentNode)) && o.root || !(0 > r.indexOf(n)) || r.push(n);
                    for (e = 0; e < r.length; e++) {
                        for (i = (o = r[e]) === this ? this.host : o, n = [], o = o.__shady_firstChild; o; o = o.__shady_nextSibling) if ("slot" == o.localName) for (var s = h(o).l, c = 0; c < s.length; c++) n.push(s[c]); else n.push(o);
                        o = N(i), s = a(n, n.length, o, o.length);
                        for (var u = c = 0, l = void 0; c < s.length && (l = s[c]); c++) {
                            for (var d = 0, f = void 0; d < l.o.length && (f = l.o[d]); d++) f.__shady_native_parentNode === i && i.__shady_native_removeChild(f), o.splice(l.index + u, 1);
                            u -= l.v
                        }
                        for (u = 0, l = void 0; u < s.length && (l = s[u]); u++) for (c = o[l.index], d = l.index; d < l.index + l.v; d++) f = n[d], i.__shady_native_insertBefore(f, c), o.splice(d, 0, f)
                    }
                }
                if (!p.preferPerformance && !this.G) for (r = this.host.__shady_firstChild; r; r = r.__shady_nextSibling) e = h(r), r.__shady_native_parentNode !== this.host || "slot" !== r.localName && e.assignedSlot || this.host.__shady_native_removeChild(r);
                this.G = !0, bt = t, vt && vt()
            }, (yt = wt.prototype).__proto__ = DocumentFragment.prototype, mt(yt, "__shady_"), mt(yt), Object.defineProperties(yt, {
                nodeType: {
                    value: Node.DOCUMENT_FRAGMENT_NODE,
                    configurable: !0
                }, nodeName: {value: "#document-fragment", configurable: !0}, nodeValue: {value: null, configurable: !0}
            }), ["localName", "namespaceURI", "prefix"].forEach(function (t) {
                Object.defineProperty(yt, t, {value: void 0, configurable: !0})
            }), ["ownerDocument", "baseURI", "isConnected"].forEach(function (t) {
                Object.defineProperty(yt, t, {
                    get: function () {
                        return this.host[t]
                    }, configurable: !0
                })
            }), window.customElements && p.F && !p.preferPerformance) {
                var Pt = new Map;
                vt = function () {
                    var t = [];
                    Pt.forEach(function (e, r) {
                        t.push([r, e])
                    }), Pt.clear();
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e][0];
                        t[e][1] ? r.__shadydom_connectedCallback() : r.__shadydom_disconnectedCallback()
                    }
                }, bt && document.addEventListener("readystatechange", function () {
                    bt = !1, vt()
                }, {once: !0});
                var It = window.customElements.define, Lt = function (t, e) {
                    var r = e.prototype.connectedCallback, n = e.prototype.disconnectedCallback;
                    It.call(window.customElements, t, function (t, e, r) {
                        var n = 0, i = "__isConnected" + n++;
                        return (e || r) && (t.prototype.connectedCallback = t.prototype.__shadydom_connectedCallback = function () {
                            bt ? Pt.set(this, !0) : this[i] || (this[i] = !0, e && e.call(this))
                        }, t.prototype.disconnectedCallback = t.prototype.__shadydom_disconnectedCallback = function () {
                            bt ? this.isConnected || Pt.set(this, !1) : this[i] && (this[i] = !1, r && r.call(this))
                        }), t
                    }(e, r, n)), e.prototype.connectedCallback = r, e.prototype.disconnectedCallback = n
                };
                window.customElements.define = Lt, Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
                    value: Lt,
                    configurable: !0
                })
            }

            function jt(t) {
                if (v(t = t.__shady_getRootNode())) return t
            }

            function Dt() {
                this.a = !1, this.addedNodes = [], this.removedNodes = [], this.w = new Set
            }

            Dt.prototype.flush = function () {
                if (this.a) {
                    this.a = !1;
                    var t = this.takeRecords();
                    t.length && this.w.forEach(function (e) {
                        e(t)
                    })
                }
            }, Dt.prototype.takeRecords = function () {
                if (this.addedNodes.length || this.removedNodes.length) {
                    var t = [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
                    return this.addedNodes = [], this.removedNodes = [], t
                }
                return []
            };
            var Ft = "__eventWrappers" + Date.now(), Ht = function () {
                var t = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
                return t ? function (e) {
                    return t.get.call(e)
                } : null
            }(), qt = function () {
                function t() {
                }

                var e = !1, r = {
                    get capture() {
                        e = !0
                    }
                };
                return window.addEventListener("test", t, r), window.removeEventListener("test", t, r), e
            }();

            function Bt(t) {
                if (t && "object" == typeof t) var e = !!t.capture, r = !!t.once, n = !!t.passive,
                    i = t.i; else e = !!t, n = r = !1;
                return {K: i, capture: e, once: r, passive: n, I: qt ? t : e}
            }

            var Ut = {
                blur: !0,
                focus: !0,
                focusin: !0,
                focusout: !0,
                click: !0,
                dblclick: !0,
                mousedown: !0,
                mouseenter: !0,
                mouseleave: !0,
                mousemove: !0,
                mouseout: !0,
                mouseover: !0,
                mouseup: !0,
                wheel: !0,
                beforeinput: !0,
                input: !0,
                keydown: !0,
                keyup: !0,
                compositionstart: !0,
                compositionupdate: !0,
                compositionend: !0,
                touchstart: !0,
                touchend: !0,
                touchmove: !0,
                touchcancel: !0,
                pointerover: !0,
                pointerenter: !0,
                pointerdown: !0,
                pointermove: !0,
                pointerup: !0,
                pointercancel: !0,
                pointerout: !0,
                pointerleave: !0,
                gotpointercapture: !0,
                lostpointercapture: !0,
                dragstart: !0,
                drag: !0,
                dragenter: !0,
                dragleave: !0,
                dragover: !0,
                drop: !0,
                dragend: !0,
                DOMActivate: !0,
                DOMFocusIn: !0,
                DOMFocusOut: !0,
                keypress: !0
            }, zt = {
                DOMAttrModified: !0,
                DOMAttributeNameChanged: !0,
                DOMCharacterDataModified: !0,
                DOMElementNameChanged: !0,
                DOMNodeInserted: !0,
                DOMNodeInsertedIntoDocument: !0,
                DOMNodeRemoved: !0,
                DOMNodeRemovedFromDocument: !0,
                DOMSubtreeModified: !0
            };

            function Vt(t) {
                return t instanceof Node ? t.__shady_getRootNode() : t
            }

            function Wt(t, e) {
                var r = [], n = t;
                for (t = Vt(t); n;) r.push(n), n = n.__shady_assignedSlot ? n.__shady_assignedSlot : n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n.host && (e || n !== t) ? n.host : n.__shady_parentNode;
                return r[r.length - 1] === document && r.push(window), r
            }

            function $t(t, e) {
                if (!v) return t;
                t = Wt(t, !0);
                for (var r, n, i = 0, o = void 0, s = void 0; i < e.length; i++) if ((n = Vt(r = e[i])) !== o && (s = t.indexOf(n), o = n), !v(n) || -1 < s) return r
            }

            function Xt(t) {
                function e(e, r) {
                    return (e = new t(e, r)).__composed = r && !!r.composed, e
                }

                return e.__proto__ = t, e.prototype = t.prototype, e
            }

            var Yt = {focus: !0, blur: !0};

            function Gt(t) {
                return t.__target !== t.target || t.__relatedTarget !== t.relatedTarget
            }

            function Kt(t, e, r) {
                if (r = e.__handlers && e.__handlers[t.type] && e.__handlers[t.type][r]) for (var n, i = 0; (n = r[i]) && (!Gt(t) || t.target !== t.relatedTarget) && (n.call(e, t), !t.__immediatePropagationStopped); i++) ;
            }

            function Jt(t) {
                var e, r = t.composedPath();
                Object.defineProperty(t, "currentTarget", {
                    get: function () {
                        return i
                    }, configurable: !0
                });
                for (var n = r.length - 1; 0 <= n; n--) {
                    var i = r[n];
                    if (Kt(t, i, "capture"), t.B) return
                }
                for (Object.defineProperty(t, "eventPhase", {
                    get: function () {
                        return Event.AT_TARGET
                    }
                }), n = 0; n < r.length; n++) {
                    var o = h(i = r[n]);
                    if (o = o && o.root, (0 === n || o && o === e) && (Kt(t, i, "bubble"), i !== window && (e = i.__shady_getRootNode()), t.B)) break
                }
            }

            function Zt(t, e, r, n, i, o) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s], c = a.type, u = a.capture, l = a.once, h = a.passive;
                    if (e === a.node && r === c && n === u && i === l && o === h) return s
                }
                return -1
            }

            function Qt(t, e, r) {
                var n = Bt(r), i = n.capture, o = n.once, s = n.passive, a = n.K;
                if (n = n.I, e) {
                    var c = typeof e;
                    if (("function" === c || "object" === c) && ("object" !== c || e.handleEvent && "function" == typeof e.handleEvent)) {
                        if (zt[t]) return this.__shady_native_addEventListener(t, e, n);
                        var u = a || this;
                        if (a = e[Ft]) {
                            if (-1 < Zt(a, u, t, i, o, s)) return
                        } else e[Ft] = [];
                        a = function (n) {
                            if (o && this.__shady_removeEventListener(t, e, r), n.__target || re(n), u !== this) {
                                var i = Object.getOwnPropertyDescriptor(n, "currentTarget");
                                Object.defineProperty(n, "currentTarget", {
                                    get: function () {
                                        return u
                                    }, configurable: !0
                                })
                            }
                            if (n.__previousCurrentTarget = n.currentTarget, (!v(u) && "slot" !== u.localName || -1 != n.composedPath().indexOf(u)) && (n.composed || -1 < n.composedPath().indexOf(u))) if (Gt(n) && n.target === n.relatedTarget) n.eventPhase === Event.BUBBLING_PHASE && n.stopImmediatePropagation(); else if (n.eventPhase === Event.CAPTURING_PHASE || n.bubbles || n.target === u || u instanceof Window) {
                                var s = "function" === c ? e.call(u, n) : e.handleEvent && e.handleEvent(n);
                                return u !== this && (i ? (Object.defineProperty(n, "currentTarget", i), i = null) : delete n.currentTarget), s
                            }
                        }, e[Ft].push({
                            node: u,
                            type: t,
                            capture: i,
                            once: o,
                            passive: s,
                            W: a
                        }), Yt[t] ? (this.__handlers = this.__handlers || {}, this.__handlers[t] = this.__handlers[t] || {
                            capture: [],
                            bubble: []
                        }, this.__handlers[t][i ? "capture" : "bubble"].push(a)) : this.__shady_native_addEventListener(t, a, n)
                    }
                }
            }

            function te(t, e, r) {
                if (e) {
                    var n = Bt(r);
                    r = n.capture;
                    var i = n.once, o = n.passive, s = n.K;
                    if (n = n.I, zt[t]) return this.__shady_native_removeEventListener(t, e, n);
                    var a = s || this;
                    s = void 0;
                    var c = null;
                    try {
                        c = e[Ft]
                    } catch (t) {
                    }
                    c && (-1 < (i = Zt(c, a, t, r, i, o)) && (s = c.splice(i, 1)[0].W, c.length || (e[Ft] = void 0))), this.__shady_native_removeEventListener(t, s || e, n), s && Yt[t] && this.__handlers && this.__handlers[t] && (-1 < (e = (t = this.__handlers[t][r ? "capture" : "bubble"]).indexOf(s)) && t.splice(e, 1))
                }
            }

            var ee = A({
                get composed() {
                    return void 0 === this.__composed && (Ht ? this.__composed = "focusin" === this.type || "focusout" === this.type || Ht(this) : !1 !== this.isTrusted && (this.__composed = Ut[this.type])), this.__composed || !1
                }, composedPath: function () {
                    return this.__composedPath || (this.__composedPath = Wt(this.__target, this.composed)), this.__composedPath
                }, get target() {
                    return $t(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
                }, get relatedTarget() {
                    return this.__relatedTarget ? (this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Wt(this.__relatedTarget, !0)), $t(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)) : null
                }, stopPropagation: function () {
                    Event.prototype.stopPropagation.call(this), this.B = !0
                }, stopImmediatePropagation: function () {
                    Event.prototype.stopImmediatePropagation.call(this), this.B = this.__immediatePropagationStopped = !0
                }
            });

            function re(t) {
                if (t.__target = t.target, t.__relatedTarget = t.relatedTarget, p.f) {
                    var e = Object.getPrototypeOf(t);
                    if (!Object.hasOwnProperty(e, "__shady_patchedProto")) {
                        var r = Object.create(e);
                        r.__shady_sourceProto = e, M(r, ee), e.__shady_patchedProto = r
                    }
                    t.__proto__ = e.__shady_patchedProto
                } else M(t, ee)
            }

            var ne = Xt(Event), ie = Xt(CustomEvent), oe = Xt(MouseEvent);
            var se = Object.getOwnPropertyNames(Document.prototype).filter(function (t) {
                return "on" === t.substring(0, 2)
            }), ae = p.f, ce = {
                querySelector: function (t) {
                    return this.__shady_native_querySelector(t)
                }, querySelectorAll: function (t) {
                    return this.__shady_native_querySelectorAll(t)
                }
            }, ue = {};

            function le(t) {
                ue[t] = function (e) {
                    return e["__shady_native_" + t]
                }
            }

            function he(t, e) {
                for (var r in M(t, e, "__shady_native_"), e) le(r)
            }

            function pe(t, e) {
                e = void 0 === e ? [] : e;
                for (var r = 0; r < e.length; r++) {
                    var n = e[r], i = Object.getOwnPropertyDescriptor(t, n);
                    i && (Object.defineProperty(t, "__shady_native_" + n, i), i.value ? ce[n] || (ce[n] = i.value) : le(n))
                }
            }

            var de = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
                fe = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
                me = document.implementation.createHTMLDocument("inert");

            function ve(t) {
                for (var e; e = t.__shady_native_firstChild;) t.__shady_native_removeChild(e)
            }

            var ye = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
                ge = ["querySelector", "querySelectorAll"];
            var be = A({
                dispatchEvent: function (t) {
                    return I(), this.__shady_native_dispatchEvent(t)
                }, addEventListener: Qt, removeEventListener: te
            }), _e = A({
                get assignedSlot() {
                    var t = this.__shady_parentNode;
                    return (t = t && t.__shady_shadowRoot) && xt(t), (t = h(this)) && t.assignedSlot || null
                }
            }), we = null;

            function Se() {
                return we || (we = window.ShadyCSS && window.ShadyCSS.ScopingShim), we || null
            }

            function Ee(t, e) {
                var r = Se();
                r && r.unscopeNode(t, e)
            }

            function xe(t) {
                if (t.nodeType !== Node.ELEMENT_NODE) return "";
                var e = Se();
                return e ? e.currentScopeForNode(t) : ""
            }

            function Ce(t, e) {
                if (t) for (t.nodeType === Node.ELEMENT_NODE && e(t), t = t.__shady_firstChild; t; t = t.__shady_nextSibling) t.nodeType === Node.ELEMENT_NODE && Ce(t, e)
            }

            var Te = window.document;

            function Ne(t, e) {
                if ("slot" === e) y(t = t.__shady_parentNode) && Et(h(t).root); else if ("slot" === t.localName && "name" === e && (e = jt(t))) {
                    if (e.a) {
                        Mt(e);
                        var r = t.O, n = At(t);
                        if (n !== r) {
                            var i = (r = e.b[r]).indexOf(t);
                            0 <= i && r.splice(i, 1), (r = e.b[n] || (e.b[n] = [])).push(t), 1 < r.length && (e.b[n] = kt(r))
                        }
                    }
                    Et(e)
                }
            }

            var Oe = A({
                get previousElementSibling() {
                    var t = h(this);
                    if (t && void 0 !== t.previousSibling) {
                        for (t = this.__shady_previousSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_previousSibling;
                        return t
                    }
                    return this.__shady_native_previousElementSibling
                }, get nextElementSibling() {
                    var t = h(this);
                    if (t && void 0 !== t.nextSibling) {
                        for (t = this.__shady_nextSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_nextSibling;
                        return t
                    }
                    return this.__shady_native_nextElementSibling
                }, get slot() {
                    return this.getAttribute("slot")
                }, set slot(t) {
                    this.__shady_setAttribute("slot", t)
                }, get shadowRoot() {
                    var t = h(this);
                    return t && t.V || null
                }, get className() {
                    return this.getAttribute("class") || ""
                }, set className(t) {
                    this.__shady_setAttribute("class", t)
                }, setAttribute: function (t, e) {
                    var r;
                    this.ownerDocument !== Te ? this.__shady_native_setAttribute(t, e) : ((r = Se()) && "class" === t ? (r.setElementClass(this, e), r = !0) : r = !1, r || (this.__shady_native_setAttribute(t, e), Ne(this, t)))
                }, removeAttribute: function (t) {
                    this.__shady_native_removeAttribute(t), Ne(this, t)
                }, attachShadow: function (t) {
                    if (!this) throw Error("Must provide a host.");
                    if (!t) throw Error("Not enough arguments.");
                    if (t.shadyUpgradeFragment && !p.L) {
                        var e = t.shadyUpgradeFragment;
                        if (e.__proto__ = ShadowRoot.prototype, St(e, this, t), W(e, e), t = e.__noInsertionPoint ? null : e.querySelectorAll("slot"), e.__noInsertionPoint = void 0, t && t.length) {
                            var r = e;
                            Ot(r), r.c.push.apply(r.c, t instanceof Array ? t : i(n(t))), Et(e)
                        }
                        e.host.__shady_native_appendChild(e)
                    } else e = new wt(gt, this, t);
                    return e
                }
            }), Me = A({
                blur: function () {
                    var t = h(this);
                    (t = (t = t && t.root) && t.activeElement) ? t.__shady_blur() : this.__shady_native_blur()
                }
            });
            se.forEach(function (t) {
                Me[t] = {
                    set: function (e) {
                        var r = l(this), n = t.substring(2);
                        r.h || (r.h = {}), r.h[t] && this.removeEventListener(n, r.h[t]), this.__shady_addEventListener(n, e), r.h[t] = e
                    }, get: function () {
                        var e = h(this);
                        return e && e.h && e.h[t]
                    }, configurable: !0
                }
            });
            var Ae = A({
                assignedNodes: function (t) {
                    if ("slot" === this.localName) {
                        var e = this.__shady_getRootNode();
                        return e && v(e) && xt(e), (e = h(this)) && (t && t.flatten ? e.l : e.assignedNodes) || []
                    }
                }, addEventListener: function (t, e, r) {
                    if ("slot" !== this.localName || "slotchange" === t) Qt.call(this, t, e, r); else {
                        "object" != typeof r && (r = {capture: !!r});
                        var n = this.__shady_parentNode;
                        if (!n) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                        r.i = this, n.__shady_addEventListener(t, e, r)
                    }
                }, removeEventListener: function (t, e, r) {
                    if ("slot" !== this.localName || "slotchange" === t) te.call(this, t, e, r); else {
                        "object" != typeof r && (r = {capture: !!r});
                        var n = this.__shady_parentNode;
                        if (!n) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                        r.i = this, n.__shady_removeEventListener(t, e, r)
                    }
                }
            }), ke = window.document, Re = A({
                importNode: function (t, e) {
                    if (t.ownerDocument !== ke || "template" === t.localName) return this.__shady_native_importNode(t, e);
                    var r = this.__shady_native_importNode(t, !1);
                    if (e) for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) e = this.__shady_importNode(t, !0), r.__shady_appendChild(e);
                    return r
                }
            }), Pe = A({addEventListener: Qt.bind(window), removeEventListener: te.bind(window)}), Ie = {};
            Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Ie.parentElement = Z.parentElement), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Ie.contains = Z.contains), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Ie.children = tt.children), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Ie.innerHTML = dt.innerHTML), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Ie.className = Oe.className);
            var Le = {
                EventTarget: [be],
                Node: [Z, window.EventTarget ? null : be],
                Text: [_e],
                Element: [Oe, tt, _e, !p.f || "innerHTML" in Element.prototype ? dt : null, window.HTMLSlotElement ? null : Ae],
                HTMLElement: [Me, Ie],
                HTMLSlotElement: [Ae],
                DocumentFragment: [rt, nt],
                Document: [Re, rt, nt, it],
                Window: [Pe]
            }, je = p.f ? null : ["innerHTML", "textContent"];

            function De(t) {
                var e, r = t ? null : je, n = {};
                for (e in Le) n.s = window[e] && window[e].prototype, Le[e].forEach(function (e) {
                    return function (n) {
                        return e.s && n && M(e.s, n, t, r)
                    }
                }(n)), n = {s: n.s}
            }

            function Fe(t) {
                this.node = t
            }

            (e = Fe.prototype).addEventListener = function (t, e, r) {
                return this.node.__shady_addEventListener(t, e, r)
            }, e.removeEventListener = function (t, e, r) {
                return this.node.__shady_removeEventListener(t, e, r)
            }, e.appendChild = function (t) {
                return this.node.__shady_appendChild(t)
            }, e.insertBefore = function (t, e) {
                return this.node.__shady_insertBefore(t, e)
            }, e.removeChild = function (t) {
                return this.node.__shady_removeChild(t)
            }, e.replaceChild = function (t, e) {
                return this.node.__shady_replaceChild(t, e)
            }, e.cloneNode = function (t) {
                return this.node.__shady_cloneNode(t)
            }, e.getRootNode = function (t) {
                return this.node.__shady_getRootNode(t)
            }, e.contains = function (t) {
                return this.node.__shady_contains(t)
            }, e.dispatchEvent = function (t) {
                return this.node.__shady_dispatchEvent(t)
            }, e.setAttribute = function (t, e) {
                this.node.__shady_setAttribute(t, e)
            }, e.getAttribute = function (t) {
                return this.node.__shady_native_getAttribute(t)
            }, e.removeAttribute = function (t) {
                this.node.__shady_removeAttribute(t)
            }, e.attachShadow = function (t) {
                return this.node.__shady_attachShadow(t)
            }, e.focus = function () {
                this.node.__shady_native_focus()
            }, e.blur = function () {
                this.node.__shady_blur()
            }, e.importNode = function (t, e) {
                if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(t, e)
            }, e.getElementById = function (t) {
                if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(t)
            }, e.querySelector = function (t) {
                return this.node.__shady_querySelector(t)
            }, e.querySelectorAll = function (t, e) {
                return this.node.__shady_querySelectorAll(t, e)
            }, e.assignedNodes = function (t) {
                if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(t)
            }, o.Object.defineProperties(Fe.prototype, {
                activeElement: {
                    configurable: !0, enumerable: !0, get: function () {
                        if (v(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement
                    }
                }, _activeElement: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.activeElement
                    }
                }, host: {
                    configurable: !0, enumerable: !0, get: function () {
                        if (v(this.node)) return this.node.host
                    }
                }, parentNode: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_parentNode
                    }
                }, firstChild: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_firstChild
                    }
                }, lastChild: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_lastChild
                    }
                }, nextSibling: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_nextSibling
                    }
                }, previousSibling: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_previousSibling
                    }
                }, childNodes: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_childNodes
                    }
                }, parentElement: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_parentElement
                    }
                }, firstElementChild: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_firstElementChild
                    }
                }, lastElementChild: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_lastElementChild
                    }
                }, nextElementSibling: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_nextElementSibling
                    }
                }, previousElementSibling: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_previousElementSibling
                    }
                }, children: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_children
                    }
                }, childElementCount: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_childElementCount
                    }
                }, shadowRoot: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_shadowRoot
                    }
                }, assignedSlot: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_assignedSlot
                    }
                }, isConnected: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_isConnected
                    }
                }, innerHTML: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_innerHTML
                    }, set: function (t) {
                        this.node.__shady_innerHTML = t
                    }
                }, textContent: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_textContent
                    }, set: function (t) {
                        this.node.__shady_textContent = t
                    }
                }, slot: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_slot
                    }, set: function (t) {
                        this.node.__shady_slot = t
                    }
                }, className: {
                    configurable: !0, enumerable: !0, get: function () {
                        return this.node.__shady_className
                    }, set: function (t) {
                        return this.node.__shady_className = t
                    }
                }
            }), se.forEach(function (t) {
                Object.defineProperty(Fe.prototype, t, {
                    get: function () {
                        return this.node["__shady_" + t]
                    }, set: function (e) {
                        this.node["__shady_" + t] = e
                    }, configurable: !0
                })
            });
            var He = new WeakMap;
            p.F && (window.ShadyDOM = {
                inUse: p.F,
                patch: function (t) {
                    return z(t), U(t), t
                },
                isShadyRoot: v,
                enqueue: P,
                flush: I,
                flushInitial: function (t) {
                    !t.G && t.j && xt(t)
                },
                settings: p,
                filterMutations: function (t, e) {
                    var r = e.getRootNode();
                    return t.map(function (t) {
                        var e = r === t.target.getRootNode();
                        if (e && t.addedNodes) {
                            if ((e = Array.from(t.addedNodes).filter(function (t) {
                                return r === t.getRootNode()
                            })).length) return t = Object.create(t), Object.defineProperty(t, "addedNodes", {
                                value: e,
                                configurable: !0
                            }), t
                        } else if (e) return t
                    }).filter(function (t) {
                        return t
                    })
                },
                observeChildren: function (t, e) {
                    var r = l(t);
                    r.m || (r.m = new Dt), r.m.w.add(e);
                    var n = r.m;
                    return {
                        P: e, T: n, S: t, takeRecords: function () {
                            return n.takeRecords()
                        }
                    }
                },
                unobserveChildren: function (t) {
                    var e = t && t.T;
                    e && (e.w.delete(t.P), e.w.size || (l(t.S).m = null))
                },
                deferConnectionCallbacks: p.deferConnectionCallbacks,
                preferPerformance: p.preferPerformance,
                handlesDynamicScoping: !0,
                wrap: p.g ? function (t) {
                    if (v(t) || t instanceof Fe) return t;
                    var e = He.get(t);
                    return e || (e = new Fe(t), He.set(t, e)), e
                } : function (t) {
                    return t
                },
                Wrapper: Fe,
                composedPath: function (t) {
                    return t.__composedPath || (t.__composedPath = Wt(t.target, !0)), t.__composedPath
                },
                noPatch: p.g,
                nativeMethods: ce,
                nativeTree: ue
            }, function () {
                var t = ["dispatchEvent", "addEventListener", "removeEventListener"];
                window.EventTarget ? pe(window.EventTarget.prototype, t) : (pe(Node.prototype, t), pe(Window.prototype, t)), ae ? pe(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : he(Node.prototype, {
                    parentNode: {
                        get: function () {
                            return de.currentNode = this, de.parentNode()
                        }
                    }, firstChild: {
                        get: function () {
                            return de.currentNode = this, de.firstChild()
                        }
                    }, lastChild: {
                        get: function () {
                            return de.currentNode = this, de.lastChild()
                        }
                    }, previousSibling: {
                        get: function () {
                            return de.currentNode = this, de.previousSibling()
                        }
                    }, nextSibling: {
                        get: function () {
                            return de.currentNode = this, de.nextSibling()
                        }
                    }, childNodes: {
                        get: function () {
                            var t = [];
                            de.currentNode = this;
                            for (var e = de.firstChild(); e;) t.push(e), e = de.nextSibling();
                            return t
                        }
                    }, parentElement: {
                        get: function () {
                            return fe.currentNode = this, fe.parentNode()
                        }
                    }, textContent: {
                        get: function () {
                            switch (this.nodeType) {
                                case Node.ELEMENT_NODE:
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    for (var t, e = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), r = ""; t = e.nextNode();) r += t.nodeValue;
                                    return r;
                                default:
                                    return this.nodeValue
                            }
                        }, set: function (t) {
                            switch (null == t && (t = ""), this.nodeType) {
                                case Node.ELEMENT_NODE:
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    ve(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(t), void 0);
                                    break;
                                default:
                                    this.nodeValue = t
                            }
                        }
                    }
                }), pe(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")), pe(HTMLElement.prototype, ["parentElement", "contains"]), t = {
                    firstElementChild: {
                        get: function () {
                            return fe.currentNode = this, fe.firstChild()
                        }
                    }, lastElementChild: {
                        get: function () {
                            return fe.currentNode = this, fe.lastChild()
                        }
                    }, children: {
                        get: function () {
                            var t = [];
                            fe.currentNode = this;
                            for (var e = fe.firstChild(); e;) t.push(e), e = fe.nextSibling();
                            return T(t)
                        }
                    }, childElementCount: {
                        get: function () {
                            return this.children ? this.children.length : 0
                        }
                    }
                }, ae ? (pe(Element.prototype, ye), pe(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), pe(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (he(Element.prototype, t), he(Element.prototype, {
                    previousElementSibling: {
                        get: function () {
                            return fe.currentNode = this, fe.previousSibling()
                        }
                    }, nextElementSibling: {
                        get: function () {
                            return fe.currentNode = this, fe.nextSibling()
                        }
                    }, innerHTML: {
                        get: function () {
                            return ht(this, N)
                        }, set: function (t) {
                            var e = "template" === this.localName ? this.content : this;
                            ve(e);
                            var r = this.localName || "div";
                            for ((r = this.namespaceURI && this.namespaceURI !== me.namespaceURI ? me.createElementNS(this.namespaceURI, r) : me.createElement(r)).innerHTML = t, t = "template" === this.localName ? r.content : r; r = t.__shady_native_firstChild;) e.__shady_native_insertBefore(r, void 0)
                        }
                    }, className: {
                        get: function () {
                            return this.getAttribute("class") || ""
                        }, set: function (t) {
                            this.setAttribute("class", t)
                        }
                    }
                })), pe(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")), pe(Element.prototype, ge), pe(HTMLElement.prototype, ["focus", "blur"]), window.HTMLTemplateElement && pe(window.HTMLTemplateElement.prototype, ["innerHTML"]), ae ? pe(DocumentFragment.prototype, ye) : he(DocumentFragment.prototype, t), pe(DocumentFragment.prototype, ge), ae ? (pe(Document.prototype, ye), pe(Document.prototype, ["activeElement"])) : he(Document.prototype, t), pe(Document.prototype, ["importNode", "getElementById"]), pe(Document.prototype, ge)
            }(), De("__shady_"), Object.defineProperty(document, "_activeElement", it.activeElement), M(Window.prototype, Pe, "__shady_"), p.g || (De(), function () {
                if (!Ht && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
                    var t = function () {
                        var t = new MouseEvent("click", {bubbles: !0, cancelable: !0, composed: !0});
                        this.__shady_dispatchEvent(t)
                    };
                    Element.prototype.click ? Element.prototype.click = t : HTMLElement.prototype.click && (HTMLElement.prototype.click = t)
                }
            }()), function () {
                for (var t in Yt) window.__shady_native_addEventListener(t, function (t) {
                    t.__target || (re(t), Jt(t))
                }, !0)
            }(), window.Event = ne, window.CustomEvent = ie, window.MouseEvent = oe, window.ShadowRoot = wt)
        }).call(this)
    }).call(this, r(48))
}, function (t, e) {
    (function () {
        "use strict";
        var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

        function e(e) {
            var r = t.has(e);
            return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !r && e
        }

        function r(t) {
            var e = t.isConnected;
            if (void 0 !== e) return e;
            for (; t && !(t.__CE_isImportDocument || t instanceof Document);) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
            return !(!t || !(t.__CE_isImportDocument || t instanceof Document))
        }

        function n(t, e) {
            for (; e && e !== t && !e.nextSibling;) e = e.parentNode;
            return e && e !== t ? e.nextSibling : null
        }

        function i(t, e, r) {
            r = void 0 === r ? new Set : r;
            for (var o = t; o;) {
                if (o.nodeType === Node.ELEMENT_NODE) {
                    var s = o;
                    e(s);
                    var a = s.localName;
                    if ("link" === a && "import" === s.getAttribute("rel")) {
                        if ((o = s.import) instanceof Node && !r.has(o)) for (r.add(o), o = o.firstChild; o; o = o.nextSibling) i(o, e, r);
                        o = n(t, s);
                        continue
                    }
                    if ("template" === a) {
                        o = n(t, s);
                        continue
                    }
                    if (s = s.__CE_shadowRoot) for (s = s.firstChild; s; s = s.nextSibling) i(s, e, r)
                }
                o = o.firstChild ? o.firstChild : n(t, o)
            }
        }

        function o(t, e, r) {
            t[e] = r
        }

        function s() {
            this.a = new Map, this.g = new Map, this.c = [], this.f = [], this.b = !1
        }

        function a(t, e) {
            t.b && i(e, function (e) {
                return c(t, e)
            })
        }

        function c(t, e) {
            if (t.b && !e.__CE_patched) {
                e.__CE_patched = !0;
                for (var r = 0; r < t.c.length; r++) t.c[r](e);
                for (r = 0; r < t.f.length; r++) t.f[r](e)
            }
        }

        function u(t, e) {
            var r = [];
            for (i(e, function (t) {
                return r.push(t)
            }), e = 0; e < r.length; e++) {
                var n = r[e];
                1 === n.__CE_state ? t.connectedCallback(n) : p(t, n)
            }
        }

        function l(t, e) {
            var r = [];
            for (i(e, function (t) {
                return r.push(t)
            }), e = 0; e < r.length; e++) {
                var n = r[e];
                1 === n.__CE_state && t.disconnectedCallback(n)
            }
        }

        function h(t, e, r) {
            var n = (r = void 0 === r ? {} : r).u || new Set, o = r.i || function (e) {
                return p(t, e)
            }, s = [];
            if (i(e, function (e) {
                if ("link" === e.localName && "import" === e.getAttribute("rel")) {
                    var r = e.import;
                    r instanceof Node && (r.__CE_isImportDocument = !0, r.__CE_hasRegistry = !0), r && "complete" === r.readyState ? r.__CE_documentLoadHandled = !0 : e.addEventListener("load", function () {
                        var r = e.import;
                        if (!r.__CE_documentLoadHandled) {
                            r.__CE_documentLoadHandled = !0;
                            var i = new Set(n);
                            i.delete(r), h(t, r, {u: i, i: o})
                        }
                    })
                } else s.push(e)
            }, n), t.b) for (e = 0; e < s.length; e++) c(t, s[e]);
            for (e = 0; e < s.length; e++) o(s[e])
        }

        function p(t, e) {
            if (void 0 === e.__CE_state) {
                var n = e.ownerDocument;
                if ((n.defaultView || n.__CE_isImportDocument && n.__CE_hasRegistry) && (n = t.a.get(e.localName))) {
                    n.constructionStack.push(e);
                    var i = n.constructorFunction;
                    try {
                        try {
                            if (new i !== e) throw Error("The custom element constructor did not produce the element being upgraded.")
                        } finally {
                            n.constructionStack.pop()
                        }
                    } catch (t) {
                        throw e.__CE_state = 2, t
                    }
                    if (e.__CE_state = 1, e.__CE_definition = n, n.attributeChangedCallback) for (n = n.observedAttributes, i = 0; i < n.length; i++) {
                        var o = n[i], s = e.getAttribute(o);
                        null !== s && t.attributeChangedCallback(e, o, null, s, null)
                    }
                    r(e) && t.connectedCallback(e)
                }
            }
        }

        function d(t) {
            var e = document;
            this.c = t, this.a = e, this.b = void 0, h(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
                childList: !0,
                subtree: !0
            }))
        }

        function f(t) {
            t.b && t.b.disconnect()
        }

        function m() {
            var t = this;
            this.b = this.a = void 0, this.c = new Promise(function (e) {
                t.b = e, t.a && e(t.a)
            })
        }

        function v(t) {
            if (t.a) throw Error("Already resolved.");
            t.a = void 0, t.b && t.b(void 0)
        }

        function y(t) {
            this.c = !1, this.a = t, this.j = new Map, this.f = function (t) {
                return t()
            }, this.b = !1, this.g = [], this.o = new d(t)
        }

        s.prototype.connectedCallback = function (t) {
            var e = t.__CE_definition;
            e.connectedCallback && e.connectedCallback.call(t)
        }, s.prototype.disconnectedCallback = function (t) {
            var e = t.__CE_definition;
            e.disconnectedCallback && e.disconnectedCallback.call(t)
        }, s.prototype.attributeChangedCallback = function (t, e, r, n, i) {
            var o = t.__CE_definition;
            o.attributeChangedCallback && -1 < o.observedAttributes.indexOf(e) && o.attributeChangedCallback.call(t, e, r, n, i)
        }, d.prototype.f = function (t) {
            var e = this.a.readyState;
            for ("interactive" !== e && "complete" !== e || f(this), e = 0; e < t.length; e++) for (var r = t[e].addedNodes, n = 0; n < r.length; n++) h(this.c, r[n])
        }, y.prototype.l = function (t, r) {
            var n = this;
            if (!(r instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
            if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
            if (this.c) throw Error("A custom element is already being defined.");
            this.c = !0;
            try {
                var i = function (t) {
                    var e = o[t];
                    if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
                    return e
                }, o = r.prototype;
                if (!(o instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                var s = i("connectedCallback"), a = i("disconnectedCallback"), c = i("adoptedCallback"),
                    u = i("attributeChangedCallback"), l = r.observedAttributes || []
            } catch (t) {
                return
            } finally {
                this.c = !1
            }
            r = {
                localName: t,
                constructorFunction: r,
                connectedCallback: s,
                disconnectedCallback: a,
                adoptedCallback: c,
                attributeChangedCallback: u,
                observedAttributes: l,
                constructionStack: []
            }, function (t, e, r) {
                t.a.set(e, r), t.g.set(r.constructorFunction, r)
            }(this.a, t, r), this.g.push(r), this.b || (this.b = !0, this.f(function () {
                return function (t) {
                    if (!1 !== t.b) {
                        t.b = !1;
                        for (var e = t.g, r = [], n = new Map, i = 0; i < e.length; i++) n.set(e[i].localName, []);
                        for (h(t.a, document, {
                            i: function (e) {
                                if (void 0 === e.__CE_state) {
                                    var i = e.localName, o = n.get(i);
                                    o ? o.push(e) : t.a.a.get(i) && r.push(e)
                                }
                            }
                        }), i = 0; i < r.length; i++) p(t.a, r[i]);
                        for (; 0 < e.length;) {
                            var o = e.shift();
                            i = o.localName, o = n.get(o.localName);
                            for (var s = 0; s < o.length; s++) p(t.a, o[s]);
                            (i = t.j.get(i)) && v(i)
                        }
                    }
                }(n)
            }))
        }, y.prototype.i = function (t) {
            h(this.a, t)
        }, y.prototype.get = function (t) {
            if (t = this.a.a.get(t)) return t.constructorFunction
        }, y.prototype.m = function (t) {
            if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
            var r = this.j.get(t);
            return r ? r.c : (r = new m, this.j.set(t, r), this.a.a.get(t) && !this.g.some(function (e) {
                return e.localName === t
            }) && v(r), r.c)
        }, y.prototype.s = function (t) {
            f(this.o);
            var e = this.f;
            this.f = function (r) {
                return t(function () {
                    return e(r)
                })
            }
        }, window.CustomElementRegistry = y, y.prototype.define = y.prototype.l, y.prototype.upgrade = y.prototype.i, y.prototype.get = y.prototype.get, y.prototype.whenDefined = y.prototype.m, y.prototype.polyfillWrapFlushCallback = y.prototype.s;
        var g = window.Document.prototype.createElement, b = window.Document.prototype.createElementNS,
            _ = window.Document.prototype.importNode, w = window.Document.prototype.prepend,
            S = window.Document.prototype.append, E = window.DocumentFragment.prototype.prepend,
            x = window.DocumentFragment.prototype.append, C = window.Node.prototype.cloneNode,
            T = window.Node.prototype.appendChild, N = window.Node.prototype.insertBefore,
            O = window.Node.prototype.removeChild, M = window.Node.prototype.replaceChild,
            A = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            k = window.Element.prototype.attachShadow,
            R = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            P = window.Element.prototype.getAttribute, I = window.Element.prototype.setAttribute,
            L = window.Element.prototype.removeAttribute, j = window.Element.prototype.getAttributeNS,
            D = window.Element.prototype.setAttributeNS, F = window.Element.prototype.removeAttributeNS,
            H = window.Element.prototype.insertAdjacentElement, q = window.Element.prototype.insertAdjacentHTML,
            B = window.Element.prototype.prepend, U = window.Element.prototype.append,
            z = window.Element.prototype.before, V = window.Element.prototype.after,
            W = window.Element.prototype.replaceWith, $ = window.Element.prototype.remove, X = window.HTMLElement,
            Y = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            G = window.HTMLElement.prototype.insertAdjacentElement, K = window.HTMLElement.prototype.insertAdjacentHTML,
            J = new function () {
            };

        function Z(t, e, n) {
            function i(e) {
                return function (n) {
                    for (var i = [], o = 0; o < arguments.length; ++o) i[o] = arguments[o];
                    o = [];
                    for (var s = [], a = 0; a < i.length; a++) {
                        var c = i[a];
                        if (c instanceof Element && r(c) && s.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) o.push(c); else o.push(c)
                    }
                    for (e.apply(this, i), i = 0; i < s.length; i++) l(t, s[i]);
                    if (r(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && u(t, s)
                }
            }

            void 0 !== n.h && (e.prepend = i(n.h)), void 0 !== n.append && (e.append = i(n.append))
        }

        var Q, tt = window.customElements;
        if (!tt || tt.forcePolyfill || "function" != typeof tt.define || "function" != typeof tt.get) {
            var et = new s;
            Q = et, window.HTMLElement = function () {
                function t() {
                    var t = this.constructor, e = Q.g.get(t);
                    if (!e) throw Error("The custom element being constructed was not registered with `customElements`.");
                    var r = e.constructionStack;
                    if (0 === r.length) return r = g.call(document, e.localName), Object.setPrototypeOf(r, t.prototype), r.__CE_state = 1, r.__CE_definition = e, c(Q, r), r;
                    var n = r[e = r.length - 1];
                    if (n === J) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                    return r[e] = J, Object.setPrototypeOf(n, t.prototype), c(Q, n), n
                }

                return t.prototype = X.prototype, Object.defineProperty(t.prototype, "constructor", {
                    writable: !0,
                    configurable: !0,
                    enumerable: !1,
                    value: t
                }), t
            }(), function () {
                var t = et;
                o(Document.prototype, "createElement", function (e) {
                    if (this.__CE_hasRegistry) {
                        var r = t.a.get(e);
                        if (r) return new r.constructorFunction
                    }
                    return e = g.call(this, e), c(t, e), e
                }), o(Document.prototype, "importNode", function (e, r) {
                    return e = _.call(this, e, !!r), this.__CE_hasRegistry ? h(t, e) : a(t, e), e
                }), o(Document.prototype, "createElementNS", function (e, r) {
                    if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
                        var n = t.a.get(r);
                        if (n) return new n.constructorFunction
                    }
                    return e = b.call(this, e, r), c(t, e), e
                }), Z(t, Document.prototype, {h: w, append: S})
            }(), Z(et, DocumentFragment.prototype, {h: E, append: x}), function () {
                function t(t, n) {
                    Object.defineProperty(t, "textContent", {
                        enumerable: n.enumerable,
                        configurable: !0,
                        get: n.get,
                        set: function (t) {
                            if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t); else {
                                var i = void 0;
                                if (this.firstChild) {
                                    var o = this.childNodes, s = o.length;
                                    if (0 < s && r(this)) {
                                        i = Array(s);
                                        for (var a = 0; a < s; a++) i[a] = o[a]
                                    }
                                }
                                if (n.set.call(this, t), i) for (t = 0; t < i.length; t++) l(e, i[t])
                            }
                        }
                    })
                }

                var e = et;
                o(Node.prototype, "insertBefore", function (t, n) {
                    if (t instanceof DocumentFragment) {
                        var i = Array.prototype.slice.apply(t.childNodes);
                        if (t = N.call(this, t, n), r(this)) for (n = 0; n < i.length; n++) u(e, i[n]);
                        return t
                    }
                    return i = r(t), n = N.call(this, t, n), i && l(e, t), r(this) && u(e, t), n
                }), o(Node.prototype, "appendChild", function (t) {
                    if (t instanceof DocumentFragment) {
                        var n = Array.prototype.slice.apply(t.childNodes);
                        if (t = T.call(this, t), r(this)) for (var i = 0; i < n.length; i++) u(e, n[i]);
                        return t
                    }
                    return n = r(t), i = T.call(this, t), n && l(e, t), r(this) && u(e, t), i
                }), o(Node.prototype, "cloneNode", function (t) {
                    return t = C.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? h(e, t) : a(e, t), t
                }), o(Node.prototype, "removeChild", function (t) {
                    var n = r(t), i = O.call(this, t);
                    return n && l(e, t), i
                }), o(Node.prototype, "replaceChild", function (t, n) {
                    if (t instanceof DocumentFragment) {
                        var i = Array.prototype.slice.apply(t.childNodes);
                        if (t = M.call(this, t, n), r(this)) for (l(e, n), n = 0; n < i.length; n++) u(e, i[n]);
                        return t
                    }
                    i = r(t);
                    var o = M.call(this, t, n), s = r(this);
                    return s && l(e, n), i && l(e, t), s && u(e, t), o
                }), A && A.get ? t(Node.prototype, A) : function (t, e) {
                    t.b = !0, t.c.push(e)
                }(e, function (e) {
                    t(e, {
                        enumerable: !0, configurable: !0, get: function () {
                            for (var t = [], e = 0; e < this.childNodes.length; e++) {
                                var r = this.childNodes[e];
                                r.nodeType !== Node.COMMENT_NODE && t.push(r.textContent)
                            }
                            return t.join("")
                        }, set: function (t) {
                            for (; this.firstChild;) O.call(this, this.firstChild);
                            null != t && "" !== t && T.call(this, document.createTextNode(t))
                        }
                    })
                })
            }(), function () {
                function t(t, e) {
                    Object.defineProperty(t, "innerHTML", {
                        enumerable: e.enumerable,
                        configurable: !0,
                        get: e.get,
                        set: function (t) {
                            var n = this, o = void 0;
                            if (r(this) && (o = [], i(this, function (t) {
                                t !== n && o.push(t)
                            })), e.set.call(this, t), o) for (var c = 0; c < o.length; c++) {
                                var u = o[c];
                                1 === u.__CE_state && s.disconnectedCallback(u)
                            }
                            return this.ownerDocument.__CE_hasRegistry ? h(s, this) : a(s, this), t
                        }
                    })
                }

                function e(t, e) {
                    o(t, "insertAdjacentElement", function (t, n) {
                        var i = r(n);
                        return t = e.call(this, t, n), i && l(s, n), r(t) && u(s, n), t
                    })
                }

                function n(t, e) {
                    function r(t, e) {
                        for (var r = []; t !== e; t = t.nextSibling) r.push(t);
                        for (e = 0; e < r.length; e++) h(s, r[e])
                    }

                    o(t, "insertAdjacentHTML", function (t, n) {
                        if ("beforebegin" === (t = t.toLowerCase())) {
                            var i = this.previousSibling;
                            e.call(this, t, n), r(i || this.parentNode.firstChild, this)
                        } else if ("afterbegin" === t) i = this.firstChild, e.call(this, t, n), r(this.firstChild, i); else if ("beforeend" === t) i = this.lastChild, e.call(this, t, n), r(i || this.firstChild, null); else {
                            if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                            i = this.nextSibling, e.call(this, t, n), r(this.nextSibling, i)
                        }
                    })
                }

                var s = et;
                k && o(Element.prototype, "attachShadow", function (t) {
                    t = k.call(this, t);
                    var e = s;
                    if (e.b && !t.__CE_patched) {
                        t.__CE_patched = !0;
                        for (var r = 0; r < e.c.length; r++) e.c[r](t)
                    }
                    return this.__CE_shadowRoot = t
                }), R && R.get ? t(Element.prototype, R) : Y && Y.get ? t(HTMLElement.prototype, Y) : function (t, e) {
                    t.b = !0, t.f.push(e)
                }(s, function (e) {
                    t(e, {
                        enumerable: !0, configurable: !0, get: function () {
                            return C.call(this, !0).innerHTML
                        }, set: function (t) {
                            var e = "template" === this.localName, r = e ? this.content : this,
                                n = b.call(document, this.namespaceURI, this.localName);
                            for (n.innerHTML = t; 0 < r.childNodes.length;) O.call(r, r.childNodes[0]);
                            for (t = e ? n.content : n; 0 < t.childNodes.length;) T.call(r, t.childNodes[0])
                        }
                    })
                }), o(Element.prototype, "setAttribute", function (t, e) {
                    if (1 !== this.__CE_state) return I.call(this, t, e);
                    var r = P.call(this, t);
                    I.call(this, t, e), e = P.call(this, t), s.attributeChangedCallback(this, t, r, e, null)
                }), o(Element.prototype, "setAttributeNS", function (t, e, r) {
                    if (1 !== this.__CE_state) return D.call(this, t, e, r);
                    var n = j.call(this, t, e);
                    D.call(this, t, e, r), r = j.call(this, t, e), s.attributeChangedCallback(this, e, n, r, t)
                }), o(Element.prototype, "removeAttribute", function (t) {
                    if (1 !== this.__CE_state) return L.call(this, t);
                    var e = P.call(this, t);
                    L.call(this, t), null !== e && s.attributeChangedCallback(this, t, e, null, null)
                }), o(Element.prototype, "removeAttributeNS", function (t, e) {
                    if (1 !== this.__CE_state) return F.call(this, t, e);
                    var r = j.call(this, t, e);
                    F.call(this, t, e);
                    var n = j.call(this, t, e);
                    r !== n && s.attributeChangedCallback(this, e, r, n, t)
                }), G ? e(HTMLElement.prototype, G) : H ? e(Element.prototype, H) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), K ? n(HTMLElement.prototype, K) : q ? n(Element.prototype, q) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), Z(s, Element.prototype, {
                    h: B,
                    append: U
                }), function (t) {
                    function e(e) {
                        return function (n) {
                            for (var i = [], o = 0; o < arguments.length; ++o) i[o] = arguments[o];
                            o = [];
                            for (var s = [], a = 0; a < i.length; a++) {
                                var c = i[a];
                                if (c instanceof Element && r(c) && s.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) o.push(c); else o.push(c)
                            }
                            for (e.apply(this, i), i = 0; i < s.length; i++) l(t, s[i]);
                            if (r(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && u(t, s)
                        }
                    }

                    var n = Element.prototype;
                    void 0 !== z && (n.before = e(z)), void 0 !== z && (n.after = e(V)), void 0 !== W && o(n, "replaceWith", function (e) {
                        for (var n = [], i = 0; i < arguments.length; ++i) n[i] = arguments[i];
                        i = [];
                        for (var o = [], s = 0; s < n.length; s++) {
                            var a = n[s];
                            if (a instanceof Element && r(a) && o.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) i.push(a); else i.push(a)
                        }
                        for (s = r(this), W.apply(this, n), n = 0; n < o.length; n++) l(t, o[n]);
                        if (s) for (l(t, this), n = 0; n < i.length; n++) (o = i[n]) instanceof Element && u(t, o)
                    }), void 0 !== $ && o(n, "remove", function () {
                        var e = r(this);
                        $.call(this), e && l(t, this)
                    })
                }(s)
            }(), document.__CE_hasRegistry = !0;
            var rt = new y(et);
            Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: rt})
        }
    }).call(self)
}, function (t, e) {
}, function (t, e) {
    window.requestIdleCallback = window.requestIdleCallback || (t => window.setTimeout(t, 0)), window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout
}, function (t, e) {
    console.log(" 所爱隔山海，山海不可平，海有舟可渡，山有路可行,此爱翻山海，山海皆可平")
}, function (t, e, r) {
    var n = r(64), i = r(142), o = {};
    for (var s in n) n.hasOwnProperty(s) && (o[n[s]] = s);
    var a = t.exports = {to: {}, get: {}};

    function c(t, e, r) {
        return Math.min(Math.max(e, t), r)
    }

    function u(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }

    a.get = function (t) {
        var e, r;
        switch (t.substring(0, 3).toLowerCase()) {
            case"hsl":
                e = a.get.hsl(t), r = "hsl";
                break;
            case"hwb":
                e = a.get.hwb(t), r = "hwb";
                break;
            default:
                e = a.get.rgb(t), r = "rgb"
        }
        return e ? {model: r, value: e} : null
    }, a.get.rgb = function (t) {
        if (!t) return null;
        var e, r, i, o = [0, 0, 0, 1];
        if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
            for (i = e[2], e = e[1], r = 0; r < 3; r++) {
                var s = 2 * r;
                o[r] = parseInt(e.slice(s, s + 2), 16)
            }
            i && (o[3] = Math.round(parseInt(i, 16) / 255 * 100) / 100)
        } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
            for (i = (e = e[1])[3], r = 0; r < 3; r++) o[r] = parseInt(e[r] + e[r], 16);
            i && (o[3] = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
        } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
            for (r = 0; r < 3; r++) o[r] = parseInt(e[r + 1], 0);
            e[4] && (o[3] = parseFloat(e[4]))
        } else {
            if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (e = t.match(/(\D+)/)) ? "transparent" === e[1] ? [0, 0, 0, 0] : (o = n[e[1]]) ? (o[3] = 1, o) : null : null;
            for (r = 0; r < 3; r++) o[r] = Math.round(2.55 * parseFloat(e[r + 1]));
            e[4] && (o[3] = parseFloat(e[4]))
        }
        for (r = 0; r < 3; r++) o[r] = c(o[r], 0, 255);
        return o[3] = c(o[3], 0, 1), o
    }, a.get.hsl = function (t) {
        if (!t) return null;
        var e = t.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (e) {
            var r = parseFloat(e[4]);
            return [(parseFloat(e[1]) + 360) % 360, c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(r) ? 1 : r, 0, 1)]
        }
        return null
    }, a.get.hwb = function (t) {
        if (!t) return null;
        var e = t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
        if (e) {
            var r = parseFloat(e[4]);
            return [(parseFloat(e[1]) % 360 + 360) % 360, c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(r) ? 1 : r, 0, 1)]
        }
        return null
    }, a.to.hex = function () {
        var t = i(arguments);
        return "#" + u(t[0]) + u(t[1]) + u(t[2]) + (t[3] < 1 ? u(Math.round(255 * t[3])) : "")
    }, a.to.rgb = function () {
        var t = i(arguments);
        return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")"
    }, a.to.rgb.percent = function () {
        var t = i(arguments), e = Math.round(t[0] / 255 * 100), r = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);
        return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + r + "%, " + n + "%)" : "rgba(" + e + "%, " + r + "%, " + n + "%, " + t[3] + ")"
    }, a.to.hsl = function () {
        var t = i(arguments);
        return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")"
    }, a.to.hwb = function () {
        var t = i(arguments), e = "";
        return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")"
    }, a.to.keyword = function (t) {
        return o[t.slice(0, 3)]
    }
}, function (t, e, r) {
    "use strict";
    var n = r(143), i = Array.prototype.concat, o = Array.prototype.slice, s = t.exports = function (t) {
        for (var e = [], r = 0, s = t.length; r < s; r++) {
            var a = t[r];
            n(a) ? e = i.call(e, o.call(a)) : e.push(a)
        }
        return e
    };
    s.wrap = function (t) {
        return function () {
            return t(s(arguments))
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name))
    }
}, function (t, e, r) {
    var n = r(65), i = r(145), o = {};
    Object.keys(n).forEach(function (t) {
        o[t] = {}, Object.defineProperty(o[t], "channels", {value: n[t].channels}), Object.defineProperty(o[t], "labels", {value: n[t].labels});
        var e = i(t);
        Object.keys(e).forEach(function (r) {
            var n = e[r];
            o[t][r] = function (t) {
                var e = function (e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var r = t(e);
                    if ("object" == typeof r) for (var n = r.length, i = 0; i < n; i++) r[i] = Math.round(r[i]);
                    return r
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(n), o[t][r].raw = function (t) {
                var e = function (e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(n)
        })
    }), t.exports = o
}, function (t, e, r) {
    var n = r(65);

    function i(t) {
        var e = function () {
            for (var t = {}, e = Object.keys(n), r = e.length, i = 0; i < r; i++) t[e[i]] = {
                distance: -1,
                parent: null
            };
            return t
        }(), r = [t];
        for (e[t].distance = 0; r.length;) for (var i = r.pop(), o = Object.keys(n[i]), s = o.length, a = 0; a < s; a++) {
            var c = o[a], u = e[c];
            -1 === u.distance && (u.distance = e[i].distance + 1, u.parent = i, r.unshift(c))
        }
        return e
    }

    function o(t, e) {
        return function (r) {
            return e(t(r))
        }
    }

    function s(t, e) {
        for (var r = [e[t].parent, t], i = n[e[t].parent][t], s = e[t].parent; e[s].parent;) r.unshift(e[s].parent), i = o(n[e[s].parent][s], i), s = e[s].parent;
        return i.conversion = r, i
    }

    t.exports = function (t) {
        for (var e = i(t), r = {}, n = Object.keys(e), o = n.length, a = 0; a < o; a++) {
            var c = n[a];
            null !== e[c].parent && (r[c] = s(c, e))
        }
        return r
    }
}, function (t, e, r) {
    "use strict";
    r.r(e);
    r(67), r(72), r(74), r(75), r(76), r(77), r(78), r(80), r(81), r(82), r(85), r(57), r(91), r(95), r(96), r(97), r(98), r(99), r(104), r(105), r(106), r(107), r(108), r(109), r(110), r(111), r(112), r(113), r(114), r(115), r(116), r(117), r(118), r(120), r(121), r(123), r(126), r(131);
    var n = r(35), i = (r(132), r(66)), o = r.n(i);
    r(133), r(134), r(135), r(136), r(137);

    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    class s {
        constructor() {
            this.start = 0, this.end = 0, this.previous = null, this.parent = null, this.rules = null, this.parsedCssText = "", this.cssText = "", this.atRule = !1, this.type = 0, this.keyframesName = "", this.selector = "", this.parsedSelector = ""
        }
    }

    function a(t) {
        return function t(e, r) {
            var n = r.substring(e.start, e.end - 1);
            e.parsedCssText = e.cssText = n.trim();
            if (e.parent) {
                var i = e.previous ? e.previous.end : e.parent.start;
                n = (n = (n = function (t) {
                    return t.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
                        for (var t = arguments[1], e = 6 - t.length; e--;) t = "0" + t;
                        return "\\" + t
                    })
                }(n = r.substring(i, e.start - 1))).replace(m.multipleSpaces, " ")).substring(n.lastIndexOf(";") + 1);
                var o = e.parsedSelector = e.selector = n.trim();
                e.atRule = 0 === o.indexOf(g), e.atRule ? 0 === o.indexOf(y) ? e.type = p.MEDIA_RULE : o.match(m.keyframesRule) && (e.type = p.KEYFRAMES_RULE, e.keyframesName = e.selector.split(m.multipleSpaces).pop()) : 0 === o.indexOf(v) ? e.type = p.MIXIN_RULE : e.type = p.STYLE_RULE
            }
            var s = e.rules;
            if (s) for (var a, c = 0, u = s.length; c < u && (a = s[c]); c++) t(a, r);
            return e
        }(function (t) {
            var e = new s;
            e.start = 0, e.end = t.length;
            for (var r = e, n = 0, i = t.length; n < i; n++) if (t[n] === d) {
                r.rules || (r.rules = []);
                var o = r, a = o.rules[o.rules.length - 1] || null;
                (r = new s).start = n + 1, r.parent = o, r.previous = a, o.rules.push(r)
            } else t[n] === f && (r.end = n + 1, r = r.parent || e);
            return e
        }(t = t.replace(m.comments, "").replace(m.port, "")), t)
    }

    function c(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = "";
        if (t.cssText || t.rules) {
            var i = t.rules;
            if (i && !function (t) {
                var e = t[0];
                return Boolean(e) && Boolean(e.selector) && 0 === e.selector.indexOf(v)
            }(i)) for (var o, s = 0, a = i.length; s < a && (o = i[s]); s++) n = c(o, e, n); else (n = (n = e ? t.cssText : function (t) {
                return function (t) {
                    return t.replace(m.mixinApply, "").replace(m.varApply, "")
                }(t = u(t))
            }(t.cssText)).trim()) && (n = "  " + n + "\n")
        }
        return n && (t.selector && (r += t.selector + " " + d + "\n"), r += n, t.selector && (r += f + "\n\n")), r
    }

    function u(t) {
        return t.replace(m.customProp, "").replace(m.mixinProp, "")
    }

    var l, h, p = {STYLE_RULE: 1, KEYFRAMES_RULE: 7, MEDIA_RULE: 4, MIXIN_RULE: 1e3}, d = "{", f = "}", m = {
        comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g
    }, v = "--", y = "@media", g = "@", b = !(window.ShadyDOM && window.ShadyDOM.inUse);

    function _(t) {
        l = (!t || !t.shimcssproperties) && (b || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)")))
    }

    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (h = window.ShadyCSS.cssBuild);
    var w = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? l = window.ShadyCSS.nativeCss : window.ShadyCSS ? (_(window.ShadyCSS), window.ShadyCSS = void 0) : _(window.WebComponents && window.WebComponents.flags);
    var S = l,
        E = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        x = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, C = /(--[\w-]+)\s*([:,;)]|$)/gi,
        T = /(animation\s*:)|(animation-name\s*:)/, N = /@media\s(.*)/, O = /\{[^}]*\}/g, M = "(?:^|[^.#[:])",
        A = "($|[.:[\\s>+~])", k = new Set, R = "shady-unscoped";

    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */function P(t) {
        var e = t.textContent;
        if (!k.has(e)) {
            k.add(e);
            var r = t.cloneNode(!0);
            document.head.appendChild(r)
        }
    }

    function I(t) {
        return t.hasAttribute(R)
    }

    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */function L(t, e) {
        return t ? ("string" == typeof t && (t = a(t)), e && F(t, e), c(t, S)) : ""
    }

    function j(t) {
        return !t.__cssRules && t.textContent && (t.__cssRules = a(t.textContent)), t.__cssRules || null
    }

    function D(t) {
        return Boolean(t.parent) && t.parent.type === p.KEYFRAMES_RULE
    }

    function F(t, e, r, n) {
        if (t) {
            var i = !1, o = t.type;
            if (n && o === p.MEDIA_RULE) {
                var s = t.selector.match(N);
                s && (window.matchMedia(s[1]).matches || (i = !0))
            }
            o === p.STYLE_RULE ? e(t) : r && o === p.KEYFRAMES_RULE ? r(t) : o === p.MIXIN_RULE && (i = !0);
            var a = t.rules;
            if (a && !i) for (var c, u = 0, l = a.length; u < l && (c = a[u]); u++) F(c, e, r, n)
        }
    }

    function H(t, e, r, n) {
        var i = function (t, e) {
            var r = document.createElement("style");
            e && r.setAttribute("scope", e);
            return r.textContent = t, r
        }(t, e);
        return B(i, r, n), i
    }

    var q = null;

    function B(t, e, r) {
        e = e || document.head;
        var n = r && r.nextSibling || e.firstChild;
        (e.insertBefore(t, n), q) ? t.compareDocumentPosition(q) === Node.DOCUMENT_POSITION_PRECEDING && (q = t) : q = t
    }

    function U(t, e) {
        for (var r = 0, n = e, i = t.length; n < i; n++) if ("(" === t[n]) r++; else if (")" === t[n] && 0 == --r) return n;
        return -1
    }

    function z(t, e) {
        b ? t.setAttribute("class", e) : window.ShadyDOM.nativeMethods.setAttribute.call(t, "class", e)
    }

    var V = window.ShadyDOM && window.ShadyDOM.wrap || (t => t);

    function W(t) {
        var e = t.localName, r = "", n = "";
        return e ? e.indexOf("-") > -1 ? r = e : (n = e, r = t.getAttribute && t.getAttribute("is") || "") : (r = t.is, n = t.extends), {
            is: r,
            typeExtension: n
        }
    }

    function $(t) {
        for (var e = [], r = "", n = 0; n >= 0 && n < t.length; n++) if ("(" === t[n]) {
            var i = U(t, n);
            r += t.slice(n, i + 1), n = i
        } else "," === t[n] ? (e.push(r), r = "") : r += t[n];
        return r && e.push(r), e
    }

    var X = "css-build";

    function Y(t) {
        if (void 0 !== h) return h;
        if (void 0 === t.__cssBuild) {
            var e = t.getAttribute(X);
            if (e) t.__cssBuild = e; else {
                var r = function (t) {
                    var e = "template" === t.localName ? t.content.firstChild : t.firstChild;
                    if (e instanceof Comment) {
                        var r = e.textContent.trim().split(":");
                        if (r[0] === X) return r[1]
                    }
                    return ""
                }(t);
                "" !== r && function (t) {
                    var e = "template" === t.localName ? t.content.firstChild : t.firstChild;
                    e.parentNode.removeChild(e)
                }
                /**
                 @license
                 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                 Code distributed by Google as part of the polymer project is also
                 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                 */(t), t.__cssBuild = r
            }
        }
        return t.__cssBuild || ""
    }

    function G(t) {
        return "" !== Y(t)
    }

    function K() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !("" === t || !S) && (b ? "shadow" === t : "shady" === t)
    }

    var J = "style-scope";
    var Z = /:(nth[-\w]+)\(([^)]+)\)/, Q = ":not(.".concat(J, ")"), tt = ",",
        et = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, rt = /[[.:#*]/, nt = ":host", it = ":root", ot = "::slotted",
        st = new RegExp("^(".concat(ot, ")")), at = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        ct = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, ut = /(.*):dir\((?:(ltr|rtl))\)(.*)/, lt = ".", ht = ":",
        pt = "class", dt = "should_not_match", ft = /:(?:matches|any|-(?:webkit|moz)-any)/, mt = "", vt = new class {
            get SCOPE_NAME() {
                return J
            }

            dom(t, e, r) {
                this._transformDom(t, t => {
                    this.element(t, e || "", r)
                })
            }

            domAddScope(t, e) {
                this._transformDom(t, t => {
                    this.element(t, e || "")
                })
            }

            _transformDom(t, e) {
                var r;
                if (t.nodeType === Node.ELEMENT_NODE && e(t), "template" === t.localName) {
                    var n = t;
                    r = (n.content || n._content || n).childNodes
                } else r = t.children || t.childNodes;
                if (r) for (var i = 0; i < r.length; i++) this._transformDom(r[i], e)
            }

            element(t, e, r) {
                if (e) if (t.classList) r ? (t.classList.remove(J), t.classList.remove(e)) : (t.classList.add(J), t.classList.add(e)); else if (t.getAttribute) {
                    var n = t.getAttribute(pt);
                    r ? n && z(t, n.replace(J, "").replace(e, "")) : z(t, (n ? n + " " : "") + J + " " + e)
                }
            }

            domReplaceScope(t, e, r) {
                this._transformDom(t, t => {
                    this.element(t, e, !0), this.element(t, r)
                })
            }

            domRemoveScope(t, e) {
                this._transformDom(t, t => {
                    this.element(t, e || "", !0)
                })
            }

            elementStyles(t, e, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                if ("" === i) if (b || "shady" === n) i = L(e, r); else {
                    var {is: o, typeExtension: s} = W(t);
                    i = this.css(e, o, s, r) + "\n\n"
                }
                return i.trim()
            }

            css(t, e, r, n) {
                var i = this._calcHostScope(e, r);
                e = this._calcElementScope(e);
                var o = this;
                return L(t, function (t) {
                    t.isScoped || (o.rule(t, e, i), t.isScoped = !0), n && n(t, e, i)
                })
            }

            _calcElementScope(t) {
                return t ? lt + t : ""
            }

            _calcHostScope(t, e) {
                return e ? "[is=".concat(t, "]") : t
            }

            rule(t, e, r) {
                this._transformRule(t, this._transformComplexSelector, e, r)
            }

            _transformRule(t, e, r, n) {
                t.selector = t.transformedSelector = this._transformRuleCss(t, e, r, n)
            }

            _transformRuleCss(t, e, r, n) {
                var i = $(t.selector);
                if (!D(t)) for (var o, s = 0, a = i.length; s < a && (o = i[s]); s++) i[s] = e.call(this, o, r, n);
                return i.filter(t => Boolean(t)).join(tt)
            }

            _twiddleNthPlus(t) {
                return t.replace(Z, (t, e, r) => (r.indexOf("+") > -1 ? r = r.replace(/\+/g, "___") : r.indexOf("___") > -1 && (r = r.replace(/___/g, "+")), ":".concat(e, "(").concat(r, ")")))
            }

            _preserveMatchesPseudo(t) {
                for (var e, r = []; e = t.match(ft);) {
                    var n = e.index, i = U(t, n);
                    if (-1 === i) throw new Error("".concat(e.input, " selector missing ')'"));
                    var o = t.slice(n, i + 1);
                    t = t.replace(o, mt), r.push(o)
                }
                return {selector: t, matches: r}
            }

            _replaceMatchesPseudo(t, e) {
                var r = t.split(mt);
                return e.reduce((t, e, n) => t + e + r[n + 1], r[0])
            }

            _transformComplexSelector(t, e, r) {
                var n = !1;
                t = t.trim();
                var i = Z.test(t);
                i && (t = t.replace(Z, (t, e, r) => ":".concat(e, "(").concat(r.replace(/\s/g, ""), ")")), t = this._twiddleNthPlus(t));
                var o, s = ft.test(t);
                return s && ({
                    selector: t,
                    matches: o
                } = this._preserveMatchesPseudo(t)), t = (t = t.replace(st, "".concat(nt, " $1"))).replace(et, (t, i, o) => {
                    if (!n) {
                        var s = this._transformCompoundSelector(o, i, e, r);
                        n = n || s.stop, i = s.combinator, o = s.value
                    }
                    return i + o
                }), s && (t = this._replaceMatchesPseudo(t, o)), i && (t = this._twiddleNthPlus(t)), t = t.replace(ut, (t, e, r, n) => '[dir="'.concat(r, '"] ').concat(e).concat(n, ", ").concat(e, '[dir="').concat(r, '"]').concat(n))
            }

            _transformCompoundSelector(t, e, r, n) {
                var i = t.indexOf(ot);
                t.indexOf(nt) >= 0 ? t = this._transformHostSelector(t, n) : 0 !== i && (t = r ? this._transformSimpleSelector(t, r) : t);
                var o, s = !1;
                return i >= 0 && (e = "", s = !0), s && (o = !0, s && (t = t.replace(ct, (t, e) => " > ".concat(e)))), {
                    value: t,
                    combinator: e,
                    stop: o
                }
            }

            _transformSimpleSelector(t, e) {
                for (var r = t.split(/(\[.+?\])/), n = [], i = 0; i < r.length; i++) if (i % 2 == 1) n.push(r[i]); else {
                    var o = r[i];
                    if ("" !== o || i !== r.length - 1) {
                        var s = o.split(ht);
                        s[0] += e, n.push(s.join(ht))
                    }
                }
                return n.join("")
            }

            _transformHostSelector(t, e) {
                var r = t.match(at), n = r && r[2].trim() || "";
                return n ? n[0].match(rt) ? t.replace(at, function (t, r, n) {
                    return e + n
                }) : n.split(rt)[0] === e ? n : dt : t.replace(nt, e)
            }

            documentRule(t) {
                t.selector = t.parsedSelector, this.normalizeRootSelector(t), this._transformRule(t, this._transformDocumentSelector)
            }

            normalizeRootSelector(t) {
                t.selector === it && (t.selector = "html")
            }

            _transformDocumentSelector(t) {
                return t.match(nt) ? "" : t.match(ot) ? this._transformComplexSelector(t, Q) : this._transformSimpleSelector(t.trim(), Q)
            }
        }, yt = "__styleInfo";

    class gt {
        static get(t) {
            return t ? t[yt] : null
        }

        static set(t, e) {
            return t[yt] = e, e
        }

        constructor(t, e, r, n, i, o) {
            this.styleRules = t || null, this.placeholder = e || null, this.ownStylePropertyNames = r || [], this.overrideStyleProperties = null, this.elementName = n || "", this.cssBuild = o || "", this.typeExtension = i || "", this.styleProperties = null, this.scopeSelector = null, this.customStyle = null
        }

        _getStyleRules() {
            return this.styleRules
        }
    }

    gt.prototype._getStyleRules = gt.prototype._getStyleRules;
    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var bt = function (t) {
        var e = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return e && e.call(this, t)
    }, _t = navigator.userAgent.match("Trident"), wt = "x-scope";
    var St = new class {
        get XSCOPE_NAME() {
            return wt
        }

        decorateStyles(t) {
            var e = this, r = {}, n = [], i = 0;
            F(t, function (t) {
                e.decorateRule(t), t.index = i++, e.collectPropertiesInCssText(t.propertyInfo.cssText, r)
            }, function (t) {
                n.push(t)
            }), t._keyframes = n;
            var o = [];
            for (var s in r) o.push(s);
            return o
        }

        decorateRule(t) {
            if (t.propertyInfo) return t.propertyInfo;
            var e = {}, r = {};
            return this.collectProperties(t, r) && (e.properties = r, t.rules = null), e.cssText = this.collectCssText(t), t.propertyInfo = e, e
        }

        collectProperties(t, e) {
            var r = t.propertyInfo;
            if (!r) {
                for (var n, i, o, s = E, a = t.parsedCssText; n = s.exec(a);) "inherit" === (i = (n[2] || n[3]).trim()) && "unset" === i || (e[n[1].trim()] = i), o = !0;
                return o
            }
            if (r.properties) return Object.assign(e, r.properties), !0
        }

        collectCssText(t) {
            return this.collectConsumingCssText(t.parsedCssText)
        }

        collectConsumingCssText(t) {
            return t.replace(O, "").replace(E, "")
        }

        collectPropertiesInCssText(t, e) {
            for (var r; r = C.exec(t);) {
                var n = r[1];
                ":" !== r[2] && (e[n] = !0)
            }
        }

        reify(t) {
            for (var e, r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) t[e = r[n]] = this.valueForProperty(t[e], t)
        }

        valueForProperty(t, e) {
            if (t) if (t.indexOf(";") >= 0) t = this.valueForProperties(t, e); else {
                var r = this;
                t = function t(e, r) {
                    var n = e.indexOf("var(");
                    if (-1 === n) return r(e, "", "", "");
                    var i = U(e, n + 3), o = e.substring(n + 4, i), s = e.substring(0, n), a = t(e.substring(i + 1), r),
                        c = o.indexOf(",");
                    return -1 === c ? r(s, o.trim(), "", a) : r(s, o.substring(0, c).trim(), o.substring(c + 1).trim(), a)
                }(t, function (t, n, i, o) {
                    if (!n) return t + o;
                    var s = r.valueForProperty(e[n], e);
                    return s && "initial" !== s ? "apply-shim-inherit" === s && (s = "inherit") : s = r.valueForProperty(e[i] || i, e) || i, t + (s || "") + o
                })
            }
            return t && t.trim() || ""
        }

        valueForProperties(t, e) {
            for (var r, n, i = t.split(";"), o = 0; o < i.length; o++) if (r = i[o]) {
                if (x.lastIndex = 0, n = x.exec(r)) r = this.valueForProperty(e[n[1]], e); else {
                    var s = r.indexOf(":");
                    if (-1 !== s) {
                        var a = r.substring(s);
                        a = a.trim(), a = this.valueForProperty(a, e) || a, r = r.substring(0, s) + a
                    }
                }
                i[o] = r && r.lastIndexOf(";") === r.length - 1 ? r.slice(0, -1) : r || ""
            }
            return i.join(";")
        }

        applyProperties(t, e) {
            var r = "";
            t.propertyInfo || this.decorateRule(t), t.propertyInfo.cssText && (r = this.valueForProperties(t.propertyInfo.cssText, e)), t.cssText = r
        }

        applyKeyframeTransforms(t, e) {
            var r = t.cssText, n = t.cssText;
            if (null == t.hasAnimations && (t.hasAnimations = T.test(r)), t.hasAnimations) if (null == t.keyframeNamesToTransform) for (var i in t.keyframeNamesToTransform = [], e) r !== (n = (0, e[i])(r)) && (r = n, t.keyframeNamesToTransform.push(i)); else {
                for (var o = 0; o < t.keyframeNamesToTransform.length; ++o) r = (0, e[t.keyframeNamesToTransform[o]])(r);
                n = r
            }
            t.cssText = n
        }

        propertyDataFromStyles(t, e) {
            var r = {}, n = [];
            return F(t, t => {
                t.propertyInfo || this.decorateRule(t);
                var i = t.transformedSelector || t.parsedSelector;
                e && t.propertyInfo.properties && i && bt.call(e, i) && (this.collectProperties(t, r), function (t, e) {
                    var r = parseInt(t / 32, 10), n = 1 << t % 32;
                    e[r] = (e[r] || 0) | n
                }(t.index, n))
            }, null, !0), {properties: r, key: n}
        }

        whenHostOrRootRule(t, e, r, n) {
            if (e.propertyInfo || this.decorateRule(e), e.propertyInfo.properties) {
                var {is: i, typeExtension: o} = W(t), s = i ? vt._calcHostScope(i, o) : "html", a = e.parsedSelector,
                    c = ":host > *" === a || "html" === a, u = 0 === a.indexOf(":host") && !c;
                if ("shady" === r && (u = !(c = a === s + " > *." + s || -1 !== a.indexOf("html")) && 0 === a.indexOf(s)), c || u) {
                    var l = s;
                    u && (e.transformedSelector || (e.transformedSelector = vt._transformRuleCss(e, vt._transformComplexSelector, vt._calcElementScope(i), s)), l = e.transformedSelector || s), n({
                        selector: l,
                        isHost: u,
                        isRoot: c
                    })
                }
            }
        }

        hostAndRootPropertiesForScope(t, e, r) {
            var n = {}, i = {};
            return F(e, e => {
                this.whenHostOrRootRule(t, e, r, r => {
                    var o = t._element || t;
                    bt.call(o, r.selector) && (r.isHost ? this.collectProperties(e, n) : this.collectProperties(e, i))
                })
            }, null, !0), {rootProps: i, hostProps: n}
        }

        transformStyles(t, e, r) {
            var n = this, {is: i, typeExtension: o} = W(t), s = vt._calcHostScope(i, o),
                a = t.extends ? "\\" + s.slice(0, -1) + "\\]" : s,
                c = new RegExp(M + a + A), {styleRules: u, cssBuild: l} = gt.get(t),
                h = this._elementKeyframeTransforms(t, u, r);
            return vt.elementStyles(t, u, function (t) {
                n.applyProperties(t, e), b || D(t) || !t.cssText || (n.applyKeyframeTransforms(t, h), n._scopeSelector(t, c, s, r))
            }, l)
        }

        _elementKeyframeTransforms(t, e, r) {
            var n = e._keyframes, i = {};
            if (!b && n) for (var o = 0, s = n[o]; o < n.length; s = n[++o]) this._scopeKeyframes(s, r), i[s.keyframesName] = this._keyframesRuleTransformer(s);
            return i
        }

        _keyframesRuleTransformer(t) {
            return function (e) {
                return e.replace(t.keyframesNameRx, t.transformedKeyframesName)
            }
        }

        _scopeKeyframes(t, e) {
            t.keyframesNameRx = new RegExp("\\b".concat(t.keyframesName, "(?!\\B|-)"), "g"), t.transformedKeyframesName = t.keyframesName + "-" + e, t.transformedSelector = t.transformedSelector || t.selector, t.selector = t.transformedSelector.replace(t.keyframesName, t.transformedKeyframesName)
        }

        _scopeSelector(t, e, r, n) {
            t.transformedSelector = t.transformedSelector || t.selector;
            for (var i, o = "." + n, s = $(t.transformedSelector), a = 0, c = s.length; a < c && (i = s[a]); a++) s[a] = i.match(e) ? i.replace(r, o) : o + " " + i;
            t.selector = s.join(",")
        }

        applyElementScopeSelector(t, e, r) {
            var n = t.getAttribute("class") || "", i = n;
            r && (i = n.replace(new RegExp("\\s*" + wt + "\\s*" + r + "\\s*", "g"), " ")), n !== (i += (i ? " " : "") + wt + " " + e) && z(t, i)
        }

        applyElementStyle(t, e, r, n) {
            var i = n ? n.textContent || "" : this.transformStyles(t, e, r), o = gt.get(t), s = o.customStyle;
            return s && !b && s !== n && (s._useCount--, s._useCount <= 0 && s.parentNode && s.parentNode.removeChild(s)), b ? o.customStyle ? (o.customStyle.textContent = i, n = o.customStyle) : i && (n = H(i, r, t.shadowRoot, o.placeholder)) : n ? n.parentNode || (_t && i.indexOf("@media") > -1 && (n.textContent = i), B(n, null, o.placeholder)) : i && (n = H(i, r, null, o.placeholder)), n && (n._useCount = n._useCount || 0, o.customStyle != n && n._useCount++, o.customStyle = n), n
        }

        applyCustomStyle(t, e) {
            var r = j(t), n = this;
            t.textContent = L(r, function (t) {
                var r = t.cssText = t.parsedCssText;
                t.propertyInfo && t.propertyInfo.cssText && (r = u(r), t.cssText = n.valueForProperties(r, e))
            })
        }
    }, Et = {};

    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */function xt(t) {
        return Et[t] || null
    }

    function Ct(t) {
        var e, r, n, i;
        Et[t] || (Et[t] = (e = t, r = document.createComment(" Shady DOM styles for " + e + " "), n = q ? q.nextSibling : null, (i = document.head).insertBefore(r, n || i.firstChild), q = r, r))
    }

    var Tt = window.customElements;
    if (Tt && !b && !w) {
        var Nt = Tt.define;
        Tt.define = (t, e, r) => {
            Ct(t), Nt.call(Tt, t, e, r)
        }
    }
    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var Ot = function () {
    };
    var Mt = new RegExp("".concat(vt.SCOPE_NAME, "\\s*([^\\s]*)"));

    function At(t) {
        var e = function (t) {
            return t.classList && t.classList.value ? t.classList.value : t.getAttribute("class") || ""
        }(t).match(Mt);
        return e ? e[1] : ""
    }

    function kt(t) {
        var e = V(t).getRootNode();
        if (e === t || e === t.ownerDocument) return "";
        var r = e.host;
        return r ? W(r).is : ""
    }

    function Rt(t) {
        for (var e = window.ShadyDOM.nativeMethods.querySelectorAll.call(t, ":not(.".concat(vt.SCOPE_NAME, ")")), r = 0; r < e.length; r++) {
            var n = e[r], i = kt(n);
            i && vt.element(n, i)
        }
    }

    function Pt(t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            if (r.target !== document.documentElement && r.target !== document.head) for (var n = 0; n < r.addedNodes.length; n++) {
                var i = r.addedNodes[n];
                if (i.nodeType === Node.ELEMENT_NODE) {
                    var o = (i = i).getRootNode(), s = At(i);
                    if (s && o === i.ownerDocument && ("style" !== (c = i).localName && "template" !== c.localName || !G(c))) vt.domRemoveScope(i, s); else if (o instanceof ShadowRoot) {
                        var a = kt(i);
                        a !== s && vt.domReplaceScope(i, s, a), Rt(i)
                    }
                }
            }
        }
        var c
    }

    if (!(b || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var It = new MutationObserver(Pt), Lt = t => {
            It.observe(t, {childList: !0, subtree: !0})
        };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Lt(document); else {
            var jt = () => {
                Lt(document.body)
            };
            window.HTMLImports ? window.HTMLImports.whenReady(jt) : requestAnimationFrame(function () {
                if ("loading" === document.readyState) {
                    document.addEventListener("readystatechange", function t() {
                        jt(), document.removeEventListener("readystatechange", t)
                    })
                } else jt()
            })
        }
        Ot = function () {
            Pt(It.takeRecords())
        }
    }
    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */var Dt = {}, Ft = "_applyShimCurrentVersion", Ht = "_applyShimNextVersion", qt = "_applyShimValidatingVersion",
        Bt = Promise.resolve();

    function Ut(t) {
        var e = Dt[t];
        e && function (t) {
            t[Ft] = t[Ft] || 0, t[qt] = t[qt] || 0, t[Ht] = (t[Ht] || 0) + 1
        }(e)
    }

    function zt(t) {
        return t[Ft] === t[Ht]
    }

    function Vt(t) {
        return !zt(t) && t[qt] === t[Ht]
    }

    function Wt(t) {
        t[qt] = t[Ht], t._validating || (t._validating = !0, Bt.then(function () {
            t[Ft] = t[Ht], t._validating = !1
        }))
    }

    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var $t, Xt = null, Yt = window.HTMLImports && window.HTMLImports.whenReady || null;

    function Gt(t) {
        requestAnimationFrame(function () {
            Yt ? Yt(t) : (Xt || (Xt = new Promise(t => {
                $t = t
            }), "complete" === document.readyState ? $t() : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && $t()
            })), Xt.then(function () {
                t && t()
            }))
        })
    }

    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */var Kt = "__seenByShadyCSS", Jt = "__shadyCSSCachedStyle", Zt = null, Qt = null;

    class te {
        constructor() {
            this.customStyles = [], this.enqueued = !1, Gt(() => {
                window.ShadyCSS.flushCustomStyles && window.ShadyCSS.flushCustomStyles()
            })
        }

        enqueueDocumentValidation() {
            !this.enqueued && Qt && (this.enqueued = !0, Gt(Qt))
        }

        addCustomStyle(t) {
            t[Kt] || (t[Kt] = !0, this.customStyles.push(t), this.enqueueDocumentValidation())
        }

        getStyleForCustomStyle(t) {
            return t[Jt] ? t[Jt] : t.getStyle ? t.getStyle() : t
        }

        processStyles() {
            for (var t = this.customStyles, e = 0; e < t.length; e++) {
                var r = t[e];
                if (!r[Jt]) {
                    var n = this.getStyleForCustomStyle(r);
                    if (n) {
                        var i = n.__appliedElement || n;
                        Zt && Zt(i), r[Jt] = i
                    }
                }
            }
            return t
        }
    }

    te.prototype.addCustomStyle = te.prototype.addCustomStyle, te.prototype.getStyleForCustomStyle = te.prototype.getStyleForCustomStyle, te.prototype.processStyles = te.prototype.processStyles, Object.defineProperties(te.prototype, {
        transformCallback: {
            get: () => Zt,
            set(t) {
                Zt = t
            }
        }, validateCallback: {
            get: () => Qt, set(t) {
                var e = !1;
                Qt || (e = !0), Qt = t, e && this.enqueueDocumentValidation()
            }
        }
    });
    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var ee = {}, re = new class {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
            this.cache = {}, this.typeMax = t
        }

        _validate(t, e, r) {
            for (var n = 0; n < r.length; n++) {
                var i = r[n];
                if (t.properties[i] !== e[i]) return !1
            }
            return !0
        }

        store(t, e, r, n) {
            var i = this.cache[t] || [];
            i.push({
                properties: e,
                styleElement: r,
                scopeSelector: n
            }), i.length > this.typeMax && i.shift(), this.cache[t] = i
        }

        fetch(t, e, r) {
            var n = this.cache[t];
            if (n) for (var i = n.length - 1; i >= 0; i--) {
                var o = n[i];
                if (this._validate(o, e, r)) return o
            }
        }
    };

    class ne {
        constructor() {
            this._scopeCounter = {}, this._documentOwner = document.documentElement;
            var t = new s;
            t.rules = [], this._documentOwnerStyleInfo = gt.set(this._documentOwner, new gt(t)), this._elementsHaveApplied = !1, this._applyShim = null, this._customStyleInterface = null
        }

        flush() {
            Ot()
        }

        _generateScopeSelector(t) {
            var e = this._scopeCounter[t] = (this._scopeCounter[t] || 0) + 1;
            return "".concat(t, "-").concat(e)
        }

        getStyleAst(t) {
            return j(t)
        }

        styleAstToString(t) {
            return L(t)
        }

        _gatherStyles(t) {
            return function (t) {
                for (var e = [], r = t.querySelectorAll("style"), n = 0; n < r.length; n++) {
                    var i = r[n];
                    I(i) ? b || (P(i), i.parentNode.removeChild(i)) : (e.push(i.textContent), i.parentNode.removeChild(i))
                }
                return e.join("").trim()
            }(t.content)
        }

        prepareTemplate(t, e, r) {
            this.prepareTemplateDom(t, e), this.prepareTemplateStyles(t, e, r)
        }

        prepareTemplateStyles(t, e, r) {
            if (!t._prepared && !w) {
                b || Ct(e), t._prepared = !0, t.name = e, t.extends = r, Dt[e] = t;
                var n = Y(t), i = K(n), o = {is: e, extends: r}, s = this._gatherStyles(t) + (ee[e] || "");
                if (this._ensure(), !i) {
                    var c = !n && function (t) {
                        var e = x.test(t) || E.test(t);
                        return x.lastIndex = 0, E.lastIndex = 0, e
                    }(s), u = a(s);
                    c && S && this._applyShim && this._applyShim.transformRules(u, e), t._styleAst = u
                }
                var l = [];
                if (S || (l = St.decorateStyles(t._styleAst)), !l.length || S) {
                    var h = b ? t.content : null, p = xt(e),
                        d = this._generateStaticStyle(o, t._styleAst, h, p, n, i ? s : "");
                    t._style = d
                }
                t._ownPropertyNames = l
            }
        }

        prepareAdoptedCssText(t, e) {
            ee[e] = t.join(" ")
        }

        prepareTemplateDom(t, e) {
            if (!w) {
                var r = Y(t);
                b || "shady" === r || t._domPrepared || (t._domPrepared = !0, vt.domAddScope(t.content, e))
            }
        }

        _generateStaticStyle(t, e, r, n, i, o) {
            return (o = vt.elementStyles(t, e, null, i, o)).length ? H(o, t.is, r, n) : null
        }

        _prepareHost(t) {
            var {is: e, typeExtension: r} = W(t), n = xt(e), i = Dt[e];
            if (i) {
                var o = i._styleAst, s = i._ownPropertyNames, a = Y(i), c = new gt(o, n, s, e, r, a);
                return gt.set(t, c), c
            }
        }

        _ensureApplyShim() {
            this._applyShim || window.ShadyCSS && window.ShadyCSS.ApplyShim && (this._applyShim = window.ShadyCSS.ApplyShim, this._applyShim.invalidCallback = Ut)
        }

        _ensureCustomStyleInterface() {
            this._customStyleInterface || window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this._customStyleInterface = window.ShadyCSS.CustomStyleInterface, this._customStyleInterface.transformCallback = t => {
                this.transformCustomStyleForDocument(t)
            }, this._customStyleInterface.validateCallback = () => {
                requestAnimationFrame(() => {
                    (this._customStyleInterface.enqueued || this._elementsHaveApplied) && this.flushCustomStyles()
                })
            })
        }

        _ensure() {
            this._ensureApplyShim(), this._ensureCustomStyleInterface()
        }

        flushCustomStyles() {
            if (!w && (this._ensure(), this._customStyleInterface)) {
                var t = this._customStyleInterface.processStyles();
                this._customStyleInterface.enqueued && (K(this._documentOwnerStyleInfo.cssBuild) || (S ? this._documentOwnerStyleInfo.cssBuild || this._revalidateCustomStyleApplyShim(t) : (this._updateProperties(this._documentOwner, this._documentOwnerStyleInfo), this._applyCustomStyles(t), this._elementsHaveApplied && this.styleDocument()), this._customStyleInterface.enqueued = !1))
            }
        }

        styleElement(t, e) {
            if (w) {
                if (e) {
                    gt.get(t) || gt.set(t, new gt(null));
                    var r = gt.get(t);
                    this._mixOverrideStyleProps(r, e), this.styleElementNativeVariables(t, r)
                }
            } else {
                var n = gt.get(t) || this._prepareHost(t);
                n && (this._isRootOwner(t) || (this._elementsHaveApplied = !0), e && this._mixOverrideStyleProps(n, e), S ? this.styleElementNativeVariables(t, n) : this.styleElementShimVariables(t, n))
            }
        }

        _mixOverrideStyleProps(t, e) {
            t.overrideStyleProperties = t.overrideStyleProperties || {}, Object.assign(t.overrideStyleProperties, e)
        }

        styleElementShimVariables(t, e) {
            this.flush(), this._updateProperties(t, e), e.ownStylePropertyNames && e.ownStylePropertyNames.length && this._applyStyleProperties(t, e)
        }

        styleElementNativeVariables(t, e) {
            var {is: r} = W(t);
            e.overrideStyleProperties &&
            /**
             @license
             Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
             The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
             The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
             Code distributed by Google as part of the polymer project is also
             subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
             */
            function (t, e) {
                for (var r in e) null === r ? t.style.removeProperty(r) : t.style.setProperty(r, e[r])
            }(t, e.overrideStyleProperties);
            var n = Dt[r];
            if ((n || this._isRootOwner(t)) && (!n || !G(n)) && n && n._style && !zt(n)) {
                if (Vt(n) || (this._ensure(), this._applyShim && this._applyShim.transformRules(n._styleAst, r), n._style.textContent = vt.elementStyles(t, e.styleRules), Wt(n)), b) {
                    var i = t.shadowRoot;
                    if (i) {
                        var o = i.querySelector("style");
                        o && (o.textContent = vt.elementStyles(t, e.styleRules))
                    }
                }
                e.styleRules = n._styleAst
            }
        }

        _styleOwnerForNode(t) {
            var e = V(t).getRootNode().host;
            return e ? gt.get(e) || this._prepareHost(e) ? e : this._styleOwnerForNode(e) : this._documentOwner
        }

        _isRootOwner(t) {
            return t === this._documentOwner
        }

        _applyStyleProperties(t, e) {
            var r = W(t).is, n = re.fetch(r, e.styleProperties, e.ownStylePropertyNames), i = n && n.scopeSelector,
                o = n ? n.styleElement : null, s = e.scopeSelector;
            e.scopeSelector = i || this._generateScopeSelector(r);
            var a = St.applyElementStyle(t, e.styleProperties, e.scopeSelector, o);
            return b || St.applyElementScopeSelector(t, e.scopeSelector, s), n || re.store(r, e.styleProperties, a, e.scopeSelector), a
        }

        _updateProperties(t, e) {
            var r = this._styleOwnerForNode(t), n = gt.get(r), i = n.styleProperties;
            r === this._documentOwner || i || (this._updateProperties(r, n), i = n.styleProperties);
            var o = Object.create(i || null), s = St.hostAndRootPropertiesForScope(t, e.styleRules, e.cssBuild),
                a = St.propertyDataFromStyles(n.styleRules, t).properties;
            Object.assign(o, s.hostProps, a, s.rootProps), this._mixinOverrideStyles(o, e.overrideStyleProperties), St.reify(o), e.styleProperties = o
        }

        _mixinOverrideStyles(t, e) {
            for (var r in e) {
                var n = e[r];
                (n || 0 === n) && (t[r] = n)
            }
        }

        styleDocument(t) {
            this.styleSubtree(this._documentOwner, t)
        }

        styleSubtree(t, e) {
            var r = V(t), n = r.shadowRoot;
            (n || this._isRootOwner(t)) && this.styleElement(t, e);
            var i = n && (n.children || n.childNodes);
            if (i) for (var o = 0; o < i.length; o++) {
                var s = i[o];
                this.styleSubtree(s)
            } else {
                var a = r.children || r.childNodes;
                if (a) for (var c = 0; c < a.length; c++) {
                    var u = a[c];
                    this.styleSubtree(u)
                }
            }
        }

        _revalidateCustomStyleApplyShim(t) {
            for (var e = 0; e < t.length; e++) {
                var r = t[e], n = this._customStyleInterface.getStyleForCustomStyle(r);
                n && this._revalidateApplyShim(n)
            }
        }

        _applyCustomStyles(t) {
            for (var e = 0; e < t.length; e++) {
                var r = t[e], n = this._customStyleInterface.getStyleForCustomStyle(r);
                n && St.applyCustomStyle(n, this._documentOwnerStyleInfo.styleProperties)
            }
        }

        transformCustomStyleForDocument(t) {
            var e = Y(t);
            if (e !== this._documentOwnerStyleInfo.cssBuild && (this._documentOwnerStyleInfo.cssBuild = e), !K(e)) {
                var r = j(t);
                F(r, t => {
                    b ? vt.normalizeRootSelector(t) : vt.documentRule(t), S && "" === e && (this._ensure(), this._applyShim && this._applyShim.transformRule(t))
                }), S ? t.textContent = L(r) : this._documentOwnerStyleInfo.styleRules.rules.push(r)
            }
        }

        _revalidateApplyShim(t) {
            if (S && this._applyShim) {
                var e = j(t);
                this._ensure(), this._applyShim.transformRules(e), t.textContent = L(e)
            }
        }

        getComputedStyleValue(t, e) {
            var r;
            S || (r = (gt.get(t) || gt.get(this._styleOwnerForNode(t))).styleProperties[e]);
            return (r = r || window.getComputedStyle(t).getPropertyValue(e)) ? r.trim() : ""
        }

        setElementClass(t, e) {
            var r = V(t).getRootNode(), n = e ? e.split(/\s/) : [], i = r.host && r.host.localName;
            if (!i) {
                var o = t.getAttribute("class");
                if (o) for (var s = o.split(/\s/), a = 0; a < s.length; a++) if (s[a] === vt.SCOPE_NAME) {
                    i = s[a + 1];
                    break
                }
            }
            if (i && n.push(vt.SCOPE_NAME, i), !S) {
                var c = gt.get(t);
                c && c.scopeSelector && n.push(St.XSCOPE_NAME, c.scopeSelector)
            }
            z(t, n.join(" "))
        }

        _styleInfoForNode(t) {
            return gt.get(t)
        }

        scopeNode(t, e) {
            vt.element(t, e)
        }

        unscopeNode(t, e) {
            vt.element(t, e, !0)
        }

        scopeForNode(t) {
            return kt(t)
        }

        currentScopeForNode(t) {
            return At(t)
        }
    }

    ne.prototype.flush = ne.prototype.flush, ne.prototype.prepareTemplate = ne.prototype.prepareTemplate, ne.prototype.styleElement = ne.prototype.styleElement, ne.prototype.styleDocument = ne.prototype.styleDocument, ne.prototype.styleSubtree = ne.prototype.styleSubtree, ne.prototype.getComputedStyleValue = ne.prototype.getComputedStyleValue, ne.prototype.setElementClass = ne.prototype.setElementClass, ne.prototype._styleInfoForNode = ne.prototype._styleInfoForNode, ne.prototype.transformCustomStyleForDocument = ne.prototype.transformCustomStyleForDocument, ne.prototype.getStyleAst = ne.prototype.getStyleAst, ne.prototype.styleAstToString = ne.prototype.styleAstToString, ne.prototype.flushCustomStyles = ne.prototype.flushCustomStyles, ne.prototype.scopeNode = ne.prototype.scopeNode, ne.prototype.unscopeNode = ne.prototype.unscopeNode, ne.prototype.scopeForNode = ne.prototype.scopeForNode, ne.prototype.currentScopeForNode = ne.prototype.currentScopeForNode, ne.prototype.prepareAdoptedCssText = ne.prototype.prepareAdoptedCssText, Object.defineProperties(ne.prototype, {
        nativeShadow: {get: () => b},
        nativeCss: {get: () => S}
    });
    /**
     @license
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var ie, oe, se = new ne;
    window.ShadyCSS && (ie = window.ShadyCSS.ApplyShim, oe = window.ShadyCSS.CustomStyleInterface), window.ShadyCSS = {
        ScopingShim: se,
        prepareTemplate(t, e, r) {
            se.flushCustomStyles(), se.prepareTemplate(t, e, r)
        },
        prepareTemplateDom(t, e) {
            se.prepareTemplateDom(t, e)
        },
        prepareTemplateStyles(t, e, r) {
            se.flushCustomStyles(), se.prepareTemplateStyles(t, e, r)
        },
        styleSubtree(t, e) {
            se.flushCustomStyles(), se.styleSubtree(t, e)
        },
        styleElement(t) {
            se.flushCustomStyles(), se.styleElement(t)
        },
        styleDocument(t) {
            se.flushCustomStyles(), se.styleDocument(t)
        },
        flushCustomStyles() {
            se.flushCustomStyles()
        },
        getComputedStyleValue: (t, e) => se.getComputedStyleValue(t, e),
        nativeCss: S,
        nativeShadow: b,
        cssBuild: h,
        disableRuntime: w
    }, ie && (window.ShadyCSS.ApplyShim = ie), oe && (window.ShadyCSS.CustomStyleInterface = oe);
    var ae = window.customElements, ce = !1, ue = null;

    function le() {
        window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document), ue && ue(), ce = !0, window.webComponentsReady = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
    }

    ae.polyfillWrapFlushCallback && ae.polyfillWrapFlushCallback(t => {
        ue = t, ce && t()
    }), "complete" !== document.readyState ? (window.addEventListener("load", le), window.addEventListener("DOMContentLoaded", () => {
        window.removeEventListener("load", le), le()
    })) : le();
    r(138), r(139), r(140);
    var he = "undefined" != typeof Set && 1 === new Set([1]).size ? Set : function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (t = t.filter(function (e, r) {
            return r === t.indexOf(e)
        })).size = t.length, t.has = function (e) {
            return t.indexOf(e) > -1
        }, t.add = function (e) {
            return t.has(e) || (t.size++, t.push(e)), t
        }, t.delete = function (e) {
            var r;
            return (r = t.has(e)) && (t.size--, t.splice(t.indexOf(e), 1)), r
        }, t.clear = function () {
            for (; t.pop();) ;
            t.size = 0
        }, t
    };

    function pe(t, e) {
        return t ? t(e) : e
    }

    function de(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
        return t.replace(/([a-z\d])([A-Z])/g, "$1".concat(e, "$2")).replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1".concat(e, "$2")).toLowerCase()
    }

    var fe = new he(["customevent"]), me = Symbol || (t => "_".concat(t)), ve = me("sroot"), ye = me("state");
    window.process = window.process || {}, window.process.env = window.process.env || {}, window.requestIdleCallback = window.requestIdleCallback || (t => window.setTimeout(t, 0)), window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout;

    class ge {
    }

    var be = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge;
        return class extends t {
            get sroot() {
                return this.getRoot()
            }

            get el() {
                return this.getEl()
            }

            setupComponent(t, e) {
                var {defaults: r} = this.constructor;
                this[ye] = Object.assign({}, r, e), this.setupProperties(this), this[ve] = this.setupShadowDOM(t)
            }

            setupShadowDOM(t) {
                return t
            }

            connectComponent() {
            }

            disconnectComponent() {
            }

            adoptComponent() {
            }

            getRoot() {
                return this[ve]
            }

            getEl() {
                return this[ve]
            }

            fireEvent(t, e) {
                var {componentName: r} = this.constructor, n = new CustomEvent("".concat(r, "-").concat(t), e);
                this.el.dispatchEvent(n)
            }

            setInternalState(t, e) {
                this[ye][t] = e
            }

            setupProperties() {
                var {sideEffects: t} = this.constructor;
                Object.keys(this[ye]).forEach(e => {
                    var r = t[e];
                    this.setupProperty(e, r)
                })
            }

            setupProperty(t, e) {
                Object.defineProperty(this, t, {
                    get: () => this[ye][t], set: r => {
                        var n = this[ye][t];
                        this.setInternalState(t, r), e && e.call(this, r, n)
                    }, enumerable: !0, configurable: !0
                })
            }
        }
    }, _e = new he([...fe, "template", "customelements"]), we = null, Se = t => (class extends t {
        static getObservedAttributes() {
            var {types: t} = this;
            return Object.keys(t).map(t => de(t))
        }

        constructor() {
            super(...arguments), this.setupComponent(this, this.getStateFromAttributes())
        }

        reflectAttribute(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = de(t);
            r && (we = n);
            var {types: i} = this.constructor;
            var o = i[t].stringify(e);
            null == o ? this.removeAttribute(n) : this.setAttribute(n, o)
        }

        getStateFromAttributes() {
            var {types: t} = this.constructor, e = {};
            return Object.keys(t).forEach(r => {
                var n = de(r), i = this.hasAttribute(n) ? this.getAttribute(n) : null, o = pe(t[r], i);
                null != o && (e[r] = o)
            }), e
        }

        get template() {
            return this.getTemplate()
        }

        connectedCallback() {
            this.connectComponent()
        }

        disconnectedCallback() {
            this.disconnectComponent()
        }

        adoptedCallback() {
            this.adoptComponent()
        }

        attributeChangedCallback(t, e, r) {
            if (we === t) we = null; else if (e !== r) {
                var {types: n} = this.constructor, i = function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    var n = [].map.call(e, t => t.trim()).filter(t => t.length).join("-");
                    return 0 === n.length ? "" : 1 === n.length ? n.toLowerCase() : (n = function (t) {
                        for (var e = t, r = !1, n = !1, i = !1, o = 0; o < e.length; o++) {
                            var s = e.charAt(o);
                            r && /[a-zA-Z]/.test(s) && s.toUpperCase() === s ? (e = "".concat(e.substr(0, o), "-").concat(e.substr(o)), r = !1, i = n, n = !0, o++) : n && i && /[a-zA-Z]/.test(s) && s.toLowerCase() === s ? (e = "".concat(e.substr(0, o - 1), "-").concat(e.substr(o - 1)), i = n, n = !1, r = !0) : (r = s.toLowerCase() === s, i = n, n = s.toUpperCase() === s)
                        }
                        return e
                    }(n)).replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (t, e) => e.toUpperCase())
                }(t), o = pe(n[i], r);
                this[i] = null != o ? o : this.constructor.defaults[i]
            }
        }

        setInternalState(t, e) {
            super.setInternalState(t, e), this.reflectAttribute(t, e, !0)
        }

        setupShadowDOM(t) {
            var e = this.getTemplate();
            if (e) {
                if ("attachShadow" in Element.prototype) return t.attachShadow({mode: "open"}), t.shadowRoot.appendChild(e), t.shadowRoot;
                throw Error("ShadowDOM API not supported")
            }
            return t
        }

        getEl() {
            return this
        }

        getTemplate() {
            var {componentName: t} = this.constructor;
            return document.querySelector('link[href*="'.concat(t, '"]')).import.querySelector("#".concat(t, "-template")).content.cloneNode(!0)
        }
    });

    function Ee() {
        var t = "function" == typeof window.HTMLElement ? window.HTMLElement : () => {
        };
        return Reflect.construct(t, [], this.__proto__.constructor)
    }

    Object.setPrototypeOf && (Object.setPrototypeOf(Ee.prototype, HTMLElement.prototype), Object.setPrototypeOf(Ee, HTMLElement));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var xe = function (t, e) {
        return (xe = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    };

    function Ce(t, e) {
        function r() {
            this.constructor = t
        }

        xe(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function Te(t) {
        return "function" == typeof t
    }

    var Ne = !1, Oe = {
        Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
            t && (new Error).stack;
            Ne = t
        }, get useDeprecatedSynchronousErrorHandling() {
            return Ne
        }
    };

    function Me(t) {
        setTimeout(function () {
            throw t
        }, 0)
    }

    var Ae = {
        closed: !0, next: function (t) {
        }, error: function (t) {
            if (Oe.useDeprecatedSynchronousErrorHandling) throw t;
            Me(t)
        }, complete: function () {
        }
    }, ke = Array.isArray || function (t) {
        return t && "number" == typeof t.length
    };

    function Re(t) {
        return null !== t && "object" == typeof t
    }

    function Pe(t) {
        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (t, e) {
            return e + 1 + ") " + t.toString()
        }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
    }

    Pe.prototype = Object.create(Error.prototype);
    var Ie = Pe, Le = function () {
        function t(t) {
            this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
        }

        return t.prototype.unsubscribe = function () {
            var e;
            if (!this.closed) {
                var r = this._parentOrParents, n = this._unsubscribe, i = this._subscriptions;
                if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof t) r.remove(this); else if (null !== r) for (var o = 0; o < r.length; ++o) {
                    r[o].remove(this)
                }
                if (Te(n)) try {
                    n.call(this)
                } catch (t) {
                    e = t instanceof Ie ? je(t.errors) : [t]
                }
                if (ke(i)) {
                    o = -1;
                    for (var s = i.length; ++o < s;) {
                        var a = i[o];
                        if (Re(a)) try {
                            a.unsubscribe()
                        } catch (t) {
                            e = e || [], t instanceof Ie ? e = e.concat(je(t.errors)) : e.push(t)
                        }
                    }
                }
                if (e) throw new Ie(e)
            }
        }, t.prototype.add = function (e) {
            var r = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
                case"function":
                    r = new t(e);
                case"object":
                    if (r === this || r.closed || "function" != typeof r.unsubscribe) return r;
                    if (this.closed) return r.unsubscribe(), r;
                    if (!(r instanceof t)) {
                        var n = r;
                        (r = new t)._subscriptions = [n]
                    }
                    break;
                default:
                    throw new Error("unrecognized teardown " + e + " added to Subscription.")
            }
            var i = r._parentOrParents;
            if (null === i) r._parentOrParents = this; else if (i instanceof t) {
                if (i === this) return r;
                r._parentOrParents = [i, this]
            } else {
                if (-1 !== i.indexOf(this)) return r;
                i.push(this)
            }
            var o = this._subscriptions;
            return null === o ? this._subscriptions = [r] : o.push(r), r
        }, t.prototype.remove = function (t) {
            var e = this._subscriptions;
            if (e) {
                var r = e.indexOf(t);
                -1 !== r && e.splice(r, 1)
            }
        }, t.EMPTY = function (t) {
            return t.closed = !0, t
        }(new t), t
    }();

    function je(t) {
        return t.reduce(function (t, e) {
            return t.concat(e instanceof Ie ? e.errors : e)
        }, [])
    }

    var De = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
        Fe = function (t) {
            function e(r, n, i) {
                var o = t.call(this) || this;
                switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                    case 0:
                        o.destination = Ae;
                        break;
                    case 1:
                        if (!r) {
                            o.destination = Ae;
                            break
                        }
                        if ("object" == typeof r) {
                            r instanceof e ? (o.syncErrorThrowable = r.syncErrorThrowable, o.destination = r, r.add(o)) : (o.syncErrorThrowable = !0, o.destination = new He(o, r));
                            break
                        }
                    default:
                        o.syncErrorThrowable = !0, o.destination = new He(o, r, n, i)
                }
                return o
            }

            return Ce(e, t), e.prototype[De] = function () {
                return this
            }, e.create = function (t, r, n) {
                var i = new e(t, r, n);
                return i.syncErrorThrowable = !1, i
            }, e.prototype.next = function (t) {
                this.isStopped || this._next(t)
            }, e.prototype.error = function (t) {
                this.isStopped || (this.isStopped = !0, this._error(t))
            }, e.prototype.complete = function () {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, e.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
            }, e.prototype._next = function (t) {
                this.destination.next(t)
            }, e.prototype._error = function (t) {
                this.destination.error(t), this.unsubscribe()
            }, e.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe()
            }, e.prototype._unsubscribeAndRecycle = function () {
                var t = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
            }, e
        }(Le), He = function (t) {
            function e(e, r, n, i) {
                var o, s = t.call(this) || this;
                s._parentSubscriber = e;
                var a = s;
                return Te(r) ? o = r : r && (o = r.next, n = r.error, i = r.complete, r !== Ae && (Te((a = Object.create(r)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = o, s._error = n, s._complete = i, s
            }

            return Ce(e, t), e.prototype.next = function (t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    Oe.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, e.prototype.error = function (t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber, r = Oe.useDeprecatedSynchronousErrorHandling;
                    if (this._error) r && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) r ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Me(t), this.unsubscribe(); else {
                        if (this.unsubscribe(), r) throw t;
                        Me(t)
                    }
                }
            }, e.prototype.complete = function () {
                var t = this;
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                        var r = function () {
                            return t._complete.call(t._context)
                        };
                        Oe.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, e.prototype.__tryOrUnsub = function (t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    if (this.unsubscribe(), Oe.useDeprecatedSynchronousErrorHandling) throw t;
                    Me(t)
                }
            }, e.prototype.__tryOrSetError = function (t, e, r) {
                if (!Oe.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    e.call(this._context, r)
                } catch (e) {
                    return Oe.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (Me(e), !0)
                }
                return !1
            }, e.prototype._unsubscribe = function () {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, e
        }(Fe);
    var qe = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function Be() {
    }

    function Ue(t) {
        return t ? 1 === t.length ? t[0] : function (e) {
            return t.reduce(function (t, e) {
                return e(t)
            }, e)
        } : Be
    }

    var ze = function () {
        function t(t) {
            this._isScalar = !1, t && (this._subscribe = t)
        }

        return t.prototype.lift = function (e) {
            var r = new t;
            return r.source = this, r.operator = e, r
        }, t.prototype.subscribe = function (t, e, r) {
            var n = this.operator, i = function (t, e, r) {
                if (t) {
                    if (t instanceof Fe) return t;
                    if (t[De]) return t[De]()
                }
                return t || e || r ? new Fe(t, e, r) : new Fe(Ae)
            }(t, e, r);
            if (n ? i.add(n.call(i, this.source)) : i.add(this.source || Oe.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), Oe.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
            return i
        }, t.prototype._trySubscribe = function (t) {
            try {
                return this._subscribe(t)
            } catch (e) {
                Oe.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), !function (t) {
                    for (; t;) {
                        var e = t, r = e.closed, n = e.destination, i = e.isStopped;
                        if (r || i) return !1;
                        t = n && n instanceof Fe ? n : null
                    }
                    return !0
                }(t) ? console.warn(e) : t.error(e)
            }
        }, t.prototype.forEach = function (t, e) {
            var r = this;
            return new (e = Ve(e))(function (e, n) {
                var i;
                i = r.subscribe(function (e) {
                    try {
                        t(e)
                    } catch (t) {
                        n(t), i && i.unsubscribe()
                    }
                }, n, e)
            })
        }, t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t)
        }, t.prototype[qe] = function () {
            return this
        }, t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : Ue(t)(this)
        }, t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = Ve(t))(function (t, r) {
                var n;
                e.subscribe(function (t) {
                    return n = t
                }, function (t) {
                    return r(t)
                }, function () {
                    return t(n)
                })
            })
        }, t.create = function (e) {
            return new t(e)
        }, t
    }();

    function Ve(t) {
        if (t || (t = Oe.Promise || Promise), !t) throw new Error("no Promise impl found");
        return t
    }

    function We() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
    }

    We.prototype = Object.create(Error.prototype);
    var $e = We, Xe = function (t) {
        function e(e, r) {
            var n = t.call(this) || this;
            return n.subject = e, n.subscriber = r, n.closed = !1, n
        }

        return Ce(e, t), e.prototype.unsubscribe = function () {
            if (!this.closed) {
                this.closed = !0;
                var t = this.subject, e = t.observers;
                if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                    var r = e.indexOf(this.subscriber);
                    -1 !== r && e.splice(r, 1)
                }
            }
        }, e
    }(Le), Ye = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.destination = e, r
        }

        return Ce(e, t), e
    }(Fe), Ge = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
        }

        return Ce(e, t), e.prototype[De] = function () {
            return new Ye(this)
        }, e.prototype.lift = function (t) {
            var e = new Ke(this, this);
            return e.operator = t, e
        }, e.prototype.next = function (t) {
            if (this.closed) throw new $e;
            if (!this.isStopped) for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].next(t)
        }, e.prototype.error = function (t) {
            if (this.closed) throw new $e;
            this.hasError = !0, this.thrownError = t, this.isStopped = !0;
            for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].error(t);
            this.observers.length = 0
        }, e.prototype.complete = function () {
            if (this.closed) throw new $e;
            this.isStopped = !0;
            for (var t = this.observers, e = t.length, r = t.slice(), n = 0; n < e; n++) r[n].complete();
            this.observers.length = 0
        }, e.prototype.unsubscribe = function () {
            this.isStopped = !0, this.closed = !0, this.observers = null
        }, e.prototype._trySubscribe = function (e) {
            if (this.closed) throw new $e;
            return t.prototype._trySubscribe.call(this, e)
        }, e.prototype._subscribe = function (t) {
            if (this.closed) throw new $e;
            return this.hasError ? (t.error(this.thrownError), Le.EMPTY) : this.isStopped ? (t.complete(), Le.EMPTY) : (this.observers.push(t), new Xe(this, t))
        }, e.prototype.asObservable = function () {
            var t = new ze;
            return t.source = this, t
        }, e.create = function (t, e) {
            return new Ke(t, e)
        }, e
    }(ze), Ke = function (t) {
        function e(e, r) {
            var n = t.call(this) || this;
            return n.destination = e, n.source = r, n
        }

        return Ce(e, t), e.prototype.next = function (t) {
            var e = this.destination;
            e && e.next && e.next(t)
        }, e.prototype.error = function (t) {
            var e = this.destination;
            e && e.error && this.destination.error(t)
        }, e.prototype.complete = function () {
            var t = this.destination;
            t && t.complete && this.destination.complete()
        }, e.prototype._subscribe = function (t) {
            return this.source ? this.source.subscribe(t) : Le.EMPTY
        }, e
    }(Ge), Je = function (t) {
        function e(e, r) {
            var n = t.call(this, e, r) || this;
            return n.scheduler = e, n.work = r, n.pending = !1, n
        }

        return Ce(e, t), e.prototype.schedule = function (t, e) {
            if (void 0 === e && (e = 0), this.closed) return this;
            this.state = t;
            var r = this.id, n = this.scheduler;
            return null != r && (this.id = this.recycleAsyncId(n, r, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(n, this.id, e), this
        }, e.prototype.requestAsyncId = function (t, e, r) {
            return void 0 === r && (r = 0), setInterval(t.flush.bind(t, this), r)
        }, e.prototype.recycleAsyncId = function (t, e, r) {
            if (void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending) return e;
            clearInterval(e)
        }, e.prototype.execute = function (t, e) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var r = this._execute(t, e);
            if (r) return r;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, e.prototype._execute = function (t, e) {
            var r = !1, n = void 0;
            try {
                this.work(t)
            } catch (t) {
                r = !0, n = !!t && t || new Error(t)
            }
            if (r) return this.unsubscribe(), n
        }, e.prototype._unsubscribe = function () {
            var t = this.id, e = this.scheduler, r = e.actions, n = r.indexOf(this);
            this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(n, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
        }, e
    }(function (t) {
        function e(e, r) {
            return t.call(this) || this
        }

        return Ce(e, t), e.prototype.schedule = function (t, e) {
            return void 0 === e && (e = 0), this
        }, e
    }(Le)), Ze = function (t) {
        function e(e, r) {
            var n = t.call(this, e, r) || this;
            return n.scheduler = e, n.work = r, n
        }

        return Ce(e, t), e.prototype.schedule = function (e, r) {
            return void 0 === r && (r = 0), r > 0 ? t.prototype.schedule.call(this, e, r) : (this.delay = r, this.state = e, this.scheduler.flush(this), this)
        }, e.prototype.execute = function (e, r) {
            return r > 0 || this.closed ? t.prototype.execute.call(this, e, r) : this._execute(e, r)
        }, e.prototype.requestAsyncId = function (e, r, n) {
            return void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, r, n) : e.flush(this)
        }, e
    }(Je), Qe = function () {
        function t(e, r) {
            void 0 === r && (r = t.now), this.SchedulerAction = e, this.now = r
        }

        return t.prototype.schedule = function (t, e, r) {
            return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(r, e)
        }, t.now = function () {
            return Date.now()
        }, t
    }(), tr = function (t) {
        function e(r, n) {
            void 0 === n && (n = Qe.now);
            var i = t.call(this, r, function () {
                return e.delegate && e.delegate !== i ? e.delegate.now() : n()
            }) || this;
            return i.actions = [], i.active = !1, i.scheduled = void 0, i
        }

        return Ce(e, t), e.prototype.schedule = function (r, n, i) {
            return void 0 === n && (n = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(r, n, i) : t.prototype.schedule.call(this, r, n, i)
        }, e.prototype.flush = function (t) {
            var e = this.actions;
            if (this.active) e.push(t); else {
                var r;
                this.active = !0;
                do {
                    if (r = t.execute(t.state, t.delay)) break
                } while (t = e.shift());
                if (this.active = !1, r) {
                    for (; t = e.shift();) t.unsubscribe();
                    throw r
                }
            }
        }, e
    }(Qe), er = new (function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Ce(e, t), e
    }(tr))(Ze), rr = new ze(function (t) {
        return t.complete()
    });

    function nr(t) {
        return t ? function (t) {
            return new ze(function (e) {
                return t.schedule(function () {
                    return e.complete()
                })
            })
        }(t) : rr
    }

    function ir(t) {
        return t && "function" == typeof t.schedule
    }

    var or, sr = function (t) {
        return function (e) {
            for (var r = 0, n = t.length; r < n && !e.closed; r++) e.next(t[r]);
            e.complete()
        }
    };

    function ar(t, e) {
        return new ze(function (r) {
            var n = new Le, i = 0;
            return n.add(e.schedule(function () {
                i !== t.length ? (r.next(t[i++]), r.closed || n.add(this.schedule())) : r.complete()
            })), n
        })
    }

    function cr(t, e) {
        return e ? ar(t, e) : new ze(sr(t))
    }

    function ur() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = t[t.length - 1];
        return ir(r) ? (t.pop(), ar(t, r)) : cr(t)
    }

    function lr(t) {
        var e = t.error;
        t.subscriber.error(e)
    }

    or || (or = {});
    var hr = function () {
        function t(t, e, r) {
            this.kind = t, this.value = e, this.error = r, this.hasValue = "N" === t
        }

        return t.prototype.observe = function (t) {
            switch (this.kind) {
                case"N":
                    return t.next && t.next(this.value);
                case"E":
                    return t.error && t.error(this.error);
                case"C":
                    return t.complete && t.complete()
            }
        }, t.prototype.do = function (t, e, r) {
            switch (this.kind) {
                case"N":
                    return t && t(this.value);
                case"E":
                    return e && e(this.error);
                case"C":
                    return r && r()
            }
        }, t.prototype.accept = function (t, e, r) {
            return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, r)
        }, t.prototype.toObservable = function () {
            var t, e;
            switch (this.kind) {
                case"N":
                    return ur(this.value);
                case"E":
                    return t = this.error, new ze(e ? function (r) {
                        return e.schedule(lr, 0, {error: t, subscriber: r})
                    } : function (e) {
                        return e.error(t)
                    });
                case"C":
                    return nr()
            }
            throw new Error("unexpected notification kind value")
        }, t.createNext = function (e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
        }, t.createError = function (e) {
            return new t("E", void 0, e)
        }, t.createComplete = function () {
            return t.completeNotification
        }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
    }();
    var pr = function () {
        function t(t, e) {
            void 0 === e && (e = 0), this.scheduler = t, this.delay = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new dr(t, this.scheduler, this.delay))
        }, t
    }(), dr = function (t) {
        function e(e, r, n) {
            void 0 === n && (n = 0);
            var i = t.call(this, e) || this;
            return i.scheduler = r, i.delay = n, i
        }

        return Ce(e, t), e.dispatch = function (t) {
            var e = t.notification, r = t.destination;
            e.observe(r), this.unsubscribe()
        }, e.prototype.scheduleMessage = function (t) {
            this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new fr(t, this.destination)))
        }, e.prototype._next = function (t) {
            this.scheduleMessage(hr.createNext(t))
        }, e.prototype._error = function (t) {
            this.scheduleMessage(hr.createError(t)), this.unsubscribe()
        }, e.prototype._complete = function () {
            this.scheduleMessage(hr.createComplete()), this.unsubscribe()
        }, e
    }(Fe), fr = function () {
        return function (t, e) {
            this.notification = t, this.destination = e
        }
    }(), mr = function (t) {
        function e(e, r, n) {
            void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === r && (r = Number.POSITIVE_INFINITY);
            var i = t.call(this) || this;
            return i.scheduler = n, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = e < 1 ? 1 : e, i._windowTime = r < 1 ? 1 : r, r === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i
        }

        return Ce(e, t), e.prototype.nextInfiniteTimeWindow = function (e) {
            var r = this._events;
            r.push(e), r.length > this._bufferSize && r.shift(), t.prototype.next.call(this, e)
        }, e.prototype.nextTimeWindow = function (e) {
            this._events.push(new vr(this._getNow(), e)), this._trimBufferThenGetEvents(), t.prototype.next.call(this, e)
        }, e.prototype._subscribe = function (t) {
            var e, r = this._infiniteTimeWindow, n = r ? this._events : this._trimBufferThenGetEvents(),
                i = this.scheduler, o = n.length;
            if (this.closed) throw new $e;
            if (this.isStopped || this.hasError ? e = Le.EMPTY : (this.observers.push(t), e = new Xe(this, t)), i && t.add(t = new dr(t, i)), r) for (var s = 0; s < o && !t.closed; s++) t.next(n[s]); else for (s = 0; s < o && !t.closed; s++) t.next(n[s].value);
            return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
        }, e.prototype._getNow = function () {
            return (this.scheduler || er).now()
        }, e.prototype._trimBufferThenGetEvents = function () {
            for (var t = this._getNow(), e = this._bufferSize, r = this._windowTime, n = this._events, i = n.length, o = 0; o < i && !(t - n[o].time < r);) o++;
            return i > e && (o = Math.max(o, i - e)), o > 0 && n.splice(0, o), n
        }, e
    }(Ge), vr = function () {
        return function (t, e) {
            this.time = t, this.value = e
        }
    }(), yr = t => (class extends t {
        setupComponent(t, e) {
            var r = {};
            this.subjects = {}, this.subjects.disconnect = new Ge, this.subjects.document = new mr, Object.keys(this.constructor.types).map(t => {
                this.subjects[t] = new mr(1), r[t] = e => this.subjects[t].next(e)
            }), Object.defineProperty(this.constructor, "sideEffects", {
                get: () => r, set: () => {
                }, enumerable: !0, configurable: !0
            }), super.setupComponent(t, e)
        }

        connectComponent() {
            super.connectComponent(), this.subjects.document.next(document), Object.keys(this.constructor.types).map(t => this.subjects[t].next(this[t]))
        }

        disconnectComponent() {
            super.disconnectComponent(), this.subjects.disconnect.next({})
        }

        adaptComponent() {
            super.adaptComponent(), this.subjects.document.next(document)
        }
    }), gr = t => (e, r, n) => ze.create(i => {
        var o = i.next.bind(i), s = new t(t => Array.from(t).forEach(o), r);
        return s.observe(e, n), () => {
            s.unobserve(e)
        }
    }), br = t => {
        return null == t ? null : t.trim().replace(/^\[?(.*?)\]?$/, "$1").split(",").map(t => t.trim()) || null
    };
    br.stringify = t => t && t.length > 0 ? t.join(",") : null;
    var _r = t => {
        var e = e => {
            if (null == e) return null;
            var r = br(e).map(t);
            return r.reduce((t, e) => t && null !== e, !0) ? r : null
        };
        return e.stringify = e => {
            var r = e && e.map && e.map(t.stringify);
            return r && r.reduce((t, e) => t && null !== e, !0) ? br.stringify(r) : null
        }, e
    }, wr = t => {
        if (null == t) return !1;
        var e = t.trim && t.trim() || t;
        return !("false" === e || "null" === e || "undefined" === e || "0" === e || !1 === e)
    };
    wr.stringify = t => t ? "" : null;
    var Sr = t => null == t ? null : Number(t);
    Sr.stringify = t => null == t ? null : "".concat(t);
    var Er = t => {
        var e = e => {
            if (null == e) return null;
            var r = t.indexOf(e);
            return r > -1 ? t[r] : null
        };
        return e.stringify = e => -1 !== t.indexOf(e) ? e : null, e
    }, xr = t => {
        if (null == t) return null;
        var e = (t.trim && t.trim() || t).match(/^\/?(.*?)(\/([gimy]*))?$/);
        return new RegExp(e[1], e[3])
    };
    xr.stringify = t => t && t.toString() || null;
    var Cr = t => t;
    Cr.stringify = t => t;
    var Tr = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Ce(e, t), e.prototype.notifyNext = function (t, e, r, n, i) {
            this.destination.next(e)
        }, e.prototype.notifyError = function (t, e) {
            this.destination.error(t)
        }, e.prototype.notifyComplete = function (t) {
            this.destination.complete()
        }, e
    }(Fe), Nr = function (t) {
        function e(e, r, n) {
            var i = t.call(this) || this;
            return i.parent = e, i.outerValue = r, i.outerIndex = n, i.index = 0, i
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
        }, e.prototype._error = function (t) {
            this.parent.notifyError(t, this), this.unsubscribe()
        }, e.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe()
        }, e
    }(Fe);

    function Or() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }

    var Mr = Or(), Ar = function (t) {
        return t && "number" == typeof t.length && "function" != typeof t
    };

    function kr(t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }

    var Rr = function (t) {
        if (t && "function" == typeof t[qe]) return n = t, function (t) {
            var e = n[qe]();
            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return e.subscribe(t)
        };
        if (Ar(t)) return sr(t);
        if (kr(t)) return r = t, function (t) {
            return r.then(function (e) {
                t.closed || (t.next(e), t.complete())
            }, function (e) {
                return t.error(e)
            }).then(null, Me), t
        };
        if (t && "function" == typeof t[Mr]) return e = t, function (t) {
            for (var r = e[Mr](); ;) {
                var n = r.next();
                if (n.done) {
                    t.complete();
                    break
                }
                if (t.next(n.value), t.closed) break
            }
            return "function" == typeof r.return && t.add(function () {
                r.return && r.return()
            }), t
        };
        var e, r, n, i = Re(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + i + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };

    function Pr(t, e, r, n, i) {
        if (void 0 === i && (i = new Nr(t, r, n)), !i.closed) return e instanceof ze ? e.subscribe(i) : Rr(e)(i)
    }

    var Ir = {};

    function Lr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = null, n = null;
        return ir(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && ke(t[0]) && (t = t[0]), cr(t, n).lift(new jr(r))
    }

    var jr = function () {
        function t(t) {
            this.resultSelector = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Dr(t, this.resultSelector))
        }, t
    }(), Dr = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.resultSelector = r, n.active = 0, n.values = [], n.observables = [], n
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.values.push(Ir), this.observables.push(t)
        }, e.prototype._complete = function () {
            var t = this.observables, e = t.length;
            if (0 === e) this.destination.complete(); else {
                this.active = e, this.toRespond = e;
                for (var r = 0; r < e; r++) {
                    var n = t[r];
                    this.add(Pr(this, n, n, r))
                }
            }
        }, e.prototype.notifyComplete = function (t) {
            0 == (this.active -= 1) && this.destination.complete()
        }, e.prototype.notifyNext = function (t, e, r, n, i) {
            var o = this.values, s = o[r], a = this.toRespond ? s === Ir ? --this.toRespond : this.toRespond : 0;
            o[r] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
        }, e.prototype._tryResultSelector = function (t) {
            var e;
            try {
                e = this.resultSelector.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }(Tr);

    function Fr(t, e) {
        return function (r) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return r.lift(new Hr(t, e))
        }
    }

    var Hr = function () {
        function t(t, e) {
            this.project = t, this.thisArg = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new qr(t, this.project, this.thisArg))
        }, t
    }(), qr = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.project = r, i.count = 0, i.thisArg = n || i, i
        }

        return Ce(e, t), e.prototype._next = function (t) {
            var e;
            try {
                e = this.project.call(this.thisArg, t, this.count++)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }(Fe);

    function Br(t, e) {
        if (null != t) {
            if (function (t) {
                return t && "function" == typeof t[qe]
            }(t)) return function (t, e) {
                return new ze(function (r) {
                    var n = new Le;
                    return n.add(e.schedule(function () {
                        var i = t[qe]();
                        n.add(i.subscribe({
                            next: function (t) {
                                n.add(e.schedule(function () {
                                    return r.next(t)
                                }))
                            }, error: function (t) {
                                n.add(e.schedule(function () {
                                    return r.error(t)
                                }))
                            }, complete: function () {
                                n.add(e.schedule(function () {
                                    return r.complete()
                                }))
                            }
                        }))
                    })), n
                })
            }(t, e);
            if (kr(t)) return function (t, e) {
                return new ze(function (r) {
                    var n = new Le;
                    return n.add(e.schedule(function () {
                        return t.then(function (t) {
                            n.add(e.schedule(function () {
                                r.next(t), n.add(e.schedule(function () {
                                    return r.complete()
                                }))
                            }))
                        }, function (t) {
                            n.add(e.schedule(function () {
                                return r.error(t)
                            }))
                        })
                    })), n
                })
            }(t, e);
            if (Ar(t)) return ar(t, e);
            if (function (t) {
                return t && "function" == typeof t[Mr]
            }(t) || "string" == typeof t) return function (t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new ze(function (r) {
                    var n, i = new Le;
                    return i.add(function () {
                        n && "function" == typeof n.return && n.return()
                    }), i.add(e.schedule(function () {
                        n = t[Mr](), i.add(e.schedule(function () {
                            if (!r.closed) {
                                var t, e;
                                try {
                                    var i = n.next();
                                    t = i.value, e = i.done
                                } catch (t) {
                                    return void r.error(t)
                                }
                                e ? r.complete() : (r.next(t), this.schedule())
                            }
                        }))
                    })), i
                })
            }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
    }

    function Ur(t, e) {
        return e ? Br(t, e) : t instanceof ze ? t : new ze(Rr(t))
    }

    function zr(t, e, r) {
        return void 0 === r && (r = Number.POSITIVE_INFINITY), "function" == typeof e ? function (n) {
            return n.pipe(zr(function (r, n) {
                return Ur(t(r, n)).pipe(Fr(function (t, i) {
                    return e(r, t, n, i)
                }))
            }, r))
        } : ("number" == typeof e && (r = e), function (e) {
            return e.lift(new Vr(t, r))
        })
    }

    var Vr = function () {
        function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Wr(t, this.project, this.concurrent))
        }, t
    }(), Wr = function (t) {
        function e(e, r, n) {
            void 0 === n && (n = Number.POSITIVE_INFINITY);
            var i = t.call(this, e) || this;
            return i.project = r, i.concurrent = n, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
        }, e.prototype._tryNext = function (t) {
            var e, r = this.index++;
            try {
                e = this.project(t, r)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.active++, this._innerSub(e, t, r)
        }, e.prototype._innerSub = function (t, e, r) {
            var n = new Nr(this, void 0, void 0);
            this.destination.add(n), Pr(this, t, e, r, n)
        }, e.prototype._complete = function () {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
        }, e.prototype.notifyNext = function (t, e, r, n, i) {
            this.destination.next(e)
        }, e.prototype.notifyComplete = function (t) {
            var e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }, e
    }(Tr);

    function $r(t) {
        return t
    }

    function Xr(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), zr($r, t)
    }

    function Yr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = Number.POSITIVE_INFINITY, n = null, i = t[t.length - 1];
        return ir(i) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof i && (r = t.pop()), null === n && 1 === t.length && t[0] instanceof ze ? t[0] : Xr(r)(cr(t, n))
    }

    var Gr = new ze(Be);
    Object.prototype.toString;

    function Kr(t, e, r, n) {
        return Te(r) && (n = r, r = void 0), n ? Kr(t, e, r).pipe(Fr(function (t) {
            return ke(t) ? n.apply(void 0, t) : n(t)
        })) : new ze(function (n) {
            !function t(e, r, n, i, o) {
                var s;
                if (function (t) {
                    return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }(e)) {
                    var a = e;
                    e.addEventListener(r, n, o), s = function () {
                        return a.removeEventListener(r, n, o)
                    }
                } else if (function (t) {
                    return t && "function" == typeof t.on && "function" == typeof t.off
                }(e)) {
                    var c = e;
                    e.on(r, n), s = function () {
                        return c.off(r, n)
                    }
                } else if (function (t) {
                    return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                }(e)) {
                    var u = e;
                    e.addListener(r, n), s = function () {
                        return u.removeListener(r, n)
                    }
                } else {
                    if (!e || !e.length) throw new TypeError("Invalid event target");
                    for (var l = 0, h = e.length; l < h; l++) t(e[l], r, n, i, o)
                }
                i.add(s)
            }(t, e, function (t) {
                arguments.length > 1 ? n.next(Array.prototype.slice.call(arguments)) : n.next(t)
            }, n, r)
        })
    }

    var Jr = r(5);

    function Zr(t, e) {
        return void 0 === e && (e = null), new sn({method: "GET", url: t, headers: e})
    }

    function Qr(t, e, r) {
        return new sn({method: "POST", url: t, body: e, headers: r})
    }

    function tn(t, e) {
        return new sn({method: "DELETE", url: t, headers: e})
    }

    function en(t, e, r) {
        return new sn({method: "PUT", url: t, body: e, headers: r})
    }

    function rn(t, e, r) {
        return new sn({method: "PATCH", url: t, body: e, headers: r})
    }

    var nn = Fr(function (t, e) {
        return t.response
    });

    function on(t, e) {
        return nn(new sn({method: "GET", url: t, responseType: "json", headers: e}))
    }

    var sn = function (t) {
        function e(e) {
            var r = t.call(this) || this, n = {
                async: !0, createXHR: function () {
                    return this.crossDomain ? function () {
                        if (Jr.a.XMLHttpRequest) return new Jr.a.XMLHttpRequest;
                        if (Jr.a.XDomainRequest) return new Jr.a.XDomainRequest;
                        throw new Error("CORS is not supported by your browser")
                    }() : function () {
                        if (Jr.a.XMLHttpRequest) return new Jr.a.XMLHttpRequest;
                        var t = void 0;
                        try {
                            for (var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], r = 0; r < 3; r++) try {
                                if (t = e[r], new Jr.a.ActiveXObject(t)) break
                            } catch (t) {
                            }
                            return new Jr.a.ActiveXObject(t)
                        } catch (t) {
                            throw new Error("XMLHttpRequest is not supported by your browser")
                        }
                    }()
                }, crossDomain: !0, withCredentials: !1, headers: {}, method: "GET", responseType: "json", timeout: 0
            };
            if ("string" == typeof e) n.url = e; else for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
            return r.request = n, r
        }

        var r;
        return Ce(e, t), e.prototype._subscribe = function (t) {
            return new an(t, this.request)
        }, e.create = ((r = function (t) {
            return new e(t)
        }).get = Zr, r.post = Qr, r.delete = tn, r.put = en, r.patch = rn, r.getJSON = on, r), e
    }(ze), an = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            n.request = r, n.done = !1;
            var i = r.headers = r.headers || {};
            return r.crossDomain || n.getHeader(i, "X-Requested-With") || (i["X-Requested-With"] = "XMLHttpRequest"), n.getHeader(i, "Content-Type") || Jr.a.FormData && r.body instanceof Jr.a.FormData || void 0 === r.body || (i["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), r.body = n.serializeBody(r.body, n.getHeader(r.headers, "Content-Type")), n.send(), n
        }

        return Ce(e, t), e.prototype.next = function (t) {
            this.done = !0;
            var e, r = this.xhr, n = this.request, i = this.destination;
            try {
                e = new cn(t, r, n)
            } catch (t) {
                return i.error(t)
            }
            i.next(e)
        }, e.prototype.send = function () {
            var t = this.request, e = this.request, r = e.user, n = e.method, i = e.url, o = e.async, s = e.password,
                a = e.headers, c = e.body;
            try {
                var u = this.xhr = t.createXHR();
                this.setupEvents(u, t), r ? u.open(n, i, o, r, s) : u.open(n, i, o), o && (u.timeout = t.timeout, u.responseType = t.responseType), "withCredentials" in u && (u.withCredentials = !!t.withCredentials), this.setHeaders(u, a), c ? u.send(c) : u.send()
            } catch (t) {
                this.error(t)
            }
        }, e.prototype.serializeBody = function (t, e) {
            if (!t || "string" == typeof t) return t;
            if (Jr.a.FormData && t instanceof Jr.a.FormData) return t;
            if (e) {
                var r = e.indexOf(";");
                -1 !== r && (e = e.substring(0, r))
            }
            switch (e) {
                case"application/x-www-form-urlencoded":
                    return Object.keys(t).map(function (e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    }).join("&");
                case"application/json":
                    return JSON.stringify(t);
                default:
                    return t
            }
        }, e.prototype.setHeaders = function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && t.setRequestHeader(r, e[r])
        }, e.prototype.getHeader = function (t, e) {
            for (var r in t) if (r.toLowerCase() === e.toLowerCase()) return t[r]
        }, e.prototype.setupEvents = function (t, e) {
            var r = e.progressSubscriber;

            function n(t) {
                var e, r = n, i = r.subscriber, o = r.progressSubscriber, s = r.request;
                o && o.error(t);
                try {
                    e = new pn(this, s)
                } catch (t) {
                    e = t
                }
                i.error(e)
            }

            if (t.ontimeout = n, n.request = e, n.subscriber = this, n.progressSubscriber = r, t.upload && "withCredentials" in t) {
                var i, o;
                if (r) i = function (t) {
                    i.progressSubscriber.next(t)
                }, Jr.a.XDomainRequest ? t.onprogress = i : t.upload.onprogress = i, i.progressSubscriber = r;
                o = function (t) {
                    var e, r = o, n = r.progressSubscriber, i = r.subscriber, s = r.request;
                    n && n.error(t);
                    try {
                        e = new ln("ajax error", this, s)
                    } catch (t) {
                        e = t
                    }
                    i.error(e)
                }, t.onerror = o, o.request = e, o.subscriber = this, o.progressSubscriber = r
            }

            function s(t) {
            }

            function a(t) {
                var e = a, r = e.subscriber, n = e.progressSubscriber, i = e.request;
                if (4 === this.readyState) {
                    var o = 1223 === this.status ? 204 : this.status,
                        s = "text" === this.responseType ? this.response || this.responseText : this.response;
                    if (0 === o && (o = s ? 200 : 0), o < 400) n && n.complete(), r.next(t), r.complete(); else {
                        n && n.error(t);
                        var c = void 0;
                        try {
                            c = new ln("ajax error " + o, this, i)
                        } catch (t) {
                            c = t
                        }
                        r.error(c)
                    }
                }
            }

            t.onreadystatechange = s, s.subscriber = this, s.progressSubscriber = r, s.request = e, t.onload = a, a.subscriber = this, a.progressSubscriber = r, a.request = e
        }, e.prototype.unsubscribe = function () {
            var e = this.done, r = this.xhr;
            !e && r && 4 !== r.readyState && "function" == typeof r.abort && r.abort(), t.prototype.unsubscribe.call(this)
        }, e
    }(Fe), cn = function () {
        return function (t, e, r) {
            this.originalEvent = t, this.xhr = e, this.request = r, this.status = e.status, this.responseType = e.responseType || r.responseType, this.response = hn(this.responseType, e)
        }
    }();

    function un(t, e, r) {
        return Error.call(this), this.message = t, this.name = "AjaxError", this.xhr = e, this.request = r, this.status = e.status, this.responseType = e.responseType || r.responseType, this.response = hn(this.responseType, e), this
    }

    un.prototype = Object.create(Error.prototype);
    var ln = un;

    function hn(t, e) {
        switch (t) {
            case"json":
                return function (t) {
                    return "response" in t ? t.responseType ? t.response : JSON.parse(t.response || t.responseText || "null") : JSON.parse(t.responseText || "null")
                }(e);
            case"xml":
                return e.responseXML;
            case"text":
            default:
                return "response" in e ? e.response : e.responseText
        }
    }

    var pn = function (t, e) {
        return ln.call(this, "ajax timeout", t, e), this.name = "AjaxTimeoutError", this
    }, dn = sn.create;

    function fn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Xr(1)(ur.apply(void 0, t))
    }

    function mn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = t[t.length - 1];
        return ir(r) ? (t.pop(), function (e) {
            return fn(t, e, r)
        }) : function (e) {
            return fn(t, e)
        }
    }

    function vn(t) {
        return function (e) {
            return e.lift(new yn(t))
        }
    }

    var yn = function () {
        function t(t) {
            this.notifier = t
        }

        return t.prototype.call = function (t, e) {
            var r = new gn(t), n = Pr(r, this.notifier);
            return n && !r.seenValue ? (r.add(n), e.subscribe(r)) : r
        }, t
    }(), gn = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.seenValue = !1, r
        }

        return Ce(e, t), e.prototype.notifyNext = function (t, e, r, n, i) {
            this.seenValue = !0, this.complete()
        }, e.prototype.notifyComplete = function () {
        }, e
    }(Tr);

    function bn(t, e) {
        return "function" == typeof e ? function (r) {
            return r.pipe(bn(function (r, n) {
                return Ur(t(r, n)).pipe(Fr(function (t, i) {
                    return e(r, t, n, i)
                }))
            }))
        } : function (e) {
            return e.lift(new _n(t))
        }
    }

    var _n = function () {
        function t(t) {
            this.project = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new wn(t, this.project))
        }, t
    }(), wn = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.project = r, n.index = 0, n
        }

        return Ce(e, t), e.prototype._next = function (t) {
            var e, r = this.index++;
            try {
                e = this.project(t, r)
            } catch (t) {
                return void this.destination.error(t)
            }
            this._innerSub(e, t, r)
        }, e.prototype._innerSub = function (t, e, r) {
            var n = this.innerSubscription;
            n && n.unsubscribe();
            var i = new Nr(this, void 0, void 0);
            this.destination.add(i), this.innerSubscription = Pr(this, t, e, r, i)
        }, e.prototype._complete = function () {
            var e = this.innerSubscription;
            e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
        }, e.prototype._unsubscribe = function () {
            this.innerSubscription = null
        }, e.prototype.notifyComplete = function (e) {
            this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
        }, e.prototype.notifyNext = function (t, e, r, n, i) {
            this.destination.next(e)
        }, e
    }(Tr);

    function Sn() {
        return function (t) {
            return t.lift(new En(t))
        }
    }

    var En = function () {
        function t(t) {
            this.connectable = t
        }

        return t.prototype.call = function (t, e) {
            var r = this.connectable;
            r._refCount++;
            var n = new xn(t, r), i = e.subscribe(n);
            return n.closed || (n.connection = r.connect()), i
        }, t
    }(), xn = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.connectable = r, n
        }

        return Ce(e, t), e.prototype._unsubscribe = function () {
            var t = this.connectable;
            if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
                    var r = this.connection, n = t._connection;
                    this.connection = null, !n || r && n !== r || n.unsubscribe()
                }
            } else this.connection = null
        }, e
    }(Fe), Cn = function (t) {
        function e(e, r) {
            var n = t.call(this) || this;
            return n.source = e, n.subjectFactory = r, n._refCount = 0, n._isComplete = !1, n
        }

        return Ce(e, t), e.prototype._subscribe = function (t) {
            return this.getSubject().subscribe(t)
        }, e.prototype.getSubject = function () {
            var t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
        }, e.prototype.connect = function () {
            var t = this._connection;
            return t || (this._isComplete = !1, (t = this._connection = new Le).add(this.source.subscribe(new Nn(this.getSubject(), this))), t.closed && (this._connection = null, t = Le.EMPTY)), t
        }, e.prototype.refCount = function () {
            return Sn()(this)
        }, e
    }(ze).prototype, Tn = {
        operator: {value: null},
        _refCount: {value: 0, writable: !0},
        _subject: {value: null, writable: !0},
        _connection: {value: null, writable: !0},
        _subscribe: {value: Cn._subscribe},
        _isComplete: {value: Cn._isComplete, writable: !0},
        getSubject: {value: Cn.getSubject},
        connect: {value: Cn.connect},
        refCount: {value: Cn.refCount}
    }, Nn = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.connectable = r, n
        }

        return Ce(e, t), e.prototype._error = function (e) {
            this._unsubscribe(), t.prototype._error.call(this, e)
        }, e.prototype._complete = function () {
            this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
        }, e.prototype._unsubscribe = function () {
            var t = this.connectable;
            if (t) {
                this.connectable = null;
                var e = t._connection;
                t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
            }
        }, e
    }(Ye);
    var On = function () {
        function t(t, e) {
            this.subjectFactory = t, this.selector = e
        }

        return t.prototype.call = function (t, e) {
            var r = this.selector, n = this.subjectFactory(), i = r(n).subscribe(t);
            return i.add(e.subscribe(n)), i
        }, t
    }();

    function Mn() {
        return new Ge
    }

    function An() {
        return function (t) {
            return Sn()((e = Mn, function (t) {
                var n;
                if (n = "function" == typeof e ? e : function () {
                    return e
                }, "function" == typeof r) return t.lift(new On(n, r));
                var i = Object.create(t, Tn);
                return i.source = t, i.subjectFactory = n, i
            })(t));
            var e, r
        }
    }

    function kn(t, e) {
        return function (r) {
            return r.lift(new Rn(t, e))
        }
    }

    var Rn = function () {
        function t(t, e) {
            this.predicate = t, this.thisArg = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Pn(t, this.predicate, this.thisArg))
        }, t
    }(), Pn = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.predicate = r, i.thisArg = n, i.count = 0, i
        }

        return Ce(e, t), e.prototype._next = function (t) {
            var e;
            try {
                e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (t) {
                return void this.destination.error(t)
            }
            e && this.destination.next(t)
        }, e
    }(Fe);

    function In(t, e) {
        return function (r) {
            return r.lift(new Ln(t, e))
        }
    }

    var Ln = function () {
        function t(t, e) {
            this.compare = t, this.keySelector = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new jn(t, this.compare, this.keySelector))
        }, t
    }(), jn = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.keySelector = n, i.hasKey = !1, "function" == typeof r && (i.compare = r), i
        }

        return Ce(e, t), e.prototype.compare = function (t, e) {
            return t === e
        }, e.prototype._next = function (t) {
            var e;
            try {
                var r = this.keySelector;
                e = r ? r(t) : t
            } catch (t) {
                return this.destination.error(t)
            }
            var n = !1;
            if (this.hasKey) try {
                n = (0, this.compare)(this.key, e)
            } catch (t) {
                return this.destination.error(t)
            } else this.hasKey = !0;
            n || (this.key = e, this.destination.next(t))
        }, e
    }(Fe);

    function Dn(t, e, r) {
        return function (n) {
            return n.lift(new Fn(t, e, r))
        }
    }

    var Fn = function () {
        function t(t, e, r) {
            this.nextOrObserver = t, this.error = e, this.complete = r
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Hn(t, this.nextOrObserver, this.error, this.complete))
        }, t
    }(), Hn = function (t) {
        function e(e, r, n, i) {
            var o = t.call(this, e) || this;
            return o._tapNext = Be, o._tapError = Be, o._tapComplete = Be, o._tapError = n || Be, o._tapComplete = i || Be, Te(r) ? (o._context = o, o._tapNext = r) : r && (o._context = r, o._tapNext = r.next || Be, o._tapError = r.error || Be, o._tapComplete = r.complete || Be), o
        }

        return Ce(e, t), e.prototype._next = function (t) {
            try {
                this._tapNext.call(this._context, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(t)
        }, e.prototype._error = function (t) {
            try {
                this._tapError.call(this._context, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.error(t)
        }, e.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context)
            } catch (t) {
                return void this.destination.error(t)
            }
            return this.destination.complete()
        }, e
    }(Fe), qn = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number;

    function Bn(t) {
        var {protocol: e, host: r} = t,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        return e !== n.protocol || r !== n.host
    }

    var Un = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;

    function zn(t) {
        return new Wn([{url: t, width: void 0, dpr: 1}])
    }

    function Vn(t) {
        for (var e, r = []; e = Un.exec(t);) {
            var n = e[1], i = void 0, o = void 0;
            if (e[2]) {
                var s = e[3].toLowerCase();
                if ("w" == s) i = parseInt(e[2], 10); else {
                    if ("x" != s) continue;
                    o = parseFloat(e[2])
                }
            } else o = 1;
            r.push({url: n, width: i, dpr: o})
        }
        return new Wn(r)
    }

    class Wn {
        constructor(t) {
            this.sources_ = t;
            for (var e = !1, r = !1, n = 0; n < t.length; n++) {
                var i = t[n];
                e = e || !!i.width, r = r || !!i.dpr
            }
            t.sort(e ? $n : Xn), this.widthBased_ = e, this.dprBased_ = r
        }

        select(t, e) {
            var r = 0;
            return r = this.widthBased_ ? this.selectByWidth_(t * e) : this.selectByDpr_(e), this.sources_[r].url
        }

        selectByWidth_(t) {
            for (var e = this.sources_, r = 0, n = 1 / 0, i = 1 / 0, o = 0; o < e.length; o++) {
                var s = e[o].width, a = Math.abs(s - t);
                if (!(a <= 1.1 * n || t / i > 1.2)) break;
                r = o, n = a, i = s
            }
            return r
        }

        selectByDpr_(t) {
            for (var e = this.sources_, r = 0, n = 1 / 0, i = 0; i < e.length; i++) {
                var o = Math.abs(e[i].dpr - t);
                if (!(o <= n)) break;
                r = i, n = o
            }
            return r
        }

        getUrls() {
            return this.sources_.map(t => t.url)
        }

        stringify(t) {
            for (var e = [], r = this.sources_, n = 0; n < r.length; n++) {
                var i = r[n], o = i.url;
                t && (o = t(o)), this.widthBased_ ? o += " ".concat(i.width, "w") : o += " ".concat(i.dpr, "x"), e.push(o)
            }
            return e.join(", ")
        }
    }

    function $n(t, e) {
        return t.width - e.width
    }

    function Xn(t, e) {
        return t.dpr - e.dpr
    }

    var Yn = new he([...fe, "eventlistener", "queryselector", "requestanimationframe"]),
        Gn = t => (class extends (yr(be(t))) {
            static get componentName() {
                return "hy-img"
            }

            static get defaults() {
                return {
                    root: null,
                    rootMargin: "0px",
                    src: null,
                    srcset: null,
                    width: null,
                    height: null,
                    dataWidth: null,
                    dataHeight: null,
                    alt: null,
                    decoding: null,
                    longdesc: null,
                    ismap: !1,
                    usemap: null
                }
            }

            static get types() {
                return {
                    root: Cr,
                    rootMargin: Cr,
                    src: Cr,
                    srcset: Cr,
                    width: Sr,
                    height: Sr,
                    dataWidth: Sr,
                    dataHeight: Sr,
                    alt: Cr,
                    decoding: Er(["sync", "async", "auto"]),
                    longdesc: Cr,
                    ismap: wr,
                    usemap: Cr
                }
            }

            setupComponent(t, e) {
                super.setupComponent(t, e), this.loadImage$ = new Ge
            }

            connectComponent() {
                super.connectComponent(), this.img = document.createElement("img"), this.sizer = document.createElement("div"), this.loading = this.el.querySelector('[slot="loading"]'), this.loading && this.sizer.appendChild(this.loading), qn ? this.img.attributeStyleMap.set("display", "block") : this.img.style.display = "block", this.el.appendChild(this.sizer);
                var t = {contentRect: this.el.getBoundingClientRect()};
                this.resize$ = "ResizeObserver" in window ? gr(ResizeObserver)(this.el).pipe(mn(t)) : ur(t);
                var e = (t, e) => t || e, r = Lr(this.subjects.width, this.subjects.dataWidth, e),
                    n = Lr(this.subjects.height, this.subjects.dataHeight, e), i = Lr(this.resize$, r, n),
                    o = Lr(this.subjects.root, this.subjects.rootMargin).pipe(vn(this.subjects.disconnect), bn(t => {
                        var [e, r] = t;
                        return "IntersectionObserver" in window ? gr(IntersectionObserver)(this.el, {
                            root: e,
                            rootMargin: r
                        }) : ur({isIntersecting: !0})
                    }), Fr(t => {
                        var {isIntersecting: e} = t;
                        return e
                    }));
                this.trigger$ = Yr(o, this.loadImage$).pipe(An()), i.pipe(vn(this.subjects.disconnect)).subscribe(this.updateSizerStyle.bind(this)), this.trigger$.pipe(kn(t => t), In()).subscribe(this.triggered.bind(this)), this.fireEvent("init")
            }

            triggered() {
                this.cache = new Map;
                var t, e, r = Lr(this.subjects.src, this.subjects.srcset).pipe(kn(t => {
                    var [e, r] = t;
                    return null != e || null != r
                }), In((t, e) => {
                    var [r, n] = t, [i, o] = e;
                    return r === i && n === o
                }), Fr(t => {
                    var [e, r] = t;
                    return r ? Vn(r) : zn(e)
                })), n = Lr(this.resize$, r).pipe(Fr(this.selectImgURL.bind(this)), (t = "href", In(function (r, n) {
                    return e ? e(r[t], n[t]) : r[t] === n[t]
                })));
                Lr(n, this.trigger$.pipe(In(), mn(!0))).pipe(vn(this.subjects.disconnect), Dn(() => this.loading && this.loading.removeAttribute("hidden")), bn(this.makeRequest.bind(this)), bn(this.setImgSrcAndLoad.bind(this))).subscribe(() => {
                    null != this.sizer.parentNode && this.el.removeChild(this.sizer), null == this.img.parentNode && this.el.appendChild(this.img), this.fireEvent("load")
                }, t => {
                    this.loadImageFallback()
                }), this.updateAttr = this.updateAttr.bind(this), this.subjects.alt.subscribe(this.updateAttr("alt")), this.subjects.decoding.subscribe(this.updateAttr("decoding")), this.subjects.longdesc.subscribe(this.updateAttr("longdesc")), this.subjects.ismap.subscribe(this.updateAttr("ismap")), this.subjects.usemap.subscribe(this.updateAttr("usemap"))
            }

            selectImgURL(t) {
                var [e, r] = t, {contentRect: {width: n}} = e;
                return new URL(r.select(n || window.screen.width, window.devicePixelRatio || 1), window.location)
            }

            makeRequest(t) {
                var [e, r] = t, {href: n} = e, {cache: i} = this;
                return r && !i.has(n) ? dn({
                    method: "GET",
                    responseType: "blob",
                    url: e,
                    crossDomain: Bn(e),
                    headers: {Accept: "image/*"}
                }).pipe(Fr(t => {
                    var {response: e} = t;
                    return URL.createObjectURL(e)
                }), Dn(t => i.set(n, t))) : i.has(n) ? ur(i.get(n)) : Gr
            }

            setImgSrcAndLoad(t) {
                var e = Kr(this.img, "load");
                return this.img.src = t, e
            }

            updateAttr(t) {
                return e => null == e || !1 === e ? this.img.removeAttribute(t) : this.img.setAttribute(t, !0 === e ? "" : e)
            }

            loadImageFallback() {
                this.el.hasAttribute("sizes") && this.img.setAttribute("sizes", this.getAttribute("sizes")), this.el.hasAttribute("crossorigin") && this.img.setAttribute("crossorigin", this.getAttribute("crossorigin")), this.el.hasAttribute("referrerpolicy") && this.img.setAttribute("referrerpolicy", this.getAttribute("referrerpolicy")), this.srcset && (this.img.srcset = this.srcset), this.src && (this.img.src = this.src), null != this.sizer.parentNode && this.el.removeChild(this.sizer), null == this.img.parentNode && this.el.appendChild(this.img), this.fireEvent("load")
            }

            updateSizerStyle(t) {
                var [e, r, n] = t, {contentRect: {width: i}} = e;
                qn ? (this.sizer.attributeStyleMap.set("position", "relative"), null != r && null != n ? r >= i ? (this.sizer.attributeStyleMap.set("width", CSS.percent(100)), this.sizer.attributeStyleMap.set("padding-top", CSS.percent(n / r * 100))) : (this.sizer.attributeStyleMap.set("width", CSS.px(r)), this.sizer.attributeStyleMap.set("height", CSS.px(n))) : (this.sizer.attributeStyleMap.set("width", CSS.percent(100)), this.sizer.attributeStyleMap.set("height", CSS.percent(100)))) : (this.sizer.style.position = "relative", null != r && null != n ? r >= i ? (this.sizer.style.width = "100%", this.sizer.style.paddingTop = "".concat(n / r * 100, "%")) : (this.sizer.style.width = "".concat(r, "px"), this.sizer.style.height = "".concat(n, "px")) : (this.sizer.style.width = "100%", this.sizer.style.height = "100%"))
            }

            disconnectComponent() {
                super.disconnectComponent(), this.cache && this.cache.forEach(t => {
                    URL.revokeObjectURL(t)
                })
            }

            loadImage() {
                this.loadImage$.next(!0)
            }
        }), Kn = new he([..._e, ...Yn]);

    class Jn extends (Se(Gn(Ee))) {
        static get observedAttributes() {
            return this.getObservedAttributes()
        }

        getTemplate() {
            return null
        }
    }

    var Zn = navigator.userAgent.toLowerCase(), Qn = Zn.indexOf("safari") > 0 && Zn.indexOf("chrome") < 0,
        ti = Zn.indexOf("mobile") > 0, ei = Qn && ti, ri = Zn.indexOf("ucbrowser") > 0, ni = Zn.indexOf("firefox") > 0,
        ii = Zn.indexOf("fxios") > 0 && Zn.indexOf("safari") > 0,
        oi = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number, si = new Promise(t => {
            window.webComponentsReady ? t(!0) : document.addEventListener("WebComponentsReady", t)
        });

    function ai(t) {
        return !window.Modernizr || [...t].every(t => {
            var e = window.Modernizr[t];
            return e
        })
    }

    function ci() {
        for (; this.firstChild;) this.removeChild(this.firstChild)
    }

    function ui(t, e, r) {
        return ze.create(n => {
            var i = t.animate(e, r);
            return i.addEventListener("finish", t => (n.next(t), requestAnimationFrame(() => requestAnimationFrame(n.complete.bind(n))))), () => {
                "finished" !== i.playState && i.cancel()
            }
        })
    }

    function li(t) {
        var e = document.getElementById(t);
        return e && document.importNode(e.content, !0)
    }

    function hi(t) {
        return new ze(function (e) {
            var r;
            try {
                r = t()
            } catch (t) {
                return void e.error(t)
            }
            return (r ? Ur(r) : nr()).subscribe(e)
        })
    }

    ai(Kn) ? window.customElements.define("hy-img", Jn) : Array.prototype.forEach.call(document.getElementsByTagName("hy-img"), t => t.innerHTML = t.children[0].innerText);
    var pi = function (t) {
        function e(e, r) {
            var n = t.call(this, e, r) || this;
            return n.scheduler = e, n.work = r, n
        }

        return Ce(e, t), e.prototype.requestAsyncId = function (e, r, n) {
            return void 0 === n && (n = 0), null !== n && n > 0 ? t.prototype.requestAsyncId.call(this, e, r, n) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame(function () {
                return e.flush(null)
            })))
        }, e.prototype.recycleAsyncId = function (e, r, n) {
            if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, r, n);
            0 === e.actions.length && (cancelAnimationFrame(r), e.scheduled = void 0)
        }, e
    }(Je), di = new (function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Ce(e, t), e.prototype.flush = function (t) {
            this.active = !0, this.scheduled = void 0;
            var e, r = this.actions, n = -1, i = r.length;
            t = t || r.shift();
            do {
                if (e = t.execute(t.state, t.delay)) break
            } while (++n < i && (t = r.shift()));
            if (this.active = !1, e) {
                for (; ++n < i && (t = r.shift());) t.unsubscribe();
                throw e
            }
        }, e
    }(tr))(pi);

    function fi() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
            var r;
            "function" == typeof t[t.length - 1] && (r = t.pop());
            var n = t;
            return e.lift(new mi(n, r))
        }
    }

    var mi = function () {
        function t(t, e) {
            this.observables = t, this.project = e
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new vi(t, this.observables, this.project))
        }, t
    }(), vi = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            i.observables = r, i.project = n, i.toRespond = [];
            var o = r.length;
            i.values = new Array(o);
            for (var s = 0; s < o; s++) i.toRespond.push(s);
            for (s = 0; s < o; s++) {
                var a = r[s];
                i.add(Pr(i, a, a, s))
            }
            return i
        }

        return Ce(e, t), e.prototype.notifyNext = function (t, e, r, n, i) {
            this.values[r] = e;
            var o = this.toRespond;
            if (o.length > 0) {
                var s = o.indexOf(r);
                -1 !== s && o.splice(s, 1)
            }
        }, e.prototype.notifyComplete = function () {
        }, e.prototype._next = function (t) {
            if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e)
            }
        }, e.prototype._tryProject = function (t) {
            var e;
            try {
                e = this.project.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }(Tr);
    var yi = function () {
        function t(t) {
            this.notifier = t
        }

        return t.prototype.call = function (t, e) {
            var r = new gi(t), n = e.subscribe(r);
            return n.add(Pr(r, this.notifier)), n
        }, t
    }(), gi = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hasValue = !1, e
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.value = t, this.hasValue = !0
        }, e.prototype.notifyNext = function (t, e, r, n, i) {
            this.emitValue()
        }, e.prototype.notifyComplete = function () {
            this.emitValue()
        }, e.prototype.emitValue = function () {
            this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
        }, e
    }(Tr), bi = new tr(Je);
    var _i = function () {
        return function (t, e) {
            this.value = t, this.timestamp = e
        }
    }();

    function wi() {
        return function (t) {
            return t.lift(new Si)
        }
    }

    var Si = function () {
        function t() {
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Ei(t))
        }, t
    }(), Ei = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.hasPrev = !1, r
        }

        return Ce(e, t), e.prototype._next = function (t) {
            var e;
            this.hasPrev ? e = [this.prev, t] : this.hasPrev = !0, this.prev = t, e && this.destination.next(e)
        }, e
    }(Fe);

    function xi(t) {
        return function (e) {
            return e.lift(new Ci(t))
        }
    }

    var Ci = function () {
        function t(t) {
            this.total = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Ti(t, this.total))
        }, t
    }(), Ti = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.total = r, n.count = 0, n
        }

        return Ce(e, t), e.prototype._next = function (t) {
            ++this.count > this.total && this.destination.next(t)
        }, e
    }(Fe);

    function Ni(t, e, r, n, i) {
        return ze.create(function (o) {
            var s, a = requestAnimationFrame(function c(u) {
                var l = u - (s = s || u);
                l < n ? (o.next(t(l, e, r, n, i)), a = requestAnimationFrame(c)) : (o.next(t(n, e, r, n, i)), a = requestAnimationFrame(function () {
                    return o.complete()
                }))
            });
            return function () {
                a && cancelAnimationFrame(a)
            }
        })
    }

    function Oi(t, e, r, n) {
        return r * Math.sin(t / n * (Math.PI / 2)) + e
    }

    var Mi = function (t) {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
        return e => 0 === r.length ? e.pipe(fi(t), kn(t => {
            var [, e] = t;
            return e
        }), Fr(t => {
            var [e] = t;
            return e
        })) : e.pipe(fi(t, ...r), kn(t => {
            var [, ...e] = t;
            return e.every(t => t)
        }), Fr(t => {
            var [e] = t;
            return e
        }))
    }, Ai = Math.min.bind(Math), ki = Math.max.bind(Math), Ri = t => (class extends t {
        calcIsInRange(t, e) {
            switch (this.align) {
                case"left":
                    var r = this.range[0], n = this.range[1];
                    return t > r && (e || t < n);
                case"right":
                    var i = window.innerWidth - this.range[0], o = window.innerWidth - this.range[1];
                    return t < i && (e || t > o);
                default:
                    throw Error()
            }
        }

        calcIsSwipe(t) {
            var [{clientX: e}, {clientX: r}, n, i] = t;
            return e !== r || n > 0 && n < i
        }

        calcWillOpen(t) {
            var [, , e, r, n] = t;
            switch (this.align) {
                case"left":
                    return n > .15 || !(n < -.15) && e >= r / 2;
                case"right":
                    return -n > .15 || !(-n < -.15) && e <= -r / 2;
                default:
                    throw Error()
            }
        }

        calcTranslateX(t, e, r, n) {
            switch (this.align) {
                case"left":
                    return ki(0, Ai(n, r + (t - e)));
                case"right":
                    return Ai(0, ki(-n, r + (t - e)));
                default:
                    throw Error()
            }
        }
    }), Pi = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number, Ii = t => (class extends t {
        histId() {
            return this.el.id || this.constructor.componentName
        }

        prepareInteraction() {
            Pi ? (this.contentEl.attributeStyleMap.set("will-change", "transform"), this.scrimEl.attributeStyleMap.set("will-change", "opacity")) : (this.contentEl.style.willChange = "transform", this.scrimEl.style.willChange = "opacity"), this.fireEvent("prepare")
        }

        cleanupInteraction(t) {
            Pi ? (this.contentEl.attributeStyleMap.delete("will-change"), this.scrimEl.attributeStyleMap.delete("will-change"), t ? this.scrimEl.attributeStyleMap.set("pointer-events", new CSSKeywordValue("all")) : this.scrimEl.attributeStyleMap.delete("pointer-events")) : (this.scrimEl.style.willChange = "", this.contentEl.style.willChange = "", this.scrimEl.style.pointerEvents = t ? "all" : ""), this.fireEvent("transitioned", {detail: t})
        }

        updateDOM(t, e) {
            this.translateX = t;
            var r = "left" === this.align ? 1 : -1, n = this.opacity = t / e * r;
            this.moveCallback && this.moveCallback({
                translateX: t,
                opacity: n
            }), Pi ? (this.contentEl.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(t), CSS.px(0))])), this.scrimEl.attributeStyleMap.set("opacity", this.opacity)) : (this.contentEl.style.transform = "translateX(".concat(t, "px)"), this.scrimEl.style.opacity = this.opacity)
        }
    });

    function Li(t) {
        return function (e) {
            return e.lift(new ji(t))
        }
    }

    var ji = function () {
        function t(t) {
            this.value = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Di(t, this.value))
        }, t
    }(), Di = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.value = r, n
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.destination.next(this.value)
        }, e
    }(Fe);

    function Fi() {
        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
    }

    Fi.prototype = Object.create(Error.prototype);
    var Hi = Fi;

    function qi(t) {
        return function (e) {
            return 0 === t ? nr() : e.lift(new Bi(t))
        }
    }

    var Bi = function () {
        function t(t) {
            if (this.total = t, this.total < 0) throw new Hi
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Ui(t, this.total))
        }, t
    }(), Ui = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.total = r, n.count = 0, n
        }

        return Ce(e, t), e.prototype._next = function (t) {
            var e = this.total, r = ++this.count;
            r <= e && (this.destination.next(t), r === e && (this.destination.complete(), this.unsubscribe()))
        }, e
    }(Fe);
    var zi = function () {
        function t(t) {
            this.notifier = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Vi(t, this.notifier, e))
        }, t
    }(), Vi = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.notifier = r, i.source = n, i.sourceIsBeingSubscribedTo = !0, i
        }

        return Ce(e, t), e.prototype.notifyNext = function (t, e, r, n, i) {
            this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
        }, e.prototype.notifyComplete = function (e) {
            if (!1 === this.sourceIsBeingSubscribedTo) return t.prototype.complete.call(this)
        }, e.prototype.complete = function () {
            if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next()
            }
        }, e.prototype._unsubscribe = function () {
            var t = this.notifications, e = this.retriesSubscription;
            t && (t.unsubscribe(), this.notifications = null), e && (e.unsubscribe(), this.retriesSubscription = null), this.retries = null
        }, e.prototype._unsubscribeAndRecycle = function () {
            var e = this._unsubscribe;
            return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = e, this
        }, e.prototype.subscribeToRetries = function () {
            var e;
            this.notifications = new Ge;
            try {
                e = (0, this.notifier)(this.notifications)
            } catch (e) {
                return t.prototype.complete.call(this)
            }
            this.retries = e, this.retriesSubscription = Pr(this, e)
        }, e
    }(Tr);
    var Wi = function () {
            function t(t) {
                this.predicate = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new $i(t, this.predicate))
            }, t
        }(), $i = function (t) {
            function e(e, r) {
                var n = t.call(this, e) || this;
                return n.predicate = r, n.skipping = !0, n.index = 0, n
            }

            return Ce(e, t), e.prototype._next = function (t) {
                var e = this.destination;
                this.skipping && this.tryCallPredicate(t), this.skipping || e.next(t)
            }, e.prototype.tryCallPredicate = function (t) {
                try {
                    var e = this.predicate(t, this.index++);
                    this.skipping = Boolean(e)
                } catch (t) {
                    this.destination.error(t)
                }
            }, e
        }(Fe), Xi = Math.abs.bind(Math), Yi = t => (class extends t {
            getStartObservable() {
                return Lr(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents).pipe(bn(t => {
                    var [e, r, n] = t;
                    return Yr(r ? Kr(e, "touchstart", {passive: !0}).pipe(kn(t => {
                        var {touches: e} = t;
                        return 1 === e.length
                    }), Fr(t => {
                        var {touches: e} = t;
                        return e[0]
                    })) : Gr, n ? Kr(e, "mousedown").pipe(Dn(t => (t.event = t, t))) : Gr)
                }))
            }

            getMoveObservable(t, e) {
                return Lr(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents, this.subjects.preventDefault).pipe(bn(r => {
                    var [n, i, o, s] = r,
                        a = i ? Kr(n, "touchmove", {passive: !s}).pipe(Fr(t => (t.touches[0].event = t, t.touches[0]))) : Gr,
                        c = o ? Kr(n, "mousemove", {passive: !s}).pipe((t => e => t.pipe(bn(t => t ? e : Gr)))(Yr(t.pipe(Li(!0)), e.pipe(Li(!1)))), Dn(t => (t.event = t, t))) : Gr;
                    return Yr(a, c)
                }))
            }

            getEndObservable() {
                return Lr(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents).pipe(bn(t => {
                    var [e, r, n] = t;
                    return Yr(r ? Kr(e, "touchend", {passive: !0}).pipe(kn(t => {
                        var {touches: e} = t;
                        return 0 === e.length
                    }), Fr(t => t.changedTouches[0])) : Gr, n ? Kr(e, "mouseup", {passive: !0}) : Gr)
                }))
            }

            getIsSlidingObservable(t, e, r) {
                return this.getIsSlidingObservable2(t, e).pipe(qi(1), mn(void 0), (n = () => r, function (t) {
                    return t.lift(new zi(n))
                }));
                var n
            }

            getIsSlidingObservable2(t, e) {
                return this.threshold ? t.pipe(fi(e), (r = t => {
                    var [{clientX: e, clientY: r}, {clientX: n, clientY: i}] = t;
                    return Xi(i - r) < this.threshold && Xi(n - e) < this.threshold
                }, function (t) {
                    return t.lift(new Wi(r))
                }), Fr(t => {
                    var [{clientX: e, clientY: r}, {clientX: n, clientY: i}] = t;
                    return Xi(n - e) >= Xi(i - r)
                })) : t.pipe(fi(e), Fr(t => {
                    var [{clientX: e, clientY: r, event: n}, {clientX: i, clientY: o}] = t, s = Xi(i - e) >= Xi(o - r);
                    return this.preventDefault && s && n.preventDefault(), s
                }));
                var r
            }
        }), Gi = t => (class extends (Yi(Ii(Ri(t)))) {
            setupObservables() {
                var t = {contentRect: this.contentEl.getBoundingClientRect()},
                    e = ("ResizeObserver" in window ? gr(ResizeObserver)(this.contentEl).pipe(mn(t)) : ur(t)).pipe(vn(this.subjects.disconnect), Fr(t => {
                        var {contentRect: e} = t;
                        return e.width
                    }), An(), mn(t.contentRect.width));
                this._peek$ && (e = Lr(e, this._peek$).pipe(Fr(t => {
                    var [e, r] = t;
                    return e - r
                })));
                var r, n = this.subjects.persistent.pipe(Fr(t => !t)),
                    i = this.getStartObservable().pipe(vn(this.subjects.disconnect), Mi(n), An()),
                    o = hi(() => this.translateX$.pipe(Fr(t => 0 != t))), s = i.pipe(fi(o), Fr(t => {
                        var [{clientX: e}, r] = t;
                        return this.calcIsInRange(e, r)
                    }), Dn(t => {
                        t && (this.mouseEvents && this.contentEl.classList.add("hy-drawer-grabbing"), this.prepareInteraction())
                    }), An()), a = this.getEndObservable().pipe(vn(this.subjects.disconnect), Mi(n, s), An()),
                    c = this.getMoveObservable(i, a).pipe(vn(this.subjects.disconnect), Mi(n, s), An()),
                    u = this.getIsSlidingObservable(c, i, a).pipe(Dn(t => {
                        t && this.fireEvent("slidestart", {detail: this.opened})
                    }));
                this.translateX$ = hi(() => Yr(this.tween$, c.pipe(Mi(u), Dn(t => {
                    var {event: e} = t;
                    return this.preventDefault && e.preventDefault()
                }), fi(i, this.startTranslateX$, e), function (t, e) {
                    return void 0 === e && (e = 0), function (r) {
                        return r.lift(new pr(t, e))
                    }
                }(di), Fr(t => {
                    var [{clientX: e}, {clientX: r}, n, i] = t;
                    return this.calcTranslateX(e, r, n, i)
                })), Lr(this.subjects.opened, this.subjects.align, e).pipe(Dn(t => {
                    var [e] = t;
                    return this.cleanupInteraction(e)
                }), Fr(t => {
                    var [e, r, n] = t;
                    return e ? n * ("left" === r ? 1 : -1) : 0
                })))).pipe(vn(this.subjects.disconnect), An()), this.startTranslateX$ = this.translateX$.pipe((r = i, function (t) {
                    return t.lift(new yi(r))
                }));
                var l, h = this.translateX$.pipe((void 0 === l && (l = bi), Fr(function (t) {
                        return new _i(t, l.now())
                    })), wi(), kn(t => {
                        var [{timestamp: e}, {timestamp: r}] = t;
                        return r - e > 0
                    }), Fr(t => {
                        var [{value: e, timestamp: r}, {value: n, timestamp: i}] = t;
                        return (n - e) / (i - r)
                    }), mn(0)),
                    p = Yr(a.pipe(Dn(() => this.contentEl.classList.remove("hy-drawer-grabbing")), fi(i, this.translateX$, e, h), kn(this.calcIsSwipe.bind(this)), Fr(this.calcWillOpen.bind(this)), Dn(t => this.fireEvent("slideend", {detail: t}))), this.animateTo$.pipe(Dn(this.prepareInteraction.bind(this))));
                this.tween$ = p.pipe(Dn(t => this.setInternalState("opened", t)), fi(this.translateX$, e), bn(t => {
                    var [e, r, n] = t, o = "left" === this.align ? 1 : -1;
                    return Ni(Oi, r, (e ? n * o : 0) - r, 200 + .15 * n).pipe(Dn({complete: () => this.subjects.opened.next(e)}), vn(i), vn(this.subjects.align.pipe(xi(1))), An())
                })), this.translateX$.pipe(fi(e)).subscribe(t => {
                    var [e, r] = t;
                    return this.updateDOM(e, r)
                }), Kr(this.scrimEl, "click").pipe(vn(this.subjects.disconnect)).subscribe(() => this.close()), n.pipe(vn(this.subjects.disconnect)).subscribe(t => {
                    this.scrimEl.style.display = t ? "block" : "none"
                }), this.subjects.align.pipe(vn(this.subjects.disconnect)).subscribe(t => {
                    this.contentEl.classList.remove("hy-drawer-left"), this.contentEl.classList.remove("hy-drawer-right"), this.contentEl.classList.add("hy-drawer-".concat(t))
                }), this.subjects.mouseEvents.pipe(vn(this.subjects.disconnect), bn(t => (t ? this.contentEl.classList.add("hy-drawer-grab") : this.contentEl.classList.remove("hy-drawer-grab"), t ? i.pipe(fi(s)) : Gr))).subscribe(t => {
                    var [{event: e}, r] = t;
                    return r && e && e.preventDefault()
                }), this.fireEvent("init", {detail: this.opened})
            }
        }),
        Ki = new he([...fe, "eventlistener", "queryselector", "requestanimationframe", "classlist", "opacity", "csstransforms", "csspointerevents"]),
        Ji = t => (class extends (Gi(yr(be(t)))) {
            static get componentName() {
                return "hy-drawer"
            }

            static get types() {
                return {
                    opened: wr,
                    align: Er(["left", "right"]),
                    persistent: wr,
                    range: _r(Sr),
                    threshold: Sr,
                    preventDefault: wr,
                    touchEvents: wr,
                    mouseEvents: wr
                }
            }

            static get defaults() {
                return {
                    opened: !1,
                    align: "left",
                    persistent: !1,
                    range: [0, 100],
                    threshold: 10,
                    preventDefault: !1,
                    touchEvents: !1,
                    mouseEvents: !1
                }
            }

            setupComponent(t, e) {
                super.setupComponent(t, e), this.animateTo$ = new Ge, this.scrimEl = this.sroot.querySelector(".hy-drawer-scrim"), this.contentEl = this.sroot.querySelector(".hy-drawer-content"), this.contentEl.classList.add("hy-drawer-".concat(this.align))
            }

            connectComponent() {
                this.setupObservables(), super.connectComponent()
            }

            open() {
                !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.animateTo$.next(!0) : this.opened = !0
            }

            close() {
                !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.animateTo$.next(!1) : this.opened = !1
            }

            toggle() {
                !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.animateTo$.next(!this.opened) : this.opened = !this.opened
            }
        }),
        Zi = '<div class="hy-drawer-scrim"></div> <div class="hy-drawer-content"> <slot></slot> </div> <style> @media screen { .hy-drawer-scrim { position: fixed; top: 0; left: 0; height: 100vh; width: 100vw; opacity: 0; pointer-events: none; transform: translateX(0); -webkit-tap-highlight-color: transparent; @apply --hy-drawer-scrim-container; background: rgba(0, 0, 0, 0.5); background: var(--hy-drawer-scrim-background, rgba(0, 0, 0, 0.5)); z-index: 20; z-index: var(--hy-drawer-scrim-z-index, 20); } .hy-drawer-content { position: fixed; top: 0; height: 100vh; overflow-x: hidden; overflow-y: auto; transform: translateX(0); contain: strict; -webkit-overflow-scrolling: touch; @apply --hy-drawer-content-container; width: 300px; width: var(--hy-drawer-width, 300px); background: #e8e8e8; background: var(--hy-drawer-background, #e8e8e8); box-shadow: 0 0 15px rgba(0, 0, 0, 0.25); box-shadow: var(--hy-drawer-box-shadow, 0 0 15px rgba(0, 0, 0, 0.25)); z-index: 30; z-index: var(--hy-drawer-z-index, 30); } .hy-drawer-content.hy-drawer-left { left: -300px; left: calc( -1 * var(--hy-drawer-slide-width, var(--hy-drawer-width, 300px))); } .hy-drawer-content.hy-drawer-right { right: -300px; right: calc( -1 * var(--hy-drawer-slide-width, var(--hy-drawer-width, 300px))); } .hy-drawer-grab { cursor: move; cursor: -webkit-grab; cursor: -moz-grab; cursor: grab; } .hy-drawer-grabbing { cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing; } } @media print { .hy-drawer-scrim { display: none !important; } .hy-drawer-content { transform: none !important; } } </style>',
        Qi = new he([..._e, ...Ki]);

    class to extends (Se(Ji(Ee))) {
        static get observedAttributes() {
            return this.getObservedAttributes()
        }

        getTemplate() {
            return t = Zi, document.createRange().createContextualFragment(t);
            var t
        }
    }

    var eo = {leading: !0, trailing: !1};
    var ro = function () {
        function t(t, e, r, n) {
            this.duration = t, this.scheduler = e, this.leading = r, this.trailing = n
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new no(t, this.duration, this.scheduler, this.leading, this.trailing))
        }, t
    }(), no = function (t) {
        function e(e, r, n, i, o) {
            var s = t.call(this, e) || this;
            return s.duration = r, s.scheduler = n, s.leading = i, s.trailing = o, s._hasTrailingValue = !1, s._trailingValue = null, s
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.throttled ? this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(io, this.duration, {subscriber: this})), this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0))
        }, e.prototype._complete = function () {
            this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
        }, e.prototype.clearThrottle = function () {
            var t = this.throttled;
            t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), t.unsubscribe(), this.remove(t), this.throttled = null)
        }, e
    }(Fe);

    function io(t) {
        t.subscriber.clearThrottle()
    }

    var oo = new he([...Qi, "cssremunit", "classlist", "customproperties", "eventlistener", "matchmedia"]),
        so = "(min-width: 64em)", ao = "(min-width: 1666px)", co = 21, uo = 28, lo = 1, ho = 2, po = 3;

    function fo() {
        return parseFloat(getComputedStyle(document.documentElement).fontSize)
    }

    function mo() {
        return co * fo()
    }

    function vo() {
        return document.body.clientWidth / 2 - uo * fo()
    }

    var yo = t => e => t.pipe(bn(t => t ? e : Gr));
    window._noDrawer || !ai(oo) || ri || si.then(() => {
        var t = document.getElementsByTagName("hy-drawer")[0], e = document.getElementById("_menu"),
            r = document.getElementById("_sidebar"), i = document.querySelector(".sidebar-sticky");

        function o() {
            var o = gr(n.a)(t).pipe(Fr(() => window.matchMedia(ao).matches ? po : window.matchMedia(so).matches ? ho : lo), An(), mn(window.matchMedia(ao).matches ? po : window.matchMedia(so).matches ? ho : lo)),
                s = o.pipe(Fr(t => t >= po ? vo() : mo())), c = s.pipe(fi(o), Fr(t => {
                    var [e, r] = t;
                    return r >= ho ? document.body.clientWidth / 2 - e / 2 : document.body.clientWidth / 2
                })), u = s.pipe(fi(o), Fr(t => {
                    var [e, r] = t;
                    return r >= ho ? [0, e] : ei && !navigator.standalone ? [35, 150] : [0, 150]
                }));
            ze.create(e => t.moveCallback = t => e.next(t)).pipe(fi(c, o)).subscribe(t => {
                var [{opacity: e}, r, n] = t;
                return a(n >= ho, r, e)
            }), t.addEventListener("hy-drawer-prepare", () => {
                oi ? (r.attributeStyleMap.set("will-change", "transform"), i.attributeStyleMap.set("will-change", "opacity")) : (r.style.willChange = "transform", i.style.willChange = "opacity")
            }), t.addEventListener("hy-drawer-transitioned", () => {
                oi ? (r.attributeStyleMap.delete("will-change"), i.attributeStyleMap.delete("will-change")) : (r.style.willChange = "", i.style.willChange = "")
            }), e.addEventListener("click", t => {
                ei && t.preventDefault(), window._drawer.toggle()
            });
            var l, h, p, d = Kr(t, "hy-drawer-transitioned").pipe(Fr(t => t.detail), In(), Dn(t => {
                t || (!function () {
                    var t = document.getElementById("_swipe");
                    t && t.parentNode.removeChild(t)
                }(), history.state || history.replaceState({}, document.title), history.state.closedOnce = !0)
            }));
            Kr(window, "popstate", {passive: !0}).pipe(yo(d)).subscribe(() => window._drawer.close()), Kr(document, "wheel", {passive: !1}).pipe(yo(d), Dn(e => {
                t.translateX > 0 && e.preventDefault()
            }), (l = 500, void 0 === h && (h = bi), void 0 === p && (p = eo), function (t) {
                return t.lift(new ro(l, h, p.leading, p.trailing))
            })).subscribe(() => window._drawer.close());
            var f = window.pageYOffset || document.body.scrollTop,
                m = t.classList.contains("cover") && f <= 0 && !(history.state && history.state.closedOnce);
            m || (history.state || history.replaceState({}, document.title), history.state.closedOnce = !0), t._peek$ = o.pipe(Fr(t => {
                switch (t) {
                    case po:
                        return vo();
                    case ho:
                        return mo();
                    case lo:
                        return .5 * fo()
                }
            }));
            var v = m ? null : t.getBoundingClientRect().height;
            t.addEventListener("hy-drawer-init", () => {
                !function () {
                    var t = document.getElementById("_hrefSwipeSVG");
                    if (t) {
                        var e = document.createElement("img");
                        e.id = "_swipe", e.src = t.href, e.alt = "Swipe image", e.addEventListener("click", () => window._drawer.close()), document.getElementById("_sidebar").appendChild(e)
                    }
                }(), t.classList.add("loaded"), v && f >= v && window.scrollTo(0, f - v)
            }, {once: !0}), c.pipe(fi(o), xi(1)).subscribe(e => {
                var [r, n] = e;
                return a(n >= ho, r, void 0 !== t.opacity ? t.opacity : m ? 1 : 0)
            }), window._drawer = function (t, e) {
                return e && t.setAttribute("opened", ""), Qn && t.setAttribute("threshold", 0), ti || t.setAttribute("mouse-events", ""), ni && t.removeAttribute("prevent-default"), window.customElements.define("hy-drawer", to), t
            }(t, m), u.subscribe(e => t.range = e)
        }

        var s = oi ? new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(0))]) : null;

        function a(t, e, n) {
            var o = e * (1 - n), a = t ? 1 : n;
            oi ? (s[0].x.value = o, r.attributeStyleMap.set("transform", s), i.attributeStyleMap.set("opacity", a)) : (r.style.transform = "translateX(".concat(o, "px)"), i.style.opacity = a)
        }

        !function e() {
            getComputedStyle(t).getPropertyValue("--hy-drawer-width") ? o() : setTimeout(e, 300)
        }()
    });
    var go = window.URL;
    if (!(go && go.prototype && "href" in go.prototype)) {
        (go = function (t, e) {
            if (!t) throw new TypeError("Invalid argument");
            var r = document.implementation.createHTMLDocument("");
            if (e) {
                var n = r.createElement("base");
                n.href = e, r.head.appendChild(n)
            }
            var i = r.createElement("a");
            if (i.href = t, r.body.appendChild(i), ":" === i.protocol || !/:/.test(i.href)) throw new TypeError("Invalid URL");
            Object.defineProperty(this, "_anchorElement", {value: i})
        }).prototype = {
            toString: function () {
                return this.href
            }, get href() {
                return this._anchorElement.href
            }, set href(t) {
                this._anchorElement.href = t
            }, get protocol() {
                return this._anchorElement.protocol
            }, set protocol(t) {
                this._anchorElement.protocol = t
            }, get host() {
                return this._anchorElement.host
            }, set host(t) {
                this._anchorElement.host = t
            }, get hostname() {
                return this._anchorElement.hostname
            }, set hostname(t) {
                this._anchorElement.hostname = t
            }, get port() {
                return this._anchorElement.port
            }, set port(t) {
                this._anchorElement.port = t
            }, get pathname() {
                return this._anchorElement.pathname
            }, set pathname(t) {
                this._anchorElement.pathname = t
            }, get search() {
                return this._anchorElement.search
            }, set search(t) {
                this._anchorElement.search = t
            }, get hash() {
                return this._anchorElement.hash
            }, set hash(t) {
                this._anchorElement.hash = t
            }
        };
        var bo = window.URL || window.webkitURL || window.mozURL;
        go.createObjectURL = function (t) {
            return bo.createObjectURL.apply(bo, arguments)
        }, go.revokeObjectURL = function (t) {
            return bo.revokeObjectURL.apply(bo, arguments)
        }, Object.defineProperty(go.prototype, "toString", {enumerable: !1})
    }
    var _o = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector;

    function wo(t) {
        var {protocol: e, host: r} = t,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        return e !== n.protocol || r !== n.host
    }

    function So() {
        return window.pageYOffset || document.body.scrollTop
    }

    var Eo = "push";

    function xo(t, e) {
        function r() {
            return !r.pred.apply(r.thisArg, arguments)
        }

        return r.pred = t, r.thisArg = e, r
    }

    function Co(t, e) {
        return function (r) {
            return [kn(t, e)(r), kn(xo(t, e))(r)]
        }
    }

    function To(t) {
        return function (e) {
            var r = new No(t), n = e.lift(r);
            return r.caught = n
        }
    }

    var No = function () {
        function t(t) {
            this.selector = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Oo(t, this.selector, this.caught))
        }, t
    }(), Oo = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.selector = r, i.caught = n, i
        }

        return Ce(e, t), e.prototype.error = function (e) {
            if (!this.isStopped) {
                var r = void 0;
                try {
                    r = this.selector(e, this.caught)
                } catch (e) {
                    return void t.prototype.error.call(this, e)
                }
                this._unsubscribeAndRecycle();
                var n = new Nr(this, void 0, void 0);
                this.add(n), Pr(this, r, void 0, void 0, n)
            }
        }, e
    }(Tr), Mo = t => (class extends t {
        histId() {
            return this.el.id || this.constructor.componentName
        }

        shouldLoadAnchor(t, e) {
            return t && "" === t.target && (!e || -1 !== t.href.search(e))
        }

        isPushEvent(t) {
            var {url: e, anchor: r, event: {metaKey: n, ctrlKey: i}} = t;
            return !n && !i && this.shouldLoadAnchor(r, this.hrefRegex) && !wo(e, this)
        }

        isHintEvent(t) {
            var {url: e, anchor: r} = t;
            return this.shouldLoadAnchor(r, this.hrefRegex) && !wo(e, this) && !function (t) {
                var {hash: e, origin: r, pathname: n} = t,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
                return "" !== e && r === i.origin && n === i.pathname
            }(e, this)
        }

        isHashChange(t) {
            var [{url: {pathname: e}}, {url: {pathname: r, hash: n}, type: i}] = t;
            return r === e && ("pop" === i || i === Eo && "" !== n)
        }
    }), Ao = t => (class extends t {
        assignScrollPosition(t) {
            var e, r, n, i = this.histId();
            return Object.assign(t, {
                [i]: Object.assign(t[i] || {}, {
                    scrollTop: So(),
                    scrollHeight: (e = document.documentElement, r = document.body, n = "scrollHeight", e[n] || r[n])
                })
            })
        }

        manageScrollPostion(t) {
            var {type: e, url: {hash: r}} = t;
            switch (e) {
                case Eo:
                    this.scrollHashIntoView(r, {behavior: "smooth", block: "start", inline: "nearest"});
                    break;
                case"pop":
                    this.restoreScrollPostion();
                    break;
                case INIT:
                    break;
                default:
                    0
            }
        }

        scrollHashIntoView(t, e) {
            if (t) {
                var r = document.getElementById(decodeURIComponent(t.substr(1)));
                r && r.scrollIntoView(e)
            } else window.scroll(window.pageXOffset, 0)
        }

        restoreScrollPostion() {
            var t = this.histId(), {scrollTop: e, scrollHeight: r} = window.history.state && window.history.state[t] || {};
            null != e && window.scroll(window.pageXOffset, e)
        }

        restoreScrollPostionOnReload() {
            0 != So() || this.restoreScrollPostion()
        }
    }), ko = t => (class extends (Ao(t)) {
        updateHistoryState(t) {
            var {type: e, replace: r, url: {href: n}} = t;
            if (!wo(this)) switch (e) {
                case"init":
                case Eo:
                    var i = this.histId(), o = r || n === window.location.href ? "replaceState" : "pushState",
                        s = Object.assign(window.history.state || {}, {[i]: {}});
                    window.history[o](s, document.title, n);
                case"pop":
                    break;
                default:
                    0
            }
        }

        updateHistoryStateHash(t) {
            var {type: e, url: r} = t;
            if (!wo(this) && e === Eo) {
                var n = this.histId();
                window.history.pushState({[n]: {}}, document.title, r)
            }
        }

        updateHistoryTitle(t) {
            var {type: e, title: r} = t;
            document.title = r, wo(this) || e !== Eo || window.history.replaceState(window.history.state, r, window.location)
        }

        saveScrollPosition() {
            if (!wo(this)) {
                var t = this.assignScrollPosition(window.history.state || {});
                window.history.replaceState(t, document.title, window.location)
            }
        }
    });

    function Ro() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = t[t.length - 1];
        return "function" == typeof r && t.pop(), cr(t, void 0).lift(new Po(r))
    }

    var Po = function () {
        function t(t) {
            this.resultSelector = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Io(t, this.resultSelector))
        }, t
    }(), Io = function (t) {
        function e(e, r, n) {
            void 0 === n && (n = Object.create(null));
            var i = t.call(this, e) || this;
            return i.iterators = [], i.active = 0, i.resultSelector = "function" == typeof r ? r : null, i.values = n, i
        }

        return Ce(e, t), e.prototype._next = function (t) {
            var e = this.iterators;
            ke(t) ? e.push(new jo(t)) : "function" == typeof t[Mr] ? e.push(new Lo(t[Mr]())) : e.push(new Do(this.destination, this, t))
        }, e.prototype._complete = function () {
            var t = this.iterators, e = t.length;
            if (this.unsubscribe(), 0 !== e) {
                this.active = e;
                for (var r = 0; r < e; r++) {
                    var n = t[r];
                    if (n.stillUnsubscribed) this.destination.add(n.subscribe(n, r)); else this.active--
                }
            } else this.destination.complete()
        }, e.prototype.notifyInactive = function () {
            this.active--, 0 === this.active && this.destination.complete()
        }, e.prototype.checkIterators = function () {
            for (var t = this.iterators, e = t.length, r = this.destination, n = 0; n < e; n++) {
                if ("function" == typeof (s = t[n]).hasValue && !s.hasValue()) return
            }
            var i = !1, o = [];
            for (n = 0; n < e; n++) {
                var s, a = (s = t[n]).next();
                if (s.hasCompleted() && (i = !0), a.done) return void r.complete();
                o.push(a.value)
            }
            this.resultSelector ? this._tryresultSelector(o) : r.next(o), i && r.complete()
        }, e.prototype._tryresultSelector = function (t) {
            var e;
            try {
                e = this.resultSelector.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }, e
    }(Fe), Lo = function () {
        function t(t) {
            this.iterator = t, this.nextResult = t.next()
        }

        return t.prototype.hasValue = function () {
            return !0
        }, t.prototype.next = function () {
            var t = this.nextResult;
            return this.nextResult = this.iterator.next(), t
        }, t.prototype.hasCompleted = function () {
            var t = this.nextResult;
            return t && t.done
        }, t
    }(), jo = function () {
        function t(t) {
            this.array = t, this.index = 0, this.length = 0, this.length = t.length
        }

        return t.prototype[Mr] = function () {
            return this
        }, t.prototype.next = function (t) {
            var e = this.index++, r = this.array;
            return e < this.length ? {value: r[e], done: !1} : {value: null, done: !0}
        }, t.prototype.hasValue = function () {
            return this.array.length > this.index
        }, t.prototype.hasCompleted = function () {
            return this.array.length === this.index
        }, t
    }(), Do = function (t) {
        function e(e, r, n) {
            var i = t.call(this, e) || this;
            return i.parent = r, i.observable = n, i.stillUnsubscribed = !0, i.buffer = [], i.isComplete = !1, i
        }

        return Ce(e, t), e.prototype[Mr] = function () {
            return this
        }, e.prototype.next = function () {
            var t = this.buffer;
            return 0 === t.length && this.isComplete ? {value: null, done: !0} : {value: t.shift(), done: !1}
        }, e.prototype.hasValue = function () {
            return this.buffer.length > 0
        }, e.prototype.hasCompleted = function () {
            return 0 === this.buffer.length && this.isComplete
        }, e.prototype.notifyComplete = function () {
            this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
        }, e.prototype.notifyNext = function (t, e, r, n, i) {
            this.buffer.push(e), this.parent.checkIterators()
        }, e.prototype.subscribe = function (t, e) {
            return Pr(this, this.observable, this, e)
        }, e
    }(Tr), Fo = t => (class extends t {
        makeRequest(t) {
            return dn({
                method: "GET",
                responseType: "text",
                url: t.url,
                crossDomain: wo(this),
                headers: {Accept: "text/html"}
            }).pipe(Fr(e => {
                var {response: r} = e;
                return Object.assign(t, {response: r})
            }), To(e => this.recoverIfResponse(t, e)))
        }

        recoverIfResponse(t, e) {
            var {status: r, xhr: n} = e;
            return n && n.response && r > 400 && r < 598 ? ur(Object.assign(t, {response: n.response})) : ur(Object.assign(t, {error: e}))
        }

        getFetch$(t, e, r) {
            var {url: {href: n}} = t;
            return n === e.url.href && null == e.error ? ur(e) : r.pipe(qi(1))
        }

        getResponse(t, e) {
            var [r, n] = e;
            return Ro(this.getFetch$(r, n, t).pipe(Fr(t => Object.assign(t, r))), this.animPromise, t => t)
        }
    });
    var Ho = t => (class extends t {
        tempRemoveScriptTags(t) {
            var e = [];
            return t.forEach(t => Array.from(t.querySelectorAll(this.scriptSelector)).forEach(t => {
                var r = [t, t.previousSibling];
                t.parentNode.removeChild(t), e.push(r)
            })), e
        }

        insertScript(t) {
            var [e, r] = t, n = document.write;
            return document.write = function () {
                for (var t = document.createElement("div"), e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                t.innerHTML = n.join(), Array.from(t.childNodes).forEach(t => {
                    r.parentNode.insertBefore(t, r.nextSibling)
                })
            }, "" !== e.src ? ze.create(t => {
                e.addEventListener("load", e => {
                    document.write = n, t.complete(e)
                }), e.addEventListener("error", e => {
                    document.write = n, t.error(e)
                }), r.parentNode.insertBefore(e, r.nextSibling)
            }) : ur({}).pipe(Dn(() => {
                r.parentNode.insertBefore(e, r.nextSibling), document.write = n
            }))
        }

        reinsertScriptTags(t) {
            if (!this.scriptSelector) return ur(t);
            var e, r, {scripts: n} = t;
            return Ur(n).pipe((e = this.insertScript.bind(this), zr(e, r, 1)), To(e => {
                throw Object.assign(t, {error: e})
            })).toPromise().then(() => t)
        }
    }), qo = t => (class extends (Ho(t)) {
        getTitle(t) {
            return (t.querySelector("title") || {}).textContent
        }

        getReplaceElements(t) {
            if (this.replaceIds.length > 0) return this.replaceIds.map(e => t.getElementById(e));
            if (this.el.id) return [t.getElementById(this.el.id)];
            var e = Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);
            return [t.querySelectorAll(this.el.tagName)[e]]
        }

        responseToContent(t) {
            var e, {response: r} = t, n = (e = r, document.createRange().createContextualFragment(e)),
                i = this.getTitle(n), o = this.getReplaceElements(n);
            if (o.some(t => null == t)) throw Object.assign(t, {replaceElMissing: !0});
            var s = this.scriptSelector ? this.tempRemoveScriptTags(o) : [];
            return Object.assign(t, {documentFragment: n, title: i, replaceEls: o, scripts: s})
        }

        replaceContentByIds(t) {
            this.replaceIds.map(t => document.getElementById(t)).forEach((e, r) => e.parentNode.replaceChild(t[r], e))
        }

        replaceContentWholesale(t) {
            var [e] = t;
            this.el.innerHTML = e.innerHTML
        }

        replaceContent(t) {
            this.replaceIds.length > 0 ? this.replaceContentByIds(t) : this.replaceContentWholesale(t)
        }

        updateDOM(t) {
            try {
                var {replaceEls: e} = t;
                this.updateHistoryTitle(t), wo(this) && this.rewriteURLs(e), this.replaceContent(e)
            } catch (e) {
                throw Object.assign(t, {error: e})
            }
        }

        rewriteURLs(t) {
            t.forEach(t => {
                t.querySelectorAll("[href]").forEach(this.rewriteURL("href")), t.querySelectorAll("[src]").forEach(this.rewriteURL("src")), t.querySelectorAll("img[srcset]").forEach(this.rewriteURLSrcSet("srcset")), t.querySelectorAll("blockquote[cite]").forEach(this.rewriteURL("cite")), t.querySelectorAll("del[cite]").forEach(this.rewriteURL("cite")), t.querySelectorAll("ins[cite]").forEach(this.rewriteURL("cite")), t.querySelectorAll("q[cite]").forEach(this.rewriteURL("cite")), t.querySelectorAll("img[longdesc]").forEach(this.rewriteURL("longdesc")), t.querySelectorAll("frame[longdesc]").forEach(this.rewriteURL("longdesc")), t.querySelectorAll("iframe[longdesc]").forEach(this.rewriteURL("longdesc")), t.querySelectorAll("img[usemap]").forEach(this.rewriteURL("usemap")), t.querySelectorAll("input[usemap]").forEach(this.rewriteURL("usemap")), t.querySelectorAll("object[usemap]").forEach(this.rewriteURL("usemap")), t.querySelectorAll("form[action]").forEach(this.rewriteURL("action")), t.querySelectorAll("button[formaction]").forEach(this.rewriteURL("formaction")), t.querySelectorAll("input[formaction]").forEach(this.rewriteURL("formaction")), t.querySelectorAll("video[poster]").forEach(this.rewriteURL("poster")), t.querySelectorAll("object[data]").forEach(this.rewriteURL("data")), t.querySelectorAll("object[codebase]").forEach(this.rewriteURL("codebase")), t.querySelectorAll("object[archive]").forEach(this.rewriteURLList("archive"))
            })
        }

        rewriteURL(t) {
            return e => {
                try {
                    e.setAttribute(t, new URL(e.getAttribute(t), this.href).href)
                } catch (t) {
                    0
                }
            }
        }

        rewriteURLSrcSet(t) {
            return e => {
                try {
                    e.setAttribute(t, e.getAttribute(t).split(/\s*,\s*/).map(t => {
                        var e = t.split(/\s+/);
                        return e[0] = new URL(e[0], this.href).href, e.join(" ")
                    }).join(", "))
                } catch (t) {
                    0
                }
            }
        }

        rewriteURLList(t) {
            return e => {
                try {
                    e.setAttribute(t, e.getAttribute(t).split(/[\s,]+/).map(t => new URL(t, this.href).href).join(", "))
                } catch (t) {
                    0
                }
            }
        }
    });

    function Bo(t) {
        return !ke(t) && t - parseFloat(t) + 1 >= 0
    }

    function Uo(t, e, r) {
        void 0 === t && (t = 0);
        var n = -1;
        return Bo(e) ? n = Number(e) < 1 ? 1 : Number(e) : ir(e) && (r = e), ir(r) || (r = bi), new ze(function (e) {
            var i = Bo(t) ? t : +t - r.now();
            return r.schedule(zo, i, {index: 0, period: n, subscriber: e})
        })
    }

    function zo(t) {
        var e = t.index, r = t.period, n = t.subscriber;
        if (n.next(e), !n.closed) {
            if (-1 === r) return n.complete();
            t.index = e + 1, this.schedule(t, r)
        }
    }

    var Vo = t => (class extends t {
            onStart(t) {
                this.animPromise = Uo(this.duration);
                this.fireEvent("start", {
                    detail: Object.assign(t, {
                        transitionUntil: t => {
                            this.animPromise = t
                        }
                    })
                })
            }

            onDOMError(t) {
                var {replaceElMissing: e, url: r} = t;
                e ? (window.history.back(), setTimeout(() => {
                    document.location.href = r
                }, 100)) : this.fireEvent("error", {detail: t})
            }

            onNetworkError(t) {
                this.fireEvent("networkerror", {detail: t})
            }

            onError(t) {
                this.fireEvent("error", {detail: t})
            }

            onReady(t) {
                this.fireEvent("ready", {detail: t})
            }

            onAfter(t) {
                this.fireEvent("after", {detail: t})
            }

            onProgress(t) {
                this.fireEvent("progress", {detail: t})
            }

            onLoad(t) {
                this.fireEvent("load", {detail: t})
            }
        }), Wo = t => (class extends t {
            setupEventListeners() {
                if ("MutationObserver" in window && "WeakSet" in window) {
                    var t = new WeakSet, e = this.pushSubject.next.bind(this.pushSubject),
                        r = this.hintSubject.next.bind(this.hintSubject), n = n => {
                            t.has(n) || (t.add(n), n.addEventListener("click", e), n.addEventListener("mouseenter", r, {passive: !0}), n.addEventListener("touchstart", r, {passive: !0}), n.addEventListener("focus", r, {passive: !0}))
                        }, i = t => {
                            t instanceof Element && (_o.call(t, this.linkSelector) ? n(t) : Array.from(t.querySelectorAll(this.linkSelector)).forEach(n))
                        }, o = n => {
                            t.delete(n), n.removeEventListener("click", e), n.removeEventListener("mouseenter", r, {passive: !0}), n.removeEventListener("touchstart", r, {passive: !0}), n.removeEventListener("focus", r, {passive: !0})
                        }, s = t => {
                            t instanceof Element && (_o.call(t, this.linkSelector) ? o(t) : Array.from(t.querySelectorAll(this.linkSelector)).forEach(o))
                        };
                    gr(MutationObserver)(this.el, {}, {childList: !0, subtree: !0}).subscribe(t => {
                        var {addedNodes: e, removedNodes: r} = t;
                        Array.from(r).forEach(s.bind(this)), Array.from(e).forEach(i.bind(this))
                    }), this.subjects.linkSelector.subscribe(() => {
                        Array.from(t).forEach(o), i.call(this, this.el)
                    })
                } else this.el.addEventListener("click", t => {
                    var e = function (t) {
                        for (var e = this; e !== document && e !== document.documentElement;) {
                            if (_o.call(e, t)) return e;
                            e = e.parentNode
                        }
                        return null
                    }.call(t.target, this.linkSelector);
                    e && e.href && (t.currentTarget = e, pushSubject.next(t))
                })
            }
        }), $o = t => (class extends (Wo(Vo(qo(Fo(ko(Mo(t))))))) {
            compareContext(t, e) {
                return t.url.href === e.url.href && t.error === e.error && t.cacheNr === e.cacheNr
            }

            setupObservables() {
                this.cacheNr = 1, this.pushSubject = new Ge, this.hintSubject = new Ge;
                var t = this.pushSubject.pipe(vn(this.subjects.disconnect), Fr(t => ({
                        type: Eo,
                        url: new go(t.currentTarget.href, this.href),
                        anchor: t.currentTarget,
                        event: t,
                        cacheNr: this.cacheNr
                    })), kn(this.isPushEvent.bind(this)), Dn(t => {
                        var {event: e} = t;
                        e.preventDefault(), this.saveScrollPosition()
                    })),
                    e = Kr(window, "popstate").pipe(vn(this.subjects.disconnect), kn(() => window.history.state && window.history.state[this.histId()]), Fr(t => ({
                        type: "pop",
                        url: new go(window.location, this.href),
                        event: t,
                        cacheNr: this.cacheNr
                    }))),
                    r = this.reload$.pipe(vn(this.subjects.disconnect)), [n, i] = Yr(t, e, r).pipe(mn({url: new go(this.initialHref)}), Dn(t => {
                        var {url: e} = t;
                        return this._url = e
                    }), wi(), An(), Co(this.isHashChange)).map(t => t.pipe(Fr(t => {
                        var [, e] = t;
                        return e
                    }), An())), o = this.subjects.prefetch.pipe(bn(t => {
                        if (!t) return Gr;
                        var e = hi(() => Yr(i.pipe(Li(!0)), this.fetch$.pipe(Li(!1)))).pipe(mn(!1), An());
                        return this.hintSubject.pipe(vn(this.subjects.disconnect), (t => e => t.pipe(bn(t => t ? Gr : e)))(e), Fr(t => ({
                            type: "hint",
                            url: new go(t.currentTarget.href, this.href),
                            anchor: t.currentTarget,
                            event: t,
                            cacheNr: this.cacheNr
                        })), kn(this.isHintEvent.bind(this)))
                    })),
                    s = Yr(o, i).pipe(In(this.compareContext.bind(this)), bn(this.makeRequest.bind(this)), mn({url: {}}), An());
                this.fetch$ = i.pipe(Dn(t => {
                    this.updateHistoryState(t), this.onStart(t)
                }), fi(s), bn(this.getResponse.bind(this, s)), An());
                var [a, c] = this.fetch$.pipe(Co(t => {
                    var {error: e} = t;
                    return !e
                }));
                a.pipe(Fr(this.responseToContent.bind(this)), Dn(t => {
                    this.onReady(t), this.updateDOM(t), this.onAfter(t), this.manageScrollPostion(t)
                }), Dn({error: t => this.onDOMError(t)}), To((t, e) => e), bn(this.reinsertScriptTags.bind(this)), Dn({error: t => this.onError(t)}), To((t, e) => e)).subscribe(this.onLoad.bind(this)), n.subscribe(t => {
                    this.updateHistoryStateHash(t), this.manageScrollPostion(t)
                }), c.subscribe(this.onNetworkError.bind(this)), i.pipe(bn(t => hi(() => this.animPromise).pipe(vn(this.fetch$), Li(t)))).subscribe(this.onProgress.bind(this)), this.setupEventListeners()
            }
        }),
        Xo = new he([...fe, "documentfragment", "eventlistener", "history", "promises", "queryselector", "requestanimationframe"]);
    DocumentFragment.prototype.getElementById = DocumentFragment.prototype.getElementById || function (t) {
        return this.querySelector("#".concat(t))
    };
    var Yo = t => (class extends ($o(yr(be(t)))) {
        static get componentName() {
            return "hy-push-state"
        }

        static get types() {
            return {
                replaceIds: br,
                linkSelector: Cr,
                duration: Sr,
                hrefRegex: xr,
                scriptSelector: Cr,
                initialHref: Cr,
                prefetch: wr
            }
        }

        static get defaults() {
            return {
                replaceIds: [],
                linkSelector: "a[href]:not(.no-push-state)",
                duration: 0,
                hrefRegex: null,
                scriptSelector: null,
                initialHref: window.location.href,
                prefetch: !1
            }
        }

        get hash() {
            return this._url.hash
        }

        get host() {
            return this._url.host
        }

        get hostname() {
            return this._url.hostname
        }

        get href() {
            return this._url.href
        }

        get origin() {
            return this._url.origin
        }

        get pathname() {
            return this._url.pathname
        }

        get port() {
            return this._url.port
        }

        get protocol() {
            return this._url.protocol
        }

        get search() {
            return this._url.search
        }

        setupComponent(t, e) {
            super.setupComponent(t, e), this.saveScrollPosition = this.saveScrollPosition.bind(this), this.reload$ = new Ge
        }

        setupShadowDOM(t) {
            return t
        }

        connectComponent() {
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), this.restoreScrollPostionOnReload(), window.addEventListener("beforeunload", this.saveScrollPosition), this.setupObservables(), super.connectComponent();
            var t = new go(this.initialHref);
            this.updateHistoryState({type: "init", replace: !0, url: t});
            var e = this.getReplaceElements(document);
            wo(this) && this.rewriteURLs(e), this.fireEvent("init"), this.onLoad({
                type: "init",
                title: this.getTitle(document),
                replaceEls: e,
                url: t,
                cacheNr: this.cacheNr
            })
        }

        disconnectComponent() {
            super.disconnectComponent(), window.removeEventListener("beforeunload", this.saveScrollPosition)
        }

        assign(t) {
            this.reload$.next({type: Eo, url: new go(t, this.href), cacheNr: ++this.cacheNr})
        }

        reload() {
            this.reload$.next({type: Eo, url: new go(this.href), cacheNr: ++this.cacheNr, replace: !0})
        }

        replace(t) {
            this.reload$.next({type: Eo, url: new go(t, this.href), cacheNr: ++this.cacheNr, replace: !0})
        }
    }), Go = new he([..._e, ...Xo]);

    class Ko extends (Se(Yo(Ee))) {
        static get observedAttributes() {
            return this.getObservedAttributes()
        }

        getTemplate() {
            return null
        }
    }

    var Jo = function () {
        function t(t) {
            this.project = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new Zo(t, this.project))
        }, t
    }(), Zo = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.project = r, n.hasSubscription = !1, n.hasCompleted = !1, n.index = 0, n
        }

        return Ce(e, t), e.prototype._next = function (t) {
            this.hasSubscription || this.tryNext(t)
        }, e.prototype.tryNext = function (t) {
            var e, r = this.index++;
            try {
                e = this.project(t, r)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.hasSubscription = !0, this._innerSub(e, t, r)
        }, e.prototype._innerSub = function (t, e, r) {
            var n = new Nr(this, void 0, void 0);
            this.destination.add(n), Pr(this, t, e, r, n)
        }, e.prototype._complete = function () {
            this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
        }, e.prototype.notifyNext = function (t, e, r, n, i) {
            this.destination.next(e)
        }, e.prototype.notifyError = function (t) {
            this.destination.error(t)
        }, e.prototype.notifyComplete = function (t) {
            this.destination.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
        }, e
    }(Tr), Qo = r(36), ts = r.n(Qo), es = r(49), rs = r.n(es);

    function ns(t) {
        return function (e) {
            return e.lift(new is(t))
        }
    }

    var is = function () {
        function t(t) {
            this.callback = t
        }

        return t.prototype.call = function (t, e) {
            return e.subscribe(new os(t, this.callback))
        }, t
    }(), os = function (t) {
        function e(e, r) {
            var n = t.call(this, e) || this;
            return n.add(new Le(r)), n
        }

        return Ce(e, t), e
    }(Fe), ss = .8, as = t => {
        var {background: e, color: r, image: n, overlay: i} = t;
        return "".concat(r).concat(n || e).concat("" === i ? "overlay" : "")
    };

    function cs(t) {
        var {protocol: e, host: r} = t,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        return e !== n.protocol || r !== n.host
    }

    class us {
        constructor(t) {
            var e = document.getElementById("_main"), r = document.getElementById("_pageStyle"),
                n = Array.from(document.styleSheets).find(t => t.ownerNode === r) || {};
            this.sidebar = document.getElementById("_sidebar"), this.fadeDuration = t, this.rules = n.cssRules || n.rules, this.prevHash = as(rs()(e)), this.themeColorEl = document.querySelector('meta[name="theme-color"]')
        }

        fetchImage2(t) {
            var {background: e, image: r} = t;
            if (e || !r || "" === r || "none" === r) return ur(null);
            var n = new URL(r, window.location);
            return dn({
                method: "GET",
                responseType: "blob",
                url: n,
                crossDomain: cs(n),
                headers: {Accept: "image/*"}
            }).pipe(Fr(t => {
                var {response: e} = t;
                return URL.createObjectURL(e)
            }), To(() => ur(r)))
        }

        fetchImage(t) {
            var e = rs()(t), {background: r, color: n, image: i, overlay: o} = e, s = as(e);
            return s === this.prevHash ? nr() : this.fetchImage2(e).pipe(Fr(t => {
                var a = document.createElement("div");
                return a.classList.add("sidebar-bg"), "none" !== i && "" === o && a.classList.add("sidebar-overlay"), r ? a.style.background = r : (a.style.backgroundColor = n, t && (a.style.backgroundImage = "url(".concat(t, ")"), a.objectURL = t)), [a, e, s]
            }))
        }

        updateStyle() {
            var {color: t = "#4fb1ba", themeColor: e = "#193747"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.themeColorEl && window.setTimeout(() => this.themeColorEl.content = e, 250), this.rules) try {
                var r = ts()(t), n = r.darken(.1);
                ts.a.hsl(tc.hue(), 12.5, 20), ts.a.hsl(tc.hue(), 12.5, 27.5);
                this.rules[0].style.color = t, this.rules[0].style.borderColor = r.fade(ss).string(), this.rules[1].style.borderColor = t, this.rules[2].style.outlineColor = t, this.rules[3].style.backgroundColor = t, this.rules[3].style.borderColor = t, this.rules[4].style.boxShadow = "0 0 0 3px ".concat(r.fade(.5)), this.rules[5].style.backgroundColor = n, this.rules[5].style.borderColor = n, this.rules[6].style.backgroundColor = t, this.rules[6].style.borderColor = t, this.rules[7].style.backgroundColor = n, this.rules[7].style.borderColor = n, this.rules[this.rules.length - 1].style.backgroundColor = t
            } catch (t) {
                0
            }
        }

        fade(t, e) {
            var [r] = t, [n, i, o] = e;
            return r.parentNode.insertBefore(n, r.nextElementSibling), this.updateStyle(i), this.prevHash = o, ui(n, [{opacity: 0}, {opacity: 1}], {
                duration: this.fadeDuration,
                easing: "ease"
            }).pipe(ns(() => {
                r.objectURL && URL.revokeObjectURL(r.objectURL), r.parentNode.removeChild(r)
            }))
        }
    }

    var ls, hs = ai(["classlist", "eventlistener", "queryselector"]);

    function ps(t) {
        try {
            for (var e = t.previousElementSibling; e && !e.classList.contains("MathJax_Preview");) e = e.previousElementSibling;
            var r = t.textContent.replace("% <![CDATA[", "").replace("%]]>", "");
            t.outerHTML = window.katex.renderToString(r, {displayMode: "math/tex; mode=display" === t.type}), e && e.parentNode.removeChild(e)
        } catch (t) {
            0
        }
    }

    var ds = (t, e) => new Promise(r => t(e).addEventListener("load", r)), fs = hs ? () => {
        var t = document.querySelectorAll('script[type^="math/tex"]');
        t.length && (ls || (ls = Promise.all([ds(loadJS, document.getElementById("_hrefKatexJS").href), ds(loadCSS, document.getElementById("_hrefKatexCSS").href), ds(loadJS, document.getElementById("_hrefKatexCopyJS").href), ds(loadCSS, document.getElementById("_hrefKatexCopyCSS").href)])), ls.then(() => {
            Array.from(t).forEach(ps)
        }))
    } : () => {
    };
    fs();
    var ms = ".page-title, .post-title";
    var vs = ["title"];

    function ys(t, e, r, n) {
        var i = t.pipe(kn(t => {
            var {flipType: e} = t;
            return !vs.includes(e)
        }));
        return Yr(function (t, e, r, n) {
            var {animationMain: i, settings: o} = n;
            if (!i) return t;
            var s = t.pipe(kn(t => {
                var {flipType: e} = t;
                return "title" === e
            }), bn(t => {
                var {anchor: e} = t;
                if (!e) return ur({});
                var r = document.createElement("h1");
                r.classList.add("page-title"), r.textContent = e.textContent, r.style.transformOrigin = "left top";
                var n = i.querySelector(".page");
                if (!n) return ur({});
                ci.call(n), n.appendChild(r), i.style.position = "fixed", i.style.opacity = 1;
                var s = e.getBoundingClientRect(), a = r.getBoundingClientRect(),
                    c = parseInt(getComputedStyle(e).fontSize, 10), u = parseInt(getComputedStyle(r).fontSize, 10),
                    l = s.left - a.left, h = s.top - a.top, p = c / u;
                return e.style.opacity = 0, ui(r, [{transform: "translate3d(".concat(l, "px, ").concat(h, "px, 0) scale(").concat(p, ")")}, {transform: "translate3d(0, 0, 0) scale(1)"}], o).pipe(Dn({
                    complete() {
                        i.style.position = "absolute"
                    }
                }))
            }));
            return t.pipe(bn(t => {
                var {flipType: n} = t;
                return Ro(e.pipe(kn(() => "title" === n), Fr(t => {
                    var {replaceEls: [e]} = t, r = e.querySelector(ms);
                    return r && (r.style.opacity = 0), r
                })), r, t => t).pipe(Dn(t => {
                    t && (t.style.opacity = 1), i.style.opacity = 0
                }), ns(() => {
                    i.style.opacity = 0
                }))
            })).subscribe(), s
        }(t, e, r, n), i)
    }

    var gs = new he([...Go, "classlist", "cssanimations", "cssremunit", "documentfragment", "eventlistener", "history", "matchmedia", "opacity", "queryselector", "requestanimationframe"]),
        bs = [{opacity: 1}, {opacity: 0}],
        _s = [{opacity: 0, transform: "translateY(-3rem)"}, {opacity: 1, transform: "translateY(0)"}],
        ws = {duration: 350, easing: "ease-out", fill: "forwards"};

    function Ss(t) {
        var e = li("_permalink-template"), r = e.querySelector(".permalink");
        requestAnimationFrame(() => (r.href = "#".concat(t.id), t.appendChild(e)))
    }

    function Es(t, e, r) {
        var n = li(e);
        return n.querySelector(".nav-btn").addEventListener("click", r), t.appendChild(n), t.lastElementChild
    }

    function xs(t) {
        return t && t.classList ? t.classList.contains("flip-title") ? "title" : t.classList.contains("flip-project") ? "project" : t.getAttribute && t.getAttribute("data-flip") : null
    }

    function Cs(t) {
        var {type: e, main: r} = t, n = ui(r, bs, ws).pipe(Li({main: r}));
        return window._drawer && window._drawer.opened ? (window._drawer.close(), Ro(n, Kr(window._drawer.el, "hy-drawer-transitioned").pipe(qi(1)), t => t)) : n
    }

    function Ts(t) {
        var {type: e, replaceEls: [r], flipType: n} = t;
        return ui(r, _s, ws).pipe(Li({main: r, flipType: n}))
    }

    window._noPushState || !ai(gs) || ii || si.then(() => {
        var t = !!navigator.standalone || window.matchMedia("(display-mode: standalone)").matches,
            e = document.getElementsByTagName("hy-push-state")[0],
            r = document.querySelector("#_navbar > .content > .nav-btn-bar"),
            n = document.querySelector("link[rel=canonical]"), i = document.querySelector("meta[name=description]"),
            o = function (t) {
                var e = li("_animation-template");
                return t.parentNode.insertBefore(e, t), t.previousElementSibling
            }(e), s = function (t) {
                var e = li("_loading-template");
                return t.appendChild(e), t.lastElementChild
            }(r);
        t && (Es(r, "_back-template", () => window.history.back()), Es(r, "_forward-template", () => window.history.forward()));
        var a = Kr(e, "hy-push-state-start").pipe(Fr(t => {
            var {detail: e} = t;
            return Object.assign(e, {flipType: xs(e.anchor)})
        }), An()), c = Kr(e, "hy-push-state-ready").pipe(Fr(t => {
            var {detail: e} = t;
            return e
        }), An()), u = Kr(e, "hy-push-state-after").pipe(Fr(t => {
            var {detail: e} = t;
            return e
        }), An()), l = Kr(e, "hy-push-state-progress").pipe(Fr(t => {
            var {detail: e} = t;
            return e
        }), An()), h = Kr(e, "hy-push-state-networkerror").pipe(Fr(t => {
            var {detail: e} = t;
            return e
        }), An()), p = a.pipe(Fr(t => Object.assign(t, {main: document.getElementById("_main")})), Dn(t => {
            var {main: e} = t;
            return e.style.pointerEvents = "none"
        }), function t(e, r) {
            return r ? function (n) {
                return n.pipe(t(function (t, n) {
                    return Ur(e(t, n)).pipe(Fr(function (e, i) {
                        return r(t, e, n, i)
                    }))
                }))
            } : function (t) {
                return t.lift(new Jo(e))
            }
        }(Cs), Dn(t => {
            var {main: e} = t;
            return ci.call(e)
        }), An());
        l.subscribe(() => s.style.display = "block"), c.pipe(mn({replaceEls: [document.getElementById("_main")]})).subscribe(t => {
            var {replaceEls: [e]} = t;
            e.classList.remove("fade-in"), requestAnimationFrame(() => s.style.display = "none"), requestIdleCallback(() => Array.from(e.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")).forEach(Ss))
        }), u.pipe(mn({replaceEls: [document.getElementById("_main")], documentFragment: document})).subscribe(t => {
            var {replaceEls: [e], documentFragment: r} = t, o = r.querySelector("link[rel=canonical]");
            n && o && (n.href = o.href);
            var s = r.querySelector("meta[name=description]");
            i && s && (i.content = s.content), Array.from(e.querySelectorAll("li[id^='fn:']")).forEach(t => t.tabIndex = 0), Array.from(e.querySelectorAll("a[href^='#fn:']")).forEach(t => t.addEventListener("click", t => document.getElementById(t.currentTarget.hash.substr(1)).focus()))
        });
        var d = u.pipe(bn(Ts), An()), f = ys(a, c, Yr(d, h), {animationMain: o, settings: ws}).pipe(An());
        a.pipe(bn(t => {
            var e = Ro(Uo(350), p, f).toPromise();
            return t.transitionUntil(e), e
        })).subscribe(), p.subscribe(), f.subscribe();
        var m = new us(2e3);
        u.pipe(bn(t => {
            var {replaceEls: [e]} = t;
            return Ro(m.fetchImage(e), d, t => t).pipe(vn(a))
        }), mn([document.querySelector(".sidebar-bg")]), wi(), zr(t => {
            var [e, r] = t;
            return m.fade(e, r)
        })).subscribe(), d.subscribe(() => fs()), h.pipe(bn(t => {
            var {url: e} = t;
            s.style.display = "none";
            var r = document.getElementById("_main");
            return r.style.pointerEvents = "", ci.call(o.querySelector(".page")), ci.call(r), function (t, e) {
                var {pathname: r} = e, n = li("_error-template"), i = n.querySelector(".this-link");
                i && (i.href = r, i.textContent = r), t.appendChild(n), t.lastElementChild
            }(r, e), ui(r, _s, ws)
        })).subscribe(), window._pushState = function (t) {
            return window.customElements.define("hy-push-state", Ko), t
        }(e)
    }), window.ResizeObserver = window.ResizeObserver || n.a, o.a.polyfill()
}]);
