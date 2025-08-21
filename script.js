'use strict'

const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.burger_menu_nav_wrapper');
const closeBtn = document.querySelector('.burger_nav_close_btn_wrapper');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  burger.classList.remove('open'); // прибираємо стан бургеру
  menu.classList.remove('active'); // ховаємо меню
});

