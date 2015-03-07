<?php get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

        <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

          <h2 class="aboutTag"><?php the_title(); ?></h2>
           <div class="headerLine">
             <p class="heartBox">
                    <span class="linePink line1"></span>
                    <i class="fa fa-heart aboutHeart"></i>
                    <span class="linePink line2"></span>
             </p>
          </div>
          <div class="singleHeader">
            <p class="blogTag blogTag2"><i class="fa fa-calendar"></i><?php echo get_the_date(); ?></p>
            <p class="blogTag blogTag3"><i class="fa fa-folder"></i><?php the_category(); ?></p>
          </div>
        

          <div class="entry-content">
            <p class="singleText"><?php the_content(); ?></p>

            <?php wp_link_pages(array(
              'before' => '<div class="page-link"> Pages: ',
              'after' => '</div>'
            )); ?>
          </div><!-- .entry-content -->

         
        </div><!-- #post-## -->

        <div id="nav-below" class="navigation">

          <p class="nav-previous"><?php previous_post_link('%link', ' %title'); ?></p>
          
        </div><!-- #nav-below -->

        <?php comments_template( '', true ); ?>

      <?php endwhile; // end of the loop. ?>

    </div> <!-- /.content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>