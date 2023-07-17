const express = require('express');
const validateSignUp = require("../middlewares/validateSignUp");
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post("/", validateSignUp, (req, res) => {
  const token = generateToken();
  res.status(201).json({ token });
});

module.exports = router;