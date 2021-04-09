var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    for (let i in data) {
        try {
            var cname = data[i].name;
            var latlong = data[i].latlng;
            if (latlong === 0) throw new Error('latitude of the particular location not found');
            print(cname, ...latlong);
        }
        catch (e) {
            console.log(e);
        }
    }

};

var print = function (cname, lat, long) {
    var key = '4622db93819a0e2d15afc32346682513';
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
    var weather = new XMLHttpRequest();
    weather.open('GET', url, true);
    weather.send();
    weather.onload = function () {
        try {
            var result = JSON.parse(this.response);
            console.log(`${cname}:${result.main.temp}`);
        }
        catch (e) {
            console.log(e);
        }
    }
}








