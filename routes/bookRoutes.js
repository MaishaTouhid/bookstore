const express = require("express");

const router = express.Router();

const bookController = require("../controllers/bookController");

// Form Page
router.get("/", bookController.showForm);

// Insert Book
router.post("/submit", bookController.addBook);

// Show All Books
router.get("/books", bookController.showBooks);

// Delete Book
router.get("/delete/:id", bookController.deleteBook);

// Edit Page
router.get("/edit/:id", bookController.editBook);

// Update Book
router.post("/update/:id", bookController.updateBook);

module.exports = router;