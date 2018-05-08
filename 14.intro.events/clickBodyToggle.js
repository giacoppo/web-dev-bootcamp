var button = document.querySelector("button");
var h1 = document.querySelector("h1");
var isPurple = false;
document.body.style.fontFamily = "Arial, sans-serif";

// button.addEventListener("click", function() {
//     if(isPurple) {
//         document.body.style.background = "white";
//         h1.style.color = "black";
//         button.textContent = "Click Me!";
//     } else {
//         document.body.style.background = "purple";
//         h1.style.color = "white";
//         button.textContent = "Click Me Again!";
//     }
//     isPurple = !isPurple;
// });

button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
    h1.classList.toggle("purple");
});


