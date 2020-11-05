const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Token = require('./token.model')
const {ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_LIFE} = process.env;

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    active: {type: Boolean, default: false}
})

userSchema.methods = {
    createAccessToken: async function() {
        try {
            let {_id, userName} = this;
            let accessToken = jwt.sign(
                {user: {_id, userName}},
                ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE}
            );

            return accessToken;
        } catch(e) {
            console.error(e);
            return;
        }
    },
    createRefreshToken: async function() {
        try{
            let {_id, userName} = this;
            let refreshToken = jwt.sign(
                {user: {_id, userName}},
                REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE}
            );

            await new Token({token: refreshToken, userId: _id}).save();
            return refreshToken;
        } catch(e) {
            console.error(e);
            return;
        }
    }
}

userSchema.pre("save", async function(next) {
    try {
        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword
    } catch(e) {
        console.error(e);
    }
    return next();
})

module.exports = mongoose.model("User", userSchema);