const request = require('request');

function cong(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(url, (err, res, body) => {
            if (err) return reject(err);
            return resolve(body);
        });
    });
}

function nhan(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(url, (err, res, body) => {
            if (err) return reject(err);
            return resolve(body);
        });
    });
}

function chia(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        if (b == 0) return reject(new Error('Divide by zero.'));
        request(url, (err, res, body) => {
            if (err) return reject(err);
            return resolve(body);
        });
    });
}

cong(4, 5)
.then(result => console.log(x))
.catch(err => console.log(q))
.catch(err => console.log(err))
.then(a => console.log(a));
