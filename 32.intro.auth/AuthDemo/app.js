var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    User                    = require('./models/user'),
    LocalStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost/auth_demo_app');
var app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('express-session')({
    secret: 'Blackie is a lightning fast Ninja Cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =============================
// ROUTES
// =============================

app.get('/', function(req,res) {
    res.render('home');
});

app.get('/secret', isLoggedIn, function(req,res) {
    res.render('secret');
});

// AUth Routes
// Show Sign up form
app.get('/register', function(req,res) {
    res.render('register');
});

// Handling user sign up
app.post('/register', function(req,res) {
    // res.send('REGISTER POST ROUTE');
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/secret');
        });
    });
});

// LOGIN ROUTES
// Render login form
app.get('/login', function(req,res) {
    res.render('login');
});

// Login logic - Middleware
app.post('/login',
  passport.authenticate('local', {
    //   succesRedirect: '/secret',
      failureRedirect: '/login'
  }),
  function(req, res) {
    // If this function gets called, authentication was successful.
    res.redirect('/secret');
  }
);

app.get('/logout', function(req, res) {
    // res.send('LOGOUT');
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

app.listen(3000, function() {
    console.log('App running on port 3000');
});