define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% include layout/header %>\n\n\t<div class=\"page bg-montain\">\n\t\t<div class=\"header\">\n\t\t\t<a \thref=\"https://twitter.com/fradinni\" \n\t\t\t\tclass=\"twitter-follow-button\" \n\t\t\t\tdata-show-count=\"false\" \n\t\t\t\tdata-lang=\"fr\" \n\t\t\t\tdata-size=\"large\">Follow @fradinni</a>\n\t\t</div>\n\t\t<div class=\"title\">\n\t\t\t<h1>Fradinni</h1>\n\t\t\t<div class=\"desc\">\n\t\t\t\t<p>Ingénieur Etude et Dev.</p>\n\t\t\t\t<p>#Grails &nbsp;#JAVA &nbsp;#NodeJS &nbsp;#Backbone &nbsp;#PhoneGap &nbsp;#iOS &nbsp;#Android</p>\n\t\t\t\t<p>Electronique: &nbsp;Arduino, &nbsp;Beaglebone, &nbsp;C, &nbsp;C++</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"ch-grid\">\n\t\t    <li>\n\t\t        <div class=\"ch-item ch-img-1\">\n\t\t            <div class=\"ch-info\">\n\t\t                <h3>Blog</h3>\n\t\t                <p>Articles sur le dev. et l'électronique</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </li>\n\t\t    <li>\n\t\t        <div class=\"ch-item ch-img-2\">\n\t\t            <div class=\"ch-info\">\n\t\t                <h3>CV</h3>\n\t\t                <p>Mon parcours</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </li>\n\t\t</ul>\n\t</div>\n\n\t<script type=\"text/javascript\">\n!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');\n\t</script>\n\t\n<% include layout/footer %>", filename: "/Users/nicolas/Documents/GitPerso/nfradin.fr/build/www/templates/index.ejs" };
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
 buf.push('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>nfradin.fr</title>\n    <meta name="description" content="Site web / Blog perso.">\n    <meta name="author" content="Nicolas FRADIN">\n\n    <!-- HTML5 shim, for IE6-8 support of HTML elements -->\n    <!--[if lt IE 9]>\n      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>\n    <![endif]-->\n\n    <script type="text/javascript" src="js/app.js"></script>\n\n    <!-- styles -->\n    <link rel="stylesheet" href="css/reset.css">\n    <link rel="stylesheet" href="css/styles.css">\n    <!-- -->\n  </head>\n  <body>\n');
return buf.join('');})() + '\n\n	<div class="page bg-montain">\n		<div class="header">\n			<a 	href="https://twitter.com/fradinni" \n				class="twitter-follow-button" \n				data-show-count="false" \n				data-lang="fr" \n				data-size="large">Follow @fradinni</a>\n		</div>\n		<div class="title">\n			<h1>Fradinni</h1>\n			<div class="desc">\n				<p>Ingénieur Etude et Dev.</p>\n				<p>#Grails &nbsp;#JAVA &nbsp;#NodeJS &nbsp;#Backbone &nbsp;#PhoneGap &nbsp;#iOS &nbsp;#Android</p>\n				<p>Electronique: &nbsp;Arduino, &nbsp;Beaglebone, &nbsp;C, &nbsp;C++</p>\n			</div>\n		</div>\n\n		<ul class="ch-grid">\n		    <li>\n		        <div class="ch-item ch-img-1">\n		            <div class="ch-info">\n		                <h3>Blog</h3>\n		                <p>Articles sur le dev. et l\'électronique</p>\n		            </div>\n		        </div>\n		    </li>\n		    <li>\n		        <div class="ch-item ch-img-2">\n		            <div class="ch-info">\n		                <h3>CV</h3>\n		                <p>Mon parcours</p>\n		            </div>\n		        </div>\n		    </li>\n		</ul>\n	</div>\n\n	<script type="text/javascript">\n!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');\n	</script>\n	\n' + (function(){var buf = [];
 buf.push('	</body>\n</html>');
return buf.join('');})() + ''); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}
});