const repository = require("../repository/userRepository");
const bookRepository = require("../repository/bookRepository");
const haser = require("../utils/hashPassword");
const byc = require("bcryptjs");
const jwtManager = require("../utils/generateToken");
const { default: mongoose } = require("mongoose");

const checkExist = async (email) => {
    return await repository.getUserByEmail(email);
}

const getAllUsers = async () => {
    return await repository.getALlUsers();
}

const getUserById = async (id) => {
    return await repository.getUserById(id);
}

const registerUser = async (user) => {
    const userExist = await checkExist(user.email);
    if(userExist) {
        throw new Error("user already exist");
    }
    else {
        const hashPassword = await haser(user.password);
        return await repository.createUser({
            name: user.name,
            email: user.email,
            password: hashPassword,
            role: user.role
        });
    }
}

const validatUser = async (userValidation) => {
    if(!userValidation.email || !userValidation.password) {
        throw new Error("invalid email or password");
    }
    const user = await repository.getUserByEmail(userValidation.email);
    if(!user) {
        throw new Error("invalid credits are used");
    }

    const isValid = await byc.compare(userValidation.password, user.password);
    if(!isValid) {
        throw new Error("invalid credits are used");
    }
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }
    return jwtManager.generateJwt(payload, user.id);
}

const isUserCreator = async (userId, bookId) => {
        const book = await bookRepository.getBookByCreatedBy(userId);
        console.log(book);
        if(!book) {
            return false;
        }
        return book.id === bookId;
} 
module.exports = {
    checkExist,
    registerUser,
    validatUser,
    isUserCreator,
    getAllUsers
}