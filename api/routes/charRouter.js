const charController = require('../controllers/charController.js');
const mosController = require('../controllers/mosController.js')

//router
const router = require('express').Router();

//use routers
router.post('/addChar', charController.addChar)
router.get('/allCharacters', charController.getAllChar)

router.get('/character/:id', charController.getOneChar)
router.put('/character/:id', charController.updateChar)
router.delete('/character/:id', charController.deleteChar)


//Movies or series routes
router.post('/addMovie',mosController.addMoS)
router.get('/allmovies', mosController.getAllMoS)


module.exports = router