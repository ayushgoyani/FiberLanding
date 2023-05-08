const express = require("express");
const app = express();
const path = require("path");

// link to public folder
const pathSet = path.join(__dirname, "../public");
app.use(express.static(pathSet));

// homepage 
app.get("/", (req, res) => {
  res.send();
});

app.listen(3000, () => {
  console.log("Server starting port on 3000");
});
