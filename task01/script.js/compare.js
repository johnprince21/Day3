
let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

let a = Object.keys(obj1);
let b = Object.keys(obj2);

let comObj1 = a.sort();
let comObj2 = b.sort();

if (comObj1 = comObj2){
    console.log(true);
}else {
    console.log(false);
}