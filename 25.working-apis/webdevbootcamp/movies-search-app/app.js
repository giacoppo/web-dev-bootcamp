var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
    res.render('search');
});

app.get('/results', function(req, res) {
    //res.send('Hello, it works!');
    var query = req.query.search;
    var apiKey = '&apikey=thewdb';
    var url = 'http://www.omdbapi.com/?s=' + query + apiKey;
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', {data: data});
            //res.send(data['Search'][0]);
            //console.log(data['Search'][0]);
        }
    });
});

app.listen(3000, function() {
    console.log('Movies App Running on PORT 3000');
});