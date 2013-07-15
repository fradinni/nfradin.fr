define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% include layout/blog_header %>\n\n\t<div class=\"post\">\n\t\t<div class=\"post-header\">\n\t\t\t<h2>Connect an Arduino with Android</h2>\n\t\t</div>\n\t\t<div class=\"post-category ribbon-blue\"><a href=\"/blog\">Electronique</a></div>\n\t\t<img src=\"/img/article-cover-1.jpg\" class=\"post-cover\"></img>\n\t\t<div class=\"post-preview\">\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n\t\t\t</p>\n\t\t\t<a href=\"/blog\" class=\"read_next\">Lire la suite...</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"post\">\n\t\t<div class=\"post-header\">\n\t\t\t<h2>NodeJS - How to Express Roads</h2>\n\t\t</div>\n\t\t<div class=\"post-category ribbon-green\"><a href=\"/blog\">Developement</a></div>\n\t\t<img src=\"/img/article-cover-2.jpg\" class=\"post-cover\"></img>\n\t\t<div class=\"post-preview\">\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n\t\t\t</p>\n\t\t\t<a href=\"/blog\" class=\"read_next\">Lire la suite...</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"post\">\n\t\t<div class=\"post-header\">\n\t\t\t<h2>COD BO2 - Nucléaire au MSMC sur Nuketown 2025</h2>\n\t\t</div>\n\t\t<div class=\"post-category ribbon-red\"><a href=\"/blog\">Jeux video</a></div>\n\t\t<img src=\"/img/article-cover-3.jpg\" class=\"post-cover\"></img>\n\t\t<div class=\"post-preview\">\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n\t\t\t</p>\n\t\t\t<a href=\"/blog\" class=\"read_next\">Lire la suite...</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"post\">\n\t\t<div class=\"post-header\">\n\t\t\t<h2>Windows 8 - Dossier optimization</h2>\n\t\t</div>\n\t\t<div class=\"post-category ribbon-yellow\"><a href=\"/blog\">Divers</a></div>\n\t\t<img src=\"/img/article-cover-4.jpg\" class=\"post-cover\"></img>\n\t\t<div class=\"post-preview\">\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n\t\t\t</p>\n\t\t\t<a href=\"/blog\" class=\"read_next\">Lire la suite...</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"scrollToTop\"></div>\n<% include layout/blog_footer %>", filename: "/Users/nicolas/Documents/GitPerso/nfradin.fr/src/www/templates/blog.ejs" };
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
return buf.join('');})() + '\n\n	<div class="page bg-stripes">\n		<!-- Page Header -->\n		<header>			\n			<a href="/blog" class="site-title">Fradinni\'s Blog</a>\n			<a 	href="https://twitter.com/fradinni" \n				class="twitter-follow-button" \n				data-show-count="true" \n				data-lang="en" \n				data-size="large">Follow @fradinni</a>\n		</header>\n\n		<!-- Page content -->\n		<div class="content">\n\n			<div class="side-panel">\n				<img src="/img/avatar.jpg" class="avatar"></img>\n				<ul class="infos">\n					<li>Nicolas FRADIN</li>\n					<li>26 ans</li>\n				</ul>\n				<ul class="links">\n					<li class="category-name">Liens</li>\n					<li><a href="/">Site web</a></li>\n					<li><a href="/cv">Mon cv</a></li>\n				</ul>\n				<ul class="categories">\n					<li class="category-name">Categories</li>\n					<li><a href="#">Divers</a></li>\n					<li><a href="#">Electronique</a></li>\n					<li><a href="#">Developpement</a></li>\n					<li><a href="#">Jeux video</a></li>\n				</ul>\n			</div>\n\n			<div class="main-panel">');
return buf.join('');})() + '\n\n	<div class="post">\n		<div class="post-header">\n			<h2>Connect an Arduino with Android</h2>\n		</div>\n		<div class="post-category ribbon-blue"><a href="/blog">Electronique</a></div>\n		<img src="/img/article-cover-1.jpg" class="post-cover"></img>\n		<div class="post-preview">\n			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n			</p>\n			<a href="/blog" class="read_next">Lire la suite...</a>\n		</div>\n	</div>\n\n	<div class="post">\n		<div class="post-header">\n			<h2>NodeJS - How to Express Roads</h2>\n		</div>\n		<div class="post-category ribbon-green"><a href="/blog">Developement</a></div>\n		<img src="/img/article-cover-2.jpg" class="post-cover"></img>\n		<div class="post-preview">\n			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n			</p>\n			<a href="/blog" class="read_next">Lire la suite...</a>\n		</div>\n	</div>\n\n	<div class="post">\n		<div class="post-header">\n			<h2>COD BO2 - Nucléaire au MSMC sur Nuketown 2025</h2>\n		</div>\n		<div class="post-category ribbon-red"><a href="/blog">Jeux video</a></div>\n		<img src="/img/article-cover-3.jpg" class="post-cover"></img>\n		<div class="post-preview">\n			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n			</p>\n			<a href="/blog" class="read_next">Lire la suite...</a>\n		</div>\n	</div>\n\n	<div class="post">\n		<div class="post-header">\n			<h2>Windows 8 - Dossier optimization</h2>\n		</div>\n		<div class="post-category ribbon-yellow"><a href="/blog">Divers</a></div>\n		<img src="/img/article-cover-4.jpg" class="post-cover"></img>\n		<div class="post-preview">\n			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n			</p>\n			<a href="/blog" class="read_next">Lire la suite...</a>\n		</div>\n	</div>\n\n	<div class="scrollToTop"></div>\n' + (function(){var buf = [];
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