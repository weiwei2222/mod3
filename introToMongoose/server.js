// Allows us to use .env file
require("dotenv").config();
// Dependencies
const mongoose = require("mongoose");
const Tweet = require("./tweet.js");

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// input examples
// const myFirstTweet = {
//     title: "Testing the Fields",
//     body: "Body will Show up",
//     author: "Christina"
// };
const myFirstTweet = {
  title: "Deep Thoughts",
  body: "Friends, I am the realest coder alive",
  author: "Arthur",
};

const manyTweets = [
  {
    title: "Deep Thoughts",
    body: "Friends, I am the realest coder alive",
    author: "Arthur",
  },
  {
    title: "Sage Advice",
    body: "Friends, I am awesome and you are too",
    author: "Arthur",
    likes: 20,
  },
  {
    title: "Is TI the Jadakiss of the South",
    body: "TI is severely underrated and we need to fix that expeditiously",
    author: "Arthur",
    likes: 40,
  },
  {
    title: "Crypto",
    body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
    author: "Arthur",
    likes: 162,
  },
  {
    title: "Confusion",
    body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
    author: "Arthur",
    likes: -100,
  },
  {
    title: "Vespa",
    body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
    author: "Arthur",
    likes: 2,
  },
  {
    title: "Licensed",
    body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
    author: "Arthur",
    likes: 3,
  },
  {
    title: "Water",
    body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
    author: "Arthur",
  },
];

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => {
//     db.close();
//   }, 5000);

// THIS MAKES ONE NEW ADDITION TO THE DATABASE
// Tweet.create(myFirstTweet)
// // if the database transaction succeeds
// .then((tweet) => {
//     console.log(tweet);
// })
// // if the database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close the db connection either way
// .finally(() => {
//     db.close()
// })

// THIS WILL ADD MANY NEW THINGS TO THE DATABASE
// Tweet.insertMany(manyTweets)
// // if database transaction succeeds
// .then((tweets) => {
//     console.log(tweets);
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

// Finding documents with Mongoose
// find - generic search within the db and return matching results
// findById - we will generally use this for Show Routes
// findOne - searches in db but only returns the first match that it finds
// where - is a query builder - something you can look into more on your own

// Start by finding all of the tweets, we do this using
// find({})
// Tweet.find({})
// // if the database transaction succeeds
// .then((tweets) => {
//     console.log(tweets)
// })
// // if the database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

// This finds and returns all documents in database but only returns title and body
// Tweet.find({ }, "title body")
// // if database transaction succeeds
// .then((tweets) => {
//     console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     // db.close()
// })

// Tweet.find({title: "Water"})
// // if database transaction succeeds
// .then((tweet) => {
//     console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

// Tweet.find({ likes: { $gte: 20}})
// // if database transaction succeeds
// .then((tweets) => {
//     console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

// Tweet.findOneAndDelete({title: "Deep Thoughts"})
// // if database transaction succeeds
// .then ((tweet) => {
//     console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

// Tweet.findByIdAndDelete('65736e7d0a426e49fe3c88ac')
//     .then((tweet) => {
//         console.log(tweet)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// update() - the most generic
// findOneAndUpdate() - find one by some criteria and update
// findByIdAndUpdate - use the mongoDb ID to update
// Tweet.findOneAndUpdate(
//     { title: "Vespa"},
//     { sponsored: true },
//     { new: true })
// // if database transaction succeeds
// .then((tweet) => {
//     console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
//     .finally(() => {
//         db.close()
//     })

// Tweet.countDocuments( { likes: { $gte: 20} })
// .then((count) => {
//     console.log(count)
// })
// .catch((error) => {
//     console.log(error)
// })
//     .finally(() => {
//         db.close()
//     })

Tweet.find({ likes: { $gte: 20 } }, "title createdAt -_id")
  .limit(10)
  .sort("createdAt")
  .exec()
  // if database transaction succeeds
  .then((tweets) => {
    console.log(tweets);
  })
  // if database transaction fails
  .catch((error) => {
    console.log(error);
  })
  // close db connection either way
  .finally(() => {
    db.close();
  });
