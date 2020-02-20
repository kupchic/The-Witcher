new WOW().init();
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    
    loop: true,
    navigation: {
      nextEl: '.arrow_next',
      prevEl: '.arrow_prev',
    },
    
    slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      // nextEl: '.arrow_next',
      prevEl: '.arrow_prev',
    }}
  
  });
  const element =  document.querySelector('.header')
  let active = document.querySelector('.logo_active');
  let menu = document.querySelector('.header');
  let menuButton = document.querySelector('.menu_button');
  menuButton.addEventListener('click', function(){
    menu.classList.toggle('header_active');
    menuButton.classList.toggle('menu_button_active')
    // document.querySelector('.logo_active').hidden = true;
    active.classList.toggle('logo_non');
    element.classList.add('animated')
    
  });
