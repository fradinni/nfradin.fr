define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% include layout/blog_header %>\n\n\t<h2>Administration</h2>\n\t<br />\n\t<a href=\"/admin_users\" data-role=\"extern\">-> Blog users</a>\n\t<br />\n\t<a href=\"/admin_categories\" data-role=\"extern\">-> Blog categories</a>\n\t<br />\n\t<a href=\"/admin_articles\" data-role=\"extern\">-> Blog articles</a>\n\t<br />\n\t<br />\n\t<a href=\"/logout\" data-role=\"extern\">-> Logout</a>\n\n<% include layout/blog_footer %>", filename: "/Users/nicolas/Documents/GitPerso/nfradin.fr/src/www/templates/admin.ejs" };
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
 buf.push('' + (function(){var buf = [];
 buf.push('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>nfradin.fr</title>\n    <meta name="description" content="Site web / Blog perso.">\n    <meta name="author" content="Nicolas FRADIN">\n\n    <!-- HTML5 shim, for IE6-8 support of HTML elements -->\n    <!--[if lt IE 9]>\n      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>\n    <![endif]-->\n\n\n    <!-- Scripts -->\n    <script id="twitter-wjs" src="http://platform.twitter.com/widgets.js"></script>\n    <script type="text/javascript" src="/ckeditor/ckeditor.js"></script>\n    <script type="text/javascript" src="/js/lib/require.js" data-main="js/app.js"></script>\n    <!-- -->\n\n\n    <!-- styles -->\n    <link rel="stylesheet" href="/css/reset.css">\n    <link rel="stylesheet" href="/css/styles.css">\n    <link rel="stylesheet" href="/css/blog.css">\n    <link rel="stylesheet" href="/css/editor.css">\n    <!-- -->\n  </head>\n  <body>\n');
return buf.join('');})() + '\n\n	<div class="page bg-stripes">\n		<!-- Page Header -->\n		<header>			\n			<a href="/blog" class="site-title">Fradinni\'s Blog</a>\n			');__stack.lineno=7; if(typeof user != "undefined" && user) { ; buf.push('\n				<a href="/logout" data-role="extern" class="logout">', escape((__stack.lineno=8,  user.username )), '&nbsp;&nbsp;|&nbsp;&nbsp;Logout</a>\n				');__stack.lineno=9; if(user.roles[0] == 'ADMIN') { ; buf.push('\n					<a href="/admin" data-role="extern" class="button-blue">Admin</a>\n				');__stack.lineno=11; } ; buf.push('\n			');__stack.lineno=12; } else { ; buf.push('\n				<a href="/auth/google" class="google-signin-red" data-role="extern"></a>\n			');__stack.lineno=14; } ; buf.push('\n			<a 	href="https://twitter.com/fradinni" \n				class="twitter-follow-button" \n				data-show-count="true" \n				data-lang="en" \n				data-size="large">Follow @fradinni</a>\n		</header>\n\n		<!-- Page content -->\n		<div class="content">\n\n			<div class="side-panel">\n				<img src="/img/avatar.jpg" class="avatar"></img>\n				<ul class="infos">\n					<li>Nicolas FRADIN</li>\n					<li>26 ans</li>\n				</ul>\n				<ul class="links">\n					<li class="category-name">Liens</li>\n					<li><a href="/">Site web</a></li>\n					<li><a href="/cv">Mon cv</a></li>\n				</ul>\n				<ul class="categories">\n					<li class="category-name">Categories</li>\n					<li><a href="#">Divers</a></li>\n					<li><a href="#">Electronique</a></li>\n					<li><a href="#">Developpement</a></li>\n					<li><a href="#">Jeux video</a></li>\n				</ul>\n			</div>\n\n			<div class="main-panel">');
return buf.join('');})() + '\n\n	<h2>Administration</h2>\n	<br />\n	<a href="/admin_users" data-role="extern">-> Blog users</a>\n	<br />\n	<a href="/admin_categories" data-role="extern">-> Blog categories</a>\n	<br />\n	<a href="/admin_articles" data-role="extern">-> Blog articles</a>\n	<br />\n	<br />\n	<a href="/logout" data-role="extern">-> Logout</a>\n\n' + (function(){var buf = [];
 buf.push('</div>\n	</div>\n\n' + (function(){var buf = [];
 buf.push('	</body>\n</html>');
return buf.join('');})() + '');
return buf.join('');})() + ''); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}
});