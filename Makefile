default:
	@cp src/jquery.clippy.js bin/jquery.clippy.js
	@compressor src/jquery.clippy.js bin/jquery.clippy.min.js
	@cp clippy.swf bin/clippy.swf