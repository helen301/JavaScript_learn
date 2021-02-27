//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function toSquare(width, length) {
    let squareRectangle = width * length;
    let squareQuadrate = Math.pow(length, 2);

     if(isNaN(width) && isNaN(length)) {
         return squareRectangle;
     } else if(isNaN(length)) {
         return squareQuadrate;
     } 
}

console.log(toSquare(5,5));
console.log(toSquare(6));