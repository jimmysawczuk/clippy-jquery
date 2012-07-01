## Welcome ##

**clippy-jquery** is a jQuery plugin designed to make the [clippy][1] SWF simple and easy to use.

## [Demo][5]

### Requirements ###

 * jQuery (tested on [1.7.2][2])
 * Flash (just the web browser plugin, no Flash *development* required).

### Getting started ###

1. Load jQuery and the plugin:

        <!-- use local jQuery if you prefer -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
        <script src="jquery.clippy.min.js" type="text/javascript"></script>

2. Insert the clipboard text in the HTML, using a selector to keep track of which items you're using Clippy on:

        <b>URL:</b> http://jsaw.me/OFSS7V (<span class="clippy">http://jsaw.me/OFSS7V</span>)

3. In `$(document).ready()`, invoke the plugin:

        $(document).ready(function()
        {
            $('.clippy').clippy();
        });

4. Done!

### Options ###

#### Sending text ####
You can set the text that **clippy-jquery** uses using three different methods, in order of preference:

1. The `text` key in the `options` object passed to `clippy()`, i.e.: `$('#single_clippy').clippy({text: "This is a test"});`
2. The HTML5 `data` attribute `data-text` on the element(s) that you're referencing, i.e. `<span class="clippy" data-text="This is a test"></span>`
3. The inline text of the element(s) you're referencing.

#### Other options ####
Apart from `text`, here are some other options you can pass to `.clippy()`:

* `width` (default: `14`): The width in pixels of the generated SWF
* `height` (default: `14`): The height in pixels of the generated SWF
* `clippy_path` (default: `'clippy.swf'`): The path to `clippy.swf` that a client's web browser can use to access the file.
* `keep_text` (default: `false`): Whether or not to keep inline text inside clippy'ed elements
* `force_load` (default: `false`): If true, we'll try to load the SWF even if we can't detect flash in the user's browser
* `flashvars` (default: `{}`): extra Flash variables to pass to the SWF

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
  [2]: http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
  [3]: https://github.com/mojombo
  [4]: https://github.com/mojombo/clippy/blob/master/LICENSE
  [5]: http://jimmysawczuk.github.com/clippy-jquery/
  [6]: http://jquery.com
  [7]: http://jquery.org/license
  [8]: http://github.com/swfobject/swfobject