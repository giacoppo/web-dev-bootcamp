var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    alert("I have been clicked");
});

h1.addEventListener("click", function() {
    h1.style.backgroundColor = "orange";
});

document.querySelector("ul").addEventListener("click", function() {
    console.log("YOU CLICKED THE UL!");
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "red";
    })
}

var button = document.querySelector("button");
button.addEventListener("click", changeText);
function changeText() {
    button.textContent = "I have been clicked";
}
