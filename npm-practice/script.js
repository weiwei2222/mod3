// import/require request node module
const request = require("request");

// use request module
request("http://jsonplaceholder.typicode.com/users", function (err, res, body) {
  console.log(body);
});
