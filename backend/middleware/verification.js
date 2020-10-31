const jwt = require('jsonwebtoken')
const secret = process.env.ACCESS_TOKEN_SECRET

//middleware function to check if the incoming request in authenticated:
exports.verify = (req, res, next) => {
    // get the token stored in the custom header called 'x-auth-token'
    const token = req.get("x-auth-token");
    //send error message if no token is found:
    if (!token) {
        return res.status(401).json({ error: "Access denied, token missing!" });
    } else {
        try {
            //if the incoming request has a valid token, we extract the payload from the token and attach it to the request object.
            const payload = jwt.verify(JSON.parse(token), secret);
            req.user = {userName: payload.user.userName,
                            id: payload.user._id};
            next();
        } catch (error) {
            // token can be expired or invalid. Send appropriate errors in each case:
            if (error.name === "TokenExpiredError") {
                console.log('timed out');
                return res
                    .status(401)
                    .json({ error: "Session timed out,please login again" });
            } else if (error.name === "JsonWebTokenError") {
                console.log('invalid token');
                return res
                    .status(401)
                    .json({ error: "Invalid token,please login again!" });
            } else {
                //catch other unprecedented errors
                console.error(error);
                return res.status(400).json({ error });
            }
        }
    }
};