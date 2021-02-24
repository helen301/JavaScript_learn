const age = prompt('How old are you?');

if (age >= 0 && age <= 2) {
    console.log('Child');
} else if (age >= 12 && age <=18) {
    console.log('Teenager');
} else if (age >=18 && age <= 60) {
    console.log('Adult');
} else {
    console.log('Pensioner');
}



