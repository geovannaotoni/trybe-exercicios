const express = require('express');

const router = express.Router();

const activitiesRouter = require("./activities");
const signUpRouter = require("./signup");

router.use('/activities', activitiesRouter);
router.use('/signup' , signUpRouter);

module.exports = router;