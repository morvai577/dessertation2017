// Global Variables
var driving = false;


function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.querySelector('.side-nav').style.borderRight = '1px solid black';
  //document.querySelector('body').classList.add("dim");
  document.querySelector('body').style.backgroundColor = '#aaa';
  //document.querySelector('.navbar').classList.add("dim");
  document.querySelector('.navbar').style.backgroundColor = '#082b62'; // -4
  if (driving === true) {
    document.querySelector('.fa, .fa-car').style.color = '#700';
  }
  else {
    document.querySelector('.fa, .fa-car').style.color = '#004500';
  }
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.querySelector('.side-nav').style.border = 'none';
  //document.querySelector('.navbar').classList.remove("dim");
  document.querySelector('.navbar').style.backgroundColor = '#0D47A1';
  //document.querySelector('body').classList.remove("dim");
  document.querySelector('body').style.backgroundColor = '#fff';
  if (driving === true) {
    document.querySelector('.fa, .fa-car').style.color = '#b00';
  }
  else {
    document.querySelector('.fa, .fa-car').style.color = '#008900';
  }
}

function startJourney() {
  if (driving === false) {
    document.querySelector('.fa, .fa-car').style.color = '#b00';
    driving = true;
  }
  else {
    document.querySelector('.fa, .fa-car').style.color = '#008900';
    driving = false;
  }
}
