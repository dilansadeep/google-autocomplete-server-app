const express = require("express");
const router = express.Router();
const predictions = require("./getPredictions");
const geocode = require("./getGeocode")
router.get("/predictions", predictions);
router.get("/geocode", geocode);
module.exports = router;