<?php
class Plugin_chameleon extends Plugin {
	
	var $meta = array(
	  'name'        => 'chameleon',
	  'description' => 'Adaptively generate all the things',
	  'version'     => '1.1',
	  'author'      => '@tyvdh (Tyler van der Hoeven)',
	  'author_url'  => 'http://tylervdh.com'
	);
		
	// For loading the required script and setting the return cookie ( set before the first {{ chameleon }} tag )
	public function script() {
		// Send browser width cookie
		if (isset($_COOKIE['cWidth'])) {
		  $value = $_COOKIE['cWidth'];
		  setcookie('sWidth', $value);
		}
		
		return $this->js->link('app.min.js');;
	}
	
	// For plugging into the image width, returns breakpoint values
	public function index() {
		if (isset($_COOKIE['cWidth'])) {
			$key = $_COOKIE['cWidth'];
			return $key;
		} else {	
			return false;	
		}
	}
}