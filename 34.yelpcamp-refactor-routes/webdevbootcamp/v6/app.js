var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local'),
    Campground      = require('./models/campground'),
    Comment         = require('./models/comment'),
    User            = require('./models/user'),
    seedDB          = require('./seeds'),

    commentRoutes   = require('./routes/comments')

mongoose.connect('mongodb://localhost/yelp_camp_v6');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
seedDB();

// PASSPORT CONFIGURATION
app.use(require('express-session')({
   secret: 'Blackie is a true Ninja cat!',
   resave: false,
   saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.get('/', function(req, res) {
    res.render('landing');
});

//INDEX - show all campgrounds
app.get('/campgrounds', function(req, res) {
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
    res.render('campgrounds/new');
});

//SHOW - show details for 1 campground
app.get('/campgrounds/:id', function(req, res) {
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
    //render show template with that campground
    // res.send('THIS WILL BE THE SHOW PAGE');
});

// ==========================================
// COMMENTS ROUTES
// ==========================================

app.get('/campgrounds/:id/comments/new', isLoggedIn, function(req, res) {
    // res.send('THIS WILL BE THE COMMENT FORM!');
    // find campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
        } else {
            res.render('comments/new', {campground: campground});
        }
    });
});

app.post('/campgrounds/:id/comments', isLoggedIn, function(req, res) {
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            //create new comment
            // console.log(req.body.comment);
            Comment.create(req.body.comment, function(err, comment) {
                if(err) {
                    console.log(err);
                } else {
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect campground to show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

// AUTH ROUTES

// Show register form
app.get('/register' , function(req, res) {
    res.render('register');
});

// Handle Sign Up Logic
app.post('/register', function(req, res) {
    // res.send('Signing You Up!');
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/campgrounds');
        });
    });
});

// Show login form
app.get('/login', function(req, res) {
    res.render('login');
});

// Handling login logic
app.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), function(req, res) {
});

// Logout route
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/campgrounds');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

app.listen(3000, function() {
    console.log('The YelpCamp app runs on PORT 3000');
});