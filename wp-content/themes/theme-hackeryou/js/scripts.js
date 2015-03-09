$(function(){

  $('.heroImages').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }).slick('slickPlay');


// var hamburger = function() {
// 	console.log('hello');
// 	$('.hamMenu').on('click',function(e){
// 		e.preventDefault();
// 		console.log('work!');

// 	});

// }

$( ".hamMenu" ).on( "click", function(e) {
  var tc = this.navOpen || undefined;
  console.log("WHAT");
  e.preventDefault();
  $('nav').toggleClass( tc );
});


  // var hamburger = function() {
  // 	$('.hamMenu').on('click',function(e) {
  // 		e.preventDefault();
  // 		// $('.nav').toggleClass('navOpen');
  // 		console.log('hello');
  // 		});
  //  };


  $('#clock').countdown('2015/07/17', function(event) {
     var $this = $(this).html(event.strftime(''
       + '<div class="clockDetails"> <span class="detailNumber">%-m</span><span class="detailLabel"> months</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-d</span><span class="detailLabel"> days</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-H</span><span class="detailLabel"> hours</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-M</span><span class="detailLabel"> minutes</span></div>'
       + '<div class="clockDetails"> <span class="detailNumber">%-S</span><span class="detailLabel"> seconds</span></div>'));
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


  	$('.animate').each(function() {
  		// cache the current box
  		var $el = $(this);
	  	if(isScrolledIntoView($el)) {
	  		$el.addClass('visible');
	  	}

  	});




  });

  // function initialize() {
  			  
  // 			  // Create an array of styles.
  // 			  var styles = [
  // 			    {
  // 			      featureType: "road.highway",
  // 			      elementType: "geometry.fill",
  // 			      stylers: [
  // 			        { color: "#ccc" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.highway",
  // 			      elementType: "geometry.stroke",
  // 			      stylers: [
  // 			        { color: "#ccc" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.arterial",
  // 			      elementType: "geometry.fill",
  // 			      stylers: [
  // 			        { color: "#ccc" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.arterial",
  // 			      elementType: "geometry.stroke",
  // 			      stylers: [
  // 			        { color: "#C4274D" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.local",
  // 			      elementType: "geometry.stroke",
  // 			      stylers: [
  // 			        { color: "#D6516D" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.local",
  // 			      elementType: "geometry.fill",
  // 			      stylers: [
  // 			        { color: "#F4FBFF" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.local",
  // 			      elementType: "labels.text.fill",
  // 			      stylers: [
  // 			        { color: "#C4274D" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "road.local",
  // 			      elementType: "labels.text.stroke",
  // 			      stylers: [
  // 			        { color: "#F4FBFF" }
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "landscape.natural",
  // 			      elementType: "geometry",
  // 			      stylers: [
  // 			      	{ color: "#EEEEEE"}
  // 			      ]
  // 			    },
  // 			    {
  // 			      featureType: "poi",
  // 			      elementType: "geometry",
  // 			      stylers: [
  // 			      	{ color: "#D4D4D2"}
  // 			      ]
  // 			    }
  // 			  ];
  // 			  var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

  // 			  var mapCanvas = document.getElementById('map-canvas');
  // 			  var mapOptions = {
  // 			    center: new google.maps.LatLng(40.711720, -74.000889),
  // 			    zoom: 17,
  // 			    mapTypeId: google.maps.MapTypeId.ROADMAP
  // 			  }
  // 			  var map = new google.maps.Map(mapCanvas, mapOptions)

  // 			  var marker = new google.maps.Marker({
  // 			     position: map.getCenter(),
  // 			     draggable: true,
  // 			     map: map
  // 			   });

  


  // 			  // attach the styles to the map
  // 			  map.mapTypes.set('map_style', styledMap);
  // 			  map.setMapTypeId('map_style');


  // 			}
  // 			google.maps.event.addDomListener(window, 'load', initialize);
  	





});
