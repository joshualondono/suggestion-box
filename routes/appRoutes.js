const express = require('express'); //create a router
const router = express.Router(); //users array
let data = require('../models/dataArray');
const Data = require('../models/Schema'); // get all users

const {getAllSuggestions, byNameSuggestions, singleSuggestion} = require('../controllers/appController')

router.get('/all-suggestions', getAllSuggestions);
router.get('/byname-suggestions', byNameSuggestions);
router.get('/single-suggestion', singleSuggestion);

// router.get('/all-users', (req, res) => {

// Data.find()
//   .then((users) => {
//     return res.status(200).json({ confirmation: 'success', data });
//   }).catch(err=>res.status(500).json({confirmation: 'fail', err}));

// });

// router.get('/all-users', (req, res) => {

// Data.find()
//     .then((users) => {
//       return res.status(200).json({ confirmation: 'success', data });
//     }).catch(err=>res.status(500).json({confirmation: 'fail', err}));
  
//   });

//   router.get('/all-users', (req, res) => {

// Data.find()
//     .then((users) => {
//       return res.status(200).json({ confirmation: 'success', data });
//     }).catch(err=>res.status(500).json({confirmation: 'fail', err}));
  
//   });



module.exports = router;
