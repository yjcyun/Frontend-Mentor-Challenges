const menuList = document.getElementById('menu-list');
const openMenu = document.getElementById('menu-btn');
const closeMenu = document.getElementById('menu-close');

// Navigation toggle
openMenu.addEventListener('click', () => {
  menuList.classList.add('show');
  closeMenu.classList.add('show');
  openMenu.classList.add('hide');
});

closeMenu.addEventListener('click', () => {
  menuList.classList.remove('show');
  closeMenu.classList.remove('show');
  openMenu.classList.remove('hide');
});