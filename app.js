const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/about", (req, res) => {
  res.send("THE ABOUT PAGE!!");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  res.send("Server received the email data...");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});


