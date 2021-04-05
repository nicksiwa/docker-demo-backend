const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/messages", (req, res) => {
  res.json([
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "React" },
    { id: 4, message: "Docker" },
  ]);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
