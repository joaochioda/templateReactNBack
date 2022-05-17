const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  return res.json("Hello World");
});

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

module.exports = routes;
