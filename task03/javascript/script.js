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