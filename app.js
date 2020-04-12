const express = require("express");

const app = express();

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({message: "hello world"});
});

const port = 3000;
app.listen(port, () => {
  console.log(`
  starting server on ${port}
  go to http://localhost:3000
  `);
});
