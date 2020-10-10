const navBtn = document.getElementById('nav-btn');
const navList = document.getElementById('nav-list');
const closeBtn = document.getElementById('close-btn');

// Show navigation box
function openNav() {
  navList.classList.remove('hide');
  closeBtn.classList.remove('hide');
  navBtn.classList.add('hide');
}

// Hide navigation box
function closeNav() {
  navList.classList.add('hide');
  closeBtn.classList.add('hide');
  navBtn.classList.remove('hide');
}

navBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);