<?php 
/*
	Template Name: map
*/
 ?>

 <?php get_header();  ?>



<div class="mapContent">
	
	<!-- <h2>Below is a map</h2> -->

	<div id="map-canvas">
			<!-- insert snazzy map -->
	</div> <!-- end of .map -->


<form class="rsvp" action="">
	<h2 class="aboutTag">RSVP</h2>
	 <div class="headerLine">
		 <p class="heartBoxForm">
		        <span class="lineWhite line1"></span>
		        <i class="fa fa-heart aboutHeartForm"></i>
		        <span class="lineWhite line2"></span>
		 </p>
	</div>
	<div class="formBox">
		<label for="name" class="rsvpText">Name</label>
		<input name="name" class="rsvpText formName" type="text" placeholder="John Doe">
		
		<label for="email" class="rsvpText">Email</label>
		<input name="email" class="rsvpText formEmail" type="email" placeholder="name@domain.com" name="email">
		
		<div class="guestGroup">
			<label for="guests" class="guest">Guests</label>
			<select class="rsvpList guestList" name="guests">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
		</div>
		
		<div class="attendingGroup">
			<label for="attending" class="attending">I am attending...</label>
			<select class="rsvpList attendingList" name="attending">
				<option value="All Events">All Events</option>
				<option value="Wedding">Wedding</option>
				<option value="Reception">Reception</option>
				
			</select>
		</div>



		<input class="rsvpText" type="submit" value="I'm Attending">
	
	</div>
	<!-- end of form box -->






</form>


</div>















 <?php get_footer(); ?>