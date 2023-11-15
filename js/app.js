const menu = document.querySelector('#mobile-menu')
const navbarMenu = document.querySelector('.navbar-menu')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active')
  navbarMenu.classList.toggle('active')
  body.classList.toggle('active')
})
