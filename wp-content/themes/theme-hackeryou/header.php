<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
   <link rel="stylesheet" href="<?php bloginfo( 'template_directory') ?>/animate.css">
  <link href='http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic|Open+Sans:400,800|Cookie' rel='stylesheet' type='text/css'>

  <?php // Load our CSS ?>
  <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
  <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory')?>/slick-1.4.1/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory')?>/slick-1.4.1/slick/slick-theme.css"/>
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<header>
  <!-- hero images -->
  <?php if(is_front_page()) { ?>
    <div class="heroImages">
      <img class="background-slideshow image5" src="<?= get_field('image_5')['url'];?>" alt="">
      <img class="background-slideshow image2" src="<?= get_field('image_2')['url'];?>" alt="">
      <img class="background-slideshow image3" src="<?= get_field('image_3')['url'];?>" alt="">
      <img class="background-slideshow image4" src="<?= get_field('image_4')['url'];?>" alt="">      
    </div>

    <div class="heroText">
      <h2 class="bigTag">Sarah & Jake</h2>
      <p class="secondTag">Are Getting Married</p>
      <p class="heartBox">
        <span class="line line1"></span>
        <i class="fa fa-heart"></i>
        <span class="line line2"></span>
      </p>
      <p class="dateTag">July 23rd 2015</p>
    </div>



    <div class="clockBox">
      <div id="clock"></div>
    </div>


<?php } ?> <!-- close is home if -->


    <div class="container headerBox clearfix">
    <div class="logoWrapper">
        <div class="logoHead">
            <h1>
              <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
                <?php bloginfo( 'name' ); ?>
              </a>
            </h1>
        </div>
      <!-- end of logoHead -->

      <div class="hamburger">
        <span class="hamMenu">☰</span>
      </div>

        <nav class='nav'>
          <?php wp_nav_menu( array(
            'container' => false,
            'container_id' => 'nav',
            'menu' => 'main'
          )); ?>
        </nav>
    </div>
    <!-- end of logoWrapper -->
  </div> <!-- /.container -->
</header><!--/.header-->

