if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function(require) {

	var ejs = require('ejs');
	var fs = require('fs');


	/**
	* EJS Templates Pre-Compiler
	*/
	var EJSCompiler = function() {

	};

	EJSCompiler.prototype.compileTemplates = function(path, output) {
		var self = this;

		// Delete output directory if exists
		this.deleteFolderRecursive(output);

		// Create output directory
		fs.mkdirSync(output);

		// Read files
		fs.readdir(path, function(err, files) {
    	files.filter(function(file) { 
    		return (file.substr(-4) == '.ejs'); 
    	}).forEach(function(file) { 
    		var content = fs.readFileSync(path + file);
    		self.compileFile(path, output, file, content);
    	});
		});
	};

	EJSCompiler.prototype.compileFile = function(path, output, file, content) {
		var script = ejs.compile(""+content, {cache: false, filename: path + file, client: true,
			compileDebug: true});
		var fileName = file.substr(0, file.lastIndexOf('.')) + '.js';

		var data = script.toString();
		data = data.split('\n');
		data.splice(0, 1, data[0].replace(/^function anonymous/, 'define([], function(){\nreturn function'));
		data.push('});');

		fs.writeFile(
			output + fileName,
			data.join('\n'), 
			function(){
				console.log('  \033[90mcompiled\033[0m %s', file);
			}
		);
	};

	EJSCompiler.prototype.deleteFolderRecursive = function(path) {
	  if( fs.existsSync(path) ) {
	    fs.readdirSync(path).forEach(function(file,index){
	      var curPath = path + "/" + file;
	      if(fs.statSync(curPath).isDirectory()) { // recurse
	        deleteFolderRecursive(curPath);
	      } else { // delete file
	        fs.unlinkSync(curPath);
	      }
	    });
	    fs.rmdirSync(path);
	  }
	};

	return EJSCompiler;
});