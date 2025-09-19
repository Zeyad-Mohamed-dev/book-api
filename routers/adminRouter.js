const express = require("express");
const router = express.Router();
const authorizeMidd = require("../middlewares/authorizeMiddleware");
const authMidd = require("../middlewares/authMiddleware");
const userService = require("../services/userService");

router.get("/users", authMidd, authorizeMidd("admin") , async (req, res) => {
    const userList = await userService.getAllUsers();
    res.status(200).send(userList);
})

router.delete("/user/:id", authMidd, authorizeMidd("admin"), async (req, res) => {
    console.log(req.params.id);
})

module.exports = router;