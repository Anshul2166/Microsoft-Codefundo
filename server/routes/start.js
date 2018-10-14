var passport = require("passport");
var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
	console.log("Here");
	return res.json({ user: "Anshul" });
});

module.exports = router;
