$(function(){
  $('.heroImages').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }).slick('slickPlay');

  $('#clock').countdown('2015/04/23', function(event) {
     var $this = $(this).html(event.strftime(''
       + '<div class="clockDetails"> <span class="detailNumber">%-m</span><span class="detailLabel"> months</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-d</span><span class="detailLabel"> days</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-H</span><span class="detailLabel"> hr</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-M</span><span class="detailLabel"> min</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-S</span><span class="detailLabel"> sec</span></div>'));
   });


   window.isScrolledIntoView = function($elem) {
      var $window = $(window);

      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).on('scroll',function() {


  	$('.box').each(function() {
  		// cache the current box
  		var $el = $(this);
	  	if(isScrolledIntoView($el)) {
	  		$el.addClass('visible').fadeIn(200);
	  	}
  	});



  });











});