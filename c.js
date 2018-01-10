const request = require('request');

function cong(a, b, fn) {
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return fn(new Error('Type error.'), null);
    request(url, (err, res, body) => {
        if (err) return fn(err, null);
        return fn(null, body);
    });
}

function nhan(a, b, fn) {
    const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return fn(new Error('Type error.'), null);
    request(url, (err, res, body) => {
        if (err) return fn(err, null);
        return fn(null, body);
    });
}

function chia(a, b, fn) {
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return fn(new Error('Type error.'), null);
    if (b === 0) return fn(new Error('Divide by 0.'), null);
    request(url, (err, res, body) => {
        if (err) return fn(err, null);
        return fn(null, body);
    });
}

// (4 + 5) * 6 / 2
