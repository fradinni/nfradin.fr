define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% include layout/header %>\n\n\t<div class=\"page bg-montain\">\n\t\t<header>\n\t\t\t<a \thref=\"https://twitter.com/fradinni\" \n\t\t\t\tclass=\"twitter-follow-button\" \n\t\t\t\tdata-show-count=\"true\" \n\t\t\t\tdata-lang=\"en\" \n\t\t\t\tdata-size=\"large\">Follow @fradinni</a>\n\t\t</header>\n\t\t<div class=\"title\">\n\t\t\t<h1>Fradinni</h1>\n\t\t\t<h2>(Nicolas FRADIN)</h2>\n\t\t\t<div class=\"desc\">\n\t\t\t\t<p>Ingénieur Etude et Dev.</p>\n\t\t\t\t<p>#Grails &nbsp;#JAVA &nbsp;#NodeJS &nbsp;#Backbone &nbsp;#PhoneGap &nbsp;#iOS &nbsp;#Android</p>\n\t\t\t\t<p>Electronique: &nbsp;Arduino, &nbsp;Beaglebone, &nbsp;C, &nbsp;C++</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"ch-grid\">\n\t\t    <li>\n\t\t    \t<a href=\"/blog\">\n\t\t\t        <div class=\"ch-item ch-img-1\">\n\t\t\t            <div class=\"ch-info\">\n\t\t\t                <h3>Blog</h3>\n\t\t\t                <p>Articles sur le dev. et l'électronique</p>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t    \t</a>\n\t\t    </li>\n\t\t    <li>\n\t\t        <div class=\"ch-item ch-img-2\">\n\t\t            <div class=\"ch-info\">\n\t\t                <h3>CV</h3>\n\t\t                <p>Mon parcours</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </li>\n\t\t    <li>\n\t\t        <div class=\"ch-item ch-img-3\">\n\t\t            <div class=\"ch-info\">\n\t\t                <h3>Github</h3>\n\t\t                <p>Mes repositories</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </li>\n\t\t</ul>\n\n\t\t<footer>\n\t\t\t<p>Nicolas FRADIN - 2013 - Source code is free and available on <a link-role=\"extern\" href=\"http://github.com/fradinni/nfradin.fr\" target=\"_blank\">GitHub</a>.</p>\n\t\t<footer>\n\t</div>\n\n\n\t\n<% include layout/footer %>", filename: "/Users/fradinni/Documents/GitPerso/nfradin.fr/src/www/templates/index.ejs" };
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
return buf.join('');})() + '\n\n	<div class="page bg-montain">\n		<header>\n			<a 	href="https://twitter.com/fradinni" \n				class="twitter-follow-button" \n				data-show-count="true" \n				data-lang="en" \n				data-size="large">Follow @fradinni</a>\n		</header>\n		<div class="title">\n			<h1>Fradinni</h1>\n			<h2>(Nicolas FRADIN)</h2>\n			<div class="desc">\n				<p>Ingénieur Etude et Dev.</p>\n				<p>#Grails &nbsp;#JAVA &nbsp;#NodeJS &nbsp;#Backbone &nbsp;#PhoneGap &nbsp;#iOS &nbsp;#Android</p>\n				<p>Electronique: &nbsp;Arduino, &nbsp;Beaglebone, &nbsp;C, &nbsp;C++</p>\n			</div>\n		</div>\n\n		<ul class="ch-grid">\n		    <li>\n		    	<a href="/blog">\n			        <div class="ch-item ch-img-1">\n			            <div class="ch-info">\n			                <h3>Blog</h3>\n			                <p>Articles sur le dev. et l\'électronique</p>\n			            </div>\n			        </div>\n		    	</a>\n		    </li>\n		    <li>\n		        <div class="ch-item ch-img-2">\n		            <div class="ch-info">\n		                <h3>CV</h3>\n		                <p>Mon parcours</p>\n		            </div>\n		        </div>\n		    </li>\n		    <li>\n		        <div class="ch-item ch-img-3">\n		            <div class="ch-info">\n		                <h3>Github</h3>\n		                <p>Mes repositories</p>\n		            </div>\n		        </div>\n		    </li>\n		</ul>\n\n		<footer>\n			<p>Nicolas FRADIN - 2013 - Source code is free and available on <a link-role="extern" href="http://github.com/fradinni/nfradin.fr" target="_blank">GitHub</a>.</p>\n		<footer>\n	</div>\n\n\n	\n' + (function(){var buf = [];
 buf.push('	</body>\n</html>');
return buf.join('');})() + ''); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}
});