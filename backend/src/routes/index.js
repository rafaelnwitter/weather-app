const express = require("express");
const router = express.Router();
const weather = require("./weather");
const find = require("./find");
router.get("/", weather);
router.get("/find", find);
module.exports = router;
