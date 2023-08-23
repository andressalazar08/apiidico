const characterController = require('../controllers/characterController.js');
const router =  require('express').Router();


//1. Create a character route
router.post('/addCharacter', characterController.addCharacter)


module.exports = router
