var buildit = require('buildit');


function task(grunt) {
	grunt.registerMultiTask('buildit', 'A grunt task for converting CommonJS code to AMD-compliant bundles.', function() {
		var data, dest, options, out;

		options = this.options();
		data = this.data;

		dest = data.out || data.dest;

		out = buildit(options);

		if (dest) {
			grunt.file.write(dest, out);
		}
	});
}


module.exports = task;
