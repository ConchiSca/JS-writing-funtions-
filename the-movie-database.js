let myFavMovie = {
    title: "Jumpling Jack Flash",
    duration: 105,
    stars: ["Whoopi", "Stephen", "John"],
}

function movieDescription(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(', ') + ".");
}

movieDescription(myFavMovie);