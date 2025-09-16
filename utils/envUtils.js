process.loadEnvFile(".env");
const dbUrl = process.env.DB_URL;
const secret = process.env.JWT_SECRET;
const expires = process.env.expieJWT;


module.exports = {
    dbUrl,
    secret,
    expires
}