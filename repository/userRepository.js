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

const getALlUsers = async () => {
    return await userModel.find({});
}

const getUserByEmail = async (userEmail) => {
    return await userModel.findOne({email: userEmail});
}

const getUserById = async (userId) => {
    return await userModel.findOne({_id: userId});
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getALlUsers
}