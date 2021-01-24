const express = require('express');
const router = express.Router();
//mongoose ----------------------------------------------------------
const mongoose = require('mongoose');
const User = require('../model/userSchema');

// get all users ----------------------------------------------------
router.get('/', (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});
// add user request -------------------------------------------------
router.post('/newUser', (req, res, next) => {
  let newUser = new User(req.body);
  newUser.save((err, msg) => {
    if (err) throw err;
    else {
      res.json({ msg: 'user registered' });
    }
  });
});
router.get('/newUser', (req, res) => {
  res.redirect(req.get('/hi'));
});
// delete user request -----------------------------------------------
router.delete('/deleteUser/:id', (req, res, next) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
    if (err) throw err;
    else {
      res.json({ msg: 'user is deleted' });
      next();
    }
  });
});
router.get('/deleteUser/:id', (req, res) => {
  res.redirect('/');
});
// update user request -----------------------------------------------
router.put('/updateUser/:id', (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
    if (err) throw err;
    else {
      res.send(data);
    }
  });
});

module.exports = router;
