var url = "https://developer.mozilla.org/nl/docs/Web/Events";
var events = document.querySelectorAll("tr td code a");
var count = 0;

for(var i = 0; i < events.length; i++) {
	console.log(events[i].innerHTML);
	count++;
}