let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let btn = document.getElementById('btn');
let key = 'key';

let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem(key, JSON.stringify(user));
};

btn.onclick = () => {
    save(name.value, age.value);
}

//
let model =document.forms.carForm.mode;
let type = document.forms.carForm.type;
let volume = document.forms.carForm.volume;
let btnCar = document.getElementById('btnCar');
let item = 'kayCar'

let saveCar = (modelCar,typeCar,volumeCare) => {
    let newArr = JSON.parse(localStorage.getItem(item)) || []
    newArr.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(item,JSON.stringify(newArr))
}
btnCar.onclick = () => {
    saveCar(model.value,type.volume.value)
}
