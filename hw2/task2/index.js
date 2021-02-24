let number1 = parseInt(prompt('Enter first number'));

let number2 = parseInt(prompt('Enter second number'));

while (number1 != number2) {
    if (number1 > number2) {
        number1 = number1 - number2;
    } else {
        number2 = number2 - number1;
    }
}

console.log(number1);