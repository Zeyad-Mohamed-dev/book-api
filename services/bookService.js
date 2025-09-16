const fs = require('fs');
const repositiry = require("../repository/bookRepository");
const getAllBooks = async function() {
    return await repositiry.getAllBooks();
}

const getBookById = async (id) => {
    return await repositiry.getBookById(id);
}

const updateBook = async (id, newBook)=> {
    return await repositiry.updateBookById(id, newBook);
}

const createNewBook = function(book) {    
    return repositiry.createBook(book);
}

const deleteBookById = function(id) {
    repositiry.deleteBookById(id);
    return true;
}

// const updateBook = function (id, newBook) {
//     return repositiry.updateBook(id, newBook);
// }

module.exports = {
    getAllBooks,
    createNewBook,
    updateBook,
    deleteBookById
}