const characterController = require('../controllers/characterController.js');
const router =  require('express').Router();


//1. Create a character route
router.post('/addCharacter', characterController.addCharacter)
//2. get all characters route
router.get('/', characterController.getCharacters)
//3. update a character by name
router.put('/:name', characterController.updateCharacter)
//4. delete a character by name
router.delete('/:name', characterController.deleteCharacter)


module.exports = router
