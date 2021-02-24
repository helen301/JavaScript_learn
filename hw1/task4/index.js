const year = parseInt(prompt('Enter a year'));


if ((year % 400 === 0) || (year % 4 === 0) || (year % 100 === 0)) {
    console.log('Your year is leap');
} else {
    console.log('Your year is not leap');
}