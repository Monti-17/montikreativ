var viewportHeight = $(window).height(); // == 100vh

$( document ).ready(function() {
  $('.wrapper').scroll(function(){
  if($(this).scrollTop() > viewportHeight)
    $('nav, svg').fadeIn('easing');
  else
    $('nav, svg').fadeOut('easing');
  });
});
