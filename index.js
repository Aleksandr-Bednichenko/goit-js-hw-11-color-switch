import './styles.css';
import menu from './menu.json';
import menuTemplate from './template/menu.hbs';

const checkBox = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body');

const menuData = {
    menu,
};

const menuHtml = menuTemplate(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', onClick);

function onClick() {
  body.classList.remove(Theme.LIGHT)
  body.classList.remove(Theme.DARK)
  if (checkBox.checked) {    
    body.classList.add(Theme.DARK)
    localStorage.setItem('themeBody','dark') 
  } else {    
    body.classList.add(Theme.LIGHT)
    localStorage.setItem('themeBody','light') 
  }
}
const localValue = localStorage.getItem('themeBody');

if (localValue === 'dark') {
  body.classList.remove(Theme.LIGHT)
  body.classList.add(Theme.DARK)
  checkBox.checked = true;
}
else {
  body.classList.remove(Theme.DARK)
  body.classList.add(Theme.LIGHT)
  checkBox.checked = false;
  }