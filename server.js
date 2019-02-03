// Add express server logic
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("viewEngine, handlebars");

//How middleware works
app.use(function(req, res, next) {
  console.log(Date.now());
  req.name = "Abram Arruda";
  next();
});
//^^^^ Middleware can make changes to the request and response objects

//HTML Routes
app.get("/", function(req, res) {
  res.send("INDEX");
});

app.get("/about", function(req, res) {
  res.send("ABOUT");
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on Port ${PORT}`);
});
//DATABASE Routes
