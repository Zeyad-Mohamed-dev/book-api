const model = require("../model/bookModel");
const getAllBooks = async () => {
    return await model.find();
}
const createBook = async (book) => {
    const newBook = new model({
        title: book.title,
        bookCoverImage: book.bookCoverImage,
        description: book.description,
        price: book.price,
        genre: book.genre,
        publishedYear: book.publishedYear,
        createdBy: book.createdBy,
        createdAt: book.createdAt
    });

    return await newBook.save();
}

const getBookById = async (id) => {
    return await model.findById(id);
}

const updateBookById = async (id, book) => {
    return await model.findByIdAndUpdate(id, {$set: book}, {new: true, runValidators: true});
}

module.exports = {
    createBook,
    getBookById,
    updateBookById,
    getAllBooks
}