const db = require("../config/db");

// Insert Book
exports.insertBook = (data, callback) => {

    const sql = `
    INSERT INTO books
    (title, author, publisher, price, quantity)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            data.title,
            data.author,
            data.publisher,
            data.price,
            data.quantity
        ],
        callback
    );

};

// Show All Books
exports.getBooks = (callback) => {

    db.query("SELECT * FROM books", callback);

};

// Delete Book
exports.deleteBook = (id, callback) => {

    db.query(
        "DELETE FROM books WHERE id=?",
        [id],
        callback
    );

};

// Get One Book
exports.getBookById = (id, callback) => {

    db.query(
        "SELECT * FROM books WHERE id=?",
        [id],
        callback
    );

};

// Update Book
exports.updateBook = (id, data, callback) => {

    const sql = `
    UPDATE books
    SET
    title=?,
    author=?,
    publisher=?,
    price=?,
    quantity=?
    WHERE id=?
    `;

    db.query(
        sql,
        [
            data.title,
            data.author,
            data.publisher,
            data.price,
            data.quantity,
            id
        ],
        callback
    );

};

//search book
exports.searchBook = (keyword, callback) => {

    const sql = `
        SELECT *
        FROM books
        WHERE
            title LIKE ?
            OR author LIKE ?
    `;

    db.query(
        sql,
        [`%${keyword}%`, `%${keyword}%`],
        callback
    );

};