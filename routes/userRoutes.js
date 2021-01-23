const express = require('express');
const router = express.Router();
//mongoose ------------------------------------------
const mongoose = require('mongoose');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});
router.post('/', (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, msg) => {
    if (err) throw err;
    else res.json({ msg: 'user registered' });
  });
});

module.exports = router;
