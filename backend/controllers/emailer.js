"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

var user = process.env.USER;
var pass = process.env.PASS;
const from = "scheduler@group11.com"


async function sendRegistrationEmail(to, code){
    const subject = "Activate your account"

    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
            user: user,
            pass: pass,
        },
    });

    let html = buildRegistrationHTML(code);
    let plainText = "Verify your email using this link " + buildURL(code);

    // send mail with defined transport object
    let mailStatus = await transporter.sendMail({
        from: from, // sender address
        to: to, // list of recipients
        subject: subject, // Subject line
        text: plainText, // plain text
        html: html,
    });


    console.log(`Message sent: ${mailStatus.messageId}`);
    return;
}

function buildRegistrationHTML(code) {
    if (process.env.NODE_ENV === 'production'){
        return "production activation email";
    } else {
        return '<b><a href="http://localhost:5000/api/auth/activate/' + code + '">Verify your email now!</a></b>'
    }
}

function buildURL(code) {
    if (process.env.NODE_ENV === 'production'){
        return "production activation email";
    } else {
        return 'http://localhost:5000/api/auth/activate/' + code
    }
}


module.exports.sendRegistrationEmail = sendRegistrationEmail;