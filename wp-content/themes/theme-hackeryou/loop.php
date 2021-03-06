<?php // If there are no posts to display, such as an empty archive page ?>

<?php if ( ! have_posts() ) : ?>

	<article id="post-0" class="post error404 not-found">
		<h1 class="entry-title">Not Found</h1>
		<section class="entry-content">
			<p>Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.</p>
			<?php get_search_form(); ?>
		</section><!-- .entry-content -->
	</article><!-- #post-0 -->

<?php endif; // end if there are no posts ?>

<?php // if there are posts, Start the Loop. ?>

<?php while ( have_posts() ) : the_post(); ?>

	
		
		<div class="blogHeader">
	        <p class="blogTag blogTag1">
	        <span class="dateTitle">July 7th 2014</span>
	        <a class="blogTitle" href="<?php the_permalink(); ?>"><?php echo get_the_title();?></a></p>
			<p class="blogTag blogTag2"><i class="fa fa-calendar"></i><?php echo get_the_date(); ?></p>
			<p class="blogTag blogTag3"><i class="fa fa-folder"></i><?php the_category(); ?></p>
		</div>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<h2 class="entry-title">
        <a href="<?php the_permalink(); ?>" title="Permalink to: <?php esc_attr(the_title_attribute()); ?>" rel="bookmark">
       
        </a>

      </h2>


			<section class="entry-content">
				<div class="blogContent">
				<div class="blogImage">
				<?php the_post_thumbnail('large'); ?>


				</div>
				<div class="blogExcerpt">
					<p class="blogExcerptText"><?php the_excerpt(); ?></p>
				</div>
					<?php wp_link_pages( array(
	          'before' => '<div class="page-link"> Pages:',
	          'after' => '</div>'
	        )); ?>
        	</div>
        	<!-- end of blogContent -->
			</section><!-- .entry-content -->

			<footer class="blogFooter">

			</footer>

		</article><!-- #post-## -->

		<?php comments_template( '', true ); ?>


<?php endwhile; // End the loop. Whew. ?>

<?php // Display navigation to next/previous pages when applicable ?>
<?php if (  $wp_query->max_num_pages > 1 ) : ?>
  <p class="alignleft"><?php next_posts_link('&laquo; Older Entries'); ?></p>
  <p class="alignright"><?php previous_posts_link('Newer Entries &raquo;'); ?></p>
<?php endif; ?>
