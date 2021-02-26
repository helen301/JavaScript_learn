//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function MaxMin(min, max) {
    let sum = 0;
    let result;
    
    while (min < max) {
        for (let i = 1; i < max - 1; i++) {
            result = max % i;
            if(result === 0) {
                sum += i;
            }
        }
            if(max === sum) {
                return max;
            } else {
                return false;
            }
        }
    }

    console.log(MaxMin(0, 28));