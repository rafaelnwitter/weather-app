const express = require("express");
const router = express.Router();
const weather = require("./weather");
router.get("/weather", weather);
module.exports = router;