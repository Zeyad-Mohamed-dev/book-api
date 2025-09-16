const express= require("express");
const router = express.Router();
const service = require("../services/bookService")
const authMidd = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
    try {
        const books = await service.getAllBooks();
        res.send(books);
    } catch (e) {
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
        service.createNewBook(book);
        res.send(book);
        return;
    }
})

router.delete('/:id',authMidd, (req, res) => {
    const id = req.params.id;
    service.deleteBookById(id);
    const books = service.getAllBooks();
    res.status(200).send(books);
    return;
})

router.put("/:id" ,authMidd , async (req, res) => {
    const id = req.params.id;
    const newBook = req.body;
    const book = await service.updateBook(id, newBook);
    res.send(book);
})

module.exports = router;