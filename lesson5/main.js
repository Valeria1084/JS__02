
//1
function rectangle(a, b) {
    let s = a * b;
    return s;
}
console.log(rectangle(100, 100))
document.write('S ='+ ' ' + rectangle(100, 100) +  "<br/>")
//2
function circle(r){
    let radiys = (r ** 2) * 3.14
    return radiys
}
document.write('R ='+' ' + circle(8) +  "<br/>" )

//3
function  cylinder (h,r){
    let scylinder = 2 *3.14 * h * r
    return scylinder
}
document.write('S_cylinder =' + ' ' + cylinder(10,20) + "<br/>")

//4
arr = [ 'Оля','Лера','Валера','Вася','Юля','Женя','Надя','Давид','Кирилл',]
let arry = (arr) => {
    for (let i = 0 ; i < arr.length;i++){
        document.write('  ' + arr[i])
    }
}
arry(arr)
//5
let par = (text) => {
    document.write(`<p>${text}</p>`)
    document.write(`<hr>`)
    for(let i = 0;i <= 5;i++){
        document.write(`<p>${i} - ${text}</p>`)
    }
}
par('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi asperiores aut, delectus ducimus earum exercitationem fugit hic impedit ipsa iure magnam maxime nihil, possimus tempore temporibus veniam voluptatum')
//6
let ul = (text1) => {
    document.write(`<ul>`)
    document.write(`<li>${text1}`)
    document.write(`<li>${text1}`)
    document.write(`<li>${text1}`)
}
ul('Lera')

//7
let ul2 = (text2,number) => {
    document.write(`<ul>`)
    for(let i = 0 ; i < number; i++){
        document.write(`<li>${text2}</li>`)
    }
    document.write(`</ul>`)
}
ul2('valeria',5)
//8

let arry1 = ( arr1) => {
    document.write(`<ol>`)
    for (let i = 0 ; i < arr1.length;i++){
        document.write(`<li>${arr1[i]}</li>`)
    }
    document.write(`<ol>`)

}
arry1(['Ponomarenko',18,true])

//9

let array_ = [{id: 1, name: 'Valeria', age: 18}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Olga', age: 45}];
let objArray = (array) =>  {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
objArray(array_)

//10

let numbers = [30,40,24,54,67,89,23,56,87]
let arrayMax = (arrayNum) => {
    let max = arrayNum[0]
    for (let elen of arrayNum) {
        if (elen > max) {
            max = elen;
        }
    }
    return max
}
console.log(arrayMax(numbers));
//11

let sumElement = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
        sum = arrayElement + sum;
    }
    return sum;
}
console.log(sumElement(numbers))


//1
//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let sumElement1 = (array1) => {
    let sum = 0;
    for (let arrayElement of array1) {
        sum += arrayElement;
        sum = arrayElement + sum;
    }
    return sum/array1.length;
}
console.log(sumElement1(numbers))

//2
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let functRet = (arguments) =>{
    let min1 = arguments[0]
    let max1 = arguments[0]
    for ( let funcElem of arguments){
        if (funcElem > max1) max1 = funcElem
        if(funcElem < min1 ) max1 = funcElem
    }
    console.log("max1",max1)
    return min1

}
functRet([30,45,6,2,45,67,86,5,7,8,23,78,98,10,4,6,7,3,2,1,0,67])
//3
// створити функцію яка заповнює масив рандомними числами

let random = (arry) => {
    let a = []
    for (let i = 0;i < arry;i++){
        a.push(Math.random()*100)
    }
    return a
}
console.log(random(5));
//5

//4

let random_1 = (arr1,limit) =>{
    let b = []
    for( let i = 0 ; i < arr1;i++){
        b.push(Math.floor(Math.random()*limit))
    }
    return b
}
console.log(random_1(10, 5));
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


let f = (arr2) => {
    let temp = arr2[0]
    for (let i = 0, j = arr2.length - 1; i < j; i++, j--) {
        temp = arr2[j];
        arr2[j] = arr2[i];
        arr2[i] = temp;
    }
    return arr2
}
console.log(f([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));




//- Дано натуральное число n. Выведите все числа от 1 до n.
let d =(n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)

    }
}
d(13)


//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let twoN = (a,b) => {
    if (a < b){
        for (let i = a; i <= b;i++){
            console.log(i)
        }
    }else if (a > b) {
        for(let q = b;q <= a;q++){
            console.log(q)
        }
    }
}
twoN(20,30)


/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
*/
let index = (arry,n) =>{
    for(let i = 0;i < arry; i++ ){

    }
}

/*- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]
*/

let zeros = (arr) => {
    for (let i = 0 ,j = 0; i < arr.length;i++){
        if (arr[i] !== 0){
            [arr[j],arr[i] ] = [ arr[i],arr[j]]
            j++
        }
    }
    return arr
}
console.log(zeros([20, 2, 0, 3, 0, 4, 0, 50, 4, 0]));