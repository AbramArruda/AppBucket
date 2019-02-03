const express = require("express");

const app = express();

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
