var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
    //res.send('<h1>Welcome to the home page!</h1>');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
    //res.send('You fell in love with ' + thing);
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'Charlie'},
        {title: 'Can you believe this pomsky?', author: 'Tim'}
    ];

    res.render('posts', {posts: posts});
});

app.listen(3000, function() {
    console.log('App started on PORT 3000');
});