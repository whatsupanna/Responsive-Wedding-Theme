$(function(){
  $('.heroImages').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }).slick('slickPlay');

  $('#clock').countdown("2015/04/23", function(event) {
  var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  $(this).html(event.strftime( '%-m months %-w weeks %-D days %-M min %S sec'));
 });

});