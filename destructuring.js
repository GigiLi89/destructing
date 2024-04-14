/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// ES6 also provides a more elegant way to assign  variables, called destructuring assignment.  
// Instead of referencing each element of the  array by its index and declaring each variable individually,   
// we can use destructuring  to do it all on a single line of code.  
// The same is true for unpacking - or destructuring  - the properties and values of JavaScript objects.  



// Destructuring arrays

let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

//ES6 automatically assignes the variables in the order they come.

// Without destructuring you would have had to write out every single variable like below:
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];


// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

// ES6 will assign the first to so the result will be: english french
// You can also skip languages, for e.g. if Mary speaks spanish and german:

let [,,maryNative, marySecondary] = languages;
// by putting two commas before maryNative you'll skip the first two. You'll have a comma to skip english and one to skip french.
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sara: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);