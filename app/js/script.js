
      $(document).ready(function() {

        var $window = $(window);

        $('section[data-type="background"]').each(function() {
          var $bgobj = $(this); // assigning the object
          $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';
            // Move the background
            $bgobj.css({
              backgroundPosition: coords
            });
          });
        });
      });

      //script to make the menu appear after scrolling past home

      var viewportHeight = $(window).height(); // == 100vh
      (function($) {
        $(document).ready(function() {
          $(window).scroll(function() {
            if ($(this).scrollTop() > viewportHeight) {
              $('#navbar').fadeIn(200);
            } else {
              $('#navbar').fadeOut(200);
            }
          });
        });
      })(jQuery);
