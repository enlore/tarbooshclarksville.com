$(function () {
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
    var mapOptions = {
        center      : new google.maps.LatLng(36.5274667, -87.3596),
        // 36.5274667, 87.3596
        zoom        : 8,
        mapTypeId   : google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize)
