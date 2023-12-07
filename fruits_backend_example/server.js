const express = require("express");
const app = express();
const fruits = require("./models/fruits.js");
const jsxViewEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// moving the fruits to models/fruits.js in order to have compartmentalized code
// we are using MVC - models-views-controllers - architecture
// https://developer.mozilla.org/en-US/docs/Glossary/MVC
// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

app.use((req, res, next) => {
  console.log("Middleware: I run for all routes");
  next();
});
//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

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
  res.send("this is my fruits root route");
});

// I - INDEX - dsiplays a list of all fruits
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render("Index", { fruits: fruits });
});

app.get("/fruits/new", (req, res) => {
  res.render("New");
});

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);

  console.log(fruits);
  res.redirect("/fruits");
});
// S - SHOW - show route displays details of an individual fruit
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("Show", {
    // second parameter must be an object
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});

app.listen(3000, () => {
  console.log("listening");
});
