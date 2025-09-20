const express= require("express");
const router = express.Router();
const bookService = require("../services/bookService");
const userService = require("../services/userService")
const authMidd = require("../middlewares/authMiddleware");
const authorizeMidd = require("../middlewares/authorizeMiddleware");

router.get("/", async (req, res) => {
    try {
        let { q, sort } = req.query;
        const books = await bookService.getAllBooks({ q, sort });
        res.status(200).send(books);
    } catch (e) {
        console.log(e.message);
        res.status(400).send({"error" : "invalid request"});
    }
    
})

router.post("/", authMidd , (req, res) => {
    const book = req.body;
    try {

    } catch(e) {

    }
    if(book) {
        // router.hanldePostBook(book);
        book.createdBy = req.user;
        book.createdAt = new Date();
        bookService.createNewBook(book);
        res.send(book);
        return;
    }
})

router.delete('/:id', authMidd, async (req, res) => {
    if (req.role === "admin") {
        const id = req.params.id.slice(3);
        const deleteRes = bookService.deleteBookById(id);
        res.status(200).send(deleteRes);
    }
    else if (req.role === "user") {
        const userId = req.user;
        const bookId = req.params.id.slice(3);
        const isCreator = await userService.isUserCreator(userId, bookId);
        if(isCreator) {
            bookService.deleteBookById(bookId);
            const books = bookService.getAllBooks();
            res.status(200).send(books);
        }
        else {
            res.status(400).send({"error" : "invalid delete is used"});
        }
        
    }
})

router.put("/:id" ,authMidd , async (req, res) => {
    const id = req.params.id;
    const newBook = req.body;
    const book = await service.updateBook(id, newBook);
    res.send(book);
})

module.exports = router;