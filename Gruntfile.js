module.exports = function(grunt)
{
	grunt.initConfig({
		concat: {
			bin: {
				src: ['src/swfobject.js', 'src/jquery.clippy.js'],
				dest: 'bin/jquery.clippy.js'
			},
		},

		uglify: {
			options: {
				preserveComments: 'some'
			},
			bin: {
				src: ['bin/jquery.clippy.js'],
				dest: 'bin/jquery.clippy.min.js'
			}
		},

		copy: {
			swf: {
				src: 'src/clippy.swf',
				dest: 'bin/clippy.swf'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['concat', 'uglify', 'copy']);
};
