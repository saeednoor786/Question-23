/*Q:23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test 
and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car = "subaru";

console.log("\n----> 5 Test evaluates to True :");

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 2
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

// Test 3
console.log("Is the length of car > 4? I predict True.");
console.log(car.length > 4 );

// Test 4
console.log("Is the length of car <= 6?I predict True.");
console.log(car.length <= 6);

// Test 5
console.log("does car starts with 's'? I predict True.");
console.log(car.startsWith('s'));

console.log("\n----> 5 Test evaluates to False :");

// Test 1
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');

// Test 2
console.log("Is car in UpperCase ? I predict False.");
console.log(car.toUpperCase()=== car);

// Test 3
console.log("Is car == 'audi'? I predict False.");
console.log(car === 'audi' );

// Test 4
console.log("Is car === 'Shabru'?I predict False.");
console.log(car === 'Shabru');

// Test 5
console.log("Is the car length of car === 7 ? I predict False.");
console.log(car.length === 7);

