var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

// temp array
var campgrounds = [
    {name: 'Salmon Creek', image: 'https://farm8.staticflickr.com/7113/7482049174_560bf194ec.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f6c178a5eeb4ba_340.jpg'},
    {name: 'Mountain Goat\'s Rest', image: 'https://pixabay.com/get/ea36b7062bf6093ed1584d05fb1d4e97e07ee3d21cac104497f6c178a5eeb4ba_340.jpg'},
    {name: 'Salmon Creek', image: 'https://farm8.staticflickr.com/7113/7482049174_560bf194ec.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f6c178a5eeb4ba_340.jpg'},
    {name: 'Mountain Goat\'s Rest', image: 'https://pixabay.com/get/ea36b7062bf6093ed1584d05fb1d4e97e07ee3d21cac104497f6c178a5eeb4ba_340.jpg'},
    {name: 'Salmon Creek', image: 'https://farm8.staticflickr.com/7113/7482049174_560bf194ec.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f6c178a5eeb4ba_340.jpg'},
    {name: 'Mountain Goat\'s Rest', image: 'https://pixabay.com/get/ea36b7062bf6093ed1584d05fb1d4e97e07ee3d21cac104497f6c178a5eeb4ba_340.jpg'}
]

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res) {
    //res.send('YOU HIT THE POST ROUTE');
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
    res.render('new');
});

app.listen(3000, function() {
    console.log('The YelpCamp app runs on PORT 3000');
});