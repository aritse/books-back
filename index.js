const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

// todo: configure cors, port, host, database etc for heroku
const app = express();
// app.use(
//   cors({
//     origin: ["http://localhost:3000"]
//   })
// );
app.use(
  cors({
    origin: ["https://ari-book-search.herokuapp.com"]
  })
);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

const routes = require("./routes");
app.use("/api", routes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`express app is listening on ${port}`));
