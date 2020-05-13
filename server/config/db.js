const mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'ranch0104',
    database : 'caringrobot'
});

module.exports = db;