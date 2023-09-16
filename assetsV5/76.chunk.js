(window.webpackJsonp = window.webpackJsonp || []).push([
    [76, 89], {
        118: function(e, t, o) {
            var n = o(153);
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            o(72)(n, i);
            n.locals && (e.exports = n.locals)
        },
        119: function(e, t, o) {
            e.exports = function(e) {
                var t = {};

                function o(n) {
                    if (t[n]) return t[n].exports;
                    var i = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
                }
                return o.m = e, o.c = t, o.d = function(e, t, n) {
                    o.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, o.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, o.t = function(e, t) {
                    if (1 & t && (e = o(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (o.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) o.d(n, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return n
                }, o.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return o.d(t, "a", t), t
                }, o.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, o.p = "/dist/", o(o.s = 92)
            }({
                0: function(e, t, o) {
                    "use strict";

                    function n(e, t, o, n, i, a, l, r) {
                        var s, d = "function" == typeof e ? e.options : e;
                        if (t && (d.render = t, d.staticRenderFns = o, d._compiled = !0), n && (d.functional = !0), a && (d._scopeId = "data-v-" + a), l ? (s = function(e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(l)
                            }, d._ssrRegister = s) : i && (s = r ? function() {
                                i.call(this, this.$root.$options.shadowRoot)
                            } : i), s)
                            if (d.functional) {
                                d._injectStyles = s;
                                var c = d.render;
                                d.render = function(e, t) {
                                    return s.call(t), c(e, t)
                                }
                            } else {
                                var u = d.beforeCreate;
                                d.beforeCreate = u ? [].concat(u, s) : [s]
                            }
                        return {
                            exports: e,
                            options: d
                        }
                    }
                    o.d(t, "a", (function() {
                        return n
                    }))
                },
                11: function(e, t) {
                    e.exports = o(150)
                },
                13: function(e, t) {
                    e.exports = o(125)
                },
                4: function(e, t) {
                    e.exports = o(85)
                },
                92: function(e, t, o) {
                    "use strict";
                    o.r(t);
                    var n = function() {
                        var e = this,
                            t = e.$createElement,
                            o = e._self._c || t;
                        return o("transition", {
                            attrs: {
                                name: "dialog-fade"
                            },
                            on: {
                                "after-enter": e.afterEnter,
                                "after-leave": e.afterLeave
                            }
                        }, [o("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.visible,
                                expression: "visible"
                            }],
                            staticClass: "el-dialog__wrapper",
                            on: {
                                click: function(t) {
                                    return t.target !== t.currentTarget ? null : e.handleWrapperClick(t)
                                }
                            }
                        }, [o("div", {
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
                        }, [o("div", {
                            staticClass: "el-dialog__header"
                        }, [e._t("title", [o("span", {
                            staticClass: "el-dialog__title"
                        }, [e._v(e._s(e.title))])]), e.showClose ? o("button", {
                            staticClass: "el-dialog__headerbtn",
                            attrs: {
                                type: "button",
                                "aria-label": "Close"
                            },
                            on: {
                                click: e.handleClose
                            }
                        }, [o("i", {
                            staticClass: "el-dialog__close el-icon el-icon-close"
                        })]) : e._e()], 2), e.rendered ? o("div", {
                            staticClass: "el-dialog__body"
                        }, [e._t("default")], 2) : e._e(), e.$slots.footer ? o("div", {
                            staticClass: "el-dialog__footer"
                        }, [e._t("footer")], 2) : e._e()])])])
                    };
                    n._withStripped = !0;
                    var i = o(13),
                        a = o.n(i),
                        l = o(11),
                        r = o.n(l),
                        s = o(4),
                        d = o.n(s),
                        c = {
                            name: "ElDialog",
                            mixins: [a.a, d.a, r.a],
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
                                    var t = this;
                                    e ? (this.closed = !1, this.$emit("open"), this.$el.addEventListener("scroll", this.updatePopper), this.$nextTick((function() {
                                        t.$refs.dialog.scrollTop = 0
                                    })), this.appendToBody && document.body.appendChild(this.$el)) : (this.$el.removeEventListener("scroll", this.updatePopper), this.closed || this.$emit("close"), this.destroyOnClose && this.$nextTick((function() {
                                        t.key++
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
                        u = o(0),
                        p = Object(u.a)(c, n, [], !1, null, null, null);
                    p.options.__file = "packages/dialog/src/component.vue";
                    var f = p.exports;
                    f.install = function(e) {
                        e.component(f.name, f)
                    };
                    t.default = f
                }
            })
        },
        125: function(e, t, o) {
            "use strict";
            t.__esModule = !0, t.PopupManager = void 0;
            var n = s(o(13)),
                i = s(o(90)),
                a = s(o(144)),
                l = s(o(127)),
                r = o(86);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = 1,
                c = void 0;
            t.default = {
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
                    this._popupId = "popup-" + d++, a.default.register(this._popupId, this)
                },
                beforeDestroy: function() {
                    a.default.deregister(this._popupId), a.default.closeModal(this._popupId), this.restoreBodyStyle()
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
                        var t = this;
                        if (e) {
                            if (this._opening) return;
                            this.rendered ? this.open() : (this.rendered = !0, n.default.nextTick((function() {
                                t.open()
                            })))
                        } else this.close()
                    }
                },
                methods: {
                    open: function(e) {
                        var t = this;
                        this.rendered || (this.rendered = !0);
                        var o = (0, i.default)({}, this.$props || this, e);
                        this._closeTimer && (clearTimeout(this._closeTimer), this._closeTimer = null), clearTimeout(this._openTimer);
                        var n = Number(o.openDelay);
                        n > 0 ? this._openTimer = setTimeout((function() {
                            t._openTimer = null, t.doOpen(o)
                        }), n) : this.doOpen(o)
                    },
                    doOpen: function(e) {
                        if (!this.$isServer && (!this.willOpen || this.willOpen()) && !this.opened) {
                            this._opening = !0;
                            var t = this.$el,
                                o = e.modal,
                                n = e.zIndex;
                            if (n && (a.default.zIndex = n), o && (this._closing && (a.default.closeModal(this._popupId), this._closing = !1), a.default.openModal(this._popupId, a.default.nextZIndex(), this.modalAppendToBody ? void 0 : t, e.modalClass, e.modalFade), e.lockScroll)) {
                                this.withoutHiddenClass = !(0, r.hasClass)(document.body, "el-popup-parent--hidden"), this.withoutHiddenClass && (this.bodyPaddingRight = document.body.style.paddingRight, this.computedBodyPaddingRight = parseInt((0, r.getStyle)(document.body, "paddingRight"), 10)), c = (0, l.default)();
                                var i = document.documentElement.clientHeight < document.body.scrollHeight,
                                    s = (0, r.getStyle)(document.body, "overflowY");
                                c > 0 && (i || "scroll" === s) && this.withoutHiddenClass && (document.body.style.paddingRight = this.computedBodyPaddingRight + c + "px"), (0, r.addClass)(document.body, "el-popup-parent--hidden")
                            }
                            "static" === getComputedStyle(t).position && (t.style.position = "absolute"), t.style.zIndex = a.default.nextZIndex(), this.opened = !0, this.onOpen && this.onOpen(), this.doAfterOpen()
                        }
                    },
                    doAfterOpen: function() {
                        this._opening = !1
                    },
                    close: function() {
                        var e = this;
                        if (!this.willClose || this.willClose()) {
                            null !== this._openTimer && (clearTimeout(this._openTimer), this._openTimer = null), clearTimeout(this._closeTimer);
                            var t = Number(this.closeDelay);
                            t > 0 ? this._closeTimer = setTimeout((function() {
                                e._closeTimer = null, e.doClose()
                            }), t) : this.doClose()
                        }
                    },
                    doClose: function() {
                        this._closing = !0, this.onClose && this.onClose(), this.lockScroll && setTimeout(this.restoreBodyStyle, 200), this.opened = !1, this.doAfterClose()
                    },
                    doAfterClose: function() {
                        a.default.closeModal(this._popupId), this._closing = !1
                    },
                    restoreBodyStyle: function() {
                        this.modal && this.withoutHiddenClass && (document.body.style.paddingRight = this.bodyPaddingRight, (0, r.removeClass)(document.body, "el-popup-parent--hidden")), this.withoutHiddenClass = !0
                    }
                }
            }, t.PopupManager = a.default
        },
        127: function(e, t, o) {
            "use strict";
            t.__esModule = !0, t.default = function() {
                if (a.default.prototype.$isServer) return 0;
                if (void 0 !== l) return l;
                var e = document.createElement("div");
                e.className = "el-scrollbar__wrap", e.style.visibility = "hidden", e.style.width = "100px", e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e);
                var t = e.offsetWidth;
                e.style.overflow = "scroll";
                var o = document.createElement("div");
                o.style.width = "100%", e.appendChild(o);
                var n = o.offsetWidth;
                return e.parentNode.removeChild(e), l = t - n
            };
            var n, i = o(13),
                a = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var l = void 0
        },
        144: function(e, t, o) {
            "use strict";
            t.__esModule = !0;
            var n, i = o(13),
                a = (n = i) && n.__esModule ? n : {
                    default: n
                },
                l = o(86);
            var r = !1,
                s = !1,
                d = void 0,
                c = function() {
                    if (!a.default.prototype.$isServer) {
                        var e = p.modalDom;
                        return e ? r = !0 : (r = !1, e = document.createElement("div"), p.modalDom = e, e.addEventListener("touchmove", (function(e) {
                            e.preventDefault(), e.stopPropagation()
                        })), e.addEventListener("click", (function() {
                            p.doOnModalClick && p.doOnModalClick()
                        }))), e
                    }
                },
                u = {},
                p = {
                    modalFade: !0,
                    getInstance: function(e) {
                        return u[e]
                    },
                    register: function(e, t) {
                        e && t && (u[e] = t)
                    },
                    deregister: function(e) {
                        e && (u[e] = null, delete u[e])
                    },
                    nextZIndex: function() {
                        return p.zIndex++
                    },
                    modalStack: [],
                    doOnModalClick: function() {
                        var e = p.modalStack[p.modalStack.length - 1];
                        if (e) {
                            var t = p.getInstance(e.id);
                            t && t.closeOnClickModal && t.close()
                        }
                    },
                    openModal: function(e, t, o, n, i) {
                        if (!a.default.prototype.$isServer && e && void 0 !== t) {
                            this.modalFade = i;
                            for (var s = this.modalStack, d = 0, u = s.length; d < u; d++) {
                                if (s[d].id === e) return
                            }
                            var p = c();
                            if ((0, l.addClass)(p, "v-modal"), this.modalFade && !r && (0, l.addClass)(p, "v-modal-enter"), n) n.trim().split(/\s+/).forEach((function(e) {
                                return (0, l.addClass)(p, e)
                            }));
                            setTimeout((function() {
                                (0, l.removeClass)(p, "v-modal-enter")
                            }), 200), o && o.parentNode && 11 !== o.parentNode.nodeType ? o.parentNode.appendChild(p) : document.body.appendChild(p), t && (p.style.zIndex = t), p.tabIndex = 0, p.style.display = "", this.modalStack.push({
                                id: e,
                                zIndex: t,
                                modalClass: n
                            })
                        }
                    },
                    closeModal: function(e) {
                        var t = this.modalStack,
                            o = c();
                        if (t.length > 0) {
                            var n = t[t.length - 1];
                            if (n.id === e) {
                                if (n.modalClass) n.modalClass.trim().split(/\s+/).forEach((function(e) {
                                    return (0, l.removeClass)(o, e)
                                }));
                                t.pop(), t.length > 0 && (o.style.zIndex = t[t.length - 1].zIndex)
                            } else
                                for (var i = t.length - 1; i >= 0; i--)
                                    if (t[i].id === e) {
                                        t.splice(i, 1);
                                        break
                                    }
                        }
                        0 === t.length && (this.modalFade && (0, l.addClass)(o, "v-modal-leave"), setTimeout((function() {
                            0 === t.length && (o.parentNode && o.parentNode.removeChild(o), o.style.display = "none", p.modalDom = void 0), (0, l.removeClass)(o, "v-modal-leave")
                        }), 200))
                    }
                };
            Object.defineProperty(p, "zIndex", {
                configurable: !0,
                get: function() {
                    return s || (d = d || (a.default.prototype.$ELEMENT || {}).zIndex || 2e3, s = !0), d
                },
                set: function(e) {
                    d = e
                }
            });
            a.default.prototype.$isServer || window.addEventListener("keydown", (function(e) {
                if (27 === e.keyCode) {
                    var t = function() {
                        if (!a.default.prototype.$isServer && p.modalStack.length > 0) {
                            var e = p.modalStack[p.modalStack.length - 1];
                            if (!e) return;
                            return p.getInstance(e.id)
                        }
                    }();
                    t && t.closeOnPressEscape && (t.handleClose ? t.handleClose() : t.handleAction ? t.handleAction("cancel") : t.close())
                }
            })), t.default = p
        },
        153: function(e, t, o) {
            (e.exports = o(71)(!1)).push([e.i, ".v-modal-enter{-webkit-animation:v-modal-in .2s ease;animation:v-modal-in .2s ease}.v-modal-leave{-webkit-animation:v-modal-out .2s ease forwards;animation:v-modal-out .2s ease forwards}@-webkit-keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-in{0%{opacity:0}}@-webkit-keyframes v-modal-out{100%{opacity:0}}@keyframes v-modal-out{100%{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000}.el-popup-parent--hidden{overflow:hidden}.el-dialog{position:relative;margin:0 auto 50px;background:#FFF;border-radius:2px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;width:50%}.el-dialog.is-fullscreen{width:100%;margin-top:0;margin-bottom:0;height:100%;overflow:auto}.el-dialog__wrapper{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;margin:0}.el-dialog__header{padding:20px 20px 10px}.el-dialog__headerbtn{position:absolute;top:20px;right:20px;padding:0;background:0 0;border:none;outline:0;cursor:pointer;font-size:16px}.el-dialog__headerbtn .el-dialog__close{color:#909399}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:#409EFF}.el-dialog__title{line-height:24px;font-size:18px;color:#303133}.el-dialog__body{padding:30px 20px;color:#606266;font-size:14px;word-break:break-all}.el-dialog__footer{padding:10px 20px 20px;text-align:right;-webkit-box-sizing:border-box;box-sizing:border-box}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{text-align:initial;padding:25px 25px 30px}.el-dialog--center .el-dialog__footer{text-align:inherit}.dialog-fade-enter-active{-webkit-animation:dialog-fade-in .3s;animation:dialog-fade-in .3s}.dialog-fade-leave-active{-webkit-animation:dialog-fade-out .3s;animation:dialog-fade-out .3s}@-webkit-keyframes dialog-fade-in{0%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes dialog-fade-in{0%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes dialog-fade-out{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}}@keyframes dialog-fade-out{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);opacity:0}}", ""])
        },
        222: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = {
                    name: "Button",
                    props: ["className"]
                },
                i = o(68),
                a = Object(i.a)(n, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("button", {
                        staticClass: "ko-btn",
                        class: this.className
                    }, [this._t("default")], 2)
                }), [], !1, null, "5216ca16", null);
            t.default = a.exports
        },
        484: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(117),
                i = o(124),
                a = o(119),
                l = o.n(a),
                r = (o(118), o(222)),
                s = o(6),
                d = o(79),
                c = o(5),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.visible = !1, t
                    }
                    return Object(n.d)(t, e), Object.defineProperty(t.prototype, "curOrigin", {
                        get: function() {
                            return d.a.state.curOrigin
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.close = function() {
                        this.$emit("close", !1)
                    }, t.prototype.goEditor = function() {
                        if ("TenSecondesEditor" === this.curOrigin) e = (e = c.a.getCookie("TenSecondesClickEditor")) ? String(Number(e) + 1) : "1", c.a.setCookie("TenSecondesClickEditor", e), s.a.sendGTM({
                            category: "Goeditor",
                            action: "Go_Video_Editor_Click_10s",
                            eventLabel: e
                        });
                        else if ("LoginSuccessEditor" === this.curOrigin) {
                            var e;
                            e = (e = c.a.getCookie("LoginSuccessClickEditor")) ? String(Number(e) + 1) : "1", c.a.setCookie("LoginSuccessClickEditor", e), s.a.sendGTM({
                                category: "Goeditor",
                                action: "Go_Video_Editor_Click_Signup",
                                eventLabel: e
                            })
                        }
                        window.open("https://www.media.io/editor")
                    }, Object(n.c)([Object(i.b)({
                        default: !0
                    })], t.prototype, "dialogVisible", void 0), t = Object(n.c)([Object(i.a)({
                        components: {
                            "el-dialog": l.a,
                            Button: r.default
                        }
                    })], t)
                }(i.c),
                p = o(68),
                f = Object(p.a)(u, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", [o("el-dialog", {
                        attrs: {
                            title: "",
                            visible: e.dialogVisible,
                            width: "800px",
                            "custom-class": "editor-direct",
                            "before-close": e.close,
                            "append-to-body": !0
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialogVisible = t
                            }
                        }
                    }, [o("img", {
                        staticClass: "close",
                        attrs: {
                            src: "https://www.media.io/imagesV4/icon24_close.svg",
                            alt: ""
                        },
                        on: {
                            click: e.close
                        }
                    }), e._v(" "), o("div", {
                        staticClass: "dialog-content"
                    }, [o("div", {
                        staticClass: "title"
                    }, [e._v("Congratulations")]), e._v(" "), o("div", {
                        staticClass: "content"
                    }, [e._v("You get the chance to use our "), o("br"), e._v("video editor for free")]), e._v(" "), o("Button", {
                        attrs: {
                            className: "base"
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.goEditor.apply(null, arguments)
                            }
                        }
                    }, [e._v("Get Started")])], 1)])], 1)
                }), [], !1, null, null, null);
            t.default = f.exports
        },
        68: function(e, t, o) {
            "use strict";

            function n(e, t, o, n, i, a, l, r) {
                var s, d = "function" == typeof e ? e.options : e;
                if (t && (d.render = t, d.staticRenderFns = o, d._compiled = !0), n && (d.functional = !0), a && (d._scopeId = "data-v-" + a), l ? (s = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(l)
                    }, d._ssrRegister = s) : i && (s = r ? function() {
                        i.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : i), s)
                    if (d.functional) {
                        d._injectStyles = s;
                        var c = d.render;
                        d.render = function(e, t) {
                            return s.call(t), c(e, t)
                        }
                    } else {
                        var u = d.beforeCreate;
                        d.beforeCreate = u ? [].concat(u, s) : [s]
                    }
                return {
                    exports: e,
                    options: d
                }
            }
            o.d(t, "a", (function() {
                return n
            }))
        },
        85: function(e, t, o) {
            "use strict";

            function n(e, t, o) {
                this.$children.forEach((function(i) {
                    i.$options.componentName === e ? i.$emit.apply(i, [t].concat(o)) : n.apply(i, [e, t].concat([o]))
                }))
            }
            t.__esModule = !0, t.default = {
                methods: {
                    dispatch: function(e, t, o) {
                        for (var n = this.$parent || this.$root, i = n.$options.componentName; n && (!i || i !== e);)(n = n.$parent) && (i = n.$options.componentName);
                        n && n.$emit.apply(n, [t].concat(o))
                    },
                    broadcast: function(e, t, o) {
                        n.call(this, e, t, o)
                    }
                }
            }
        },
        86: function(e, t, o) {
            "use strict";
            t.__esModule = !0, t.isInContainer = t.getScrollContainer = t.isScroll = t.getStyle = t.once = t.off = t.on = void 0;
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.hasClass = f, t.addClass = function(e, t) {
                if (!e) return;
                for (var o = e.className, n = (t || "").split(" "), i = 0, a = n.length; i < a; i++) {
                    var l = n[i];
                    l && (e.classList ? e.classList.add(l) : f(e, l) || (o += " " + l))
                }
                e.classList || e.setAttribute("class", o)
            }, t.removeClass = function(e, t) {
                if (!e || !t) return;
                for (var o = t.split(" "), n = " " + e.className + " ", i = 0, a = o.length; i < a; i++) {
                    var l = o[i];
                    l && (e.classList ? e.classList.remove(l) : f(e, l) && (n = n.replace(" " + l + " ", " ")))
                }
                e.classList || e.setAttribute("class", (n || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, ""))
            }, t.setStyle = function e(t, o, i) {
                if (!t || !o) return;
                if ("object" === (void 0 === o ? "undefined" : n(o)))
                    for (var a in o) o.hasOwnProperty(a) && e(t, a, o[a]);
                else "opacity" === (o = c(o)) && d < 9 ? t.style.filter = isNaN(i) ? "" : "alpha(opacity=" + 100 * i + ")" : t.style[o] = i
            };
            var i, a = o(13);
            var l = ((i = a) && i.__esModule ? i : {
                    default: i
                }).default.prototype.$isServer,
                r = /([\:\-\_]+(.))/g,
                s = /^moz([A-Z])/,
                d = l ? 0 : Number(document.documentMode),
                c = function(e) {
                    return e.replace(r, (function(e, t, o, n) {
                        return n ? o.toUpperCase() : o
                    })).replace(s, "Moz$1")
                },
                u = t.on = !l && document.addEventListener ? function(e, t, o) {
                    e && t && o && e.addEventListener(t, o, !1)
                } : function(e, t, o) {
                    e && t && o && e.attachEvent("on" + t, o)
                },
                p = t.off = !l && document.removeEventListener ? function(e, t, o) {
                    e && t && e.removeEventListener(t, o, !1)
                } : function(e, t, o) {
                    e && t && e.detachEvent("on" + t, o)
                };
            t.once = function(e, t, o) {
                u(e, t, (function n() {
                    o && o.apply(this, arguments), p(e, t, n)
                }))
            };

            function f(e, t) {
                if (!e || !t) return !1;
                if (-1 !== t.indexOf(" ")) throw new Error("className should not contain space.");
                return e.classList ? e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1
            }
            var h = t.getStyle = d < 9 ? function(e, t) {
                if (!l) {
                    if (!e || !t) return null;
                    "float" === (t = c(t)) && (t = "styleFloat");
                    try {
                        switch (t) {
                            case "opacity":
                                try {
                                    return e.filters.item("alpha").opacity / 100
                                } catch (e) {
                                    return 1
                                }
                            default:
                                return e.style[t] || e.currentStyle ? e.currentStyle[t] : null
                        }
                    } catch (o) {
                        return e.style[t]
                    }
                }
            } : function(e, t) {
                if (!l) {
                    if (!e || !t) return null;
                    "float" === (t = c(t)) && (t = "cssFloat");
                    try {
                        var o = document.defaultView.getComputedStyle(e, "");
                        return e.style[t] || o ? o[t] : null
                    } catch (o) {
                        return e.style[t]
                    }
                }
            };
            var m = t.isScroll = function(e, t) {
                if (!l) return h(e, null != t ? t ? "overflow-y" : "overflow-x" : "overflow").match(/(scroll|auto|overlay)/)
            };
            t.getScrollContainer = function(e, t) {
                if (!l) {
                    for (var o = e; o;) {
                        if ([window, document, document.documentElement].includes(o)) return window;
                        if (m(o, t)) return o;
                        o = o.parentNode
                    }
                    return o
                }
            }, t.isInContainer = function(e, t) {
                if (l || !e || !t) return !1;
                var o = e.getBoundingClientRect(),
                    n = void 0;
                return n = [window, document, document.documentElement, null, void 0].includes(t) ? {
                    top: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight,
                    left: 0
                } : t.getBoundingClientRect(), o.top < n.bottom && o.bottom > n.top && o.right > n.left && o.left < n.right
            }
        },
        90: function(e, t, o) {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                for (var t = 1, o = arguments.length; t < o; t++) {
                    var n = arguments[t] || {};
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var a = n[i];
                            void 0 !== a && (e[i] = a)
                        }
                }
                return e
            }
        }
    }
]);