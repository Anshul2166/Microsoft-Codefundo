var express = require("express");
var router = express.Router();
const start=require("./start");
const news=require("./news");

router.use("/",start);
router.use("/news",news);

module.exports = router;