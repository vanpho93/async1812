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

async function tinhDienTich(a, b, h) {
    const tong = await cong(a, b);
    const tich = await nhan(tong, h);
    const kq = await chia(tich, 2);
    return kq;
}

const start = Date.now();

// tinhDienTich(4, 5, 6)
// .then(kq => {
//     console.log(kq);
//     console.log(Date.now() - start);
// })
// .catch(err => console.log(err));

// (4 + 5) * 6 / 2
Promise.all([ cong(4, 5), chia(6, 2)])
.then(results => nhan(results[0], results[1]))
.then(kq => {
    console.log(kq);
    console.log(Date.now() - start);
})
.catch(err => console.log(err));
