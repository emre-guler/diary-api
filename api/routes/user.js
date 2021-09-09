const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.get('/', () => {

});

router.get('/logout', checkAuth, () => {

});

module.exports = router;