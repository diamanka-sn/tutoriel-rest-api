const express = require("express");
const {getAllTemperature} = require("../controllers/milieu");
const router = express.Router();

router.route("/milieu").get(getAllTemperature);


module.exports = router;