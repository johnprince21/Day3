Task 1 :


let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

let a = Object.keys(obj1);
let b = Object.keys(obj2);
//Getting the keys of both obj1 and obj2

let comObj1 = a.sort();
let comObj2 = b.sort();
//Now sorting it in order

//Then comparing the sorted variables comObj1, comObj2.
if (comObj1 = comObj2){
    console.log(true);
}else {
    console.log(false);
}

Task 2 :

function reqListener() {
    const countryArr = JSON.parse(this.responseText);
    for(let country of countryArr)
        {
            console.table(country.flags.png);
        }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

  Task 3 :

  function reqListener() {
    const CountryArr =JSON.parse(this.responseText);
    console.log(CountryArr);
    for(let country of CountryArr) {
        console.table(country.name.common);
        console.table(country.region);
        console.table(country.subregion);
        console.log(country.population)
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  console.table(country.region);
