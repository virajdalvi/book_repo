if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config({ path: "./.env" });
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const app = express();

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const booksRouter = require("./routes/books");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongo DB ..."));

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", booksRouter);
app.listen(process.env.PORT || 3000);
