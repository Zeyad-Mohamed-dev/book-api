// /**
//  * @param {Request} req
//  * @param {Response} res
//  */
const handleLogReq = (req, res, next) => {
    const url = req.url;
    const method = req.method
    const headers = req.headers;
    const body = req.body;
    console.log(" request url is " + url, "\n" , "request method is " + method,
        "\n" +
        "request body is " + JSON.stringify(body));
    next();    
}

module.exports = handleLogReq
