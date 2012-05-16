/*
We're using Clippy, found at https://github.com/mojombo/clippy, to make a simple-to-use jQuery plugin for easy copying to the clipboard from the web browser. Some Flash required, YMMV.
*/
(function($)
{
	$.fn.clippy = function(opts) 
	{
		_opts = { // default options
			'width': 14,
			'height': 14,
			'color': '#ffffff',
			'clippy_path': 'clippy.swf',
			'keep_text': false,
			'transparent': false
		};
		
		opts = $.extend(_opts, opts);
		
		// for every element matched...
		this.each(function(idx, val)
		{
			if (opts.text && opts.text != '')
			{
				text = opts.text;
			}
			else if ($(val).data('text') && $(val).data('text') != '')
			{
				text = $(val).data('text');
			}
			else
			{
				text = $(val).text();
			}
			
			// text should be URI-encoded, per https://github.com/mojombo/clippy/pull/9
			text = encodeURIComponent(text);
			
			var id = "";
			if (typeof $(this).attr('id') === "undefined" || $.trim($(this).attr('id') === ""))
			{
				var id_suffix = Math.round(Math.random() * 1024).toString(16);
				id = 'clippy-' + id_suffix;
				
				$(this).attr('id', id);
			}
			else
			{
				id = $(this).attr('id');
			}
			
			$(this).html('');
			swfobject.embedSWF(opts.clippy_path, id, opts.width, opts.height, '10', false, {text: text}, {scale: "noscale"});
			
			/*
			// if we keep the text, we put the button and THEN the text, otherwise, just replace text with the button
			if (opts.keep_text)
			{
				$(val).html('').append(dom).append(decodeURIComponent(text));
			}
			else
			{
				$(val).html('').append(dom);
			}
			*/
		});
	};
})(jQuery);