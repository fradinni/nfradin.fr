var ejs = require('ejs');
var fs = require('fs');
var EJSCompiler = require('../utils/EJSCompiler');

// Check command line arguments
var args = process.argv.slice(2);
if(!args.length || args.length < 2) {
	console.error('Error: Missing argument !');
	console.error('Usage: node compile_templates.js <src_dir> <dest_dir>');
	process.exit(1);
}

// Compile templates
var ejsCompiler = new EJSCompiler();
ejsCompiler.compileTemplates(args[0], args[1]);
