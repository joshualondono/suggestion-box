const express = require('express');
//create a router
const router = express.Router();
//users array
let data = require('../models/dataArray');

const Data = require('../models/Schema');

// get all users
router.get('/all-users', (req, res) => {

  User.find()
  .then((users) => {
    return res.status(200).json({ confirmation: 'success', users });
  }).catch(err=>res.status(500).json({confirmation: 'fail', err}));

});


module.exports = router;
