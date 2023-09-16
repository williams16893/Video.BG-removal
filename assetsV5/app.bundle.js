! function(e) {
    function o(o) {
        for (var i, n, s = o[0], d = o[1], l = o[2], c = 0, m = []; c < s.length; c++) n = s[c], Object.prototype.hasOwnProperty.call(r, n) && r[n] && m.push(r[n][0]), r[n] = 0;
        for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (e[i] = d[i]);
        for (u && u(o); m.length;) m.shift()();
        return a.push.apply(a, l || []), t()
    }

    function t() {
        for (var e, o = 0; o < a.length; o++) {
            for (var t = a[o], i = !0, n = 1; n < t.length; n++) {
                var d = t[n];
                0 !== r[d] && (i = !1)
            }
            i && (a.splice(o--, 1), e = s(s.s = t[0]))
        }
        return e
    }
    var i = {},
        n = {
            20: 0
        },
        r = {
            20: 0
        },
        a = [];

    function s(o) {
        if (i[o]) return i[o].exports;
        var t = i[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    s.e = function(e) {
        var o = [];
        n[e] ? o.push(n[e]) : 0 !== n[e] && {
            10: 1,
            12: 1,
            14: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            27: 1,
            28: 1,
            29: 1,
            30: 1,
            31: 1,
            32: 1,
            33: 1,
            35: 1,
            37: 1,
            40: 1,
            41: 1,
            42: 1,
            43: 1,
            45: 1,
            46: 1,
            47: 1,
            48: 1,
            49: 1,
            50: 1,
            58: 1,
            59: 1,
            60: 1,
            61: 1,
            62: 1,
            63: 1,
            64: 1,
            65: 1,
            66: 1,
            67: 1,
            68: 1,
            69: 1,
            70: 1,
            71: 1,
            73: 1,
            74: 1,
            76: 1,
            77: 1,
            79: 1,
            80: 1,
            81: 1,
            82: 1,
            85: 1,
            86: 1,
            87: 1,
            88: 1,
            89: 1,
            91: 1,
            92: 1,
            93: 1
        }[e] && o.push(n[e] = new Promise((function(o, t) {
            for (var i = "assetsV5/" + ({
                    0: "vendors~account~add-audio-to-video~addAudioToVideo~addWatermarkUpload~add_watermark~app_activity~app~3d49bd1e",
                    1: "vendors~account~add-audio-to-video~addAudioToVideo~addWatermarkUpload~add_watermark~app_activity~app~9b3e0e04",
                    3: "vendors~add-audio-to-video~addAudioToVideo~addWatermarkUpload~add_watermark~app_userInfo~audio-joine~4fae95e0",
                    9: "audio-trim~functional~more-tools",
                    15: "account",
                    16: "add-audio-to-video",
                    17: "addAudioToVideo",
                    18: "addWatermarkUpload",
                    19: "add_watermark",
                    21: "app_activity",
                    22: "app_userInfo",
                    23: "audio-joiner",
                    24: "audio-trim",
                    25: "common_download",
                    26: "compressor",
                    27: "convert",
                    28: "convert-gif-img",
                    29: "convert-gif-video",
                    30: "convert-img",
                    31: "convertedFiles",
                    32: "editorStage",
                    33: "editor_merge-video",
                    34: "ele-ui-lang",
                    35: "feedback",
                    36: "ffmpeg-mp4",
                    37: "front-convert",
                    38: "functional",
                    39: "gloab-gtm",
                    40: "image-resize",
                    41: "meme_generator",
                    42: "mergeVideo",
                    43: "more-tools",
                    44: "paginator",
                    45: "rating-box",
                    46: "removeWatermarkUpload",
                    47: "remove_watermark",
                    48: "reverse-video",
                    49: "slideshowMarker",
                    50: "userCenter",
                    52: "vendors~RegionsPlugin",
                    53: "vendors~WaveSurfer",
                    55: "vendors~ele-ui-lang",
                    56: "vendors~js-zip",
                    57: "vendors~sweetalert",
                    58: "video-loop",
                    59: "video-mute",
                    60: "video-speed",
                    61: "vocalRemover",
                    62: "youtube-url"
                }[e] || e) + ".bundle.css", r = s.p + i, a = document.getElementsByTagName("link"), d = 0; d < a.length; d++) {
                var l = (u = a[d]).getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === i || l === r)) return o()
            }
            var c = document.getElementsByTagName("style");
            for (d = 0; d < c.length; d++) {
                var u;
                if ((l = (u = c[d]).getAttribute("data-href")) === i || l === r) return o()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css";
            m.onerror = m.onload = function(i) {
                if (m.onerror = m.onload = null, "load" === i.type) o();
                else {
                    var a = i && ("load" === i.type ? "missing" : i.type),
                        s = i && i.target && i.target.href || r,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                    d.code = "CSS_CHUNK_LOAD_FAILED", d.type = a, d.request = s, delete n[e], m.parentNode.removeChild(m), t(d)
                }
            }, m.href = r, document.head.appendChild(m)
        })).then((function() {
            n[e] = 0
        })));
        var t = r[e];
        if (0 !== t)
            if (t) o.push(t[2]);
            else {
                var i = new Promise((function(o, i) {
                    t = r[e] = [o, i]
                }));
                o.push(t[2] = i);
                var a, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.src = function(e) {
                    return s.p + "assetsV5/" + ({
                        0: "vendors~account~add-audio-to-video~addAudioToVideo~addWatermarkUpload~add_watermark~app_activity~app~3d49bd1e",
                        1: "vendors~account~add-audio-to-video~addAudioToVideo~addWatermarkUpload~add_watermark~app_activity~app~9b3e0e04",
                        3: "vendors~add-audio-to-video~addAudioToVideo~addWatermarkUpload~add_watermark~app_userInfo~audio-joine~4fae95e0",
                        9: "audio-trim~functional~more-tools",
                        15: "account",
                        16: "add-audio-to-video",
                        17: "addAudioToVideo",
                        18: "addWatermarkUpload",
                        19: "add_watermark",
                        21: "app_activity",
                        22: "app_userInfo",
                        23: "audio-joiner",
                        24: "audio-trim",
                        25: "common_download",
                        26: "compressor",
                        27: "convert",
                        28: "convert-gif-img",
                        29: "convert-gif-video",
                        30: "convert-img",
                        31: "convertedFiles",
                        32: "editorStage",
                        33: "editor_merge-video",
                        34: "ele-ui-lang",
                        35: "feedback",
                        36: "ffmpeg-mp4",
                        37: "front-convert",
                        38: "functional",
                        39: "gloab-gtm",
                        40: "image-resize",
                        41: "meme_generator",
                        42: "mergeVideo",
                        43: "more-tools",
                        44: "paginator",
                        45: "rating-box",
                        46: "removeWatermarkUpload",
                        47: "remove_watermark",
                        48: "reverse-video",
                        49: "slideshowMarker",
                        50: "userCenter",
                        52: "vendors~RegionsPlugin",
                        53: "vendors~WaveSurfer",
                        55: "vendors~ele-ui-lang",
                        56: "vendors~js-zip",
                        57: "vendors~sweetalert",
                        58: "video-loop",
                        59: "video-mute",
                        60: "video-speed",
                        61: "vocalRemover",
                        62: "youtube-url"
                    }[e] || e) + ".chunk.js"
                }(e);
                var l = new Error;
                a = function(o) {
                    d.onerror = d.onload = null, clearTimeout(c);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var i = o && ("load" === o.type ? "missing" : o.type),
                                n = o && o.target && o.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + n + ")", l.name = "ChunkLoadError", l.type = i, l.request = n, t[1](l)
                        }
                        r[e] = void 0
                    }
                };
                var c = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = a, document.head.appendChild(d)
            }
        return Promise.all(o)
    }, s.m = e, s.c = i, s.d = function(e, o, t) {
        s.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, o) {
        if (1 & o && (e = s(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (s.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var i in e) s.d(t, i, function(o) {
                return e[o]
            }.bind(null, i));
        return t
    }, s.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(o, "a", o), o
    }, s.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, s.p = "https://www.media.io/", s.oe = function(e) {
        throw console.error(e), e
    };
    var d = window.webpackJsonp = window.webpackJsonp || [],
        l = d.push.bind(d);
    d.push = o, d = d.slice();
    for (var c = 0; c < d.length; c++) o(d[c]);
    var u = l;
    a.push([16, 54]), t()
}([function(e, o, t) {
    "use strict";
    t.d(o, "a", (function() {
        return f
    })), t.d(o, "b", (function() {
        return v
    }));
    var i = t(12),
        n = t.n(i),
        r = t(3),
        a = t.n(r),
        s = t(1),
        d = t.n(s),
        l = t(7),
        c = t.n(l),
        u = function() {
            return document.getElementById("remove_watermark") ? "remove_watermark" : document.getElementById("add_watermark") ? "add_watermark" : document.getElementById("vocalRemover") ? "vocalRemover" : document.getElementById("front-convert") ? "fast_convert" : document.getElementById("convert-box") ? "convert" : document.getElementById("compressor-box") ? "compressor" : document.getElementById("image-convert-box") ? "convert_img" : document.getElementById("gif-images-convert-box") ? "convert_gif_img" : document.getElementById("gif-video-convert-box") ? "convert_gif_video" : document.getElementById("video-mute-box") ? "video_mute" : document.getElementById("image-resize-box") ? "image_resize" : document.getElementById("audio-trim-box") ? "audio_trim" : document.getElementById("audio-join-box") ? "audio_joiner" : document.getElementById("video-speed-box") ? "video_speed" : document.getElementById("youtube-video-url") ? "youtube_url" : document.getElementById("video-loop-box") ? "video_loop" : document.getElementById("reverse-video") ? "reverse_video" : document.getElementById("merge-video-editor") ? "merge_video_editor" : document.getElementById("audioVideoMixer") ? "add_audio_to_video" : document.getElementById("mergeVideo") ? "merge_video" : document.getElementById("addAudioToVideo") ? "add_audio_to_video" : document.getElementById("slideshowMarker") ? "slideshow_maker" : document.getElementById("meme_generator") ? "meme_generator" : void 0
        };

    function m(e, o) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            o && (i = i.filter((function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            }))), t.push.apply(t, i)
        }
        return t
    }

    function p(e) {
        for (var o = 1; o < arguments.length; o++) {
            var t = null != arguments[o] ? arguments[o] : {};
            o % 2 ? m(Object(t), !0).forEach((function(o) {
                n()(e, o, t[o])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach((function(o) {
                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
            }))
        }
        return e
    }
    var h = function(e) {
            return new Promise((function(o, t) {
                var i = document.createElement("script");
                i.src = e;
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(i, n), i.onload = i.onreadystatechange = function() {
                    this.readyState && "loaded" != this.readyState && "complete" != this.readyState || o(0)
                }
            }))
        },
        g = function() {
            var e = a()(d.a.mark((function e() {
                return d.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!("sensorsDataAnalytic201505" in window)) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, h("https://www.media.io/staticV4/sensorsdata-1_24_5.min.js");
                        case 4:
                            "sensorsDataAnalytic201505" in window && ("UA_MediaIo_Web", window.sensors = window.sensorsDataAnalytic201505, window.sensors.init({
                                server_url: "https://analytics.wondershare.cc:8106/sa?project=".concat("UA_MediaIo_Web"),
                                is_track_single_page: !0,
                                use_client_time: !0,
                                send_type: "beacon",
                                show_log: !1,
                                heatmap: {
                                    clickmap: "not_collect",
                                    scroll_notice_map: "not_collect"
                                }
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        f = function() {
            var e = a()(d.a.mark((function e(o) {
                return d.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, g();
                        case 3:
                            console.log("sensors loaded"), setTimeout((function() {
                                var e = c.a.get("wsid"),
                                    t = c.a.get("lang");
                                window.sensors.track("app_launch", {
                                    tid: "UA-MediaIo_Web",
                                    uid: Number(e || "0"),
                                    pid: 5903,
                                    oszone: (new Date).getTimezoneOffset() / -60,
                                    pver: "6.5.3",
                                    pbrand: o,
                                    plang: t || "en"
                                })
                            }), 5e3), e.next = 9;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(0);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 7]
                ])
            })));
            return function(o) {
                return e.apply(this, arguments)
            }
        }(),
        v = function() {
            var e = a()(d.a.mark((function e(o) {
                var t, i, n, r, a = arguments;
                return d.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            t = a.length > 1 && void 0 !== a[1] ? a[1] : {};
                            try {
                                n = c.a.get("wsid"), r = c.a.get("lang"), null === (i = window.sensors) || void 0 === i || i.track(o, p({
                                    tid: "UA-MediaIo_Web",
                                    uid: Number(n || "0"),
                                    pid: 5903,
                                    oszone: (new Date).getTimezoneOffset() / -60,
                                    pver: "6.5.3",
                                    pbrand: u(),
                                    plang: r || "en"
                                }, t))
                            } catch (e) {}
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(o) {
                return e.apply(this, arguments)
            }
        }()
}, , function(e) {
    e.exports = JSON.parse('{"output_format":{"video":["MP4","AVI","WMV","MKV","MPEG2","MOV","DIVX","FLV","XVID","MPEG1","3GP","Youtube","HEVC MP4","M4V","HEVC MKV","F4V","SWF","TS","TRP","MXF","VOB","3G2","OGV","WEBM","ASF","DV"],"audio":["MP3","WAV","WMA","M4A","AAC","FLAC","AC3","AIFF","M4R","M4B","AU","APE","OGG","MKA"],"image":["JPG","PNG","BMP","TIFF","WEBP","ICO"],"vector":["SVG"]},"upload_format":{"video":["mp4","mov","mkv","m4v","flv","divx","avi","h.264","mpg","mpeg","vob","3gp","3g2","wmv","asf","rm","rmvb","dat","ogv","webm","dvr-ms","vro","mxf","mod","tod","f4v","mts","m2ts","m2t","tp","trp","ts","dv","nsv","wtv"],"newVideo":["mp4","mov","avi"],"audio":["mp3","mp2","wav","m4a","m4b","m4r","aac","ac3","mka","ape","aif","aiff","amr","flac","au","cue","mpa","ap3","ra","ram","ogg","caf","wma","m4p"],"image":["jpg","png","bmp","gif","jpeg","tiff","ppm","arw","heic","webp","tga","raw","dng","nef","cr2","ico"],"vector":["svg"]},"output_format_compressor":{"video":["MP4","AVI","MKV","MPG","WMV","MOV","M4V","3GP","FLV","WEBM"],"audio":["MP3","WAV","M4A","AAC","FLAC","M4B","OGG","APE"],"image":["jpg"]},"output_format_audio":{"video":["MP4","AVI","WMV","MKV","MPEG2","MOV","DIVX","FLV","XVID","MPEG1","3GP","Youtube","HEVC MP4","M4V","HEVC MKV","F4V","SWF","TS","TRP","VOB","3G2","WEBM","ASF"],"audio":["MP3","WAV","WMA","M4A","AAC","FLAC","AC3","AIFF","M4R","M4B","AU","APE","OGG","MKA"],"image":["JPG","PNG","BMP","TIFF","WEBP"]},"output_format_aac":{"video":["MP4","AVI","WMV","MKV","MPEG2","MOV","DIVX","FLV","XVID","MPEG1","3GP","Youtube","HEVC MP4","M4V","HEVC MKV","F4V","SWF","TS","TRP","VOB","3G2","WEBM","ASF"],"audio":["MP3","WAV","M4A","AAC","FLAC","AC3","AIFF","M4R","M4B","AU","APE","OGG","MKA"],"image":["JPG","PNG","BMP","TIFF","WEBP"]},"output_format_video":["MP4","AVI","WMV","MKV","3GP","FLV"],"output_resolution":[0,"1080p","720p","480p","360p","240p","144p"],"output_size_percent":[10,30,40,50,60,70,80,90,100],"output_bitrate":["Big Size(320Kbps)","Common Size(256Kbps)","Medium Size(128Kbps)","Small Size(64Kbps)","Small Size(32Kbps)"],"actionServers":"https://srv.media.io","actionServers2":"https://srv.media.io","accountDomain":"https://account.media.io","actionUrl":"/v1/upload","saveFileUrl":"/v1/savefile","taskUrl":"/v1/make","progressUrl":"/v1/progress","downloadUrl":"/v1/download","downloadAllUrl":"/v1/download-all","pageMetaUrl":"/v1/page-meta","feedbackUrl":"/v1/feedback","cloudUrl":"/v1/driver/download","cloudProgressUrl":"/v1/driver/progress","oneDriveLoginUrl":"/v1/driver/onedrive/login","oneDriveGetTokenUrl":"/v1/driver/onedrive/get-token","ratingUrl":"/v1/task-rate","convertedFiles":"/v1/converted-files","bindConvertedFiles":"/v1/bind-converted-files","deleteConvertedFiles":"/v1/delete-converted-files","permissionUrl":"/v1/permission","developerApi":"https://api.media.io","taskList":"/v2/user/tasks","dashboardChart":"/v2/user/dashboard","userDetail":"/v2/user/detail","systemConfig":"/v1/system-config/desktop-download"}')
}, , , function(e, o, t) {
    "use strict";
    var i = t(3),
        n = t.n(i),
        r = t(4),
        a = t.n(r),
        s = t(1),
        d = t.n(s),
        l = t(2),
        c = t(9),
        u = t(11);
    for (var m = function() {
            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) return "Mobile";
            var e = !1;
            try {
                e = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window
            } catch (e) {}
            if (e) return "IE";
            var o = navigator.userAgent.toLowerCase();
            return o.indexOf("opera") > -1 ? "opera" : o.indexOf("firefox") > -1 ? "firefox" : o.indexOf("chrome") > -1 ? "chrome" : o.indexOf("safari") > -1 ? "safari" : void 0
        }(), p = navigator.userAgent.match(/(pad|iPod)/i), h = navigator.userAgent.match(/(phone|iPhone|iPod|ios|iPad|Windows Phone)/i), g = "en", f = window.location.pathname, v = ["de", "fr", "es", "jp", "it", "ko", "br", "zh"], w = 0; w < v.length; w++)
        if (v[w] == window.location.href.replace(/.*\/(de|fr|es|jp|it|ko|br|zh)\/.*/gi, "$1") && "vid" !== f.substr(1, 3)) {
            g = v[w];
            break
        }
    t.e(78).then(t.bind(null, 26)), o.a = {
        pangLang: g,
        lang: u.default,
        use: function(e) {
            this.lang = e || u.default
        },
        isIphone: h,
        getFileTypeName: function(e) {
            var o = e.lastIndexOf(".") + 1;
            if (0 == o) return !1;
            var t = e.length,
                i = e.substring(o, t);
            return i = i.toLowerCase()
        },
        createGuid: function() {
            return this.guid()
        },
        randomWord: function(e) {
            for (var o = "", t = e, i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], n = 0; n < t; n++) {
                o += i[Math.round(Math.random() * (i.length - 1))]
            }
            return o
        },
        getMapFileSizeGaVal: function(e, o) {
            for (var t in e)
                if (o <= 1048576 * t) return e[t]
        },
        getMapFileTimeGaVal: function(e, o) {
            for (var t in e)
                if (o <= t) return e[t]
        },
        getFileSizeGaVal: function(e) {
            return e = e < 5242880 ? "0~5M" : e < 10485760 ? "5~10M" : e < 15728640 ? "10~15M" : e < 20971520 ? "15~20M" : e < 31457280 ? "20~30M" : e < 41943040 ? "30~40M" : e < 52428800 ? "40~50M" : e < 83886080 ? "50~80M" : e < 104857600 ? "80~100M" : e < 209715200 ? "100~200M" : ">200M"
        },
        getQueueGaVal: function(e) {
            return e = 0 == e ? "0" : e <= 3 ? "0~3" : e <= 5 ? "3~5" : e <= 10 ? "5~10" : ">10"
        },
        getDurationTime: function(e) {
            return e = 0 == e ? "0" : e <= 30 ? "0~30S" : e <= 60 ? "30~60S" : e <= 120 ? "1~2mins" : e <= 180 ? "2~3mins" : e <= 300 ? "3~5mins" : e <= 600 ? "5~10mins" : e <= 1200 ? "10~20mins" : e <= 1800 ? "20~30mins" : ">30mins"
        },
        getQueueGaValTime: function(e) {
            return e = 0 == e ? "0" : e <= .1 ? "0~0.1mins" : e <= .2 ? "0.1~0.2mins" : e <= .3 ? "0.2~0.3mins" : e <= .4 ? "0.4~0.5mins" : e <= 1 ? "0.5~1mins" : e <= 2 ? "1~2mins" : e <= 5 ? "2~5mins" : e <= 10 ? "5~10mins" : e <= 20 ? "10~20mins" : e <= 30 ? "20~30mins" : ">30mins"
        },
        getRateTime: function(e) {
            return e = e <= 30 ? "0~30KB/s" : e <= 60 ? "30~60KB/s" : e <= 100 ? "60~100KB/s" : e <= 200 ? "100~200KB/s" : e <= 400 ? "200~400KB/s" : e <= 600 ? "400~600KB/s" : e <= 1e3 ? "600~1000KB/s" : ">1000KB/s"
        },
        setCookie: function(e, o) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = new Date,
                n = window.location.origin.indexOf("media.io") > -1 ? ".media.io" : "";
            i.setTime((new Date).getTime() + 24 * t * 60 * 60 * 1e3), document.cookie = e + "=" + escape(o) + ";expires=" + i.toGMTString() + ";path=/; domain=" + n
        },
        getCookie: function(e) {
            var o, t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (o = document.cookie.match(t)) ? unescape(o[2]) : null
        },
        IEVersion: function() {
            var e = navigator.userAgent,
                o = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1,
                t = e.indexOf("Edge") > -1 && !o,
                i = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
            if (o) {
                new RegExp("MSIE (\\d+\\.\\d+);").test(e);
                var n = parseFloat(RegExp.$1);
                return 7 == n ? 7 : 8 == n ? 8 : 9 == n ? 9 : 10 == n ? 10 : 6
            }
            return t ? "edge" : i ? 11 : -1
        },
        renderSize: function(e) {
            if (null == e || "" == e) return "0 Bytes";
            var o, t = new Array("Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"),
                i = parseFloat(e);
            o = Math.floor(Math.log(i) / Math.log(1024));
            var n = i / Math.pow(1024, o);
            return (n = n.toFixed(2)) + t[o]
        },
        getPage: function() {
            if (location.href.indexOf("blog") >= 0) {
                var e = document.getElementById("pageConfig") ? document.getElementById("pageConfig").getAttribute("data-media-task") : "converter",
                    o = document.getElementById("pageConfig") ? document.getElementById("pageConfig").getAttribute("data-media-type") : "video";
                return "compressor" === e ? "video" === o ? "compress_video_blog" : "image" === o ? "compress_image_blog" : "compress_audio_blog" : "converter" === e ? "video" === o ? "convert_video_blog" : "image" === o ? "convert_image_blog" : "convert_audio_blog" : "image_to_gif" === e ? "video" === o ? "video_to_gif_blog" : "image_to_gif_blog" : "mute" === e ? "mute_video_blog" : "trim" === e ? "audio_cutter_blog" : "resize" === e ? "resize_image_blog" : "convert_video_blog"
            }
            return "/" === location.pathname || location.href.indexOf("index.html") >= 0 || location.href.indexOf("home.html") >= 0 || location.href.indexOf("sq-index.html") >= 0 ? "convert_home" : location.href.indexOf("image-compressor.html") >= 0 ? "compress_image" : location.href.indexOf("image-converter.html") >= 0 ? "convert_image" : location.href.indexOf("audio-converter.html") >= 0 ? "convert_audio" : location.href.indexOf("video-converter.html") >= 0 ? "convert_video" : location.href.indexOf("converter.html") >= 0 ? "convert_XXconverter" : location.href.indexOf("/convert/") >= 0 ? "convert_XXtoXX" : location.href.indexOf("video-compressor.html") >= 0 ? "compress_video" : location.href.indexOf("audio-compressor.html") >= 0 || location.href.indexOf("audio-video-compressor.html") >= 0 ? "compress_audio" : location.href.indexOf("-compress") >= 0 || location.href.indexOf("compress-") >= 0 ? "compress_XX" : location.href.indexOf("gif-maker.html") >= 0 || location.href.indexOf("gif-maker") >= 0 ? "video_gif" : location.href.indexOf("image-to-gif.html") >= 0 || location.href.indexOf("image-to-gif") >= 0 ? "images_gif" : location.href.indexOf("mute-video.html") >= 0 || location.href.indexOf("mute-video.html") >= 0 ? "mute_video" : location.href.indexOf("resize-image.html") >= 0 || location.href.indexOf("resize-image.html") >= 0 || location.href.indexOf("images-resize-test") >= 0 ? "resize_image" : location.href.indexOf("resize-video.html") >= 0 ? "resize_video" : location.href.indexOf("audio-cutter.html") >= 0 || location.href.indexOf("audio-trim-test.html") >= 0 || location.href.indexOf("audio-cutter.html") >= 0 ? "audio_cutter" : location.href.indexOf("change-video-speed.html") >= 0 ? "video_speed" : location.href.indexOf("loop-video.html") >= 0 || location.href.indexOf("loop-video.html") >= 0 ? "loop_video" : location.href.indexOf("adjust-video") >= 0 || location.href.indexOf("flip-mirror-video") >= 0 || location.href.indexOf("rotate-video") >= 0 || location.href.indexOf("crop-video") >= 0 || location.href.indexOf("video-trimmer") >= 0 || location.href.indexOf("video-editor") >= 0 || location.href.indexOf("sq-edit") >= 0 ? "video_editor" : location.href.indexOf("converted-files") >= 0 ? "converted_files" : location.href.indexOf("online-tools") >= 0 ? "online_tools" : location.href.indexOf("audio-joiner.html") >= 0 ? "join_audio" : location.href.indexOf("reverse-video.html") >= 0 ? "reverse_video" : location.href.indexOf("fast-converter/") >= 0 ? "BrowserConverter" : window.location.href.slice((null === (t = window.location.href) || void 0 === t ? void 0 : t.lastIndexOf("/")) + 1, window.location.href.lastIndexOf("."));
            var t
        },
        getOptionsStr: function(e) {
            var o = "";
            return e.forEach((function(e) {
                var t = e ? "1" : "0";
                o += o ? "_" + t : t
            })), o
        },
        guid: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var o = 16 * Math.random() | 0;
                return ("x" === e ? o : 3 & o | 8).toString(16)
            }))
        },
        getFileType: function(e) {
            var o = this.getFileTypeName(e.name);
            return l.upload_format.video.includes(o) ? "video" : l.upload_format.audio.includes(o) ? "audio" : l.upload_format.image.includes(o) ? "image" : l.upload_format.vector.includes(o) ? "vector" : "video"
        },
        getFileTypeByName: function(e) {
            var o = this.getFileTypeName(e);
            return l.upload_format.video.includes(o) ? "video" : l.upload_format.audio.includes(o) ? "audio" : l.upload_format.image.includes(o) ? "image" : l.upload_format.vector.includes(o) ? "vector" : "video"
        },
        deepClone: function(e) {
            var o = Array.isArray(e) ? [] : {};
            if (e && "object" === a()(e)) {
                for (var t in e) e.hasOwnProperty(t) && (o[t] = e && "object" === a()(e[t]) ? this.deepClone(e[t]) : e[t]);
                return o
            }
            return e
        },
        getByteLen: function(e) {
            for (var o = 0, t = 0; t < e.length; t++) {
                var i = new RegExp(/[^\x00-\xff]/gi),
                    n = e[t];
                i.test(n) ? o += 2 : o += 1
            }
            return o
        },
        getPathFileName: function(e) {
            return e.substring(e.lastIndexOf("/") + 1)
        },
        browser: m,
        iPad: p,
        getQueryString: function(e) {
            var o = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                t = window.location.search.substr(1).match(o);
            return null != t ? unescape(t[2]) : null
        },
        isMac: "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform,
        formatFileName: function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
            if (e) {
                var i = "." + this.getFileTypeName(e),
                    n = e.slice(0, e.lastIndexOf("."));
                if (n.length < o) return e;
                var r = t,
                    a = n.length - 4,
                    s = n.substr(0, r),
                    d = n.substr(a);
                return s + "..." + d + i
            }
            return e
        },
        getImgWidthHeight: function(e) {
            var o = this;
            return new Promise(function() {
                var t = n()(d.a.mark((function t(i, n) {
                    var r, s, u, m, p, h, g, f;
                    return d.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("Desktop" === e.fileOrigin) try {
                                    ["tiff", "tif"].includes(e.specificType) ? (r = function() {
                                        var o = new FileReader;
                                        o.readAsArrayBuffer(e), o.onload = function(e) {
                                            Tiff.initialize({
                                                TOTAL_MEMORY: 197772160
                                            });
                                            var o = new Tiff({
                                                buffer: e.target.result
                                            });
                                            i({
                                                width: o.width(),
                                                height: o.height()
                                            })
                                        }
                                    }, void 0 === ("undefined" == typeof Tiff ? "undefined" : a()(Tiff)) ? r() : o.importScript("https://www.media.io/staticV4/tiff.js").then((function() {
                                        r()
                                    }))) : ((s = new FileReader).readAsDataURL(e), s.onload = function(e) {
                                        var o = new Image;
                                        o.src = e.target.result, o.onload = function() {
                                            i({
                                                width: this.width,
                                                height: this.height
                                            })
                                        }, o.onerror = function(e) {
                                            console.log(e), i({
                                                width: 0,
                                                height: 0
                                            })
                                        }
                                    })
                                } catch (e) {
                                    console.log(e), i({
                                        width: 0,
                                        height: 0
                                    })
                                }
                                if ("Dropbox" === e.fileOrigin) try {
                                    (u = new Image).src = e.link, u.onload = function() {
                                        i({
                                            width: this.width,
                                            height: this.height
                                        })
                                    }, u.onerror = function(e) {
                                        console.log(e), i({
                                            width: 0,
                                            height: 0
                                        })
                                    }
                                } catch (e) {
                                    console.log(e), i({
                                        width: 0,
                                        height: 0
                                    })
                                }
                                if ("Googledrive" !== e.fileOrigin) {
                                    t.next = 24;
                                    break
                                }
                                return t.prev = 3, m = o.getCookie("google_authResult") || null, t.next = 7, c.a.ajaxTask({
                                    url: l.actionServers + l.cloudUrl,
                                    taskJSON: {
                                        type: "google",
                                        file_key: e.link
                                    },
                                    params: {
                                        file: e.id,
                                        token: window.btoa(m)
                                    }
                                });
                            case 7:
                                return p = t.sent, t.next = 10, c.a.ajaxTaskProgress({
                                    url: l.actionServers + l.cloudProgressUrl,
                                    guid: p.data.guid
                                });
                            case 10:
                                h = t.sent, g = h.data, e.support_file_path = g.file_path, e.support_file_guid = p.data.guid, (f = new Image).src = g.path, f.onload = function() {
                                    i({
                                        width: this.width,
                                        height: this.height
                                    })
                                }, f.onerror = function(e) {
                                    console.log(e), i({
                                        width: 0,
                                        height: 0
                                    })
                                }, t.next = 24;
                                break;
                            case 20:
                                t.prev = 20, t.t0 = t.catch(3), console.log(t.t0), i({
                                    width: 0,
                                    height: 0
                                });
                            case 24:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [3, 20]
                    ])
                })));
                return function(e, o) {
                    return t.apply(this, arguments)
                }
            }())
        },
        getFileSize: function(e) {
            return new Promise((function(o, t) {
                var i = new XMLHttpRequest;
                i.open("HEAD", e), i.onreadystatechange = function(e) {
                    4 === i.readyState && 200 === i.status && o(i.getResponseHeader("Content-Length"))
                }, i.send()
            }))
        },
        windowLocationHref: function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_self";
            window.open("en" === g ? e : e.replace("https://www.media.io", "https://www.media.io/".concat(g)), o)
        },
        langHref: function(e) {
            return "en" === g ? e : e.replace("https://www.media.io", "https://www.media.io/".concat(g))
        },
        formatDate: function(e) {
            var o, t, i, n, r, a = e.date,
                s = e.mode,
                d = e.dateSplitStr,
                l = e.timeSplitStr,
                c = e.utc,
                u = "",
                m = {
                    Year: "YYYY",
                    Month: "YYYY-MM",
                    Day: "YYYY-MM-DD",
                    Hour: "YYYY-MM-DD hh",
                    Minute: "YYYY-MM-DD hh:mm",
                    Second: "YYYY-MM-DD hh:mm:ss"
                };
            if ((a = a.replace(/-/g, "/")) && "[object String]" === Object.prototype.toString.call(a)) return a = new Date(a), c = !!c, m[s = s || "Day"] || console.warn("日期格式化默认不合法!模式只能是Year, Month, Day, Hour, Minute, Second其中之一"), d = d || "-", l = l || ":", u = (c ? a.getUTCFullYear() : a.getFullYear()) + "-" + (o = ((o = c ? a.getUTCMonth() : a.getMonth()) >= 9 ? "" : "0") + (o + 1)) + "-" + (t = ((t = c ? a.getUTCDate() : a.getDate()) >= 10 ? "" : "0") + t) + " ", u += (i = ((i = c ? a.getUTCHours() : a.getHours()) >= 10 ? "" : "0") + i) + ":" + (n = ((n = c ? a.getUTCMinutes() : a.getMinutes()) >= 10 ? "" : "0") + n), u = (u = (u += ":" + (r = ((r = c ? a.getUTCSeconds() : a.getSeconds()) >= 10 ? "" : "0") + r)).substr(0, m[s].length)).replace(/-/g, d).replace(/:/, l)
        },
        importScript: function(e) {
            return new Promise((function(o) {
                var t = document.createElement("script");
                t.src = e, t.async = !0, t.defer = !0, t.onload = o, document.head.appendChild(t)
            }))
        },
        fomartTime: function(e, o) {
            var t;
            if (e > -1) {
                var i = Math.floor(e / 3600),
                    n = Math.floor(e / 60) % 60,
                    r = e % 60;
                i > 0 ? (i < 10 && (t += "0"), t += i + ":") : t = o ? "00:" : "", n < 10 && (t += "0"), t += n + ":", r < 10 && (t += "0"), t += (Math.floor(10 * r) / 10).toString().length > 2 ? Math.floor(10 * r) / 10 : Math.floor(10 * r) / 10 + ".0"
            }
            return t
        },
        mul: function(e, o) {
            var t = 0,
                i = e.toString(),
                n = o.toString();
            try {
                t += i.split(".")[1].length
            } catch (e) {}
            try {
                t += n.split(".")[1].length
            } catch (e) {}
            return Number(i.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, t)
        },
        add: function(e, o) {
            var t, i, n;
            try {
                t = e.toString().split(".")[1].length
            } catch (e) {
                t = 0
            }
            try {
                i = o.toString().split(".")[1].length
            } catch (e) {
                i = 0
            }
            return n = Math.pow(10, Math.max(t, i)), (this.mul(e, n) + this.mul(o, n)) / n
        },
        sub: function(e, o) {
            var t, i, n;
            try {
                t = e.toString().split(".")[1].length
            } catch (e) {
                t = 0
            }
            try {
                i = o.toString().split(".")[1].length
            } catch (e) {
                i = 0
            }
            return n = Math.pow(10, Math.max(t, i)), (this.mul(e, n) - this.mul(o, n)) / n
        },
        createVideoElement: function(e) {
            return n()(d.a.mark((function o() {
                return d.a.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return o.abrupt("return", new Promise((function(o) {
                                var t = document.createElement("video");
                                t.setAttribute("preload", "auto"), t.setAttribute("crossOrigin", "anonymous"), t.id = "videoId", t.src = e, t.onloadeddata = function() {
                                    o(t)
                                }
                            })));
                        case 1:
                        case "end":
                            return o.stop()
                    }
                }), o)
            })))()
        },
        createImageElement: function(e) {
            return n()(d.a.mark((function o() {
                var t, i;
                return d.a.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return t = document.createElement("canvas"), i = t.getContext("2d"), t.width = e.videoWidth, t.height = e.videoHeight, i.drawImage(e, 0, 0, e.videoWidth, e.videoHeight), o.abrupt("return", new Promise((function(e) {
                                t.toBlob((function(o) {
                                    var t = URL.createObjectURL(o);
                                    e(t)
                                }))
                            })));
                        case 6:
                        case "end":
                            return o.stop()
                    }
                }), o)
            })))()
        },
        seekVideo: function(e) {
            var o = arguments,
                t = this;
            return n()(d.a.mark((function i() {
                var r, a, s, l, c, u;
                return d.a.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return r = o.length > 1 && void 0 !== o[1] ? o[1] : 3, a = [], s = t, l = 1, i.next = 6, s.createVideoElement(e);
                        case 6:
                            return c = i.sent, u = c.duration, c.currentTime = l / 10 * u, i.abrupt("return", new Promise((function(e) {
                                c.onseeked = n()(d.a.mark((function o() {
                                    return d.a.wrap((function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                return o.t0 = a, o.next = 3, s.createImageElement(c);
                                            case 3:
                                                o.t1 = o.sent, o.t0.push.call(o.t0, o.t1), ++l <= r ? c.currentTime = l / 10 * u : e(a);
                                            case 7:
                                            case "end":
                                                return o.stop()
                                        }
                                    }), o)
                                })))
                            })));
                        case 10:
                        case "end":
                            return i.stop()
                    }
                }), i)
            })))()
        },
        getFileDuration: function(e) {
            return new Promise((function(o, t) {
                try {
                    if ("object" === a()(e)) {
                        var i = document.createElement("video");
                        i.preload = "metadata", i.onloadedmetadata = function() {
                            window.URL.revokeObjectURL(i.src), o(this.duration)
                        }, i.onerror = function() {
                            o("file type error.")
                        }, i.src = window.URL.createObjectURL(e)
                    } else {
                        var n = document.createElement("video");
                        n.preload = "metadata", n.crossorigin = "anonymous", n.onloadedmetadata = function() {
                            o(this.duration)
                        }, n.onerror = function() {
                            o("file type error.")
                        }, n.src = e
                    }
                } catch (e) {
                    t(e)
                }
            }))
        },
        msToSeconds: function(e) {
            var o = new Date("2021/04/23 " + e);
            return Number((60 * o.getHours() * 60 + 60 * o.getMinutes() + o.getSeconds() + o.getMilliseconds() / 1e3).toFixed(1))
        },
        msToSeconds2: function(e) {
            var o, t, i, n, r = e.match(/^(\d+):(\d+):(\d+)(.(\d*))?$/);
            return console.log(r), o = +r[1], t = +r[2], i = +r[3], n = +(r[4] || 0), Number((60 * o * 60 + 60 * t + i + n / 1e3).toFixed(1))
        },
        url_to_blob: function(e) {
            return new Promise((function(o) {
                var t = new XMLHttpRequest;
                t.open("GET", e, !0), t.responseType = "blob", t.onload = function() {
                    200 === t.status && o(t.response)
                }, t.send()
            }))
        },
        checkEnv: function() {
            return (this.getPage().indexOf("convert") > -1 || this.getPage().indexOf("compress") > -1) && "Mobile" !== this.browser && "en" === this.pangLang
        },
        formatDuration: function(e) {
            if (e > -1) {
                var o = Math.floor(e / 3600),
                    t = Math.floor(e / 60) % 60,
                    i = parseInt(e % 60);
                e = 0 === o ? "" : o < 10 ? "0" + o + ":" : o + ":", e += (t < 10 ? "0" + t : t) + ":", i < 10 && (e += "0"), e += i
            }
            return e
        }
    }
}, function(e, o, t) {
    "use strict";
    o.a = {
        sendGTM: function(e) {
            "New_Video_Editor" === e.category && window.localStorage.setItem("gtm", "{\n        event:".concat(e.category, ",\n        mediaAction: ").concat(e.action, ",\n        mediaLabel: ").concat(e.eventLabel, ",\n      }")), console.log(e);
            try {
                dataLayer.push({
                    mediaEvent: "mediaEvent",
                    event: "KO_" + e.category + "_5.0",
                    mediaCategory: e.category + "_4.0",
                    mediaAction: e.action,
                    mediaLabel: e.eventLabel,
                    eventLable: e.eventLabel,
                    eventAction: e.action
                })
            } catch (e) {
                console.log("no gtm")
            }
        }
    }
}, function(e, o, t) {
    var i, n;
    i = {
        expires: "1d",
        path: "; path=/",
        domain: "",
        secure: "",
        sameSite: "; SameSite=Lax"
    }, n = {
        install: function(e) {
            e.prototype.$cookies = this, e.$cookies = this
        },
        config: function(e, o, t, n, r) {
            i.expires = e || "1d", i.path = o ? "; path=" + o : "; path=/", i.domain = t ? "; domain=" + t : "", i.secure = n ? "; Secure" : "", i.sameSite = r ? "; SameSite=" + r : "; SameSite=Lax"
        },
        get: function(e) {
            var o = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            if (o && "{" === o.substring(0, 1) && "}" === o.substring(o.length - 1, o.length)) try {
                o = JSON.parse(o)
            } catch (e) {
                return o
            }
            return o
        },
        set: function(e, o, t, n, r, a, s) {
            if (!e) throw new Error("Cookie name is not find in first argument.");
            if (/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(e)) throw new Error('Cookie key name illegality, Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: ' + e);
            o && o.constructor === Object && (o = JSON.stringify(o));
            var d = "";
            if ((t = null == t ? i.expires : t) && 0 != t) switch (t.constructor) {
                case Number:
                    d = t === 1 / 0 || -1 === t ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + t;
                    break;
                case String:
                    if (/^(?:\d+(y|m|d|h|min|s))$/i.test(t)) {
                        var l = t.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
                        switch (t.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
                            case "m":
                                d = "; max-age=" + 2592e3 * +l;
                                break;
                            case "d":
                                d = "; max-age=" + 86400 * +l;
                                break;
                            case "h":
                                d = "; max-age=" + 3600 * +l;
                                break;
                            case "min":
                                d = "; max-age=" + 60 * +l;
                                break;
                            case "s":
                                d = "; max-age=" + l;
                                break;
                            case "y":
                                d = "; max-age=" + 31104e3 * +l;
                                break;
                            default:
                                new Error('unknown exception of "set operation"')
                        }
                    } else d = "; expires=" + t;
                    break;
                case Date:
                    d = "; expires=" + t.toUTCString()
            }
            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(o) + d + (r ? "; domain=" + r : i.domain) + (n ? "; path=" + n : i.path) + (null == a ? i.secure : a ? "; Secure" : "") + (null == s ? i.sameSite : s ? "; SameSite=" + s : ""), this
        },
        remove: function(e, o, t) {
            return !(!e || !this.isKey(e)) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (t ? "; domain=" + t : i.domain) + (o ? "; path=" + o : i.path) + "; SameSite=None;Secure", this)
        },
        isKey: function(e) {
            return new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        },
        keys: function() {
            if (!document.cookie) return [];
            for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), o = 0; o < e.length; o++) e[o] = decodeURIComponent(e[o]);
            return e
        }
    }, e.exports = n, "undefined" != typeof window && (window.$cookies = n)
}, function(e, o) {
    e.exports = jQuery
}, function(e, o, t) {
    "use strict";
    var i = window.localStorage.getItem("token");
    o.a = {
        ajaxTask: function(e) {
            return new Promise((function(o, t) {
                var n = new XMLHttpRequest;
                n.withCredentials = !0;
                var r = new FormData,
                    a = [];
                if (r.append("taskJSON", JSON.stringify(e.taskJSON)), e.params)
                    for (var s in e.params) r.append(s, e.params[s]);
                n.open("POST", e.url), n.onreadystatechange = function(e) {
                    if (4 === n.readyState && 200 === n.status) {
                        var i = JSON.parse(n.responseText);
                        setTimeout((function() {
                            0 === i.code ? ("[object Object]" === Object.prototype.toString.call(i.data) ? i.data.rate = a : i.data.rate = ["Successful", 0, 0], o({
                                code: i.code,
                                data: i.data,
                                task_id: i.data.task_id,
                                msg: "success"
                            })) : t({
                                code: i.code,
                                data: i.data,
                                msg: i.msg
                            })
                        }))
                    }
                }, n.addEventListener("error", (function(e) {
                    t({
                        code: "-1",
                        data: {
                            rate: ["Fail", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                        },
                        msg: "xhr error"
                    })
                }), !1), n.addEventListener("abort", (function(e) {
                    t({
                        code: "-1",
                        data: {
                            rate: ["abort", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                        },
                        msg: "xhr abort"
                    })
                }), !1), n.addEventListener("load", (function(e) {
                    a = ["Successful", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                }), !1), n.setRequestHeader("Authorization", "Bearer ".concat(i)), n.send(r)
            }))
        },
        saveFile: function(e) {
            return new Promise((function(o, t) {
                var n = new XMLHttpRequest;
                n.withCredentials = !0;
                var r = new FormData,
                    a = "";
                /.*\/(de|fr|es|jp|it|ko|br|zh)\/.*/gi.test(window.location.href) && (a = window.location.href.replace(/.*\/(de|fr|es|jp|it|ko|br|zh)\/.*/gi, "$1"));
                var s = [];
                r.append("guid", e.guid), r.append("lang", a), n.open("POST", e.url), n.onreadystatechange = function(e) {
                    if (4 === n.readyState && 200 === n.status) {
                        var i = JSON.parse(n.responseText);
                        setTimeout((function() {
                            0 === i.code ? ("[object Object]" === Object.prototype.toString.call(i.data) ? i.data.rate = s : i.data.rate = ["Successful", 0, 0], o({
                                code: i.code,
                                data: i.data,
                                msg: "success"
                            })) : t({
                                code: i.code,
                                data: i.data,
                                msg: i.msg
                            })
                        }))
                    }
                }, n.addEventListener("error", (function(e) {
                    t({
                        code: "-1",
                        data: {
                            rate: ["Fail", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                        },
                        msg: "xhr error"
                    })
                }), !1), n.addEventListener("abort", (function(e) {
                    t({
                        code: "-1",
                        data: {
                            rate: ["abort", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                        },
                        msg: "xhr abort"
                    })
                }), !1), n.addEventListener("load", (function(e) {
                    s = ["Successful", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                }), !1), n.setRequestHeader("Authorization", "Bearer ".concat(i)), n.send(r)
            }))
        },
        ajaxTaskProgress: function(e, o) {
            var t = this;
            return new Promise((function(n, r) {
                ! function a() {
                    var s = new XMLHttpRequest;
                    s.withCredentials = !0;
                    var d = new FormData,
                        l = [];
                    e.task_id ? (d.append("task_id", e.task_id), s.open("POST", e.url)) : s.open("GET", "".concat(e.url, "?guid=").concat(e.guid)), s.onreadystatechange = function(e) {
                        if (4 === s.readyState && 200 === s.status) {
                            var i = JSON.parse(s.responseText);
                            0 === i.code ? i.data.progress >= 100 ? setTimeout((function() {
                                "[object Object]" === Object.prototype.toString.call(i.data) ? i.data.rate = l : i.data.rate = ["Successful", 0, 0], n({
                                    code: i.code,
                                    data: i.data,
                                    msg: "success"
                                })
                            })) : ("function" == typeof o && o(i.data.progress.toFixed(2), i.data.TaskQueueIndex), t.cancel ? t.cancel = !1 : setTimeout((function() {
                                a()
                            }), 1e3)) : setTimeout((function() {
                                r({
                                    code: i.code,
                                    data: {
                                        rate: ["Fail", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                                    },
                                    msg: i.msg
                                })
                            }))
                        }
                    }, s.addEventListener("error", (function(e) {
                        r({
                            code: "-1",
                            data: {
                                rate: ["Fail", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                            },
                            msg: "xhr error"
                        })
                    }), !1), s.addEventListener("abort", (function(e) {
                        r({
                            code: "-1",
                            data: {
                                rate: ["abort", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                            },
                            msg: "xhr abort"
                        })
                    }), !1), s.addEventListener("load", (function(e) {
                        l = ["Successful", (e.loaded / 1024 / e.timeStamp * 1e3).toFixed(2), e.loaded]
                    }), !1), s.setRequestHeader("Authorization", "Bearer ".concat(i)), s.send(d)
                }()
            }))
        },
        downLoad: function(e) {
            return new Promise((function(o, t) {
                var n = new XMLHttpRequest,
                    r = new FormData;
                "multiple" === e.downLoadType ? r.append("task_ids", e.task_ids) : r.append("task_id", e.task_id), n.open("POST", e.url), n.onreadystatechange = function(e) {
                    if (4 === n.readyState)
                        if (200 === n.status) {
                            var i = JSON.parse(n.responseText);
                            0 === i.code ? o({
                                msg: "success"
                            }) : t({
                                msg: i.msg
                            })
                        } else t({
                            msg: "fail"
                        })
                }, n.addEventListener("error", (function(e) {
                    t({
                        code: "-1",
                        msg: "xhr error"
                    })
                }), !1), n.addEventListener("abort", (function(e) {
                    t({
                        code: "-1",
                        msg: "xhr abort"
                    })
                }), !1), n.setRequestHeader("Authorization", "Bearer ".concat(i)), n.send(r)
            }))
        },
        cancel: !1
    }
}, , function(e, o, t) {
    "use strict";
    t.r(o);
    o.default = {
        gloab: {
            swalText: "Do you confirm the cancellation?",
            swalOK: "Yes",
            swalNO: "No",
            swalSuccess: "Are you sure you want to delete this task?",
            deleteAllTask: "Are you sure you want to delete all task?",
            download: "download",
            otherTools: "Other Tools",
            editAgain: "EDIT AGAIN",
            editNewFile: "EDIT NEW FILE",
            readyDownload: "Congratulations! Your video is ready for download.",
            downloadAll: "Download All",
            converterMoreFiles: "CONVERT MORE FILES",
            saveTo: "Save to",
            dropbox: "Dropbox",
            googleDrive: "Google Drive",
            previewNot: "Preview is not available.",
            browserNotSupport: "Your browser does not support this format.",
            signUpFree: "Sign Up Free",
            signUpSuccess: "Congratulations！\nYou have successfully got a 30-day membership now!",
            makeFail: "Sorry, your file generation failed, please try again.",
            freeUseTimes: "You have edited files #### times in one day. Please log in to remove the limitation, or edit more files tomorrow.",
            loginUseTimes: "You have edited files #### times in one day. Please purchase online to remove the limitation.",
            Processing: "Processing, please wait.",
            Uploading: "Uploading, please wait.",
            deletesure: "Do you want to delete this file? It's unrecoverable after deletion.",
            readfile: "Reading the file, please wait..."
        },
        swal: {
            maxSizeLimit: "The maximum import file size is #### MB",
            noMultiple: "Sorry, we only support one file, you can drag in other files after completion.",
            notSupport: "Online UniConverter does not support this format."
        },
        chooseRightPlan: {
            sizeMinLimit: "File is too large! (####). The free account only supports videos no more than @@@@ MB. Please purchase an online plan to get more.",
            sizeMaxLimit: "File is too large! (####). Media.io Video Converter only supports the video no more than @@@@ MB. Please use Wondershare UniConverter for desktop.",
            useTimeMinLimit: "You have exceeded the #### usage limit per day. Please sigh up or select a premium service below.",
            useTimeMaxLimit: "You have exceeded the #### usage limit per day. Please select a premium service below.",
            concurrentCountLimit: "Your account only allows #### concurrent conversions. Please click Convert button to continue, or purchase a upgraded online plan.",
            compressConcurrentCountLimit: "Your account only allows #### concurrent compressions. Please click Compress button to continue, or purchase a upgraded online plan.",
            choose_right_plan: "Choose Right Plan"
        },
        uploadConvertText: {
            uploadTitle: "Uploading your files...",
            convertTitle: "Converting your files...",
            compressTitle: "Compressing your files...",
            convertSuccess: "Converted Completely!",
            compressSuccess: "Compressed Completely!",
            downloadFile: "You can preview and download the video now",
            desc: "Please wait for a moment"
        },
        compressSetting: {
            compressionMethod: "Compression Method",
            byFileSize: "By File Size",
            byVariable: "By Variable Bitrate",
            byAutomatic: "By Automatic",
            highQuality: "High Quality",
            mediumQuality: "Medium Quality",
            lowQuality: "Low Quality",
            fileSize: "File Size(MB)",
            smallSize: "Small size",
            betterQuality: "Better quality"
        },
        vocalRemover: {
            customParseTitle: "Audio processing...",
            customParseDesc: "Artificial intelligence algorithm now works, it may take a minute.",
            customParseSuccess: "Congratulations! Your audio is ready for download.",
            downloadFile: "You can preview and download the audio now",
            instrumental: "Instrumental",
            vocals: "Vocals"
        },
        functionTab: {
            muteVideo: "Mute Video",
            videoSpeed: "Video Speed",
            loopVideo: "Loop Video",
            reverseVideo: "Reverse Video",
            audioCutter: "Audio Cutter",
            audioJoiner: "Audio Joiner",
            imagesToGif: "Images to GIF",
            videoToGif: "Video to GIF",
            imageResizer: "Image Resizer",
            mergeVideo: "Merge Video",
            slideshowMaker: "Slideshow Maker",
            addAudioToVideo: "Add Audio to Video",
            removeWatermark: "Remove Watermark",
            addWatermark: "Add Watermark",
            onlineTools: "Online Tools"
        },
        dialog: {
            cancel: "Cancel",
            ok: "OK",
            setting: "Setting",
            video: "Apply to all video conversions",
            audio: "Apply to all audio conversions",
            image: "Apply to all image conversions",
            vector: "Apply to all vector conversions",
            keepOriginSize: "Keep original size",
            videoText: "Video",
            audioText: "Audio",
            imageText: "Image",
            customSize: "Custom Size",
            encoder: "Encoder",
            resolution: "Resolution",
            frameRate: "Frame Rate",
            bitrate: "Bitrate",
            channel: "Channel",
            sampleRate: "Sample Rate",
            videoTips: "We provide you with the best parameter <br/>settings by default.",
            audioTips: "When this option is not checked, the converted<br/> output video will have no audio.",
            imageTips: "Click Lock/Unlock to keep the original <br/>aspect ratio or not.",
            inputEmail: "please input your email",
            trim: "Trim",
            trimTips: "You can specify the starting point and end point of trim."
        },
        notify: {
            title: "Congratulations！Thank you for your e-mail registration.",
            message: "We will send the download address to you after the task is completed."
        },
        convertedFiles: {
            convertedFiles: "Converted Files",
            fileStore24Hours: "Files will be store for 24 hours",
            name: "Name",
            size: "Size",
            operate: "Operate",
            deleteAll: "Delete All",
            nofiles: "No file, click the button below to convert it!"
        },
        fileFunctional: {
            image: {
                cancelMinLimit: "Please log in on Online UniConverter (originally Media.io) for free to enjoy the membership that you can add your image over #### MB."
            },
            video: {
                purchaseCancelMinLimit: "The free version of Media.io can only upload a maximum video size of #### MB. Please purchase online and get unlimited video size.",
                cancelMinLimit: "Online UniConverter only supports the video no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.",
                cancelMaxLimit: "Online UniConverter only supports the video no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop."
            },
            audio: {
                purchaseCancelMinLimit: "The free version of Media.io can only upload a maximum audio size of #### MB. Please purchase online and get unlimited audio size.",
                cancelMinLimit: "Online UniConverter only supports the audio no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.",
                cancelMaxLimit: "Online UniConverter only supports the audio no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop."
            },
            notSupport: "Online UniConverter does not support this format. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.",
            zeroSize: "Please do not upload files of size 0!",
            uploadFail: "Sorry, your video file(s) failed to import, please try again.",
            incorrectUrl: "Incorrect type of URL.",
            dropBoxLogIn: "Please log in to Online UniConverter before uploading file(s) from Dropbox.",
            googleDriveLogIn: "Please log in to Online UniConverter before uploading file(s) from Google Drive.",
            youtubeLogIn: "Please log in to Online UniConverter to edit YouTube video(s) by pasting URL.",
            youtubeConversionCount: " You have merged online videos for #### times. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.",
            chooseFiles: "Choose Files",
            cancel: "Cancel",
            Loading: "Loading",
            Processing: "Processing",
            drag: "Drag in or upload from computer"
        },
        conver: {
            showAccountText1: "Please log in to Online UniConverter (originally Media.io) to enjoy the membership service that you can get the email notification after the conversion task finishes.",
            showAccountText2: "Online UniConverter does not support this format. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for desktop.",
            showAccountText3: "You have converted files over #### times in one day. Please convert files tomorrow, or sign up to remove the limitation.",
            showPopWindowText1: "Online UniConverter only allows #### concurrent conversions. Please download the desktop converter to convert multiple files concurrently.",
            showPopWindowText2: "Online UniConverter only supports the video no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for desktop.",
            showPopWindowText3: "The free version of Online UniConverter can only upload a maximum video size of #### MB, please upgrade to the premium version to remove the limitation.",
            showPopWindowText4: "You have converted files over #### times in one day. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop to remove this limitation, or convert files tomorrow.",
            showPopWindowText5: "The free version of Online UniConverter can only convert files #### times in a day, please upgrade to the premium version to remove the limitation, or convert files tomorrow.",
            converterdFilesLogIn: "Please log in to Online UniConverter (originally Media.io) to enjoy membership service that you can download and delete the converted files.",
            convert: "Convert",
            to: "to",
            download: "Download",
            toggleDropdown: "Toggle Dropdown",
            converting: "Converting",
            uploading: "Uploading",
            pleaseWait: "Please Wait",
            retry: "Retry",
            ready: "Ready",
            downloadAll: "Download All",
            notifyMe: "Notify me when it is finished",
            addMoreFiles: "Add More Files",
            chooseFiles: "Choose Files",
            fromDropbox: "From Dropbox",
            fromGoogleDrive: "From Google Drive",
            hours24_1: "Files will be stored for 24 hours. Go to",
            hours24_2: "Converted Files",
            hours24_3: "to delete manually.",
            FileConversionFailed: "File conversion failed, please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.",
            delete: "Delete",
            preview: "Preview"
        },
        reverseVideo: {
            reverseSpeed: "Reverse speed",
            muteVideo: "Mute video",
            soundOptions: "Sound options",
            reverse: "Reverse",
            finalDuration: "Final duration",
            duration: "Duration",
            play: "PLAY",
            stop: "STOP",
            reverseingYourVideo: "Processing, please wait.",
            reverseFileAgain: "Reverse FILE AGAIN",
            reverseAnotherVideo: "Reverse ANOTHER VIDEO"
        },
        loopVideo: {
            duration: "Duration",
            play: "PLAY",
            stop: "STOP",
            trimYouVideo: "Trim you video",
            startTime: "Start Time",
            endTime: "End Time",
            loopClip: "Loop this clip",
            finalDuration: "Final duration",
            loopingYourVideo: "Looping your video",
            loop: "LOOP",
            loopFileAgain: "LOOP FILE AGAIN",
            loopAnotherVideo: "LOOP ANOTHER VIDEO",
            cutTime: "The free version of Media.io can only trim the video no more than the #### s. Please upgrade to the Premium version and remove the limitation."
        },
        speedVideo: {
            duration: "Duration",
            speed: "Speed",
            finalDuration: "Final duration",
            soundOptions: "Sound options",
            muteVideo: "Mute Video",
            start: "START",
            speedFileAgain: "SPEED FILE AGAIN",
            speedAnotherVideo: "SPEED ANOTHER VIDEO"
        },
        youtubeUrl: {
            go: "GO",
            createYoutubeThumbnail: "Click here to create a youtube thumbnail",
            rightClick: 'Right-click the image and select "Save image as..."',
            noLogIn: "Please log in to Online UniConverter to download more YouTube thumbnail.",
            noLongInType: "UploadLimit_Youtube",
            noVipTip: "The free version of Online UniConverter can only support download YouTube thumbnail 5 times, please upgrade to the premium version to remove the limitation.",
            noYoutubeUrl: "Sorry, we only support YouTube URL.",
            noImgTip: "Please check the URL you have entered. Or you can use Wondershare UniConverter for desktop.",
            errorUrl: "The incorrect type of URL."
        },
        cutter: {
            onlyDesktop: "Online UniConverter (originally Media.io) audio cutter is only available for desktop now.",
            onYourComputer: "Please enjoy it with Chrome or Firefox on your computer.",
            loading: "Loading",
            size: "Size",
            duration: "Duration",
            cut: "CUT",
            from: "From",
            to: "To",
            mode: "Mode",
            keep: "Keep",
            remove: "Remove",
            fade: "Fade",
            fadeIn: "Fade In",
            fadeOut: "Fade Out",
            processing: "Processing",
            "waitMoment.": "please wait a moment.",
            cuttingYourAudio: "We are cutting your audio",
            fileReady: "Your audio file is ready",
            editFileAgain: "EDIT FILE AGAIN",
            cutAnotherAudio: "CUT ANOTHER AUDIO"
        },
        compress: {
            showAccountText1: "Please log in to Online UniConverter (originally Media.io) to enjoy the membership service that you can get the email notification after the compressing task finishes. ",
            showAccountText2: "You have compressed files over #### times in one day. Please convert files tomorrow, or sign up to remove this limitation.",
            showPopWindowText1: "Online UniConverter only allows 1 concurrent compression. Please use Wondershare UniConverter for Desktop to compress multiple files concurrently.",
            showPopWindowText2: "Online UniConverter does not support this format. Please use Wondershare UniConverter (originally Wondershare Video Compressing Ultimate) for desktop.",
            showPopWindowText3: "Online UniConverter only supports the video no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Compressing Ultimate) for desktop.",
            showPopWindowText4: "The free version of Online UniConverter can only upload a maximum video size of #### MB, please upgrade to the premium version to remove the limitation.",
            showPopWindowText5: "You have compressed files over #### times in one day. Please use Wondershare UniConverter (originally Wondershare Video Compressing Ultimate) for desktop to remove this limitation, or convert files tomorrow.",
            showPopWindowText6: "The free version of Online UniConverter can only compress files #### times in one day, please upgrade to the premium version to remove the limitation, or continue tomorrow.",
            compressedSuccess: "Compressed Successfully",
            outputSettings: "Output Settings",
            quality: "Quality",
            resolution: "Resolution",
            source: "SOURCE",
            resetSize: "Reset size",
            format: "Format",
            retry: "Retry",
            download: "download",
            toggleDropdown: "Toggle Dropdown",
            compressNew: "Compress New",
            compressing: "Compressing",
            compress: "Compress",
            pleaseWait: "Please Wait",
            notifyMe: "Notify me when it is finished",
            addMoreFiles: "Add More Files",
            uploading: "Uploading",
            save: "save",
            moreSettings: "More Settings",
            finished: "Finished",
            uploadTipsHTML: "You can upload files up to @@@@ MB, <a href='javascript:;' class='link'>choose a plan</a> to get more.",
            uploadTipsText: "You can upload files up to @@@@ MB, choose a plan to get more."
        },
        img: {
            showPopWindowText1: "Online UniConverter does not support this format. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for desktop.",
            showPopWindowText2: "Online UniConverter only allows compressing #### image files at the same time. Please download Wondershare UniConverter desktop version to remove the limitation.",
            showPopWindowText3: "Online UniConverter only allows compressing #### image files at the same time. Please upgrade to the premium version to remove the limitation.",
            showPopWindowText4: "Online UniConverter only allows converting #### images at the same time. Please download Wondershare UniConverter desktop version to remove the limitation.",
            showPopWindowText5: "Online UniConverter only allows converting #### images at the same time. Please upgrade to the premium version to remove the limitation.",
            showPopWindowText6: "Online UniConverter only allows uploading an image no more than #### MB. Please log in to remove the limitation.",
            showPopWindowText7: "You have already compressed images #### times in one day. Please continue image compression tomorrow, or log in to remove the limitation",
            showPopWindowText8: "You have already converted images #### times in one day. Please continue image conversions tomorrow, or log in to remove the limitation.",
            showPopWindowText9: "You have already compressed images #### times in one day. Please continue image compression tomorrow, or use Wondershare UniConverter desktop version to remove this limitation.",
            showPopWindowText10: "You have already compressed images #### times in one day. Please continue tomorrow, or upgrade to the premium version to remove the limitation.",
            showPopWindowText11: "You have already converted images #### times in one day. Please continue image conversions tomorrow, or use Wondershare UniConverter desktop version to remove this limitation.",
            showPopWindowText12: "You have already converted images #### times in one day. Please continue tomorrow, or upgrade to the premium version to remove the limitation.",
            compressorImg: "You have compressed images over #### times in one day. Please try to compress more images tomorrow, or sign up for free to remove the limitation.",
            converterImg: "You have converted files over #### times in one day. Please try to convert more images tomorrow, or sign up for free to remove the limitation.",
            compressing: "COMPRESSING",
            converting: "CONVERTING",
            download: "download",
            toggleDropdown: "Toggle Dropdown",
            uploading: "Uploading",
            retry: "Retry",
            ready: "Ready",
            to: "to",
            downloadAll: "Download All",
            addMoreFiles: "Add More Files",
            chooseFiles: "Choose Files",
            fromDropbox: "From Dropbox",
            fromGoogleDrive: "From Google Drive",
            keepOriginalSize: "Keep original size",
            customSize: "Custom size",
            to16_8000: "Please enter pixel width or pixel height between 16 and 8000",
            convertAllFilesTo: "Convert all files to",
            deleteAll: "DELETE ALL",
            compress: "COMPRESS",
            convert: "CONVERT"
        },
        gif: {
            showAccountText1: "Online UniConverter only allows uploading an image no more than #### MB. Please log in to remove the limitation.",
            showAccountText2: "You have already created GIF #### times in one day. Please try to make more GIF tomorrow, or log in to remove the limitation.",
            showAccountText3: "You have already created GIF #### times in one day. Please continue tomorrow, or log in to remove the limitation.",
            showPopWindowText1: "Online UniConverter only allows uploading #### images at the same time to make a GIF. Please try Wondershare UniConverter desktop version to remove the limitation.",
            showPopWindowText2: "Online UniConverter only allows uploading #### images at the same time to make a GIF. Please upgrade to the premium version to remove the limitation.",
            showPopWindowText3: "Online UniConverter does not support this format. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for desktop.",
            showPopWindowText4: "You have already created GIF #### times in one day. Please try to make more GIF tomorrow, or use Wondershare UniConverter for desktop to remove the limitation.",
            showPopWindowText5: "You have already created GIF #### times in one day. Please try to make more GIF tomorrow, or upgrade to the premium version to remove the limitation.",
            showPopWindowText6: "Sorry, the GIF conversion failed. Please use Wondershare UniConverter desktop version to convert images to GIF successfully.",
            showPopWindowText7: "Only one type of watermark is supported, please use Wondershare UniConverter desktop version to add more watermarks.",
            showPopWindowText8: "Online UniConverter only allows uploading a video no more than #### MB. Please use Wondershare UniConverter desktop version for large video upload.",
            showPopWindowText9: "Online UniConverter only allows uploading a video no more than #### MB. Please upgrade to the premium version to remove the limitation.",
            showPopWindowText10: "Sorry, your video file(s) failed to import, please try again.",
            showPopWindowText11: "Sorry, your Youtube video fetch failed, please try again.",
            showPopWindowText12: "The incorrect type of URL. Sorry, we only support YouTube video to GIF.",
            showPopWindowText13: "You have created GIF from online videos for #### times, please continue tomorrow or use Wondershare UniConverter for desktop.",
            showPopWindowText14: "You have created GIF from online videos for #### times, please continue tomorrow or upgrade to the premium version to remove the limitation.",
            showPopWindowText15: "Please log in to Online UniConverter to create GIF from YouTube video(s) by pasting URL.",
            showPopWindowText16: "Your current GIF duration is longer than the limit of #### seconds for Online UniConverter, please use Wondershare UniConverter desktop version to remove the limitation.",
            showPopWindowText17: "Sorry, the GIF conversion failed. Please use Wondershare UniConverter desktop version to create GIF successfully.",
            showPopWindowText18: "Sorry, the GIF conversion failed. Please use Wondershare UniConverter desktop version to create GIF successfully.",
            download: "download",
            toggleDropdown: "Toggle Dropdown",
            imagesToGif: "Images to GIF",
            videoToGif: "Video to GIF",
            loading: "Loading",
            cancel: "Cancel",
            makingGif: "Making GIF",
            suspended: "SUSPENDED",
            play: "PLAY",
            width: "Width",
            height: "Height",
            pixels: "pixels",
            widthRangePixels: "The width range is 50-500 pixels.",
            heightRangePixels: "The height range is 50-500 pixels.",
            frameRate: "Frame Rate",
            fps: "fps",
            fpsTip: "The higher the fps, the smoother your animation becomes. You can set it between 1-30.",
            textWatermark: "Text watermark",
            createGif: "Create GIF",
            createNewGif: "CREATE NEW GIF",
            remakeGif: "REMAKE GIF",
            trimYourVideo: "Trim Your Video",
            timeTip: "Use the slider to select your GIF duration, or input the Start Time and End Time precisely.",
            StartTime: "Start Time",
            endTime: "End Time",
            outputSize: "Output Size",
            fpsMeans: "Fps means how many frames per second your final GIF will run at. The higher the fps, the smoother your animation becomes.",
            imageWatermark: "Image watermark"
        },
        mute: {
            showAccountText1: "You have converted video file(s) over #### times in one day. Please try to convert more files tomorrow.  or sign up for free to remove the limitation.",
            showAccountText2: "Please log in to Online UniConverter to mute YouTube video(s) by pasting URL",
            showPopWindowText1: "Online UniConverter does not support this format. Please use Wondershare UniConverter desktop version to mute your videos.",
            showPopWindowText2: "Online UniConverter only could upload a video to #### MB, if over this size, please try Wondershare UniConverter (originally Wondershare Video Converter Ultimate) desktop version for large file(s) upload.",
            showPopWindowText3: "The free version of Online UniConverter can only upload a maximum video size of #### MB, please upgrade to the premium version to remove the limitation.",
            showPopWindowText4: "The free version of Online UniConverter can only allows to convert video(s) or image(s) #### times in a day.  please upgrade to the premium version to remove the limitation.  or convert files tomorrow.",
            showPopWindowText5: "Sorry, your video file(s) failed to import, please try again.",
            showPopWindowText6: "Online UniConverter only could upload a video to #### MB, if over this size, please try Wondershare UniConverter (originally Wondershare Video Converter Ultimate) desktop version for large file(s) upload.",
            showPopWindowText7: "Incorrect type of URL. Sorry, we only support YouTube video to GIF.",
            showPopWindowText8: "You have muted online videos for #### times, please upgrade to Premium version and remove the limitation.",
            showPopWindowText9: "Sorry, the Mute conversion failed. Please use Wondershare UniConverter desktop version to create Mute successfully.",
            download: "download",
            toggleDropdown: "Toggle Dropdown",
            mute: "Mute",
            previewNot: "Preview is not available.",
            browserNotSupport: "Your browser does not support this format.",
            muteAnother: "Mute Another"
        },
        user: {
            user1: "Welcome back!",
            user2: "New here? ",
            user3: "Sign up for free",
            user4: "Email address",
            user5: "Password",
            user6: "Remember me",
            user7: "Forget Password?",
            user8: "Login",
            user9: "Or",
            user10: "Login with",
            user11: "Already got an account?",
            user12: "Log in here",
            user13: "Verification Code",
            user14: "Click the button to send a verification code to the input email address.",
            user15: "Signup",
            user16: "Please input a valid email address.",
            user17: "The email can't be empty",
            user18: "The password should be 6 - 16 characters or numbers.",
            user19: "The password can't be empty",
            user20: "Verification code cannot be empty",
            user21: "The name can't be empty",
            user22: "Send Code",
            user23: "User name",
            user24: "Join Online UniConverter (originally Media.io) to Enjoy Better Free Services"
        },
        ediror: {
            editText1: "Drop it like it's hot",
            editText2: "Add your files by dropping them in this window",
            editText3: "Drag & Drop or Hit to Add Video",
            editText4: "Saturation",
            editText5: "Contrast",
            editText6: "Brightness",
            editText7: "Customized",
            editText8: "1:1 (Square)",
            editText9: "4:3 (Classic TV)",
            editText10: "16:9 (Wide Screen)",
            editText11: "Horizontal",
            editText12: "Vertical",
            editText13: "Video",
            editText14: "No Search Result",
            editText15: "Audio",
            editText16: "Counter-Clockwise",
            editText17: "Clockwise",
            editText18: "Loading ...",
            editText19: "Cancel",
            editText20: "Size",
            editText21: "Duration",
            editText22: "Resolution",
            editText23: "Trim",
            editText24: "Crop",
            editText25: "Adjust",
            editText26: "Rotate",
            editText27: "Flip",
            editText28: "Save to",
            editText29: "Start",
            editText30: "Processing",
            editText31: "Edit Another Video",
            editText32: "You have already edited videos 5 times in one day. Please continue tomorrow, or log in to remove the limitation.",
            editText33: "Online UniConverter does not support this format. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop.",
            editText34: "Online UniConverter only supports the video no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for desktop.",
            editText35: "Online UniConverter only supports the video no more than #### MB. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for desktop.",
            editText36: "You have already edited videos #### times in one day. Please continue tomorrow, or use Wondershare UniConverter for desktop to remove the limitation.",
            editText37: "Online UniConverter does not support this format. Please use Wondershare UniConverter for desktop.",
            editText38: "Save",
            editText39: "Image",
            editText40: "Vector"
        },
        nav: {
            navText1: "User Center",
            navText2: "Logout",
            navText3: "LOG IN",
            navText4: "SIGN UP FOR FREE",
            navText5: "SIGN UP FOR 30-DAY FREE",
            convertedFiles: "Converted Files",
            myAccount: "My Account",
            tryitfree: "Try it free"
        },
        popup: {
            text1: "UniConverter for Desktop",
            text2: "Convert Any Video to Over 1,000 Formats. ",
            text3: "30X Faster Video Conversion Speed.",
            text4: "Batch Compress Videos to Smaller Size without Size Limits. ",
            text5: "Helpful Editing Features to Trim, Crop Videos, Apply Effects, etc.",
            text6: "Convert and Customize Images to JPG, PNG, TIFF, GIF, BMP Without Limits.",
            text7: "Compress and Customize Images to JPG, PNG, TIFF, GIF, BMP Without Limits.",
            downloadWin: "https://download.wondershare.com/uniconverter14_64bit_full14204.exe",
            downloadMac: "https://download.wondershare.com/uniconverter14-mac_full14207.zip",
            text8: "Upgrade to Premium",
            text9: "YEARLY",
            text10: "$2.99",
            text11: "USD $4.95",
            text12: "month",
            text13: "cancel anytime",
            buy_now_yearly: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=297&sub_lid=0&currency=USD&language=English&verify=8794fcdb210d1a58d3f90b1dede2733c",
            text14: "MONTHLY",
            text15: "$9.95",
            text16: "month",
            text17: "cancel anytime",
            buy_now_month: "https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=294&sub_lid=0&currency=USD&language=English&verify=4c3bb50bf909cb7f333c54f832e8e754",
            text18: "1GB",
            text19: "Maximum File Size",
            text20: "30",
            text21: "Concurrent Conversions",
            text22: "Unlimited",
            text23: "Conversion",
            text24: "Download",
            text25: "Unlimited",
            text26: "File Compression",
            text26_1: "Email Notification",
            text27: "Best Seller",
            text28: "Online 1-Year Subscription",
            text29: "Online 1-Month Subscription",
            text31: "try it free ",
            text32: "Buy Now",
            text33: "https://www.media.io/video-converter-desktop.html",
            text34: "https://www.media.io/mobile-download-guidance.html",
            text35: "$35.4",
            text36: "year",
            text37: "USD $59.95"
        },
        resize: {
            download: "download",
            toggleDropdown: "Toggle Dropdown",
            loading: "Loading",
            cancel: "Cancel",
            byPixels: "By Pixels (px)",
            byPercentage: "By Percentage (%)",
            originalLockTip: "Click Lock/Unlock to keep the original aspect ratio or not.",
            resize: "RESIZE",
            lockTip: "Click to ON/OFF Aspect Ratio",
            pixels16To8000: "Please enter the pixel width and height between 16 and 8000.",
            percentage1To500: "Please enter the percentage of width and height between 1 and 500.",
            stretch: "Stretch",
            stretchTip: "The image(s) will be stretched to match the new size.",
            fill: "Fill",
            fillTip: "The image(s) will be cropped to match the new size.",
            fit: "Fit",
            fitTip: "The image(s) will be cropped to fit the new size and the rest part(s) will be painted with the selected background color.",
            selectColor: "When choosing the Fit option, your image(s) will be painted with the selected color.",
            resizingImages: "Resizing images",
            resizedFail: "Your images have been resized Fail",
            resizedSuccess: "Your images have been resized successfully",
            sorryYourFiles: "Sorry, your file(s)",
            resizedFailDownload: "resized failed, Please download",
            desktopVersion: "the desktop version",
            tryAgain: "to try again.",
            resizeMore: "RESIZE MORE IMAGES",
            fitColor: "Fit Color"
        },
        joiner: {
            onlyDesktop: "Online UniConverter (originally Media.io) audio cutter is only available for desktop now.",
            onYourComputer: "Please enjoy it with Chrome or Firefox on your computer.",
            loading: "Loading",
            importFailed: "Import failed. If you need to continue merging audio, please delete the failed file before merging.",
            fadeIn: "Click to select/deselect audio fade in.",
            fadeInOut: "Click to select/deselect audio fade in and out.",
            fadeOut: "Click to select/deselect audio fade out.",
            startTime: "Start Time",
            endTime: "End time",
            waitMoment: "We are uploading files, please wait a moment.",
            merge: "Merge",
            mergingYourAudio: "We are merging your audio files",
            fileReaded: "Your audio file is read",
            editFileAgain: "EDIT FILE AGAIN",
            mergeAnother: "MERGE ANOTHER",
            joinCountFree: "You have edited files #### times in one day. Please log in to remove the limitation.  or edit more files tomorrow.",
            joinCountLogin: "You have edited files #### times in one day. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop. ",
            fileNumFree: "The free Online UniConverter only allows #### files to be merged at a time. Please upgrade to the Premium version and remove the limitation.",
            fileNumLogin: "The Online UniConverter only allows #### files to be merged at a time. Please use Wondershare UniConverter (originally Wondershare Video Converter Ultimate) for Desktop."
        },
        editorVideo: {
            mergeVideos: "Merge Videos",
            slideshowMaker: "Slideshow Maker",
            addAudioToVideo: "Add Audio to Video",
            merge: "MERGE",
            addFiles: "Add Files",
            addAudio: "Add audio",
            fitWithBorder: "Fit with border",
            zoomCrop: "Zoom & Crop",
            setting: "Setting",
            goBack: "Go Back",
            audioOption: "Audio options",
            cropOptions: "Crop options",
            Crossfade: "Crossfade",
            instagramVideo: "Instagram Video",
            youTubeVideo: "YouTube Video",
            instagramStory: "Instagram Story",
            facebookVideo: "Facebook Video",
            imageDuration: "Image duration",
            transition: "Transition",
            applyAllImg: "Applies to all images",
            outputFormat: "Output format",
            trimAudio: "Trim Audio",
            audioTrackVolume: "Audio track volume",
            videoSoundVolume: "Video sound volume",
            startTime: "Start Time",
            endTime: "End Time",
            empty_file: "Sorry, your video has not been manipulated in any way, <br/>please jump to the Online Tools for your video operation."
        },
        memeGenerator: {
            "meme-generator": "Meme Generator",
            template: "Template",
            Create: "Generate",
            OriginalSize: "Original Size",
            FormateNotSupport: "Sorry, Online Uniconverter does not support this image format, please upload another image file.",
            ResizeFor: "Resize for",
            OutputSettings: "Output Settings",
            UploadGifFail: "Sorry, your GIF file failed to import, please try again.",
            UploadFail: "Sorry, your image file failed to import, please try again.",
            GenerateFail: "Sorry, your meme failed to generator, please try again.",
            onlyDesktop: "Online Uniconverter (originally Media.io) meme generator is only available by personal computer now.",
            onYourComputer: "Please enjoy it with Chrome or Firefox on your computer.",
            downloadText: "Congratulations! Your meme is ready for download.",
            enterYourText: "Enter Your Text",
            textPlaceholder: "TEXT HERE",
            topTextPlaceholder: "UP TEXT HERE",
            bottomTextPlaceholder: "BOTTOM TEXT HERE"
        },
        removeWatermark: {
            wrapperTitle: "Remove Watermark",
            Generator: "Remove Watermark",
            AddArea: "Add Area",
            Watermark: "Watermark",
            Duration: "Duration",
            emptyText: "Click “Add Area” to select the area in the video that you want to remove the watermark.",
            limitTips: "Sorry, we only support the removal of 10 watermarks. Please select a premium service below.",
            downloadText: "Congratulations! Watermark has been removed !",
            errorTips: "Sorry, your watermark failed to remove, please try again.",
            beforeDownload: "Sorry, you need to log in before downloading"
        },
        addWatermark: {
            addWatermark: "Add Watermark",
            Text: "Text",
            Image: "Image",
            add: "Add",
            textStyle: "Text Style",
            textColor: "Text Color",
            Opacity: "Opacity",
            Background: "Background",
            Duration: "Duration",
            textPlaceholder: "Enter your text",
            downloadText: "Congratulations! Your video is ready for download.",
            delete: "Delete",
            cancel: "Cancel",
            retry: "Retry",
            errorTips: "Sorry, your file generation failed, please try again.",
            uploadTips: "Sorry, Online Uniconverter does not support this image format, please upload another image file."
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
}, , , , , function(e, o, t) {
    t(17), t(22), t(23)
}, function(e, o, t) {
    "use strict";
    t.r(o);
    var i = t(6),
        n = t(0),
        r = t(5);
    "undefined" == typeof jQuery ? window.$ = window.jQuery = window.jq131 = t(8) : window.jq131 = t(8);
    var a = t(8);
    t(20), t(21), t.e(39).then(function(e) {
        t(28)
    }.bind(null, t)).catch(t.oe), document.getElementById("remove_watermark") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(46)]).then(function() {
        t(29)
    }.bind(null, t)).catch(t.oe), Object(n.a)("remove_watermark")), document.getElementById("add_watermark") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(18)]).then(function() {
        t(30)
    }.bind(null, t)).catch(t.oe), Object(n.a)("add_watermark")), document.getElementById("app_activity") && Promise.all([t.e(0), t.e(1), t.e(5), t.e(6), t.e(21)]).then(function() {
        t(61)
    }.bind(null, t)).catch(t.oe), document.getElementById("app_userInfo") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(22)]).then(function() {
        t(31)
    }.bind(null, t)).catch(t.oe), Object(n.a)("unknown")), document.getElementById("media-io-feedback") && Promise.all([t.e(0), t.e(1), t.e(4), t.e(35)]).then(function() {
        t(48)
    }.bind(null, t)).catch(t.oe), document.getElementById("vocalRemover") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(61)]).then(function() {
        t(49)
    }.bind(null, t)).catch(t.oe), Object(n.a)("vocal_remover")), document.getElementById("front-convert") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(37)]).then(function() {
        t(55)
    }.bind(null, t)).catch(t.oe), Object(n.a)("fast_convert")), document.getElementById("convert-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(8), t.e(27)]).then(function() {
        t(56)
    }.bind(null, t)).catch(t.oe), Object(n.a)("convert")), document.getElementById("more-tools") && Promise.all([t.e(0), t.e(1), t.e(3), t.e(9), t.e(43)]).then(function() {
        t(32)
    }.bind(null, t)).catch(t.oe), document.getElementById("addFunctional") && Promise.all([t.e(0), t.e(1), t.e(3), t.e(9), t.e(38)]).then(function() {
        t(33)
    }.bind(null, t)).catch(t.oe), document.getElementById("converted_files") && Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(31)]).then(function() {
        t(57)
    }.bind(null, t)).catch(t.oe), document.getElementById("compressor-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(26)]).then(function() {
        t(42)
    }.bind(null, t)).catch(t.oe), Object(n.a)("compressor")), document.getElementById("app_editorStage") && Promise.all([t.e(0), t.e(1), t.e(3), t.e(8), t.e(32)]).then(function() {
        t(36)
    }.bind(null, t)).catch(t.oe), document.getElementById("app_account") && Promise.all([t.e(0), t.e(1), t.e(14), t.e(15)]).then(function() {
        t(34)
    }.bind(null, t)).catch(t.oe), document.getElementById("app_user") && Promise.all([t.e(0), t.e(1), t.e(50)]).then(function() {
        t(50)
    }.bind(null, t)).catch(t.oe), document.querySelectorAll('[data-toggle="paginator"]').length > 0 && Promise.all([t.e(0), t.e(1), t.e(44)]).then(function() {
        t(43)
    }.bind(null, t)).catch(t.oe), document.getElementById("image-convert-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(4), t.e(30)]).then(function() {
        t(46)
    }.bind(null, t)).catch(t.oe), Object(n.a)("convert_img")), document.getElementById("gif-images-convert-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(8), t.e(28)]).then(function() {
        t(44)
    }.bind(null, t)).catch(t.oe), Object(n.a)("convert_gif_img")), document.getElementById("gif-video-convert-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(29)]).then(function() {
        t(62)
    }.bind(null, t)).catch(t.oe), Object(n.a)("convert_gif_video")), document.getElementById("video-mute-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(7), t.e(59)]).then(function() {
        t(51)
    }.bind(null, t)).catch(t.oe), Object(n.a)("video_mute")), document.getElementById("image-resize-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(4), t.e(40)]).then(function() {
        t(52)
    }.bind(null, t)).catch(t.oe), Object(n.a)("image_resize")), document.getElementById("audio-trim-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(9), t.e(24)]).then(function() {
        t(58)
    }.bind(null, t)).catch(t.oe), Object(n.a)("audio_trim")), document.getElementById("audio-join-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(23)]).then(function() {
        t(47)
    }.bind(null, t)).catch(t.oe), Object(n.a)("audio_joiner")), document.getElementById("video-speed-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(60)]).then(function() {
        t(53)
    }.bind(null, t)).catch(t.oe), Object(n.a)("video_speed")), document.getElementById("youtube-video-url") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(7), t.e(62)]).then(function() {
        t(66)
    }.bind(null, t)).catch(t.oe), Object(n.a)("youtube_url")), document.getElementById("video-loop-box") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(58)]).then(function() {
        t(59)
    }.bind(null, t)).catch(t.oe), Object(n.a)("video_loop")), document.getElementById("reverse-video") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(48)]).then(function() {
        t(60)
    }.bind(null, t)).catch(t.oe), Object(n.a)("reverse_video")), document.getElementById("merge-video-editor") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(33)]).then(function() {
        t(37)
    }.bind(null, t)).catch(t.oe), Object(n.a)("merge_video_editor")), document.getElementById("audioVideoMixer") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(16)]).then(function() {
        t(39)
    }.bind(null, t)).catch(t.oe), Object(n.a)("add_audio_to_video")), document.getElementById("rating-box") && Promise.all([t.e(0), t.e(1), t.e(2), t.e(8), t.e(45)]).then(function() {
        t(54)
    }.bind(null, t)).catch(t.oe), document.getElementById("mergeVideo") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(4), t.e(42)]).then(function() {
        t(63)
    }.bind(null, t)).catch(t.oe), Object(n.a)("merge_video")), document.getElementById("addAudioToVideo") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(4), t.e(17)]).then(function() {
        t(64)
    }.bind(null, t)).catch(t.oe), Object(n.a)("add_audio_to_video")), document.getElementById("slideshowMarker") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(4), t.e(49)]).then(function() {
        t(65)
    }.bind(null, t)).catch(t.oe), Object(n.a)("slideshow_maker")), document.getElementById("common_download") && Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(25)]).then(function() {
        t(67)
    }.bind(null, t)).catch(t.oe), document.getElementById("meme_generator") && (Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(41)]).then(function() {
        t(45)
    }.bind(null, t)).catch(t.oe), Object(n.a)("meme_generator")), document.getElementById("memeGeneratorEditor") && Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(41)]).then(function() {
        t(38)
    }.bind(null, t)).catch(t.oe), a("#removeWatermarkEditor").length > 0 && Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(47)]).then(function() {
        t(41)
    }.bind(null, t)).catch(t.oe), a("#addWatermarkEditor").length > 0 && Promise.all([t.e(0), t.e(1), t.e(3), t.e(2), t.e(19)]).then(function() {
        t(40)
    }.bind(null, t)).catch(t.oe), Promise.all([t.e(0), t.e(57)]).then(function() {
        t(35)
    }.bind(null, t)).catch(t.oe), window.stageAnimate = function(e) {
        if (!a("#banner").hasClass("images")) {
            var o = a("#banner .banner-left"),
                t = a("#banner .banner-right"),
                i = a("#banner .banner-box");
            e ? (console.log("flag"), o.removeClass("col-xl-5 col-lg-6").addClass("col-lg-6"), t.addClass("col-lg-6").removeClass("col-xl-7"), i.css("max-width", "720px")) : (console.log("flag"), o.removeClass("col-xl-5 col-lg-6").addClass("col-lg-6"), t.removeClass("col-xl-7").addClass("col-lg-6"), i.css("max-width", "500px"))
        }
    };
    try {
        var s = "Right_Download",
            d = "",
            l = "Recommend_".concat(r.a.getPage());
        new Map([
            ["convert_home", !0],
            ["convert_audio", !0],
            ["convert_video", !0],
            ["convert_XXconverter", !0],
            ["convert_XXtoXX", !0],
            ["convert_video", !0],
            ["compress_video", !0],
            ["compress_audio", !0],
            ["compress_XX", !0],
            ["compress_XX", !0]
        ]).has(r.a.getPage()) && (a(".down_win_full").click((function() {
            d = r.a.getPage() + "-win", i.a.sendGTM({
                category: "Recommend_Download",
                action: s,
                eventLabel: d
            }), i.a.sendGTM({
                category: l,
                action: s,
                eventLabel: d
            })
        })), a(".down_mac_full").click((function() {
            d = r.a.getPage() + "-mac", i.a.sendGTM({
                category: "Recommend_Download",
                action: s,
                eventLabel: d
            }), i.a.sendGTM({
                category: l,
                action: s,
                eventLabel: d
            })
        })))
    } catch (e) {}
    a((function() {
        a("body").on("click", ".formPro .form-group", (function(e) {
            (e || window.event).stopPropagation(), a(this).addClass("active"), a(this).find("input").focus(), a(this).find("textarea").focus(), a(this).siblings(".form-group").each((function() {
                "" == a(this).find("input").val() && a(this).removeClass("active")
            }))
        })), a("body").click((function() {
            a(".formPro .form-group").each((function() {
                "" == a(this).find("input").val() && a(this).removeClass("active"), "" == a(this).find("textarea").val() && a(this).removeClass("active")
            }))
        }))
    }));
    var c = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
    a((function() {
        var e = a(document.body),
            o = a(".if_btnMac"),
            t = a(".if_btnWin"),
            i = a(".if_gotoMac"),
            n = a(".if_gotoWin");
        c ? (o.show(), t.hide(), n.removeClass("curr"), i.addClass("curr")) : (o.hide(), t.show(), n.addClass("curr"), i.removeClass("curr")),
            function(e) {
                if (a('[data-toggle="videoModal"]').length > 0) {
                    var o = a("#Modal-video");
                    e.append('<div id="Modal-video" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header py-2"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body p-0"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="" allowfullscreen></iframe></div></div></div></div></div>'), e.on("click", '[data-toggle="videoModal"]', (function() {
                        o.find("iframe").attr("src", a(this).attr("data-target")), o.modal({
                            backdrop: "static"
                        })
                    })), o.on("hidden.bs.modal", (function() {
                        o.find("iframe").attr("src", "")
                    }))
                }
            }(e), a(document).on("click", ".if_gotoWin", (function() {
                o.hide(), t.show(), n.addClass("curr"), i.removeClass("curr")
            })).on("click", ".if_gotoMac", (function() {
                o.show(), t.hide(), n.removeClass("curr"), i.addClass("curr")
            })).on("click", ".totop", (function() {
                a("html,body").animate({
                    scrollTop: 0
                }, 400)
            }))
    })), window.addEventListener("popstate", (function(e) {
        window.location.reload()
    }), !1);
    var u = new Map([
        ["English", "lang=en"],
        ["Deutsch", "lang=de"],
        ["Français", "lang=fr"],
        ["Italiano", "lang=it"],
        ["Español", "lang=es"],
        ["日本語", "lang=jp"],
        ["한국어", "lang=ko"],
        ["default", "lang=en"]
    ]);
    a(".wsc-footer2020-mobile-language-menu").on("click", "a", (function(e) {
        document.cookie = u.get(a(e.target).html()) || u.get("default")
    }));
    var m = a(".scroll-to-top"),
        p = a(".feedback-button");
    m.click((function() {
        a("html,body").animate({
            scrollTop: 0
        }, 400)
    })), a(window).scroll((function() {
        var e = a(window).scrollTop();
        e >= 400 ? m.fadeIn() : m.fadeOut(), window.document.body.clientWidth <= 992 && (e >= 100 ? p.fadeIn() : p.fadeOut())
    })), fetch("https://srv.media.io/v1/system-config/desktop-download").then((function(e) {
        return e.json()
    })).then((function(e) {
        var o = "app-info://platform/microsoft-store" === document.referrer || !!sessionStorage.getItem("referrer-ms-store");
        o && sessionStorage.setItem("referrer-ms-store", o), o && !e.data.microsoft_store && (sessionStorage.setItem("close-desktop", !0), document.body.dispatchEvent(new Event("closeDesktop")))
    }))
}, , , function(e, o) {
    ! function() {
        function e(e) {
            return new Promise((function(o, t) {
                var i = new XMLHttpRequest;
                i.open("HEAD", e), i.onreadystatechange = function(e) {
                    if (4 === i.readyState && 200 === i.status) {
                        var t = i.getAllResponseHeaders(),
                            n = t.substr(1).match(new RegExp("(^|\n)content-length:([^\n]*)(\n|$)"))[2],
                            r = t.substr(1).match(new RegExp("(^|\n)content-disposition:([^\n]*)(\n|$)"))[2];
                        n = n.trim(), r = r.replace(/.*filename=/, "").replace(/\r/g, ""), o({
                            size: n,
                            name: r
                        })
                    }
                }, i.send()
            }))
        }

        function o(e, o) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                i = o ? o.substr(1).match(t) : window.location.search.substr(1).match(t);
            return null != i ? unescape(i[2]) : null
        }

        function t(e, o) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = new Date,
                n = window.location.origin.indexOf("media.io") > -1 ? ".media.io" : "";
            i.setTime((new Date).getTime() + 24 * t * 60 * 60 * 1e3), document.cookie = e + "=" + escape(o) + ";expires=" + i.toGMTString() + ";path=/; domain=" + n + ";SameSite=None; Secure"
        }

        function i(e) {
            var o = e.mode,
                t = void 0 === o ? "iframe2parent_need_response" : o,
                i = e.target,
                n = void 0 === i ? "user" : i,
                r = e.action,
                a = void 0 === r ? "get_token" : r,
                s = e.type,
                d = void 0 === s ? "request" : s,
                l = e.session_id,
                c = void 0 === l ? Date.now() : l,
                u = e.version,
                m = void 0 === u ? "v1" : u,
                p = e.data,
                h = void 0 === p ? "" : p;
            window.parent.postMessage({
                mode: t,
                target: n,
                action: a,
                type: d,
                session_id: c,
                version: m,
                data: h
            }, "*")
        }
        var n, r = o("open_from");
        r ? (window.iframe_env = r, window.sessionStorage.setItem("iframe_env", r)) : window.iframe_env = window.sessionStorage.getItem("iframe_env") || null, "inclowdz" === window.iframe_env && (window.loadEle = ((n = document.createElement("div")).className = "wrapper-loading", n.style.display = "none", n.innerHTML = '<div class="loading-mask"></div>\n    <div class="loading-content">\n      <div class="loading-icon">\n        <img src="https://www.media.io/imagesV4/editor/loading.png" alt="">\n      </div>\n      <div class="loading-processing">\n        Reading the cloud file, please wait...\n      </div>\n    </div>', document.body.appendChild(n), n), i({
            mode: "iframe2parent",
            target: "loading",
            action: "completed",
            type: "request"
        }), function() {
            window.addEventListener("message", (function(e) {
                var o;
                "v1" === e.data.version && ("iframe2parent_need_response" === (o = e.data).mode && "response" === o.type ? function(e) {
                    "user" === e.target && "get_token" === e.action && (t("ou", e.data.token), setTimeout((function() {
                        window.inclowdz_login_success()
                    }), 3e3))
                }(o) : "parent2iframe" === o.mode && "request" === o.type && function(e) {
                    "user" === e.target && "update_token" === e.action && (t("ou", e.data.token), setTimeout((function() {
                        window.inclowdz_login_success()
                    }), 3e3)), "user" === e.target && "logout" === e.action && window.inclowdz_Logout(), "file" === e.target && "edit" === e.action && (window.fileinfo_from_inclowdz = e.data)
                }(o))
            })), document.addEventListener("click", (function(t) {
                var n = t.target.search;
                if ("A" === t.target.tagName)
                    if (t.preventDefault(), n && n.indexOf("downloadUrl") > -1) {
                        var r = o("downloadUrl", n);
                        e(r).then((function(e) {
                            var o = e.size,
                                t = e.name;
                            window.windowPossMessage({
                                mode: "iframe2parent",
                                target: "file",
                                action: "export",
                                type: "request",
                                data: {
                                    download_url: r,
                                    filename: t,
                                    fileSize: o
                                }
                            }, "*")
                        }))
                    } else t.target.href.indexOf("https://") > -1 && -1 === t.target.href.indexOf("signin.html") && -1 === t.target.href.indexOf("signup.html") && i(t.target.href, t.target.href.indexOf("www.media.io") > -1 ? "_self" : "_blank")
            }));
            var i = window.open;
            window.open = function(t) {
                var n = o("downloadUrl", t.substr(t.indexOf("?")));
                n ? e(n).then((function(e) {
                    var o = e.size,
                        t = e.name;
                    window.windowPossMessage({
                        mode: "iframe2parent",
                        target: "file",
                        action: "export",
                        type: "request",
                        data: {
                            download_url: n,
                            filename: t,
                            fileSize: o
                        }
                    }, "*")
                })) : i(t, t.indexOf("www.media.io") > -1 ? "_self" : "_blank")
            }
        }(), window.windowPossMessage = i, $(".uploadList").parent().prev().hide(), function(e) {
            var o = document.createElement("link");
            o.rel = "stylesheet", o.href = e, document.head.appendChild(o)
        }(window.origin + "/staticV4/InClowdz/index.css"))
    }()
}, function(e, o, t) {
    "use strict";
    t.r(o);
    var i = t(4),
        n = t.n(i);
    ! function() {
        function e(e, o) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                i = o ? o.substr(1).match(t) : window.location.search.substr(1).match(t);
            return null != i ? unescape(i[2]) : null
        }

        function o(e, o) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = new Date,
                n = window.location.origin.indexOf("media.io") > -1 ? ".media.io" : "localhost";
            i.setTime((new Date).getTime() + 24 * t * 60 * 60 * 1e3), document.cookie = e + "=" + escape(o) + ";expires=" + i.toUTCString() + ";path=/; domain=" + n + ";SameSite=None; Secure"
        }

        function t(e) {
            var o, t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (o = document.cookie.match(t)) ? unescape(o[2]) : null
        }

        function i(e) {
            var o = e.target,
                t = void 0 === o ? "" : o,
                i = e.action,
                n = void 0 === i ? "" : i;
            window.parent.postMessage({
                target: t,
                action: n
            }, "*")
        }
        var r, a, s = e("wcc_open_from");
        s ? (window.wcc_iframe_env = s, window.sessionStorage.setItem("wcc_iframe_env", s)) : window.wcc_iframe_env = window.sessionStorage.getItem("wcc_iframe_env") || null, "wcc_iframe" === window.wcc_iframe_env && (i({
            target: "user",
            action: "status"
        }), window.windowPossMessage = i, function() {
            function i(e) {
                window.parent.postMessage({
                    target: "main",
                    action: "redirect",
                    data: {
                        link: e
                    }
                }, "*")
            }
            window.addEventListener("message", (function(e) {
                var i = e.data;
                "object" === n()(i) && i.target && i.action && ("user" === i.target && "status" === i.action && i.data && (i.data.auth ? (o("ou", i.data.token), window.inclowdz_login_success && "function" == typeof window.inclowdz_login_success ? window.inclowdz_login_success() : window.hadInclowdzLoginSuccess = !0) : i.data.auth || (window.inclowdz_Logout && "function" == typeof window.inclowdz_Logout ? null !== t("ou") && window.inclowdz_Logout() : null !== t("ou") && (window.hadInclowdzLogout = !0))), "main" === i.target && "home" === i.action && (window.location.href = "https://www.media.io/wcc-online-tools.html?wcc_open_from=wcc_iframe"), "user" === i.target && "token" === i.action && i.data && i.data.token && (o("ou", i.data.token), window.inclowdz_login_success && "function" == typeof window.inclowdz_login_success ? window.inclowdz_login_success() : window.hadInclowdzLoginSuccess = !0), "user" === i.target && "logout" === i.action && (window.inclowdz_Logout && "function" == typeof window.inclowdz_Logout ? window.inclowdz_Logout() : window.hadInclowdzLogout = !0), "user" === i.target && "login" === i.action && i.data && (o("ou", i.data.token), window.inclowdz_login_success && "function" == typeof window.inclowdz_login_success ? window.inclowdz_login_success() : window.hadInclowdzLoginSuccess = !0))
            })), window.wccRouteBlank = i, document.addEventListener("click", (function(o) {
                var t = o.target.search;
                if ("A" === o.target.tagName)
                    if (o.preventDefault(), t && t.indexOf("downloadUrl") > -1) {
                        var n = e("downloadUrl", t);
                        r(n, "_self")
                    } else o.target.href.indexOf("https://") > -1 && -1 === o.target.href.indexOf("signin.html") && -1 === o.target.href.indexOf("signup.html") && (o.target.href.indexOf("www.media.io") > -1 ? r(o.target.href, "_self") : i(o.target.href))
            }));
            var r = window.open;
            window.open = function(o) {
                var t = e("downloadUrl", o.substr(o.indexOf("?")));
                t ? r(t, "_self") : o.indexOf("www.media.io") > -1 ? r(o, "_self") : i(o)
            }
        }(), $(".uploadList").parent().prev().hide(), r = window.origin + "/staticV4/Wcc/index.css", (a = document.createElement("link")).rel = "stylesheet", a.href = r, document.head.appendChild(a))
    }()
}, function(e, o, t) {
    "use strict";
    t.r(o)
}, function(e, o, t) {
    "use strict";
    t.r(o)
}, , , , function(e, o) {
    e.exports = mediaFramework
}]);