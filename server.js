// Add express server logic
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

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
