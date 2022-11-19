const firstName = "Deepak";
const lastName = "Jaiswal";
const empId = 220;

// Hello "firstName". You belongs to "lastName"'s family. Your emaployee-id is empId.

// Lagacy way of building message. Using string concatination.
const message1 = 'Hello ' + firstName + '. You belongs to ' + lastName + "'s family. Your employee-id is " + empId;

console.log("Message 1: " + message1);


const message2 = `Hello ${firstName}. You belongs to ${lastName}'s family. Your employee-id is ${empId}.`;

console.log(`Message 2: ${message2}`);
