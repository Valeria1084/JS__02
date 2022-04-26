
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a,b,c,) => {
    if(a < b & a < c){
        console.log(a)
    }else if (b < a & b < c){
        console.log(b)
    }else if (c < a & c < b){
        console.log(c)
    }
}
min( 50,20,10)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a,b,c,) => {
    if(a > b & a > c){
        console.log(a)
    }else if (b > a & b > c){
        console.log(b)
    }else if (c > a & c > b){
        console.log(c)
    }
}
max( 50,20,10)

// - створити функцію яка повертає найбільше число з масиву
let numbers = [30,40,24,54,67,89,23,56,87]
let arrayMax = (numMax) => {
    let max = numMax[0]
    for (e of numMax){
        if(e > max){
            max = e
        }
    }
    return max
}
console.log(arrayMax(numbers));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let sumElement  = (sumN) => {
    let sum = 0
    for (e of sumN){
        sum += e
        sum = e + sum
    }
    return sum/sumN.length
}
console.log(sumElement(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// - створити функцію яка заповнює масив рандомними числами
let ran = (length) => {
    let arryNew = []
    for ( let i = 0 ; i < length; i++){
    arryNew.push(Math.floor(Math.random()))
    }
    //return arryNew.(?sort?)((a,b )=> a - b)

}
let result = random(10,7)

console.log(result);

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.