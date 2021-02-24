const string= prompt('Enter a word');

let word = string.split('').reverse().join('');

if (word) {
    console.log(word);
}