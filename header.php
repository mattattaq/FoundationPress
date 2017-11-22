<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">
		<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
		<?php wp_head(); ?>
		
	</head>
	<body <?php body_class(); ?>>
	<script id="__bs_script__">//<![CDATA[
	document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\/script>".replace("HOST", location.hostname));
//]]></script>
	<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
		<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
	<?php endif; ?>
	<header id="nav">
		<div id="topmenu">
			<div class="innercontainer">
				<div id="logo">
					<a href="#flavours">
						<img src="<?php echo get_template_directory_uri(); ?>/images/gosplash-logo.png" alt="Go Splash - Low calorie">
					</a>
				</div>
				<!-- logo -->
				<div id="collapsedmenu" class="expandmenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div id="mainmenu" role="nav">
					<ul>
					<li>
						<a href="#flavours" class="nav-switch scroll" id="lang-flavours" data-target="#flavours">
							Flavours
						</a>
					</li>
					<li>
						<a href="#about" class="nav-switch scroll" id="lang-about" data-target="#about">
							About
						</a>
					</li>
					<li >
						<a href="#faq" class="nav-switch scroll" id="lang-faq" data-target="#faq">
							FAQ
						</a>
					</li>
					<li>
						<a href="#contact" class="nav-switch scroll" id="lang-contact" data-target="#contact">
							Contact
						</a>
					</li>
					<li class="languageswitch">
						<a href="index.php">EN</a>
						<ul class="submenu">
							<li>
								<a href="<?php echo get_permalink( get_page_by_title( 'de' ) ); ?>">DE</a>
							</li>
						</ul>
					</li>
				</div>
			</div>
			<!-- innercontainer -->
		</div>
	</header><!-- #masthead -->

	<div class="container">