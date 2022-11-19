const weeks = ['SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];

const [ sat, sun, mon, tue, wed, thu, fri ] = weeks;

// lagacy way
let weekends1 = [sat, sun];
let weekdays1 = [mon, tue, wed, thu, fri];

console.log(`weekends1: ${weekends1}`);
console.log(`weekdays1: ${weekdays1}`);


// using rest operator
const [sat1, sun1, ...weekdays2] = weeks;
const weekends2 = [sat1, sun1];

console.log(`weekends2: ${weekends2}`);
console.log(`weekdays2: ${weekdays2}`);


function averageAll(name, ...numbers) {
    // Hello {name}, total of {length} numbers is {total} and average is {avg}.

    const countOfNumbers = numbers.length;
    let total = 0;

    for(let i=0; i < countOfNumbers; i++) {
        total = total + numbers[i];
    }

    const avg = total/countOfNumbers;

    console.log(`Hello ${name}, total of ${countOfNumbers} numbers is ${total} and average is ${avg}`);
}

averageAll("Deepak1", 2, 4, 6, 8);

averageAll("Deepak2", 1, 3);

