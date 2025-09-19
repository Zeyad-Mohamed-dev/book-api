const authorizeRequest = (role, isCreator) => {
        return (req, res, next) => {
            if(req.role === role) {
                next();
            }
            else {
                res.status(403).send({"error" : "unauthorized"});
            }
        }
}

module.exports = authorizeRequest;