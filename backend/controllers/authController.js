const User = require('../models/user.model')
const Token = require('../models/token.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_LIFE} = process.env;

exports.signup = async (req, res) => {
    try {
        //check if username is already taken:
        let user = await User.findOne({ userName: req.body.username });
        if (user) {
            return res.status(400).json({ error: "Username taken." });
        } else {
            //create new user and generate a pair of tokens and send
            user = await new User(req.body).save();
            let accessToken = await user.createAccessToken();
            let refreshToken = await user.createRefreshToken();
    
            return res.status(201).json({ accessToken, refreshToken });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
};
exports.login = async (req, res) => {
    try {
        //check if user exists in database:
        let user = await User.findOne({ userName: req.body.userName });
        //send error if no user found:
        if (!user) {
            return res.status(200).json({ id: -1 });
        } else {
            //check if password is valid:
            let valid = await bcrypt.compare(req.body.password, user.password);
            if (valid) {
                //generate a pair of tokens if valid and send
                let accessToken = await user.createAccessToken();
                let refreshToken = await user.createRefreshToken();
                let id = user._id;
                let firstName = user.firstName;
                let lastName = user.lastName;
                let userName = user.userName;
                res.cookie('refreshToken', refreshToken, {httpOnly: true});
                return res.status(200).json({ accessToken, id, firstName, lastName, userName});
            } else {
                //send error if password is invalid
                return res.status(200).json({ id: -1 });
            }
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
};

exports.refresh = async (req, res) => {
    try {
        //get refreshToken
        const refreshToken = req.cookies['refreshToken'];
        //send error if no refreshToken is sent
        if (!refreshToken) {
            return res.status(403).json({ error: "Access denied,token missing!" });
        } else {
            //query for the token to check if it is valid:
            const tokenDoc = await Token.findOne({ token: refreshToken });
            //send error if no token found:
            if (!tokenDoc) {
                return res.status(401).json({ error: "Token expired!" });
            } else {
                //extract payload from refresh token and generate a new access token and send it
                const payload = jwt.verify(tokenDoc.token, REFRESH_TOKEN_SECRET);
                const accessToken = jwt.sign({ user: payload.user }, ACCESS_TOKEN_SECRET, {
                expiresIn: ACCESS_TOKEN_LIFE,
                });
                return res.status(200).json({ accessToken });
            }
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ e: "Internal Server Error!" });
    }
};

exports.logout = async (req, res) => {
    try {
        //delete the refresh token saved in database:
        const { userId } = req.body;
        console.log(userId);
        await Token.deleteMany({userId: userId});
        return res.status(200).json({ success: "User logged out!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error!" });
    }
};