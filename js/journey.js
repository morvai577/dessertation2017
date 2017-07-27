$(document).ready(function() {
    var open = $('.open-nav'),
        overlay = $('.overlay'),
        close = $('.close');

    open.click(function() {
        overlay.show();
        $('#wrapper').addClass('toggled');
    });

    overlay.click(function() {
      overlay.hide();
      $('#wrapper').removeClass('toggled');
    })
});
