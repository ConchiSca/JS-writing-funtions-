function calculateSupply(age, dailyAmount) {
    let maxAge = 99;
    let totalNeeded = (dailyAmount * 365) * (maxAge - age);
    console.log("You will need " + totalNeeded + 
    " chocolate bars to last you until the ripe old age of "
     + maxAge);
}

calculateSupply(34, 3);
calculateSupply(24, 5);
calculateSupply(65, 2);

