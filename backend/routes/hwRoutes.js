const express = require("express");
const { addHomework, getAllhws } = require("../controllers/addhwController.js");
const route = express.Router();

route.post("/homeworks", addHomework);
route.post("/homeworks", getAllhws);

module.exports = route;
