var btn = document.querySelector("button");
var reset = document.querySelector("#reset");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");

body.style.fontFamily = "Arial, sans-serif";

btn.addEventListener("click", function() {
    body.style.background = "purple";
    h1.style.color = "white";
})

reset.addEventListener("click", function() {
    body.style.background = "white";
    h1.style.color = "black";
})