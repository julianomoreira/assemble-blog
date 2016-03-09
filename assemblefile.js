var assemble = require('assemble');
var htmlmin = require('gulp-htmlmin');
var app = assemble();

app.page('a.hbs', {content: '...'});
app.page('b.hbs', {content: '...'});
app.page('c.hbs', {content: '...'});

app.task('default', function() {
   return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(htmlmin())
    .pipe(app.dest('site'));
});

app.build('default', function(err) {
  if (err) throw err;
  console.log('done!');
});

// expose your instance of assemble
module.exports = app;
