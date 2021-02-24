//Запросить у пользователя число и вывести все делители этого числа.

let number = parseInt(prompt('Enter a number'));

let divisor = Number();

for(let i =0; i <= number; i++) {
    if(number % divisor === 0) {
        console.log(divisor);
    }
}