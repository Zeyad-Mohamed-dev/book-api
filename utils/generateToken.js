const jwt = require("jsonwebtoken");
const env = require("./envUtils")

const generateJwt = (payload, id) => {
    return jwt.sign(payload, env.secret, {
        expiresIn: env.expires,
        issuer: "API",
        subject: `${id}`
    })
}

const verifyToken = (token) => {
    return jwt.verify(token, env.secret);
}

module.exports = {generateJwt, verifyToken};