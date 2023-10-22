const express = require("express");
const Article = require("./../models/article");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("articles/show.ejs");
  });

module.exports = router;