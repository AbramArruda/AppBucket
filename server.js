// Add express server logic
const express = require("express");

const app = express();

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
