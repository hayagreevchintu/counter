const express = require("express");
const app = express();

const ejs = require("ejs");
require('dotenv').config({path: __dirname + '/.env'});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});