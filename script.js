const sr = ScrollReveal ({
  distance: '65px' ,
  duration: 2600,
  delay: 150,
  reset: true
});

sr.reveal('.container, ul, a',{delay:50, origin:'top'})
sr.reveal('.bottom',{delay:50, origin:'bottom'})
sr.reveal('.icons',{delay:50, origin:'left'})