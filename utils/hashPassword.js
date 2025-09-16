const bycrypt = require("bcryptjs");
const hashPassword = async (password) => {
    return await bycrypt.hash(password, 10);
}

module.exports = hashPassword;