const userModel = require("../model/userModel");
const createUser = async (user) => {
        console.log(user);
        const newUser = new userModel(
            {
                name: user.name,
                password: user.password,
                email: user.email,
                role: user.role
            }
        );

        return await newUser.save();
}

const getUserByEmail = async (userEmail) => {
    return await userModel.findOne({email: userEmail});
}

module.exports = {
    createUser,
    getUserByEmail
}