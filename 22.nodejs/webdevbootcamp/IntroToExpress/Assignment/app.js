var express = require('express');
var app = express();

// ROUTES
app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get('/repeat/:word/:times', function(req, res) {
    var word = req.params.word;
    var times = Number(req.params.times);
    var result = '';
    if(times) {
        for(var i = 0; i < times; i++) {
            result += word + ' ';
        }
    } else {
        result = 'That\'s not a number';
    }
    res.send(result);
});

// CATCH ALL ROUTES
app.get('*', function(req, res) {
    res.send('Sorry, page not found... What are you doing with your life?');
});

// START SERVER
app.listen(3000, function() {
    console.log('SERVER HAS STARTED ON PORT 3000');
});