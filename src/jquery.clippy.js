/*!
	clippy-jquery: <http://github.com/jimmysawczuk/clippy-jquery>
	(c) 2011-2012; MIT License, see README.md for full license information and acknowledgements
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
			'transparent': false,
			'force_load' : false
		};
		
		opts = $.extend(_opts, opts);
		
		var hasFlash = false;
		try
		{
			var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if (fo)
			{
				hasFlash = true;
			}
		}
		catch(e)
		{
			if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined)
			{
				hasFlash = true;
			}
		}
		
		// if browser has Flash support or manual override set...
		if (hasFlash || opts.force_load) 
		{ 
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
				
				if (opts.keep_text)
				{
					$(this).html('');
				}
				swfobject.embedSWF(opts.clippy_path, id, opts.width, opts.height, '10', false, {text: text}, {scale: "noscale"});
			});
		}
		else
		{
			// hide all the clippies so unwanted text is not displayed when Flash is not supported
			this.each(function(idx, val)
			{
				$(this).css({'display': 'none'});
			});
		}
	};
})(jQuery);