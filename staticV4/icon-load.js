var wscConf = {}
var httpOrgin = location.protocol
wscConf.path_base = httpOrgin + '//www.media.io/wsc-18/assets/';
var wsc = {}
wsc.common = {}
wsc.store = {
    path: {
        base: wscConf.path_base
    },
    state: {
        init: false,
        wait: 0,
        ready: true,
        icon: [],
        id: []
    },
    setting: {
        detect: ['win', 'mac', 'ios', 'android'],
        load: ['plugin', 'vendor']
    },
}
// path
wsc.store.path.icon = wsc.store.path.base + 'icon/'
wsc.common.client = {
    width: function() {
        return document.documentElement.clientWidth
    },
    height: function() {
        return document.documentElement.clientHeight
    },
    agent: navigator.userAgent.toLowerCase(),
    // stackoverflow.com/questions/19877924/
    platform: navigator.platform.match(/mac/i) ? 'mac' : (navigator.platform.match(/win/i) ? 'win' : (navigator.platform.match(/ip/i) ? 'ios' : (navigator.platform.match(/android/i) || navigator.platform.match(/linux/i) ? 'android' : 'other'))),
    // stackoverflow.com/questions/9847580/
    browser: navigator.userAgent.match(/edge/i) ? 'edge' : (navigator.userAgent.match(/firefox/i) ? 'firefox' : (navigator.userAgent.match(/chrome/i) ? 'chrome' : (navigator.userAgent.match(/safari/i) ? 'safari' : (navigator.userAgent.match(/trident/i) ? 'ie' : 'other'))))
}



wsc.is = {
    init: function() {
        return wsc.store.state.init
    },
    ready: function() {
        return wsc.store.state.ready
    },
    mac: wsc.common.client.platform === 'mac',
    win: wsc.common.client.platform === 'win',
    ios: wsc.common.client.platform === 'ios',
    android: wsc.common.client.platform === 'android',
    desktop: !!(wsc.common.client.platform === 'mac' || wsc.common.client.platform === 'win'),
    mobile: !!(wsc.common.client.platform === 'ios' || wsc.common.client.platform === 'android'),
    chrome: wsc.common.client.browser === 'chrome',
    firefox: wsc.common.client.browser === 'firefox',
    safari: wsc.common.client.browser === 'safari',
    ie: wsc.common.client.browser === 'ie',
    edge: wsc.common.client.browser === 'edge'
}



wsc.common.icon = {
    check: function(icon) {
        return wsc.store.state.icon.indexOf(icon) > -1
    },
    init: function(force) {
        $('.wsc-icon').filter('[data-icon]').each(function(index, el) {
            var c = $(this).attr('data-icon')
            c = wsc.common.icon.fixOld(c, null, true)
            if (!wsc.common.icon.check(c)) wsc.store.state.icon.push(c)
        })
        for (var i = 0; i < wsc.store.state.icon.length; i++) {
            var ic = wsc.store.state.icon[i]
            wsc.common.icon.load(ic)
        }
    },
    load: function(icon, path, img) {
        var df = '.svg'
        var di = 'symbol/close'
        var dd = icon.indexOf('-') || ''
        var dt = icon.substr(0, dd) || ''
        var dn = icon.substr(dd + 1) || ''
        var dp = wsc.store.path.icon + dt + '/' + dn + df
        // stackoverflow.com/questions/8866448/
        $.get(dp, function(res) {
            $('body').trigger('wsc.event.icon.load', icon)
            wsc.common.icon.show(icon, res)
        }, 'text')
    },
    show: function(icon, svg, path) {
        var id = '.wsc-icon[data-icon="' + icon + '"]'
        if (path) {
            id = '.wsc-icon[data-path="' + path + '"]'
        } else {
            // fix old version
            id = wsc.common.icon.fixOld(icon, id)
            // end of fix
        }
        $(id).empty().removeClass('wsc-icon-loading').addClass('wsc-icon-loaded').append(svg)
        // www.w3.org/TR/CSS2/visudet.html#inline-replaced-width
        if (wsc.is.ie) {
            $(id).filter('.wsc-icon-loaded').children('svg').css('width', function() {
                var vb = $(this).attr('viewBox').split(' ') || [0, 0, 1, 1]
                return ($(this).height() || $(this).parent().height()) * (vb[2] - vb[0]) / (vb[3] - vb[1]) || 'auto'
            })
        }
    },
    replace: function(el, icon, noInit) {
        var io = el.attr('data-icon')
        el.removeClass('wsc-icon-loaded wsc-icon-default')
        if ($('.wsc-icon[data-icon="' + io + '"].wsc-icon-loaded').length === 0) wsc.store.state.icon.splice(wsc.store.state.icon.indexOf(io), 1)
        el.attr('data-icon', icon)
        if (!noInit) wsc.common.icon.init()
    },
    fixOld: function(iNew, iOld, input) {
        if (input) {
            if (iNew.indexOf('3p') === 0) {
                iNew = iNew.replace('3p-', 'brand-')
            } else if (iNew.indexOf('brand-') !== 0 && iNew.indexOf('logo-') !== 0 && iNew.indexOf('flag-') !== 0 && iNew.indexOf('symbol-') !== 0 && iNew.indexOf('extra-') !== 0) {
                iNew = 'symbol-' + iNew
            }
            return iNew
        } else {
            if (iNew.indexOf('brand-') === 0) {
                iOld = iOld + ', .wsc-icon[data-icon="' + iNew.replace('brand-', '3p-') + '"]'
            } else if (iNew.indexOf('symbol-' === 0)) {
                iOld = iOld + ', .wsc-icon[data-icon="' + iNew.replace('symbol-', '') + '"]'
            }
            return iOld
        }
    }
}

// initialize
wsc.common.init = function() {
    wsc.store.state.init = true
}

/** iefix **/
if (wsc.is.ie) {
    $('body').addClass('iefix')
    $.getScript(wsc.store.path.vendor + 'css-vars-ponyfill.min.js', function() {})
}

$(function() {
    if ($('[data-dev="auto"]').length > 0 || $('[data-sys="auto"]').length > 0) {
        $('[data-dev="auto"]').attr('data-dev', wsc.is.mobile ? 'mobile' : 'desktop')
        $('[data-sys="auto"] [data-platform="' + wsc.common.client.platform + '"]').addClass('active').prop('checked', true)
        $('[data-sys="auto"]').attr('data-sys', wsc.common.client.platform)
    }

    // manual switch platform
    $('body').on('click', '[data-toggle="platform"]', function() {
        var p = $(this).data('platform')
        if (wsc.store.setting.detect.indexOf(p) > -1) {
            $('[data-sys]').attr('data-sys', p)
            $('[data-sys]').attr('data-dev', p === 'ios' || p === 'android' ? 'mobile' : 'desktop')
            $('[data-toggle="platform"]').removeClass('active').prop('checked', false)
            $('[data-toggle="platform"][data-platform="' + p + '"]').addClass('active').prop('checked', true)
        }
    })
    $('.wsc-footer-year span').html(new Date().getFullYear())
    wsc.common.icon.init()
})