# Functions 

## There are two ways to declare a function

### 1. With function keyword

    It reques us to provide a name for this function. Following example has a function name 'addTowNumbers'.

    function addTwoNumbers(num1, num2) {

        const sum = num1 + num2;
        return sum;
    }

### 2. Without function keyword

We don't provide a name for such function.

(num1, num2) => {

    const sum = num1 + num2;
    return sum;
}

This type of function is also called annonymous function.
We can keep annonymous function in a variable.
We can pass annonymous function as argument of another function.

