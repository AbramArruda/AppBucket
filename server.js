// Add express server logic
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

//MAP global promise -- Getting rid of deprication warning
mongoose.Promse = global.Promise;
//Connect to mongoose
mongoose
  .connect("mongodb://localhost/appbucket-dev", {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Loade Idea Model
require("./models/Idea");
const Idea = mongoose.model("ideas");

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
//Add idea form route
app.get("/ideas/add", function(req, res) {
  res.render("ideas/add");
});

//Process form
app.post("/ideas", function(req, res) {
  let errors = [];

  if (!req.body.title) {
    errors.push({ text: "Please add a title" });
  }
  if (!req.body.details) {
    errors.push({ text: "Please add some details" });
  }

  if (errors.length > 0) {
    res.render("ideas/add", {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    res.send("passed");
  }
});
const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on Port ${PORT}`);
});

//DATABASE Routes
