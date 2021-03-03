const shoppingList = ['Fruits' , 'Bread', 'Sweets', 'Milk'];

const newArr = shoppingList.reverse();

const Newlength = shoppingList.unshift('Berries') ;

const fruits = {
    name: 'Banana',
    quantity: 5,
    buy: 'yes',
}

const bread = {
    name: 'Baguette',
    quantity: 2,
    buy: 'yes',
}

const sweets = {
    name: 'Cake',
    quantity: 1,
    buy: 'no',
}

const milk = {
    name: 'Almond milk',
    quantity: 1,
    buy: 'no',
}

console.log(newArr);


function buynotbuy(name) {
    let check = shoppingList.name;

    if (check) {
        return check + 'buy';
    }
}

console.log(buynotbuy(fruits.name));