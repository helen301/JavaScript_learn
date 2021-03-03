const car = {
    manufacturer: "Skoda",
    model: "Fabia",
    year: 2021,
    speed: "150km"
}

function time(n) {
    let distance = n / this.speed;

    if(distance > 4) {
        const change = Math.trunc(distance / 5) ;
        return distance + change;
    }

        return distance;

}

console.log(car);

console.log(this.time(100));