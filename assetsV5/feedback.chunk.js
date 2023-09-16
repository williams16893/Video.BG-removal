(window.webpackJsonp = window.webpackJsonp || []).push([
    [35], {
        126: function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, i = new Array(t); s < t; s++) i[s] = e[s];
                return i
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        158: function(e, t, s) {
            var i = s(126);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? i(e, t) : void 0
                }
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        160: function(e, t, s) {
            var i = s(126);
            e.exports = function(e) {
                if (Array.isArray(e)) return i(e)
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        161: function(e, t) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        162: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        48: function(e, t, s) {
            "use strict";
            s.r(t);
            var i = s(13),
                a = s(3),
                r = s.n(a),
                n = s(88),
                o = s.n(n),
                l = s(1),
                c = s.n(l),
                u = s(2),
                d = s(5),
                f = s(167),
                p = {
                    name: "Feedback",
                    data: function() {
                        return {
                            multiple: !0,
                            retryDelays: [0, 1e3, 3e3, 5e3],
                            chunkSize: 10485760,
                            parallelUploads: d.a.isIphone ? 1 : 2,
                            withCredentials: !0,
                            reqs: {},
                            disableSubmit: !0,
                            showFeedback: !1,
                            textTip: {
                                emailTip: !1,
                                contentTip: !1
                            },
                            guidArr: [],
                            fileList: [],
                            email: "",
                            message: "",
                            token: ""
                        }
                    },
                    watch: {
                        message: function(e) {
                            this.disableSubmit = "" === e || "" === this.email, this.$set(this.textTip, "contentTip", !0 === this.showFeedback && "" === e)
                        },
                        email: function(e) {
                            this.disableSubmit = "" === e || "" === this.message;
                            this.$set(this.textTip, "emailTip", !0 === this.showFeedback && (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e) || e.indexOf("。") > -1))
                        }
                    },
                    methods: {
                        addFile: function(e) {
                            var t = e || window.event;
                            if ("" === t.target.value || null === t.target.value) return !1;
                            var s = e.target.files && o()(t.target.files);
                            this.checkFile(s)
                        },
                        drop: function(e) {
                            var t = e || window.event;
                            t.preventDefault(), this.checkFile(o()(t.dataTransfer.files))
                        },
                        dragover: function(e) {
                            (e || window.event).preventDefault()
                        },
                        checkFile: function(e) {
                            var t = e.length,
                                s = !1;
                            e.length + this.fileList.length > 2 && (this.sizeAndNumError(), t = 2 - this.fileList.length), document.getElementById("feedback-upload").value = null;
                            for (var i = 0; i < t; i++) e[i].size > 104857600 ? s = !0 : (this.fileList.push(e[i]), this.beforeUpload(e[i]));
                            s && this.sizeAndNumError()
                        },
                        submit: function() {
                            var e = this;
                            this.disableSubmit = !0;
                            for (var t = [], s = 0; s < this.fileList.length; s++) "success" !== this.fileList[s].uploadStatus && t.push(this.post(this.fileList[s], s));
                            Promise.all(t).then((function() {
                                e.uploadToFeedback()
                            }), (function(e) {
                                swal({
                                    text: e.msg,
                                    icon: "error"
                                })
                            }))
                        },
                        beforeUpload: function(e) {
                            return r()(c.a.mark((function t() {
                                return c.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.suffix = d.a.getFileTypeName(e.name), t.next = 3, Promise.all([d.a.guid(e)]).then((function(t) {
                                                e.guid = t[0]
                                            }));
                                        case 3:
                                            return e.metadata = {
                                                filename: "".concat(e.guid, ".").concat(e.suffix),
                                                origin_filename: e.name,
                                                size: e.size,
                                                file_usage: "Feedback"
                                            }, t.abrupt("return", e);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        onProgress: function(e) {
                            var t = e.percentage,
                                s = e.index;
                            this.$set(this.fileList[s], "progress", t), this.$set(this.fileList, s, this.fileList[s])
                        },
                        _onError: function(e) {
                            var t = e.err;
                            e.rate;
                            console.log(t)
                        },
                        deleteItem: function(e, t) {
                            this.fileList.splice(t, 1), this.guidArr[t] && this.guidArr.splice(t, 1), this.delete(e.guid), 0 === this.fileList.length && (this.disableSubmit = !1)
                        },
                        uploadToFeedback: function() {
                            var e = this,
                                t = window.localStorage.getItem("token") || this.$cookies.get("ou");
                            $.ajax({
                                type: "POST",
                                data: {
                                    email: this.email,
                                    message: this.message,
                                    files: this.guidArr.toString(),
                                    source: window.location.href
                                },
                                url: u.actionServers + u.feedbackUrl,
                                xhrFields: {
                                    withCredentials: !0
                                },
                                headers: {
                                    Authorization: "Bearer ".concat(t)
                                },
                                crossDomain: !0,
                                success: function(t) {
                                    40001 === t.code ? swal({
                                        text: t.msg,
                                        icon: "error"
                                    }) : swal({
                                        title: "Submitted successfully!",
                                        text: "Thank you! We will be in contact shortly.",
                                        icon: "success"
                                    }), e.disableSubmit = !1, e.closeFeedback()
                                }
                            })
                        },
                        beforeSubmit: function() {
                            return "" === this.message ? (!0, void this.contentError()) : /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.email) ? void this.submit() : (!0, void this.emailError())
                        },
                        emailError: function() {
                            swal({
                                text: "Please enter your correct email address.",
                                icon: "error"
                            })
                        },
                        contentError: function() {
                            swal({
                                text: "Please enter your request or question.",
                                icon: "error"
                            })
                        },
                        sizeAndNumError: function() {
                            swal({
                                text: "We only support uploading 2 files and no more than 100MB, if you want more, please contact us.",
                                icon: "error"
                            })
                        },
                        closeFeedback: function() {
                            this.showFeedback = !1, this.disableSubmit = !0, this.guidArr = [], this.fileList = [], this.textTip.contentTip = !1, this.email = "", this.message = "", this.textTip.emailTip = !1, this.textTip.contentTip = !1
                        },
                        abort: function(e) {
                            var t = this.reqs;
                            if (e) {
                                var s = e;
                                e.guid && (s = e.guid), t[s] && t[s].abort()
                            } else Object.keys(t).forEach((function(e) {
                                t[e] && t[e].abort()
                            }))
                        },
                        delete: function(e) {
                            var t = this.reqs;
                            e && t[e] && (t[e].abort(), delete t[e])
                        },
                        post: function(e, t) {
                            var s = this;
                            return new Promise((function(i, a) {
                                var r = e.guid;
                                r || (r = e);
                                var n = window.localStorage.getItem("token") || s.$cookies.get("ou");
                                s.onProgress({
                                    percentage: 0,
                                    status: "Loading",
                                    index: t
                                });
                                var o = {
                                        endpoint: u.actionServers + u.actionUrl,
                                        retryDelays: s.retryDelays,
                                        chunkSize: s.chunkSize,
                                        metadata: e.metadata,
                                        headers: {
                                            Authorization: "Bearer ".concat(n)
                                        },
                                        parallelUploads: s.parallelUploads,
                                        onBeforeRequest: function(e) {
                                            e.getUnderlyingObject().withCredentials = s.withCredentials
                                        },
                                        onProgress: function(e, i) {
                                            var a = (e / i * 100).toFixed(2);
                                            s.onProgress({
                                                percentage: a,
                                                index: t,
                                                status: status,
                                                bytesUploaded: e,
                                                bytesTotal: i,
                                                guid: r
                                            })
                                        },
                                        onSuccess: function(t) {
                                            try {
                                                e.uploadStatus = "success", s.guidArr.push(e.res[e.res.length - 1]._xhr.response && JSON.parse(e.res[e.res.length - 1]._xhr.response).data.guid), i()
                                            } catch (e) {
                                                s._onError({
                                                    err: e,
                                                    rate: e.data && e.data.rate ? e.data.rate : ["Fail", 0, 0]
                                                })
                                            }
                                        },
                                        onError: function(e) {
                                            s._onError({
                                                err: e,
                                                rate: ["Fail", 0, 0]
                                            })
                                        },
                                        onAfterResponse: function(t, s) {
                                            e.res ? e.res.push(s) : e.res = [s]
                                        }
                                    },
                                    l = new f.Upload(e, o);
                                s.reqs[r] = l, l.start()
                            }))
                        }
                    }
                },
                h = s(68),
                m = Object(h.a)(p, (function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showFeedback,
                            expression: "showFeedback"
                        }],
                        staticClass: "feedback-pop"
                    }, [s("div", {
                        staticClass: "feedback-container"
                    }, [s("div", {
                        staticClass: "feedback-content"
                    }, [s("div", {
                        staticClass: "feedback-title"
                    }, [e._v("Feedback")]), e._v(" "), s("div", {
                        staticClass: "feedback-body"
                    }, [s("div", {
                        staticClass: "feedback-email"
                    }, [s("label", {
                        attrs: {
                            for: "feedback-email"
                        }
                    }, [e._v("Email:")]), e._v(" "), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.email,
                            expression: "email"
                        }],
                        attrs: {
                            type: "text",
                            id: "feedback-email",
                            height: "40"
                        },
                        domProps: {
                            value: e.email
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.email = t.target.value)
                            }
                        }
                    }), e._v(" "), s("span", {
                        staticClass: "feedback-tip",
                        class: {
                            show: e.textTip.emailTip
                        }
                    }, [e._v("Please enter your correct email address.")])]), e._v(" "), s("div", {
                        staticClass: "feedback-advice"
                    }, [s("label", {
                        attrs: {
                            for: "feedback-advice"
                        }
                    }, [e._v("Description:")]), e._v(" "), s("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.message,
                            expression: "message"
                        }],
                        attrs: {
                            id: "feedback-advice",
                            placeholder: "Please feel free to contact us when you have any problems. We'll back to you as soon as possible via email."
                        },
                        domProps: {
                            value: e.message
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.message = t.target.value)
                            }
                        }
                    }), e._v(" "), s("span", {
                        staticClass: "feedback-tip",
                        class: {
                            show: e.textTip.contentTip
                        }
                    }, [e._v("Please enter your request or question.")])]), e._v(" "), s("div", {
                        staticClass: "feedback-upload"
                    }, [e._m(0), e._v(" "), s("input", {
                        attrs: {
                            type: "file",
                            id: "feedback-upload",
                            multiple: e.multiple
                        },
                        on: {
                            input: function(t) {
                                return e.addFile(t)
                            }
                        }
                    }), e._v(" "), s("label", {
                        staticClass: "fb-up-label",
                        attrs: {
                            for: "feedback-upload"
                        }
                    }, [s("span", {
                        staticClass: "feedback-addFile",
                        attrs: {
                            id: "feedback-addFile"
                        },
                        on: {
                            drop: function(t) {
                                return e.drop(t)
                            },
                            dragover: function(t) {
                                return e.dragover(t)
                            }
                        }
                    }, [s("img", {
                        staticStyle: {
                            "margin-right": "8px"
                        },
                        attrs: {
                            src: "https://www.media.io/imagesV4/feedback-add.svg",
                            alt: "add file"
                        }
                    }), e._v("Add file or drop files here\n              ")])]), e._v(" "), s("div", {
                        staticClass: "fb-up-fileList",
                        attrs: {
                            id: "fb-up-fileList"
                        }
                    }, e._l(e.fileList, (function(t, i) {
                        return s("div", {
                            key: i,
                            staticClass: "fb-up-fileItem"
                        }, [s("div", {
                            staticClass: "fb-up-fileName text-truncate"
                        }, [e._v("\n                  " + e._s(t.name) + "\n                ")]), e._v(" "), s("div", {
                            staticClass: "progress"
                        }, [s("div", {
                            staticClass: "progress-bar",
                            style: {
                                width: t.progress + "%"
                            },
                            attrs: {
                                role: "progressbar",
                                "aria-valuenow": "10",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                            }
                        }, [s("span", {
                            staticClass: "sr-only"
                        }, [e._v(e._s(t.progress) + "% Complete")])])]), e._v(" "), s("div", {
                            staticClass: "fb-up-close",
                            on: {
                                click: function(s) {
                                    return e.deleteItem(t, i)
                                }
                            }
                        }, [s("i", {
                            staticClass: "icon-close"
                        })])])
                    })), 0)])])]), e._v(" "), s("span", {
                        staticClass: "feedback-close",
                        on: {
                            click: e.closeFeedback
                        }
                    }, [s("i", {
                        staticClass: "icon-close"
                    })]), e._v(" "), s("div", {
                        staticClass: "feedback-submit"
                    }, [s("button", {
                        staticClass: "btn btn-secondary",
                        class: {
                            disabled: e.disableSubmit
                        },
                        on: {
                            click: e.beforeSubmit
                        }
                    }, [e._v("\n          SUBMIT\n        ")])])])]), e._v(" "), s("a", {
                        staticClass: "feedback-button",
                        on: {
                            click: function(t) {
                                e.showFeedback = !e.showFeedback
                            }
                        }
                    })])
                }), [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticStyle: {
                            "margin-bottom": "10px"
                        }
                    }, [t("span", {
                        staticStyle: {
                            color: "rgba(0, 0, 0, 0.48)"
                        }
                    }, [this._v("Attachments: ")]), t("span", {
                        staticClass: "fb-up-fileTip"
                    }, [this._v("No more than 100MB")])])
                }], !1, null, "415ee014", null).exports,
                v = s(7),
                b = s.n(v);
            i.default.config.productionTip = !1, i.default.use(b.a), document.getElementById("media-io-feedback") && new i.default({
                render: function(e) {
                    return e(m)
                }
            }).$mount("#media-io-feedback")
        },
        68: function(e, t, s) {
            "use strict";

            function i(e, t, s, i, a, r, n, o) {
                var l, c = "function" == typeof e ? e.options : e;
                if (t && (c.render = t, c.staticRenderFns = s, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), n ? (l = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(n)
                    }, c._ssrRegister = l) : a && (l = o ? function() {
                        a.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : a), l)
                    if (c.functional) {
                        c._injectStyles = l;
                        var u = c.render;
                        c.render = function(e, t) {
                            return l.call(t), u(e, t)
                        }
                    } else {
                        var d = c.beforeCreate;
                        c.beforeCreate = d ? [].concat(d, l) : [l]
                    }
                return {
                    exports: e,
                    options: c
                }
            }
            s.d(t, "a", (function() {
                return i
            }))
        },
        88: function(e, t, s) {
            var i = s(160),
                a = s(161),
                r = s(158),
                n = s(162);
            e.exports = function(e) {
                return i(e) || a(e) || r(e) || n()
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        }
    }
]);