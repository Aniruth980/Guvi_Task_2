/ step 1. create a request variable
let requestURL = 'https://restcountries.eu/rest/v2/all';
let request = new XMLHttpRequest();

// step 2.create a new http connection
request.open('GET', requestURL, true);

// step 3. set expected response type and send request
request.responseType = 'json';
request.send();

// step 4. load response and print country name
request.onload = function () {
    const restCountries = this.response;
    printCountryNames(restCountries);
}

function printCountryNames(restCountries) {
    for (let i in restCountries) {
        console.log(restCountries[i]['name']);
    }
}