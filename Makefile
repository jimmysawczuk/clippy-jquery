default:
	@cat src/swfobject.js > bin/jquery.clippy.js
	@echo "\n\n" >> bin/jquery.clippy.js
	@cat src/jquery.clippy.js >> bin/jquery.clippy.js
	
	@compressor bin/jquery.clippy.js bin/jquery.clippy.min.js
	@cp src/clippy.swf bin/clippy.swf