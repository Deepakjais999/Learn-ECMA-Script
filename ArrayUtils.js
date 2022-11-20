const numberList = [2, 5, 6];

console.log(numberList);

numberList.push(8);


console.log(numberList);

// Removes last element
numberList.pop();

console.log(numberList);

numberList.shift();

console.log(numberList);

function print(element, index) {
    console.log(`Result of index ${index} is ${element + 2}`);
}

numberList.forEach(print);

numberList.forEach((e) => {
    console.log(`Element is ${e}`);
});

numberList.push(1);
numberList.push(2);

console.log(numberList);

numberList.sort();

console.log(numberList);