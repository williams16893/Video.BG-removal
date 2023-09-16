/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var t = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t, o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) n[o] = t[o]
        }
        return n
    }

    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}

        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }

        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("="),
                        u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u), t) try {
                            u = JSON.parse(u)
                        } catch (e) {}
                        if (r[a] = u, e === a) break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i, r.get = function(e) {
            return c(e, !1)
        }, r.getJSON = function(e) {
            return c(e, !0)
        }, r.remove = function(n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }, r.defaults = {}, r.withConverter = t, r
    }(function() {})
});
//# sourceMappingURL=/sm/b0ce608ffc029736e9ac80a8dd6a7db2da8e1d45d2dcfc92043deb2214aa30d8.map


function getPage() {
    if (location.href.indexOf('blog') >= 0) {
        var dataMediaTask = document.getElementById('pageConfig') ? document.getElementById('pageConfig').getAttribute('data-media-task') : 'converter'
        var dataMediaType = document.getElementById('pageConfig') ? document.getElementById('pageConfig').getAttribute('data-media-type') : 'video'
        if (dataMediaTask === 'compressor') {
            if (dataMediaType === 'video') {
                return 'compress_video_blog'
                // return 'compress_video'
            } else if (dataMediaType === 'image') {
                return 'compress_image_blog'
                // return 'compress_image'
            } else {
                return 'compress_audio_blog'
                // return 'compress_audio'
            }
        } else if (dataMediaTask === 'converter') {
            if (dataMediaType === 'video') {
                return 'convert_video_blog'
                // return 'convert_video'
            } else if (dataMediaType === 'image') {
                return 'convert_image_blog'
                // return 'convert_image'
            } else {
                return 'convert_audio_blog'
                // return 'convert_audio'
            }
        } else if (dataMediaTask === 'image_to_gif') {
            if (dataMediaType === 'video') {
                return 'video_to_gif_blog'
                // return 'video_to_gif'
            } else {
                return 'image_to_gif_blog'
                // return 'image_to_gif'
            }
        } else if (dataMediaTask === 'mute') {
            return 'mute_video_blog'
        } else if (dataMediaTask === 'trim') {
            return 'audio_cutter_blog'
        } else if (dataMediaTask === 'resize') {
            return 'resize_image_blog'
        } else {
            return 'convert_video_blog'
        }
    } else {
        if (location.pathname === '/' || location.href.indexOf('index.html') >= 0 || location.href.indexOf('home.html') >= 0 || location.href.indexOf('sq-index.html') >= 0) {
            return 'convert_home'
        } else if (location.href.indexOf('image-compressor.html') >= 0) {
            return 'compress_image'
        } else if (location.href.indexOf('image-converter.html') >= 0) {
            return 'convert_image'
        } else if (location.href.indexOf('audio-converter.html') >= 0) {
            return 'convert_audio'
        } else if (location.href.indexOf('video-converter.html') >= 0) {
            return 'convert_video'
        } else if (location.href.indexOf('converter.html') >= 0) {
            return 'convert_XXconverter'
        } else if (location.href.indexOf('convert/') >= 0) {
            return 'convert_XXtoXX'
        } else if (location.href.indexOf('video-compressor.html') >= 0) {
            return 'compress_video'
        } else if (location.href.indexOf('audio-compressor.html') >= 0) {
            return 'compress_audio'
        } else if (location.href.indexOf('audio-video-compressor.html') >= 0) {
            return 'compress_audio'
        } else if (location.href.indexOf('-compress') >= 0) {
            return 'compress_XX'
        } else if (location.href.indexOf('compress-') >= 0) {
            return 'compress_XX'
        } else if (location.href.indexOf('gif-maker.html') >= 0 || location.href.indexOf('gif-maker') >= 0) {
            return 'video_gif'
        } else if (location.href.indexOf('image-to-gif.html') >= 0 || location.href.indexOf('image-to-gif') >= 0) {
            return 'images_gif'
        } else if (location.href.indexOf('mute-video.html') >= 0 || location.href.indexOf('mute-video.html') >= 0) {
            return 'mute_video'
        } else if (location.href.indexOf('resize-image.html') >= 0 || location.href.indexOf('resize-image.html') >= 0 || location.href.indexOf('images-resize-test') >= 0) {
            return 'resize_image'
        } else if (location.href.indexOf('resize-video.html') >= 0) {
            return 'resize_video'
        } else if (location.href.indexOf('audio-cutter.html') >= 0 || location.href.indexOf('audio-trim-test.html') >= 0 || location.href.indexOf('audio-cutter.html') >= 0) {
            return 'audio_cutter'
        } else if (location.href.indexOf('change-video-speed.html') >= 0) {
            return 'video_speed'
        } else if (location.href.indexOf('loop-video.html') >= 0 || location.href.indexOf('loop-video.html') >= 0) {
            return 'loop_video'
        } else if (location.href.indexOf('adjust-video') >= 0 || location.href.indexOf('flip-mirror-video') >= 0 || location.href.indexOf('rotate-video') >= 0 || location.href.indexOf('crop-video') >= 0 || location.href.indexOf('video-trimmer') >= 0 || location.href.indexOf('video-editor') >= 0 || location.href.indexOf('sq-edit') >= 0) {
            return 'video_editor'
        } else if (location.href.indexOf('converted-files') >= 0) {
            return 'converted_files'
        } else if (location.href.indexOf('online-tools') >= 0) {
            return 'online_tools'
        } else if (location.href.indexOf('audio-joiner.html') >= 0) {
            return 'join_audio'
        } else if (location.href.indexOf('reverse-video.html') >= 0) {
            return 'reverse_video'
        } else {
            return window.location.href.slice(window.location.href.lastIndexOf('/') + 1, window.location.href.lastIndexOf('.'))
        }
    }
}

function sendGtm(obj) {
    try {
        let event = ''
        if (getPage() === 'convert_home') {
            event = 'Recommend_Download_Right_Download'
        } else {
            event = 'Recommend_' + getPage().toLowerCase() + '_Right_Download'
        }
        dataLayer.push({
            'event': 'KO_' + event + '_5.0',
            'eventLable': obj.eventLabel,
            'eventAction': event,
            'mediaEvent': 'mediaEvent',
            'mediaCategory': event + '_4.0',
            'mediaAction': event,
            'mediaLabel': obj.eventLabel
        })
    } catch (e) {

    }
}

// 首页导航新版
$(function() {
    // var width = $('.new-header-model-one').width()
    // var top = $('.new-header-model-one').height()
    // var back = 1
    // // $(".new-header-model-more-box").css({'left': width + 'px'})
    // $(".new-header-model-more-box").css({'top': -top + 'px'})
    // // 点击一级导航按钮
    // $('.new-header-model-one .model-two-more').click(function(){
    //   back = 1
    //   var index = $(".new-header-model-one .model-two-more").index(this)
    //   var width = $('.new-header-model-one').width()
    //   $(".new-header-model-more-box").css({'top': '0px'})
    //   $(".new-header-model-one").animate({"left": -width + "px"}, "200", function () {
    //     $(".new-header-model-more-box").show()
    //     $(".new-header-model-one").hide()
    //     $(".new-heder-model-two").eq(index).show()
    //     // 显示二级导航
    //   })
    // })

    // 点击二级导航
    // $(".new-heder-model-two .model-two-more").click(function () {
    //   back = 2
    //   var index = $(".new-heder-model-two .model-two-more").index(this)
    //   var width = $('.new-heder-model-two').width()
    //   $(".new-heder-model-two").animate({"left": width + "px"}, "200", function () {
    //     $(".new-heder-model-two").hide()
    //     $(".new-heder-model-three").eq(index).show()
    //   })
    // })
    //
    // $(".new-header-model-more-box .herder").click(function () {
    //   if (back === 2) {
    //     back = 1
    //     $(".new-heder-model-two").animate({"left": "0px"}, "50", function () {
    //       $(".new-heder-model-two").show()
    //       $(".new-heder-model-three").hide()
    //     })
    //   } else {
    //     $(".new-header-model-one").animate({"left": "0px"}, "50", function () {
    //       back = 0
    //       $(".new-header-model-more-box").hide()
    //       $(".new-heder-model-two").hide()
    //       $(".new-heder-model-three").hide()
    //       $(".new-header-model-one").show()
    //     })
    //   }
    // })

    var pangLang = 'en'
    var pathname = window.location.pathname
    var glList = ['de', 'fr', 'es', 'jp', 'it', 'ko', 'br', 'zh'] // ['de','fr','es','br','it','nl','ar','ru','ee','cs','da','fi','sv','pl','ie','gr','hu','ms','no','tr','ro','se','th','vi','kp','jp','zh']

    for (var i = 0; i < glList.length; i++) {
        if ((glList[i] == window.location.href.replace(/.*\/(de|fr|es|jp|it|ko|br|zh)\/.*/gi, "$1") && pathname.substr(1, 3) !== 'vid')) {
            pangLang = glList[i]
            break
        }
    }

    // 搜索
    $(".new-sreach input").keyup(function(event) {
        if (event.keyCode == 13) {
            if (pangLang === 'en') {
                location.href = 'https://www.media.io/search.html?q=' + $(".new-sreach input").val()
            } else {
                location.href = 'https://www.media.io/' + pangLang + '/search.html?q=' + $(".new-sreach input").val()
            }
        }
    });
})

// 旧版右侧下载按钮
// $('.sys-win a.btn-secondary').click(function(){
//   Cookies.set('sourcePathDownload', location.href, { expires: 60 * 60 * 24 * 90, path: '' })
//   sendGtm({'eventLabel': getPage() + '_win'})
// })
// $('.sys-mac a.btn-secondary').click(function(){
//   Cookies.set('sourcePathDownload', location.href, { expires: 60 * 60 * 24 * 90, path: '' })
//   sendGtm({'eventLabel': getPage() + '_mac'})
// })

//旧版购买埋点
$('.buy-now-month').click(function() {
    sendGtm({
        'eventLabel': getPage() + '_buy_now_month'
    })
    if (window.wcc_iframe_env === 'wcc_iframe') {
        window.wccRouteBlank('https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=294&sub_lid=0&currency=USD&language=English&verify=4c3bb50bf909cb7f333c54f832e8e754')
    } else {
        location.href = 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=294&sub_lid=0&currency=USD&language=English&verify=4c3bb50bf909cb7f333c54f832e8e754'
    }
})
$('.buy-now-yearly').click(function() {
    sendGtm({
        'eventLabel': getPage() + '_buy_now_yearly'
    })
    if (window.wcc_iframe_env === 'wcc_iframe') {
        window.wccRouteBlank('https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=297&sub_lid=0&currency=USD&language=English&verify=8794fcdb210d1a58d3f90b1dede2733c')
    } else {
        location.href = 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=5903&license_id=297&sub_lid=0&currency=USD&language=English&verify=8794fcdb210d1a58d3f90b1dede2733c'
    }
})

// win切换mac 去掉
// $(".sys-win .with-hand span").click(function(){
//    sendGtm({'event': 'Click_Switch' , 'type': '101', 'value': {page: 'Recommend_' + getPage(), val: {'mode': getPage() + '-SwitchtoMac'}}})
// })
// $(".sys-mac .with-hand span").click(function(){
//   sendGtm({'event': 'Click_Switch' , 'type': '101', 'value': {page: 'Recommend_' + getPage(), val: {'mode': getPage() + '-SwitchtoWin'}}})
// })


// $('.if_btnWin a').click(function(){
//   Cookies.set('sourcePathDownload', location.href, { expires: 60 * 60 * 24 * 90, path: '' })
//   sendGtm({'eventLabel': getPage() + '_win'})
// })
// $('.if_btnMac a').click(function(){
//   Cookies.set('sourcePathDownload', location.href, { expires: 60 * 60 * 24 * 90, path: '' })
//   sendGtm({'eventLabel': getPage() + '_win'})
// })
//
// $("a.sys-win.text-primary").click(function(){
//   Cookies.set('sourcePathDownload', location.href, { expires: 60 * 60 * 24 * 90, path: '' })
//   sendGtm({'event': event, 'category': event, 'action': event, 'eventLabel': getPage() + '_win'})
// })
// $("a.sys-mac.text-primary").click(function(){
//   Cookies.set('sourcePathDownload', location.href, { expires: 60 * 60 * 24 * 90, path: '' })
//   sendGtm({'event': event , 'category': event, 'action': event, 'eventLabel': getPage() + '_win'})
// })


// 旧版购买埋点
// $(".month").click(function () {
//   var count = Cookies.get('1Month') ? Cookies.get('1Month') : 0
//   count = parseInt(count) + 1
//   Cookies.set('1Month', count, { expires: 100000, path: '' })
//   sendGtmP({'event': 'Online_Buy_1Month', 'category': 'Online_Buy_G', 'action': 'Online_Buy_1Month', 'eventLabel': count})
// })
//
// $(".year").click(function () {
//   var count = Cookies.get('1Year') ? Cookies.get('1Year') : 0
//   count = parseInt(count) + 1
//   Cookies.set('1Year', count, { expires: 100000, path: '' })
//   sendGtmP({'event': 'Online_Buy_1Year', 'category': 'Online_Buy_G', 'action': 'Online_Buy_1Year', 'eventLabel': count})
// })

// 价格测试
let priceTest = {
    pricing: {
        win: [{
            'pric': '$45.95',
            'url': 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=4295&license_id=298&sub_lid=0&coupon_id=6786&currency=USD&language=English&verify=c96eaa692ef291170c74d1ac43372de6'
        }],
        mac: [{
            'pric': '$45.95',
            'url': 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=4296&license_id=298&sub_lid=0&coupon_id=6786&currency=USD&language=English&verify=a3245e2739405ada63e6a8d7bf1f3344'
        }]
    },
    buy: {
        win: [{
                'pric': 29.95,
                'url': 'https://store.wondershare.com/index.php?submod=checkout&method=sku_combine&is_combine=1&sku_id=102000000175&coupon_id=7131&currency=USD&language=English&verify=682C6FCA5FA7EECA4191BE82797A14C2'
            },
            {
                'pric': 45.95,
                'url': 'https://store.wondershare.com/index.php?submod=checkout&method=sku_combine&is_combine=1&sku_id=102000000120&coupon_id=7134&currency=USD&language=English&verify=C186AF690C8189684E59B8ED8258F389'
            }
        ],
        mac: [{
                'pric': 29.95,
                'url': 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=4296&license_id=297&sub_lid=0&coupon_id=6788&currency=USD&language=English&verify=666b7fa59d692a1f1adea769b4b88008'
            },
            {
                'pric': 45.95,
                'url': 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=4296&license_id=298&sub_lid=0&coupon_id=6786&currency=USD&language=English&verify=a3245e2739405ada63e6a8d7bf1f3344'
            }
        ]
    },
    uninstall: {
        win: [{
            'pric': 29.97,
            'url': 'https://store.wondershare.com/index.php?submod=checkout&method=sku_combine&is_combine=1&sku_id=102000000120&coupon_id=7138&currency=USD&language=English&verify=634629AE965EC26B65C9DAD5A2B5FF72'
        }],
        mac: [{
            'pric': 29.97,
            'url': 'https://store.wondershare.com/index.php?submod=checkout&method=index&pid=4296&license_id=298&sub_lid=0&coupon_id=6787&currency=USD&language=English&verify=39cc80447762ffa84e57cf1bece4860f'
        }]
    },
    install: {
        win: [{
                'pric': 29.95,
                'url': 'https://store.wondershare.com/index.php?submod=checkout&method=sku_combine&is_combine=1&sku_id=102000000175&coupon_id=7131&currency=USD&language=English&verify=682C6FCA5FA7EECA4191BE82797A14C2'
            },
            {
                'pric': 45.95,
                'url': 'https://store.wondershare.com/index.php?submod=checkout&method=sku_combine&is_combine=1&sku_id=102000000120&coupon_id=7134&currency=USD&language=English&verify=C186AF690C8189684E59B8ED8258F389'
            }
        ],
        mac: [{
            'pric': 45.95,
            'url': 'https://store.wondershare.com/index.php?submod=checkout&method=sku_combine&is_combine=1&sku_id=102000000120&coupon_id=7134&currency=USD&language=English&verify=C186AF690C8189684E59B8ED8258F389'
        }]
    }
}
let pathname = window.location.pathname
let countriesLang = 'en'
let langArr = ['de', 'fr', 'es', 'br', 'it', 'nl', 'ar', 'ru', 'ee', 'cs', 'da', 'fi', 'sv', 'pl', 'ie', 'gr', 'hu', 'ms', 'no', 'tr', 'ro', 'se', 'vi', 'kp', 'jp', 'zh']
for (let i = 0; i < langArr.length; i++) {
    if ((langArr[i] == pathname.substr(1, 2) && pathname.substr(1, 3) !== 'vid')) {
        countriesLang = langArr[i]
        break
    }
}
if (countriesLang === 'en') {
    $(function() {
        let countries = 'US'
        $.get({
            url: 'https://account.media.io/v1/code',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
        }, function(res) {
            if (res.code === 0) {
                countries = res.data.code.iso_code
                window.wondershare_countries = countries
                window.postMessage({
                    iso_code: countries,
                    action: 'iso_code'
                }, '*')
            }
            // countries = 'IN'
            let page = ''
            if (location.href.indexOf('store') >= 0 || location.href.indexOf('pricing') >= 0) {
                page = priceTest.pricing
            } else if (location.href.indexOf('/buy/video-converter-ultimate-desktop.html') >= 0) {
                page = priceTest.buy.win
            } else if (location.href.indexOf('/buy/mac-video-converter-ultimate-desktop.html') >= 0) {
                page = priceTest.buy.mac
            } else if (location.href.indexOf('/survey/uninstall-video-converter-ultimate-mac-desktop.html') >= 0) {
                page = priceTest.uninstall.mac
            } else if (location.href.indexOf('/survey/uninstall-video-converter-ultimate-desktop.html') >= 0) {
                page = priceTest.uninstall.win
            } else if (location.href.indexOf('thankyou/install-video-converter-ultimate-desktop.html') >= 0) {
                page = priceTest.install.win
            }
            console.log(countries, 1)
            if (countries === 'IN' || countries === 'ID' || countries === 'PH' || countries === 'MY' || countries === 'PK' || countries === 'VN' || countries === 'EG' || countries === 'TH' || countries === 'NG' || countries === 'CZ' || countries === 'LK' || countries === 'KE' || countries === 'NP' || countries === 'GH' || countries === 'DZ' || countries === 'SI') {
                if (location.href.indexOf('store') >= 0 || location.href.indexOf('pricing') >= 0) {
                    let price = page.win[0].pric
                    let winUrl = page.win[0].url
                    let macUrl = page.mac[0].url
                    $('.lifeTimePrice').html(price)
                    $('.buy-now-win').attr('href', winUrl)
                    $('.buy-now-mac').attr('href', macUrl)
                } else if (location.href.indexOf('/buy/video-converter-ultimate-desktop.html') >= 0 || location.href.indexOf('/buy/mac-video-converter-ultimate-desktop.html') >= 0) {
                    $(".plan1pc").html('$' + page[0].pric)
                    $(".desktop.plan1pccart").attr('href', page[0].url)
                    $(".desktop.plan1pcpaypal").attr('href', page[0].url + '&amp;flush=paypal')
                    $(".license").html('$' + page[1].pric)
                    $(".desktop.planlicense").attr('href', page[1].url)
                    $(".desktop.planlicensepaypal").attr('href', page[1].url + '&amp;flush=paypal')
                } else if (location.href.indexOf('/survey/uninstall-video-converter-ultimate-mac-desktop.html') >= 0 || location.href.indexOf('/survey/uninstall-video-converter-ultimate-desktop.html') >= 0) {
                    var jagewin = page[0].pric.toString().split('.')
                    $('.price span').html(jagewin[0])
                    $('.price small').html('.' + jagewin[1])
                    $('.desktop').attr('href', page[0].url)
                } else if (location.href.indexOf('thankyou/install-video-converter-ultimate-desktop.html') >= 0) {
                    let price1year = $('#price1year')
                    let price1yearBtn = $('.oneYear')
                    let priceLifetime = $('#priceLifetime')
                    let priceLifetimeBtn = $('.Lifetime')
                    price1year.html(`$${page[0].pric.toString()}`)
                    price1yearBtn.attr('href', page[0].url)
                    priceLifetime.html(`$${page[1].pric.toString()}`)
                    priceLifetimeBtn.attr('href', page[1].url)
                }
            }
        })
    })
}


$(".desktop").click(function(e) {
    var href = $(this).attr('href')
    var sourcePathOnline = Cookies.get('sourcePathDownload') ? Cookies.get('sourcePathDownload') : Cookies.get('sourcePath')
    if (href.indexOf('&') >= 0) {
        href = href + '&sourcePath=' + sourcePathOnline
    } else {
        href = href + '?sourcePath=' + sourcePathOnline
    }
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        window.event.returnValue == false;
    }
    var count = Cookies.get('Desktop') ? Cookies.get('Desktop') : 0
    count = parseInt(count) + 1
    Cookies.set('Desktop', count, {
        expires: 100000,
        path: ''
    })
    sendGtmP({
        'event': 'Online_Buy_Online+Desktop',
        'Online_Buy_G': 'Online_Buy',
        'action': 'Online_Buy_Online+Desktop',
        'eventLabel': count
    })
    href += '&app_name=www_media_io'
    location.href = href
})

$(function() {
    if (Cookies) {
        if (location.href.indexOf('pricing.html') < 0 || location.href.indexOf(' /thankyou/') < 0 || location.href.indexOf('/buy/') < 0 || location.href.indexOf('/survey/') < 0)
            Cookies.set('sourcePath', location.href, {
                expires: 60 * 60 * 24 * 90,
                path: ''
            })
    }
})

function sendGtmP(obj) {
    try {
        dataLayer.push({
            'mediaEvent': 'mediaEvent',
            'event': 'KO_' + obj.category + '_5.0',
            'eventLable': obj.eventLabel,
            'eventAction': obj.action,
            'mediaCategory': obj.category + '_4.0',
            'mediaAction': obj.action,
            'mediaLabel': obj.eventLabel
        })
    } catch (e) {

    }
}