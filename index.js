require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Pablo Arias",
    title: "Nodejs Course",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Pablo Arias",
    title: "Nodejs Course",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Pablo Arias",
    title: "Nodejs Course",
  });
});

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(PORT, () => {
  console.log(`App listening at PORT:${PORT}`);
});
