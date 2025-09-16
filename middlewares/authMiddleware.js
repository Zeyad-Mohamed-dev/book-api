const jwtManager = require('../utils/generateToken');
const authMiddleware = (req, res, next) => {
    let authToken = req.headers['authorization'];
    if(authToken) {
        authToken = req.headers['authorization'].slice(7);
        try {
            const decoded = jwtManager.verifyToken(authToken);
            if(decoded) {
                req.user = decoded.id;
                console.log(req.user);
                next();
            }
        } catch(e) {
            req.user = null;
            res.status(400).send({"error" : "user not authenticaed"});
        }
    } else {
        res.status(400).send({"error" : "token not availabe"});
    }
}

module.exports = authMiddleware;