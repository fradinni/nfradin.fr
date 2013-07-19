define([], function(){
return function(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "\n<div class=\"post-header\">\n\t<h2><%= article.title %></h2>\n</div>\n<div class=\"post-category ribbon-green\"><a href=\"/blog\">article.category.name</a></div>\n<img src=\"/img/article-cover-2.jpg\" class=\"post-cover\"></img>\n<div class=\"post-preview\">\n\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n\t</p>\n\t<a href=\"/blog\" class=\"read_next\">Lire la suite...</a>\n</div>", filename: "/Users/fradinni/Documents/GitPerso/nfradin.fr/src/www/templates/blogItem.ejs" };
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
 buf.push('\n<div class="post-header">\n	<h2>', escape((__stack.lineno=3,  article.title )), '</h2>\n</div>\n<div class="post-category ribbon-green"><a href="/blog">article.category.name</a></div>\n<img src="/img/article-cover-2.jpg" class="post-cover"></img>\n<div class="post-preview">\n	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada at massa sed lobortis. Aliquam placerat, mauris non elementum blandit, ipsum risus semper magna, nec gravida nunc mi quis velit. Nullam dapibus rhoncus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget nisi at lacus tristique gravida. Vestibulum vehicula malesuada sollicitudin. Mauris vel varius enim...\n	</p>\n	<a href="/blog" class="read_next">Lire la suite...</a>\n</div>'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}
});