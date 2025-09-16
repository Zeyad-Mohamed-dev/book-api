// /**
//  * @param {Request} req
//  * @param {Response} res
//  */
const handleLogReq = (req, res, next) => {
    const url = req.url;
    const method = req.method
    const headers = req.headers;
    console.log(" request url is " + url, "\n" , "request method is " + method,
        "\n" +
        "request headers are " + {...headers}  + "\n");
    next();    
}

module.exports = handleLogReq
