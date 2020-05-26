const express = require('express');
const router = express.Router();
const user = require('../models/User');
const { check, validationResult } = require('express-validator/check');

// @route POST api/users
// @desc Register a user
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),

    check('email', 'Email is required').not().isEmail(),
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
