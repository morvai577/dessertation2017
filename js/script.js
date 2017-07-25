// Global Variables
var driving = false;
var sideBarOpen = false;

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

function startJourney() {
  if (sideBarOpen === false) {
    if (driving === false) {
      document.querySelector('.start-button').style.color = '#b00';
      driving = true;
    }
    else {
      document.querySelector('.start-button').style.color = '#008900';
      driving = false;
    }
  }
}
