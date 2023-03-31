const router = require('express').Router();
const users = require('./users');
//const books = require('./books');
const properties = require('./properties');
const tenants = require('./tenants');

const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/property', properties);
router.use('/tenant', tenants);
//router.use('/books', books);

module.exports = router;
