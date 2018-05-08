var answer = prompt("Are we there yet?");

// Will run one time
// if(answer === "yes") {
//     alert("YAY, We made it!");
// } else {
//     var answer = prompt("Are we there yet?");
// }

// As a loop
// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }

// alert("YAY, We made it!");

// As a loop Version 2
while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("YAY, We made it!");
