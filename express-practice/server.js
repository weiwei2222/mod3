// ===== Load express =====
const express = require("express");

// ===== Create our express app ======
const app = express();

// ===== configure the app (app.set) =====

// ========== THIS IS ALL VIEW ENGINE FUNCTIONALITY ===========
const fs = require("fs"); // this engine requires the fs module like we did Saturday
app.engine("madeline", (filePath, options, callback) => {
  // define the view engine called madeline
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace("#url#", options.url)
      .replace("#text#", options.text)
      .replace("*description*", options.description);
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "madeline"); // register the madeline view engine
// =================================================================

// ===== Mount Routes =====
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// app.get() has two arguments/parameters
// the first is the route
// the second is the callback function, or what we do when we go to that route
// app.get('/', function(req, res) {
//     res.send('<h1>Hello, I can see changes as I go!</h1>');
// })

// Define another route - /home
app.get("/home", function (req, res) {
  res.send("<h1>Home Page</h1>");
});

app.get("/", (req, res) => {
  res.render("template", {
    title: "Hey",
    message: "Hello there!",
    content: "I am the Boss Ricky Ross",
  });
});

app.get("/about-me", (req, res) => {
  res.render("template", {
    title: "Hey",
    message: "Rick Ross!",
    content: "The most underated Rapper in the game",
  });
});

app.get("/another-one", (req, res) => {
  res.render("template", {
    title: "We The Best",
    message: "Who!",
    content:
      "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
  });
});

app.get("/link", (req, res) => {
  res.render("template2", {
    title: "a tag example",
    message: "The a tag goes somewhere",
    content: "This example shows additional features",
    url: "fred-example",
    text: "FRED",
  });
});

app.get("/fred-example", (req, res) => {
  res.render("fred", {
    title: "FRED",
    message: "This does not do anything new",
    content: "Not anything exciting here either",
    description: "we do have a new p tag, though",
  });
});

// ===== Tell the app to listen on port 3000 =====
// for HTTP requests from clients
app.listen(3000, function () {
  console.log("Listenting on port 3000");
});
