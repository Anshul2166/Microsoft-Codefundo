var express = require("express");
var router = express.Router();
const start=require("./start");
const news=require("./news");
const safehouse=require('./safehouse');

router.use("/",start);
router.use("/news",news);
router.use("/safehouse",safehouse);

module.exports = router;