const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  // todo: add validation
  title: String,
  authors: [],
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
