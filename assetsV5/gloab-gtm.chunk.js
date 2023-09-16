(window.webpackJsonp = window.webpackJsonp || []).push([
    [39], {
        28: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(5),
                o = n(6);
            ! function() {
                if ("developer.io" === window.wondershareEnv) {
                    var e = document.querySelector('a[href="https://developer.media.io/api-introduction.html"]'),
                        t = document.querySelector('a[href="https://developer.media.io/api-pricing.html"]');
                    e && e.addEventListener("click", (function() {
                        var e = +(i.a.getCookie("Navigation_ApiDoc_Count") || 0);
                        i.a.setCookie("Navigation_ApiDoc_Count", e + 1), window.gtag("event", "API-Document", {
                            event_category: "Navigation",
                            event_label: e + 1
                        })
                    }), !1), t && t.addEventListener("click", (function() {
                        var e = +(i.a.getCookie("Navigation_ApiPri_Count") || 0);
                        i.a.setCookie("Navigation_ApiPri_Count", e + 1), window.gtag("event", "Pricing", {
                            event_category: "Navigation",
                            event_label: e + 1
                        })
                    }), !1)
                } else {
                    var n = document.querySelector('a[href="https://developer.media.io/'.concat("en" === i.a.pangLang ? "" : "".concat(i.a.pangLang, "/"), '"]')),
                        a = document.querySelector("#app_activity");
                    n && n.addEventListener("click", (function() {
                        var e = +(i.a.getCookie("Navigation_API_Count") || 0),
                            t = i.a.getCookie("email") || "";
                        i.a.setCookie("Navigation_API_Count", e + 1), o.a.sendGTM({
                            category: "API",
                            event: "Navigation_API",
                            action: "Navigation_API",
                            eventLabel: e + 1
                        }), t && o.a.sendGTM({
                            category: "API",
                            event: "User_Email",
                            action: "User_Email",
                            eventLabel: t
                        })
                    }), !1), a && a.addEventListener("click", (function() {
                        var e = +(i.a.getCookie("Click_Survey") || 0);
                        e++, i.a.setCookie("Click_Survey", e), o.a.sendGTM({
                            category: "Header_Navigation",
                            event: "Click_Survey",
                            action: "Click_Survey",
                            eventLabel: e
                        })
                    }))
                }
                var r = document.getElementById("OnlineTools"),
                    c = document.getElementById("Help");
                r && r.addEventListener("mouseenter", (function() {
                    $(this).children().eq(0).dropdown("show")
                })), r && r.addEventListener("mouseleave", (function() {
                    var e = this;
                    setTimeout((function() {
                        $(e).children().eq(0).dropdown("hide")
                    }), 200)
                })), c && c.addEventListener("mouseenter", (function() {
                    $(this).children().eq(0).dropdown("show")
                })), c && c.addEventListener("mouseleave", (function() {
                    var e = this;
                    setTimeout((function() {
                        $(e).children().eq(0).dropdown("hide")
                    }), 200)
                }))
            }()
        }
    }
]);