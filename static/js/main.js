$(function () {
    // plugin init
    var Page = (function () {
        var $navArrows = $('#nav-arrows')
            , $nav = $('#nav-dots > button')
            , slitslider = $('#slider').slitslider( {
                onBeforeChange: function (slide, pos) {
                    $nav.removeClass('nav-dot-current')
                    $nav.eq(pos).addClass('nav-dot-current')
                }
            })

            , init = function () {
                initEvents()
            }

            , initEvents = function () {
                 $nav.each(function (i) {
                     $(this).on('click', function () {
                         var $dot = $(this)

                         if (!slitslider.isActive() ) {
                             $nav.removeClass('nav-dot-current')
                             $dot.addClass('nav-dot-current')
                         }

                        slitslider.jump(i + 1)
                        return false
                     })
                 })
            }

            return { init: init }
    })()

    Page.init()
});

function initialize() {
    // map
    var mapOptions = {
        center      : new google.maps.LatLng(36.5274667, -87.3596),
        zoom        : 14,
        mapTypeId   : google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions)

    // marker
    var marker_options = {
        position    : new google.maps.LatLng(36.5274667, -87.3596),
        title       : "Eat at Tarboosh!",
        map         : map
    }

    var marker = new google.maps.Marker(marker_options)
}
google.maps.event.addDomListener(window, 'load', initialize)
