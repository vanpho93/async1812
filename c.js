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
    const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return fn(new Error('Type error.'), null);
    if (b === 0) return fn(new Error('Divide by 0.'), null);
    request(url, (err, res, body) => {
        if (err) return fn(err, null);
        return fn(null, body);
    });
}

// (4 + 5) * 6 / 2
// cong(4, 5, (errTong, tong) => {
//     if (errTong) return console.log(errTong);
//     nhan(tong, 6, (errNhan, tich) => {
//         if (errNhan) return console.log(errNhan);
//         chia(tich, 2, (errChia, kq) => {
//             if (errChia) return console.log(errChia);
//             console.log(kq);
//         });
//     });
// });

function tinhDienTich(a, b, h, cb) {
    cong(a, b, (errTong, tong) => {
        if (errTong) return cb(errTong);
        nhan(tong, h, (errNhan, tich) => {
            if (errNhan) return cb(errNhan);
            chia(tich, 2, (errChia, kq) => {
                if (errChia) return cb(errChia);
                cb(null, kq);
            });
        });
    });
}

tinhDienTich(4, 5, 6, (err, square) => {
    if (err) return console.log(err);
    console.log(square);
});
