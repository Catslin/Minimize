const express = require("express");
const Article = require("./../models/article");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("articles/show.ejs");
  });
router.get("/new", (req, res) => {
    res.render("articles/new.ejs");
  });

module.exports = router;