var assemble = require('assemble');
var app = assemble();
var locals = {title: 'Home!'};

// add a "page"
app.page('home.hbs', {content: 'This is {{title}}'});

// render it!
app.render('home.hbs', locals, function(err, view) {
  if (err) throw err;

  console.log(view.content);
  //=> 'This is Home!'
});
