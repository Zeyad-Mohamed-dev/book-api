const express= require("express");
const service = require("../services/userService");
const router = express.Router();
const haser = require("../utils/hashPassword");

router.post("/register" , async (req, res) => {
        const user = req.body;
        if(!user.email || !user.name || !user.password || !user.role) {
            res.status(400).send({"error" : "invalid data"});
        }
        else {
            try {
                const createdUser = await service.registerUser(user);
                res.status(201).send(createdUser);
            } catch(e) {
                console.error(e.message);
                res.status(400).send({"error" : "invalid register process"});
            }
        }
})

router.post("/signin" , async (req, res) => {
        try {
            const credits = req.body;
            const token = await service.validatUser(credits);
            res.status(200).send({"token" : token});
        } catch(e) {
            res.status(400).send({"error" : e.message});
        }
})

module.exports = router;