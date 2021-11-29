function showMenuAndColorToggles(navId, toggleId){
  const nav = document.getElementById(navId)
  const navToggle = document.getElementById(toggleId)
  

  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      changeColorTogglesAndLogo()
    })
  }
}

showMenuAndColorToggles('nav-menu', 'menu-toggle')



function changeColorTogglesAndLogo(){
  const toggles = document.querySelectorAll('.mobile__menu__icon')
  const logo = document.querySelector('.logo')

  toggles.forEach(icon => {
    icon.classList.toggle('color-toggle')
    logo.classList.toggle('color-logo')
  })
}



function linkHideMenu(navLinks, navId){
  const links = document.querySelectorAll(navLinks)
  const nav = document.getElementById(navId)

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      changeColorTogglesAndLogo()
    })
  })
}

linkHideMenu('.nav__links', 'nav-menu')