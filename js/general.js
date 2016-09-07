/**
 * Created by braitsev on 27.04.2016.
 */
$(document).ready(function () {
    $('select').zselect();

    $('.navicon').bind('click', function () {
        $('body').toggleClass('open-nav');
    });
    $(document).click(function (event) {
        if ($(event.target).closest(".navicon").length) return;
        $('body').removeClass('open-nav');
        event.stopPropagation();
    });

});