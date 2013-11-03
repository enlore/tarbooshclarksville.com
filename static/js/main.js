;( function ( $, window, undefined) {

    'use strict'

    var $event = $.event
        , $special
        , resizeTimeout

    $special = $event.special.debouncedresize = {
        setup: function () {
            $(this).on('resize', $special.handler)
        },
        teardown: function () {
            $(this).off('resize', $special.handler)
        },
        handler: function (event, exexAsap) {
            var context = this
                , args = arguments
                , dispatch = function () {
                    event.type = 'debouncedresize'
                    $event.dispatch.apply(context, args)
                }

            if (resizeTimeout) {
                clearTimeout(resizeTimeout)
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout (dispatch, $special.threshold)
        },
        threshold: 20
    }

    // global
    var $window = $(window)
        , $document = $(document)
        , Modernizr = window.Modernizr

    $.SlitSlider = function (options, element) {
        this.$elWrapper = $(element)
        this._init(options)
    }

    $.SlitSlider.defaults = {
        speed: 800,
        optOpacity: false,
        translateFactor: 230,
        maxAngle: 25,
        maxScale: 2,
        autoplay: false,
        keyboard: true,
        interval: 4000,
        onBeforeChange: function (slide, idx) { return false },
        onAfterChange: function (slide, idx) { return false }
    }
})
