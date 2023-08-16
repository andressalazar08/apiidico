const express = require('express');
const router = express.Router();


const { registerUser, loginUser, logout, allUsers } = require('../controllers/authController');
const { isAuthenticatedUser } = require('../utils/auth');

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)

//route to test credentials
router.route('/admin/users').get(isAuthenticatedUser,allUsers);


module.exports = router;