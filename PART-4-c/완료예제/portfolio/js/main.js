$(document).ready(function(){

    var mySwiper = new Swiper('.portfolio-slides', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,      
        slidesPerView: 4,
        spaceBetween:30,      
        // Navigation arrows
        navigation: {
          nextEl: '.portfolio-slide-wrap .next',
          prevEl: '.portfolio-slide-wrap .prev',
        },
        breakpoints: {      
          //320 이상에서는 1개    
          320: {
            slidesPerView: 1
          },
          //480 이상에서는 2개    
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },          
          //480 이상에서는 3개    
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
    });

    var menuToggleBtn = $('.menu-toggle-btn'),
        mainMenu = $('.main-menu');
    
    menuToggleBtn.click(function(){
      mainMenu.slideToggle();
    });

});
