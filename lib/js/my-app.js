// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

var mySwiper2 = myApp.swiper('.swiper-2', {
  pagination:'.swiper-2 .swiper-pagination',
  spaceBetween: 20,
  slidesPerView: 2
});
 