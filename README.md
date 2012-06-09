## Welcome ##

**clippy-jquery** is a jQuery plugin designed to make the [clippy][1] SWF simple and easy to use. [Click here][5] for a demo.

### Requirements ###

 * jQuery (tested on [1.6.2][2])
 * Flash (just the web browser plugin, no Flash *development* required).

### Getting started ###

1. In your `<head>`, you need to include jQuery and the plugin:
	
     ```html
	 <!-- use local jQuery if you prefer -->
	 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
	 <script src="jquery.clippy.min.js" type="text/javascript"></script>
	
2. Insert the clipboard text in the HTML, using a selector to keep track of which items you're using Clippy on:

    ```html
	 <b>URL:</b> http://www.domain.com/this/is/a/really/long/path/to/a/page.html 
		 (<span class="clippy">http://www.domain.com/this/is/a/really/long/path/to/a/page.html</span>)

3. In `$(document).ready()`, invoke the plugin:

    ```javascript
	$(document).ready(function()
	{
		$('.clippy').clippy();
	});
	
4. Done! You can see **clippy-jquery** in action at the demo page [here][5].

### Caveats ###

* As with most jQuery plugins, if the element is dynamically created you need to make sure jQuery knows about it before you call `.clippy()`, i.e. invoke `.clippy()` after you append/prepend/insert the newly-created element into the DOM.

### Acknowledgements ###

Thanks to the following open source projects, without which this project would be impossible:

 * [clippy][1]
 * [jQuery][6]
 * [swfobject][8]

### License ###

[clippy][1], [jQuery][6] and **clippy-jquery** are released under MIT licenses. [clippy][1]'s license information is [here][4], jQuery's is [here][7], and **clippy-jquery**'s is below:

	The MIT License (MIT)
	Copyright (C) 2011-2012 by Jimmy Sawczuk

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.


  [1]: https://github.com/mojombo/clippy
  [2]: http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
  [3]: https://github.com/mojombo
  [4]: https://github.com/mojombo/clippy/blob/master/LICENSE
  [5]: http://files.jimmysawczuk.com/clippy-jquery/demo/
  [6]: http://jquery.com
  [7]: http://jquery.org/license
  [8]: http://github.com/swfobject/swfobject