import fs from 'fs';

const address = fs.readFileSync('./address.json');

console.log(address);
