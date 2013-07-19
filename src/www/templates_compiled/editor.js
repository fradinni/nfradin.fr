define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% include layout/header %>\n\t<div class=\"editor-page bg-stripes\">\n\t\t<!-- Page Header -->\n\t\t<header>\t\t\t\n\t\t\t<a href=\"/blog\" class=\"site-title\">Article Editor</a>\n\t\t\t<a \thref=\"https://twitter.com/fradinni\" \n\t\t\t\tclass=\"twitter-follow-button\" \n\t\t\t\tdata-show-count=\"true\" \n\t\t\t\tdata-lang=\"en\" \n\t\t\t\tdata-size=\"large\">Follow @fradinni</a>\n\t\t</header>\n\n\t\t<!-- Page content -->\n\t\t<div class=\"editor\">\n\t\t\t\n\t\t\t<input type=\"text\" id=\"title\" name=\"title\" style=\"width: 99%;\" placeholder=\"Title\" value=\"<%= article.title %>\" />\n\t\t\t\n\t\t\t<select name=\"category\" id=\"category\">\n\t\t\t\t<option value=\"null\">- Select category -</option>\n\t\t\t\t<% for(var index in categories) {\n\t\t\t\t\tvar category = categories[index];\n\t\t\t\t\t%>\n\t\t\t\t\t<option value=\"<%=category._id%>\" <%= article.category == category._id ? 'selected'  : '' %>><%=category.name%></option>\n\t\t\t\t\t<%\n\t\t\t\t} %>\n\t\t\t</select>\n\n\t\t\t<textarea name=\"editor\" id=\"editor\"><%= article.text %></textarea>\n\t\t</div>\n\n\t\t<span class=\"save\">Save</span>\n\t</div>\n<% include layout/footer %>", filename: "/Users/fradinni/Documents/GitPerso/nfradin.fr/src/www/templates/editor.ejs" };
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
 buf.push('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv=content-type content="text/html; charset=UTF-8">\n    <title>nfradin.fr</title>\n    <meta name="description" content="Site web / Blog perso.">\n    <meta name="author" content="Nicolas FRADIN">\n\n    <!-- HTML5 shim, for IE6-8 support of HTML elements -->\n    <!--[if lt IE 9]>\n      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>\n    <![endif]-->\n\n\n    <!-- Scripts -->\n    <script id="twitter-wjs" src="http://platform.twitter.com/widgets.js"></script>\n    <script type="text/javascript" src="/ckeditor/ckeditor.js"></script>\n    <script type="text/javascript" src="/js/lib/require.js" data-main="js/app.js"></script>\n    <!-- -->\n\n\n    <!-- styles -->\n    <link rel="stylesheet" href="/css/reset.css">\n    <link rel="stylesheet" href="/css/styles.css">\n    <link rel="stylesheet" href="/css/blog.css">\n    <link rel="stylesheet" href="/css/editor.css">\n    <!-- -->\n  </head>\n  <body>\n');
return buf.join('');})() + '\n	<div class="editor-page bg-stripes">\n		<!-- Page Header -->\n		<header>			\n			<a href="/blog" class="site-title">Article Editor</a>\n			<a 	href="https://twitter.com/fradinni" \n				class="twitter-follow-button" \n				data-show-count="true" \n				data-lang="en" \n				data-size="large">Follow @fradinni</a>\n		</header>\n\n		<!-- Page content -->\n		<div class="editor">\n			\n			<input type="text" id="title" name="title" style="width: 99%;" placeholder="Title" value="', escape((__stack.lineno=16,  article.title )), '" />\n			\n			<select name="category" id="category">\n				<option value="null">- Select category -</option>\n				');__stack.lineno=20; for(var index in categories) {
					var category = categories[index];
					; buf.push('\n					<option value="', escape((__stack.lineno=23, category._id)), '" ', escape((__stack.lineno=23,  article.category == category._id ? 'selected'  : '' )), '>', escape((__stack.lineno=23, category.name)), '</option>\n					');__stack.lineno=24;
				} ; buf.push('\n			</select>\n\n			<textarea name="editor" id="editor">', escape((__stack.lineno=28,  article.text )), '</textarea>\n		</div>\n\n		<span class="save">Save</span>\n	</div>\n' + (function(){var buf = [];
 buf.push('	</body>\n</html>');
return buf.join('');})() + ''); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}
});