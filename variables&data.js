// Running for 30 minutes burns 225 calories.
// Sam decided to run 30 minutes for 15 days.
// Store in a variable named caloriesPer30Minutes the number of calories burned for 30 minutes.
let caloriesPer30Minutes = 225; // Running for 30 minutes burns 225 calories.
// Count the number of times Sam will run for 15 days variable named numTimeSamRuns
let daysOfSamCycling = 15;
let totalcalriesBurned = daysOfSamCycling*caloriesPer30Minutes
console.log(daysOfSamCycling*caloriesPer30Minutes);
console.log(`Great work Sam after ${daysOfSamCycling} minutes of cycling everyday in 15 days, you lose total of ${totalcalriesBurned} calories`);

// Sam wants to save ₱10000 and he alrady saved ₱7500
// Store in variable named totalSamWantsToSave 
let totalSamWantsToSave = 10000
// Store in variable samCurrentSavings
let samCurrentSavings = 7500
let percent = 100;

// Compute how much Sam needs to save to have ₱10000
let samNeedsToSave = ((totalSamWantsToSave - samCurrentSavings)/percent)
console.log((totalSamWantsToSave - samCurrentSavings)/percent);
console.log(`Thank you for your discipline and hard work, Sam! You are now ${samNeedsToSave}% away from 
your goal of saving ₱${totalSamWantsToSave}.`)