const User = require("../../models/users.cjs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  checkToken,
};

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

async function create(req, res) {
  // baby steps...
  // res.json({
  //   user: {
  //     name: req.body.name,
  //     email: req.body.email,
  //   },
  // });
  try {
    // Add the User to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400- bad request
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log(req.body);
  try {
    // Query the database to find a user with the email provideer
    // Using filer object ot find User with given email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw Error("User Not Found");
    // if we found the email, compare the password
    // 1st argment is from the credential that the user typed
    // 2nd argment is what is stored in the database
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json("Bad Credentials");
  }
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
