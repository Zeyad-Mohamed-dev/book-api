const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    }
    ,
    bookCoverImage: {
        type: String,
        required: true
    }
    ,
    description: {
        type: String
    }
    ,
    price: {
        type: Number,
        min: [0, "The value of the price should not be negatvie"]
    }
    ,
    genre: {
        type: String
    }
    ,
    puplishedYear: {
        type: Number
    }
    ,
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    ,
    createdAt: {
        type: Date
    }
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;