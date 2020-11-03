const express = require('express'); 
const router = express.Router();
const {response} = require('../controllers/appController')

router.get('/response', response);
module.exports = router;
