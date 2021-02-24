const number = prompt('Enter a number');

let number1 = Number();
let number2 = Number();
let number3 = Number();

if ((number1 === number2) || (number2 === number3) || (number1 === number3)) {
    console.log('You have match numbers');
} else {
    console.log('Your number is ok');
}
