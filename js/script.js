function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.querySelector('.side-nav').style.border = '1px solid black';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.querySelector('.side-nav').style.border = 'none';
}
