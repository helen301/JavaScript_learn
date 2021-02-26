const string= prompt('Enter a word');

let word = string.split('').reverse().join('');

if (word) {
    console.log('Your word is palidrom', word);
} else {
    console.log('Your word is not a palidrom');
}