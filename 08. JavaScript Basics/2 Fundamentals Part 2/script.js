// 1

function troubleshooting() {
    const a1 = 1;
    const b1 = 1;

    let result;

    result = a1 + b1; // result was composed as 2 strings and returned 11 instead of 2

    return result;
};

console.log(troubleshooting())

// exercise 2
let number = 11;

function numberChecker () {
    if(number >= 10) {
        return true;
    } else {
        return false;
    }
}


console.log(numberChecker());


// exercise 3

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;

console.log(a, b, c, d, e)


// exercise 4

let firstName = "Razz";
let lastName = "Man";
let currentYear = new Date().getFullYear();
let birthYear = 1988;

let fullName = `${firstName} ${lastName} `;
let age = currentYear - birthYear;

let greeting = `Greetings ${fullName}your age is ${age} years old!`;

console.log(greeting);