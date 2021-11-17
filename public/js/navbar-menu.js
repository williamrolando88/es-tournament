const body = document.querySelector('body');
const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const popupMenu = document.querySelector('#popup-menu');
const menuWrapper = document.querySelector('#mobile-menu-wrapper');

const openMobileMenu = () => {
  popupMenu.classList.remove('hidden');
  body.classList.add('overflow-hidden');
};

const closeMobileMenu = () => {
  popupMenu.classList.add('hidden');
  body.classList.remove('overflow-hidden');
};

menuOpen.addEventListener('click', openMobileMenu);

menuClose.addEventListener('click', closeMobileMenu);

menuWrapper.addEventListener('click', closeMobileMenu);
