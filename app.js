const menuButton = document.querySelector('#menu-button')
const closeButton = document.querySelector('#close-button')

const menu = document.querySelector('#menu')

menuButton.addEventListener('click', function() {
  menu.className = 'menu-open'

  console.log('works')
})

closeButton.addEventListener('click', function() {
  menu.className = 'menu-close'

  console.log('works')
})