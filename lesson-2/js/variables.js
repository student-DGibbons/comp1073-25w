
/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Dylan";
myAge = 30;


// General rule: If you can use a constant (const), use it; otherwise, use let (i.e., mutable var)
// Constants have to have a value when initialized (lets can initially be empty)
const myJob = "Editor";

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myAge = 21;
myName = "Thomas";

// STEP 4: Variable types (use typeof in the console)
// Numbers

let numCars = 5;
let manufacturer = "Honda";


// Strings (use '' or "")
let typeCar = `2005 ${manufacturer}`;
console.log(typeCar);
// Booleans
let iAmTired = true;
// Arrays
let myNameArray = ["Dylan", "Reginald", "Thomas"];
let myNumArray = [15, 24, 12, 1];
let myMixedArray = ["Dylan", 28, false, myNameArray];
// Objects
let myDog = {
    name: "Rover",
    breed: "Bull Mastiff",
    age: 3,
    size: "Large"
};
// STEP 5: Typing (JavaScript is a loosely-typed language)
console.log(typeof(myDog));


