const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getTemp(cityName, fn) {
    request(URL + cityName, (err, res, body) => {
        if (err) return console.log(err);
        const obj = JSON.parse(body);
        fn(obj.main.temp);
    });
}

getTemp('Berlin', console.log);
getTemp('Tokyo', t => console.log('Temp: ' + t));
