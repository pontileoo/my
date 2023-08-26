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