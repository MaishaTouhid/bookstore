const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

// Form Page
router.get("/",controller.showForm);

// Insert Book
router.post("/submit",controller.addBook);

// Show All Books
router.get("/books",controller.showBooks);

// Delete Book
router.get("/delete/:id",controller.deleteBook);

// Edit Page
router.get("/edit/:id",controller.editBook);

// Update Book
router.post("/update/:id",controller.updateBook);

module.exports = router;