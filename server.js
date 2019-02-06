// Add express server logic
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

//Connect to mongoose
mongoose.connect("mongodb://localhost/appbucket-dev", {
  useMongoClient: true
});

//express-handlebars middleware
//tells the system that we want to use the handlebars template engine and set the default layout to main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//HTML Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on Port ${PORT}`);
});

//DATABASE Routes
