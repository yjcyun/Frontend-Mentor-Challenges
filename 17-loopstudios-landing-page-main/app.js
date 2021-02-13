// section-hero ==================================================
const sectionHero = document.getElementById('section-hero');
const menuButton = document.getElementById('section-hero__menu-button');
const navList = document.getElementById('section-hero__navlist');

menuButton.addEventListener('click', () => {
  sectionHero.classList.toggle('section-hero__nav-mobile');
  navList.classList.toggle('section-hero__navlist')
})