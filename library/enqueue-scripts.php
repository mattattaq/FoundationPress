<?php
/**
 * Enqueue all styles and scripts
 *
 * Learn more about enqueue_script: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_script}
 * Learn more about enqueue_style: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_style }
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */


// Check to see if rev-manifest exists for CSS and JS static asset revisioning
//https://github.com/sindresorhus/gulp-rev/blob/master/integration.md

if ( ! function_exists( 'foundationpress_asset_path' ) ) :
function foundationpress_asset_path( $filename ) {
	$filename_split = explode( '.', $filename );
	$dir = end( $filename_split );
	$manifest_path = dirname( dirname(__FILE__) ) . '/dist/assets/' . $dir . '/rev-manifest.json';
	
	if ( file_exists($manifest_path ) ) {
		$manifest = json_decode( file_get_contents( $manifest_path ), TRUE);
	} else {
		$manifest = [];
	}
	
	if ( array_key_exists( $filename, $manifest) ) {
		return $manifest[$filename];
	}
	return $filename;
}
endif;

if ( ! function_exists( 'foundationpress_scripts' ) ) :
	function foundationpress_scripts() {
		// Enqueue the main Stylesheet.
		wp_enqueue_style( 'main-stylesheet',  get_template_directory_uri() . '/dist/assets/css/' . foundationpress_asset_path('app.css'), array(), '2.10.4', 'all' );

		//Enqueue the slider stylesheet
		wp_enqueue_style('slider_stylesheet', get_template_directory_uri() . '/assets/css/styles.css');

		//Enqueue the animation style
		wp_enqueue_style('animation_style', get_template_directory_uri() . '/assets/animation/animation.css');

		// Deregister the jquery version bundled with WordPress.
		wp_deregister_script( 'jquery' );

		// CDN hosted jQuery placed in the header, as some plugins require that jQuery is loaded in the header.
		wp_enqueue_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), '3.2.1', false );

		// Enqueue Founation scripts
		wp_enqueue_script( 'foundation', get_template_directory_uri() . '/dist/assets/js/' . foundationpress_asset_path('app.js'), array( 'jquery' ), '2.10.4', true );

		//Enqueue javascript
		wp_register_script('slider', get_template_directory_uri() . '/assets/js/scripts.js');
		wp_enqueue_script('slider');

		//Enqueue animation js
		wp_register_script('animation', get_template_directory_uri() . '/assets/animation/animation.js', null, null, true);
		wp_enqueue_script('animation');

		//Enqueue animation js
		wp_register_script('circleProgress', get_template_directory_uri() . '/assets/animation/circle-progress.js');
		wp_enqueue_script('circleProgress');

		
		// Enqueue FontAwesome from CDN. Uncomment the line below if you don't need FontAwesome.
		//wp_enqueue_script( 'fontawesome', 'https://use.fontawesome.com/5016a31c8c.js', array(), '4.7.0', true );

		

		// Add the comment-reply library on pages where it is necessary
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

	}
	// Enqueue google font.
	wp_register_style('googlefonts', 'https://fonts.googleapis.com/css?family=Titillium+Web');
	wp_enqueue_style('googlefonts');

	add_action('wp_enqueue_scripts', 'load_fonts');
	add_action( 'wp_enqueue_scripts', 'foundationpress_scripts' );
endif;

function load_fonts() {
	
}
function wp_request_localize_my_json_data() {
	
		// Helpers to define the $url path
		//$protocol = is_ssl() ? 'https' : 'http';
		$directory = trailingslashit( get_template_directory_uri() );
	
		// Make the request
		$request = wp_remote_get( $url );
	
		// Retrieve the data
		$body = wp_remote_retrieve_body( $request );
		$data = json_decode( $body );
	
		// Localize script exposing $data contents
		wp_localize_script( 'flavourObject-json', 'flavourObjectJSON', array( 
				'flavourk_url' => admin_url( 'admin-ajax.php' ),
				'full_data' => $data
			)
		);
	
	   // Enqueues main js file
		wp_enqueue_script( 'flavourObject-json' );
	
	}
	add_action( 'wp_enqueue_scripts', 'wp_request_localize_my_json_data', 10);
