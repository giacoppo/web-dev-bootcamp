var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//     {
//         name: 'Granite Hill',
//         image: 'https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f6c279a4e9b4bf_340.jpg',
//         description: 'This is a huge granite hill. No bathroom. No water. Beautiful granite.'
//     }, function(err, campground) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('NEWLY CREATED CAMPGROUND: ');
//             console.log(campground);
//         }
//     }
// );

app.get('/', function(req, res) {
    res.render('landing');
});

//INDEX - show all campgrounds
app.get('/campgrounds', function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render('index', {campgrounds:allCampgrounds});
        }
    });
});

//CREATE - add new campground to DB
app.post('/campgrounds', function(req, res) {
    //res.send('YOU HIT THE POST ROUTE');
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    var newCampground = {name: name, image: image, desc: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });
});

//NEW - show form to create new campground
app.get('/campgrounds/new', function(req, res) {
    res.render('new');
});

//SHOW - show details for 1 campground
app.get('/campgrounds/:id', function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render('show', {campground: foundCampground});
        }
    });
    //render show template with that campground
    // res.send('THIS WILL BE THE SHOW PAGE');
});

app.listen(3000, function() {
    console.log('The YelpCamp app runs on PORT 3000');
});