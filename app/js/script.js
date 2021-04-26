var viewportHeight = $(window).height(); // == 100vh


$( document ).ready(function() {
  $('nav').hide();
  $('.wrapper').scroll(function(){
  if($(this).scrollTop() > viewportHeight)
    $('nav').fadeIn('easing');
  else
    $('nav').fadeOut('easing');
  });
});
