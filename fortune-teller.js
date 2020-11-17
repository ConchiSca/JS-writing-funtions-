function tellFortune(jobTitle, location, partner, numberKids) {
    let future = "you will be a " + jobTitle + " in " + location + 
    " and married to " + partner + " with " + numberKids + " kids.";
    console.log(future);
}

tellFortune("doctor", "London", "John", 3);
tellFortune("programmer", "Utrecht", "Jaap", 2);
tellFortune("artist", "Madrid", "Juan", 2);