var amdsync = require('amdsync');

function task(grunt) {
	grunt.registerMultiTask('amdsync', 'A grunt task for converting CommonJS code to AMD-compliant bundles.', function() {
		var data, dest, files, options, out;

		options = this.options();
		data = this.data;

		files = data.src || data.files || [];
		dest = data.out || data.dest;

		out = amdsync(files, options);

		if (dest) {
			grunt.file.write(dest, out);
		}
	});
}


module.exports = task;
