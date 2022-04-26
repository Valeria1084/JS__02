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



