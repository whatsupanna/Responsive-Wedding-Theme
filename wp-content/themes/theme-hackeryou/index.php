<?php //index.php is the last resort template, if no other templates match ?>
<?php get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
    		<h2 class="aboutTag">Blog</h2>
    		 <div class="headerLine">
    			 <p class="heartBox">
    			        <span class="linePink line1"></span>
    			        <i class="fa fa-heart aboutHeart"></i>
    			        <span class="linePink line2"></span>
    			 </p>
    		</div>
    	
    		<?php get_template_part( 'loop', 'index' );	?>



    		
    </div> <!--/.content -->





  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>