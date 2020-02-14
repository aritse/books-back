const express = require("express");
const router = express.Router();

const db = require("./models");

router.post("/books", ({ body }, res) => {
  db.Book.create(body).then(book => res.json(book));
});

router.get("/books", (req, res) => {
  db.Book.find({}).then(books => res.json(books));
});

router.delete("/books/:id", (req, res) => {
  db.Book.remove({ _id: req.params.id }).then(book => res.json(book));
});

module.exports = router;
