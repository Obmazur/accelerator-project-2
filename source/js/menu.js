const navMainElement = document.querySelector('.header__nav');
const navToggleElement = document.querySelector('.js-toggle-button');
const pageElement = document.querySelector('.page__body');
const menuElement = document.querySelector('.header__list');

const toggleMenu = (button) => {
  button.classList.toggle('header__nav--is-closed');
  button.classList.toggle('header__nav--is-open');
  pageElement.classList.toggle('page__body--menu-is-open');
};

const initToggle = () => {
  navToggleElement.addEventListener('click', () => {
    toggleMenu(navMainElement);
  });

  menuElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.header__link') && window.innerWidth < 1440) {
      toggleMenu(navMainElement);
    }
  });
};

export {initToggle};
