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
// (4 + 5) * 6 / 2

function tinhDienTich(a, b, h) {
    return cong(a, b)
    .then(tong => nhan(tong, h))
    .then(tich => chia(tich, 2))
}

tinhDienTich(4, 5, 12)
.then(kq => console.log(kq))
.catch(err => console.log(err))
