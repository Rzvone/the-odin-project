function add7(number) {
    return number + 7;
}

console.log(add7(7));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 2));


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


console.log(capitalize('razvan'));


function lastLer(callback) {
    let last = callback[callback.length - 1];

    return last;
} 


console.log(lastLer(capitalize('razvan')));


const userNumber = 15;

for(let i = 1; i <= userNumber; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if(i % 3 === 0) {
        console.log('Fizz')
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    
}


