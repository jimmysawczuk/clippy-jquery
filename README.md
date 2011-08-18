## Welcome ##

**clippy-jquery** is a jQuery plugin designed to make the [clippy][1] SWF simple and easy to use.

### Requirements ###

 * jQuery (tested on [1.6.2, Google CDN version][2])
 * Flash (just the web browser plugin, no Flash *development* required).

### Getting started ###

In your `<head>`, you need to include jQuery and the plugin:
	
	<!-- use local jQuery if you prefer -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
	<script src="jquery.clippy.min.js" type="text/javascript"></script>
	
Insert the clipboard text in the HTML, using a selector to keep track of which items you're using Clippy on:

	<b>URL:</b> http://www.domain.com/this/is/a/really/long/path/to/a/page.html (<span class="clippy">http://www.domain.com/this/is/a/really/long/path/to/a/page.html</span>)

In `$(document).ready()`, invoke the plugin: 

	$(document).ready(function()
	{
		$('.clippy').clippy();
	});
	
Done!


  [1]: https://github.com/mojombo/clippy
  [2]: http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js