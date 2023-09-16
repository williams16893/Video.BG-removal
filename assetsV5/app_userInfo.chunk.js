(window.webpackJsonp = window.webpackJsonp || []).push([
    [22, 5, 6, 8, 9, 14, 78, 88, 89], {
        115: function(e, o, i) {
            "use strict";
            var t = i(141),
                r = i.n(t),
                n = i(2),
                a = r.a.create({
                    baseURL: n.actionServers,
                    timeout: 15e3,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: !0
                });
            a.interceptors.request.use((function(e) {
                var o = window.localStorage.getItem("token");
                return o && (e.headers.Authorization = "Bearer " + o), e
            }), (function(e) {
                return Promise.reject(e)
            })), a.interceptors.response.use((function(e) {
                var o, i = {},
                    t = e.config;
                if (i = "get" === (null === (o = t.method) || void 0 === o ? void 0 : o.toLowerCase()) ? t.params ? "string" == typeof t.params ? JSON.parse(t.params) : t.params : i : t.data ? "string" == typeof t.data ? JSON.parse(t.data) : t.data : i, "blob" === e.request.responseType || "arraybuffer" === e.request.responseType) return Promise.resolve(e);
                var r = e.data;
                return 200 === r.code || 0 === r.code ? Promise.resolve(r) : Promise.reject(r)
            }), (function(e) {
                var o = JSON.stringify(e),
                    i = JSON.parse(o);
                return Promise.reject({
                    code: 1e4,
                    type: i.name,
                    msg: i.message
                })
            })), o.a = a
        },
        117: function(e, o, i) {
            "use strict";
            i.d(o, "d", (function() {
                return r
            })), i.d(o, "a", (function() {
                return n
            })), i.d(o, "c", (function() {
                return a
            })), i.d(o, "b", (function() {
                return s
            })), i.d(o, "e", (function() {
                return l
            })), i.d(o, "f", (function() {
                return d
            }));
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var t = function(e, o) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, o) {
                        e.__proto__ = o
                    } || function(e, o) {
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    })(e, o)
            };

            function r(e, o) {
                if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

                function i() {
                    this.constructor = e
                }
                t(e, o), e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i)
            }
            var n = function() {
                return (n = Object.assign || function(e) {
                    for (var o, i = 1, t = arguments.length; i < t; i++)
                        for (var r in o = arguments[i]) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, o, i, t) {
                var r, n = arguments.length,
                    a = n < 3 ? o : null === t ? t = Object.getOwnPropertyDescriptor(o, i) : t;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, i, t);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(o, i, a) : r(o, i)) || a);
                return n > 3 && a && Object.defineProperty(o, i, a), a
            }

            function s(e, o, i, t) {
                return new(i || (i = Promise))((function(r, n) {
                    function a(e) {
                        try {
                            l(t.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(t.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function l(e) {
                        var o;
                        e.done ? r(e.value) : (o = e.value, o instanceof i ? o : new i((function(e) {
                            e(o)
                        }))).then(a, s)
                    }
                    l((t = t.apply(e, o || [])).next())
                }))
            }

            function l(e, o) {
                var i, t, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(n) {
                    return function(s) {
                        return function(n) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, t && (r = 2 & n[0] ? t.return : n[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, n[1])).done) return r;
                                switch (t = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                                    case 0:
                                    case 1:
                                        r = n;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, t = n[1], n = [0];
                                        continue;
                                    case 7:
                                        n = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                            a.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && a.label < r[1]) {
                                            a.label = r[1], r = n;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2], a.ops.push(n);
                                            break
                                        }
                                        r[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                n = o.call(e, a)
                            } catch (e) {
                                n = [6, e], t = 0
                            } finally {
                                i = r = 0
                            }
                            if (5 & n[0]) throw n[1];
                            return {
                                value: n[0] ? n[1] : void 0,
                                done: !0
                            }
                        }([n, s])
                    }
                }
            }
            Object.create;

            function d(e, o, i) {
                if (i || 2 === arguments.length)
                    for (var t, r = 0, n = o.length; r < n; r++) !t && r in o || (t || (t = Array.prototype.slice.call(o, 0, r)), t[r] = o[r]);
                return e.concat(t || Array.prototype.slice.call(o))
            }
            Object.create
        },
        118: function(e, o, i) {
            var t = i(153);
            "string" == typeof t && (t = [
                [e.i, t, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i(72)(t, r);
            t.locals && (e.exports = t.locals)
        },
        119: function(e, o, i) {
            e.exports = function(e) {
                var o = {};

                function i(t) {
                    if (o[t]) return o[t].exports;
                    var r = o[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
                }
                return i.m = e, i.c = o, i.d = function(e, o, t) {
                    i.o(e, o) || Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: t
                    })
                }, i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.t = function(e, o) {
                    if (1 & o && (e = i(e)), 8 & o) return e;
                    if (4 & o && "object" == typeof e && e && e.__esModule) return e;
                    var t = Object.create(null);
                    if (i.r(t), Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & o && "string" != typeof e)
                        for (var r in e) i.d(t, r, function(o) {
                            return e[o]
                        }.bind(null, r));
                    return t
                }, i.n = function(e) {
                    var o = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(o, "a", o), o
                }, i.o = function(e, o) {
                    return Object.prototype.hasOwnProperty.call(e, o)
                }, i.p = "/dist/", i(i.s = 92)
            }({
                0: function(e, o, i) {
                    "use strict";

                    function t(e, o, i, t, r, n, a, s) {
                        var l, d = "function" == typeof e ? e.options : e;
                        if (o && (d.render = o, d.staticRenderFns = i, d._compiled = !0), t && (d.functional = !0), n && (d._scopeId = "data-v-" + n), a ? (l = function(e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                            }, d._ssrRegister = l) : r && (l = s ? function() {
                                r.call(this, this.$root.$options.shadowRoot)
                            } : r), l)
                            if (d.functional) {
                                d._injectStyles = l;
                                var u = d.render;
                                d.render = function(e, o) {
                                    return l.call(o), u(e, o)
                                }
                            } else {
                                var c = d.beforeCreate;
                                d.beforeCreate = c ? [].concat(c, l) : [l]
                            }
                        return {
                            exports: e,
                            options: d
                        }
                    }
                    i.d(o, "a", (function() {
                        return t
                    }))
                },
                11: function(e, o) {
                    e.exports = i(150)
                },
                13: function(e, o) {
                    e.exports = i(125)
                },
                4: function(e, o) {
                    e.exports = i(85)
                },
                92: function(e, o, i) {
                    "use strict";
                    i.r(o);
                    var t = function() {
                        var e = this,
                            o = e.$createElement,
                            i = e._self._c || o;
                        return i("transition", {
                            attrs: {
                                name: "dialog-fade"
                            },
                            on: {
                                "after-enter": e.afterEnter,
                                "after-leave": e.afterLeave
                            }
                        }, [i("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.visible,
                                expression: "visible"
                            }],
                            staticClass: "el-dialog__wrapper",
                            on: {
                                click: function(o) {
                                    return o.target !== o.currentTarget ? null : e.handleWrapperClick(o)
                                }
                            }
                        }, [i("div", {
                            key: e.key,
                            ref: "dialog",
                            class: ["el-dialog", {
                                "is-fullscreen": e.fullscreen,
                                "el-dialog--center": e.center
                            }, e.customClass],
                            style: e.style,
                            attrs: {
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": e.title || "dialog"
                            }
                        }, [i("div", {
                            staticClass: "el-dialog__header"
                        }, [e._t("title", [i("span", {
                            staticClass: "el-dialog__title"
                        }, [e._v(e._s(e.title))])]), e.showClose ? i("button", {
                            staticClass: "el-dialog__headerbtn",
                            attrs: {
                                type: "button",
                                "aria-label": "Close"
                            },
                            on: {
                                click: e.handleClose
                            }
                        }, [i("i", {
                            staticClass: "el-dialog__close el-icon el-icon-close"
                        })]) : e._e()], 2), e.rendered ? i("div", {
                            staticClass: "el-dialog__body"
                        }, [e._t("default")], 2) : e._e(), e.$slots.footer ? i("div", {
                            staticClass: "el-dialog__footer"
                        }, [e._t("footer")], 2) : e._e()])])])
                    };
                    t._withStripped = !0;
                    var r = i(13),
                        n = i.n(r),
                        a = i(11),
                        s = i.n(a),
                        l = i(4),
                        d = i.n(l),
                        u = {
                            name: "ElDialog",
                            mixins: [n.a, d.a, s.a],
                            props: {
                                title: {
                                    type: String,
                                    default: ""
                                },
                                modal: {
                                    type: Boolean,
                                    default: !0
                                },
                                modalAppendToBody: {
                                    type: Boolean,
                                    default: !0
                                },
                                appendToBody: {
                                    type: Boolean,
                                    default: !1
                                },
                                lockScroll: {
                                    type: Boolean,
                                    default: !0
                                },
                                closeOnClickModal: {
                                    type: Boolean,
                                    default: !0
                                },
                                closeOnPressEscape: {
                                    type: Boolean,
                                    default: !0
                                },
                                showClose: {
                                    type: Boolean,
                                    default: !0
                                },
                                width: String,
                                fullscreen: Boolean,
                                customClass: {
                                    type: String,
                                    default: ""
                                },
                                top: {
                                    type: String,
                                    default: "15vh"
                                },
                                beforeClose: Function,
                                center: {
                                    type: Boolean,
                                    default: !1
                                },
                                destroyOnClose: Boolean
                            },
                            data: function() {
                                return {
                                    closed: !1,
                                    key: 0
                                }
                            },
                            watch: {
                                visible: function(e) {
                                    var o = this;
                                    e ? (this.closed = !1, this.$emit("open"), this.$el.addEventListener("scroll", this.updatePopper), this.$nextTick((function() {
                                        o.$refs.dialog.scrollTop = 0
                                    })), this.appendToBody && document.body.appendChild(this.$el)) : (this.$el.removeEventListener("scroll", this.updatePopper), this.closed || this.$emit("close"), this.destroyOnClose && this.$nextTick((function() {
                                        o.key++
                                    })))
                                }
                            },
                            computed: {
                                style: function() {
                                    var e = {};
                                    return this.fullscreen || (e.marginTop = this.top, this.width && (e.width = this.width)), e
                                }
                            },
                            methods: {
                                getMigratingConfig: function() {
                                    return {
                                        props: {
                                            size: "size is removed."
                                        }
                                    }
                                },
                                handleWrapperClick: function() {
                                    this.closeOnClickModal && this.handleClose()
                                },
                                handleClose: function() {
                                    "function" == typeof this.beforeClose ? this.beforeClose(this.hide) : this.hide()
                                },
                                hide: function(e) {
                                    !1 !== e && (this.$emit("update:visible", !1), this.$emit("close"), this.closed = !0)
                                },
                                updatePopper: function() {
                                    this.broadcast("ElSelectDropdown", "updatePopper"), this.broadcast("ElDropdownMenu", "updatePopper")
                                },
                                afterEnter: function() {
                                    this.$emit("opened")
                                },
                                afterLeave: function() {
                                    this.$emit("closed")
                                }
                            },
                            mounted: function() {
                                this.visible && (this.rendered = !0, this.open(), this.appendToBody && document.body.appendChild(this.$el))
                            },
                            destroyed: function() {
                                this.appendToBody && this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                            }
                        },
                        c = i(0),
                        p = Object(c.a)(u, t, [], !1, null, null, null);
                    p.options.__file = "packages/dialog/src/component.vue";
                    var m = p.exports;
                    m.install = function(e) {
                        e.component(m.name, m)
                    };
                    o.default = m
                }
            })
        },
        122: function(e, o, i) {
            "use strict";
            i.d(o, "a", (function() {
                return t
            })), i.d(o, "b", (function() {
                return r
            }));
            var t = ["/audio-cutter.html", "/watermark-remover.html", "/vocal-remover.html", "/audio-joiner.html"],
                r = ["/", "/audio-cutter.html", "/watermark-remover.html", "/vocal-remover.html", "/audio-joiner.html", "/slideshow-maker.html"]
        },
        123: function(e, o, i) {
            "use strict";
            var t = i(3),
                r = i.n(t),
                n = i(1),
                a = i.n(n),
                s = i(69),
                l = i(5),
                d = i(0),
                u = i(79),
                c = i(122),
                p = i(6),
                m = i(78),
                h = i(77),
                g = i(70),
                v = i(94);
            o.a = {
                components: {
                    "account-tips": function() {
                        return Promise.all([i.e(14), i.e(88)]).then(i.bind(null, 264))
                    },
                    "editor-direct": function() {
                        return Promise.all([i.e(2), i.e(5), i.e(6), i.e(8), i.e(76)]).then(i.bind(null, 484))
                    }
                },
                data: function() {
                    return {
                        vip: !1,
                        isLogin: null,
                        callback: null,
                        actionServers: "https://account.media.io",
                        useTimesPerm: {
                            status: !1,
                            count: 5
                        },
                        token: "",
                        dialogVisible: !1,
                        LoginSuccessEditorDirect: c.a
                    }
                },
                created: function() {
                    "inclowdz" !== window.iframe_env && "wcc_iframe" !== window.wcc_iframe_env || (window.inclowdz_login_success = this.loginsuccess.bind(this), window.hadInclowdzLoginSuccess && window.inclowdz_login_success());
                    var e = window.localStorage.getItem("token") || this.$cookies.get("ou");
                    e ? (this.isLogin = !0, this.token = e, this.verify(!0)) : this.isLogin = !1
                },
                methods: {
                    updateAccoutProps: function(e) {
                        u.a.dispatch("updateAccoutProps", e), this.callback = e.callback || window.schLoginCallback || null
                    },
                    showAccountProp: function(e) {
                        var o = this;
                        if ("inclowdz" === window.iframe_env || "wcc_iframe" === window.wcc_iframe_env) {
                            var i = "inclowdz" === window.iframe_env ? {
                                mode: "iframe2parent_need_response",
                                target: "user",
                                action: "get_token",
                                type: "request"
                            } : {
                                target: "user",
                                action: "login"
                            };
                            window.windowPossMessage(i), this.callback = e.callback || window.schLoginCallback || null
                        } else void 0 === window.cookie_check_supported ? new Promise((function(e) {
                            var o = document.createElement("iframe");
                            o.id = "3pc", o.src = "https://accounts.wondershare.com/web/cookie-check", o.style.display = "none", o.style.position = "fixed", o.onerror = e, window.addEventListener("message", (function i(t) {
                                "3pc.supported" !== t.data && "3pc.unsupported" !== t.data || (window.cookie_check_supported = "3pc.supported" === t.data, document.body.removeChild(o), window.removeEventListener("message", i)), e()
                            }), !1), document.body.appendChild(o)
                        })).then((function() {
                            o.updateAccoutProps(e)
                        })) : this.updateAccoutProps(e)
                    },
                    verify: function(e) {
                        var o = this;
                        $.ajax({
                            type: "POST",
                            sync: e,
                            data: {
                                source: "wcc_iframe" === window.wcc_iframe_env ? "wcc" : ""
                            },
                            url: o.actionServers + "/v1/verify",
                            xhrFields: {
                                withCredentials: !0
                            },
                            headers: {
                                Authorization: "Bearer ".concat(window.localStorage.getItem("token") || o.$cookies.get("ou"))
                            },
                            crossDomain: !0,
                            success: function(e) {
                                0 === e.code ? (o.vip = !e.data.expire, o.optionLimit && (o.optionLimit.userStart = e.data.expire ? 1 : 2), o.$cookies.set("verify", o.vip ? "Y" : "N")) : (o.vip = !1, o.optionLimit && (o.optionLimit.userStart = 1), o.$cookies.set("verify", "N"))
                            }
                        })
                    },
                    getPermission: function(e) {
                        var o = this;
                        $.ajax({
                            type: e.type || "GET",
                            data: {
                                module: e.module,
                                type: e.model || 1,
                                timestramp: Date.now(),
                                token: window.localStorage.getItem("token") || this.$cookies.get("ou"),
                                lang: this.$pangLang
                            },
                            url: e.url,
                            xhrFields: {
                                withCredentials: !0
                            },
                            headers: {
                                Authorization: "Bearer ".concat(window.localStorage.getItem("token") || this.$cookies.get("ou"))
                            },
                            crossDomain: !0,
                            success: function(e) {
                                0 === e.code ? o.useTimesPerm = e.data : swal({
                                    text: e.msg
                                })
                            }
                        })
                    },
                    checkPerm: function(e) {
                        var o = this;
                        return r()(a.a.mark((function e() {
                            var i, t, r, n, d, c, f;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("vocalremover.media.io" !== window.location.host) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", !0);
                                    case 2:
                                        return i = 0, e.next = 5, Object(h.i)().then((function(e) {
                                            i = e.data.level, console.log(e.data), u.a.commit("updateUserInfo", e.data)
                                        })).catch((function(e) {
                                            i = -1
                                        }));
                                    case 5:
                                        if (t = o, r = window.location.pathname, n = r.match(/es|jp/) && (r.match(/\/convert/) || r.match(/compressor/)) && document.body.clientWidth >= 480, i !== g.f.NOT_LOGIN && i !== g.f.FREE || !(g.e.includes(r) || /^\/convert\//g.test(r) || n) || !1 !== t.useTimesPerm.status) {
                                            e.next = 16;
                                            break
                                        }
                                        if (p.a.sendGTM({
                                                category: "Show_Buy_Windows",
                                                action: window.location.pathname.match(/-compressor.html/) ? "Compress" : "Converter",
                                                eventLabel: "2TimesLimit"
                                            }), !(window.innerWidth <= 480)) {
                                            e.next = 14;
                                            break
                                        }
                                        return d = {
                                            action: "Desktop",
                                            errorTips: '<div class="error-light">$$$$' + g.c.DAY_LIMIT + "</div>"
                                        }, Object(m.a)(d), e.abrupt("return");
                                    case 14:
                                        return v.a.commit("showMemberPricingPop", {
                                            modals: {
                                                isShowPricingPop: !0,
                                                isBuySinglePoint: !1
                                            },
                                            tips: g.c.DAY_LIMIT,
                                            upgradeTips: g.c.TIME_UPGRADE_TIPS
                                        }), e.abrupt("return");
                                    case 16:
                                        if (i !== g.f.NOT_LOGIN || !1 !== t.useTimesPerm.status) {
                                            e.next = 25;
                                            break
                                        }
                                        if (!l.a.checkEnv()) {
                                            e.next = 22;
                                            break
                                        }
                                        return t.showPopWindow({
                                            text: t.$lang.chooseRightPlan.useTimeMinLimit.replace(/####/gi, t.useTimesPerm.count),
                                            popType: "2",
                                            storePopup: !0,
                                            popState: 9,
                                            data: {
                                                action: "Online",
                                                errorTips: '<div class="error-light">$$$$' + t.$lang.chooseRightPlan.useTimeMinLimit.replace(/\./, "</div>").replace(/####/gi, t.useTimesPerm.count),
                                                size: t.optionLimit.size[0],
                                                gtm_page: s.b,
                                                gtm_action: "".concat(t.useTimesPerm.count, "TimesLimit")
                                            },
                                            gtmLabel: "".concat(t.useTimesPerm.count, "TimesLimit")
                                        }), e.abrupt("return", !1);
                                    case 22:
                                        return c = l.a.checkEnv() ? t.$lang.chooseRightPlan.useTimeMinLimit.replace(/####/gi, t.useTimesPerm.count) : t.$lang.gloab.freeUseTimes.replace(/####/gi, t.useTimesPerm.count), t.showAccountProp({
                                            accountPopupHeader: c,
                                            type: "Over" + t.useTimesPerm.count + "Times",
                                            gtmLabel: "".concat(t.useTimesPerm.count, "TimesLimit")
                                        }), e.abrupt("return", !1);
                                    case 25:
                                        if (i !== g.f.FREE || !1 !== t.useTimesPerm.status) {
                                            e.next = 29;
                                            break
                                        }
                                        return f = l.a.checkEnv() ? t.$lang.chooseRightPlan.useTimeMaxLimit.replace(/####/gi, t.useTimesPerm.count) : t.$lang.gloab.loginUseTimes.replace(/####/gi, t.useTimesPerm.count), t.showPopWindow({
                                            text: f,
                                            popType: "2",
                                            storePopup: !0,
                                            popState: 11,
                                            data: l.a.checkEnv() ? {
                                                action: "Online",
                                                errorTips: '<div class="error-light">$$$$' + t.$lang.chooseRightPlan.useTimeMaxLimit.replace(/\./, "</div>").replace(/####/gi, t.useTimesPerm.count),
                                                size: t.optionLimit.size[0],
                                                gtm_page: s.b,
                                                gtm_action: "".concat(t.useTimesPerm.count, "TimesLimit")
                                            } : {},
                                            gtmLabel: "".concat(t.useTimesPerm.count, "TimesLimit")
                                        }), e.abrupt("return", !1);
                                    case 29:
                                        return e.abrupt("return", !0);
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    loginsuccess: function() {
                        this.LoginSuccessEditorDirect.includes(window.location.pathname) && "1" === window.localStorage.getItem("is_new") && !["https://blog.media.io/"].includes(window.location.href) && (u.a.commit("updateCurOrigin", "LoginSuccessEditor"), this.dialogStatus(!0)), u.a.commit("closeAccount"), this.$cookies.get("ou") && (this.isLogin = !0, this.verify(!0)), this.callback && "function" == typeof this.callback && this.callback(), Object(d.b)("login", {
                            login_status: "success"
                        }), p.a.sendGTM({
                            category: "login",
                            action: "",
                            eventLabel: "login_success"
                        })
                    },
                    loginclose: function() {
                        u.a.commit("closeAccount")
                    },
                    dialogStatus: function(e) {
                        "https://blog.media.io/" !== window.location.href && (this.dialogVisible = e)
                    }
                }
            }
        },
        124: function(e, o, i) {
            "use strict";
            i.d(o, "a", (function() {
                return T
            })), i.d(o, "c", (function() {
                return t.default
            })), i.d(o, "b", (function() {
                return w
            })), i.d(o, "d", (function() {
                return C
            }));
            var t = i(13);
            /**
             * vue-class-component v7.2.6
             * (c) 2015-present Evan You
             * @license MIT
             */
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, o, i) {
                return o in e ? Object.defineProperty(e, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = i, e
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var o = 0, i = new Array(e.length); o < e.length; o++) i[o] = e[o];
                        return i
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function s() {
                return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
            }

            function l(e, o) {
                d(e, o), Object.getOwnPropertyNames(o.prototype).forEach((function(i) {
                    d(e.prototype, o.prototype, i)
                })), Object.getOwnPropertyNames(o).forEach((function(i) {
                    d(e, o, i)
                }))
            }

            function d(e, o, i) {
                (i ? Reflect.getOwnMetadataKeys(o, i) : Reflect.getOwnMetadataKeys(o)).forEach((function(t) {
                    var r = i ? Reflect.getOwnMetadata(t, o, i) : Reflect.getOwnMetadata(t, o);
                    i ? Reflect.defineMetadata(t, r, e, i) : Reflect.defineMetadata(t, r, e)
                }))
            }
            var u = {
                __proto__: []
            }
            instanceof Array;

            function c(e) {
                return function(o, i, t) {
                    var r = "function" == typeof o ? o : o.constructor;
                    r.__decorators__ || (r.__decorators__ = []), "number" != typeof t && (t = void 0), r.__decorators__.push((function(o) {
                        return e(o, i, t)
                    }))
                }
            }

            function p(e, o) {
                var i = o.prototype._init;
                o.prototype._init = function() {
                    var o = this,
                        i = Object.getOwnPropertyNames(e);
                    if (e.$options.props)
                        for (var t in e.$options.props) e.hasOwnProperty(t) || i.push(t);
                    i.forEach((function(i) {
                        Object.defineProperty(o, i, {
                            get: function() {
                                return e[i]
                            },
                            set: function(o) {
                                e[i] = o
                            },
                            configurable: !0
                        })
                    }))
                };
                var t = new o;
                o.prototype._init = i;
                var r = {};
                return Object.keys(t).forEach((function(e) {
                    void 0 !== t[e] && (r[e] = t[e])
                })), r
            }
            var m = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

            function h(e) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o.name = o.name || e._componentTag || e.name;
                var i = e.prototype;
                Object.getOwnPropertyNames(i).forEach((function(e) {
                    if ("constructor" !== e)
                        if (m.indexOf(e) > -1) o[e] = i[e];
                        else {
                            var t = Object.getOwnPropertyDescriptor(i, e);
                            void 0 !== t.value ? "function" == typeof t.value ? (o.methods || (o.methods = {}))[e] = t.value : (o.mixins || (o.mixins = [])).push({
                                data: function() {
                                    return n({}, e, t.value)
                                }
                            }) : (t.get || t.set) && ((o.computed || (o.computed = {}))[e] = {
                                get: t.get,
                                set: t.set
                            })
                        }
                })), (o.mixins || (o.mixins = [])).push({
                    data: function() {
                        return p(this, e)
                    }
                });
                var r = e.__decorators__;
                r && (r.forEach((function(e) {
                    return e(o)
                })), delete e.__decorators__);
                var a = Object.getPrototypeOf(e.prototype),
                    d = a instanceof t.default ? a.constructor : t.default,
                    u = d.extend(o);
                return v(u, e, d), s() && l(u, e), u
            }
            var g = {
                prototype: !0,
                arguments: !0,
                callee: !0,
                caller: !0
            };

            function v(e, o, i) {
                Object.getOwnPropertyNames(o).forEach((function(t) {
                    if (!g[t]) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        if (!n || n.configurable) {
                            var a, s, l = Object.getOwnPropertyDescriptor(o, t);
                            if (!u) {
                                if ("cid" === t) return;
                                var d = Object.getOwnPropertyDescriptor(i, t);
                                if (a = l.value, s = r(a), null != a && ("object" === s || "function" === s) && d && d.value === l.value) return
                            }
                            0, Object.defineProperty(e, t, l)
                        }
                    }
                }))
            }

            function f(e) {
                return "function" == typeof e ? h(e) : function(o) {
                    return h(o, e)
                }
            }
            f.registerHooks = function(e) {
                m.push.apply(m, a(e))
            };
            var T = f;
            var x = "undefined" != typeof Reflect && void 0 !== Reflect.getMetadata;

            function b(e, o, i) {
                if (x && !Array.isArray(e) && "function" != typeof e && !e.hasOwnProperty("type") && void 0 === e.type) {
                    var t = Reflect.getMetadata("design:type", o, i);
                    t !== Object && (e.type = t)
                }
            }

            function w(e) {
                return void 0 === e && (e = {}),
                    function(o, i) {
                        b(e, o, i), c((function(o, i) {
                            (o.props || (o.props = {}))[i] = e
                        }))(o, i)
                    }
            }

            function C(e, o) {
                void 0 === o && (o = {});
                var i = o.deep,
                    t = void 0 !== i && i,
                    r = o.immediate,
                    n = void 0 !== r && r;
                return c((function(o, i) {
                    "object" != typeof o.watch && (o.watch = Object.create(null));
                    var r = o.watch;
                    "object" != typeof r[e] || Array.isArray(r[e]) ? void 0 === r[e] && (r[e] = []) : r[e] = [r[e]], r[e].push({
                        handler: i,
                        deep: t,
                        immediate: n
                    })
                }))
            }
        },
        125: function(e, o, i) {
            "use strict";
            o.__esModule = !0, o.PopupManager = void 0;
            var t = l(i(13)),
                r = l(i(90)),
                n = l(i(144)),
                a = l(i(127)),
                s = i(86);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = 1,
                u = void 0;
            o.default = {
                props: {
                    visible: {
                        type: Boolean,
                        default: !1
                    },
                    openDelay: {},
                    closeDelay: {},
                    zIndex: {},
                    modal: {
                        type: Boolean,
                        default: !1
                    },
                    modalFade: {
                        type: Boolean,
                        default: !0
                    },
                    modalClass: {},
                    modalAppendToBody: {
                        type: Boolean,
                        default: !1
                    },
                    lockScroll: {
                        type: Boolean,
                        default: !0
                    },
                    closeOnPressEscape: {
                        type: Boolean,
                        default: !1
                    },
                    closeOnClickModal: {
                        type: Boolean,
                        default: !1
                    }
                },
                beforeMount: function() {
                    this._popupId = "popup-" + d++, n.default.register(this._popupId, this)
                },
                beforeDestroy: function() {
                    n.default.deregister(this._popupId), n.default.closeModal(this._popupId), this.restoreBodyStyle()
                },
                data: function() {
                    return {
                        opened: !1,
                        bodyPaddingRight: null,
                        computedBodyPaddingRight: 0,
                        withoutHiddenClass: !0,
                        rendered: !1
                    }
                },
                watch: {
                    visible: function(e) {
                        var o = this;
                        if (e) {
                            if (this._opening) return;
                            this.rendered ? this.open() : (this.rendered = !0, t.default.nextTick((function() {
                                o.open()
                            })))
                        } else this.close()
                    }
                },
                methods: {
                    open: function(e) {
                        var o = this;
                        this.rendered || (this.rendered = !0);
                        var i = (0, r.default)({}, this.$props || this, e);
                        this._closeTimer && (clearTimeout(this._closeTimer), this._closeTimer = null), clearTimeout(this._openTimer);
                        var t = Number(i.openDelay);
                        t > 0 ? this._openTimer = setTimeout((function() {
                            o._openTimer = null, o.doOpen(i)
                        }), t) : this.doOpen(i)
                    },
                    doOpen: function(e) {
                        if (!this.$isServer && (!this.willOpen || this.willOpen()) && !this.opened) {
                            this._opening = !0;
                            var o = this.$el,
                                i = e.modal,
                                t = e.zIndex;
                            if (t && (n.default.zIndex = t), i && (this._closing && (n.default.closeModal(this._popupId), this._closing = !1), n.default.openModal(this._popupId, n.default.nextZIndex(), this.modalAppendToBody ? void 0 : o, e.modalClass, e.modalFade), e.lockScroll)) {
                                this.withoutHiddenClass = !(0, s.hasClass)(document.body, "el-popup-parent--hidden"), this.withoutHiddenClass && (this.bodyPaddingRight = document.body.style.paddingRight, this.computedBodyPaddingRight = parseInt((0, s.getStyle)(document.body, "paddingRight"), 10)), u = (0, a.default)();
                                var r = document.documentElement.clientHeight < document.body.scrollHeight,
                                    l = (0, s.getStyle)(document.body, "overflowY");
                                u > 0 && (r || "scroll" === l) && this.withoutHiddenClass && (document.body.style.paddingRight = this.computedBodyPaddingRight + u + "px"), (0, s.addClass)(document.body, "el-popup-parent--hidden")
                            }
                            "static" === getComputedStyle(o).position && (o.style.position = "absolute"), o.style.zIndex = n.default.nextZIndex(), this.opened = !0, this.onOpen && this.onOpen(), this.doAfterOpen()
                        }
                    },
                    doAfterOpen: function() {
                        this._opening = !1
                    },
                    close: function() {
                        var e = this;
                        if (!this.willClose || this.willClose()) {
                            null !== this._openTimer && (clearTimeout(this._openTimer), this._openTimer = null), clearTimeout(this._closeTimer);
                            var o = Number(this.closeDelay);
                            o > 0 ? this._closeTimer = setTimeout((function() {
                                e._closeTimer = null, e.doClose()
                            }), o) : this.doClose()
                        }
                    },
                    doClose: function() {
                        this._closing = !0, this.onClose && this.onClose(), this.lockScroll && setTimeout(this.restoreBodyStyle, 200), this.opened = !1, this.doAfterClose()
                    },
                    doAfterClose: function() {
                        n.default.closeModal(this._popupId), this._closing = !1
                    },
                    restoreBodyStyle: function() {
                        this.modal && this.withoutHiddenClass && (document.body.style.paddingRight = this.bodyPaddingRight, (0, s.removeClass)(document.body, "el-popup-parent--hidden")), this.withoutHiddenClass = !0
                    }
                }
            }, o.PopupManager = n.default
        },
        127: function(e, o, i) {
            "use strict";
            o.__esModule = !0, o.default = function() {
                if (t.default.prototype.$isServer) return 0;
                if (void 0 !== r) return r;
                var e = document.createElement("div");
                e.className = "el-scrollbar__wrap", e.style.visibility = "hidden", e.style.width = "100px", e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e);
                var o = e.offsetWidth;
                e.style.overflow = "scroll";
                var i = document.createElement("div");
                i.style.width = "100%", e.appendChild(i);
                var n = i.offsetWidth;
                return e.parentNode.removeChild(e), r = o - n
            };
            var t = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i(13));
            var r = void 0
        },
        128: function(e, o, i) {
            "use strict";
            var t = i(80),
                r = i(5);
            o.a = {
                created: function() {
                    window.location.origin.indexOf("media.io") > -1 && this.$cookies.config("1d", "; path=/", ".media.io", "", "; SameSite=None; Secure")
                },
                mounted: function() {
                    var e = this;
                    t.a.$on("loginButton", (function(o) {
                        e.showAccountProp(o)
                    })), t.a.$on("loginsuccess", this.loginsuccess), setTimeout((function() {
                        e.initEvt()
                    }))
                },
                watch: {
                    vip: function(e) {
                        t.a.$emit("updataVip", e)
                    }
                },
                methods: {
                    initEvt: function() {
                        for (var e = this, o = document.querySelectorAll('a[href="'.concat(window.origin, "/").concat("en" === r.a.pangLang ? "" : "".concat(r.a.pangLang, "/"), 'signin.html"]')), i = document.querySelectorAll('a[href="'.concat(window.origin, "/").concat("en" === r.a.pangLang ? "" : "".concat(r.a.pangLang, "/"), 'signup.html"]')), t = 0; t < o.length; t++) o[t].addEventListener("click", (function(o) {
                            o && o.preventDefault(), e.showAccountProp({
                                action: "signin",
                                accountPopupHeader: "",
                                type: ""
                            })
                        }), !1);
                        for (var n = 0; n < i.length; n++) i[n].addEventListener("click", (function(o) {
                            console.log(o), o && o.preventDefault(), e.showAccountProp({
                                action: "signup",
                                accountPopupHeader: "",
                                type: ""
                            })
                        }), !1)
                    },
                    windowLocationHref: r.a.windowLocationHref
                }
            }
        },
        144: function(e, o, i) {
            "use strict";
            o.__esModule = !0;
            var t = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(13)),
                r = i(86);
            var n = !1,
                a = !1,
                s = void 0,
                l = function() {
                    if (!t.default.prototype.$isServer) {
                        var e = u.modalDom;
                        return e ? n = !0 : (n = !1, e = document.createElement("div"), u.modalDom = e, e.addEventListener("touchmove", (function(e) {
                            e.preventDefault(), e.stopPropagation()
                        })), e.addEventListener("click", (function() {
                            u.doOnModalClick && u.doOnModalClick()
                        }))), e
                    }
                },
                d = {},
                u = {
                    modalFade: !0,
                    getInstance: function(e) {
                        return d[e]
                    },
                    register: function(e, o) {
                        e && o && (d[e] = o)
                    },
                    deregister: function(e) {
                        e && (d[e] = null, delete d[e])
                    },
                    nextZIndex: function() {
                        return u.zIndex++
                    },
                    modalStack: [],
                    doOnModalClick: function() {
                        var e = u.modalStack[u.modalStack.length - 1];
                        if (e) {
                            var o = u.getInstance(e.id);
                            o && o.closeOnClickModal && o.close()
                        }
                    },
                    openModal: function(e, o, i, a, s) {
                        if (!t.default.prototype.$isServer && e && void 0 !== o) {
                            this.modalFade = s;
                            for (var d = this.modalStack, u = 0, c = d.length; u < c; u++) {
                                if (d[u].id === e) return
                            }
                            var p = l();
                            if ((0, r.addClass)(p, "v-modal"), this.modalFade && !n && (0, r.addClass)(p, "v-modal-enter"), a) a.trim().split(/\s+/).forEach((function(e) {
                                return (0, r.addClass)(p, e)
                            }));
                            setTimeout((function() {
                                (0, r.removeClass)(p, "v-modal-enter")
                            }), 200), i && i.parentNode && 11 !== i.parentNode.nodeType ? i.parentNode.appendChild(p) : document.body.appendChild(p), o && (p.style.zIndex = o), p.tabIndex = 0, p.style.display = "", this.modalStack.push({
                                id: e,
                                zIndex: o,
                                modalClass: a
                            })
                        }
                    },
                    closeModal: function(e) {
                        var o = this.modalStack,
                            i = l();
                        if (o.length > 0) {
                            var t = o[o.length - 1];
                            if (t.id === e) {
                                if (t.modalClass) t.modalClass.trim().split(/\s+/).forEach((function(e) {
                                    return (0, r.removeClass)(i, e)
                                }));
                                o.pop(), o.length > 0 && (i.style.zIndex = o[o.length - 1].zIndex)
                            } else
                                for (var n = o.length - 1; n >= 0; n--)
                                    if (o[n].id === e) {
                                        o.splice(n, 1);
                                        break
                                    }
                        }
                        0 === o.length && (this.modalFade && (0, r.addClass)(i, "v-modal-leave"), setTimeout((function() {
                            0 === o.length && (i.parentNode && i.parentNode.removeChild(i), i.style.display = "none", u.modalDom = void 0), (0, r.removeClass)(i, "v-modal-leave")
                        }), 200))
                    }
                };
            Object.defineProperty(u, "zIndex", {
                configurable: !0,
                get: function() {
                    return a || (s = s || (t.default.prototype.$ELEMENT || {}).zIndex || 2e3, a = !0), s
                },
                set: function(e) {
                    s = e
                }
            });
            t.default.prototype.$isServer || window.addEventListener("keydown", (function(e) {
                if (27 === e.keyCode) {
                    var o = function() {
                        if (!t.default.prototype.$isServer && u.modalStack.length > 0) {
                            var e = u.modalStack[u.modalStack.length - 1];
                            if (!e) return;
                            return u.getInstance(e.id)
                        }
                    }();
                    o && o.closeOnPressEscape && (o.handleClose ? o.handleClose() : o.handleAction ? o.handleAction("cancel") : o.close())
                }
            })), o.default = u
        },
        145: function(e, o, i) {
            var t = i(146);
            (e.exports = i(71)(!1)).push([e.i, ".el-fade-in-enter,.el-fade-in-leave-active,.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active,.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.fade-in-linear-enter-active,.fade-in-linear-leave-active{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.el-fade-in-enter-active,.el-fade-in-leave-active{-webkit-transition:all .3s cubic-bezier(.55,0,.1,1);transition:all .3s cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{-webkit-transition:all .3s cubic-bezier(.55,0,.1,1);transition:all .3s cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;-webkit-transform:scaleX(0);transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);-webkit-transform-origin:center top;transform-origin:center top}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);-webkit-transform-origin:center bottom;transform-origin:center bottom}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;-webkit-transform:scale(1,1);transform:scale(1,1);-webkit-transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);-webkit-transform-origin:top left;transform-origin:top left}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;-webkit-transform:scale(.45,.45);transform:scale(.45,.45)}.collapse-transition{-webkit-transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out;transition:.3s height ease-in-out,.3s padding-top ease-in-out,.3s padding-bottom ease-in-out}.horizontal-collapse-transition{-webkit-transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out;transition:.3s width ease-in-out,.3s padding-left ease-in-out,.3s padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{-webkit-transition:all 1s;transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px)}.el-opacity-transition{-webkit-transition:opacity .3s cubic-bezier(.55,0,.1,1);transition:opacity .3s cubic-bezier(.55,0,.1,1)}@font-face{font-family:element-icons;src:url(" + t(i(147)) + ') format("woff"),url(' + t(i(148)) + ') format("truetype");font-weight:400;font-display:"auto";font-style:normal}[class*=" el-icon-"],[class^=el-icon-]{font-family:element-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;vertical-align:baseline;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.el-icon-ice-cream-round:before{content:"\\E6A0"}.el-icon-ice-cream-square:before{content:"\\E6A3"}.el-icon-lollipop:before{content:"\\E6A4"}.el-icon-potato-strips:before{content:"\\E6A5"}.el-icon-milk-tea:before{content:"\\E6A6"}.el-icon-ice-drink:before{content:"\\E6A7"}.el-icon-ice-tea:before{content:"\\E6A9"}.el-icon-coffee:before{content:"\\E6AA"}.el-icon-orange:before{content:"\\E6AB"}.el-icon-pear:before{content:"\\E6AC"}.el-icon-apple:before{content:"\\E6AD"}.el-icon-cherry:before{content:"\\E6AE"}.el-icon-watermelon:before{content:"\\E6AF"}.el-icon-grape:before{content:"\\E6B0"}.el-icon-refrigerator:before{content:"\\E6B1"}.el-icon-goblet-square-full:before{content:"\\E6B2"}.el-icon-goblet-square:before{content:"\\E6B3"}.el-icon-goblet-full:before{content:"\\E6B4"}.el-icon-goblet:before{content:"\\E6B5"}.el-icon-cold-drink:before{content:"\\E6B6"}.el-icon-coffee-cup:before{content:"\\E6B8"}.el-icon-water-cup:before{content:"\\E6B9"}.el-icon-hot-water:before{content:"\\E6BA"}.el-icon-ice-cream:before{content:"\\E6BB"}.el-icon-dessert:before{content:"\\E6BC"}.el-icon-sugar:before{content:"\\E6BD"}.el-icon-tableware:before{content:"\\E6BE"}.el-icon-burger:before{content:"\\E6BF"}.el-icon-knife-fork:before{content:"\\E6C1"}.el-icon-fork-spoon:before{content:"\\E6C2"}.el-icon-chicken:before{content:"\\E6C3"}.el-icon-food:before{content:"\\E6C4"}.el-icon-dish-1:before{content:"\\E6C5"}.el-icon-dish:before{content:"\\E6C6"}.el-icon-moon-night:before{content:"\\E6EE"}.el-icon-moon:before{content:"\\E6F0"}.el-icon-cloudy-and-sunny:before{content:"\\E6F1"}.el-icon-partly-cloudy:before{content:"\\E6F2"}.el-icon-cloudy:before{content:"\\E6F3"}.el-icon-sunny:before{content:"\\E6F6"}.el-icon-sunset:before{content:"\\E6F7"}.el-icon-sunrise-1:before{content:"\\E6F8"}.el-icon-sunrise:before{content:"\\E6F9"}.el-icon-heavy-rain:before{content:"\\E6FA"}.el-icon-lightning:before{content:"\\E6FB"}.el-icon-light-rain:before{content:"\\E6FC"}.el-icon-wind-power:before{content:"\\E6FD"}.el-icon-baseball:before{content:"\\E712"}.el-icon-soccer:before{content:"\\E713"}.el-icon-football:before{content:"\\E715"}.el-icon-basketball:before{content:"\\E716"}.el-icon-ship:before{content:"\\E73F"}.el-icon-truck:before{content:"\\E740"}.el-icon-bicycle:before{content:"\\E741"}.el-icon-mobile-phone:before{content:"\\E6D3"}.el-icon-service:before{content:"\\E6D4"}.el-icon-key:before{content:"\\E6E2"}.el-icon-unlock:before{content:"\\E6E4"}.el-icon-lock:before{content:"\\E6E5"}.el-icon-watch:before{content:"\\E6FE"}.el-icon-watch-1:before{content:"\\E6FF"}.el-icon-timer:before{content:"\\E702"}.el-icon-alarm-clock:before{content:"\\E703"}.el-icon-map-location:before{content:"\\E704"}.el-icon-delete-location:before{content:"\\E705"}.el-icon-add-location:before{content:"\\E706"}.el-icon-location-information:before{content:"\\E707"}.el-icon-location-outline:before{content:"\\E708"}.el-icon-location:before{content:"\\E79E"}.el-icon-place:before{content:"\\E709"}.el-icon-discover:before{content:"\\E70A"}.el-icon-first-aid-kit:before{content:"\\E70B"}.el-icon-trophy-1:before{content:"\\E70C"}.el-icon-trophy:before{content:"\\E70D"}.el-icon-medal:before{content:"\\E70E"}.el-icon-medal-1:before{content:"\\E70F"}.el-icon-stopwatch:before{content:"\\E710"}.el-icon-mic:before{content:"\\E711"}.el-icon-copy-document:before{content:"\\E718"}.el-icon-full-screen:before{content:"\\E719"}.el-icon-switch-button:before{content:"\\E71B"}.el-icon-aim:before{content:"\\E71C"}.el-icon-crop:before{content:"\\E71D"}.el-icon-odometer:before{content:"\\E71E"}.el-icon-time:before{content:"\\E71F"}.el-icon-bangzhu:before{content:"\\E724"}.el-icon-close-notification:before{content:"\\E726"}.el-icon-microphone:before{content:"\\E727"}.el-icon-turn-off-microphone:before{content:"\\E728"}.el-icon-position:before{content:"\\E729"}.el-icon-postcard:before{content:"\\E72A"}.el-icon-message:before{content:"\\E72B"}.el-icon-chat-line-square:before{content:"\\E72D"}.el-icon-chat-dot-square:before{content:"\\E72E"}.el-icon-chat-dot-round:before{content:"\\E72F"}.el-icon-chat-square:before{content:"\\E730"}.el-icon-chat-line-round:before{content:"\\E731"}.el-icon-chat-round:before{content:"\\E732"}.el-icon-set-up:before{content:"\\E733"}.el-icon-turn-off:before{content:"\\E734"}.el-icon-open:before{content:"\\E735"}.el-icon-connection:before{content:"\\E736"}.el-icon-link:before{content:"\\E737"}.el-icon-cpu:before{content:"\\E738"}.el-icon-thumb:before{content:"\\E739"}.el-icon-female:before{content:"\\E73A"}.el-icon-male:before{content:"\\E73B"}.el-icon-guide:before{content:"\\E73C"}.el-icon-news:before{content:"\\E73E"}.el-icon-price-tag:before{content:"\\E744"}.el-icon-discount:before{content:"\\E745"}.el-icon-wallet:before{content:"\\E747"}.el-icon-coin:before{content:"\\E748"}.el-icon-money:before{content:"\\E749"}.el-icon-bank-card:before{content:"\\E74A"}.el-icon-box:before{content:"\\E74B"}.el-icon-present:before{content:"\\E74C"}.el-icon-sell:before{content:"\\E6D5"}.el-icon-sold-out:before{content:"\\E6D6"}.el-icon-shopping-bag-2:before{content:"\\E74D"}.el-icon-shopping-bag-1:before{content:"\\E74E"}.el-icon-shopping-cart-2:before{content:"\\E74F"}.el-icon-shopping-cart-1:before{content:"\\E750"}.el-icon-shopping-cart-full:before{content:"\\E751"}.el-icon-smoking:before{content:"\\E752"}.el-icon-no-smoking:before{content:"\\E753"}.el-icon-house:before{content:"\\E754"}.el-icon-table-lamp:before{content:"\\E755"}.el-icon-school:before{content:"\\E756"}.el-icon-office-building:before{content:"\\E757"}.el-icon-toilet-paper:before{content:"\\E758"}.el-icon-notebook-2:before{content:"\\E759"}.el-icon-notebook-1:before{content:"\\E75A"}.el-icon-files:before{content:"\\E75B"}.el-icon-collection:before{content:"\\E75C"}.el-icon-receiving:before{content:"\\E75D"}.el-icon-suitcase-1:before{content:"\\E760"}.el-icon-suitcase:before{content:"\\E761"}.el-icon-film:before{content:"\\E763"}.el-icon-collection-tag:before{content:"\\E765"}.el-icon-data-analysis:before{content:"\\E766"}.el-icon-pie-chart:before{content:"\\E767"}.el-icon-data-board:before{content:"\\E768"}.el-icon-data-line:before{content:"\\E76D"}.el-icon-reading:before{content:"\\E769"}.el-icon-magic-stick:before{content:"\\E76A"}.el-icon-coordinate:before{content:"\\E76B"}.el-icon-mouse:before{content:"\\E76C"}.el-icon-brush:before{content:"\\E76E"}.el-icon-headset:before{content:"\\E76F"}.el-icon-umbrella:before{content:"\\E770"}.el-icon-scissors:before{content:"\\E771"}.el-icon-mobile:before{content:"\\E773"}.el-icon-attract:before{content:"\\E774"}.el-icon-monitor:before{content:"\\E775"}.el-icon-search:before{content:"\\E778"}.el-icon-takeaway-box:before{content:"\\E77A"}.el-icon-paperclip:before{content:"\\E77D"}.el-icon-printer:before{content:"\\E77E"}.el-icon-document-add:before{content:"\\E782"}.el-icon-document:before{content:"\\E785"}.el-icon-document-checked:before{content:"\\E786"}.el-icon-document-copy:before{content:"\\E787"}.el-icon-document-delete:before{content:"\\E788"}.el-icon-document-remove:before{content:"\\E789"}.el-icon-tickets:before{content:"\\E78B"}.el-icon-folder-checked:before{content:"\\E77F"}.el-icon-folder-delete:before{content:"\\E780"}.el-icon-folder-remove:before{content:"\\E781"}.el-icon-folder-add:before{content:"\\E783"}.el-icon-folder-opened:before{content:"\\E784"}.el-icon-folder:before{content:"\\E78A"}.el-icon-edit-outline:before{content:"\\E764"}.el-icon-edit:before{content:"\\E78C"}.el-icon-date:before{content:"\\E78E"}.el-icon-c-scale-to-original:before{content:"\\E7C6"}.el-icon-view:before{content:"\\E6CE"}.el-icon-loading:before{content:"\\E6CF"}.el-icon-rank:before{content:"\\E6D1"}.el-icon-sort-down:before{content:"\\E7C4"}.el-icon-sort-up:before{content:"\\E7C5"}.el-icon-sort:before{content:"\\E6D2"}.el-icon-finished:before{content:"\\E6CD"}.el-icon-refresh-left:before{content:"\\E6C7"}.el-icon-refresh-right:before{content:"\\E6C8"}.el-icon-refresh:before{content:"\\E6D0"}.el-icon-video-play:before{content:"\\E7C0"}.el-icon-video-pause:before{content:"\\E7C1"}.el-icon-d-arrow-right:before{content:"\\E6DC"}.el-icon-d-arrow-left:before{content:"\\E6DD"}.el-icon-arrow-up:before{content:"\\E6E1"}.el-icon-arrow-down:before{content:"\\E6DF"}.el-icon-arrow-right:before{content:"\\E6E0"}.el-icon-arrow-left:before{content:"\\E6DE"}.el-icon-top-right:before{content:"\\E6E7"}.el-icon-top-left:before{content:"\\E6E8"}.el-icon-top:before{content:"\\E6E6"}.el-icon-bottom:before{content:"\\E6EB"}.el-icon-right:before{content:"\\E6E9"}.el-icon-back:before{content:"\\E6EA"}.el-icon-bottom-right:before{content:"\\E6EC"}.el-icon-bottom-left:before{content:"\\E6ED"}.el-icon-caret-top:before{content:"\\E78F"}.el-icon-caret-bottom:before{content:"\\E790"}.el-icon-caret-right:before{content:"\\E791"}.el-icon-caret-left:before{content:"\\E792"}.el-icon-d-caret:before{content:"\\E79A"}.el-icon-share:before{content:"\\E793"}.el-icon-menu:before{content:"\\E798"}.el-icon-s-grid:before{content:"\\E7A6"}.el-icon-s-check:before{content:"\\E7A7"}.el-icon-s-data:before{content:"\\E7A8"}.el-icon-s-opportunity:before{content:"\\E7AA"}.el-icon-s-custom:before{content:"\\E7AB"}.el-icon-s-claim:before{content:"\\E7AD"}.el-icon-s-finance:before{content:"\\E7AE"}.el-icon-s-comment:before{content:"\\E7AF"}.el-icon-s-flag:before{content:"\\E7B0"}.el-icon-s-marketing:before{content:"\\E7B1"}.el-icon-s-shop:before{content:"\\E7B4"}.el-icon-s-open:before{content:"\\E7B5"}.el-icon-s-management:before{content:"\\E7B6"}.el-icon-s-ticket:before{content:"\\E7B7"}.el-icon-s-release:before{content:"\\E7B8"}.el-icon-s-home:before{content:"\\E7B9"}.el-icon-s-promotion:before{content:"\\E7BA"}.el-icon-s-operation:before{content:"\\E7BB"}.el-icon-s-unfold:before{content:"\\E7BC"}.el-icon-s-fold:before{content:"\\E7A9"}.el-icon-s-platform:before{content:"\\E7BD"}.el-icon-s-order:before{content:"\\E7BE"}.el-icon-s-cooperation:before{content:"\\E7BF"}.el-icon-bell:before{content:"\\E725"}.el-icon-message-solid:before{content:"\\E799"}.el-icon-video-camera:before{content:"\\E772"}.el-icon-video-camera-solid:before{content:"\\E796"}.el-icon-camera:before{content:"\\E779"}.el-icon-camera-solid:before{content:"\\E79B"}.el-icon-download:before{content:"\\E77C"}.el-icon-upload2:before{content:"\\E77B"}.el-icon-upload:before{content:"\\E7C3"}.el-icon-picture-outline-round:before{content:"\\E75F"}.el-icon-picture-outline:before{content:"\\E75E"}.el-icon-picture:before{content:"\\E79F"}.el-icon-close:before{content:"\\E6DB"}.el-icon-check:before{content:"\\E6DA"}.el-icon-plus:before{content:"\\E6D9"}.el-icon-minus:before{content:"\\E6D8"}.el-icon-help:before{content:"\\E73D"}.el-icon-s-help:before{content:"\\E7B3"}.el-icon-circle-close:before{content:"\\E78D"}.el-icon-circle-check:before{content:"\\E720"}.el-icon-circle-plus-outline:before{content:"\\E723"}.el-icon-remove-outline:before{content:"\\E722"}.el-icon-zoom-out:before{content:"\\E776"}.el-icon-zoom-in:before{content:"\\E777"}.el-icon-error:before{content:"\\E79D"}.el-icon-success:before{content:"\\E79C"}.el-icon-circle-plus:before{content:"\\E7A0"}.el-icon-remove:before{content:"\\E7A2"}.el-icon-info:before{content:"\\E7A1"}.el-icon-question:before{content:"\\E7A4"}.el-icon-warning-outline:before{content:"\\E6C9"}.el-icon-warning:before{content:"\\E7A3"}.el-icon-goods:before{content:"\\E7C2"}.el-icon-s-goods:before{content:"\\E7B2"}.el-icon-star-off:before{content:"\\E717"}.el-icon-star-on:before{content:"\\E797"}.el-icon-more-outline:before{content:"\\E6CC"}.el-icon-more:before{content:"\\E794"}.el-icon-phone-outline:before{content:"\\E6CB"}.el-icon-phone:before{content:"\\E795"}.el-icon-user:before{content:"\\E6E3"}.el-icon-user-solid:before{content:"\\E7A5"}.el-icon-setting:before{content:"\\E6CA"}.el-icon-s-tools:before{content:"\\E7AC"}.el-icon-delete:before{content:"\\E6D7"}.el-icon-delete-solid:before{content:"\\E7C9"}.el-icon-eleme:before{content:"\\E7C7"}.el-icon-platform-eleme:before{content:"\\E7CA"}.el-icon-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@-webkit-keyframes rotating{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}100%{-webkit-transform:rotateZ(360deg);transform:rotateZ(360deg)}}@keyframes rotating{0%{-webkit-transform:rotateZ(0);transform:rotateZ(0)}100%{-webkit-transform:rotateZ(360deg);transform:rotateZ(360deg)}}', ""])
        },
        146: function(e, o) {
            e.exports = function(e) {
                return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
            }
        },
        147: function(e, o) {
            e.exports = "https://www.media.io/assets/fonts/element-icons.woff"
        },
        148: function(e, o) {
            e.exports = "https://www.media.io/assets/fonts/element-icons.ttf"
        },
        153: function(e, o, i) {
            (e.exports = i(71)(!1)).push([e.i, ".v-modal-enter{-webkit-animation:v-modal-in .2s ease;animation:v-modal-in .2s ease}.v-modal-leave{-webkit-animation:v-modal-out .2s ease forwards;animation:v-modal-out .2s ease forwards}@-webkit-keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-in{0%{opacity:0}}@-webkit-keyframes v-modal-out{100%{opacity:0}}@keyframes v-modal-out{100%{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000}.el-popup-parent--hidden{overflow:hidden}.el-dialog{position:relative;margin:0 auto 50px;background:#FFF;border-radius:2px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;width:50%}.el-dialog.is-fullscreen{width:100%;margin-top:0;margin-bottom:0;height:100%;overflow:auto}.el-dialog__wrapper{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;margin:0}.el-dialog__header{padding:20px 20px 10px}.el-dialog__headerbtn{position:absolute;top:20px;right:20px;padding:0;background:0 0;border:none;outline:0;cursor:pointer;font-size:16px}.el-dialog__headerbtn .el-dialog__close{color:#909399}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:#409EFF}.el-dialog__title{line-height:24px;font-size:18px;color:#303133}.el-dialog__body{padding:30px 20px;color:#606266;font-size:14px;word-break:break-all}.el-dialog__footer{padding:10px 20px 20px;text-align:right;-webkit-box-sizing:border-box;box-sizing:border-box}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{text-align:initial;padding:25px 25px 30px}.el-dialog--center .el-dialog__footer{text-align:inherit}.dialog-fade-enter-active{-webkit-animation:dialog-fade-in .3s;animation:dialog-fade-in .3s}.dialog-fade-leave-active{-webkit-animation:dialog-fade-out .3s;animation:dialog-fade-out .3s}@-webkit-keyframes dialog-fade-in{0%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes dialog-fade-in{0%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes dialog-fade-out{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}}@keyframes dialog-fade-out{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}}", ""])
        },
        154: function(e, o, i) {
            "use strict";
            o.__esModule = !0;
            var t = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(13)),
                r = i(125);
            var n = t.default.prototype.$isServer ? function() {} : i(217),
                a = function(e) {
                    return e.stopPropagation()
                };
            o.default = {
                props: {
                    transformOrigin: {
                        type: [Boolean, String],
                        default: !0
                    },
                    placement: {
                        type: String,
                        default: "bottom"
                    },
                    boundariesPadding: {
                        type: Number,
                        default: 5
                    },
                    reference: {},
                    popper: {},
                    offset: {
                        default: 0
                    },
                    value: Boolean,
                    visibleArrow: Boolean,
                    arrowOffset: {
                        type: Number,
                        default: 35
                    },
                    appendToBody: {
                        type: Boolean,
                        default: !0
                    },
                    popperOptions: {
                        type: Object,
                        default: function() {
                            return {
                                gpuAcceleration: !1
                            }
                        }
                    }
                },
                data: function() {
                    return {
                        showPopper: !1,
                        currentPlacement: ""
                    }
                },
                watch: {
                    value: {
                        immediate: !0,
                        handler: function(e) {
                            this.showPopper = e, this.$emit("input", e)
                        }
                    },
                    showPopper: function(e) {
                        this.disabled || (e ? this.updatePopper() : this.destroyPopper(), this.$emit("input", e))
                    }
                },
                methods: {
                    createPopper: function() {
                        var e = this;
                        if (!this.$isServer && (this.currentPlacement = this.currentPlacement || this.placement, /^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))) {
                            var o = this.popperOptions,
                                i = this.popperElm = this.popperElm || this.popper || this.$refs.popper,
                                t = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
                            !t && this.$slots.reference && this.$slots.reference[0] && (t = this.referenceElm = this.$slots.reference[0].elm), i && t && (this.visibleArrow && this.appendArrow(i), this.appendToBody && document.body.appendChild(this.popperElm), this.popperJS && this.popperJS.destroy && this.popperJS.destroy(), o.placement = this.currentPlacement, o.offset = this.offset, o.arrowOffset = this.arrowOffset, this.popperJS = new n(t, i, o), this.popperJS.onCreate((function(o) {
                                e.$emit("created", e), e.resetTransformOrigin(), e.$nextTick(e.updatePopper)
                            })), "function" == typeof o.onUpdate && this.popperJS.onUpdate(o.onUpdate), this.popperJS._popper.style.zIndex = r.PopupManager.nextZIndex(), this.popperElm.addEventListener("click", a))
                        }
                    },
                    updatePopper: function() {
                        var e = this.popperJS;
                        e ? (e.update(), e._popper && (e._popper.style.zIndex = r.PopupManager.nextZIndex())) : this.createPopper()
                    },
                    doDestroy: function(e) {
                        !this.popperJS || this.showPopper && !e || (this.popperJS.destroy(), this.popperJS = null)
                    },
                    destroyPopper: function() {
                        this.popperJS && this.resetTransformOrigin()
                    },
                    resetTransformOrigin: function() {
                        if (this.transformOrigin) {
                            var e = this.popperJS._popper.getAttribute("x-placement").split("-")[0],
                                o = {
                                    top: "bottom",
                                    bottom: "top",
                                    left: "right",
                                    right: "left"
                                }[e];
                            this.popperJS._popper.style.transformOrigin = "string" == typeof this.transformOrigin ? this.transformOrigin : ["top", "bottom"].indexOf(e) > -1 ? "center " + o : o + " center"
                        }
                    },
                    appendArrow: function(e) {
                        var o = void 0;
                        if (!this.appended) {
                            for (var i in this.appended = !0, e.attributes)
                                if (/^_v-/.test(e.attributes[i].name)) {
                                    o = e.attributes[i].name;
                                    break
                                }
                            var t = document.createElement("div");
                            o && t.setAttribute(o, ""), t.setAttribute("x-arrow", ""), t.className = "popper__arrow", e.appendChild(t)
                        }
                    }
                },
                beforeDestroy: function() {
                    this.doDestroy(!0), this.popperElm && this.popperElm.parentNode === document.body && (this.popperElm.removeEventListener("click", a), document.body.removeChild(this.popperElm))
                },
                deactivated: function() {
                    this.$options.beforeDestroy[0].call(this)
                }
            }
        },
        159: function(e, o) {
            e.exports = function(e) {
                var o = "undefined" != typeof window && window.location;
                if (!o) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var i = o.protocol + "//" + o.host,
                    t = i + o.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, o) {
                    var r, n = o.trim().replace(/^"(.*)"$/, (function(e, o) {
                        return o
                    })).replace(/^'(.*)'$/, (function(e, o) {
                        return o
                    }));
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n) ? e : (r = 0 === n.indexOf("//") ? n : 0 === n.indexOf("/") ? i + n : t + n.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
                }))
            }
        },
        170: function(e, o, i) {
            var t = i(215);
            e.exports = function(e, o, i) {
                return void 0 === i ? t(e, o, !1) : t(e, i, !1 !== o)
            }
        },
        212: function(e, o, i) {
            e.exports = function(e) {
                var o = {};

                function i(t) {
                    if (o[t]) return o[t].exports;
                    var r = o[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
                }
                return i.m = e, i.c = o, i.d = function(e, o, t) {
                    i.o(e, o) || Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: t
                    })
                }, i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.t = function(e, o) {
                    if (1 & o && (e = i(e)), 8 & o) return e;
                    if (4 & o && "object" == typeof e && e && e.__esModule) return e;
                    var t = Object.create(null);
                    if (i.r(t), Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & o && "string" != typeof e)
                        for (var r in e) i.d(t, r, function(o) {
                            return e[o]
                        }.bind(null, r));
                    return t
                }, i.n = function(e) {
                    var o = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(o, "a", o), o
                }, i.o = function(e, o) {
                    return Object.prototype.hasOwnProperty.call(e, o)
                }, i.p = "/dist/", i(i.s = 140)
            }({
                140: function(e, o, i) {
                    "use strict";
                    i.r(o);
                    var t = i(5),
                        r = i.n(t),
                        n = i(18),
                        a = i.n(n),
                        s = i(2),
                        l = i(3),
                        d = i(7),
                        u = i.n(d),
                        c = {
                            name: "ElTooltip",
                            mixins: [r.a],
                            props: {
                                openDelay: {
                                    type: Number,
                                    default: 0
                                },
                                disabled: Boolean,
                                manual: Boolean,
                                effect: {
                                    type: String,
                                    default: "dark"
                                },
                                arrowOffset: {
                                    type: Number,
                                    default: 0
                                },
                                popperClass: String,
                                content: String,
                                visibleArrow: {
                                    default: !0
                                },
                                transition: {
                                    type: String,
                                    default: "el-fade-in-linear"
                                },
                                popperOptions: {
                                    default: function() {
                                        return {
                                            boundariesPadding: 10,
                                            gpuAcceleration: !1
                                        }
                                    }
                                },
                                enterable: {
                                    type: Boolean,
                                    default: !0
                                },
                                hideAfter: {
                                    type: Number,
                                    default: 0
                                },
                                tabindex: {
                                    type: Number,
                                    default: 0
                                }
                            },
                            data: function() {
                                return {
                                    tooltipId: "el-tooltip-" + Object(l.generateId)(),
                                    timeoutPending: null,
                                    focusing: !1
                                }
                            },
                            beforeCreate: function() {
                                var e = this;
                                this.$isServer || (this.popperVM = new u.a({
                                    data: {
                                        node: ""
                                    },
                                    render: function(e) {
                                        return this.node
                                    }
                                }).$mount(), this.debounceClose = a()(200, (function() {
                                    return e.handleClosePopper()
                                })))
                            },
                            render: function(e) {
                                var o = this;
                                this.popperVM && (this.popperVM.node = e("transition", {
                                    attrs: {
                                        name: this.transition
                                    },
                                    on: {
                                        afterLeave: this.doDestroy
                                    }
                                }, [e("div", {
                                    on: {
                                        mouseleave: function() {
                                            o.setExpectedState(!1), o.debounceClose()
                                        },
                                        mouseenter: function() {
                                            o.setExpectedState(!0)
                                        }
                                    },
                                    ref: "popper",
                                    attrs: {
                                        role: "tooltip",
                                        id: this.tooltipId,
                                        "aria-hidden": this.disabled || !this.showPopper ? "true" : "false"
                                    },
                                    directives: [{
                                        name: "show",
                                        value: !this.disabled && this.showPopper
                                    }],
                                    class: ["el-tooltip__popper", "is-" + this.effect, this.popperClass]
                                }, [this.$slots.content || this.content])]));
                                var i = this.getFirstElement();
                                if (!i) return null;
                                var t = i.data = i.data || {};
                                return t.staticClass = this.addTooltipClass(t.staticClass), i
                            },
                            mounted: function() {
                                var e = this;
                                this.referenceElm = this.$el, 1 === this.$el.nodeType && (this.$el.setAttribute("aria-describedby", this.tooltipId), this.$el.setAttribute("tabindex", this.tabindex), Object(s.on)(this.referenceElm, "mouseenter", this.show), Object(s.on)(this.referenceElm, "mouseleave", this.hide), Object(s.on)(this.referenceElm, "focus", (function() {
                                    if (e.$slots.default && e.$slots.default.length) {
                                        var o = e.$slots.default[0].componentInstance;
                                        o && o.focus ? o.focus() : e.handleFocus()
                                    } else e.handleFocus()
                                })), Object(s.on)(this.referenceElm, "blur", this.handleBlur), Object(s.on)(this.referenceElm, "click", this.removeFocusing)), this.value && this.popperVM && this.popperVM.$nextTick((function() {
                                    e.value && e.updatePopper()
                                }))
                            },
                            watch: {
                                focusing: function(e) {
                                    e ? Object(s.addClass)(this.referenceElm, "focusing") : Object(s.removeClass)(this.referenceElm, "focusing")
                                }
                            },
                            methods: {
                                show: function() {
                                    this.setExpectedState(!0), this.handleShowPopper()
                                },
                                hide: function() {
                                    this.setExpectedState(!1), this.debounceClose()
                                },
                                handleFocus: function() {
                                    this.focusing = !0, this.show()
                                },
                                handleBlur: function() {
                                    this.focusing = !1, this.hide()
                                },
                                removeFocusing: function() {
                                    this.focusing = !1
                                },
                                addTooltipClass: function(e) {
                                    return e ? "el-tooltip " + e.replace("el-tooltip", "") : "el-tooltip"
                                },
                                handleShowPopper: function() {
                                    var e = this;
                                    this.expectedState && !this.manual && (clearTimeout(this.timeout), this.timeout = setTimeout((function() {
                                        e.showPopper = !0
                                    }), this.openDelay), this.hideAfter > 0 && (this.timeoutPending = setTimeout((function() {
                                        e.showPopper = !1
                                    }), this.hideAfter)))
                                },
                                handleClosePopper: function() {
                                    this.enterable && this.expectedState || this.manual || (clearTimeout(this.timeout), this.timeoutPending && clearTimeout(this.timeoutPending), this.showPopper = !1, this.disabled && this.doDestroy())
                                },
                                setExpectedState: function(e) {
                                    !1 === e && clearTimeout(this.timeoutPending), this.expectedState = e
                                },
                                getFirstElement: function() {
                                    var e = this.$slots.default;
                                    if (!Array.isArray(e)) return null;
                                    for (var o = null, i = 0; i < e.length; i++) e[i] && e[i].tag && (o = e[i]);
                                    return o
                                }
                            },
                            beforeDestroy: function() {
                                this.popperVM && this.popperVM.$destroy()
                            },
                            destroyed: function() {
                                var e = this.referenceElm;
                                1 === e.nodeType && (Object(s.off)(e, "mouseenter", this.show), Object(s.off)(e, "mouseleave", this.hide), Object(s.off)(e, "focus", this.handleFocus), Object(s.off)(e, "blur", this.handleBlur), Object(s.off)(e, "click", this.removeFocusing))
                            },
                            install: function(e) {
                                e.component(c.name, c)
                            }
                        };
                    o.default = c
                },
                18: function(e, o) {
                    e.exports = i(170)
                },
                2: function(e, o) {
                    e.exports = i(86)
                },
                3: function(e, o) {
                    e.exports = i(120)
                },
                5: function(e, o) {
                    e.exports = i(154)
                },
                7: function(e, o) {
                    e.exports = i(13)
                }
            })
        },
        215: function(e, o) {
            e.exports = function(e, o, i, t) {
                var r, n = 0;
                return "boolean" != typeof o && (t = i, i = o, o = void 0),
                    function() {
                        var a = this,
                            s = Number(new Date) - n,
                            l = arguments;

                        function d() {
                            n = Number(new Date), i.apply(a, l)
                        }

                        function u() {
                            r = void 0
                        }
                        t && !r && d(), r && clearTimeout(r), void 0 === t && s > e ? d() : !0 !== o && (r = setTimeout(t ? u : d, void 0 === t ? e - s : e))
                    }
            }
        },
        217: function(e, o, i) {
            "use strict";
            var t, r;
            "function" == typeof Symbol && Symbol.iterator;
            void 0 === (r = "function" == typeof(t = function() {
                var e = window,
                    o = {
                        placement: "bottom",
                        gpuAcceleration: !0,
                        offset: 0,
                        boundariesElement: "viewport",
                        boundariesPadding: 5,
                        preventOverflowOrder: ["left", "right", "top", "bottom"],
                        flipBehavior: "flip",
                        arrowElement: "[x-arrow]",
                        arrowOffset: 0,
                        modifiers: ["shift", "offset", "preventOverflow", "keepTogether", "arrow", "flip", "applyStyle"],
                        modifiersIgnored: [],
                        forceAbsolute: !1
                    };

                function i(e, i, t) {
                    this._reference = e.jquery ? e[0] : e, this.state = {};
                    var r = null == i,
                        n = i && "[object Object]" === Object.prototype.toString.call(i);
                    return this._popper = r || n ? this.parse(n ? i : {}) : i.jquery ? i[0] : i, this._options = Object.assign({}, o, t), this._options.modifiers = this._options.modifiers.map(function(e) {
                        if (-1 === this._options.modifiersIgnored.indexOf(e)) return "applyStyle" === e && this._popper.setAttribute("x-placement", this._options.placement), this.modifiers[e] || e
                    }.bind(this)), this.state.position = this._getPosition(this._popper, this._reference), u(this._popper, {
                        position: this.state.position,
                        top: 0
                    }), this.update(), this._setupEventListeners(), this
                }

                function t(o) {
                    var i = o.style.display,
                        t = o.style.visibility;
                    o.style.display = "block", o.style.visibility = "hidden", o.offsetWidth;
                    var r = e.getComputedStyle(o),
                        n = parseFloat(r.marginTop) + parseFloat(r.marginBottom),
                        a = parseFloat(r.marginLeft) + parseFloat(r.marginRight),
                        s = {
                            width: o.offsetWidth + a,
                            height: o.offsetHeight + n
                        };
                    return o.style.display = i, o.style.visibility = t, s
                }

                function r(e) {
                    var o = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return o[e]
                    }))
                }

                function n(e) {
                    var o = Object.assign({}, e);
                    return o.right = o.left + o.width, o.bottom = o.top + o.height, o
                }

                function a(e, o) {
                    var i, t = 0;
                    for (i in e) {
                        if (e[i] === o) return t;
                        t++
                    }
                    return null
                }

                function s(o, i) {
                    return e.getComputedStyle(o, null)[i]
                }

                function l(o) {
                    var i = o.offsetParent;
                    return i !== e.document.body && i ? i : e.document.documentElement
                }

                function d(o) {
                    var i = o.parentNode;
                    return i ? i === e.document ? e.document.body.scrollTop || e.document.body.scrollLeft ? e.document.body : e.document.documentElement : -1 !== ["scroll", "auto"].indexOf(s(i, "overflow")) || -1 !== ["scroll", "auto"].indexOf(s(i, "overflow-x")) || -1 !== ["scroll", "auto"].indexOf(s(i, "overflow-y")) ? i : d(o.parentNode) : o
                }

                function u(e, o) {
                    Object.keys(o).forEach((function(i) {
                        var t, r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && "" !== (t = o[i]) && !isNaN(parseFloat(t)) && isFinite(t) && (r = "px"), e.style[i] = o[i] + r
                    }))
                }

                function c(e) {
                    var o = {
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                        left: e.offsetLeft,
                        top: e.offsetTop
                    };
                    return o.right = o.left + o.width, o.bottom = o.top + o.height, o
                }

                function p(e) {
                    var o = e.getBoundingClientRect(),
                        i = -1 != navigator.userAgent.indexOf("MSIE") && "HTML" === e.tagName ? -e.scrollTop : o.top;
                    return {
                        left: o.left,
                        top: i,
                        right: o.right,
                        bottom: o.bottom,
                        width: o.right - o.left,
                        height: o.bottom - i
                    }
                }

                function m(o) {
                    for (var i = ["", "ms", "webkit", "moz", "o"], t = 0; t < i.length; t++) {
                        var r = i[t] ? i[t] + o.charAt(0).toUpperCase() + o.slice(1) : o;
                        if (void 0 !== e.document.body.style[r]) return r
                    }
                    return null
                }
                return i.prototype.destroy = function() {
                    return this._popper.removeAttribute("x-placement"), this._popper.style.left = "", this._popper.style.position = "", this._popper.style.top = "", this._popper.style[m("transform")] = "", this._removeEventListeners(), this._options.removeOnDestroy && this._popper.remove(), this
                }, i.prototype.update = function() {
                    var e = {
                        instance: this,
                        styles: {}
                    };
                    e.placement = this._options.placement, e._originalPlacement = this._options.placement, e.offsets = this._getOffsets(this._popper, this._reference, e.placement), e.boundaries = this._getBoundaries(e, this._options.boundariesPadding, this._options.boundariesElement), e = this.runModifiers(e, this._options.modifiers), "function" == typeof this.state.updateCallback && this.state.updateCallback(e)
                }, i.prototype.onCreate = function(e) {
                    return e(this), this
                }, i.prototype.onUpdate = function(e) {
                    return this.state.updateCallback = e, this
                }, i.prototype.parse = function(o) {
                    var i = {
                        tagName: "div",
                        classNames: ["popper"],
                        attributes: [],
                        parent: e.document.body,
                        content: "",
                        contentType: "text",
                        arrowTagName: "div",
                        arrowClassNames: ["popper__arrow"],
                        arrowAttributes: ["x-arrow"]
                    };
                    o = Object.assign({}, i, o);
                    var t = e.document,
                        r = t.createElement(o.tagName);
                    if (s(r, o.classNames), l(r, o.attributes), "node" === o.contentType ? r.appendChild(o.content.jquery ? o.content[0] : o.content) : "html" === o.contentType ? r.innerHTML = o.content : r.textContent = o.content, o.arrowTagName) {
                        var n = t.createElement(o.arrowTagName);
                        s(n, o.arrowClassNames), l(n, o.arrowAttributes), r.appendChild(n)
                    }
                    var a = o.parent.jquery ? o.parent[0] : o.parent;
                    if ("string" == typeof a) {
                        if ((a = t.querySelectorAll(o.parent)).length > 1 && console.warn("WARNING: the given `parent` query(" + o.parent + ") matched more than one element, the first one will be used"), 0 === a.length) throw "ERROR: the given `parent` doesn't exists!";
                        a = a[0]
                    }
                    return a.length > 1 && a instanceof Element == 0 && (console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"), a = a[0]), a.appendChild(r), r;

                    function s(e, o) {
                        o.forEach((function(o) {
                            e.classList.add(o)
                        }))
                    }

                    function l(e, o) {
                        o.forEach((function(o) {
                            e.setAttribute(o.split(":")[0], o.split(":")[1] || "")
                        }))
                    }
                }, i.prototype._getPosition = function(o, i) {
                    return l(i), this._options.forceAbsolute ? "absolute" : function o(i) {
                        return i !== e.document.body && ("fixed" === s(i, "position") || (i.parentNode ? o(i.parentNode) : i))
                    }(i) ? "fixed" : "absolute"
                }, i.prototype._getOffsets = function(e, o, i) {
                    i = i.split("-")[0];
                    var r = {};
                    r.position = this.state.position;
                    var n = "fixed" === r.position,
                        a = function(e, o, i) {
                            var t = p(e),
                                r = p(o);
                            if (i) {
                                var n = d(o);
                                r.top += n.scrollTop, r.bottom += n.scrollTop, r.left += n.scrollLeft, r.right += n.scrollLeft
                            }
                            return {
                                top: t.top - r.top,
                                left: t.left - r.left,
                                bottom: t.top - r.top + t.height,
                                right: t.left - r.left + t.width,
                                width: t.width,
                                height: t.height
                            }
                        }(o, l(e), n),
                        s = t(e);
                    return -1 !== ["right", "left"].indexOf(i) ? (r.top = a.top + a.height / 2 - s.height / 2, r.left = "left" === i ? a.left - s.width : a.right) : (r.left = a.left + a.width / 2 - s.width / 2, r.top = "top" === i ? a.top - s.height : a.bottom), r.width = s.width, r.height = s.height, {
                        popper: r,
                        reference: a
                    }
                }, i.prototype._setupEventListeners = function() {
                    if (this.state.updateBound = this.update.bind(this), e.addEventListener("resize", this.state.updateBound), "window" !== this._options.boundariesElement) {
                        var o = d(this._reference);
                        o !== e.document.body && o !== e.document.documentElement || (o = e), o.addEventListener("scroll", this.state.updateBound), this.state.scrollTarget = o
                    }
                }, i.prototype._removeEventListeners = function() {
                    e.removeEventListener("resize", this.state.updateBound), "window" !== this._options.boundariesElement && this.state.scrollTarget && (this.state.scrollTarget.removeEventListener("scroll", this.state.updateBound), this.state.scrollTarget = null), this.state.updateBound = null
                }, i.prototype._getBoundaries = function(o, i, t) {
                    var r, n, a = {};
                    if ("window" === t) {
                        var s = e.document.body,
                            u = e.document.documentElement;
                        r = Math.max(s.scrollHeight, s.offsetHeight, u.clientHeight, u.scrollHeight, u.offsetHeight), a = {
                            top: 0,
                            right: Math.max(s.scrollWidth, s.offsetWidth, u.clientWidth, u.scrollWidth, u.offsetWidth),
                            bottom: r,
                            left: 0
                        }
                    } else if ("viewport" === t) {
                        var p = l(this._popper),
                            m = d(this._popper),
                            h = c(p),
                            g = "fixed" === o.offsets.popper.position ? 0 : (n = m) == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : n.scrollTop,
                            v = "fixed" === o.offsets.popper.position ? 0 : function(e) {
                                return e == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : e.scrollLeft
                            }(m);
                        a = {
                            top: 0 - (h.top - g),
                            right: e.document.documentElement.clientWidth - (h.left - v),
                            bottom: e.document.documentElement.clientHeight - (h.top - g),
                            left: 0 - (h.left - v)
                        }
                    } else a = l(this._popper) === t ? {
                        top: 0,
                        left: 0,
                        right: t.clientWidth,
                        bottom: t.clientHeight
                    } : c(t);
                    return a.left += i, a.right -= i, a.top = a.top + i, a.bottom = a.bottom - i, a
                }, i.prototype.runModifiers = function(e, o, i) {
                    var t = o.slice();
                    return void 0 !== i && (t = this._options.modifiers.slice(0, a(this._options.modifiers, i))), t.forEach(function(o) {
                        var i;
                        (i = o) && "[object Function]" === {}.toString.call(i) && (e = o.call(this, e))
                    }.bind(this)), e
                }, i.prototype.isModifierRequired = function(e, o) {
                    var i = a(this._options.modifiers, e);
                    return !!this._options.modifiers.slice(0, i).filter((function(e) {
                        return e === o
                    })).length
                }, i.prototype.modifiers = {}, i.prototype.modifiers.applyStyle = function(e) {
                    var o, i = {
                            position: e.offsets.popper.position
                        },
                        t = Math.round(e.offsets.popper.left),
                        r = Math.round(e.offsets.popper.top);
                    return this._options.gpuAcceleration && (o = m("transform")) ? (i[o] = "translate3d(" + t + "px, " + r + "px, 0)", i.top = 0, i.left = 0) : (i.left = t, i.top = r), Object.assign(i, e.styles), u(this._popper, i), this._popper.setAttribute("x-placement", e.placement), this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && e.offsets.arrow && u(e.arrowElement, e.offsets.arrow), e
                }, i.prototype.modifiers.shift = function(e) {
                    var o = e.placement,
                        i = o.split("-")[0],
                        t = o.split("-")[1];
                    if (t) {
                        var r = e.offsets.reference,
                            a = n(e.offsets.popper),
                            s = {
                                y: {
                                    start: {
                                        top: r.top
                                    },
                                    end: {
                                        top: r.top + r.height - a.height
                                    }
                                },
                                x: {
                                    start: {
                                        left: r.left
                                    },
                                    end: {
                                        left: r.left + r.width - a.width
                                    }
                                }
                            },
                            l = -1 !== ["bottom", "top"].indexOf(i) ? "x" : "y";
                        e.offsets.popper = Object.assign(a, s[l][t])
                    }
                    return e
                }, i.prototype.modifiers.preventOverflow = function(e) {
                    var o = this._options.preventOverflowOrder,
                        i = n(e.offsets.popper),
                        t = {
                            left: function() {
                                var o = i.left;
                                return i.left < e.boundaries.left && (o = Math.max(i.left, e.boundaries.left)), {
                                    left: o
                                }
                            },
                            right: function() {
                                var o = i.left;
                                return i.right > e.boundaries.right && (o = Math.min(i.left, e.boundaries.right - i.width)), {
                                    left: o
                                }
                            },
                            top: function() {
                                var o = i.top;
                                return i.top < e.boundaries.top && (o = Math.max(i.top, e.boundaries.top)), {
                                    top: o
                                }
                            },
                            bottom: function() {
                                var o = i.top;
                                return i.bottom > e.boundaries.bottom && (o = Math.min(i.top, e.boundaries.bottom - i.height)), {
                                    top: o
                                }
                            }
                        };
                    return o.forEach((function(o) {
                        e.offsets.popper = Object.assign(i, t[o]())
                    })), e
                }, i.prototype.modifiers.keepTogether = function(e) {
                    var o = n(e.offsets.popper),
                        i = e.offsets.reference,
                        t = Math.floor;
                    return o.right < t(i.left) && (e.offsets.popper.left = t(i.left) - o.width), o.left > t(i.right) && (e.offsets.popper.left = t(i.right)), o.bottom < t(i.top) && (e.offsets.popper.top = t(i.top) - o.height), o.top > t(i.bottom) && (e.offsets.popper.top = t(i.bottom)), e
                }, i.prototype.modifiers.flip = function(e) {
                    if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"), e;
                    if (e.flipped && e.placement === e._originalPlacement) return e;
                    var o = e.placement.split("-")[0],
                        i = r(o),
                        t = e.placement.split("-")[1] || "",
                        a = [];
                    return (a = "flip" === this._options.flipBehavior ? [o, i] : this._options.flipBehavior).forEach(function(s, l) {
                        if (o === s && a.length !== l + 1) {
                            o = e.placement.split("-")[0], i = r(o);
                            var d = n(e.offsets.popper),
                                u = -1 !== ["right", "bottom"].indexOf(o);
                            (u && Math.floor(e.offsets.reference[o]) > Math.floor(d[i]) || !u && Math.floor(e.offsets.reference[o]) < Math.floor(d[i])) && (e.flipped = !0, e.placement = a[l + 1], t && (e.placement += "-" + t), e.offsets.popper = this._getOffsets(this._popper, this._reference, e.placement).popper, e = this.runModifiers(e, this._options.modifiers, this._flip))
                        }
                    }.bind(this)), e
                }, i.prototype.modifiers.offset = function(e) {
                    var o = this._options.offset,
                        i = e.offsets.popper;
                    return -1 !== e.placement.indexOf("left") ? i.top -= o : -1 !== e.placement.indexOf("right") ? i.top += o : -1 !== e.placement.indexOf("top") ? i.left -= o : -1 !== e.placement.indexOf("bottom") && (i.left += o), e
                }, i.prototype.modifiers.arrow = function(e) {
                    var o = this._options.arrowElement,
                        i = this._options.arrowOffset;
                    if ("string" == typeof o && (o = this._popper.querySelector(o)), !o) return e;
                    if (!this._popper.contains(o)) return console.warn("WARNING: `arrowElement` must be child of its popper element!"), e;
                    if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"), e;
                    var r = {},
                        a = e.placement.split("-")[0],
                        s = n(e.offsets.popper),
                        l = e.offsets.reference,
                        d = -1 !== ["left", "right"].indexOf(a),
                        u = d ? "height" : "width",
                        c = d ? "top" : "left",
                        p = d ? "left" : "top",
                        m = d ? "bottom" : "right",
                        h = t(o)[u];
                    l[m] - h < s[c] && (e.offsets.popper[c] -= s[c] - (l[m] - h)), l[c] + h > s[m] && (e.offsets.popper[c] += l[c] + h - s[m]);
                    var g = l[c] + (i || l[u] / 2 - h / 2) - s[c];
                    return g = Math.max(Math.min(s[u] - h - 8, g), 8), r[c] = g, r[p] = "", e.offsets.arrow = r, e.arrowElement = o, e
                }, Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function(e) {
                        if (null == e) throw new TypeError("Cannot convert first argument to object");
                        for (var o = Object(e), i = 1; i < arguments.length; i++) {
                            var t = arguments[i];
                            if (null != t) {
                                t = Object(t);
                                for (var r = Object.keys(t), n = 0, a = r.length; n < a; n++) {
                                    var s = r[n],
                                        l = Object.getOwnPropertyDescriptor(t, s);
                                    void 0 !== l && l.enumerable && (o[s] = t[s])
                                }
                            }
                        }
                        return o
                    }
                }), i
            }) ? t.call(o, i, o, e) : t) || (e.exports = r)
        },
        222: function(e, o, i) {
            "use strict";
            i.r(o);
            var t = {
                    name: "Button",
                    props: ["className"]
                },
                r = i(68),
                n = Object(r.a)(t, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("button", {
                        staticClass: "ko-btn",
                        class: this.className
                    }, [this._t("default")], 2)
                }), [], !1, null, "5216ca16", null);
            o.default = n.exports
        },
        245: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "Você confirma o cancelamento?",
                    swalOK: "Sim",
                    swalNO: "Não",
                    swalSuccess: "Tem certeza de que deseja excluir esta tarefa?",
                    deleteAllTask: "Você tem certeza de que quer excluir todas as tarefas?",
                    download: "baixar",
                    downloadAll: "Baixar tudo",
                    otherTools: "Outras Ferramentas",
                    editAgain: "EDITAR NOVAMENTE",
                    editNewFile: "EDITAR NOVO ARQUIVO",
                    readyDownload: "Parabéns! O seu vídeo está pronto para baixar.",
                    converterMoreFiles: "CONVERTER MAIS ARQUIVOS",
                    saveTo: "Salvar para",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "Não há previsão disponível.",
                    browserNotSupport: "Seu navegador não suporta este formato.",
                    signUpFree: "Inscreva-se gratuitamente",
                    signUpSuccess: "Parabéns! \nVocê agora obteve com sucesso uma assinatura de 30 dias!",
                    makeFail: "Desculpe, a geração do seu arquivo falhou, por favor, tente novamente.",
                    freeUseTimes: "Você já editou arquivos #### vezes em um dia. Por favor, faça o login para remover a limitação, ou edite mais arquivos amanhã.",
                    loginUseTimes: "Você já editou arquivos #### vezes em um dia. Por favor, compre online para remover a limitação.",
                    Processing: "Processando, por favor, espere."
                },
                chooseRightPlan: {
                    sizeMinLimit: "O arquivo é muito grande! (####). A conta gratuita suporta apenas vídeos com não mais do que @@@@ MB. Por favor, compre um plano online para suportar vídeos maiores.",
                    sizeMaxLimit: "O arquivo é muito grande! (####). O Online UniConterter suporta apenas vídeos com não mais do que @@@@ MB. Por favor, use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop.",
                    useTimeMinLimit: "Você excedeu o #### limite de uso por dia. Suspenda ou selecione um serviço premium abaixo.",
                    useTimeMaxLimit: "Você excedeu o #### limite de uso por dia. Selecione um serviço premium abaixo.",
                    concurrentCountLimit: "Sua conta gratuita permite apenas #### conversões simultâneas. Por favor, clique no botão Converter para continuar, ou adquira um plano online atualizado.",
                    compressConcurrentCountLimit: "Sua conta gratuita permite apenas #### compactações simultâneas. Por favor, clique no botão Compactar para continuar, ou adquira um plano online atualizado.",
                    choose_right_plan: "Escolher Plano"
                },
                uploadConvertText: {
                    uploadTitle: "Carregando seus arquivos...",
                    convertTitle: "Convertendo seus arquivos...",
                    compressTitle: "Compactando seus arquivos...",
                    convertSuccess: "Conversão Terminada!",
                    compressSuccess: "Compactação Terminada!",
                    downloadFile: "Agora você pode visualizar e baixar o vídeo",
                    desc: "Por favor, aguarde um momento"
                },
                compressSetting: {
                    compressionMethod: "Método de Compactação",
                    byFileSize: "Tamanho do Arquivo",
                    byVariable: "Bitrate Variável",
                    byAutomatic: "por Automático",
                    highQuality: "Qualidade Alta",
                    mediumQuality: "Qualidade Média",
                    lowQuality: "Qualidade Baixa",
                    fileSize: "Tamanho do Arquivo (MB)",
                    smallSize: "Tamanho pequeno",
                    betterQuality: "Qualidade melhor"
                },
                functionTab: {
                    muteVideo: "Vídeo Mudo",
                    videoSpeed: "Velocidade do vídeo",
                    loopVideo: "Vídeo do Loop",
                    audioCutter: "Cortador de Áudio",
                    audioJoiner: "Juntador de Áudio",
                    imagesToGif: "Imagens para GIF",
                    videoToGif: "Vídeo para GIF",
                    imageResizer: "Image Resizer",
                    reverseVideo: "Vídeo reverso",
                    mergeVideo: "Fundir Vídeo",
                    slideshowMaker: "Criador de Slides",
                    addAudioToVideo: "Adicionar Áudio ao Vídeo",
                    removeWatermark: "Remover marca d'água",
                    addWatermark: "Adicionar marca d'água"
                },
                dialog: {
                    cancel: "Cancelar",
                    ok: "OK",
                    setting: "Configuração",
                    video: "Aplicar a todas as conversões de vídeo",
                    audio: "Aplicar a todas as conversões de áudio",
                    image: "Aplicar a todas as conversões de imagem",
                    vector: "Aplicar a todas as conversões de vetor",
                    keepOriginSize: "Manter o tamanho original",
                    videoText: "Vídeo",
                    audioText: "Áudio",
                    imageText: "Imagem",
                    customSize: "Tamanho personalizado",
                    encoder: "Codificador",
                    resolution: "Resolução",
                    frameRate: "Taxa de quadros",
                    bitrate: "Taxa de bits",
                    channel: "Canal",
                    sampleRate: "Taxa de amostra",
                    videoTips: "Nós lhe fornecemos o melhor parâmetro <br/>configurações por padrão.",
                    audioTips: "Quando esta opção não for marcada, o vídeo convertido<br/> não terá áudio.",
                    imageTips: "Clique em Bloquear/Desbloquear para manter ou não a relação <br/>aspecto original.",
                    inputEmail: "Por favor digite o endereço de e-mail",
                    trim: "Aparar",
                    trimTips: "Você pode especificar o ponto inicial e o ponto final do corte."
                },
                notify: {
                    title: "Parabéns！Obrigado pelo seu registro.",
                    message: "Enviaremos o endereço de download para você após a conclusão da tarefa."
                },
                convertedFiles: {
                    convertedFiles: "Arquivos convertidos",
                    fileStore24Hours: "Os arquivos serão armazenados por 24 horas",
                    name: "Nome",
                    size: "Tamanho",
                    operate: "Operar",
                    deleteAll: "Excluir Tudo",
                    nofiles: "Sem arquivo, clique no botão abaixo para convertê-lo!"
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Por favor, faça o login no Online Uniconverter （originalmente Media.io） gratuitamente para desfrutar da associação que você pode adicionar sua imagem em #### MB"
                    },
                    video: {
                        purchaseCancelMinLimit: "A versão gratuita do Online UniConverter solo pode carregar um tamanho de vídeo máximo de #### MB. Compre online e obtenha um tamanho de vídeo ilimitado.",
                        cancelMinLimit: "O UniConverter online só oferece suporte a vídeos com até #### MB. Use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop.",
                        cancelMaxLimit: "O UniConverter online só oferece suporte a vídeos com até #### MB. Use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop."
                    },
                    audio: {
                        purchaseCancelMinLimit: "A versão gratuita do UniConverter Online só pode fazer upload de um tamanho máximo de áudio de #### MB. Por favor, compre online e obtenha um tamanho de áudio ilimitado.",
                        cancelMinLimit: "O UniConverter online só oferece suporte para áudio com no máximo #### MB. Use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop.",
                        cancelMaxLimit: "O UniConverter online só oferece suporte para áudio com no máximo #### MB. Use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop."
                    },
                    notSupport: "UniConverter online não suporta este formato. Por favor, use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop.",
                    zeroSize: "Por fovor, não uopload arquivos de tamanho 0!",
                    uploadFail: "Desculpe, os seus ficheiros de vídeo não foram importados, tente novamente.",
                    incorrectUrl: "Tipo incorreto de URL.",
                    dropBoxLogIn: "Faça login no UniConverter online antes de enviar o (s) arquivo (s) do Dropbox.",
                    googleDriveLogIn: "Faça login no UniConverter online antes de enviar arquivo (s) do Google Drive.",
                    youtubeLogIn: "Faça login no UniConverter online para editar vídeo (s) do YouTube colando o URL.",
                    youtubeConversionCount: "Você editou vídeos online por #### vezes. Atualize para a versão Premium e remova a limitação.",
                    chooseFiles: "Selecione o arquivo",
                    cancel: "Cancelar",
                    Loading: "Carregando",
                    Processing: "Em processamento"
                },
                reverseVideo: {
                    reverseSpeed: "Velocidade reversa",
                    muteVideo: "Silenciar video",
                    soundOptions: "Opções de som",
                    reverse: "Reverter",
                    finalDuration: "Duração final",
                    duration: "Duração",
                    play: "REPRODUZIR",
                    stop: "Pausa",
                    reverseingYourVideo: "Processando ... Por favor aguarde.",
                    reverseFileAgain: "Reverter ARQUIVO NOVAMENTE",
                    reverseAnotherVideo: "Reverter OUTRO VÍDEO"
                },
                conver: {
                    showAccountText1: "Faça login no Online UniConverter (originalmente Media.io) para aproveitar o serviço de adesão que você pode obter a notificação por e-mail após a conclusão da tarefa de conversão.",
                    showAccountText2: "O UniConverter online não suporta este formato. Use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para desktop. ",
                    showAccountText3: "Você converteu arquivos mais de #### vezes em um dia. Converta os arquivos amanhã ou inscreva-se para remover a limitação.",
                    showPopWindowText1: "O UniConverter online permite apenas #### conversões simultâneas. Faça o download do conversor de vídeo para desktop - UniConverter para converter mais arquivos simultaneamente.",
                    showPopWindowText2: "O UniConverter online só oferece suporte a vídeos com até #### MB. Use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para desktop.",
                    showPopWindowText3: "A versão gratuita do UniConverter online só pode carregar um tamanho máximo de vídeo de #### MB, atualize para a versão premium para remover a limitação.",
                    showPopWindowText4: "Você converteu arquivos mais de #### vezes em um dia. Por favor, use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop para remover esta limitação, ou converta arquivos amanhã.",
                    showPopWindowText5: "A versão gratuita do UniConverter Online só pode converter arquivos #### vezes por dia, por favor atualize para a versão premium para remover a limitação, ou converta arquivos amanhã.",
                    converterdFilesLogIn: "Faça o login no UniConverter Online (originalmente Media.io) para desfrutar de um serviço de membro que você pode baixar e excluir os arquivos convertidos.",
                    convert: "Converter",
                    to: "para",
                    download: "Baixar",
                    toggleDropdown: "Alternar lista suspensa ",
                    converting: "Convertendo",
                    uploading: "Carregando",
                    pleaseWait: "Por favor, aguarde",
                    retry: "Tente novamente",
                    ready: "Pronto",
                    downloadAll: "Baixar Tudo",
                    notifyMe: "Notifique-me quando estiver terminado",
                    addMoreFiles: "Adicionar Mais Arquivos",
                    chooseFiles: "Escolher Arquivos",
                    fromDropbox: "Do Dropbox",
                    fromGoogleDrive: "Do Google Drive",
                    hours24_1: "Os arquivos serão armazenados por 24 horas. Ir para",
                    hours24_2: "Arquivos Convertidos",
                    hours24_3: "para excluir manualmente.",
                    FileConversionFailed: "A conversão de arquivos falhou, favor usar o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop.",
                    delete: "Excluir",
                    preview: "Antevisão"
                },
                loopVideo: {
                    duration: "Duração",
                    play: "PLAY",
                    stop: "PARAR",
                    trimYouVideo: "Corte seu vídeo",
                    startTime: "Hora de Ínício",
                    endTime: "Tempo Final",
                    loopClip: "Solte este clipe",
                    finalDuration: "Duração final",
                    loopingYourVideo: "Looping do seu vídeo",
                    loop: "LOOP",
                    loopFileAgain: "ARQUIVO DE LAÇO DE NOVO",
                    loopAnotherVideo: "LOOP OUTRO VÍDEO",
                    cutTime: "A versão gratuita do Online UniConverter só pode aparar vídeo em não mais do que #### s. Por favor, atualize para a versão Premium para remover a limitação."
                },
                speedVideo: {
                    duration: "Duração",
                    speed: "Velocidade",
                    finalDuration: "Duração final",
                    soundOptions: "Opções de som",
                    muteVideo: "Vídeo Mudo",
                    start: "INICIAR",
                    speedFileAgain: "ARQUIVO DE VELOCIDADE NOVAMENTE",
                    speedAnotherVideo: "ACELERAR OUTRO VÍDEO"
                },
                youtubeUrl: {
                    go: "IR",
                    createYoutubeThumbnail: "Clique aqui para criar uma miniatura do youtube",
                    rightClick: 'Clique com o botão direito do mouse sobre a imagem e selecione "Salvar imagem como..."',
                    noLogIn: "Faça o login no UniConverter Online para baixar mais miniaturas do YouTube.",
                    noLongInType: "UploadLimit_Youtube",
                    noVipTip: "A versão gratuita do UniConverter Online só pode suportar o download da miniatura do YouTube 5 vezes, favor atualizar para a versão premium para remover a limitação.",
                    noYoutubeUrl: "Desculpe, nós só apoiamos a URL do YouTube.",
                    noImgTip: "Por favor, verifique a URL que você digitou. Ou você pode usar o Wondershare UniConverter para desktop.",
                    errorUrl: "O tipo incorreto de URL."
                },
                cutter: {
                    onlyDesktop: "O cortador de áudio Online UniConverter (originalmente Media.io) está disponível apenas para desktop agora.",
                    onYourComputer: "Por favor, aproveite com Chrome ou Firefox em seu computador.",
                    loading: "Carregando",
                    size: "Tamanho",
                    duration: "Duração",
                    cut: "CORTE",
                    from: "De",
                    to: "Para",
                    mode: "Modo",
                    keep: "Manter",
                    remove: "Remover",
                    fade: "Desvanecer",
                    fadeIn: "Fade In",
                    fadeOut: "Fade Out",
                    processing: "Processamento",
                    "waitMoment.": "por favor aguarde um momento.",
                    cuttingYourAudio: "Estamos cortando seu áudio",
                    fileReady: "Seu arquivo de áudio está pronto",
                    editFileAgain: "EDITAR ARQUIVO NOVAMENTE",
                    cutAnotherAudio: "CORTAR OUTRO ÁUDIO"
                },
                compress: {
                    showAccountText1: "Faça login no Online UniConverter (originalmente Media.io) para aproveitar o serviço de adesão que você pode obter a notificação por e-mail após a conclusão da tarefa de compactação. ",
                    showAccountText2: "Você compactou arquivos mais de #### vezes em um dia. Converta os arquivos amanhã ou inscreva-se para remover esta limitação.",
                    showPopWindowText1: "O UniConverter online permite apenas 1 compactação simultânea. Use Wondershare UniConverter para Desktop para compactar vários arquivos ao mesmo tempo.",
                    showPopWindowText2: "O UniConverter online não suporta este formato. Use Wondershare UniConverter (originalmente Wondershare Video Compressing Ultimate) para desktop.",
                    showPopWindowText3: "O UniConverter online só oferece suporte a vídeos com até #### MB. Use Wondershare UniConverter (originalmente Wondershare Video Compressing Ultimate) para desktop.",
                    showPopWindowText4: "A versão gratuita do UniConverter online só pode carregar um tamanho máximo de vídeo de #### MB, atualize para a versão premium para remover a limitação.",
                    showPopWindowText5: "Você compactou arquivos mais de #### vezes em um dia. Por favor, use Wondershare UniConverter (originalmente Wondershare Video Compressing Ultimate) para desktop para remover esta limitação, ou converter arquivos amanhã.",
                    showPopWindowText6: "A versão gratuita do UniConverter Online pode compactar arquivos apenas #### vezes em um dia, atualize para a versão premium para remover a limitação ou continue amanhã.",
                    compressedSuccess: "Comprimido com sucesso",
                    outputSettings: "Configurações de saída",
                    quality: "Qualidade",
                    resolution: "Resolução",
                    source: "FONTE",
                    resetSize: "Redefinir tamanho",
                    format: "Formato",
                    retry: "Tente novamente",
                    download: "baixar",
                    toggleDropdown: "Alternar lista suspensa",
                    compressNew: "Comprimir Novo",
                    compressing: "Comprimindo",
                    compress: "Comprimir",
                    pleaseWait: "Por favor, aguarde",
                    notifyMe: "Notifique-me quando estiver terminado",
                    addMoreFiles: "Adicionar mais arquivos",
                    uploading: "Carregando",
                    save: "salvar",
                    moreSettings: "Mais Configurações",
                    finished: "Terminado",
                    uploadTipsHTML: "Você pode carregar arquivos até @@@@ MB, <a href class='link'>escolha um plano</a> para obter mais.",
                    uploadTipsText: "Você pode carregar arquivos até @@@@ MB, escolha um plano para obter mais."
                },
                img: {
                    showPopWindowText1: "O UniConverter online não suporta este formato. Use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para desktop.",
                    showPopWindowText2: "O UniConverter online só permite compactar #### arquivos de imagem ao mesmo tempo. Baixe a versão desktop do Wondershare UniConverter para remover a limitação.",
                    showPopWindowText3: "O UniConverter online só permite compactar #### arquivos de imagem ao mesmo tempo. Atualize para a versão premium para remover a limitação. ",
                    showPopWindowText4: "O UniConverter online só permite a conversão de #### imagens ao mesmo tempo. Baixe a versão desktop do Wondershare UniConverter para remover a limitação.",
                    showPopWindowText5: "O UniConverter online só permite a conversão de #### imagens ao mesmo tempo. Atualize para a versão premium para remover a limitação.",
                    showPopWindowText6: "O UniConverter online só permite o upload de uma imagem com até #### MB. Faça login para remover a limitação.",
                    showPopWindowText7: "Você já compactou as imagens #### vezes em um dia. Continue a compactação da imagem amanhã ou faça login para remover a limitação",
                    showPopWindowText8: "Você já converteu imagens #### vezes em um dia. Continue as conversões de imagens amanhã ou faça login para remover a limitação.",
                    showPopWindowText9: "Você já compactou as imagens #### vezes em um dia. Continue a compactação da imagem amanhã ou use a versão para desktop do Wondershare UniConverter para remover esta limitação.",
                    showPopWindowText10: "Você já compactou as imagens #### vezes em um dia. Continue amanhã ou atualize para a versão premium para remover a limitação.",
                    showPopWindowText11: "Você já converteu imagens #### vezes em um dia. Continue as conversões de imagem amanhã ou use a versão para desktop do Wondershare UniConverter para remover esta limitação.",
                    showPopWindowText12: "Você já converteu imagens #### vezes em um dia. Continue amanhã ou atualize para a versão premium para remover a limitação.",
                    compressorImg: "Você tem imagens comprimidas sobre #### vezes em um dia. Por favor, tente comprimir mais imagens amanhã, ou inscreva-se gratuitamente para remover a limitação.",
                    converterImg: "Você já converteu arquivos em #### vezes em um dia. Por favor, tente converter mais imagens amanhã, ou inscreva-se gratuitamente para remover a limitação.",
                    compressing: "COMPRESSANDO",
                    converting: "CONVERTANDO",
                    download: "baixar",
                    toggleDropdown: "Alternar lista suspensa",
                    uploading: "Carregando",
                    retry: "Tente novamente",
                    ready: "Pronto",
                    to: "para",
                    downloadAll: "Baixar Tudo",
                    addMoreFiles: "Adicionar mais arquivos",
                    chooseFiles: "Escolha os arquivos",
                    fromDropbox: "Do Dropbox",
                    fromGoogleDrive: "Do Google Drive",
                    keepOriginalSize: "Manter o tamanho original",
                    customSize: "Tamanho personalizado",
                    to16_8000: "Favor inserir largura ou altura de pixel entre 16 e 8000",
                    convertAllFilesTo: "Converter todos os arquivos em",
                    deleteAll: "EXCLUIR TUDO",
                    compress: "COMPRIMIR",
                    convert: "CONVERTER"
                },
                gif: {
                    showAccountText1: "O UniConverter online só permite o upload de uma imagem com até #### MB. Faça login para remover a limitação",
                    showAccountText2: "Você já criou GIF #### vezes em um dia. Por favor, tente fazer mais GIF amanhã, ou faça o login para remover a limitação.",
                    showAccountText3: "Você já criou GIF #### vezes em um dia. Continue amanhã ou faça login para remover a limitação.",
                    showPopWindowText1: "O UniConverter online só permite o upload de #### imagens ao mesmo tempo para fazer um GIF. Por favor, experimente a versão desktop Wondershare UniConverter para remover a limitação.",
                    showPopWindowText2: "O UniConverter online só permite o upload de #### imagens ao mesmo tempo para fazer um GIF. Atualize para a versão premium para remover a limitação.",
                    showPopWindowText3: "O UniConverter online não suporta este formato. Use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para desktop.",
                    showPopWindowText4: "Você já criou GIF #### vezes em um dia. Por favor, tente fazer mais GIF amanhã, ou use Wondershare UniConverter para desktop para remover a limitação.",
                    showPopWindowText5: "Você já criou GIF #### vezes em um dia. Tente fazer mais GIF amanhã ou atualize para a versão premium para remover a limitação.",
                    showPopWindowText6: "Desculpe, a conversão GIF falhou. Use a versão para desktop do Wondershare UniConverter para converter imagens para GIF com sucesso.",
                    showPopWindowText7: "Apenas um tipo de marca d'água é suportado, use a versão desktop do Wondershare UniConverter para adicionar mais marcas d'água.",
                    showPopWindowText8: "O UniConverter online só permite o envio de um vídeo com até #### MB. Use a versão de desktop Wondershare UniConverter para upload de vídeo grande.",
                    showPopWindowText9: "O UniConverter online só permite o envio de um vídeo com até #### MB. Atualize para a versão premium para remover a limitação.",
                    showPopWindowText10: "Desculpe, mas os seus ficheiros de vídeo não foram importados, tente novamente",
                    showPopWindowText11: "Desculpe, sua busca de vídeo do Youtube falhou, tente novamente.",
                    showPopWindowText12: "O tipo incorreto de URL. Desculpe, só apoiamos vídeos do YouTube para GIF.",
                    showPopWindowText13: "Você criou GIF a partir de vídeos online por #### vezes, continue amanhã ou use o Wondershare UniConverter para desktop.",
                    showPopWindowText14: "Você criou GIF a partir de vídeos online por #### vezes, continue amanhã ou atualize para a versão premium para remover a limitação.",
                    showPopWindowText15: "Faça login no UniConverter online para criar GIF de vídeo (s) do YouTube colando URL.",
                    showPopWindowText16: "A duração do seu GIF atual é maior que o limite de #### segundos para o UniConverter Online, use a versão desktop do Wondershare UniConverter para remover a limitação.",
                    showPopWindowText17: "Desculpe, a conversão de GIF falhou. Use a versão desktop do Wondershare UniConverter para criar GIF com sucesso.",
                    showPopWindowText18: "Desculpe, a conversão GIF falhou. Use a versão de desktop Wondershare UniConverter para criar GIF com sucesso.",
                    download: "baixar",
                    toggleDropdown: "Alternar lista suspensa",
                    imagesToGif: "Imagens para GIF",
                    videoToGif: "Vídeo para GIF",
                    loading: "Carregando",
                    cancel: "Cancelar",
                    makingGif: "Criando GIF",
                    suspended: "SUSPENSO",
                    play: "PLAY",
                    width: "Largura",
                    height: "Altura",
                    pixels: "pixels",
                    widthRangePixels: "O intervalo de largura é de 50-500 pixels.",
                    heightRangePixels: "O intervalo de altura é de 50-500 pixels.",
                    frameRate: "Taxa de quadros",
                    fps: "fps",
                    fpsTip: "Quanto mais alto o fps, mais suave se torna sua animação. Você pode defini-la entre 1-30.",
                    textWatermark: "Marca d'água de texto",
                    createGif: "Criar GIF",
                    createNewGif: "CRIAR NOVO GIF",
                    remakeGif: "REMAKE GIF",
                    trimYourVideo: "Corte o seu vídeo",
                    timeTip: "Use o controle deslizante para selecionar a duração do GIF ou insira a hora de início e a hora de término com precisão.",
                    StartTime: "Hora de início",
                    endTime: "Tempo final",
                    outputSize: "Tamanho de saída",
                    fpsMeans: "Fps significa a quantos quadros por segundo seu GIF final funcionará. Quanto mais alto o fps, mais suave se torna sua animação.",
                    imageWatermark: "Marca d'água de imagem"
                },
                mute: {
                    showAccountText1: "Você converteu arquivo (s) de vídeo mais de #### vezes em um dia. Por favor, tente converter mais arquivos amanhã. ou inscreva-se gratuitamente para remover a limitação.",
                    showAccountText2: "Faça login no UniConverter on-line para silenciar os vídeos do YouTube colando o URL",
                    showPopWindowText1: "O UniConverter online não suporta este formato. Use a versão para desktop do Wondershare UniConverter para silenciar seus vídeos.",
                    showPopWindowText2: "O UniConverter online só pode enviar um vídeo para #### MB, se for maior do que este tamanho, tente Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) versão desktop para upload de arquivos grandes.",
                    showPopWindowText3: "A versão gratuita do UniConverter online só pode carregar um tamanho máximo de vídeo de #### MB, atualize para a versão premium para remover a limitação.",
                    showPopWindowText4: "A versão gratuita do UniConverter Online só permite converter vídeo (s) ou imagem (ns) #### vezes em um dia. atualize para a versão premium para remover a limitação. ou converta arquivos amanhã.",
                    showPopWindowText5: "Desculpe, mas os seus ficheiros de vídeo não foram importados, tente novamente",
                    showPopWindowText6: "O UniConverter online só pode enviar um vídeo para #### MB, se for maior do que este tamanho, tente Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) versão desktop para upload de arquivos grandes.",
                    showPopWindowText7: "Tipo incorreto de URL. Desculpe, só suportamos vídeos do YouTube para GIF.",
                    showPopWindowText8: "Você silenciou os vídeos online por #### vezes, atualize para a versão Premium e remova a limitação.",
                    showPopWindowText9: "Desculpe, a conversão de mudo falhou. Use a versão de desktop Wondershare UniConverter para criar Mute com sucesso.",
                    download: "baixar",
                    toggleDropdown: "Alternar lista suspensa",
                    mute: "Silenciar",
                    previewNot: "Não há previsão disponível.",
                    browserNotSupport: "Seu navegador não suporta este formato.",
                    muteAnother: "Mudo Outro"
                },
                user: {
                    user1: "Bem vindo de volta!",
                    user2: "Novo aqui? ",
                    user3: "Inscrição Gratuita",
                    user4: "Endereço de e-mail",
                    user5: "Senha",
                    user6: "Lembrar meu login",
                    user7: "Esqueceu a senha?",
                    user8: "Login",
                    user9: "Ou",
                    user10: "Entrar com",
                    user11: "Já tem uma conta?",
                    user12: "Entre aqui",
                    user13: "Código de verificação",
                    user14: "Clique no botão para enviar um código de verificação para o endereço de e-mail de entrada.",
                    user15: "Registre-se",
                    user16: "Por favor insira um endereço de e-mail válido.",
                    user17: "O email não pode estar vazio",
                    user18: "A senha deve ter de 6 a 16 caracteres ou números.",
                    user19: "A senha não pode estar vazia",
                    user20: "O código de verificação não pode estar vazio",
                    user21: "O nome não pode estar vazio",
                    user22: "Enviar código",
                    user23: "Nome do usuário",
                    user24: "Junte-se ao UniConverter online (originalmente Media.io) para desfrutar de melhores serviços gratuitos"
                },
                ediror: {
                    editText1: "Largue como se estivesse quente",
                    editText2: "Adicione seus arquivos soltando-os nesta janela",
                    editText3: "Arraste e solte ou pressione para adicionar vídeo",
                    editText4: "Saturação",
                    editText5: "Contraste",
                    editText6: "Brilho",
                    editText7: "Personalizado",
                    editText8: "1: 1 (quadrado)",
                    editText9: "4: 3 (TV clássica)",
                    editText10: "16:9 (Tela larga)",
                    editText11: "Horizontal",
                    editText12: "Vertical",
                    editText13: "Vídeo",
                    editText14: "Nenhum resultado de pesquisa",
                    editText15: "Áudio",
                    editText16: "Sentido Contrário",
                    editText17: "Sentido horário",
                    editText18: "Carregando ...",
                    editText19: "Cancelar",
                    editText20: "Tamanho",
                    editText21: "Duração",
                    editText22: "Resolução",
                    editText23: "Aparar",
                    editText24: "Cortar",
                    editText25: "Ajustar",
                    editText26: "Girar",
                    editText27: "Virar",
                    editText28: "Salvar em",
                    editText29: "Começar",
                    editText30: "Processadora",
                    editText31: "Editar outro vídeo",
                    editText32: "Você já editou vídeos 5 vezes em um dia. Continue amanhã ou faça login para remover a limitação.",
                    editText33: "O UniConverter online não suporta este formato. Por favor, use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop.",
                    editText34: "O UniConverter online só oferece suporte a vídeos com até #### MB. Use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para desktop.",
                    editText35: "O UniConverter online só oferece suporte a vídeos com até #### MB. Use Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para desktop.",
                    editText36: "Você já editou vídeos #### vezes em um dia. Continue amanhã ou use o Wondershare UniConverter para desktop para remover a limitação.",
                    editText37: "O UniConverter online não suporta este formato. Use Wondershare UniConverter para desktop.",
                    editText38: "Salve",
                    editText39: "Imagem",
                    editText40: "Vetor"
                },
                nav: {
                    navText1: "Centro do Usuário",
                    navText2: "Sair",
                    navText3: "Registre-se",
                    navText4: "Inscrição Gratuita",
                    navText5: "INSCREVA-SE POR 30 DIAS GRATUITOS",
                    convertedFiles: "Arquivos convertidos",
                    myAccount: "Minha conta"
                },
                popup: {
                    text1: "UniConverter para Desktop",
                    text2: "Converta de/para mais de 1.000 formatos de vídeo e áudio.",
                    text3: "Velocidade de conversão de vídeo 90x mais rápida.",
                    text4: "Comprima o vídeo para um tamanho menor sem limite de tamanho.",
                    text5: "Baixe vídeos da Internet de mais de 10.000 Webs com um clique.",
                    text6: "Converta imagens para JPG, PNG, TIFF, GIF, BMP sem limites.",
                    text7: "Compactar e personalizar imagens para JPG, PNG, TIFF, GIF, BMP sem limites.",
                    downloadWin: "https://download-pt.wondershare.com/uniconverter13_full9647.exe",
                    downloadMac: "https://download-pt.wondershare.com/uniconverter13-mac_full9648.zip",
                    text8: "Upgrade para Premium",
                    text9: "ANUAL",
                    text10: "€ 2.43",
                    text11: "EUR 4.00",
                    text12: "mês",
                    text13: "cancele a qualquer hora",
                    buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=8768&license_id=297&sub_lid=0&currency=EUR&language=Portuguese&verify=029345d18f23ff2aee048be1ad6e84ca",
                    text14: "POR MÊS",
                    text15: "€ 8.19",
                    text16: "mês",
                    text17: "cancele a qualquer hora",
                    buy_now_month: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=8768&license_id=294&sub_lid=0&currency=EUR&language=Portuguese&verify=23023e7b83f9e1c15e06ce3f08d44dc3",
                    text18: "500MB",
                    text19: "Tamanho máximo do arquivo",
                    text20: "30",
                    text21: "Conversões simultâneas",
                    text22: "Alta velocidade ",
                    text23: "Conversão",
                    text24: "Baixar",
                    text25: "Ilimitado",
                    text26: "Compressão de arquivo",
                    text26_1: "Notificação E-mail",
                    text27: "Mais vendidos",
                    text28: "Assinatura online de 1 ano",
                    text29: "Assinatura online de 1 mês",
                    text31: "Experimente de graça ",
                    text32: "Compre Agora",
                    text33: "https://uniconverter.wondershare.com.br/",
                    text34: "https://www.media.io/br/mobile-download-guidance.html"
                },
                resize: {
                    download: "baixar",
                    toggleDropdown: "Alternar lista suspensa",
                    loading: "Carregando",
                    cancel: "Cancelar",
                    byPixels: "Por pixels (px)",
                    byPercentage: "Por porcentagem (%)",
                    originalLockTip: "Clique em Bloquear / Desbloquear para manter a proporção original ou não.",
                    resize: "RESIZE",
                    lockTip: "Clique em ON/OFF de proporção da tela",
                    pixels16To8000: "Favor inserir a largura e a altura dos pixels entre 16 e 8000.",
                    percentage1To500: "Favor inserir a porcentagem de largura e altura entre 1 e 500.",
                    stretch: "Esticar",
                    stretchTip: "A(s) imagem(s) será(ão) esticada(s) para combinar com o novo tamanho.",
                    fill: "Preencher",
                    fillTip: "A(s) imagem(s) será(ão) cortada(s) para combinar com o novo tamanho.",
                    fit: "Fit",
                    fitTip: "A(s) imagem(s) será(ão) cortada(s) para se ajustar ao novo tamanho e as demais partes serão pintadas com a cor de fundo selecionada.",
                    selectColor: "Ao escolher a opção Fit, sua(s) imagem(s) será(ão) pintada(s) com a cor selecionada.",
                    resizingImages: "Redimensionamento das imagens",
                    resizedFail: "Suas imagens foram redimensionadas Falha",
                    resizedSuccess: "Suas imagens foram redimensionadas com sucesso",
                    sorryYourFiles: "Desculpe, seu(s) arquivo(s)",
                    resizedFailDownload: "redimensionado falhou, Favor baixar",
                    desktopVersion: "a versão desktop",
                    tryAgain: "para tentar de novo.",
                    resizeMore: "REDIMENSIONAR MAIS IMAGENS",
                    fitColor: "Cor adequada"
                },
                joiner: {
                    onlyDesktop: "O cortador de áudio Online UniConverter (originalmente Media.io) está disponível apenas para desktop agora.",
                    onYourComputer: "Desfrute-o com Chrome ou Firefox em seu computador.",
                    loading: "Carregando",
                    importFailed: "A importação falhou. Se você precisar continuar fundindo áudio, favor apagar o arquivo que falhou antes da fusão.",
                    fadeIn: "Clique para selecione/desselecionar o fade de áudio em.",
                    fadeInOut: "Clique para selecionar/desmarcar a fade in e fade out.",
                    fadeOut: "Clique para selecionar/desselecionar o áudio desbotado.",
                    startTime: "Hora de início",
                    endTime: "Tempo final",
                    waitMoment: "Estamos enviando arquivos, aguarde um momento.",
                    merge: "Fundir",
                    mergingYourAudio: "Estamos mesclando seus arquivos de áudio",
                    fileReaded: "Seu arquivo de áudio foi lido",
                    editFileAgain: "EDITAR ARQUIVO NOVAMENTE",
                    mergeAnother: "FUNDIR OUTRO",
                    joinCountFree: "Você já editou arquivos #### vezes em um dia. Faça o login para remover a limitação. ou edite mais arquivos amanhã.",
                    joinCountLogin: "Você já editou arquivos #### vezes em um dia. Por favor, use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop. ",
                    fileNumFree: "O UniConverter Online gratuito só permite que os arquivos #### sejam fundidos de cada vez. Por favor, atualize para a versão Premium e remova a limitação.",
                    fileNumLogin: "O UniConverter Online só permite que os arquivos #### sejam fundidos de cada vez. Por favor, use o Wondershare UniConverter (originalmente Wondershare Video Converter Ultimate) para Desktop."
                },
                editorVideo: {
                    mergeVideos: "Fundir Vídeos",
                    slideshowMaker: "Criador de Slides",
                    addAudioToVideo: "Adicionar Áudio ao Vídeo",
                    merge: "FUNDIR",
                    addFiles: "Adicionar Arquivos",
                    addAudio: "Adicionar áudio",
                    fitWithBorder: "Ajustar com borda",
                    zoomCrop: "Zoom & Corte",
                    setting: "Configurações",
                    goBack: "Voltar",
                    audioOption: "Opções de áudio",
                    cropOptions: "Opções de corte",
                    Crossfade: "Crossfade",
                    instagramVideo: "Vídeo do Instagram",
                    youTubeVideo: "Vídeo do YouTube",
                    instagramStory: "História do Instagram",
                    facebookVideo: "Vídeo do Facebook",
                    imageDuration: "Duração da imagem",
                    transition: "Transição",
                    applyAllImg: "Aplica-se a todas as imagens",
                    outputFormat: "Formato de saída",
                    trimAudio: "Aparar Áudio",
                    audioTrackVolume: "Volume da trilha de áudio",
                    videoSoundVolume: "Volume do som do vídeo",
                    startTime: "Início",
                    endTime: "Fim",
                    empty_file: "Desculpe, o seu vídeo não foi manipulado de nenhuma forma, <br/>por favor, vá para as Ferramentas Online."
                },
                memeGenerator: {
                    "meme-generator": "Cortar áudio",
                    template: "Modelo",
                    Create: "Gerar",
                    OriginalSize: "Tamanho original",
                    FormateNotSupport: "Desculpe, o Uniconverter Online não suporta este formato de imagem, por favor carregue outro arquivo de imagem.",
                    ResizeFor: "Redimensionar para",
                    OutputSettings: "Configurações de saída",
                    UploadGifFail: "Lamentamos, mas o seu ficheiro GIF falhou ao importar, tente novamente.",
                    UploadFail: "Desculpe, seu arquivo de imagem falhou ao importar, por favor tente novamente.",
                    GenerateFail: "Desculpe, seu meme falhou ao gerar, por favor, tente novamente.",
                    onlyDesktop: "O gerador de meme online Uniconverter (originalmente Media.io) está disponível apenas para computador pessoal agora.",
                    onYourComputer: "Divirta-se com o Chrome ou Firefox no seu computador.",
                    downloadText: "Parabéns! Seu meme está pronto para download.",
                    enterYourText: "Digite o seu texto",
                    textPlaceholder: "TEXTO AQUI",
                    topTextPlaceholder: "ACIMA O TEXTO AQUI",
                    bottomTextPlaceholder: "TEXTO INFERIOR AQUI"
                },
                removeWatermark: {
                    wrapperTitle: "Remover marca d'água",
                    Generator: "Remover marca d'água",
                    AddArea: "Adicionar uma zona",
                    Watermark: "Marca d'água",
                    Duration: "Duração",
                    emptyText: "Clicar em 'Adicionar área' para selecionar a área no vídeo que você deseja remover a marca d'água.",
                    limitTips: "Desculpe, apoiamos apenas a remoção de 10 marcas d'água. Por favor, selecione um serviço premium abaixo.",
                    downloadText: "Parabéns! A marca d'água foi removida!",
                    errorTips: "Desculpe, sua marca d'água não conseguiu remover, por favor tente novamente.",
                    beforeDownload: "Desculpe, você precisa fazer o login antes de fazer o download."
                },
                addWatermark: {
                    addWatermark: "Adicionar marca d'água",
                    Text: "Texto",
                    Image: "Imagem",
                    add: "Adicionar",
                    textStyle: "Estilo de Texto",
                    textColor: "Cor do Texto",
                    Opacity: "Opacidade",
                    Background: "Fundo",
                    Duration: "Duração",
                    textPlaceholder: "Digitar seu texto",
                    downloadText: "Parabéns! A marca de água foi adicionada!",
                    errorTips: "Desculpe, sua marca d'água falhou em adicionar, por favor tente novamente."
                },
                app: {
                    historyVideos: "Vídeos de histórico",
                    viewAllFiles: "Ver todos os meus arquivos",
                    downloadTitleText: "Processado com sucesso!"
                },
                vocalRemover: {
                    customParseTitle: "Processamento de áudio…",
                    customParseDesc: "O algoritmo de inteligência artificial agora funciona, pode demorar um minuto.",
                    customParseSuccess: "Parabéns! Seu áudio está pronto para download.",
                    downloadFile: "Você pode visualizar e baixar o áudio agora",
                    instrumental: "Instrumental",
                    vocals: "Vocais"
                },
                PricingPanel: {
                    SavePrice: "Save Up to 60%",
                    Month: "/mo",
                    BilledAnnually: "Billed xxx annually",
                    CurPlan: "Current Plan",
                    SignUp: "SIGN UP",
                    BuyNow: "BUY NOW",
                    Features: "See All Plan Features",
                    PurchasedClick: "If you have purchased, please click 'Yes' to active",
                    Account: "Your Account: ",
                    UserPlan: "xxx Plan",
                    ExpiredTime: "Until xxx",
                    RefreshTips: "Refresh your account information again",
                    No: "No",
                    Yes: "Yes",
                    GotIt: "Got it"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "Pay As You Go",
                    OnlyFor: "Only for {msg}",
                    PurchaseValid: "Purchase valid for 1 year",
                    Benefits: "Customer benefits"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "Video Editor",
                    UploadText1: "Up to",
                    VideoEditorFreeText1: "Export with watermark",
                    VideoEditorFreeText2: "min video exports",
                    VideoEditorFreeText3: "mins for Speech-to-text",
                    VideoEditorFreeText4: "characters for Text-to-speech",
                    Compress: "Compress & Converter",
                    CompressFreeText1: "for converter",
                    CompressFreeText2: "for compressor",
                    CompressFreeText3: "times limited",
                    AudioEditor: "Audio Tools",
                    AudioEditorFreeText2: "times per day",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText1: "hours per month",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "Export with watermark",
                    VideoEditorLiteFreeText2: "min video exports",
                    VideoEditorLiteFreeText3: "for uploading",
                    VideoEditorLiteFreeText4: "characters/mo for Text-to-speech",
                    VideoEditorLiteFreeText5: "export",
                    Convert: "Compressor & Converter & More",
                    ConvertFreeText1: "video upload",
                    ConvertFreeText2: "times",
                    TTS: "Text-To-Speech",
                    TTSFreeText1: "Characters",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    UnlimitedTimes: "Unlimited times"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Save 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    VideoEditorFreeText2: "hour video exports",
                    VideoEditorFreeText4: "hrs/mo for Speech-to-text",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    VideoEditorBasicText1: "hours/mo for Speech-to-text",
                    LimitedTime: "usage time",
                    TTSTips: "Characters/mo",
                    Month: "Monthly",
                    Annual: "Annually"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(Save 67%)",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)"
                },
                PRICING_TIPS: {
                    Default: "Choose Your Plan",
                    ConvertingNum: "You can ### 2 files at the same time",
                    DayLimit: "Your free trial is over",
                    MaxSize: "File is too large(xxx)",
                    Subtitle: "Your auto-generated subtitles are running out of time",
                    Transcription: "Buy More Auto-transcription Time",
                    ConvertFileTips: "Your account only supports videos no more than @@@.",
                    FileNumUpgradeTips: "Wanna ### more files at the same time? upgrade now!",
                    DefaultUpgradeTips: "Please wait for them or upgrade now.",
                    ConvertUpgradeTips: "Please upgrade to continue.",
                    TimeUpgradeTips: "Upgrade to convert and compress more files.",
                    TTSTips: "Oops, your free trial is over",
                    TTSUpgradeTips: "Please buy more characters",
                    FileSizeExceedTips: "File is too large",
                    FileSizeLimit: "The file size exceeds the free limit.",
                    UpgradeSignTips: "Please sign up to continue uploading large files or upgrade your account.",
                    UpgradeTips: "Please upgrade and continue uploading.",
                    FileOver: "To ensure the editing experience, uploading files over 2G is not supported for now.",
                    FileDuration: "The max export limit duration is 2 hours, so you will have to split the video into smaller clips and try again.",
                    FileLength: "Your video length exceeds the free limit."
                },
                PRICING_STT: {
                    NAME: "Speech-To-Text",
                    DETAILS1: "Auto subtitle and transcription",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Hrs",
                    UNIT2: "/hour",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "/image",
                    PLAN1: "Available Subtitles Time: ",
                    PLAN2: "Available Text-To-Speech Characters: ",
                    PLAN3: "Available credits: "
                },
                PRICING_TTS: {
                    NAME: "Text-To-Speech",
                    DETAILS1: "AI automatic transcription",
                    DETAILS2: "Support 16 Languages (Continually Updated)",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Characters",
                    UNIT2: " ",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "image",
                    PLAN1: "Available Text-To-Speech Characters:"
                },
                PRICING_BG: {
                    NAME: "Remove Background for Images",
                    DETAILS1: "Removing the background from 1 image requires 1 credits.",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "credits",
                    UNIT2: "/image",
                    PLAN1: "Available credits:"
                },
                PRICING_HELP: {
                    STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                    TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                    BG: "The valid period after purchasing Remove Background feature is one year. This plan does not include other premium rights of Media.io."
                }
            }
        },
        246: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "Bestätigen Sie den Abbruch?",
                    swalOK: "Ja",
                    swalNO: "Nein",
                    swalSuccess: "Sind Sie sicher, dass Sie diesen Task löschen möchten?",
                    deleteAllTask: "Sind Sie sicher, dass Sie alle Tasks löschen möchten?",
                    download: "Herunterladen",
                    otherTools: "Andere Werkzeuge",
                    editAgain: "ERNEUT BEARBEITEN",
                    editNewFile: "NEUE DATEI BEARBEITEN",
                    readyDownload: "Herzlichen Glückwunsch! Ihr Video steht zum Download bereit.",
                    downloadAll: "Alle herunterladen",
                    converterMoreFiles: "WEITERE DATEIEN KONVERTIEREN",
                    saveTo: "Speichern unter",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "Vorschau ist nicht verfügbar.",
                    browserNotSupport: "Ihr Browser unterstützt dieses Format nicht.",
                    signUpFree: "Kostenlos registrieren",
                    signUpSuccess: "Herzliche Glückwünsche! \nSie haben jetzt erfolgreich eine 30-Tage-Mitgliedschaft erhalten!",
                    makeFail: "Entschuldigung, Ihre Dateigenerierung ist fehlgeschlagen, bitte versuchen Sie es erneut.",
                    freeUseTimes: "Sie haben an einem Tag Dateien #### Mal bearbeitet. Bitte melden Sie sich an, um die Einschränkung aufzuheben oder bearbeiten Sie morgen weitere Dateien",
                    loginUseTimes: "Sie haben an einem Tag Dateien #### Mal bearbeitet. Bitte erwerben Sie online eine Lizenz, um die Einschränkung aufzuheben",
                    Processing: "Processando, por favor, espere."
                },
                chooseRightPlan: {
                    sizeMinLimit: "Die Datei ist zu groß! (####). Das kostenlose Konto unterstützt nur Videos, die nicht größer als @@@@ MB sind. Bitte erwerben Sie einen Online-Plan, um mehr zu erhalten.",
                    sizeMaxLimit: "Die Datei ist zu groß! (####). Online UniConverter unterstützt nur Videos, die nicht größer als @@@@ MB sind. Bitte verwenden Sie Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    useTimeMinLimit: "Sie haben das Nutzungslimit von #### pro Tag überschritten. Bitte seufzen Sie oder wählen Sie unten einen Premium-Service aus.",
                    useTimeMaxLimit: "Sie haben das Nutzungslimit von #### pro Tag überschritten. Bitte wählen Sie unten einen Premium-Service aus.",
                    concurrentCountLimit: 'Ihr kostenloses Konto erlaubt nur #### gleichzeitige Konvertierungen. Bitte klicken Sie auf "Konvertieren" fortzufahren, oder erwerben Sie einen aktualisierten Online-Plan.',
                    compressConcurrentCountLimit: "Ihr kostenloses Konto erlaubt nur #### gleichzeitige Komprimierungen. Bitte klicken Sie auf die Schaltfläche Komprimieren fortzufahren, oder erwerben Sie einen aktualisierten Online-Plan.",
                    choose_right_plan: "Wählen Sie den richtigen Plan"
                },
                uploadConvertText: {
                    uploadTitle: "Ihrer Dateien werden hochgeladen...",
                    convertTitle: "Ihrer Dateien werden konvertiert...",
                    compressTitle: "Ihrer Dateien werden Komprimiert...",
                    convertSuccess: "Vollständig konvertiert!",
                    compressSuccess: "Vollständig komprimiert!",
                    downloadFile: "Sie können das Video jetzt ansehen und herunterladen",
                    desc: "Warten Sie bitte einen Moment"
                },
                compressSetting: {
                    compressionMethod: "Komprimierungsverfahren",
                    byFileSize: "Nach Dateigröße",
                    byVariable: "Mit variabler Bitrate",
                    byAutomatic: "nach Automatisch",
                    highQuality: "Hohe Qualität",
                    mediumQuality: "Mittlere Qualität",
                    lowQuality: "Niedrige Qualität",
                    fileSize: "Dateigröße (MB)",
                    smallSize: "Kleine Größe",
                    betterQuality: "Bessere Qualität"
                },
                functionTab: {
                    muteVideo: "Video stummschalten",
                    videoSpeed: "Videogeschwindigkeit",
                    loopVideo: "Video-Loop erstellen",
                    audioCutter: "Audio Cutter",
                    audioJoiner: "Audio Joiner",
                    imagesToGif: "Bilder zu GIF",
                    videoToGif: "Video zu GIF",
                    imageResizer: "Image Resizer",
                    reverseVideo: "Video umkehren",
                    mergeVideo: "Video zusammenführen",
                    slideshowMaker: "Diashow-Hersteller",
                    addAudioToVideo: "Audio zum Video hinzufügen",
                    removeWatermark: "Wasserzeichen entfernen",
                    addWatermark: "Wasserzeichen hinzufügen"
                },
                dialog: {
                    cancel: "Abbruch",
                    ok: "OK",
                    setting: "Einstellung",
                    video: "Auf alle Videokonvertierungen anwenden",
                    audio: "Auf alle Audiokonvertierungen anwenden",
                    image: "Auf alle Bildkonvertierungen anwenden",
                    vector: "Auf alle Vektorkonvertierungen anwenden",
                    keepOriginSize: "Ursprüngliche Größe beibehalten",
                    videoText: "Video",
                    audioText: "Audio",
                    imageText: "Bild",
                    customSize: "Benutzerdefinierte Größe",
                    encoder: "Encoder",
                    resolution: "Auflösung",
                    frameRate: "Frame Rate",
                    bitrate: "Bitrate",
                    channel: "Kanal",
                    sampleRate: "Sample Rate",
                    videoTips: "Wir stellen Ihnen standardmäßig die besten Parameter<br/> Einstellungen zur Verfügung.",
                    audioTips: "Wenn diese Option nicht aktiviert ist, hat das konvertierte<br/> Ausgangsvideo keinen Ton.",
                    imageTips: "Klicken Sie auf Sperren/Entsperren, um das ursprüngliche <br/>Seitenverhältnis beizubehalten oder nicht.",
                    inputEmail: "Bitte geben Sie Ihre Email-Adresse ein",
                    trim: "Trimmen",
                    trimTips: "Sie können den Start- und Endpunkt des Trimmens angeben."
                },
                notify: {
                    title: "Herzlichen Glückwunsch！Vielen Dank für Ihre E-Mail-Registrierung.",
                    message: "Die Download-Adresse senden wir Ihnen nach dem Abschluss der Aufgabe zu."
                },
                convertedFiles: {
                    convertedFiles: "Konvertierte Dateien",
                    fileStore24Hours: "Dateien werden für 24 Stunden gespeichert",
                    name: "Name",
                    size: "Größe",
                    operate: "Bedienen",
                    deleteAll: "Alle löschen",
                    nofiles: "Keine Datei, klicken Sie auf die Schaltfläche unten, um diese zu konvertieren!"
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Bitte melden Sie sich beim Online UniConverter (ursprünglich Media.io) kostenlos an, um in den Genuss einer Mitgliedschaft zu kommen, so dass Sie Ihr Bild über #### MB hinzufügen können."
                    },
                    video: {
                        purchaseCancelMinLimit: "Bei der kostenlosen Version des Online UniConverters kann nur eine maximale Videogröße von #### MB hochgeladen werden. Bitte abonnieren Sie online und erhalten Sie Zugriff auf eine unbegrenzte Videogröße.",
                        cancelMinLimit: "Der Online UniConverter unterstützt nur Videos mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                        cancelMaxLimit: "Der Online UniConverter unterstützt nur Videos mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop."
                    },
                    audio: {
                        purchaseCancelMinLimit: "Die kostenlose Version des Online UniConverters kann nur eine maximale Audiogröße von #### MB verarbeiten. Bitte abonnieren Sie online und erhalten Sie Zugriff auf eine unbegrenzte Audiogröße.",
                        cancelMinLimit: "Der Online UniConverter unterstützt nur Audios mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                        cancelMaxLimit: "Der Online UniConverter unterstützt nur Audios mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop."
                    },
                    notSupport: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    zeroSize: "Bitte laden Sie keine Dateien mit einer Größe von 0 hoch!",
                    uploadFail: "Es tut uns leid, Ihre Videodatei(en) konnten nicht importiert werden, bitte versuchen Sie es erneut.",
                    incorrectUrl: "Falscher URL Typ.",
                    dropBoxLogIn: "Bitte loggen Sie sich erst im Online Uniconverter ein, bevor Sie Datei(en) von Dropbox hochaden.",
                    googleDriveLogIn: "Bitte loggen Sie sich erst im Online Uniconverter ein, bevor Sie Datei(en) von Goole Drive hochaden.",
                    youtubeLogIn: "Bitte loggen Sie im Online UniConverter ein, um Ihre YouTube Videos durch Einfügen der URL zu bearbeiten.",
                    youtubeConversionCount: " Sie haben zum #### Mal online Videos zusammengefügt. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    chooseFiles: "Dateien auswählen",
                    cancel: "Abbrechen",
                    Loading: "Lädt",
                    Processing: "Verarbeitet"
                },
                reverseVideo: {
                    reverseSpeed: "Geschwindigkeit umkehren",
                    muteVideo: "Video stummschalten",
                    soundOptions: "Soundoptionen",
                    reverse: "Umkehren",
                    finalDuration: "Finale Dauer",
                    duration: "Dauer",
                    play: "ABSPIELEN",
                    stop: "STOPP",
                    reverseingYourVideo: "Verarbeitet, bitte warten.",
                    reverseFileAgain: "DATEI NOCHMALS umkehren",
                    reverseAnotherVideo: "EIN ANDERES VIDEO umkehren"
                },
                conver: {
                    showAccountText1: "Bitte melden Sie sich beim Online UniConverter (ursprünglich Media.io) an, um den Service für Mitglieder zu genießen, so dass Sie nach Beendigung der Konvertierungen E-Mail-Benachrichtigung erhalten können.",
                    showAccountText2: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    showAccountText3: "Sie haben über #### Dateien an einem Tag konvertiert. Bitte konvertieren Sie morgen wieder Dateien oder melden Sie sich an, um die Beschränkung aufzuheben.",
                    showPopWindowText1: "Es können nur #### Konvertierungen gleichzeitig bei den Online UniConverter durchgeführt werden. Bitte laden Sie den Wondershare UniConverter für den Desktop herunter, um mehrere Dateien gleichzeitig zu konvertieren.",
                    showPopWindowText2: "Der Online UniConverter unterstützt Videos mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    showPopWindowText3: "Die kostenlose Version des Online UniConverters kann nur eine maximale Videogröße von #### MB verarbeiten, bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText4: "Sie haben an einem Tag Dateien mehr als #### Mal konvertiert. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop, um diese Beschränkung aufzuheben oder konvertieren Sie morgen wieder Dateien.",
                    showPopWindowText5: "Die kostenlose Version des Online UniConverters kann Dateien nur #### mal an einem Tag konvertieren, bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben oder konvertieren Sie morgen wieder Dateien.",
                    converterdFilesLogIn: "Bitte melden Sie sich beim Online UniConverter (ursprünglich Media.io) an, um den Service für Mitglieder zu nutzen, so dass Sie die konvertierten Dateien herunterladen und löschen können.",
                    convert: "Konvertieren",
                    to: "zu",
                    download: "Download",
                    toggleDropdown: "Dropdown umschalten",
                    converting: "Konvertiert",
                    uploading: "Lädt hoch",
                    pleaseWait: "Bitte warten Sie",
                    retry: "Nochmal versuchen",
                    ready: "Bereit",
                    downloadAll: "Alle herunterladen",
                    notifyMe: "Mich nach Abschluss benachrichtigen",
                    addMoreFiles: "Weitere Dateien hinzufügen",
                    chooseFiles: "Dateien auswählen",
                    fromDropbox: "Von Dropbox",
                    fromGoogleDrive: "Von Google Drive",
                    hours24_1: "Dateien werden für 24 Stunden gespeichert. Gehen Sie zu",
                    hours24_2: "Konvertierte Dateien",
                    hours24_3: "um manuell zu löschen",
                    FileConversionFailed: "Dateikonvertierung fehlgeschlagen, bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    delete: "Löschen",
                    preview: "Vorschau"
                },
                loopVideo: {
                    duration: "Dauer",
                    play: "ABSPIELEN",
                    stop: "STOPP",
                    trimYouVideo: "Ihr Video trimmen",
                    startTime: "Startzeit",
                    endTime: "Endzeit",
                    loopClip: "Diesen Clip loopen",
                    finalDuration: "Finale Dauer",
                    loopingYourVideo: "Video-Loop wird erstellt",
                    loop: "Video-Loop",
                    loopFileAgain: "DATEI NOCHMALS LOOPEN",
                    loopAnotherVideo: "EIN WEITERES VIDEO-LOOP ERSTELLEN",
                    cutTime: "Die kostenlose Version von Online UniConverter kann das Video nur bis zu einer Länge von #### zuschneiden. Bitte aktualisieren Sie auf die Premium-Version und heben Sie die Einschränkung auf."
                },
                speedVideo: {
                    duration: "Dauer",
                    speed: "Geschwindigkeit",
                    finalDuration: "Finale Dauer",
                    soundOptions: "Sound Optionen",
                    muteVideo: "Mute Video",
                    start: "START",
                    speedFileAgain: "SPEED FILE AGAIN",
                    speedAnotherVideo: "SPEED ANOTHER VIDEO"
                },
                youtubeUrl: {
                    go: "GO",
                    createYoutubeThumbnail: "Click here to create a youtube thumbnail",
                    rightClick: "Rechtsklicken Sie auf das Bild und wählen Sie 'Bild speichern als...'",
                    noLogIn: "Bitte loggen Sie beim Online UniConverter ein, um weitere YouTube Thumbnails herunterzuladen.",
                    noLongInType: "YouTube_Hochladelimit",
                    noVipTip: "Die kostenlose Version des Online UniConverters kann den Download von YouTube-Thumbnails nur 5 Mal unterstützen, bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    noYoutubeUrl: "Es tut uns leid, wir unterstützten nur YouTube URLs.",
                    noImgTip: "Bitte überprüfen Sie die eingegebene URL oder verwenden Sie den Wondershare UniConverter für Desktop.",
                    errorUrl: "Inkorrekter URL Typ."
                },
                cutter: {
                    onlyDesktop: "Der Online UniConverter (originally Media.io) Audio Cutter ist aktuell nur für Desktop verfügbar.",
                    onYourComputer: "Bitte genießen Sie es mit Chrome oder Firefox auf Ihrem Computer.",
                    loading: "Lädt",
                    size: "Größe",
                    duration: "Dauer",
                    cut: "SCHNEIDEN",
                    from: "Von",
                    to: "Bis",
                    mode: "Modus",
                    keep: "Behalten",
                    remove: "Entfernen",
                    fade: "Blenden",
                    fadeIn: "Einblenden",
                    fadeOut: "Ausblenden",
                    processing: "Verarbeitet",
                    "waitMoment.": "Bitte warten Sie einen Moment.",
                    cuttingYourAudio: "Wir schneiden Ihr Audio",
                    fileReady: "Ihre Audi Datei ist bereit",
                    editFileAgain: "DATEI NOCHMALS BERARBEITEN",
                    cutAnotherAudio: "EIN WEITERES AUDIO SCHNEIDEN"
                },
                compress: {
                    showAccountText1: "Bitte melden Sie sich beim Online UniConverter (ursprünglich Media.io) an, um den Service für Mitglieder zu genießen, so dass Sie E-Mail-Benachrichtigungen erhalten können, nachdem die Komprimierung beendet ist. ",
                    showAccountText2: "Sie haben Dateien über #### mal an einem Tag komprimiert. Bitte komprimieren Sie morgen wieder Dateien oder melden Sie sich an, um diese Beschränkung aufzuheben.",
                    showPopWindowText1: "Der Online UniConverter erlaubt nur 1 gleichzeitige Komprimierung. Bitte verwenden Sie den Wondershare UniConverter für Desktop, um mehrere Dateien gleichzeitig zu komprimieren.",
                    showPopWindowText2: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Compressing Ultimate) für Desktop.",
                    showPopWindowText3: "Der Online UniConverter unterstützt nur Videos mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Compressing Ultimate) für Desktop.",
                    showPopWindowText4: "Die kostenlose Version des Online UniConverters kann nur eine maximale Videogröße von #### MB verarbeiten, bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText5: "Sie haben Dateien über #### mal an einem Tag komprimiert. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Compressing Ultimate) für Desktop, um diese Einschränkung aufzuheben oder konvertieren Sie morgen wieder Dateien.",
                    showPopWindowText6: "Die kostenlose Version des Online UniConverters kann Dateien nur #### mal an einem Tag komprimieren, bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben oder fahren Sie morgen fort.",
                    compressedSuccess: "Erfolgreich komprimiert",
                    outputSettings: "Ausgabeeinstellungen",
                    quality: "Qualität",
                    resolution: "Auflösung",
                    source: "QUELLE",
                    resetSize: "Größe ändern",
                    format: "Format",
                    retry: "Nochmals versuchen",
                    download: "Download",
                    toggleDropdown: "Dropdown umschalten",
                    compressNew: "Neu komprimieren",
                    compressing: "Komprimiert",
                    compress: "Komprimieren",
                    pleaseWait: "Warten Sie mal",
                    notifyMe: "Mich nach Abschluss benachrichtigen",
                    addMoreFiles: "Weitere Dateien hinzufügen",
                    uploading: "Lädt hoch",
                    save: "speichern",
                    moreSettings: "Mehr Einstellungen",
                    finished: "erledigt",
                    uploadTipsHTML: "Sie können Dateien bis zu @@@@ MB hochladen, <a href class='link'>Wählen Sie einen Tarif</a>, um mehr zu erhalten.",
                    uploadTipsText: "Sie können Dateien bis zu @@@@ MB hochladen, wählen Sie einen Plan, um mehr zu erhalten."
                },
                img: {
                    showPopWindowText1: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    showPopWindowText2: "Der Online UniConverter erlaubt nur die gleichzeitige Komprimierung von #### Bilddateien. Bitte laden Sie die Wondershare UniConverter Desktop-Version herunter, um die Beshränkung aufzuheben.",
                    showPopWindowText3: "Der Online UniConverter erlaubt nur das gleichzeitige Komprimieren von #### Bilddateien. Bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText4: "Der Online UniConverter erlaubt nur die gleichzeitige Konvertierung von #### Bildern. Bitte laden Sie die Wondershare UniConverter Desktop-Version herunter, um die Beschränkung aufzuheben.",
                    showPopWindowText5: "Der Online UniConverter erlaubt nur die gleichzeitige Konvertierung von #### Bildern. Bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText6: "Der Online UniConverter erlaubt nur das Hochladen eines Bildes, welches nicht größer als #### MB ist. Bitte melden Sie sich an, um die Beschränkung aufzuheben",
                    showPopWindowText7: "Sie haben bereits #### Bilder an einem Tag komprimiert. Bitte setzen Sie die Bildkomprimierung morgen fort oder melden Sie sich an, um die Beschränkung aufzuheben.",
                    showPopWindowText8: "Sie haben bereits #### Bilder an einem Tag konvertiert. Bitte setzen Sie die Bildkonvertierungen morgen fort oder melden Sie sich an, um die Beschränkung aufzuheben.",
                    showPopWindowText9: "Sie haben bereits #### Bilder an einem Tag komprimiert. Bitte setzen Sie die Bildkomprimierung morgen fort oder verwenden Sie die Desktop-Version des Wondershare UniConverters, um diese Beschränkung aufzuheben.",
                    showPopWindowText10: "Sie haben bereits #### Bilder an einem Tag komprimiert. Bitte machen Sie morgen weiter oder upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText11: "Sie haben bereits #### Bilder an einem Tag konvertiert. Bitte setzen Sie die Bildkonvertierungen morgen fort oder verwenden Sie die Wondershare UniConverter Desktop-Version, um diese Beschränkung aufzuheben.",
                    showPopWindowText12: "Sie haben bereits #### Bilder an einem Tag konvertiert. Bitte machen Sie morgen weiter oder upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    compressorImg: "Sie haben Bilder über #### an einem Tag komprimiert. Bitte versuchen Sie, morgen mehr Bilder zu komprimieren oder melden Sie sich kostenlos an, um die Beschränkung aufzuheben.",
                    converterImg: "Sie haben Dateien über #### an einem Tag konvertiert. Bitte versuchen Sie, morgen mehr Bilder zu konvertieren oder melden Sie sich kostenlos an, um die Beschränkung aufzuheben.",
                    compressing: "KOMPRIMIERT",
                    converting: "KONVERTIERT",
                    download: "Download",
                    toggleDropdown: "Dropdown umschalten",
                    uploading: "Lädt hoch",
                    retry: "Nochmals versuchen",
                    ready: "Bereit",
                    to: "zu",
                    downloadAll: "All herunterladen",
                    addMoreFiles: "Weitere Dateien hinzufügen",
                    chooseFiles: "Dateien auswählen",
                    fromDropbox: "Von Dropbox",
                    fromGoogleDrive: "Von Google Drive",
                    keepOriginalSize: "Ursprüngliche Größe beibehalten",
                    customSize: "Benutzerdefinierte Größe",
                    to16_8000: "Bitte geben Sie die Pixel-Breite oder Pixel-Höhe zwischen 16 und 8000 an.",
                    convertAllFilesTo: "Alle Dateien konvertierten zu",
                    deleteAll: "ALLE LÖSCHEN",
                    compress: "KOMPRIMIEREN",
                    convert: "KONVERTIEREN"
                },
                gif: {
                    showAccountText1: "Der Online UniConverter erlaubt nur das Hochladen eines Bildes, welches nicht größer als #### MB ist. Bitte melden Sie sich an, um die Beschränkung aufzuheben.",
                    showAccountText2: "Sie haben bereits #### mal an einem Tag ein GIF erstellt. Versuchen Sie bitte, morgen mehr GIFs zu erstellen oder melden Sie sich an, um die Beschränkung aufzuheben.",
                    showAccountText3: "Sie haben GIFs bereits #### mal an einem Tag erstellt. Bitte fahren Sie morgen fort oder melden Sie sich an, um die Beschränkung aufzuheben.",
                    showPopWindowText1: "Der Online UniConverter erlaubt nur das gleichzeitige Hochladen von #### Bildern, um ein GIF zu erstellen. Bitte versuchen Sie die Wondershare UniConverter Desktop-Version, um die Beschränkung zu entfernen.",
                    showPopWindowText2: "Der Online UniConverter erlaubt nur das gleichzeitige Hochladen von #### Bildern, um ein GIF zu erstellen. Bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText3: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    showPopWindowText4: "Sie haben bereits #### mal an einem Tag ein GIF erstellt. Versuchen Sie bitte, morgen mehr GIFs zu erstellen oder verwenden Sie den Wondershare UniConverter für Desktop, um die Beschränkung aufzuheben.",
                    showPopWindowText5: "Sie haben bereits #### mal an einem Tag ein GIF erstellt. Bitte versuchen Sie, morgen mehr GIFs zu erstellen oder upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText6: "Es tut uns leid, die GIF-Konvertierung ist fehlgeschlagen. Bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um Bilder erfolgreich zu GIF zu konvertieren.",
                    showPopWindowText7: "Es wird nur ein Typ von Wasserzeichen unterstützt, bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um weitere Wasserzeichen hinzuzufügen.",
                    showPopWindowText8: "Der Online-UniConverter erlaubt nur das Hochladen eines Videos, welches nicht größer als #### MB ist. Bitte verwenden Sie die Wondershare UniConverter Desktop-Version für den Upload großer Videos.",
                    showPopWindowText9: "Der Online UniConverter erlaubt nur das Hochladen eines Videos, welches nicht größer als #### MB ist. Bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText10: "Es tut uns leid, Ihre Videodatei(en) konnte(n) nicht importiert werden, bitte versuchen Sie es erneut.",
                    showPopWindowText11: "Es tut uns leid, der Abruf des Youtube-Videos ist fehlgeschlagen, bitte versuchen Sie es erneut.",
                    showPopWindowText12: "Falscher URL Typ. Es tut uns leid, wir unterstützen nur YouTube-Videos zu GIF.",
                    showPopWindowText13: "Sie haben GIFs aus Online-Videos #### mal erstellt, fahren Sie bitte morgen fort oder verwenden Sie den Wondershare UniConverter für Desktop.",
                    showPopWindowText14: "Sie haben GIFs aus Online-Videos #### mal erstellt, bitte fahren Sie morgen fort oder upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText15: "Bitte melden Sie sich beim Online UniConverter an, um GIFs aus YouTube-Video(s) durch Einfügen der URL zu erstellen.",
                    showPopWindowText16: "Ihre aktuelle GIF-Dauer ist länger als das Limit von #### Sekunden für den Online UniConverter, bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um die Beschränkung zu entfernen.",
                    showPopWindowText17: "Es tut uns leid, die GIF-Konvertierung ist fehlgeschlagen. Bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um erfolgreich GIFs zu erstellen.",
                    showPopWindowText18: "Es tut uns leid, die GIF-Konvertierung ist fehlgeschlagen. Bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um erfolgreich GIFs zu erstellen.",
                    download: "Download",
                    toggleDropdown: "Dropdown umschalten",
                    imagesToGif: "Bilder zu GIF",
                    videoToGif: "Video zu GIF",
                    loading: "Lädt",
                    cancel: "Abbrechen",
                    makingGif: "GIF erstellen",
                    suspended: "abgebrochen",
                    play: "ABSPIELEN",
                    width: "Breite",
                    height: "Höhe",
                    pixels: "Pixel",
                    widthRangePixels: "Der Breitenbereich liegt bei 50-500 Pixel.",
                    heightRangePixels: "Der Höhenbereich liegt bei 50-500 Pixel.",
                    frameRate: "Frame Rate",
                    fps: "fps",
                    fpsTip: "Je höher die fps, desto flüssiger wird die Animation. Sie können zwischen 1-30 einstellen.",
                    textWatermark: "Text Wasserzeichen",
                    createGif: "GIF erstellen",
                    createNewGif: "NEUES GIF ERSTELLEN",
                    remakeGif: "GIF NEU ERSTELLEN",
                    trimYourVideo: "Ihr Video trimmen",
                    timeTip: "Verwenden Sie den Schieberegler, um die GIF-Dauer auszuwählen oder geben Sie die Start- und Endzeit genau ein.",
                    StartTime: "Startzeit",
                    endTime: "Endzeit",
                    outputSize: "Ausgabegröße",
                    fpsMeans: "Fps bedeutet, mit wie vielen Bildern pro Sekunde Ihr endgültiges GIF laufen wird. Je höher die fps, desto flüssiger wird Ihre Animation.",
                    imageWatermark: "Bild Wasserzeichen"
                },
                mute: {
                    showAccountText1: "Sie haben Videodatei(en) über #### an einem Tag konvertiert. Bitte versuchen Sie, morgen mehr Dateien zu konvertieren oder melden Sie sich kostenlos an, um die Beschränkung aufzuheben.",
                    showAccountText2: "Bitte melden Sie sich beim Online UniConverter an, um YouTube-Videos stumm zu schalten, indem Sie die URL einfügen",
                    showPopWindowText1: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um Ihre Videos stumm zu schalten.",
                    showPopWindowText2: "Der Online UniConverter kann nur ein Video bis #### MB hochladen, wenn diese Größe überschritten wird, versuchen Sie bitte die Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) Desktop-Version für große Datei(en) zu verwenden.",
                    showPopWindowText3: "Die kostenlose Version des Online UniConverters kann nur eine maximale Videogröße von #### MB verarbeiten, bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben.",
                    showPopWindowText4: "Die kostenlose Version des Online UniConverters kann nur Video(s) oder Bild(er) #### mal an einem Tag konvertieren. Bitte upgraden Sie auf die Premium-Version, um die Beschränkung aufzuheben oder fahren Sie mit dem Konvertieren morgen fort.",
                    showPopWindowText5: "Es tut uns leid, Ihre Videodatei(en) konnte(n) nicht importiert werden, bitte versuchen Sie es erneut.",
                    showPopWindowText6: "Der Online UniConverter kann nur ein Video bis #### MB hochladen, wenn diese Größe überschritten wird, versuchen Sie bitte die Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) Desktop-Version für große Datei(en) zu verwenden.",
                    showPopWindowText7: "Falscher URL Typ. Es tut uns leid, wir unterstützen nur YouTube-Videos zu GIF.",
                    showPopWindowText8: "Sie haben Online-Videos #### mal stummgeschaltet, bitte upgraden Sie auf die Premium-Version und heben Sie die Beschränkung auf.",
                    showPopWindowText9: "Es tut uns leid, die Stummschaltung ist fehlgeschlagen. Bitte verwenden Sie die Wondershare UniConverter Desktop-Version, um erfolgreich stummzuschalten.",
                    download: "Download",
                    toggleDropdown: "Dropdown umschalten",
                    mute: "Stummschalten",
                    previewNot: "Vorschau ist nicht verfügbar.",
                    browserNotSupport: "Ihr Browser unterstützt dieses Format nicht.",
                    muteAnother: "Weitere stummschalten"
                },
                user: {
                    user1: "Willkommen zurück!",
                    user2: "Neu hier? ",
                    user3: "Kostenlos registrieren",
                    user4: "Email Adresse",
                    user5: "Passwort",
                    user6: "Merken",
                    user7: "Passwort vergessen?",
                    user8: "Login",
                    user9: "Oder",
                    user10: "Login mit",
                    user11: "Sie haben bereits einen Account?",
                    user12: "Hier einloggen",
                    user13: "Verifizierungscode",
                    user14: "Klicken Sie auf die Schaltfläche , um einen Verifizierungscode an die eingegebene E-Mail-Adresse zu senden.",
                    user15: "Registrieren",
                    user16: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                    user17: "Die E-Mail-Adresse darf nicht leer sein.",
                    user18: "Das Passwort muss 6 - 16 lang sein und Zeichen oder Zahlen enthalten.",
                    user19: "Das Passwort darf nicht leer sein.",
                    user20: "Der Verifizierungscode darf nicht leer sein.",
                    user21: "Der Name darf nicht leer sein.",
                    user22: "Code senden",
                    user23: "Benutzername",
                    user24: "Melden Sie sich beim Online UniConverter (ursprünglich Media.io) an, um verbesserte kostenlose Dienste zu genießen"
                },
                ediror: {
                    editText1: "Einfach fallen lassen",
                    editText2: "Fügen Sie Ihre Dateien hinzu, indem Sie diese einfach in dieses Fenster fallen lassen",
                    editText3: "Drag & Drop verwenden oder klicken, um Videos hinzuzufügen",
                    editText4: "Sättigung",
                    editText5: "Kontrast",
                    editText6: "Helligkeit",
                    editText7: "Benutzerdefiniert",
                    editText8: "1:1 (Quadrat)",
                    editText9: "4:3 (TV klassisch)",
                    editText10: "16:9 (Breitbild)",
                    editText11: "Horizontal",
                    editText12: "Vertikal",
                    editText13: "Video",
                    editText14: "Keine Suchergebnisse",
                    editText15: "Audio",
                    editText16: "Entgegen des Uhrzeigersinns",
                    editText17: "Im Uhrzeigersinn",
                    editText18: "Lädt ...",
                    editText19: "Abbrechen",
                    editText20: "Größe",
                    editText21: "Dauer",
                    editText22: "Auflösung",
                    editText23: "Trimmen",
                    editText24: "Zuschneiden",
                    editText25: "Anpassen",
                    editText26: "Drehen",
                    editText27: "Spiegeln",
                    editText28: "Speichern unter",
                    editText29: "Start",
                    editText30: "Verarbeitet",
                    editText31: "Ein weiteres Video bearbeiten",
                    editText32: "Sie haben bereits 5 Mal an einem Tag Videos bearbeitet. Bitte fahren Sie morgen fort oder melden Sie sich an, um die Beschränkung aufzuheben.",
                    editText33: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    editText34: "Der Online UniConverter unterstützt nur Videos mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    editText35: "Der Online UniConverter unterstützt nur Videos mit nicht mehr als #### MB. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop.",
                    editText36: "Sie haben bereits #### mal an einem Tag Videos bearbeitet. Bitte fahren Sie morgen fort oder verwenden Sie den Wondershare UniConverter für Desktop, um die Beschränkung aufzuheben.",
                    editText37: "Der Online UniConverter unterstützt dieses Format nicht. Bitte verwenden Sie den Wondershare UniConverter für Desktop.",
                    editText38: "Speichern",
                    editText39: "Bild",
                    editText40: "Vektor"
                },
                nav: {
                    navText1: "Benutzer Center",
                    navText2: "Ausloggen",
                    navText3: "Einloggen",
                    navText4: "KOSTENLOS REGISTRIEREN",
                    navText5: "MELDEN SIE SICH 30 TAGE KOSTENLOS AN",
                    convertedFiles: "Konvertierte Dateien",
                    myAccount: "Mein Account"
                },
                popup: {
                    text1: "UniConverter für Desktop",
                    text2: "Beliebige Videos/Bilder in über 1.000 Formate konvertieren.",
                    text3: "90X schnellere Konvertierungsgeschwindigkeit.",
                    text4: "Stapelkomprimierung von Videos auf kleinere Größe ohne Größenbeschränkung.",
                    text5: "Hilfreiche Bearbeitungsfunktionen zu dem Trimmen, Auto Reframe von Videos und der Bearbeitung des Untertitels, etc.",
                    text6: "Konvertieren und Anpassen von Bildern in JPG, PNG, TIFF, GIF, BMP ohne Beschränkung.",
                    text7: "Komprimieren und Anpassen von Bildern in JPG, PNG, TIFF, GIF, BMP ohne Beschränkungen.",
                    downloadWin: "https://download-de.wondershare.com/uniconverter13_full9653.exe",
                    downloadMac: "https://download-de.wondershare.com/uniconverter13-mac_full9656.zip",
                    text8: "Upgrade auf Premium",
                    text9: "JÄHRLICH",
                    text10: "2,95 €",
                    text11: "4,95 €",
                    text12: "Monat",
                    text13: "Jederzeit kündigen",
                    buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7423&license_id=297&sub_lid=0&currency=EUR&domain=de&language=German&verify=5cac3d23ffbdab507832a20ec08820d2",
                    text14: "MONATLICH",
                    text15: "9,95 €",
                    text16: "Monat",
                    text17: "Jederzeit kündigen",
                    buy_now_month: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7423&license_id=294&sub_lid=0&currency=EUR&domain=de&language=German&verify=ac9caa0c3e954bf278713c2060c4ea26",
                    text18: "500MB",
                    text19: "Maximale Dateigröße",
                    text20: "30",
                    text21: "Gleichzeitige Konvertierungen",
                    text22: "Hochgeschwindigkeit",
                    text23: "Konvertierung",
                    text24: "Download",
                    text25: "Unbegrenzt",
                    text26: "Datei Komprimierung",
                    text26_1: "E-Mail Benachrichtigung",
                    text27: "Best Seller",
                    text28: "Online 1-Jahr Abonnement",
                    text29: "Online 1-Monat Abonnement",
                    text31: "Kostenlos testen ",
                    text32: "Jetzt kaufen",
                    text33: "https://uniconverter.wondershare.de/",
                    text34: "https://www.media.io/de/mobile-download-guidance.html"
                },
                resize: {
                    download: "Download",
                    toggleDropdown: "Dropdown umschalten",
                    loading: "Lädt",
                    cancel: "Abbrechen",
                    byPixels: "Nach Pixel (px)",
                    byPercentage: "Nach Prozent (%)",
                    originalLockTip: "Klicken Sie auf Sperren/Entsperren, um das ursprüngliche Seitenverhältnis beizubehalten oder nicht.",
                    resize: "GRÖßE ÄNDERN",
                    lockTip: "Klicken Sie auf EIN/AUS Seitenverhältnis",
                    pixels16To8000: "Bitte geben Sie die Pixelbreite und -höhe zwischen 16 und 8000 ein.",
                    percentage1To500: "Bitte geben Sie den Prozentsatz der Breite und Höhe zwischen 1 und 500 ein.",
                    stretch: "Strecken",
                    stretchTip: "Das Bild/die Bilder werden auf die neue Größe gestreckt.",
                    fill: "Füllen",
                    fillTip: "Das Bild/die Bilder werden auf die neue Größe zugeschnitten.",
                    fit: "Einpassen",
                    fitTip: "Das/die Bild(er) wird/werden auf die neue Größe zugeschnitten und der/die restliche(n) Teil(e) wird/werden mit der ausgewählten Hintergrundfarbe eingefärbt.",
                    selectColor: "Wenn Sie die Option 'Einpassen' wählen, wird Ihr(e) Bild(er) mit der ausgewählten Farbe eingefärbt.",
                    resizingImages: "Bildgrößen ändern",
                    resizedFail: "Fehler beim Anpassen der Größe Ihrer Bilder",
                    resizedSuccess: "Die Größe Ihres Bildes wurde erfolgreich geändert",
                    sorryYourFiles: "Es tut uns leid, Ihre Dateien",
                    resizedFailDownload: "konnten in der Größe nicht geändert werden, Bitte ladne Sie",
                    desktopVersion: "die Desktop Version herunter,",
                    tryAgain: "um es nochmal zu versuchen.",
                    resizeMore: "WEITERE BILDER IN DER GRÖßE ÄNDERN",
                    fitColor: "Farbe anpassen"
                },
                joiner: {
                    onlyDesktop: "Der Online UniConverter (ursprünglich Media.io) Audio-Cutter ist aktuell nur für den Desktop verfügbar.",
                    onYourComputer: "Bitte genießen Sie es mit Chrome oder Firefox auf Ihrem Computer.",
                    loading: "Lädt",
                    importFailed: "Der Import ist fehlgeschlagen. Wenn Sie mit dem Zusammenführen von Audiodaten fortfahren müssen, löschen Sie bitte die fehlgeschlagene Datei vor dem Zusammenführen.",
                    fadeIn: "Klicken Sie, um die Audioeinblendung auszuwählen/abzuwählen.",
                    fadeInOut: "Klicken Sie, um die Audioein- und -ausblendung auszuwählen/abzuwählen.",
                    fadeOut: "Klicken Sie zum Auswählen/Abwählen der Audioausblendung.",
                    startTime: "Startzeit",
                    endTime: "Endzeit",
                    waitMoment: "Wir laden gerade Dateien hoch, bitte warten Sie einen Moment.",
                    merge: "Zusammenführen",
                    mergingYourAudio: "Wir fügen Ihre Audiodateien zusammen",
                    fileReaded: "Ihre Audiodatei ist bereit",
                    editFileAgain: "DATEI NOCHMALS BERARBEITEN",
                    mergeAnother: "WEITERE ZUSAMMENFÜHREN",
                    joinCountFree: "Sie haben Dateien #### mal an einem Tag bearbeitet. Bitte melden Sie sich an, um die Beschränkung aufzuheben oder bearbeiten Sie morgen weitere Dateien.",
                    joinCountLogin: "Sie haben Dateien #### mal an einem Tag bearbeitet. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für Desktop. ",
                    fileNumFree: "Mit dem kostenlosen Online UniConverter können nur #### Dateien auf einmal zusammengeführt werden. Bitte upgraden Sie auf die Premium-Version und heben Sie die Beschränkung auf.",
                    fileNumLogin: "Mit dem Online UniConverter können nur #### Dateien auf einmal zusammengeführt werden. Bitte verwenden Sie den Wondershare UniConverter (ursprünglich Wondershare Video Converter Ultimate) für den Desktop."
                },
                editorVideo: {
                    mergeVideos: "Videos zusammenführen",
                    slideshowMaker: "Diashow-Hersteller",
                    addAudioToVideo: "Audio zum Video hinzufügen",
                    merge: "VERBINDUNG",
                    addFiles: "Dateien hinzufügen",
                    addAudio: "Audio hinzufügen",
                    fitWithBorder: "Passend zum Rand",
                    zoomCrop: "Zoomen & Zuschneiden",
                    setting: "Einstellung",
                    goBack: "Gehen zurück",
                    audioOption: "Audio Optionen",
                    cropOptions: "Optionen für den Anbau",
                    Crossfade: "Überblendung",
                    instagramVideo: "Instagram Video",
                    youTubeVideo: "YouTube Video",
                    instagramStory: "Instagram Geschichte",
                    facebookVideo: "Facebook Video",
                    imageDuration: "Bilddauer",
                    transition: "Überleitung",
                    applyAllImg: "Gilt für alle Bilder",
                    outputFormat: "Ausgabeformat",
                    trimAudio: "Audio trimmen",
                    audioTrackVolume: "Lautstärke der Tonspur",
                    videoSoundVolume: "Lautstärke des Videotons",
                    startTime: "Startzeit",
                    endTime: "Endzeit",
                    empty_file: "Entschuldigung, Ihr Video wurde in keiner Weise manipuliert. <br/>Bitte gehen Sie zu den Online-Tools für Ihren Videobetrieb."
                },
                memeGenerator: {
                    "meme-generator": "Meme-Generator",
                    template: "Vorlage",
                    Create: "Generieren",
                    OriginalSize: "Originalgröße",
                    FormateNotSupport: "Tut mir leid, Online Uniconverter unterstützt dieses Bildformat nicht, bitte laden Sie eine andere Bilddatei hoch.",
                    ResizeFor: "Größe ändern für",
                    OutputSettings: "Ausgabeeinstellungen",
                    UploadGifFail: "Der Import Ihrer GIF-Datei ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
                    UploadFail: "Ihre Bilddatei konnte nicht importiert werden. Bitte versuchen Sie es erneut.",
                    GenerateFail: "Entschuldigung, Ihr Meme konnte nicht generiert werden. Bitte versuchen Sie es erneut.",
                    onlyDesktop: "Der Online-Uniconverter (ursprünglich Media.io) Meme-Generator ist jetzt nur auf einem PC verfügbar.",
                    onYourComputer: "Bitte genießen Sie es mit Chrome oder Firefox auf Ihrem Computer.",
                    downloadText: "Herzliche Glückwünsche! Ihr Meme steht zum Download bereit.",
                    enterYourText: "Geben Sie Ihren Text ein",
                    textPlaceholder: "TEXT HIER",
                    topTextPlaceholder: "HIER HOCH TEXT",
                    bottomTextPlaceholder: "UNTERTEXT HIER"
                },
                removeWatermark: {
                    wrapperTitle: "Wasserzeichen entfernen",
                    Generator: "Wasserzeichen entfernen",
                    AddArea: "Bereich hinzufügen",
                    Watermark: "Wasserzeichen",
                    Duration: "Dauer",
                    emptyText: "Klicken Sie auf 'Bereich hinzufügen', um den Bereich im Video auszuwählen, in dem Sie das Wasserzeichen entfernen möchten.",
                    limitTips: "Wir unterstützen leider nur die Entfernung von 10 Wasserzeichen. Bitte wählen Sie unten einen Premiumservice aus.",
                    downloadText: "Glückwunsch! Das Wasserzeichen wurde entfernt!",
                    errorTips: "Ihr Wasserzeichen konnte leider nicht entfernt werden. Bitte versuchen Sie es erneut.",
                    beforeDownload: "Entschuldigung, Sie müssen sich vor dem Herunterladen anmelden."
                },
                addWatermark: {
                    addWatermark: "Wasserzeichen hinzufügen",
                    Text: "Text",
                    Image: "Bild",
                    add: "Hinzufügen",
                    textStyle: "Textstil",
                    textColor: "Textfarbe",
                    Opacity: "Opazität",
                    Background: "Hintergrund",
                    Duration: "Dauer",
                    textPlaceholder: "Ihre Texte eingeben",
                    downloadText: "Glückwunsch! Das Wasserzeichen wurde hinzugefügt!",
                    errorTips: "Ihr Wasserzeichen konnte leider nicht hinzugefügt werden. Bitte versuchen Sie es erneut."
                },
                app: {
                    historyVideos: "Geschichts videos",
                    viewAllFiles: "Alle meine Dateien anzeigen",
                    downloadTitleText: "Erfolgreich verarbeitet!"
                },
                vocalRemover: {
                    customParseTitle: "Audioverarbeitung…",
                    customParseDesc: "Der Algorithmus der künstlichen Intelligenz funktioniert jetzt, es kann eine Minute dauern.",
                    customParseSuccess: "Herzliche Glückwünsche! Ihr Audio steht zum Download bereit.",
                    downloadFile: "Sie können das Audio jetzt vorhören und herunterladen",
                    instrumental: "Instrumental",
                    vocals: "Vocals"
                },
                PricingPanel: {
                    SavePrice: "Save Up to 60%",
                    Month: "/mo",
                    BilledAnnually: "Billed xxx annually",
                    CurPlan: "Current Plan",
                    SignUp: "SIGN UP",
                    BuyNow: "BUY NOW",
                    Features: "See All Plan Features",
                    PurchasedClick: "If you have purchased, please click 'Yes' to active",
                    Account: "Your Account: ",
                    UserPlan: "xxx Plan",
                    ExpiredTime: "Until xxx",
                    RefreshTips: "Refresh your account information again",
                    No: "No",
                    Yes: "Yes",
                    GotIt: "Got it"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "Pay As You Go",
                    OnlyFor: "Only for {msg}",
                    PurchaseValid: "Purchase valid for 1 year",
                    Benefits: "Customer benefits"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "Video Editor",
                    UploadText1: "Up to",
                    VideoEditorFreeText1: "Export with watermark",
                    VideoEditorFreeText2: "min video exports",
                    VideoEditorFreeText3: "mins for Speech-to-text",
                    VideoEditorFreeText4: "characters for Text-to-speech",
                    Compress: "Compress & Converter",
                    CompressFreeText1: "for converter",
                    CompressFreeText2: "for compressor",
                    CompressFreeText3: "times limited",
                    AudioEditor: "Audio Tools",
                    AudioEditorFreeText2: "times per day",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText1: "hours per month",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "Export with watermark",
                    VideoEditorLiteFreeText2: "min video exports",
                    VideoEditorLiteFreeText3: "for uploading",
                    VideoEditorLiteFreeText4: "characters/mo for Text-to-speech",
                    VideoEditorLiteFreeText5: "export",
                    Convert: "Compressor & Converter & More",
                    ConvertFreeText1: "video upload",
                    ConvertFreeText2: "times",
                    TTS: "Text-To-Speech",
                    TTSFreeText1: "Characters",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    UnlimitedTimes: "Unlimited times"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Save 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    VideoEditorFreeText2: "hour video exports",
                    VideoEditorFreeText4: "hrs/mo for Speech-to-text",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    VideoEditorBasicText1: "hours/mo for Speech-to-text",
                    LimitedTime: "usage time",
                    TTSTips: "Characters/mo",
                    Month: "Monthly",
                    Annual: "Annually"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(Save 67%)",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)"
                },
                PRICING_TIPS: {
                    Default: "Choose Your Plan",
                    ConvertingNum: "You can ### 2 files at the same time",
                    DayLimit: "Your free trial is over",
                    MaxSize: "File is too large(xxx)",
                    Subtitle: "Your auto-generated subtitles are running out of time",
                    Transcription: "Buy More Auto-transcription Time",
                    ConvertFileTips: "Your account only supports videos no more than @@@.",
                    FileNumUpgradeTips: "Wanna ### more files at the same time? upgrade now!",
                    DefaultUpgradeTips: "Please wait for them or upgrade now.",
                    ConvertUpgradeTips: "Please upgrade to continue.",
                    TimeUpgradeTips: "Upgrade to convert and compress more files.",
                    TTSTips: "Oops, your free trial is over",
                    TTSUpgradeTips: "Please buy more characters",
                    FileSizeExceedTips: "File is too large",
                    FileSizeLimit: "The file size exceeds the free limit.",
                    UpgradeSignTips: "Please sign up to continue uploading large files or upgrade your account.",
                    UpgradeTips: "Please upgrade and continue uploading.",
                    FileOver: "To ensure the editing experience, uploading files over 2G is not supported for now.",
                    FileDuration: "The max export limit duration is 2 hours, so you will have to split the video into smaller clips and try again.",
                    FileLength: "Your video length exceeds the free limit."
                },
                PRICING_STT: {
                    NAME: "Speech-To-Text",
                    DETAILS1: "Auto subtitle and transcription",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Hrs",
                    UNIT2: "/hour",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "/image",
                    PLAN1: "Available Subtitles Time: ",
                    PLAN2: "Available Text-To-Speech Characters: ",
                    PLAN3: "Available credits: "
                },
                PRICING_TTS: {
                    NAME: "Text-To-Speech",
                    DETAILS1: "AI automatic transcription",
                    DETAILS2: "Support 16 Languages (Continually Updated)",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Characters",
                    UNIT2: " ",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "image",
                    PLAN1: "Available Text-To-Speech Characters:"
                },
                PRICING_BG: {
                    NAME: "Remove Background for Images",
                    DETAILS1: "Removing the background from 1 image requires 1 credits.",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "credits",
                    UNIT2: "/image",
                    PLAN1: "Available credits:"
                },
                PRICING_HELP: {
                    STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                    TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                    BG: "The valid period after purchasing Remove Background feature is one year. This plan does not include other premium rights of Media.io."
                }
            }
        },
        247: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "Confirmar la cancelación?",
                    swalOK: "Sí",
                    swalNO: "No",
                    swalSuccess: "¿Estás seguro de que quieres eliminar esta tarea?",
                    deleteAllTask: "¿Estás seguro de que quieres eliminar todas las tareas?",
                    download: "descargar",
                    otherTools: "Otras Herramientas",
                    editAgain: "EDITAR DE NUEVO",
                    editNewFile: "EDITAR NUEVO ARCHIVO",
                    readyDownload: "¡Felicitaciones! Tu video está listo para ser descargado.",
                    downloadAll: "Descargar Todo",
                    converterMoreFiles: "CONVERTIR MAS ARCHIVOS",
                    saveTo: "Guardar en",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "La vista previa no está disponible.",
                    browserNotSupport: "Su navegador no admite este formato.",
                    signUpFree: "Registro Gratuito",
                    signUpSuccess: "¡Felicidades! \n¡Has obtenido una membresía durante 30 días!",
                    makeFail: "Lamentamos que haya fallado la generación del archivo. Vuelva a intentarlo.",
                    freeUseTimes: "Has editado archivos #### veces en un día. Inicia sesión para eliminar la limitación o edita más archivos mañana.",
                    loginUseTimes: "Has editado archivos #### veces en un día. Compra en línea para eliminar la limitación.",
                    Processing: "Procesamiento, por favor espere. "
                },
                chooseRightPlan: {
                    sizeMinLimit: "¡El archivo es demasiado grande! (####). La cuenta gratuita sólo soporta videos de no más de @@@@ MB. Por favor, compra un plan en línea para obtener más.",
                    sizeMaxLimit: "¡El archivo es demasiado grande! (####). Online UniConverter sólo soporta videos de no más de @@@@ MB. Utiliza Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para Escritorio.",
                    useTimeMinLimit: "Ha superado el límite de uso de #### por día. Suspire o seleccione un servicio premium a continuación.",
                    useTimeMaxLimit: "Ha superado el límite de uso de #### por día. Seleccione un servicio premium a continuación.",
                    concurrentCountLimit: "Tu cuenta gratuita sólo permite #### conversiones simultáneas. Por favor, haz clic en el botón Convertir para continuar, o compra un plan actualizado en línea.",
                    compressConcurrentCountLimit: "Tu cuenta gratuita sólo permite #### compresiones simultáneas. Por favor, haz clic en el botón Comprimir para continuar, o compra un plan actualizado en línea.",
                    choose_right_plan: "Elige el Plan Correcto"
                },
                uploadConvertText: {
                    uploadTitle: "SCargando tus archivos...",
                    convertTitle: "Convirtiendo tus archivos...",
                    compressTitle: "Comprimiendo tus archivos...",
                    convertSuccess: "¡Convertido por Completo!",
                    compressSuccess: "¡Comprimido por Completo!",
                    downloadFile: "Ya puedes ver y descargar el video",
                    desc: "Por favor, espera un momento"
                },
                compressSetting: {
                    compressionMethod: "Método de Compresión",
                    byFileSize: "Por Tamaño de Archivo",
                    byVariable: "Por Tasa de Bits Variable",
                    byAutomatic: "Automaatne",
                    highQuality: "Calidad Alta",
                    mediumQuality: "Calidad Media",
                    lowQuality: "Calidad Baja",
                    fileSize: "Tamaño del Archivo (MB)",
                    smallSize: "Tamaño pequeño",
                    betterQuality: "Mejor calidad"
                },
                functionTab: {
                    muteVideo: "Silenciar Video",
                    videoSpeed: "Velocidad de Video",
                    loopVideo: "Video en Bucle",
                    audioCutter: "Cortador de Audio",
                    audioJoiner: "Combinador de Audio",
                    imagesToGif: "Imágenes a GIF",
                    videoToGif: "Video a GIF",
                    imageResizer: "Ajuste de Tamaño de Imgen",
                    reverseVideo: "Invertir video",
                    mergeVideo: "Combinar Video",
                    slideshowMaker: "Slideshow Maker",
                    addAudioToVideo: "Añadir Audio al Video",
                    removeWatermark: "Quitar Marca de Agua",
                    addWatermark: "Poner Marca de Agua"
                },
                dialog: {
                    cancel: "Cancelar",
                    ok: "OK",
                    setting: "Ajuste",
                    video: "Aplicar a todas las conversiones de video",
                    audio: "Aplicar a todas las conversiones de audio",
                    image: "Aplicar a todas las conversiones de imagen",
                    vector: "Aplicar a todas las conversiones vectoriales",
                    keepOriginSize: "Mantener tamaño original",
                    videoText: "Video",
                    audioText: "Audio",
                    imageText: "Imagen",
                    customSize: "Tamaño Personalizado",
                    encoder: "Codificador",
                    resolution: "Resolución",
                    frameRate: "Velocidad de Fotograma",
                    bitrate: "Velocidad e Bits",
                    channel: "Chanal",
                    sampleRate: "Velocidad de Muestra",
                    videoTips: "Le proporcionamos la mejor configuración de parámetros <br/>por defecto.",
                    audioTips: "Cuando esta opción no está marcada, el video convertido<br/>no tendrá audio.",
                    imageTips: "Haga clic en Bloquear/Desbloquear para mantener la proporción original de <br/>aspecto o no.",
                    inputEmail: "Por favor introduce tu e-mail",
                    trim: "Cortar",
                    trimTips: "Puede especificar el punto inicial y final del recorte."
                },
                notify: {
                    title: "¡Felicidades! Gracias por tu registro.",
                    message: "Te enviaremos la dirección de descarga después de que se complete la tarea."
                },
                convertedFiles: {
                    convertedFiles: "Archivos Convertidos",
                    fileStore24Hours: "Los archivos se almacenarán durante 24 horas",
                    name: "Nombre",
                    size: "Tamaño",
                    operate: "Operar",
                    deleteAll: "Borrar Todo",
                    nofiles: "No hay archivo, ¡haga clic en el botón de abajo para convertirlo!"
                },
                reverseVideo: {
                    reverseSpeed: "Invertir velocidad",
                    muteVideo: "Silenciar video",
                    soundOptions: "Opciones de sonido",
                    reverse: "Invertir",
                    finalDuration: "Duración final",
                    duration: "Duración",
                    play: "Reproducir",
                    stop: "Detener",
                    reverseingYourVideo: "Procesando, por favor espera.",
                    reverseFileAgain: "Invertir ARCHIVO OTRA VEZ",
                    reverseAnotherVideo: "Invertir OTRO VIDEO"
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Regístrese en Online Uniconverter antes Media.io） para disfrutar de la membresía que puede agregar su imagen sobre #### MB"
                    },
                    video: {
                        purchaseCancelMinLimit: "La versión gratuita de Online UniConverter solo puede cargar un tamaño de video máximo de #### MB. Compre en línea y obtenga un tamaño de video ilimitado.",
                        cancelMinLimit: "Online UniConverter solo podrá subir un video a #### MB. si supera este tamaño. Pruebe la versión de escritorio Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para cargar archivos grandes.",
                        cancelMaxLimit: "Online UniConverter solo podrá subir un video a #### MB. si supera este tamaño. Pruebe la versión de escritorio Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para cargar archivos grandes."
                    },
                    audio: {
                        purchaseCancelMinLimit: "La versión gratuita de Online UniConverter solo puede cargar un tamaño máximo de audio de #### MB. Compre en línea y obtenga un tamaño de audio ilimitado.",
                        cancelMinLimit: "Online UniConverter solo podrá cargar audio en #### MB. si supera este tamaño. Pruebe la versión de escritorio Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para cargar archivos grandes.",
                        cancelMaxLimit: "Online UniConverter solo podrá cargar audio en #### MB. si supera este tamaño. Pruebe la versión de escritorio Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para cargar archivos grandes."
                    },
                    notSupport: "Online UniConverter no es compatible con este formato. Utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    zeroSize: "¡Por favor, no suba archivos de tamaño 0!",
                    uploadFail: "Lo sentimos, no se pudo importar su(s )archivo(s) de video. Vuelva a intentarlo.",
                    incorrectUrl: "Tipo de URL Incorrecto.",
                    dropBoxLogIn: "Inicie sesión en Online UniConverter antes de cargar archivo(s) desde Dropbox.",
                    googleDriveLogIn: "Inicie sesión en Online UniConverter antes de cargar archivo(s) desde Google Drive.",
                    youtubeLogIn: "Inicie sesión en Online UniConverter para editar video(s) de YouTube pegando la URL.",
                    youtubeConversionCount: "Ha editado videos en línea #### veces. Actualice a la versión Premium y elimine esta limitación.",
                    chooseFiles: "Elegir Archivos",
                    cancel: "Cancelar",
                    Loading: "Cargando",
                    Processing: "Procesando"
                },
                conver: {
                    showAccountText1: "Por favor inicie sesión en Online UniConverter (antes Media.io) para disfrutar el servicio de afiliación que puede recibir la notificación por correo electrónico después de que termine la tarea de conversión.",
                    showAccountText2: "Online UniConverter no es compatible con este formato. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    showAccountText3: "Ha convertedido archivos más de #### veces en un día. Por favor convierta archivos mañana, o regístrese para quitar esta limitación.",
                    showPopWindowText1: "Online UniConverter solo permite #### conversiones simultáneas. Por favor descarga el convertidor de videos de escritorio - UniConverter para convertir más archivos simultaneamente.",
                    showPopWindowText2: "Online UniConverter solo admite video de no más de #### MB. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    showPopWindowText3: "La versión gratuita del Online UniConverter solo puede subir un video de tamaño máximo de #### MB, Por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText4: "Ha convertedido archivos más de #### veces en un día. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para Escritorio para quitar esta limitación, o convierta archivos mañana.",
                    showPopWindowText5: "La versión gratuita del Online UniConverter solo puede convertir archivos #### veces al día, Por favor actualice a la versión premium para quitar esta limitación, o convierta archivos mañana.",
                    converterdFilesLogIn: "Por favor, inicie sesión en Online UniConverter (antes Media.io) para disfrutar del servicio de membresía que puede descargar y eliminar los archivos convertidos.",
                    convert: "Convertir",
                    to: "a",
                    download: "Descargar",
                    toggleDropdown: "Abrir el Menú Desplegable",
                    converting: "Convirtiendo",
                    uploading: "Subiendo",
                    pleaseWait: "Por favor, espera",
                    retry: "Reintente",
                    ready: "Reintente",
                    downloadAll: "Descargar Todo",
                    notifyMe: "Avisarme cuando haya terminado",
                    addMoreFiles: "Añadir más Archivoss",
                    chooseFiles: "Elegir Archivos",
                    fromDropbox: "Desde Dropbox",
                    fromGoogleDrive: "Desde Google Drive",
                    hours24_1: "Los archivos se almacenarán durante 24 horas. Ir a",
                    hours24_2: "Archivos Convertidos",
                    hours24_3: "para eliminarlos manualmente.",
                    FileConversionFailed: "La conversión de archivos ha fallado, por favor, utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para Desktop.",
                    delete: "Borrar",
                    preview: "Avance"
                },
                loopVideo: {
                    duration: "Duración",
                    play: "REPRODUCIR",
                    stop: "DETENER",
                    trimYouVideo: "Cortar su video",
                    startTime: "Tiempo de inicio",
                    endTime: "Tiempo Final",
                    loopClip: "Reiniciar este clip",
                    finalDuration: "Duración Final",
                    loopingYourVideo: "Reiniciando su video",
                    loop: "LOOP",
                    loopFileAgain: "REINICIAR ARCHIVO DE NUEVO",
                    loopAnotherVideo: "REINICIAR OTRO ARCHIVO",
                    cutTime: "La versión gratuita de Online UniConverter sólo puede cortar el video no más allá de los #### s. Por favor, actualiza a la versión Premium y elimina la limitación."
                },
                speedVideo: {
                    duration: "Duración",
                    speed: "Velocidad",
                    finalDuration: "DUración final",
                    soundOptions: "Opciopnes de Sonido",
                    muteVideo: "Silenciar Video",
                    start: "INICIAR",
                    speedFileAgain: "ACELERAR ARCHIVO DE NUEVO",
                    speedAnotherVideo: "ACELERAR OTRO VIDEO"
                },
                youtubeUrl: {
                    go: "IR",
                    createYoutubeThumbnail: "Haga clic aquí para crear una miniatura de youtube",
                    rightClick: 'Haga clic con el botón derecho en la imagen y seleccione "Guardar imagen como..."',
                    noLogIn: "Inicie sesión en Online UniConverter para descargar más miniaturas de YouTube.",
                    noLongInType: "UploadLimit_Youtube",
                    noVipTip: "La versión gratuita de Online UniConverter sólo admite la descarga de miniaturas de YouTube 5 veces, por favor, actualice a la versión premium para eliminar esta limitación.",
                    noYoutubeUrl: "Lo sentimos, sólo se admite la URL de YouTube.",
                    noImgTip: "Por favor, revise la URL que ha introducido. O puedes utilizar el Wondershare UniConverter para escritorio.",
                    errorUrl: "El tipo de URL es incorrecto."
                },
                cutter: {
                    onlyDesktop: "El cortador de audio Online UniConverter (antes Media.io) sólo está disponible para escritorio ahora.",
                    onYourComputer: "Por favor, disfrútelo con Chrome o Firefox en su computadora.",
                    loading: "Cargando",
                    size: "Tamaño",
                    duration: "Duración",
                    cut: "CORTAR",
                    from: "Desde",
                    to: "Hasta",
                    mode: "Modo",
                    keep: "Mantener",
                    remove: "Eliminar",
                    fade: "Desvanecer",
                    fadeIn: "Desvanecimiento de entrada",
                    fadeOut: "Desvanecimiento de salida",
                    processing: "Procesando",
                    "waitMoment.": "por favor, espere un momento.",
                    cuttingYourAudio: "Estamos cortando su audio",
                    fileReady: "Su archivo de audio está listo",
                    editFileAgain: "EDITE EL ARCHIVO DE NUEVO",
                    cutAnotherAudio: "CORTAR OTRO AUDIO"
                },
                compress: {
                    showAccountText1: "Por favor inicie sesión en Online UniConverter (antes Media.io) para disfrutar el servicio de afiliación que puede recibir la notificación por correo electrónico después de que termine la tarea de conversión. ",
                    showAccountText2: "Ha comprimido archivos más de #### veces en un día. Por favor convierta archivos mañana, o regístrese para quitar esta limitación.",
                    showPopWindowText1: "Online UniConverter solo permite comprimir un archivo simultaneamente. Por favor descargue el convertidor de escritorio para  comprimir más archivos simultaneamente.",
                    showPopWindowText2: "Online UniConverter no es compatible con este formato. Por favor utilice Wondershare UniConverter (antes Wondershare Video Compressing Ultimate) para escritorio.",
                    showPopWindowText3: "Online UniConverter solo admite video de no más de #### MB. Por favor utilice Wondershare UniConverter (antes Wondershare Video Compressing Ultimate) para escritorio.",
                    showPopWindowText4: "La versión gratuita del Online UniConverter solo puede subir un video de tamaño máximo de #### MB, Por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText5: "Ha comprimido archivos más de #### veces en un día. Por favor utilice Wondershare UniConverter (antes Wondershare Video Compressing Ultimate) para escritorio para quitar esta limitación, o convierta mas archivos mañana.",
                    showPopWindowText6: "La versión gratuita del Online UniConverter solo puede convertir archivos #### veces al día, Por favor actualice a la versión premium para quitar esta limitación, o continue mañana.",
                    compressedSuccess: "Compresoión exitosa",
                    outputSettings: "Ajustes de Salida",
                    quality: "Calidad",
                    resolution: "Resolución",
                    source: "FUENTE",
                    resetSize: "Restablecer tamaño",
                    format: "Formato",
                    retry: "Reintentar",
                    download: "descargar",
                    toggleDropdown: "Cambiar el menú desplegabl",
                    compressNew: "Comprimir Nuevo",
                    compressing: "Comprimiendo",
                    compress: "Comprimir",
                    notifyMe: "Notificarme cuando haya terminado",
                    addMoreFiles: "Añadir más archivos",
                    uploading: "Cargando",
                    save: "guardar",
                    moreSettings: "Más Configuraciones",
                    finished: "Finalizado",
                    uploadTipsHTML: "Puedes subir archivos hasta @@@@ MB, <a href class='link'>elige un plan</a> para obtener más.",
                    uploadTipsText: "Puedes subir archivos hasta @@@@ MB, elige un plan para obtener más."
                },
                img: {
                    showPopWindowText1: "Online UniConverter no es compatible con este formato. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    showPopWindowText2: "Online UniConverter solo permite comprimir #### archivos de imágen al mismo tiempo. Por favor descargue la versión de escritorio de Wondershare UniConverter para quitar esta limitación.",
                    showPopWindowText3: "Online UniConverter solo permite comprimir #### archivos de imágen al mismo tiempo. Por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText4: "Online UniConverter solo permite convertir #### archivos de imágen al mismo tiempo. Por favor descargue la versión de escritorio de Wondershare UniConverter para quitar esta limitación.",
                    showPopWindowText5: "Online UniConverter solo permite convertir #### archivos de imágen al mismo tiempo. Por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText6: "Online UniConverter solo permite subir una imágen de no más de #### MB. Por favor incie sesión para quitar esta limitación.",
                    showPopWindowText7: "Ya ha comprimido imágenes más de #### veces en un día. Por favor continue la compresión de imágen mañana, o incie sesión para quitar esta limitación.",
                    showPopWindowText8: "Ya ha convertedido imágenes más de #### veces en un día. Por favor continue la conversión de imágen mañana, o incie sesión para quitar esta limitación.",
                    showPopWindowText9: "Ya ha comprimido imágenes más de #### veces en un día. Por favor continue la compresión de imágen mañana, o utilice la versión de escritorio de Wondershare UniConverter para quitar esta limitación.",
                    showPopWindowText10: "Ya ha comprimido imágenes más de #### veces en un día. Por favor continue mañana, o actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText11: "Ya ha convertido imágenes más de #### veces en un día. Por favor continue la conversión de imágen mañana, o utilice la versión de escritorio de Wondershare UniConverter para quitar esta limitación.",
                    showPopWindowText12: "Ya ha convertido imágenes más de #### veces en un día. Por favor continue mañana, o actualice a la versión premium para quitar esta limitación.",
                    compressorImg: "Usted ha comprimido imágenes más de #### veces en un día. Por favor, intente comprimir más imágenes mañana, o regístrese gratuitamente para eliminar esta limitación..",
                    converterImg: "Usted ha convertido archivos más de #### veces en un día. Por favor, intente convertir más imágenes mañana, o regístrese gratuitamente para eliminar esta limitación..",
                    compressing: "COMPRIMIENDO",
                    converting: "CONVIRTIENDO",
                    download: "descargar",
                    toggleDropdown: "Abrir el menú desplegable",
                    uploading: "Cargando",
                    retry: "Reintentar",
                    ready: "Listo",
                    to: "a",
                    downloadAll: "Descargar todo",
                    addMoreFiles: "Añadir más archivos",
                    chooseFiles: "Elegir archivos",
                    fromDropbox: "Desde Dropbox",
                    fromGoogleDrive: "Desde Google Drive",
                    keepOriginalSize: "Mantener el tamaño original",
                    customSize: "Tamaño personalizado",
                    to16_8000: "Por favor, introduzca el ancho de píxeles o la altura de píxeles entre 16 y 8000",
                    convertAllFilesTo: "Convertir todos los archivos a",
                    deleteAll: "ELIMINAR TODO",
                    compress: "COMPRIMIR",
                    convert: "CONVERTIR"
                },
                gif: {
                    showAccountText1: "Online UniConverter solo permite subir un imágen de no más de #### MB. Por favor inicie sesión para quitar esta limitación.",
                    showAccountText2: "Ya ha creado GIF #### veces en un día. Por favor intente hacer más GIF mañana, o incie sesión para quitar esta limitación.",
                    showAccountText3: "Ya ha creado GIF #### veces en un día. Por favor continue mañana, o incie sesión para quitar esta limitación.",
                    showPopWindowText1: "Online UniConverter solo permite subir #### imágenes al mismo tiempo para hacer un GIF. Por favor utilice la versión de escritorio de Wondershare UniConverter para quitar esta limitación.",
                    showPopWindowText2: "Online UniConverter solo permite subir #### imágenes al mismo tiempo para hacer un GIF. Por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText3: "Online UniConverter no es compatible con este formato. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    showPopWindowText4: "Ya ha creado GIF #### veces en un día. Por favor intente hacer más GIF mañana, o utilice Wondershare UniConverter para escritorio para quitar esta limitación.",
                    showPopWindowText5: "Ya ha creado GIF #### veces en un día. Por favor intente hacer más GIF mañana, o actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText6: "Lo siento, la conversión de GIF ha fallado. Por favor utilice la versión de escritorio de Wondershare UniConverter para convertir imágenes a GIF con éxito.",
                    showPopWindowText7: "Solo un tipo de marca de agua es admitido, Por favor utilice la versión de escritorio de Wondershare UniConverter para añadir más marcas de agua.",
                    showPopWindowText8: "Online UniConverter solo permite subir un video de no más de #### MB. Por favor utilice la versión de escritorio de Wondershare UniConverter para subir videos de mayor tamaño.",
                    showPopWindowText9: "Online UniConverter solo permite subir un video de no más de #### MB. Por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText10: "Lo siento, sus archivos de video no se pudieron importar, por favor inténtelo de nuevo.",
                    showPopWindowText11: "Lo siento, su búsqueda de video de Youtube falló, por favor inténtelo de nuevo.",
                    showPopWindowText12: "El tipo de URL es incorrecto. Lo siento, solo admite video de YouTube a GIF.",
                    showPopWindowText13: "Ha creado GIF de videos online más de #### veces, por favor continue mañana o utilice Wondershare UniConverter para escritorio.",
                    showPopWindowText14: "Ha creado GIF de videos online más de #### veces, por favor continue mañana o actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText15: "Por favor inicie sesión en Online UniConverter para crear GIF a partir de videos de YouTube pegando la URL.",
                    showPopWindowText16: "La duración de su GIF es superior al límite de #### segundos para Online UniConverter, por favor utilice la versión de escritorio de Wondershare UniConverter para quitar esta limitación.",
                    showPopWindowText17: "Lo siento, la conversión del GIF falló. Por favor utilice la versión de escritorio de Wondershare UniConverter para crear GIF con éxito.",
                    showPopWindowText18: "Lo siento, la conversión del GIF falló. Por favor utilice la versión de escritorio de Wondershare UniConverter para crear GIF con éxito.",
                    download: "descargar",
                    toggleDropdown: "Abrir menú desplegable",
                    imagesToGif: "Imagenes a GIF",
                    videoToGif: "Video a GIF",
                    loading: "Cargando",
                    cancel: "Cancelar",
                    makingGif: "Creando GIF",
                    suspended: "SUSPENDIDO",
                    play: "REPRODUCIR",
                    width: "Ancho",
                    height: "Alto",
                    pixels: "pixeles",
                    widthRangePixels: "El rango de ancho es de 50-500 píxeles.",
                    heightRangePixels: "El rango de altura es de 50-500 píxeles.",
                    frameRate: "Velocidad de Fotogramas",
                    fps: "fps",
                    fpsTip: "Cuanto más alto sea el fps, más suave será la animación. Se puede ajustar entre 1-30.",
                    textWatermark: "Marca de agua de texto",
                    createGif: "Crear GIF",
                    createNewGif: "CREAR NUEVO GIF",
                    remakeGif: "REHACER GIF",
                    trimYourVideo: "Recortar el Video",
                    timeTip: "Utilice el control deslizante para seleccionar la duración de su GIF, o introduzca la hora de inicio y la hora de finalización con precisión.",
                    StartTime: "Tiempo Inicial",
                    endTime: "Tiempo Final",
                    outputSize: "Tamaño de Salida",
                    fpsMeans: "Fps significa cuántos fotogramas por segundo se ejecutarán en su GIF final. Cuanto más altos sean los fps, más suave será la animación..",
                    imageWatermark: "Marca de agua de la imagen"
                },
                mute: {
                    showAccountText1: "Ya ha creado GIF #### veces en un día. Por favor intente hacer más GIF mañana, o incie sesión para quitar esta limitación.",
                    showAccountText2: "Inicie sesión en Online UniConverter para seleccionar video(s) de Youtube pegando la URL",
                    showPopWindowText2: "Online UniConverter solo puede subir un video de #### MB, si supera este tamaño, por favor pruebe la versión de escritorio de Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para subidas de mayor tamaño.",
                    showPopWindowText3: "La versión gratuita Online UniConverter solo puede subir un video de tamaño máximo de #### MB, por favor actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText4: "Ya ha creado GIF #### veces en un día. Por favor intente hacer más GIF mañana, o actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText5: "Lo siento, tus archivos de video no se pudieron importar, por favor inténtelo de nuevo.",
                    showPopWindowText6: "Online UniConverter solo puede subir un video de #### MB, si supera este tamaño, por favor utilice la versión de escritorio de Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para subidas de mayor tamaño.",
                    showPopWindowText7: "El tipo de URL es incorrecto. Lo siento, solo admite video de YouTube a GIF.",
                    showPopWindowText8: "Ha silenciado videos más de #### veces en un día. Por favor continue mañana, o actualice a la versión premium para quitar esta limitación.",
                    showPopWindowText9: "Lo siento, la conversión de Silencio falló. Por favor utilice la versión de escritorio de Wondershare UniConverter para crear Silencio con éxito.",
                    download: "escargar",
                    toggleDropdown: "Abrir menú desplegable",
                    mute: "Silenciar",
                    previewNot: "La vista previa no está disponible",
                    browserNotSupport: "Su navegador no admite este formato..",
                    muteAnother: "Silenciar otro"
                },
                user: {
                    user1: "Bienvenido a su cuenta Wondershare",
                    user2: "¿Es nuevo aquí? ",
                    user3: "Regístrese gratis",
                    user4: "Dirección de correo",
                    user5: "Contraseña",
                    user6: "Recuérdame",
                    user7: "¿Olvidaste la Contraseña?",
                    user8: "Iniciar Sesión",
                    user9: "o",
                    user10: "Iniciar Sesión con",
                    user11: "¿Ya tiene una cuenta?",
                    user12: "Inicie aquí",
                    user13: "Código de Verificación",
                    user14: "Haz Click en el botón para enviar un código de verificación a la dirección de correo electrónico de entrada.",
                    user15: "Registrarse",
                    user16: "Por favor escriba una dirección de correo válida.",
                    user17: "El correo no puede estar vacío",
                    user18: "La Contraseña debe contener entre 6 - 16 caracteres o números.",
                    user19: "La Contraseña no puede estar vacía",
                    user20: "El Código de Verificación no puede estar vacío",
                    user21: "El nombre no puede estar vacío",
                    user22: "Enviar Código",
                    user23: "Nombre de Usuario",
                    user24: "Únase a UniConverter en línea (antes Media.io) para obtener mas servicios gratuitos"
                },
                ediror: {
                    editText1: "Suéltalo como si estuviera ardiendo",
                    editText2: "Añade archivos soltándolos en esta ventana",
                    editText3: "Arrastra y Suelta o Presiona para Agregar video",
                    editText4: "Saturación",
                    editText5: "Contraste",
                    editText6: "Brillo",
                    editText7: "Personalizar",
                    editText8: "1:1 (Cuadrado)",
                    editText9: "4:3 (Clásico TV)",
                    editText10: "16:9 (Pantalla Ancha)",
                    editText11: "Horizontal",
                    editText12: "Vertical",
                    editText13: "video",
                    editText14: "Sin resultado de Búsqueda",
                    editText15: "Audio",
                    editText16: "En sentido anti-horario",
                    editText17: "En sentido horario",
                    editText18: "Cargando ...",
                    editText19: "Cancelar",
                    editText20: "Tamaño",
                    editText21: "Duración",
                    editText22: "Resolución",
                    editText23: "Recortar",
                    editText24: "Cortar",
                    editText25: "Ajustar",
                    editText26: "Rotar",
                    editText27: "Girar",
                    editText28: "Guardar como",
                    editText29: "Empezar",
                    editText30: "Procesando",
                    editText31: "Editar Otro video",
                    editText32: "Ya ha editado 5 videos en un día. Por favor continue mañana, o incie sesión para quitar esta limitación.",
                    editText33: "Ya ha editado 5 videos en un día. Por favor continue mañana, o incie sesión para quitar esta limitación.",
                    editText34: "Online UniConverter solo admite videos de no más de #### MB. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    editText35: "Online UniConverter solo admite videos de no más de #### MB. Por favor utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para escritorio.",
                    editText36: "Ya ha editado videos más de #### veces en un día. Por favor continue mañana, o utilice Wondershare UniConverter para escritorio para quitar esta limitación.",
                    editText37: "Online UniConverter no es compatible con este formato. Por favor utilice Wondershare UniConverter para escritorio.",
                    editText38: "Guardar",
                    editText39: "Imagen",
                    editText40: "Vectores"
                },
                nav: {
                    navText1: "Centro de Usuario",
                    navText2: "Cerrar Sesión",
                    navText3: "Iniciar Sesión",
                    navText4: "REGISTRARSE GRATIS",
                    navText5: "REGÍSTRESE GRATIS POR 30 DÍAS",
                    convertedFiles: "Archivos Convertidos",
                    myAccount: "Mi Cuenta"
                },
                popup: {
                    text1: "UniConverter para escritorio",
                    text2: "Convertir a / desde más de 1,000 formatos de video y audio.",
                    text3: "Velocidad de conversión de video 90 veces más rápida.",
                    text4: "Comprimir video a un tamaño más pequeño sin límite de tamaño.",
                    text5: "Descargar videos de Internet de 10,000+ Webs con un solo clic.",
                    text6: "Convertir imágenes a JPG, PNG, TIFF, GIF, BMP sin límites.",
                    text7: "Comprime y Personaliza imágenes a JPG, PNG, TIFF, GIF, BMP Sin Límites.",
                    downloadWin: "https://download-es.wondershare.com/uniconverter13_full9642.exe",
                    downloadMac: "https://download-es.wondershare.com/uniconverter13-mac_full9644.zip",
                    text8: "Actualizar a Premium",
                    text9: "Anual",
                    text10: "$2.95",
                    text11: "USD $4.95",
                    text12: "mes",
                    text13: "cancelar en cualquier momento",
                    comprar_anualmente_ya: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7448&license_id=297&sub_lid=0¤cy=USD&language=Spanish&verify=9233f312715bce7c4d8a0f7e7ce42c39",
                    text14: "Mensual",
                    text15: "$9.95",
                    text16: "mes",
                    text17: "cancelar en cualquier momento",
                    comprar_mensualmente_ya: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7448&license_id=125&sub_lid=0¤cy=USD&language=Spanish&verify=417b4c005b05297b727d7991a7f781d9",
                    text18: "500MB",
                    text19: "Tamaño Máximo de Archivo",
                    text20: "90",
                    text21: "Conversiones Simultáneas",
                    text22: "Alta Velicidad",
                    text23: "Conversión",
                    text24: "Descarga",
                    text25: "Ilimitada",
                    text26: "Compresión de Archivo",
                    text26_1: "Notificación por Correo Electrónico",
                    text27: "Más Popular",
                    text28: "1-Año de Suscripción Online",
                    text29: "1-Mes de Suscripción Online",
                    text31: "Pruébalo gratis",
                    text32: "Comprar Ahora",
                    text33: "https://uniconverter.wondershare.es/",
                    text34: "https://www.media.io/es/mobile-download-guidance.html"
                },
                resize: {
                    download: "Descargar",
                    toggleDropdown: "Abrir menú desplegable",
                    loading: "Cargando",
                    cancel: "Cancelar",
                    byPixels: "Por píxeles (px)",
                    byPercentage: "por Porcentaje (%)",
                    originalLockTip: "Haga clic en Bloquear/Desbloquear para mantener la relación de aspecto original o no.",
                    resize: "REDIMENSIONAR",
                    lockTip: "Haga clic para activar/desactivar la relación de aspecto",
                    pixels16To8000: "Introduzca el ancho y el alto en píxeles entre 16 y 8000.",
                    percentage1To500: "Introduzca el porcentaje de ancho y alto entre 1 y 500.",
                    stretch: "Estirar",
                    stretchTip: "La(s) imagen(es) será(n) estirada(s) para ajustarse al nuevo tamaño.",
                    fill: "Rellenar",
                    fillTip: "La(s) imagen(es) será(n) recortada(s) para ajustarse al nuevo tamaño.",
                    fit: "Ajustar",
                    fitTip: "La(s) imagen(es) se recortará(n) para ajustarse al nuevo tamaño y el resto se pintará(n) con el color de fondo seleccionado.",
                    selectColor: "Si elige la opción de ajuste, su(s) imagen(es) será(n) pintada(s) con el color seleccionado.",
                    resizingImages: "Cambiar el tamaño de las imágenes",
                    resizedFail: "Sus imágenes han sido redimensionadas con Fallo",
                    resizedSuccess: "Sus imágenes han sido redimensionadas con éxito",
                    sorryYourFiles: "Lo sentimos, su(s) archivo(s)",
                    resizedFailDownload: "redimensionado ha fallado, por favor descargue",
                    desktopVersion: "la versión de escritorio",
                    tryAgain: "para intentarlo de nuevon.",
                    resizeMore: "CAMBIAR EL TAMAÑO DE MÁS IMÁGENES",
                    fitColor: "Ajuste de Color"
                },
                joiner: {
                    onlyDesktop: "El cortador de audio Online UniConverter (antes Media.io) sólo está disponible para el escritorio ahora.",
                    onYourComputer: "Por favor, disfrútelo con Chrome o Firefox en su computadora.",
                    loading: "Cargando",
                    importFailed: "La importación ha fallado. Si necesita continuar con la fusión de audio, por favor, elimine el archivo fallido antes de la fusión.",
                    fadeIn: "Haga clic para seleccionar/deseleccionar el fundido de entrada de audio.",
                    fadeInOut: "Haga clic para seleccionar/deseleccionar el fundido de entrada y salida de audio.",
                    fadeOut: "Haga clic para seleccionar/deseleccionar el fundido de salida de audio.",
                    startTime: "Tiempo inicial",
                    endTime: "Tiempo final",
                    waitMoment: "Estamos cargando los archivos, por favor espere un momento.",
                    merge: "Combinar",
                    mergingYourAudio: "Estamos fusionando sus archivos de audio",
                    fileReaded: "Su archivo de audio está listo ",
                    editFileAgain: "EDITE EL ARCHIVO DE NUEVO",
                    mergeAnother: "FUSIONAR OTRO",
                    joinCountFree: "Has editado archivos #### veces en un día. Por favor, inicie sesión para eliminar esta limitación o edite más archivos mañana.",
                    joinCountLogin: "Usted ha editado archivos #### veces en un día. Por favor, utilice Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para Escritorio. ",
                    fileNumFree: "El Online UniConverter gratuito sólo permite fusionar #### archivos a la vez. Por favor, actualiza a la versión Premium y elimina esta limitación.",
                    fileNumLogin: "El Online UniConverter sólo permite fusionar archivos de #### a la vez. Por favor, utiliza el Wondershare UniConverter (antes Wondershare Video Converter Ultimate) para Escritorio."
                },
                editorVideo: {
                    mergeVideos: "Combinar Videos",
                    slideshowMaker: "Slideshow Maker",
                    addAudioToVideo: "Añadir Audio al Video",
                    merge: "COMBINAR",
                    addFiles: "Añadir Archivos",
                    addAudio: "Añadir audio",
                    fitWithBorder: "Encajar con borde",
                    zoomCrop: "Zoom & Recorte",
                    setting: "Configuraciones",
                    goBack: "Regresar",
                    audioOption: "Opciones de audio",
                    cropOptions: "Opciones de recorte",
                    Crossfade: "Fundido cruzado",
                    instagramVideo: "Video de Instagram",
                    youTubeVideo: "Video de YouTube",
                    instagramStory: "Historias de Instagram",
                    facebookVideo: "Video de Facebook",
                    imageDuration: "Duración de la imagen",
                    transition: "Transición",
                    applyAllImg: "Aplicable a todas las imágenes",
                    outputFormat: "Formato de salida",
                    trimAudio: "Cortar Audio",
                    audioTrackVolume: "Volumen de la pista de audio",
                    videoSoundVolume: "Volumen del sonido del video",
                    startTime: "Tiempo de Inicio",
                    endTime: "Tiempo de Finalización",
                    empty_file: "Lo sentimos, tu video no ha sido manipulado de ninguna manera, <br/>por favor, salta a las Herramientas en Línea para tu operación de video."
                },
                memeGenerator: {
                    "meme-generator": "Generador de memes",
                    template: "Plantilla",
                    Create: "Generar",
                    OriginalSize: "Tamaño original",
                    FormateNotSupport: "Lo sentimos, Online Uniconverter no es compatible con este formato de imagen, cargue otro archivo de imagen.",
                    ResizeFor: "Cambiar el tamaño para",
                    OutputSettings: "Ajustes de salida",
                    UploadGifFail: "Lo sentimos, su archivo GIF no se pudo importar. Vuelva a intentarlo.",
                    UploadFail: "Lo sentimos, su archivo de imagen no se pudo importar. Vuelva a intentarlo.",
                    GenerateFail: "Lo sentimos, tu meme no se pudo generar, inténtalo de nuevo.",
                    onlyDesktop: "El generador de memes en línea Uniconverter (originalmente Media.io) solo está disponible ahora para computadora personal.",
                    onYourComputer: "Disfrútalo con Chrome o Firefox en tu computadora.",
                    downloadText: "¡Felicidades! Tu meme está listo para descargar.",
                    enterYourText: "Ingrese su texto",
                    textPlaceholder: "TEXTO AQUI",
                    topTextPlaceholder: "SUBIR TEXTO AQUÍ",
                    bottomTextPlaceholder: "TEXTO INFERIOR AQUÍ"
                },
                removeWatermark: {
                    wrapperTitle: "Quitar Marca de Agua",
                    Generator: "Quitar Marca de Agua",
                    AddArea: "Agregar Área",
                    Watermark: "Marca de Agua",
                    Duration: "Duración",
                    emptyText: "Haz clic en 'Agregar Área' para seleccionar el área del video en la que deseas eliminar la marca de agua.",
                    limitTips: "Lo sentimos, solo admitimos la eliminación de 10 marcas de agua. Selecciona un plan premium para continuar.",
                    downloadText: "¡Felicidades! ¡Se ha eliminado la marca de agua!",
                    errorTips: "Lo sentimos, no se pudo eliminar la marca de agua, inténtalo de nuevo.",
                    beforeDownload: "Lo sentimos, debes iniciar sesión antes de descargar"
                },
                addWatermark: {
                    addWatermark: "Poner Marca de Agua",
                    Text: "Texto",
                    Image: "Imagen",
                    add: "Agregar",
                    textStyle: "Estilo de Texto",
                    textColor: "Color de Texto",
                    Opacity: "Opacidad",
                    Background: "Fondo",
                    Duration: "Duración",
                    textPlaceholder: "Introducir el texto",
                    downloadText: "¡Felicidades! ¡Se ha agregado una marca de agua!",
                    errorTips: "Lo sentimos, el marca de agua no se pudo agregar, inténtalo de nuevo."
                },
                app: {
                    historyVideos: "Vídeos de historia",
                    viewAllFiles: "Ver todos mis archivos",
                    downloadTitleText: "Procesado con éxito!"
                },
                vocalRemover: {
                    customParseTitle: "Procesamiento de audio…",
                    customParseDesc: "El algoritmo de inteligencia artificial ahora funciona, puede tardar un minuto.\t",
                    customParseSuccess: "¡Felicidades! Su audio está listo para descargar.",
                    downloadFile: "Puede obtener una vista previa y descargar el audio ahora",
                    instrumental: "Instrumental",
                    vocals: "Voz"
                },
                PricingPanel: {
                    SavePrice: "Ahorre hasta un 60%",
                    Month: "/mes",
                    BilledAnnually: "Facturado xxx anualmente",
                    CurPlan: "Plan actual",
                    SignUp: "INSCRIBIRSE",
                    BuyNow: "COMPRAR AHORA",
                    Features: "Ver todas las características del plan",
                    PurchasedClick: "Si ha comprado, haga clic en 'Sí' para activar",
                    Account: "Su cuenta:",
                    UserPlan: "xxx Plan",
                    ExpiredTime: "Hasta xxx",
                    RefreshTips: "Actualice la información de su cuenta nuevamente",
                    No: "No",
                    Yes: "Sí",
                    GotIt: "Entiendo"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "Pago por uso",
                    OnlyFor: "Solo para {msg}",
                    PurchaseValid: "Compra válida por 1 año",
                    Benefits: " Beneficios del cliente"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "Editor de video",
                    UploadText1: "HASTA",
                    VideoEditorFreeText1: "Exportar con marca de agua",
                    VideoEditorFreeText2: "exportaciones mínimas de video",
                    VideoEditorFreeText3: "mins para conversión de voz a texto",
                    VideoEditorFreeText4: "caracteres para texto a voz",
                    Compress: "Comprimir y Convertir",
                    CompressFreeText1: "para convertidor",
                    CompressFreeText2: "para compresor",
                    CompressFreeText3: "tiempos limitados",
                    AudioEditor: "Editora de audio",
                    AudioEditorFreeText2: "veces por día",
                    Lite: "lite",
                    SpeechToText: "Dictado a texto",
                    SpeechToTextFreeText1: "hours per month",
                    SpeechToTextFreeText2: "Subtítulos automáticos y transcripción",
                    SpeechToTextFreeText3: "Descargar SRT y archivo de texto",
                    VideoEditorLiteFreeText1: "Exportar con marca de agua",
                    VideoEditorLiteFreeText2: "exportaciones mínimas de video",
                    VideoEditorLiteFreeText3: "para subir",
                    VideoEditorLiteFreeText4: "caracteres/mes para texto a voz",
                    VideoEditorLiteFreeText5: "exportar",
                    Convert: "Compresor y convertidor y más",
                    ConvertFreeText1: "subida de vídeo",
                    ConvertFreeText2: "veces",
                    TTS: "Texto a voz",
                    TTSFreeText1: "Caracteres",
                    TTSFreeText2: "Transcripción automática de IA",
                    TTSFreeText3: "Admite 16 idiomas (actualizado continuamente)",
                    UnlimitedTimes: "Tiempos ilimitados"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Ahorrar 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Editor de video",
                    VideoEditorFreeText1: "Sin marca de agua",
                    VideoEditorFreeText2: "exportaciones de video de una hora",
                    VideoEditorFreeText4: "horas/mes para conversión de voz a texto",
                    Compress: "Comprimir y Convertir",
                    AudioEditor: "Editora de audio",
                    Lite: "lite",
                    SpeechToText: "Dictado a texto",
                    SpeechToTextFreeText2: "Subtítulos automáticos y transcripción",
                    SpeechToTextFreeText3: "Descargar SRT y archivo de texto",
                    VideoEditorLiteFreeText1: "Sin marca de agua",
                    Convert: "Compresor y convertidor y más",
                    TTS: "Texto a voz",
                    TTSFreeText2: "Transcripción automática de IA",
                    TTSFreeText3: "Admite 16 idiomas (actualizado continuamente)",
                    VideoEditorBasicText1: "horas/mes para voz a texto",
                    LimitedTime: "tiempo de uso",
                    TTSTips: "Personajes/mes",
                    Month: "Mensual",
                    Annual: "Anualmente"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(Ahorrar 67%)",
                    VideoEditor: "Editor de video",
                    VideoEditorFreeText1: "Sin marca de agua",
                    Compress: "Comprimir y Convertir",
                    AudioEditor: "Editora de audio",
                    Lite: "lite",
                    SpeechToText: "Dictado a texto",
                    SpeechToTextFreeText2: "Subtítulos automáticos y transcripción",
                    SpeechToTextFreeText3: "Descargar SRT y archivo de texto",
                    VideoEditorLiteFreeText1: "Sin marca de agua",
                    Convert: "Compresor y convertidor y más",
                    TTS: "Texto a voz",
                    TTSFreeText2: "Transcripción automática de IA",
                    TTSFreeText3: "Admite 16 idiomas (actualizado continuamente)"
                },
                PRICING_TIPS: {
                    Default: "Elige tu plan",
                    ConvertingNum: "Puede ### 2 archivos al mismo tiempo",
                    DayLimit: "Su prueba gratuita ha terminado",
                    MaxSize: "El archivo es demasiado grande (xxx)",
                    Subtitle: "Tus subtítulos generados automáticamente se están quedando sin tiempo",
                    Transcription: "Compre más tiempo de transcripción automática",
                    ConvertFileTips: "Su cuenta solo admite videos de no más de @@@.",
                    FileNumUpgradeTips: "¿Quieres ### más archivos al mismo tiempo? ¡actualizar ahora!",
                    DefaultUpgradeTips: "Espérelos o actualice ahora.",
                    ConvertUpgradeTips: "Actualice para continuar.",
                    TimeUpgradeTips: "Actualice para convertir y comprimir más archivos.",
                    TTSTips: "Vaya, tu prueba gratuita ha terminado",
                    TTSUpgradeTips: "Por favor, compre más personajes."
                },
                PRICING_STT: {
                    NAME: "Dictado a texto",
                    DETAILS1: "Subtítulos automáticos y transcripción",
                    DETAILS2: "Descargar SRT y archivo de texto",
                    DETAILS3: "Traducir a más de 100 idiomas",
                    UNIT1: "Horas",
                    UNIT2: "/hora",
                    UNIT3: "kreditojn",
                    UNIT4: "Karakteroj",
                    UNIT5: "/bildo",
                    PLAN1: "Tiempo de subtítulos disponibles:",
                    PLAN2: "Disponeblaj Teksto-Al-Parolaj Signoj: ",
                    PLAN3: "Disponeblaj kreditoj: "
                },
                PRICING_TTS: {
                    NAME: "Texto a voz",
                    DETAILS1: "Transcripción automática de IA",
                    DETAILS2: "Admite 16 idiomas (actualizado continuamente)",
                    DETAILS3: "Traducir a más de 100 idiomas",
                    UNIT1: "Caracteres",
                    UNIT2: " ",
                    UNIT3: "kreditojn",
                    UNIT4: "Karakteroj",
                    UNIT5: "bildo",
                    PLAN1: "Caracteres de texto a voz disponibles:"
                },
                PRICING_BG: {
                    NAME: "Remove Background for Images",
                    DETAILS1: "Removing the background from 1 image requires 1 credits.",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "kreditojn",
                    UNIT2: "/image",
                    PLAN1: "Available credits:"
                },
                PRICING_HELP: {
                    STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                    TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                    BG: "La valida periodo post aĉeto de la funkcio Forigi Fonon estas unu jaro. Ĉi tiu plano ne inkluzivas aliajn premiajn rajtojn de Media.io."
                }
            }
        },
        248: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "Confirmez-vous l'annulation ?",
                    swalOK: "Oui",
                    swalNO: "Non",
                    swalSuccess: "Êtes-vous sûr de vouloir supprimer cette tâche ?",
                    deleteAllTask: "Êtes-vous sûr de vouloir supprimer toutes les tâches ?",
                    download: "Télécharger",
                    otherTools: "Autres outils",
                    editAgain: "ÉDITER À NOUVEAU",
                    editNewFile: "EDITER UN NOUVEAU FICHIER",
                    readyDownload: "Félicitations ! Votre vidéo est prête à être téléchargée.",
                    downloadAll: "Télécharger Tout",
                    converterMoreFiles: "CONVERTIR PLUS DE FICHIERS",
                    saveTo: "Enregistrer sous",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "L'aperçu n'est pas disponible.",
                    browserNotSupport: "Votre navigateur ne supporte pas ce format.",
                    signUpFree: "S'inscrire Gratuitement",
                    signUpSuccess: "Toutes nos félicitations! \nVous êtes désormais membre depuis 30 jours !",
                    makeFail: "Désolé, la génération de votre fichier a échoué, veuillez réessayer.",
                    freeUseTimes: "Vous avez édité des fichiers #### fois en un jour. Veuillez vous connecter pour débloquer la limitation ou éditer d'autres fichiers demain.",
                    loginUseTimes: "Vous avez édité des fichiers #### fois en un jour. Veuillez acheter en ligne pour débloquer la limitation.",
                    Processing: "Traitement, attendez."
                },
                chooseRightPlan: {
                    sizeMinLimit: "Le fichier est trop volumineux ! (####). Le compte gratuit ne prend en charge que les vidéos ne dépassant pas @@@@ Mo. Veuillez acheter un plan en ligne pour en obtenir davantage.",
                    sizeMaxLimit: "Le fichier est trop volumineux ! (####). UniConverter en ligne ne prend en charge que les vidéos ne dépassant pas @@@@ MB. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour le bureau.",
                    useTimeMinLimit: "Vous avez dépassé la limite d'utilisation #### par jour. Veuillez soupirer ou sélectionner un service premium ci-dessous.",
                    useTimeMaxLimit: "Vous avez dépassé la limite d'utilisation #### par jour. Veuillez sélectionner un service premium ci-dessous.",
                    concurrentCountLimit: "Votre compte gratuit ne permet que #### conversions simultanées. Veuillez cliquer sur le bouton Convertir pour continuer, ou acheter un plan en ligne amélioré.",
                    compressConcurrentCountLimit: "Votre compte gratuit ne permet que #### compressions simultanées. Veuillez cliquer sur le bouton compresser pour continuer, ou acheter un plan en ligne mis à niveau.",
                    choose_right_plan: "Choisir le bon plan"
                },
                uploadConvertText: {
                    uploadTitle: "Télécharger vos fichiers...",
                    convertTitle: "Convertir vos fichiers...",
                    compressTitle: "Compression de vos fichiers...",
                    convertSuccess: "Entièrement converti !",
                    compressSuccess: "Complètement compressé !",
                    downloadFile: "Vous pouvez prévisualiser et télécharger la vidéo maintenant",
                    desc: "Veuillez patienter"
                },
                compressSetting: {
                    compressionMethod: "Méthode de compression",
                    byFileSize: "Par taille de fichier",
                    byVariable: "Par débit binaire variable",
                    byAutomatic: "Appuyez sur automatique",
                    highQuality: "Haute qualité",
                    mediumQuality: "Qualité moyenne",
                    lowQuality: "Basse qualité",
                    fileSize: "Taille du fichier(MB)",
                    smallSize: "Petite taille",
                    betterQuality: "Meilleure qualité"
                },
                functionTab: {
                    muteVideo: "Mettre en muet la vidéo",
                    videoSpeed: "Vitesse de la Vidéo",
                    loopVideo: "Vidéo En Boucle",
                    reverseVideo: "Retourner la vidéo",
                    audioCutter: "Coupeur d'Audio",
                    audioJoiner: "Fusionneur d'Audio",
                    imagesToGif: "Images en GIF",
                    videoToGif: "Vidéo en GIF",
                    imageResizer: "Redimensionneur d'Image",
                    mergeVideo: "Fusionner des vidéos",
                    slideshowMaker: "Créateur de diaporamas",
                    addAudioToVideo: "Ajouter de l'audio à la vidéo",
                    removeWatermark: "Enlever un filigrane",
                    addWatermark: "Ajouter un filigrane"
                },
                dialog: {
                    cancel: "Annuler",
                    ok: "OK",
                    setting: "Paramètre",
                    video: "Appliquer à toutes les conversions de vidéos",
                    audio: "Appliquer à toutes les conversions d'audio",
                    image: "Appliquer à toutes les conversions d'image",
                    vector: "Appliquer à toutes les conversions vectorielles",
                    keepOriginSize: "Maintenir la taille originale",
                    videoText: "Vidéo",
                    audioText: "Audio",
                    imageText: "Image",
                    customSize: "Taille Personnalisée",
                    encoder: "Encodeur",
                    resolution: "Résolution",
                    frameRate: "Fréquence de Trame",
                    bitrate: "Débit Binaire",
                    channel: "Canal",
                    sampleRate: "Taux d'Echantillonnage",
                    videoTips: "Nous vous fournissons le meilleur paramètre <br/>paramètres par défaut.",
                    audioTips: "Quand cette option n'est pas cochée, lad<br/> idéo de sortie convertie ne contendra pas d'audio.",
                    imageTips: "Cliquer Verrouiller/Déverrouiller pour garder les <br/>proportions originales ou non.",
                    inputEmail: "Veuillez entrer votre adresse e-mail",
                    trim: "Rogner",
                    trimTips: "Vous pouvez spécifier le point de départ et le point de fin de l'ajustement."
                },
                notify: {
                    title: "Félicitations! Merci pour votre inscription.",
                    message: "L'adresse de téléchargement sera vous envoyée une fois la tâche terminée."
                },
                convertedFiles: {
                    convertedFiles: "Fichiers Convertis",
                    fileStore24Hours: "ichiers vont être sauvegardés pour 24 heures",
                    name: "Name",
                    size: "Taille",
                    operate: "Fonctionner",
                    deleteAll: "Supprimer Tout",
                    nofiles: "Pas de fichier, cliquer sur le bouton dessous pour le convertir!"
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Veuillez vous inscrire gratuitement sur Online UniConverter（à l'origine Media.io） afin de bénéficier de l'adhésion, avec laquelle vous pouvez ajouter des images de plus de #### Mo."
                    },
                    video: {
                        purchaseCancelMinLimit: "La version gratuite de Online UniConverter ne peut télécharger qu'une taille vidéo maximale de #### Mo. Veuillez acheter en ligne et obtenir une taille vidéo illimitée.",
                        cancelMinLimit: "Online UniConverter ne prend en charge que la vidéo ne dépassant pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour Desktop.",
                        cancelMaxLimit: "Online UniConverter ne prend en charge que la vidéo ne dépassant pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour Desktop."
                    },
                    audio: {
                        purchaseCancelMinLimit: "La version gratuite Online UniConverter ne peut télécharger que des fichiers audio jusqu'à #### Mo. Veuillez acheter en ligne et obtenir une taille audio illimitée.",
                        cancelMinLimit: "Online UniConverter ne prend en charge que l'audio ne dépassant pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour Desktop.",
                        cancelMaxLimit: "Online UniConverter ne prend en charge que l'audio ne dépassant pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour Desktop."
                    },
                    notSupport: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour Desktop.",
                    zeroSize: "Veuillez ne pas télécharger de fichiers de taille 0!",
                    uploadFail: "Désolé, l’importation de vos fichiers vidéo a échoué, veuillez réessayer.",
                    incorrectUrl: "Type d'URL incorrect.",
                    dropBoxLogIn: "Veuillez vous connecter à Online UniConverter avant de télécharger des fichiers depuis Dropbox.",
                    googleDriveLogIn: "Veuillez vous connecter à Online UniConverter avant de télécharger des fichiers depuis Google Drive.",
                    youtubeLogIn: "Veuillez vous connecter à Online UniConverter pour modifier les vidéos YouTube en collant l'URL.",
                    youtubeConversionCount: "Vous avez édité des vidéos en ligne #### fois. Veuillez passer à la version Premium et supprimer la limitation.",
                    chooseFiles: "Choisir les fichiers",
                    cancel: "Annuler",
                    Loading: "En cours de Chargement",
                    Processing: "En cours de Traitement"
                },
                conver: {
                    showAccountText1: "Veuillez vous connecter à Online UniConverter (à l'origine Media.io) afin de profiter du service d'adhésion qui vous permet de recevoir une notification par email une fois la tâche de conversion terminée.",
                    showAccountText2: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau.",
                    showAccountText3: "Vous avez converti des fichiers plus de #### fois en une journée. Veuillez convertir les fichiers demain ou enregistrez-vous afin de ne plus être soumis à cette limitation.",
                    showPopWindowText1: "Online UniConverter en prend en chagre que la conversion de #### fichiers simultanée. Veuillez télécharger le convertisseur de bureau pour convertir plusieurs fichiers simultanément.",
                    showPopWindowText2: "Online UniConverter ne prend en charge que les vidéos qui ne dépassent pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau.",
                    showPopWindowText3: "La version gratuite d'Online UniConverter ne permet de télécharger que des vidéos d'une taille maximale de #### Mo. Veuillez passer à la version premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText4: "Vous avez converti des fichiers plus de #### fois en une journée. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau afin de ne plus être soumis à cette limitation ou attendez demain pour convertir les fichiers.",
                    showPopWindowText5: "La version gratuite d'Online UniConverter ne permet de convertir des fichiers que #### fois dans une seule journée. Veuillez passer à la version premium pour ne plus être soumis à cette limitation ou attendez demain pour convertir les fichiers.",
                    converterdFilesLogIn: "Veuillez se connecter à Online UniConverter (initialement Media.io) pour apprécier le service d'adhésion dont vous pouvez télécharger et supprimer les fichiers convertis.",
                    convert: "Convertir",
                    to: "à",
                    download: "Télécharger",
                    toggleDropdown: "Menu Déroulant",
                    converting: "Convertir",
                    uploading: "Chargement",
                    pleaseWait: "Veuillez attendre",
                    retry: "Réessayer",
                    ready: "Prêt",
                    downloadAll: "Télécharger Tout",
                    notifyMe: "Me Notifier quand c'est terminé",
                    addMoreFiles: "Ajouter Plus de Fichiers",
                    chooseFiles: "Choisir Fichiers",
                    fromDropbox: "Depuis Dropbox",
                    fromGoogleDrive: "Depuis Google Drive",
                    hours24_1: "Fichiers seront stockés dans 24 heures. Aller à",
                    hours24_2: "Fichiers Convertis",
                    hours24_3: "A effacer manuellement.",
                    FileConversionFailed: "La Conversion de Fichier échouée, Veuillez utiliser Wondershare UniConverter (initialement Wondershare Video Converter Ultimate) pour Bureau.",
                    delete: "Effacer",
                    preview: "Aperçu"
                },
                reverseVideo: {
                    reverseSpeed: "Vitesse de lecture à l’envers",
                    muteVideo: "Mettre la vidéo en sourdine",
                    soundOptions: "Mettre la vidéo en sourdine",
                    reverse: "Retourner",
                    finalDuration: "Durée finale",
                    duration: "Durée",
                    play: "Lire",
                    stop: "Arrêter",
                    reverseingYourVideo: "Traitement en cours, veuillez patienter.",
                    reverseFileAgain: "Retourner le FICHIER UNE FOIS DE PLUS",
                    reverseAnotherVideo: "Retourner une AUTRE VIDÉO"
                },
                loopVideo: {
                    duration: "Durée",
                    play: "JOUER",
                    stop: "ARRETER",
                    trimYouVideo: "Rogner votre vidéo",
                    startTime: "Heure de Début",
                    endTime: "Heure de Fin",
                    loopClip: "Lire en Boucle ce clip",
                    finalDuration: "Durée Finale",
                    loopingYourVideo: "Lire en Boucle votre Vidéo",
                    loop: "EN BOUCLE",
                    loopFileAgain: "EN BOUCLE LE FICHIER DE NOUVEAU",
                    loopAnotherVideo: "EN BOUCLE UNE AUTRE VIDEO",
                    cutTime: "La version gratuite d'Online UniConverter ne peut rogner la vidéo qu'à hauteur de ####. Veuillez passer à la version Premium et supprimer cette limitation."
                },
                speedVideo: {
                    duration: "Durée",
                    speed: "Vitesse",
                    finalDuration: "Durée Finale",
                    soundOptions: "Options du Son",
                    muteVideo: "Atténuer Vidéo",
                    start: "Commencer",
                    speedFileAgain: "ACCELERER FICHIER DE NOUVEAU",
                    speedAnotherVideo: "ACCELERER AUTRE VIDEO"
                },
                youtubeUrl: {
                    go: "ALLER",
                    createYoutubeThumbnail: "Cliquer ici pour créer une miniature youtube",
                    rightClick: "Clic-droit sur l'image et sélectionner \"Enregistrer l'image sous ...\"",
                    noLogIn: "Veuillez s'identifier à Online UniConverter pour télécharger plus de miniatures YouTube.",
                    noLongInType: "LimiteChargement_Youtube",
                    noVipTip: "La version gratuite de Online UniConverter peut supporter seulement 5 fois le téléchargement de miniatures YouTube, Veuillez passer à la version premium pour enlever la limitation.",
                    noYoutubeUrl: "Désolé, nous supportons que les URL YouTube.",
                    noImgTip: "Veuillez vérifier l'URL que vous avez entré. Or vous pouvez utiliser Wondershare UniConverter pour le bureau.",
                    errorUrl: "Le type incorrect d'URL."
                },
                cutter: {
                    onlyDesktop: "Online UniConverter (initialement Media.io) découpeur audio est maintenant disponible que pour le bureau.",
                    onYourComputer: "Veuillez l'apprécier avec Chrome ou Firefox sur votre ordinateur.",
                    loading: "Chargement",
                    size: "Taille",
                    duration: "Durée",
                    cut: "COUPER",
                    from: "DE",
                    to: "A",
                    mode: "Mode",
                    keep: "Maintenir",
                    remove: "Supprimer",
                    fade: "Disparaître",
                    fadeIn: "Apparaître",
                    fadeOut: "Disparaître En Fondu",
                    processing: "Traitement",
                    "waitMoment.": "Veuillez attendre un moment.",
                    cuttingYourAudio: "Le découpage de votre audio est en cours",
                    fileReady: "Votre fichier audio est prêt",
                    editFileAgain: "EDITER FICHIER DE NOUVEAU",
                    cutAnotherAudio: "COUPER UN AUTRE AUDIO"
                },
                compress: {
                    showAccountText1: "Veuillez vous connecter à Online UniConverter (à l'origine Media.io) pour pouvoir bénéficier du service d'adhésion qui vous permet de recevoir une notification par email une fois la tâche de compression terminée. ",
                    showAccountText2: "Vous avez compressé des fichiers plus de #### fois en une journée. Veuillez attendre demain pour convertir les fichiers ou enregistrez-vous afin de ne plus être soumis à cette limitation.",
                    showPopWindowText1: "Online UniConverter ne permet de compresser qu'un seul fichier à la fois. Veuillez télécharger le convertisseur de bureau pour compresser plus de fichiers simultanément.",
                    showPopWindowText2: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Compressing Ultimate) pour bureau.",
                    showPopWindowText3: "Online UniConverter ne prend en charge que les vidéos qui ne dépassent pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Compressing Ultimate) pour bureau.",
                    showPopWindowText4: "La version gratuite d'Online UniConverter ne permet de télécharger que des fichiers vidéo d'une taille maximale de #### Mo. Veuillez passer à la version premium pour ne plus être soumis à cette limitation.",
                    showPopWindowText5: "Vous avez compressé des fichiers plus de #### fois en une journée. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Compressing Ultimate) pour bureau afin de ne plus être soumis à cette limitation ou attendez demain pour convertir les fichiers.",
                    showPopWindowText6: "La version gratuite d'Online UniConverter ne permet de compresser des fichiers que #### fois en une seule journée. Veuillez passer à la version premium afin de ne plus être soumis à cette limitation ou attendez demain pour Continuer.",
                    compressedSuccess: "Compressé avec Succès",
                    outputSettings: "Paramètres de Sortie",
                    quality: "Qualité",
                    resolution: "Résolution",
                    source: "SOURCE",
                    resetSize: "Réinitialiser la taille",
                    format: "Format",
                    retry: "Réessayer",
                    download: "téléchargement",
                    toggleDropdown: "Menu Déroulant",
                    compressNew: "Compresser un Nouveau",
                    compressing: "En cours de Compression",
                    compress: "Compresser",
                    pleaseWait: "S'il vous plaît, attendez",
                    notifyMe: "Me Notifier quand c'est terminé",
                    addMoreFiles: "Ajouter Plus de Fichiers",
                    uploading: "Chargement",
                    save: "Enregistrer",
                    moreSettings: "Plus de paramètres",
                    finished: "Terminé",
                    uploadTipsHTML: "Vous pouvez télécharger des fichiers jusqu'à @@@@ Mo, <a href='javascript:;' class='link'>choisissez un forfait</a> pour en obtenir plus.",
                    uploadTipsText: "Vous pouvez télécharger des fichiers jusqu'à @@@@ Mo, choisissez un forfait pour en obtenir plus."
                },
                img: {
                    showPopWindowText1: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau.",
                    showPopWindowText2: "Online UniConverter permet uniquement de compresser #### fichiers images simultanément. Veuillez télécharger la version de bureau de Wondershare UniConverter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText3: "Online UniConverter permet uniquement de compresser #### fichiers images simultanément. Veuillez passer à la version premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText4: "Online UniConverter ne permet de convertir que #### images simultanément. Veuillez télécharger la version de bureau de Wondershare UniConverter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText5: "Online UniConverter ne permet de convertir que #### images simultanément. Veuillez passer à la version premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText6: "Online UniConverter ne permet de télécharger que des images qui ne dépassent pas #### Mo. Veuillez vous connecter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText7: "Vous avez déjà compressé des images #### fois en une seule journée. Veuillez poursuivre la compression des images demain ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    showPopWindowText8: "Vous avez déjà converti des images #### fois en une seule journée. Veuillez poursuivre les conversions demain ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    showPopWindowText9: "Vous avez déjà compressé des images #### fois en une seule journée. Veuillez poursuivre la compression des images demain ou utilisez la version de bureau de Wondershare UniConverter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText10: "Vous avez déjà compressé des images #### fois en une seule journée. Veuillez continuer demain ou passez à la version premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText11: "Vous avez déjà converti des images #### fois en une seule journée. Veuillez poursuivre la conversion d'images demain ou utilisez la version de bureau de Wondershare UniConverter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText12: "Vous avez déjà converti des images #### fois en une seule journée. Veuillez continuer demain ou passez à la version premium afin de ne plus être soumis à cette limitation.",
                    compressorImg: "Vous avez compressé des images au dessus de #### fois en une seule journée. Veuillez  essayer de compresser plus d'images, ou s'inscrire gratuitement pour enlever la limitation.",
                    converterImg: "Vous avez converti des fichiers au dessus de You #### fois en une seule journée. Veuillez essayer de compresser plus de fichiers, ou s'inscrire gratuitement pour enlever la limitation.",
                    compressing: "COMPRESSER",
                    converting: "CONVERTIR",
                    download: "téléchargement",
                    toggleDropdown: "Menu Déroulant",
                    uploading: "Chargement",
                    retry: "Réessayer",
                    ready: "Prêt",
                    to: "à",
                    downloadAll: "Télécharger Tout",
                    addMoreFiles: "Ajouter Plus de Fichiers",
                    chooseFiles: "Choisir les Fichiers",
                    fromDropbox: "De Dropbox",
                    fromGoogleDrive: "De Google Drive",
                    keepOriginalSize: "Maintenir taille originale",
                    customSize: "Taille personnalisée",
                    to16_8000: "Plrière la largeur en pixel ou sa hauteur en pixel entre 16 et 8000",
                    convertAllFilesTo: "Convertir tous les fichiers en",
                    deleteAll: "TOUT SUPPRIMER",
                    compress: "COMPRESSER",
                    convert: "CONVERTIR"
                },
                gif: {
                    showAccountText1: "Online UniConverter ne permet de télécharger que des images qui ne dépassent pas #### Mo. Veuillez vous connecter afin de ne plus être soumis à cette limitation.",
                    showAccountText2: "Vous avez déjà créé des GIF #### fois en une seule journée. Veuillez essayer de créer d'autres GIF demain ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    showAccountText3: "Vous avez déjà créé des GIF #### fois en une seule journée. Veuillez continuer demain ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    showPopWindowText1: "Online UniConverter ne permet que de télécharger #### images simultanément pour créer un GIF. Veuillez essayer la version de bureau de Wondershare UniConverter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText2: "Online UniConverter ne permet que de télécharger #### images simultanément pour créer un GIF. Veuillez passer à la version Premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText3: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau.",
                    showPopWindowText4: "Vous avez déjà créé des GIF #### fois en une seule journée. Veuillez essayer de créer d'autres GIF demain ou utilisez Wondershare UniConverter pour bureau afin de ne plus être soumis à cette limitation.",
                    showPopWindowText5: "Vous avez déjà créé des GIF #### fois en une seule journée. Veuillez essayer de créer d'autres GIF demain ou passez à la version premium afin de ne plus être soumis à cette limitation",
                    showPopWindowText6: "Désolé, la conversion du GIF a échoué. Veuillez utiliser la version de bureau de Wondershare UniConverter pour convertir efficacement les images en GIF.",
                    showPopWindowText7: "Un seul type de filigrane est pris en charge. Veuillez utiliser la version de bureau de Wondershare UniConverter pour ajouter d'autres filigranes.",
                    showPopWindowText8: "Online UniConverter permet uniquement de télécharger des vidéos ne dépassant pas #### Mo. Veuillez utiliser la version de bureau de Wondershare UniConverter pour télécharger des vidéos de grande taille.",
                    showPopWindowText9: "Online UniConverter permet uniquement de télécharger des vidéos ne dépassant pas #### Mo. Veuillez passer à la version Premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText10: "Désolé, votre ou vos fichiers vidéo n'ont pas pu être importés. Veuillez réessayer.",
                    showPopWindowText11: "Désolé, votre récupération de vidéo Youtube a échoué. Veuillez réessayer.",
                    showPopWindowText12: "Le type d'URL est incorrect. Désolé, nous ne prenons en charge que les vidéos YouTube au format GIF.",
                    showPopWindowText13: "Vous avez créé des GIF à partir de vidéos en ligne #### fois. Veuillez continuer demain ou utiliser Wondershare UniConverter pour bureau.",
                    showPopWindowText14: "Vous avez créé des GIF à partir de vidéos en ligne #### fois. Veuillez continuer demain ou passez à la version Premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText15: "Veuillez vous connecter à Online UniConverter pour créer un GIF à partir d'une ou plusieurs vidéos YouTube en collant des URL.",
                    showPopWindowText16: "La durée actuelle de votre GIF est supérieure à la limite de #### secondes pour Online UniConverter. Veuillez utiliser la version de bureau de Wondershare UniConverter afin de ne plus être soumis à cette limitation.",
                    showPopWindowText17: "Désolé, la conversion du GIF a échoué. Veuillez utiliser la version de bureau de Wondershare UniConverter pour créer des GIF efficacement.",
                    showPopWindowText18: "Désolé, la conversion du GIF a échoué. Veuillez utiliser la version de bureau de Wondershare UniConverter pour créer des GIF efficacement.",
                    download: "téléchargement",
                    toggleDropdown: "Menu Déroulant",
                    imagesToGif: "Images en GIF",
                    videoToGif: "Vidéo en GIF",
                    loading: "Chargement",
                    cancel: "Annuler",
                    makingGif: "Création de GIF",
                    suspended: "SUSPENDU",
                    play: "JOUER",
                    width: "Largeur",
                    height: "Hauteur",
                    pixels: "pixels",
                    widthRangePixels: "La gamme de largeur est de 50-500 pixels.",
                    heightRangePixels: "La gamme de hauteur est de 50-500 pixels.",
                    frameRate: "Taux de Trame",
                    fps: "fps",
                    fpsTip: "Plus la fps est élevée, plus votre animation deviendra lisse. Vous pouvez la mettre entre 1-30.",
                    textWatermark: "Tatouage Text",
                    createGif: "Créer GIF",
                    createNewGif: "CREER NOUVEAU GIF",
                    remakeGif: "RECREER GIF",
                    trimYourVideo: "Rogner Votre Vidéo",
                    timeTip: "Utiliser le curseur pour sélectionner la durée de votre GIF, ou entrer précisément l'heure de Début et l'heure de Fin.",
                    StartTime: "Heure de Début",
                    endTime: "Heure de Fin",
                    outputSize: "Taille de Sortie",
                    fpsMeans: "Fps veut dire en combien de frames par seconde votre GIF fonctionnera. Plus la fps est élevée, plus votre animation deviendra lisse.",
                    imageWatermark: "Tatouage Image"
                },
                mute: {
                    showAccountText1: "Vous avez déjà créé des GIF #### fois en une seule journée. Veuillez attendre demain afin d'essayer de créer d'autres GIF ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    showAccountText2: "Veuillez vous connecter à Online UniConverter pour couper le son des vidéos YouTube en collant l'URL.",
                    showPopWindowText1: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser la version de bureau de Wondershare UniConverter pour mettre vos vidéos en sourdine.",
                    showPopWindowText2: "Online UniConverter permet uniquement de télécharger des vidéos ne dépassant pas #### Mo. Si vous dépassez cette taille, veuillez essayer la version de bureau de Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour télécharger des fichiers de grande taille.",
                    showPopWindowText3: "La version gratuite d'Online UniConverter permet uniquement de télécharger des vidéos ne dépassant pas #### Mo. Veuillez passer à la version Premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText4: "Vous avez déjà créé des GIF #### fois en une seule journée.  Veuillez attendre demain afin d'essayer de créer d'autres GIF ou passez à la version Premium afin de ne plus être soumis à cette limitation.",
                    showPopWindowText5: "Désolé, votre ou vos fichier(s) vidéo n'ont pas pu être importés. Veuillez réessayer.",
                    showPopWindowText6: "Online UniConverter ne permet de télécharger que des vidéos ne qui ne dépassent pas #### Mo. Si vous dépassez cette taille, veuillez essayer la version de bureau de Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour télécharger des fichiers de grande taille.",
                    showPopWindowText7: "Type d'URL incorrect. Désolé, nous ne prenons en charge que les vidéos YouTube au format GIF.",
                    showPopWindowText8: "Vous avez mis en sourdine des vidéos en ligne #### fois. Veuillez passer à la version Premium afin de supprimer la limitation.",
                    showPopWindowText9: "Désolé, la conversion de la vidéo a échoué. Veuillez utiliser la version de bureau de Wondershare UniConverter pour que l’opération se déroule avec succès.",
                    download: "téléchargement",
                    toggleDropdown: "Menu Déroulant",
                    mute: "Atténuer Volume",
                    previewNot: "Aperçu non disponible.",
                    browserNotSupport: "Votre navigateur ne supporte pas ce format.",
                    muteAnother: "Atténuer un autre"
                },
                user: {
                    user1: "Bienvenue à Wondershare ID",
                    user2: "Vous êtes nouveau ? ",
                    user3: "Inscrivez-vous",
                    user4: "Adresse email",
                    user5: "Mot de passe",
                    user6: "Se souvenir de moi",
                    user7: "Vous avez oublié votre mot de passe ?",
                    user8: "Connexion",
                    user9: "ou",
                    user10: "Connectez-vous avec",
                    user11: "Vous avez déjà un compte ?",
                    user12: "Connectez-vous ici",
                    user13: "Code de vérification",
                    user14: "Cliquez sur le bouton pour envoyer un code de vérification à l'adresse email saisie.",
                    user15: "S'inscrire",
                    user16: "Veuillez saisir une adresse email valide.",
                    user17: "L’adresse email ne peut pas être vide",
                    user18: "Le mot de passe doit comporter entre 6 et 16 caractères ou chiffres.",
                    user19: "Le mot de passe ne peut pas être vide",
                    user20: "Le code de vérification ne peut pas être vide",
                    user21: "Le nom ne peut pas être vide",
                    user22: "Envoyer le code",
                    user23: "Nom d'utilisateur",
                    user24: "Rejoignez Online UniConverter (à l'origine Media.io) pour obtenir de meilleurs services gratuits"
                },
                ediror: {
                    editText1: "Déposez-le comme s’il vous brulait",
                    editText2: "Ajoutez vos fichiers en les déposant ici",
                    editText3: "Faites glisser-déposer ou cliquez pour ajouter une vidéo",
                    editText4: "Saturation",
                    editText5: "Contraste",
                    editText6: "Luminosité",
                    editText7: "Personnalisé",
                    editText8: "1:1 (Carré)",
                    editText9: "4:3 (Télévision classique)",
                    editText10: "16:9 (Écran large)",
                    editText11: "Horizontal",
                    editText12: "Vertical",
                    editText13: "Vidéo",
                    editText14: "Aucun résultat de recherche",
                    editText15: "Audio",
                    editText16: "Sens inverse des aiguilles d'une montre",
                    editText17: "Sens des aiguilles d'une montre",
                    editText18: "Chargement ...",
                    editText19: "Annuler",
                    editText20: "Taille",
                    editText21: "Durée",
                    editText22: "Résolution",
                    editText23: "Découper",
                    editText24: "Recadrer",
                    editText25: "Ajuster",
                    editText26: "Faire tourner",
                    editText27: "Retourner",
                    editText28: "Sauvegarder en",
                    editText29: "Démarrer",
                    editText30: "Traitement",
                    editText31: "Éditer une autre vidéo",
                    editText32: "Vous avez déjà édité des vidéos 5 fois en une seule journée. Veuillez Continuer demain ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    editText33: "Vous avez déjà édité des vidéos 5 fois en une seule journée. Veuillez Continuer demain ou connectez-vous afin de ne plus être soumis à cette limitation.",
                    editText34: "Online UniConverter ne prend en charge que les vidéos ne dépassant pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau.",
                    editText35: "Online UniConverter ne prend en charge que les vidéos ne dépassant pas #### Mo. Veuillez utiliser Wondershare UniConverter (à l'origine Wondershare Video Converter Ultimate) pour bureau.",
                    editText36: "Vous avez déjà édité des vidéos #### fois en une seule journée. Veuillez Continuer demain ou utilisez Wondershare UniConverter pour bureau afin de ne plus être soumis à cette limitation.",
                    editText37: "Online UniConverter ne prend pas en charge ce format. Veuillez utiliser Wondershare UniConverter pour bureau.",
                    editText38: "Enregistrer",
                    editText39: "Image",
                    editText40: "Vecteur"
                },
                nav: {
                    navText1: "Centre d'utilisateurs",
                    navText2: "Déconnexion",
                    navText3: "Connexion",
                    navText4: "S'INSCRIRE",
                    navText5: "\tINSCRIVEZ-VOUS POUR 30 JOURS GRATUITS",
                    convertedFiles: "Fichiers Convertis",
                    myAccount: "Mon compte"
                },
                popup: {
                    text1: "UniConverter pour bureau",
                    text2: "Convertir vidéo/audio dans plus de 1 000 formats. ",
                    text3: "Vitesse de conversion vidéo 90X plus rapide.",
                    text4: "Compresser des vidéos par lots sans perte pour réduire la tailler de fichier. ",
                    text5: "Fonctions d'édition utiles pour découper, recadrer des vidéos, appliquer des effets, etc.",
                    text6: "Convertir et personnaliser des images en JPG, PNG, TIFF, GIF, BMP en qualité.",
                    text7: "Compresser et personnaliser des images en JPG, PNG, TIFF, GIF, BMP sans limites.",
                    downloadWin: "https://download-fr.wondershare.com/uniconverter13_full9645.exe",
                    downloadMac: "https://download-fr.wondershare.com/uniconverter13-mac_full9646.zip",
                    text8: "Passer à la version Premium",
                    text9: "ANNUELLEMENT",
                    text10: "€ 2,95",
                    text11: "€ 4,95",
                    text12: "mois",
                    text13: "annulation à tout moment",
                    buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7288&license_id=297&sub_lid=0&currency=EUR&domain=fr&language=French&verify=770f143a701656f6e3597b1878546da7",
                    text14: "MENSUELLEMENT",
                    text15: "€ 9,95",
                    text16: "mois",
                    text17: "annulation à tout moment",
                    buy_now_month: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7288&license_id=294&sub_lid=0&currency=EUR&domain=fr&language=French&verify=6507c1750ca5ca518f4f08141a40955c",
                    text18: "500 Mo",
                    text19: "Taille maximale de fichier",
                    text20: "30",
                    text21: "Conversions simultanées",
                    text22: "Haute vitesse ",
                    text23: "Conversion",
                    text24: "Télécharger",
                    text25: "Illimité",
                    text26: "Compression de fichiers",
                    text26_1: "Notification par courriel",
                    text27: "Meilleur vendeur",
                    text28: "Abonnement en ligne pour un an",
                    text29: "Abonnement en ligne pour un mois",
                    text31: "Essai Gratuit",
                    text32: "Acheter",
                    text33: "https://uniconverter.wondershare.fr/",
                    text34: "https://www.media.io/fr/mobile-download-guidance.html"
                },
                resize: {
                    download: "téléchargement",
                    toggleDropdown: "Menu Déroulant",
                    loading: "Chargement",
                    cancel: "Annuler",
                    byPixels: "Par Pixels(px)",
                    byPercentage: "Par Pourcentage (%)",
                    originalLockTip: "Cliquer Verrouiller/Déverrouiller pour maintenir le Rapport original de Hauteur/Largeur ou non.",
                    resize: "REDIMENSIONNER",
                    lockTip: "Cliquer sur ON/OFF Rapport Hauteur/Largeur",
                    pixels16To8000: "Veuillez entrer la largeur en pixel et la hauteur en pixel entre 16 et 8000.",
                    percentage1To500: "Veuillez entrer le pourcentage de la largeur et de la hauteur entre 1 et 500.",
                    stretch: "Etirer",
                    stretchTip: "L'image ou les images sera(ont) étirée(s) pour correspondre à la nouvelle taille.",
                    fill: "Remplir",
                    fillTip: "L'image ou les images sera(ont) recadrée(s) pour correspondre à la nouvelle taille.",
                    fit: "Ajuster",
                    fitTip: "L'image ou les images sera(ont) recadrée(s) pour correspondre à la nouvelle taille et la(es) partie(s) restante(s) sera(ont) peinte(s) avec la couleur de fond sélectionnée.",
                    selectColor: "Quand l'option Ajuster est choisie, votre(s) image(s) sera(ont) peinte(s) avec la couleur sélectionnée.",
                    resizingImages: "Redimensionner les images",
                    resizedFail: "Vos images ont été redimensionnées avec Echec",
                    resizedSuccess: "Vos images ont été redimensionnées avec Succès",
                    sorryYourFiles: "Désolé, votre(s) fichier(s)",
                    resizedFailDownload: "redimensionné(s) avec échec, Veuillez télécharger",
                    desktopVersion: "la version bureau",
                    tryAgain: "pour essayer de nouveau.",
                    resizeMore: "REDIMENSIONNER PLUS D'IMAGES",
                    fitColor: "Ajuster Couleur"
                },
                joiner: {
                    onlyDesktop: "Online UniConverter (initialement Media.io) découpeur d'audio est disponible seulement pour le bureau maintenant.",
                    onYourComputer: "Veuillez l'apprécier avec Chrome ou Firefox sur votre ordinateur.",
                    loading: "Chargement",
                    importFailed: "Importation échouée. Si vous avez besoin de continuer la fusion d'audio, Veuillez supprimer le fichier échoué avant la fusion.",
                    fadeIn: "Cliquer sur to sélectionner/désélectionner audio fondu entrant.",
                    fadeInOut: "Cliquer sur to sélectionner/désélectionner audio fondu entrant et sortant.",
                    fadeOut: "Cliquer sur to sélectionner/désélectionner audio fondu sortant.",
                    startTime: "Heure de Début",
                    endTime: "Heure de Fin",
                    waitMoment: "Les fichiers sont en train de charger, veuillez attendre un petit moment.",
                    merge: "Fusion",
                    mergingYourAudio: "La fusion de vos fichiers audio est en cours",
                    fileReaded: "Votre fichier audio est prêt",
                    editFileAgain: "EDITER LE FICHIER DE NOUVEAU",
                    mergeAnother: "FUSIONNER UN AUTRE",
                    joinCountFree: "Vous avez édité des fichiers #### fois en une seule journée. Veuillez vous connecter pour enlever la limitation, ou éditer plus de fichiers demain.",
                    joinCountLogin: "Vous avez édité des fichiers #### fois en une seule journée. Veuillez utiliser Wondershare UniConverter (initialement Wondershare Video Converter Ultimate) pour le Bureau. ",
                    fileNumFree: "La version gratuite Online UniConverter permet seulement à ####  fichiers d'être fusionnés à la fois. Veuillez passer la version Premium et enlever la limitation.",
                    fileNumLogin: "Online UniConverter permet seulement à #### fichiers d'être fusionnés à la fois. Veuillez utiliser Wondershare UniConverter (initialement Wondershare Video Converter Ultimate) pour le Bureau."
                },
                editorVideo: {
                    mergeVideos: "Fusionner des vidéos",
                    slideshowMaker: "Créateur de diaporamas",
                    addAudioToVideo: "Ajouter de l'audio à la vidéo",
                    merge: "FUSIONNER",
                    addFiles: "Ajouter des fichiers",
                    addAudio: "Ajouter le son",
                    fitWithBorder: "Ajustement avec bordure",
                    zoomCrop: "Zoom et recadrage",
                    setting: "Paramètres",
                    goBack: "Retour",
                    audioOption: "Options audio",
                    cropOptions: "Options de recadrage",
                    Crossfade: "Fondu enchaîné",
                    instagramVideo: "Vidéo Instagram",
                    youTubeVideo: "Vidéo YouTube",
                    instagramStory: "Story Instagram",
                    facebookVideo: "Vidéo Facebook",
                    imageDuration: "Durée de l'image",
                    transition: "Transition",
                    applyAllImg: "S'applique à toutes les images",
                    outputFormat: "Format de sortie",
                    trimAudio: "Découpe Audio",
                    audioTrackVolume: "Volume de la piste audio",
                    videoSoundVolume: "Volume sonore de la vidéo",
                    startTime: "Heure de début",
                    endTime: "Heure de fin",
                    empty_file: "Désolé, votre vidéo n'a pas été manipulée de quelque manière que ce soit, veuillez passer aux outils en ligne pour votre opération vidéo."
                },
                memeGenerator: {
                    "meme-generator": "Générateur de mèmes",
                    template: "Modèle",
                    Create: "produire",
                    OriginalSize: "Format original",
                    FormateNotSupport: "Désolé, Online Uniconverter ne prend pas en charge ce format d'image, veuillez télécharger un autre fichier image.",
                    ResizeFor: "Redimensionner pour",
                    OutputSettings: "Paramètres de sortie",
                    UploadGifFail: "Désolé, votre fichier GIF n'a pas pu être importé, veuillez réessayer.",
                    UploadFail: "Désolé, votre fichier image n'a pas pu être importé, veuillez réessayer.",
                    GenerateFail: "Désolé, votre mème n'a pas été envoyé au générateur, veuillez réessayer.",
                    onlyDesktop: "Le générateur de mèmes en ligne Uniconverter (à l'origine Media.io) n'est désormais disponible que sur ordinateur personnel.",
                    onYourComputer: "Veuillez en profiter avec Chrome ou Firefox sur votre ordinateur.",
                    downloadText: "Toutes nos félicitations! Votre mème est prêt à être téléchargé.",
                    enterYourText: "Entrez votre texte",
                    textPlaceholder: "TEXTE ICI",
                    topTextPlaceholder: "TEXTE ICI",
                    bottomTextPlaceholder: "TEXTE DU BAS ICI"
                },
                removeWatermark: {
                    wrapperTitle: "Enlever un filigrane",
                    Generator: "Enlever un filigrane",
                    AddArea: "Ajouter une zone",
                    Watermark: "Filigrane",
                    Duration: "Durée",
                    emptyText: "Cliquez sur 'Ajouter une zone' pour sélectionner la zone de la vidéo dont vous souhaitez supprimer le filigrane.",
                    limitTips: "Désolé, nous ne prenons en charge que la suppression de 10 filigranes. Veuillez choisir un service premium ci-dessous.",
                    downloadText: "Félicitations ! Le filigrane a été enlevé !",
                    errorTips: "Désolé, votre filigrane n'a pas été supprimé, veuillez réessayer.",
                    beforeDownload: "Désolé,  veuillez vous connecter avant de télécharger."
                },
                addWatermark: {
                    addWatermark: "Ajouter un filigrane",
                    Text: "Texte",
                    Image: "Image",
                    add: "Ajouter",
                    textStyle: "Police",
                    textColor: "Couleur",
                    Opacity: "Transparence",
                    Background: "Fond",
                    Duration: "Durée",
                    textPlaceholder: "Entrez votre texte",
                    downloadText: "Félicitations ! Le filigrane a été ajouté !",
                    errorTips: "Désolé, votre filigrane n'a pas pu être ajouté, veuillez réessayer."
                },
                app: {
                    historyVideos: "Vidéos d'histoire",
                    viewAllFiles: "Voir tous mes fichiers",
                    downloadTitleText: "Traité avec succès!"
                },
                vocalRemover: {
                    customParseTitle: "Traitement audio…",
                    customParseDesc: "L'algorithme d'intelligence artificielle fonctionne maintenant, cela peut prendre une minute.\t",
                    customParseSuccess: "Toutes nos félicitations! Votre audio est prêt à être téléchargé.",
                    downloadFile: "Vous pouvez prévisualiser et télécharger l'audio maintenant\t",
                    instrumental: "Instrumentale",
                    vocals: "Voix"
                },
                PricingPanel: {
                    SavePrice: "Save Up to 60%",
                    Month: "/mo",
                    BilledAnnually: "Billed xxx annually",
                    CurPlan: "Current Plan",
                    SignUp: "SIGN UP",
                    BuyNow: "BUY NOW",
                    Features: "See All Plan Features",
                    PurchasedClick: "If you have purchased, please click 'Yes' to active",
                    Account: "Your Account: ",
                    UserPlan: "xxx Plan",
                    ExpiredTime: "Until xxx",
                    RefreshTips: "Refresh your account information again",
                    No: "No",
                    Yes: "Yes",
                    GotIt: "Got it"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "Pay As You Go",
                    OnlyFor: "Only for {msg}",
                    PurchaseValid: "Purchase valid for 1 year",
                    Benefits: "Customer benefits"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "Video Editor",
                    UploadText1: "Up to",
                    VideoEditorFreeText1: "Export with watermark",
                    VideoEditorFreeText2: "min video exports",
                    VideoEditorFreeText3: "mins for Speech-to-text",
                    VideoEditorFreeText4: "characters for Text-to-speech",
                    Compress: "Compress & Converter",
                    CompressFreeText1: "for converter",
                    CompressFreeText2: "for compressor",
                    CompressFreeText3: "times limited",
                    AudioEditor: "Audio Tools",
                    AudioEditorFreeText2: "times per day",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText1: "hours per month",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "Export with watermark",
                    VideoEditorLiteFreeText2: "min video exports",
                    VideoEditorLiteFreeText3: "for uploading",
                    VideoEditorLiteFreeText4: "characters/mo for Text-to-speech",
                    VideoEditorLiteFreeText5: "export",
                    Convert: "Compressor & Converter & More",
                    ConvertFreeText1: "video upload",
                    ConvertFreeText2: "times",
                    TTS: "Text-To-Speech",
                    TTSFreeText1: "Characters",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    UnlimitedTimes: "Unlimited times"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Save 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    VideoEditorFreeText2: "hour video exports",
                    VideoEditorFreeText4: "hrs/mo for Speech-to-text",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    VideoEditorBasicText1: "hours/mo for Speech-to-text",
                    LimitedTime: "usage time",
                    TTSTips: "Characters/mo",
                    Month: "Monthly",
                    Annual: "Annually"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(Save 67%)",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)"
                },
                PRICING_TIPS: {
                    Default: "Choose Your Plan",
                    ConvertingNum: "You can ### 2 files at the same time",
                    DayLimit: "Your free trial is over",
                    MaxSize: "File is too large(xxx)",
                    Subtitle: "Your auto-generated subtitles are running out of time",
                    Transcription: "Buy More Auto-transcription Time",
                    ConvertFileTips: "Your account only supports videos no more than @@@.",
                    FileNumUpgradeTips: "Wanna ### more files at the same time? upgrade now!",
                    DefaultUpgradeTips: "Please wait for them or upgrade now.",
                    ConvertUpgradeTips: "Please upgrade to continue.",
                    TimeUpgradeTips: "Upgrade to convert and compress more files.",
                    TTSTips: "Oops, your free trial is over",
                    TTSUpgradeTips: "Please buy more characters",
                    FileSizeExceedTips: "File is too large",
                    FileSizeLimit: "The file size exceeds the free limit.",
                    UpgradeSignTips: "Please sign up to continue uploading large files or upgrade your account.",
                    UpgradeTips: "Please upgrade and continue uploading.",
                    FileOver: "To ensure the editing experience, uploading files over 2G is not supported for now.",
                    FileDuration: "The max export limit duration is 2 hours, so you will have to split the video into smaller clips and try again.",
                    FileLength: "Your video length exceeds the free limit."
                },
                PRICING_STT: {
                    NAME: "Speech-To-Text",
                    DETAILS1: "Auto subtitle and transcription",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Hrs",
                    UNIT2: "/hour",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "/image",
                    PLAN1: "Available Subtitles Time: ",
                    PLAN2: "Available Text-To-Speech Characters: ",
                    PLAN3: "Available credits: "
                },
                PRICING_TTS: {
                    NAME: "Text-To-Speech",
                    DETAILS1: "AI automatic transcription",
                    DETAILS2: "Support 16 Languages (Continually Updated)",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Characters",
                    UNIT2: " ",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "image",
                    PLAN1: "Available Text-To-Speech Characters:"
                },
                PRICING_BG: {
                    NAME: "Remove Background for Images",
                    DETAILS1: "Removing the background from 1 image requires 1 credits.",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "credits",
                    UNIT2: "/image",
                    PLAN1: "Available credits:"
                },
                PRICING_HELP: {
                    STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                    TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                    BG: "The valid period after purchasing Remove Background feature is one year. This plan does not include other premium rights of Media.io."
                }
            }
        },
        249: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "Confermi di annullare?",
                    swalOK: "Sì",
                    swalNO: "No",
                    swalSuccess: "Sei sicuro/a di cancellare la missione?",
                    deleteAllTask: "Sei sicuro/a di cancellare le missioni?",
                    download: "download",
                    otherTools: "Altri Strumenti",
                    editAgain: "MODIFICA DI NUOVO",
                    editNewFile: "MODIFICA NUOVO FILE",
                    readyDownload: "Congratulazione! Il tuo video è pronto per il download.",
                    downloadAll: "Download TUTTO",
                    converterMoreFiles: "CONVERTI ALTRI FILE",
                    saveTo: "Salve in",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "L'anteprima non è disponibile. ",
                    browserNotSupport: "Il tuo browser non supporta questo formato. ",
                    signUpFree: "Iscriviti Gratis",
                    signUpSuccess: "Congratulazioni! \nOra hai ottenuto con successo il tuo abbonamento di 30 giorni!",
                    makeFail: "Spiacenti, la generazione del file non è riuscita, riprova.",
                    freeUseTimes: "Hai modificato i file #### volte in un giorno. Accedi per rimuovere la limitazione o modifica altri file domani.",
                    loginUseTimes: "Hai modificato i file #### volte in un giorno. Si prega di acquistare online per rimuovere la limitazione.",
                    Processing: "Elaborazione, attendere. "
                },
                chooseRightPlan: {
                    sizeMinLimit: "Il file è troppo grande! (####). L'account gratuito supporta solo video non più di @@@@ MB. Si prega di acquistare un piano online per ottenere di più.",
                    sizeMaxLimit: "Il file è troppo grande! (####). Online UniConverter supporta solo il video non più di @@@@ MB. Per favore usa Wondershare UniConverter (originariamente Wondershare Video Converter Ultimate) per Desktop.",
                    useTimeMinLimit: "Vous avez dépassé la limite d'utilisation #### par jour. Veuillez soupirer ou sélectionner un service premium ci-dessous.",
                    useTimeMaxLimit: "Vous avez dépassé la limite d'utilisation #### par jour. Veuillez sélectionner un service premium ci-dessous.",
                    concurrentCountLimit: "Il tuo account gratuito consente solo #### conversioni simultanee. Fare clic sul pulsante Converti per continuare o acquistare un piano online aggiornato.",
                    compressConcurrentCountLimit: "Il tuo account gratuito consente solo #### compressioni simultanee. Fare clic sul pulsante Comprimi per continuare o acquistare un piano online aggiornato.",
                    choose_right_plan: "Scegli il Piano Giusto"
                },
                uploadConvertText: {
                    uploadTitle: "Caricamento dei file...",
                    convertTitle: "Conversione dei file...",
                    compressTitle: "Compressione dei file...",
                    convertSuccess: "Convertito Completamente!",
                    compressSuccess: "Compresso Completamente!",
                    downloadFile: "Puoi vedere in anteprima e scaricare il video ora",
                    desc: "Per favore aspetta un momento"
                },
                compressSetting: {
                    compressionMethod: "Metodo di Compressione",
                    byFileSize: "Da Dimensione del File",
                    byVariable: "Da Bitrate Variabile",
                    byAutomatic: "diAutomatico",
                    highQuality: "Alta Qualità",
                    mediumQuality: "Qualità Media",
                    lowQuality: "Qualità Bassa",
                    fileSize: "Dimensione File (MB)",
                    smallSize: "Dimensione Piccola",
                    betterQuality: "Qualità Migliore"
                },
                functionTab: {
                    muteVideo: "Muto Video",
                    videoSpeed: "Video Veloce",
                    loopVideo: "Video Infinito",
                    reverseVideo: "Video Inverso",
                    audioCutter: "Taglia Audio",
                    audioJoiner: "Audio Joiner",
                    imagesToGif: "Immagine in GIF",
                    videoToGif: "Video in GIF",
                    imageResizer: "Ridimensione Immagine",
                    mergeVideo: "Unisci Video",
                    slideshowMaker: "Creatore di Presentazioni",
                    addAudioToVideo: "Aggiungi Audio al Video",
                    removeWatermark: "Rimuovi filigrana",
                    addWatermark: "Aggiungi filigrana"
                },
                dialog: {
                    cancel: "Cancella",
                    ok: "OK",
                    setting: "Impostazioni",
                    video: "Applica a tutte le conversioni video",
                    audio: "Applica a tutte le conversioni audio",
                    image: "Applica a tutte le conversioni immagini",
                    vector: "Applica a tutte le conversioni vettoriali",
                    keepOriginSize: "Mantieni le dimensioni originali",
                    videoText: "Video",
                    audioText: "Audio",
                    imageText: "Immagine",
                    customSize: "Formato personalizzato ",
                    encoder: "Codificatore",
                    resolution: "Risoluzione",
                    frameRate: "Frequenza dei Fotogrammi",
                    bitrate: "Bitrate",
                    channel: "Canale",
                    sampleRate: "Frequenza di Campionamento",
                    videoTips: "Per impostazione predefinita, forniamo le migliori impostazioni <br/> dei parametri. ",
                    audioTips: "Quando questa opzione non è selezionata, il video convertito in uscita <br/> non avrà audio. ",
                    imageTips: "Fai clic su Blocca / Sblocca per mantenere o meno le proporzioni <br/> originali.",
                    inputEmail: "Per favore inserisci la tua email",
                    trim: "Taglio",
                    trimTips: "You can specify the starting point and end point of trim."
                },
                notify: {
                    title: "Congratulazioni! Grazie per la tua registrazione.",
                    message: "È possibile specificare il punto iniziale e il punto finale del taglio."
                },
                convertedFiles: {
                    convertedFiles: "File Convertiti",
                    fileStore24Hours: "I file verranno archiviati per 24 ore",
                    name: "Nome",
                    size: "Dimensione",
                    operate: "Operare",
                    deleteAll: "Cancella Tutto ",
                    nofiles: "Nessun file, fai clic sul pulsante sotto per convertirlo!"
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Si prega di accedere su Online Uniconverter(Originariamente Media.io) per godere dell'abbonamento gratuitamente che puoi aggiungere la tua immagine oltre #### MB"
                    },
                    video: {
                        purchaseCancelMinLimit: "La versione gratuita di Online Uniconverter può caricare video con dimensione  #### MB al massimo.Compra online e ottieni la dimensione del video senza limite.",
                        cancelMinLimit: "Online Uniconverter solo supporta il video non oltre #### MB.Ti consigliamo di utiliazzare Uniconverter (originariamente Wondershare e Video Converter Ultimate) per Desktop.",
                        cancelMaxLimit: "Online Uniconverter solo supporta il video non oltre #### MB.Ti consigliamo di utiliazzare Uniconverter (originariamente Wondershare e Video Converter Ultimate) per Desktop."
                    },
                    audio: {
                        purchaseCancelMinLimit: "La versione gratuita di Online Uniconverter può solo caricare la dimensione del audio #### MB al massimo.Compra Online e ottieni la dimensione audio senza limite.",
                        cancelMinLimit: "Online UniConverter solo supporta audio non oltre  #### MB.Ti consigliamo di utilizzare Wondershare Uniconverter ((originariamente Wondershare e Video Converter Ultimate) per Desktop.",
                        cancelMaxLimit: "Online UniConverter solo supporta audio non oltre  #### MB.Ti consigliamo di utilizzare Wondershare Uniconverter ((originariamente Wondershare e Video Converter Ultimate) per Desktop."
                    },
                    notSupport: "Online UniConverter non supporta questo formato. Ti consigliamo di utilizzare Wondershare Uniconverter ((originariamente Wondershare e Video Converter Ultimate) per Desktop.",
                    zeroSize: "Per favore,non caricare i file di dimensione 0!",
                    uploadFail: "Mi dispiace,i tuoi file non sono riusciti a importare,prova di nuovo per favore.",
                    incorrectUrl: "Tipo di Url non corretto.",
                    dropBoxLogIn: "Si prega di accedere su Online Uniconverter prima di caricare i file da Dropbox.",
                    googleDriveLogIn: "Si prega di accedere su Online Uniconverter prima di caricare i file da Google Drive.",
                    youtubeLogIn: "Si prega di accedere su Online Uniconverter per modificare Youtube video copiando URL.",
                    youtubeConversionCount: "Hai modificato online video per #### volte.Si prega di aggiornare alla versione Premium e rimuovere il limite.",
                    chooseFiles: "Scegli File",
                    cancel: "Cancella",
                    Loading: "Caricamento in corso",
                    Processing: "In corso"
                },
                conver: {
                    showAccountText1: "Effettua l’accesso a UniConverter Online (originariamente Media.io) per usufruire del servizio per abbonati di ricezione della notifica tramite email al termine del processo di conversione.",
                    showAccountText2: "UniConverter Online non supporta questo formato.Si prega di utilizzare UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    showAccountText3: "Hai convertito più di #### file in un giorno. Converti altri file domani oppure registrati per rimuovere la limitazione.",
                    showPopWindowText1: "UniConverter Online consente solo #### conversioni simultanee. Per convertire più file simultaneamente, scarica il convertitore per desktop.",
                    showPopWindowText2: "UniConverter Online supporta solo video non superiori a #### MB. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    showPopWindowText3: "Con la versione gratuita di UniConverter Online è possibile caricare un video di massimo #### MB. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium.",
                    showPopWindowText4: "Hai convertito più di #### file in un giorno. Per rimuovere questa limitazione, utilizza UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop,oppure converti i file domani.",
                    showPopWindowText5: "Con la versione gratuita di UniConverter Online puoi convertire solo #### file al giorno. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium oppure converti i file domani.",
                    converterdFilesLogIn: "Accedi a Online UniConverter (originariamente Media.io) per usufruire del servizio di abbonamento che puoi scaricare ed eliminare i file convertiti.",
                    convert: "Converte",
                    to: "in",
                    download: "Download",
                    toggleDropdown: "Attiva il menu a discesa",
                    converting: "Conversione in corso",
                    uploading: "Caricamento in corso",
                    pleaseWait: "Attendere prego",
                    retry: "Riprova",
                    ready: "Pronto",
                    downloadAll: "Download Tutto",
                    notifyMe: "Avvisami quando è finito",
                    addMoreFiles: "Aggiungi Altri File",
                    chooseFiles: "Scegli File",
                    fromDropbox: "Da Dropbox",
                    fromGoogleDrive: "Da Google Drive",
                    hours24_1: "Il file verrà archiviato per 24 ore. Vai a",
                    hours24_2: "File Convertiti",
                    hours24_3: "per cancellare manualmente.",
                    FileConversionFailed: "Convertito File non riuscito,prega di utilizzare Wondershare UniConverter (originariamente Wondershare Video Converter Ultimate) per Desktop.",
                    delete: "Elimina",
                    preview: "Anteprima"
                },
                reverseVideo: {
                    reverseSpeed: "Velocità inversa",
                    muteVideo: "Disattiva il video",
                    soundOptions: "Opzioni audio",
                    reverse: "Inversione",
                    finalDuration: "Durata finale",
                    duration: "Durata",
                    play: "GIOCARE",
                    stop: "FERMARE",
                    reverseingYourVideo: "In corso, aspetta per favore.",
                    reverseFileAgain: "Inverti FILE ANCORA",
                    reverseAnotherVideo: "Inverti UN ALTRO VIDEO"
                },
                loopVideo: {
                    duration: "Durata",
                    play: "GIOCA",
                    stop: "FERMA",
                    trimYouVideo: "Taglia il tuo video",
                    startTime: "Ora di inizio",
                    endTime: "Ora di fine",
                    loopClip: "Ripete all'infinito questa clip",
                    finalDuration: "Durata Finale",
                    loopingYourVideo: "Ripete video all'infinito",
                    loop: "Ripete all'infinito",
                    loopFileAgain: "CREA VIDEO INDEFINITO ANCORA",
                    loopAnotherVideo: "Ripete un'altro video all'infinito",
                    cutTime: "La versione gratuita di Online UniConverter può solo tagliare il video non più dei #### s. Effettua l'upgrade alla versione Premium e rimuovi la limitazione."
                },
                speedVideo: {
                    duration: "Durata",
                    speed: "Velocità",
                    finalDuration: "Durata finale",
                    soundOptions: "Opzioni Audio",
                    muteVideo: "Muto Video",
                    start: "Comincia",
                    speedFileAgain: "CREA VIDEO VELOCE",
                    speedAnotherVideo: "CREA un'altro VIDEO VELOCE"
                },
                youtubeUrl: {
                    go: "Comincia",
                    createYoutubeThumbnail: "Fai clic qui per crea un YouTube thumbnail",
                    rightClick: '"Fai clic con il pulsante destro del mouse sull\'immagine e seleziona "Salva immagine con nome ..."',
                    noLogIn: "Accedi a Online UniConverter per scaricare altre YouTube thumbnail.",
                    noLongInType: "UploadLimit_Youtube",
                    noVipTip: "La versione gratuita di Online UniConverter supporta solo 5 volte di download YouTube  thumbnail,effettua l’aggiornamento alla versione premium per rimuovere la limitazione.",
                    noYoutubeUrl: "Mi dispiace,supportiamo solo YouTube URL.",
                    noImgTip: "Controlla URL inserito. O potresti utilizzare Wondershare UniConverter per desktop.",
                    errorUrl: "Tipo di URL errato."
                },
                cutter: {
                    onlyDesktop: "Online UniConverter (originariamente Media.io) taglia audio è disponibile solo per desktop ora.",
                    onYourComputer: "Divertiti con Chrome o Firefox sul tuo computer .",
                    loading: "In corso",
                    size: "Dimensione",
                    duration: "Durata",
                    cut: "Taglia",
                    from: "Da",
                    to: "In",
                    mode: "Modalità ",
                    keep: "Mantiene",
                    remove: "Rimuove",
                    fade: "Dissolvenza",
                    fadeIn: "Dissolvenza in entrata",
                    fadeOut: "Dissolvenza",
                    processing: "In lavorazione",
                    "waitMoment.": "aspetta un po' per favore.",
                    cuttingYourAudio: "Stiamo tagliando il tuo audio",
                    fileReady: "Il tuo file audio è pronto",
                    editFileAgain: "TAGLIA FILE ANCORA",
                    cutAnotherAudio: "RITAGLIA ALTRO AUDIO"
                },
                compress: {
                    showAccountText1: "Effettua l’accesso a UniConverter Online (originariamente Media.io) per usufruire del servizio per abbonati di ricezione della notifica tramite email al termine del processo di compressione. ",
                    showAccountText2: " Hai compresso più di #### file in un giorno. Comprimi altri file domani oppure registrati per rimuovere la limitazione.",
                    showPopWindowText1: " UniConverter Online consente solo 1 compressione alla volta. Per comprimere più file simultaneamente, scarica il convertitore per desktop.",
                    showPopWindowText2: " UniConverter Online non supporta questo formato. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Compressing Ultimate di Wondershare) per desktop.",
                    showPopWindowText3: " UniConverter Online supporta solo video non superiori a #### MB. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Compressing Ultimate di Wondershare) per desktop.",
                    showPopWindowText4: " Con la versione gratuita di UniConverter Online è possibile caricare un video di massimo #### MB. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium.",
                    showPopWindowText5: "Hai compresso più di #### file in un giorno. Per rimuovere questa limitazione, utilizza UniConverter di Wondershare (originariamente Video Compressing Ultimate di Wondershare) per desktop, oppure comprimi i file domani.",
                    showPopWindowText6: " Con la versione gratuita di UniConverter Online puoi convertire solo #### file al giorno. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium oppure continua domani.",
                    compressedSuccess: "Compressione Riuscito",
                    outputSettings: "Output",
                    quality: "Qualità",
                    resolution: "Risoluzione",
                    source: "FONTE",
                    resetSize: "Ripristina le dimensioni ",
                    format: "Formato",
                    retry: "Riprova",
                    download: "download",
                    toggleDropdown: "Attiva il menù a discesa",
                    compressNew: "Comprimi nuovo",
                    compressing: "Compressione in corso",
                    compress: "Comprimi",
                    pleaseWait: "Attendere prego",
                    notifyMe: "Avvisami quando è finito",
                    addMoreFiles: "Aggiungi altri File",
                    uploading: "Caricamento in corso",
                    save: "Salva",
                    moreSettings: "Più Impostazioni",
                    finished: "Finito",
                    uploadTipsHTML: "Puoi caricare file fino a @@@@ MB, <a href class='link'>scegli un piano</a> per ottenere di più.",
                    uploadTipsText: "Puoi caricare file fino a @@@@ MB, scegli un piano per ottenerne di più."
                },
                img: {
                    showPopWindowText1: " UniConverter Online non supporta questo formato. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    showPopWindowText2: " UniConverter Online consente solo ####compressioni simultanee di immagini. Per rimuovere la limitazione, scarica il convertitore UniConverter di Wondershare per desktop.",
                    showPopWindowText3: " UniConverter Online consente solo ####compressioni simultanee di immagini. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium.",
                    showPopWindowText4: " UniConverter Online consente solo ####conversioni simultanee di immagini. Per rimuovere la limitazione, scarica il convertitore UniConverter di Wondershare per desktop.",
                    showPopWindowText5: " UniConverter Online consente solo ####conversioni simultanee di immagini. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium.",
                    showPopWindowText6: " Con UniConverter Online è possibile caricare un’immagine di massimo #### MB. Per rimuovere la limitazione, effettua l’accesso.",
                    showPopWindowText7: " Hai già compresso più di #### immagini in un giorno. Continua a comprimere altri file domani oppure effettua l’accessoper rimuovere la limitazione.",
                    showPopWindowText8: " Hai già convertito più di #### immagini in un giorno. Continua a convertire altri file domani oppure effettua l’accessoper rimuovere la limitazione.",
                    showPopWindowText9: " Hai già compresso più di #### immagini in un giorno. Continua a comprimere altri file domani oppure utilizza UniConverter di Wondershare per desktop per rimuovere la limitazione.",
                    showPopWindowText10: " Hai già compresso più di #### immagini in un giorno. Continua domani, oppure aggiorna alla versione premium perrimuovere la limitazione.",
                    showPopWindowText11: " Hai già convertito più di #### immagini in un giorno. Continua a convertire altri file domani oppure utilizza UniConverter di Wondershare per desktop per rimuovere la limitazione.",
                    showPopWindowText12: " Hai già convertito più di #### immagini in un giorno. Continua domani, oppure aggiorna alla versione premium perrimuovere la limitazione.",
                    compressorImg: "Hai compresso le immagini più di #### volte in un giorno. Prova a comprimere più immagini domani o registrati gratuitamente per rimuovere la limitazione. ",
                    converterImg: "Hai già convertito più di #### file in un giorno. Prova a convertire più immagini domani o registrati gratuitamente per rimuovere la limitazione. ",
                    compressing: "COMPRESSIONE IN CORSO",
                    converting: "CONVERSIONE IN CORSO",
                    download: "download",
                    toggleDropdown: "Attiva il menù a discesa",
                    uploading: "Caricamaneto in corso",
                    retry: "Riprova",
                    ready: "Pronto",
                    to: "in",
                    downloadAll: "Download Tutto",
                    addMoreFiles: "Aggiungi Altri File",
                    chooseFiles: "Scegli File",
                    fromDropbox: "Da Dropbox",
                    fromGoogleDrive: "Da Google Drive",
                    keepOriginalSize: "Mantieni le dimensioni originali ",
                    customSize: "Formato personalizzato",
                    to16_8000: "Inserisci una larghezza o un'altezza in pixel compresa tra 16 e 8000",
                    convertAllFilesTo: "Converte tutti file in",
                    deleteAll: "CANCELLA TUTTO",
                    compress: "COMPRIMI",
                    convert: "CONVERTE"
                },
                gif: {
                    showAccountText1: " Con UniConverter Online è possibile caricare un’immagine di massimo #### MB. Per rimuovere la limitazione, effettual’accesso.",
                    showAccountText2: " Hai già creato più di #### GIF in un giorno. Crea altri GIF domani oppure effettua l’accesso per rimuovere la limitazione.",
                    showAccountText3: " Hai già creato più di #### GIF in un giorno. Continua domani oppure effettua l’accesso per rimuovere la limitazione.",
                    showPopWindowText1: " Con UniConverter Online è possibile caricare solo #### immagini per creare una GIF. Per rimuovere la limitazione utilizza UniConverter di Wondershare per desktop.",
                    showPopWindowText2: " Con UniConverter Online è possibile caricare solo #### immagini per creare una GIF. Per rimuovere la limitazione effettua l’aggiornamento alla versione premium.",
                    showPopWindowText3: " UniConverter Online non supporta questo formato. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    showPopWindowText4: " Hai già creato più di #### GIF in un giorno. Crea altre GIF domani oppure utilizza UniConverter di Wondershare per desktop per rimuovere la limitazione.",
                    showPopWindowText5: " Hai già creato più di #### GIF in un giorno. Crea altre GIF domani oppure effettua l’aggiornamento alla versione premium per rimuovere la limitazione.",
                    showPopWindowText6: "Siamo spiacenti, la conversione GIF non è andata a buon fine. Per convertire con successo le immagini in GIF,utilizza UniConverter di Wondershare per desktop.",
                    showPopWindowText7: " È supportato solo un tipo di filigrana. Peraggiungere altre filigrane, utilizza UniConverter di Wondershare per desktop.",
                    showPopWindowText8: " UniConverter Online consente di caricare solovideo non superiori a #### MB. Per caricare video più grandi, utilizzaUniConverter di Wondershare per desktop.",
                    showPopWindowText9: " UniConverter Online consente di caricare solovideo non superiori a #### MB. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium.",
                    showPopWindowText10: "Siamo spiacenti, impossibile importare i tuoi file video, riprova.",
                    showPopWindowText11: "Siamo spiacenti, impossibile ottenere il tuo video di YouTube, riprova.",
                    showPopWindowText12: "URL non corretto. Siamo spiacenti, supportiamo solo video di YouTube in GIF.",
                    showPopWindowText13: "Hai creato #### GIF a partire dai videoonline, continua domani o utilizza UniConverter di Wondershare perdesktop.",
                    showPopWindowText14: " Hai creato #### GIF a partire dai video online, continua domani oppure effettua l’aggiornamento alla versionepremium per rimuovere la limitazione.",
                    showPopWindowText15: "Effettua l’accesso a UniConverter Online per creare una GIF a partire dai video YouTube incollando l’URL.",
                    showPopWindowText16: "La durata della GIF è più lunga del limite di #### secondi di UniConverter Online. Per rimuovere la limitazione, utilizza UniConverter di Wondershare per desktop.",
                    showPopWindowText17: "Siamo spiacenti, impossibile convertire la GIF. Per creare con successo una GIF utilizza UniConverter di Wondershare per desktop.",
                    showPopWindowText18: " Siamo spiacenti, impossibile convertire la GIF. Per creare con successo una GIF utilizza UniConverter di Wondershare per desktop.",
                    download: "download",
                    toggleDropdown: "Attiva il menù a discesa",
                    imagesToGif: "Immagini in GIF",
                    videoToGif: "Video in GIF",
                    loading: "In corso",
                    cancel: "Cancella",
                    makingGif: "Creando GIF",
                    suspended: "PAUSA",
                    play: "GIOCA",
                    width: "Larghezza",
                    height: "Altezza",
                    pixels: "pixel",
                    widthRangePixels: "L'intervallo di larghezza è 50-500 pixel.",
                    heightRangePixels: "L'intervallo di altezza è 50-500 pixel.",
                    frameRate: "Frequenza dei Fotogrammi ",
                    fps: "fps",
                    fpsTip: "Più alti gli fps, più fluida l'animazione. Puoi impostarla tra 1 e 30.",
                    textWatermark: "Testo Filigrana",
                    createGif: "Crea GIF",
                    createNewGif: "CREA NUOVO GIF",
                    remakeGif: "RIFAI GIF",
                    trimYourVideo: "Taglia il TUO Video",
                    timeTip: "Usa il cursore per selezionare la durata della GIF o inserisci l'ora di inizio e l'ora di fine con precisione.",
                    StartTime: "Ora di Inizio",
                    endTime: "Ora di Fine",
                    outputSize: "Dimensione dell'output ",
                    fpsMeans: "Fps indica il numero di fotogrammi al secondo a cui verrà eseguita la GIF finale. Più alto è il fps, più fluida diventa la tua animazione .",
                    imageWatermark: "Immagine filigrana"
                },
                mute: {
                    showAccountText1: " Hai già creato più di #### GIF in un giorno. Crea altre GIF domani o effettua l’accesso per rimuovere la limitazione.",
                    showAccountText2: " Accedi a Online UniConverter per disattivare l'audio del video YouTube incollando l'URL ",
                    showPopWindowText1: " UniConverter Online non supporta questo formato. Per silenziare il video, utilizza UniConverter di Wondershare per desktop.",
                    showPopWindowText2: " UniConverter Online consente di caricare solovideo fino a #### MB. Per caricare video di dimensioni maggiori, prova UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    showPopWindowText3: " Con la versione gratuita di UniConverter Online puoi caricare un video di soli #### MB. Per rimuovere la limitazione effettua l’aggiornamento alla versione premium.",
                    showPopWindowText4: " Hai già creato più di #### GIF in un giorno. Crea altre GIF domani oppure effettua l’aggiornamento alla versione premium per rimuovere la limitazione.",
                    showPopWindowText5: "Siamo spiacenti, impossibile importare i tuoivideo, riprova.",
                    showPopWindowText6: " UniConverter Online consente di caricare solovideo fino a #### MB. Per caricare video di dimensioni maggiori, prova UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    showPopWindowText7: " URL non corretto. Siamo spiacenti, supportiamo solo video di YouTube in GIF.",
                    showPopWindowText8: "Hai silenziato più di #### video online. Per rimuovere la limitazione, effettua l’aggiornamento alla versione premium.",
                    showPopWindowText9: "Siamo spiacenti, impossibile silenziare il video. Per silenziare con successo un video, utilizza UniConverter di Wondershare per desktop.",
                    download: "download",
                    toggleDropdown: "Attiva il menù a discesa",
                    mute: "Muto",
                    previewNot: "L'anteprima non è disponibile.",
                    browserNotSupport: "Il tuo browser non supporta questo formato.",
                    muteAnother: "Disattiva l'audio dell'altro"
                },
                user: {
                    user1: "Benvenuto a Wondershare ID",
                    user2: "Sei un nuovo utente? ",
                    user3: "Registrati gratuitamente",
                    user4: "Indirizzo email",
                    user5: "Password",
                    user6: "Ricordami",
                    user7: "Hai dimenticato la password?",
                    user8: "Accedi",
                    user9: "Oppure",
                    user10: "Accedi con",
                    user11: "Hai già un account?",
                    user12: "Accedi qui",
                    user13: "Codice di verifica",
                    user14: "Clicca sul pulsante per ricevere il codice di verifica all’indirizzo email inserito.",
                    user15: "Registrati",
                    user16: "Inserisci un indirizzo email valido.",
                    user17: "Email obbligatoria",
                    user18: "La password deve contenere 6 – 16 caratteri o numeri.",
                    user19: "Password obbligatoria",
                    user20: "Codice di verifica obbligatorio",
                    user21: "Il nome è obbligatorio",
                    user22: "Invia il codice",
                    user23: "Nome utente",
                    user24: "Iscriviti a UniConverter online (originariamente Media.io) per ottenere servizi gratuiti migliori"
                },
                ediror: {
                    editText1: "Rilascialo come se fosse caldo",
                    editText2: "Aggiungi i tuoi file trascinandoli in questa finestra",
                    editText3: "Trascina e Rilascia o Clicca su Aggiungi Video",
                    editText4: "Saturazione",
                    editText5: "Contrasto",
                    editText6: "Luminosità",
                    editText7: "Personalizzato",
                    editText8: "1:1 (Quadrato)",
                    editText9: "4:3 (TV Classica)",
                    editText10: "16:9 (Schermo Ampio)",
                    editText11: "Orizzontale",
                    editText12: "Verticale",
                    editText13: "Video",
                    editText14: "Nessun Risultato di Ricerca",
                    editText15: "Audio",
                    editText16: "Antiorario",
                    editText17: "Orario",
                    editText18: "Caricamento ...",
                    editText19: "Annulla",
                    editText20: "Dimensione",
                    editText21: "Durata",
                    editText22: "Risoluzione",
                    editText23: "Accorcia",
                    editText24: "Ritaglia",
                    editText25: "Regola",
                    editText26: "Ruota",
                    editText27: "Capovolgi",
                    editText28: "Salva in",
                    editText29: "Inizia",
                    editText30: "Elaborazione",
                    editText31: "Modifica un Altro Video",
                    editText32: "Hai già modificato 5 video in un giorno. Continuadomani oppure effettua l’accesso per rimuovere la limitazione.",
                    editText33: "Hai già modificato 5 video in un giorno. Continuadomani oppure effettua l’accesso per rimuovere la limitazione.",
                    editText34: "UniConverter Online supporta solo video non superiori a #### MB. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    editText35: " UniConverter Online supporta solo video non superioria #### MB. Si prega di utilizzare UniConverter di Wondershare (originariamente Video Converter Ultimate di Wondershare) per desktop.",
                    editText36: " Hai già modificato #### video in un giorno. Continua domani oppure utilizza UniConverter di Wondershare per desktop perrimuovere la limitazione.",
                    editText37: " UniConverter Online non supporta questo formato.Utilizza UniConverter di Wondershare per desktop.",
                    editText38: "Salva",
                    editText39: "Immagine",
                    editText40: "Vettore"
                },
                nav: {
                    navText1: "Centro Utente",
                    navText2: "Esci",
                    navText3: "Accedi",
                    navText4: "REGISTRATI GRATUITAMENTE",
                    navText5: "ISCRIVITI GRATIS PER 30 GIORNI",
                    convertedFiles: "File Convertiti",
                    myAccount: "Il mio Account"
                },
                popup: {
                    text1: "UniConverter per Desktop",
                    text2: "Converti Qualsiasi Video in Più di 1000 Formati. ",
                    text3: "Velocità di Conversione Video 90X Più Veloce.",
                    text4: "Comprimi Video in Blocco in Formato Ridotto senza Limiti di Dimensione. ",
                    text5: "Funzioni di Editing Utili per Accorciare, Ritagliare Video, Applicare Effetti, ecc.",
                    text6: "Converti e Personalizza le Immagini in JPG, PNG, TIFF, GIF, BMP Senza Limiti.",
                    text7: "Comprimi e Personalizza le Immagini in JPG, PNG, TIFF, GIF, BMP Senza Limiti.",
                    downloadWin: "https://download.wondershare.com/uniconverter13_full9649.exe",
                    downloadMac: "https://download.wondershare.com/uniconverter13-mac_full9650.zip",
                    text8: "Aggiorna a Premium",
                    text9: "ANNUALE",
                    text10: "2,95€",
                    text11: "EUR 4,95€",
                    text12: "mese",
                    text13: "annulla in qualsiasi momento",
                    buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7736&license_id=297&sub_lid=0&currency=EUR&domain=it&language=Italian&verify=58f861abbabdf223b17514d3407dbb4b",
                    text14: "MENSILE",
                    text15: "9,95€",
                    text16: "mese",
                    text17: " annulla in qualsiasi momento",
                    buy_now_month: "\thttps://store.wondershare.com/index.php?submod=checkout&method=index&pid=7736&license_id=294&sub_lid=0&currency=EUR&domain=it&language=Italian&verify=1675cc119e0dd8b7d65d2caa8b2bc93c",
                    text18: "500MB",
                    text19: "Dimensione Massima del File",
                    text20: "30",
                    text21: "Conversioni Simultanee",
                    text22: "Alta Velocità ",
                    text23: "Conversione",
                    text24: "Download",
                    text25: "Illimitato",
                    text26: "Compressione del File",
                    text26_1: "Notifica per Email",
                    text27: "Più Venduto",
                    text28: "Abbonamento Online di 1 Anno",
                    text29: "Abbonamento Online di 1 Mese",
                    text31: "Provalo gratuitamente",
                    text32: "Acquista ora",
                    text33: "https://uniconverter.wondershare.it/",
                    text34: "https://www.media.io/mobile-download-guidance.html"
                },
                resize: {
                    download: "download",
                    toggleDropdown: "Attiva il menù a discesa",
                    loading: "In corso",
                    cancel: "Cancella",
                    byPixels: "Da Pixel (px)",
                    byPercentage: "Da Percentuale (%)",
                    originalLockTip: "Fai clic su Blocca / Sblocca per mantenere o meno le proporzioni originali.",
                    resize: "RIDIMENSIONA",
                    lockTip: "Fai clic su ON / OFF Proporzioni",
                    pixels16To8000: "Inserisci la larghezza e l'altezza in pixel tra 16 e 8000. ",
                    percentage1To500: "Inserisci la percentuale di larghezza e altezza compresa tra 1 e 500.",
                    stretch: "Allungare",
                    stretchTip: "Le immagini verranno allungate per adattarsi alla nuova dimensione.",
                    fill: "Riempire",
                    fillTip: "Le immagini verranno ritagliate per adattarle alla nuova dimensione. ",
                    fit: "Adatta",
                    fitTip: "Le immagini verranno ritagliate per adattarsi alle nuove dimensioni e le parti restanti verranno dipinte con il colore di sfondo selezionato. ",
                    selectColor: "Quando scegli l'opzione Adatta, le tue immagini verranno dipinte con il colore selezionato.",
                    resizingImages: "Ridimensionamento delle immagini ",
                    resizedFail: "Le tue immagini sono state ridimensionate Fallito ",
                    resizedSuccess: "Le tue immagini sono state ridimensionate correttamente",
                    sorryYourFiles: "Mi dispiace, il tuo file",
                    resizedFailDownload: "ridimensionamento non riuscito, scarica",
                    desktopVersion: "la versione desktop",
                    tryAgain: "per riprova.",
                    resizeMore: "RIDIMENSIONA PIÙ IMMAGINI ",
                    fitColor: "Adatta Colore"
                },
                joiner: {
                    onlyDesktop: "Online UniConverter (originariamente Media.io) taglia audio è disponibile per desktop ora.",
                    onYourComputer: "Divertiti con Chrome o Firefox sul tuo computer.",
                    loading: "In corso",
                    importFailed: "Importazione non riuscita. Se vorresti continuare a unire l'audio, elimina il file non riuscito prima dell'unione.",
                    fadeIn: "Fai clic per selezionare/deselezionare la dissolvenza in entrata dell'audio.",
                    fadeInOut: "FaI clic per selezionare/deselezionare la dissolvenza in entrata e in uscita dell'audio.",
                    fadeOut: "Fare clic per selezionare / deselezionare la dissolvenza audio in uscita",
                    startTime: "Ora di inizio",
                    endTime: "Ora di fine",
                    waitMoment: "Stiamo caricando i file, attendi un momento.",
                    merge: "Unire",
                    mergingYourAudio: "stiamo unendo i tuoi file audio",
                    fileReaded: "Il audio file è pronto",
                    editFileAgain: "TAGLIA FILE ANCORA",
                    mergeAnother: "UNIRE ALTRO",
                    joinCountFree: "Hai modificato i file #### volte in un giorno. Accedi per rimuovere la limitazione. o modificare più file domani.",
                    joinCountLogin: "Hai modificato i file #### volte in un giorno. Usa Wondershare UniConverter (originariamente Wondershare Video Converter Ultimate) per desktop. ",
                    fileNumFree: "Il convertitore online gratuito consente solo di unire file #### alla volta. Esegui l'aggiornamento alla versione Premium e rimuovi la limitazione.",
                    fileNumLogin: "Online UniConverter consente solo di unire #### file alla volta. Usa Wondershare UniConverter (originariamente Wondershare Video Converter Ultimate) per desktop. "
                },
                editorVideo: {
                    mergeVideos: "Unisci video",
                    slideshowMaker: "Creatore di presentazioni",
                    addAudioToVideo: "Aggiungi audio al video",
                    merge: "UNISCI",
                    addFiles: "Aggiungi File",
                    addAudio: "Aggiungi audio",
                    fitWithBorder: "Adatta con bordo",
                    zoomCrop: "Zoom & Ritaglio",
                    setting: "Impostazione",
                    goBack: "Indietro",
                    audioOption: "Opzioni Audio",
                    cropOptions: "Opzioni di Ritaglio",
                    Crossfade: "Dissolvenza Incrociata",
                    instagramVideo: "Video Instagram",
                    youTubeVideo: "Video Youtube",
                    instagramStory: "Storia di Instagram",
                    facebookVideo: "Video di Facebook",
                    imageDuration: "Durata dell'immagine",
                    transition: "Transizione",
                    applyAllImg: "Applica a tutte le immagini",
                    outputFormat: "Formato di output",
                    trimAudio: "Taglia audio",
                    audioTrackVolume: "Volume della traccia audio",
                    videoSoundVolume: "Volume audio video",
                    startTime: "Ora di inizio",
                    endTime: "Ora di Termine",
                    empty_file: "Spiacenti, il tuo video non è stato manipolato in alcun modo, <br/>passa agli Strumenti Online per l'operazione video."
                },
                memeGenerator: {
                    "meme-generator": "Generatore di meme",
                    template: "Modello",
                    Create: "creare",
                    OriginalSize: "Misura originale",
                    FormateNotSupport: "Spiacenti, Uniconverter online non supporta questo formato immagine, carica un altro file immagine.",
                    ResizeFor: "Ridimensiona per",
                    OutputSettings: "Impostazioni di uscita",
                    UploadGifFail: "Spiacenti, l'importazione del file GIF non è riuscita, riprova.",
                    UploadFail: "Spiacenti, l'importazione del file immagine non è riuscita, riprova.",
                    GenerateFail: "Spiacenti, il tuo meme non è stato generato, per favore riprova.",
                    onlyDesktop: "Il generatore di meme Online Uniconverter (originariamente Media.io) è ora disponibile solo per personal computer.",
                    onYourComputer: "Divertiti con Chrome o Firefox sul tuo computer.",
                    downloadText: "Congratulazioni! Il tuo meme è pronto per il download.",
                    enterYourText: "Inserisci il tuo testo",
                    textPlaceholder: "TESTO QUÌ",
                    topTextPlaceholder: "SU TESTO QUI",
                    bottomTextPlaceholder: "TESTO IN BASSO QUI"
                },
                removeWatermark: {
                    wrapperTitle: "Rimuovi filigrana",
                    Generator: "Rimuovi filigrana",
                    AddArea: "Aggiungi Area",
                    Watermark: "Filigrana",
                    Duration: "Durata",
                    emptyText: "Fai clic su 'Aggiungi area' per selezionare l'area del video in cui desideri rimuovere la filigrana.",
                    limitTips: "Siamo spiacenti, supportiamo solo la rimozione di 10 filigrane. Seleziona un servizio premium di seguito.",
                    downloadText: "Congratulazioni! La filigrana è stata rimossa!",
                    errorTips: "Spiacenti, la filigrana non è stata rimossa, riprova.",
                    beforeDownload: "Spiacenti, devi accedere prima di scaricare"
                },
                addWatermark: {
                    addWatermark: "Aggiungi filigrana",
                    Text: "Testo",
                    Image: "Immagine",
                    add: "Aggiungi",
                    textStyle: "Stile del testo",
                    textColor: "Colore del testo",
                    Opacity: "Opacità",
                    Background: "Sfondo",
                    Duration: "Durata",
                    textPlaceholder: "Inserisci il tuo testo",
                    downloadText: "Congratulazioni! La filigrana è stata aggiunta!",
                    errorTips: "Spiacenti, la filigrana non è stata aggiunta, riprova."
                },
                app: {
                    historyVideos: "Video di storia",
                    viewAllFiles: "Visualizza tutti i miei file",
                    downloadTitleText: "Elaborato con successo!"
                },
                vocalRemover: {
                    customParseTitle: "Elaborazione audio…",
                    customParseDesc: "L'algoritmo di intelligenza artificiale ora funziona, potrebbe volerci un minuto.",
                    customParseSuccess: "Congratulazioni! Il tuo audio è pronto per il download.",
                    downloadFile: "È possibile visualizzare in anteprima e scaricare l'audio ora",
                    instrumental: "Strumentale",
                    vocals: "Voce"
                },
                PricingPanel: {
                    SavePrice: "Save Up to 60%",
                    Month: "/mo",
                    BilledAnnually: "Billed xxx annually",
                    CurPlan: "Current Plan",
                    SignUp: "SIGN UP",
                    BuyNow: "BUY NOW",
                    Features: "See All Plan Features",
                    PurchasedClick: "If you have purchased, please click 'Yes' to active",
                    Account: "Your Account: ",
                    UserPlan: "xxx Plan",
                    ExpiredTime: "Until xxx",
                    RefreshTips: "Refresh your account information again",
                    No: "No",
                    Yes: "Yes",
                    GotIt: "Got it"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "Pay As You Go",
                    OnlyFor: "Only for {msg}",
                    PurchaseValid: "Purchase valid for 1 year",
                    Benefits: "Customer benefits"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "Video Editor",
                    UploadText1: "Up to",
                    VideoEditorFreeText1: "Export with watermark",
                    VideoEditorFreeText2: "min video exports",
                    VideoEditorFreeText3: "mins for Speech-to-text",
                    VideoEditorFreeText4: "characters for Text-to-speech",
                    Compress: "Compress & Converter",
                    CompressFreeText1: "for converter",
                    CompressFreeText2: "for compressor",
                    CompressFreeText3: "times limited",
                    AudioEditor: "Audio Tools",
                    AudioEditorFreeText2: "times per day",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText1: "hours per month",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "Export with watermark",
                    VideoEditorLiteFreeText2: "min video exports",
                    VideoEditorLiteFreeText3: "for uploading",
                    VideoEditorLiteFreeText4: "characters/mo for Text-to-speech",
                    VideoEditorLiteFreeText5: "export",
                    Convert: "Compressor & Converter & More",
                    ConvertFreeText1: "video upload",
                    ConvertFreeText2: "times",
                    TTS: "Text-To-Speech",
                    TTSFreeText1: "Characters",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    UnlimitedTimes: "Unlimited times"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Save 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    VideoEditorFreeText2: "hour video exports",
                    VideoEditorFreeText4: "hrs/mo for Speech-to-text",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    VideoEditorBasicText1: "hours/mo for Speech-to-text",
                    LimitedTime: "usage time",
                    TTSTips: "Characters/mo",
                    Month: "Monthly",
                    Annual: "Annually"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(Save 67%)",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)"
                },
                PRICING_TIPS: {
                    Default: "Choose Your Plan",
                    ConvertingNum: "You can ### 2 files at the same time",
                    DayLimit: "Your free trial is over",
                    MaxSize: "File is too large(xxx)",
                    Subtitle: "Your auto-generated subtitles are running out of time",
                    Transcription: "Buy More Auto-transcription Time",
                    ConvertFileTips: "Your account only supports videos no more than @@@.",
                    FileNumUpgradeTips: "Wanna ### more files at the same time? upgrade now!",
                    DefaultUpgradeTips: "Please wait for them or upgrade now.",
                    ConvertUpgradeTips: "Please upgrade to continue.",
                    TimeUpgradeTips: "Upgrade to convert and compress more files.",
                    TTSTips: "Oops, your free trial is over",
                    TTSUpgradeTips: "Please buy more characters",
                    FileSizeExceedTips: "File is too large",
                    FileSizeLimit: "The file size exceeds the free limit.",
                    UpgradeSignTips: "Please sign up to continue uploading large files or upgrade your account.",
                    UpgradeTips: "Please upgrade and continue uploading.",
                    FileOver: "To ensure the editing experience, uploading files over 2G is not supported for now.",
                    FileDuration: "The max export limit duration is 2 hours, so you will have to split the video into smaller clips and try again.",
                    FileLength: "Your video length exceeds the free limit."
                },
                PRICING_STT: {
                    NAME: "Speech-To-Text",
                    DETAILS1: "Auto subtitle and transcription",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Hrs",
                    UNIT2: "/hour",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "/image",
                    PLAN1: "Available Subtitles Time: ",
                    PLAN2: "Available Text-To-Speech Characters: ",
                    PLAN3: "Available credits: "
                },
                PRICING_TTS: {
                    NAME: "Text-To-Speech",
                    DETAILS1: "AI automatic transcription",
                    DETAILS2: "Support 16 Languages (Continually Updated)",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Characters",
                    UNIT2: " ",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "image",
                    PLAN1: "Available Text-To-Speech Characters:"
                },
                PRICING_BG: {
                    NAME: "Remove Background for Images",
                    DETAILS1: "Removing the background from 1 image requires 1 credits.",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "credits",
                    UNIT2: "/image",
                    PLAN1: "Available credits:"
                },
                PRICING_HELP: {
                    STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                    TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                    BG: "The valid period after purchasing Remove Background feature is one year. This plan does not include other premium rights of Media.io."
                }
            }
        },
        250: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "キャンセルしますか?",
                    swalOK: "はい",
                    swalNO: "いいえ",
                    swalSuccess: "このタスクを削除してもよろしいですか？",
                    deleteAllTask: "このタスクを削除してもよろしいですか？",
                    download: "ダウンロード",
                    otherTools: "他のツール",
                    editAgain: "再編集",
                    editNewFile: "新しいファイルの編集",
                    readyDownload: "動画のダウンロードが可能になりました。",
                    downloadAll: "すべてをダウンロード",
                    converterMoreFiles: "更に追加",
                    saveTo: "保存先",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "プレビューなし",
                    browserNotSupport: "あなたのブラウザはこの形式に対応していません",
                    signUpFree: "無料登録",
                    signUpSuccess: "おめでとう！\nこれで、30日間のメンバーシップを正常に取得できました。",
                    makeFail: "もーしわけ申し訳ありませんが、ファイルせーせー生成にしっぱい失敗しました。もういち一ど度おためし試しください。",
                    freeUseTimes: "1にち日でファイル #### かい回をへんしゅー編集しました。ログインしてせーげん制限をかいじょ解除するか、あす明日よりおーく多くのファイルをへんしゅー編集してください。",
                    loginUseTimes: "1にち日でファイル #### かい回をへんしゅー編集しました。オンラインでこーにゅー購入してせーげん制限をかいじょ解除してください。",
                    Processing: "しょり処理まっ待ってください。"
                },
                chooseRightPlan: {
                    sizeMinLimit: "ファイルが大きすぎます。 (####).無料アカウントでは、@@@@ MB以下の動画のみをサポートします。制限なくご利用いただくには、オンラインプランをご購入ください。",
                    sizeMaxLimit: "ファイルが大きすぎます。 (####).Online UniConverterは、@@@@ MB以下の動画のみをサポートするため、デスクトップ版のWondershare UniConverter（旧製品：Wondershareスーパーメディア変換！）をご利用ください。",
                    useTimeMinLimit: "1日あたりの #### 使用制限を超えました。ため息をつくか、以下のプレミアムサービスを選択してください。",
                    useTimeMaxLimit: "1日あたりの####使用制限を超えました。以下からプレミアムサービスを選択してください。",
                    concurrentCountLimit: "無料アカウントでは、####ファイルの同時変換しかできません。変換ボタンをクリックして続行するか、オンラインの有料プランをご購入ください。",
                    compressConcurrentCountLimit: "無料アカウントでは、####ファイルの同時圧縮しかできません。圧縮ボタンをクリックして続行するか、オンラインの有料プランをご購入ください。",
                    choose_right_plan: "適切なプランを選択"
                },
                uploadConvertText: {
                    uploadTitle: "ファイルをアップロードしています...",
                    convertTitle: "ファイルを変換しています...",
                    compressTitle: "ファイルを圧縮しています...",
                    convertSuccess: "正常に変換しました。",
                    compressSuccess: "正常に圧縮しました。",
                    downloadFile: "動画のプレビューとダウンロードができます。",
                    desc: "しばらくお待ちください。"
                },
                compressSetting: {
                    compressionMethod: "圧縮方式",
                    byFileSize: "ファイルサイズによる",
                    byVariable: "可変ビットレートによる",
                    byAutomatic: "を押します",
                    highQuality: "高品質",
                    mediumQuality: "標準品質",
                    lowQuality: "低品質",
                    fileSize: "ファイルサイズ(MB)",
                    smallSize: "小さいサイズ ",
                    betterQuality: "よい品質"
                },
                functionTab: {
                    muteVideo: "動画消音",
                    videoSpeed: "ビデオ加速",
                    loopVideo: "動画を倍速",
                    reverseVideo: "リバースビデオ",
                    audioCutter: "音声カッター",
                    audioJoiner: "Audio Joiner",
                    imagesToGif: "画像からGIF作成",
                    videoToGif: "動画からGIF作成",
                    imageResizer: "画像圧縮",
                    mergeVideo: "動画結合",
                    slideshowMaker: "スライドショー作成",
                    addAudioToVideo: "動画に音声を追加",
                    removeWatermark: "透かしを除去",
                    addWatermark: "透かしを追加"
                },
                dialog: {
                    cancel: "キャンセル",
                    ok: "OK",
                    setting: "設置",
                    video: "すべての動画ファイルに適用",
                    audio: "すべての音声ファイルに適用",
                    image: "すべての画像ファイルに適用",
                    keepOriginSize: "オリジナルサイズをキープ",
                    vector: "すべてのベクトル変換に適用",
                    videoText: "動画",
                    audioText: "音声",
                    imageText: "画像",
                    customSize: "カストマイズ",
                    encoder: "エンコーダ",
                    resolution: "解像度",
                    frameRate: "フレームレート",
                    bitrate: "ビットレート",
                    channel: "チャネル",
                    sampleRate: "サンプルレート",
                    videoTips: "デフォルトで適切なパラメータが<br/>設定されます",
                    audioTips: "このオプションがチェックされていない場合、変換された出力ビデオには音声がありません。",
                    imageTips: "元のアスペクト比を維持するかどうかを指定するには、[ロック/ロック解除]をクリックします。",
                    inputEmail: "メールアドレスを入力してください",
                    trim: "トリム",
                    trimTips: "トリムの始点と終点を指定できます。"
                },
                notify: {
                    title: "おめでとう！ご登録ありがとうございます。",
                    message: "タスク完了後にダウンロード用のアドレスをお送りします。"
                },
                convertedFiles: {
                    convertedFiles: "変換済みファイル",
                    fileStore24Hours: "24時間以内に保存されます",
                    name: "ファイル名",
                    size: "サイズ",
                    operate: "操作",
                    deleteAll: "削除",
                    nofiles: "ファイルがありません。下のボタンをクリックして変換してください。"
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Online Uniconverter（元の Media.io）にご登録いただくと、#### MB以上の画像を追加することができます。"
                    },
                    video: {
                        purchaseCancelMinLimit: "Online UniConverterの無料版では、アップロードできる動画サイズは#### MB以下です。オンラインでご購入いただくと、制限なしで動画をアップロードできます。",
                        cancelMinLimit: "オンラインOnline UniConverterは、#### MB以下の動画をアップロードできます。サイズの制限を超える場合は、Wondershare UniConverter（旧名：Wondershare スーパーメディア変換！）デスクトップ版をお試しください。",
                        cancelMaxLimit: "オンラインOnline UniConverterは、#### MB以下の動画をアップロードできます。サイズの制限を超える場合は、Wondershare UniConverter（旧名：Wondershare スーパーメディア変換！）デスクトップ版をお試しください。"
                    },
                    audio: {
                        purchaseCancelMinLimit: "Online UniConverterの無料版では、アップロードできる動画サイズは#### MB以下です。オンラインでご購入いただくと、制限なしで動画をアップロードできます。",
                        cancelMinLimit: "Online UniConverterは#### MB以下の動画をアップロードできます。サイズの制限を超える場合は、Wondershare UniConverter（旧名：Wondershare スーパーメディア変換！）デスクトップ版をお試しください。",
                        cancelMaxLimit: "Online UniConverterは#### MB以下の動画をアップロードできます。サイズの制限を超える場合は、Wondershare UniConverter（旧名：Wondershare スーパーメディア変換！）デスクトップ版をお試しください。"
                    },
                    notSupport: "Online UniConverterはこの形式に対応しておりません。Wondershare UniConverter（旧名：Wondershare スーパーメディア変換！）デスクトップ版をお試しください。",
                    zeroSize: "ファイルサイズ０のファイルをアップロードしないでください。",
                    uploadFail: "ビデオインポートに失敗しました。もう一度やり直してください。",
                    incorrectUrl: "正しくないURL。",
                    dropBoxLogIn: "Dropboxからアップロードする前にOnline UniConverterにログインしてください。 ",
                    googleDriveLogIn: "Google ドライブからアップロードする前にOnline UniConverterにログインしてください。",
                    youtubeLogIn: "YouTubeビデオのURLをペーストする前に、Online UniConverterにログインしてください。",
                    youtubeConversionCount: "ビデオを#### 回目の編集です。有料版にアップグレードし、制限を解除してください。",
                    chooseFiles: "ファイルを選択",
                    cancel: "キャンセル",
                    Loading: "読み込み中",
                    Processing: "処理中"
                },
                conver: {
                    showAccountText1: "変換が完了したら連絡がほしい？Online UniConverterにログインして、メール通知機能を有効にしましょう。",
                    showAccountText2: "Online UniConverterは現在このフォーマットに対応しておりません。スーパーメディア変換！をご利用ください。",
                    showAccountText3: "一日 #### 回の制限数に達しました。明日がまた変換してください、もしくはログインして制限を解除してください。",
                    showPopWindowText1: "最大 #### のファイルの制限数に達しました。制限なしのWondershare UniConverterをおすすめします。 ",
                    showPopWindowText2: "最大 #### MBの制限数に達しました。制限なしのWondershare UniConverterをご利用ください。",
                    showPopWindowText3: "無料バージョンのOnline UniConverterは最大 #### MBのファイルがアップロードできます、プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText4: "一日 #### 回の制限数に達しました。 制限なしのWondershare UniConverterをおすすめします、もしくは明日がまた来てください。",
                    showPopWindowText5: "無料バージョンのOnline UniConverterは一日 #### 回の制限があります。プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    converterdFilesLogIn: "Online UniConverterにログインして、変換されたファイルをダウンロードおよび削除できるメンバーシップサービスをお楽しみください。",
                    convert: "変換",
                    to: "を",
                    download: "ダウンロード",
                    toggleDropdown: "ドロップダウン",
                    converting: "変換中",
                    uploading: "アップロード中",
                    pleaseWait: "しばらくお待ちください。",
                    retry: "やり直し",
                    ready: "準備完了",
                    downloadAll: "すべてをダウンロード",
                    notifyMe: "終わったら提示してください",
                    addMoreFiles: "更に追加",
                    chooseFiles: "ファイルを選択",
                    fromDropbox: "Dropboxから",
                    fromGoogleDrive: "Google Driveから",
                    hours24_1: "ファイルは24時間保存されます。",
                    hours24_2: "変換済みファイル",
                    hours24_3: "手動で削除する",
                    FileConversionFailed: "ファイル変換に失敗しました。デスクトップ版Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）を使用してください。",
                    delete: "消去",
                    preview: "プレビュー"
                },
                reverseVideo: {
                    reverseSpeed: "リバーススピード",
                    muteVideo: "ビデオをミュート",
                    soundOptions: "サウンドオプション",
                    reverse: "逆行する",
                    finalDuration: "最終期間",
                    duration: "間隔",
                    play: "演奏する",
                    stop: "ストップ",
                    reverseingYourVideo: "処理中です、お待ちください。",
                    reverseFileAgain: "もう一度ファイルを逆にする",
                    reverseAnotherVideo: "別のビデオを逆にする"
                },
                loopVideo: {
                    duration: "デュレーション",
                    play: "PLAY",
                    stop: "STOP",
                    trimYouVideo: "ビデオをトリミング",
                    startTime: "開始時刻",
                    endTime: "終了時刻",
                    loopClip: "このクリップをループする",
                    finalDuration: "最終期間",
                    loopingYourVideo: "ループ中",
                    loop: "ループ",
                    loopFileAgain: "もう一度ループ",
                    loopAnotherVideo: "更に追加",
                    cutTime: "Online UniConverterの無料バージョンは、####秒以内のビデオしかトリミングできません。制限なくご利用いただくには、プレミアムバージョンにアップグレードしてください。"
                },
                speedVideo: {
                    duration: "デュレーション",
                    speed: "スピード",
                    finalDuration: "最終期間",
                    soundOptions: "サウンドオプション",
                    muteVideo: "ビデオを消音",
                    start: "開始",
                    speedFileAgain: "もう一度スピードを調整",
                    speedAnotherVideo: "更に追加"
                },
                youtubeUrl: {
                    go: "GO",
                    createYoutubeThumbnail: "YouTubeのサムネイルを作成するには、ここをクリックしてください",
                    rightClick: "画像を右クリックして、[名前を付けて画像を保存...]を選択します。",
                    noLogIn: "ログインして、YouTubeのサムネイルをさらにダウンロードしてください。",
                    noLongInType: "UploadLimit_Youtube",
                    noVipTip: "無料バージョンではYouTubeサムネイルのダウンロードを5回しかサポートできません。制限を解除するには、プレミアムバージョンにアップグレードしてください。",
                    noYoutubeUrl: "申し訳ありませんが、YouTubeのURLのみをサポートしています。",
                    noImgTip: "入力したURLを確認してください。または、デスクトップ版Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）を使用してください。",
                    errorUrl: "URLが正しくありません"
                },
                cutter: {
                    onlyDesktop: "Online UniConverter (元 Media.io) 音声カッターは現在デスクトップでのみ利用可能です。",
                    onYourComputer: "お使いのパソコンのChromeまたはFirefoxでお楽しみください。",
                    loading: "読み込み中",
                    size: "サイズ",
                    duration: "デュレーション",
                    cut: "カット",
                    from: "",
                    to: "を",
                    mode: "モード",
                    keep: "キープ",
                    remove: "削除",
                    fade: "フェード",
                    fadeIn: "フェードイン",
                    fadeOut: "フェードアウト",
                    processing: "処理中",
                    "waitMoment.": "少々お待ちください",
                    cuttingYourAudio: "オーディオをカットしています",
                    fileReady: "オーディオファイルの準備ができました",
                    editFileAgain: "ファイルをもう一度編集する",
                    cutAnotherAudio: "更に追加"
                },
                compress: {
                    showAccountText1: "圧縮が完了したら連絡がほしい？Online UniConverterにログインして、メール通知機能を有効にしましょう。",
                    showAccountText2: "一日 #### 回の制限数に達しました。明日がまた圧縮してください、もしくはログインして制限を解除してください。",
                    showPopWindowText1: "今圧縮できるファイルの制限数は1です。制限なしのWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をおすすめします。",
                    showPopWindowText2: "Online UniConverterは現在このフォーマットに対応しておりません。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText3: "最大 #### MBの制限数に達しました。制限なしのWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をおすすめします。",
                    showPopWindowText4: "無料バージョンのOnline UniConverterは最大 #### MBのファイルがアップロードできます、プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText5: "一日 #### 回の制限数に達しました。制限なしのWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をおすすめします、もしくは明日がまた来てください。",
                    showPopWindowText6: "無料バージョンのOnline UniConverterは一日 #### 回の制限があります。プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    compressedSuccess: "正常に圧縮されました",
                    outputSettings: "出力設定",
                    quality: "品質",
                    resolution: "解像度",
                    source: "ソース",
                    resetSize: "サイズをリセット",
                    format: "フォーマット",
                    retry: "やり直し",
                    download: "ダウンロード",
                    toggleDropdown: "ドロップダウン",
                    compressNew: "新規圧縮",
                    compressing: "圧縮中",
                    compress: "圧縮",
                    notifyMe: "終わったら提示してください",
                    pleaseWait: "お待ちください",
                    addMoreFiles: "更に追加",
                    uploading: "アップロード中",
                    save: "保存",
                    moreSettings: "詳細設定",
                    finished: "完成",
                    uploadTipsHTML: "最大@@@@ MBのファイルをアップロードできます。<a href class='link'>プランをご購入いただく</a>と、さらに多くのファイルをアップロードすることができます。",
                    uploadTipsText: "最大@@@@ MBのファイルをアップロードできます。プランをご購入いただくと、さらに多くのファイルをアップロードすることができます。"
                },
                img: {
                    showPopWindowText1: "Online UniConverterは現在このフォーマットに対応しておりません。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText2: "最大毎回 #### の画像ファイルを同時に圧縮できます。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をダウンロードして、制限を解除してください。",
                    showPopWindowText3: "最大毎回 #### の画像ファイルを同時に圧縮できます。プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText4: "最大毎回 #### の画像ファイルを同時に変換できます。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をダウンロードして、制限を解除してください。",
                    showPopWindowText5: "最大毎回 #### の画像ファイルを同時に変換できます。プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText6: "最大 #### MBのファイルがアップロードできます、ログインして制限を解除してください。",
                    showPopWindowText7: "一日 #### 回の制限数に達しました。 明日がまた来てください、もしくはログインして制限を解除してください。",
                    showPopWindowText8: "一日 #### 回の制限数に達しました。明日がまた来てください、もしくはログインして制限を解除してください。",
                    showPopWindowText9: "一日 #### 回の制限数に達しました。明日がまた来てください、もしくはWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText10: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    showPopWindowText11: "一日 #### 回の制限数に達しました。明日がまた来てください、もしくはWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText12: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    compressorImg: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    converterImg: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    compressing: "圧縮中",
                    converting: "変換中",
                    download: "ダウンロード",
                    toggleDropdown: "ドロップダウン",
                    uploading: "アップロード中",
                    retry: "やり直し",
                    ready: "準備完了",
                    to: "を",
                    downloadAll: "すべてをダウンロード",
                    addMoreFiles: "更に追加",
                    chooseFiles: "ファイルを選択",
                    fromDropbox: "Dropboxから",
                    fromGoogleDrive: "Google Driveから",
                    keepOriginalSize: "オリジナルサイズをキープ",
                    customSize: "カスタムサイズ",
                    to16_8000: "16～8000ピクセルの数値を入力してください",
                    convertAllFilesTo: "すべてのファイルを変換",
                    deleteAll: "すべてを削除",
                    compress: "圧縮",
                    convert: "変換"
                },
                gif: {
                    showAccountText1: "最大 #### MBのファイルがアップロードできます、ログインして制限を解除してください。",
                    showAccountText2: "一日 #### 回の制限数に達しました。 明日がまた来てください、もしくはログインして制限を解除してください。",
                    showAccountText3: "一日 #### 回の制限数に達しました。 明日がまた来てください、もしくはログインして制限を解除してください。",
                    showPopWindowText1: "最大毎回 #### のGIFファイルを同時に作成できます。制限なしのWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をおすすめします。",
                    showPopWindowText2: "最大毎回 #### のGIFファイルを同時に作成できます。プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText3: "Online UniConverterは現在このフォーマットに対応しておりません。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText4: "一日 #### 回の制限数に達しました。明日がまた来てください、もしくはWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText5: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    showPopWindowText6: "GIF変換に失敗しました。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText7: "1つのウォターマックだけ付けることができます、一つ以上のウォターマックを付けるにはWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText8: "最大 #### MBのファイルがアップロードできます。このサイズを超えましたら、Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText9: "最大 #### MBのファイルがアップロードできます、プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText10: "アップロードに失敗しました、もう一度お試し下さい。",
                    showPopWindowText11: "Youtubeビデオ読み込みに失敗しました、もう一度お試し下さい。",
                    showPopWindowText12: "このURLは無効なURLです。YouTubeビデオのみ対応しております。",
                    showPopWindowText13: "一日 #### 回の制限数に達しました。明日がまた来てください、もしくはWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText14: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    showPopWindowText15: "ログインして、YouTubeビデオからGIFを作成してください",
                    showPopWindowText16: " #### 秒の制限数に達しました、制限なしのWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をおすすめします。",
                    showPopWindowText17: "GIF変換に失敗しました。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText18: "GIF変換に失敗しました。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    download: "ダウンロード",
                    toggleDropdown: "ドロップダウン",
                    imagesToGif: "画像からGIF作成",
                    videoToGif: "動画からGIF作成",
                    loading: "読み込み中",
                    cancel: "キャンセル",
                    makingGif: "GIF作成中",
                    suspended: "一時停止",
                    play: "PLAY",
                    width: "幅",
                    height: "高さ",
                    pixels: "ピクセル",
                    widthRangePixels: "幅の範囲は50〜500ピクセルです。",
                    heightRangePixels: "高さの範囲は50〜500ピクセルです。",
                    frameRate: "フレームレート",
                    fps: "fps",
                    fpsTip: "fpsが高いほど、アニメーションはスムーズになります。 1〜30の範囲で設定できます。",
                    textWatermark: "テキスト透かし",
                    createGif: "GIF作成",
                    createNewGif: "新しいGIFを作成",
                    remakeGif: "GIFを作り直す",
                    trimYourVideo: "ビデオをトリミング",
                    timeTip: "スライダーを使用してGIFデュレーションを選択するか、開始時刻と終了時刻を正確に入力します。",
                    StartTime: "開始時刻",
                    endTime: "終了時刻",
                    outputSize: "出力サイズ",
                    fpsMeans: "Fpsは、最終的なGIFが実行される1秒あたりのフレーム数を意味します。 fpsが高いほど、アニメーションはスムーズになります。",
                    imageWatermark: "画像透かし"
                },
                mute: {
                    showAccountText1: "一日 #### 回の制限数に達しました。 明日がまた来てください、もしくはログインして制限を解除してください。",
                    showAccountText2: "一日 #### 回の制限数に達しました。 明日がまた来てください、もしくはログインして制限を解除してください。",
                    showPopWindowText1: "Online UniConverterは現在このフォーマットに対応しておりません。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText2: "最大 #### MBのファイルがアップロードできます。このサイズを超えましたら、Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText3: "無料バージョンのOnline UniConverterは最大 #### MBのファイルがアップロードできます、プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText4: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。もしくは明日がまた来てください。",
                    showPopWindowText5: "アップロードに失敗しました、もう一度お試し下さい。",
                    showPopWindowText6: "最大 #### MBのファイルがアップロードできます。このサイズを超えましたら、Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    showPopWindowText7: "このURLは無効なURLです。YouTubeビデオのみ対応しております。",
                    showPopWindowText8: "一日 #### 回の制限数に達しました。 プレミアムバージョンにアップグレードして、制限を解除してください。",
                    showPopWindowText9: "ミュートに失敗しました。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    download: "download",
                    toggleDropdown: "ドロップダウン",
                    mute: "Mute",
                    previewNot: "プレビューなし",
                    browserNotSupport: "あなたのブラウザはこの形式に対応していません",
                    muteAnother: "更に追加"
                },
                user: {
                    user1: "Wondershare IDへようこそ",
                    user2: "新規登録",
                    user3: "無料新規登録",
                    user4: "メールアドレス",
                    user5: "パスワード",
                    user6: "ログイン状態を保持する",
                    user7: "パスワードをお忘れの方",
                    user8: "ログイン",
                    user9: "または",
                    user10: "外部アカウントログイン",
                    user11: "すでにアカウントをお持ちの方",
                    user12: "こちらでログイン",
                    user13: "認証コード",
                    user14: "クリックして認証コードをメールアドレスに送信",
                    user15: "ログイン",
                    user16: "有効なメールアドレスを入力してください",
                    user17: "メールアドレスを入力してください",
                    user18: " 6 - 16の数字または英字のパスワードを設定してください",
                    user19: "パスワードを入力してください",
                    user20: "認証コードを入力してください",
                    user21: "空にすることはできません",
                    user22: "認証コードを送信",
                    user23: "ニックネーム",
                    user24: "オンラインのuniconverter(元はmedia.io)に参加して、より良い無料サービスを楽しんでください"
                },
                ediror: {
                    editText1: "ファイルをドロップ",
                    editText2: "ファイルをこちらにアップロードしてください",
                    editText3: "ドラッグ＆ドロップして<br>またはクリックしてファイルをアップロードしてください",
                    editText4: "彩度",
                    editText5: "コントラスト",
                    editText6: "明るさ",
                    editText7: "カスタマイズ",
                    editText8: "1:1 (Square)",
                    editText9: "4:3 (Classic TV)",
                    editText10: "16:9 (Wide Screen)",
                    editText11: "水平",
                    editText12: "垂直",
                    editText13: "ビデオ",
                    editText14: "検索結果はありません",
                    editText15: "オーディオ",
                    editText16: "反時計回り",
                    editText17: "時計回り",
                    editText18: "読み込み中 ...",
                    editText19: "キャンセル",
                    editText20: "サイズ",
                    editText21: "継続時間",
                    editText22: "解像度",
                    editText23: "トリム",
                    editText24: "クロップ",
                    editText25: "エフェクト調整",
                    editText26: "回転",
                    editText27: "フリップ",
                    editText28: "出力先",
                    editText29: "開始",
                    editText30: "処理中",
                    editText31: "新しいビデオを編集",
                    editText32: "一日5回の制限数に達しました。明日がまた来てください、もしくはログインして制限を解除してください。",
                    editText33: "一日5回の制限数に達しました。明日がまた来てください、もしくはログインして制限を解除してください。",
                    editText34: "最大 #### MBのファイルがアップロードできます。このサイズを超えましたら、Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    editText35: "最大 #### MBのファイルがアップロードできます。このサイズを超えましたら、Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    editText36: "一日 #### 回の制限数に達しました。明日がまた来てください、もしくはWondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    editText37: "Online UniConverterは現在このフォーマットに対応しておりません。Wondershare UniConverter （旧名：Wondershare スーパーメディア変換！）をご利用ください。",
                    editText38: "保存",
                    editText39: "画像",
                    editText40: "ベクトル"
                },
                nav: {
                    navText1: "ユーザーセンター",
                    navText2: "ログアウト",
                    navText3: "ログイン",
                    navText4: "無料登録",
                    navText5: "\t30日間無料でサインアップ",
                    convertedFiles: "変換済みファイル",
                    myAccount: "アカウント"
                },
                popup: {
                    text1: "Online UniConverterのデスクトップ版",
                    text2: "1000種+入出力形式対応 ",
                    text3: "変換はこれまでの30X倍スピードアップ",
                    text4: "無制限のビデオ一括圧縮 ",
                    text5: "動画のトリム・クロップ・エフェクトの調整など",
                    text6: "画像ファイルを JPG, PNG, TIFF, GIF, BMPに無制限で変換",
                    text7: "画像ファイルを JPG, PNG, TIFF, GIF, BMPに無制限で圧縮",
                    downloadWin: "https://download.wondershare.jp/uniconverter13_full9691.exe",
                    downloadMac: "https://download.wondershare.jp/uniconverter13-mac_full9692.zip",
                    text8: "プレミアムにアップグレード",
                    text9: "年間",
                    text10: "￥332",
                    text11: "￥545",
                    text12: "月",
                    text13: "いつでもキャンセル可能",
                    buy_now_yearly: " https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7477&license_id=297&sub_lid=0&currency=JPY&language=Japanese&verify=932e1a1168784bea4b0567e35d489a68",
                    text14: "毎月",
                    text15: "￥980",
                    text16: "月",
                    text17: "いつでもキャンセル可能",
                    buy_now_month: " https://store.wondershare.com/index.php?submod=checkout&method=index&pid=7477&license_id=294&sub_lid=0&currency=JPY&language=Japanese&verify=4d84e3ba1427dfad15acfdc958880d02",
                    text18: "500MB",
                    text19: "アップロードできるファイルサイズ",
                    text20: "90",
                    text21: "一括変換",
                    text22: "高速",
                    text23: "変換",
                    text24: "ダウンロード",
                    text25: "無制限",
                    text26: "のファイル圧縮",
                    text26_1: "メール通知",
                    text27: "ベスト・セラー",
                    text28: "オンライン 一年間 プラン",
                    text29: "オンライン 一ヶ月間 プラン",
                    text31: "無料体験 ",
                    text32: "購入",
                    text33: "https://uniconverter.wondershare.jp/",
                    text34: "https://www.media.io/jp/mobile-download-guidance.html"
                },
                resize: {
                    download: "ダウンロード",
                    toggleDropdown: "ドロップダウン",
                    loading: "読み込み中",
                    cancel: "キャンセル",
                    byPixels: "ピクセル (px)",
                    byPercentage: "パーセンテージ (%)",
                    originalLockTip: "元のアスペクト比を維持するかどうかを指定するには、[ロック/ロック解除]をクリックします。",
                    resize: "サイズ変更",
                    lockTip: "アスペクト比オン/オフ",
                    pixels16To8000: "16～8000ピクセルの数値を入力してください",
                    percentage1To500: "1から500の数値を入力してください。",
                    stretch: "ストレッチ",
                    stretchTip: "画像は新しいサイズに一致するように引き伸ばされます。",
                    fill: "塗りつぶし",
                    fillTip: "画像は新しいサイズに一致するようにトリミングされます。",
                    fit: "フィット",
                    fitTip: "画像は新しいサイズに合うようにトリミングされ、残りの部分は選択した背景色でペイントされます。",
                    selectColor: "[フィット]オプションを選択すると、画像は選択した色でペイントされます。",
                    resizingImages: "画像のサイズ変更",
                    resizedFail: "画像サイズの変更に失敗しました",
                    resizedSuccess: "画像のサイズが正常に変更されました",
                    sorryYourFiles: "申し訳ありません",
                    resizedFailDownload: "サイズ変更に失敗しました。ダウンロードしてください。",
                    desktopVersion: "デスクトップ版",
                    tryAgain: "やり直し",
                    resizeMore: "更に追加",
                    fitColor: "フィットカラー"
                },
                joiner: {
                    onlyDesktop: "Online UniConverter (元 Media.io) 音声カッターは現在デスクトップでのみ利用可能です。",
                    onYourComputer: "お使いのパソコンのChromeまたはFirefoxでお楽しみください。",
                    loading: "読み込み中",
                    importFailed: "インポートに失敗しました。オーディオのマージを続行する必要がある場合は、マージする前に失敗したファイルを削除してください。",
                    fadeIn: "クリックして、オーディオのフェードインを選択/選択解除します。",
                    fadeInOut: "クリックして、オーディオのフェードインとフェードアウトを選択/選択解除します。",
                    fadeOut: "クリックして、オーディオのフェードアウトを選択/選択解除します。",
                    startTime: "開始時刻",
                    endTime: "終了時刻",
                    waitMoment: "アップロードしています。しばらくお待ちください。",
                    merge: "マージ",
                    mergingYourAudio: "オーディオファイルをマージしています",
                    fileReaded: "オーディオファイルが読み込まれます",
                    editFileAgain: "ファイルをもう一度編集する",
                    mergeAnother: "更に追加",
                    joinCountFree: "一日 #### 回の制限数に達しました。 明日がまた来てください、もしくはログインして制限を解除してください。",
                    joinCountLogin: "最大 #### MBのファイルがアップロードできます。このサイズを超えましたら、Wondershare UniConverter（旧名：スーパーメディア変換！）をご利用ください。 ",
                    fileNumFree: "無料のOnline UniConverter では、一度に####ファイルのみをマージできます。プレミアムバージョンにアップグレードして、制限を削除してください。",
                    fileNumLogin: "Online UniConverterは一度に####ファイルのみをマージできます。デスクトップ版のWondershare UniConverter（旧名：スーパーメディア変換！）を使用してください。"
                },
                editorVideo: {
                    mergeVideos: "動画結合",
                    slideshowMaker: "スライドショー作成",
                    addAudioToVideo: "動画に音声を追加",
                    merge: "結合",
                    addFiles: "ファイル追加",
                    addAudio: "音声追加",
                    fitWithBorder: "ボーダーに合わせる",
                    zoomCrop: "ズーム＆クロップ",
                    setting: "設定",
                    goBack: "戻る",
                    audioOption: "音声設定",
                    cropOptions: "クロップ設定",
                    Crossfade: "クロスフェード",
                    instagramVideo: "Instagram動画",
                    youTubeVideo: "YouTube動画",
                    instagramStory: "Instagramストーリー",
                    facebookVideo: "Facebook動画",
                    imageDuration: "画像の持続時間",
                    transition: "トランジション",
                    applyAllImg: "すべての画像に適用",
                    outputFormat: "出力フォーマット",
                    trimAudio: "音声トリム",
                    audioTrackVolume: "音声トラックの音量",
                    videoSoundVolume: "動画トラックの音量",
                    startTime: "開始時間",
                    endTime: "終了時間",
                    empty_file: "申し訳ありませんが、お客様の動画は何も処理されていません。<br/>動画処理のオンラインツールにアクセスしてください。"
                },
                memeGenerator: {
                    "meme-generator": "ミームジェネレーター",
                    template: "レンプレート",
                    Create: "生成",
                    OriginalSize: "オリジナルサイズ",
                    FormateNotSupport: "申し訳ありませんが、OnlineUniconverterはこの画像形式をサポートしていません。別の画像ファイルをアップロードしてください。",
                    ResizeFor: "のサイズ変更",
                    OutputSettings: "出力設定",
                    UploadGifFail: "申し訳ありませんが、GIFファイルをインポートできませんでした。もう一度お試しください。",
                    UploadFail: "申し訳ありませんが、画像ファイルのインポートに失敗しました。もう一度お試しください。",
                    GenerateFail: "申し訳ありませんが、ミームが生成されませんでした。もう一度やり直してください。",
                    onlyDesktop: "オンラインUniconverter（元々はMedia.io）ミームジェネレーターは現在パーソナルコンピューターでのみ利用可能です。",
                    onYourComputer: "お使いのパソコンのChromeまたはFirefoxでお楽しみください。",
                    downloadText: "おめでとう！ ミームをダウンロードする準備ができました。",
                    enterYourText: "テキストを入力してください",
                    textPlaceholder: "ここにテキスト",
                    topTextPlaceholder: "ここにテキストをアップ",
                    bottomTextPlaceholder: "下のテキストはこちら"
                },
                removeWatermark: {
                    wrapperTitle: "透かしを除去",
                    Generator: "透かしを除去",
                    AddArea: "領域を選択",
                    Watermark: "透かし",
                    Duration: "間隔",
                    emptyText: "「領域を選択」をクリックすると削除領域を選択します。",
                    limitTips: "申し訳ありませんが、10つの透かし領域の削除のみをサポートします。 より良いサービスを体験するために以下のプランをお選びください。",
                    downloadText: "透かしを除去しました!",
                    errorTips: "申し訳ありませんが、透かしを除去できませんでした。もう一度お試しください。",
                    beforeDownload: "申し訳ありませんが、まずログインしてください。"
                },
                addWatermark: {
                    addWatermark: "透かしを追加",
                    Text: "テキスト",
                    Image: "画像",
                    add: "追加",
                    textStyle: "フォント",
                    textColor: "色",
                    Opacity: "透明度",
                    Background: "背景色",
                    Duration: "間隔",
                    textPlaceholder: "テキスト",
                    downloadText: "透かしを追加しました!",
                    errorTips: "申し訳ありませんが、透かしを追加できませんでした。もう一度お試しください。"
                },
                app: {
                    historyVideos: "歴史ビデオ",
                    viewAllFiles: "すべてのファイルを表示",
                    downloadTitleText: "正常に処理されました!"
                },
                vocalRemover: {
                    customParseTitle: "処理中…",
                    customParseDesc: "自動処理を行います（数分お待ちいただく場合があります）",
                    customParseSuccess: "ダウンロードの準備ができました\t",
                    downloadFile: "音声プレビュー及びダウンロードできます\t",
                    instrumental: "インスト\t",
                    vocals: "ボーカル"
                },
                PricingPanel: {
                    SavePrice: "最大 60% 割引",
                    Month: "/毎月",
                    BilledAnnually: "年払い xxx",
                    CurPlan: "現在の計画",
                    SignUp: "サインアップ",
                    BuyNow: "今買う",
                    Features: "すべてのプランの機能を見る",
                    PurchasedClick: "購入済みの場合は、[はい] をクリックして有効にしてください",
                    Account: "貴方のアカウント：",
                    UserPlan: "xxx プラン",
                    ExpiredTime: "それまで xxx",
                    RefreshTips: "アカウント情報を再度更新する",
                    No: "いいえ",
                    Yes: "はい",
                    GotIt: "とった"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "使った分だけ",
                    OnlyFor: "それだけに xxx",
                    PurchaseValid: "1 年間有効な購入",
                    Benefits: "お客様のメリット"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "動画編集者",
                    UploadText1: "まで",
                    VideoEditorFreeText1: "透かしを入れてエクスポート",
                    VideoEditorFreeText2: "最小ビデオ エクスポート",
                    VideoEditorFreeText3: "音声テキスト変換の分",
                    VideoEditorFreeText4: "テキスト読み上げの文字",
                    Compress: "圧縮 & コンバーター",
                    CompressFreeText1: "コンバータ用",
                    CompressFreeText2: "コンプレッサー用",
                    CompressFreeText3: "時間限定",
                    AudioEditor: "オーディオエディター」",
                    AudioEditorFreeText2: "1日あたりの回数",
                    Lite: "lite",
                    SpeechToText: "音声合成",
                    SpeechToTextFreeText1: "時間/月",
                    SpeechToTextFreeText2: "自動字幕と文字起こし",
                    SpeechToTextFreeText3: "SRT & テキストファイルをダウンロード",
                    VideoEditorLiteFreeText1: "透かし付きでエクスポート",
                    VideoEditorLiteFreeText2: "最小ビデオ エクスポート",
                    VideoEditorLiteFreeText3: "アップロード用",
                    VideoEditorLiteFreeText4: "文字/月のテキスト読み上げ",
                    VideoEditorLiteFreeText5: "書き出す",
                    Convert: "コンプレッサー＆コンバーターなど",
                    ConvertFreeText1: "ビデオのアップロード",
                    ConvertFreeText2: "回",
                    TTS: "テキスト読み上げ",
                    TTSFreeText1: "キャラクター",
                    TTSFreeText2: "AI自動文字起こし",
                    TTSFreeText3: "16 言語をサポート (継続的に更新)",
                    UnlimitedTimes: "回数無制限"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Save 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "透かしなし",
                    VideoEditorFreeText2: "時間のビデオ エクスポート",
                    VideoEditorFreeText4: "Speech-to-text の場合は 1 時間/月",
                    Compress: "圧縮 & コンバーター",
                    AudioEditor: "オーディオエディター」",
                    Lite: "lite",
                    SpeechToText: "音声合成",
                    SpeechToTextFreeText2: "自動字幕と文字起こし",
                    SpeechToTextFreeText3: "SRT & テキストファイルをダウンロード",
                    VideoEditorLiteFreeText1: "透かしなし",
                    Convert: "コンプレッサー＆コンバーターなど",
                    TTS: "テキスト読み上げ",
                    TTSFreeText2: "AI自動文字起こし",
                    TTSFreeText3: "16 言語をサポート (継続的に更新)",
                    VideoEditorBasicText1: "音声テキスト変換の時間/月",
                    LimitedTime: "利用時間",
                    TTSTips: "文字/月",
                    Month: "月",
                    Annual: "年"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(保存 67%)",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "透かしなし",
                    Compress: "圧縮 & コンバーター",
                    AudioEditor: "オーディオエディター」",
                    Lite: "lite",
                    SpeechToText: "音声合成",
                    SpeechToTextFreeText2: "自動字幕と文字起こし",
                    SpeechToTextFreeText3: "SRT & テキストファイルをダウンロード",
                    VideoEditorLiteFreeText1: "透かしなし",
                    Convert: "コンプレッサー＆コンバーターなど",
                    TTS: "テキスト読み上げ",
                    TTSFreeText2: "AI自動文字起こし",
                    TTSFreeText3: "16 言語をサポート (継続的に更新)"
                },
                PRICING_TIPS: {
                    Default: "プランを選択",
                    ConvertingNum: "同時に 2 つのファイルを ### することができます",
                    DayLimit: "無料トライアルは終了しました",
                    MaxSize: "ファイルが大きすぎます (xxx)",
                    Subtitle: "自動生成された字幕の時間が不足しています",
                    Transcription: "より多くの自動転写時間を購入する",
                    ConvertFileTips: "お使いのアカウントは、@@@ 以下の動画のみをサポートしています。",
                    FileNumUpgradeTips: "同時に ### より多くのファイルが必要ですか?今すぐアップグレード！",
                    DefaultUpgradeTips: "それらを待つか、今すぐアップグレードしてください。",
                    ConvertUpgradeTips: "続行するにはアップグレードしてください。",
                    TimeUpgradeTips: "アップグレードして、より多くのファイルを変換および圧縮します。",
                    TTSTips: "おっと、無料トライアルは終了しました",
                    TTSUpgradeTips: "もっとキャラクターを買ってください"
                },
                PRICING_STT: {
                    NAME: "音声合成",
                    DETAILS1: "自動字幕と文字起こし",
                    DETAILS2: "SRT & テキストファイルをダウンロード",
                    DETAILS3: "100以上の言語に翻訳",
                    UNIT1: "時間",
                    UNIT2: "/時間",
                    UNIT3: "クレジット",
                    UNIT4: "キャラクター",
                    UNIT5: "/画像",
                    PLAN1: "利用可能な字幕時間:",
                    PLAN2: "利用可能なテキスト読み上げ文字: ",
                    PLAN3: "利用可能なクレジット: "
                },
                PRICING_TTS: {
                    NAME: "テキスト読み上げ",
                    DETAILS1: "AI自動文字起こし",
                    DETAILS2: "16 言語をサポート (継続的に更新)",
                    DETAILS3: "100以上の言語に翻訳",
                    UNIT1: "キャラクター",
                    UNIT2: " ",
                    UNIT3: "クレジット",
                    UNIT4: "キャラクター",
                    UNIT5: "画像",
                    PLAN1: "利用可能なテキスト読み上げ文字:"
                },
                PRICING_BG: {
                    NAME: "画像の背景を削除",
                    DETAILS1: "1 つの画像から背景を削除するには、1 クレジットが必要です。",
                    DETAILS2: "SRT & テキストファイルをダウンロード",
                    DETAILS3: "100以上の言語に翻訳",
                    UNIT1: "クレジット",
                    UNIT2: "/画像",
                    PLAN1: "利用可能なクレジット:"
                },
                PRICING_HELP: {
                    STT: "Speech to Text 機能の購入後の有効期間は 1 年間です。このプランには、Media.io のその他のプレミアム権利は含まれません。",
                    TTS: "Text to Speech 機能の購入後の有効期間は 1 年間です。このプランには、Media.io のその他のプレミアム権利は含まれません。",
                    BG: "背景除去機能の購入後の有効期間は 1 年間です。このプランには、Media.io のその他のプレミアム権利は含まれません。"
                }
            }
        },
        251: function(e, o, i) {
            "use strict";
            i.r(o);
            o.default = {
                gloab: {
                    swalText: "취소하시겠습니까?",
                    swalOK: "예",
                    swalNO: "아니오",
                    swalSuccess: "이 작업을 삭제하시겠습니까?",
                    deleteAllTask: "모든 작업을 삭제하시겠습니까?",
                    download: "다운로드",
                    otherTools: "기타 도구",
                    editAgain: "다시 편집",
                    editNewFile: "새 파일 편집",
                    readyDownload: "축하합니다! 동영상을 다운로드할 준비가 되었습니다.",
                    downloadAll: "모두 다운로드",
                    converterMoreFiles: "다시 추가",
                    saveTo: "저장 위치",
                    dropbox: "Dropbox",
                    googleDrive: "Google Drive",
                    previewNot: "미리보기 없음",
                    browserNotSupport: "브라우저가 이 형식을 지원하지 않습니다.",
                    signUpFree: "무료 등록",
                    signUpSuccess: "축하합니다! \n이제 30 일 멤버십을 성공적으로 획득하셨습니다!",
                    freeUseTimes: "하루에 #### 번 파일을 편집했습니다. 로그인하여 제한을 제거하거나 내일 추가 파일을 편집하십시오. ",
                    loginUseTimes: "하루에 #### 번 파일을 편집했습니다. 제한을 제거하려면 온라인으로 구입하십시오. ",
                    Processing: "처리 중입니다. 잠시 기다려 주십시오.  "
                },
                chooseRightPlan: {
                    sizeMinLimit: "파일이 너무 큽니다! (####). 무료 계정은 @@@@ MB 이하의 동영상만 지원합니다. 용량 제한을 해제하려면 유료 버전을 구매하십시오.",
                    sizeMaxLimit: "파일이 너무 큽니다! (####). 온라인 유니컨버터는 @@@@ MB 이하의 동영상만 지원합니다. 데스크탑용 원더쉐어 유니컨버터를 추천드립니다.",
                    useTimeMinLimit: "하루 사용 한도 ####를 초과했습니다. 한숨을 쉬거나 아래에서 프리미엄 서비스를 선택하세요.",
                    useTimeMaxLimit: "하루 사용 한도 ####를 초과했습니다. 아래에서 프리미엄 서비스를 선택하세요.",
                    concurrentCountLimit: "무료 계정은 ####개 파일 동시 변환만 지원합니다. 계속하려면 변환 버튼을 클릭하거나 유료 버전을 구매하십시오.",
                    compressConcurrentCountLimit: "무료 계정에서는 ####개 파일 동시 압축만 지원합니다. 계속하려면 압축 버튼을 클릭하거나 유료 버전을 구매하십시오.",
                    choose_right_plan: "구매 플랜을 확인하세요"
                },
                uploadConvertText: {
                    uploadTitle: "파일 업로드 중...",
                    convertTitle: "파일 변환 중...",
                    compressTitle: "파일 압축 중...",
                    convertSuccess: "변환 성공!",
                    compressSuccess: "압축 성공!",
                    downloadFile: "지금 동영상을 미리 보고 다운로드할 수 있습니다.",
                    desc: "잠시만 기다려 주세요."
                },
                compressSetting: {
                    compressionMethod: "압축 방법",
                    byFileSize: "파일 크기별",
                    byVariable: "가변 비트레이트 기준",
                    byAutomatic: "자동",
                    highQuality: "고품질",
                    mediumQuality: "중간 품질",
                    lowQuality: "저품질",
                    fileSize: "파일 크기(MB)",
                    smallSize: "작은 크기",
                    betterQuality: "더 나은 품질"
                },
                functionTab: {
                    muteVideo: "동영상 음소거",
                    videoSpeed: "동영상 가속",
                    loopVideo: "동영상 루프",
                    audioCutter: "오디오 자르기",
                    reverseVideo: "리버스 비디오",
                    audioJoiner: "오디오 병합",
                    imagesToGif: "이미지에서 GIF 만들기",
                    videoToGif: "동영상에서 GIF 만들기",
                    imageResizer: "이미지 압축",
                    mergeVideo: "동영상 합치기",
                    slideshowMaker: "슬라이드쇼 메이커",
                    addAudioToVideo: "동영상에 오디오 추가"
                },
                dialog: {
                    cancel: "취소",
                    ok: "OK",
                    setting: "설정",
                    video: "모든 동영상 변환에 적용",
                    audio: "모든 오디오 변환에 적용",
                    image: "모든 이미지 변환에 적용",
                    keepOriginSize: "원본 크기 유지",
                    vector: "모든 벡터 변환에 적용",
                    videoText: "동영상",
                    audioText: "오디오",
                    imageText: "이미지",
                    customSize: "사이즈 커스텀",
                    encoder: "인코더",
                    resolution: "해상도",
                    frameRate: "프레임 레이트",
                    bitrate: "비트레이트",
                    channel: "채널",
                    sampleRate: "샘플레이트",
                    videoTips: "기본적으로 최상의 매개 변수 <br>설정을 제공합니다.",
                    audioTips: "이 옵션을 선택하지 않으면 변환된 <br>출력 비디오에 오디오가 없습니다.",
                    imageTips: "원래의 화면 비율 유지 여부를 지정하려면 [잠금/잠금 해제]를 클릭하세요.",
                    inputEmail: "이메일을 입력하세요",
                    trim: "자르기",
                    trimTips: "트림의 시작점과 끝점을 지정할 수 있습니다."
                },
                notify: {
                    title: "축하합니다! 이메일 등록 해주셔서 감사합니다.",
                    message: "작업이 완료되면 다운로드 주소를 보내드립니다."
                },
                convertedFiles: {
                    convertedFiles: "변환된 파일",
                    fileStore24Hours: "파일은 24 시간 동안 저장됩니다.",
                    name: "파일 이름",
                    size: "크기",
                    operate: "조작",
                    deleteAll: "모두 삭제",
                    nofiles: "파일이 없습니다.아래 버튼을 클릭하여 변환해주세요."
                },
                fileFunctional: {
                    image: {
                        cancelMinLimit: "Online Uniconverter에 등록하시면 #### MB의 이미지를 추가할 수 있습니다."
                    },
                    video: {
                        purchaseCancelMinLimit: "Online UniConverter의 무료 버전으로 업로드 할 수있는 동영상 크기는 #### MB 이하입니다. 온라인으로 구매하시면 제한없이 동영상 업로드 가능합니다.",
                        cancelMinLimit: "온라인 Online UniConverter는 #### MB 이하의 동영상을 업로드 할 수 있습니다. 크기 제한을 초과한 경우는 Wondershare UniConverter 데스크탑 버전을 시도해 보시기 바랍니다.",
                        cancelMaxLimit: "온라인 Online UniConverter는 #### MB 이하의 동영상을 업로드 할 수 있습니다. 크기 제한을 초과하는 경우 Wondershare UniConverter 데스크탑 버전을 시도해 보시기 바랍니다."
                    },
                    audio: {
                        purchaseCancelMinLimit: "Online UniConverter의 무료 버전으로 업로드 할 수있는 동영상 크기는 #### MB 이하입니다. 온라인으로 구매하시면 제한없이 동영상을 업로드 할 수 있습니다.",
                        cancelMinLimit: "Online UniConverter는 #### MB 이하의 동영상을 업로드 할 수 있습니다. 크기 제한을 초과하는 경우 Wondershare UniConverter 데스크탑 버전을 사용해보십시오.",
                        cancelMaxLimit: "Online UniConverter는 #### MB 이하의 동영상을 업로드 할 수 있습니다. 크기 제한을 초과하는 경우 Wondershare UniConverter 데스크탑 버전을 시도해 보시기 바랍니다."
                    },
                    notSupport: "Online UniConverter는 이 형식을 지원하지 않습니다. Wondershare UniConverter 데스크탑 버전을 시도해 보시기 바랍니다.",
                    zeroSize: "파일 크기가 0 인 파일을 업로드하지 마십시오.",
                    uploadFail: "동영상 불러오기에 실패했습니다. 다시 시도해주십시오.",
                    incorrectUrl: "잘못된 URL입니다.",
                    dropBoxLogIn: "Dropbox에서 업로드하기 전에 Online UniConverter에 로그인하십시오. ",
                    googleDriveLogIn: "Google 드라이브에서 업로드하기 전에 Online UniConverter에 로그인하십시오.",
                    youtubeLogIn: "YouTube 동영상의 URL을 붙여 넣기 전에 Online UniConverter에 로그인하십시오.",
                    youtubeConversionCount: "동영상을 이미 #### 번 편집했습니다. Wondershare UniConverter 데스크탑 버전을 시도해 보시기 바랍니다.",
                    chooseFiles: "파일을 선택",
                    cancel: "취소",
                    Loading: "로딩중",
                    Processing: "처리중"
                },
                conver: {
                    showAccountText1: "변환 작업이 완료된 후 이메일 알림을받을 수있는 멤버쉽 서비스를 이용하려면 Online UniConverter에 로그인하십시오.",
                    showAccountText2: "Online UniConverter는 지금 이 형식을 지원하지 않습니다. PC용버전 Wondershare UniConverter로 체험하십시오.",
                    showAccountText3: "하루 ####번의 제한수에 도달했습니다. 내일에 다시 시도하거나 가입하여 제한을 제거하십시오.",
                    showPopWindowText1: "최대 ####개의 파일 제한수에 도달했습니다. 여러 파일을 동시에 변환하려면 PC용 변환기를 다운로드하십시오.",
                    showPopWindowText2: "Online UniConverter는 #### MB 이하의 비디오만 지원합니다.제한을 제거하려면 PC용버전 Wondershare UniConverter를 사용하십시오.",
                    showPopWindowText3: "Online UniConverter의 무료 버전은 최대 #### MB의 비디오만 업로드할수 있습니다. 제한을 제거하려면 프리미엄 버전으로 업그레이드하십시오.",
                    showPopWindowText4: "하루 ####번의 제한수에 도달했습니다.PC버전으로 무제한으로 즐기거나 내일에 다시 시도하세요.",
                    showPopWindowText5: "Online UniConverter 무료 버전은 하루 #### 회 제한이 있습니다. 프리미엄 버전으로 업그레이드하여 제한을 해제하거나 내일에 다시 시도하세요.",
                    converterdFilesLogIn: "Online UniConverter에 로그인하여 변환된 파일을 다운로드 및 삭제할 수 있는 멤버십 서비스를 즐겨보세요.",
                    convert: "변환",
                    to: "에서",
                    download: "다운로드",
                    toggleDropdown: "드롭다운",
                    converting: "변환 중",
                    uploading: "업로드 중",
                    pleaseWait: "잠시만 기다려 주세요",
                    retry: "재시도",
                    ready: "준비 완료",
                    downloadAll: "모두 다운로드",
                    notifyMe: "완료되면 알림",
                    addMoreFiles: "다시 추가",
                    chooseFiles: "파일 선택",
                    fromDropbox: "Dropbox에서 추가",
                    fromGoogleDrive: "Google Drive에서 추가",
                    hours24_1: "파일은 24시간 동안 저장됩니다.",
                    hours24_2: "변환된 파일",
                    hours24_3: "수동으로 삭제",
                    FileConversionFailed: "파일 변환에 실패했습니다. 데스크탑 용 Wondershare UniConverter를 사용하십시오.",
                    delete: "삭제",
                    preview: "시사"
                },
                reverseVideo: {
                    reverseSpeed: "역방향 속도",
                    muteVideo: "동영상 음소거",
                    soundOptions: "사운드 옵션",
                    reverse: "뒤집다",
                    finalDuration: "최종 기간",
                    duration: "지속",
                    play: "플레이",
                    stop: "멈추다",
                    reverseingYourVideo: "처리 중입니다. 잠시만 기다려 주십시오.",
                    reverseFileAgain: "파일을 다시 반대로",
                    reverseAnotherVideo: "다른 비디오 반전"
                },
                loopVideo: {
                    duration: "지속시간",
                    play: "재생",
                    stop: "중지",
                    trimYouVideo: "동영상 자르기",
                    startTime: "시작 시간",
                    endTime: "종료 시간",
                    loopClip: "이 클립을 반복하기",
                    finalDuration: "최종기간",
                    loopingYourVideo: "루프 중",
                    loop: "반복",
                    loopFileAgain: "파일을 다시 반복",
                    loopAnotherVideo: "다시 추가",
                    cutTime: "무료 버전의 온라인 UniConverter는####초 이하의 동영상만 자를 수 있습니다. 프리미엄 버전으로 업그레이드하고 제한을 제거하십시오."
                },
                speedVideo: {
                    duration: "지속시간",
                    speed: "속도",
                    finalDuration: "최종기간",
                    soundOptions: "사운드 옵션",
                    muteVideo: "비디오 음소거",
                    start: "시작",
                    speedFileAgain: "다시 속도를 조정",
                    speedAnotherVideo: "다시 추가"
                },
                youtubeUrl: {
                    go: "GO",
                    createYoutubeThumbnail: "유튜브 썸네일을 만들려면 여기를 클릭하세요.",
                    rightClick: '이미지를 마우스 오른쪽 버튼으로 클릭하고 "다른 이름으로 이미지 저장..."을 선택합니다.',
                    noLogIn: "더 많은 YouTube 썸네일을 다운로드하려면 Online UniConverter에 로그인하십시오.",
                    noLongInType: "Youtube 업로드 제한 ",
                    noVipTip: "무료 버전은 YouTube 썸네일 다운로드를 5 번만 지원할 수 있습니다. 제한을 없애려면 프리미엄 버전으로 업그레이드하십시오.",
                    noYoutubeUrl: "죄송합니다. YouTube URL 만 지원합니다.",
                    noImgTip: "입력한 URL을 확인하십시오. 또는 데스크탑 버전 Wondershare UniConverter을 사용할 수 있습니다.",
                    errorUrl: "잘못된 URL 유형입니다."
                },
                cutter: {
                    onlyDesktop: "Online UniConverter 오디오 변환기는 현재 데스크탑에서만 사용할 수 있습니다.",
                    onYourComputer: "컴퓨터에서 Chrome 또는 Firefox와 함께 즐기십시오.",
                    loading: "로딩 중",
                    size: "크기",
                    duration: "지속시간",
                    cut: "자르기",
                    from: "시작",
                    to: "끝",
                    mode: "모드",
                    keep: "유지",
                    remove: "샂게",
                    fade: "페이드",
                    fadeIn: "페이드 인",
                    fadeOut: "페이드 아웃",
                    processing: "처리 중",
                    "waitMoment.": "잠시만 기다려주세요.",
                    cuttingYourAudio: "오디오를 자르고 있습니다.",
                    fileReady: "오디오 파일이 준비되었습니다",
                    editFileAgain: "파일 다시 수정",
                    cutAnotherAudio: "다시 추가"
                },
                compress: {
                    showAccountText1: "압축 작업이 완료된 후 이메일 알림을받을 수있는 멤버쉽 서비스를 이용하려면 Online UniConverter에 로그인하십시오. ",
                    showAccountText2: "하루 ####번의 제한수에 도달했습니다. 내일에 다시 시도하거나 가입하여 제한을 제거하십시오.",
                    showPopWindowText1: "현재 압축 파일의 제한 수는 1개입니다. 무제한으로 PC버전 Wondershare UniConverter를 즐기세요.",
                    showPopWindowText2: "Online UniConverter는 이 형식을 지원하지 않습니다. PC용버전 Wondershare UniConverter로 체험하십시오.",
                    showPopWindowText3: "Online UniConverter는 #### MB 이하의 비디오만 지원합니다.제한을 제거하려면 PC용버전 Wondershare UniConverter를 사용하십시오.",
                    showPopWindowText4: "Online UniConverter의 무료 버전은 최대 #### MB의 비디오만 업로드할수 있습니다. 제한을 제거하려면 프리미엄 버전으로 업그레이드하십시오.",
                    showPopWindowText5: "하루 ####번의 압축수에 도달했습니다. 내일에 다시 시도하거나 가입하여 제한을 제거하십시오.",
                    showPopWindowText6: "Online UniConverter 무료 버전은 하루 #### 회 제한이 있습니다. 프리미엄 버전으로 업그레이드하여 제한을 해제하거나 내일에 다시 시도하세요",
                    compressedSuccess: "성공적으로 압축됨",
                    outputSettings: "출력 설정",
                    quality: "품질",
                    resolution: "해상도",
                    source: "출처",
                    resetSize: "크기를 재설정",
                    format: "형식",
                    retry: "재시도",
                    download: "다운로드",
                    toggleDropdown: "드롭다운",
                    compressNew: "신규 압축",
                    compressing: "압축 중",
                    compress: "압축",
                    notifyMe: "완료되면 알림",
                    addMoreFiles: "다시 추가",
                    uploading: "업로드 중",
                    save: "저장",
                    moreSettings: "추가 설정",
                    finished: "완료됨",
                    uploadTipsHTML: "최대 @@@@MB의 파일을 업로드할 수 있습니다. 더 많은 파일을 얻으려면<a href class='link'>플랜을 확인</a>하세요.",
                    uploadTipsText: "최대 @@@@MB의 파일을 업로드할 수 있습니다. 더 많은 파일을 얻으려면 플랜을 확인하세요."
                },
                img: {
                    showPopWindowText1: "Online UniConverter는 이 형식을 지원하지 않습니다. PC용버전 Wondershare UniConverter로 체험하십시오.",
                    showPopWindowText2: "Online UniConverter는 동시에 ####개의 이미지 파일만 압축 할 수 있습니다. 제한을 제거하려면 Wondershare UniConverter PC버전을 다운로드하십시오.",
                    showPopWindowText3: "Online UniConverter무료 버전은 하루에 ##### 개 파일만 압축할 수 있으며, 프리미엄 버전으로 업그레이드하여 제한을 제거하거나 내일 계속하십시오.",
                    showPopWindowText4: "Online UniConverter는 최대 ####개이미지 만 동시에 변환 할 수 있습니다. 제한을 제거하려면 Wondershare UniConverter PC버전을 다운로드하십시오.",
                    showPopWindowText5: "Online UniConverter는 #### 이미지 만 동시에 변환 할 수 있습니다. 제한을 제거하려면 프리미엄 버전으로 업그레이드하십시오.",
                    showPopWindowText6: "Online UniConverter는 #### MB 이하의 이미지만 업로드할수 있습니다. 제한을 제거하려면 로그인하십시오.",
                    showPopWindowText7: "하루 #### 번의 제한수에 도달했습니다. 내일에 이미지 압축을 계속하거나 로그인하여 제한을 제거하십시오",
                    showPopWindowText8: "하루 #### 번의 제한수에 도달했습니다. 내일에 이미지 변환을 계속하거나 로그인하여 제한을 제거하십시오.",
                    showPopWindowText9: "하루 #### 번의 제한수에 도달했습니다.내일에 이미지 압축을 계속하거나 Wondershare UniConverter PC버전을 사용하여이 제한을 제거하십시오.",
                    showPopWindowText10: "하루 #### 번의 제한수에 도달했습니다.내일에 이미지 압축을 계속하거나 프리미엄 버전으로 업그레이드하여 제한을 제거하십시오.",
                    showPopWindowText11: "하루 #### 번의 제한수에 도달했습니다. 내일에 이미지 변환을 계속하거나 Wondershare UniConverter PC버전을 사용하여이 제한을 제거하십시오.",
                    showPopWindowText12: "하루 #### 번의 제한수에 도달했습니다. 내일에 이미지 변환을 계속하거나 프리미엄 버전으로 업그레이드하여 제한을 제거하십시오.",
                    compressorImg: "하루 #### 번의 제한수에 도달했습니다. 내일에 이미지 압축을 계속하거나 무료로 가입하여 제한을 제거하십시오.",
                    converterImg: "하루 #### 번의 제한수에 도달했습니다. 내일에 이미지 변환을 계속하거나 무료로 가입하여 제한을 제거하십시오.",
                    compressing: "압축 중",
                    converting: "변환 중",
                    download: "다운로드",
                    toggleDropdown: "드롭다운",
                    uploading: "업로드 중",
                    retry: "재시도",
                    ready: "준비 완료",
                    to: "to",
                    downloadAll: "모두 다운로드",
                    addMoreFiles: "다시 추가",
                    chooseFiles: "파일을 선택",
                    fromDropbox: "Dropbox에서 추가",
                    fromGoogleDrive: "Google Drive에서 추가",
                    keepOriginalSize: "원본 사이즈 유지",
                    customSize: "사이즈 커스텀",
                    to16_8000: "16~8000 PX 수치를 입력해주세요",
                    convertAllFilesTo: "모든 파일을 변환",
                    deleteAll: "모두 삭제",
                    compress: "압축",
                    convert: "변환"
                },
                gif: {
                    showAccountText1: "Online UniConverter는 #### MB 이하의 이미지만 업로드할수 있습니다. 제한을 제거하려면 로그인하십시오.",
                    showAccountText2: "하루 #### 번의 제한수에 도달했습니다.내일에 GIF작업을 계속하거나 로그인하여 제한을 제거하십시오.",
                    showAccountText3: "하루 #### 번의 제한수에 도달했습니다.내일에 GIF작업을 계속하거나 로그인하여 제한을 제거하십시오.",
                    showPopWindowText1: "Online UniConverter는 #### 개의 이미지만 동시에 GIF를 만들 수 있습니다. Wondershare UniConverter PC 버전을 사용하여 제한을 제거하십시오.",
                    showPopWindowText2: "Online UniConverter는 #### 개의 이미지만 동시에 GIF를 만들 수 있습니다. 제한을 제거하려면 프리미엄 버전으로 업그레이드하십시오.",
                    showPopWindowText3: "Online UniConverter는이 형식을 지원하지 않습니다. PC용 Wondershare UniConverter 를 사용하십시오.",
                    showPopWindowText4: "하루 #### 번의 제한수에 도달했습니다. 내일 더 많은 GIF를 만들거나 PC용 Wondershare UniConverter를 사용하여 제한을 제거하십시오.",
                    showPopWindowText5: "하루 #### 번의 제한수에 도달했습니다. 내일 더 많은 GIF를 만들거나 프리미엄 버전으로 업그레이드하여 제한을 제거하십시오.",
                    showPopWindowText6: "죄송합니다. GIF 변환에 실패했습니다. Wondershare UniConverter PC 버전을 사용하여 이미지를 GIF로 변환하십시오.",
                    showPopWindowText7: "한가지 유형의 워터마크만 지원됩니다. Wondershare UniConverter PC 버전을 사용하여 더많은 워터마크를 추가하십시오.",
                    showPopWindowText8: "온라인 UniConverter는 #### MB 이하의 비디오만 업로드할수 있습니다. 대용량 비디오 업로드에는 Wondershare UniConverter PC 버전을 사용하십시오.",
                    showPopWindowText9: "온라인 UniConverter는 #### MB 이하의 비디오만 업로드할수 있습니다. 제한을 제거하려면 프리미엄 버전으로 업그레이드하십시오.",
                    showPopWindowText10: "죄송합니다. 비디오 파일을 가져 오지 못했습니다. 다시 시도하십시오.",
                    showPopWindowText11: "죄송합니다. YouTube 비디오 가져 오기에 실패했습니다. 다시 시도하십시오.",
                    showPopWindowText12: "죄송합니다. 잘못된 유형의 URL입니다. YouTube 동영상은 GIF로만 지원합니다.",
                    showPopWindowText13: "하루 #### 번의 제한수에 도달했습니다.내일에 계속하거나 PC용 Wondershare UniConverter를 사용하십시오",
                    showPopWindowText14: "하루 #### 번의 제한수에 도달했습니다.내일에 계속하거나 프리미엄 버전으로 업그레이드하여 제한을 제거하십시오.",
                    showPopWindowText15: "URL을 붙여 YouTube 동영상으로 GIF를 만들려면 Online UniConverter에 로그인하십시오.",
                    showPopWindowText16: "현재 GIF 시간이 Online UniConverter의 #### 초 제한을 초과했습니다. Wondershare UniConverter PC 버전을 사용하여 제한을 제거하십시오.",
                    showPopWindowText17: "죄송합니다. GIF 변환에 실패했습니다. GIF를 성공적으로 만들려면 Wondershare UniConverter PC 버전을 사용하십시오.",
                    showPopWindowText18: "죄송합니다. GIF 변환에 실패했습니다. GIF를 성공적으로 만들려면 Wondershare UniConverter PC 버전을 사용하십시오.",
                    download: "다운로드",
                    toggleDropdown: "드롭다운",
                    imagesToGif: "이미지에서 GIF 만들기",
                    videoToGif: "동영상에서 GIF 만들기",
                    loading: "로딩 중",
                    cancel: "취소",
                    makingGif: "GIF 생성중",
                    suspended: "일시 정지",
                    play: "PLAY",
                    width: "너비",
                    height: "높이",
                    pixels: "픽셀",
                    widthRangePixels: "너비 범위는 50-500픽셀입니다.",
                    heightRangePixels: "높이 범위는 50-500 픽셀입니다.",
                    frameRate: "프레임 속도",
                    fps: "fps",
                    fpsTip: "fps가 높을수록 애니메이션은 부드러워집니다. 1에서 30 사이로 설정해주시면 됩니다.",
                    textWatermark: "문자 워터마크",
                    createGif: "GIF 만들기",
                    createNewGif: "새 GIF 만들기",
                    remakeGif: "GIF 다시 만들기",
                    trimYourVideo: "동영상을 자르기",
                    timeTip: "슬라이더를 사용하여 GIF 지속 시간을 선택하거나 시작 시간과 종료 시간을 정확하게 설정하세요.",
                    StartTime: "시작 시간",
                    endTime: "종료 시간",
                    outputSize: "출력 크기",
                    fpsMeans: "Fps는 최종 GIF가 실행될 초당 프레임 수를 의미합니다. fps가 높을수록 애니메이션이 더 부드러워집니다.",
                    imageWatermark: "이미지 워터마크"
                },
                mute: {
                    showAccountText1: "하루 #### 번의 제한수에 도달했습니다. 내일 더 GIF를 만들거나 로그인하여 제한을 제거하십시오.",
                    showAccountText2: "URL을 붙여 YouTube 비디오를 음소거하려면 Online UniConverter에 로그인하십시오",
                    showPopWindowText1: "Online UniConverter는 이형식을 지원하지 않습니다. Wondershare UniConverter PC 버전을 사용하여 비디오를 음소거하십시오.",
                    showPopWindowText2: "온라인 UniConverter는 비디오를 #### MB로만 업로드할수 있습니다.이 크기를 초과하면 대용량 파일 업로드를 위해 Wondershare UniConverter PC 버전을 사용해보십시오..",
                    showPopWindowText3: "Online UniConverter의 무료 버전은 최대 #### MB 크기의 동영상만 업로드할수 있습니다. 제한을 제거하려면 프리미엄 버전으로 업그레이드하십시오.",
                    showPopWindowText4: "하루 #### 번의 제한수에 도달했습니다.내일에 더 많은 GIF를 만들거나 프리미엄 버전으로 업그레이드하여 제한을 제거하십시오.",
                    showPopWindowText5: "죄송합니다, 비디오 파일을 가져오지 못했습니다, 다시 시도하십시오.",
                    showPopWindowText6: "온라인 UniConverter는 #### MB 비디오만 업로드할수 있습니다.이 크기를 초과하면 대용량 파일 업로드를 위해 Wondershare UniConverter PC 버전을 사용해보십시오..",
                    showPopWindowText7: "죄송합니다. 잘못된 유형의 URL입니다.  YouTube 동영상은 GIF 만 지원합니다.",
                    showPopWindowText8: "하루 #### 번의 제한수에 도달했습니다. 프리미엄 버전으로 업그레이드하고 제한을 제거하십시오",
                    showPopWindowText9: "음소거 변환에 실패했습니다. Mute를 성공적으로 만들려면 Wondershare UniConverter PC 버전을 사용하십시오.",
                    download: "다운로드",
                    toggleDropdown: "드롭다운",
                    mute: "음소거",
                    previewNot: "미리보기를 사용할 수 없습니다.",
                    browserNotSupport: "브라우저가 이 형식을 지원하지 않습니다.",
                    muteAnother: "다시 추가"
                },
                user: {
                    user1: "Wondershare ID로 시작하기",
                    user2: "신규등록",
                    user3: "무료가입",
                    user4: "이메일 주소",
                    user5: "비밀번호",
                    user6: "로그인 상태 유지",
                    user7: "비밀번호를 잊으셧나요?",
                    user8: "로그인",
                    user9: "혹은",
                    user10: "외부 계정 로그인",
                    user11: "이미 계정이 있습니까?",
                    user12: "여기에서 로그인",
                    user13: "인증코드",
                    user14: "입력 이메일 주소로 인증코드를 보내려면 버튼을 클릭하십시오.",
                    user15: "가입하기",
                    user16: "유효한 이메일 주소를 입력하십시오.",
                    user17: "이메일은 비워둘수 없습니다",
                    user18: "비밀번호는 6-16 자 또는 숫자 여야합니다.",
                    user19: "비밀번호는 비워둘수 없습니다",
                    user20: "인증코드는 비워둘수 없습니다",
                    user21: "이름은 비워둘수 없습니다",
                    user22: "인증코드 보내기",
                    user23: "사용자 이름",
                    user24: "온라인 uniconverter 에 참여하여 더 좋은 무료 서비스를 즐기세요"
                },
                ediror: {
                    editText1: "파일을 드래그",
                    editText2: "파일을 여기에 업로드하십시오",
                    editText3: "파일을 드래그 하거나<br>클릭하여 파일을 추가하세요",
                    editText4: "포화",
                    editText5: "대조",
                    editText6: "밝기",
                    editText7: "커스터마이즈",
                    editText8: "1:1 (정사각형)",
                    editText9: "4:3 (클래식 TV)",
                    editText10: "16:9 (와이드 스크린)",
                    editText11: "수평",
                    editText12: "수직",
                    editText13: "비디오",
                    editText14: "검색 결과가 없습니다",
                    editText15: "오디오",
                    editText16: "반시계 방향",
                    editText17: "시계 방향",
                    editText18: "로딩 중...",
                    editText19: "취소",
                    editText20: "사이즈",
                    editText21: "지속 시간",
                    editText22: "해상도",
                    editText23: "분할",
                    editText24: "자르기",
                    editText25: "조정",
                    editText26: "회전",
                    editText27: "뒤집기",
                    editText28: "저장 위치:",
                    editText29: "시작",
                    editText30: "처리중",
                    editText31: "다른 비디오 편집",
                    editText32: "하루에 이미 비디오를 5 번 편집했습니다. 내일에 계속하거나 로그인하여 제한을 제거하십시오.",
                    editText33: "하루에 이미 비디오를 5 번 편집했습니다. 내일에 계속하거나 로그인하여 제한을 제거하십시오.",
                    editText34: "Online UniConverter는 #### MB 이하의 비디오 만 지원합니다. PC용 Wondershare UniConverter로 무제한으로 즐기세요.",
                    editText35: "Online UniConverter는 #### MB 이하의 비디오 만 지원합니다. PC용 Wondershare UniConverter로 무제한으로 즐기세요.",
                    editText36: "하루에 이미 비디오를 #### 번 편집했습니다. 내일에 계속하거나 PC용 Wondershare UniConverter를 사용하여 제한을 제거하십시오.",
                    editText37: "Online UniConverter는 이형식을 지원하지 않습니다. PC용 Wondershare UniConverter를 사용하십시오.",
                    editText38: "저장",
                    editText39: "이미지",
                    editText40: "벡터"
                },
                nav: {
                    navText1: "사용자 센터",
                    navText2: "로그 아웃",
                    navText3: "로그인",
                    navText4: "무료 가입",
                    navText5: "30 일 무료 등록",
                    convertedFiles: "변환된 파일",
                    myAccount: "계정"
                },
                popup: {
                    text1: "Online UniConverter의 데스크탑 버전",
                    text2: "1000 + 입출력 형식 지원 ",
                    text3: "30배 빠른 변환 시피드.",
                    text4: "크기 제한없이 비디오를 작은 크기로 일괄 압축. ",
                    text5: "분할, 비디오 자르기, 효과 적용 등의 유용한 편집 기능.",
                    text6: "이미지를 JPG, PNG, TIFF, GIF, BMP 등 형식으로 제한없이 변환.",
                    text7: "이미지를 JPG, PNG, TIFF, GIF, BMP 등 형식으로 제한없이 압축.",
                    downloadWin: "https://ssl-download.wondershare.kr/video-converter-ultimate_full4979.exe",
                    downloadMac: "https://ssl-download.wondershare.kr/video-converter-ultimate-mac_full4980.zip",
                    text8: "프리미엄으로 업그레이드",
                    text9: "연간",
                    text10: "$2.95",
                    text11: "USD $4.95",
                    text12: "달",
                    text13: "언제든지 취소",
                    buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=297&sub_lid=0&currency=USD&language=English&verify=8794fcdb210d1a58d3f90b1dede2733c",
                    text14: "월간",
                    text15: "$9.95",
                    text16: "달",
                    text17: "언제든지 취소",
                    buy_now_month: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=294&sub_lid=0&currency=USD&language=English&verify=4c3bb50bf909cb7f333c54f832e8e754",
                    text18: "500MB",
                    text19: "최대 파일 크기",
                    text20: "30",
                    text21: "동시 변환",
                    text22: "고속",
                    text23: "변환",
                    text24: "다운로드",
                    text25: "무제한",
                    text26: "파일 압축",
                    text26_1: "이메일 알림",
                    text27: "베스트셀러",
                    text28: "온라인 1년 구독",
                    text29: "온라인 1개월 구독",
                    text31: "무료 체험",
                    text32: "지금 구매",
                    text33: "https://uniconverter.wondershare.kr/",
                    text34: "https://www.media.io/ko/mobile-download-guidance.html"
                },
                resize: {
                    download: "다운로드",
                    toggleDropdown: "드롭다운",
                    loading: "로딩 중",
                    cancel: "취소",
                    byPixels: "픽셀 (px)",
                    byPercentage: "백분율 (%)",
                    originalLockTip: "원래 화면 비율을 유지할지 여부를 지정하려면 잠금 / 잠금 해제를 클릭합니다.",
                    resize: "사이즈 변경",
                    lockTip: "화면 비율 켜기/끄기",
                    pixels16To8000: "16 ~ 8000 사이의 픽셀 너비와 높이를 입력하십시오.",
                    percentage1To500: "1 ~ 500 사이의 너비와 높이의 백분율을 입력하십시오",
                    stretch: "스트레칭",
                    stretchTip: "이미지는 새로운 크기에 맞게 늘어질 것입니다.",
                    fill: "채우기",
                    fillTip: "이미지가 새 크기와 일치하도록 잘립니다.",
                    fit: "맞추기",
                    fitTip: "이미지가 새 크기에 맞게 잘리고 나머지 부분은 선택한 배경색으로 도색됩니다.",
                    selectColor: "맞추기 옵션을 선택하면 이미지는 선택한 색상으로 그려집니다.",
                    resizingImages: "이미지 크기 변경",
                    resizedFail: "이미지 사이즈 변경에 실패했습니다",
                    resizedSuccess: "이미지 크기가 성공적으로 조정되었습니다.",
                    sorryYourFiles: "죄송합니다",
                    resizedFailDownload: "사이즈 변경에 실패했습니다.다운로드 해주세요",
                    desktopVersion: "데스크탑 버전",
                    tryAgain: "재시도",
                    resizeMore: "다시 추가",
                    fitColor: "색상 조정"
                },
                joiner: {
                    onlyDesktop: "온라인 UniConverter 오디오 변호나기는 현재 데스크탑에서만 사용할 수 있습니다.",
                    onYourComputer: "컴퓨터에서 Chrome 또는 Firefox와 함께 즐기십시오.",
                    loading: "로딩 중",
                    importFailed: "가져오기에 실패했습니다. 오디오 병합을 계속해야하는 경우 병합하기 전에 실패한 파일을 삭제하십시오.",
                    fadeIn: "클릭하여 오디오 페이드 인을 선택 / 선택해제 합니다.",
                    fadeInOut: "클릭하여 오디오 페이드 인과 페이드 아웃을 선택 / 선택해제 합니다.",
                    fadeOut: "클릭하여 오디오 페이드 아웃을 선택 / 선택해제 합니다.",
                    startTime: "시작 시간",
                    endTime: "종료 시간",
                    waitMoment: "파일을 업로드하고 있습니다. 잠시만 기다려주십시오.",
                    merge: "병합",
                    mergingYourAudio: "오디오 파일을 병합하고 있습니다",
                    fileReaded: "오디오 파일이 업로드되었습니다",
                    editFileAgain: "파일 다시 수정",
                    mergeAnother: "다시 추가",
                    joinCountFree: "하루 #### 번 제한에 도달했습니다. 내일에 다시 시도하거나 로그인 후 제한을 해제하십시오.",
                    joinCountLogin: "하루에 #### 번 제한에 도달했습니다. 데스크탑용 Wondershare UniConverter 를 사용하십시오. ",
                    fileNumFree: "무료 온라인 UniConverter에서는 한 번에 #### 파일만 병합할 수 있습니다. 프리미엄 버전으로 업그레이드하고 제한을 제거하십시오.",
                    fileNumLogin: "온라인 UniConverter는 한 번에 ### 파일만 병합할 수 있습니다. 데스크탑 버전 Wondershare UniConverter를 사용하십시오."
                },
                editorVideo: {
                    mergeVideos: "동영상 합치기",
                    slideshowMaker: "슬라이드쇼 메이커",
                    addAudioToVideo: "동영상에 오디오 추가",
                    merge: "합치기",
                    addFiles: "파일 추가 ",
                    addAudio: "오디오 추가",
                    fitWithBorder: "테두리에 맞춤",
                    zoomCrop: "확대/축소 및 자르기",
                    setting: "설정",
                    goBack: "돌아가기",
                    audioOption: "오디오 옵션",
                    cropOptions: "자르기 옵션",
                    Crossfade: "크로스페이드",
                    instagramVideo: "인스타그램 동영상",
                    youTubeVideo: "유튜브 동영상",
                    instagramStory: "인스타그램 스토리",
                    facebookVideo: "페이스북 동영상",
                    imageDuration: "이미지 지속 시간",
                    transition: "전송",
                    applyAllImg: "모든 이미지에 적용",
                    outputFormat: "출력 형식",
                    trimAudio: "오디오 자르기",
                    audioTrackVolume: "오디오 트랙 볼",
                    videoSoundVolume: "비디오 사운드 볼륨",
                    startTime: "시작 시간",
                    endTime: "종료 시간",
                    empty_file: "죄송합니다. 귀하의 동영상은 어떤 식으로든 조작되지 않았습니다. <br/>동영상 작업을 위한 온라인 도구로 이동하십시오."
                },
                memeGenerator: {
                    "meme-generator": "밈 생성기",
                    template: "주형",
                    Create: "생성하다",
                    OriginalSize: "원본 크기",
                    FormateNotSupport: "죄송합니다. Online Uniconverter는 이 이미지 형식을 지원하지 않습니다. 다른 이미지 파일을 업로드하십시오.",
                    ResizeFor: "크기 조정",
                    OutputSettings: "출력 설정",
                    UploadGifFail: "죄송합니다. GIF 파일을 가져오지 못했습니다. 다시 시도해 주세요.",
                    UploadFail: "죄송합니다. 이미지 파일을 가져오지 못했습니다. 다시 시도해 주세요.",
                    GenerateFail: "죄송합니다. 밈 생성에 실패했습니다. 다시 시도해 주세요.",
                    onlyDesktop: "온라인 Uniconverter(원래 Media.io) 밈 생성기는 이제 개인용 컴퓨터에서만 사용할 수 있습니다.",
                    onYourComputer: "컴퓨터의 크롬이나 파이어폭스로 즐기시기 바랍니다.",
                    downloadText: "축하합니다! 밈을 다운로드할 준비가 되었습니다.",
                    enterYourText: "텍스트를 입력하세요",
                    textPlaceholder: "여기에 텍스트",
                    topTextPlaceholder: "여기에 텍스트 위로",
                    bottomTextPlaceholder: "하단 텍스트 여기"
                },
                vocalRemover: {
                    customParseTitle: "오디오 처리 중…",
                    customParseDesc: "이제 인공지능알고리즘이작동합니다. 1분정도걸릴수있습니다.",
                    customParseSuccess: "축하합니다! 오디오를다운로드할준비가되었습니다.",
                    downloadFile: "지금 오디오를미리보고다운로드할수있습니다.",
                    instrumental: "조격",
                    vocals: "보컬"
                },
                PricingPanel: {
                    SavePrice: "Save Up to 60%",
                    Month: "/mo",
                    BilledAnnually: "Billed xxx annually",
                    CurPlan: "Current Plan",
                    SignUp: "SIGN UP",
                    BuyNow: "BUY NOW",
                    Features: "See All Plan Features",
                    PurchasedClick: "If you have purchased, please click 'Yes' to active",
                    Account: "Your Account: ",
                    UserPlan: "xxx Plan",
                    ExpiredTime: "Until xxx",
                    RefreshTips: "Refresh your account information again",
                    No: "No",
                    Yes: "Yes",
                    GotIt: "Got it"
                },
                SttPricing: {
                    AddOn: "Add-on",
                    PayAs: "Pay As You Go",
                    OnlyFor: "Only for {msg}",
                    PurchaseValid: "Purchase valid for 1 year",
                    Benefits: "Customer benefits"
                },
                PricingEnumFree: {
                    FreeId: "free",
                    ZeroPrice: "$0",
                    VideoEditor: "Video Editor",
                    UploadText1: "Up to",
                    VideoEditorFreeText1: "Export with watermark",
                    VideoEditorFreeText2: "min video exports",
                    VideoEditorFreeText3: "mins for Speech-to-text",
                    VideoEditorFreeText4: "characters for Text-to-speech",
                    Compress: "Compress & Converter",
                    CompressFreeText1: "for converter",
                    CompressFreeText2: "for compressor",
                    CompressFreeText3: "times limited",
                    AudioEditor: "Audio Tools",
                    AudioEditorFreeText2: "times per day",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText1: "hours per month",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "Export with watermark",
                    VideoEditorLiteFreeText2: "min video exports",
                    VideoEditorLiteFreeText3: "for uploading",
                    VideoEditorLiteFreeText4: "characters/mo for Text-to-speech",
                    VideoEditorLiteFreeText5: "export",
                    Convert: "Compressor & Converter & More",
                    ConvertFreeText1: "video upload",
                    ConvertFreeText2: "times",
                    TTS: "Text-To-Speech",
                    TTSFreeText1: "Characters",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    UnlimitedTimes: "Unlimited times"
                },
                PricingEnumBasic: {
                    FreeId: "basic",
                    MonthlyPrice: "$9.99",
                    AnnuallyToTalPrice: "$47.4",
                    SaveUp: "(Save 70%)",
                    AnnuallyPerPrice: "$3.95",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    VideoEditorFreeText2: "hour video exports",
                    VideoEditorFreeText4: "hrs/mo for Speech-to-text",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)",
                    VideoEditorBasicText1: "hours/mo for Speech-to-text",
                    LimitedTime: "usage time",
                    TTSTips: "Characters/mo",
                    Month: "Monthly",
                    Annual: "Annually"
                },
                PricingEnumPro: {
                    FreeId: "pro",
                    MonthlyPrice: "$19.99",
                    AnnuallyToTalPrice: "$79.99",
                    AnnuallyPerPrice: "$6.66",
                    priceSave: "(Save 67%)",
                    VideoEditor: "Video Editor",
                    VideoEditorFreeText1: "No watermark",
                    Compress: "Compress & Converter",
                    AudioEditor: "Audio Tools",
                    Lite: "lite",
                    SpeechToText: "Speech-To-Text",
                    SpeechToTextFreeText2: "Auto subtitle and transcription",
                    SpeechToTextFreeText3: "Download SRT & text file",
                    VideoEditorLiteFreeText1: "No watermark",
                    Convert: "Compressor & Converter & More",
                    TTS: "Text-To-Speech",
                    TTSFreeText2: "AI automatic transcription",
                    TTSFreeText3: "Support 16 Languages (Continually Updated)"
                },
                PRICING_TIPS: {
                    Default: "Choose Your Plan",
                    ConvertingNum: "You can ### 2 files at the same time",
                    DayLimit: "Your free trial is over",
                    MaxSize: "File is too large(xxx)",
                    Subtitle: "Your auto-generated subtitles are running out of time",
                    Transcription: "Buy More Auto-transcription Time",
                    ConvertFileTips: "Your account only supports videos no more than @@@.",
                    FileNumUpgradeTips: "Wanna ### more files at the same time? upgrade now!",
                    DefaultUpgradeTips: "Please wait for them or upgrade now.",
                    ConvertUpgradeTips: "Please upgrade to continue.",
                    TimeUpgradeTips: "Upgrade to convert and compress more files.",
                    TTSTips: "Oops, your free trial is over",
                    TTSUpgradeTips: "Please buy more characters",
                    FileSizeExceedTips: "File is too large",
                    FileSizeLimit: "The file size exceeds the free limit.",
                    UpgradeSignTips: "Please sign up to continue uploading large files or upgrade your account.",
                    UpgradeTips: "Please upgrade and continue uploading.",
                    FileOver: "To ensure the editing experience, uploading files over 2G is not supported for now.",
                    FileDuration: "The max export limit duration is 2 hours, so you will have to split the video into smaller clips and try again.",
                    FileLength: "Your video length exceeds the free limit."
                },
                PRICING_STT: {
                    NAME: "Speech-To-Text",
                    DETAILS1: "Auto subtitle and transcription",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Hrs",
                    UNIT2: "/hour",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "/image",
                    PLAN1: "Available Subtitles Time: ",
                    PLAN2: "Available Text-To-Speech Characters: ",
                    PLAN3: "Available credits: "
                },
                PRICING_TTS: {
                    NAME: "Text-To-Speech",
                    DETAILS1: "AI automatic transcription",
                    DETAILS2: "Support 16 Languages (Continually Updated)",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "Characters",
                    UNIT2: " ",
                    UNIT3: "credits",
                    UNIT4: "Characters",
                    UNIT5: "image",
                    PLAN1: "Available Text-To-Speech Characters:"
                },
                PRICING_BG: {
                    NAME: "Remove Background for Images",
                    DETAILS1: "Removing the background from 1 image requires 1 credits.",
                    DETAILS2: "Download SRT & text file",
                    DETAILS3: "Translate to 100+ languages",
                    UNIT1: "credits",
                    UNIT2: "/image",
                    PLAN1: "Available credits:"
                },
                PRICING_HELP: {
                    STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                    TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                    BG: "The valid period after purchasing Remove Background feature is one year. This plan does not include other premium rights of Media.io."
                }
            }
        },
        252: function(e, o, i) {
            "use strict";
            i.r(o);
            var t = i(12),
                r = {
                    gloab: {
                        swalText: "你确定取消吗?",
                        swalOK: "是",
                        swalNO: "否",
                        swalSuccess: "你确定要删除此任务吗?",
                        deleteAllTask: "确定要删除所有任务吗?",
                        download: "下载",
                        otherTools: "其他工具",
                        editAgain: "再次编辑",
                        editNewFile: "编辑新文件",
                        readyDownload: "恭喜！ 您的视频可以下载了。",
                        downloadAll: "下载全部",
                        converterMoreFiles: "转换更多文件",
                        saveTo: "存储至",
                        dropbox: "云储存",
                        googleDrive: "谷歌云盘",
                        previewNot: "预览不可用。",
                        browserNotSupport: "你的浏览器不支持此格式。",
                        signUpFree: "免费注册",
                        signUpSuccess: "恭喜您，注册成功。已获得三十天免费授权！",
                        freeUseTimes: "您在一天内只能编辑 #### 个文件。 请登录删除限制，或明天编辑更多文件",
                        loginUseTimes: "您在一天内只能编辑 #### 个文件。请在线购买以取消限制。  ",
                        Processing: "正在处理，请稍候。"
                    },
                    chooseRightPlan: {
                        sizeMinLimit: "文件太大了！(####)免费会员仅支持不超过@@@@MB的视频。请购买在线端会员以解锁更多功能。",
                        sizeMaxLimit: "文件太大了！(####)万兴优转在线端仅支持不超过@@@@MB的视频。请使用万兴优转桌面端完成相应操作。",
                        useTimeMinLimit: "您已超过每天的 #### 使用限制。请叹息或在下方选择一项优质服务。",
                        useTimeMaxLimit: "您已超过每天的 #### 使用限制。请在下方选择一项高级服务。",
                        concurrentCountLimit: "您的免费会员只允许转换####请单击“转换”按钮继续操作，或升级为万兴优转在线端会员。",
                        compressConcurrentCountLimit: "您的免费会员只允许同时进行####压缩。请单击“压缩”按钮继续操作，或升级为万兴优转在线端会员。",
                        choose_right_plan: "选择您所需的服务项目"
                    },
                    uploadConvertText: {
                        uploadTitle: "正在上传您的文件...",
                        convertTitle: "正在转换您的文件...",
                        compressTitle: "正在压缩您的文件...",
                        convertSuccess: "转换成功！",
                        compressSuccess: "压缩完成！",
                        downloadFile: "您现在可以预览并下载您的视频",
                        desc: "请稍等片刻"
                    },
                    compressSetting: i.n(t)()({
                        compressionMethod: "压缩方式",
                        byFileSize: "通过文件大小",
                        byVariable: "通过比特率调整",
                        byAutomatic: "自动压缩",
                        highQuality: "高质量",
                        mediumQuality: "中等质量",
                        lowQuality: "低质量",
                        fileSize: "文件大小(MB)",
                        smallSize: "小尺寸",
                        betterQuality: "更好的质量"
                    }, "smallSize", "小尺寸"),
                    functionTab: {
                        muteVideo: "视频静音",
                        videoSpeed: "视频加速",
                        loopVideo: "视频循环",
                        reverseVideo: "视频倒放",
                        audioCutter: "音频剪切",
                        audioJoiner: "音频合并",
                        imagesToGif: "图片转GIF",
                        videoToGif: "视频转GIF",
                        imageResizer: "图片调整",
                        mergeVideo: "合并视频",
                        slideshowMaker: "幻灯片制作工具",
                        addAudioToVideo: "将音频添加到视频",
                        removeWatermark: "去除水印",
                        addWatermark: "添加水印"
                    },
                    dialog: {
                        cancel: "取消",
                        ok: "确认",
                        setting: "设置",
                        video: "适用于所有视频转换",
                        audio: "适用于所有音频转换",
                        image: "适用于所有图像转换",
                        keepOriginSize: "保持原始大小",
                        vector: "适用于所有参数转换",
                        videoText: "视频",
                        audioText: "音频",
                        imageText: "图像",
                        customSize: "自定义大小",
                        encoder: "编码器",
                        resolution: "分辨率",
                        frameRate: "帧率",
                        bitrate: "比特率",
                        channel: "声道",
                        sampleRate: "采样率",
                        videoTips: "我们默认为您提供最佳参数 <br/>默认设置。",
                        audioTips: "未选中此选项时，<br/> 转换后的输出视频将没有音频。",
                        imageTips: "单击“锁定/解锁”<br/>以保持/改变原来的纵横比。",
                        inputEmail: "请输入邮箱",
                        trim: "裁剪",
                        trimTips: "您可以指定修剪的起点和终点。"
                    },
                    notify: {
                        title: "恭喜您！电子邮箱已完成注册",
                        message: "我们会在任务完成后将下载地址发送给您。"
                    },
                    convertedFiles: {
                        convertedFiles: "转换后的文件",
                        fileStore24Hours: "文件将被存储24小时",
                        name: "名称",
                        size: "尺寸",
                        operate: "操作",
                        deleteAll: "删除全部",
                        nofiles: "没有文件，点击下面的按钮转换它!"
                    },
                    fileFunctional: {
                        image: {
                            cancelMinLimit: "请免费登录万兴优转在线端(原Media.io)以享受会员服务，您可以添加超过#### MB的图像文件。"
                        },
                        video: {
                            purchaseCancelMinLimit: "免费版万兴优转在线端最多只能上传#### MB的视频。请在线购买以解锁视频大小限制。",
                            cancelMinLimit: "万兴优转在线端只支持小于#### MB的视频。请使用万兴优转桌面端。",
                            cancelMaxLimit: "万兴优转在线端只支持小于#### MB的视频。请使用万兴优转桌面端。"
                        },
                        audio: {
                            purchaseCancelMinLimit: "免费版万兴优转在线端最多只能上传#### MB的音频。请在线购买解锁音频大小限制。",
                            cancelMinLimit: "万兴优转在线端只支持小于#### MB的音频。请使用万兴优转桌面端。",
                            cancelMaxLimit: "万兴优转在线端只支持小于#### MB的音频。请使用万兴优转桌面端。"
                        },
                        notSupport: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        zeroSize: "请不要上传大小为0的文件!",
                        uploadFail: "对不起，你的视频文件导入失败，请再试一次。",
                        incorrectUrl: "URL类型不正确。",
                        dropBoxLogIn: "在从Dropbox上传文件之前，请先登录万兴优转在线端。",
                        googleDriveLogIn: "在从谷歌云盘上传文件之前，请先登录万兴优转在线端。",
                        youtubeLogIn: "请登录万兴优转在线端，通过粘贴URL编辑YouTube视频。",
                        youtubeConversionCount: " 你在线合并视频的次数已经达到####次。请使用万兴优转桌面端。",
                        chooseFiles: "选择文件",
                        cancel: "取消",
                        Loading: "加载中",
                        Processing: "处理中"
                    },
                    conver: {
                        showAccountText1: "请登录万兴优转在线端(原Media.io)享受会员服务，你可以在转换任务完成后收到电子邮件通知。",
                        showAccountText2: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        showAccountText3: "你当天的文件转换次数已达上限。请明天继续进行转换或注册解锁次数限制。",
                        showPopWindowText1: "万兴优转在线端只允许####个文件同时转换。请下载万兴优转桌面端来同时转换多个文件。",
                        showPopWindowText2: "万兴优转在线端只支持小于#### MB的视频。请使用万兴优转桌面端。",
                        showPopWindowText3: "万兴优转在线端免费版最多只能上传#### MB大小的视频，请升级到高级版以消除限制。",
                        showPopWindowText4: "你当天的文件转换次数已达上限。请使用万兴优转桌面端解除此限制，或明天转换文件。",
                        showPopWindowText5: "万兴优转在线端免费版一天只能转换####次文件，请升级到高级版以解除限制，或明天转换文件。",
                        converterdFilesLogIn: "请登录万兴优转在线端(原Media.io)以享受会员服务，你可以下载和删除转换后的文件。",
                        convert: "转换",
                        to: "至",
                        download: "下载",
                        toggleDropdown: "切换下拉",
                        converting: "转换中",
                        uploading: "上传中",
                        pleaseWait: "请等待",
                        retry: "重试",
                        ready: "准备就绪",
                        downloadAll: "下载全部",
                        notifyMe: "完成后通知我。",
                        addMoreFiles: "添加更多文件",
                        chooseFiles: "选择文件",
                        fromDropbox: "从Dropbox中",
                        fromGoogleDrive: "从谷歌云盘中",
                        hours24_1: "文件将被存储24小时。",
                        hours24_2: "转换后的文件",
                        hours24_3: "手动删除。",
                        FileConversionFailed: "文件转换失败，请使用万兴优转桌面端。",
                        delete: "删除",
                        preview: "预览"
                    },
                    reverseVideo: {
                        reverseSpeed: "倒放速度",
                        muteVideo: "静音",
                        soundOptions: "声音选项",
                        reverse: "倒放",
                        finalDuration: "最终时长",
                        duration: "时长",
                        play: "播放",
                        stop: "停止",
                        reverseingYourVideo: "正在处理，请稍候。",
                        reverseFileAgain: "再编辑",
                        reverseAnotherVideo: "编辑另一个视频"
                    },
                    loopVideo: {
                        duration: "持续时间",
                        play: "播放",
                        stop: "停止",
                        trimYouVideo: "裁剪你的视频",
                        startTime: "开始时间",
                        endTime: "结束时间",
                        loopClip: "循环这个片段",
                        finalDuration: "最终时长",
                        loopingYourVideo: "循环你的视频",
                        loop: "循环",
                        loopFileAgain: "再次循环文件",
                        loopAnotherVideo: "循环其他视频",
                        cutTime: "免费版的万兴优转在线端只能对视频进行裁剪，但不能超过#####秒。请升级到会员版本以接触限制。"
                    },
                    speedVideo: {
                        duration: "持续时间",
                        speed: "速度",
                        finalDuration: "最终时长",
                        soundOptions: "声音选项",
                        muteVideo: "视频静音",
                        start: "开始",
                        speedFileAgain: "再次文件加速",
                        speedAnotherVideo: "加速其他视频"
                    },
                    youtubeUrl: {
                        go: "GO",
                        createYoutubeThumbnail: "点击这里创建youtube缩略图",
                        rightClick: '右键单击图像，并选择"保存图像为…""',
                        noLogIn: "请登录万兴优转在线端下载更多YouTube缩略图。",
                        noLongInType: "Youtube上传限制",
                        noVipTip: "免费版万兴优转在线端只能支持下载YouTube缩略图5次，请升级到高级版以消除此限制。",
                        noYoutubeUrl: "对不起，我们只支持YouTube的URL。",
                        noImgTip: "请检查您输入的网址。或者你也可以使用万兴优转桌面端。",
                        errorUrl: "URL类型不正确。"
                    },
                    cutter: {
                        onlyDesktop: "万兴优转在线端(原来的Media.io)音频切割器现在只适用于桌面。",
                        onYourComputer: "请在你的电脑上使用Chrome或Firefox来体验它。",
                        loading: "加载中",
                        size: "尺寸",
                        duration: "持续时间",
                        cut: "剪切",
                        from: "来自",
                        to: "至",
                        mode: "模式",
                        keep: "保持",
                        remove: "删除",
                        fade: "淡化",
                        fadeIn: "淡入",
                        fadeOut: "淡出",
                        processing: "进行中",
                        "waitMoment.": "请稍等。",
                        cuttingYourAudio: "我们正在剪切你的音频",
                        fileReady: "你的音频文件已经准备好了",
                        editFileAgain: "再次编辑文件",
                        cutAnotherAudio: "剪切其他音频"
                    },
                    compress: {
                        showAccountText1: "请登录万兴优转在线端(原Media.io)以享受会员服务，您可以在压缩任务完成后收到电子邮件通知。 ",
                        showAccountText2: "你当天的文件压缩次数已达上限。请明天继续进行压缩或注册解锁次数限制。",
                        showPopWindowText1: "万兴优转在线端只允许同时压缩一个文件。请使用万兴优转桌面端来同时压缩多个文件。",
                        showPopWindowText2: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        showPopWindowText3: "万兴优转在线端仅支持小于#### MB的视频。请使用万兴优转桌面端。",
                        showPopWindowText4: "万兴优转在线端免费版最多只能上传#### MB大小的视频，请升级到高级版以消除限制。",
                        showPopWindowText5: "你当天的文件压缩次数已达上限。请使用万兴优转桌面端删除此限制，或明天继续压缩文件。",
                        showPopWindowText6: "万兴优转在线端免费版一天只能压缩####次文件，请升级到高级版取消限制，或明天继续。",
                        compressedSuccess: "压缩成功",
                        outputSettings: "输出设置",
                        quality: "质量",
                        resolution: "分辨率",
                        source: "视频源",
                        resetSize: "重置大小",
                        format: "格式",
                        retry: "重试",
                        download: "下载",
                        toggleDropdown: "切换下拉",
                        compressNew: "压缩新文件",
                        compressing: "压缩中",
                        compress: "压缩",
                        notifyMe: "完成后通知我。",
                        addMoreFiles: "添加更多文件",
                        uploading: "上传中",
                        save: "保存",
                        moreSettings: "更多设置",
                        finished: "完成",
                        uploadTipsHTML: "您最多可以上载@@@MB的文件，<a href class='link'>选择升级会员</a>以获取更多功能。",
                        uploadTipsText: "您最多可以上载@@@MB的文件，请升级会员解锁限制。"
                    },
                    img: {
                        showPopWindowText1: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        showPopWindowText2: "万兴优转在线端只允许同时压缩####个图像文件。请下载万兴优转桌面版本以解除限制。",
                        showPopWindowText3: "万兴优转在线端只允许同时压缩####个图像文件。请升级到高级版本以解除限制。",
                        showPopWindowText4: "万兴优转在线端只允许在同一时间转换####个图像。请下载万兴优转桌面版本以解除限制。",
                        showPopWindowText5: "万兴优转在线端只允许在同一时间转换####个图像。请升级到高级版本以解除限制。",
                        showPopWindowText6: "万兴优转在线端只允许上传一个图片，不超过#### MB。请登录以解除限制。",
                        showPopWindowText7: "你当天的图片压缩次数已达上限。请明天继续压缩或登录解除限制",
                        showPopWindowText8: "你当天的图片转换次数已达上限。请明天继续转换图片，或登录解除限制。",
                        showPopWindowText9: "你当天的图片压缩次数已达上限。请明天继续压缩图片，或使用万兴优转桌面版解除此限制。",
                        showPopWindowText10: "你当天的图片压缩次数已达上限。请明天继续，或升级到高级版本以解除限制。",
                        showPopWindowText11: "你当天的图片转换次数已达上限。请在明天继续图片转换，或使用万兴优转桌面版本解除此限制。",
                        showPopWindowText12: "你当天的图片转换次数已达上限。请明天继续，或升级到高级版本以解除限制。",
                        compressorImg: "你当天的图片压缩次数已达上限。请明天继续压缩图片，或免费注册取消限制。",
                        converterImg: "你当天的文件转换次数已达上限。请明天继续转换图片，或免费注册取消限制。",
                        compressing: "压缩中",
                        converting: "转换中",
                        download: "下载",
                        toggleDropdown: "切换下拉",
                        uploading: "上传中",
                        retry: "重试",
                        ready: "准备就绪",
                        to: "至",
                        downloadAll: "下载全部",
                        addMoreFiles: "添加更多文件",
                        chooseFiles: "选择文件",
                        fromDropbox: "来自 Dropbox",
                        fromGoogleDrive: "来自谷歌云盘",
                        keepOriginalSize: "保持原始大小",
                        customSize: "自定义大小",
                        to16_8000: "请输入像素宽度或像素高度在16到8000之间",
                        convertAllFilesTo: "转换所有文件至",
                        deleteAll: "删除全部",
                        compress: "压缩",
                        convert: "转换"
                    },
                    gif: {
                        showAccountText1: "万兴优转在线端只允许上传一个图片，不超过#### MB。请登录以解除限制。",
                        showAccountText2: "你当天的GIF创建次数已达上限。请明天尝试制作更多的GIF，或者登录解除限制。",
                        showAccountText3: "你当天的GIF创建次数已达上限。请明天继续，或登录解除限制。",
                        showPopWindowText1: "万兴优转在线端只允许上传####图片同时制作GIF。请尝试万兴优转桌面版本以消除限制。",
                        showPopWindowText2: "万兴优转在线端只允许上传####图片同时制作GIF。请升级到高级版本以解除限制。",
                        showPopWindowText3: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        showPopWindowText4: "你当天的GIF创建次数已达上限。请明天尝试制作更多的GIF，或使用万兴优转桌面端来解除限制。",
                        showPopWindowText5: "你当天的GIF创建次数已达上限。请明天尝试制作更多的GIF，或升级到高级版本以解除限制。",
                        showPopWindowText6: "对不起，GIF转换失败。请使用万兴优转桌面版本成功转换图像为GIF。",
                        showPopWindowText7: "仅支持一种水印类型，请使用万兴优转桌面版本添加更多水印。",
                        showPopWindowText8: "万兴优转在线端只允许上传小于#### MB的视频。大容量视频上传请使用万兴优转桌面版。",
                        showPopWindowText9: "万兴优转在线端只允许上传小于#### MB的视频。请升级到高级版本以解除限制。",
                        showPopWindowText10: "对不起，您的视频文件导入失败，请再试一次。",
                        showPopWindowText11: "对不起，您的Youtube视频取回失败，请重试。",
                        showPopWindowText12: "URL类型不正确。抱歉，我们只支持YouTube视频到GIF。",
                        showPopWindowText13: "你已经在线创建视频转GIF####次，请明天继续或使用万兴优转桌面端。",
                        showPopWindowText14: "你已经在线创建视频转GIF####次，请明天继续或升级到高级版本以解除限制。",
                        showPopWindowText15: "请登录万兴优转在线端，通过粘贴URL从YouTube视频创建GIF。",
                        showPopWindowText16: "你当前的GIF创建时间超过了万兴优转在线端的####秒限制，请使用万兴优转桌面版本来解除该限制。",
                        showPopWindowText17: "对不起，GIF转换失败。请使用万兴优转桌面版本成功创建GIF。",
                        showPopWindowText18: "对不起，GIF转换失败。请使用万兴优转桌面版本成功创建GIF。",
                        download: "下载",
                        toggleDropdown: "切换下拉",
                        imagesToGif: "图片转GIF",
                        videoToGif: "视频转GIF",
                        loading: "加载中",
                        cancel: "取消",
                        makingGif: "制作GIF",
                        suspended: "暂停",
                        play: "播放",
                        width: "宽度",
                        height: "高度",
                        pixels: "像素",
                        widthRangePixels: "宽度范围是50-500像素。",
                        heightRangePixels: "高度范围为50-500像素。",
                        frameRate: "帧率",
                        fps: "帧/秒",
                        fpsTip: "ps越高，你的动画会变得越流畅。您可以设置在1-30之间。",
                        textWatermark: "文本水印",
                        createGif: "创建GIF",
                        createNewGif: "创建新的GIF",
                        remakeGif: "重做GIF",
                        trimYourVideo: "修建你的视频",
                        timeTip: "使用滑块选择您的GIF持续时间，或输入精确的开始时间和结束时间。",
                        StartTime: "开始时间",
                        endTime: "结束时间",
                        outputSize: "输出大小",
                        fpsMeans: "Fps是指你最终的GIF动画每秒会运行多少帧。fps越高，你的动画变得越流畅。",
                        imageWatermark: "图片水印"
                    },
                    mute: {
                        showAccountText1: "你当天的视频文件转换次数已达上限。请明天尝试转换更多的文件，或者免费注册来解除限制。",
                        showAccountText2: "请登录到万兴优转在线端通过粘贴URL静音YouTube视频",
                        showPopWindowText1: "万兴优转在线端不支持此格式。请使用万兴优转桌面版本静音你的视频。",
                        showPopWindowText2: "万兴优转在线端只能上传小于#### MB的视频，如果超过这个大小，请尝试万兴优转桌面版本。",
                        showPopWindowText3: "万兴优转在线端免费版最多只能上传#### MB大小的视频，请升级到高级版以解除限制。",
                        showPopWindowText4: "免费版本的万兴优转在线端一天只能允许转换视频或图像####次。请升级到高级版本以解除限制。或者明天转换文件。",
                        showPopWindowText5: "对不起，您的视频文件导入失败，请再试一次。",
                        showPopWindowText6: "万兴优转在线端只能上传小于#### MB的视频，如果超过这个大小，请尝试万兴优转桌面版本。",
                        showPopWindowText7: "URL类型不正确。抱歉，我们只支持YouTube视频到GIF。",
                        showPopWindowText8: "你已在线静音转换视频####次，请升级到高级版本以解除限制。",
                        showPopWindowText9: "对不起，静音转换失败。请使用万兴优转桌面版本成功创建静音视频。",
                        download: "下载",
                        toggleDropdown: "切换下拉",
                        mute: "静音",
                        previewNot: "预览不可用。",
                        browserNotSupport: "你的浏览器不支持此格式。",
                        muteAnother: "静音其他视频"
                    },
                    user: {
                        user1: "欢迎回来!",
                        user2: "初次来这里? ",
                        user3: "免费注册",
                        user4: "邮箱地址",
                        user5: "密码",
                        user6: "记住我",
                        user7: "忘记密码?",
                        user8: "登录",
                        user9: "或者",
                        user10: "通过~登录",
                        user11: "已经有账户?",
                        user12: "在这里登录",
                        user13: "验证码",
                        user14: "点击按钮发送验证码到输入的邮箱。",
                        user15: "注册",
                        user16: "请输入一个有效的电子邮箱地址。",
                        user17: "邮件不能是空的",
                        user18: "密码应该是6 - 16个字符或数字。",
                        user19: "密码不能为空",
                        user20: "验证码不能为空",
                        user21: "名称不能为空",
                        user22: "发送代码",
                        user23: "用户姓名",
                        user24: "加入万兴优转在线端(原Media.io)，享受更好的免费服务"
                    },
                    ediror: {
                        editText1: "快速导入",
                        editText2: "在此窗口中添加文件",
                        editText3: "拖放或点击添加视频",
                        editText4: "饱和",
                        editText5: "对比",
                        editText6: "亮度",
                        editText7: "定制",
                        editText8: "1:1",
                        editText9: "4:3(经典电视)",
                        editText10: "16:9(宽屏幕)",
                        editText11: "宽度",
                        editText12: "高度",
                        editText13: "视频",
                        editText14: "搜索无结果",
                        editText15: "音频",
                        editText16: "逆时针方向",
                        editText17: "顺时针方向",
                        editText18: "加载中",
                        editText19: "取消",
                        editText20: "尺寸",
                        editText21: "持续时间",
                        editText22: "分辨率",
                        editText23: "修剪",
                        editText24: "剪切",
                        editText25: "调整",
                        editText26: "旋转",
                        editText27: "翻转",
                        editText28: "保存至",
                        editText29: "开始",
                        editText30: "进行中",
                        editText31: "编辑其他视频",
                        editText32: "你已经在一天内编辑了5次视频。请明天继续，或登录解除限制。",
                        editText33: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        editText34: "万兴优转在线端只支持小于#### MB的视频。请使用万兴优转桌面端。",
                        editText35: "万兴优转在线端只支持小于#### MB的视频。请使用万兴优转桌面端。",
                        editText36: "你当天的视频文件编辑次数已达上限。请明天继续，或使用万兴优转桌面端解除限制。",
                        editText37: "万兴优转在线端不支持此格式。请使用万兴优转桌面端。",
                        editText38: "保存",
                        editText39: "图片",
                        editText40: "矢量"
                    },
                    nav: {
                        navText1: "用户中心",
                        navText2: "注销",
                        navText3: "登录",
                        navText4: "免费注册",
                        navText5: "免费注册送30天会员",
                        convertedFiles: "转换后的文件",
                        myAccount: "我的账户"
                    },
                    popup: {
                        text1: "万兴优转桌面端",
                        text2: "转换任何视频超过1000种格式。",
                        text3: "30倍更快的视频转换速度。",
                        text4: "批量压缩视频到较小的尺寸，没有大小限制。",
                        text5: "实用的编辑功能，如修剪，剪切视频，应用特效等。",
                        text6: "转换和自定义图像为JPG, PNG, TIFF, GIF, BMP等格式而没有限制。",
                        text7: "压缩和自定义图像为JPG, PNG, TIFF, GIF, BMP等格式而没有限制。",
                        downloadWin: "https://cc-download.wondershare.cc/video-converter-ultimate_full4981.exe",
                        downloadMac: "https://cc-download.wondershare.cc/video-converter-ultimate-mac_full4982.zip",
                        text8: "升级到高级会员",
                        text9: "年度",
                        text10: "11元",
                        text11: "19元",
                        text12: "月",
                        text13: "随时取消",
                        buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=297&sub_lid=0&currency=USD&language=English&verify=8794fcdb210d1a58d3f90b1dede2733c",
                        text14: "月度",
                        text15: "65元",
                        text16: "月",
                        text17: "随时取消",
                        buy_now_month: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=294&sub_lid=0&currency=USD&language=English&verify=4c3bb50bf909cb7f333c54f832e8e754",
                        text18: "500MB",
                        text19: "最大文件大小",
                        text20: "30",
                        text21: "同时转换",
                        text22: "高速 ",
                        text23: "转换",
                        text24: "下载",
                        text25: "无限制",
                        text26: "文件压缩",
                        text26_1: "电子邮件通知",
                        text27: "畅销",
                        text28: "在线1年订阅",
                        text29: "在线1月订阅",
                        text31: "免费试用 ",
                        text32: "立即购买",
                        text33: "https://www.media.io/zh/video-converter-desktop.html",
                        text34: "https://www.media.io/zh/mobile-download-guidance.html"
                    },
                    resize: {
                        download: "下载",
                        toggleDropdown: "切换下拉",
                        loading: "加载中",
                        cancel: "取消",
                        byPixels: "由像素(像素)",
                        byPercentage: "根据百分比 (%)",
                        originalLockTip: "单击“锁定/解锁”以保持/改变原来的纵横比",
                        resize: "调整大小",
                        lockTip: "点击打开/关闭纵横比",
                        pixels16To8000: "请输入像素的宽度和高度在16到8000之间。",
                        percentage1To500: "请输入宽度和高度的百分比在1到500之间。",
                        stretch: "拉伸",
                        stretchTip: "图像将被拉伸以匹配新的尺寸。",
                        fill: "填充",
                        fillTip: "图像将被裁剪以匹配新的尺寸。",
                        fit: "适配",
                        fitTip: "图像将被裁剪以适应新的尺寸，其余部分将被绘制为所选的背景颜色。",
                        selectColor: "当选择适配选项时，你的图像将会被绘制成所选的颜色。",
                        resizingImages: "调整图片大小",
                        resizedFail: "你的图像大小调整失败",
                        resizedSuccess: "你的图像已成功调整大小",
                        sorryYourFiles: "对不起,你的文件",
                        resizedFailDownload: "大小调整失败，请下载",
                        desktopVersion: "桌面版",
                        tryAgain: "再次尝试",
                        resizeMore: "调整更多的图片",
                        fitColor: "适配颜色"
                    },
                    joiner: {
                        onlyDesktop: "万兴优转在线端(原来的Media.io)音频切割器现在只适用于桌面端。",
                        onYourComputer: "请在你的电脑上使用Chrome或Firefox来体验它。",
                        loading: "加载中",
                        importFailed: "导入失败。如果您需要继续合并音频，请在合并前删除失败的文件。",
                        fadeIn: "点击选择/取消选择“音频淡入”。",
                        fadeInOut: "点击选择/取消选择音频淡入和淡出。",
                        fadeOut: "点击选择/取消选择“音频淡出”。",
                        startTime: "开始时间",
                        endTime: "结束时间",
                        waitMoment: "我们正在上传文件，请稍等。",
                        merge: "合并",
                        mergingYourAudio: "我们正在合并你的音频文件",
                        fileReaded: "你的音频文件被读取",
                        editFileAgain: "再次编辑文件",
                        mergeAnother: "合并其他",
                        joinCountFree: "你在一天内编辑了####次文件。请登录以解除限制，或者明天编辑更多的文件。",
                        joinCountLogin: "你在一天内编辑了####次文件。请使用万兴优转桌面端。 ",
                        fileNumFree: "免费的万兴优转在线端只允许一次合并####文件。请升级到高级版本以解除限制。",
                        fileNumLogin: "万兴优转在线端一次只允许合并####文件。请使用万兴优转桌面端。"
                    },
                    editorVideo: {
                        mergeVideos: "合并多个视频",
                        slideshowMaker: "幻灯片制作工具",
                        addAudioToVideo: "将音频添加到视频",
                        merge: "合并",
                        addFiles: "添加文件",
                        addAudio: "添加音频文件",
                        fitWithBorder: "贴边",
                        zoomCrop: "缩放和裁剪",
                        setting: "设置",
                        goBack: "返回",
                        audioOption: "音频选项",
                        cropOptions: "裁剪选项",
                        Crossfade: "淡入淡出",
                        instagramVideo: "Instagram 视频",
                        youTubeVideo: "油管视频",
                        instagramStory: "Instagram 故事",
                        facebookVideo: "脸书视频",
                        imageDuration: "图像时长",
                        transition: "转场",
                        applyAllImg: "适用于所有图像",
                        outputFormat: "输出格式",
                        trimAudio: "修剪音频",
                        audioTrackVolume: "音轨音量",
                        videoSoundVolume: "视频音量",
                        startTime: "开始时间",
                        endTime: "结束时间",
                        empty_file: "很抱歉，您的视频未进行任何操作，<br/>请跳转到其他适用于该视频操作的在线工具。"
                    },
                    memeGenerator: {
                        "meme-generator": "生成表情包",
                        template: "模板",
                        Create: "生成",
                        OriginalSize: "原始尺寸",
                        FormateNotSupport: "抱歉，Online Uniconverter 不支持此图片格式，请上传其他图片文件。",
                        ResizeFor: "大小调整",
                        OutputSettings: "输出设置",
                        UploadGifFail: "抱歉，您的 GIF 文件导入失败，请重试。",
                        UploadFail: "抱歉，您的图片文件导入失败，请重试。",
                        GenerateFail: "抱歉，您的表情包=生成失败，请重试。",
                        onlyDesktop: "Online Uniconverter（原Media.io）生成表情包现在只能在个人电脑上使用。",
                        onYourComputer: "请在您的计算机上使用 Chrome 或 Firefox 享受它。",
                        downloadText: "恭喜！ 您的表情包已可供下载。",
                        enterYourText: "输入您的文字",
                        textPlaceholder: "文字在这里",
                        topTextPlaceholder: "头部文字在这里",
                        bottomTextPlaceholder: "底部文字在这里"
                    },
                    vocalRemover: {
                        customParseTitle: "音频处理中...",
                        customParseDesc: "AI算法正在处理中，请稍等片刻",
                        customParseSuccess: "处理完成！现在可以下载处理后的文件! Your audio is ready for download.",
                        downloadFile: "你可以预览和下载音频\t",
                        instrumental: "乐器",
                        vocals: "人声"
                    },
                    PricingPanel: {
                        SavePrice: "Save Up to 60%",
                        Month: "/mo",
                        BilledAnnually: "Billed xxx annually",
                        CurPlan: "Current Plan",
                        SignUp: "SIGN UP",
                        BuyNow: "BUY NOW",
                        Features: "See All Plan Features",
                        PurchasedClick: "If you have purchased, please click 'Yes' to active",
                        Account: "Your Account: ",
                        UserPlan: "xxx Plan",
                        ExpiredTime: "Until xxx",
                        RefreshTips: "Refresh your account information again",
                        No: "No",
                        Yes: "Yes",
                        GotIt: "Got it"
                    },
                    SttPricing: {
                        AddOn: "Add-on",
                        PayAs: "Pay As You Go",
                        OnlyFor: "Only for {msg}",
                        PurchaseValid: "Purchase valid for 1 year",
                        Benefits: "Customer benefits"
                    },
                    PricingEnumFree: {
                        FreeId: "free",
                        ZeroPrice: "$0",
                        VideoEditor: "Video Editor",
                        UploadText1: "Up to",
                        VideoEditorFreeText1: "Export with watermark",
                        VideoEditorFreeText2: "min video exports",
                        VideoEditorFreeText3: "mins for Speech-to-text",
                        VideoEditorFreeText4: "characters for Text-to-speech",
                        Compress: "Compress & Converter",
                        CompressFreeText1: "for converter",
                        CompressFreeText2: "for compressor",
                        CompressFreeText3: "times limited",
                        AudioEditor: "Audio Tools",
                        AudioEditorFreeText2: "times per day",
                        Lite: "lite",
                        SpeechToText: "Speech-To-Text",
                        SpeechToTextFreeText1: "hours per month",
                        SpeechToTextFreeText2: "Auto subtitle and transcription",
                        SpeechToTextFreeText3: "Download SRT & text file",
                        VideoEditorLiteFreeText1: "Export with watermark",
                        VideoEditorLiteFreeText2: "min video exports",
                        VideoEditorLiteFreeText3: "for uploading",
                        VideoEditorLiteFreeText4: "characters/mo for Text-to-speech",
                        VideoEditorLiteFreeText5: "export",
                        Convert: "Compressor & Converter & More",
                        ConvertFreeText1: "video upload",
                        ConvertFreeText2: "times",
                        TTS: "Text-To-Speech",
                        TTSFreeText1: "Characters",
                        TTSFreeText2: "AI automatic transcription",
                        TTSFreeText3: "Support 16 Languages (Continually Updated)",
                        UnlimitedTimes: "Unlimited times"
                    },
                    PricingEnumBasic: {
                        FreeId: "basic",
                        MonthlyPrice: "$9.99",
                        AnnuallyToTalPrice: "$47.4",
                        SaveUp: "(Save 70%)",
                        AnnuallyPerPrice: "$3.95",
                        VideoEditor: "Video Editor",
                        VideoEditorFreeText1: "No watermark",
                        VideoEditorFreeText2: "hour video exports",
                        VideoEditorFreeText4: "hrs/mo for Speech-to-text",
                        Compress: "Compress & Converter",
                        AudioEditor: "Audio Tools",
                        Lite: "lite",
                        SpeechToText: "Speech-To-Text",
                        SpeechToTextFreeText2: "Auto subtitle and transcription",
                        SpeechToTextFreeText3: "Download SRT & text file",
                        VideoEditorLiteFreeText1: "No watermark",
                        Convert: "Compressor & Converter & More",
                        TTS: "Text-To-Speech",
                        TTSFreeText2: "AI automatic transcription",
                        TTSFreeText3: "Support 16 Languages (Continually Updated)",
                        VideoEditorBasicText1: "hours/mo for Speech-to-text",
                        LimitedTime: "usage time",
                        TTSTips: "Characters/mo",
                        Month: "Monthly",
                        Annual: "Annually"
                    },
                    PricingEnumPro: {
                        FreeId: "pro",
                        MonthlyPrice: "$19.99",
                        AnnuallyToTalPrice: "$79.99",
                        AnnuallyPerPrice: "$6.66",
                        priceSave: "(Save 67%)",
                        VideoEditor: "Video Editor",
                        VideoEditorFreeText1: "No watermark",
                        Compress: "Compress & Converter",
                        AudioEditor: "Audio Tools",
                        Lite: "lite",
                        SpeechToText: "Speech-To-Text",
                        SpeechToTextFreeText2: "Auto subtitle and transcription",
                        SpeechToTextFreeText3: "Download SRT & text file",
                        VideoEditorLiteFreeText1: "No watermark",
                        Convert: "Compressor & Converter & More",
                        TTS: "Text-To-Speech",
                        TTSFreeText2: "AI automatic transcription",
                        TTSFreeText3: "Support 16 Languages (Continually Updated)"
                    },
                    PRICING_TIPS: {
                        Default: "Choose Your Plan",
                        ConvertingNum: "You can ### 2 files at the same time",
                        DayLimit: "Your free trial is over",
                        MaxSize: "File is too large(xxx)",
                        Subtitle: "Your auto-generated subtitles are running out of time",
                        Transcription: "Buy More Auto-transcription Time",
                        ConvertFileTips: "Your account only supports videos no more than @@@.",
                        FileNumUpgradeTips: "Wanna ### more files at the same time? upgrade now!",
                        DefaultUpgradeTips: "Please wait for them or upgrade now.",
                        ConvertUpgradeTips: "Please upgrade to continue.",
                        TimeUpgradeTips: "Upgrade to convert and compress more files.",
                        TTSTips: "Oops, your free trial is over",
                        TTSUpgradeTips: "Please buy more characters",
                        FileSizeExceedTips: "File is too large",
                        FileSizeLimit: "The file size exceeds the free limit.",
                        UpgradeSignTips: "Please sign up to continue uploading large files or upgrade your account.",
                        UpgradeTips: "Please upgrade and continue uploading.",
                        FileOver: "To ensure the editing experience, uploading files over 2G is not supported for now.",
                        FileDuration: "The max export limit duration is 2 hours, so you will have to split the video into smaller clips and try again.",
                        FileLength: "Your video length exceeds the free limit."
                    },
                    PRICING_STT: {
                        NAME: "Speech-To-Text",
                        DETAILS1: "Auto subtitle and transcription",
                        DETAILS2: "Download SRT & text file",
                        DETAILS3: "Translate to 100+ languages",
                        UNIT1: "Hrs",
                        UNIT2: "/hour",
                        UNIT3: "credits",
                        UNIT4: "Characters",
                        UNIT5: "/image",
                        PLAN1: "Available Subtitles Time: ",
                        PLAN2: "Available Text-To-Speech Characters: ",
                        PLAN3: "Available credits: "
                    },
                    PRICING_TTS: {
                        NAME: "Text-To-Speech",
                        DETAILS1: "AI automatic transcription",
                        DETAILS2: "Support 16 Languages (Continually Updated)",
                        DETAILS3: "Translate to 100+ languages",
                        UNIT1: "Characters",
                        UNIT2: " ",
                        UNIT3: "credits",
                        UNIT4: "Characters",
                        UNIT5: "image",
                        PLAN1: "Available Text-To-Speech Characters:"
                    },
                    PRICING_BG: {
                        NAME: "Remove Background for Images",
                        DETAILS1: "Removing the background from 1 image requires 1 credits.",
                        DETAILS2: "Download SRT & text file",
                        DETAILS3: "Translate to 100+ languages",
                        UNIT1: "credits",
                        UNIT2: "/image",
                        PLAN1: "Available credits:"
                    },
                    PRICING_HELP: {
                        STT: "The valid period after purchasing Speech to Text feature is one year. This plan does not include other premium rights of Media.io.",
                        TTS: "The valid period after purchasing Text to Speech feature is one year. This plan does not include other premium rights of Media.io.",
                        BG: "The valid period after purchasing Remove Background feature is one year. This plan does not include other premium rights of Media.io."
                    }
                };
            o.default = r
        },
        253: function(e, o, i) {
            var t = {
                "./": 26,
                "./br": 245,
                "./br.js": 245,
                "./de": 246,
                "./de.js": 246,
                "./en": 11,
                "./en.js": 11,
                "./es": 247,
                "./es.js": 247,
                "./fr": 248,
                "./fr.js": 248,
                "./index": 26,
                "./index.js": 26,
                "./it": 249,
                "./it.js": 249,
                "./jp": 250,
                "./jp.js": 250,
                "./ko": 251,
                "./ko.js": 251,
                "./zh": 252,
                "./zh.js": 252
            };

            function r(e) {
                var o = n(e);
                return i(o)
            }

            function n(e) {
                if (!i.o(t, e)) {
                    var o = new Error("Cannot find module '" + e + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }
                return t[e]
            }
            r.keys = function() {
                return Object.keys(t)
            }, r.resolve = n, e.exports = r, r.id = 253
        },
        258: function(e, o, i) {
            "use strict";
            var t = i(5),
                r = i(122),
                n = i(80),
                a = i(6),
                s = i(69),
                l = t.a.lang,
                d = t.a.pangLang,
                u = {
                    en: "en-us",
                    de: "de-de",
                    fr: "fr-fr",
                    es: "es-es",
                    jp: "ja-jp",
                    it: "it-it",
                    ko: "ko-kr",
                    zh: "zh-cn",
                    br: "pt-br"
                },
                c = {
                    zh: "https://accounts.wondershare.cn"
                },
                p = {
                    name: "Account",
                    data: function() {
                        return {
                            currAction: "",
                            typeLoginup: "",
                            activeAccount: "",
                            activeCount: 0,
                            activeTime: "",
                            email: "",
                            emailTips: "",
                            password: "",
                            passwordTips: "",
                            remember: !1,
                            forgotEmail: "",
                            forgotEmailTips: "",
                            forgotCode: "",
                            forgotCodeTips: "",
                            forgotPassword: "",
                            forgotPasswordTips: "",
                            singupName: "",
                            singupNameTips: "",
                            signupEmail: "",
                            signupEmailTips: "",
                            signupCode: "",
                            signupCodeTips: "",
                            signupPassword: "",
                            signupPasswordTips: "",
                            verifySignup: !0,
                            verifyEmail: !0,
                            countDown: !0,
                            forgotCodeTime: "Send Code",
                            stateCode: "",
                            authTimer: "",
                            actionServers: "https://account.media.io",
                            isPopup: !0,
                            googleHref: "https://account.wondershare.com/google/connect?brand=uniconverter&platform=web&callback=sync&redirect=https://media.io/",
                            facebookHref: "https://account.wondershare.com/facebook/connect?brand=uniconverter&platform=web&callback=sync&redirect=https://media.io/",
                            twitterHref: "https://account.wondershare.com/twitter/connect?brand=uniconverter&platform=web&callback=sync&redirect=https://media.io/",
                            kpAccount: "https://account.wondershare.com/auth/account/#/reset",
                            langUser: "",
                            signinHref: "",
                            signupHref: "",
                            app_key: "de5534a3d7f39862ef7c3a50ceae7856",
                            redirect_uri: "".concat(location.origin, "/wsid3.0.html"),
                            scope: "user",
                            product_id: "5903",
                            response_type: "code",
                            mode: 1,
                            lang: u[d],
                            source: 38,
                            goto: 1,
                            cookie_check_supported: window.cookie_check_supported,
                            LoginSuccessEditorDirect: r.a
                        }
                    },
                    computed: {
                        iframeUrl: function() {
                            var e = "".concat(c[d] || "https://accounts.wondershare.com", "/v3/user/oauth-client/authorize?register_mode=4&app_key=").concat(this.app_key, "&redirect_uri=").concat(this.redirect_uri, "&scope=").concat(this.scope, "&lang=").concat(this.lang, "&product_id=").concat(this.product_id, "&response_type=").concat(this.response_type, "&mode=").concat(this.mode, "&source=").concat(this.source, "&verify=yes");
                            return "signup" === this.currAction && (e += "&goto=".concat(this.goto)), e
                        }
                    },
                    props: ["action", "type"],
                    created: function() {
                        this.kpAccount = "https://account.wondershare.com/auth/account/#/reset?brand=uniconverter&platform=web&app_key=676f9818cdf18355794ea8a310576940&callback=sync&redirect=https://account.wondershare.com/app226591997377992&web=media&pid=5903", this.currAction = this.action || "signin", this.typeLoginup = this.type || "SignInEnter", this.$cookies.get("os") && "signin" === this.currAction && (this.email = this.$cookies.get("os").email, this.password = this.$cookies.get("os").password, this.remember = this.$cookies.get("os").remember), this.langUser = l.user, this.forgotCodeTime = this.langUser.user22, this.cookie_check_supported || this.locationWindow()
                    },
                    mounted: function() {
                        "en" === d ? (this.signinHref = "/signin.html", this.signupHref = "/signup.html") : (this.signinHref = "/" + d + "/signin.html", this.signupHref = "/" + d + "/signup.html"), window.onmessage = this.receiveMessage
                    },
                    beforeDestroy: function() {},
                    methods: {
                        locationWindow: function() {
                            window.open(this.iframeUrl, "media.io", "width=500,height=650,left=250,top=250"), this.$emit("loginclose")
                        },
                        loaded: function() {
                            document.querySelector(".iframe-box").style.height = "100%", this.$emit("iframeLoaded")
                        },
                        receiveMessage: function(e) {
                            var o = e.data;
                            "LOGIN_REGISTER_MODULE" === o.action && (o.hide ? this.locationWindow() : (this.auth_code = o.code, this.opener = o.opener, "signin" === this.currAction && this.loginButton(), "signup" === this.currAction && this.signupButton())), "pageview" === o && this.loaded()
                        },
                        getQueryString: function(e) {
                            var o = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                                i = window.location.search.substr(1).match(o);
                            return null != i ? unescape(i[2]) : null
                        },
                        changeEmail: function(e) {
                            if ("email" === e.type)
                                if (e.value) {
                                    /^(.*)@(.*)+\.(.*)$/i.test(e.value) ? (this[e.tips] = "", this.verifyEmail = !1) : (this[e.tips] = this.langUser.user16, this.verifyEmail = !0)
                                } else this[e.tips] = this.langUser.user17, this.verifyEmail = !0
                        },
                        verify: function(e) {
                            var o = this;
                            e.forEach((function(e) {
                                if ("email" === e.type) e.value ? /^(.*)@(.*)+\.(.*)$/i.test(e.value) ? o[e.tips] = "" : o[e.tips] = o.langUser.user16 : o[e.tips] = o.langUser.user17;
                                else if ("pwd" === e.type) {
                                    if (e.value) /^[A-Za-z0-9`~!@#$%^&*()_\-+=\{\}\[\]\\|:;',\.<>\/?]{6,16}$/.test(e.value) ? o[e.tips] = "" : o[e.tips] = o.langUser.user18;
                                    else o[e.tips] = o.langUser.user19
                                } else "code" === e.type ? e.value ? o[e.tips] = "" : o[e.tips] = o.langUser.user20 : "name" === e.type && (e.value ? o[e.tips] = "" : o[e.tips] = o.langUser.user21)
                            }))
                        },
                        loginButton: function() {
                            var e = this;
                            $.ajax({
                                type: "POST",
                                data: {
                                    auth_code: this.auth_code,
                                    code: window.wondershare_countries || null,
                                    lang: d
                                },
                                url: this.actionServers + "/v1/sso/login",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                crossDomain: !0,
                                success: function(o) {
                                    if (0 === o.code) {
                                        if (window.localStorage.setItem("token", o.data.token), !0 === e.remember ? (obj.remember = e.remember, e.$cookies.set("os", obj, "1D")) : e.$cookies.remove("os"), e.$cookies.set("ou", o.data.token, "1D"), 1 === o.data.is_new) {
                                            if (window.localStorage.setItem("is_new", 1), e.LoginSuccessEditorDirect.includes(window.location.pathname)) {
                                                var i = t.a.getCookie("LoginSuccessEditor");
                                                i = i ? Number(i) + 1 : 1, t.a.setCookie("LoginSuccessEditor", i), a.a.sendGTM({
                                                    category: "Goeditor",
                                                    action: "Go_Video_Editor_Signup",
                                                    eventLabel: i
                                                })
                                            }
                                            "developer.io" === window.wondershareEnv ? ("APIPrice" === e.typeLoginup && window.gtag("event", "User_Email", {
                                                event_category: "Pricing",
                                                event_label: o.data.email
                                            }), "userInfoSignUp" === e.typeLoginup && window.gtag("event", "Sign-up", {
                                                event_category: "Navigation",
                                                event_label: o.data.email
                                            }), "GetAPIKey" === e.typeLoginup && window.gtag("event", "User_Email", {
                                                event_category: "Get-API-Key",
                                                event_label: o.data.email
                                            })) : a.a.sendGTM({
                                                event: "User_Email",
                                                category: "Account",
                                                action: "User_Email",
                                                eventLabel: o.data.email
                                            })
                                        }
                                        e.isPopup ? (!e.opener && e.$emit("loginsuccess"), e.opener && n.a.$emit("loginsuccess")) : window.location.href = "en" === d ? "/" : "/" + d, window.localStorage.setItem("is_new", 0)
                                    } else window.localStorage.setItem("is_new", 0), !e.opener && e.$emit("loginclose"), e.opener && n.a.$emit("loginclose"), swal({
                                        text: o.msg
                                    })
                                }
                            })
                        },
                        signupButton: function() {
                            "developer.io" !== window.wondershareEnv && a.a.sendGTM({
                                event: "".concat(this.typeLoginup),
                                category: "Account",
                                action: "".concat(this.typeLoginup),
                                eventLabel: s.b
                            }), this.loginButton()
                        },
                        forgotButton: function() {
                            var e = this;
                            if (e.verify([{
                                    type: "email",
                                    value: e.forgotEmail,
                                    tips: "forgotEmailTips"
                                }, {
                                    type: "code",
                                    value: e.forgotCode,
                                    tips: "forgotCodeTips"
                                }, {
                                    type: "pwd",
                                    value: e.forgotPassword,
                                    tips: "forgotPasswordTips"
                                }]), "" === e.forgotEmailTips && "" === e.forgotCodeTips && "" === e.forgotPasswordTips) {
                                var o = {
                                    email: e.forgotEmail,
                                    vcode: e.forgotCode,
                                    password: e.forgotPassword
                                };
                                $.ajax({
                                    type: "POST",
                                    data: o,
                                    url: this.actionServers + "/resetpwd",
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    crossDomain: !0,
                                    success: function(o) {
                                        (o = JSON.parse(o)) && (swal({
                                            text: o.msg
                                        }), e.isPopup ? e.currAction = "signin" : window.location.href = "en" === d ? "/signin.html" : "/" + d + "/signin.html")
                                    }
                                })
                            }
                        },
                        codeButton: function(e) {
                            var o = this;
                            if (o.verify([{
                                    type: "email",
                                    value: e.email,
                                    tips: e.tips
                                }]), o.verifyEmail) return !1;
                            if ("" === o[e.tips]) {
                                o.countDown = !1, o.forgotCodeTime = 60;
                                e = {
                                    operate_type: e.operate_type,
                                    email: e.email
                                };
                                var i = "";
                                $.post(o.actionServers + "/v1/getvericode", e, (function(e) {
                                    0 === e.code ? (o.verifyEmail = !0, i = setInterval((function() {
                                        0 === o.forgotCodeTime ? (o.countDown = !0, o.verifyEmail = !1, o.forgotCodeTime = o.langUser.user22, clearTimeout(i)) : o.forgotCodeTime = o.forgotCodeTime - 1
                                    }), 1e3)) : (o.verifyEmail = !1, clearTimeout(i), o.countDown = !0, o.forgotCodeTime = o.langUser.user22, swal({
                                        text: e.msg
                                    }))
                                }))
                            }
                        },
                        checkItem: function() {
                            this.remember = !this.remember
                        }
                    },
                    components: {}
                },
                m = i(68),
                h = Object(m.a)(p, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("iframe", {
                        staticClass: "iframe-box",
                        attrs: {
                            src: this.cookie_check_supported ? this.iframeUrl : "",
                            sandbox: "allow-scripts allow-same-origin allow-top-navigation allow-forms allow-popups"
                        }
                    })
                }), [], !1, null, null, null);
            o.a = h.exports
        },
        259: function(e, o, i) {
            var t = i(260);
            "string" == typeof t && (t = [
                [e.i, t, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i(72)(t, r);
            t.locals && (e.exports = t.locals)
        },
        26: function(e, o, i) {
            "use strict";
            i.r(o);
            var t = i(5),
                r = t.a.pangLang,
                n = i(253)("./".concat(r)).default;
            t.a.use(n)
        },
        260: function(e, o, i) {
            (e.exports = i(71)(!1)).push([e.i, '.el-tooltip:focus:hover,.el-tooltip:focus:not(.focusing){outline-width:0}.el-tooltip__popper{position:absolute;border-radius:4px;padding:10px;z-index:2000;font-size:12px;line-height:1.2;min-width:10px;word-wrap:break-word}.el-tooltip__popper .popper__arrow,.el-tooltip__popper .popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.el-tooltip__popper .popper__arrow{border-width:6px}.el-tooltip__popper .popper__arrow::after{content:" ";border-width:5px}.el-tooltip__popper[x-placement^=top]{margin-bottom:12px}.el-tooltip__popper[x-placement^=top] .popper__arrow{bottom:-6px;border-top-color:#303133;border-bottom-width:0}.el-tooltip__popper[x-placement^=top] .popper__arrow::after{bottom:1px;margin-left:-5px;border-top-color:#303133;border-bottom-width:0}.el-tooltip__popper[x-placement^=bottom]{margin-top:12px}.el-tooltip__popper[x-placement^=bottom] .popper__arrow{top:-6px;border-top-width:0;border-bottom-color:#303133}.el-tooltip__popper[x-placement^=bottom] .popper__arrow::after{top:1px;margin-left:-5px;border-top-width:0;border-bottom-color:#303133}.el-tooltip__popper[x-placement^=right]{margin-left:12px}.el-tooltip__popper[x-placement^=right] .popper__arrow{left:-6px;border-right-color:#303133;border-left-width:0}.el-tooltip__popper[x-placement^=right] .popper__arrow::after{bottom:-5px;left:1px;border-right-color:#303133;border-left-width:0}.el-tooltip__popper[x-placement^=left]{margin-right:12px}.el-tooltip__popper[x-placement^=left] .popper__arrow{right:-6px;border-right-width:0;border-left-color:#303133}.el-tooltip__popper[x-placement^=left] .popper__arrow::after{right:1px;bottom:-5px;margin-left:-5px;border-right-width:0;border-left-color:#303133}.el-tooltip__popper.is-dark{background:#303133;color:#FFF}.el-tooltip__popper.is-light{background:#FFF;border:1px solid #303133}.el-tooltip__popper.is-light[x-placement^=top] .popper__arrow{border-top-color:#303133}.el-tooltip__popper.is-light[x-placement^=top] .popper__arrow::after{border-top-color:#FFF}.el-tooltip__popper.is-light[x-placement^=bottom] .popper__arrow{border-bottom-color:#303133}.el-tooltip__popper.is-light[x-placement^=bottom] .popper__arrow::after{border-bottom-color:#FFF}.el-tooltip__popper.is-light[x-placement^=left] .popper__arrow{border-left-color:#303133}.el-tooltip__popper.is-light[x-placement^=left] .popper__arrow::after{border-left-color:#FFF}.el-tooltip__popper.is-light[x-placement^=right] .popper__arrow{border-right-color:#303133}.el-tooltip__popper.is-light[x-placement^=right] .popper__arrow::after{border-right-color:#FFF}', ""])
        },
        264: function(e, o, i) {
            "use strict";
            i.r(o);
            var t = {
                    props: ["accountPopupHeader", "accountPopup", "action", "type"],
                    components: {
                        Account: i(258).a
                    },
                    data: function() {
                        return {}
                    },
                    destroyed: function() {
                        this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                    },
                    watch: {
                        accountPopup: function(e) {
                            e && document.body.appendChild(this.$el)
                        }
                    },
                    methods: {
                        loginsuccess: function() {
                            this.$emit("loginsuccess")
                        },
                        loginclose: function() {
                            this.$emit("loginclose")
                        },
                        iframeLoaded: function() {
                            document.querySelector("#iframe_load").style.display = "none"
                        }
                    }
                },
                r = i(68),
                n = Object(r.a)(t, (function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return e.accountPopup ? i("div", {
                        staticClass: "account-popup"
                    }, [i("div", {
                        staticClass: "mask"
                    }), e._v(" "), i("div", {
                        staticClass: "account-content translate-center"
                    }, [e.accountPopupHeader ? i("div", {
                        staticClass: "bg-secondary-lighter py-3 px-lg-3 px-3"
                    }, [i("div", {
                        staticClass: "row no-gutters"
                    }, [e._m(0), e._v(" "), i("div", {
                        staticClass: "col-lg-10"
                    }, [i("div", {
                        staticClass: "font-size-small"
                    }, [e._v(e._s(e.accountPopupHeader))])])])]) : e._e(), e._v(" "), i("div", {
                        staticClass: "p-md-4 px-sm-4 text-center content-bottom"
                    }, [i("div", {
                        staticClass: "text-right"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: e.loginclose
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "16px"
                        },
                        attrs: {
                            width: "12",
                            height: "10",
                            src: "https://www.media.io/imagesV4/close.svg",
                            alt: ""
                        }
                    })])]), e._v(" "), i("div", {
                        staticClass: "iframe"
                    }, [i("account", {
                        attrs: {
                            action: e.action,
                            type: e.type
                        },
                        on: {
                            loginsuccess: e.loginsuccess,
                            loginclose: e.loginclose,
                            iframeLoaded: e.iframeLoaded
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "iframe-loading",
                        attrs: {
                            id: "iframe_load"
                        }
                    })], 1)])])]) : e._e()
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("div", {
                        staticClass: "col-lg-2"
                    }, [o("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/error.svg",
                            alt: ""
                        }
                    })])
                }], !1, null, null, null);
            o.default = n.exports
        },
        266: function(e, o, i) {
            var t = i(279);
            "string" == typeof t && (t = [
                [e.i, t, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i(72)(t, r);
            t.locals && (e.exports = t.locals)
        },
        267: function(e, o, i) {
            e.exports = function(e) {
                var o = {};

                function i(t) {
                    if (o[t]) return o[t].exports;
                    var r = o[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
                }
                return i.m = e, i.c = o, i.d = function(e, o, t) {
                    i.o(e, o) || Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: t
                    })
                }, i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.t = function(e, o) {
                    if (1 & o && (e = i(e)), 8 & o) return e;
                    if (4 & o && "object" == typeof e && e && e.__esModule) return e;
                    var t = Object.create(null);
                    if (i.r(t), Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & o && "string" != typeof e)
                        for (var r in e) i.d(t, r, function(o) {
                            return e[o]
                        }.bind(null, r));
                    return t
                }, i.n = function(e) {
                    var o = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(o, "a", o), o
                }, i.o = function(e, o) {
                    return Object.prototype.hasOwnProperty.call(e, o)
                }, i.p = "/dist/", i(i.s = 79)
            }({
                0: function(e, o, i) {
                    "use strict";

                    function t(e, o, i, t, r, n, a, s) {
                        var l, d = "function" == typeof e ? e.options : e;
                        if (o && (d.render = o, d.staticRenderFns = i, d._compiled = !0), t && (d.functional = !0), n && (d._scopeId = "data-v-" + n), a ? (l = function(e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                            }, d._ssrRegister = l) : r && (l = s ? function() {
                                r.call(this, this.$root.$options.shadowRoot)
                            } : r), l)
                            if (d.functional) {
                                d._injectStyles = l;
                                var u = d.render;
                                d.render = function(e, o) {
                                    return l.call(o), u(e, o)
                                }
                            } else {
                                var c = d.beforeCreate;
                                d.beforeCreate = c ? [].concat(c, l) : [l]
                            }
                        return {
                            exports: e,
                            options: d
                        }
                    }
                    i.d(o, "a", (function() {
                        return t
                    }))
                },
                2: function(e, o) {
                    e.exports = i(86)
                },
                3: function(e, o) {
                    e.exports = i(120)
                },
                5: function(e, o) {
                    e.exports = i(154)
                },
                7: function(e, o) {
                    e.exports = i(13)
                },
                79: function(e, o, i) {
                    "use strict";
                    i.r(o);
                    var t = function() {
                        var e = this,
                            o = e.$createElement,
                            i = e._self._c || o;
                        return i("span", [i("transition", {
                            attrs: {
                                name: e.transition
                            },
                            on: {
                                "after-enter": e.handleAfterEnter,
                                "after-leave": e.handleAfterLeave
                            }
                        }, [i("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.disabled && e.showPopper,
                                expression: "!disabled && showPopper"
                            }],
                            ref: "popper",
                            staticClass: "el-popover el-popper",
                            class: [e.popperClass, e.content && "el-popover--plain"],
                            style: {
                                width: e.width + "px"
                            },
                            attrs: {
                                role: "tooltip",
                                id: e.tooltipId,
                                "aria-hidden": e.disabled || !e.showPopper ? "true" : "false"
                            }
                        }, [e.title ? i("div", {
                            staticClass: "el-popover__title",
                            domProps: {
                                textContent: e._s(e.title)
                            }
                        }) : e._e(), e._t("default", [e._v(e._s(e.content))])], 2)]), i("span", {
                            ref: "wrapper",
                            staticClass: "el-popover__reference-wrapper"
                        }, [e._t("reference")], 2)], 1)
                    };
                    t._withStripped = !0;
                    var r = i(5),
                        n = i.n(r),
                        a = i(2),
                        s = i(3),
                        l = {
                            name: "ElPopover",
                            mixins: [n.a],
                            props: {
                                trigger: {
                                    type: String,
                                    default: "click",
                                    validator: function(e) {
                                        return ["click", "focus", "hover", "manual"].indexOf(e) > -1
                                    }
                                },
                                openDelay: {
                                    type: Number,
                                    default: 0
                                },
                                closeDelay: {
                                    type: Number,
                                    default: 200
                                },
                                title: String,
                                disabled: Boolean,
                                content: String,
                                reference: {},
                                popperClass: String,
                                width: {},
                                visibleArrow: {
                                    default: !0
                                },
                                arrowOffset: {
                                    type: Number,
                                    default: 0
                                },
                                transition: {
                                    type: String,
                                    default: "fade-in-linear"
                                },
                                tabindex: {
                                    type: Number,
                                    default: 0
                                }
                            },
                            computed: {
                                tooltipId: function() {
                                    return "el-popover-" + Object(s.generateId)()
                                }
                            },
                            watch: {
                                showPopper: function(e) {
                                    this.disabled || (e ? this.$emit("show") : this.$emit("hide"))
                                }
                            },
                            mounted: function() {
                                var e = this,
                                    o = this.referenceElm = this.reference || this.$refs.reference,
                                    i = this.popper || this.$refs.popper;
                                !o && this.$refs.wrapper.children && (o = this.referenceElm = this.$refs.wrapper.children[0]), o && (Object(a.addClass)(o, "el-popover__reference"), o.setAttribute("aria-describedby", this.tooltipId), o.setAttribute("tabindex", this.tabindex), i.setAttribute("tabindex", 0), "click" !== this.trigger && (Object(a.on)(o, "focusin", (function() {
                                    e.handleFocus();
                                    var i = o.__vue__;
                                    i && "function" == typeof i.focus && i.focus()
                                })), Object(a.on)(i, "focusin", this.handleFocus), Object(a.on)(o, "focusout", this.handleBlur), Object(a.on)(i, "focusout", this.handleBlur)), Object(a.on)(o, "keydown", this.handleKeydown), Object(a.on)(o, "click", this.handleClick)), "click" === this.trigger ? (Object(a.on)(o, "click", this.doToggle), Object(a.on)(document, "click", this.handleDocumentClick)) : "hover" === this.trigger ? (Object(a.on)(o, "mouseenter", this.handleMouseEnter), Object(a.on)(i, "mouseenter", this.handleMouseEnter), Object(a.on)(o, "mouseleave", this.handleMouseLeave), Object(a.on)(i, "mouseleave", this.handleMouseLeave)) : "focus" === this.trigger && (this.tabindex < 0 && console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"), o.querySelector("input, textarea") ? (Object(a.on)(o, "focusin", this.doShow), Object(a.on)(o, "focusout", this.doClose)) : (Object(a.on)(o, "mousedown", this.doShow), Object(a.on)(o, "mouseup", this.doClose)))
                            },
                            beforeDestroy: function() {
                                this.cleanup()
                            },
                            deactivated: function() {
                                this.cleanup()
                            },
                            methods: {
                                doToggle: function() {
                                    this.showPopper = !this.showPopper
                                },
                                doShow: function() {
                                    this.showPopper = !0
                                },
                                doClose: function() {
                                    this.showPopper = !1
                                },
                                handleFocus: function() {
                                    Object(a.addClass)(this.referenceElm, "focusing"), "click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !0)
                                },
                                handleClick: function() {
                                    Object(a.removeClass)(this.referenceElm, "focusing")
                                },
                                handleBlur: function() {
                                    Object(a.removeClass)(this.referenceElm, "focusing"), "click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !1)
                                },
                                handleMouseEnter: function() {
                                    var e = this;
                                    clearTimeout(this._timer), this.openDelay ? this._timer = setTimeout((function() {
                                        e.showPopper = !0
                                    }), this.openDelay) : this.showPopper = !0
                                },
                                handleKeydown: function(e) {
                                    27 === e.keyCode && "manual" !== this.trigger && this.doClose()
                                },
                                handleMouseLeave: function() {
                                    var e = this;
                                    clearTimeout(this._timer), this.closeDelay ? this._timer = setTimeout((function() {
                                        e.showPopper = !1
                                    }), this.closeDelay) : this.showPopper = !1
                                },
                                handleDocumentClick: function(e) {
                                    var o = this.reference || this.$refs.reference,
                                        i = this.popper || this.$refs.popper;
                                    !o && this.$refs.wrapper.children && (o = this.referenceElm = this.$refs.wrapper.children[0]), this.$el && o && !this.$el.contains(e.target) && !o.contains(e.target) && i && !i.contains(e.target) && (this.showPopper = !1)
                                },
                                handleAfterEnter: function() {
                                    this.$emit("after-enter")
                                },
                                handleAfterLeave: function() {
                                    this.$emit("after-leave"), this.doDestroy()
                                },
                                cleanup: function() {
                                    (this.openDelay || this.closeDelay) && clearTimeout(this._timer)
                                }
                            },
                            destroyed: function() {
                                var e = this.reference;
                                Object(a.off)(e, "click", this.doToggle), Object(a.off)(e, "mouseup", this.doClose), Object(a.off)(e, "mousedown", this.doShow), Object(a.off)(e, "focusin", this.doShow), Object(a.off)(e, "focusout", this.doClose), Object(a.off)(e, "mousedown", this.doShow), Object(a.off)(e, "mouseup", this.doClose), Object(a.off)(e, "mouseleave", this.handleMouseLeave), Object(a.off)(e, "mouseenter", this.handleMouseEnter), Object(a.off)(document, "click", this.handleDocumentClick)
                            }
                        },
                        d = i(0),
                        u = Object(d.a)(l, t, [], !1, null, null, null);
                    u.options.__file = "packages/popover/src/main.vue";
                    var c = u.exports,
                        p = function(e, o, i) {
                            var t = o.expression ? o.value : o.arg,
                                r = i.context.$refs[t];
                            r && (Array.isArray(r) ? r[0].$refs.reference = e : r.$refs.reference = e)
                        },
                        m = {
                            bind: function(e, o, i) {
                                p(e, o, i)
                            },
                            inserted: function(e, o, i) {
                                p(e, o, i)
                            }
                        },
                        h = i(7);
                    i.n(h).a.directive("popover", m), c.install = function(e) {
                        e.directive("popover", m), e.component(c.name, c)
                    }, c.directive = m;
                    o.default = c
                }
            })
        },
        279: function(e, o, i) {
            (e.exports = i(71)(!1)).push([e.i, '.el-popper .popper__arrow,.el-popper .popper__arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.el-popper .popper__arrow{border-width:6px;-webkit-filter:drop-shadow(0 2px 12px rgba(0, 0, 0, .03));filter:drop-shadow(0 2px 12px rgba(0, 0, 0, .03))}.el-popper .popper__arrow::after{content:" ";border-width:6px}.el-popper[x-placement^=top]{margin-bottom:12px}.el-popper[x-placement^=top] .popper__arrow{bottom:-6px;left:50%;margin-right:3px;border-top-color:#EBEEF5;border-bottom-width:0}.el-popper[x-placement^=top] .popper__arrow::after{bottom:1px;margin-left:-6px;border-top-color:#FFF;border-bottom-width:0}.el-popper[x-placement^=bottom]{margin-top:12px}.el-popper[x-placement^=bottom] .popper__arrow{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#EBEEF5}.el-popper[x-placement^=bottom] .popper__arrow::after{top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#FFF}.el-popper[x-placement^=right]{margin-left:12px}.el-popper[x-placement^=right] .popper__arrow{top:50%;left:-6px;margin-bottom:3px;border-right-color:#EBEEF5;border-left-width:0}.el-popper[x-placement^=right] .popper__arrow::after{bottom:-6px;left:1px;border-right-color:#FFF;border-left-width:0}.el-popper[x-placement^=left]{margin-right:12px}.el-popper[x-placement^=left] .popper__arrow{top:50%;right:-6px;margin-bottom:3px;border-right-width:0;border-left-color:#EBEEF5}.el-popper[x-placement^=left] .popper__arrow::after{right:1px;bottom:-6px;margin-left:-6px;border-right-width:0;border-left-color:#FFF}.el-popover{position:absolute;background:#FFF;min-width:150px;border-radius:4px;border:1px solid #EBEEF5;padding:12px;z-index:2000;color:#606266;line-height:1.4;text-align:justify;font-size:14px;-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1);word-break:break-all}.el-popover--plain{padding:18px 20px}.el-popover__title{color:#303133;font-size:16px;line-height:1;margin-bottom:12px}.el-popover:focus,.el-popover:focus:active,.el-popover__reference:focus:hover,.el-popover__reference:focus:not(.focusing){outline-width:0}', ""])
        },
        280: function(e, o, i) {
            e.exports = function(e) {
                var o = {};

                function i(t) {
                    if (o[t]) return o[t].exports;
                    var r = o[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
                }
                return i.m = e, i.c = o, i.d = function(e, o, t) {
                    i.o(e, o) || Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: t
                    })
                }, i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.t = function(e, o) {
                    if (1 & o && (e = i(e)), 8 & o) return e;
                    if (4 & o && "object" == typeof e && e && e.__esModule) return e;
                    var t = Object.create(null);
                    if (i.r(t), Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & o && "string" != typeof e)
                        for (var r in e) i.d(t, r, function(o) {
                            return e[o]
                        }.bind(null, r));
                    return t
                }, i.n = function(e) {
                    var o = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(o, "a", o), o
                }, i.o = function(e, o) {
                    return Object.prototype.hasOwnProperty.call(e, o)
                }, i.p = "/dist/", i(i.s = 108)
            }({
                0: function(e, o, i) {
                    "use strict";

                    function t(e, o, i, t, r, n, a, s) {
                        var l, d = "function" == typeof e ? e.options : e;
                        if (o && (d.render = o, d.staticRenderFns = i, d._compiled = !0), t && (d.functional = !0), n && (d._scopeId = "data-v-" + n), a ? (l = function(e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                            }, d._ssrRegister = l) : r && (l = s ? function() {
                                r.call(this, this.$root.$options.shadowRoot)
                            } : r), l)
                            if (d.functional) {
                                d._injectStyles = l;
                                var u = d.render;
                                d.render = function(e, o) {
                                    return l.call(o), u(e, o)
                                }
                            } else {
                                var c = d.beforeCreate;
                                d.beforeCreate = c ? [].concat(c, l) : [l]
                            }
                        return {
                            exports: e,
                            options: d
                        }
                    }
                    i.d(o, "a", (function() {
                        return t
                    }))
                },
                108: function(e, o, i) {
                    "use strict";
                    i.r(o);
                    var t = function() {
                        var e = this,
                            o = e.$createElement,
                            i = e._self._c || o;
                        return i("label", {
                            staticClass: "el-radio",
                            class: [e.border && e.radioSize ? "el-radio--" + e.radioSize : "", {
                                "is-disabled": e.isDisabled
                            }, {
                                "is-focus": e.focus
                            }, {
                                "is-bordered": e.border
                            }, {
                                "is-checked": e.model === e.label
                            }],
                            attrs: {
                                role: "radio",
                                "aria-checked": e.model === e.label,
                                "aria-disabled": e.isDisabled,
                                tabindex: e.tabIndex
                            },
                            on: {
                                keydown: function(o) {
                                    if (!("button" in o) && e._k(o.keyCode, "space", 32, o.key, [" ", "Spacebar"])) return null;
                                    o.stopPropagation(), o.preventDefault(), e.model = e.isDisabled ? e.model : e.label
                                }
                            }
                        }, [i("span", {
                            staticClass: "el-radio__input",
                            class: {
                                "is-disabled": e.isDisabled, "is-checked": e.model === e.label
                            }
                        }, [i("span", {
                            staticClass: "el-radio__inner"
                        }), i("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.model,
                                expression: "model"
                            }],
                            ref: "radio",
                            staticClass: "el-radio__original",
                            attrs: {
                                type: "radio",
                                "aria-hidden": "true",
                                name: e.name,
                                disabled: e.isDisabled,
                                tabindex: "-1",
                                autocomplete: "off"
                            },
                            domProps: {
                                value: e.label,
                                checked: e._q(e.model, e.label)
                            },
                            on: {
                                focus: function(o) {
                                    e.focus = !0
                                },
                                blur: function(o) {
                                    e.focus = !1
                                },
                                change: [function(o) {
                                    e.model = e.label
                                }, e.handleChange]
                            }
                        })]), i("span", {
                            staticClass: "el-radio__label",
                            on: {
                                keydown: function(e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [e._t("default"), e.$slots.default ? e._e() : [e._v(e._s(e.label))]], 2)])
                    };
                    t._withStripped = !0;
                    var r = i(4),
                        n = {
                            name: "ElRadio",
                            mixins: [i.n(r).a],
                            inject: {
                                elForm: {
                                    default: ""
                                },
                                elFormItem: {
                                    default: ""
                                }
                            },
                            componentName: "ElRadio",
                            props: {
                                value: {},
                                label: {},
                                disabled: Boolean,
                                name: String,
                                border: Boolean,
                                size: String
                            },
                            data: function() {
                                return {
                                    focus: !1
                                }
                            },
                            computed: {
                                isGroup: function() {
                                    for (var e = this.$parent; e;) {
                                        if ("ElRadioGroup" === e.$options.componentName) return this._radioGroup = e, !0;
                                        e = e.$parent
                                    }
                                    return !1
                                },
                                model: {
                                    get: function() {
                                        return this.isGroup ? this._radioGroup.value : this.value
                                    },
                                    set: function(e) {
                                        this.isGroup ? this.dispatch("ElRadioGroup", "input", [e]) : this.$emit("input", e), this.$refs.radio && (this.$refs.radio.checked = this.model === this.label)
                                    }
                                },
                                _elFormItemSize: function() {
                                    return (this.elFormItem || {}).elFormItemSize
                                },
                                radioSize: function() {
                                    var e = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
                                    return this.isGroup && this._radioGroup.radioGroupSize || e
                                },
                                isDisabled: function() {
                                    return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled
                                },
                                tabIndex: function() {
                                    return this.isDisabled || this.isGroup && this.model !== this.label ? -1 : 0
                                }
                            },
                            methods: {
                                handleChange: function() {
                                    var e = this;
                                    this.$nextTick((function() {
                                        e.$emit("change", e.model), e.isGroup && e.dispatch("ElRadioGroup", "handleChange", e.model)
                                    }))
                                }
                            }
                        },
                        a = i(0),
                        s = Object(a.a)(n, t, [], !1, null, null, null);
                    s.options.__file = "packages/radio/src/radio.vue";
                    var l = s.exports;
                    l.install = function(e) {
                        e.component(l.name, l)
                    };
                    o.default = l
                },
                4: function(e, o) {
                    e.exports = i(85)
                }
            })
        },
        281: function(e, o, i) {
            var t = i(282);
            "string" == typeof t && (t = [
                [e.i, t, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i(72)(t, r);
            t.locals && (e.exports = t.locals)
        },
        282: function(e, o, i) {
            (e.exports = i(71)(!1)).push([e.i, '@charset "UTF-8";.el-radio,.el-radio--medium.is-bordered .el-radio__label{font-size:14px}.el-radio,.el-radio__input{white-space:nowrap;line-height:1;outline:0}.el-radio,.el-radio__inner,.el-radio__input{position:relative;display:inline-block}.el-radio{color:#606266;font-weight:500;cursor:pointer;margin-right:30px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.el-radio.is-bordered{padding:12px 20px 0 10px;border-radius:4px;border:1px solid #DCDFE6;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px}.el-radio.is-bordered.is-checked{border-color:#409EFF}.el-radio.is-bordered.is-disabled{cursor:not-allowed;border-color:#EBEEF5}.el-radio__input.is-disabled .el-radio__inner,.el-radio__input.is-disabled.is-checked .el-radio__inner{background-color:#F5F7FA;border-color:#E4E7ED}.el-radio.is-bordered+.el-radio.is-bordered{margin-left:10px}.el-radio--medium.is-bordered{padding:10px 20px 0 10px;border-radius:4px;height:36px}.el-radio--mini.is-bordered .el-radio__label,.el-radio--small.is-bordered .el-radio__label{font-size:12px}.el-radio--medium.is-bordered .el-radio__inner{height:14px;width:14px}.el-radio--small.is-bordered{padding:8px 15px 0 10px;border-radius:3px;height:32px}.el-radio--small.is-bordered .el-radio__inner{height:12px;width:12px}.el-radio--mini.is-bordered{padding:6px 15px 0 10px;border-radius:3px;height:28px}.el-radio--mini.is-bordered .el-radio__inner{height:12px;width:12px}.el-radio:last-child{margin-right:0}.el-radio__input{cursor:pointer;vertical-align:middle}.el-radio__input.is-disabled .el-radio__inner{cursor:not-allowed}.el-radio__input.is-disabled .el-radio__inner::after{cursor:not-allowed;background-color:#F5F7FA}.el-radio__input.is-disabled .el-radio__inner+.el-radio__label{cursor:not-allowed}.el-radio__input.is-disabled.is-checked .el-radio__inner::after{background-color:#C0C4CC}.el-radio__input.is-disabled+span.el-radio__label{color:#C0C4CC;cursor:not-allowed}.el-radio__input.is-checked .el-radio__inner{border-color:#409EFF;background:#409EFF}.el-radio__input.is-checked .el-radio__inner::after{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.el-radio__input.is-checked+.el-radio__label{color:#409EFF}.el-radio__input.is-focus .el-radio__inner{border-color:#409EFF}.el-radio__inner{border:1px solid #DCDFE6;border-radius:100%;width:14px;height:14px;background-color:#FFF;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box}.el-radio__inner:hover{border-color:#409EFF}.el-radio__inner::after{width:4px;height:4px;border-radius:100%;background-color:#FFF;content:"";position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transition:-webkit-transform .15s ease-in;transition:-webkit-transform .15s ease-in;transition:transform .15s ease-in;transition:transform .15s ease-in,-webkit-transform .15s ease-in}.el-radio__original{opacity:0;outline:0;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner{-webkit-box-shadow:0 0 2px 2px #409EFF;box-shadow:0 0 2px 2px #409EFF}.el-radio__label{font-size:14px;padding-left:10px}', ""])
        },
        285: function(e, o, i) {
            "use strict";
            var t = i(12),
                r = i.n(t),
                n = i(3),
                a = i.n(n),
                s = (i(266), i(73), i(267)),
                l = i.n(s),
                d = i(1),
                u = i.n(d),
                c = i(5),
                p = i(6),
                m = i(0),
                h = i(80),
                g = i(2),
                v = i(69),
                f = i(79),
                T = i(264),
                x = i(128),
                b = i(123),
                w = i(222),
                C = i(94),
                S = i(70),
                P = {
                    name: "UserInfo",
                    components: {
                        Button: w.default
                    },
                    props: ["isLoading", "refreshing"],
                    computed: {
                        userInfo: function() {
                            return f.a.state.userInfo
                        },
                        level: function() {
                            return this.userInfo.level === S.f.FREE ? "free" : this.userInfo.level === S.f.BASIC ? "basic" : "pro"
                        },
                        isPro: function() {
                            return 0 !== this.userInfo.level
                        },
                        avatar: function() {
                            return this.userInfo.avatar ? this.userInfo.avatar : "https://www.media.io/imagesV4/user/avatar.svg"
                        },
                        cloudNum: function() {
                            var e = this.userInfo,
                                o = e.capacity_total,
                                i = e.capacity_used,
                                t = i > 1048576 ? "".concat((i / 1024 / 1024).toFixed(2), "GB") : "".concat((i / 1024).toFixed(2), "MB");
                            return "".concat(t, "/").concat(o / 1024 / 1024, "GB")
                        },
                        time: function() {
                            var e, o;
                            return null === (e = this.userInfo) || void 0 === e || null === (o = e.expired_time) || void 0 === o ? void 0 : o.split(" ")[0]
                        },
                        subTitleTime: function() {
                            return this.userInfo.subTitle < 60 ? "".concat(0, "min(s)") : "".concat(Math.floor(this.userInfo.subTitle / 60), "min")
                        }
                    },
                    methods: {
                        getUser: function() {
                            this.$emit("getUser")
                        },
                        workspace: function() {
                            window.open("https://www.media.io/app")
                        },
                        toRenew: function() {
                            p.a.sendGTM({
                                event: "Buy_Windows_Windows",
                                category: "New_Video_Editor",
                                action: "Buy_Windows_Windows",
                                eventLabel: "Button_UserAccount_Upgrade"
                            }), C.a.commit("showMemberPricingPop", {
                                modals: {
                                    isShowPricingPop: !0,
                                    isBuySinglePoint: !1
                                },
                                tips: S.c.DEFAULT,
                                isHeaderPricingClick: !0,
                                clickUpgradeButton: !0
                            })
                        },
                        routeMyAccount: function() {
                            p.a.sendGTM({
                                category: "Public",
                                action: "Click_Account_Center"
                            }), window.open("https://accounts.wondershare.com/web/overview")
                        },
                        openFeedBack: function() {
                            window.open("https://www.media.io/help.html")
                        },
                        installRecord: function() {
                            window.open("https://chrome.google.com/webstore/detail/mediaio-free-video-and-sc/nifomlhcmdenmbbecgnjdnjdnfbflcgf")
                        },
                        Logout: function() {
                            this.$emit("Logout")
                        },
                        buy: function(e) {
                            p.a.sendGTM({
                                action: e,
                                category: "Show_Buy_Windows",
                                eventLabel: "Click_UserAccount_Buy"
                            }), C.a.commit("showMemberPricingPop", {
                                modals: {
                                    isShowPricingPop: !0,
                                    isBuySinglePoint: !0
                                },
                                tips: S.c.DEFAULT,
                                isHeaderPricingClick: !0,
                                clickBuyButtonType: e
                            })
                        }
                    }
                },
                y = i(68),
                E = Object(y.a)(P, (function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", {
                        staticClass: "workshop-account workshop-new-account"
                    }, [i("div", {
                        staticClass: "avatar-field"
                    }, [i("div", {
                        staticClass: "dropdown-item-person-avatar dropdown-person-avatar",
                        class: {
                            "dropdown-default-avatar": !e.avatar
                        }
                    }, [i("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: e.avatar,
                            alt: "avatar"
                        }
                    })]), e._v(" "), i("span", {
                        staticClass: "username"
                    }, [e._v(e._s(e.userInfo.name))]), e._v(" "), i("div", {
                        staticClass: "account-divider"
                    })]), e._v(" "), i("div", {
                        staticClass: "option-field"
                    }, [i("button", {
                        staticClass: "option-field-button",
                        on: {
                            click: e.routeMyAccount
                        }
                    }, [e._m(0), e._v(" "), i("img", {
                        staticClass: "arrow-icon",
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/icon16_arrow_right_plain.svg",
                            alt: ""
                        }
                    })]), e._v(" "), i("button", {
                        staticClass: "option-field-button",
                        on: {
                            click: e.Logout
                        }
                    }, [e._m(1), e._v(" "), i("img", {
                        staticClass: "arrow-icon",
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/icon16_arrow_right_plain.svg",
                            alt: ""
                        }
                    })])])])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("div", [o("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/icon24_account_plain.svg",
                            alt: ""
                        }
                    }), this._v(" "), o("span", [this._v("Account center")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("div", [o("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/icon24_sign_out_plain.svg",
                            alt: ""
                        }
                    }), this._v(" "), o("span", [this._v("Sign Out")])])
                }], !1, null, "9847d8f6", null).exports,
                A = i(117),
                U = i(124),
                F = i(77),
                I = i(119),
                _ = i.n(I),
                O = (i(118), function(e) {
                    function o() {
                        var o = null !== e && e.apply(this, arguments) || this;
                        return o.MORE_SUBTITLE = [], o
                    }
                    return Object(A.d)(o, e), Object.defineProperty(o.prototype, "isShowPopup", {
                        get: function() {
                            return C.a.state.isShowPopup
                        },
                        enumerable: !1,
                        configurable: !0
                    }), o.prototype.mounted = function() {
                        return Object(A.b)(this, void 0, void 0, (function() {
                            var e;
                            return Object(A.e)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Object(F.f)()];
                                    case 1:
                                        return e = o.sent(), this.MORE_SUBTITLE = e.data, [2]
                                }
                            }))
                        }))
                    }, o.prototype.close = function() {
                        C.a.commit("showPricingPop", !1)
                    }, o.prototype.buyNow = function(e) {
                        window.open(e)
                    }, o = Object(A.c)([Object(U.a)({
                        components: {
                            Button: w.default,
                            "el-dialog": _.a
                        }
                    })], o)
                }(U.c)),
                k = Object(y.a)(O, (function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("el-dialog", {
                        staticClass: "more-subtitle",
                        attrs: {
                            visible: e.isShowPopup,
                            width: "640px",
                            "append-to-body": !0,
                            center: ""
                        },
                        on: {
                            "update:visible": function(o) {
                                e.isShowPopup = o
                            }
                        }
                    }, [i("div", {
                        staticClass: "pricing-more-subtitle"
                    }, [i("div", {
                        staticClass: "close",
                        on: {
                            click: e.close
                        }
                    }, [i("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/icon24_close.svg",
                            alt: ""
                        }
                    })]), e._v(" "), i("div", {
                        staticClass: "pricing-more-subtitle-title"
                    }, [e._v("\n      Purchase more time for Auto-Subtitle\n    ")]), e._v(" "), i("div", {
                        staticClass: "pricing-more-subtitle-tips"
                    }, [e._v("\n      You can buy additional subtitle time for you account.\n    ")]), e._v(" "), i("div", {
                        staticClass: "pricing-more-subtitle-list"
                    }, e._l(e.MORE_SUBTITLE, (function(o, t) {
                        return i("div", {
                            key: o.duration,
                            staticClass: "pricing-more-subtitle-list-box",
                            class: {
                                "pricing-more-subtitle-list-box-middle": 1 === t
                            }
                        }, [i("div", {
                            staticClass: "pricing-prize"
                        }, [i("div", [e._v("$" + e._s(o.value) + "/ " + e._s(o.duration) + " hour")])]), e._v(" "), i("div", {
                            staticClass: "pricing-level-upgrade"
                        }, [i("Button", {
                            attrs: {
                                className: "renew-btn"
                            },
                            nativeOn: {
                                click: function(i) {
                                    return e.buyNow(o.cat_url)
                                }
                            }
                        }, [i("span", [e._v("BUY NOW")])])], 1)])
                    })), 0)])])
                }), [], !1, null, null, null).exports,
                z = i(122),
                V = function(e) {
                    function o() {
                        var o = null !== e && e.apply(this, arguments) || this;
                        return o.lang = c.a.lang, o.data = ["Monthly", "Annually"], o.data1 = [o.lang.PricingEnumBasic.Month, o.lang.PricingEnumBasic.Annual], o
                    }
                    return Object(A.d)(o, e), Object(A.c)([Object(U.b)({
                        default: "Annually"
                    })], o.prototype, "curType", void 0), o = Object(A.c)([Object(U.a)({
                        components: {}
                    })], o)
                }(U.c),
                D = Object(y.a)(V, (function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", {
                        staticClass: "switch-container"
                    }, e._l(e.data, (function(o, t) {
                        return i("div", {
                            key: t,
                            staticClass: "box",
                            class: {
                                active: o === e.curType
                            },
                            on: {
                                click: function() {
                                    e.$emit("changeType", o)
                                }
                            }
                        }, [i("p", [e._v(e._s(e.data1[t]))])])
                    })), 0)
                }), [], !1, null, "3b54dba9", null).exports,
                W = i(280),
                L = i.n(W),
                M = (i(281), i(212)),
                B = i.n(M),
                R = (i(259), function(e) {
                    function o() {
                        var o = null !== e && e.apply(this, arguments) || this;
                        return o.pricingBoxWidth = 1032, o.contentWidth = 301, o.isChangeFlex = !1, o.pricingBoxHeight = 640, o.curType = "Annually", o.PRICING_DATA = S.b, o.USER_STATUS = S.f, o.BUY_TYPE = S.a, o.isRefreshing = !1, o.ml = 0, o.curFileSize = !1, o.curSubTitleType = !1, o.sstData = 2, o.isConfirm = !1, o.isPurchased = !0, o.isSubtitle = !0, o.isTTS = !0, o.isBG = !0, o.MORE_SUBTITLE = [], o.curSubTitle = "0", o.PRICING_DATA_URL_NAME = [0, 1, 2], o.isOnlyShowSttPricing = !1, o.lang = c.a.lang, o.moreValueIndex = 1, o.upgradedType = 0, o
                    }
                    return Object(A.d)(o, e), Object.defineProperty(o.prototype, "upgradedUserInfo", {
                        get: function() {
                            return [{
                                title: this.lang.PRICING_STT.PLAN1,
                                info: "" + this.curSubTitle
                            }, {
                                title: this.lang.PRICING_STT.PLAN2,
                                info: "" + this.userInfo.tts
                            }, {
                                title: this.lang.PRICING_STT.PLAN3,
                                info: this.userInfo.credits + " " + this.lang.PRICING_TTS.UNIT3
                            }, {
                                title: this.lang.PricingPanel.Account,
                                info: this.lang.PricingPanel.UserPlan.replace("xxx", this.plan)
                            }]
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "PRICING_TEXT", {
                        get: function() {
                            return this.isTTS ? this.lang.PRICING_TTS : this.isSubtitle ? this.lang.PRICING_STT : this.lang.PRICING_BG
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "pricingTips", {
                        get: function() {
                            return this.isTTS ? this.lang.PRICING_HELP.TTS : this.isBG ? this.lang.PRICING_HELP.BG : this.lang.PRICING_HELP.STT
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "durationType", {
                        get: function() {
                            return this.clickBuyButtonType === S.a.RemoveBackground ? this.lang.PRICING_STT.UNIT3 : this.clickBuyButtonType === S.a.TTS ? this.lang.PRICING_STT.UNIT4 : this.lang.PRICING_STT.UNIT1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "singleType", {
                        get: function() {
                            return this.clickBuyButtonType === S.a.RemoveBackground ? this.lang.PRICING_STT.UNIT5 : this.clickBuyButtonType === S.a.TTS ? "/character" : this.lang.PRICING_STT.UNIT2
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "clickBuyButtonType", {
                        get: function() {
                            return C.a.state.clickBuyButtonType
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "isHeaderPricingClick", {
                        get: function() {
                            return C.a.state.isHeaderPricingClick
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "convertTips", {
                        get: function() {
                            return C.a.state.convertTips
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "upgradeTips", {
                        get: function() {
                            return C.a.state.upgradeTips
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "isFileSize", {
                        get: function() {
                            return C.a.state.isFileSize
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "curContentType", {
                        get: function() {
                            return this.isSingleShow ? "lite" : "tips"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "isShow", {
                        get: function() {
                            return C.a.state.modals.isShowPricingPop
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "isSingleShow", {
                        get: function() {
                            return C.a.state.modals.isBuySinglePoint
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "clickUpgradeButton", {
                        get: function() {
                            return C.a.state.clickUpgradeButton
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "userInfo", {
                        get: function() {
                            return f.a.state.userInfo
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "isLogin", {
                        get: function() {
                            return -1 !== f.a.state.userInfo.level
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "tips", {
                        get: function() {
                            return C.a.state.tips
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "plan", {
                        get: function() {
                            return 0 === this.userInfo.level ? "Free" : 1 === this.userInfo.level ? "Basic" : 2 === this.userInfo.level ? "Pro" : void 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(o.prototype, "gtmAction", {
                        get: function() {
                            return this.curSubTitleType ? this.isBG ? "RemoveBackground" : this.isTTS ? "TTS" : "Subtitle" : this.curFileSize ? this.getGTMType() : "common"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), o.prototype.getGTMType = function() {
                        var e = window.location.pathname;
                        return e.match(/convert/) || S.e.includes(e) ? "Converter" : e.match(/compressor/) ? "Compress" : "common"
                    }, o.prototype.setLoginStyle = function(e, o) {
                        e !== o && this.setStyle()
                    }, o.prototype.getStyle = function(e) {
                        return Object(A.b)(this, void 0, void 0, (function() {
                            var o;
                            return Object(A.e)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e ? (this.isBG = this.isSubtitle = this.isTTS = !1, this.upgradedType = 3, this.sstData = 2, this.moreValueIndex = 2, this.isSingleShow ? [4, Object(F.f)()] : [3, 2]) : [3, 4];
                                    case 1:
                                        return o = i.sent(), this.clickBuyButtonType === S.a.Subtitle ? (this.isSubtitle = !0, this.MORE_SUBTITLE = o.data.custom, this.upgradedType = 0) : this.clickBuyButtonType === S.a.TTS ? (this.isTTS = !0, this.MORE_SUBTITLE = o.data.tts, this.upgradedType = 1, this.sstData = 1, this.moreValueIndex = 1) : (this.isBG = !0, this.MORE_SUBTITLE = o.data.cutImage, this.upgradedType = 2), this.PRICING_DATA_URL_NAME = [S.d.WATERMARK, S.d.CONVERT, S.d.VIDEO_EDITOR], [3, 3];
                                    case 2:
                                        this.clickUpgradeButton ? this.PRICING_DATA_URL_NAME = [S.d.VIDEO_EDITOR, S.d.CONVERT, S.d.AUDIO_TOOLS] : this.PRICING_DATA_URL_NAME = [S.d.CONVERT, S.d.VIDEO_EDITOR, S.d.AUDIO_TOOLS], i.label = 3;
                                    case 3:
                                        this.setStyle(), i.label = 4;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, o.prototype.confirmUserInfo = function() {
                        this.isPurchased = !1, this.refreshUserInfo(), p.a.sendGTM({
                            action: this.gtmAction,
                            category: "Confirm_Purchase",
                            eventLabel: "Click_yes"
                        })
                    }, o.prototype.formatSubtitle = function(e) {
                        return e < 60 ? "0 min(s)" : Math.floor(e / 60) + " min"
                    }, o.prototype.refreshUserInfo = function(e) {
                        return Object(A.b)(this, void 0, void 0, (function() {
                            var o, i, t, r, n, a, s, l;
                            return Object(A.e)(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        switch (e) {
                                            case "click":
                                                p.a.sendGTM({
                                                    action: this.gtmAction,
                                                    category: "Confirm_Purchase",
                                                    eventLabel: this.isSubtitle ? "Click_refresh_stt" : "Click_refresh_common"
                                                })
                                        }
                                        return this.isPurchased || (this.isRefreshing = !0), [4, Object(F.m)({
                                            source: ""
                                        })];
                                    case 1:
                                        return d.sent(), [4, Object(F.i)()];
                                    case 2:
                                        return o = d.sent(), i = o.data, t = i.token, r = i.expired_time, [4, Object(F.g)(t)];
                                    case 3:
                                        return n = d.sent(), [4, Object(F.h)()];
                                    case 4:
                                        return a = d.sent(), [4, Object(F.d)()];
                                    case 5:
                                        return s = d.sent(), this.curSubTitle = this.formatSubtitle(n.data), console.log(this.curSubTitle), l = Object(A.a)(Object(A.a)({}, o.data), {
                                            subTitle: n.data,
                                            tts: a.data,
                                            credits: s.data,
                                            expired_time: r ? r.slice(0, 10) : ""
                                        }), f.a.commit("updateUserInfo", l), this.isRefreshing = !1, [2]
                                }
                            }))
                        }))
                    }, o.prototype.closeConfirm = function(e) {
                        return Object(A.b)(this, void 0, void 0, (function() {
                            var o;
                            return Object(A.e)(this, (function(i) {
                                return o = "", o = this.isPurchased && this.isConfirm ? "Click_No" : this.isPurchased ? "Click_" + e : this.isSubtitle ? "Click_" + e + "_stt" : this.isTTS ? "Click_" + e + "_tts" : this.isBG ? "Click_" + e + "_bg" : "Click_" + e + "_common", p.a.sendGTM({
                                    action: this.gtmAction,
                                    category: "Confirm_Purchase",
                                    eventLabel: o
                                }), this.isConfirm = !1, this.refreshUserInfo(), [2]
                            }))
                        }))
                    }, o.prototype.buyNowStt = function(e) {
                        void 0 === e && (e = event), window.open(this.MORE_SUBTITLE[this.sstData].cat_url), this.curFileSize = this.isFileSize, this.curSubTitleType = this.isSingleShow, p.a.sendGTM({
                            action: this.gtmAction,
                            category: "Click_on_Buy_Windows",
                            eventLabel: "BuyNow_lite"
                        }), this.isLogin ? (this.close(), this.pricingBoxWidth = 480, this.isConfirm = !0, this.isPurchased = !0) : this.signUp("signup", e)
                    }, o.prototype.goPlan = function() {
                        window.sessionStorage.setItem("chooseRightPlan", ""), window.open("https://www.media.io/pricing.html", "_blank")
                    }, o.prototype.buyNow = function(e, o, i, t) {
                        this.upgradedType = 3;
                        var r = "Monthly" === o ? "1MonPlan" : "1YearPlan";
                        this.curFileSize = this.isFileSize, this.curSubTitleType = this.isSingleShow, p.a.sendGTM({
                            action: this.gtmAction,
                            category: "Click_on_Buy_Windows",
                            eventLabel: "Click_" + i + "_" + r
                        }), window.location.pathname.match(/convert|compressor/) || ["/"].includes(window.location.pathname) ? window.open(t) : window.open(e), this.isLogin && (this.pricingBoxWidth = 480, this.close(), this.isConfirm = !0)
                    }, o.prototype.login_sign_gtag = function(e) {
                        if ("signup" === e) {
                            var o = +(c.a.getCookie("Navigation_SignUp_Count") || 0);
                            c.a.setCookie("Navigation_SignUp_Count", o + 1)
                        }
                    }, o.prototype.signUp = function(e, o) {
                        o && o.preventDefault(), p.a.sendGTM({
                            event: "Click_on_Buy_Windows_App",
                            category: "New_Video_Editor",
                            action: "Click_on_Buy_Windows_App",
                            eventLabel: "Click_SignIn"
                        }), p.a.sendGTM({
                            event: "Origin",
                            category: "Login_Window",
                            action: "Origin",
                            eventLabel: "App_Nav"
                        }), this.login_sign_gtag(e), h.a.$emit("loginButton", {
                            action: e,
                            accountPopupHeader: "",
                            type: "userInfoSignUp('signup', $event)"
                        })
                    }, o.prototype.changeType = function(e) {
                        p.a.sendGTM({
                            action: this.gtmAction,
                            category: "Click_on_Buy_Windows",
                            eventLabel: "Buy_" + e
                        }), this.curType = e
                    }, o.prototype.close = function(e) {
                        switch (e) {
                            case "window":
                                this.curFileSize = this.isFileSize, this.curSubTitleType = this.isSingleShow, p.a.sendGTM({
                                    action: this.gtmAction,
                                    category: "Click_on_Buy_Windows",
                                    eventLabel: "Click_guanbi"
                                })
                        }
                        C.a.commit("showMemberPricingPop", {
                            modals: {
                                isShowPricingPop: !1,
                                isBuySinglePoint: !1
                            },
                            tips: ""
                        }), this.curType = "Annually"
                    }, o.prototype.setStyle = function() {
                        if (this.isShow) {
                            var e = document.body.clientWidth;
                            if (this.pricingBoxHeight = 640, this.isOnlyShowSttPricing = !1, this.userInfo.level === S.f.PRO && this.isSingleShow) this.isOnlyShowSttPricing = !0, this.pricingBoxWidth = 640, this.pricingBoxHeight = 640, this.contentWidth = 560;
                            else if (e >= 960) - 1 !== this.userInfo.level && 0 !== this.userInfo.level || this.isSingleShow ? this.pricingBoxWidth = 880 : this.pricingBoxWidth = 1032, this.contentWidth = 301, this.ml = 16, (this.isSingleShow || 1 === this.userInfo.level || 2 === this.userInfo.level) && (this.contentWidth = 388, this.ml = 0), this.isChangeFlex = !1;
                            else {
                                this.pricingBoxWidth = e - 48;
                                var o = 3;
                                this.ml = 16, (this.isSingleShow || 1 === this.userInfo.level || 2 === this.userInfo.level) && (o = 2, this.ml = 0);
                                var i = (this.pricingBoxWidth - 104) / o;
                                this.isChangeFlex = !1, i <= 224 && (this.isChangeFlex = !0), this.contentWidth = 2 === o ? 388 : 301
                            }
                        }
                    }, o.prototype.mounted = function() {
                        return Object(A.b)(this, void 0, void 0, (function() {
                            var e = this;
                            return Object(A.e)(this, (function(o) {
                                return this.setStyle(), window.addEventListener("resize", (function() {
                                    e.setStyle()
                                })), [2]
                            }))
                        }))
                    }, Object(A.c)([Object(U.d)("userInfo.level", {
                        deep: !0
                    })], o.prototype, "setLoginStyle", null), Object(A.c)([Object(U.d)("isShow")], o.prototype, "getStyle", null), o = Object(A.c)([Object(U.a)({
                        components: {
                            SwitchButton: D,
                            Button: w.default,
                            "el-radio": L.a,
                            "el-tooltip": B.a,
                            "el-dialog": _.a
                        }
                    })], o)
                }(U.c)),
                N = Object(y.a)(R, (function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("el-dialog", {
                        attrs: {
                            title: "",
                            visible: e.isShow || e.isConfirm,
                            width: e.pricingBoxWidth + "px",
                            "append-to-body": !0,
                            "custom-class": "pricing-pop-up",
                            "before-close": e.close
                        }
                    }, [e.isShow ? i("div", {
                        staticClass: "pricing-container",
                        style: {
                            width: e.pricingBoxWidth + "px",
                            height: e.pricingBoxHeight + "px"
                        }
                    }, [i("div", {
                        staticClass: "background-container"
                    }, [i("div", {
                        staticClass: "box-1"
                    }), e._v(" "), i("div", {
                        staticClass: "box-2"
                    })]), e._v(" "), i("div", {
                        staticClass: "pricing-header",
                        class: {
                            "changed-pricing-header": e.isChangeFlex
                        }
                    }, [i("div", {
                        staticClass: "close",
                        on: {
                            click: function(o) {
                                return e.close("window")
                            }
                        }
                    }, [i("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/icon24_close.svg",
                            alt: ""
                        }
                    })]), e._v(" "), i("div", {
                        staticClass: "header-left"
                    }, [e.isChangeFlex ? e._e() : i("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/pricing/icon48_pricing.svg",
                            alt: ""
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "title"
                    }, [i("p", {
                        staticClass: "tips",
                        attrs: {
                            title: e.tips
                        }
                    }, [e._v(e._s(e.tips))]), e._v(" "), i("div", {
                        staticClass: "more"
                    }, [e.isChangeFlex ? i("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/pricing/icon48_pricing.svg",
                            alt: ""
                        }
                    }) : e._e(), e._v(" "), e.isFileSize ? i("p", [e._v("\n              " + e._s(e.convertTips) + "\n            ")]) : e._e(), e._v(" "), e.isHeaderPricingClick ? e._e() : i("p", [e._v("\n              " + e._s(e.upgradeTips) + "\n            ")])]), e._v(" "), i("SwitchButton", {
                        class: {
                            block: e.isChangeFlex && !e.isSingleShow && !e.isOnlyShowSttPricing, "block subtitle": e.isSingleShow && !e.isOnlyShowSttPricing, none: e.isOnlyShowSttPricing || !(e.isChangeFlex && !e.isSingleShow || e.isSingleShow)
                        },
                        attrs: {
                            curType: e.curType
                        },
                        on: {
                            changeType: e.changeType
                        }
                    })], 1)]), e._v(" "), e.isChangeFlex || e.isSingleShow ? e._e() : i("div", {
                        staticClass: "header-right"
                    }, [i("SwitchButton", {
                        attrs: {
                            curType: e.curType
                        },
                        on: {
                            changeType: e.changeType
                        }
                    }), e._v(" "), e.isChangeFlex || e.isSingleShow || "Annually" !== e.curType ? e._e() : i("p", {
                        staticClass: "save-money"
                    }, [e._v("\n          " + e._s(e.lang.PricingPanel.SavePrice) + "\n        ")])], 1)]), e._v(" "), i("div", {
                        staticClass: "pricing-content w-full"
                    }, [i("div", {
                        staticClass: "pricing-content-container"
                    }, [e.isSingleShow ? i("div", {
                        staticClass: "content lite subtitle-content",
                        style: {
                            width: e.contentWidth + "px"
                        }
                    }, [i("div", {
                        staticClass: "level free"
                    }, [i("p", [e._v("Add-on")])]), e._v(" "), i("div", {
                        staticClass: "prize subtitle-prize"
                    }, [i("p", {
                        staticClass: "month subtitle-month"
                    }, [e._v("\n              $" + e._s(e.MORE_SUBTITLE[e.sstData].price_orig) + "\n              ")]), i("p", {
                        staticClass: "pas-as"
                    }, [e._v(e._s(e.lang.SttPricing.PayAs))]), e._v(" "), i("p"), e._v(" "), i("Button", {
                        attrs: {
                            className: "pricing big-pricing-button"
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.buyNowStt.apply(null, arguments)
                            }
                        }
                    }, [i("span", [e._v(e._s(e.lang.PricingPanel.BuyNow))])])], 1), e._v(" "), e._l(e.MORE_SUBTITLE, (function(o, t) {
                        return i("el-radio", {
                            key: t,
                            class: {
                                "radio-active": t === e.moreValueIndex
                            },
                            attrs: {
                                label: t
                            },
                            model: {
                                value: e.sstData,
                                callback: function(o) {
                                    e.sstData = o
                                },
                                expression: "sstData"
                            }
                        }, [t === e.moreValueIndex ? i("p", {
                            staticClass: "most-value"
                        }, [i("img", {
                            attrs: {
                                src: "https://www.media.io/imagesV4/pricing/recommend.svg",
                                alt: ""
                            }
                        })]) : e._e(), e._v(" "), i("p", {
                            staticClass: "stt-prize",
                            class: {
                                bold: t === e.sstData
                            }
                        }, [i("span", {
                            staticClass: "duration",
                            class: {
                                "tts-duration": e.clickBuyButtonType === e.BUY_TYPE.TTS && e.userInfo.level !== e.USER_STATUS.PRO
                            }
                        }, [i("span", {
                            staticClass: "unit"
                        }, [e._v(e._s(o.duration) + " " + e._s(e.durationType))]), e._v(" "), i("span", {
                            staticClass: "price-orig"
                        }, [e._v("$" + e._s(o.price_orig))])]), e._v(" "), e.clickBuyButtonType !== e.BUY_TYPE.TTS ? i("span", {
                            staticClass: "single-price"
                        }, [e._v("$" + e._s(o.value.toFixed(2)) + " " + e._s(e.singleType))]) : e._e()])])
                    })), e._v(" "), i("div", {
                        staticClass: "sst-content"
                    }, [i("p", {
                        staticClass: "sst-title"
                    }, [e._v("\n              " + e._s(e.PRICING_TEXT.NAME) + "\n              "), i("el-tooltip", {
                        staticClass: "item",
                        attrs: {
                            effect: "dark",
                            content: e.pricingTips,
                            placement: "top",
                            "popper-class": "sst-title-help"
                        }
                    }, [i("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/pricing/icon16_help.svg",
                            alt: ""
                        }
                    })])], 1), e._v(" "), i("p", {
                        staticClass: "sst-details"
                    }, [e._v(e._s(e.PRICING_TEXT.DETAILS1))]), e._v(" "), e.isSubtitle || e.isTTS ? i("p", {
                        staticClass: "sst-details"
                    }, [e._v(e._s(e.PRICING_TEXT.DETAILS2))]) : e._e(), e._v(" "), e.isSubtitle ? i("p", {
                        staticClass: "sst-details"
                    }, [e._v(e._s(e.PRICING_TEXT.DETAILS3))]) : e._e()])], 2) : e._e(), e._v(" "), e._l(e.PRICING_DATA, (function(o, t) {
                        return i("div", {
                            key: t,
                            staticClass: "content",
                            class: {
                                "subtitle-content": e.isSingleShow, "content-none-login": e.isLogin && 0 === t && 0 !== e.userInfo.level, basic: 1 === t || 2 === t && e.isSingleShow, "basic-border": e.isSingleShow, "content-none": e.isSingleShow && 2 !== t && t !== e.userInfo.level + 1 || e.isOnlyShowSttPricing, "ml-4": 1 === t && 0 !== e.ml
                            },
                            style: {
                                width: e.contentWidth + "px"
                            }
                        }, [i("div", {
                            staticClass: "level",
                            class: o.id
                        }, [i("p", [e._v(e._s(o.id.toLocaleUpperCase()))])]), e._v(" "), i("div", {
                            staticClass: "prize",
                            class: {
                                "subtitle-prize": e.isSingleShow
                            }
                        }, [i("p", {
                            staticClass: "month"
                        }, [e._v(e._s(o[e.curType].price) + "\n              "), e.userInfo.level !== e.USER_STATUS.FREE && e.userInfo.level !== e.USER_STATUS.NOT_LOGIN || 0 !== t ? i("span", [e._v("\n                " + e._s(e.lang.PricingPanel.Month) + "\n              ")]) : e._e()]), e._v(" "), i("p", {
                            staticClass: "annual",
                            class: {
                                none: "Monthly" === e.curType || 0 === t && !e.isLogin || 0 === t && e.userInfo.level === e.USER_STATUS.FREE
                            }
                        }, [e._v("\n              " + e._s(e.lang.PricingPanel.BilledAnnually.replace("xxx", o.Annually.priceMo)) + "\n            ")]), e._v(" "), e.isLogin && e.userInfo.level === t && !e.isSingleShow ? i("p", {
                            staticClass: "cur-plan"
                        }, [e._v("\n              " + e._s(e.lang.PricingPanel.CurPlan) + "\n            ")]) : e.isLogin || "free" !== o.id ? i("Button", {
                            attrs: {
                                className: "pricing big-pricing-button"
                            },
                            nativeOn: {
                                click: function(i) {
                                    return e.buyNow(o[e.curType].url, e.curType, o.id, o[e.curType].convertUrl)
                                }
                            }
                        }, [i("span", [e._v(e._s(e.lang.PricingPanel.BuyNow))])]) : i("Button", {
                            attrs: {
                                className: "normal big-pricing-button"
                            },
                            nativeOn: {
                                click: function(o) {
                                    return e.signUp("signup", o)
                                }
                            }
                        }, [i("span", [e._v(e._s(e.lang.PricingPanel.SignUp))])])], 1), e._v(" "), e._l(e.PRICING_DATA_URL_NAME, (function(t, r) {
                            return i("div", {
                                key: r,
                                staticClass: "details"
                            }, [i("p", {
                                staticClass: "details-title"
                            }, [e._v(e._s(o[e.curContentType][t].id))]), e._v(" "), e._l(o[e.curContentType][t].content, (function(o, t) {
                                return i("p", {
                                    key: t,
                                    staticClass: "details-content",
                                    domProps: {
                                        innerHTML: e._s(o)
                                    }
                                })
                            }))], 2)
                        }))], 2)
                    }))], 2)]), e._v(" "), i("div", {
                        staticClass: "features",
                        style: {
                            left: (e.pricingBoxWidth - 139) / 2 + "px"
                        },
                        on: {
                            click: e.goPlan
                        }
                    }, [e._v(e._s(e.lang.PricingPanel.Features))])]) : e._e(), e._v(" "), e.isConfirm ? i("div", {
                        staticClass: "is-confirm"
                    }, [i("div", {
                        staticClass: "confirm-header"
                    }, [i("img", {
                        staticClass: "close",
                        attrs: {
                            src: "https://www.media.io/imagesV4/icon24_close.svg",
                            alt: ""
                        },
                        on: {
                            click: function(o) {
                                return e.closeConfirm("close")
                            }
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "header-title"
                    }, [i("img", {
                        attrs: {
                            src: "https://www.media.io/imagesV4/pricing/icon48_pricing.svg",
                            alt: ""
                        }
                    }), e._v(" "), e.isPurchased ? i("p", [e._v(e._s(e.lang.PricingPanel.PurchasedClick))]) : e._e(), e._v(" "), e.isPurchased ? e._e() : i("div", {
                        staticClass: "cur-plan"
                    }, [i("p", [e._v("\n            " + e._s(e.upgradedUserInfo[e.upgradedType].title) + "\n            "), i("span", {
                        staticClass: "plan"
                    }, [e._v("\n              " + e._s(e.upgradedUserInfo[e.upgradedType].info) + "\n            ")])]), e._v(" "), e.userInfo.level === e.USER_STATUS.FREE || e.isSubtitle || e.isBG || e.isTTS ? e._e() : i("p", {
                        staticClass: "time"
                    }, [e._v("\n            " + e._s(e.lang.PricingPanel.ExpiredTime.replace("xxx", e.userInfo.expired_time)) + "\n          ")])])])]), e._v(" "), i("div", {
                        staticClass: "confirm-bottom"
                    }, [e.isPurchased ? e._e() : i("p", [e._v(e._s(e.lang.PricingPanel.RefreshTips) + "\n        "), i("img", {
                        staticClass: "refresh",
                        class: {
                            refreshing: e.isRefreshing
                        },
                        attrs: {
                            src: "https://www.media.io/imagesV4/pricing/icon24_refresh.svg",
                            alt: ""
                        },
                        on: {
                            click: function(o) {
                                return e.refreshUserInfo("click")
                            }
                        }
                    })]), e._v(" "), e.isPurchased ? i("Button", {
                        attrs: {
                            className: "basic"
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.closeConfirm("no")
                            }
                        }
                    }, [e._v("\n        " + e._s(e.lang.PricingPanel.No) + "\n      ")]) : e._e(), e._v(" "), e.isPurchased ? i("Button", {
                        attrs: {
                            className: "base"
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.confirmUserInfo.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n        " + e._s(e.lang.PricingPanel.Yes) + "\n      ")]) : e._e(), e._v(" "), e.isPurchased ? e._e() : i("Button", {
                        attrs: {
                            className: "base"
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.closeConfirm("gotit")
                            }
                        }
                    }, [e._v("\n        " + e._s(e.lang.PricingPanel.GotIt) + "\n      ")])], 1)]) : e._e()])
                }), [], !1, null, null, null).exports,
                G = c.a.pangLang,
                j = "de5534a3d7f39862ef7c3a50ceae7856",
                q = new Map,
                Y = function(e) {
                    return new Promise((function(o, i) {
                        var t = document.querySelectorAll("script"),
                            r = Array.from(t).filter((function(o) {
                                return o.src === e
                            }))[0];
                        if (!r) {
                            var n;
                            (r = document.createElement("script")).src = e;
                            var a = document.getElementsByTagName("script")[0];
                            null === (n = a.parentNode) || void 0 === n || n.insertBefore(r, a)
                        }
                        "load" === q.get(e) && (console.log("script has load"), o(1)), r.addEventListener("load", (function() {
                            console.log("load", e), q.set(e, "load"), o(1)
                        })), r.addEventListener("error", (function() {
                            i(new Error("load error"))
                        }))
                    }))
                },
                H = !1,
                K = {
                    name: "ChromeLogin",
                    mixins: [b.a],
                    data: function() {
                        return {
                            isPopup: !0
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return a()(u.a.mark((function o() {
                            var i, t, r, n, a, s;
                            return u.a.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (console.log("chrome login: function call"), console.log("isLogin hee", e.isLogin, Boolean(localStorage.getItem("token"))), !H) {
                                            o.next = 4;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 4:
                                        if (!(e.isLogin || Boolean(localStorage.getItem("token")))) {
                                            o.next = 7;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 7:
                                        if ("__chrome_login_auth_code", !(i = localStorage.getItem("__chrome_login_auth_code"))) {
                                            o.next = 13;
                                            break
                                        }
                                        return localStorage.removeItem("__chrome_login_auth_code"), e.loginButton(i), o.abrupt("return");
                                    case 13:
                                        return "https://dc-static.wondershare.cc/account_center/google-sdk.js", t = encodeURIComponent(window.origin), r = encodeURIComponent(window.location.href), n = "https://accounts.wondershare.com/v3/user/oauth-client/authorize?register_mode=4&app_key=".concat(j, "&redirect_uri=").concat(t, "%2Fapp_static%2Fwsid3.0.html%3Fchrome_login%3D1%26redirect%3D").concat(r, "&scope=user&lang=en&source=38&product_id=14530&response_type=code&mode=1"), a = "https://accounts.wondershare.com/v3/user/oauth-client/authorize?register_mode=4&app_key=".concat(j, "&redirect_uri=").concat(t, "%2Fapp_static%2Fwsid3.0.html%3Fchrome_login%3D1%26redirect%3D").concat(r, "&scope=user&lang=en&source=38&product_id=14530&response_type=code&mode=1"), s = "122557528937-hk3vjkcjih2rpcc8j793klpl478ro9om.apps.googleusercontent.com", o.next = 21, Y("https://dc-static.wondershare.cc/account_center/google-sdk.js");
                                    case 21:
                                        if (!(e.isLogin || Boolean(localStorage.getItem("token")))) {
                                            o.next = 24;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 24:
                                        window.loadDom(n, a, s), H = !0, h.a.$on("loginsuccess", (function() {
                                            (console.log("login success changed"), e.isLogin || Boolean(localStorage.getItem("token"))) && [document.querySelector("#g_id_onload"), document.querySelector("#credential_picker_container")].forEach((function(e) {
                                                var o;
                                                e && (null === (o = e.parentElement) || void 0 === o || o.removeChild(e))
                                            }))
                                        }));
                                    case 27:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    methods: {
                        loginButton: function(e) {
                            var o = this;
                            $.ajax({
                                type: "POST",
                                data: {
                                    auth_code: e,
                                    code: window.wondershare_countries || null,
                                    lang: G
                                },
                                url: this.actionServers + "/v1/sso/login",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                crossDomain: !0,
                                success: function(e) {
                                    0 === e.code ? (window.localStorage.setItem("token", e.data.token), !0 === o.remember ? (obj.remember = o.remember, o.$cookies.set("os", obj, "1D")) : o.$cookies.remove("os"), o.$cookies.set("ou", e.data.token, "1D"), 1 === e.data.is_new && ("developer.io" === window.wondershareEnv ? ("APIPrice" === o.typeLoginup && window.gtag("event", "User_Email", {
                                        event_category: "Pricing",
                                        event_label: e.data.email
                                    }), "userInfoSignUp" === o.typeLoginup && window.gtag("event", "Sign-up", {
                                        event_category: "Navigation",
                                        event_label: e.data.email
                                    }), "GetAPIKey" === o.typeLoginup && window.gtag("event", "User_Email", {
                                        event_category: "Get-API-Key",
                                        event_label: e.data.email
                                    })) : gtm.sendGTM({
                                        event: "User_Email",
                                        category: "Account",
                                        action: "User_Email",
                                        eventLabel: e.data.email
                                    })), o.isPopup ? h.a.$emit("loginsuccess") : window.location.href = "en" === G ? "/" : "/" + G) : (!o.opener && o.$emit("loginclose", e.msg), o.opener && h.a.$emit("loginclose", e.msg))
                                }
                            })
                        }
                    }
                },
                Q = Object(y.a)(K, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("div")
                }), [], !1, null, null, null).exports;

            function J(e, o) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    o && (t = t.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), i.push.apply(i, t)
                }
                return i
            }

            function Z(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var i = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? J(Object(i), !0).forEach((function(o) {
                        r()(e, o, i[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : J(Object(i)).forEach((function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o))
                    }))
                }
                return e
            }
            var X = c.a.pangLang,
                ee = c.a.lang,
                oe = {
                    name: "UserInfo",
                    props: {
                        parentProp: String
                    },
                    mixins: [x.a, b.a],
                    components: {
                        AccountTips: T.default,
                        HeaderInfo: E,
                        MoreSubtitle: k,
                        Pricing: N,
                        "el-popover": l.a,
                        ChromeLogin: Q
                    },
                    data: function() {
                        return {
                            isLoading: !0,
                            userInfo: {
                                email: "",
                                name: "",
                                token: "",
                                level: 0
                            },
                            userVip: !1,
                            actionServers: "https://account.media.io",
                            kpAccount: "https://account.wondershare.com/app226591997377992",
                            langText: "",
                            signinHref: "",
                            signupHref: "",
                            isDeveloper: "developer.io" === window.wondershareEnv,
                            langPage: X,
                            isfree: "zh" === X,
                            navText5: null,
                            iso_codes: ["IN", "PK", "ID", "SA", "BR", "TN", "SY", "QA", "OM", "MA", "MR", "LY", "LB", "KW", "JO", "EG", "BH", "DZ"],
                            page: v.b,
                            isMsStore: !1,
                            TenSecondsEditorDirect: z.b,
                            refreshing: !1
                        }
                    },
                    computed: {
                        hasFree: function() {
                            return ["watermark-remover", "add-watermark-to-video"].includes(this.page) && "editor" === this.parentProp && !this.userVip && !this.isDeveloper
                        },
                        accountPopup: function() {
                            return f.a.state.accountPopup
                        },
                        type: function() {
                            return f.a.state.type
                        },
                        action: function() {
                            return f.a.state.action
                        },
                        accountPopupHeader: function() {
                            return f.a.state.accountPopupHeader
                        }
                    },
                    created: function() {
                        var e = this;
                        return a()(u.a.mark((function o() {
                            var t, r, n;
                            return u.a.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (e.$nextTick((function() {
                                                ee = i(253)("./".concat(X)).default || c.a.lang, e.langText = ee.nav
                                            })), (t = e.getRequest()) && t.token ? (e.$cookies.set("ou", t.token), r = setInterval(function() {
                                                this.userInfo.token = t.token, this.userInfo.token && (this.getUser("index"), clearInterval(r))
                                            }.bind(e), 2e3)) : (e.userInfo.token = e.$cookies.get("ou"), n = setInterval(function() {
                                                this.userInfo.token = this.$cookies.get("ou"), this.userInfo.token && (this.getUser(), clearInterval(n))
                                            }.bind(e), 2e3)), e.kpAccount = "".concat("zh" === X ? "https://accounts.wondershare.cn" : "https://accounts.wondershare.com", "/web/overview"), !(["/video-converter.html", "/audio-converter.html", "/image-converter.html", "/gif-maker.html", "/online-video-compressor.html", "audio-compressor.html", "/image-compressor.html"].includes(window.location.pathname) || window.location.pathname.match(/convert/))) {
                                            o.next = 14;
                                            break
                                        }
                                        if (!e.$cookies.get("ou")) {
                                            o.next = 13;
                                            break
                                        }
                                        return o.next = 9, Object(F.i)();
                                    case 9:
                                        o.sent.data.level === S.f.FREE && e.setAdd(), o.next = 14;
                                        break;
                                    case 13:
                                        e.setAdd();
                                    case 14:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    mounted: function() {
                        var e = this;
                        window.localStorage.getItem("token") && this.getUser(), "en" === X ? (this.signinHref = "/signin.html", this.signupHref = "/signup.html") : (this.signinHref = "/" + X + "/signin.html", this.signupHref = "/" + X + "/signup.html"), h.a.$on("updataVip", this.updataVip), ("inclowdz" === window.iframe_env || "wcc_iframe" === window.wcc_iframe_env) && (window.inclowdz_Logout = this.Logout.bind(this), window.hadInclowdzLogout && window.inclowdz_Logout()), this.isMsStore = !!sessionStorage.getItem("close-desktop"), this.isMsStore || document.body.addEventListener("closeDesktop", (function() {
                            e.isMsStore = !0
                        }))
                    },
                    methods: {
                        setAdd: function() {
                            var e = document.querySelector("head"),
                                o = document.createElement("script");
                            e && (o.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9822591576791457", o.crossOrigin = "anonymous", o.async = !0, e.appendChild(o))
                        },
                        getToken: function() {
                            this.getUser(), this.isLoading = !1
                        },
                        routeMyAccount: function() {
                            c.a.windowLocationHref("https://developer.media.io/api-account.html")
                        },
                        routeUserAccountCenter: function() {
                            p.a.sendGTM({
                                category: "Public",
                                action: "Click_Account_Center"
                            }), window.open("https://accounts.wondershare.com/web/overview")
                        },
                        convertedFiles: function() {
                            var e = this,
                                o = this.$cookies.get("conver_task_ids"),
                                i = this.$cookies.get("Converted_Files_Times") || 0;
                            this.$cookies.set("Converted_Files_Times", 1 * i + 1, "1D"), p.a.sendGTM({
                                category: "Convert_Home",
                                action: "Converted_Files",
                                eventLabel: 1 * i + 1
                            }), o ? (o = o ? JSON.parse(o) : [], $.ajax({
                                type: "POST",
                                url: g.actionServers + g.bindConvertedFiles,
                                xhrFields: {
                                    withCredentials: !0
                                },
                                headers: {
                                    Authorization: "Bearer ".concat(_this.userInfo.token)
                                },
                                crossDomain: !0,
                                data: {
                                    task_id: o.join(",")
                                },
                                success: function(o) {
                                    0 === o.code ? (e.$cookies.remove("conver_task_ids"), c.a.windowLocationHref("https://www.media.io/converted-files.html")) : swal({
                                        text: o.msg
                                    })
                                }
                            })) : c.a.windowLocationHref("https://www.media.io/converted-files.html")
                        },
                        updataVip: function(e) {
                            this.userVip = e
                        },
                        loginButton: function(e, o) {
                            o && o.preventDefault(), this.login_sign_gtag(e), h.a.$emit("loginButton", {
                                action: e,
                                accountPopupHeader: "",
                                type: "userInfoSignUp"
                            })
                        },
                        login_sign_gtag: function(e) {
                            if (this.isDeveloper) {
                                if ("signin" === e) {
                                    var o = +(c.a.getCookie("Navigation_LogIn_Count") || 0);
                                    c.a.setCookie("Navigation_LogIn_Count", o + 1), window.gtag("event", "Log-in", {
                                        event_category: "Navigation",
                                        event_label: o + 1
                                    })
                                }
                                if ("signup" === e) {
                                    var i = +(c.a.getCookie("Navigation_SignUp_Count") || 0);
                                    c.a.setCookie("Navigation_SignUp_Count", i + 1), window.gtag("event", "Sign-up", {
                                        event_category: "Navigation",
                                        event_label: i + 1
                                    })
                                }
                            }
                        },
                        getUser: function(e) {
                            var o = this;
                            return a()(u.a.mark((function i() {
                                var t, r, n;
                                return u.a.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if ((t = o).userInfo.token) {
                                                i.next = 3;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 3:
                                            return i.next = 5, Object(F.g)(t.userInfo.token);
                                        case 5:
                                            r = i.sent, n = r.data, o.refreshing = !0, $.ajax({
                                                type: "GET",
                                                url: t.actionServers + "/v1/user",
                                                xhrFields: {
                                                    withCredentials: !0
                                                },
                                                headers: {
                                                    Authorization: "Bearer ".concat(t.userInfo.token)
                                                },
                                                crossDomain: !0,
                                                success: function() {
                                                    var o = a()(u.a.mark((function o(i) {
                                                        var r, a, s, l, d, c, h, g, v, T, x, b, w, C;
                                                        return u.a.wrap((function(o) {
                                                            for (;;) switch (o.prev = o.next) {
                                                                case 0:
                                                                    if (window.history.pushState({
                                                                            status: 0
                                                                        }, "", encodeURI(location.origin + location.pathname)), 0 !== i.code) {
                                                                        o.next = 21;
                                                                        break
                                                                    }
                                                                    return Object(m.b)("user_info", {
                                                                        uid: Number(i.data.wsid || "0")
                                                                    }), p.a.sendGTM({
                                                                        category: "login",
                                                                        action: "",
                                                                        eventLabel: "login_success"
                                                                    }), o.next = 6, Object(F.d)();
                                                                case 6:
                                                                    return r = o.sent, o.next = 9, Object(F.h)();
                                                                case 9:
                                                                    a = o.sent, s = i.data, l = s.avatar, d = s.email, c = s.firstname, h = s.mobile, g = s.expired_time, v = s.capacity_total, T = s.capacity_used, x = s.wsid, b = s.uuid, s.token, w = s.level, C = s.is_designer, t.userInfo = Z(Z({
                                                                        subTitle: n,
                                                                        avatar: l,
                                                                        email: d,
                                                                        firstname: c,
                                                                        mobile: h,
                                                                        expired_time: g,
                                                                        capacity_total: v,
                                                                        capacity_used: T,
                                                                        wsid: x,
                                                                        uuid: b,
                                                                        credits: r.data,
                                                                        level: w,
                                                                        is_designer: C
                                                                    }, t.userInfo), {}, {
                                                                        tts: a.data
                                                                    }), t.userInfo.name = i.data.firstname ? i.data.firstname : i.data.email || i.data.mobile, t.userInfo.level = i.data.level, f.a.commit("updateUserInfo", t.userInfo), t.$cookies.set("email", i.data.email), t.$cookies.set("wsid", i.data.wsid), t.$cookies.set("uid", i.data.uuid), e && (location.href = "/"), o.next = 23;
                                                                    break;
                                                                case 21:
                                                                    console.log(t.userInfo), 1017 === i.code ? (t.removeCookies(), t.wsidLogout()) : swal({
                                                                        text: i.msg
                                                                    });
                                                                case 23:
                                                                    t.refreshing = !1;
                                                                case 24:
                                                                case "end":
                                                                    return o.stop()
                                                            }
                                                        }), o)
                                                    })));
                                                    return function(e) {
                                                        return o.apply(this, arguments)
                                                    }
                                                }()
                                            });
                                        case 9:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i)
                            })))()
                        },
                        removeCookies: function() {
                            this.$cookies.remove("ou"), this.$cookies.remove("ou", null, "www.media.io"), this.$cookies.remove("email"), this.$cookies.remove("wsid"), this.$cookies.remove("verify"), this.$cookies.remove("uid"), window.localStorage.removeItem("token"), this.Logout()
                        },
                        Logout: function() {
                            var e = this;
                            e.userInfo.token && $.ajax({
                                type: "GET",
                                url: this.actionServers + "/v1/sso/logout?token=" + e.userInfo.token + "&t=" + Date.now(),
                                xhrFields: {
                                    withCredentials: !0
                                },
                                headers: {
                                    Authorization: "Bearer ".concat(e.userInfo.token)
                                },
                                crossDomain: !0,
                                success: function(o) {
                                    0 === o.code ? (window.localStorage.removeItem("token"), e.removeCookies(), e.wsidLogout()) : swal({
                                        text: o.msg
                                    })
                                }
                            })
                        },
                        wsidLogout: function() {
                            window.location.href = "".concat("zh" === X ? "https://accounts.wondershare.cn" : "https://accounts.wondershare.com", "/v3/user/oauth/logout?redirect=").concat(this.isDeveloper ? window.location.origin : window.location.href)
                        },
                        getRequest: function() {
                            var e = location.search,
                                o = new Object;
                            if (-1 != e.indexOf("?"))
                                for (var i = e.substr(1).split("&"), t = 0; t < i.length; t++) o[i[t].split("=")[0]] = decodeURI(i[t].split("=")[1]);
                            return o
                        }
                    }
                },
                ie = Object(y.a)(oe, (function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", [e.userInfo.token ? i("div", {
                        staticClass: "ws-user-center"
                    }, [i("div", {
                        staticClass: "Hide1280"
                    }, [e.hasFree && "en" === e.langPage ? [i("a", {
                        staticClass: "wsc-header2020-navbar-linkBtn-new wondershare-primary-button",
                        attrs: {
                            title: "Download the desktop to process videos in batches",
                            href: "https://www.media.io/video-converter-desktop.html"
                        }
                    }, [e._v("\n          " + e._s(e.langText.tryitfree) + "\n        ")])] : e._e(), e._v(" "), i("div", {
                        staticClass: "dropdown d-inline-block align-middle"
                    }, [i("el-popover", {
                        attrs: {
                            placement: "bottom",
                            trigger: "click",
                            width: "352",
                            content: "this is content, this is content, this is content",
                            "popper-class": "user-info-popover"
                        }
                    }, [i("button", {
                        staticClass: "btn user-info-dropdown",
                        attrs: {
                            slot: "reference"
                        },
                        slot: "reference"
                    }, [e.userInfo.avatar ? i("img", {
                        staticClass: "avtr-icon",
                        attrs: {
                            src: e.userInfo.avatar,
                            alt: ""
                        },
                        on: {
                            click: e.getToken
                        }
                    }) : i("img", {
                        staticClass: "avtr-icon",
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/avatar.svg"
                        },
                        on: {
                            click: e.getToken
                        }
                    })]), e._v(" "), i("div", {
                        staticClass: "user-info-dropdown-menu"
                    }, [i("header-info", {
                        attrs: {
                            refreshing: e.refreshing
                        },
                        on: {
                            Logout: e.Logout,
                            getUser: e.getUser
                        }
                    })], 1)])], 1)], 2), e._v(" "), i("div", {
                        staticClass: "Show1280 mobile-user-info"
                    }, [i("div", {
                        staticClass: "mobile-avatar-field"
                    }, [i("div", [e.userInfo.avatar ? i("img", {
                        staticClass: "avtr-icon",
                        attrs: {
                            src: e.userInfo.avatar,
                            alt: ""
                        },
                        on: {
                            click: e.getToken
                        }
                    }) : i("img", {
                        staticClass: "avtr-icon",
                        attrs: {
                            src: "https://www.media.io/imagesV4/user/avatar.svg"
                        },
                        on: {
                            click: e.getToken
                        }
                    })]), e._v(" "), i("div", {
                        staticClass: "mobile-avatar-name"
                    }, [e._v("\n        " + e._s(e.userInfo.name) + "\n        ")])]), e._v(" "), i("div", {
                        staticClass: "mobile-option-field"
                    }, [i("div", {
                        staticClass: "mobile-option-field-wrapper"
                    }, [e.isMsStore ? e._e() : i("div", {
                        staticClass: "mobile-option account-btn"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: e.routeUserAccountCenter
                        }
                    }, [e._v(e._s(e.langText.myAccount) + "\n          ")])]), e._v(" "), i("div", {
                        staticClass: "mobile-option logout-btn"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(o) {
                                return e.Logout()
                            }
                        }
                    }, [e._v(e._s(e.langText.navText2))])])])])])]) : i("div", {
                        class: ["theme-" + e.LOGIN_THEME]
                    }, [i("div", {
                        staticClass: "Hide1280"
                    }, [i("div", {
                        staticStyle: {
                            display: "flex"
                        }
                    }, [i("a", {
                        staticClass: "signin wsc-header2020-navbar-linkBtn-new mr-3",
                        attrs: {
                            href: e.signinHref
                        },
                        on: {
                            click: function(o) {
                                return e.loginButton("signin", o)
                            }
                        }
                    }, [e._v("\n          " + e._s(e.langText.navText3) + "\n        ")]), e._v(" "), e.hasFree ? [i("a", {
                        staticClass: "wsc-header2020-navbar-linkBtn-new wondershare-primary-button mr-1",
                        attrs: {
                            title: "Download the desktop to process videos in batches",
                            href: "https://www.media.io/video-converter-desktop.html",
                            target: "_blank"
                        }
                    }, [e._v("\n            " + e._s(e.langText.tryitfree) + "\n          ")])] : [i("a", {
                        staticClass: "signup wsc-header2020-navbar-linkBtn-new wondershare-primary-button",
                        attrs: {
                            href: e.signupHref
                        },
                        on: {
                            click: function(o) {
                                return e.loginButton("signup", o)
                            }
                        }
                    }, [e._v(e._s(e.langText.navText4))])]], 2)]), e._v(" "), i("div", {
                        staticClass: "Show1280"
                    }, [i("div", {
                        staticClass: "mobile-login-field"
                    }, [i("a", {
                        staticClass: "mobile-signin",
                        attrs: {
                            href: e.signinHref
                        },
                        on: {
                            click: function(o) {
                                return e.loginButton("signin", o)
                            }
                        }
                    }, [i("span", {
                        staticClass: "wsc-header2020-navbar-linkBtn-new wondershare-primary-button"
                    }, [e._v(e._s(e.langText.navText3))])]), e._v(" "), i("a", {
                        staticClass: "mobile-signup",
                        attrs: {
                            href: e.signupHref
                        },
                        on: {
                            click: function(o) {
                                return e.loginButton("signup", o)
                            }
                        }
                    }, [i("span", {
                        staticClass: "wsc-header2020-navbar-linkBtn-new wondershare-primary-button"
                    }, [e._v(e._s(e.langText.navText4))])])])])]), e._v(" "), i("account-tips", {
                        attrs: {
                            "account-popup-header": e.accountPopupHeader,
                            "account-popup": e.accountPopup,
                            action: e.action,
                            type: e.type
                        },
                        on: {
                            loginsuccess: e.loginsuccess,
                            loginclose: e.loginclose
                        }
                    }), e._v(" "), i("editor-direct", {
                        attrs: {
                            dialogVisible: e.dialogVisible
                        },
                        on: {
                            close: e.dialogStatus
                        }
                    }), e._v(" "), i("Pricing"), e._v(" "), i("ChromeLogin")], 1)
                }), [], !1, null, "439a9fe9", null);
            o.a = ie.exports
        },
        31: function(e, o, i) {
            "use strict";
            i.r(o);
            var t = i(13),
                r = i(285),
                n = i(7),
                a = i.n(n);
            t.default.config.productionTip = !1, t.default.use(a.a);
            var s = document.getElementById("app_userInfo").dataset.loginTheme || "default";
            t.default.mixin({
                data: function() {
                    return {
                        LOGIN_THEME: s
                    }
                }
            }), document.getElementById("app_userInfo") && new t.default({
                render: function(e) {
                    return e(r.a)
                }
            }).$mount("#app_userInfo")
        },
        68: function(e, o, i) {
            "use strict";

            function t(e, o, i, t, r, n, a, s) {
                var l, d = "function" == typeof e ? e.options : e;
                if (o && (d.render = o, d.staticRenderFns = i, d._compiled = !0), t && (d.functional = !0), n && (d._scopeId = "data-v-" + n), a ? (l = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                    }, d._ssrRegister = l) : r && (l = s ? function() {
                        r.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : r), l)
                    if (d.functional) {
                        d._injectStyles = l;
                        var u = d.render;
                        d.render = function(e, o) {
                            return l.call(o), u(e, o)
                        }
                    } else {
                        var c = d.beforeCreate;
                        d.beforeCreate = c ? [].concat(c, l) : [l]
                    }
                return {
                    exports: e,
                    options: d
                }
            }
            i.d(o, "a", (function() {
                return t
            }))
        },
        69: function(e, o, i) {
            "use strict";
            i.d(o, "c", (function() {
                return r
            })), i.d(o, "b", (function() {
                return n
            })), i.d(o, "a", (function() {
                return a
            }));
            var t = i(5),
                r = "5.0",
                n = t.a.getPage(),
                a = n.replace("-", "_")
        },
        70: function(e, o, i) {
            "use strict";
            i.d(o, "b", (function() {
                return a
            })), i.d(o, "c", (function() {
                return s
            })), i.d(o, "e", (function() {
                return l
            })), i.d(o, "f", (function() {
                return t
            })), i.d(o, "d", (function() {
                return r
            })), i.d(o, "a", (function() {
                return d
            }));
            var t, r, n = i(5).a.lang,
                a = [{
                    id: "free",
                    Monthly: {
                        price: n.PricingEnumFree.ZeroPrice
                    },
                    Annually: {
                        price: n.PricingEnumFree.ZeroPrice
                    },
                    tips: [{
                        id: "Watermark Remover",
                        pathname: "/app/removeWatermark",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>100MB</strong>", "<strong>2</strong> " + n.PricingEnumFree.CompressFreeText3]
                    }, {
                        id: n.PricingEnumFree.Compress,
                        pathname: "/app/video-converter",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>100MB</strong> " + n.PricingEnumFree.CompressFreeText1, n.PricingEnumFree.UploadText1 + " <strong>500MB</strong> " + n.PricingEnumFree.CompressFreeText2, "<strong>2</strong> " + n.PricingEnumFree.CompressFreeText3]
                    }, {
                        id: n.PricingEnumFree.VideoEditor,
                        pathname: "/editor",
                        content: ["<strong>10</strong> " + n.PricingEnumFree.VideoEditorFreeText3, "<strong>2000</strong> " + n.PricingEnumFree.VideoEditorFreeText4]
                    }, {
                        id: n.PricingEnumFree.AudioEditor,
                        pathname: "/app/audio-tools",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>20MB</strong>"]
                    }],
                    lite: [{
                        id: n.PricingEnumFree.SpeechToText,
                        content: ["<strong>2</strong> ${lang.PricingEnumFree.SpeechToTextFreeText1}", n.PricingEnumFree.SpeechToTextFreeText2, n.PricingEnumFree.SpeechToTextFreeText3]
                    }, {
                        id: n.PricingEnumFree.AudioEditor,
                        content: ["<strong>100,000</strong> " + n.PricingEnumFree.VideoEditorLiteFreeText4, "<strong>1080p</strong> " + n.PricingEnumFree.VideoEditorLiteFreeText5]
                    }, {
                        id: n.PricingEnumFree.Convert,
                        content: ["<strong>1.5GB</strong> " + n.PricingEnumFree.ConvertFreeText1, "<strong>Unlimited</strong> times"]
                    }]
                }, {
                    id: "basic",
                    Monthly: {
                        price: n.PricingEnumBasic.MonthlyPrice,
                        url: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=294&sub_lid=0&currency=USD&language=English&verify=4c3bb50bf909cb7f333c54f832e8e754",
                        convertUrl: "https://store.media.io/index.php?method=index&submod=checkout&pid=5903&license_id=3871&sub_lid=0&\n      currency=USD&language=English&verify=65c8a70bb723930084af5c5bebb38d7a"
                    },
                    Annually: {
                        price: n.PricingEnumBasic.AnnuallyPerPrice,
                        priceMo: n.PricingEnumBasic.AnnuallyToTalPrice,
                        priceSave: n.PricingEnumBasic.SaveUp,
                        url: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=297&sub_lid=0&currency=USD&language=English&verify=8794fcdb210d1a58d3f90b1dede2733c",
                        convertUrl: "https://store.media.io/index.php?method=index&submod=checkout&pid=5903&license_id=3873&sub_lid=0\n      &currency=USD&language=English&verify=26bbe16a3a5377e41127e87e81bd35a7"
                    },
                    tips: [{
                        id: "Watermark Remover",
                        pathname: "/app/removeWatermark",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>1.5GB</strong>", n.PricingEnumFree.UnlimitedTimes]
                    }, {
                        id: n.PricingEnumFree.Compress,
                        pathname: "/app/video-converter",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>1.5GB</strong> " + n.PricingEnumFree.CompressFreeText1, n.PricingEnumFree.UploadText1 + " <strong>1.5GB</strong> " + n.PricingEnumFree.CompressFreeText2, n.PricingEnumFree.UnlimitedTimes]
                    }, {
                        id: n.PricingEnumFree.VideoEditor,
                        pathname: "/editor",
                        content: ["<strong>2</strong> " + n.PricingEnumBasic.VideoEditorFreeText4, "<strong>100,000</strong> " + n.PricingEnumFree.VideoEditorLiteFreeText4]
                    }, {
                        id: n.PricingEnumFree.AudioEditor,
                        pathname: "/app/audio-tools",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>1.5GB</strong>"]
                    }],
                    lite: [{
                        id: n.PricingEnumFree.SpeechToText,
                        content: ["<strong>2</strong> " + n.PricingEnumFree.SpeechToTextFreeText1, n.PricingEnumFree.SpeechToTextFreeText2, n.PricingEnumFree.SpeechToTextFreeText3]
                    }, {
                        id: n.PricingEnumFree.AudioEditor,
                        content: ["<strong>100,000</strong> " + n.PricingEnumFree.VideoEditorLiteFreeText4, "<strong>1080p</strong>" + n.PricingEnumFree.VideoEditorLiteFreeText5]
                    }, {
                        id: n.PricingEnumFree.Convert,
                        content: ["<strong>1.5GB</strong> " + n.PricingEnumFree.ConvertFreeText1, "<strong>Unlimited</strong> " + n.PricingEnumFree.LimitedTime]
                    }]
                }, {
                    id: "pro",
                    Monthly: {
                        price: n.PricingEnumPro.MonthlyPrice,
                        url: "https://store.media.io/index.php?method=index&submod=checkout&pid=5903&license_id=3735&sub_lid=0&currency=USD&language=English&verify=3695bbb47716aae5c93c1e39231da813",
                        convertUrl: "https://store.media.io/index.php?method=index&submod=checkout&pid=5903&license_id=3872&sub_lid=0&\n      currency=USD&language=English&verify=6434c9335824b75d491335fffc261252"
                    },
                    Annually: {
                        price: n.PricingEnumPro.AnnuallyPerPrice,
                        priceMo: n.PricingEnumPro.AnnuallyToTalPrice,
                        priceSave: n.PricingEnumPro.priceSave,
                        url: "https://store.media.io/index.php?method=index&submod=checkout&pid=5903&license_id=3734&sub_lid=0&currency=USD&language=English&verify=4dfff6aefe6d6c56172c4998e9425c1b",
                        convertUrl: "https://store.media.io/index.php?method=index&submod=checkout&pid=5903&license_id=3874&sub_lid=0&\n      currency=USD&language=English&verify=3e208231357834a51068a337fcf5ca0c"
                    },
                    tips: [{
                        id: "Watermark Remover",
                        pathname: "/app/removeWatermark",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>2GB</strong>", n.PricingEnumFree.UnlimitedTimes]
                    }, {
                        id: n.PricingEnumFree.Compress,
                        pathname: "/app/video-converter",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>2GB</strong> " + n.PricingEnumFree.CompressFreeText1, n.PricingEnumFree.UploadText1 + " <strong>2GB</strong> " + n.PricingEnumFree.CompressFreeText2, n.PricingEnumFree.UnlimitedTimes]
                    }, {
                        id: n.PricingEnumFree.VideoEditor,
                        pathname: "/editor",
                        content: ["<strong>6</strong> " + n.PricingEnumBasic.VideoEditorFreeText4, "<strong>200,000</strong> " + n.PricingEnumFree.VideoEditorLiteFreeText4]
                    }, {
                        id: n.PricingEnumFree.AudioEditor,
                        pathname: "/app/audio-tools",
                        content: [n.PricingEnumFree.UploadText1 + " <strong>2GB</strong>"]
                    }],
                    lite: [{
                        id: n.PricingEnumFree.SpeechToText,
                        content: ["<strong>6</strong> " + n.PricingEnumFree.SpeechToTextFreeText1, n.PricingEnumFree.SpeechToTextFreeText2, n.PricingEnumFree.SpeechToTextFreeText3]
                    }, {
                        id: n.PricingEnumFree.AudioEditor,
                        content: ["<strong>200,000</strong> " + n.PricingEnumFree.VideoEditorLiteFreeText4, "<strong>1080p</strong>" + n.PricingEnumFree.VideoEditorLiteFreeText5]
                    }, {
                        id: n.PricingEnumFree.Convert,
                        content: ["<strong>2GB</strong> " + n.PricingEnumFree.ConvertFreeText1, "<strong>Unlimited</strong> " + n.PricingEnumFree.LimitedTime]
                    }]
                }],
                s = {
                    DEFAULT: n.PRICING_TIPS.Default,
                    CONVERTING_NUM: n.PRICING_TIPS.ConvertingNum,
                    DAY_LIMIT: n.PRICING_TIPS.DayLimit,
                    MAX_SIZE: n.PRICING_TIPS.MaxSize,
                    SUBTITLE: n.PRICING_TIPS.Subtitle,
                    CONVERT_TIPS: n.PRICING_TIPS.ConvertFileTips,
                    FILE_NUM_UPGRADE_TIPS: n.PRICING_TIPS.FileNumUpgradeTips,
                    DEFAULT_UPGRADE_TIPS: n.PRICING_TIPS.DefaultUpgradeTips,
                    CONVERT_UPGRADE_TIPS: n.PRICING_TIPS.ConvertUpgradeTips,
                    TIME_UPGRADE_TIPS: n.PRICING_TIPS.TimeUpgradeTips,
                    NOT_LOGIN_FILE_SIZE: n.PRICING_TIPS.UpgradeSignTips
                },
                l = ["/", "/video-converter.html", "/audio-converter.html", "/image-converter.html", "/video-compressor.html", "/audio-compressor.html", "/image-compressor.html", "/youtube-converter.html", "/mp4-converter.html", "/youtube-converter.html", "/mp4-converter.html", "/es/", "/es/video-converter.html", "/es/audio-converter.html", "/es/image-converter.html", "/es/video-compressor.html", "/es/audio-compressor.html", "/es/image-compressor.html", "/es/youtube-converter.html", "/es/mp4-converter.html", "/es/youtube-converter.html", "/es/mp4-converter.html", "/jp/", "/jp/video-converter.html", "/jp/audio-converter.html", "/jp/image-converter.html", "/jp/video-compressor.html", "/jp/audio-compressor.html", "/jp/image-compressor.html", "/jp/youtube-converter.html", "/jp/mp4-converter.html", "/online-video-compressor.html", "/online-video-converter.html"];
            ! function(e) {
                e[e.NOT_LOGIN = -1] = "NOT_LOGIN", e[e.FREE = 0] = "FREE", e[e.BASIC = 1] = "BASIC", e[e.PRO = 2] = "PRO"
            }(t || (t = {})),
            function(e) {
                e[e.WATERMARK = 0] = "WATERMARK", e[e.CONVERT = 1] = "CONVERT", e[e.VIDEO_EDITOR = 2] = "VIDEO_EDITOR", e[e.AUDIO_TOOLS = 3] = "AUDIO_TOOLS"
            }(r || (r = {}));
            var d = {
                Subtitle: "Subtitle",
                TTS: "TTS",
                RemoveBackground: "RemoveBackground"
            }
        },
        71: function(e, o) {
            e.exports = function(e) {
                var o = [];
                return o.toString = function() {
                    return this.map((function(o) {
                        var i = function(e, o) {
                            var i = e[1] || "",
                                t = e[3];
                            if (!t) return i;
                            if (o && "function" == typeof btoa) {
                                var r = (a = t, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                    n = t.sources.map((function(e) {
                                        return "/*# sourceURL=" + t.sourceRoot + e + " */"
                                    }));
                                return [i].concat(n).concat([r]).join("\n")
                            }
                            var a;
                            return [i].join("\n")
                        }(o, e);
                        return o[2] ? "@media " + o[2] + "{" + i + "}" : i
                    })).join("")
                }, o.i = function(e, i) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    for (var t = {}, r = 0; r < this.length; r++) {
                        var n = this[r][0];
                        "number" == typeof n && (t[n] = !0)
                    }
                    for (r = 0; r < e.length; r++) {
                        var a = e[r];
                        "number" == typeof a[0] && t[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), o.push(a))
                    }
                }, o
            }
        },
        72: function(e, o, i) {
            var t, r, n = {},
                a = (t = function() {
                    return window && document && document.all && !window.atob
                }, function() {
                    return void 0 === r && (r = t.apply(this, arguments)), r
                }),
                s = function(e) {
                    return document.querySelector(e)
                },
                l = function(e) {
                    var o = {};
                    return function(e) {
                        if ("function" == typeof e) return e();
                        if (void 0 === o[e]) {
                            var i = s.call(this, e);
                            if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                                i = i.contentDocument.head
                            } catch (e) {
                                i = null
                            }
                            o[e] = i
                        }
                        return o[e]
                    }
                }(),
                d = null,
                u = 0,
                c = [],
                p = i(159);

            function m(e, o) {
                for (var i = 0; i < e.length; i++) {
                    var t = e[i],
                        r = n[t.id];
                    if (r) {
                        r.refs++;
                        for (var a = 0; a < r.parts.length; a++) r.parts[a](t.parts[a]);
                        for (; a < t.parts.length; a++) r.parts.push(x(t.parts[a], o))
                    } else {
                        var s = [];
                        for (a = 0; a < t.parts.length; a++) s.push(x(t.parts[a], o));
                        n[t.id] = {
                            id: t.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }

            function h(e, o) {
                for (var i = [], t = {}, r = 0; r < e.length; r++) {
                    var n = e[r],
                        a = o.base ? n[0] + o.base : n[0],
                        s = {
                            css: n[1],
                            media: n[2],
                            sourceMap: n[3]
                        };
                    t[a] ? t[a].parts.push(s) : i.push(t[a] = {
                        id: a,
                        parts: [s]
                    })
                }
                return i
            }

            function g(e, o) {
                var i = l(e.insertInto);
                if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var t = c[c.length - 1];
                if ("top" === e.insertAt) t ? t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o) : i.insertBefore(o, i.firstChild), c.push(o);
                else if ("bottom" === e.insertAt) i.appendChild(o);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var r = l(e.insertInto + " " + e.insertAt.before);
                    i.insertBefore(o, r)
                }
            }

            function v(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var o = c.indexOf(e);
                o >= 0 && c.splice(o, 1)
            }

            function f(e) {
                var o = document.createElement("style");
                return e.attrs.type = "text/css", T(o, e.attrs), g(e, o), o
            }

            function T(e, o) {
                Object.keys(o).forEach((function(i) {
                    e.setAttribute(i, o[i])
                }))
            }

            function x(e, o) {
                var i, t, r, n;
                if (o.transform && e.css) {
                    if (!(n = o.transform(e.css))) return function() {};
                    e.css = n
                }
                if (o.singleton) {
                    var a = u++;
                    i = d || (d = f(o)), t = C.bind(null, i, a, !1), r = C.bind(null, i, a, !0)
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(e) {
                    var o = document.createElement("link");
                    return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", T(o, e.attrs), g(e, o), o
                }(o), t = P.bind(null, i, o), r = function() {
                    v(i), i.href && URL.revokeObjectURL(i.href)
                }) : (i = f(o), t = S.bind(null, i), r = function() {
                    v(i)
                });
                return t(e),
                    function(o) {
                        if (o) {
                            if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
                            t(e = o)
                        } else r()
                    }
            }
            e.exports = function(e, o) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (o = o || {}).attrs = "object" == typeof o.attrs ? o.attrs : {}, o.singleton || "boolean" == typeof o.singleton || (o.singleton = a()), o.insertInto || (o.insertInto = "head"), o.insertAt || (o.insertAt = "bottom");
                var i = h(e, o);
                return m(i, o),
                    function(e) {
                        for (var t = [], r = 0; r < i.length; r++) {
                            var a = i[r];
                            (s = n[a.id]).refs--, t.push(s)
                        }
                        e && m(h(e, o), o);
                        for (r = 0; r < t.length; r++) {
                            var s;
                            if (0 === (s = t[r]).refs) {
                                for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                                delete n[s.id]
                            }
                        }
                    }
            };
            var b, w = (b = [], function(e, o) {
                return b[e] = o, b.filter(Boolean).join("\n")
            });

            function C(e, o, i, t) {
                var r = i ? "" : t.css;
                if (e.styleSheet) e.styleSheet.cssText = w(o, r);
                else {
                    var n = document.createTextNode(r),
                        a = e.childNodes;
                    a[o] && e.removeChild(a[o]), a.length ? e.insertBefore(n, a[o]) : e.appendChild(n)
                }
            }

            function S(e, o) {
                var i = o.css,
                    t = o.media;
                if (t && e.setAttribute("media", t), e.styleSheet) e.styleSheet.cssText = i;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(i))
                }
            }

            function P(e, o, i) {
                var t = i.css,
                    r = i.sourceMap,
                    n = void 0 === o.convertToAbsoluteUrls && r;
                (o.convertToAbsoluteUrls || n) && (t = p(t)), r && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var a = new Blob([t], {
                        type: "text/css"
                    }),
                    s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }
        },
        73: function(e, o, i) {
            var t = i(145);
            "string" == typeof t && (t = [
                [e.i, t, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i(72)(t, r);
            t.locals && (e.exports = t.locals)
        },
        77: function(e, o, i) {
            "use strict";
            i.d(o, "k", (function() {
                return d
            })), i.d(o, "j", (function() {
                return u
            })), i.d(o, "l", (function() {
                return c
            })), i.d(o, "g", (function() {
                return p
            })), i.d(o, "f", (function() {
                return m
            })), i.d(o, "m", (function() {
                return h
            })), i.d(o, "i", (function() {
                return g
            })), i.d(o, "d", (function() {
                return v
            })), i.d(o, "h", (function() {
                return f
            })), i.d(o, "e", (function() {
                return x
            })), i.d(o, "a", (function() {
                return b
            })), i.d(o, "c", (function() {
                return w
            })), i.d(o, "b", (function() {
                return C
            }));
            var t = i(115),
                r = i(141),
                n = i.n(r),
                a = i(2),
                s = n.a.create({
                    baseURL: a.actionServers,
                    timeout: 15e3,
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            s.interceptors.request.use((function(e) {
                var o = window.localStorage.getItem("token");
                return o && (e.headers.Authorization = "Bearer " + o), e
            }), (function(e) {
                return Promise.reject(e)
            })), s.interceptors.response.use((function(e) {
                var o, i = {},
                    t = e.config;
                if (i = "get" === (null === (o = t.method) || void 0 === o ? void 0 : o.toLowerCase()) ? t.params ? "string" == typeof t.params ? JSON.parse(t.params) : t.params : i : t.data ? "string" == typeof t.data ? JSON.parse(t.data) : t.data : i, "blob" === e.request.responseType || "arraybuffer" === e.request.responseType) return Promise.resolve(e);
                var r = e.data;
                return 200 === r.code || 0 === r.code ? Promise.resolve(r) : Promise.reject(r)
            }), (function(e) {
                var o = JSON.stringify(e),
                    i = JSON.parse(o);
                return Promise.reject({
                    code: 1e4,
                    type: i.name,
                    msg: i.message
                })
            }));
            var l = s,
                d = function(e) {
                    return Object(t.a)({
                        url: "/v2/cos/token",
                        method: "post",
                        data: e
                    })
                },
                u = function(e) {
                    return Object(t.a)({
                        url: "/v2/cos/result",
                        method: "post",
                        data: e,
                        timeout: 6e5
                    })
                },
                c = function(e) {
                    return Object(t.a)({
                        baseURL: e.endpoint,
                        withCredentials: !1,
                        headers: {
                            Authorization: "bearer " + e.token,
                            "x-amz-acl": "public-read",
                            "Content-Type": "multipart/form-data"
                        },
                        url: "/" + e.bucket + "/" + e.key,
                        method: "put",
                        data: e.file,
                        timeout: 18e5,
                        onUploadProgress: e.onUploadProgress
                    })
                },
                p = function(e) {
                    return Object(t.a)({
                        url: "https://account.media.io/v1/sttVerify",
                        method: "get"
                    })
                },
                m = function() {
                    return Object(t.a)({
                        url: "v1/system-config/stt-carts"
                    })
                },
                h = function(e) {
                    return Object(t.a)({
                        url: "https://account.media.io/v1/verify",
                        params: e,
                        method: "post"
                    })
                },
                g = function() {
                    return Object(t.a)({
                        url: "https://account.media.io/v1/user",
                        method: "get"
                    })
                },
                v = function() {
                    return Object(t.a)({
                        url: "https://account.media.io/v1/cutImageVerify",
                        method: "get"
                    })
                },
                f = function() {
                    return Object(t.a)({
                        url: "https://account.media.io/v1/ttsVerify",
                        method: "get"
                    })
                },
                T = "h5.media.io" === window.location.hostname ? "https://jk-beta.media.io" : "https://jk.media.io",
                x = function() {
                    return l({
                        url: T + "/v1/storage/token",
                        method: "get"
                    })
                },
                b = function(e) {
                    return l({
                        url: T + "/v1/cps/create",
                        method: "post",
                        data: e
                    })
                },
                w = function(e) {
                    return l({
                        url: T + "/v1/cps/result/" + e,
                        method: "get"
                    })
                },
                C = function(e) {
                    return l({
                        url: T + "/v1/cps/progress/" + e,
                        method: "get"
                    })
                }
        },
        78: function(e, o, i) {
            "use strict";
            i.d(o, "b", (function() {
                return u
            })), i.d(o, "a", (function() {
                return c
            }));
            var t = i(94),
                r = i(5),
                n = i(70),
                a = i(6),
                s = i(79),
                l = r.a.lang,
                d = [500, 1536, 2048],
                u = function(e, o, i) {
                    var m = window.location.pathname,
                        h = m.match(/es|jp/) && m.match(/\/convert/) && document.body.clientWidth >= 480;
                    if (!(n.e.includes(m) || m.match(/\/convert/) || h)) return !1;
                    var g = n.c.MAX_SIZE.replace(/xxx/g, r.a.renderSize(e)),
                        v = "";
                    if (d[0] = i, -1 === o || 0 === o ? (o = 0, v = n.c.CONVERT_TIPS.replace(/@@@/g, d[0] + "M")) : v = n.c.CONVERT_TIPS.replace(/@@@/g, d[1] / 1024 + "G"), e > 1024 * d[o] * 1024) {
                        if (e > 1024 * d[2] * 1024) {
                            var f = {
                                action: "Desktop",
                                errorTips: '<div class="error-light">$$$$' + "File is too large! (####). Media.io Video only supports the video no more than 2GB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.".replace(/\./, "</div>").replace(/####/gi, r.a.renderSize(e)),
                                size: e,
                                gtm_action: "File_OverSize",
                                gtm_page: "convert_home"
                            };
                            return c(f), !0
                        }
                        if (window.innerWidth < 480) {
                            f = {
                                action: "Online",
                                errorTips: '<div class="error-light">$$$$' + l.chooseRightPlan.sizeMinLimit.replace(/\./, "</div>").replace(/####/gi, r.a.renderSize(e)).replace(/@@@@/gi, String(d[o])),
                                size: u,
                                gtm_action: "File_OverSize",
                                gtm_page: "convert_home"
                            };
                            return c(f), !0
                        }
                        var T = 0 === o ? d[0] + "M" : d[1] / 1024 + "G";
                        return t.a.commit("showMemberPricingPop", {
                            modals: {
                                isShowPricingPop: !0,
                                isBuySinglePoint: !1
                            },
                            tips: g,
                            isFileSize: !0,
                            convertTips: v,
                            upgradeTips: s.a.state.userInfo.level === n.f.NOT_LOGIN ? n.c.NOT_LOGIN_FILE_SIZE : n.c.CONVERT_UPGRADE_TIPS
                        }), a.a.sendGTM({
                            action: p(),
                            category: "Show_Buy_Windows",
                            eventLabel: "File_OVERSIZE_" + T + "_" + d[o + 1] / 1024 + "G"
                        }), !0
                    }
                    return !1
                },
                c = function(e) {
                    window.sessionStorage.setItem("chooseRightPlan", JSON.stringify(Object.assign({}, e, {
                        continueUrl: window.location.href
                    }))), window.open("https://www.media.io/choose-right-plan.html")
                },
                p = function() {
                    var e = "common",
                        o = t.a.state.isFileSize,
                        i = t.a.state.modals.isBuySinglePoint;
                    return o && (window.location.pathname.match(/convert/) || "/" === window.location.pathname ? e = "Converter" : window.location.pathname.match(/compressor/) && (e = "Compress")), i && (e = "Subtitle"), e
                }
        },
        79: function(e, o, i) {
            "use strict";
            var t = i(13),
                r = i(130),
                n = i(70),
                a = i(80);
            t.default.use(r.a);
            var s = new r.a.Store({
                state: {
                    accountPopup: !1,
                    type: "",
                    action: "",
                    accountPopupHeader: "",
                    userInfo: {
                        level: -1
                    },
                    curHref: "",
                    curOrigin: "",
                    fireAfterLogin: !1,
                    funcAfterLogin: null,
                    funcContextAfterLogin: null,
                    funcArgsAfterLogin: null,
                    AlgorithmList: new Map
                },
                mutations: {
                    updateAlgorithm: function(e, o) {
                        var i = o.id,
                            t = o.status;
                        e.AlgorithmList.set(i, t)
                    },
                    updateCurOrigin: function(e, o) {
                        e.curOrigin = o
                    },
                    updateCurHref: function(e, o) {
                        e.curHref = o
                    },
                    updateUserInfo: function(e, o) {
                        (e.userInfo = o, o.level === n.f.PRO || o.level === n.f.BASIC) && document.querySelectorAll("script").forEach((function(e) {
                            if ("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9822591576791457" === e.src) {
                                e.src = "";
                                for (var o = document.querySelectorAll("ins.adsbygoogle.adsbygoogle-noablate"), i = 0; i < o.length; i++) o.item(i).setAttribute("style", "display: none")
                            }
                        })); - 1 !== e.userInfo.level && e.fireAfterLogin && (e.fireAfterLogin = !1, e.funcAfterLogin && (e.funcAfterLogin.apply(e.funcContextAfterLogin, e.funcArgsAfterLogin || []), e.funcAfterLogin = null, e.funcArgsAfterLogin = [], e.funcContextAfterLogin = null))
                    },
                    updateAccoutProps: function(e, o) {
                        e.accountPopup = !0, e.type = o.type, e.action = o.action || "signin", e.accountPopupHeader = o.accountPopupHeader
                    },
                    closeAccount: function(e) {
                        e.accountPopup = !1
                    },
                    INIT_FUNC_LOGIN_INFO: function(e, o) {
                        e.fireAfterLogin = !0, e.funcAfterLogin = o.func, e.funcArgsAfterLogin = o.args || [], e.funcContextAfterLogin = o.context
                    }
                },
                actions: {
                    updateAccoutProps: function(e, o) {
                        e.commit("updateAccoutProps", o)
                    },
                    funcWithLogin: function(e, o) {
                        var i;
                        if (-1 === (null === (i = e.state.userInfo) || void 0 === i ? void 0 : i.level)) return e.commit("INIT_FUNC_LOGIN_INFO", o), void a.a.$emit("loginButton", {
                            action: "signin",
                            accountPopupHeader: "",
                            type: "userInfoSignUp"
                        });
                        o.func.apply(o.context, o.args)
                    }
                }
            });
            o.a = s
        },
        80: function(e, o, i) {
            "use strict";
            var t = i(13);
            o.a = new t.default
        },
        85: function(e, o, i) {
            "use strict";

            function t(e, o, i) {
                this.$children.forEach((function(r) {
                    r.$options.componentName === e ? r.$emit.apply(r, [o].concat(i)) : t.apply(r, [e, o].concat([i]))
                }))
            }
            o.__esModule = !0, o.default = {
                methods: {
                    dispatch: function(e, o, i) {
                        for (var t = this.$parent || this.$root, r = t.$options.componentName; t && (!r || r !== e);)(t = t.$parent) && (r = t.$options.componentName);
                        t && t.$emit.apply(t, [o].concat(i))
                    },
                    broadcast: function(e, o, i) {
                        t.call(this, e, o, i)
                    }
                }
            }
        },
        86: function(e, o, i) {
            "use strict";
            o.__esModule = !0, o.isInContainer = o.getScrollContainer = o.isScroll = o.getStyle = o.once = o.off = o.on = void 0;
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            o.hasClass = c, o.addClass = function(e, o) {
                if (!e) return;
                for (var i = e.className, t = (o || "").split(" "), r = 0, n = t.length; r < n; r++) {
                    var a = t[r];
                    a && (e.classList ? e.classList.add(a) : c(e, a) || (i += " " + a))
                }
                e.classList || e.setAttribute("class", i)
            }, o.removeClass = function(e, o) {
                if (!e || !o) return;
                for (var i = o.split(" "), t = " " + e.className + " ", r = 0, n = i.length; r < n; r++) {
                    var a = i[r];
                    a && (e.classList ? e.classList.remove(a) : c(e, a) && (t = t.replace(" " + a + " ", " ")))
                }
                e.classList || e.setAttribute("class", (t || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, ""))
            }, o.setStyle = function e(o, i, r) {
                if (!o || !i) return;
                if ("object" === (void 0 === i ? "undefined" : t(i)))
                    for (var n in i) i.hasOwnProperty(n) && e(o, n, i[n]);
                else "opacity" === (i = l(i)) && s < 9 ? o.style.filter = isNaN(r) ? "" : "alpha(opacity=" + 100 * r + ")" : o.style[i] = r
            };
            var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i(13)).default.prototype.$isServer,
                n = /([\:\-\_]+(.))/g,
                a = /^moz([A-Z])/,
                s = r ? 0 : Number(document.documentMode),
                l = function(e) {
                    return e.replace(n, (function(e, o, i, t) {
                        return t ? i.toUpperCase() : i
                    })).replace(a, "Moz$1")
                },
                d = o.on = !r && document.addEventListener ? function(e, o, i) {
                    e && o && i && e.addEventListener(o, i, !1)
                } : function(e, o, i) {
                    e && o && i && e.attachEvent("on" + o, i)
                },
                u = o.off = !r && document.removeEventListener ? function(e, o, i) {
                    e && o && e.removeEventListener(o, i, !1)
                } : function(e, o, i) {
                    e && o && e.detachEvent("on" + o, i)
                };
            o.once = function(e, o, i) {
                d(e, o, (function t() {
                    i && i.apply(this, arguments), u(e, o, t)
                }))
            };

            function c(e, o) {
                if (!e || !o) return !1;
                if (-1 !== o.indexOf(" ")) throw new Error("className should not contain space.");
                return e.classList ? e.classList.contains(o) : (" " + e.className + " ").indexOf(" " + o + " ") > -1
            }
            var p = o.getStyle = s < 9 ? function(e, o) {
                if (!r) {
                    if (!e || !o) return null;
                    "float" === (o = l(o)) && (o = "styleFloat");
                    try {
                        switch (o) {
                            case "opacity":
                                try {
                                    return e.filters.item("alpha").opacity / 100
                                } catch (e) {
                                    return 1
                                }
                            default:
                                return e.style[o] || e.currentStyle ? e.currentStyle[o] : null
                        }
                    } catch (i) {
                        return e.style[o]
                    }
                }
            } : function(e, o) {
                if (!r) {
                    if (!e || !o) return null;
                    "float" === (o = l(o)) && (o = "cssFloat");
                    try {
                        var i = document.defaultView.getComputedStyle(e, "");
                        return e.style[o] || i ? i[o] : null
                    } catch (i) {
                        return e.style[o]
                    }
                }
            };
            var m = o.isScroll = function(e, o) {
                if (!r) return p(e, null != o ? o ? "overflow-y" : "overflow-x" : "overflow").match(/(scroll|auto|overlay)/)
            };
            o.getScrollContainer = function(e, o) {
                if (!r) {
                    for (var i = e; i;) {
                        if ([window, document, document.documentElement].includes(i)) return window;
                        if (m(i, o)) return i;
                        i = i.parentNode
                    }
                    return i
                }
            }, o.isInContainer = function(e, o) {
                if (r || !e || !o) return !1;
                var i = e.getBoundingClientRect(),
                    t = void 0;
                return t = [window, document, document.documentElement, null, void 0].includes(o) ? {
                    top: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight,
                    left: 0
                } : o.getBoundingClientRect(), i.top < t.bottom && i.bottom > t.top && i.right > t.left && i.left < t.right
            }
        },
        90: function(e, o, i) {
            "use strict";
            o.__esModule = !0, o.default = function(e) {
                for (var o = 1, i = arguments.length; o < i; o++) {
                    var t = arguments[o] || {};
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var n = t[r];
                            void 0 !== n && (e[r] = n)
                        }
                }
                return e
            }
        },
        94: function(e, o, i) {
            "use strict";
            var t = i(70),
                r = new(i(130).a.Store)({
                    state: {
                        modals: {
                            isShowPricingPop: !1,
                            isBuySinglePoint: !1
                        },
                        tips: t.c.CONVERTING_NUM,
                        isFileSize: !1,
                        fileSizeTips: t.c.CONVERT_TIPS,
                        upgradeTips: t.c.DEFAULT_UPGRADE_TIPS,
                        convertTips: t.c.CONVERT_TIPS,
                        isHeaderPricingClick: !1,
                        clickUpgradeButton: !1,
                        clickBuyButtonType: t.a.Subtitle
                    },
                    mutations: {
                        showMemberPricingPop: function(e, o) {
                            e.modals = o.modals, e.tips = o.tips, e.isFileSize = o.isFileSize || !1, e.upgradeTips = o.upgradeTips || t.c.DEFAULT_UPGRADE_TIPS, e.convertTips = o.convertTips || t.c.FILE_NUM_UPGRADE_TIPS.replace("###", window.location.pathname.split("-")[1]), e.isHeaderPricingClick = o.isHeaderPricingClick || !1, e.clickUpgradeButton = o.clickUpgradeButton || !1, e.clickBuyButtonType = o.clickBuyButtonType || t.a.Subtitle
                        }
                    }
                });
            o.a = r
        }
    }
]);