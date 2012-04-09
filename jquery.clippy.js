/*
We're using Clippy, found at https://github.com/mojombo/clippy, to make a simple-to-use jQuery plugin for easy copying to the clipboard from the web browser. Some Flash required, YMMV.
*/
(function($){
	$.fn.clippy = function(opts) 
	{
		_opts = { // default options
			'width': '14',
			'height': '14',
			'color': '#ffffff',
			'clippy_path': 'clippy.swf',
			'keep_text': false
		};
		
		opts = $.extend(_opts, opts);
		
		params = { // a lot of similar parameters go on the <param>s as well as the <embed>
			'movie': opts.clippy_path,
			'allowScriptAccess': 'always',
			'quality': 'high',
			'scale': 'noscale',
			'bgcolor': opts.color
		};
		
		// duplicate, then modify the params we already have for the <embed>
		embed_params = $.extend({}, params, {'width': opts.width, 'height': opts.height});
		embed_params.src = embed_params.movie;
		
		delete embed_params.movie;
		
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
			
			// text is set per element, unlike everything else which is set per selector
			params.FlashVars = 'text=' + text;
			embed_params.FlashVars = 'text=' + text;
			
			// these tags are built per the example given at https://github.com/mojombo/clippy in the README
			// create <object>
			dom = $('<object />').attr({
				'classid': 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000', 
				'width': opts.width, 
				'height': opts.height
			});

			// create <embed /> to append to <object />
			embed = $('<embed />').attr(embed_params);
			
			try {

				// try to append <embed /> to <object />
				dom.append(embed);

				// create and prepend <param>s to <object>
				$.each(params, function(idx2, val2)
				{
					dom.prepend($('<param />').attr({ 'name': idx2, 'value': val2 }));
				});

			} catch(e) {

				// appending <embed /> is not allowed on IE, so just ignore the <object /> and use the <embed /> instead.
				dom = embed;

			}			
			
			// if we keep the text, we put the button and THEN the text, otherwise, just replace text with the button
			if (opts.keep_text)
			{
				$(val).html(dom).append(decodeURIComponent(text));
			}
			else
			{
				$(val).html(dom);
			}
		});
	};
})(jQuery);