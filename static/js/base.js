! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ee.type(e);
        return "function" !== n && !ee.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (ee.isFunction(t)) return ee.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ee.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return ee.filter(t, e, n);
            t = ee.filter(t, e)
        }
        return ee.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return ee.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), ee.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = ee.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? ee.parseJSON(n) : n)
                } catch (e) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return K.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) ee.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = ee.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ee.nodeName(e, t) ? ee.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r = ee(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : ee.css(r[0], "display");
        return r.detach(), i
    }

    function b(e) {
        var t = K,
            n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (We = (We || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || ee.contains(e.ownerDocument, e) || (s = ee.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)
            if (t = Ge[i] + n, t in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += ee.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= ee.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= ee.css(e, "border" + Te[o] + "Width", !0, i))) : (s += ee.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += ee.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = _e(e),
            s = "border-box" === ee.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = w(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = s && (J.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function D(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : o[s] || (i = Ce(r), (n && "none" !== n || !i) && ve.set(r, "olddisplay", i ? n : ee.css(r, "display"))));
        for (s = 0; s < a; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function S() {
        return setTimeout(function() {
            Qe = void 0
        }), Qe = ee.now()
    }

    function A(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c = this,
            f = {},
            p = e.style,
            d = e.nodeType && Ce(e),
            h = ve.get(e, "fxshow");
        n.queue || (a = ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, ee.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ee.css(e, "display"), "none" === l && (l = b(e.nodeName)), "inline" === l && "none" === ee.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ke.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    d = !0
                }
                f[r] = h && h[r] || ee.style(e, r)
            }
        if (!ee.isEmptyObject(f)) {
            h ? "hidden" in h && (d = h.hidden) : h = ve.access(e, "fxshow", {}), o && (h.hidden = !d), d ? ee(e).show() : c.done(function() {
                ee(e).hide()
            }), c.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in f) ee.style(e, t, f[t])
            });
            for (r in f) s = L(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = ee.camelCase(n), i = t[r], o = e[n], ee.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ee.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0,
            s = tt.length,
            a = ee.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Qe || S(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: ee.extend({}, t),
                opts: ee.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || S(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (H(c, l.opts.specialEasing); o < s; o++)
            if (r = tt[o].call(l, e, c, l.opts)) return r;
        return ee.map(c, L, l), ee.isFunction(l.opts.start) && l.opts.start.call(e, l), ee.fx.timer(ee.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(de) || [];
            if (ee.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, ee.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, t) {
        var n, r, i = ee.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ee.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, r) {
        var i;
        if (ee.isArray(t)) ee.each(t, function(t, i) {
            n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ee.type(t)) r(e, t);
        else
            for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        _ = I.slice,
        X = I.concat,
        z = I.push,
        U = I.indexOf,
        V = {},
        Y = V.toString,
        G = V.hasOwnProperty,
        Q = "".trim,
        J = {},
        K = e.document,
        Z = "2.1.0",
        ee = function(e, t) {
            return new ee.fn.init(e, t)
        },
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    ee.fn = ee.prototype = {
        jquery: Z,
        constructor: ee,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = ee.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ee.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ee.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: z,
        sort: I.sort,
        splice: I.splice
    }, ee.extend = ee.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || ee.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (ee.isPlainObject(r) || (i = ee.isArray(r))) ? (i ? (i = !1, o = n && ee.isArray(n) ? n : []) : o = n && ee.isPlainObject(n) ? n : {}, s[t] = ee.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, ee.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ee.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            if ("object" !== ee.type(e) || e.nodeType || ee.isWindow(e)) return !1;
            try {
                if (e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = ee.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; o < s && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; o < s && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : Q.call(e)
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ee.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; o < s; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return X.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ee.isFunction(e)) return r = _.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || ee.guid++, i
        },
        now: Date.now,
        support: J
    }), ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, h, g, m;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !r) {
                if (i = ye.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (C.qsa && (!F || !F.test(e))) {
                    if (h = f = W, g = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = p(e), (f = t.getAttribute("id")) ? h = f.replace(be, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
                        g = xe.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, g.querySelectorAll(m)), n
                    } catch (e) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return w(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > N.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) N.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function f() {}

        function p(e, n) {
            var r, i, o, s, a, u, l, c = X[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = N.preFilter; a;) {
                r && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in N.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : X(e, u).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    g = r || b(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !r && t ? g : m(g, p, e, a, u),
                    y = n ? o || (r ? e : h || i) ? [] : s : v;
                if (n && n(v, y, a, u), i)
                    for (l = m(y, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else y = m(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, u) : Z.apply(s, y)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = N.relative[e[0].type], s = o || N.relative[" "], a = o ? 1 : 0, u = h(function(e) {
                    return e === t
                }, s, !0), l = h(function(e) {
                    return te.call(t, e) > -1
                }, s, !0), c = [function(e, n, r) {
                    return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; a < i; a++)
                if (n = N.relative[e[a].type]) c = [h(g(c), n)];
                else {
                    if (n = N.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (r = ++a; r < i && !N.relative[e[r].type]; r++);
                        return v(a > 1 && g(c), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = j,
                        x = r || o && N.find.TAG("*", l),
                        b = B += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, v, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b, j = y), g
                };
            return i ? r(s) : s
        }

        function b(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function w(e, t, n, r) {
            var i, o, s, a, u, l = p(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && C.getById && 9 === t.nodeType && O && N.relative[o[1].type]) {
                    if (t = (N.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !N.relative[a = s.type]);)
                    if ((u = N.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return D(e, l)(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
        }
        var T, C, N, k, E, D, j, S, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
            $ = e.document,
            B = 0,
            I = 0,
            _ = n(),
            X = n(),
            z = n(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = "undefined",
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            K = Q.push,
            Z = Q.push,
            ee = Q.slice,
            te = Q.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            se = "\\[" + re + "*(" + ie + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            pe = new RegExp(ae),
            de = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = ee.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : $,
                r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !E(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), C.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), C.getById = i(function(e) {
                return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), C.getById ? (N.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, N.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete N.find.ID, N.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), N.find.TAG = C.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== V) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, N.find.CLASS = C.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== V && O) return t.getElementsByClassName(e)
            }, P = [], F = [], (C.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (C.matchesSelector = ve.test(M = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                C.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !C.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : S ? te.call(S, e) - te.call(S, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : S ? te.call(S, e) - te.call(S, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, n) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), C.matchesSelector && O && (!P || !P.test(n)) && (!F || !F.test(n))) try {
                var r = M.call(e, n);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = N.attrHandle[t.toLowerCase()],
                r = n && G.call(N.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : C.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !C.detectDuplicates, S = !C.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += k(t);
            return n
        }, N = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pe.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [B, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = N.pseudos[e] || N.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], N.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = D(e.replace(ue, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !N.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, N.pseudos.nth = N.pseudos.eq;
        for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) N.pseudos[T] = a(T);
        for (T in {
                submit: !0,
                reset: !0
            }) N.pseudos[T] = u(T);
        return f.prototype = N.filters = N.pseudos, N.setFilters = new f, D = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = z[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = z(e, x(i, r))
            }
            return o
        }, C.sortStable = W.split("").sort(U).join("") === W, C.detectDuplicates = !!A, L(), C.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ee.find = ie, ee.expr = ie.selectors, ee.expr[":"] = ee.expr.pseudos, ee.unique = ie.uniqueSort, ee.text = ie.getText, ee.isXMLDoc = ie.isXML, ee.contains = ie.contains;
    var oe = ee.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    ee.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ee.find.matchesSelector(r, e) ? [r] : [] : ee.find.matches(e, ee.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ee.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(ee(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (ee.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) ee.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? ee.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? ee(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = ee.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ee ? t[0] : t, ee.merge(this, ee.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), se.test(n[1]) && ee.isPlainObject(t))
                        for (n in t) ee.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ee.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(ee) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ee.makeArray(e, this))
        };
    ce.prototype = ee.fn, ue = ee(K);
    var fe = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ee.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && ee(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ee.fn.extend({
        has: function(e) {
            var t = ee(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ee.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ee.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ee.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(ee(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ee.unique(ee.merge(this.get(), ee(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ee.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ee.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ee.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ee.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ee.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ee.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ee.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ee.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ee.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ee.merge([], e.childNodes)
        }
    }, function(e, t) {
        ee.fn[e] = function(n, r) {
            var i = ee.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ee.filter(r, i)), this.length > 1 && (pe[e] || ee.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g,
        he = {};
    ee.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : ee.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && a < s; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function t(n) {
                            ee.each(n, function(n, r) {
                                var i = ee.type(r);
                                "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && ee.each(arguments, function(e, t) {
                        for (var n;
                            (n = ee.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (n <= s && s--, n <= a && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ee.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, ee.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ee.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ee.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ee.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ee.Deferred(function(n) {
                            ee.each(t, function(t, o) {
                                var s = ee.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ee.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ee.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ee.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = _.call(arguments),
                s = o.length,
                a = 1 !== s || e && ee.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : ee.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && ee.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    ee.fn.ready = function(e) {
        return ee.ready.promise().done(e), this
    }, ee.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ee.readyWait++ : ee.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ee.readyWait : ee.isReady) || (ee.isReady = !0, e !== !0 && --ee.readyWait > 0 || (ge.resolveWith(K, [ee]), ee.fn.trigger && ee(K).trigger("ready").off("ready")))
        }
    }), ee.ready.promise = function(t) {
        return ge || (ge = ee.Deferred(), "complete" === K.readyState ? setTimeout(ee.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, ee.ready.promise();
    var me = ee.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === ee.type(n)) {
            i = !0;
            for (a in n) ee.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, ee.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(ee(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    ee.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = ee.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, ee.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (ee.isEmptyObject(o)) ee.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ee.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                ee.isArray(t) ? r = t.concat(t.map(ee.camelCase)) : (i = ee.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !ee.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    ee.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), ee.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) r = s[n].name, 0 === r.indexOf("data-") && (r = ee.camelCase(r.slice(5)), u(o, r, i[r]));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, r = ee.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), ee.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || ee.isArray(n) ? r = ve.access(e, t, ee.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ee.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ee._queueHooks(e, t),
                s = function() {
                    ee.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: ee.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), ee.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ee.queue(this, e, t);
                ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ee.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ee.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ee.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div"));
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>", J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    J.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        De = /^(?:mouse|contextmenu)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        Se = /^([^.]*)(?:\.(.+)|)$/;
    ee.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ee.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return typeof ee !== ke && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(de) || [""], l = t.length; l--;) a = Se.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = ee.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ee.event.special[d] || {}, c = ee.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ee.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ee.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;)
                    if (a = Se.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = ee.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ee.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) ee.event.remove(e, d + t[l], n, r, !0);
                ee.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || K],
                d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + ee.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[ee.expando] ? t : new ee.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ee.makeArray(n, [t]), f = ee.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !ee.isWindow(r)) {
                    for (u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || K) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && ee.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !ee.acceptData(r) || l && ee.isFunction(r[d]) && !ee.isWindow(r) && (a = r[l], a && (r[l] = null), ee.event.triggered = d, r[d](), ee.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = ee.event.fix(e);
            var t, n, r, i, o, s = [],
                a = _.call(arguments),
                u = (ve.get(this, "events") || {})[e.type] || [],
                l = ee.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = ee.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((ee.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; n < a; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ee(i, this).index(u) >= 0 : ee.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ee.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = De.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ee.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ee.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return ee.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ee.extend(new ee.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ee.event.trigger(i, null, t) : ee.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ee.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, ee.Event = function(e, t) {
        return this instanceof ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && ee.extend(this, t), this.timeStamp = e && e.timeStamp || ee.now(), void(this[ee.expando] = !0)) : new ee.Event(e, t)
    }, ee.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || ee.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), J.focusinBubbles || ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ee.event.simulate(t, e.target, ee.event.fix(e), !0)
        };
        ee.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), ee.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return ee().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = ee.guid++)), this.each(function() {
                ee.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ee(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                ee.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ee.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ee.event.trigger(e, t, n, !0)
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Le = /<([\w:]+)/,
        qe = /<|&#?\w+;/,
        He = /<(?:script|style|link)/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i,
        Pe = /^true\/(.*)/,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, ee.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = ee.contains(e.ownerDocument, e);
            if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; r < i; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++) m(o[r], s[r]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === ee.type(i)) ee.merge(f, i.nodeType ? [i] : i);
                    else if (qe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                ee.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || ee.inArray(i, r) === -1) && (u = ee.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o, s, a = ee.event.special, u = 0; void 0 !== (n = e[u]); u++) {
                if (ee.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (r = Object.keys(t.events || {}), r.length)
                        for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? ee.event.remove(n, i) : ee.removeEvent(n, i, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), ee.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? ee.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ee.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ee.cleanData(v(n)), n.parentNode && (t && ee.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ee.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ee.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ee.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ee.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = X.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                g = ee.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !J.checkClone && Oe.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = ee.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = ee.map(v(n, "script"), d), o = i.length; u < l; u++) s = n, u !== f && (s = ee.clone(s, !0, !0), o && ee.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, ee.map(i, h), u = 0; u < o; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && ee.contains(a, s) && (s.src ? ee._evalUrl && ee._evalUrl(s.src) : ee.globalEval(s.textContent.replace(Me, "")))
            }
            return this
        }
    }), ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ee.fn[e] = function(e) {
            for (var n, r = [], i = ee(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), ee(i[s])[t](n), z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {},
        Be = /^margin/,
        Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        _e = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", o.appendChild(s);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(s)
        }
        var n, r, i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            o = K.documentElement,
            s = K.createElement("div"),
            a = K.createElement("div");
        a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(a), e.getComputedStyle && ee.extend(J, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(K.createElement("div"));
                return n.style.cssText = a.style.cssText = i, n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(s), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(s), a.innerHTML = "", t
            }
        })
    }(), ee.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var Xe = /^(none|table(?!-c[ea]).+)/,
        ze = new RegExp("^(" + we + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    ee.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = ee.camelCase(t),
                    u = e.style;
                return t = ee.cssProps[a] || (ee.cssProps[a] = C(u, a)), s = ee.cssHooks[t] || ee.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ee.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ee.cssNumber[a] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = ee.camelCase(t);
            return t = ee.cssProps[a] || (ee.cssProps[a] = C(e.style, a)), s = ee.cssHooks[t] || ee.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || ee.isNumeric(o) ? o || 0 : i) : i
        }
    }), ee.each(["height", "width"], function(e, t) {
        ee.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return 0 === e.offsetWidth && Xe.test(ee.css(e, "display")) ? ee.swap(e, Ve, function() {
                    return E(e, t, r)
                }) : E(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === ee.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ee.cssHooks.marginRight = T(J.reliableMarginRight, function(e, t) {
        if (t) return ee.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"])
    }), ee.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ee.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Be.test(e) || (ee.cssHooks[e + t].set = N)
    }), ee.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (ee.isArray(t)) {
                    for (r = _e(e), i = t.length; s < i; s++) o[t[s]] = ee.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? ee(this).show() : ee(this).hide()
            })
        }
    }), ee.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ee.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ee.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ee.fx = j.prototype.init, ee.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [q],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Ze.exec(t),
                    o = i && i[3] || (ee.cssNumber[e] ? "" : "px"),
                    s = (ee.cssNumber[e] || "px" !== o && +r) && Ze.exec(ee.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, ee.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ee.Animation = ee.extend(O, {
            tweener: function(e, t) {
                ee.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), ee.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ee.extend({}, e) : {
                complete: n || !n && t || ee.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ee.isFunction(t) && t
            };
            return r.duration = ee.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ee.fx.speeds ? ee.fx.speeds[r.duration] : ee.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ee.isFunction(r.old) && r.old.call(this), r.queue && ee.dequeue(this, r.queue)
            }, r
        }, ee.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ee.isEmptyObject(e),
                    o = ee.speed(t, n, r),
                    s = function() {
                        var t = O(this, ee.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ee.timers,
                        s = ve.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || ee.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ee.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, ee.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ee.each(["toggle", "show", "hide"], function(e, t) {
            var n = ee.fn[t];
            ee.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }), ee.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ee.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ee.timers = [], ee.fx.tick = function() {
            var e, t = 0,
                n = ee.timers;
            for (Qe = ee.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || ee.fx.stop(), Qe = void 0
        }, ee.fx.timer = function(e) {
            ee.timers.push(e), e() ? ee.fx.start() : ee.timers.pop()
        }, ee.fx.interval = 13, ee.fx.start = function() {
            Je || (Je = setInterval(ee.fx.tick, ee.fx.interval))
        }, ee.fx.stop = function() {
            clearInterval(Je), Je = null
        }, ee.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ee.fn.delay = function(e, t) {
            return e = ee.fx ? ee.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = K.createElement("input"),
                t = K.createElement("select"),
                n = t.appendChild(K.createElement("option"));
            e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
        }();
    var rt, it, ot = ee.expr.attrHandle;
    ee.fn.extend({
        attr: function(e, t) {
            return me(this, ee.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ee.removeAttr(this, e)
            })
        }
    }), ee.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? ee.prop(e, t, n) : (1 === o && ee.isXMLDoc(e) || (t = t.toLowerCase(), r = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ee.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ee.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ee.propFix[n] || n, ee.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!J.radioValue && "radio" === t && ee.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? ee.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ee.each(ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || ee.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    ee.fn.extend({
        prop: function(e, t) {
            return me(this, ee.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ee.propFix[e] || e]
            })
        }
    }), ee.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !ee.isXMLDoc(e), o && (t = ee.propFix[t] || t, i = ee.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), J.optSelected || (ee.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ee.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    ee.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (ee.isFunction(e)) return this.each(function(t) {
                ee(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; u < l; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = ee.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (ee.isFunction(e)) return this.each(function(t) {
                ee(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; u < l; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? ee.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ee.isFunction(e) ? this.each(function(n) {
                ee(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ee(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else n !== ke && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    ee.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ee.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ee(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ee.isArray(i) && (i = ee.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = ee.valHooks[i.type] || ee.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }
    }), ee.extend({
        valHooks: {
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u], (n.selected || u === i) && (J.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ee.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ee(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ee.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ee.inArray(ee(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ee.each(["radio", "checkbox"], function() {
        ee.valHooks[this] = {
            set: function(e, t) {
                if (ee.isArray(t)) return e.checked = ee.inArray(ee(e).val(), t) >= 0
            }
        }, J.checkOn || (ee.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ee.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ee.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = ee.now(),
        ct = /\?/;
    ee.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ee.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || ee.error("Invalid XML: " + e), t
    };
    var ft, pt, dt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vt = /^(?:GET|HEAD)$/,
        yt = /^\/\//,
        xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        wt = {},
        Tt = "*/".concat("*");
    try {
        pt = location.href
    } catch (e) {
        pt = K.createElement("a"), pt.href = "", pt = pt.href
    }
    ft = xt.exec(pt.toLowerCase()) || [], ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ee.parseJSON,
                "text xml": ee.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, ee.ajaxSettings), t) : M(ee.ajaxSettings, e)
        },
        ajaxPrefilter: F(bt),
        ajaxTransport: F(wt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ee.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (ee.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --ee.active || ee.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = ee.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? ee(p) : ee.event,
                h = ee.Deferred(),
                g = ee.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ee.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ee.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
            l = f.global, l && 0 === ee.active++ && ee.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (ee.lastModified[i] && w.setRequestHeader("If-Modified-Since", ee.lastModified[i]), ee.etag[i] && w.setRequestHeader("If-None-Match", ee.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](f[c]);
            if (r = P(wt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ee.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ee.get(e, void 0, t, "script")
        }
    }), ee.each(["get", "post"], function(e, t) {
        ee[t] = function(e, n, r, i) {
            return ee.isFunction(n) && (i = i || r, r = n, n = void 0), ee.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ee.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ee._evalUrl = function(e) {
        return ee.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, ee.fn.extend({
        wrapAll: function(e) {
            var t;
            return ee.isFunction(e) ? this.each(function(t) {
                ee(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ee.isFunction(e) ? this.each(function(t) {
                ee(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ee(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ee.isFunction(e);
            return this.each(function(n) {
                ee(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ee.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, ee.expr.filters.visible = function(e) {
        return !ee.expr.filters.hidden(e)
    };
    var Ct = /%20/g,
        Nt = /\[\]$/,
        kt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    ee.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = ee.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional), ee.isArray(e) || e.jquery && !ee.isPlainObject(e)) ee.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Ct, "+")
    }, ee.fn.extend({
        serialize: function() {
            return ee.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ee.prop(this, "elements");
                return e ? ee.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ee(this).is(":disabled") && Dt.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = ee(this).val();
                return null == n ? null : ee.isArray(n) ? ee.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }), ee.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var jt = 0,
        St = {},
        At = {
            0: 200,
            1223: 204
        },
        Lt = ee.ajaxSettings.xhr();
    e.ActiveXObject && ee(e).on("unload", function() {
        for (var e in St) St[e]()
    }), J.cors = !!Lt && "withCredentials" in Lt, J.ajax = Lt = !!Lt, ee.ajaxTransport(function(e) {
        var t;
        if (J.cors || Lt && !e.crossDomain) return {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++jt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete St[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = St[s] = t("abort"), o.send(e.hasContent && e.data || null)
            },
            abort: function() {
                t && t()
            }
        }
    }), ee.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ee.globalEval(e), e
            }
        }
    }), ee.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ee.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = ee("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var qt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || ee.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), ee.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || ee.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && ee.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), ee.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var r = se.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ee.buildFragment([e], t, i), i && i.length && ee(i).remove(), ee.merge([], r.childNodes))
    };
    var Ot = ee.fn.load;
    ee.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), ee.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && ee.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? ee("<div>").append(ee.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, ee.expr.filters.animated = function(e) {
        return ee.grep(ee.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ft = e.document.documentElement;
    ee.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = ee.css(e, "position"),
                f = ee(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = ee.css(e, "top"), u = ee.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ee.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, ee.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ee.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, ee.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ee.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ee.nodeName(e[0], "html") || (r = e.offset()), r.top += ee.css(e[0], "borderTopWidth", !0), r.left += ee.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ee.css(n, "marginTop", !0),
                    left: t.left - r.left - ee.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ft; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position");) e = e.offsetParent;
                return e || Ft
            })
        }
    }), ee.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        ee.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), ee.each(["top", "left"], function(e, t) {
        ee.cssHooks[t] = T(J.pixelPosition, function(e, n) {
            if (n) return n = w(e, t), Ie.test(n) ? ee(e).position()[t] + "px" : n
        })
    }), ee.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ee.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ee.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return ee.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ee.css(t, n, s) : ee.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ee.fn.size = function() {
        return this.length
    }, ee.fn.andSelf = ee.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ee
    });
    var Pt = e.jQuery,
        Mt = e.$;
    return ee.noConflict = function(t) {
        return e.$ === ee && (e.$ = Mt), t && e.jQuery === ee && (e.jQuery = Pt), ee
    }, typeof t === ke && (e.jQuery = e.$ = ee), ee
});
(function() {
    function n(n, r, e) {
        for (var t = (e || 0) - 1, o = n ? n.length : 0; ++t < o;)
            if (n[t] === r) return t;
        return -1
    }

    function r(r, e) {
        var t = typeof e;
        if (r = r.cache, "boolean" == t || null == e) return r[e] ? 0 : -1;
        "number" != t && "string" != t && (t = "object");
        var o = "number" == t ? e : _ + e;
        return r = (r = r[t]) && r[o], "object" == t ? r && n(r, e) > -1 ? 0 : -1 : r ? 0 : -1
    }

    function e(n) {
        var r = this.cache,
            e = typeof n;
        if ("boolean" == e || null == n) r[n] = !0;
        else {
            "number" != e && "string" != e && (e = "object");
            var t = "number" == e ? n : _ + n,
                o = r[e] || (r[e] = {});
            "object" == e ? (o[t] || (o[t] = [])).push(n) : o[t] = !0
        }
    }

    function t(n) {
        return n.charCodeAt(0)
    }

    function o(n, r) {
        for (var e = n.criteria, t = r.criteria, o = -1, u = e.length; ++o < u;) {
            var a = e[o],
                i = t[o];
            if (a !== i) {
                if (a > i || "undefined" == typeof a) return 1;
                if (a < i || "undefined" == typeof i) return -1
            }
        }
        return n.index - r.index
    }

    function u(n) {
        var r = -1,
            t = n.length,
            o = n[0],
            u = n[t / 2 | 0],
            a = n[t - 1];
        if (o && "object" == typeof o && u && "object" == typeof u && a && "object" == typeof a) return !1;
        var i = l();
        i.false = i.null = i.true = i.undefined = !1;
        var c = l();
        for (c.array = n, c.cache = i, c.push = e; ++r < t;) c.push(n[r]);
        return c
    }

    function a(n) {
        return "\\" + Z[n]
    }

    function i() {
        return g.pop() || []
    }

    function l() {
        return y.pop() || {
            array: null,
            cache: null,
            criteria: null,
            false: !1,
            index: 0,
            null: !1,
            number: null,
            object: null,
            push: null,
            string: null,
            true: !1,
            undefined: !1,
            value: null
        }
    }

    function c(n) {
        return "function" != typeof n.toString && "string" == typeof(n + "")
    }

    function f(n) {
        n.length = 0, g.length < w && g.push(n)
    }

    function s(n) {
        var r = n.cache;
        r && s(r), n.array = n.cache = n.criteria = n.object = n.number = n.string = n.value = null, y.length < w && y.push(n)
    }

    function p(n, r, e) {
        r || (r = 0), "undefined" == typeof e && (e = n ? n.length : 0);
        for (var t = -1, o = e - r || 0, u = Array(o < 0 ? 0 : o); ++t < o;) u[t] = n[r + t];
        return u
    }

    function h(e) {
        function g(n) {
            return n && "object" == typeof n && !st(n) && Ke.call(n, "__wrapped__") ? n : new y(n)
        }

        function y(n, r) {
            this.__chain__ = !!r, this.__wrapped__ = n
        }

        function w(n) {
            function r() {
                if (t) {
                    var n = p(t);
                    Ue.apply(n, arguments)
                }
                if (this instanceof r) {
                    var u = rn(e.prototype),
                        a = e.apply(u, n || arguments);
                    return Fn(a) ? a : u
                }
                return e.apply(o, n || arguments)
            }
            var e = n[0],
                t = n[2],
                o = n[4];
            return ft(r, n), r
        }

        function Z(n, r, e, t, o) {
            if (e) {
                var u = e(n);
                if ("undefined" != typeof u) return u
            }
            var a = Fn(n);
            if (!a) return n;
            var l = $e.call(n);
            if (!G[l] || !lt.nodeClass && c(n)) return n;
            var s = at[l];
            switch (l) {
                case H:
                case W:
                    return new s(+n);
                case K:
                case V:
                    return new s(n);
                case M:
                    return u = s(n.source, O.exec(n)), u.lastIndex = n.lastIndex, u
            }
            var h = st(n);
            if (r) {
                var v = !t;
                t || (t = i()), o || (o = i());
                for (var g = t.length; g--;)
                    if (t[g] == n) return o[g];
                u = h ? s(n.length) : {}
            } else u = h ? p(n) : xt({}, n);
            return h && (Ke.call(n, "index") && (u.index = n.index), Ke.call(n, "input") && (u.input = n.input)), r ? (t.push(n), o.push(u), (h ? wt : Ct)(n, function(n, a) {
                u[a] = Z(n, r, e, t, o)
            }), v && (f(t), f(o)), u) : u
        }

        function rn(n, r) {
            return Fn(n) ? Xe(n) : {}
        }

        function en(n, r, e) {
            if ("function" != typeof n) return ue;
            if ("undefined" == typeof r || !("prototype" in n)) return n;
            var t = n.__bindData__;
            if ("undefined" == typeof t && (lt.funcNames && (t = !n.name), t = t || !lt.funcDecomp, !t)) {
                var o = qe.call(n);
                lt.funcNames || (t = !S.test(o)), t || (t = N.test(o), ft(n, t))
            }
            if (t === !1 || t !== !0 && 1 & t[1]) return n;
            switch (e) {
                case 1:
                    return function(e) {
                        return n.call(r, e)
                    };
                case 2:
                    return function(e, t) {
                        return n.call(r, e, t)
                    };
                case 3:
                    return function(e, t, o) {
                        return n.call(r, e, t, o)
                    };
                case 4:
                    return function(e, t, o, u) {
                        return n.call(r, e, t, o, u)
                    }
            }
            return qr(n, r)
        }

        function tn(n) {
            function r() {
                var n = l ? a : this;
                if (o) {
                    var v = p(o);
                    Ue.apply(v, arguments)
                }
                if ((u || f) && (v || (v = p(arguments)), u && Ue.apply(v, u), f && v.length < i)) return t |= 16, tn([e, s ? t : t & -4, v, null, a, i]);
                if (v || (v = arguments), c && (e = n[h]), this instanceof r) {
                    n = rn(e.prototype);
                    var g = e.apply(n, v);
                    return Fn(g) ? g : n
                }
                return e.apply(n, v)
            }
            var e = n[0],
                t = n[1],
                o = n[2],
                u = n[3],
                a = n[4],
                i = n[5],
                l = 1 & t,
                c = 2 & t,
                f = 4 & t,
                s = 8 & t,
                h = e;
            return ft(r, n), r
        }

        function on(e, t) {
            var o = -1,
                a = yn(),
                i = e ? e.length : 0,
                l = i >= m && a === n,
                c = [];
            if (l) {
                var f = u(t);
                f ? (a = r, t = f) : l = !1
            }
            for (; ++o < i;) {
                var p = e[o];
                a(t, p) < 0 && c.push(p)
            }
            return l && s(t), c
        }

        function an(n, r, e, t) {
            for (var o = (t || 0) - 1, u = n ? n.length : 0, a = []; ++o < u;) {
                var i = n[o];
                if (i && "object" == typeof i && "number" == typeof i.length && (st(i) || mn(i))) {
                    r || (i = an(i, r, e));
                    var l = -1,
                        c = i.length,
                        f = a.length;
                    for (a.length += c; ++l < c;) a[f++] = i[l]
                } else e || a.push(i)
            }
            return a
        }

        function ln(n, r, e, t, o, u) {
            if (e) {
                var a = e(n, r);
                if ("undefined" != typeof a) return !!a
            }
            if (n === r) return 0 !== n || 1 / n == 1 / r;
            var l = typeof n,
                s = typeof r;
            if (!(n !== n || n && Y[l] || r && Y[s])) return !1;
            if (null == n || null == r) return n === r;
            var p = $e.call(n),
                h = $e.call(r);
            if (p == F && (p = U), h == F && (h = U), p != h) return !1;
            switch (p) {
                case H:
                case W:
                    return +n == +r;
                case K:
                    return n != +n ? r != +r : 0 == n ? 1 / n == 1 / r : n == +r;
                case M:
                case V:
                    return n == Ae(r)
            }
            var v = p == B;
            if (!v) {
                var g = Ke.call(n, "__wrapped__"),
                    y = Ke.call(r, "__wrapped__");
                if (g || y) return ln(g ? n.__wrapped__ : n, y ? r.__wrapped__ : r, e, t, o, u);
                if (p != U || !lt.nodeClass && (c(n) || c(r))) return !1;
                var b = !lt.argsObject && mn(n) ? Oe : n.constructor,
                    d = !lt.argsObject && mn(r) ? Oe : r.constructor;
                if (b != d && !($n(b) && b instanceof b && $n(d) && d instanceof d) && "constructor" in n && "constructor" in r) return !1
            }
            var _ = !o;
            o || (o = i()), u || (u = i());
            for (var m = o.length; m--;)
                if (o[m] == n) return u[m] == r;
            var w = 0;
            if (a = !0, o.push(n), u.push(r), v) {
                if (m = n.length, w = r.length, a = w == m, a || t)
                    for (; w--;) {
                        var x = m,
                            j = r[w];
                        if (t)
                            for (; x-- && !(a = ln(n[x], j, e, t, o, u)););
                        else if (!(a = ln(n[w], j, e, t, o, u))) break
                    }
            } else kt(r, function(r, i, l) {
                if (Ke.call(l, i)) return w++, a = Ke.call(n, i) && ln(n[i], r, e, t, o, u)
            }), a && !t && kt(n, function(n, r, e) {
                if (Ke.call(e, r)) return a = --w > -1
            });
            return o.pop(), u.pop(), _ && (f(o), f(u)), a
        }

        function cn(n, r, e, t, o) {
            (st(r) ? or : Ct)(r, function(r, u) {
                var a, i, l = r,
                    c = n[u];
                if (r && ((i = st(r)) || Pt(r))) {
                    for (var f = t.length; f--;)
                        if (a = t[f] == r) {
                            c = o[f];
                            break
                        }
                    if (!a) {
                        var s;
                        e && (l = e(c, r), (s = "undefined" != typeof l) && (c = l)), s || (c = i ? st(c) ? c : [] : Pt(c) ? c : {}), t.push(r), o.push(c), s || cn(c, r, e, t, o)
                    }
                } else e && (l = e(c, r), "undefined" == typeof l && (l = r)), "undefined" != typeof l && (c = l);
                n[u] = c
            })
        }

        function fn(n, r) {
            return n + We(ut() * (r - n + 1))
        }

        function sn(e, t, o) {
            var a = -1,
                l = yn(),
                c = e ? e.length : 0,
                p = [],
                h = !t && c >= m && l === n,
                v = o || h ? i() : p;
            if (h) {
                var g = u(v);
                l = r, v = g
            }
            for (; ++a < c;) {
                var y = e[a],
                    b = o ? o(y, a, e) : y;
                (t ? !a || v[v.length - 1] !== b : l(v, b) < 0) && ((o || h) && v.push(b), p.push(y))
            }
            return h ? (f(v.array), s(v)) : o && f(v), p
        }

        function pn(n) {
            return function(r, e, t) {
                var o = {};
                if (e = g.createCallback(e, t, 3), st(r))
                    for (var u = -1, a = r.length; ++u < a;) {
                        var i = r[u];
                        n(o, i, e(i, u, r), r)
                    } else wt(r, function(r, t, u) {
                        n(o, r, e(r, t, u), u)
                    });
                return o
            }
        }

        function hn(n, r, e, t, o, u) {
            var a = 1 & r,
                i = 2 & r,
                l = 4 & r,
                c = 16 & r,
                f = 32 & r;
            if (!i && !$n(n)) throw new Ie;
            c && !e.length && (r &= -17, c = e = !1), f && !t.length && (r &= -33, f = t = !1);
            var s = n && n.__bindData__;
            if (s && s !== !0) return s = p(s), s[2] && (s[2] = p(s[2])), s[3] && (s[3] = p(s[3])), !a || 1 & s[1] || (s[4] = o), !a && 1 & s[1] && (r |= 8), !l || 4 & s[1] || (s[5] = u), c && Ue.apply(s[2] || (s[2] = []), e), f && Je.apply(s[3] || (s[3] = []), t), s[1] |= r, hn.apply(null, s);
            var h = 1 == r || 17 === r ? w : tn;
            return h([n, r, e, t, o, u])
        }

        function vn() {
            X.shadowedProps = D, X.array = X.bottom = X.loop = X.top = "", X.init = "iterable", X.useHas = !0;
            for (var n, r = 0; n = arguments[r]; r++)
                for (var e in n) X[e] = n[e];
            var t = X.args;
            X.firstArg = /^[^,]+/.exec(t)[0];
            var o = Ce("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + t + ") {\n" + ct(X) + "\n}");
            return o(en, q, Ne, Ke, d, mn, st, zn, X.keys, Re, Y, it, V, Te, $e)
        }

        function gn(n) {
            return bt[n]
        }

        function yn() {
            var r = (r = g.indexOf) === Cr ? n : r;
            return r
        }

        function bn(n) {
            return "function" == typeof n && Fe.test(n)
        }

        function dn(n) {
            var r, e;
            return !(!(n && $e.call(n) == U && (r = n.constructor, !$n(r) || r instanceof r)) || !lt.argsClass && mn(n) || !lt.nodeClass && c(n)) && (lt.ownLast ? (kt(n, function(n, r, t) {
                return e = Ke.call(t, r), !1
            }), e !== !1) : (kt(n, function(n, r) {
                e = r
            }), "undefined" == typeof e || Ke.call(n, e)))
        }

        function _n(n) {
            return dt[n]
        }

        function mn(n) {
            return n && "object" == typeof n && "number" == typeof n.length && $e.call(n) == F || !1
        }

        function wn(n, r, e, t) {
            return "boolean" != typeof r && null != r && (t = e, e = r, r = !1), Z(n, r, "function" == typeof e && en(e, t, 1))
        }

        function xn(n, r, e) {
            return Z(n, !0, "function" == typeof r && en(r, e, 1))
        }

        function jn(n, r) {
            var e = rn(n);
            return r ? xt(e, r) : e
        }

        function kn(n, r, e) {
            var t;
            return r = g.createCallback(r, e, 3), Ct(n, function(n, e, o) {
                if (r(n, e, o)) return t = e, !1
            }), t
        }

        function Cn(n, r, e) {
            var t;
            return r = g.createCallback(r, e, 3), En(n, function(n, e, o) {
                if (r(n, e, o)) return t = e, !1
            }), t
        }

        function Pn(n, r, e) {
            var t = [];
            kt(n, function(n, r) {
                t.push(r, n)
            });
            var o = t.length;
            for (r = en(r, e, 3); o-- && r(t[o--], t[o], n) !== !1;);
            return n
        }

        function En(n, r, e) {
            var t = ht(n),
                o = t.length;
            for (r = en(r, e, 3); o--;) {
                var u = t[o];
                if (r(n[u], u, n) === !1) break
            }
            return n
        }

        function On(n) {
            var r = [];
            return kt(n, function(n, e) {
                $n(n) && r.push(e)
            }), r.sort()
        }

        function Sn(n, r) {
            return !!n && Ke.call(n, r)
        }

        function An(n) {
            for (var r = -1, e = ht(n), t = e.length, o = {}; ++r < t;) {
                var u = e[r];
                o[n[u]] = u
            }
            return o
        }

        function In(n) {
            return n === !0 || n === !1 || n && "object" == typeof n && $e.call(n) == H || !1
        }

        function Ln(n) {
            return n && "object" == typeof n && $e.call(n) == W || !1
        }

        function Nn(n) {
            return n && 1 === n.nodeType || !1
        }

        function Rn(n) {
            var r = !0;
            if (!n) return r;
            var e = $e.call(n),
                t = n.length;
            return e == B || e == V || (lt.argsClass ? e == F : mn(n)) || e == U && "number" == typeof t && $n(n.splice) ? !t : (Ct(n, function() {
                return r = !1
            }), r)
        }

        function Tn(n, r, e, t) {
            return ln(n, r, "function" == typeof e && en(e, t, 2))
        }

        function Dn(n) {
            return Ze(n) && !nt(parseFloat(n))
        }

        function $n(n) {
            return "function" == typeof n
        }

        function Fn(n) {
            return !(!n || !Y[typeof n])
        }

        function Bn(n) {
            return Wn(n) && n != +n
        }

        function Hn(n) {
            return null === n
        }

        function Wn(n) {
            return "number" == typeof n || n && "object" == typeof n && $e.call(n) == K || !1
        }

        function qn(n) {
            return n && Y[typeof n] && $e.call(n) == M || !1
        }

        function zn(n) {
            return "string" == typeof n || n && "object" == typeof n && $e.call(n) == V || !1
        }

        function Kn(n) {
            return "undefined" == typeof n
        }

        function Un(n, r, e) {
            var t = {};
            return r = g.createCallback(r, e, 3), Ct(n, function(n, e, o) {
                t[e] = r(n, e, o)
            }), t
        }

        function Mn(n) {
            var r = arguments,
                e = 2;
            if (!Fn(n)) return n;
            if ("number" != typeof r[2] && (e = r.length), e > 3 && "function" == typeof r[e - 2]) var t = en(r[--e - 1], r[e--], 2);
            else e > 2 && "function" == typeof r[e - 1] && (t = r[--e]);
            for (var o = p(arguments, 1, e), u = -1, a = i(), l = i(); ++u < e;) cn(n, o[u], t, a, l);
            return f(a), f(l), n
        }

        function Vn(n, r, e) {
            var t = {};
            if ("function" != typeof r) {
                var o = [];
                kt(n, function(n, r) {
                    o.push(r)
                }), o = on(o, an(arguments, !0, !1, 1));
                for (var u = -1, a = o.length; ++u < a;) {
                    var i = o[u];
                    t[i] = n[i]
                }
            } else r = g.createCallback(r, e, 3), kt(n, function(n, e, o) {
                r(n, e, o) || (t[e] = n)
            });
            return t
        }

        function Gn(n) {
            for (var r = -1, e = ht(n), t = e.length, o = we(t); ++r < t;) {
                var u = e[r];
                o[r] = [u, n[u]]
            }
            return o
        }

        function Jn(n, r, e) {
            var t = {};
            if ("function" != typeof r)
                for (var o = -1, u = an(arguments, !0, !1, 1), a = Fn(n) ? u.length : 0; ++o < a;) {
                    var i = u[o];
                    i in n && (t[i] = n[i])
                } else r = g.createCallback(r, e, 3), kt(n, function(n, e, o) {
                    r(n, e, o) && (t[e] = n)
                });
            return t
        }

        function Qn(n, r, e, t) {
            var o = st(n);
            if (null == e)
                if (o) e = [];
                else {
                    var u = n && n.constructor,
                        a = u && u.prototype;
                    e = rn(a)
                }
            return r && (r = g.createCallback(r, t, 4), (o ? wt : Ct)(n, function(n, t, o) {
                return r(e, n, t, o)
            })), e
        }

        function Xn(n) {
            for (var r = -1, e = ht(n), t = e.length, o = we(t); ++r < t;) o[r] = n[e[r]];
            return o
        }

        function Yn(n) {
            var r = arguments,
                e = -1,
                t = an(r, !0, !1, 1),
                o = r[2] && r[2][r[1]] === n ? 1 : t.length,
                u = we(o);
            for (lt.unindexedChars && zn(n) && (n = n.split("")); ++e < o;) u[e] = n[t[e]];
            return u
        }

        function Zn(n, r, e) {
            var t = -1,
                o = yn(),
                u = n ? n.length : 0,
                a = !1;
            return e = (e < 0 ? et(0, u + e) : e) || 0, st(n) ? a = o(n, r, e) > -1 : "number" == typeof u ? a = (zn(n) ? n.indexOf(r, e) : o(n, r, e)) > -1 : wt(n, function(n) {
                if (++t >= e) return !(a = n === r)
            }), a
        }

        function nr(n, r, e) {
            var t = !0;
            if (r = g.createCallback(r, e, 3), st(n))
                for (var o = -1, u = n.length; ++o < u && (t = !!r(n[o], o, n)););
            else wt(n, function(n, e, o) {
                return t = !!r(n, e, o)
            });
            return t
        }

        function rr(n, r, e) {
            var t = [];
            if (r = g.createCallback(r, e, 3), st(n))
                for (var o = -1, u = n.length; ++o < u;) {
                    var a = n[o];
                    r(a, o, n) && t.push(a)
                } else wt(n, function(n, e, o) {
                    r(n, e, o) && t.push(n)
                });
            return t
        }

        function er(n, r, e) {
            if (r = g.createCallback(r, e, 3), !st(n)) {
                var t;
                return wt(n, function(n, e, o) {
                    if (r(n, e, o)) return t = n, !1
                }), t
            }
            for (var o = -1, u = n.length; ++o < u;) {
                var a = n[o];
                if (r(a, o, n)) return a
            }
        }

        function tr(n, r, e) {
            var t;
            return r = g.createCallback(r, e, 3), ur(n, function(n, e, o) {
                if (r(n, e, o)) return t = n, !1
            }), t
        }

        function or(n, r, e) {
            if (r && "undefined" == typeof e && st(n))
                for (var t = -1, o = n.length; ++t < o && r(n[t], t, n) !== !1;);
            else wt(n, r, e);
            return n
        }

        function ur(n, r, e) {
            var t = n,
                o = n ? n.length : 0;
            if (r = r && "undefined" == typeof e ? r : en(r, e, 3), st(n))
                for (; o-- && r(n[o], o, n) !== !1;);
            else {
                if ("number" != typeof o) {
                    var u = ht(n);
                    o = u.length
                } else lt.unindexedChars && zn(n) && (t = n.split(""));
                wt(n, function(n, e, a) {
                    return e = u ? u[--o] : --o, r(t[e], e, a)
                })
            }
            return n
        }

        function ar(n, r) {
            var e = p(arguments, 2),
                t = -1,
                o = "function" == typeof r,
                u = n ? n.length : 0,
                a = we("number" == typeof u ? u : 0);
            return or(n, function(n) {
                a[++t] = (o ? r : n[r]).apply(n, e)
            }), a
        }

        function ir(n, r, e) {
            var t = -1,
                o = n ? n.length : 0,
                u = we("number" == typeof o ? o : 0);
            if (r = g.createCallback(r, e, 3), st(n))
                for (; ++t < o;) u[t] = r(n[t], t, n);
            else wt(n, function(n, e, o) {
                u[++t] = r(n, e, o)
            });
            return u
        }

        function lr(n, r, e) {
            var o = -(1 / 0),
                u = o;
            if ("function" != typeof r && e && e[r] === n && (r = null), null == r && st(n))
                for (var a = -1, i = n.length; ++a < i;) {
                    var l = n[a];
                    l > u && (u = l)
                } else r = null == r && zn(n) ? t : g.createCallback(r, e, 3), wt(n, function(n, e, t) {
                    var a = r(n, e, t);
                    a > o && (o = a, u = n)
                });
            return u
        }

        function cr(n, r, e) {
            var o = 1 / 0,
                u = o;
            if ("function" != typeof r && e && e[r] === n && (r = null), null == r && st(n))
                for (var a = -1, i = n.length; ++a < i;) {
                    var l = n[a];
                    l < u && (u = l)
                } else r = null == r && zn(n) ? t : g.createCallback(r, e, 3), wt(n, function(n, e, t) {
                    var a = r(n, e, t);
                    a < o && (o = a, u = n)
                });
            return u
        }

        function fr(n, r, e, t) {
            var o = arguments.length < 3;
            if (r = g.createCallback(r, t, 4), st(n)) {
                var u = -1,
                    a = n.length;
                for (o && (e = n[++u]); ++u < a;) e = r(e, n[u], u, n)
            } else wt(n, function(n, t, u) {
                e = o ? (o = !1, n) : r(e, n, t, u)
            });
            return e
        }

        function sr(n, r, e, t) {
            var o = arguments.length < 3;
            return r = g.createCallback(r, t, 4), ur(n, function(n, t, u) {
                e = o ? (o = !1, n) : r(e, n, t, u)
            }), e
        }

        function pr(n, r, e) {
            return r = g.createCallback(r, e, 3), rr(n, function(n, e, t) {
                return !r(n, e, t)
            })
        }

        function hr(n, r, e) {
            if (n && "number" != typeof n.length ? n = Xn(n) : lt.unindexedChars && zn(n) && (n = n.split("")), null == r || e) return n ? n[fn(0, n.length - 1)] : v;
            var t = vr(n);
            return t.length = tt(et(0, r), t.length), t
        }

        function vr(n) {
            var r = -1,
                e = n ? n.length : 0,
                t = we("number" == typeof e ? e : 0);
            return or(n, function(n) {
                var e = fn(0, ++r);
                t[r] = t[e], t[e] = n
            }), t
        }

        function gr(n) {
            var r = n ? n.length : 0;
            return "number" == typeof r ? r : ht(n).length
        }

        function yr(n, r, e) {
            var t;
            if (r = g.createCallback(r, e, 3), st(n))
                for (var o = -1, u = n.length; ++o < u && !(t = r(n[o], o, n)););
            else wt(n, function(n, e, o) {
                return !(t = r(n, e, o))
            });
            return !!t
        }

        function br(n, r, e) {
            var t = -1,
                u = st(r),
                a = n ? n.length : 0,
                c = we("number" == typeof a ? a : 0);
            for (u || (r = g.createCallback(r, e, 3)), or(n, function(n, e, o) {
                    var a = c[++t] = l();
                    u ? a.criteria = ir(r, function(r) {
                        return n[r]
                    }) : (a.criteria = i())[0] = r(n, e, o), a.index = t, a.value = n
                }), a = c.length, c.sort(o); a--;) {
                var p = c[a];
                c[a] = p.value, u || f(p.criteria), s(p)
            }
            return c
        }

        function dr(n) {
            return n && "number" == typeof n.length ? lt.unindexedChars && zn(n) ? n.split("") : p(n) : Xn(n)
        }

        function _r(n) {
            for (var r = -1, e = n ? n.length : 0, t = []; ++r < e;) {
                var o = n[r];
                o && t.push(o)
            }
            return t
        }

        function mr(n) {
            return on(n, an(arguments, !0, !0, 1))
        }

        function wr(n, r, e) {
            var t = -1,
                o = n ? n.length : 0;
            for (r = g.createCallback(r, e, 3); ++t < o;)
                if (r(n[t], t, n)) return t;
            return -1
        }

        function xr(n, r, e) {
            var t = n ? n.length : 0;
            for (r = g.createCallback(r, e, 3); t--;)
                if (r(n[t], t, n)) return t;
            return -1
        }

        function jr(n, r, e) {
            var t = 0,
                o = n ? n.length : 0;
            if ("number" != typeof r && null != r) {
                var u = -1;
                for (r = g.createCallback(r, e, 3); ++u < o && r(n[u], u, n);) t++
            } else if (t = r, null == t || e) return n ? n[0] : v;
            return p(n, 0, tt(et(0, t), o))
        }

        function kr(n, r, e, t) {
            return "boolean" != typeof r && null != r && (t = e, e = "function" != typeof r && t && t[r] === n ? null : r, r = !1), null != e && (n = ir(n, e, t)), an(n, r)
        }

        function Cr(r, e, t) {
            if ("number" == typeof t) {
                var o = r ? r.length : 0;
                t = t < 0 ? et(0, o + t) : t || 0
            } else if (t) {
                var u = Rr(r, e);
                return r[u] === e ? u : -1
            }
            return n(r, e, t)
        }

        function Pr(n, r, e) {
            var t = 0,
                o = n ? n.length : 0;
            if ("number" != typeof r && null != r) {
                var u = o;
                for (r = g.createCallback(r, e, 3); u-- && r(n[u], u, n);) t++
            } else t = null == r || e ? 1 : r || t;
            return p(n, 0, tt(et(0, o - t), o))
        }

        function Er() {
            for (var e = [], t = -1, o = arguments.length, a = i(), l = yn(), c = l === n, p = i(); ++t < o;) {
                var h = arguments[t];
                (st(h) || mn(h)) && (e.push(h), a.push(c && h.length >= m && u(t ? e[t] : p)))
            }
            var v = e[0],
                g = -1,
                y = v ? v.length : 0,
                b = [];
            n: for (; ++g < y;) {
                var d = a[0];
                if (h = v[g], (d ? r(d, h) : l(p, h)) < 0) {
                    for (t = o, (d || p).push(h); --t;)
                        if (d = a[t], (d ? r(d, h) : l(e[t], h)) < 0) continue n;
                    b.push(h)
                }
            }
            for (; o--;) d = a[o], d && s(d);
            return f(a), f(p), b
        }

        function Or(n, r, e) {
            var t = 0,
                o = n ? n.length : 0;
            if ("number" != typeof r && null != r) {
                var u = o;
                for (r = g.createCallback(r, e, 3); u-- && r(n[u], u, n);) t++
            } else if (t = r, null == t || e) return n ? n[o - 1] : v;
            return p(n, et(0, o - t))
        }

        function Sr(n, r, e) {
            var t = n ? n.length : 0;
            for ("number" == typeof e && (t = (e < 0 ? et(0, t + e) : tt(e, t - 1)) + 1); t--;)
                if (n[t] === r) return t;
            return -1
        }

        function Ar(n) {
            for (var r = arguments, e = 0, t = r.length, o = n ? n.length : 0; ++e < t;)
                for (var u = -1, a = r[e]; ++u < o;) n[u] === a && (Ge.call(n, u--, 1), o--);
            return n
        }

        function Ir(n, r, e) {
            n = +n || 0, e = "number" == typeof e ? e : +e || 1, null == r && (r = n, n = 0);
            for (var t = -1, o = et(0, Be((r - n) / (e || 1))), u = we(o); ++t < o;) u[t] = n, n += e;
            return u
        }

        function Lr(n, r, e) {
            var t = -1,
                o = n ? n.length : 0,
                u = [];
            for (r = g.createCallback(r, e, 3); ++t < o;) {
                var a = n[t];
                r(a, t, n) && (u.push(a), Ge.call(n, t--, 1), o--)
            }
            return u
        }

        function Nr(n, r, e) {
            if ("number" != typeof r && null != r) {
                var t = 0,
                    o = -1,
                    u = n ? n.length : 0;
                for (r = g.createCallback(r, e, 3); ++o < u && r(n[o], o, n);) t++
            } else t = null == r || e ? 1 : et(0, r);
            return p(n, t)
        }

        function Rr(n, r, e, t) {
            var o = 0,
                u = n ? n.length : o;
            for (e = e ? g.createCallback(e, t, 1) : ue, r = e(r); o < u;) {
                var a = o + u >>> 1;
                e(n[a]) < r ? o = a + 1 : u = a
            }
            return o
        }

        function Tr() {
            return sn(an(arguments, !0, !0))
        }

        function Dr(n, r, e, t) {
            return "boolean" != typeof r && null != r && (t = e, e = "function" != typeof r && t && t[r] === n ? null : r, r = !1), null != e && (e = g.createCallback(e, t, 3)), sn(n, r, e)
        }

        function $r(n) {
            return on(n, p(arguments, 1))
        }

        function Fr() {
            for (var n = -1, r = arguments.length; ++n < r;) {
                var e = arguments[n];
                if (st(e) || mn(e)) var t = t ? sn(on(t, e).concat(on(e, t))) : e
            }
            return t || []
        }

        function Br() {
            for (var n = arguments.length > 1 ? arguments : arguments[0], r = -1, e = n ? lr(At(n, "length")) : 0, t = we(e < 0 ? 0 : e); ++r < e;) t[r] = At(n, r);
            return t
        }

        function Hr(n, r) {
            var e = -1,
                t = n ? n.length : 0,
                o = {};
            for (r || !t || st(n[0]) || (r = []); ++e < t;) {
                var u = n[e];
                r ? o[u] = r[e] : u && (o[u[0]] = u[1])
            }
            return o
        }

        function Wr(n, r) {
            if (!$n(r)) throw new Ie;
            return function() {
                if (--n < 1) return r.apply(this, arguments)
            }
        }

        function qr(n, r) {
            return arguments.length > 2 ? hn(n, 17, p(arguments, 2), null, r) : hn(n, 1, null, null, r)
        }

        function zr(n) {
            for (var r = arguments.length > 1 ? an(arguments, !0, !1, 1) : On(n), e = -1, t = r.length; ++e < t;) {
                var o = r[e];
                n[o] = hn(n[o], 1, null, null, n)
            }
            return n
        }

        function Kr(n, r) {
            return arguments.length > 2 ? hn(r, 19, p(arguments, 2), null, n) : hn(r, 3, null, null, n)
        }

        function Ur() {
            for (var n = arguments, r = n.length; r--;)
                if (!$n(n[r])) throw new Ie;
            return function() {
                for (var r = arguments, e = n.length; e--;) r = [n[e].apply(this, r)];
                return r[0]
            }
        }

        function Mr(n, r) {
            return r = "number" == typeof r ? r : +r || n.length, hn(n, 4, null, null, null, r)
        }

        function Vr(n, r, e) {
            var t, o, u, a, i, l, c, f = 0,
                s = !1,
                p = !0;
            if (!$n(n)) throw new Ie;
            if (r = et(0, r) || 0, e === !0) {
                var h = !0;
                p = !1
            } else Fn(e) && (h = e.leading, s = "maxWait" in e && (et(r, e.maxWait) || 0), p = "trailing" in e ? e.trailing : p);
            var g = function() {
                    var e = r - (Lt() - a);
                    if (e <= 0) {
                        o && He(o);
                        var s = c;
                        o = l = c = v, s && (f = Lt(), u = n.apply(i, t), l || o || (t = i = null))
                    } else l = Ve(g, e)
                },
                y = function() {
                    l && He(l), o = l = c = v, (p || s !== r) && (f = Lt(), u = n.apply(i, t), l || o || (t = i = null))
                };
            return function() {
                if (t = arguments, a = Lt(), i = this, c = p && (l || !h), s === !1) var e = h && !l;
                else {
                    o || h || (f = a);
                    var v = s - (a - f),
                        b = v <= 0;
                    b ? (o && (o = He(o)), f = a, u = n.apply(i, t)) : o || (o = Ve(y, v))
                }
                return b && l ? l = He(l) : l || r === s || (l = Ve(g, r)), e && (b = !0, u = n.apply(i, t)), !b || l || o || (t = i = null), u
            }
        }

        function Gr(n) {
            if (!$n(n)) throw new Ie;
            var r = p(arguments, 1);
            return Ve(function() {
                n.apply(v, r)
            }, 1)
        }

        function Jr(n, r) {
            if (!$n(n)) throw new Ie;
            var e = p(arguments, 2);
            return Ve(function() {
                n.apply(v, e)
            }, r)
        }

        function Qr(n, r) {
            if (!$n(n)) throw new Ie;
            var e = function() {
                var t = e.cache,
                    o = r ? r.apply(this, arguments) : _ + arguments[0];
                return Ke.call(t, o) ? t[o] : t[o] = n.apply(this, arguments)
            };
            return e.cache = {}, e
        }

        function Xr(n) {
            var r, e;
            if (!$n(n)) throw new Ie;
            return function() {
                return r ? e : (r = !0, e = n.apply(this, arguments), n = null, e)
            }
        }

        function Yr(n) {
            return hn(n, 16, p(arguments, 1))
        }

        function Zr(n) {
            return hn(n, 32, null, p(arguments, 1))
        }

        function ne(n, r, e) {
            var t = !0,
                o = !0;
            if (!$n(n)) throw new Ie;
            return e === !1 ? t = !1 : Fn(e) && (t = "leading" in e ? e.leading : t, o = "trailing" in e ? e.trailing : o), J.leading = t, J.maxWait = r, J.trailing = o, Vr(n, r, J)
        }

        function re(n, r) {
            return hn(r, 16, [n])
        }

        function ee(n) {
            return function() {
                return n
            }
        }

        function te(n, r, e) {
            var t = typeof n;
            if (null == n || "function" == t) return en(n, r, e);
            if ("object" != t) return ce(n);
            var o = ht(n),
                u = o[0],
                a = n[u];
            return 1 != o.length || a !== a || Fn(a) ? function(r) {
                for (var e = o.length, t = !1; e-- && (t = ln(r[o[e]], n[o[e]], null, !0)););
                return t
            } : function(n) {
                var r = n[u];
                return a === r && (0 !== a || 1 / a == 1 / r)
            }
        }

        function oe(n) {
            return null == n ? "" : Ae(n).replace(mt, gn)
        }

        function ue(n) {
            return n
        }

        function ae(n, r, e) {
            var t = !0,
                o = r && On(r);
            r && (e || o.length) || (null == e && (e = r), u = y, r = n, n = g, o = On(r)), e === !1 ? t = !1 : Fn(e) && "chain" in e && (t = e.chain);
            var u = n,
                a = $n(u);
            or(o, function(e) {
                var o = n[e] = r[e];
                a && (u.prototype[e] = function() {
                    var r = this.__chain__,
                        e = this.__wrapped__,
                        a = [e];
                    Ue.apply(a, arguments);
                    var i = o.apply(n, a);
                    if (t || r) {
                        if (e === i && Fn(i)) return this;
                        i = new u(i), i.__chain__ = r
                    }
                    return i
                })
            })
        }

        function ie() {
            return e._ = De, this
        }

        function le() {}

        function ce(n) {
            return function(r) {
                return r[n]
            }
        }

        function fe(n, r, e) {
            var t = null == n,
                o = null == r;
            if (null == e && ("boolean" == typeof n && o ? (e = n, n = 1) : o || "boolean" != typeof r || (e = r, o = !0)), t && o && (r = 1), n = +n || 0, o ? (r = n, n = 0) : r = +r || 0, e || n % 1 || r % 1) {
                var u = ut();
                return tt(n + u * (r - n + parseFloat("1e-" + ((u + "").length - 1))), r)
            }
            return fn(n, r)
        }

        function se(n, r) {
            if (n) {
                var e = n[r];
                return $n(e) ? n[r]() : e
            }
        }

        function pe(n, r, e) {
            var t = g.templateSettings;
            n = Ae(n || ""), e = jt({}, e, t);
            var o, u = jt({}, e.imports, t.imports),
                i = ht(u),
                l = Xn(u),
                c = 0,
                f = e.interpolate || L,
                s = "__p += '",
                p = Se((e.escape || L).source + "|" + f.source + "|" + (f === A ? E : L).source + "|" + (e.evaluate || L).source + "|$", "g");
            n.replace(p, function(r, e, t, u, i, l) {
                return t || (t = u), s += n.slice(c, l).replace(R, a), e && (s += "' +\n__e(" + e + ") +\n'"), i && (o = !0, s += "';\n" + i + ";\n__p += '"), t && (s += "' +\n((__t = (" + t + ")) == null ? '' : __t) +\n'"), c = l + r.length, r
            }), s += "';\n";
            var h = e.variable,
                y = h;
            y || (h = "obj", s = "with (" + h + ") {\n" + s + "\n}\n"), s = (o ? s.replace(j, "") : s).replace(C, "$1").replace(P, "$1;"), s = "function(" + h + ") {\n" + (y ? "" : h + " || (" + h + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}";
            var b = "\n/*\n//# sourceURL=" + (e.sourceURL || "/lodash/template/source[" + $++ + "]") + "\n*/";
            try {
                var d = Ce(i, "return " + s + b).apply(v, l)
            } catch (n) {
                throw n.source = s, n
            }
            return r ? d(r) : (d.source = s, d)
        }

        function he(n, r, e) {
            n = (n = +n) > -1 ? n : 0;
            var t = -1,
                o = we(n);
            for (r = en(r, e, 1); ++t < n;) o[t] = r(t);
            return o
        }

        function ve(n) {
            return null == n ? "" : Ae(n).replace(_t, _n)
        }

        function ge(n) {
            var r = ++b;
            return Ae(null == n ? "" : n) + r
        }

        function ye(n) {
            return n = new y(n), n.__chain__ = !0, n
        }

        function be(n, r) {
            return r(n), n
        }

        function de() {
            return this.__chain__ = !0, this
        }

        function _e() {
            return Ae(this.__wrapped__)
        }

        function me() {
            return this.__wrapped__
        }
        e = e ? un.defaults(nn.Object(), e, un.pick(nn, T)) : nn;
        var we = e.Array,
            xe = e.Boolean,
            je = e.Date,
            ke = e.Error,
            Ce = e.Function,
            Pe = e.Math,
            Ee = e.Number,
            Oe = e.Object,
            Se = e.RegExp,
            Ae = e.String,
            Ie = e.TypeError,
            Le = [],
            Ne = ke.prototype,
            Re = Oe.prototype,
            Te = Ae.prototype,
            De = e._,
            $e = Re.toString,
            Fe = Se("^" + Ae($e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            Be = Pe.ceil,
            He = e.clearTimeout,
            We = Pe.floor,
            qe = Ce.prototype.toString,
            ze = bn(ze = Oe.getPrototypeOf) && ze,
            Ke = Re.hasOwnProperty,
            Ue = Le.push,
            Me = Re.propertyIsEnumerable,
            Ve = e.setTimeout,
            Ge = Le.splice,
            Je = Le.unshift,
            Qe = function() {
                try {
                    var n = {},
                        r = bn(r = Oe.defineProperty) && r,
                        e = r(n, n, n) && r
                } catch (n) {}
                return e
            }(),
            Xe = bn(Xe = Oe.create) && Xe,
            Ye = bn(Ye = we.isArray) && Ye,
            Ze = e.isFinite,
            nt = e.isNaN,
            rt = bn(rt = Oe.keys) && rt,
            et = Pe.max,
            tt = Pe.min,
            ot = e.parseInt,
            ut = Pe.random,
            at = {};
        at[B] = we, at[H] = xe, at[W] = je, at[z] = Ce, at[U] = Oe, at[K] = Ee, at[M] = Se, at[V] = Ae;
        var it = {};
        it[B] = it[W] = it[K] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, it[H] = it[V] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, it[q] = it[z] = it[M] = {
                constructor: !0,
                toString: !0
            }, it[U] = {
                constructor: !0
            },
            function() {
                for (var n = D.length; n--;) {
                    var r = D[n];
                    for (var e in it) Ke.call(it, e) && !Ke.call(it[e], r) && (it[e][r] = !1)
                }
            }(), y.prototype = g.prototype;
        var lt = g.support = {};
        ! function() {
            var n = function() {
                    this.x = 1
                },
                r = {
                    0: 1,
                    length: 1
                },
                t = [];
            n.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var o in new n) t.push(o);
            for (o in arguments);
            lt.argsClass = $e.call(arguments) == F, lt.argsObject = arguments.constructor == Oe && !(arguments instanceof we), lt.enumErrorProps = Me.call(Ne, "message") || Me.call(Ne, "name"), lt.enumPrototypes = Me.call(n, "prototype"), lt.funcDecomp = !bn(e.WinRTError) && N.test(h), lt.funcNames = "string" == typeof Ce.name, lt.nonEnumArgs = 0 != o, lt.nonEnumShadows = !/valueOf/.test(t), lt.ownLast = "x" != t[0], lt.spliceObjects = (Le.splice.call(r, 0, 1), !r[0]), lt.unindexedChars = "x" [0] + Oe("x")[0] != "xx";
            try {
                lt.nodeClass = !($e.call(document) == U && !({
                    toString: 0
                } + ""))
            } catch (n) {
                lt.nodeClass = !0
            }
        }(1), g.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: A,
            variable: "",
            imports: {
                _: g
            }
        };
        var ct = function(n) {
            var r = "var index, iterable = " + n.firstArg + ", result = " + n.init + ";\nif (!iterable) return result;\n" + n.top + ";";
            n.array ? (r += "\nvar length = iterable.length; index = -1;\nif (" + n.array + ") {  ", lt.unindexedChars && (r += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), r += "\n  while (++index < length) {\n    " + n.loop + ";\n  }\n}\nelse {  ") : lt.nonEnumArgs && (r += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + n.loop + ";\n    }\n  } else {  "), lt.enumPrototypes && (r += "\n  var skipProto = typeof iterable == 'function';\n  "), lt.enumErrorProps && (r += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
            var e = [];
            if (lt.enumPrototypes && e.push('!(skipProto && index == "prototype")'), lt.enumErrorProps && e.push('!(skipErrorProps && (index == "message" || index == "name"))'), n.useHas && n.keys) r += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", e.length && (r += "    if (" + e.join(" && ") + ") {\n  "), r += n.loop + ";    ", e.length && (r += "\n    }"), r += "\n  }  ";
            else if (r += "\n  for (index in iterable) {\n", n.useHas && e.push("hasOwnProperty.call(iterable, index)"), e.length && (r += "    if (" + e.join(" && ") + ") {\n  "), r += n.loop + ";    ", e.length && (r += "\n    }"), r += "\n  }    ", lt.nonEnumShadows) {
                for (r += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) r += "\n    index = '" + n.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", n.useHas || (r += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), r += ") {\n      " + n.loop + ";\n    }      ";
                r += "\n  }    "
            }
            return (n.array || lt.nonEnumArgs) && (r += "\n}"), r += n.bottom + ";\nreturn result"
        };
        Xe || (rn = function() {
            function n() {}
            return function(r) {
                if (Fn(r)) {
                    n.prototype = r;
                    var t = new n;
                    n.prototype = null
                }
                return t || e.Object()
            }
        }());
        var ft = Qe ? function(n, r) {
            Q.value = r, Qe(n, "__bindData__", Q)
        } : le;
        lt.argsClass || (mn = function(n) {
            return n && "object" == typeof n && "number" == typeof n.length && Ke.call(n, "callee") && !Me.call(n, "callee") || !1
        });
        var st = Ye || function(n) {
                return n && "object" == typeof n && "number" == typeof n.length && $e.call(n) == B || !1
            },
            pt = vn({
                args: "object",
                init: "[]",
                top: "if (!(objectTypes[typeof object])) return result",
                loop: "result.push(index)"
            }),
            ht = rt ? function(n) {
                return Fn(n) ? lt.enumPrototypes && "function" == typeof n || lt.nonEnumArgs && n.length && mn(n) ? pt(n) : rt(n) : []
            } : pt,
            vt = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
                array: "typeof length == 'number'",
                keys: ht,
                loop: "if (callback(iterable[index], index, collection) === false) return result"
            },
            gt = {
                args: "object, source, guard",
                top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                keys: ht,
                loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                bottom: "  }\n}"
            },
            yt = {
                top: "if (!objectTypes[typeof iterable]) return result;\n" + vt.top,
                array: !1
            },
            bt = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            dt = An(bt),
            _t = Se("(" + ht(dt).join("|") + ")", "g"),
            mt = Se("[" + ht(bt).join("") + "]", "g"),
            wt = vn(vt),
            xt = vn(gt, {
                top: gt.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
            }),
            jt = vn(gt),
            kt = vn(vt, yt, {
                useHas: !1
            }),
            Ct = vn(vt, yt);
        $n(/x/) && ($n = function(n) {
            return "function" == typeof n && $e.call(n) == z
        });
        var Pt = ze ? function(n) {
                if (!n || $e.call(n) != U || !lt.argsClass && mn(n)) return !1;
                var r = n.valueOf,
                    e = bn(r) && (e = ze(r)) && ze(e);
                return e ? n == e || ze(n) == e : dn(n)
            } : dn,
            Et = pn(function(n, r, e) {
                Ke.call(n, e) ? n[e]++ : n[e] = 1
            }),
            Ot = pn(function(n, r, e) {
                (Ke.call(n, e) ? n[e] : n[e] = []).push(r)
            }),
            St = pn(function(n, r, e) {
                n[e] = r
            }),
            At = ir,
            It = rr,
            Lt = bn(Lt = je.now) && Lt || function() {
                return (new je).getTime()
            },
            Nt = 8 == ot(x + "08") ? ot : function(n, r) {
                return ot(zn(n) ? n.replace(I, "") : n, r || 0)
            };
        return g.after = Wr, g.assign = xt, g.at = Yn, g.bind = qr, g.bindAll = zr, g.bindKey = Kr, g.chain = ye, g.compact = _r, g.compose = Ur, g.constant = ee, g.countBy = Et, g.create = jn, g.createCallback = te, g.curry = Mr, g.debounce = Vr, g.defaults = jt, g.defer = Gr, g.delay = Jr, g.difference = mr, g.filter = rr, g.flatten = kr, g.forEach = or, g.forEachRight = ur, g.forIn = kt, g.forInRight = Pn, g.forOwn = Ct, g.forOwnRight = En, g.functions = On, g.groupBy = Ot, g.indexBy = St, g.initial = Pr, g.intersection = Er, g.invert = An, g.invoke = ar, g.keys = ht, g.map = ir, g.mapValues = Un, g.max = lr, g.memoize = Qr, g.merge = Mn, g.min = cr, g.omit = Vn, g.once = Xr, g.pairs = Gn, g.partial = Yr, g.partialRight = Zr, g.pick = Jn, g.pluck = At, g.property = ce, g.pull = Ar, g.range = Ir, g.reject = pr, g.remove = Lr, g.rest = Nr, g.shuffle = vr, g.sortBy = br, g.tap = be, g.throttle = ne, g.times = he, g.toArray = dr, g.transform = Qn, g.union = Tr, g.uniq = Dr, g.values = Xn, g.where = It, g.without = $r, g.wrap = re, g.xor = Fr, g.zip = Br, g.zipObject = Hr, g.collect = ir, g.drop = Nr, g.each = or, g.eachRight = ur, g.extend = xt, g.methods = On, g.object = Hr, g.select = rr, g.tail = Nr, g.unique = Dr, g.unzip = Br, ae(g), g.clone = wn, g.cloneDeep = xn, g.contains = Zn, g.escape = oe, g.every = nr, g.find = er, g.findIndex = wr, g.findKey = kn, g.findLast = tr, g.findLastIndex = xr, g.findLastKey = Cn, g.has = Sn, g.identity = ue, g.indexOf = Cr, g.isArguments = mn, g.isArray = st, g.isBoolean = In, g.isDate = Ln, g.isElement = Nn, g.isEmpty = Rn, g.isEqual = Tn, g.isFinite = Dn, g.isFunction = $n, g.isNaN = Bn, g.isNull = Hn, g.isNumber = Wn, g.isObject = Fn, g.isPlainObject = Pt, g.isRegExp = qn, g.isString = zn, g.isUndefined = Kn, g.lastIndexOf = Sr, g.mixin = ae, g.noConflict = ie, g.noop = le, g.now = Lt, g.parseInt = Nt, g.random = fe, g.reduce = fr, g.reduceRight = sr, g.result = se, g.runInContext = h, g.size = gr, g.some = yr, g.sortedIndex = Rr, g.template = pe, g.unescape = ve, g.uniqueId = ge, g.all = nr, g.any = yr, g.detect = er, g.findWhere = er, g.foldl = fr, g.foldr = sr, g.include = Zn, g.inject = fr, ae(function() {
            var n = {};
            return Ct(g, function(r, e) {
                g.prototype[e] || (n[e] = r)
            }), n
        }(), !1), g.first = jr, g.last = Or, g.sample = hr, g.take = jr, g.head = jr, Ct(g, function(n, r) {
            var e = "sample" !== r;
            g.prototype[r] || (g.prototype[r] = function(r, t) {
                var o = this.__chain__,
                    u = n(this.__wrapped__, r, t);
                return o || null != r && (!t || e && "function" == typeof r) ? new y(u, o) : u
            })
        }), g.VERSION = "2.4.1", g.prototype.chain = de, g.prototype.toString = _e, g.prototype.value = me, g.prototype.valueOf = me, wt(["join", "pop", "shift"], function(n) {
            var r = Le[n];
            g.prototype[n] = function() {
                var n = this.__chain__,
                    e = r.apply(this.__wrapped__, arguments);
                return n ? new y(e, n) : e
            }
        }), wt(["push", "reverse", "sort", "unshift"], function(n) {
            var r = Le[n];
            g.prototype[n] = function() {
                return r.apply(this.__wrapped__, arguments), this
            }
        }), wt(["concat", "slice", "splice"], function(n) {
            var r = Le[n];
            g.prototype[n] = function() {
                return new y(r.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), lt.spliceObjects || wt(["pop", "shift", "splice"], function(n) {
            var r = Le[n],
                e = "splice" == n;
            g.prototype[n] = function() {
                var n = this.__chain__,
                    t = this.__wrapped__,
                    o = r.apply(t, arguments);
                return 0 === t.length && delete t[0], n || e ? new y(o, n) : o
            }
        }), g
    }
    var v, g = [],
        y = [],
        b = 0,
        d = {},
        _ = +new Date + "",
        m = 75,
        w = 40,
        x = " \t\v\f \ufeff\n\r\u2028\u2029 ᠎             　",
        j = /\b__p \+= '';/g,
        C = /\b(__p \+=) '' \+/g,
        P = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        E = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        O = /\w*$/,
        S = /^\s*function[ \n\r\t]+\w/,
        A = /<%=([\s\S]+?)%>/g,
        I = RegExp("^[" + x + "]*0+(?=.$)"),
        L = /($^)/,
        N = /\bthis\b/,
        R = /['\n\r\t\u2028\u2029\\]/g,
        T = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
        D = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        $ = 0,
        F = "[object Arguments]",
        B = "[object Array]",
        H = "[object Boolean]",
        W = "[object Date]",
        q = "[object Error]",
        z = "[object Function]",
        K = "[object Number]",
        U = "[object Object]",
        M = "[object RegExp]",
        V = "[object String]",
        G = {};
    G[z] = !1, G[F] = G[B] = G[H] = G[W] = G[K] = G[U] = G[M] = G[V] = !0;
    var J = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        Q = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        },
        X = {
            args: "",
            array: null,
            bottom: "",
            firstArg: "",
            init: "",
            keys: null,
            loop: "",
            shadowedProps: null,
            support: null,
            top: "",
            useHas: !1
        },
        Y = {
            boolean: !1,
            function: !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        },
        Z = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        nn = Y[typeof window] && window || this,
        rn = Y[typeof exports] && exports && !exports.nodeType && exports,
        en = Y[typeof module] && module && !module.nodeType && module,
        tn = en && en.exports === rn && rn,
        on = Y[typeof global] && global;
    !on || on.global !== on && on.window !== on || (nn = on);
    var un = h();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (nn._ = un, define(function() {
        return un
    })) : rn && en ? tn ? (en.exports = un)._ = un : rn._ = un : nn._ = un
}).call(this);
! function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var a, n = e(document);
    e.rails = a = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var a = e('meta[name="csrf-token"]').attr("content");
            a && t.setRequestHeader("X-CSRF-Token", a)
        },
        refreshCSRFTokens: function() {
            var t = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + a + '"]').val(t)
        },
        fire: function(t, a, n) {
            var r = e.Event(a);
            return t.trigger(r, n), r.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var r, i, o, l, s, u, d, c;
            if (a.fire(n, "ajax:before")) {
                if (l = n.data("cross-domain"), s = l === t ? null : l, u = n.data("with-credentials") || null, d = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    r = n.attr("method"), i = n.attr("action"), o = n.serializeArray();
                    var m = n.data("ujs:submit-button");
                    m && (o.push(m), n.data("ujs:submit-button", null))
                } else n.is(a.inputChangeSelector) ? (r = n.data("method"), i = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(a.buttonClickSelector) ? (r = n.data("method") || "get", i = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (r = n.data("method"), i = a.href(n), o = n.data("params") || null);
                c = {
                    type: r || "GET",
                    data: o,
                    dataType: d,
                    beforeSend: function(e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), a.fire(n, "ajax:beforeSend", [e, r])
                    },
                    success: function(e, t, a) {
                        n.trigger("ajax:success", [e, t, a])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, a) {
                        n.trigger("ajax:error", [e, t, a])
                    },
                    crossDomain: s
                }, u && (c.xhrFields = {
                    withCredentials: u
                }), i && (c.url = i);
                var f = a.ajax(c);
                return n.trigger("ajax:send", f), f
            }
            return !1
        },
        handleMethod: function(n) {
            var r = a.href(n),
                i = n.data("method"),
                o = n.attr("target"),
                l = e("meta[name=csrf-token]").attr("content"),
                s = e("meta[name=csrf-param]").attr("content"),
                u = e('<form method="post" action="' + r + '"></form>'),
                d = '<input name="_method" value="' + i + '" type="hidden" />';
            s !== t && l !== t && (d += '<input name="' + s + '" value="' + l + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(d).appendTo("body"), u.submit()
        },
        disableFormElements: function(t) {
            t.find(a.disableSelector).each(function() {
                var t = e(this),
                    a = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[a]()), t[a](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(a.enableSelector).each(function() {
                var t = e(this),
                    a = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[a](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"),
                r = !1;
            return !n || (a.fire(e, "confirm") && (r = a.confirm(n), t = a.fire(e, "confirm:complete", [r])), r && t)
        },
        blankInputs: function(t, a, n) {
            var r, i, o = e(),
                l = a || "input,textarea",
                s = t.find(l);
            return s.each(function() {
                if (r = e(this), i = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !i == !n) {
                    if (r.is("input[type=radio]") && s.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    o = o.add(r)
                }
            }), !!o.length && o
        },
        nonBlankInputs: function(e, t) {
            return a.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return a.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, a.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || a.CSRFProtection(n)
    }), n.delegate(a.linkDisableSelector, "ajax:complete", function() {
        a.enableElement(e(this))
    }), n.delegate(a.linkClickSelector, "click.rails", function(n) {
        var r = e(this),
            i = r.data("method"),
            o = r.data("params"),
            l = n.metaKey || n.ctrlKey;
        if (!a.allowAction(r)) return a.stopEverything(n);
        if (!l && r.is(a.linkDisableSelector) && a.disableElement(r), r.data("remote") !== t) {
            if (l && (!i || "GET" === i) && !o) return !0;
            var s = a.handleRemote(r);
            return s === !1 ? a.enableElement(r) : s.error(function() {
                a.enableElement(r)
            }), !1
        }
        return r.data("method") ? (a.handleMethod(r), !1) : void 0
    }), n.delegate(a.buttonClickSelector, "click.rails", function(t) {
        var n = e(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(t)
    }), n.delegate(a.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(t)
    }), n.delegate(a.formSubmitSelector, "submit.rails", function(n) {
        var r = e(this),
            i = r.data("remote") !== t,
            o = a.blankInputs(r, a.requiredInputSelector),
            l = a.nonBlankInputs(r, a.fileInputSelector);
        if (!a.allowAction(r)) return a.stopEverything(n);
        if (o && r.attr("novalidate") == t && a.fire(r, "ajax:aborted:required", [o])) return a.stopEverything(n);
        if (i) {
            if (l) {
                setTimeout(function() {
                    a.disableFormElements(r)
                }, 13);
                var s = a.fire(r, "ajax:aborted:file", [l]);
                return s || setTimeout(function() {
                    a.enableFormElements(r)
                }, 13), s
            }
            return a.handleRemote(r), !1
        }
        setTimeout(function() {
            a.disableFormElements(r)
        }, 13)
    }), n.delegate(a.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!a.allowAction(n)) return a.stopEverything(t);
        var r = n.attr("name"),
            i = r ? {
                name: r,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", i)
    }), n.delegate(a.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && a.disableFormElements(e(this))
    }), n.delegate(a.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && a.enableFormElements(e(this))
    }), e(function() {
        a.refreshCSRFTokens()
    }))
}(jQuery);
! function(t) {
    "use strict";
    t(function() {
        t.support.transition = function() {
            var t = function() {
                var t, e = document.createElement("bootstrap"),
                    i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (t in i)
                    if (void 0 !== e.style[t]) return i[t]
            }();
            return t && {
                end: t
            }
        }()
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.prototype.close = function(e) {
        function i() {
            n.trigger("closed").remove()
        }
        var n, s = t(this),
            o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), n = t(o), e && e.preventDefault(), n.length || (n = s.hasClass("alert") ? s : s.parent()), n.trigger(e = t.Event("close")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.on(t.support.transition.end, i) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("alert");
            s || n.data("alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.alert.data-api", e, i.prototype.close)
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, i)
    };
    e.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            n = i.data(),
            s = i.is("input") ? "val" : "html";
        t += "Text", n.resetText || i.data("resetText", i[s]()), i[s](n[t] || this.options[t]), setTimeout(function() {
            "loadingText" == t ? i.addClass(e).attr(e, e) : i.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function() {
        var t = this.$element.closest('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("button"),
                o = "object" == typeof i && i;
            s || n.data("button", s = new e(this, o)), "toggle" == i ? s.toggle() : i && s.setState(i)
        })
    }, t.fn.button.defaults = {
        loadingText: "loading..."
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
        var i = t(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle")
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.prototype = {
        cycle: function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function(e) {
            var i = this.getActiveIndex(),
                n = this;
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid", function() {
                n.to(e)
            }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
        },
        pause: function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            if (!this.sliding) return this.slide("next")
        },
        prev: function() {
            if (!this.sliding) return this.slide("prev")
        },
        slide: function(e, i) {
            var n, s = this.$element.find(".item.active"),
                o = i || s[e](),
                a = this.interval,
                r = "next" == e ? "left" : "right",
                h = "next" == e ? "first" : "last",
                l = this;
            if (this.sliding = !0, a && this.pause(), o = o.length ? o : this.$element.find(".item")[h](), n = t.Event("slide", {
                    relatedTarget: o[0],
                    direction: r
                }), !o.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var e = t(l.$indicators.children()[l.getActiveIndex()]);
                        e && e.addClass("active")
                    })), t.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(n), n.isDefaultPrevented()) return;
                    o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), this.$element.one(t.support.transition.end, function() {
                        o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                            l.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(n), n.isDefaultPrevented()) return;
                    s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return a && this.cycle(), this
            }
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("carousel"),
                o = t.extend({}, t.fn.carousel.defaults, "object" == typeof i && i),
                a = "string" == typeof i ? i : o.slide;
            s || n.data("carousel", s = new e(this, o)), "number" == typeof i ? s.to(i) : a ? s[a]() : o.interval && s.pause().cycle()
        })
    }, t.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var i, n, s = t(this),
            o = t(s.attr("data-target") || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = t.extend({}, o.data(), s.data());
        o.carousel(a), (n = s.attr("data-slide-to")) && o.data("carousel").pause().to(n).cycle(), e.preventDefault()
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, i), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.prototype = {
        constructor: e,
        dimension: function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        },
        show: function() {
            var e, i, n, s;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (e = this.dimension(), i = t.camelCase(["scroll", e].join("-")), n = this.$parent && this.$parent.find("> .accordion-group > .in"), n && n.length) {
                    if (s = n.data("collapse"), s && s.transitioning) return;
                    n.collapse("hide"), s || n.data("collapse", null)
                }
                this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][i])
            }
        },
        hide: function() {
            var e;
            !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
        },
        reset: function(t) {
            var e = this.dimension();
            return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(e, i, n) {
            var s = this,
                o = function() {
                    "show" == i.type && s.reset(), s.transitioning = 0, s.$element.trigger(n)
                };
            this.$element.trigger(i), i.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var i = t.fn.collapse;
    t.fn.collapse = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("collapse"),
                o = t.extend({}, t.fn.collapse.defaults, n.data(), "object" == typeof i && i);
            s || n.data("collapse", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.collapse.defaults = {
        toggle: !0
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
        var i, n = t(this),
            s = n.attr("data-target") || e.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(s).data("collapse") ? "toggle" : n.data();
        n[t(s).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(s).collapse(o)
    })
}(window.jQuery), ! function(t) {
    "use strict";

    function e() {
        t(n).each(function() {
            i(t(this)).removeClass("open")
        })
    }

    function i(e) {
        var i, n = e.attr("data-target");
        return n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), i = n && t(n), i && i.length || (i = e.parent()), i
    }
    var n = "[data-toggle=dropdown]",
        s = function(e) {
            var i = t(e).on("click.dropdown.data-api", this.toggle);
            t("html").on("click.dropdown.data-api", function() {
                i.parent().removeClass("open")
            })
        };
    s.prototype = {
        constructor: s,
        toggle: function(n) {
            var s, o, a = t(this);
            if (!a.is(".disabled, :disabled")) return s = i(a), o = s.hasClass("open"), e(), o || s.toggleClass("open"), a.focus(), !1
        },
        keydown: function(e) {
            var s, o, a, r, h;
            if (/(38|40|27)/.test(e.keyCode) && (s = t(this), e.preventDefault(), e.stopPropagation(), !s.is(".disabled, :disabled"))) {
                if (a = i(s), r = a.hasClass("open"), !r || r && 27 == e.keyCode) return 27 == e.which && a.find(n).focus(), s.click();
                o = t("[role=menu] li:not(.divider):visible a", a), o.length && (h = o.index(o.filter(":focus")), 38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < o.length - 1 && h++, ~h || (h = 0), o.eq(h).focus())
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("dropdown");
            n || i.data("dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = o, this
    }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.dropdown-menu", function(t) {
        t.stopPropagation()
    }).on("click.dropdown.data-api", n, s.prototype.toggle).on("keydown.dropdown.data-api", n + ", [role=menu]", s.prototype.keydown)
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {
        constructor: e,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var e = this,
                i = t.Event("show");
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                var i = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), i && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), i ? e.$element.one(t.support.transition.end, function() {
                    e.$element.focus().trigger("shown")
                }) : e.$element.focus().trigger("shown")
            }))
        },
        hide: function(e) {
            e && e.preventDefault();
            e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var e = this;
            t(document).on("focusin.modal", function(t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
            })
        },
        escape: function() {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                27 == e.which && t.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var e = this,
                i = setTimeout(function() {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
            this.$element.one(t.support.transition.end, function() {
                clearTimeout(i), e.hideModal()
            })
        },
        hideModal: function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.removeBackdrop(), t.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(e) {
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var n = t.support.transition && i;
                if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                n ? this.$backdrop.one(t.support.transition.end, e) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
        }
    };
    var i = t.fn.modal;
    t.fn.modal = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("modal"),
                o = t.extend({}, t.fn.modal.defaults, n.data(), "object" == typeof i && i);
            s || n.data("modal", s = new e(this, o)), "string" == typeof i ? s[i]() : o.show && s.show()
        })
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this),
            n = i.attr("href"),
            s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), i.data());
        e.preventDefault(), s.modal(o).one("hide", function() {
            i.focus()
        })
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("tooltip", t, e)
    };
    e.prototype = {
        constructor: e,
        init: function(e, i, n) {
            var s, o, a, r, h;
            for (this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.enabled = !0, a = this.options.trigger.split(" "), h = a.length; h--;) r = a[h], "click" == r ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != r && (s = "hover" == r ? "mouseenter" : "focus", o = "hover" == r ? "mouseleave" : "blur", this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(e) {
            return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        },
        enter: function(e) {
            var i, n = t.fn[this.type].defaults,
                s = {};
            return this._options && t.each(this._options, function(t, e) {
                n[t] != e && (s[t] = e)
            }, this), i = t(e.currentTarget)[this.type](s).data(this.type), i.options.delay && i.options.delay.show ? (clearTimeout(this.timeout), i.hoverState = "in", void(this.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show))) : i.show()
        },
        leave: function(e) {
            var i = t(e.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), i.options.delay && i.options.delay.hide ? (i.hoverState = "out", void(this.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide))) : i.hide()
        },
        show: function() {
            var e, i, n, s, o, a, r = t.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(r), r.isDefaultPrevented()) return;
                switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), i = this.getPosition(), n = e[0].offsetWidth, s = e[0].offsetHeight, o) {
                    case "bottom":
                        a = {
                            top: i.top + i.height,
                            left: i.left + i.width / 2 - n / 2
                        };
                        break;
                    case "top":
                        a = {
                            top: i.top - s,
                            left: i.left + i.width / 2 - n / 2
                        };
                        break;
                    case "left":
                        a = {
                            top: i.top + i.height / 2 - s / 2,
                            left: i.left - n
                        };
                        break;
                    case "right":
                        a = {
                            top: i.top + i.height / 2 - s / 2,
                            left: i.left + i.width
                        }
                }
                this.applyPlacement(a, o), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(t, e) {
            var i, n, s, o, a = this.tip(),
                r = a[0].offsetWidth,
                h = a[0].offsetHeight;
            a.offset(t).addClass(e).addClass("in"), i = a[0].offsetWidth, n = a[0].offsetHeight, "top" == e && n != h && (t.top = t.top + h - n, o = !0), "bottom" == e || "top" == e ? (s = 0, t.left < 0 && (s = t.left * -2, t.left = 0, a.offset(t), i = a[0].offsetWidth, n = a[0].offsetHeight), this.replaceArrow(s - r + i, i, "left")) : this.replaceArrow(n - h, n, "top"), o && a.offset(t)
        },
        replaceArrow: function(t, e, i) {
            this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
        },
        setContent: function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function e() {
                var e = setTimeout(function() {
                    i.off(t.support.transition.end).detach()
                }, 500);
                i.one(t.support.transition.end, function() {
                    clearTimeout(e), i.detach()
                })
            }
            var i = this.tip(),
                n = t.Event("hide");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : i.detach(), this.$element.trigger("hidden"), this
        },
        fixTitle: function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var e = this.$element[0];
            return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        },
        tip: function() {
            return this.$tip = this.$tip || t(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(e) {
            var i = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
            i.tip().hasClass("in") ? i.hide() : i.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("tooltip"),
                o = "object" == typeof i && i;
            s || n.data("tooltip", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
        constructor: e,
        setContent: function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](i), t.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var t, e = this.$element,
                i = this.options;
            return t = ("function" == typeof i.content ? i.content.call(e[0]) : i.content) || e.attr("data-content")
        },
        tip: function() {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("popover"),
                o = "object" == typeof i && i;
            s || n.data("popover", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(window.jQuery), ! function(t) {
    "use strict";

    function e(e, i) {
        var n, s = t.proxy(this.process, this),
            o = t(t(e).is("body") ? window : e);
        this.options = t.extend({}, t.fn.scrollspy.defaults, i), this.$scrollElement = o.on("scroll.scroll-spy.data-api", s), this.selector = (this.options.target || (n = t(e).attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = t("body"), this.refresh(), this.process()
    }
    e.prototype = {
        constructor: e,
        refresh: function() {
            var e, i = this;
            this.offsets = t([]), this.targets = t([]), e = this.$body.find(this.selector).map(function() {
                var e = t(this),
                    n = e.data("target") || e.attr("href"),
                    s = /^#\w/.test(n) && t(n);
                return s && s.length && [
                    [s.position().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), n]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                i.offsets.push(this[0]), i.targets.push(this[1])
            })
        },
        process: function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = i - this.$scrollElement.height(),
                s = this.offsets,
                o = this.targets,
                a = this.activeTarget;
            if (e >= n) return a != (t = o.last()[0]) && this.activate(t);
            for (t = s.length; t--;) a != o[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(o[t])
        },
        activate: function(e) {
            var i, n;
            this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parent("li").addClass("active"), i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        }
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("scrollspy"),
                o = "object" == typeof i && i;
            s || n.data("scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {
        offset: 10
    }, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e,
        show: function() {
            var e, i, n, s = this.element,
                o = s.closest("ul:not(.dropdown-menu)"),
                a = s.attr("data-target");
            a || (a = s.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), s.parent("li").hasClass("active") || (e = o.find(".active:last a")[0], n = t.Event("show", {
                relatedTarget: e
            }), s.trigger(n), n.isDefaultPrevented() || (i = t(a), this.activate(s.parent("li"), o), this.activate(i, i.parent(), function() {
                s.trigger({
                    type: "shown",
                    relatedTarget: e
                })
            })))
        },
        activate: function(e, i, n) {
            function s() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
            }
            var o = i.find("> .active"),
                a = n && t.support.transition && o.hasClass("fade");
            a ? o.one(t.support.transition.end, s) : s(), o.removeClass("in")
        }
    };
    var i = t.fn.tab;
    t.fn.tab = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("tab");
            s || n.data("tab", s = new e(this)), "string" == typeof i && s[i]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
    };
    e.prototype = {
        constructor: e,
        select: function() {
            var t = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(t)).change(), this.hide()
        },
        updater: function(t) {
            return t
        },
        show: function() {
            var e = t.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: e.top + e.height,
                left: e.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function(e) {
            var i;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (i = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, i ? this.process(i) : this)
        },
        process: function(e) {
            var i = this;
            return e = t.grep(e, function(t) {
                return i.matcher(t)
            }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(t) {
            return ~t.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(t) {
            for (var e, i = [], n = [], s = []; e = t.shift();) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? n.push(e) : s.push(e) : i.push(e);
            return i.concat(n, s)
        },
        highlighter: function(t) {
            var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return t.replace(new RegExp("(" + e + ")", "ig"), function(t, e) {
                return "<strong>" + e + "</strong>"
            })
        },
        render: function(e) {
            var i = this;
            return e = t(e).map(function(e, n) {
                return e = t(i.options.item).attr("data-value", n), e.find("a").html(i.highlighter(n)), e[0]
            }), e.first().addClass("active"), this.$menu.html(e), this
        },
        next: function(e) {
            var i = this.$menu.find(".active").removeClass("active"),
                n = i.next();
            n.length || (n = t(this.$menu.find("li")[0])), n.addClass("active")
        },
        prev: function(t) {
            var e = this.$menu.find(".active").removeClass("active"),
                i = e.prev();
            i.length || (i = this.$menu.find("li").last()), i.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
        },
        eventSupported: function(t) {
            var e = t in this.$element;
            return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
        },
        move: function(t) {
            if (this.shown) {
                switch (t.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.prev();
                        break;
                    case 40:
                        t.preventDefault(), this.next()
                }
                t.stopPropagation()
            }
        },
        keydown: function(e) {
            this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
        },
        keypress: function(t) {
            this.suppressKeyPressRepeat || this.move(t)
        },
        keyup: function(t) {
            switch (t.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            t.stopPropagation(), t.preventDefault()
        },
        focus: function(t) {
            this.focused = !0
        },
        blur: function(t) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function(t) {
            t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function(e) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
        },
        mouseleave: function(t) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var i = t.fn.typeahead;
    t.fn.typeahead = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("typeahead"),
                o = "object" == typeof i && i;
            s || n.data("typeahead", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function() {
        return t.fn.typeahead = i, this
    }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(e) {
        var i = t(this);
        i.data("typeahead") || i.typeahead(i.data())
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = t.extend({}, t.fn.affix.defaults, i), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = t(e), this.checkPosition()
    };
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e, i = t(document).height(),
                n = this.$window.scrollTop(),
                s = this.$element.offset(),
                o = this.options.offset,
                a = o.bottom,
                r = o.top,
                h = "affix affix-top affix-bottom";
            "object" != typeof o && (a = r = o), "function" == typeof r && (r = o.top()), "function" == typeof a && (a = o.bottom()), e = !(null != this.unpin && n + this.unpin <= s.top) && (null != a && s.top + this.$element.height() >= i - a ? "bottom" : null != r && n <= r && "top"), this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? s.top - n : null, this.$element.removeClass(h).addClass("affix" + (e ? "-" + e : "")))
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("affix"),
                o = "object" == typeof i && i;
            s || n.data("affix", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {
        offset: 0
    }, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
        })
    })
}(window.jQuery);
(function() {
    ! function(t) {
        return "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery)
    }(function(t) {
        "use strict";
        var e, o, n, r, i, s, a, c, l, p, f;
        return p = "caret", e = function() {
            function e(t) {
                this.$inputor = t, this.domInputor = this.$inputor[0]
            }
            return e.prototype.setPos = function(t) {
                return this.domInputor
            }, e.prototype.getIEPosition = function() {
                return this.getPosition()
            }, e.prototype.getPosition = function() {
                var t, e;
                return e = this.getOffset(), t = this.$inputor.offset(), e.left -= t.left, e.top -= t.top, e
            }, e.prototype.getOldIEPos = function() {
                var t, e;
                return e = a.selection.createRange(), t = a.body.createTextRange(), t.moveToElementText(this.domInputor), t.setEndPoint("EndToEnd", e), t.text.length
            }, e.prototype.getPos = function() {
                var t, e, o;
                return (o = this.range()) ? (t = o.cloneRange(), t.selectNodeContents(this.domInputor), t.setEnd(o.endContainer, o.endOffset), e = t.toString().length, t.detach(), e) : a.selection ? this.getOldIEPos() : void 0
            }, e.prototype.getOldIEOffset = function() {
                var t, e;
                return t = a.selection.createRange().duplicate(), t.moveStart("character", -1), e = t.getBoundingClientRect(), {
                    height: e.bottom - e.top,
                    left: e.left,
                    top: e.top
                }
            }, e.prototype.getOffset = function(e) {
                var o, n, r, i;
                if (l.getSelection && (r = this.range())) {
                    if (r.endOffset - 1 < 0) return null;
                    o = r.cloneRange(), o.setStart(r.endContainer, r.endOffset - 1), o.setEnd(r.endContainer, r.endOffset), i = o.getBoundingClientRect(), n = {
                        height: i.height,
                        left: i.left + i.width,
                        top: i.top
                    }, o.detach()
                } else a.selection && (n = this.getOldIEOffset());
                return n && (n.top += t(l).scrollTop(), n.left += t(l).scrollLeft()), n
            }, e.prototype.range = function() {
                var t;
                if (l.getSelection) return t = l.getSelection(), t.rangeCount > 0 ? t.getRangeAt(0) : null
            }, e
        }(), o = function() {
            function e(t) {
                this.$inputor = t, this.domInputor = this.$inputor[0]
            }
            return e.prototype.getIEPos = function() {
                var t, e, o, n, r, i, s;
                return e = this.domInputor, i = a.selection.createRange(), r = 0, i && i.parentElement() === e && (n = e.value.replace(/\r\n/g, "\n"), o = n.length, s = e.createTextRange(), s.moveToBookmark(i.getBookmark()), t = e.createTextRange(), t.collapse(!1), r = s.compareEndPoints("StartToEnd", t) > -1 ? o : -s.moveStart("character", -o)), r
            }, e.prototype.getPos = function() {
                return a.selection ? this.getIEPos() : this.domInputor.selectionStart
            }, e.prototype.setPos = function(t) {
                var e, o;
                return e = this.domInputor, a.selection ? (o = e.createTextRange(), o.move("character", t), o.select()) : e.setSelectionRange && e.setSelectionRange(t, t), e
            }, e.prototype.getIEOffset = function(t) {
                var e, o, n, r;
                return o = this.domInputor.createTextRange(), t || (t = this.getPos()), o.move("character", t), n = o.boundingLeft, r = o.boundingTop, e = o.boundingHeight, {
                    left: n,
                    top: r,
                    height: e
                }
            }, e.prototype.getOffset = function(e) {
                var o, n, r;
                return o = this.$inputor, a.selection ? (n = this.getIEOffset(e), n.top += t(l).scrollTop() + o.scrollTop(), n.left += t(l).scrollLeft() + o.scrollLeft(), n) : (n = o.offset(), r = this.getPosition(e), n = {
                    left: n.left + r.left - o.scrollLeft(),
                    top: n.top + r.top - o.scrollTop(),
                    height: r.height
                })
            }, e.prototype.getPosition = function(e) {
                var o, r, i, s, a, c, l;
                return o = this.$inputor, s = function(e) {
                    return t("<div></div>").text(e).html().replace(/\r\n|\r|\n/g, "<br/>").replace(/\s/g, "&nbsp;")
                }, void 0 === e && (e = this.getPos()), l = o.val().slice(0, e), i = o.val().slice(e), a = "<span style='position: relative; display: inline;'>" + s(l) + "</span>", a += "<span id='caret' style='position: relative; display: inline;'>|</span>", a += "<span style='position: relative; display: inline;'>" + s(i) + "</span>", c = new n(o), r = c.create(a).rect()
            }, e.prototype.getIEPosition = function(t) {
                var e, o, n, r, i;
                return n = this.getIEOffset(t), o = this.$inputor.offset(), r = n.left - o.left, i = n.top - o.top, e = n.height, {
                    left: r,
                    top: i,
                    height: e
                }
            }, e
        }(), n = function() {
            function e(t) {
                this.$inputor = t
            }
            return e.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"], e.prototype.mirrorCss = function() {
                var e, o = this;
                return e = {
                    position: "absolute",
                    left: -9999,
                    top: 0,
                    zIndex: -2e4
                }, "TEXTAREA" === this.$inputor.prop("tagName") && this.css_attr.push("width"), t.each(this.css_attr, function(t, n) {
                    return e[n] = o.$inputor.css(n)
                }), e
            }, e.prototype.create = function(e) {
                return this.$mirror = t("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(e), this.$inputor.after(this.$mirror), this
            }, e.prototype.rect = function() {
                var t, e, o;
                return t = this.$mirror.find("#caret"), e = t.position(), o = {
                    left: e.left,
                    top: e.top,
                    height: t.height()
                }, this.$mirror.remove(), o
            }, e
        }(), r = {
            contentEditable: function(t) {
                return !(!t[0].contentEditable || "true" !== t[0].contentEditable)
            }
        }, s = {
            pos: function(t) {
                return t || 0 === t ? this.setPos(t) : this.getPos()
            },
            position: function(t) {
                return a.selection ? this.getIEPosition(t) : this.getPosition(t)
            },
            offset: function(t) {
                var e;
                return e = this.getOffset(t)
            }
        }, a = null, l = null, c = null, f = function(t) {
            var e;
            return (e = null != t ? t.iframe : void 0) ? (c = e, l = e.contentWindow, a = e.contentDocument || l.document) : (c = void 0, l = window, a = document)
        }, i = function(t) {
            var e;
            a = t[0].ownerDocument, l = a.defaultView || a.parentWindow;
            try {
                return c = l.frameElement
            } catch (t) {
                e = t
            }
        }, t.fn.caret = function(n, i, a) {
            var c;
            return s[n] ? (t.isPlainObject(i) ? (f(i), i = void 0) : f(a), c = r.contentEditable(this) ? new e(this) : new o(this), s[n].apply(c, [i])) : t.error("Method " + n + " does not exist on jQuery.caret")
        }, t.fn.caret.EditableCaret = e, t.fn.caret.InputCaret = o, t.fn.caret.Utils = r, t.fn.caret.apis = s
    })
}).call(this);
(function() {
    ! function(t) {
        return "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery)
    }(function(t) {
        var e, i, n, r, o, s, a, h = [].slice;
        i = function() {
            function e(e) {
                this.current_flag = null, this.controllers = {}, this.alias_maps = {}, this.$inputor = t(e), this.setIframe(), this.listen()
            }
            return e.prototype.createContainer = function(e) {
                if (0 === (this.$el = t("#atwho-container", e)).length) return t(e.body).append(this.$el = t("<div id='atwho-container'></div>"))
            }, e.prototype.setIframe = function(t, e) {
                var i;
                return null == e && (e = !1), t ? (this.window = t.contentWindow, this.document = t.contentDocument || this.window.document, this.iframe = t) : (this.document = document, this.window = window, this.iframe = null), (this.iframeStandalone = e) ? (null != (i = this.$el) && i.remove(), this.createContainer(this.document)) : this.createContainer(document)
            }, e.prototype.controller = function(t) {
                var e, i, n, r;
                if (this.alias_maps[t]) i = this.controllers[this.alias_maps[t]];
                else {
                    r = this.controllers;
                    for (n in r)
                        if (e = r[n], n === t) {
                            i = e;
                            break
                        }
                }
                return i ? i : this.controllers[this.current_flag]
            }, e.prototype.set_context_for = function(t) {
                return this.current_flag = t, this
            }, e.prototype.reg = function(t, e) {
                var i, r;
                return i = (r = this.controllers)[t] || (r[t] = new n(this, t)), e.alias && (this.alias_maps[e.alias] = t), i.init(e), this
            }, e.prototype.listen = function() {
                return this.$inputor.on("keyup.atwhoInner", function(t) {
                    return function(e) {
                        return t.on_keyup(e)
                    }
                }(this)).on("keydown.atwhoInner", function(t) {
                    return function(e) {
                        return t.on_keydown(e)
                    }
                }(this)).on("scroll.atwhoInner", function(t) {
                    return function(e) {
                        var i;
                        return null != (i = t.controller()) ? i.view.hide(e) : void 0
                    }
                }(this)).on("blur.atwhoInner", function(t) {
                    return function(e) {
                        var i;
                        if (i = t.controller()) return i.view.hide(e, i.get_opt("display_timeout"))
                    }
                }(this)).on("click.atwhoInner", function(t) {
                    return function(e) {
                        var i;
                        return null != (i = t.controller()) ? i.view.hide(e) : void 0
                    }
                }(this))
            }, e.prototype.shutdown = function() {
                var t, e, i;
                i = this.controllers;
                for (e in i) t = i[e], t.destroy(), delete this.controllers[e];
                return this.$inputor.off(".atwhoInner"), this.$el.remove()
            }, e.prototype.dispatch = function() {
                return t.map(this.controllers, function(t) {
                    return function(e) {
                        var i;
                        return (i = e.get_opt("delay")) ? (clearTimeout(t.delayedCallback), t.delayedCallback = setTimeout(function() {
                            if (e.look_up()) return t.set_context_for(e.at)
                        }, i)) : e.look_up() ? t.set_context_for(e.at) : void 0
                    }
                }(this))
            }, e.prototype.on_keyup = function(e) {
                var i;
                switch (e.keyCode) {
                    case o.ESC:
                        e.preventDefault(), null != (i = this.controller()) && i.view.hide();
                        break;
                    case o.DOWN:
                    case o.UP:
                    case o.CTRL:
                        t.noop();
                        break;
                    case o.P:
                    case o.N:
                        e.ctrlKey || this.dispatch();
                        break;
                    default:
                        this.dispatch()
                }
            }, e.prototype.on_keydown = function(e) {
                var i, n;
                if (i = null != (n = this.controller()) ? n.view : void 0, i && i.visible()) switch (e.keyCode) {
                    case o.ESC:
                        e.preventDefault(), i.hide(e);
                        break;
                    case o.UP:
                        e.preventDefault(), i.prev();
                        break;
                    case o.DOWN:
                        e.preventDefault(), i.next();
                        break;
                    case o.P:
                        if (!e.ctrlKey) return;
                        e.preventDefault(), i.prev();
                        break;
                    case o.N:
                        if (!e.ctrlKey) return;
                        e.preventDefault(), i.next();
                        break;
                    case o.TAB:
                    case o.ENTER:
                        if (!i.visible()) return;
                        e.preventDefault(), i.choose(e);
                        break;
                    default:
                        t.noop()
                }
            }, e
        }(), n = function() {
            function e(e, i) {
                this.app = e, this.at = i, this.$inputor = this.app.$inputor, this.id = this.$inputor[0].id || this.uid(), this.setting = null, this.query = null, this.pos = 0, this.cur_rect = null, this.range = null, 0 === (this.$el = t("#atwho-ground-" + this.id, this.app.$el)).length && this.app.$el.append(this.$el = t("<div id='atwho-ground-" + this.id + "'></div>")), this.model = new s(this), this.view = new a(this)
            }
            return e.prototype.uid = function() {
                return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
            }, e.prototype.init = function(e) {
                return this.setting = t.extend({}, this.setting || t.fn.atwho.default, e), this.view.init(), this.model.reload(this.setting.data)
            }, e.prototype.destroy = function() {
                return this.trigger("beforeDestroy"), this.model.destroy(), this.view.destroy(), this.$el.remove()
            }, e.prototype.call_default = function() {
                var e, i, n;
                n = arguments[0], e = 2 <= arguments.length ? h.call(arguments, 1) : [];
                try {
                    return r[n].apply(this, e)
                } catch (e) {
                    return i = e, t.error("" + i + " Or maybe At.js doesn't have function " + n)
                }
            }, e.prototype.trigger = function(t, e) {
                var i, n;
                return null == e && (e = []), e.push(this), i = this.get_opt("alias"), n = i ? "" + t + "-" + i + ".atwho" : "" + t + ".atwho", this.$inputor.trigger(n, e)
            }, e.prototype.callbacks = function(t) {
                return this.get_opt("callbacks")[t] || r[t]
            }, e.prototype.get_opt = function(t, e) {
                var i;
                try {
                    return this.setting[t]
                } catch (t) {
                    return i = t, null
                }
            }, e.prototype.content = function() {
                return this.$inputor.is("textarea, input") ? this.$inputor.val() : this.$inputor.text()
            }, e.prototype.catch_query = function() {
                var t, e, i, n, r, o;
                return e = this.content(), t = this.$inputor.caret("pos", {
                    iframe: this.app.iframe
                }), o = e.slice(0, t), n = this.callbacks("matcher").call(this, this.at, o, this.get_opt("start_with_space")), "string" == typeof n && n.length <= this.get_opt("max_len", 20) ? (r = t - n.length, i = r + n.length, this.pos = r, n = {
                    text: n,
                    head_pos: r,
                    end_pos: i
                }, this.trigger("matched", [this.at, n.text])) : (n = null, this.view.hide()), this.query = n
            }, e.prototype.rect = function() {
                var e, i, n;
                if (e = this.$inputor.caret("offset", this.pos - 1, {
                        iframe: this.app.iframe
                    })) return this.app.iframe && !this.app.iframeStandalone && (i = t(this.app.iframe).offset(), e.left += i.left, e.top += i.top), this.$inputor.is("[contentEditable]") && (e = this.cur_rect || (this.cur_rect = e)), n = this.app.document.selection ? 0 : 2, {
                    left: e.left,
                    top: e.top,
                    bottom: e.top + e.height + n
                }
            }, e.prototype.reset_rect = function() {
                if (this.$inputor.is("[contentEditable]")) return this.cur_rect = null
            }, e.prototype.mark_range = function() {
                var t;
                if (this.$inputor.is("[contentEditable]")) return this.app.window.getSelection && (t = this.app.window.getSelection()).rangeCount > 0 ? this.range = t.getRangeAt(0) : this.app.document.selection ? this.ie8_range = this.app.document.selection.createRange() : void 0
            }, e.prototype.insert_content_for = function(e) {
                var i, n, r;
                return n = e.data("value"), r = this.get_opt("insert_tpl"), this.$inputor.is("textarea, input") || !r ? n : (i = t.extend({}, e.data("item-data"), {
                    "atwho-data-value": n,
                    "atwho-at": this.at
                }), this.callbacks("tpl_eval").call(this, r, i))
            }, e.prototype.insert = function(e, i) {
                var n, r, o, s, a, h, l, u, c;
                return n = this.$inputor, c = this.callbacks("inserting_wrapper").call(this, n, e, this.get_opt("suffix")), n.is("textarea, input") ? (h = n.val(), l = h.slice(0, Math.max(this.query.head_pos - this.at.length, 0)), u = "" + l + c + h.slice(this.query.end_pos || 0), n.val(u), n.caret("pos", l.length + c.length, {
                    iframe: this.app.iframe
                })) : (s = this.range) ? (o = s.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length, s.setStart(s.endContainer, Math.max(o, 0)), s.setEnd(s.endContainer, s.endOffset), s.deleteContents(), r = t(c, this.app.document)[0], s.insertNode(r), s.setEndAfter(r), s.collapse(!1), a = this.app.window.getSelection(), a.removeAllRanges(), a.addRange(s)) : (s = this.ie8_range) && (s.moveStart("character", this.query.end_pos - this.query.head_pos - this.at.length), s.pasteHTML(c), s.collapse(!1), s.select()), n.is(":focus") || n.focus(), n.change()
            }, e.prototype.render_view = function(t) {
                var e;
                return e = this.get_opt("search_key"), t = this.callbacks("sorter").call(this, this.query.text, t.slice(0, 1001), e), this.view.render(t.slice(0, this.get_opt("limit")))
            }, e.prototype.look_up = function() {
                var e, i;
                if (e = this.catch_query()) return i = function(t) {
                    return t && t.length > 0 ? this.render_view(t) : this.view.hide()
                }, this.model.query(e.text, t.proxy(i, this)), e
            }, e
        }(), s = function() {
            function e(t) {
                this.context = t, this.at = this.context.at, this.storage = this.context.$inputor
            }
            return e.prototype.destroy = function() {
                return this.storage.data(this.at, null)
            }, e.prototype.saved = function() {
                return this.fetch() > 0
            }, e.prototype.query = function(t, e) {
                var i, n, r;
                return i = this.fetch(), n = this.context.get_opt("search_key"), i = this.context.callbacks("filter").call(this.context, t, i, n) || [], r = this.context.callbacks("remote_filter"), i.length > 0 || !r && 0 === i.length ? e(i) : r.call(this.context, t, e)
            }, e.prototype.fetch = function() {
                return this.storage.data(this.at) || []
            }, e.prototype.save = function(t) {
                return this.storage.data(this.at, this.context.callbacks("before_save").call(this.context, t || []))
            }, e.prototype.load = function(t) {
                if (!this.saved() && t) return this._load(t)
            }, e.prototype.reload = function(t) {
                return this._load(t)
            }, e.prototype._load = function(e) {
                return "string" == typeof e ? t.ajax(e, {
                    dataType: "json"
                }).done(function(t) {
                    return function(e) {
                        return t.save(e)
                    }
                }(this)) : this.save(e)
            }, e
        }(), a = function() {
            function e(e) {
                this.context = e, this.$el = t("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"), this.timeout_id = null, this.context.$el.append(this.$el), this.bind_event()
            }
            return e.prototype.init = function() {
                var t;
                return t = this.context.get_opt("alias") || this.context.at.charCodeAt(0), this.$el.attr({
                    id: "at-view-" + t
                })
            }, e.prototype.destroy = function() {
                return this.$el.remove()
            }, e.prototype.bind_event = function() {
                var e;
                return e = this.$el.find("ul"), e.on("mouseenter.atwho-view", "li", function(i) {
                    return e.find(".cur").removeClass("cur"), t(i.currentTarget).addClass("cur")
                }).on("click", function(t) {
                    return function(e) {
                        return t.choose(e), e.preventDefault()
                    }
                }(this))
            }, e.prototype.visible = function() {
                return this.$el.is(":visible")
            }, e.prototype.choose = function(t) {
                var e, i;
                if ((e = this.$el.find(".cur")).length && (i = this.context.insert_content_for(e), this.context.insert(this.context.callbacks("before_insert").call(this.context, i, e), e), this.context.trigger("inserted", [e, t]), this.hide(t)), this.context.get_opt("hide_without_suffix")) return this.stop_showing = !0
            }, e.prototype.reposition = function(e) {
                var i, n, r, o;
                return o = this.context.app.iframeStandalone ? this.context.app.window : window, e.bottom + this.$el.height() - t(o).scrollTop() > t(o).height() && (e.bottom = e.top - this.$el.height()), e.left > (n = t(o).width() - this.$el.width() - 5) && (e.left = n), i = {
                    left: e.left,
                    top: e.bottom
                }, null != (r = this.context.callbacks("before_reposition")) && r.call(this.context, i), this.$el.offset(i), this.context.trigger("reposition", [i])
            }, e.prototype.next = function() {
                var t, e;
                return t = this.$el.find(".cur").removeClass("cur"), e = t.next(), e.length || (e = this.$el.find("li:first")), e.addClass("cur")
            }, e.prototype.prev = function() {
                var t, e;
                return t = this.$el.find(".cur").removeClass("cur"), e = t.prev(), e.length || (e = this.$el.find("li:last")), e.addClass("cur")
            }, e.prototype.show = function() {
                var t;
                return this.stop_showing ? void(this.stop_showing = !1) : (this.context.mark_range(), this.visible() || (this.$el.show(), this.context.trigger("shown")), (t = this.context.rect()) ? this.reposition(t) : void 0)
            }, e.prototype.hide = function(t, e) {
                var i;
                if (this.visible()) return isNaN(e) ? (this.context.reset_rect(), this.$el.hide(), this.context.trigger("hidden", [t])) : (i = function(t) {
                    return function() {
                        return t.hide()
                    }
                }(this), clearTimeout(this.timeout_id), this.timeout_id = setTimeout(i, e))
            }, e.prototype.render = function(e) {
                var i, n, r, o, s, a, h;
                if (!(t.isArray(e) && e.length > 0)) return void this.hide();
                for (this.$el.find("ul").empty(), n = this.$el.find("ul"), s = this.context.get_opt("tpl"), a = 0, h = e.length; a < h; a++) r = e[a], r = t.extend({}, r, {
                    "atwho-at": this.context.at
                }), o = this.context.callbacks("tpl_eval").call(this.context, s, r), i = t(this.context.callbacks("highlighter").call(this.context, o, this.context.query.text)), i.data("item-data", r), n.append(i);
                return this.show(), this.context.get_opt("highlight_first") ? n.find("li:first").addClass("cur") : void 0
            }, e
        }(), o = {
            DOWN: 40,
            UP: 38,
            ESC: 27,
            TAB: 9,
            ENTER: 13,
            CTRL: 17,
            P: 80,
            N: 78
        }, r = {
            before_save: function(e) {
                var i, n, r, o;
                if (!t.isArray(e)) return e;
                for (o = [], n = 0, r = e.length; n < r; n++) i = e[n], t.isPlainObject(i) ? o.push(i) : o.push({
                    name: i
                });
                return o
            },
            matcher: function(t, e, i) {
                var n, r, o, s;
                return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), i && (t = "(?:^|\\s)" + t), o = decodeURI("%C3%80"), s = decodeURI("%C3%BF"), r = new RegExp("" + t + "([A-Za-z" + o + "-" + s + "0-9_+-]*)$|" + t + "([^\\x00-\\xff]*)$", "gi"), n = r.exec(e), n ? n[2] || n[1] : null
            },
            filter: function(t, e, i) {
                var n, r, o, s;
                for (s = [], r = 0, o = e.length; r < o; r++) n = e[r], ~new String(n[i]).toLowerCase().indexOf(t.toLowerCase()) && s.push(n);
                return s
            },
            remote_filter: null,
            sorter: function(t, e, i) {
                var n, r, o, s;
                if (!t) return e;
                for (s = [], r = 0, o = e.length; r < o; r++) n = e[r], n.atwho_order = new String(n[i]).toLowerCase().indexOf(t.toLowerCase()), n.atwho_order > -1 && s.push(n);
                return s.sort(function(t, e) {
                    return t.atwho_order - e.atwho_order
                })
            },
            tpl_eval: function(t, e) {
                var i;
                try {
                    return t.replace(/\$\{([^\}]*)\}/g, function(t, i, n) {
                        return e[i]
                    })
                } catch (t) {
                    return i = t, ""
                }
            },
            highlighter: function(t, e) {
                var i;
                return e ? (i = new RegExp(">\\s*(\\w*?)(" + e.replace("+", "\\+") + ")(\\w*)\\s*<", "ig"), t.replace(i, function(t, e, i, n) {
                    return "> " + e + "<strong>" + i + "</strong>" + n + " <"
                })) : t
            },
            before_insert: function(t, e) {
                return t
            },
            inserting_wrapper: function(t, e, i) {
                var n, r;
                return n = "" === i ? i : i || " ", t.is("textarea, input") ? "" + e + n : "true" === t.attr("contentEditable") ? (n = "" === i ? i : i || "&nbsp;", /firefox/i.test(navigator.userAgent) ? r = "<span>" + e + n + "</span>" : (i = "<span contenteditable='false'>" + n + "<span>", r = "<span contenteditable='false'>" + e + i + "</span>"), this.app.document.selection && (r = "<span contenteditable='true'>" + e + "</span>"), r) : void 0
            }
        }, e = {
            load: function(t, e) {
                var i;
                if (i = this.controller(t)) return i.model.load(e)
            },
            setIframe: function(t, e) {
                return this.setIframe(t, e), null
            },
            run: function() {
                return this.dispatch()
            },
            destroy: function() {
                return this.shutdown(), this.$inputor.data("atwho", null)
            }
        }, t.fn.atwho = function(n) {
            var r, o;
            return o = arguments, r = null, this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function() {
                var s, a;
                return (a = (s = t(this)).data("atwho")) || s.data("atwho", a = new i(this)), "object" != typeof n && n ? e[n] && a ? r = e[n].apply(a, Array.prototype.slice.call(o, 1)) : t.error("Method " + n + " does not exist on jQuery.caret") : a.reg(n.at, n)
            }), r || this
        }, t.fn.atwho.default = {
            at: void 0,
            alias: void 0,
            data: null,
            tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
            insert_tpl: "<span id='${id}'>${atwho-data-value}</span>",
            callbacks: r,
            search_key: "name",
            suffix: void 0,
            hide_without_suffix: !1,
            start_with_space: !0,
            highlight_first: !0,
            limit: 5,
            max_len: 20,
            display_timeout: 300,
            delay: null
        }
    })
}).call(this);
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var r;
        "undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof self && (r = self), r.markdownit = e()
    }
}(function() {
    var e;
    return function e(r, t, n) {
        function s(o, a) {
            if (!t[o]) {
                if (!r[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (i) return i(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = t[o] = {
                    exports: {}
                };
                r[o][0].call(u.exports, function(e) {
                    var t = r[o][1][e];
                    return s(t ? t : e)
                }, u, u.exports, e, r, t, n)
            }
            return t[o].exports
        }
        for (var i = "function" == typeof require && require, o = 0; o < n.length; o++) s(n[o]);
        return s
    }({
        1: [function(e, r, t) {
            "use strict";
            r.exports = {
                Aacute: "Á",
                aacute: "á",
                Abreve: "Ă",
                abreve: "ă",
                ac: "∾",
                acd: "∿",
                acE: "∾̳",
                Acirc: "Â",
                acirc: "â",
                acute: "´",
                Acy: "А",
                acy: "а",
                AElig: "Æ",
                aelig: "æ",
                af: "⁡",
                Afr: "𝔄",
                afr: "𝔞",
                Agrave: "À",
                agrave: "à",
                alefsym: "ℵ",
                aleph: "ℵ",
                Alpha: "Α",
                alpha: "α",
                Amacr: "Ā",
                amacr: "ā",
                amalg: "⨿",
                AMP: "&",
                amp: "&",
                And: "⩓",
                and: "∧",
                andand: "⩕",
                andd: "⩜",
                andslope: "⩘",
                andv: "⩚",
                ang: "∠",
                ange: "⦤",
                angle: "∠",
                angmsd: "∡",
                angmsdaa: "⦨",
                angmsdab: "⦩",
                angmsdac: "⦪",
                angmsdad: "⦫",
                angmsdae: "⦬",
                angmsdaf: "⦭",
                angmsdag: "⦮",
                angmsdah: "⦯",
                angrt: "∟",
                angrtvb: "⊾",
                angrtvbd: "⦝",
                angsph: "∢",
                angst: "Å",
                angzarr: "⍼",
                Aogon: "Ą",
                aogon: "ą",
                Aopf: "𝔸",
                aopf: "𝕒",
                ap: "≈",
                apacir: "⩯",
                apE: "⩰",
                ape: "≊",
                apid: "≋",
                apos: "'",
                ApplyFunction: "⁡",
                approx: "≈",
                approxeq: "≊",
                Aring: "Å",
                aring: "å",
                Ascr: "𝒜",
                ascr: "𝒶",
                Assign: "≔",
                ast: "*",
                asymp: "≈",
                asympeq: "≍",
                Atilde: "Ã",
                atilde: "ã",
                Auml: "Ä",
                auml: "ä",
                awconint: "∳",
                awint: "⨑",
                backcong: "≌",
                backepsilon: "϶",
                backprime: "‵",
                backsim: "∽",
                backsimeq: "⋍",
                Backslash: "∖",
                Barv: "⫧",
                barvee: "⊽",
                Barwed: "⌆",
                barwed: "⌅",
                barwedge: "⌅",
                bbrk: "⎵",
                bbrktbrk: "⎶",
                bcong: "≌",
                Bcy: "Б",
                bcy: "б",
                bdquo: "„",
                becaus: "∵",
                Because: "∵",
                because: "∵",
                bemptyv: "⦰",
                bepsi: "϶",
                bernou: "ℬ",
                Bernoullis: "ℬ",
                Beta: "Β",
                beta: "β",
                beth: "ℶ",
                between: "≬",
                Bfr: "𝔅",
                bfr: "𝔟",
                bigcap: "⋂",
                bigcirc: "◯",
                bigcup: "⋃",
                bigodot: "⨀",
                bigoplus: "⨁",
                bigotimes: "⨂",
                bigsqcup: "⨆",
                bigstar: "★",
                bigtriangledown: "▽",
                bigtriangleup: "△",
                biguplus: "⨄",
                bigvee: "⋁",
                bigwedge: "⋀",
                bkarow: "⤍",
                blacklozenge: "⧫",
                blacksquare: "▪",
                blacktriangle: "▴",
                blacktriangledown: "▾",
                blacktriangleleft: "◂",
                blacktriangleright: "▸",
                blank: "␣",
                blk12: "▒",
                blk14: "░",
                blk34: "▓",
                block: "█",
                bne: "=⃥",
                bnequiv: "≡⃥",
                bNot: "⫭",
                bnot: "⌐",
                Bopf: "𝔹",
                bopf: "𝕓",
                bot: "⊥",
                bottom: "⊥",
                bowtie: "⋈",
                boxbox: "⧉",
                boxDL: "╗",
                boxDl: "╖",
                boxdL: "╕",
                boxdl: "┐",
                boxDR: "╔",
                boxDr: "╓",
                boxdR: "╒",
                boxdr: "┌",
                boxH: "═",
                boxh: "─",
                boxHD: "╦",
                boxHd: "╤",
                boxhD: "╥",
                boxhd: "┬",
                boxHU: "╩",
                boxHu: "╧",
                boxhU: "╨",
                boxhu: "┴",
                boxminus: "⊟",
                boxplus: "⊞",
                boxtimes: "⊠",
                boxUL: "╝",
                boxUl: "╜",
                boxuL: "╛",
                boxul: "┘",
                boxUR: "╚",
                boxUr: "╙",
                boxuR: "╘",
                boxur: "└",
                boxV: "║",
                boxv: "│",
                boxVH: "╬",
                boxVh: "╫",
                boxvH: "╪",
                boxvh: "┼",
                boxVL: "╣",
                boxVl: "╢",
                boxvL: "╡",
                boxvl: "┤",
                boxVR: "╠",
                boxVr: "╟",
                boxvR: "╞",
                boxvr: "├",
                bprime: "‵",
                Breve: "˘",
                breve: "˘",
                brvbar: "¦",
                Bscr: "ℬ",
                bscr: "𝒷",
                bsemi: "⁏",
                bsim: "∽",
                bsime: "⋍",
                bsol: "\\",
                bsolb: "⧅",
                bsolhsub: "⟈",
                bull: "•",
                bullet: "•",
                bump: "≎",
                bumpE: "⪮",
                bumpe: "≏",
                Bumpeq: "≎",
                bumpeq: "≏",
                Cacute: "Ć",
                cacute: "ć",
                Cap: "⋒",
                cap: "∩",
                capand: "⩄",
                capbrcup: "⩉",
                capcap: "⩋",
                capcup: "⩇",
                capdot: "⩀",
                CapitalDifferentialD: "ⅅ",
                caps: "∩︀",
                caret: "⁁",
                caron: "ˇ",
                Cayleys: "ℭ",
                ccaps: "⩍",
                Ccaron: "Č",
                ccaron: "č",
                Ccedil: "Ç",
                ccedil: "ç",
                Ccirc: "Ĉ",
                ccirc: "ĉ",
                Cconint: "∰",
                ccups: "⩌",
                ccupssm: "⩐",
                Cdot: "Ċ",
                cdot: "ċ",
                cedil: "¸",
                Cedilla: "¸",
                cemptyv: "⦲",
                cent: "¢",
                CenterDot: "·",
                centerdot: "·",
                Cfr: "ℭ",
                cfr: "𝔠",
                CHcy: "Ч",
                chcy: "ч",
                check: "✓",
                checkmark: "✓",
                Chi: "Χ",
                chi: "χ",
                cir: "○",
                circ: "ˆ",
                circeq: "≗",
                circlearrowleft: "↺",
                circlearrowright: "↻",
                circledast: "⊛",
                circledcirc: "⊚",
                circleddash: "⊝",
                CircleDot: "⊙",
                circledR: "®",
                circledS: "Ⓢ",
                CircleMinus: "⊖",
                CirclePlus: "⊕",
                CircleTimes: "⊗",
                cirE: "⧃",
                cire: "≗",
                cirfnint: "⨐",
                cirmid: "⫯",
                cirscir: "⧂",
                ClockwiseContourIntegral: "∲",
                CloseCurlyDoubleQuote: "”",
                CloseCurlyQuote: "’",
                clubs: "♣",
                clubsuit: "♣",
                Colon: "∷",
                colon: ":",
                Colone: "⩴",
                colone: "≔",
                coloneq: "≔",
                comma: ",",
                commat: "@",
                comp: "∁",
                compfn: "∘",
                complement: "∁",
                complexes: "ℂ",
                cong: "≅",
                congdot: "⩭",
                Congruent: "≡",
                Conint: "∯",
                conint: "∮",
                ContourIntegral: "∮",
                Copf: "ℂ",
                copf: "𝕔",
                coprod: "∐",
                Coproduct: "∐",
                COPY: "©",
                copy: "©",
                copysr: "℗",
                CounterClockwiseContourIntegral: "∳",
                crarr: "↵",
                Cross: "⨯",
                cross: "✗",
                Cscr: "𝒞",
                cscr: "𝒸",
                csub: "⫏",
                csube: "⫑",
                csup: "⫐",
                csupe: "⫒",
                ctdot: "⋯",
                cudarrl: "⤸",
                cudarrr: "⤵",
                cuepr: "⋞",
                cuesc: "⋟",
                cularr: "↶",
                cularrp: "⤽",
                Cup: "⋓",
                cup: "∪",
                cupbrcap: "⩈",
                CupCap: "≍",
                cupcap: "⩆",
                cupcup: "⩊",
                cupdot: "⊍",
                cupor: "⩅",
                cups: "∪︀",
                curarr: "↷",
                curarrm: "⤼",
                curlyeqprec: "⋞",
                curlyeqsucc: "⋟",
                curlyvee: "⋎",
                curlywedge: "⋏",
                curren: "¤",
                curvearrowleft: "↶",
                curvearrowright: "↷",
                cuvee: "⋎",
                cuwed: "⋏",
                cwconint: "∲",
                cwint: "∱",
                cylcty: "⌭",
                Dagger: "‡",
                dagger: "†",
                daleth: "ℸ",
                Darr: "↡",
                dArr: "⇓",
                darr: "↓",
                dash: "‐",
                Dashv: "⫤",
                dashv: "⊣",
                dbkarow: "⤏",
                dblac: "˝",
                Dcaron: "Ď",
                dcaron: "ď",
                Dcy: "Д",
                dcy: "д",
                DD: "ⅅ",
                dd: "ⅆ",
                ddagger: "‡",
                ddarr: "⇊",
                DDotrahd: "⤑",
                ddotseq: "⩷",
                deg: "°",
                Del: "∇",
                Delta: "Δ",
                delta: "δ",
                demptyv: "⦱",
                dfisht: "⥿",
                Dfr: "𝔇",
                dfr: "𝔡",
                dHar: "⥥",
                dharl: "⇃",
                dharr: "⇂",
                DiacriticalAcute: "´",
                DiacriticalDot: "˙",
                DiacriticalDoubleAcute: "˝",
                DiacriticalGrave: "`",
                DiacriticalTilde: "˜",
                diam: "⋄",
                Diamond: "⋄",
                diamond: "⋄",
                diamondsuit: "♦",
                diams: "♦",
                die: "¨",
                DifferentialD: "ⅆ",
                digamma: "ϝ",
                disin: "⋲",
                div: "÷",
                divide: "÷",
                divideontimes: "⋇",
                divonx: "⋇",
                DJcy: "Ђ",
                djcy: "ђ",
                dlcorn: "⌞",
                dlcrop: "⌍",
                dollar: "$",
                Dopf: "𝔻",
                dopf: "𝕕",
                Dot: "¨",
                dot: "˙",
                DotDot: "⃜",
                doteq: "≐",
                doteqdot: "≑",
                DotEqual: "≐",
                dotminus: "∸",
                dotplus: "∔",
                dotsquare: "⊡",
                doublebarwedge: "⌆",
                DoubleContourIntegral: "∯",
                DoubleDot: "¨",
                DoubleDownArrow: "⇓",
                DoubleLeftArrow: "⇐",
                DoubleLeftRightArrow: "⇔",
                DoubleLeftTee: "⫤",
                DoubleLongLeftArrow: "⟸",
                DoubleLongLeftRightArrow: "⟺",
                DoubleLongRightArrow: "⟹",
                DoubleRightArrow: "⇒",
                DoubleRightTee: "⊨",
                DoubleUpArrow: "⇑",
                DoubleUpDownArrow: "⇕",
                DoubleVerticalBar: "∥",
                DownArrow: "↓",
                Downarrow: "⇓",
                downarrow: "↓",
                DownArrowBar: "⤓",
                DownArrowUpArrow: "⇵",
                DownBreve: "̑",
                downdownarrows: "⇊",
                downharpoonleft: "⇃",
                downharpoonright: "⇂",
                DownLeftRightVector: "⥐",
                DownLeftTeeVector: "⥞",
                DownLeftVector: "↽",
                DownLeftVectorBar: "⥖",
                DownRightTeeVector: "⥟",
                DownRightVector: "⇁",
                DownRightVectorBar: "⥗",
                DownTee: "⊤",
                DownTeeArrow: "↧",
                drbkarow: "⤐",
                drcorn: "⌟",
                drcrop: "⌌",
                Dscr: "𝒟",
                dscr: "𝒹",
                DScy: "Ѕ",
                dscy: "ѕ",
                dsol: "⧶",
                Dstrok: "Đ",
                dstrok: "đ",
                dtdot: "⋱",
                dtri: "▿",
                dtrif: "▾",
                duarr: "⇵",
                duhar: "⥯",
                dwangle: "⦦",
                DZcy: "Џ",
                dzcy: "џ",
                dzigrarr: "⟿",
                Eacute: "É",
                eacute: "é",
                easter: "⩮",
                Ecaron: "Ě",
                ecaron: "ě",
                ecir: "≖",
                Ecirc: "Ê",
                ecirc: "ê",
                ecolon: "≕",
                Ecy: "Э",
                ecy: "э",
                eDDot: "⩷",
                Edot: "Ė",
                eDot: "≑",
                edot: "ė",
                ee: "ⅇ",
                efDot: "≒",
                Efr: "𝔈",
                efr: "𝔢",
                eg: "⪚",
                Egrave: "È",
                egrave: "è",
                egs: "⪖",
                egsdot: "⪘",
                el: "⪙",
                Element: "∈",
                elinters: "⏧",
                ell: "ℓ",
                els: "⪕",
                elsdot: "⪗",
                Emacr: "Ē",
                emacr: "ē",
                empty: "∅",
                emptyset: "∅",
                EmptySmallSquare: "◻",
                emptyv: "∅",
                EmptyVerySmallSquare: "▫",
                emsp: " ",
                emsp13: " ",
                emsp14: " ",
                ENG: "Ŋ",
                eng: "ŋ",
                ensp: " ",
                Eogon: "Ę",
                eogon: "ę",
                Eopf: "𝔼",
                eopf: "𝕖",
                epar: "⋕",
                eparsl: "⧣",
                eplus: "⩱",
                epsi: "ε",
                Epsilon: "Ε",
                epsilon: "ε",
                epsiv: "ϵ",
                eqcirc: "≖",
                eqcolon: "≕",
                eqsim: "≂",
                eqslantgtr: "⪖",
                eqslantless: "⪕",
                Equal: "⩵",
                equals: "=",
                EqualTilde: "≂",
                equest: "≟",
                Equilibrium: "⇌",
                equiv: "≡",
                equivDD: "⩸",
                eqvparsl: "⧥",
                erarr: "⥱",
                erDot: "≓",
                Escr: "ℰ",
                escr: "ℯ",
                esdot: "≐",
                Esim: "⩳",
                esim: "≂",
                Eta: "Η",
                eta: "η",
                ETH: "Ð",
                eth: "ð",
                Euml: "Ë",
                euml: "ë",
                euro: "€",
                excl: "!",
                exist: "∃",
                Exists: "∃",
                expectation: "ℰ",
                ExponentialE: "ⅇ",
                exponentiale: "ⅇ",
                fallingdotseq: "≒",
                Fcy: "Ф",
                fcy: "ф",
                female: "♀",
                ffilig: "ﬃ",
                fflig: "ﬀ",
                ffllig: "ﬄ",
                Ffr: "𝔉",
                ffr: "𝔣",
                filig: "ﬁ",
                FilledSmallSquare: "◼",
                FilledVerySmallSquare: "▪",
                fjlig: "fj",
                flat: "♭",
                fllig: "ﬂ",
                fltns: "▱",
                fnof: "ƒ",
                Fopf: "𝔽",
                fopf: "𝕗",
                ForAll: "∀",
                forall: "∀",
                fork: "⋔",
                forkv: "⫙",
                Fouriertrf: "ℱ",
                fpartint: "⨍",
                frac12: "½",
                frac13: "⅓",
                frac14: "¼",
                frac15: "⅕",
                frac16: "⅙",
                frac18: "⅛",
                frac23: "⅔",
                frac25: "⅖",
                frac34: "¾",
                frac35: "⅗",
                frac38: "⅜",
                frac45: "⅘",
                frac56: "⅚",
                frac58: "⅝",
                frac78: "⅞",
                frasl: "⁄",
                frown: "⌢",
                Fscr: "ℱ",
                fscr: "𝒻",
                gacute: "ǵ",
                Gamma: "Γ",
                gamma: "γ",
                Gammad: "Ϝ",
                gammad: "ϝ",
                gap: "⪆",
                Gbreve: "Ğ",
                gbreve: "ğ",
                Gcedil: "Ģ",
                Gcirc: "Ĝ",
                gcirc: "ĝ",
                Gcy: "Г",
                gcy: "г",
                Gdot: "Ġ",
                gdot: "ġ",
                gE: "≧",
                ge: "≥",
                gEl: "⪌",
                gel: "⋛",
                geq: "≥",
                geqq: "≧",
                geqslant: "⩾",
                ges: "⩾",
                gescc: "⪩",
                gesdot: "⪀",
                gesdoto: "⪂",
                gesdotol: "⪄",
                gesl: "⋛︀",
                gesles: "⪔",
                Gfr: "𝔊",
                gfr: "𝔤",
                Gg: "⋙",
                gg: "≫",
                ggg: "⋙",
                gimel: "ℷ",
                GJcy: "Ѓ",
                gjcy: "ѓ",
                gl: "≷",
                gla: "⪥",
                glE: "⪒",
                glj: "⪤",
                gnap: "⪊",
                gnapprox: "⪊",
                gnE: "≩",
                gne: "⪈",
                gneq: "⪈",
                gneqq: "≩",
                gnsim: "⋧",
                Gopf: "𝔾",
                gopf: "𝕘",
                grave: "`",
                GreaterEqual: "≥",
                GreaterEqualLess: "⋛",
                GreaterFullEqual: "≧",
                GreaterGreater: "⪢",
                GreaterLess: "≷",
                GreaterSlantEqual: "⩾",
                GreaterTilde: "≳",
                Gscr: "𝒢",
                gscr: "ℊ",
                gsim: "≳",
                gsime: "⪎",
                gsiml: "⪐",
                GT: ">",
                Gt: "≫",
                gt: ">",
                gtcc: "⪧",
                gtcir: "⩺",
                gtdot: "⋗",
                gtlPar: "⦕",
                gtquest: "⩼",
                gtrapprox: "⪆",
                gtrarr: "⥸",
                gtrdot: "⋗",
                gtreqless: "⋛",
                gtreqqless: "⪌",
                gtrless: "≷",
                gtrsim: "≳",
                gvertneqq: "≩︀",
                gvnE: "≩︀",
                Hacek: "ˇ",
                hairsp: " ",
                half: "½",
                hamilt: "ℋ",
                HARDcy: "Ъ",
                hardcy: "ъ",
                hArr: "⇔",
                harr: "↔",
                harrcir: "⥈",
                harrw: "↭",
                Hat: "^",
                hbar: "ℏ",
                Hcirc: "Ĥ",
                hcirc: "ĥ",
                hearts: "♥",
                heartsuit: "♥",
                hellip: "…",
                hercon: "⊹",
                Hfr: "ℌ",
                hfr: "𝔥",
                HilbertSpace: "ℋ",
                hksearow: "⤥",
                hkswarow: "⤦",
                hoarr: "⇿",
                homtht: "∻",
                hookleftarrow: "↩",
                hookrightarrow: "↪",
                Hopf: "ℍ",
                hopf: "𝕙",
                horbar: "―",
                HorizontalLine: "─",
                Hscr: "ℋ",
                hscr: "𝒽",
                hslash: "ℏ",
                Hstrok: "Ħ",
                hstrok: "ħ",
                HumpDownHump: "≎",
                HumpEqual: "≏",
                hybull: "⁃",
                hyphen: "‐",
                Iacute: "Í",
                iacute: "í",
                ic: "⁣",
                Icirc: "Î",
                icirc: "î",
                Icy: "И",
                icy: "и",
                Idot: "İ",
                IEcy: "Е",
                iecy: "е",
                iexcl: "¡",
                iff: "⇔",
                Ifr: "ℑ",
                ifr: "𝔦",
                Igrave: "Ì",
                igrave: "ì",
                ii: "ⅈ",
                iiiint: "⨌",
                iiint: "∭",
                iinfin: "⧜",
                iiota: "℩",
                IJlig: "Ĳ",
                ijlig: "ĳ",
                Im: "ℑ",
                Imacr: "Ī",
                imacr: "ī",
                image: "ℑ",
                ImaginaryI: "ⅈ",
                imagline: "ℐ",
                imagpart: "ℑ",
                imath: "ı",
                imof: "⊷",
                imped: "Ƶ",
                Implies: "⇒",
                in: "∈",
                incare: "℅",
                infin: "∞",
                infintie: "⧝",
                inodot: "ı",
                Int: "∬",
                int: "∫",
                intcal: "⊺",
                integers: "ℤ",
                Integral: "∫",
                intercal: "⊺",
                Intersection: "⋂",
                intlarhk: "⨗",
                intprod: "⨼",
                InvisibleComma: "⁣",
                InvisibleTimes: "⁢",
                IOcy: "Ё",
                iocy: "ё",
                Iogon: "Į",
                iogon: "į",
                Iopf: "𝕀",
                iopf: "𝕚",
                Iota: "Ι",
                iota: "ι",
                iprod: "⨼",
                iquest: "¿",
                Iscr: "ℐ",
                iscr: "𝒾",
                isin: "∈",
                isindot: "⋵",
                isinE: "⋹",
                isins: "⋴",
                isinsv: "⋳",
                isinv: "∈",
                it: "⁢",
                Itilde: "Ĩ",
                itilde: "ĩ",
                Iukcy: "І",
                iukcy: "і",
                Iuml: "Ï",
                iuml: "ï",
                Jcirc: "Ĵ",
                jcirc: "ĵ",
                Jcy: "Й",
                jcy: "й",
                Jfr: "𝔍",
                jfr: "𝔧",
                jmath: "ȷ",
                Jopf: "𝕁",
                jopf: "𝕛",
                Jscr: "𝒥",
                jscr: "𝒿",
                Jsercy: "Ј",
                jsercy: "ј",
                Jukcy: "Є",
                jukcy: "є",
                Kappa: "Κ",
                kappa: "κ",
                kappav: "ϰ",
                Kcedil: "Ķ",
                kcedil: "ķ",
                Kcy: "К",
                kcy: "к",
                Kfr: "𝔎",
                kfr: "𝔨",
                kgreen: "ĸ",
                KHcy: "Х",
                khcy: "х",
                KJcy: "Ќ",
                kjcy: "ќ",
                Kopf: "𝕂",
                kopf: "𝕜",
                Kscr: "𝒦",
                kscr: "𝓀",
                lAarr: "⇚",
                Lacute: "Ĺ",
                lacute: "ĺ",
                laemptyv: "⦴",
                lagran: "ℒ",
                Lambda: "Λ",
                lambda: "λ",
                Lang: "⟪",
                lang: "⟨",
                langd: "⦑",
                langle: "⟨",
                lap: "⪅",
                Laplacetrf: "ℒ",
                laquo: "«",
                Larr: "↞",
                lArr: "⇐",
                larr: "←",
                larrb: "⇤",
                larrbfs: "⤟",
                larrfs: "⤝",
                larrhk: "↩",
                larrlp: "↫",
                larrpl: "⤹",
                larrsim: "⥳",
                larrtl: "↢",
                lat: "⪫",
                lAtail: "⤛",
                latail: "⤙",
                late: "⪭",
                lates: "⪭︀",
                lBarr: "⤎",
                lbarr: "⤌",
                lbbrk: "❲",
                lbrace: "{",
                lbrack: "[",
                lbrke: "⦋",
                lbrksld: "⦏",
                lbrkslu: "⦍",
                Lcaron: "Ľ",
                lcaron: "ľ",
                Lcedil: "Ļ",
                lcedil: "ļ",
                lceil: "⌈",
                lcub: "{",
                Lcy: "Л",
                lcy: "л",
                ldca: "⤶",
                ldquo: "“",
                ldquor: "„",
                ldrdhar: "⥧",
                ldrushar: "⥋",
                ldsh: "↲",
                lE: "≦",
                le: "≤",
                LeftAngleBracket: "⟨",
                LeftArrow: "←",
                Leftarrow: "⇐",
                leftarrow: "←",
                LeftArrowBar: "⇤",
                LeftArrowRightArrow: "⇆",
                leftarrowtail: "↢",
                LeftCeiling: "⌈",
                LeftDoubleBracket: "⟦",
                LeftDownTeeVector: "⥡",
                LeftDownVector: "⇃",
                LeftDownVectorBar: "⥙",
                LeftFloor: "⌊",
                leftharpoondown: "↽",
                leftharpoonup: "↼",
                leftleftarrows: "⇇",
                LeftRightArrow: "↔",
                Leftrightarrow: "⇔",
                leftrightarrow: "↔",
                leftrightarrows: "⇆",
                leftrightharpoons: "⇋",
                leftrightsquigarrow: "↭",
                LeftRightVector: "⥎",
                LeftTee: "⊣",
                LeftTeeArrow: "↤",
                LeftTeeVector: "⥚",
                leftthreetimes: "⋋",
                LeftTriangle: "⊲",
                LeftTriangleBar: "⧏",
                LeftTriangleEqual: "⊴",
                LeftUpDownVector: "⥑",
                LeftUpTeeVector: "⥠",
                LeftUpVector: "↿",
                LeftUpVectorBar: "⥘",
                LeftVector: "↼",
                LeftVectorBar: "⥒",
                lEg: "⪋",
                leg: "⋚",
                leq: "≤",
                leqq: "≦",
                leqslant: "⩽",
                les: "⩽",
                lescc: "⪨",
                lesdot: "⩿",
                lesdoto: "⪁",
                lesdotor: "⪃",
                lesg: "⋚︀",
                lesges: "⪓",
                lessapprox: "⪅",
                lessdot: "⋖",
                lesseqgtr: "⋚",
                lesseqqgtr: "⪋",
                LessEqualGreater: "⋚",
                LessFullEqual: "≦",
                LessGreater: "≶",
                lessgtr: "≶",
                LessLess: "⪡",
                lesssim: "≲",
                LessSlantEqual: "⩽",
                LessTilde: "≲",
                lfisht: "⥼",
                lfloor: "⌊",
                Lfr: "𝔏",
                lfr: "𝔩",
                lg: "≶",
                lgE: "⪑",
                lHar: "⥢",
                lhard: "↽",
                lharu: "↼",
                lharul: "⥪",
                lhblk: "▄",
                LJcy: "Љ",
                ljcy: "љ",
                Ll: "⋘",
                ll: "≪",
                llarr: "⇇",
                llcorner: "⌞",
                Lleftarrow: "⇚",
                llhard: "⥫",
                lltri: "◺",
                Lmidot: "Ŀ",
                lmidot: "ŀ",
                lmoust: "⎰",
                lmoustache: "⎰",
                lnap: "⪉",
                lnapprox: "⪉",
                lnE: "≨",
                lne: "⪇",
                lneq: "⪇",
                lneqq: "≨",
                lnsim: "⋦",
                loang: "⟬",
                loarr: "⇽",
                lobrk: "⟦",
                LongLeftArrow: "⟵",
                Longleftarrow: "⟸",
                longleftarrow: "⟵",
                LongLeftRightArrow: "⟷",
                Longleftrightarrow: "⟺",
                longleftrightarrow: "⟷",
                longmapsto: "⟼",
                LongRightArrow: "⟶",
                Longrightarrow: "⟹",
                longrightarrow: "⟶",
                looparrowleft: "↫",
                looparrowright: "↬",
                lopar: "⦅",
                Lopf: "𝕃",
                lopf: "𝕝",
                loplus: "⨭",
                lotimes: "⨴",
                lowast: "∗",
                lowbar: "_",
                LowerLeftArrow: "↙",
                LowerRightArrow: "↘",
                loz: "◊",
                lozenge: "◊",
                lozf: "⧫",
                lpar: "(",
                lparlt: "⦓",
                lrarr: "⇆",
                lrcorner: "⌟",
                lrhar: "⇋",
                lrhard: "⥭",
                lrm: "‎",
                lrtri: "⊿",
                lsaquo: "‹",
                Lscr: "ℒ",
                lscr: "𝓁",
                Lsh: "↰",
                lsh: "↰",
                lsim: "≲",
                lsime: "⪍",
                lsimg: "⪏",
                lsqb: "[",
                lsquo: "‘",
                lsquor: "‚",
                Lstrok: "Ł",
                lstrok: "ł",
                LT: "<",
                Lt: "≪",
                lt: "<",
                ltcc: "⪦",
                ltcir: "⩹",
                ltdot: "⋖",
                lthree: "⋋",
                ltimes: "⋉",
                ltlarr: "⥶",
                ltquest: "⩻",
                ltri: "◃",
                ltrie: "⊴",
                ltrif: "◂",
                ltrPar: "⦖",
                lurdshar: "⥊",
                luruhar: "⥦",
                lvertneqq: "≨︀",
                lvnE: "≨︀",
                macr: "¯",
                male: "♂",
                malt: "✠",
                maltese: "✠",
                Map: "⤅",
                map: "↦",
                mapsto: "↦",
                mapstodown: "↧",
                mapstoleft: "↤",
                mapstoup: "↥",
                marker: "▮",
                mcomma: "⨩",
                Mcy: "М",
                mcy: "м",
                mdash: "—",
                mDDot: "∺",
                measuredangle: "∡",
                MediumSpace: " ",
                Mellintrf: "ℳ",
                Mfr: "𝔐",
                mfr: "𝔪",
                mho: "℧",
                micro: "µ",
                mid: "∣",
                midast: "*",
                midcir: "⫰",
                middot: "·",
                minus: "−",
                minusb: "⊟",
                minusd: "∸",
                minusdu: "⨪",
                MinusPlus: "∓",
                mlcp: "⫛",
                mldr: "…",
                mnplus: "∓",
                models: "⊧",
                Mopf: "𝕄",
                mopf: "𝕞",
                mp: "∓",
                Mscr: "ℳ",
                mscr: "𝓂",
                mstpos: "∾",
                Mu: "Μ",
                mu: "μ",
                multimap: "⊸",
                mumap: "⊸",
                nabla: "∇",
                Nacute: "Ń",
                nacute: "ń",
                nang: "∠⃒",
                nap: "≉",
                napE: "⩰̸",
                napid: "≋̸",
                napos: "ŉ",
                napprox: "≉",
                natur: "♮",
                natural: "♮",
                naturals: "ℕ",
                nbsp: " ",
                nbump: "≎̸",
                nbumpe: "≏̸",
                ncap: "⩃",
                Ncaron: "Ň",
                ncaron: "ň",
                Ncedil: "Ņ",
                ncedil: "ņ",
                ncong: "≇",
                ncongdot: "⩭̸",
                ncup: "⩂",
                Ncy: "Н",
                ncy: "н",
                ndash: "–",
                ne: "≠",
                nearhk: "⤤",
                neArr: "⇗",
                nearr: "↗",
                nearrow: "↗",
                nedot: "≐̸",
                NegativeMediumSpace: "​",
                NegativeThickSpace: "​",
                NegativeThinSpace: "​",
                NegativeVeryThinSpace: "​",
                nequiv: "≢",
                nesear: "⤨",
                nesim: "≂̸",
                NestedGreaterGreater: "≫",
                NestedLessLess: "≪",
                NewLine: "\n",
                nexist: "∄",
                nexists: "∄",
                Nfr: "𝔑",
                nfr: "𝔫",
                ngE: "≧̸",
                nge: "≱",
                ngeq: "≱",
                ngeqq: "≧̸",
                ngeqslant: "⩾̸",
                nges: "⩾̸",
                nGg: "⋙̸",
                ngsim: "≵",
                nGt: "≫⃒",
                ngt: "≯",
                ngtr: "≯",
                nGtv: "≫̸",
                nhArr: "⇎",
                nharr: "↮",
                nhpar: "⫲",
                ni: "∋",
                nis: "⋼",
                nisd: "⋺",
                niv: "∋",
                NJcy: "Њ",
                njcy: "њ",
                nlArr: "⇍",
                nlarr: "↚",
                nldr: "‥",
                nlE: "≦̸",
                nle: "≰",
                nLeftarrow: "⇍",
                nleftarrow: "↚",
                nLeftrightarrow: "⇎",
                nleftrightarrow: "↮",
                nleq: "≰",
                nleqq: "≦̸",
                nleqslant: "⩽̸",
                nles: "⩽̸",
                nless: "≮",
                nLl: "⋘̸",
                nlsim: "≴",
                nLt: "≪⃒",
                nlt: "≮",
                nltri: "⋪",
                nltrie: "⋬",
                nLtv: "≪̸",
                nmid: "∤",
                NoBreak: "⁠",
                NonBreakingSpace: " ",
                Nopf: "ℕ",
                nopf: "𝕟",
                Not: "⫬",
                not: "¬",
                NotCongruent: "≢",
                NotCupCap: "≭",
                NotDoubleVerticalBar: "∦",
                NotElement: "∉",
                NotEqual: "≠",
                NotEqualTilde: "≂̸",
                NotExists: "∄",
                NotGreater: "≯",
                NotGreaterEqual: "≱",
                NotGreaterFullEqual: "≧̸",
                NotGreaterGreater: "≫̸",
                NotGreaterLess: "≹",
                NotGreaterSlantEqual: "⩾̸",
                NotGreaterTilde: "≵",
                NotHumpDownHump: "≎̸",
                NotHumpEqual: "≏̸",
                notin: "∉",
                notindot: "⋵̸",
                notinE: "⋹̸",
                notinva: "∉",
                notinvb: "⋷",
                notinvc: "⋶",
                NotLeftTriangle: "⋪",
                NotLeftTriangleBar: "⧏̸",
                NotLeftTriangleEqual: "⋬",
                NotLess: "≮",
                NotLessEqual: "≰",
                NotLessGreater: "≸",
                NotLessLess: "≪̸",
                NotLessSlantEqual: "⩽̸",
                NotLessTilde: "≴",
                NotNestedGreaterGreater: "⪢̸",
                NotNestedLessLess: "⪡̸",
                notni: "∌",
                notniva: "∌",
                notnivb: "⋾",
                notnivc: "⋽",
                NotPrecedes: "⊀",
                NotPrecedesEqual: "⪯̸",
                NotPrecedesSlantEqual: "⋠",
                NotReverseElement: "∌",
                NotRightTriangle: "⋫",
                NotRightTriangleBar: "⧐̸",
                NotRightTriangleEqual: "⋭",
                NotSquareSubset: "⊏̸",
                NotSquareSubsetEqual: "⋢",
                NotSquareSuperset: "⊐̸",
                NotSquareSupersetEqual: "⋣",
                NotSubset: "⊂⃒",
                NotSubsetEqual: "⊈",
                NotSucceeds: "⊁",
                NotSucceedsEqual: "⪰̸",
                NotSucceedsSlantEqual: "⋡",
                NotSucceedsTilde: "≿̸",
                NotSuperset: "⊃⃒",
                NotSupersetEqual: "⊉",
                NotTilde: "≁",
                NotTildeEqual: "≄",
                NotTildeFullEqual: "≇",
                NotTildeTilde: "≉",
                NotVerticalBar: "∤",
                npar: "∦",
                nparallel: "∦",
                nparsl: "⫽⃥",
                npart: "∂̸",
                npolint: "⨔",
                npr: "⊀",
                nprcue: "⋠",
                npre: "⪯̸",
                nprec: "⊀",
                npreceq: "⪯̸",
                nrArr: "⇏",
                nrarr: "↛",
                nrarrc: "⤳̸",
                nrarrw: "↝̸",
                nRightarrow: "⇏",
                nrightarrow: "↛",
                nrtri: "⋫",
                nrtrie: "⋭",
                nsc: "⊁",
                nsccue: "⋡",
                nsce: "⪰̸",
                Nscr: "𝒩",
                nscr: "𝓃",
                nshortmid: "∤",
                nshortparallel: "∦",
                nsim: "≁",
                nsime: "≄",
                nsimeq: "≄",
                nsmid: "∤",
                nspar: "∦",
                nsqsube: "⋢",
                nsqsupe: "⋣",
                nsub: "⊄",
                nsubE: "⫅̸",
                nsube: "⊈",
                nsubset: "⊂⃒",
                nsubseteq: "⊈",
                nsubseteqq: "⫅̸",
                nsucc: "⊁",
                nsucceq: "⪰̸",
                nsup: "⊅",
                nsupE: "⫆̸",
                nsupe: "⊉",
                nsupset: "⊃⃒",
                nsupseteq: "⊉",
                nsupseteqq: "⫆̸",
                ntgl: "≹",
                Ntilde: "Ñ",
                ntilde: "ñ",
                ntlg: "≸",
                ntriangleleft: "⋪",
                ntrianglelefteq: "⋬",
                ntriangleright: "⋫",
                ntrianglerighteq: "⋭",
                Nu: "Ν",
                nu: "ν",
                num: "#",
                numero: "№",
                numsp: " ",
                nvap: "≍⃒",
                nVDash: "⊯",
                nVdash: "⊮",
                nvDash: "⊭",
                nvdash: "⊬",
                nvge: "≥⃒",
                nvgt: ">⃒",
                nvHarr: "⤄",
                nvinfin: "⧞",
                nvlArr: "⤂",
                nvle: "≤⃒",
                nvlt: "<⃒",
                nvltrie: "⊴⃒",
                nvrArr: "⤃",
                nvrtrie: "⊵⃒",
                nvsim: "∼⃒",
                nwarhk: "⤣",
                nwArr: "⇖",
                nwarr: "↖",
                nwarrow: "↖",
                nwnear: "⤧",
                Oacute: "Ó",
                oacute: "ó",
                oast: "⊛",
                ocir: "⊚",
                Ocirc: "Ô",
                ocirc: "ô",
                Ocy: "О",
                ocy: "о",
                odash: "⊝",
                Odblac: "Ő",
                odblac: "ő",
                odiv: "⨸",
                odot: "⊙",
                odsold: "⦼",
                OElig: "Œ",
                oelig: "œ",
                ofcir: "⦿",
                Ofr: "𝔒",
                ofr: "𝔬",
                ogon: "˛",
                Ograve: "Ò",
                ograve: "ò",
                ogt: "⧁",
                ohbar: "⦵",
                ohm: "Ω",
                oint: "∮",
                olarr: "↺",
                olcir: "⦾",
                olcross: "⦻",
                oline: "‾",
                olt: "⧀",
                Omacr: "Ō",
                omacr: "ō",
                Omega: "Ω",
                omega: "ω",
                Omicron: "Ο",
                omicron: "ο",
                omid: "⦶",
                ominus: "⊖",
                Oopf: "𝕆",
                oopf: "𝕠",
                opar: "⦷",
                OpenCurlyDoubleQuote: "“",
                OpenCurlyQuote: "‘",
                operp: "⦹",
                oplus: "⊕",
                Or: "⩔",
                or: "∨",
                orarr: "↻",
                ord: "⩝",
                order: "ℴ",
                orderof: "ℴ",
                ordf: "ª",
                ordm: "º",
                origof: "⊶",
                oror: "⩖",
                orslope: "⩗",
                orv: "⩛",
                oS: "Ⓢ",
                Oscr: "𝒪",
                oscr: "ℴ",
                Oslash: "Ø",
                oslash: "ø",
                osol: "⊘",
                Otilde: "Õ",
                otilde: "õ",
                Otimes: "⨷",
                otimes: "⊗",
                otimesas: "⨶",
                Ouml: "Ö",
                ouml: "ö",
                ovbar: "⌽",
                OverBar: "‾",
                OverBrace: "⏞",
                OverBracket: "⎴",
                OverParenthesis: "⏜",
                par: "∥",
                para: "¶",
                parallel: "∥",
                parsim: "⫳",
                parsl: "⫽",
                part: "∂",
                PartialD: "∂",
                Pcy: "П",
                pcy: "п",
                percnt: "%",
                period: ".",
                permil: "‰",
                perp: "⊥",
                pertenk: "‱",
                Pfr: "𝔓",
                pfr: "𝔭",
                Phi: "Φ",
                phi: "φ",
                phiv: "ϕ",
                phmmat: "ℳ",
                phone: "☎",
                Pi: "Π",
                pi: "π",
                pitchfork: "⋔",
                piv: "ϖ",
                planck: "ℏ",
                planckh: "ℎ",
                plankv: "ℏ",
                plus: "+",
                plusacir: "⨣",
                plusb: "⊞",
                pluscir: "⨢",
                plusdo: "∔",
                plusdu: "⨥",
                pluse: "⩲",
                PlusMinus: "±",
                plusmn: "±",
                plussim: "⨦",
                plustwo: "⨧",
                pm: "±",
                Poincareplane: "ℌ",
                pointint: "⨕",
                Popf: "ℙ",
                popf: "𝕡",
                pound: "£",
                Pr: "⪻",
                pr: "≺",
                prap: "⪷",
                prcue: "≼",
                prE: "⪳",
                pre: "⪯",
                prec: "≺",
                precapprox: "⪷",
                preccurlyeq: "≼",
                Precedes: "≺",
                PrecedesEqual: "⪯",
                PrecedesSlantEqual: "≼",
                PrecedesTilde: "≾",
                preceq: "⪯",
                precnapprox: "⪹",
                precneqq: "⪵",
                precnsim: "⋨",
                precsim: "≾",
                Prime: "″",
                prime: "′",
                primes: "ℙ",
                prnap: "⪹",
                prnE: "⪵",
                prnsim: "⋨",
                prod: "∏",
                Product: "∏",
                profalar: "⌮",
                profline: "⌒",
                profsurf: "⌓",
                prop: "∝",
                Proportion: "∷",
                Proportional: "∝",
                propto: "∝",
                prsim: "≾",
                prurel: "⊰",
                Pscr: "𝒫",
                pscr: "𝓅",
                Psi: "Ψ",
                psi: "ψ",
                puncsp: " ",
                Qfr: "𝔔",
                qfr: "𝔮",
                qint: "⨌",
                Qopf: "ℚ",
                qopf: "𝕢",
                qprime: "⁗",
                Qscr: "𝒬",
                qscr: "𝓆",
                quaternions: "ℍ",
                quatint: "⨖",
                quest: "?",
                questeq: "≟",
                QUOT: '"',
                quot: '"',
                rAarr: "⇛",
                race: "∽̱",
                Racute: "Ŕ",
                racute: "ŕ",
                radic: "√",
                raemptyv: "⦳",
                Rang: "⟫",
                rang: "⟩",
                rangd: "⦒",
                range: "⦥",
                rangle: "⟩",
                raquo: "»",
                Rarr: "↠",
                rArr: "⇒",
                rarr: "→",
                rarrap: "⥵",
                rarrb: "⇥",
                rarrbfs: "⤠",
                rarrc: "⤳",
                rarrfs: "⤞",
                rarrhk: "↪",
                rarrlp: "↬",
                rarrpl: "⥅",
                rarrsim: "⥴",
                Rarrtl: "⤖",
                rarrtl: "↣",
                rarrw: "↝",
                rAtail: "⤜",
                ratail: "⤚",
                ratio: "∶",
                rationals: "ℚ",
                RBarr: "⤐",
                rBarr: "⤏",
                rbarr: "⤍",
                rbbrk: "❳",
                rbrace: "}",
                rbrack: "]",
                rbrke: "⦌",
                rbrksld: "⦎",
                rbrkslu: "⦐",
                Rcaron: "Ř",
                rcaron: "ř",
                Rcedil: "Ŗ",
                rcedil: "ŗ",
                rceil: "⌉",
                rcub: "}",
                Rcy: "Р",
                rcy: "р",
                rdca: "⤷",
                rdldhar: "⥩",
                rdquo: "”",
                rdquor: "”",
                rdsh: "↳",
                Re: "ℜ",
                real: "ℜ",
                realine: "ℛ",
                realpart: "ℜ",
                reals: "ℝ",
                rect: "▭",
                REG: "®",
                reg: "®",
                ReverseElement: "∋",
                ReverseEquilibrium: "⇋",
                ReverseUpEquilibrium: "⥯",
                rfisht: "⥽",
                rfloor: "⌋",
                Rfr: "ℜ",
                rfr: "𝔯",
                rHar: "⥤",
                rhard: "⇁",
                rharu: "⇀",
                rharul: "⥬",
                Rho: "Ρ",
                rho: "ρ",
                rhov: "ϱ",
                RightAngleBracket: "⟩",
                RightArrow: "→",
                Rightarrow: "⇒",
                rightarrow: "→",
                RightArrowBar: "⇥",
                RightArrowLeftArrow: "⇄",
                rightarrowtail: "↣",
                RightCeiling: "⌉",
                RightDoubleBracket: "⟧",
                RightDownTeeVector: "⥝",
                RightDownVector: "⇂",
                RightDownVectorBar: "⥕",
                RightFloor: "⌋",
                rightharpoondown: "⇁",
                rightharpoonup: "⇀",
                rightleftarrows: "⇄",
                rightleftharpoons: "⇌",
                rightrightarrows: "⇉",
                rightsquigarrow: "↝",
                RightTee: "⊢",
                RightTeeArrow: "↦",
                RightTeeVector: "⥛",
                rightthreetimes: "⋌",
                RightTriangle: "⊳",
                RightTriangleBar: "⧐",
                RightTriangleEqual: "⊵",
                RightUpDownVector: "⥏",
                RightUpTeeVector: "⥜",
                RightUpVector: "↾",
                RightUpVectorBar: "⥔",
                RightVector: "⇀",
                RightVectorBar: "⥓",
                ring: "˚",
                risingdotseq: "≓",
                rlarr: "⇄",
                rlhar: "⇌",
                rlm: "‏",
                rmoust: "⎱",
                rmoustache: "⎱",
                rnmid: "⫮",
                roang: "⟭",
                roarr: "⇾",
                robrk: "⟧",
                ropar: "⦆",
                Ropf: "ℝ",
                ropf: "𝕣",
                roplus: "⨮",
                rotimes: "⨵",
                RoundImplies: "⥰",
                rpar: ")",
                rpargt: "⦔",
                rppolint: "⨒",
                rrarr: "⇉",
                Rrightarrow: "⇛",
                rsaquo: "›",
                Rscr: "ℛ",
                rscr: "𝓇",
                Rsh: "↱",
                rsh: "↱",
                rsqb: "]",
                rsquo: "’",
                rsquor: "’",
                rthree: "⋌",
                rtimes: "⋊",
                rtri: "▹",
                rtrie: "⊵",
                rtrif: "▸",
                rtriltri: "⧎",
                RuleDelayed: "⧴",
                ruluhar: "⥨",
                rx: "℞",
                Sacute: "Ś",
                sacute: "ś",
                sbquo: "‚",
                Sc: "⪼",
                sc: "≻",
                scap: "⪸",
                Scaron: "Š",
                scaron: "š",
                sccue: "≽",
                scE: "⪴",
                sce: "⪰",
                Scedil: "Ş",
                scedil: "ş",
                Scirc: "Ŝ",
                scirc: "ŝ",
                scnap: "⪺",
                scnE: "⪶",
                scnsim: "⋩",
                scpolint: "⨓",
                scsim: "≿",
                Scy: "С",
                scy: "с",
                sdot: "⋅",
                sdotb: "⊡",
                sdote: "⩦",
                searhk: "⤥",
                seArr: "⇘",
                searr: "↘",
                searrow: "↘",
                sect: "§",
                semi: ";",
                seswar: "⤩",
                setminus: "∖",
                setmn: "∖",
                sext: "✶",
                Sfr: "𝔖",
                sfr: "𝔰",
                sfrown: "⌢",
                sharp: "♯",
                SHCHcy: "Щ",
                shchcy: "щ",
                SHcy: "Ш",
                shcy: "ш",
                ShortDownArrow: "↓",
                ShortLeftArrow: "←",
                shortmid: "∣",
                shortparallel: "∥",
                ShortRightArrow: "→",
                ShortUpArrow: "↑",
                shy: "­",
                Sigma: "Σ",
                sigma: "σ",
                sigmaf: "ς",
                sigmav: "ς",
                sim: "∼",
                simdot: "⩪",
                sime: "≃",
                simeq: "≃",
                simg: "⪞",
                simgE: "⪠",
                siml: "⪝",
                simlE: "⪟",
                simne: "≆",
                simplus: "⨤",
                simrarr: "⥲",
                slarr: "←",
                SmallCircle: "∘",
                smallsetminus: "∖",
                smashp: "⨳",
                smeparsl: "⧤",
                smid: "∣",
                smile: "⌣",
                smt: "⪪",
                smte: "⪬",
                smtes: "⪬︀",
                SOFTcy: "Ь",
                softcy: "ь",
                sol: "/",
                solb: "⧄",
                solbar: "⌿",
                Sopf: "𝕊",
                sopf: "𝕤",
                spades: "♠",
                spadesuit: "♠",
                spar: "∥",
                sqcap: "⊓",
                sqcaps: "⊓︀",
                sqcup: "⊔",
                sqcups: "⊔︀",
                Sqrt: "√",
                sqsub: "⊏",
                sqsube: "⊑",
                sqsubset: "⊏",
                sqsubseteq: "⊑",
                sqsup: "⊐",
                sqsupe: "⊒",
                sqsupset: "⊐",
                sqsupseteq: "⊒",
                squ: "□",
                Square: "□",
                square: "□",
                SquareIntersection: "⊓",
                SquareSubset: "⊏",
                SquareSubsetEqual: "⊑",
                SquareSuperset: "⊐",
                SquareSupersetEqual: "⊒",
                SquareUnion: "⊔",
                squarf: "▪",
                squf: "▪",
                srarr: "→",
                Sscr: "𝒮",
                sscr: "𝓈",
                ssetmn: "∖",
                ssmile: "⌣",
                sstarf: "⋆",
                Star: "⋆",
                star: "☆",
                starf: "★",
                straightepsilon: "ϵ",
                straightphi: "ϕ",
                strns: "¯",
                Sub: "⋐",
                sub: "⊂",
                subdot: "⪽",
                subE: "⫅",
                sube: "⊆",
                subedot: "⫃",
                submult: "⫁",
                subnE: "⫋",
                subne: "⊊",
                subplus: "⪿",
                subrarr: "⥹",
                Subset: "⋐",
                subset: "⊂",
                subseteq: "⊆",
                subseteqq: "⫅",
                SubsetEqual: "⊆",
                subsetneq: "⊊",
                subsetneqq: "⫋",
                subsim: "⫇",
                subsub: "⫕",
                subsup: "⫓",
                succ: "≻",
                succapprox: "⪸",
                succcurlyeq: "≽",
                Succeeds: "≻",
                SucceedsEqual: "⪰",
                SucceedsSlantEqual: "≽",
                SucceedsTilde: "≿",
                succeq: "⪰",
                succnapprox: "⪺",
                succneqq: "⪶",
                succnsim: "⋩",
                succsim: "≿",
                SuchThat: "∋",
                Sum: "∑",
                sum: "∑",
                sung: "♪",
                Sup: "⋑",
                sup: "⊃",
                sup1: "¹",
                sup2: "²",
                sup3: "³",
                supdot: "⪾",
                supdsub: "⫘",
                supE: "⫆",
                supe: "⊇",
                supedot: "⫄",
                Superset: "⊃",
                SupersetEqual: "⊇",
                suphsol: "⟉",
                suphsub: "⫗",
                suplarr: "⥻",
                supmult: "⫂",
                supnE: "⫌",
                supne: "⊋",
                supplus: "⫀",
                Supset: "⋑",
                supset: "⊃",
                supseteq: "⊇",
                supseteqq: "⫆",
                supsetneq: "⊋",
                supsetneqq: "⫌",
                supsim: "⫈",
                supsub: "⫔",
                supsup: "⫖",
                swarhk: "⤦",
                swArr: "⇙",
                swarr: "↙",
                swarrow: "↙",
                swnwar: "⤪",
                szlig: "ß",
                Tab: "\t",
                target: "⌖",
                Tau: "Τ",
                tau: "τ",
                tbrk: "⎴",
                Tcaron: "Ť",
                tcaron: "ť",
                Tcedil: "Ţ",
                tcedil: "ţ",
                Tcy: "Т",
                tcy: "т",
                tdot: "⃛",
                telrec: "⌕",
                Tfr: "𝔗",
                tfr: "𝔱",
                there4: "∴",
                Therefore: "∴",
                therefore: "∴",
                Theta: "Θ",
                theta: "θ",
                thetasym: "ϑ",
                thetav: "ϑ",
                thickapprox: "≈",
                thicksim: "∼",
                ThickSpace: "  ",
                thinsp: " ",
                ThinSpace: " ",
                thkap: "≈",
                thksim: "∼",
                THORN: "Þ",
                thorn: "þ",
                Tilde: "∼",
                tilde: "˜",
                TildeEqual: "≃",
                TildeFullEqual: "≅",
                TildeTilde: "≈",
                times: "×",
                timesb: "⊠",
                timesbar: "⨱",
                timesd: "⨰",
                tint: "∭",
                toea: "⤨",
                top: "⊤",
                topbot: "⌶",
                topcir: "⫱",
                Topf: "𝕋",
                topf: "𝕥",
                topfork: "⫚",
                tosa: "⤩",
                tprime: "‴",
                TRADE: "™",
                trade: "™",
                triangle: "▵",
                triangledown: "▿",
                triangleleft: "◃",
                trianglelefteq: "⊴",
                triangleq: "≜",
                triangleright: "▹",
                trianglerighteq: "⊵",
                tridot: "◬",
                trie: "≜",
                triminus: "⨺",
                TripleDot: "⃛",
                triplus: "⨹",
                trisb: "⧍",
                tritime: "⨻",
                trpezium: "⏢",
                Tscr: "𝒯",
                tscr: "𝓉",
                TScy: "Ц",
                tscy: "ц",
                TSHcy: "Ћ",
                tshcy: "ћ",
                Tstrok: "Ŧ",
                tstrok: "ŧ",
                twixt: "≬",
                twoheadleftarrow: "↞",
                twoheadrightarrow: "↠",
                Uacute: "Ú",
                uacute: "ú",
                Uarr: "↟",
                uArr: "⇑",
                uarr: "↑",
                Uarrocir: "⥉",
                Ubrcy: "Ў",
                ubrcy: "ў",
                Ubreve: "Ŭ",
                ubreve: "ŭ",
                Ucirc: "Û",
                ucirc: "û",
                Ucy: "У",
                ucy: "у",
                udarr: "⇅",
                Udblac: "Ű",
                udblac: "ű",
                udhar: "⥮",
                ufisht: "⥾",
                Ufr: "𝔘",
                ufr: "𝔲",
                Ugrave: "Ù",
                ugrave: "ù",
                uHar: "⥣",
                uharl: "↿",
                uharr: "↾",
                uhblk: "▀",
                ulcorn: "⌜",
                ulcorner: "⌜",
                ulcrop: "⌏",
                ultri: "◸",
                Umacr: "Ū",
                umacr: "ū",
                uml: "¨",
                UnderBar: "_",
                UnderBrace: "⏟",
                UnderBracket: "⎵",
                UnderParenthesis: "⏝",
                Union: "⋃",
                UnionPlus: "⊎",
                Uogon: "Ų",
                uogon: "ų",
                Uopf: "𝕌",
                uopf: "𝕦",
                UpArrow: "↑",
                Uparrow: "⇑",
                uparrow: "↑",
                UpArrowBar: "⤒",
                UpArrowDownArrow: "⇅",
                UpDownArrow: "↕",
                Updownarrow: "⇕",
                updownarrow: "↕",
                UpEquilibrium: "⥮",
                upharpoonleft: "↿",
                upharpoonright: "↾",
                uplus: "⊎",
                UpperLeftArrow: "↖",
                UpperRightArrow: "↗",
                Upsi: "ϒ",
                upsi: "υ",
                upsih: "ϒ",
                Upsilon: "Υ",
                upsilon: "υ",
                UpTee: "⊥",
                UpTeeArrow: "↥",
                upuparrows: "⇈",
                urcorn: "⌝",
                urcorner: "⌝",
                urcrop: "⌎",
                Uring: "Ů",
                uring: "ů",
                urtri: "◹",
                Uscr: "𝒰",
                uscr: "𝓊",
                utdot: "⋰",
                Utilde: "Ũ",
                utilde: "ũ",
                utri: "▵",
                utrif: "▴",
                uuarr: "⇈",
                Uuml: "Ü",
                uuml: "ü",
                uwangle: "⦧",
                vangrt: "⦜",
                varepsilon: "ϵ",
                varkappa: "ϰ",
                varnothing: "∅",
                varphi: "ϕ",
                varpi: "ϖ",
                varpropto: "∝",
                vArr: "⇕",
                varr: "↕",
                varrho: "ϱ",
                varsigma: "ς",
                varsubsetneq: "⊊︀",
                varsubsetneqq: "⫋︀",
                varsupsetneq: "⊋︀",
                varsupsetneqq: "⫌︀",
                vartheta: "ϑ",
                vartriangleleft: "⊲",
                vartriangleright: "⊳",
                Vbar: "⫫",
                vBar: "⫨",
                vBarv: "⫩",
                Vcy: "В",
                vcy: "в",
                VDash: "⊫",
                Vdash: "⊩",
                vDash: "⊨",
                vdash: "⊢",
                Vdashl: "⫦",
                Vee: "⋁",
                vee: "∨",
                veebar: "⊻",
                veeeq: "≚",
                vellip: "⋮",
                Verbar: "‖",
                verbar: "|",
                Vert: "‖",
                vert: "|",
                VerticalBar: "∣",
                VerticalLine: "|",
                VerticalSeparator: "❘",
                VerticalTilde: "≀",
                VeryThinSpace: " ",
                Vfr: "𝔙",
                vfr: "𝔳",
                vltri: "⊲",
                vnsub: "⊂⃒",
                vnsup: "⊃⃒",
                Vopf: "𝕍",
                vopf: "𝕧",
                vprop: "∝",
                vrtri: "⊳",
                Vscr: "𝒱",
                vscr: "𝓋",
                vsubnE: "⫋︀",
                vsubne: "⊊︀",
                vsupnE: "⫌︀",
                vsupne: "⊋︀",
                Vvdash: "⊪",
                vzigzag: "⦚",
                Wcirc: "Ŵ",
                wcirc: "ŵ",
                wedbar: "⩟",
                Wedge: "⋀",
                wedge: "∧",
                wedgeq: "≙",
                weierp: "℘",
                Wfr: "𝔚",
                wfr: "𝔴",
                Wopf: "𝕎",
                wopf: "𝕨",
                wp: "℘",
                wr: "≀",
                wreath: "≀",
                Wscr: "𝒲",
                wscr: "𝓌",
                xcap: "⋂",
                xcirc: "◯",
                xcup: "⋃",
                xdtri: "▽",
                Xfr: "𝔛",
                xfr: "𝔵",
                xhArr: "⟺",
                xharr: "⟷",
                Xi: "Ξ",
                xi: "ξ",
                xlArr: "⟸",
                xlarr: "⟵",
                xmap: "⟼",
                xnis: "⋻",
                xodot: "⨀",
                Xopf: "𝕏",
                xopf: "𝕩",
                xoplus: "⨁",
                xotime: "⨂",
                xrArr: "⟹",
                xrarr: "⟶",
                Xscr: "𝒳",
                xscr: "𝓍",
                xsqcup: "⨆",
                xuplus: "⨄",
                xutri: "△",
                xvee: "⋁",
                xwedge: "⋀",
                Yacute: "Ý",
                yacute: "ý",
                YAcy: "Я",
                yacy: "я",
                Ycirc: "Ŷ",
                ycirc: "ŷ",
                Ycy: "Ы",
                ycy: "ы",
                yen: "¥",
                Yfr: "𝔜",
                yfr: "𝔶",
                YIcy: "Ї",
                yicy: "ї",
                Yopf: "𝕐",
                yopf: "𝕪",
                Yscr: "𝒴",
                yscr: "𝓎",
                YUcy: "Ю",
                yucy: "ю",
                Yuml: "Ÿ",
                yuml: "ÿ",
                Zacute: "Ź",
                zacute: "ź",
                Zcaron: "Ž",
                zcaron: "ž",
                Zcy: "З",
                zcy: "з",
                Zdot: "Ż",
                zdot: "ż",
                zeetrf: "ℨ",
                ZeroWidthSpace: "​",
                Zeta: "Ζ",
                zeta: "ζ",
                Zfr: "ℨ",
                zfr: "𝔷",
                ZHcy: "Ж",
                zhcy: "ж",
                zigrarr: "⇝",
                Zopf: "ℤ",
                zopf: "𝕫",
                Zscr: "𝒵",
                zscr: "𝓏",
                zwj: "‍",
                zwnj: "‌"
            }
        }, {}],
        2: [function(e, r, t) {
            "use strict";
            var n = {};
            ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function(e) {
                n[e] = !0
            }), r.exports = n
        }, {}],
        3: [function(e, r, t) {
            "use strict";

            function n(e, r) {
                return e = e.source, r = r || "",
                    function t(n, s) {
                        return n ? (s = s.source, e = e.replace(n, s), t) : new RegExp(e, r)
                    }
            }
            var s = /[a-zA-Z_:][a-zA-Z0-9:._-]*/,
                i = /[^"'=<>`\x00-\x20]+/,
                o = /'[^']*'/,
                a = /"[^"]*"/,
                l = n(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", i)("single_quoted", o)("double_quoted", a)(),
                c = n(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", s)("attr_value", l)(),
                u = n(/<[A-Za-z][A-Za-z0-9\-]*attribute*\s*\/?>/)("attribute", c)(),
                p = /<\/[A-Za-z][A-Za-z0-9\-]*\s*>/,
                h = /<!--[\s\S]*?-->/,
                f = /<[?].*?[?]>/,
                d = /<![A-Z]+\s+[^>]*>/,
                g = /<!\[CDATA\[[\s\S]*?\]\]>/,
                m = n(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", u)("close_tag", p)("comment", h)("processing", f)("declaration", d)("cdata", g)();
            r.exports.HTML_TAG_RE = m
        }, {}],
        4: [function(e, r, t) {
            "use strict";
            r.exports = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"]
        }, {}],
        5: [function(e, r, t) {
            "use strict";

            function n(e) {
                return Object.prototype.toString.call(e)
            }

            function s(e) {
                return "[object String]" === n(e)
            }

            function i(e, r) {
                return x.call(e, r)
            }

            function o(e) {
                var r = Array.prototype.slice.call(arguments, 1);
                return r.forEach(function(r) {
                    if (r) {
                        if ("object" != typeof r) throw new TypeError(r + "must be object");
                        Object.keys(r).forEach(function(t) {
                            e[t] = r[t]
                        })
                    }
                }), e
            }

            function a(e, r, t) {
                return [].concat(e.slice(0, r), t, e.slice(r + 1))
            }

            function l(e) {
                return e.indexOf("\\") < 0 ? e : e.replace(A, "$1")
            }

            function c(e) {
                return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 !== (65535 & e) && 65534 !== (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
            }

            function u(e) {
                if (e > 65535) {
                    e -= 65536;
                    var r = 55296 + (e >> 10),
                        t = 56320 + (1023 & e);
                    return String.fromCharCode(r, t)
                }
                return String.fromCharCode(e)
            }

            function p(e, r) {
                var t = 0;
                return i(C, r) ? C[r] : 35 === r.charCodeAt(0) && q.test(r) && (t = "x" === r[1].toLowerCase() ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10), c(t)) ? u(t) : e
            }

            function h(e) {
                return e.indexOf("&") < 0 ? e : e.replace(w, p)
            }

            function f(e) {
                return D[e]
            }

            function d(e) {
                return E.test(e) ? e.replace(S, f) : e
            }

            function g(e, r, t) {
                var n = e.charCodeAt(0);
                return n >= 55296 && n <= 56319 ? r >= t.length - 1 ? "�" : (n = t.charCodeAt(r + 1), n < 56320 || n > 57343 ? "�" : e) : 0 === r ? "�" : (n = t.charCodeAt(r - 1), n < 55552 || n > 56319 ? "�" : e)
            }

            function m(e) {
                return M.test(e) ? e.replace(L, g) : e
            }

            function b(e) {
                var r = h(e);
                try {
                    r = decodeURI(r)
                } catch (e) {}
                return encodeURI(m(r))
            }

            function v(e) {
                return e.replace(T, "\\$&")
            }

            function k(e) {
                if (e >= 8192 && e <= 8202) return !0;
                switch (e) {
                    case 9:
                    case 10:
                    case 13:
                    case 12:
                    case 32:
                    case 160:
                    case 5760:
                    case 8239:
                    case 8287:
                    case 12288:
                        return !0
                }
                return !1
            }

            function y(e) {
                return F.test(e)
            }

            function _(e) {
                switch (e) {
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 41:
                    case 42:
                    case 43:
                    case 44:
                    case 45:
                    case 46:
                    case 47:
                    case 58:
                    case 59:
                    case 60:
                    case 61:
                    case 62:
                    case 63:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 124:
                    case 125:
                    case 126:
                        return !0;
                    default:
                        return !1
                }
            }
            var x = Object.prototype.hasOwnProperty,
                A = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
                w = /&([a-z#][a-z0-9]{1,31});/gi,
                q = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
                C = e("./entities"),
                E = /[&<>"]/,
                S = /[&<>"]/g,
                D = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;"
                },
                M = /[\uD800-\uDFFF]/,
                L = /[\uD800-\uDFFF]/g,
                T = /[.?*+^$[\]\\(){}|-]/g,
                F = /[\x21-\x23\x25-\x2A\x2C-\x2F\x3A\x3B\x3F\x40\x5B-\x5D\x5F\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
            t.assign = o, t.isString = s, t.has = i, t.unescapeMd = l, t.isValidEntityCode = c, t.fromCodePoint = u, t.replaceEntities = h, t.escapeHtml = d,
                t.arrayReplaceAt = a, t.normalizeLink = b, t.isWhiteSpace = k, t.isMdAsciiPunct = _, t.isPunctChar = y, t.escapeRE = v
        }, {
            "./entities": 1
        }],
        6: [function(e, r, t) {
            "use strict";
            t.parseLinkLabel = e("./parse_link_label"), t.parseLinkDestination = e("./parse_link_destination"), t.parseLinkTitle = e("./parse_link_title")
        }, {
            "./parse_link_destination": 8,
            "./parse_link_label": 9,
            "./parse_link_title": 10
        }],
        7: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                return e.trim().replace(/\s+/g, " ").toUpperCase()
            }
        }, {}],
        8: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").normalizeLink,
                s = e("../common/utils").unescapeMd;
            r.exports = function(e, r, t) {
                var i, o, a = 0,
                    l = r,
                    c = {
                        ok: !1,
                        pos: 0,
                        lines: 0,
                        str: ""
                    };
                if (60 === e.charCodeAt(r)) {
                    for (r++; r < t;) {
                        if (i = e.charCodeAt(r), 10 === i) return c;
                        if (62 === i) return c.pos = r + 1, c.str = n(s(e.slice(l + 1, r))), c.ok = !0, c;
                        92 === i && r + 1 < t ? r += 2 : r++
                    }
                    return c
                }
                for (o = 0; r < t && (i = e.charCodeAt(r), 32 !== i) && !(i < 32 || 127 === i);)
                    if (92 === i && r + 1 < t) r += 2;
                    else {
                        if (40 === i && (o++, o > 1)) break;
                        if (41 === i && (o--, o < 0)) break;
                        r++
                    }
                return l === r ? c : (c.str = n(s(e.slice(l, r))), c.lines = a, c.pos = r, c.ok = !0, c)
            }
        }, {
            "../common/utils": 5
        }],
        9: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                var n, s, i, o, a = -1,
                    l = e.posMax,
                    c = e.pos;
                if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;
                for (e.pos = r + 1, n = 1; e.pos < l;) {
                    if (i = e.src.charCodeAt(e.pos), 93 === i && (n--, 0 === n)) {
                        s = !0;
                        break
                    }
                    if (o = e.pos, e.md.inline.skipToken(e), 91 === i)
                        if (o === e.pos - 1) n++;
                        else if (t) return e.pos = c, -1
                }
                return s ? (a = e.pos, e.labelUnmatchedScopes = 0) : e.labelUnmatchedScopes = n - 1, e.pos = c, a
            }
        }, {}],
        10: [function(e, r, t) {
            "use strict";
            var n = e("../common/utils").unescapeMd;
            r.exports = function(e, r, t) {
                var s, i, o = 0,
                    a = r,
                    l = {
                        ok: !1,
                        pos: 0,
                        lines: 0,
                        str: ""
                    };
                if (r >= t) return l;
                if (i = e.charCodeAt(r), 34 !== i && 39 !== i && 40 !== i) return l;
                for (r++, 40 === i && (i = 41); r < t;) {
                    if (s = e.charCodeAt(r), s === i) return l.pos = r + 1, l.lines = o, l.str = n(e.slice(a + 1, r)), l.ok = !0, l;
                    10 === s ? o++ : 92 === s && r + 1 < t && (r++, 10 === e.charCodeAt(r) && o++), r++
                }
                return l
            }
        }, {
            "../common/utils": 5
        }],
        11: [function(e, r, t) {
            "use strict";

            function n(e, r) {
                return this instanceof n ? (r || s.isString(e) || (r = e || {}, e = "default"), this.inline = new c, this.block = new l, this.core = new a, this.renderer = new o, this.utils = s, this.helpers = i, this.options = {}, this.configure(e), void(r && this.set(r))) : new n(e, r)
            }
            var s = e("./common/utils"),
                i = e("./helpers"),
                o = e("./renderer"),
                a = e("./parser_core"),
                l = e("./parser_block"),
                c = e("./parser_inline"),
                u = {
                    default: e("./presets/default"),
                    zero: e("./presets/zero"),
                    commonmark: e("./presets/commonmark")
                };
            n.prototype.set = function(e) {
                return s.assign(this.options, e), this
            }, n.prototype.configure = function(e) {
                var r, t = this;
                if (s.isString(e) && (r = e, e = u[r], !e)) throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
                if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
                return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(r) {
                    e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules)
                }), this
            }, n.prototype.enable = function(e, r) {
                var t = [];
                Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
                    t = t.concat(this[r].ruler.enable(e, !0))
                }, this);
                var n = e.filter(function(e) {
                    return t.indexOf(e) < 0
                });
                if (n.length && !r) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
                return this
            }, n.prototype.disable = function(e, r) {
                var t = [];
                Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
                    t = t.concat(this[r].ruler.disable(e, !0))
                }, this);
                var n = e.filter(function(e) {
                    return t.indexOf(e) < 0
                });
                if (n.length && !r) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
                return this
            }, n.prototype.use = function(e) {
                var r = [this].concat(Array.prototype.slice.call(arguments, 1));
                return e.apply(e, r), this
            }, n.prototype.parse = function(e, r) {
                var t = new this.core.State(e, this, r);
                return this.core.process(t), t.tokens
            }, n.prototype.render = function(e, r) {
                return r = r || {}, this.renderer.render(this.parse(e, r), this.options, r)
            }, n.prototype.parseInline = function(e, r) {
                var t = new this.core.State(e, this, r);
                return t.inlineMode = !0, this.core.process(t), t.tokens
            }, n.prototype.renderInline = function(e, r) {
                return r = r || {}, this.renderer.render(this.parseInline(e, r), this.options, r)
            }, r.exports = n
        }, {
            "./common/utils": 5,
            "./helpers": 6,
            "./parser_block": 12,
            "./parser_core": 13,
            "./parser_inline": 14,
            "./presets/commonmark": 15,
            "./presets/default": 16,
            "./presets/zero": 17,
            "./renderer": 18
        }],
        12: [function(e, r, t) {
            "use strict";

            function n() {
                this.ruler = new s;
                for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1], {
                    alt: (i[e][2] || []).slice()
                })
            }
            var s = e("./ruler"),
                i = [
                    ["code", e("./rules_block/code")],
                    ["fence", e("./rules_block/fence"), ["paragraph", "reference", "blockquote", "list"]],
                    ["blockquote", e("./rules_block/blockquote"), ["paragraph", "reference", "blockquote", "list"]],
                    ["hr", e("./rules_block/hr"), ["paragraph", "reference", "blockquote", "list"]],
                    ["list", e("./rules_block/list"), ["paragraph", "reference", "blockquote"]],
                    ["reference", e("./rules_block/reference"), ["reference"]],
                    ["heading", e("./rules_block/heading"), ["paragraph", "reference", "blockquote"]],
                    ["lheading", e("./rules_block/lheading")],
                    ["html_block", e("./rules_block/html_block"), ["paragraph", "reference", "blockquote"]],
                    ["table", e("./rules_block/table"), ["paragraph", "reference"]],
                    ["paragraph", e("./rules_block/paragraph")]
                ];
            n.prototype.tokenize = function(e, r, t) {
                for (var n, s, i = this.ruler.getRules(""), o = i.length, a = r, l = !1, c = e.md.options.maxNesting; a < t && (e.line = a = e.skipEmptyLines(a), !(a >= t)) && !(e.tShift[a] < e.blkIndent);) {
                    if (e.level >= c) {
                        e.line = t;
                        break
                    }
                    for (s = 0; s < o && !(n = i[s](e, a, t, !1)); s++);
                    if (e.tight = !l, e.isEmpty(e.line - 1) && (l = !0), a = e.line, a < t && e.isEmpty(a)) {
                        if (l = !0, a++, a < t && "list" === e.parentType && e.isEmpty(a)) break;
                        e.line = a
                    }
                }
            }, n.prototype.parse = function(e, r, t, n) {
                var s;
                return e ? (s = new this.State(e, r, t, n), void this.tokenize(s, s.line, s.lineMax)) : []
            }, n.prototype.State = e("./rules_block/state_block"), r.exports = n
        }, {
            "./ruler": 19,
            "./rules_block/blockquote": 20,
            "./rules_block/code": 21,
            "./rules_block/fence": 22,
            "./rules_block/heading": 23,
            "./rules_block/hr": 24,
            "./rules_block/html_block": 25,
            "./rules_block/lheading": 26,
            "./rules_block/list": 27,
            "./rules_block/paragraph": 28,
            "./rules_block/reference": 29,
            "./rules_block/state_block": 30,
            "./rules_block/table": 31
        }],
        13: [function(e, r, t) {
            "use strict";

            function n() {
                this.ruler = new s;
                for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1])
            }
            var s = e("./ruler"),
                i = [
                    ["normalize", e("./rules_core/normalize")],
                    ["block", e("./rules_core/block")],
                    ["inline", e("./rules_core/inline")],
                    ["replacements", e("./rules_core/replacements")],
                    ["smartquotes", e("./rules_core/smartquotes")],
                    ["linkify", e("./rules_core/linkify")]
                ];
            n.prototype.process = function(e) {
                var r, t, n;
                for (n = this.ruler.getRules(""), r = 0, t = n.length; r < t; r++) n[r](e)
            }, n.prototype.State = e("./rules_core/state_core"), r.exports = n
        }, {
            "./ruler": 19,
            "./rules_core/block": 32,
            "./rules_core/inline": 33,
            "./rules_core/linkify": 34,
            "./rules_core/normalize": 35,
            "./rules_core/replacements": 36,
            "./rules_core/smartquotes": 37,
            "./rules_core/state_core": 38
        }],
        14: [function(e, r, t) {
            "use strict";

            function n(e) {
                var r = e.trim().toLowerCase();
                return r = o(r), !(r.indexOf(":") >= 0 && l.indexOf(r.split(":")[0]) >= 0)
            }

            function s() {
                this.validateLink = n, this.ruler = new i;
                for (var e = 0; e < a.length; e++) this.ruler.push(a[e][0], a[e][1])
            }
            var i = e("./ruler"),
                o = e("./common/utils").replaceEntities,
                a = [
                    ["text", e("./rules_inline/text")],
                    ["newline", e("./rules_inline/newline")],
                    ["escape", e("./rules_inline/escape")],
                    ["backticks", e("./rules_inline/backticks")],
                    ["strikethrough", e("./rules_inline/strikethrough")],
                    ["emphasis", e("./rules_inline/emphasis")],
                    ["link", e("./rules_inline/link")],
                    ["image", e("./rules_inline/image")],
                    ["autolink", e("./rules_inline/autolink")],
                    ["html_inline", e("./rules_inline/html_inline")],
                    ["entity", e("./rules_inline/entity")]
                ],
                l = ["vbscript", "javascript", "file"];
            s.prototype.skipToken = function(e) {
                var r, t, n = e.pos,
                    s = this.ruler.getRules(""),
                    i = s.length,
                    o = e.md.options.maxNesting;
                if ((t = e.cacheGet(n)) > 0) return void(e.pos = t);
                if (e.level < o) {
                    for (r = 0; r < i; r++)
                        if (s[r](e, !0)) return void e.cacheSet(n, e.pos);
                    e.pos++
                } else e.pos = e.max;
                e.cacheSet(n, e.pos)
            }, s.prototype.tokenize = function(e) {
                for (var r, t, n = this.ruler.getRules(""), s = n.length, i = e.posMax, o = e.md.options.maxNesting; e.pos < i;) {
                    if (e.level >= o) {
                        e.pos = i;
                        break
                    }
                    for (t = 0; t < s && !(r = n[t](e, !1)); t++);
                    if (r) {
                        if (e.pos >= i) break
                    } else e.pending += e.src[e.pos++]
                }
                e.pending && e.pushPending()
            }, s.prototype.parse = function(e, r, t, n) {
                var s = new this.State(e, r, t, n);
                this.tokenize(s)
            }, s.prototype.State = e("./rules_inline/state_inline"), r.exports = s
        }, {
            "./common/utils": 5,
            "./ruler": 19,
            "./rules_inline/autolink": 39,
            "./rules_inline/backticks": 40,
            "./rules_inline/emphasis": 41,
            "./rules_inline/entity": 42,
            "./rules_inline/escape": 43,
            "./rules_inline/html_inline": 44,
            "./rules_inline/image": 45,
            "./rules_inline/link": 46,
            "./rules_inline/newline": 47,
            "./rules_inline/state_inline": 48,
            "./rules_inline/strikethrough": 49,
            "./rules_inline/text": 50
        }],
        15: [function(e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !0,
                    xhtmlOut: !0,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                    },
                    inline: {
                        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"]
                    }
                }
            }
        }, {}],
        16: [function(e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {},
                    block: {},
                    inline: {}
                }
            }
        }, {}],
        17: [function(e, r, t) {
            "use strict";
            r.exports = {
                options: {
                    html: !1,
                    xhtmlOut: !1,
                    breaks: !1,
                    langPrefix: "language-",
                    linkify: !1,
                    typographer: !1,
                    quotes: "“”‘’",
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ["normalize", "block", "inline"]
                    },
                    block: {
                        rules: ["paragraph"]
                    },
                    inline: {
                        rules: ["text"]
                    }
                }
            }
        }, {}],
        18: [function(e, r, t) {
            "use strict";

            function n() {
                this.rules = s({}, l)
            }
            var s = e("./common/utils").assign,
                i = e("./common/utils").unescapeMd,
                o = e("./common/utils").replaceEntities,
                a = e("./common/utils").escapeHtml,
                l = {};
            l.blockquote_open = function() {
                return "<blockquote>\n"
            }, l.blockquote_close = function() {
                return "</blockquote>\n"
            }, l.code_block = function(e, r) {
                return "<pre><code>" + a(e[r].content) + "</code></pre>\n"
            }, l.code_inline = function(e, r) {
                return "<code>" + a(e[r].content) + "</code>"
            }, l.fence = function(e, r, t) {
                var n, s = e[r],
                    l = "",
                    c = t.langPrefix,
                    u = "";
                return s.params && (u = a(o(i(s.params.split(/\s+/g)[0]))), l = ' class="' + c + u + '"'), n = t.highlight ? t.highlight(s.content, u) || a(s.content) : a(s.content), "<pre><code" + l + ">" + n + "</code></pre>\n"
            }, l.heading_open = function(e, r) {
                return "<h" + e[r].hLevel + ">"
            }, l.heading_close = function(e, r) {
                return "</h" + e[r].hLevel + ">\n"
            }, l.hr = function(e, r, t) {
                return t.xhtmlOut ? "<hr />\n" : "<hr>\n"
            }, l.bullet_list_open = function() {
                return "<ul>\n"
            }, l.bullet_list_close = function() {
                return "</ul>\n"
            }, l.list_item_open = function(e, r) {
                var t = e[r + 1];
                return "list_item_close" === t.type || "paragraph_open" === t.type && t.tight ? "<li>" : "<li>\n"
            }, l.list_item_close = function() {
                return "</li>\n"
            }, l.ordered_list_open = function(e, r) {
                return e[r].order > 1 ? '<ol start="' + e[r].order + '">\n' : "<ol>\n"
            }, l.ordered_list_close = function() {
                return "</ol>\n"
            }, l.paragraph_open = function(e, r) {
                return e[r].tight ? "" : "<p>"
            }, l.paragraph_close = function(e, r) {
                return e[r].tight === !0 ? "close" === e[r + 1].type.slice(-5) ? "" : "\n" : "</p>\n"
            }, l.link_open = function(e, r) {
                var t = e[r].title ? ' title="' + a(o(e[r].title)) + '"' : "",
                    n = e[r].target ? ' target="' + a(e[r].target) + '"' : "";
                return '<a href="' + a(e[r].href) + '"' + t + n + ">"
            }, l.link_close = function() {
                return "</a>"
            }, l.image = function(e, r, t, n, s) {
                var i = ' src="' + a(e[r].src) + '"',
                    l = e[r].title ? ' title="' + a(o(e[r].title)) + '"' : "",
                    c = ' alt="' + s.renderInlineAsText(e[r].tokens, t, n) + '"',
                    u = t.xhtmlOut ? " /" : "";
                return "<img" + i + c + l + u + ">"
            }, l.table_open = function() {
                return "<table>\n"
            }, l.table_close = function() {
                return "</table>\n"
            }, l.thead_open = function() {
                return "<thead>\n"
            }, l.thead_close = function() {
                return "</thead>\n"
            }, l.tbody_open = function() {
                return "<tbody>\n"
            }, l.tbody_close = function() {
                return "</tbody>\n"
            }, l.tr_open = function() {
                return "<tr>"
            }, l.tr_close = function() {
                return "</tr>\n"
            }, l.th_open = function(e, r) {
                return e[r].align ? '<th style="text-align:' + e[r].align + '">' : "<th>"
            }, l.th_close = function() {
                return "</th>"
            }, l.td_open = function(e, r) {
                return e[r].align ? '<td style="text-align:' + e[r].align + '">' : "<td>"
            }, l.td_close = function() {
                return "</td>"
            }, l.strong_open = function() {
                return "<strong>"
            }, l.strong_close = function() {
                return "</strong>"
            }, l.em_open = function() {
                return "<em>"
            }, l.em_close = function() {
                return "</em>"
            }, l.s_open = function() {
                return "<s>"
            }, l.s_close = function() {
                return "</s>"
            }, l.hardbreak = function(e, r, t) {
                return t.xhtmlOut ? "<br />\n" : "<br>\n"
            }, l.softbreak = function(e, r, t) {
                return t.breaks ? t.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
            }, l.text = function(e, r) {
                return a(e[r].content)
            }, l.html_block = function(e, r) {
                return e[r].content
            }, l.html_inline = function(e, r) {
                return e[r].content
            }, n.prototype.renderInline = function(e, r, t) {
                for (var n = "", s = this.rules, i = 0, o = e.length; i < o; i++) n += s[e[i].type](e, i, r, t, this);
                return n
            }, n.prototype.renderInlineAsText = function(e, r, t) {
                for (var n = "", s = this.rules, i = 0, o = e.length; i < o; i++) "text" === e[i].type ? n += s.text(e, i, r, t, this) : "image" === e[i].type && (n += this.renderInlineAsText(e[i].tokens, r, t));
                return n
            }, n.prototype.render = function(e, r, t) {
                var n, s, i = "",
                    o = this.rules;
                for (n = 0, s = e.length; n < s; n++) i += "inline" === e[n].type ? this.renderInline(e[n].children, r, t) : o[e[n].type](e, n, r, t, this);
                return i
            }, r.exports = n
        }, {
            "./common/utils": 5
        }],
        19: [function(e, r, t) {
            "use strict";

            function n() {
                this.__rules__ = [], this.__cache__ = null
            }
            n.prototype.__find__ = function(e) {
                for (var r = 0; r < this.__rules__.length; r++)
                    if (this.__rules__[r].name === e) return r;
                return -1
            }, n.prototype.__compile__ = function() {
                var e = this,
                    r = [""];
                e.__rules__.forEach(function(e) {
                    e.enabled && e.alt.forEach(function(e) {
                        r.indexOf(e) < 0 && r.push(e)
                    })
                }), e.__cache__ = {}, r.forEach(function(r) {
                    e.__cache__[r] = [], e.__rules__.forEach(function(t) {
                        t.enabled && (r && t.alt.indexOf(r) < 0 || e.__cache__[r].push(t.fn))
                    })
                })
            }, n.prototype.at = function(e, r, t) {
                var n = this.__find__(e),
                    s = t || {};
                if (n === -1) throw new Error("Parser rule not found: " + e);
                this.__rules__[n].fn = r, this.__rules__[n].alt = s.alt || [], this.__cache__ = null
            }, n.prototype.before = function(e, r, t, n) {
                var s = this.__find__(e),
                    i = n || {};
                if (s === -1) throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(s, 0, {
                    name: r,
                    enabled: !0,
                    fn: t,
                    alt: i.alt || []
                }), this.__cache__ = null
            }, n.prototype.after = function(e, r, t, n) {
                var s = this.__find__(e),
                    i = n || {};
                if (s === -1) throw new Error("Parser rule not found: " + e);
                this.__rules__.splice(s + 1, 0, {
                    name: r,
                    enabled: !0,
                    fn: t,
                    alt: i.alt || []
                }), this.__cache__ = null
            }, n.prototype.push = function(e, r, t) {
                var n = t || {};
                this.__rules__.push({
                    name: e,
                    enabled: !0,
                    fn: r,
                    alt: n.alt || []
                }), this.__cache__ = null
            }, n.prototype.enable = function(e, r) {
                Array.isArray(e) || (e = [e]);
                var t = [];
                return e.forEach(function(e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (r) return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !0, t.push(e)
                }, this), this.__cache__ = null, t
            }, n.prototype.enableOnly = function(e, r) {
                Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(e) {
                    e.enabled = !1
                }), this.enable(e, r)
            }, n.prototype.disable = function(e, r) {
                Array.isArray(e) || (e = [e]);
                var t = [];
                return e.forEach(function(e) {
                    var n = this.__find__(e);
                    if (n < 0) {
                        if (r) return;
                        throw new Error("Rules manager: invalid rule name " + e)
                    }
                    this.__rules__[n].enabled = !1, t.push(e)
                }, this), this.__cache__ = null, t
            }, n.prototype.getRules = function(e) {
                return null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
            }, r.exports = n
        }, {}],
        20: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t, n) {
                var s, i, o, a, l, c, u, p, h, f, d, g = e.bMarks[r] + e.tShift[r],
                    m = e.eMarks[r];
                if (g > m) return !1;
                if (62 !== e.src.charCodeAt(g++)) return !1;
                if (n) return !0;
                for (32 === e.src.charCodeAt(g) && g++, l = e.blkIndent, e.blkIndent = 0, a = [e.bMarks[r]], e.bMarks[r] = g, g = g < m ? e.skipSpaces(g) : g, i = g >= m, o = [e.tShift[r]], e.tShift[r] = g - e.bMarks[r], p = e.md.block.ruler.getRules("blockquote"), s = r + 1; s < t && (g = e.bMarks[s] + e.tShift[s], m = e.eMarks[s], !(g >= m)); s++)
                    if (62 !== e.src.charCodeAt(g++)) {
                        if (i) break;
                        for (d = !1, h = 0, f = p.length; h < f; h++)
                            if (p[h](e, s, t, !0)) {
                                d = !0;
                                break
                            }
                        if (d) break;
                        a.push(e.bMarks[s]), o.push(e.tShift[s]), e.tShift[s] = -1337
                    } else 32 === e.src.charCodeAt(g) && g++, a.push(e.bMarks[s]), e.bMarks[s] = g, g = g < m ? e.skipSpaces(g) : g, i = g >= m, o.push(e.tShift[s]), e.tShift[s] = g - e.bMarks[s];
                for (c = e.parentType, e.parentType = "blockquote", e.tokens.push({
                        type: "blockquote_open",
                        lines: u = [r, 0],
                        level: e.level++
                    }), e.md.block.tokenize(e, r, s), e.tokens.push({
                        type: "blockquote_close",
                        level: --e.level
                    }), e.parentType = c, u[1] = e.line, h = 0; h < o.length; h++) e.bMarks[h + r] = a[h], e.tShift[h + r] = o[h];
                return e.blkIndent = l, !0
            }
        }, {}],
        21: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                var n, s;
                if (e.tShift[r] - e.blkIndent < 4) return !1;
                for (s = n = r + 1; n < t;)
                    if (e.isEmpty(n)) n++;
                    else {
                        if (!(e.tShift[n] - e.blkIndent >= 4)) break;
                        n++, s = n
                    }
                return e.line = n, e.tokens.push({
                    type: "code_block",
                    content: e.getLines(r, s, 4 + e.blkIndent, !0),
                    lines: [r, e.line],
                    level: e.level
                }), !0
            }
        }, {}],
        22: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t, n) {
                var s, i, o, a, l, c = !1,
                    u = e.bMarks[r] + e.tShift[r],
                    p = e.eMarks[r];
                if (u + 3 > p) return !1;
                if (s = e.src.charCodeAt(u), 126 !== s && 96 !== s) return !1;
                if (l = u, u = e.skipChars(u, s), i = u - l, i < 3) return !1;
                if (o = e.src.slice(u, p).trim(), o.indexOf("`") >= 0) return !1;
                if (n) return !0;
                for (a = r;
                    (a++, !(a >= t)) && (u = l = e.bMarks[a] + e.tShift[a], p = e.eMarks[a], !(u < p && e.tShift[a] < e.blkIndent));)
                    if (e.src.charCodeAt(u) === s && !(e.tShift[a] - e.blkIndent >= 4 || (u = e.skipChars(u, s), u - l < i || (u = e.skipSpaces(u), u < p)))) {
                        c = !0;
                        break
                    }
                return i = e.tShift[r], e.line = a + (c ? 1 : 0), e.tokens.push({
                    type: "fence",
                    params: o,
                    content: e.getLines(r + 1, a, i, !0),
                    lines: [r, e.line],
                    level: e.level
                }), !0
            }
        }, {}],
        23: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t, n) {
                var s, i, o, a = e.bMarks[r] + e.tShift[r],
                    l = e.eMarks[r];
                if (a >= l) return !1;
                if (s = e.src.charCodeAt(a), 35 !== s || a >= l) return !1;
                for (i = 1, s = e.src.charCodeAt(++a); 35 === s && a < l && i <= 6;) i++, s = e.src.charCodeAt(++a);
                return !(i > 6 || a < l && 32 !== s) && (!!n || (l = e.skipCharsBack(l, 32, a), o = e.skipCharsBack(l, 35, a), o > a && 32 === e.src.charCodeAt(o - 1) && (l = o), e.line = r + 1, e.tokens.push({
                    type: "heading_open",
                    hLevel: i,
                    lines: [r, e.line],
                    level: e.level
                }), a < l && e.tokens.push({
                    type: "inline",
                    content: e.src.slice(a, l).trim(),
                    level: e.level + 1,
                    lines: [r, e.line],
                    children: []
                }), e.tokens.push({
                    type: "heading_close",
                    hLevel: i,
                    level: e.level
                }), !0))
            }
        }, {}],
        24: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t, n) {
                var s, i, o, a = e.bMarks[r],
                    l = e.eMarks[r];
                if (a += e.tShift[r], a > l) return !1;
                if (s = e.src.charCodeAt(a++), 42 !== s && 45 !== s && 95 !== s) return !1;
                for (i = 1; a < l;) {
                    if (o = e.src.charCodeAt(a++), o !== s && 32 !== o) return !1;
                    o === s && i++
                }
                return !(i < 3) && (!!n || (e.line = r + 1, e.tokens.push({
                    type: "hr",
                    lines: [r, e.line],
                    level: e.level
                }), !0))
            }
        }, {}],
        25: [function(e, r, t) {
            "use strict";

            function n(e) {
                var r = 32 | e;
                return r >= 97 && r <= 122
            }
            var s = e("../common/html_blocks"),
                i = /^<([a-zA-Z]{1,15})[\s\/>]/,
                o = /^<\/([a-zA-Z]{1,15})[\s>]/;
            r.exports = function(e, r, t, a) {
                var l, c, u, p = e.bMarks[r],
                    h = e.eMarks[r],
                    f = e.tShift[r];
                if (p += f, !e.md.options.html) return !1;
                if (f > 3 || p + 2 >= h) return !1;
                if (60 !== e.src.charCodeAt(p)) return !1;
                if (l = e.src.charCodeAt(p + 1), 33 === l || 63 === l) {
                    if (a) return !0
                } else {
                    if (47 !== l && !n(l)) return !1;
                    if (47 === l) {
                        if (c = e.src.slice(p, h).match(o), !c) return !1
                    } else if (c = e.src.slice(p, h).match(i), !c) return !1;
                    if (s[c[1].toLowerCase()] !== !0) return !1;
                    if (a) return !0
                }
                for (u = r + 1; u < e.lineMax && !e.isEmpty(u);) u++;
                return e.line = u, e.tokens.push({
                    type: "html_block",
                    level: e.level,
                    lines: [r, e.line],
                    content: e.getLines(r, u, 0, !0)
                }), !0
            }
        }, {
            "../common/html_blocks": 2
        }],
        26: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                var n, s, i, o = r + 1;
                return !(o >= t) && (!(e.tShift[o] < e.blkIndent) && (!(e.tShift[o] - e.blkIndent > 3) && (s = e.bMarks[o] + e.tShift[o], i = e.eMarks[o], !(s >= i) && (n = e.src.charCodeAt(s), (45 === n || 61 === n) && (s = e.skipChars(s, n), s = e.skipSpaces(s), !(s < i) && (s = e.bMarks[r] + e.tShift[r], e.line = o + 1, e.tokens.push({
                    type: "heading_open",
                    hLevel: 61 === n ? 1 : 2,
                    lines: [r, e.line],
                    level: e.level
                }), e.tokens.push({
                    type: "inline",
                    content: e.src.slice(s, e.eMarks[r]).trim(),
                    level: e.level + 1,
                    lines: [r, e.line - 1],
                    children: []
                }), e.tokens.push({
                    type: "heading_close",
                    hLevel: 61 === n ? 1 : 2,
                    level: e.level
                }), !0))))))
            }
        }, {}],
        27: [function(e, r, t) {
            "use strict";

            function n(e, r) {
                var t, n, s;
                return n = e.bMarks[r] + e.tShift[r], s = e.eMarks[r], n >= s ? -1 : (t = e.src.charCodeAt(n++), 42 !== t && 45 !== t && 43 !== t ? -1 : n < s && 32 !== e.src.charCodeAt(n) ? -1 : n)
            }

            function s(e, r) {
                var t, n = e.bMarks[r] + e.tShift[r],
                    s = e.eMarks[r];
                if (n + 1 >= s) return -1;
                if (t = e.src.charCodeAt(n++), t < 48 || t > 57) return -1;
                for (;;) {
                    if (n >= s) return -1;
                    if (t = e.src.charCodeAt(n++), !(t >= 48 && t <= 57)) {
                        if (41 === t || 46 === t) break;
                        return -1
                    }
                }
                return n < s && 32 !== e.src.charCodeAt(n) ? -1 : n
            }

            function i(e, r) {
                var t, n, s = e.level + 2;
                for (t = r + 2, n = e.tokens.length - 2; t < n; t++) e.tokens[t].level === s && "paragraph_open" === e.tokens[t].type && (e.tokens[t + 2].tight = !0, e.tokens[t].tight = !0, t += 2)
            }
            r.exports = function(e, r, t, o) {
                var a, l, c, u, p, h, f, d, g, m, b, v, k, y, _, x, A, w, q, C, E, S, D = !0;
                if ((d = s(e, r)) >= 0) k = !0;
                else {
                    if (!((d = n(e, r)) >= 0)) return !1;
                    k = !1
                }
                if (v = e.src.charCodeAt(d - 1), o) return !0;
                for (_ = e.tokens.length, k ? (f = e.bMarks[r] + e.tShift[r], b = Number(e.src.substr(f, d - f - 1)), e.tokens.push({
                        type: "ordered_list_open",
                        order: b,
                        lines: A = [r, 0],
                        level: e.level++
                    })) : e.tokens.push({
                        type: "bullet_list_open",
                        lines: A = [r, 0],
                        level: e.level++
                    }), a = r, x = !1, q = e.md.block.ruler.getRules("list"); !(!(a < t) || (y = e.skipSpaces(d), g = e.eMarks[a], m = y >= g ? 1 : y - d, m > 4 && (m = 1), m < 1 && (m = 1), l = d - e.bMarks[a] + m, e.tokens.push({
                        type: "list_item_open",
                        lines: w = [r, 0],
                        level: e.level++
                    }), u = e.blkIndent, p = e.tight, c = e.tShift[r], h = e.parentType, e.tShift[r] = y - e.bMarks[r], e.blkIndent = l, e.tight = !0, e.parentType = "list", e.md.block.tokenize(e, r, t, !0), e.tight && !x || (D = !1), x = e.line - r > 1 && e.isEmpty(e.line - 1), e.blkIndent = u, e.tShift[r] = c, e.tight = p, e.parentType = h, e.tokens.push({
                        type: "list_item_close",
                        level: --e.level
                    }), a = r = e.line, w[1] = a, y = e.bMarks[r], a >= t) || e.isEmpty(a) || e.tShift[a] < e.blkIndent);) {
                    for (S = !1, C = 0, E = q.length; C < E; C++)
                        if (q[C](e, a, t, !0)) {
                            S = !0;
                            break
                        }
                    if (S) break;
                    if (k) {
                        if (d = s(e, a), d < 0) break
                    } else if (d = n(e, a), d < 0) break;
                    if (v !== e.src.charCodeAt(d - 1)) break
                }
                return e.tokens.push({
                    type: k ? "ordered_list_close" : "bullet_list_close",
                    level: --e.level
                }), A[1] = a, e.line = a, D && i(e, _), !0
            }
        }, {}],
        28: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r) {
                var t, n, s, i, o, a, l = r + 1;
                if (t = e.lineMax, l < t && !e.isEmpty(l))
                    for (a = e.md.block.ruler.getRules("paragraph"); l < t && !e.isEmpty(l); l++)
                        if (!(e.tShift[l] - e.blkIndent > 3)) {
                            for (s = !1, i = 0, o = a.length; i < o; i++)
                                if (a[i](e, l, t, !0)) {
                                    s = !0;
                                    break
                                }
                            if (s) break
                        }
                return n = e.getLines(r, l, e.blkIndent, !1).trim(), e.line = l, n.length && (e.tokens.push({
                    type: "paragraph_open",
                    tight: !1,
                    lines: [r, e.line],
                    level: e.level
                }), e.tokens.push({
                    type: "inline",
                    content: n,
                    level: e.level + 1,
                    lines: [r, e.line],
                    children: []
                }), e.tokens.push({
                    type: "paragraph_close",
                    tight: !1,
                    level: e.level
                })), !0
            }
        }, {}],
        29: [function(e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_destination"),
                s = e("../helpers/parse_link_title"),
                i = e("../helpers/normalize_reference");
            r.exports = function(e, r, t, o) {
                var a, l, c, u, p, h, f, d, g, m, b, v, k, y, _, x = 0,
                    A = e.bMarks[r] + e.tShift[r],
                    w = e.eMarks[r],
                    q = r + 1;
                if (A >= w) return !1;
                if (91 !== e.src.charCodeAt(A)) return !1;
                if (u = e.lineMax, q < u && !e.isEmpty(q))
                    for (y = e.md.block.ruler.getRules("references"); q < u && !e.isEmpty(q); q++)
                        if (!(e.tShift[q] - e.blkIndent > 3)) {
                            for (k = !1, h = 0, f = y.length; h < f; h++)
                                if (y[h](e, q, u, !0)) {
                                    k = !0;
                                    break
                                }
                            if (k) break
                        }
                for (v = e.getLines(r, q, e.blkIndent, !1).trim(), w = v.length, A = 1; A < w; A++) {
                    if (a = v.charCodeAt(A), 91 === a) return !1;
                    if (93 === a) {
                        g = A;
                        break
                    }
                    10 === a ? x++ : 92 === a && (A++, A < w && 10 === v.charCodeAt(A) && x++)
                }
                if (g < 0 || 58 !== v.charCodeAt(g + 1)) return !1;
                for (A = g + 2; A < w; A++)
                    if (a = v.charCodeAt(A), 10 === a) x++;
                    else if (32 !== a) break;
                if (m = n(v, A, w), !m.ok) return !1;
                if (!e.md.inline.validateLink(m.str)) return !1;
                for (p = m.str, A = m.pos, x += m.lines, l = A, c = x, b = A; A < w; A++)
                    if (a = v.charCodeAt(A), 10 === a) x++;
                    else if (32 !== a) break;
                for (m = s(v, A, w), A < w && b !== A && m.ok ? (_ = m.str, A = m.pos, x += m.lines) : (_ = "", A = l, x = c); A < w && 32 === v.charCodeAt(A);) A++;
                return !(A < w && 10 !== v.charCodeAt(A)) && (!!o || (d = i(v.slice(1, g)), "undefined" == typeof e.env.references && (e.env.references = {}), "undefined" == typeof e.env.references[d] && (e.env.references[d] = {
                    title: _,
                    href: p
                }), e.line = r + x + 1, !0))
            }
        }, {
            "../helpers/normalize_reference": 7,
            "../helpers/parse_link_destination": 8,
            "../helpers/parse_link_title": 10
        }],
        30: [function(e, r, t) {
            "use strict";

            function n(e, r, t, n) {
                var s, i, o, a, l, c, u;
                for (this.src = e, this.md = r, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", i = this.src, c = 0, u = !1, o = a = c = 0, l = i.length; a < l; a++) {
                    if (s = i.charCodeAt(a), !u) {
                        if (32 === s) {
                            c++;
                            continue
                        }
                        u = !0
                    }
                    10 !== s && a !== l - 1 || (10 !== s && a++, this.bMarks.push(o), this.eMarks.push(a), this.tShift.push(c), u = !1, c = 0, o = a + 1)
                }
                this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1
            }
            n.prototype.isEmpty = function(e) {
                return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
            }, n.prototype.skipEmptyLines = function(e) {
                for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
                return e
            }, n.prototype.skipSpaces = function(e) {
                for (var r = this.src.length; e < r && 32 === this.src.charCodeAt(e); e++);
                return e
            }, n.prototype.skipChars = function(e, r) {
                for (var t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++);
                return e
            }, n.prototype.skipCharsBack = function(e, r, t) {
                if (e <= t) return e;
                for (; e > t;)
                    if (r !== this.src.charCodeAt(--e)) return e + 1;
                return e
            }, n.prototype.getLines = function(e, r, t, n) {
                var s, i, o, a, l, c = e;
                if (e >= r) return "";
                if (c + 1 === r) return i = this.bMarks[c] + Math.min(this.tShift[c], t), o = n ? this.bMarks[r] : this.eMarks[r - 1], this.src.slice(i, o);
                for (a = new Array(r - e), s = 0; c < r; c++, s++) l = this.tShift[c], l > t && (l = t), l < 0 && (l = 0), i = this.bMarks[c] + l, o = c + 1 < r || n ? this.eMarks[c] + 1 : this.eMarks[c], a[s] = this.src.slice(i, o);
                return a.join("")
            }, r.exports = n
        }, {}],
        31: [function(e, r, t) {
            "use strict";

            function n(e, r) {
                var t = e.bMarks[r] + e.blkIndent,
                    n = e.eMarks[r];
                return e.src.substr(t, n - t)
            }
            r.exports = function(e, r, t, s) {
                var i, o, a, l, c, u, p, h, f, d;
                if (r + 2 > t) return !1;
                if (c = r + 1, e.tShift[c] < e.blkIndent) return !1;
                if (a = e.bMarks[c] + e.tShift[c], a >= e.eMarks[c]) return !1;
                if (i = e.src.charCodeAt(a), 124 !== i && 45 !== i && 58 !== i) return !1;
                if (o = n(e, r + 1), !/^[-:| ]+$/.test(o)) return !1;
                if (u = o.split("|"), u <= 2) return !1;
                for (p = [], l = 0; l < u.length; l++) {
                    if (h = u[l].trim(), !h) {
                        if (0 === l || l === u.length - 1) continue;
                        return !1
                    }
                    if (!/^:?-+:?$/.test(h)) return !1;
                    58 === h.charCodeAt(h.length - 1) ? p.push(58 === h.charCodeAt(0) ? "center" : "right") : 58 === h.charCodeAt(0) ? p.push("left") : p.push("")
                }
                if (o = n(e, r).trim(), o.indexOf("|") === -1) return !1;
                if (u = o.replace(/^\||\|$/g, "").split("|"), p.length !== u.length) return !1;
                if (s) return !0;
                for (e.tokens.push({
                        type: "table_open",
                        lines: f = [r, 0],
                        level: e.level++
                    }), e.tokens.push({
                        type: "thead_open",
                        lines: [r, r + 1],
                        level: e.level++
                    }), e.tokens.push({
                        type: "tr_open",
                        lines: [r, r + 1],
                        level: e.level++
                    }), l = 0; l < u.length; l++) e.tokens.push({
                    type: "th_open",
                    align: p[l],
                    lines: [r, r + 1],
                    level: e.level++
                }), e.tokens.push({
                    type: "inline",
                    content: u[l].trim(),
                    lines: [r, r + 1],
                    level: e.level,
                    children: []
                }), e.tokens.push({
                    type: "th_close",
                    level: --e.level
                });
                for (e.tokens.push({
                        type: "tr_close",
                        level: --e.level
                    }), e.tokens.push({
                        type: "thead_close",
                        level: --e.level
                    }), e.tokens.push({
                        type: "tbody_open",
                        lines: d = [r + 2, 0],
                        level: e.level++
                    }), c = r + 2; c < t && !(e.tShift[c] < e.blkIndent) && (o = n(e, c).trim(), o.indexOf("|") !== -1); c++) {
                    for (u = o.replace(/^\||\|$/g, "").split("|"), e.tokens.push({
                            type: "tr_open",
                            level: e.level++
                        }), l = 0; l < u.length; l++) e.tokens.push({
                        type: "td_open",
                        align: p[l],
                        level: e.level++
                    }), e.tokens.push({
                        type: "inline",
                        content: u[l].replace(/^\|? *| *\|?$/g, ""),
                        level: e.level,
                        children: []
                    }), e.tokens.push({
                        type: "td_close",
                        level: --e.level
                    });
                    e.tokens.push({
                        type: "tr_close",
                        level: --e.level
                    })
                }
                return e.tokens.push({
                    type: "tbody_close",
                    level: --e.level
                }), e.tokens.push({
                    type: "table_close",
                    level: --e.level
                }), f[1] = d[1] = c, e.line = c, !0
            }
        }, {}],
        32: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                e.inlineMode ? e.tokens.push({
                    type: "inline",
                    content: e.src,
                    level: 0,
                    lines: [0, 1],
                    children: []
                }) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
            }
        }, {}],
        33: [function(e, r, t) {
            "use strict";
            r.exports = function(e) {
                var r, t, n, s = e.tokens;
                for (t = 0, n = s.length; t < n; t++) r = s[t], "inline" === r.type && e.md.inline.parse(r.content, e.md, e.env, r.children)
            }
        }, {}],
        34: [function(e, r, t) {
            "use strict";

            function n(e) {
                return /^<a[>\s]/i.test(e)
            }

            function s(e) {
                return /^<\/a\s*>/i.test(e)
            }

            function i() {
                var e = [],
                    r = new o({
                        stripPrefix: !1,
                        url: !0,
                        email: !0,
                        twitter: !1,
                        replaceFn: function(r, t) {
                            switch (t.getType()) {
                                case "url":
                                    e.push({
                                        text: t.matchedText,
                                        url: t.getUrl()
                                    });
                                    break;
                                case "email":
                                    e.push({
                                        text: t.matchedText,
                                        url: "mailto:" + t.getEmail().replace(/^mailto:/i, "")
                                    })
                            }
                            return !1
                        }
                    });
                return {
                    links: e,
                    autolinker: r
                }
            }
            var o = e("autolinker"),
                a = e("../common/utils").arrayReplaceAt,
                l = /www|@|\:\/\//;
            r.exports = function(e) {
                var r, t, o, c, u, p, h, f, d, g, m, b, v, k = e.tokens,
                    y = null;
                if (e.md.options.linkify)
                    for (t = 0, o = k.length; t < o; t++)
                        if ("inline" === k[t].type)
                            for (c = k[t].children, m = 0, r = c.length - 1; r >= 0; r--)
                                if (u = c[r], "link_close" !== u.type) {
                                    if ("html_inline" === u.type && (n(u.content) && m > 0 && m--, s(u.content) && m++), !(m > 0) && "text" === u.type && l.test(u.content)) {
                                        if (y || (y = i(), b = y.links, v = y.autolinker), p = u.content, b.length = 0, v.link(p), !b.length) continue;
                                        for (h = [], g = u.level, f = 0; f < b.length; f++) e.md.inline.validateLink(b[f].url) && (d = p.indexOf(b[f].text), d && (g = g, h.push({
                                            type: "text",
                                            content: p.slice(0, d),
                                            level: g
                                        })), h.push({
                                            type: "link_open",
                                            href: b[f].url,
                                            target: "",
                                            title: "",
                                            level: g++
                                        }), h.push({
                                            type: "text",
                                            content: b[f].text,
                                            level: g
                                        }), h.push({
                                            type: "link_close",
                                            level: --g
                                        }), p = p.slice(d + b[f].text.length));
                                        p.length && h.push({
                                            type: "text",
                                            content: p,
                                            level: g
                                        }), k[t].children = c = a(c, r, h)
                                    }
                                } else
                                    for (r--; c[r].level !== u.level && "link_open" !== c[r].type;) r--
            }
        }, {
            "../common/utils": 5,
            autolinker: 51
        }],
        35: [function(e, r, t) {
            "use strict";
            var n = /[\n\t]/g,
                s = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
                i = /\u0000/g;
            r.exports = function(e) {
                var r, t, o;
                e.normalizeInput && (r = e.src.replace(s, "\n"), r = r.replace(i, "�"), r.indexOf("\t") >= 0 && (t = 0, o = 0, r = r.replace(n, function(e, n) {
                    var s;
                    return 10 === r.charCodeAt(n) ? (t = n + 1, o = 0, e) : (s = "    ".slice((n - t - o) % 4), o = n - t + 1, s)
                })), e.src = r)
            }
        }, {}],
        36: [function(e, r, t) {
            "use strict";

            function n(e) {
                return e.indexOf("(") < 0 ? e : e.replace(i, function(e, r) {
                    return o[r.toLowerCase()]
                })
            }
            var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
                i = /\((c|tm|r|p)\)/gi,
                o = {
                    c: "©",
                    r: "®",
                    p: "§",
                    tm: "™"
                };
            r.exports = function(e) {
                var r, t, i, o, a;
                if (e.md.options.typographer)
                    for (a = e.tokens.length - 1; a >= 0; a--)
                        if ("inline" === e.tokens[a].type)
                            for (o = e.tokens[a].children, r = o.length - 1; r >= 0; r--) t = o[r], "text" === t.type && (i = t.content, i = n(i), s.test(i) && (i = i.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), t.content = i)
            }
        }, {}],
        37: [function(e, r, t) {
            "use strict";

            function n(e, r) {
                return !(r < 0 || r >= e.length) && !a.test(e[r])
            }

            function s(e, r, t) {
                return e.substr(0, r) + t + e.substr(r + 1)
            }
            var i = /['"]/,
                o = /['"]/g,
                a = /[-\s()\[\]]/,
                l = "’";
            r.exports = function(e) {
                var r, t, a, c, u, p, h, f, d, g, m, b, v, k, y, _, x;
                if (e.md.options.typographer)
                    for (x = [], y = e.tokens.length - 1; y >= 0; y--)
                        if ("inline" === e.tokens[y].type)
                            for (_ = e.tokens[y].children, x.length = 0, r = 0; r < _.length; r++)
                                if (t = _[r], "text" === t.type && !i.test(t.text)) {
                                    for (h = _[r].level, v = x.length - 1; v >= 0 && !(x[v].level <= h); v--);
                                    x.length = v + 1, a = t.content, u = 0, p = a.length;
                                    e: for (; u < p && (o.lastIndex = u, c = o.exec(a));)
                                        if (f = !n(a, c.index - 1), u = c.index + 1, k = "'" === c[0], d = !n(a, u), d || f) {
                                            if (m = !d, b = !f)
                                                for (v = x.length - 1; v >= 0 && (g = x[v], !(x[v].level < h)); v--)
                                                    if (g.single === k && x[v].level === h) {
                                                        g = x[v], k ? (_[g.token].content = s(_[g.token].content, g.pos, e.md.options.quotes[2]), t.content = s(t.content, c.index, e.md.options.quotes[3])) : (_[g.token].content = s(_[g.token].content, g.pos, e.md.options.quotes[0]), t.content = s(t.content, c.index, e.md.options.quotes[1])), x.length = v;
                                                        continue e
                                                    }
                                            m ? x.push({
                                                token: r,
                                                pos: c.index,
                                                single: k,
                                                level: h
                                            }) : b && k && (t.content = s(t.content, c.index, l))
                                        } else k && (t.content = s(t.content, c.index, l))
                                }
            }
        }, {}],
        38: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r, t) {
                this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.normalizeInput = !0, this.md = r
            }
        }, {}],
        39: [function(e, r, t) {
            "use strict";
            var n = e("../common/url_schemas"),
                s = e("../common/utils").normalizeLink,
                i = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
                o = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
            r.exports = function(e, r) {
                var t, a, l, c, u, p = e.pos;
                return 60 === e.src.charCodeAt(p) && (t = e.src.slice(p), !(t.indexOf(">") < 0) && ((a = t.match(o)) ? !(n.indexOf(a[1].toLowerCase()) < 0) && (c = a[0].slice(1, -1),
                    u = s(c), !!e.md.inline.validateLink(c) && (r || (e.push({
                        type: "link_open",
                        href: u,
                        target: "",
                        level: e.level
                    }), e.push({
                        type: "text",
                        content: c,
                        level: e.level + 1
                    }), e.push({
                        type: "link_close",
                        level: e.level
                    })), e.pos += a[0].length, !0)) : (l = t.match(i), !!l && (c = l[0].slice(1, -1), u = s("mailto:" + c), !!e.md.inline.validateLink(u) && (r || (e.push({
                    type: "link_open",
                    href: u,
                    target: "",
                    level: e.level
                }), e.push({
                    type: "text",
                    content: c,
                    level: e.level + 1
                }), e.push({
                    type: "link_close",
                    level: e.level
                })), e.pos += l[0].length, !0)))))
            }
        }, {
            "../common/url_schemas": 4,
            "../common/utils": 5
        }],
        40: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r) {
                var t, n, s, i, o, a = e.pos,
                    l = e.src.charCodeAt(a);
                if (96 !== l) return !1;
                for (t = a, a++, n = e.posMax; a < n && 96 === e.src.charCodeAt(a);) a++;
                for (s = e.src.slice(t, a), i = o = a;
                    (i = e.src.indexOf("`", o)) !== -1;) {
                    for (o = i + 1; o < n && 96 === e.src.charCodeAt(o);) o++;
                    if (o - i === s.length) return r || e.push({
                        type: "code_inline",
                        content: e.src.slice(a, i).replace(/[ \n]+/g, " ").trim(),
                        level: e.level
                    }), e.pos = o, !0
                }
                return r || (e.pending += s), e.pos += s.length, !0
            }
        }, {}],
        41: [function(e, r, t) {
            "use strict";

            function n(e) {
                return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122
            }

            function s(e, r) {
                var t, s, l, c, u, p, h, f = r,
                    d = !0,
                    g = !0,
                    m = e.posMax,
                    b = e.src.charCodeAt(r);
                for (t = r > 0 ? e.src.charCodeAt(r - 1) : -1; f < m && e.src.charCodeAt(f) === b;) f++;
                return f >= m && (d = !1), l = f - r, s = f < m ? e.src.charCodeAt(f) : -1, u = t >= 0 && (a(t) || o(String.fromCharCode(t))), h = s >= 0 && (a(s) || o(String.fromCharCode(s))), c = t >= 0 && i(t), p = s >= 0 && i(s), p ? d = !1 : h && (c || u || t === -1 || (d = !1)), c ? g = !1 : u && (p || h || s === -1 || (g = !1)), 95 === b && (n(t) && (d = !1), n(s) && (g = !1)), {
                    can_open: d,
                    can_close: g,
                    delims: l
                }
            }
            var i = e("../common/utils").isWhiteSpace,
                o = e("../common/utils").isPunctChar,
                a = e("../common/utils").isMdAsciiPunct;
            r.exports = function(e, r) {
                var t, n, i, o, a, l, c, u = e.posMax,
                    p = e.pos,
                    h = e.src.charCodeAt(p);
                if (95 !== h && 42 !== h) return !1;
                if (r) return !1;
                if (c = s(e, p), t = c.delims, !c.can_open) return e.pos += t, e.pending += e.src.slice(p, e.pos), !0;
                for (e.pos = p + t, l = [t]; e.pos < u;)
                    if (e.src.charCodeAt(e.pos) !== h) e.md.inline.skipToken(e);
                    else {
                        if (c = s(e, e.pos), n = c.delims, c.can_close) {
                            for (o = l.pop(), a = n; o !== a;) {
                                if (a < o) {
                                    l.push(o - a);
                                    break
                                }
                                if (a -= o, 0 === l.length) break;
                                e.pos += o, o = l.pop()
                            }
                            if (0 === l.length) {
                                t = o, i = !0;
                                break
                            }
                            e.pos += n;
                            continue
                        }
                        c.can_open && l.push(n), e.pos += n
                    }
                if (!i) return e.pos = p, !1;
                for (e.posMax = e.pos, e.pos = p + t, n = t; n > 1; n -= 2) e.push({
                    type: "strong_open",
                    level: e.level++
                });
                for (n % 2 && e.push({
                        type: "em_open",
                        level: e.level++
                    }), e.md.inline.tokenize(e), n % 2 && e.push({
                        type: "em_close",
                        level: --e.level
                    }), n = t; n > 1; n -= 2) e.push({
                    type: "strong_close",
                    level: --e.level
                });
                return e.pos = e.posMax + t, e.posMax = u, !0
            }
        }, {
            "../common/utils": 5
        }],
        42: [function(e, r, t) {
            "use strict";
            var n = e("../common/entities"),
                s = e("../common/utils").has,
                i = e("../common/utils").isValidEntityCode,
                o = e("../common/utils").fromCodePoint,
                a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
                l = /^&([a-z][a-z0-9]{1,31});/i;
            r.exports = function(e, r) {
                var t, c, u, p = e.pos,
                    h = e.posMax;
                if (38 !== e.src.charCodeAt(p)) return !1;
                if (p + 1 < h)
                    if (t = e.src.charCodeAt(p + 1), 35 === t) {
                        if (u = e.src.slice(p).match(a)) return r || (c = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), e.pending += o(i(c) ? c : 65533)), e.pos += u[0].length, !0
                    } else if (u = e.src.slice(p).match(l), u && s(n, u[1])) return r || (e.pending += n[u[1]]), e.pos += u[0].length, !0;
                return r || (e.pending += "&"), e.pos++, !0
            }
        }, {
            "../common/entities": 1,
            "../common/utils": 5
        }],
        43: [function(e, r, t) {
            "use strict";
            for (var n = [], s = 0; s < 256; s++) n.push(0);
            "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
                n[e.charCodeAt(0)] = 1
            }), r.exports = function(e, r) {
                var t, s = e.pos,
                    i = e.posMax;
                if (92 !== e.src.charCodeAt(s)) return !1;
                if (s++, s < i) {
                    if (t = e.src.charCodeAt(s), t < 256 && 0 !== n[t]) return r || (e.pending += e.src[s]), e.pos += 2, !0;
                    if (10 === t) {
                        for (r || e.push({
                                type: "hardbreak",
                                level: e.level
                            }), s++; s < i && 32 === e.src.charCodeAt(s);) s++;
                        return e.pos = s, !0
                    }
                }
                return r || (e.pending += "\\"), e.pos++, !0
            }
        }, {}],
        44: [function(e, r, t) {
            "use strict";

            function n(e) {
                var r = 32 | e;
                return r >= 97 && r <= 122
            }
            var s = e("../common/html_re").HTML_TAG_RE,
                i = /^<!--[\s\S]*?-->$/;
            r.exports = function(e, r) {
                var t, o, a, l, c = e.pos;
                return !!e.md.options.html && (a = e.posMax, !(60 !== e.src.charCodeAt(c) || c + 2 >= a) && (t = e.src.charCodeAt(c + 1), !(33 !== t && 63 !== t && 47 !== t && !n(t)) && (!!(o = e.src.slice(c).match(s)) && (l = e.src.slice(c, c + o[0].length), (!i.test(l) || !/(^>|^->|--|-$)/.test(l.slice(4, -3))) && (r || e.push({
                    type: "html_inline",
                    content: l,
                    level: e.level
                }), e.pos += o[0].length, !0)))))
            }
        }, {
            "../common/html_re": 3
        }],
        45: [function(e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_label"),
                s = e("../helpers/parse_link_destination"),
                i = e("../helpers/parse_link_title"),
                o = e("../helpers/normalize_reference");
            r.exports = function(e, r) {
                var t, a, l, c, u, p, h, f, d, g, m, b = e.pos,
                    v = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos)) return !1;
                if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                if (u = e.pos + 2, c = n(e, e.pos + 1, !1), c < 0) return !1;
                if (p = c + 1, p < v && 40 === e.src.charCodeAt(p)) {
                    for (p++; p < v && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    if (p >= v) return !1;
                    for (m = p, f = s(e.src, p, e.posMax), f.ok && e.md.inline.validateLink(f.str) ? (a = f.str, p = f.pos) : a = "", m = p; p < v && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    if (f = i(e.src, p, e.posMax), p < v && m !== p && f.ok)
                        for (d = f.str, p = f.pos; p < v && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    else d = "";
                    if (p >= v || 41 !== e.src.charCodeAt(p)) return e.pos = b, !1;
                    p++
                } else {
                    if ("undefined" == typeof e.env.references) return !1;
                    for (; p < v && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    if (p < v && 91 === e.src.charCodeAt(p) ? (m = p + 1, p = n(e, p), p >= 0 ? l = e.src.slice(m, p++) : p = c + 1) : p = c + 1, l || (l = e.src.slice(u, c)), h = e.env.references[o(l)], !h) return e.pos = b, !1;
                    a = h.href, d = h.title
                }
                if (!r) {
                    e.pos = u, e.posMax = c;
                    var k = new e.md.inline.State(e.src.slice(u, c), e.md, e.env, g = []);
                    k.md.inline.tokenize(k), e.push({
                        type: "image",
                        src: a,
                        title: d,
                        tokens: g,
                        level: e.level
                    })
                }
                return e.pos = p, e.posMax = v, !0
            }
        }, {
            "../helpers/normalize_reference": 7,
            "../helpers/parse_link_destination": 8,
            "../helpers/parse_link_label": 9,
            "../helpers/parse_link_title": 10
        }],
        46: [function(e, r, t) {
            "use strict";
            var n = e("../helpers/parse_link_label"),
                s = e("../helpers/parse_link_destination"),
                i = e("../helpers/parse_link_title"),
                o = e("../helpers/normalize_reference");
            r.exports = function(e, r) {
                var t, a, l, c, u, p, h, f, d, g = e.pos,
                    m = e.posMax,
                    b = e.pos;
                if (91 !== e.src.charCodeAt(e.pos)) return !1;
                if (u = e.pos + 1, c = n(e, e.pos, !0), c < 0) return !1;
                if (p = c + 1, p < m && 40 === e.src.charCodeAt(p)) {
                    for (p++; p < m && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    if (p >= m) return !1;
                    for (b = p, h = s(e.src, p, e.posMax), h.ok && e.md.inline.validateLink(h.str) ? (a = h.str, p = h.pos) : a = "", b = p; p < m && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    if (h = i(e.src, p, e.posMax), p < m && b !== p && h.ok)
                        for (d = h.str, p = h.pos; p < m && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    else d = "";
                    if (p >= m || 41 !== e.src.charCodeAt(p)) return e.pos = g, !1;
                    p++
                } else {
                    if ("undefined" == typeof e.env.references) return !1;
                    for (; p < m && (t = e.src.charCodeAt(p), 32 === t || 10 === t); p++);
                    if (p < m && 91 === e.src.charCodeAt(p) ? (b = p + 1, p = n(e, p), p >= 0 ? l = e.src.slice(b, p++) : p = c + 1) : p = c + 1, l || (l = e.src.slice(u, c)), f = e.env.references[o(l)], !f) return e.pos = g, !1;
                    a = f.href, d = f.title
                }
                return r || (e.pos = u, e.posMax = c, e.push({
                    type: "link_open",
                    href: a,
                    target: "",
                    title: d,
                    level: e.level++
                }), e.md.inline.tokenize(e), e.push({
                    type: "link_close",
                    level: --e.level
                })), e.pos = p, e.posMax = m, !0
            }
        }, {
            "../helpers/normalize_reference": 7,
            "../helpers/parse_link_destination": 8,
            "../helpers/parse_link_label": 9,
            "../helpers/parse_link_title": 10
        }],
        47: [function(e, r, t) {
            "use strict";
            r.exports = function(e, r) {
                var t, n, s = e.pos;
                if (10 !== e.src.charCodeAt(s)) return !1;
                for (t = e.pending.length - 1, n = e.posMax, r || (t >= 0 && 32 === e.pending.charCodeAt(t) ? t >= 1 && 32 === e.pending.charCodeAt(t - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push({
                        type: "hardbreak",
                        level: e.level
                    })) : (e.pending = e.pending.slice(0, -1), e.push({
                        type: "softbreak",
                        level: e.level
                    })) : e.push({
                        type: "softbreak",
                        level: e.level
                    })), s++; s < n && 32 === e.src.charCodeAt(s);) s++;
                return e.pos = s, !0
            }
        }, {}],
        48: [function(e, r, t) {
            "use strict";

            function n(e, r, t, n) {
                this.src = e, this.env = t, this.md = r, this.tokens = n, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.labelUnmatchedScopes = 0
            }
            n.prototype.pushPending = function() {
                this.tokens.push({
                    type: "text",
                    content: this.pending,
                    level: this.pendingLevel
                }), this.pending = ""
            }, n.prototype.push = function(e) {
                this.pending && this.pushPending(), this.tokens.push(e), this.pendingLevel = this.level
            }, n.prototype.cacheSet = function(e, r) {
                for (var t = this.cache.length; t <= e; t++) this.cache.push(0);
                this.cache[e] = r
            }, n.prototype.cacheGet = function(e) {
                return e < this.cache.length ? this.cache[e] : 0
            }, r.exports = n
        }, {}],
        49: [function(e, r, t) {
            "use strict";

            function n(e, r) {
                var t, n, s, i = r,
                    o = !0,
                    a = !0,
                    l = e.posMax,
                    c = e.src.charCodeAt(r);
                for (t = r > 0 ? e.src.charCodeAt(r - 1) : -1; i < l && e.src.charCodeAt(i) === c;) i++;
                return i >= l && (o = !1), s = i - r, n = i < l ? e.src.charCodeAt(i) : -1, 32 !== n && 10 !== n || (o = !1), 32 !== t && 10 !== t || (a = !1), {
                    can_open: o,
                    can_close: a,
                    delims: s
                }
            }
            r.exports = function(e, r) {
                var t, s, i, o, a, l, c = e.posMax,
                    u = e.pos,
                    p = e.src.charCodeAt(u);
                if (126 !== p) return !1;
                if (r) return !1;
                if (l = n(e, u), t = l.delims, !l.can_open) return e.pos += t, e.pending += e.src.slice(u, e.pos), !0;
                if (a = Math.floor(t / 2), a <= 0) return !1;
                for (e.pos = u + t; e.pos < c;)
                    if (e.src.charCodeAt(e.pos) !== p) e.md.inline.skipToken(e);
                    else {
                        if (l = n(e, e.pos), s = l.delims, i = Math.floor(s / 2), l.can_close) {
                            if (i >= a) {
                                e.pos += s - 2, o = !0;
                                break
                            }
                            a -= i, e.pos += s;
                            continue
                        }
                        l.can_open && (a += i), e.pos += s
                    }
                return o ? (e.posMax = e.pos, e.pos = u + 2, e.push({
                    type: "s_open",
                    level: e.level++
                }), e.md.inline.tokenize(e), e.push({
                    type: "s_close",
                    level: --e.level
                }), e.pos = e.posMax + 2, e.posMax = c, !0) : (e.pos = u, !1)
            }
        }, {}],
        50: [function(e, r, t) {
            "use strict";

            function n(e) {
                switch (e) {
                    case 10:
                    case 33:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 42:
                    case 43:
                    case 45:
                    case 58:
                    case 60:
                    case 61:
                    case 62:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 125:
                    case 126:
                        return !0;
                    default:
                        return !1
                }
            }
            r.exports = function(e, r) {
                for (var t = e.pos; t < e.posMax && !n(e.src.charCodeAt(t));) t++;
                return t !== e.pos && (r || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0)
            }
        }, {}],
        51: [function(r, t, n) {
            ! function(r, s) {
                "function" == typeof e && e.amd ? e([], function() {
                    return r.returnExportsGlobal = s()
                }) : "object" == typeof n ? t.exports = s() : r.Autolinker = s()
            }(this, function() {
                var e = function(r) {
                    e.Util.assign(this, r), this.matchValidator = new e.MatchValidator
                };
                return e.prototype = {
                    constructor: e,
                    urls: !0,
                    email: !0,
                    twitter: !0,
                    newWindow: !0,
                    stripPrefix: !0,
                    className: "",
                    htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,
                    matcherRegex: function() {
                        var e = /(^|[^\w])@(\w{1,15})/,
                            r = /(?:[\-;:&=\+\$,\w\.]+@)/,
                            t = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
                            n = /(?:www\.)/,
                            s = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
                            i = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
                            o = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
                        return new RegExp(["(", e.source, ")", "|", "(", r.source, s.source, i.source, ")", "|", "(", "(?:", "(", t.source, s.source, ")", "|", "(?:", "(.?//)?", n.source, s.source, ")", "|", "(?:", "(.?//)?", s.source, i.source, ")", ")", "(?:" + o.source + ")?", ")"].join(""), "gi")
                    }(),
                    charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
                    link: function(r) {
                        var t = this,
                            n = this.getHtmlParser(),
                            s = this.htmlCharacterEntitiesRegex,
                            i = 0,
                            o = [];
                        return n.parse(r, {
                            processHtmlNode: function(e, r, t) {
                                "a" === r && (t ? i = Math.max(i - 1, 0) : i++), o.push(e)
                            },
                            processTextNode: function(r) {
                                if (0 === i)
                                    for (var n = e.Util.splitAndCapture(r, s), a = 0, l = n.length; a < l; a++) {
                                        var c = n[a],
                                            u = t.processTextNode(c);
                                        o.push(u)
                                    } else o.push(r)
                            }
                        }), o.join("")
                    },
                    getHtmlParser: function() {
                        var r = this.htmlParser;
                        return r || (r = this.htmlParser = new e.HtmlParser), r
                    },
                    getTagBuilder: function() {
                        var r = this.tagBuilder;
                        return r || (r = this.tagBuilder = new e.AnchorTagBuilder({
                            newWindow: this.newWindow,
                            truncate: this.truncate,
                            className: this.className
                        })), r
                    },
                    processTextNode: function(e) {
                        var r = this;
                        return e.replace(this.matcherRegex, function(e, t, n, s, i, o, a, l, c) {
                            var u = r.processCandidateMatch(e, t, n, s, i, o, a, l, c);
                            if (u) {
                                var p = r.createMatchReturnVal(u.match, u.matchStr);
                                return u.prefixStr + p + u.suffixStr
                            }
                            return e
                        })
                    },
                    processCandidateMatch: function(r, t, n, s, i, o, a, l, c) {
                        var u, p = l || c,
                            h = "",
                            f = "";
                        if (t && !this.twitter || i && !this.email || o && !this.urls || !this.matchValidator.isValidMatch(o, a, p)) return null;
                        if (this.matchHasUnbalancedClosingParen(r) && (r = r.substr(0, r.length - 1), f = ")"), i) u = new e.match.Email({
                            matchedText: r,
                            email: i
                        });
                        else if (t) n && (h = n, r = r.slice(1)), u = new e.match.Twitter({
                            matchedText: r,
                            twitterHandle: s
                        });
                        else {
                            if (p) {
                                var d = p.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                                d && (h = d, r = r.slice(1))
                            }
                            u = new e.match.Url({
                                matchedText: r,
                                url: r,
                                protocolUrlMatch: !!a,
                                protocolRelativeMatch: !!p,
                                stripPrefix: this.stripPrefix
                            })
                        }
                        return {
                            prefixStr: h,
                            suffixStr: f,
                            matchStr: r,
                            match: u
                        }
                    },
                    matchHasUnbalancedClosingParen: function(e) {
                        var r = e.charAt(e.length - 1);
                        if (")" === r) {
                            var t = e.match(/\(/g),
                                n = e.match(/\)/g),
                                s = t && t.length || 0,
                                i = n && n.length || 0;
                            if (s < i) return !0
                        }
                        return !1
                    },
                    createMatchReturnVal: function(r, t) {
                        var n;
                        if (this.replaceFn && (n = this.replaceFn.call(this, this, r)), "string" == typeof n) return n;
                        if (n === !1) return t;
                        if (n instanceof e.HtmlTag) return n.toString();
                        var s = this.getTagBuilder(),
                            i = s.build(r);
                        return i.toString()
                    }
                }, e.link = function(r, t) {
                    var n = new e(t);
                    return n.link(r)
                }, e.match = {}, e.Util = {
                    abstractMethod: function() {
                        throw "abstract"
                    },
                    assign: function(e, r) {
                        for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
                        return e
                    },
                    extend: function(r, t) {
                        var n = r.prototype,
                            s = function() {};
                        s.prototype = n;
                        var i;
                        i = t.hasOwnProperty("constructor") ? t.constructor : function() {
                            n.constructor.apply(this, arguments)
                        };
                        var o = i.prototype = new s;
                        return o.constructor = i, o.superclass = n, delete t.constructor, e.Util.assign(o, t), i
                    },
                    ellipsis: function(e, r, t) {
                        return e.length > r && (t = null == t ? ".." : t, e = e.substring(0, r - t.length) + t), e
                    },
                    indexOf: function(e, r) {
                        if (Array.prototype.indexOf) return e.indexOf(r);
                        for (var t = 0, n = e.length; t < n; t++)
                            if (e[t] === r) return t;
                        return -1
                    },
                    splitAndCapture: function(e, r) {
                        if (!r.global) throw new Error("`splitRegex` must have the 'g' flag set");
                        for (var t, n = [], s = 0; t = r.exec(e);) n.push(e.substring(s, t.index)), n.push(t[0]), s = t.index + t[0].length;
                        return n.push(e.substring(s)), n
                    }
                }, e.HtmlParser = e.Util.extend(Object, {
                    htmlRegex: function() {
                        var e = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
                            r = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
                            t = /(?:".*?"|'.*?'|[^'"=<>`\s]+)/,
                            n = r.source + "(?:\\s*=\\s*" + t.source + ")?";
                        return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", n, "|", t.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + e.source + ")", "(?:", "\\s+", n, ")*", "\\s*/?", ">", ")"].join(""), "gi")
                    }(),
                    parse: function(e, r) {
                        r = r || {};
                        for (var t, n = r.processHtmlNode || function() {}, s = r.processTextNode || function() {}, i = this.htmlRegex, o = 0; null !== (t = i.exec(e));) {
                            var a = t[0],
                                l = t[1] || t[3],
                                c = !!t[2],
                                u = e.substring(o, t.index);
                            u && s(u), n(a, l.toLowerCase(), c), o = t.index + a.length
                        }
                        if (o < e.length) {
                            var p = e.substring(o);
                            p && s(p)
                        }
                    }
                }), e.HtmlTag = e.Util.extend(Object, {
                    whitespaceRegex: /\s+/,
                    constructor: function(r) {
                        e.Util.assign(this, r), this.innerHtml = this.innerHtml || this.innerHTML
                    },
                    setTagName: function(e) {
                        return this.tagName = e, this
                    },
                    getTagName: function() {
                        return this.tagName || ""
                    },
                    setAttr: function(e, r) {
                        var t = this.getAttrs();
                        return t[e] = r, this
                    },
                    getAttr: function(e) {
                        return this.getAttrs()[e]
                    },
                    setAttrs: function(r) {
                        var t = this.getAttrs();
                        return e.Util.assign(t, r), this
                    },
                    getAttrs: function() {
                        return this.attrs || (this.attrs = {})
                    },
                    setClass: function(e) {
                        return this.setAttr("class", e)
                    },
                    addClass: function(r) {
                        for (var t, n = this.getClass(), s = this.whitespaceRegex, i = e.Util.indexOf, o = n ? n.split(s) : [], a = r.split(s); t = a.shift();) i(o, t) === -1 && o.push(t);
                        return this.getAttrs().class = o.join(" "), this
                    },
                    removeClass: function(r) {
                        for (var t, n = this.getClass(), s = this.whitespaceRegex, i = e.Util.indexOf, o = n ? n.split(s) : [], a = r.split(s); o.length && (t = a.shift());) {
                            var l = i(o, t);
                            l !== -1 && o.splice(l, 1)
                        }
                        return this.getAttrs().class = o.join(" "), this
                    },
                    getClass: function() {
                        return this.getAttrs().class || ""
                    },
                    hasClass: function(e) {
                        return (" " + this.getClass() + " ").indexOf(" " + e + " ") !== -1
                    },
                    setInnerHtml: function(e) {
                        return this.innerHtml = e, this
                    },
                    getInnerHtml: function() {
                        return this.innerHtml || ""
                    },
                    toString: function() {
                        var e = this.getTagName(),
                            r = this.buildAttrsStr();
                        return r = r ? " " + r : "", ["<", e, r, ">", this.getInnerHtml(), "</", e, ">"].join("")
                    },
                    buildAttrsStr: function() {
                        if (!this.attrs) return "";
                        var e = this.getAttrs(),
                            r = [];
                        for (var t in e) e.hasOwnProperty(t) && r.push(t + '="' + e[t] + '"');
                        return r.join(" ")
                    }
                }), e.MatchValidator = e.Util.extend(Object, {
                    invalidProtocolRelMatchRegex: /^[\w]\/\//,
                    hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
                    uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
                    hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
                    isValidMatch: function(e, r, t) {
                        return !(r && !this.isValidUriScheme(r) || this.urlMatchDoesNotHaveProtocolOrDot(e, r) || this.urlMatchDoesNotHaveAtLeastOneWordChar(e, r) || this.isInvalidProtocolRelativeMatch(t))
                    },
                    isValidUriScheme: function(e) {
                        var r = e.match(this.uriSchemeRegex)[0];
                        return "javascript:" !== r && "vbscript:" !== r
                    },
                    urlMatchDoesNotHaveProtocolOrDot: function(e, r) {
                        return !(!e || r && this.hasFullProtocolRegex.test(r) || e.indexOf(".") !== -1)
                    },
                    urlMatchDoesNotHaveAtLeastOneWordChar: function(e, r) {
                        return !(!e || !r) && !this.hasWordCharAfterProtocolRegex.test(e)
                    },
                    isInvalidProtocolRelativeMatch: function(e) {
                        return !!e && this.invalidProtocolRelMatchRegex.test(e)
                    }
                }), e.AnchorTagBuilder = e.Util.extend(Object, {
                    constructor: function(r) {
                        e.Util.assign(this, r)
                    },
                    build: function(r) {
                        var t = new e.HtmlTag({
                            tagName: "a",
                            attrs: this.createAttrs(r.getType(), r.getAnchorHref()),
                            innerHtml: this.processAnchorText(r.getAnchorText())
                        });
                        return t
                    },
                    createAttrs: function(e, r) {
                        var t = {
                                href: r
                            },
                            n = this.createCssClass(e);
                        return n && (t.class = n), this.newWindow && (t.target = "_blank"), t
                    },
                    createCssClass: function(e) {
                        var r = this.className;
                        return r ? r + " " + r + "-" + e : ""
                    },
                    processAnchorText: function(e) {
                        return e = this.doTruncate(e)
                    },
                    doTruncate: function(r) {
                        return e.Util.ellipsis(r, this.truncate || Number.POSITIVE_INFINITY)
                    }
                }), e.match.Match = e.Util.extend(Object, {
                    constructor: function(r) {
                        e.Util.assign(this, r)
                    },
                    getType: e.Util.abstractMethod,
                    getMatchedText: function() {
                        return this.matchedText
                    },
                    getAnchorHref: e.Util.abstractMethod,
                    getAnchorText: e.Util.abstractMethod
                }), e.match.Email = e.Util.extend(e.match.Match, {
                    getType: function() {
                        return "email"
                    },
                    getEmail: function() {
                        return this.email
                    },
                    getAnchorHref: function() {
                        return "mailto:" + this.email
                    },
                    getAnchorText: function() {
                        return this.email
                    }
                }), e.match.Twitter = e.Util.extend(e.match.Match, {
                    getType: function() {
                        return "twitter"
                    },
                    getTwitterHandle: function() {
                        return this.twitterHandle
                    },
                    getAnchorHref: function() {
                        return "https://twitter.com/" + this.twitterHandle
                    },
                    getAnchorText: function() {
                        return "@" + this.twitterHandle
                    }
                }), e.match.Url = e.Util.extend(e.match.Match, {
                    urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
                    protocolRelativeRegex: /^\/\//,
                    protocolPrepended: !1,
                    getType: function() {
                        return "url"
                    },
                    getUrl: function() {
                        var e = this.url;
                        return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (e = this.url = "http://" + e, this.protocolPrepended = !0), e
                    },
                    getAnchorHref: function() {
                        var e = this.getUrl();
                        return e.replace(/&amp;/g, "&")
                    },
                    getAnchorText: function() {
                        var e = this.getUrl();
                        return this.protocolRelativeMatch && (e = this.stripProtocolRelativePrefix(e)), this.stripPrefix && (e = this.stripUrlPrefix(e)), e = this.removeTrailingSlash(e)
                    },
                    stripUrlPrefix: function(e) {
                        return e.replace(this.urlPrefixRegex, "")
                    },
                    stripProtocolRelativePrefix: function(e) {
                        return e.replace(this.protocolRelativeRegex, "")
                    },
                    removeTrailingSlash: function(e) {
                        return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
                    }
                }), e
            })
        }, {}],
        52: [function(e, r, t) {
            "use strict";
            r.exports = e("./lib/")
        }, {
            "./lib/": 11
        }]
    }, {}, [52])(52)
});
var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0,
    function() {
        function e(e) {
            function t(e) {
                var t = e.charCodeAt(0);
                if (92 !== t) return t;
                var n = e.charAt(1);
                return (t = d[n]) ? t : "0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
            }

            function n(e) {
                return e < 32 ? (e < 16 ? "\\x0" : "\\x") + e.toString(16) : (e = String.fromCharCode(e), "\\" !== e && "-" !== e && "[" !== e && "]" !== e || (e = "\\" + e), e)
            }

            function r(e) {
                for (var r = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), e = [], a = [], s = "^" === r[0], i = s ? 1 : 0, o = r.length; i < o; ++i) {
                    var l = r[i];
                    if (/\\[bdsw]/i.test(l)) e.push(l);
                    else {
                        var c, l = t(l);
                        i + 2 < o && "-" === r[i + 1] ? (c = t(r[i + 2]), i += 2) : c = l, a.push([l, c]), c < 65 || l > 122 || (c < 65 || l > 90 || a.push([32 | Math.max(65, l), 32 | Math.min(c, 90)]), c < 97 || l > 122 || a.push([Math.max(97, l) & -33, Math.min(c, 122) & -33]))
                    }
                }
                for (a.sort(function(e, t) {
                        return e[0] - t[0] || t[1] - e[1]
                    }), r = [], l = [NaN, NaN], i = 0; i < a.length; ++i) o = a[i], o[0] <= l[1] + 1 ? l[1] = Math.max(l[1], o[1]) : r.push(l = o);
                for (a = ["["], s && a.push("^"), a.push.apply(a, e), i = 0; i < r.length; ++i) o = r[i], a.push(n(o[0])), o[1] > o[0] && (o[1] + 1 > o[0] && a.push("-"), a.push(n(o[1])));
                return a.push("]"), a.join("")
            }

            function a(e) {
                for (var t = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), n = t.length, a = [], o = 0, l = 0; o < n; ++o) {
                    var c = t[o];
                    "(" === c ? ++l : "\\" === c.charAt(0) && (c = +c.substring(1)) && c <= l && (a[c] = -1)
                }
                for (o = 1; o < a.length; ++o) - 1 === a[o] && (a[o] = ++s);
                for (l = o = 0; o < n; ++o) c = t[o], "(" === c ? (++l, void 0 === a[l] && (t[o] = "(?:")) : "\\" === c.charAt(0) && (c = +c.substring(1)) && c <= l && (t[o] = "\\" + a[l]);
                for (l = o = 0; o < n; ++o) "^" === t[o] && "^" !== t[o + 1] && (t[o] = "");
                if (e.ignoreCase && i)
                    for (o = 0; o < n; ++o) c = t[o], e = c.charAt(0), c.length >= 2 && "[" === e ? t[o] = r(c) : "\\" !== e && (t[o] = c.replace(/[A-Za-z]/g, function(e) {
                        return e = e.charCodeAt(0), "[" + String.fromCharCode(e & -33, 32 | e) + "]"
                    }));
                return t.join("")
            }
            for (var s = 0, i = !1, o = !1, l = 0, c = e.length; l < c; ++l) {
                var u = e[l];
                if (u.ignoreCase) o = !0;
                else if (/[a-z]/i.test(u.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                    i = !0, o = !1;
                    break
                }
            }
            for (var d = {
                    b: 8,
                    t: 9,
                    n: 10,
                    v: 11,
                    f: 12,
                    r: 13
                }, p = [], l = 0, c = e.length; l < c; ++l) {
                if (u = e[l], u.global || u.multiline) throw Error("" + u);
                p.push("(?:" + a(u) + ")")
            }
            return RegExp(p.join("|"), o ? "gi" : "g")
        }

        function t(e) {
            function t(e) {
                switch (e.nodeType) {
                    case 1:
                        if (r.test(e.className)) break;
                        for (var n = e.firstChild; n; n = n.nextSibling) t(n);
                        n = e.nodeName, "BR" !== n && "LI" !== n || (a[o] = "\n", i[o << 1] = s++, i[o++ << 1 | 1] = e);
                        break;
                    case 3:
                    case 4:
                        n = e.nodeValue, n.length && (n = l ? n.replace(/\r\n?/g, "\n") : n.replace(/[\t\n\r ]+/g, " "), a[o] = n, i[o << 1] = s, s += n.length, i[o++ << 1 | 1] = e)
                }
            }
            var n, r = /(?:^|\s)nocode(?:\s|$)/,
                a = [],
                s = 0,
                i = [],
                o = 0;
            e.currentStyle ? n = e.currentStyle.whiteSpace : window.getComputedStyle && (n = document.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
            var l = n && "pre" === n.substring(0, 3);
            return t(e), {
                a: a.join("").replace(/\n$/, ""),
                c: i
            }
        }

        function n(e, t, n, r) {
            t && (e = {
                a: t,
                d: e
            }, n(e), r.push.apply(r, e.e))
        }

        function r(t, r) {
            function a(e) {
                for (var t = e.d, c = [t, "pln"], u = 0, d = e.a.match(s) || [], p = {}, h = 0, f = d.length; h < f; ++h) {
                    var g, m = d[h],
                        y = p[m],
                        v = void 0;
                    if ("string" == typeof y) g = !1;
                    else {
                        var w = i[m.charAt(0)];
                        if (w) v = m.match(w[1]), y = w[0];
                        else {
                            for (g = 0; g < l; ++g)
                                if (w = r[g], v = m.match(w[1])) {
                                    y = w[0];
                                    break
                                }
                            v || (y = "pln")
                        }!(g = y.length >= 5 && "lang-" === y.substring(0, 5)) || v && "string" == typeof v[1] || (g = !1, y = "src"), g || (p[m] = y)
                    }
                    if (w = u, u += m.length, g) {
                        g = v[1];
                        var b = m.indexOf(g),
                            S = b + g.length;
                        v[2] && (S = m.length - v[2].length, b = S - g.length), y = y.substring(5), n(t + w, m.substring(0, b), a, c), n(t + w + b, g, o(y, g), c), n(t + w + S, m.substring(S), a, c)
                    } else c.push(t + w, y)
                }
                e.e = c
            }
            var s, i = {};
            ! function() {
                for (var n = t.concat(r), a = [], o = {}, l = 0, c = n.length; l < c; ++l) {
                    var u = n[l],
                        d = u[3];
                    if (d)
                        for (var p = d.length; --p >= 0;) i[d.charAt(p)] = u;
                    u = u[1], d = "" + u, o.hasOwnProperty(d) || (a.push(u), o[d] = q)
                }
                a.push(/[\S\s]/), s = e(a)
            }();
            var l = r.length;
            return a
        }

        function a(e) {
            var t = [],
                n = [];
            e.tripleQuotedStrings ? t.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : e.multiLineStrings ? t.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : t.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]), e.verbatimStrings && n.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
            var a = e.hashComments;
            return a && (e.cStyleComments ? (a > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : t.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : t.push(["com", /^#[^\n\r]*/, q, "#"])), e.cStyleComments && (n.push(["com", /^\/\/[^\n\r]*/, q]), n.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])), e.regexLiterals && n.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*\/])(?:[^\/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]), (a = e.types) && n.push(["typ", a]), e = ("" + e.keywords).replace(/^ | $/g, ""), e.length && n.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), q]), t.push(["pln", /^\s+/, q, " \r\n\t "]), n.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'.\/@\\`]*/, q]), r(t, n)
        }

        function s(e, t) {
            function n(e) {
                switch (e.nodeType) {
                    case 1:
                        if (s.test(e.className)) break;
                        if ("BR" === e.nodeName) r(e), e.parentNode && e.parentNode.removeChild(e);
                        else
                            for (e = e.firstChild; e; e = e.nextSibling) n(e);
                        break;
                    case 3:
                    case 4:
                        if (l) {
                            var t = e.nodeValue,
                                a = t.match(i);
                            if (a) {
                                var c = t.substring(0, a.index);
                                e.nodeValue = c, (t = t.substring(a.index + a[0].length)) && e.parentNode.insertBefore(o.createTextNode(t), e.nextSibling), r(e), c || e.parentNode.removeChild(e)
                            }
                        }
                }
            }

            function r(e) {
                function t(e, n) {
                    var r = n ? e.cloneNode(!1) : e,
                        a = e.parentNode;
                    if (a) {
                        var a = t(a, 1),
                            s = e.nextSibling;
                        a.appendChild(r);
                        for (var i = s; i; i = s) s = i.nextSibling, a.appendChild(i)
                    }
                    return r
                }
                for (; !e.nextSibling;)
                    if (e = e.parentNode, !e) return;
                for (var n, e = t(e.nextSibling, 0);
                    (n = e.parentNode) && 1 === n.nodeType;) e = n;
                c.push(e)
            }
            var a, s = /(?:^|\s)nocode(?:\s|$)/,
                i = /\r\n?|\n/,
                o = e.ownerDocument;
            e.currentStyle ? a = e.currentStyle.whiteSpace : window.getComputedStyle && (a = o.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
            var l = a && "pre" === a.substring(0, 3);
            for (a = o.createElement("LI"); e.firstChild;) a.appendChild(e.firstChild);
            for (var c = [a], u = 0; u < c.length; ++u) n(c[u]);
            t === (0 | t) && c[0].setAttribute("value", t);
            var d = o.createElement("OL");
            d.className = "linenums";
            for (var p = Math.max(0, t - 1 | 0) || 0, u = 0, h = c.length; u < h; ++u) a = c[u], a.className = "L" + (u + p) % 10, a.firstChild || a.appendChild(o.createTextNode(" ")), d.appendChild(a);
            e.appendChild(d)
        }

        function i(e, t) {
            for (var n = t.length; --n >= 0;) {
                var r = t[n];
                w.hasOwnProperty(r) ? window.console && console.warn("cannot override language handler %s", r) : w[r] = e
            }
        }

        function o(e, t) {
            return e && w.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), w[e]
        }

        function l(e) {
            var n = e.g;
            try {
                var r = t(e.h),
                    a = r.a;
                e.a = a, e.c = r.c, e.d = 0, o(n, a)(e);
                var s = /\bMSIE\b/.test(navigator.userAgent),
                    n = /\n/g,
                    i = e.a,
                    l = i.length,
                    r = 0,
                    c = e.c,
                    u = c.length,
                    a = 0,
                    d = e.e,
                    p = d.length,
                    e = 0;
                d[p] = l;
                var h, f;
                for (f = h = 0; f < p;) d[f] !== d[f + 2] ? (d[h++] = d[f++], d[h++] = d[f++]) : f += 2;
                for (p = h, f = h = 0; f < p;) {
                    for (var g = d[f], m = d[f + 1], y = f + 2; y + 2 <= p && d[y + 1] === m;) y += 2;
                    d[h++] = g, d[h++] = m, f = y
                }
                for (d.length = h; a < u;) {
                    var v, w = c[a + 2] || l,
                        b = d[e + 2] || l,
                        y = Math.min(w, b),
                        S = c[a + 1];
                    if (1 !== S.nodeType && (v = i.substring(r, y))) {
                        s && (v = v.replace(n, "\r")), S.nodeValue = v;
                        var x = S.ownerDocument,
                            N = x.createElement("SPAN");
                        N.className = d[e + 1];
                        var C = S.parentNode;
                        C.replaceChild(N, S), N.appendChild(S), r < w && (c[a + 1] = S = x.createTextNode(i.substring(y, w)), C.insertBefore(S, N.nextSibling))
                    }
                    r = y, r >= w && (a += 2), r >= b && (e += 2)
                }
            } catch (e) {
                "console" in window && console.log(e && e.stack ? e.stack : e)
            }
        }
        var c = ["break,continue,do,else,for,if,return,while"],
            u = [
                [c, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
            ],
            d = [u, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            p = [u, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
            h = [p, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],
            u = [u, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
            f = [c, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            g = [c, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            c = [c, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            m = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
            y = /\S/,
            v = a({
                keywords: [d, h, u, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + f, g, c],
                hashComments: !0,
                cStyleComments: !0,
                multiLineStrings: !0,
                regexLiterals: !0
            }),
            w = {};
        i(v, ["default-code"]), i(r([], [
            ["pln", /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
            ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
            ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), i(r([
            ["pln", /^\s+/, q, " \t\r\n"],
            ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'\/>]|\/(?=\s)))/],
            ["pun", /^[\/<->]+/],
            ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
            ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
            ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
            ["lang-css", /^style\s*=\s*"([^"]+)"/i],
            ["lang-css", /^style\s*=\s*'([^']+)'/i],
            ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]
        ]), ["in.tag"]), i(r([], [
            ["atv", /^[\S\s]+/]
        ]), ["uq.val"]), i(a({
            keywords: d,
            hashComments: !0,
            cStyleComments: !0,
            types: m
        }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), i(a({
            keywords: "null,true,false"
        }), ["json"]), i(a({
            keywords: h,
            hashComments: !0,
            cStyleComments: !0,
            verbatimStrings: !0,
            types: m
        }), ["cs"]), i(a({
            keywords: p,
            cStyleComments: !0
        }), ["java"]), i(a({
            keywords: c,
            hashComments: !0,
            multiLineStrings: !0
        }), ["bsh", "csh", "sh"]), i(a({
            keywords: f,
            hashComments: !0,
            multiLineStrings: !0,
            tripleQuotedStrings: !0
        }), ["cv", "py"]), i(a({
            keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["perl", "pl", "pm"]), i(a({
            keywords: g,
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["rb"]), i(a({
            keywords: u,
            cStyleComments: !0,
            regexLiterals: !0
        }), ["js"]), i(a({
            keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
            hashComments: 3,
            cStyleComments: !0,
            multilineStrings: !0,
            tripleQuotedStrings: !0,
            regexLiterals: !0
        }), ["coffee"]), i(r([], [
            ["str", /^[\S\s]+/]
        ]), ["regex"]), window.prettyPrintOne = function(e, t, n) {
            var r = document.createElement("PRE");
            return r.innerHTML = e, n && s(r, n), l({
                g: t,
                i: n,
                h: r
            }), r.innerHTML
        }, window.prettyPrint = function(e) {
            function t() {
                for (var n = window.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : 1 / 0; d < r.length && c.now() < n; d++) {
                    var a = r[d],
                        i = a.className;
                    if (i.indexOf("prettyprint") >= 0) {
                        var o, h, i = i.match(p);
                        if (h = !i) {
                            h = a;
                            for (var f = void 0, g = h.firstChild; g; g = g.nextSibling) var m = g.nodeType,
                                f = 1 === m ? f ? h : g : 3 === m && y.test(g.nodeValue) ? h : f;
                            h = (o = f === h ? void 0 : f) && "CODE" === o.tagName
                        }
                        for (h && (i = o.className.match(p)), i && (i = i[1]), h = !1, f = a.parentNode; f; f = f.parentNode)
                            if (("pre" === f.tagName || "code" === f.tagName || "xmp" === f.tagName) && f.className && f.className.indexOf("prettyprint") >= 0) {
                                h = !0;
                                break
                            }
                        h || ((h = !!(h = a.className.match(/\blinenums\b(?::(\d+))?/)) && (!h[1] || !h[1].length || +h[1])) && s(a, h), u = {
                            g: i,
                            h: a,
                            i: h
                        }, l(u))
                    }
                }
                d < r.length ? setTimeout(t, 250) : e && e()
            }
            for (var n = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], r = [], a = 0; a < n.length; ++a)
                for (var i = 0, o = n[a].length; i < o; ++i) r.push(n[a][i]);
            var n = q,
                c = Date;
            c.now || (c = {
                now: function() {
                    return +new Date
                }
            });
            var u, d = 0,
                p = /\blang(?:uage)?-([\w.]+)(?!\S)/;
            t()
        }, window.PR = {
            createSimpleLexer: r,
            registerLangHandler: i,
            sourceDecorator: a,
            PR_ATTRIB_NAME: "atn",
            PR_ATTRIB_VALUE: "atv",
            PR_COMMENT: "com",
            PR_DECLARATION: "dec",
            PR_KEYWORD: "kwd",
            PR_LITERAL: "lit",
            PR_NOCODE: "nocode",
            PR_PLAIN: "pln",
            PR_PUNCTUATION: "pun",
            PR_SOURCE: "src",
            PR_STRING: "str",
            PR_TAG: "tag",
            PR_TYPE: "typ"
        }
    }();
var QRCode;
! function() {
    function t(t) {
        this.mode = u.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
        for (var e = 0, r = this.data.length; e < r; e++) {
            var o = [],
                i = this.data.charCodeAt(e);
            i > 65536 ? (o[0] = 240 | (1835008 & i) >>> 18, o[1] = 128 | (258048 & i) >>> 12, o[2] = 128 | (4032 & i) >>> 6, o[3] = 128 | 63 & i) : i > 2048 ? (o[0] = 224 | (61440 & i) >>> 12, o[1] = 128 | (4032 & i) >>> 6, o[2] = 128 | 63 & i) : i > 128 ? (o[0] = 192 | (1984 & i) >>> 6, o[1] = 128 | 63 & i) : o[0] = i, this.parsedData.push(o)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function e(t, e) {
        this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function r(t, e) {
        if (void 0 == t.length) throw new Error(t.length + "/" + e);
        for (var r = 0; r < t.length && 0 == t[r];) r++;
        this.num = new Array(t.length - r + e);
        for (var o = 0; o < t.length - r; o++) this.num[o] = t[o + r]
    }

    function o(t, e) {
        this.totalCount = t, this.dataCount = e
    }

    function i() {
        this.buffer = [], this.length = 0
    }

    function n() {
        return "undefined" != typeof CanvasRenderingContext2D
    }

    function a() {
        var t = !1,
            e = navigator.userAgent;
        if (/android/i.test(e)) {
            t = !0;
            var r = e.toString().match(/android ([0-9]\.[0-9])/i);
            r && r[1] && (t = parseFloat(r[1]))
        }
        return t
    }

    function s(t, e) {
        for (var r = 1, o = h(t), i = 0, n = p.length; i <= n; i++) {
            var a = 0;
            switch (e) {
                case l.L:
                    a = p[i][0];
                    break;
                case l.M:
                    a = p[i][1];
                    break;
                case l.Q:
                    a = p[i][2];
                    break;
                case l.H:
                    a = p[i][3]
            }
            if (o <= a) break;
            r++
        }
        if (r > p.length) throw new Error("Too long data");
        return r
    }

    function h(t) {
        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return e.length + (e.length != t ? 3 : 0)
    }
    t.prototype = {
        getLength: function(t) {
            return this.parsedData.length
        },
        write: function(t) {
            for (var e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8)
        }
    }, e.prototype = {
        addData: function(e) {
            var r = new t(e);
            this.dataList.push(r), this.dataCache = null
        },
        isDark: function(t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(t, r) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var o = 0; o < this.moduleCount; o++) {
                this.modules[o] = new Array(this.moduleCount);
                for (var i = 0; i < this.moduleCount; i++) this.modules[o][i] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, r), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r)
        },
        setupPositionProbePattern: function(t, e) {
            for (var r = -1; r <= 7; r++)
                if (!(t + r <= -1 || this.moduleCount <= t + r))
                    for (var o = -1; o <= 7; o++) e + o <= -1 || this.moduleCount <= e + o || (0 <= r && r <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= o && o <= 4 ? this.modules[t + r][e + o] = !0 : this.modules[t + r][e + o] = !1)
        },
        getBestMaskPattern: function() {
            for (var t = 0, e = 0, r = 0; r < 8; r++) {
                this.makeImpl(!0, r);
                var o = g.getLostPoint(this);
                (0 == r || t > o) && (t = o, e = r)
            }
            return e
        },
        createMovieClip: function(t, e, r) {
            var o = t.createEmptyMovieClip(e, r),
                i = 1;
            this.make();
            for (var n = 0; n < this.modules.length; n++)
                for (var a = n * i, s = 0; s < this.modules[n].length; s++) {
                    var h = s * i,
                        u = this.modules[n][s];
                    u && (o.beginFill(0, 100), o.moveTo(h, a), o.lineTo(h + i, a), o.lineTo(h + i, a + i), o.lineTo(h, a + i), o.endFill())
                }
            return o
        },
        setupTimingPattern: function() {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        },
        setupPositionAdjustPattern: function() {
            for (var t = g.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                for (var r = 0; r < t.length; r++) {
                    var o = t[e],
                        i = t[r];
                    if (null == this.modules[o][i])
                        for (var n = -2; n <= 2; n++)
                            for (var a = -2; a <= 2; a++) n == -2 || 2 == n || a == -2 || 2 == a || 0 == n && 0 == a ? this.modules[o + n][i + a] = !0 : this.modules[o + n][i + a] = !1
                }
        },
        setupTypeNumber: function(t) {
            for (var e = g.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                var o = !t && 1 == (e >> r & 1);
                this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = o
            }
            for (var r = 0; r < 18; r++) {
                var o = !t && 1 == (e >> r & 1);
                this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o
            }
        },
        setupTypeInfo: function(t, e) {
            for (var r = this.errorCorrectLevel << 3 | e, o = g.getBCHTypeInfo(r), i = 0; i < 15; i++) {
                var n = !t && 1 == (o >> i & 1);
                i < 6 ? this.modules[i][8] = n : i < 8 ? this.modules[i + 1][8] = n : this.modules[this.moduleCount - 15 + i][8] = n
            }
            for (var i = 0; i < 15; i++) {
                var n = !t && 1 == (o >> i & 1);
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = n : i < 9 ? this.modules[8][15 - i - 1 + 1] = n : this.modules[8][15 - i - 1] = n
            }
            this.modules[this.moduleCount - 8][8] = !t
        },
        mapData: function(t, e) {
            for (var r = -1, o = this.moduleCount - 1, i = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                for (6 == a && a--;;) {
                    for (var s = 0; s < 2; s++)
                        if (null == this.modules[o][a - s]) {
                            var h = !1;
                            n < t.length && (h = 1 == (t[n] >>> i & 1));
                            var u = g.getMask(e, o, a - s);
                            u && (h = !h), this.modules[o][a - s] = h, i--, i == -1 && (n++, i = 7)
                        }
                    if (o += r, o < 0 || this.moduleCount <= o) {
                        o -= r, r = -r;
                        break
                    }
                }
        }
    }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function(t, r, n) {
        for (var a = o.getRSBlocks(t, r), s = new i, h = 0; h < n.length; h++) {
            var u = n[h];
            s.put(u.mode, 4), s.put(u.getLength(), g.getLengthInBits(u.mode, t)), u.write(s)
        }
        for (var l = 0, h = 0; h < a.length; h++) l += a[h].dataCount;
        if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
        for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
        for (;;) {
            if (s.getLengthInBits() >= 8 * l) break;
            if (s.put(e.PAD0, 8), s.getLengthInBits() >= 8 * l) break;
            s.put(e.PAD1, 8)
        }
        return e.createBytes(s, a)
    }, e.createBytes = function(t, e) {
        for (var o = 0, i = 0, n = 0, a = new Array(e.length), s = new Array(e.length), h = 0; h < e.length; h++) {
            var u = e[h].dataCount,
                l = e[h].totalCount - u;
            i = Math.max(i, u), n = Math.max(n, l), a[h] = new Array(u);
            for (var f = 0; f < a[h].length; f++) a[h][f] = 255 & t.buffer[f + o];
            o += u;
            var d = g.getErrorCorrectPolynomial(l),
                c = new r(a[h], d.getLength() - 1),
                p = c.mod(d);
            s[h] = new Array(d.getLength() - 1);
            for (var f = 0; f < s[h].length; f++) {
                var m = f + p.getLength() - s[h].length;
                s[h][f] = m >= 0 ? p.get(m) : 0
            }
        }
        for (var v = 0, f = 0; f < e.length; f++) v += e[f].totalCount;
        for (var _ = new Array(v), C = 0, f = 0; f < i; f++)
            for (var h = 0; h < e.length; h++) f < a[h].length && (_[C++] = a[h][f]);
        for (var f = 0; f < n; f++)
            for (var h = 0; h < e.length; h++) f < s[h].length && (_[C++] = s[h][f]);
        return _
    };
    for (var u = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, l = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, f = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, g = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var e = t << 10; g.getBCHDigit(e) - g.getBCHDigit(g.G15) >= 0;) e ^= g.G15 << g.getBCHDigit(e) - g.getBCHDigit(g.G15);
                return (t << 10 | e) ^ g.G15_MASK
            },
            getBCHTypeNumber: function(t) {
                for (var e = t << 12; g.getBCHDigit(e) - g.getBCHDigit(g.G18) >= 0;) e ^= g.G18 << g.getBCHDigit(e) - g.getBCHDigit(g.G18);
                return t << 12 | e
            },
            getBCHDigit: function(t) {
                for (var e = 0; 0 != t;) e++, t >>>= 1;
                return e
            },
            getPatternPosition: function(t) {
                return g.PATTERN_POSITION_TABLE[t - 1]
            },
            getMask: function(t, e, r) {
                switch (t) {
                    case f.PATTERN000:
                        return (e + r) % 2 == 0;
                    case f.PATTERN001:
                        return e % 2 == 0;
                    case f.PATTERN010:
                        return r % 3 == 0;
                    case f.PATTERN011:
                        return (e + r) % 3 == 0;
                    case f.PATTERN100:
                        return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                    case f.PATTERN101:
                        return e * r % 2 + e * r % 3 == 0;
                    case f.PATTERN110:
                        return (e * r % 2 + e * r % 3) % 2 == 0;
                    case f.PATTERN111:
                        return (e * r % 3 + (e + r) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new r([1], 0), o = 0; o < t; o++) e = e.multiply(new r([1, d.gexp(o)], 0));
                return e
            },
            getLengthInBits: function(t, e) {
                if (1 <= e && e < 10) switch (t) {
                    case u.MODE_NUMBER:
                        return 10;
                    case u.MODE_ALPHA_NUM:
                        return 9;
                    case u.MODE_8BIT_BYTE:
                        return 8;
                    case u.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                } else if (e < 27) switch (t) {
                    case u.MODE_NUMBER:
                        return 12;
                    case u.MODE_ALPHA_NUM:
                        return 11;
                    case u.MODE_8BIT_BYTE:
                        return 16;
                    case u.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t)
                } else {
                    if (!(e < 41)) throw new Error("type:" + e);
                    switch (t) {
                        case u.MODE_NUMBER:
                            return 14;
                        case u.MODE_ALPHA_NUM:
                            return 13;
                        case u.MODE_8BIT_BYTE:
                            return 16;
                        case u.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + t)
                    }
                }
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), r = 0, o = 0; o < e; o++)
                    for (var i = 0; i < e; i++) {
                        for (var n = 0, a = t.isDark(o, i), s = -1; s <= 1; s++)
                            if (!(o + s < 0 || e <= o + s))
                                for (var h = -1; h <= 1; h++) i + h < 0 || e <= i + h || 0 == s && 0 == h || a == t.isDark(o + s, i + h) && n++;
                        n > 5 && (r += 3 + n - 5)
                    }
                for (var o = 0; o < e - 1; o++)
                    for (var i = 0; i < e - 1; i++) {
                        var u = 0;
                        t.isDark(o, i) && u++, t.isDark(o + 1, i) && u++, t.isDark(o, i + 1) && u++, t.isDark(o + 1, i + 1) && u++, 0 != u && 4 != u || (r += 3)
                    }
                for (var o = 0; o < e; o++)
                    for (var i = 0; i < e - 6; i++) t.isDark(o, i) && !t.isDark(o, i + 1) && t.isDark(o, i + 2) && t.isDark(o, i + 3) && t.isDark(o, i + 4) && !t.isDark(o, i + 5) && t.isDark(o, i + 6) && (r += 40);
                for (var i = 0; i < e; i++)
                    for (var o = 0; o < e - 6; o++) t.isDark(o, i) && !t.isDark(o + 1, i) && t.isDark(o + 2, i) && t.isDark(o + 3, i) && t.isDark(o + 4, i) && !t.isDark(o + 5, i) && t.isDark(o + 6, i) && (r += 40);
                for (var l = 0, i = 0; i < e; i++)
                    for (var o = 0; o < e; o++) t.isDark(o, i) && l++;
                var f = Math.abs(100 * l / e / e - 50) / 5;
                return r += 10 * f
            }
        }, d = {
            glog: function(t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return d.LOG_TABLE[t]
            },
            gexp: function(t) {
                for (; t < 0;) t += 255;
                for (; t >= 256;) t -= 255;
                return d.EXP_TABLE[t]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, c = 0; c < 8; c++) d.EXP_TABLE[c] = 1 << c;
    for (var c = 8; c < 256; c++) d.EXP_TABLE[c] = d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8];
    for (var c = 0; c < 255; c++) d.LOG_TABLE[d.EXP_TABLE[c]] = c;
    r.prototype = {
        get: function(t) {
            return this.num[t]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), o = 0; o < this.getLength(); o++)
                for (var i = 0; i < t.getLength(); i++) e[o + i] ^= d.gexp(d.glog(this.get(o)) + d.glog(t.get(i)));
            return new r(e, 0)
        },
        mod: function(t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), o = new Array(this.getLength()), i = 0; i < this.getLength(); i++) o[i] = this.get(i);
            for (var i = 0; i < t.getLength(); i++) o[i] ^= d.gexp(d.glog(t.get(i)) + e);
            return new r(o, 0).mod(t)
        }
    }, o.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], o.getRSBlocks = function(t, e) {
        var r = o.getRsBlockTable(t, e);
        if (void 0 == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var i = r.length / 3, n = [], a = 0; a < i; a++)
            for (var s = r[3 * a + 0], h = r[3 * a + 1], u = r[3 * a + 2], l = 0; l < s; l++) n.push(new o(h, u));
        return n
    }, o.getRsBlockTable = function(t, e) {
        switch (e) {
            case l.L:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case l.M:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case l.Q:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case l.H:
                return o.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return
        }
    }, i.prototype = {
        get: function(t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        },
        put: function(t, e) {
            for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
        }
    };
    var p = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
        m = function() {
            var t = function(t, e) {
                this._el = t, this._htOption = e
            };
            return t.prototype.draw = function(t) {
                function e(t, e) {
                    var r = document.createElementNS("http://www.w3.org/2000/svg", t);
                    for (var o in e) e.hasOwnProperty(o) && r.setAttribute(o, e[o]);
                    return r
                }
                var r = this._htOption,
                    o = this._el,
                    i = t.getModuleCount();
                Math.floor(r.width / i), Math.floor(r.height / i);
                this.clear();
                var n = e("svg", {
                    viewBox: "0 0 " + String(i) + " " + String(i),
                    width: "100%",
                    height: "100%",
                    fill: r.colorLight
                });
                n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o.appendChild(n), n.appendChild(e("rect", {
                    fill: r.colorLight,
                    width: "100%",
                    height: "100%"
                })), n.appendChild(e("rect", {
                    fill: r.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var a = 0; a < i; a++)
                    for (var s = 0; s < i; s++)
                        if (t.isDark(a, s)) {
                            var h = e("use", {
                                x: String(a),
                                y: String(s)
                            });
                            h.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), n.appendChild(h)
                        }
            }, t.prototype.clear = function() {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, t
        }(),
        v = "svg" === document.documentElement.tagName.toLowerCase(),
        _ = v ? m : n() ? function() {
            function t() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
            }

            function e(t, e) {
                var r = this;
                if (r._fFail = e, r._fSuccess = t, null === r._bSupportDataURI) {
                    var o = document.createElement("img"),
                        i = function() {
                            r._bSupportDataURI = !1, r._fFail && r._fFail.call(r)
                        },
                        n = function() {
                            r._bSupportDataURI = !0, r._fSuccess && r._fSuccess.call(r)
                        };
                    return o.onabort = i, o.onerror = i, o.onload = n, void(o.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                }
                r._bSupportDataURI === !0 && r._fSuccess ? r._fSuccess.call(r) : r._bSupportDataURI === !1 && r._fFail && r._fFail.call(r)
            }
            if (this._android && this._android <= 2.1) {
                var r = 1 / window.devicePixelRatio,
                    o = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(t, e, i, n, a, s, h, u, l) {
                    if ("nodeName" in t && /img/i.test(t.nodeName))
                        for (var f = arguments.length - 1; f >= 1; f--) arguments[f] = arguments[f] * r;
                    else "undefined" == typeof u && (arguments[1] *= r, arguments[2] *= r, arguments[3] *= r, arguments[4] *= r);
                    o.apply(this, arguments)
                }
            }
            var i = function(t, e) {
                this._bIsPainted = !1, this._android = a(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
            };
            return i.prototype.draw = function(t) {
                var e = this._elImage,
                    r = this._oContext,
                    o = this._htOption,
                    i = t.getModuleCount(),
                    n = o.width / i,
                    a = o.height / i,
                    s = Math.round(n),
                    h = Math.round(a);
                e.style.display = "none", this.clear();
                for (var u = 0; u < i; u++)
                    for (var l = 0; l < i; l++) {
                        var f = t.isDark(u, l),
                            g = l * n,
                            d = u * a;
                        r.strokeStyle = f ? o.colorDark : o.colorLight, r.lineWidth = 1, r.fillStyle = f ? o.colorDark : o.colorLight, r.fillRect(g, d, n, a), r.strokeRect(Math.floor(g) + .5, Math.floor(d) + .5, s, h), r.strokeRect(Math.ceil(g) - .5, Math.ceil(d) - .5, s, h)
                    }
                this._bIsPainted = !0
            }, i.prototype.makeImage = function() {
                this._bIsPainted && e.call(this, t)
            }, i.prototype.isPainted = function() {
                return this._bIsPainted
            }, i.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
            }, i.prototype.round = function(t) {
                return t ? Math.floor(1e3 * t) / 1e3 : t
            }, i
        }() : function() {
            var t = function(t, e) {
                this._el = t, this._htOption = e
            };
            return t.prototype.draw = function(t) {
                for (var e = this._htOption, r = this._el, o = t.getModuleCount(), i = Math.floor(e.width / o), n = Math.floor(e.height / o), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < o; s++) {
                    a.push("<tr>");
                    for (var h = 0; h < o; h++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + n + "px;background-color:" + (t.isDark(s, h) ? e.colorDark : e.colorLight) + ';"></td>');
                    a.push("</tr>")
                }
                a.push("</table>"), r.innerHTML = a.join("");
                var u = r.childNodes[0],
                    l = (e.width - u.offsetWidth) / 2,
                    f = (e.height - u.offsetHeight) / 2;
                l > 0 && f > 0 && (u.style.margin = f + "px " + l + "px")
            }, t.prototype.clear = function() {
                this._el.innerHTML = ""
            }, t
        }();
    QRCode = function(t, e) {
        if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: l.H
            }, "string" == typeof e && (e = {
                text: e
            }), e)
            for (var r in e) this._htOption[r] = e[r];
        "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (_ = m), this._android = a(), this._el = t, this._oQRCode = null, this._oDrawing = new _(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function(t) {
        this._oQRCode = new e(s(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function() {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function() {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = l
}();
$(document).ready(function() {
    function t() {
        i.css({
            top: e,
            right: 0
        })
    }

    function n() {
        $(document.body).height() < o ? $("#footer").addClass("fix-bottom") : $("#footer").removeClass("fix-bottom")
    }
    var o = $(window).height(),
        i = $("#backtotop"),
        e = o - i.height() - 200;
    i.click(function() {
        return $("html,body").animate({
            scrollTop: 0
        }), !1
    }), $(window).scroll(function() {
        var t = $(window).scrollTop();
        t > 200 ? i.fadeIn() : i.fadeOut()
    }), t(), n(), $(window).resize(t), $(window).resize(n), $(".topic_content a,.reply_content a").attr("target", "_blank"), prettyPrint(), $(".submit_btn").click(function() {
        $(this).button("loading")
    }), $(".sponsor_outlink").click(function() {
        var t = $(this),
            n = t.data("label");
        ga("send", "event", "banner", "click", n, 1, {
            nonInteraction: 1
        })
    })
});
$(document).ready(function() {
    var e = $("#responsive-sidebar-trigger"),
        t = $("#sidebar-mask"),
        o = $("#sidebar"),
        n = $("#main"),
        a = $(window).width(),
        i = 0,
        c = 0,
        d = {
            x: 0,
            y: 0
        },
        h = a / 3,
        r = function() {
            var a = e.data("is-show"),
                i = n.height(),
                c = o.outerHeight();
            o.css({
                right: a ? -300 : 0
            }), e.data("is-show", !a), !a && i < c && n.height(c), t[a ? "fadeOut" : "fadeIn"]().height($("body").height()), o[a ? "hide" : "show"]()
        },
        s = function(e) {
            var t = e.targetTouches;
            i = +t[0].pageX, c = +t[0].pageY, d.x = d.y = 0, document.body.addEventListener("touchmove", u, !1), document.body.addEventListener("touchend", g, !1)
        },
        u = function(e) {
            var t = e.changedTouches;
            d.x = +t[0].pageX - i, d.y = +t[0].pageY - c, Math.abs(d.x) > Math.abs(d.y) && e.preventDefault()
        },
        g = function(t) {
            var o = t.changedTouches,
                n = e.data("is-show");
            d.x = +o[0].pageX - i, !n && i > 3 * a / 4 && Math.abs(d.x) > h && e.trigger("click"), n && i < 1 * a / 4 && Math.abs(d.x) > h && e.trigger("click"), i = c = 0, d.x = d.y = 0, document.body.removeEventListener("touchmove", u, !1), document.body.removeEventListener("touchend", g, !1)
        };
    ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && document.body.addEventListener("touchstart", s), e.on("click", r), t.on("click", function() {
        e.trigger("click")
    })
});
