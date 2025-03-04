const dotenv = require("dotenv");
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
// import express from 'express';
// import cors from 'cors';
// import nodemailer from 'nodemailer';


dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/sendEmail", async (req, res) => {
    const {name, email, message }= req.body;
    console.log('name on backend -> ', req);

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    
    try {
        await transporter.sendMail ( {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: "bitbanana717@gmail.com",
            subject: `New Contact Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html:  `<p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>`,
        });

        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Email failed", error})
    }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));