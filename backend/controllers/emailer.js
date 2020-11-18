"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

var user = process.env.USER;
var pass = process.env.PASS;
const from = "scheduler@group11.com"

function createTransporter() {
    return nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
            user: user,
            pass: pass,
        },
    });
}
exports.sendRegistrationEmail = async function sendRegistrationEmail(to, code){
    const subject = "Activate your account"

    // Create a transporter
    let transporter = createTransporter();

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
        return '<b><a href="https://group11largeproject-dev.herokuapp.com/api/auth/activate/' + code + '">Verify your email now!</a></b>';
    } else {
        return '<b><a href="http://localhost:5000/api/auth/activate/' + code + '">Verify your email now!</a></b>'
    }
}

function buildURL(code) {
    if (process.env.NODE_ENV === 'production'){
        return 'https://group11largeproject-dev.herokuapp.com/api/auth/activate/' + code;
    } else {
        return 'http://localhost:5000/api/auth/activate/' + code
    }
}

exports.forgotPasswordEmail = async function forgotPasswordEmail(to, tempPassword) {
    const subject = "Scheduler Temporary Password"

    let transporter = createTransporter();

    let plainText = "Here's your temporary password: " + tempPassword;

    let mailStatus = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        text: plainText
    });

    console.log(`Message send: ${mailStatus.messageId}`);
    return;
}