const repositiry = require("../repository/bookRepository");
const getAllBooks = async function({ q, sort }= {}) {
  return await repositiry.getAllBooks({ q, sort });
};

const getBookById = async (id) => {
    return await repositiry.getBookById(id);
}

const updateBook = async (id, newBook)=> {
    return await repositiry.updateBookById(id, newBook);
}

const createNewBook = function(book) {    
    return repositiry.createBook(book);
}

const deleteBookById = async function(id) {
    return await repositiry.deleteBookById(id);
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