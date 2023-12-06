const express = require("express");
const app = express();
const port = 3000;

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get("/:indexOfPlantsArrary", (req, res) => {
  res.send(plants[req.params.indexOfPlantsArrary]);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
