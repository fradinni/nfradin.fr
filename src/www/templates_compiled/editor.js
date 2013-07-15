define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% include layout/header %>\n\t<div class=\"editor-page bg-stripes\">\n\t\t<!-- Page Header -->\n\t\t<header>\t\t\t\n\t\t\t<a href=\"/blog\" class=\"site-title\">Article Editor</a>\n\t\t\t<a \thref=\"https://twitter.com/fradinni\" \n\t\t\t\tclass=\"twitter-follow-button\" \n\t\t\t\tdata-show-count=\"true\" \n\t\t\t\tdata-lang=\"en\" \n\t\t\t\tdata-size=\"large\">Follow @fradinni</a>\n\t\t</header>\n\n\t\t<!-- Page content -->\n\t\t<div class=\"content editor\">\n\t\t\t<!-- <textarea name=\"editor\">&lt;p&gt;Initial value.&lt;/p&gt;</textarea> -->\n\t\t\t<div id=\"editor\" contenteditable=\"true\" class=\"editable\">\n\t\t\t    <%- article.text %>\n\t\t\t</div>\n\t\t\t<script>\n\t\t\t    // Turn off automatic editor creation first.\n\t\t\t    CKEDITOR.editorConfig = function( config ) {\n    \t\t\t\tconfig.language = 'fr';\n    \t\t\t\tconfig.uiColor = '#AADC6E';\n\t\t\t\t};\n\t\t\t</script>\n\t\t</div>\n\n\t\t<div class=\"save\">\n\t\t\t<a href=\"/editor?a=new\" onclick=\"alert(CKEDITOR.instances.editor.getData());\">Save</a>\n\t\t</div>\n\t</div>\n<% include layout/footer %>", filename: "/Users/nicolas/Documents/GitPerso/nfradin.fr/src/www/templates/editor.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('' + (function(){var buf = [];
 buf.push('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>nfradin.fr</title>\n    <meta name="description" content="Site web / Blog perso.">\n    <meta name="author" content="Nicolas FRADIN">\n\n    <!-- HTML5 shim, for IE6-8 support of HTML elements -->\n    <!--[if lt IE 9]>\n      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>\n    <![endif]-->\n\n\n    <!-- Scripts -->\n    <script id="twitter-wjs" src="http://platform.twitter.com/widgets.js"></script>\n    <script type="text/javascript" src="/ckeditor/ckeditor.js"></script>\n    <script type="text/javascript" src="/js/lib/require.js" data-main="js/app.js"></script>\n    <!-- -->\n\n\n    <!-- styles -->\n    <link rel="stylesheet" href="/css/reset.css">\n    <link rel="stylesheet" href="/css/styles.css">\n    <link rel="stylesheet" href="/css/blog.css">\n    <link rel="stylesheet" href="/css/editor.css">\n    <!-- -->\n  </head>\n  <body>\n');
return buf.join('');})() + '\n	<div class="editor-page bg-stripes">\n		<!-- Page Header -->\n		<header>			\n			<a href="/blog" class="site-title">Article Editor</a>\n			<a 	href="https://twitter.com/fradinni" \n				class="twitter-follow-button" \n				data-show-count="true" \n				data-lang="en" \n				data-size="large">Follow @fradinni</a>\n		</header>\n\n		<!-- Page content -->\n		<div class="content editor">\n			<!-- <textarea name="editor">&lt;p&gt;Initial value.&lt;/p&gt;</textarea> -->\n			<div id="editor" contenteditable="true" class="editable">\n			    ', (__stack.lineno=17,  article.text ), '\n			</div>\n			<script>\n			    // Turn off automatic editor creation first.\n			    CKEDITOR.editorConfig = function( config ) {\n    				config.language = \'fr\';\n    				config.uiColor = \'#AADC6E\';\n				};\n			</script>\n		</div>\n\n		<div class="save">\n			<a href="/editor?a=new" onclick="alert(CKEDITOR.instances.editor.getData());">Save</a>\n		</div>\n	</div>\n' + (function(){var buf = [];
 buf.push('	</body>\n</html>');
return buf.join('');})() + ''); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}
});