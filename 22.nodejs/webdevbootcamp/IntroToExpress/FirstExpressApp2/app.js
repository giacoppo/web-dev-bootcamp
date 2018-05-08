var express = require('express');
var app = express();

// ROUTES
// "/" => "Hi teher!"
app.get('/', function(req, res) {
   res.send('Hi there!'); 
});

// '/bye' => "Goodbye!"
app.get('/bye', function(req, res) {
    res.send('Goodbye!!');
});

// "/dog" =? "MEOW!"
app.get('/dog', function(req, res) {
    console.log('SOMEONE MADE A REQUEST TO /DOG');
    res.send('MEOW!');
});


// Tell Express to listen for requests (start server)
// On cloud9
// app.listen(process.env.PORT, process.env.IP, function() {
//    console.log('Server has started!!!');
// });
// On localhost
app.listen(3000, function() {
    console.log('Server has started on port 3000');
});