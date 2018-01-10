const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

request(URL + 'Tokyo', (err, res, body) => {
    if (err) return console.log(err);
    console.log(body);
});
