const {bookModel, userModel} = require('../models');

function newBook(isbn, title, authors, published, subtitle, rating, thumbnails, userId, description, read) {
    return bookModel.create({isbn, title, authors, published, subtitle, rating, thumbnails, userId, description, read })
        .then(book => {
            console.log(thumbnails);
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { books: book._id } }),
                //thumbnailModel.findByIdAndUpdate({ _id: thumbnailId },{ $push: { thumbnailId: thumbnailId}}, { new: true }),

            ])
        })
}


function getAllBooks(req, res, next) {
    const { _id: userId } = req.user;
    bookModel.find({userId})
        .sort({ created_at: -1 })
        //.populate('thumbnailId userId')
        .then(books => {
            res.status(200).json(books)
        })
        .catch(next);
}

function getAllReadBooksByUser(req, res, next) {
    const { _id: userId } = req.user;
    read = true;
    bookModel.find({userId, read: read})
        .then(books => {
            console.log(books);
            res.status(200).json(books)
        })
        .catch(next);
}

function checkBook(req, res, next) {
    const { _id: userId } = req.user;
    const { isbn } = req.params;

    const searchResult = new RegExp(isbn, 'i');

    console.log(isbn)
    bookModel.find({userId, isbn})
        .then(book => {
            console.log(book);
                res.status(200).json(book);
        })
        .catch(next);
}

function searchBooks(req, res, next){
    const { _id: userId } = req.user;
    const { searchTerm } = req.params;
     
    const searchResult = new RegExp(searchTerm, 'i');

    bookModel.find({userId}).or([{'title': {$regex: searchResult}}, {'subtitel': {$regex: searchResult}}, {'authors': {$regex: searchResult}}]).lean()
    .then(books => {
        res.status(200).json(books)
    })
    .catch(next);
}


function createBook(req, res, next) {
    const { thumbnails } = req.body;
    const { _id: userId } = req.user;
    const { title } = req.body;
    const { isbn } = req.body;
    const { authors } = req.body;
    const { published } = req.body;
    const { subtitle } = req.body;
    const { rating } = req.body;
    const { description } = req.body;
    const {read} = req.body;

    //console.log("------------")
    //console.log(thumbnails);

    newBook(isbn, title, authors, published, subtitle, rating, thumbnails, userId, description, read)
        .then(([_, updatedBook]) => res.status(200).json(updatedBook))
        .catch(next);
        
}

function getBook(req, res, next) {
    const { bookId } = req.params;

    bookModel.findById(bookId)
        .populate({
            path : 'userId'
          })
        .then(book => res.json(book))
        .catch(next);
}

function editBook(req, res, next){
    const { _id: bookId } = req.body;
    const { thumbnails } = req.body;
    const { _id: userId } = req.user;
    const { title } = req.body;
    const { isbn } = req.body;
    const { authors } = req.body;
    const { published } = req.body;
    const { subtitle } = req.body;
    const { rating } = req.body;
    const { description } = req.body;
    const { read } = req.body;


    bookModel.findOneAndUpdate({ _id: bookId, userId }, {isbn, title, authors, published, subtitle, rating, thumbnails, description, read}, { new: true })
    .then(updatedBook => {
        if (updatedBook) {
            res.status(200).json(updatedBook);
        }
        else {
            res.status(401).json({ message: `Not allowed! to edit the page` });
        }
    })
    .catch(next);

}

function deleteBook(req, res, next) {
    const { bookId } = req.params;
    const { _id: userId } = req.user;

    console.log('userId ' + userId)
    console.log('bookId ' + bookId)
    console.log(req.params);
 


    Promise.all([
        bookModel.findOneAndDelete({ _id: bookId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { books: bookId } }),

    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed! to edit the page` });
            }
        })
        .catch(next);
}


module.exports = {
    getAllBooks,
    createBook,
    getBook,
    editBook,
    deleteBook,
    searchBooks,
    checkBook,
    getAllReadBooksByUser
}