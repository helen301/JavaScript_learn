//Написать функцию, которая вычисляет факториал переданного ей числа.

function toFactorial(n) {
    let result = n;

    if(n === 0){
        return 1;
    } else if(n < 1) {
        return false;
    } else {
        while (n >=2) {
            result = result * (n-1);
            n--;
        }
        return result;
    }   
}

console.log(toFactorial(5));