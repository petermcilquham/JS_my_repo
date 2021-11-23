import express from "express"
const router = express.Router()
import nodemailer from "nodemailer"

router.post("/api/contact", (req, res) => {
    res.send()

    sendMail(req.body)
})

async function sendMail(body) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: `${body.email}`,
            pass: '',
        },
        tls: {
            rejectUnauthorized: false,
        },
    })

    let mailOptions = {
        from: `${body.email}`,
        to: 'peter.lm.schmidt@gmail.com',
        subject: `${body.name}, ${body.phone}`,
        text: `${body.msg}`
    }
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
    })
}


export default router