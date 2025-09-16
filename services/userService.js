const repository = require("../repository/userRepository");
const haser = require("../utils/hashPassword");
const byc = require("bcryptjs");
const jwtManager = require("../utils/generateToken");
const checkExist = async (email) => {
    return await repository.getUserByEmail(email);
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
module.exports = {
    checkExist,
    registerUser,
    validatUser
}