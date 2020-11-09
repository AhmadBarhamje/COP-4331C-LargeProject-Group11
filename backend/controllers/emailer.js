"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

var user = process.env.USER;
var pass = process.env.PASS;
const from = "scheduler@group11.com"


async function sendRegistrationEmail(to, type){
    const subject = "Activate your account"
    const { from, recipients, message } = mailObj;

    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
            user: user,
            pass: pass,
        },
    });

    // send mail with defined transport object
    let mailStatus = await transporter.sendMail({
        from: from, // sender address
        to: recipients, // list of recipients
        subject: subject, // Subject line
        text: message, // plain text
    });

    console.log(`Message sent: ${mailStatus.messageId}`);
    return;
}

// function buildRegistration()

// Hardcoded email params for testing
const mailObj = {
  from: "scheduler@testemail.com",
  recipients: ["naas.christopher1@gmail.com"],
  subject: "Test email subject",
  message: "Testing email",
};

module.exports.sendEmail = sendRegistrationEmail;