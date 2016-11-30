$(function () {
  $('.fluidbox-trigger').fluidbox();
})

window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal', {
  distance: '0',
  duration: 500,
  easing: 'ease-in-out',
  origin: 'top',
  scale: 1,
  reset: false
});
