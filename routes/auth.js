const express = require('express');
const router = express();
const signup = require('../controllers/auth');
const signin = require('../controllers/auth');
router.post('/signup', signup.signup);
router.post('/signin', signin.signin);
module.exports = router;