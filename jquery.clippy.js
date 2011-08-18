(function($){
	$.fn.clippy = function(opts) 
	{
		_opts = {
			'width': '14',
			'height': '14',
			'color': '#ffffff',
			'clippy_path': 'clippy.swf',
			'keep_text': false
		};
		
		opts = $.extend(_opts, opts);
		
		params = {
			'movie': opts.clippy_path,
			'allowScriptAccess': 'always',
			'quality': 'high',
			'scale': 'noscale',
			'bgcolor': opts.color
		};
		
		embed_params = $.extend({}, params, {'width': opts.width, 'height': opts.height});
		embed_params.src = embed_params.movie;
		
		delete embed_params.movie;
		
		console.debug(params, embed_params);
		
		
		this.each(function(idx, val)
		{
			text = encodeURIComponent($(val).html());
			
			params.FlashVars = 'text=' + text;
			embed_params.FlashVars = 'text=' + text;
						
			dom = $('<object />').attr({
				'classid': 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000', 
				'width': opts.width, 
				'height': opts.height
			});
						
			$.each(params, function(idx2, val2)
			{
				dom.append($('<param />').attr({ 'name': idx2, 'value': val2 }));
			});
			
			embed = $('<embed />').attr(embed_params);
			dom.append(embed);
			
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