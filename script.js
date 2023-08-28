const sr = ScrollReveal ({
  distance: '65px' ,
  duration: 2000,
  delay: 150,
  reset: true
});

sr.reveal('.container, ul, a',{delay:50, origin:'top'})
sr.reveal('.static-txt',{delay:50, origin:'top'})
sr.reveal('.bottom',{delay:50, origin:'bottom'})
sr.reveal('.instagram-icon',{delay:150, origin:'left'})
sr.reveal('.twitter-icon',{delay:350, origin:'left'})
sr.reveal('.tiktok-icon',{delay:550, origin:'left'})
sr.reveal('.facebook-icon',{delay:750, origin:'left'})

