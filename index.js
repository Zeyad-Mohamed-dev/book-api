const express = require("express");
const app = express();
const cors = require("cors");
const bookRouter = require("./routers/bookRouter");
const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const loggerMidd = require("./middlewares/loggerMiddleware");
const mongoose = require("mongoose");
const env = require("./utils/envUtils");


mongoose.connect(env.dbUrl).then(() => {
    console.log("connected to the database");
});
app.use(cors());
app.use(express.json());
app.use("/admin", loggerMidd, adminRouter);
app.use("/books", loggerMidd , bookRouter);
app.use("/user",loggerMidd, userRouter);
app.listen(3000, () => {
    console.log("server is running");
});  