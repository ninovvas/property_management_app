const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { bookController } = require('../controllers');

// middleware that is specific to this router

router.get('/',  auth(), bookController.getAllBooks);
router.post('/', auth(), bookController.createBook);

router.get('/read',  auth(), bookController.getAllReadBooksByUser);

router.get('/check/:isbn', auth(), bookController.checkBook);
router.get('/catalog/:bookId', auth(), bookController.getBook);

router.put('/edit/:bookId', auth(), bookController.editBook);
router.delete('/delete/:bookId', auth(), bookController.deleteBook);
router.get('/search/:searchTerm', auth(), bookController.searchBooks);

module.exports = router