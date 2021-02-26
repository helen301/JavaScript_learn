//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function time(hours, minutes, seconds) {
    let result = hours + ":" + minutes + ":" + seconds;
    let res = hours;

    if (result) {
        return result;
    } else if (res) {
        return res = hours + ":" + 00 + ":" + 00;
    }
}

console.log(time(16));