var express     = require('express');
var router      = express.Router();
var Campground  = require('../models/campground');
var middleware  = require('../middleware');

//INDEX - show all campgrounds
router.get('/', function(req, res) {
    //console.log(req.user);
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render('campgrounds/index', {campgrounds:allCampgrounds});
        }
    });
});

//CREATE - add new campground to DB
router.post('/', middleware.isLoggedIn, function(req, res) {
    //res.send('YOU HIT THE POST ROUTE');
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, desc: desc, author: author};
    //console.log(req.user);
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect('/campgrounds');
        }
    });
});

//NEW - show form to create new campground
router.get('/new', middleware.isLoggedIn, function(req, res) {
    res.render('campgrounds/new');
});

//SHOW - show details for 1 campground
router.get('/:id', function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        res.render('campgrounds/edit', {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put('/:id', middleware.checkCampgroundOwnership, function(req, res) {
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if(err) {
            res.redirect('/campgrounds');
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        }
    });
    //redirect somewhere (show page)
});

// DELETE or DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res) {
    //res.send('YOU ARE TRYING TO DELETE SOMETHING!');
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect('/campgrounds');
        } else {
            res.redirect('/campgrounds');
        }
    });
});

// Middleware

module.exports = router;