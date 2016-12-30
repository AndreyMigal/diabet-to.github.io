$(function () {
  $('.fluidbox-trigger').fluidbox();

  var experience = (new Date().valueOf() - new Date(2006, 2, 1).valueOf()) / 1000 / 60 / 60 / 24 / 365;
  $('#_experience').text(~~experience);
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
