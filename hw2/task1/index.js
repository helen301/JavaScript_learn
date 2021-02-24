//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

const number = parseInt(prompt('Enter a number'));

let sum = 0;

for (let i = 0; i <= number; i++) {
    sum += i;
}

console.log(sum);
