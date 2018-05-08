var body = document.querySelector("body");
body.style.fontFamily = "Arial", "sans-serif";

var tag = document.getElementById("highlight");
tag.style.color = "red";

var tags = document.getElementsByClassName("bolded");
//tags.style.color = "green";
console.log(tags[0]);

var lists = document.getElementsByTagName("li");
// lists.style.color = "yellow";
console.log(lists);

var h1s = document.getElementsByTagName("h1");
console.log(h1s);

var allH1 = document.querySelector("h1");
allH1.style.color = "yellow";

//--------------------------------------------

var id = document.querySelector("#highlight");
id.style.color = "lightblue";

var listItem = document.querySelector(".bolded");
listItem.style.color = "orange";

var allH1 = document.querySelectorAll("h1");
//allH1.style.color = "purple";