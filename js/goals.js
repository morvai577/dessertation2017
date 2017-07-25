// Global Variables
var driving = false;
var sideBarOpen = false;

function openSlideMenu() {
  sideBarOpen = true;
  document.getElementById('side-menu').style.width = '250px';
  document.querySelector('.goals-background').classList.add("overlay");
  $('.goals-background').click(closeSlideMenu);
}

function closeSlideMenu() {
  sideBarOpen = false;
  document.getElementById('side-menu').style.width = '0';
  document.querySelector('.goals-background ').classList.remove("overlay");
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
