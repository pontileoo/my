let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bi-x')
  navlist.classList.toggle('open')
}

const sr = ScrollReveal ({
  distance: '65px' ,
  duration: 2600,
  delay: 150,
  reset: true
});

sr.reveal('.hero-text',{delay:50, origin:'top'})
sr.reveal('.hero-img',{delay:50, origin:'left'})
sr.reveal('.icons',{delay:50, origin:'left'})
sr.reveal('.scroll-down',{delay:50, origin:'bottom'})