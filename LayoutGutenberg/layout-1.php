<?php
/**
 * Plugin Name:       Layout 1
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       layout-1
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_layout_1_block_init()
{
	register_block_type(__DIR__);
}

add_action('init', 'create_block_layout_1_block_init');

function birdor_category($categories, $post)
{
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'birdor',
				'title' => __('Birdor Layouts', 'birdor'),
				'icon' => 'twitter'
			)
		)
	);
}
add_filter('block_categories', 'birdor_category', 10, 2);

function my_scripts() {
	wp_enqueue_style('bootstrap4', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');
	wp_enqueue_script( 'boot1','https://code.jquery.com/jquery-3.3.1.slim.min.js', array( 'jquery' ),'',true );
	wp_enqueue_script( 'boot2','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', array( 'jquery' ),'',true );
	wp_enqueue_script( 'boot3','https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js', array( 'jquery' ),'',true );
	wp_enqueue_style( 'custom-font', "//fonts.googleapis.com/css?family=Poppins");

}
add_action( 'enqueue_block_assets', 'my_scripts');
