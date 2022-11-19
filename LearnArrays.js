// Array creation
let x = [10, 20, "Deepak", 13.2];

console.log(x[2]);

//  Lagacy way of extracting values in a variable.
let a, b, c, d;
a = x[0];
b = x[1];
c = x[2];
d = x[3];

//  Destructure of Array
let [ e, f, g, h ] = x;

console.log(`e: ${e}, f: ${f}, g: ${g}, h: ${h}`);