var bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    expressSanitizer = require('express-sanitizer'),
    mongoose        = require('mongoose'),
    express         = require('express'),
    app             = express();

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model('Blog', blogSchema);

// Create Test Blog
// Blog.create({
//     title: 'Test Blog',
//     image: 'https://pixabay.com/get/ea36b8062dfd093ed1584d05fb1d4e97e07ee3d21cac104497f6c271a6edbcbb_340.jpg',
//     body: 'HELLO THIS IS A BLOG POST!'
// });

// RESTFUL ROUTES
app.get('/', function(req, res) {
    res.redirect('/blogs');
});

// INDEX ROUTE
app.get('/blogs', function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log('ERROR!');
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get('/blogs/new', function(req, res) {
    res.render('new');
});

// CREATE ROUTE
app.post('/blogs', function(req, res) {
    // Create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render('new');
        } else {
            // Then, redirect to index
            res.redirect('/blogs');
        }
    });
});

// SHOW ROUTE
app.get('/blogs/:id', function(req, res) {
    Blog.findById(req.params.id, function(err, showPost) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.render('show', {blog: showPost});
        }
    });
    //res.send('SHOW PAGE!');
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
    Blog.findById(req.params.id, function(err, showPost) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', {blog: showPost});
        }
    });
});

// UPDATE ROUTE
app.put('/blogs/:id', function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
    //res.send('UPDATE ROUTE');
});

// DELETE ROUTE
app.delete('/blogs/:id', function(req, res) {
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
    //redirect somewhere
    //res.send('DESTROY ROUTE');
});

app.listen(3000, function() {
    console.log('Blog App Running on PORT 3000');
});