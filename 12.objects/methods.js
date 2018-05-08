var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y) {
        return x + y;
    }
}

function addNumbers(a,b) {
    calc = obj.add(a,b);
    document.write(calc);
}

addNumbers(10,5);

document.write("<br>--------------------------------------------------------------------<br>");

var comments = {};

comments.data = ["Good Job!","Bye","Lame..."];

function print(arr) {
    arr.forEach(function(el) {
        document.write(el + "<br>");
    });
}

print(comments.data);

document.write("<br>--------------------------------------------------------------------<br>");

comments.print = function() {
    this.data.forEach(function(el) {
        document.write(el + "<br>");
    });
}

comments.print();