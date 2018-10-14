var express = require("express");
var router = express.Router();
const start=require("./start");

router.use("/",start);

module.exports = router;