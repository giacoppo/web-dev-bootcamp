var express     = require('express');
var router      = express.Router();
var passport    = require('passport');
var User        = require('../models/user');
var Campground  = require('../models/campground');
var middleware  = require('../middleware');

// Root route
router.get('/', function(req, res) {
    res.render('landing');
});

// Show register form
router.get('/register' , function(req, res) {
    res.render('register', {page: 'register'});
});

// Handle Sign Up Logic
router.post('/register', function(req, res) {
    // res.send('Signing You Up!');
    var newUser = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            desc: req.body.desc,
            avatar: req.body.avatar
        });
    // eval(require('locus'));
    if(req.body.adminCode === 'secretcode123') {
        newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            //console.log(err);
            req.flash('error', err.message);
            return res.redirect('register');
        }
        passport.authenticate('local')(req, res, function() {
            req.flash('success', 'Welcome to YelpCamp ' + user.username);
            res.redirect('/campgrounds');
        });
    });
});

// Show login form
router.get('/login', function(req, res) {
    res.render('login', {page: 'login'});
});

// Handling login logic
router.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login',
        failureFlash: true,
        successFlash: 'Logged you in Succesfully!'
    }), function(req, res) {
});

// Logout route
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'Logged you out!');
    res.redirect('/campgrounds');
});

// USER PROFILES
router.get('/users/:id', middleware.isLoggedIn, function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            req.flash('error', 'User could not be found! ' + err);
            res.redirect('back');
        }
        Campground.find().where('author.id').equals(foundUser._id).exec(function(req, campgrounds) {
            if(err) {
                req.flash('error', 'User data could not be found! ' + err);
                res.redirect('back');
            }
            res.render('users/show', {user: foundUser, campgrounds: campgrounds});
        })
    });
});

module.exports = router;