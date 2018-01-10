const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getTemp(cityName, fn) {
    request(URL + cityName, (err, res, body) => {
        if (err) return fn(err, null);
        const obj = JSON.parse(body);
        if (!obj.main) return fn(new Error('Khong tim thay thanh pho'), null);
        fn(null, obj.main.temp);
    });
}

getTemp('ascdjahsd', (err, temp) => {
    if (err) console.log(err.message);
    console.log(temp);
});
// getTemp('Tokyo', t => console.log('Temp: ' + t));
