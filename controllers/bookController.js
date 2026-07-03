const Book = require("../models/bookModel");

// Show Form
exports.showForm = (req, res) => {

    res.render("form");

};

// Add Book
exports.addBook = (req, res) => {

    Book.insertBook(req.body, (err) => {

        if (err) throw err;

        res.redirect("/books");

    });

};

// Show All Books
exports.showBooks = (req, res) => {

    Book.getBooks((err, result) => {

        if (err) throw err;

        res.render("result", {
            books: result
        });

    });

};

// Delete Book
exports.deleteBook = (req, res) => {

    Book.deleteBook(req.params.id, (err) => {

        if (err) throw err;

        res.redirect("/books");

    });

};

// Edit Form
exports.editBook = (req, res) => {

    Book.getBookById(req.params.id, (err, result) => {

        if (err) throw err;

        res.render("edit", {
            book: result[0]
        });

    });

};

// Update Book
exports.updateBook = (req, res) => {

    Book.updateBook(
        req.params.id,
        req.body,
        (err) => {

            if (err) throw err;

            res.redirect("/books");

        }
    );

};