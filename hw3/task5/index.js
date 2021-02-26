//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function PerfectNum(num) {
    let sum = 0;
    let result;

    for(let i = 1; i < num - 1; i++) {
        result = num % i;
        if(result === 0) {
            sum += i;
        }
    }
        if(num === sum) {
            return num;
        } else {
            return false;
        }
    }

console.log(PerfectNum(6));