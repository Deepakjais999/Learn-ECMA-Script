let a = 20;
let b = 30;

// Default Parameter
function printSumOfAll(x = 1, y = 1) {
    let c = a + b + x + y;
    console.log("From Named Function: " + c);
}

printSumOfAll(5);

// Annonymous Function
let sumAll = (x = 1, y = 1) => {
    let d = a + b + x + y;

    console.log("From Annonymous Function-1: " + d);
};

//  Calling sumAll
sumAll(10);


//  Assigning new function to sumAll.
sumAll = (x = 5, y = 5) => {
    let e = a + b + x - y;

    console.log("From Annonymous Function-2: " + e);
};

//  Calling sumAll
sumAll(10);
