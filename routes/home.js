const express = require("express");
const router = express.Router();

router.get('/home/show', (req, res) => {
  res.render('show');
});
router.get('/home/index', (req, res) => {
  res.render('index');
});
router.get('/home/video', (req, res) => {
  res.render('video');
});
router.get('/home/new', (req, res) => {
  res.render('new');
});

module.exports = router;