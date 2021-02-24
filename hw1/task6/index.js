const currencyConverter = parseInt(prompt('Please enter a sume'));

const currency = prompt('Choose currency you would like to exchange');

const euro = 33.9122;

const uan = 27.8021;

const azn = 0.59;

const answer = 'EUR';

const answer = 'UAN';

const answer = 'AZN';


if(answer === 'EUR') {
    console.log(currencyConverter *euro);
} else if(answer === 'UAN') {
    console.log(currencyConverter *uan);
} else {
    console.log(currencyConverter *azn);
}


