var viewportHeight = $(window).height(); // == 100vh


$(document).ready(function() {
  $('nav').hide();
  $('.wrapper').scroll(function() {
    if ($(this).scrollTop() > viewportHeight)
      $('nav').fadeIn('easing');
    else
      $('nav').fadeOut('easing');
  });
});
//a) initialize paroller.js
$('#firstTransition').paroller();

//b) initialize paroller.js and set attributes
$("#transitionArticle").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.3, type: 'foreground', direction: 'horizontal' });
