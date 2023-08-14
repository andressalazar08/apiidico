const charController = require('../controllers/charController.js');


const router = require('express').Router();


router.post('/addChar', charController.addChar)
router.get('/allCharacters', charController.getAllChar)

router.get('/character/:id', charController.getOneChar)
router.put('/character/:id', charController.updateChar)
router.delete('/character/:id', charController.deleteChar)
