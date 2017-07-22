// Global Variables
var driving = false;
var sideBarOpen = false;

function openSlideMenu() {
  sideBarOpen = true;
  document.getElementById('side-menu').style.width = '250px';
  document.querySelector('.start').classList.add("overlay");
  $('.start').click(closeSlideMenu);
}

function closeSlideMenu() {
  sideBarOpen = false;
  document.getElementById('side-menu').style.width = '0';
  document.querySelector('.start').classList.remove("overlay");
}

function startJourney() {
  if (sideBarOpen === false) {
    if (driving === false) {
      document.querySelector('.fa, .fa-car').style.color = '#b00';
      driving = true;
    }
    else {
      document.querySelector('.fa, .fa-car').style.color = '#008900';
      driving = false;
    }
  }
}
