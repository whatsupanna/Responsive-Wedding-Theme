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

  function initialize() {


  			  
  			  // Create an array of styles.
  			  var styles = [
  			    {
  			      featureType: "road.highway",
  			      elementType: "geometry.fill",
  			      stylers: [
  			        { color: "#ccc" }
  			      ]
  			    },
  			    {
  			      featureType: "road.highway",
  			      elementType: "geometry.stroke",
  			      stylers: [
  			        { color: "#ccc" }
  			      ]
  			    },
  			    {
  			      featureType: "road.arterial",
  			      elementType: "geometry.fill",
  			      stylers: [
  			        { color: "#ccc" }
  			      ]
  			    },
  			    {
  			      featureType: "road.arterial",
  			      elementType: "geometry.stroke",
  			      stylers: [
  			        { color: "#C4274D" }
  			      ]
  			    },
  			    {
  			      featureType: "road.local",
  			      elementType: "geometry.stroke",
  			      stylers: [
  			        { color: "#D6516D" }
  			      ]
  			    },
  			    {
  			      featureType: "road.local",
  			      elementType: "geometry.fill",
  			      stylers: [
  			        { color: "#F4FBFF" }
  			      ]
  			    },
  			    {
  			      featureType: "road.local",
  			      elementType: "labels.text.fill",
  			      stylers: [
  			        { color: "#C4274D" }
  			      ]
  			    },
  			    {
  			      featureType: "road.local",
  			      elementType: "labels.text.stroke",
  			      stylers: [
  			        { color: "#F4FBFF" }
  			      ]
  			    },
  			    {
  			      featureType: "landscape.natural",
  			      elementType: "geometry",
  			      stylers: [
  			      	{ color: "#EEEEEE"}
  			      ]
  			    },
  			    {
  			      featureType: "poi",
  			      elementType: "geometry",
  			      stylers: [
  			      	{ color: "#D4D4D2"}
  			      ]
  			    }
  			  ];
  			  var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

  			  var mapCanvas = document.getElementById('map-canvas');
  			  var mapOptions = {
  			    center: new google.maps.LatLng(40.711720, -74.000889),
  			    zoom: 17,
  			    mapTypeId: google.maps.MapTypeId.ROADMAP
  			  }
  			  var map = new google.maps.Map(mapCanvas, mapOptions)

  			  var marker = new google.maps.Marker({
  			     position: map.getCenter(),
  			     draggable: true,
  			     map: map
  			   });

  


  			  // attach the styles to the map
  			  map.mapTypes.set('map_style', styledMap);
  			  map.setMapTypeId('map_style');


  			}
  			google.maps.event.addDomListener(window, 'load', initialize);
  	











});