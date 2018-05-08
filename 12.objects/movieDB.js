movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]

document.write("<h3>" + "With for loop" + "</h3>");
function displayMovies() {
    for(var i = 0; i < movies.length; i++) {
        if(movies[i].hasWatched === true) {
            document.write("You have watched " + movies[i].title + " " + movies[i].rating + " stars" + "<br>");
        } else {
            document.write("You have not seen " + movies[i].title + " " + movies[i].rating + " stars" + "<br>");
        }
    }
}
    
displayMovies();

document.write("----------------------------------------------------------------<br>");

document.write("<h3>" + "With forEach loop" + "</h3>");
movies.forEach(function(movie) {
    document.write(buildString(movie));
})

function buildString(movie) {
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars <br>";
    return result;
}