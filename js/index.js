   
   $(document).ready(function()
   {
      var $overlaymenu = $('#indexOverlayMenu1-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#indexOverlayMenu1').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      var $overlaymenu = $('#indexOverlayMenu2-overlay');
      $overlaymenu.overlay({'hideTransition':true});
      $('#indexOverlayMenu2').on('click', function(e)
      {
         $.overlay.show($overlaymenu);
         return false;
      });
      $('#indexLayer3').parallax();
   });
   
   $(document).ready(function(){
   	$('a[href^="#"]').on('click',function (e) {
   	    e.preventDefault();
   
   	    var target = this.hash,
   	    $target = $(target);
   
   	    $('html, body').stop().animate({
   	        'scrollTop': $target.offset().top
   	    }, 900, 'swing', function () {
   	        window.location.hash = target;
   	    });
   	});
   });
