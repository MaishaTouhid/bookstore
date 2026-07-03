const mysql = require("mysql2");

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "mbtworthy"

});

db.connect((err) => {

    if (err) throw err;

    console.log("MySQL Connected");

    db.query("CREATE DATABASE IF NOT EXISTS book_management");

    db.query("USE book_management");

    db.query(`

    CREATE TABLE IF NOT EXISTS books(

        id INT AUTO_INCREMENT PRIMARY KEY,

        title VARCHAR(100),

        author VARCHAR(100),

        publisher VARCHAR(100),

        price DOUBLE,

        quantity INT

    )

    `);

});

module.exports = db;