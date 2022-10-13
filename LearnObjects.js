let emp = {};

emp.name = "Rahul Jaiswal";
emp.city = "Varanasi";
emp.dateOfJoining = '2011-02-01';

let stringOfEmp = JSON.stringify(emp);

console.log(stringOfEmp);

emp.address = {
    line1: "dsfasfs asdfsda",
    line2: "asfsdafsd",
    city: "Mumbai",
    pinCode: "221001",
    state: "MAharashtra",
};

emp.languages = ["Hindi", "English", "Gujrati"];

/*
Alternate way
emp.address = {};
emp.address.line1 = "afhsdfk asdfds";
emp.address.line2 = "sdfasdflsdf fsadf s";
emp.address.city = "Mumbai";
emp.address.pinCode = "221001";
emp.address.state = "Maharastra";
*/
stringOfEmp = JSON.stringify(emp);

console.log(emp);

console.log("Second Languate is " + emp.languages[1]);

console.log("Address is " + JSON.stringify(emp.address));

console.log('Name is ' + emp.name);
