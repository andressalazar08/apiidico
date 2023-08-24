const router = require('express').Router()
const genderController = require('../controllers/genderController.js');


//1. create a gender

router.post('/addGender', genderController.addGender)






module.exports = router