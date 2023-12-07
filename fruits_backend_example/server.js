const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./models/fruits.js");
const jsxViewEngine = require("jsx-view-engine");

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

app.get("/", (req, res) => {
  res.send("this is my fruit root route");
});

// I - INDEX - dsiplays a list of all fruits
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

// S - SHOW - show route displays details of an individual fruit
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(port, () => {
  console.log("listening");
});
