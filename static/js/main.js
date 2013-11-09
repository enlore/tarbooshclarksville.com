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
