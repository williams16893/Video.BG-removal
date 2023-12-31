! function(e, o) {
    for (var n in o) e[n] = o[n]
}(window, function(e) {
    var o = {};

    function n(t) {
        if (o[t]) return o[t].exports;
        var r = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = o, n.d = function(e, o, t) {
        n.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, o) {
        if (1 & o && (e = n(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (n.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var r in e) n.d(t, r, function(o) {
                return e[o]
            }.bind(null, r));
        return t
    }, n.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(o, "a", o), o
    }, n.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, n.p = "", n(n.s = 6)
}([function(e, o, n) {
    "use strict";
    var t, r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var o, n = 1, t = arguments.length; n < t; n++)
                for (var r in o = arguments[n]) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            return e
        }).apply(this, arguments)
    };

    function i(e, o, n) {
        return e + (-1 === e.indexOf("?") ? "?" : "&") + o + "=" + n
    }

    function s(e) {
        return i(e, "version", encodeURIComponent(Dropbox.VERSION))
    }

    function a(e, o) {
        var n = encodeURIComponent(window.location.protocol + "//" + window.location.host),
            t = encodeURIComponent(Dropbox.appKey),
            r = encodeURIComponent(e.linkType || ""),
            a = encodeURIComponent(e._trigger || "js"),
            c = Boolean(e.multiselect),
            l = encodeURIComponent(d(e.extensions, "join", function(e) {
                return e.join(" ")
            }) || ""),
            u = Boolean(e.folderselect);
        o = Boolean(o);
        var p = Dropbox.baseUrl + "/chooser?origin=" + n + "&app_key=" + t + "&link_type=" + r + "&trigger=" + a + "&multiselect=" + c + "&extensions=" + l + "&folderselect=" + u + "&iframe=" + o;
        return void 0 !== e.fileselect && (p = i(p, "fileselect", Boolean(e.fileselect))), void 0 !== e.sizeLimit && (p = i(p, "size_limit", e.sizeLimit)), null != e.initialNavigation && (null != e.initialNavigation.mode && (p = i(p, "initial_navigation_mode", encodeURIComponent(e.initialNavigation.mode))), null != e.initialNavigation.role && (p = i(p, "initial_navigation_role", encodeURIComponent(e.initialNavigation.role))), e.initialNavigation.cursor && (p = i(p, "initial_navigation_cursor", encodeURIComponent(e.initialNavigation.cursor)))), null != e.initialViewType && (p = i(p, "initial_view_type", encodeURIComponent(e.initialViewType))), null != e.fields && (p = i(p, "fields", encodeURIComponent("function" == typeof e.fields.join ? e.fields.join(" ") : void 0))), !1 === e.showSignOut && (p = i(p, "show_sign_out", "false")), e.initialNavigationPath && (p = i(p, "initial_navigation_path", encodeURIComponent(e.initialNavigationPath))), e.requiredPermissions && (p = i(p, "required_permissions", encodeURIComponent(d(e.requiredPermissions, "join", function(e) {
            return e.join(" ")
        }) || ""))), s(p)
    }

    function c(e) {
        var n = {
            options: r({}, e, {
                success: function(t, r) {
                    "function" == typeof e.success && e.success(t, r), o.currentChooserSession === n && (o.currentChooserSession = null)
                },
                cancel: function(t) {
                    "function" == typeof e.cancel && e.cancel(t), o.currentChooserSession === n && (o.currentChooserSession = null)
                }
            })
        };
        return o.currentChooserSession = n, n
    }

    function l(e) {
        var o = document.createElement("iframe");
        return o.src = "about:blank", o._postAction = e, o.name = "dropbox-dropins", o.style.display = "block", o.style.backgroundColor = "white", o.style.border = "none", o
    }

    function u(e, o) {
        var n, r = encodeURIComponent(Dropbox.appKey),
            i = Dropbox.baseUrl + "/dropins/job_status?job=" + o + "&app_key=" + r;
        i = s(i);
        var a = function(o) {
            "COMPLETE" === o.status ? ("function" == typeof e.progress && e.progress(1), "function" == typeof e.success && e.success()) : "PENDING" === o.status || "DOWNLOADING" === o.status ? (null != o.progress && "function" == typeof e.progress && e.progress(o.progress / 100), setTimeout(n, 1500)) : "FAILED" === o.status && "function" == typeof e.error && e.error(o.error)
        };
        if ("withCredentials" in new XMLHttpRequest) n = function() {
            var o = new XMLHttpRequest;
            return o.onload = function() {
                return a(JSON.parse(o.responseText))
            }, o.onerror = function() {
                return "function" == typeof e.error ? e.error() : void 0
            }, o.open("GET", i, !0), o.send()
        };
        else if (Dropbox.disableJSONP) {
            if ("undefined" == typeof XDomainRequest || null === XDomainRequest || "https:" !== document.location.protocol) throw new Error("Unable to find suitable means of cross domain communication");
            n = function() {
                var o = new XDomainRequest;
                return o.onload = function() {
                    return a(JSON.parse(o.responseText))
                }, o.onerror = function() {
                    return "function" == typeof e.error ? e.error() : void 0
                }, o.open("get", i), o.send()
            }
        } else n = function() {
            var o = "DropboxJsonpCallback" + t++,
                n = !1;
            window[o] = function(e) {
                return n = !0, a(e)
            };
            var r = document.createElement("script");
            return r.src = i + "&callback=" + o, r.onreadystatechange = function() {
                if ("loaded" === r.readyState) return n || "function" == typeof e.error && e.error(), null != r.parentNode ? r.parentNode.removeChild(r) : void 0
            }, document.getElementsByTagName("head")[0].appendChild(r)
        };
        return "function" == typeof e.progress && e.progress(0), n()
    }

    function p(e, n, t) {
        var r, i = JSON.parse(e.data);
        switch (r = null != o.ieframe && t._popup ? o.ieframe.contentWindow : e.source, void 0 !== i.sequence_number && r.postMessage(JSON.stringify({
            method: "ack",
            sequence_number: i.sequence_number
        }), Dropbox.baseUrl), i.method) {
            case "origin_request":
                e.source.postMessage(JSON.stringify({
                    method: "origin"
                }), Dropbox.baseUrl);
                break;
            case "ready":
                if (null != t.files) {
                    var s = void 0;
                    if (t._fetch_url_on_save) {
                        for (var a = [], c = 0; c < t.files.length; c++) {
                            var l = t.files[c];
                            a.push({
                                filename: l.filename
                            })
                        }
                        s = JSON.stringify({
                            method: "files_with_callback",
                            params: a
                        })
                    } else s = JSON.stringify({
                        method: "files",
                        params: t.files
                    });
                    if (r.postMessage(s, Dropbox.baseUrl), null != t._ews_auth_token) {
                        var p = JSON.stringify({
                            method: "ews_auth_token",
                            params: {
                                ews_auth_token: t._ews_auth_token
                            }
                        });
                        r.postMessage(p, Dropbox.baseUrl)
                    }
                }
                "function" == typeof t.ready && t.ready();
                break;
            case "files_selected":
            case "files_saved":
                "function" == typeof n && n(), "function" == typeof t.success && t.success(i.params, o.last_navigation);
                break;
            case "cursor_changed":
                o.last_navigation = {
                    cursor: i.params
                };
                break;
            case "progress":
                "function" == typeof t.progress && t.progress(i.params);
                break;
            case "close_dialog":
                "function" == typeof n && n(), "function" == typeof t.cancel && t.cancel(o.last_navigation);
                break;
            case "resize":
                "function" == typeof t.resize && t.resize(i.params);
                break;
            case "error":
                "function" == typeof t.error && t.error(i.params);
                break;
            case "error_and_close":
                "function" == typeof n && n(), "function" == typeof t.error && t.error(i.params);
                break;
            case "job_id":
                "function" == typeof n && n(), u(t, i.params);
                break;
            case "save_callback":
                ! function(e, o, n) {
                    if (e._fetch_url_on_save) {
                        var t = e.fetch_urls_fn;
                        "function" != typeof t && "function" == typeof e.error && e.error("Something went wrong, file url callback not provided."), t(function(e) {
                            if (null == e) throw new Error("Please supply {urls: [...]} to success callback");
                            if (null != e.url && null != e.urls) throw new Error("Do not pass both url and urls to the save callback");
                            if (null != e.url && (e.urls = [e.url]), null == e.urls) throw new Error("Please supply {urls: [...]} to success callback");
                            return i = {
                                method: "continue_saving",
                                params: {
                                    download_urls: e.urls
                                }
                            }, void r.postMessage(JSON.stringify(i), Dropbox.baseUrl)
                        }, o)
                    }
                }(t, i.params);
                break;
            case "_debug_log":
                "undefined" != typeof console && null !== console && console.log(i.params.msg)
        }
    }

    function d(e, o, n) {
        return void 0 !== e && null !== e && "function" == typeof e[o] ? n(e, o) : void 0
    }
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), null == window.Dropbox && (window.Dropbox = {}), o.popupDimensionsString = function(e, o) {
        return "width=" + e + ",height=" + o + ",left=" + (window.screenX + ((window.outerWidth || document.documentElement.offsetWidth) - e) / 2) + ",top=" + (window.screenY + ((window.outerHeight || document.documentElement.offsetHeight) - o) / 2)
    }, o.chooserUrl = a, o.createIEFrame = function() {
        /\bTrident\b/.test(navigator.userAgent) && null != document.body && null == o.ieframe && (o.ieframe = document.createElement("iframe"), o.ieframe.setAttribute("id", "dropbox_xcomm"), o.ieframe.setAttribute("src", Dropbox.baseUrl + "/static/api/1/xcomm.html"), o.ieframe.style.display = "none", document.body.appendChild(o.ieframe))
    }, o.createChooserSession = c, o.createWidgetElement = l, o.handleJobId = u, o.handleMessageEvent = p, o.saverUrl = function(e) {
        var o = encodeURIComponent(window.location.protocol + "//" + window.location.host),
            n = encodeURIComponent(Dropbox.appKey);
        return e = Boolean(e), s(Dropbox.baseUrl + "/saver?origin=" + o + "&app_key=" + n + "&iframe=" + e)
    }, o.__guardMethod__ = d, o.__guard__ = function(e, o) {
        return void 0 !== e && null !== e ? o(e) : void 0
    }, o.initModule = function() {
        o.last_navigation = {}, o.ieframe = null, o.currentChooserSession = null, t = 1, null == Dropbox.baseUrl && (Dropbox.baseUrl = "https://www.dropbox.com"), null == Dropbox.blockBaseUrl && (Dropbox.blockBaseUrl = "https://dl-web.dropbox.com"), Dropbox.addListener = function(e, o, n) {
            e.addEventListener ? e.addEventListener(o, n, !1) : e.attachEvent("on" + o, function(e) {
                return e.preventDefault = function() {
                    return !1
                }, n(e)
            })
        }, Dropbox.removeListener = function(e, o, n) {
            e.removeEventListener ? e.removeEventListener(o, n, !1) : e.detachEvent("on" + o, n)
        }, Dropbox.createChooserWidget = function(e) {
            var o = c(e),
                n = l(a(o.options, !0));
            return n._handler = function(e) {
                e.source === n.contentWindow && e.origin === Dropbox.baseUrl && p(e, null, o.options)
            }, Dropbox.addListener(window, "message", n._handler), n
        }, Dropbox.cleanupWidget = function(e) {
            if (!e._handler) throw new Error("Invalid widget!");
            Dropbox.removeListener(window, "message", e._handler), delete e._handler
        }
    }
}, function(e, o, n) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var t = n(0),
        r = ["text", "documents", "images", "video", "audio"];
    o.genericDropins = {
        init: function() {}
    };
    var i = function(e) {
        return e
    };

    function s(e, o) {
        null != o ? o.innerHTML = "" : (o = document.createElement("a")).href = "#", o.className += " dropbox-dropin-btn", Dropbox.isBrowserSupported() ? o.className += " dropbox-dropin-default" : o.className += " dropbox-dropin-disabled";
        var n = document.createElement("span");
        return n.className = "dropin-btn-status", o.appendChild(n), e = document.createTextNode(e), o.appendChild(e), o
    }

    function a(e) {
        return e.replace(/\/+$/g, "").split("/").pop()
    }

    function c(e) {
        var o = document.createElement("a");
        return o.href = e, a(o.pathname)
    }
    o.createDropinButton = s, o.filenameFromPath = a, o.initModule = function() {
        t.initModule(), null == Dropbox.appKey && (Dropbox.appKey = t.__guard__(document.getElementById("dropboxjs"), function(e) {
            return e.getAttribute("data-app-key")
        })), Dropbox.init = function(e) {
            null != e.translation_function && (i = e.translation_function), null != e.appKey && (Dropbox.appKey = e.appKey)
        };
        var e = function(e) {
            var o, n, t;
            if ("string" == typeof e[0]) t = e.shift(), o = "string" == typeof e[0] ? e.shift() : c(t), (n = e.shift() || {}).files = [{
                url: t,
                filename: o
            }];
            else {
                if (null == (n = e.shift())) throw new Error("Missing arguments. See documentation.");
                if ((null == n.files || !n.files.length) && "function" != typeof n.files) throw new Error("Missing files. See documentation.");
                if (null != n.fetch_urls_fn) {
                    if ("function" != typeof n.fetch_urls_fn) throw new Error("fetch_urls_fn must be a function if supplied.  See documentation.");
                    n._fetch_url_on_save = !0
                }
                for (var r = 0; r < n.files.length; r++) {
                    var i = n.files[r];
                    if ("function" == typeof i.url && (n._fetch_url_on_save = !0, n.fetch_urls_fn = i.url, i.url = null, r > 0)) throw new Error("Old style url as callback is only supported for single files.");
                    i.filename || (i.filename = c(i.url))
                }
            }
            return n
        };
        Dropbox.save = function() {
            for (var o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
            var s = e(o);
            if (Dropbox.isBrowserSupported()) {
                if (s._popup = !0, "object" != typeof s.files || !s.files.length) throw new Error("The object passed in must have a 'files' property that contains a list of objects. See documentation.");
                if (s.iframe && !s.windowName) throw new Error("Dropbox.save does not yet support creating its own iframe.                       windowName must be provided when the iframe option is present.");
                for (var a = 0, c = s.files; a < c.length; a++) {
                    var l = c[a];
                    if (s._fetch_url_on_save) {
                        if (s.fetch_urls_fn) {
                            if (null != l.url) throw new Error("You passed in a 'fetch_urls_fn' option to specify the file URLs.  Don't include individual URLs in each file objects.")
                        } else if ("function" != typeof l.url) throw new Error("File urls should be all urls, or a single file with function. See documentation.")
                    } else if ("string" != typeof l.url) throw new Error("File urls to download incorrectly configured. Each file must have a url. See documentation.")
                }
                var u = t.popupDimensionsString(735, 670);
                return n(t.saverUrl(s.iframe), u, s).window
            }
            alert(i("Your browser does not support the Dropbox Saver"))
        };
        var n = function(e, o, n) {
                var r = function() {
                        a.closed || (a.close(), a.postMessage(JSON.stringify({
                            method: "close"
                        }), Dropbox.baseUrl)), Dropbox.removeListener(window, "message", i), clearInterval(c)
                    },
                    i = function(e) {
                        e.source !== a && e.source !== (void 0 !== t.ieframe && null !== t.ieframe ? t.ieframe.contentWindow : void 0) || t.handleMessageEvent(e, r, n)
                    },
                    s = n.iframe ? "" : o + ",resizable,scrollbars",
                    a = window.open(e, n.windowName || "dropbox", s);
                if (!a) throw new Error("Failed to open/load the window. Dropbox.choose and Dropbox.save should only be called from within a user-triggered event handler such as a tap or click event.");
                a.focus();
                var c = setInterval(function() {
                    (function() {
                        try {
                            return a.closed
                        } catch (e) {}
                    })() && (r(), "function" == typeof n.cancel && n.cancel(t.last_navigation))
                }, 100);
                return Dropbox.addListener(window, "message", i), {
                    window: a,
                    onClose: r
                }
            },
            a = function(e) {
                null == e.success && t.__guardMethod__(console, "warn", function(e) {
                    return e.warn("You must provide a success callback to the Chooser to see the files that the user selects")
                }), void 0 === e.fileselect || Boolean(e.fileselect) || Boolean(e.folderselect) || t.__guardMethod__(console, "error", function(e) {
                    return e.error("You must enable either fileselect or folderselect on the Chooser so the user can select something")
                });
                var o = function() {
                    return t.__guardMethod__(console, "warn", function(e) {
                        return e.warn("The provided list of extensions or file types is not valid. See Chooser documentation: https://www.dropbox.com/developers/dropins/chooser/js")
                    }), t.__guardMethod__(console, "warn", function(e) {
                        return e.warn("Available file types are: " + r.join(", "))
                    }), delete e.extensions
                };
                if (null != e.extensions && null != Array.isArray)
                    if (Array.isArray(e.extensions))
                        for (var n = 0, i = e.extensions; n < i.length; n++) {
                            var s = i[n];
                            s.match(/^\.[\.\w$#&+@!()\-'`_~]+$/) || -1 !== r.indexOf(s) || o()
                        } else o();
                return void 0 !== e.sizeLimit && "number" != typeof e.sizeLimit && e.sizeLimit <= 0 && t.__guardMethod__(console, "error", function(e) {
                    return e.error("The sizeLimit option, if provided, must be a positive number")
                }), e
            },
            l = function(e) {
                if (Dropbox.isBrowserSupported()) {
                    var o, r, s = t.createChooserSession(e);
                    if (e.iframe && !e.windowName) {
                        var a = (o = t.chooserUrl(e, !0), (r = document.createElement("iframe")).src = o, r.style.display = "block", r.style.backgroundColor = "white", r.style.border = "none", r);
                        a.style.width = "735px", a.style.height = "552px", a.style.margin = "125px auto 0 auto", a.style.border = "1px solid #ACACAC", a.style.boxShadow = "rgba(0, 0, 0, .2) 0px 4px 16px";
                        var c = document.createElement("div");
                        c.style.position = "fixed", c.style.left = c.style.right = c.style.top = c.style.bottom = "0", c.style.zIndex = "1000", c.style.backgroundColor = "rgba(160, 160, 160, 0.2)", c.appendChild(a), document.body.appendChild(c);
                        var l = function(e) {
                            e.source === a.contentWindow && (s.onClose = function() {
                                document.body.removeChild(c), Dropbox.removeListener(window, "message", l)
                            }, t.handleMessageEvent(e, s.onClose, s.options))
                        };
                        Dropbox.addListener(window, "message", l)
                    } else {
                        var u = t.popupDimensionsString(735, 552);
                        s.onClose = n(t.chooserUrl(s.options, s.options.iframe), u, s.options).onClose
                    }
                } else alert(i("Your browser does not support the Dropbox Chooser"))
            };
        Dropbox.choose = function(e) {
            null == e && (e = {}), e = a(e), l(e)
        }, Dropbox.cancelChooser = function() {
            t.currentChooserSession && (t.currentChooserSession.onClose && t.currentChooserSession.onClose(), t.currentChooserSession.options.cancel && t.currentChooserSession.options.cancel(t.last_navigation))
        }, Dropbox.isBrowserSupported = function() {
            var e = function() {
                for (var e = 0, o = [/IEMobile\/(7|8|9|10)\./, /BB10;/, /CriOS/]; e < o.length; e++)
                    if (o[e].test(navigator.userAgent)) return !1;
                return "undefined" != typeof JSON && null !== JSON && null != window.postMessage && null != window.addEventListener && !/MSIE [7-9]/.test(navigator.userAgent)
            }();
            return Dropbox.isBrowserSupported = function() {
                return e
            }, e
        }, Dropbox.createChooseButton = function(e) {
            null == e && (e = {}), e = a(e);
            var o = s(i("Choose from Dropbox"));
            return Dropbox.addListener(o, "click", function(n) {
                n.preventDefault(), l({
                    success: function(n, t) {
                        o.className = "dropbox-dropin-btn dropbox-dropin-success", "function" == typeof e.success && e.success(n, t)
                    },
                    cancel: e.cancel,
                    linkType: e.linkType,
                    multiselect: e.multiselect,
                    fileselect: e.fileselect,
                    folderselect: e.folderselect,
                    extensions: e.extensions,
                    sizeLimit: e.sizeLimit,
                    iframe: e.iframe,
                    requiredPermissions: e.requiredPermissions,
                    _trigger: "button"
                })
            }), o
        }, Dropbox.createSaveButton = function() {
            for (var o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
            var t = e(o),
                r = o.shift();
            return r = s(i("Save to Dropbox"), r), Dropbox.addListener(r, "click", function(e) {
                if (e.preventDefault(), r.className.indexOf("dropbox-dropin-error") >= 0 || r.className.indexOf("dropbox-dropin-default") >= 0 || r.className.indexOf("dropbox-dropin-disabled") >= 0) {
                    var o = ("function" == typeof t.files ? t.files() : void 0) || t.files;
                    if (!(null != o ? o.length : void 0)) return r.className = "dropbox-dropin-btn dropbox-dropin-error", void("function" == typeof t.error && t.error("Missing files"));
                    Dropbox.save({
                        files: o,
                        success: function() {
                            r.className = "dropbox-dropin-btn dropbox-dropin-success", "function" == typeof t.success && t.success()
                        },
                        progress: function(e) {
                            r.className = "dropbox-dropin-btn dropbox-dropin-progress", "function" == typeof t.progress && t.progress(e)
                        },
                        cancel: function() {
                            "function" == typeof t.cancel && t.cancel()
                        },
                        error: function(e) {
                            r.className = "dropbox-dropin-btn dropbox-dropin-error", "function" == typeof t.error && t.error(e)
                        }
                    })
                }
            }), r
        };
        var u = function(e, o) {
                return "  background: " + e + ";\n  background: -moz-linear-gradient(top, " + e + " 0%, " + o + " 100%);\n  background: -webkit-linear-gradient(top, " + e + " 0%, " + o + " 100%);\n  background: linear-gradient(to bottom, " + e + " 0%, " + o + " 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='" + e + "', endColorstr='" + o + "',GradientType=0);  "
            },
            p = document.createElement("style");
        p.type = "text/css";
        var d = '  @-webkit-keyframes rotate {\n    from  { -webkit-transform: rotate(0deg); }\n    to   { -webkit-transform: rotate(360deg); }\n  }\n\n  @keyframes rotate {\n    from  { transform: rotate(0deg); }\n    to   { transform: rotate(360deg); }\n  }\n\n    .dropbox-dropin-btn, .dropbox-dropin-btn:link, .dropbox-dropin-btn:hover {\n      display: inline-block;\n      height: 14px;\n      font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;\n      font-size: 11px;\n      font-weight: 600;\n      color: #636363;\n      text-decoration: none;\n      padding: 1px 7px 5px 3px;\n      border: 1px solid #ebebeb;\n      border-radius: 2px;\n      border-bottom-color: #d4d4d4;\n      ' + u("#fcfcfc", "#f5f5f5") + "\n    }\n\n    .dropbox-dropin-default:hover, .dropbox-dropin-error:hover {\n      border-color: #dedede;\n      border-bottom-color: #cacaca;\n      " + u("#fdfdfd", "#f5f5f5") + "\n    }\n\n    .dropbox-dropin-default:active, .dropbox-dropin-error:active {\n      border-color: #d1d1d1;\n      box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n    }\n\n    .dropbox-dropin-btn .dropin-btn-status {\n      display: inline-block;\n      width: 15px;\n      height: 14px;\n      vertical-align: bottom;\n      margin: 0 5px 0 2px;\n      background: transparent url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-saver-status.png') no-repeat;\n      position: relative;\n      top: 2px;\n    }\n\n    .dropbox-dropin-default .dropin-btn-status {\n      background-position: 0px 0px;\n    }\n\n    .dropbox-dropin-progress .dropin-btn-status {\n      width: 18px;\n      margin: 0 4px 0 0;\n      background: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-progress.png') no-repeat center center;\n        -webkit-animation-name: rotate;\n        -webkit-animation-duration: 1.7s;\n        -webkit-animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n      animation-name: rotate;\n      animation-duration: 1.7s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n\n    .dropbox-dropin-success .dropin-btn-status {\n      background-position: -15px 0px;\n    }\n\n    .dropbox-dropin-disabled {\n      background: #e0e0e0;\n      border: 1px #dadada solid;\n      border-bottom: 1px solid #ccc;\n      box-shadow: none;\n    }\n\n    .dropbox-dropin-disabled .dropin-btn-status {\n      background-position: -30px 0px;\n    }\n\n    .dropbox-dropin-error .dropin-btn-status {\n      background-position: -45px 0px;\n    }\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.4) {\n      .dropbox-dropin-btn .dropin-btn-status {\n        background-image: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-saver-status-2x.png');\n        background-size: 60px 14px;\n          -webkit-background-size: 60px 14px;\n      }\n\n      .dropbox-dropin-progress .dropin-btn-status {\n        background: url('" + Dropbox.baseUrl + "/static/images/widgets/dbx-progress-2x.png') no-repeat center center;\n        background-size: 20px 20px;\n          -webkit-background-size: 20px 20px;\n      }\n  }\n\n    .dropbox-saver:hover, .dropbox-chooser:hover {\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    .dropbox-chooser, .dropbox-dropin-btn {\n      line-height: 11px !important;\n      text-decoration: none !important;\n      box-sizing: content-box !important;\n        -webkit-box-sizing: content-box !important;\n        -moz-box-sizing: content-box !important;\n    }\n    ";
        p.styleSheet ? p.styleSheet.cssText = d : p.textContent = d, document.getElementsByTagName("head")[0].appendChild(p), setTimeout(t.createIEFrame, 0);
        var f = function() {
            document.removeEventListener ? document.removeEventListener("DOMContentLoaded", f, !1) : document.detachEvent && document.detachEvent("onreadystatechange", f), t.createIEFrame(), o.genericDropins.init()
        };
        "interactive" === document.readyState || "complete" === document.readyState ? setTimeout(f, 0) : document.addEventListener ? document.addEventListener("DOMContentLoaded", f, !1) : document.attachEvent("onreadystatechange", f)
    }
}, function(e, o, n) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var t = window.location.protocol + "//" + window.location.host,
        r = function() {
            function e(o) {
                if (this.origin = t, this.sendMessage = function(e) {}, this.state = {}, this.options = o, !this.options) throw new Error("options must be provided");
                if (!this.options.appKey) throw new Error("appKey must be provided");
                e.validateOnError(this.options.onError)
            }
            return e.validateOnError = function(e) {
                if (e && "function" != typeof e) throw new Error("onError must be a function")
            }, e.prototype.setOnError = function(o) {
                e.validateOnError(o), this.options.onError = o
            }, e.prototype.hasOnCloseDialogMessage = function() {
                return void 0 !== this.onCloseDialogMessage
            }, e.prototype.setOnCloseDialogMessage = function(e) {
                if ("function" != typeof e) throw new Error("onCloseDialogMessage must be a function");
                this.onCloseDialogMessage = e
            }, e.prototype.sendState = function() {
                this.sendMessage({
                    method: "state",
                    params: this.state
                })
            }, e.prototype.url = function() {
                var e = [{
                    key: "app_key",
                    value: this.options.appKey
                }, {
                    key: "origin",
                    value: this.origin
                }].concat(this.urlParams()).map(function(e) {
                    return encodeURIComponent(e.key) + "=" + encodeURIComponent(e.value)
                }).join("&");
                return {
                    pathname: this.urlPathname(),
                    search: "?" + e
                }
            }, e.prototype.windowDimensions = function() {
                return {
                    width: 735,
                    height: 552
                }
            }, e.prototype.handleMessage = function(e) {
                switch (void 0 !== e.sequenceNumber && this.sendMessage({
                    method: "ack",
                    sequenceNumber: e.sequenceNumber
                }), e.method) {
                    case "origin_request":
                        this.sendMessage({
                            method: "origin"
                        });
                        break;
                    case "ready":
                        this.sendState();
                        break;
                    case "error":
                        this.options.onError && this.options.onError(e.params);
                        break;
                    case "close_dialog":
                        this.onCloseDialogMessage && this.onCloseDialogMessage(), this.onCloseDialogMessage = void 0
                }
            }, e
        }();
    o.Dropin = r
}, function(e, o, n) {
    "use strict";
    var t, r = this && this.__extends || (t = function(e, o) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, o) {
                e.__proto__ = o
            } || function(e, o) {
                for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
            })(e, o)
    }, function(e, o) {
        function n() {
            this.constructor = e
        }
        t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
    });
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i = "https://www.dropbox.com/developers/dropins/chooser/js",
        s = ["text", "documents", "images", "video", "audio"],
        a = function(e) {
            function o(o) {
                var n = e.call(this, o) || this;
                return n.validateOptions = function() {
                    var e = function(e, o) {
                        if (void 0 !== n.options[e] && typeof n.options[e] !== o) throw new Error("The " + e + " option, if provided, must have type " + o)
                    };
                    if (e("linkType", "string"), e("_trigger", "string"), void 0 !== n.options.extensions) {
                        if (!(n.options.extensions instanceof Array)) throw new Error("The extensions option, if provided, must be an array");
                        for (var o = 0, t = n.options.extensions; o < t.length; o++) {
                            var r = t[o];
                            if ("string" != typeof r || !r.match(/^\.[\.\w$#&+@!()\-'`_~]+$/) && -1 === s.indexOf(r)) throw new Error("The provided list of extensions or file types is not valid. See Chooser documentation: " + i + ". Available file types are: " + s.join(", "))
                        }
                    }
                    if (e("multiselect", "boolean"), e("iframe", "boolean"), e("folderselect", "boolean"), e("fileselect", "boolean"), void 0 !== n.options.fileselect && !n.options.fileselect && !n.options.folderselect) throw new Error("You must enable either fileselect or folderselect on the Chooser so the user can select something");
                    if (e("sizeLimit", "number"), void 0 !== n.options.sizeLimit && n.options.sizeLimit <= 0) throw new Error("The sizeLimit option, if provided, must be a positive number");
                    var a = n.options.initialNavigation;
                    if (void 0 !== a) {
                        if (void 0 !== a.mode && "string" != typeof a.mode) throw new Error("The initialNavigation.mode option, if provided, must be a string");
                        if (void 0 !== a.role && "string" != typeof a.role) throw new Error("The initialNavigation.role option, if provided, must be a string");
                        if (void 0 !== a.cursor && "string" != typeof a.cursor) throw new Error("The initialNavigation.cursor option, if provided, must be a string")
                    }
                    if (e("initialViewType", "string"), void 0 !== n.options.fields) {
                        if (!(n.options.fields instanceof Array)) throw new Error("The fields option, if provided, must be an array");
                        for (var c = 0, l = n.options.fields; c < l.length; c++)
                            if ("string" != typeof l[c]) throw new Error("The fields option, if provided, must be an array of strings")
                    }
                    if (e("showSignOut", "boolean"), e("version", "string"), e("cl", "string"), "function" != typeof n.options.onSuccess) throw new Error("You must provide a success callback to the Chooser to see the files that the user selects");
                    e("onReady", "function"), e("onCancel", "function"), e("onError", "function"), e("onResize", "function")
                }, n.validateOptions(), n
            }
            return r(o, e), o.prototype.urlParams = function() {
                var e = [],
                    o = function(o, n) {
                        void 0 !== n && e.push({
                            key: o,
                            value: "" + n
                        })
                    };
                return o("link_type", this.options.linkType), e.push({
                    key: "trigger",
                    value: this.options._trigger || "js"
                }), void 0 !== this.options.extensions && e.push({
                    key: "extensions",
                    value: this.options.extensions.join(" ")
                }), o("multiselect", this.options.multiselect), o("iframe", this.options.iframe), o("folderselect", this.options.folderselect), o("fileselect", this.options.fileselect), o("size_limit", this.options.sizeLimit), void 0 !== this.options.initialNavigation && (o("initial_navigation_mode", this.options.initialNavigation.mode), o("initial_navigation_role", this.options.initialNavigation.role), o("initial_navigation_cursor", this.options.initialNavigation.cursor)), o("initial_view_type", this.options.initialViewType), void 0 !== this.options.fields && e.push({
                    key: "fields",
                    value: this.options.fields.join(" ")
                }), o("show_sign_out", this.options.showSignOut), o("version", this.options.version), o("cl", this.options.cl), e
            }, o.prototype.urlPathname = function() {
                return "/chooser"
            }, o.prototype.close = function() {
                "function" == typeof this.onCloseDialogMessage && this.onCloseDialogMessage()
            }, o.prototype.handleMessage = function(o) {
                switch (e.prototype.handleMessage.call(this, o), o.method) {
                    case "ready":
                        void 0 !== this.options.onReady && this.options.onReady();
                        break;
                    case "files_selected":
                        this.close(), this.options.onSuccess(o.params, this.lastNavigation);
                        break;
                    case "cursor_changed":
                        this.lastNavigation = {
                            cursor: o.params
                        };
                        break;
                    case "close_dialog":
                        void 0 !== this.options.onCancel && this.options.onCancel(this.lastNavigation);
                        break;
                    case "resize":
                        void 0 !== this.options.onResize && this.options.onResize(o.params);
                        break;
                    case "error":
                        this.close();
                        break;
                    case "_debug_log":
                        void 0 !== console && null !== console && console.log(o.params.msg)
                }
            }, o
        }(n(2).Dropin);
    o.BaseChooser = a;
    var c = function(e) {
        function o(o) {
            return e.call(this, o) || this
        }
        return r(o, e), o
    }(a);
    o.Chooser = c
}, , , function(e, o, n) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), n(7).initModule(), o.Dropbox = window.Dropbox
}, function(e, o, n) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var t = n(8),
        r = n(1),
        i = n(3),
        s = n(10),
        a = n(11),
        c = n(12);
    o.initModule = function() {
        r.initModule(), Dropbox.VERSION = "2";
        var e = new t.BrowserEnvironment;
        Dropbox.mount = e.mount.bind(e), Dropbox.openWindow = e.openWindow.bind(e);
        var o = e.remove.bind(e);
        Dropbox.unmount = o, Dropbox.closeWindow = o, Dropbox.Mover = a.Mover, Dropbox.Previewer = c.Previewer, Dropbox.Chooser = i.Chooser, Dropbox.ZoomChooser = s.ZoomChooser, r.genericDropins.init = function() {
            for (var e = document.getElementsByTagName("a"), o = 0; o < e.length; o++) {
                var n = e[o];
                (n.getAttribute("class") || "").split(" ").indexOf("dropbox-saver") >= 0 && function(e) {
                    Dropbox.createSaveButton({
                        files: function() {
                            return [{
                                url: e.getAttribute("data-url") || e.href,
                                filename: e.getAttribute("data-filename") || r.filenameFromPath(e.pathname)
                            }]
                        }
                    }, e)
                }(n)
            }
        }
    }
}, function(e, o, n) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var t = n(9);

    function r(e) {
        return function() {
            for (var o = 0, n = e; o < n.length; o++)(0, n[o])()
        }
    }
    o.TARGET_ORIGIN = "https://www.dropbox.com";
    var i = function() {},
        s = function() {
            function e() {
                var e = this;
                this.activeDropins = [], this.deleteActiveDropin = function(o) {
                    return function() {
                        var n = e.activeDropins.indexOf(o); - 1 !== n && e.activeDropins.splice(n, 1)
                    }
                }, this.openWindow = function(n) {
                    e.throwIfAlreadyActive(n);
                    var s = r([]);
                    try {
                        var a = n.url(),
                            c = "" + o.TARGET_ORIGIN + a.pathname + a.search,
                            l = t.PopupEnvironment.open(c, n.windowDimensions(), function() {
                                s()
                            });
                        s = r([l.stopInterval, s]);
                        var u = e.attach(n, l.messagingWindow);
                        s = r([function() {
                            n.sendMessage({
                                method: "close"
                            })
                        }, s = r([u, s])]);
                        var p = {
                            dropin: n,
                            cleanup: i
                        };
                        e.activeDropins.push(p), s = r([e.deleteActiveDropin(p), s]), n.hasOnCloseDialogMessage() || n.setOnCloseDialogMessage(s), p.cleanup = s
                    } catch (e) {
                        throw s(), e
                    }
                }
            }
            return e.prototype.mount = function(e, n) {
                if (!e) throw new Error("Dropbox component must be provided");
                if (!n) throw new Error("Container element must be provided");
                this.throwIfAlreadyActive(e);
                var t = r([]);
                try {
                    var s = this.createIframe();
                    t = r([this.attach(e, function() {
                        if (!s.contentWindow) throw new Error("iframe does not contain a contentWindow");
                        return s.contentWindow
                    }), t]);
                    var a = e.url();
                    s.src = "" + o.TARGET_ORIGIN + a.pathname + a.search + "&iframe=true", n.appendChild(s), t = r([function() {
                        n.removeChild(s)
                    }, t]);
                    var c = {
                        dropin: e,
                        cleanup: i
                    };
                    this.activeDropins.push(c), t = r([this.deleteActiveDropin(c), t]), e.hasOnCloseDialogMessage() || e.setOnCloseDialogMessage(t), c.cleanup = t
                } catch (e) {
                    throw t(), e
                }
            }, e.prototype.remove = function(e) {
                if (!e) throw new Error("Dropbox component must be provided");
                for (var o = 0, n = this.activeDropins; o < n.length; o++) {
                    var t = n[o];
                    if (t.dropin === e) {
                        t.cleanup();
                        break
                    }
                }
            }, e.prototype.throwIfAlreadyActive = function(e) {
                for (var o = 0, n = this.activeDropins; o < n.length; o++)
                    if (n[o].dropin === e) throw new Error("Component is already in use")
            }, e.prototype.attach = function(e, n) {
                e.sendMessage = function(e) {
                    n().postMessage(JSON.stringify(e), o.TARGET_ORIGIN)
                };
                var t = function(t) {
                    if (t.source === n() && t.origin === o.TARGET_ORIGIN) {
                        var r, i;
                        try {
                            r = JSON.parse(t.data)
                        } catch (e) {
                            return
                        }
                        "object" == typeof(i = r) && "string" == typeof i.method && e.handleMessage(r)
                    }
                };
                return window.addEventListener("message", t),
                    function() {
                        e.sendMessage = i, window.removeEventListener("message", t)
                    }
            }, e.prototype.createIframe = function() {
                var e = window.document.createElement("iframe");
                return e.style.height = "100%", e.style.width = "100%", e.style.border = "none", e
            }, e
        }();
    o.BrowserEnvironment = s
}, function(e, o, n) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var t = n(0),
        r = function() {
            function e(e, o) {
                var n = this;
                this.popupWindow = e, this.onClose = o, this.stopInterval = function() {
                    clearInterval(n.intervalId)
                }, this.isWindowClosedByUser = function() {
                    try {
                        return n.popupWindow.closed
                    } catch (e) {}
                    return !1
                }, this.messagingWindow = function() {
                    return void 0 !== t.ieframe && null !== t.ieframe ? t.ieframe.contentWindow : n.popupWindow
                }, this.handleInterval = function() {
                    n.isWindowClosedByUser() && (n.onClose(), n.stopInterval())
                }, this.intervalId = setInterval(this.handleInterval, 100)
            }
            return e.open = function(o, n, r) {
                var i = t.popupDimensionsString(n.width, n.height) + ",resizable,scrollbars",
                    s = window.open(o, "_blank", i);
                if (null === s) throw new Error("Failed to open the window. Dropbox popups may only be attached to a user-triggered event handler such as a tap or click event.");
                return s.focus(), new e(s, r)
            }, e
        }();
    o.PopupEnvironment = r
}, function(e, o, n) {
    "use strict";
    var t, r = this && this.__extends || (t = function(e, o) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, o) {
                e.__proto__ = o
            } || function(e, o) {
                for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
            })(e, o)
    }, function(e, o) {
        function n() {
            this.constructor = e
        }
        t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
    });
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function o(o) {
            var n = e.call(this, o) || this;
            return n.validateNoOptionLinkType(), n
        }
        return r(o, e), o.prototype.validateNoOptionLinkType = function() {
            if (void 0 !== this.options.linkType) throw new Error("The ZoomChooser SDK does not accept a linkType.")
        }, o.prototype.urlParams = function() {
            var o = e.prototype.urlParams.call(this);
            return o.push({
                key: "is_zoom_chooser",
                value: "true"
            }), o
        }, o
    }(n(3).BaseChooser);
    o.ZoomChooser = i
}, function(e, o, n) {
    "use strict";
    var t, r = this && this.__extends || (t = function(e, o) {
            return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, o) {
                    e.__proto__ = o
                } || function(e, o) {
                    for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
                })(e, o)
        }, function(e, o) {
            function n() {
                this.constructor = e
            }
            t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
        }),
        i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var o, n = 1, t = arguments.length; n < t; n++)
                    for (var r in o = arguments[n]) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                return e
            }).apply(this, arguments)
        };
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var s = function(e) {
        function o(n) {
            var t = e.call(this, n) || this;
            return o.validateOnSuccess(t.options.onSuccess), o.validateOnCancel(t.options.onCancel), t.state = {
                entries: t.options.entries,
                initialFolderSelection: t.options.initialFolderSelection
            }, t.onSuccess = t.options.onSuccess, t.onCancel = t.options.onCancel, t
        }
        return r(o, e), o.validateOnSuccess = function(e) {
            if (e && "function" != typeof e) throw new Error("onSuccess must be a function")
        }, o.validateOnCancel = function(e) {
            if (e && "function" != typeof e) throw new Error("onCancel must be a function")
        }, o.prototype.urlParams = function() {
            return [{
                key: "account_id",
                value: this.options.accountId
            }, {
                key: "initial_folder_selection",
                value: this.state.initialFolderSelection
            }]
        }, o.prototype.urlPathname = function() {
            return "/dropins/mover"
        }, o.prototype.handleMessage = function(o) {
            switch (e.prototype.handleMessage.call(this, o), o.method) {
                case "success":
                    this.onSuccess && this.onSuccess();
                    break;
                case "cancel":
                    this.onCancel && this.onCancel()
            }
        }, o.prototype.setEntries = function(e) {
            this.state = i({}, this.state, {
                entries: e
            }), this.sendState()
        }, o.prototype.setInitialFolderSelection = function(e) {
            this.state = i({}, this.state, {
                initialFolderSelection: e
            }), this.sendState()
        }, o.prototype.setOnSuccess = function(e) {
            o.validateOnSuccess(e), this.onSuccess = e
        }, o.prototype.setOnCancel = function(e) {
            o.validateOnCancel(e), this.onCancel = e
        }, o
    }(n(2).Dropin);
    o.Mover = s
}, function(e, o, n) {
    "use strict";
    var t, r = this && this.__extends || (t = function(e, o) {
            return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, o) {
                    e.__proto__ = o
                } || function(e, o) {
                    for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n])
                })(e, o)
        }, function(e, o) {
            function n() {
                this.constructor = e
            }
            t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
        }),
        i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                for (var o, n = 1, t = arguments.length; n < t; n++)
                    for (var r in o = arguments[n]) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                return e
            }).apply(this, arguments)
        };
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var s = function(e) {
        function o(o) {
            void 0 === o && (o = {});
            var n = e.call(this, o) || this;
            return n.state = {
                accountId: n.options.accountId,
                hideAccount: n.options.hideAccount,
                link: n.options.link,
                cl: n.options.cl,
                view: n.options.initialView,
                openLinksWithSDK: !!n.options.onOpenLink
            }, n
        }
        return r(o, e), o.prototype.urlPathname = function() {
            return "/dropins/previewer"
        }, o.prototype.urlParams = function() {
            return (this.state.accountId ? [{
                key: "account_id",
                value: this.state.accountId
            }] : []).concat(this.state.hideAccount ? [{
                key: "hide_account",
                value: "true"
            }] : [], this.state.view ? [{
                key: "initial_view",
                value: this.state.view
            }] : [], this.state.cl ? [{
                key: "cl",
                value: this.state.cl
            }] : [], this.state.link ? [{
                key: "link",
                value: this.state.link
            }] : [])
        }, o.prototype.handleMessage = function(o) {
            switch (o.method) {
                case "view_change":
                    var n = o.params.view;
                    this.state = i({}, this.state, {
                        view: n
                    }), this.options.onViewChange && this.options.onViewChange(n);
                    break;
                case "open_link":
                    this.options.onOpenLink && this.options.onOpenLink(o.params.link);
                    break;
                case "open_login":
                    this.options.onOpenLogin && this.options.onOpenLogin();
                    break;
                case "update_size":
                    this.options.onSizeChanged && this.options.onSizeChanged(o.params);
                    break;
                default:
                    e.prototype.handleMessage.call(this, o)
            }
        }, o.prototype.setAccountId = function(e) {
            this.state = i({}, this.state, {
                accountId: e
            }), this.sendState()
        }, o.prototype.setHideAccount = function(e) {
            this.state = i({}, this.state, {
                hideAccount: e
            }), this.sendState()
        }, o.prototype.setLink = function(e) {
            this.state = i({}, this.state, {
                link: e
            }), this.sendState()
        }, o.prototype.setView = function(e) {
            this.state = i({}, this.state, {
                view: e
            }), this.sendState()
        }, o
    }(n(2).Dropin);
    o.Previewer = s
}]));