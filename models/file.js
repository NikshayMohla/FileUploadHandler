const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config()
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
});



fileSchema.post("save", async function (doc) {
    try {
        console.log(doc)

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from: "NMHelp",
            to: doc.email,
            subject: "NewFile uploaded on Cloudinary",
            html: `<h2>Greetings For The Day</h2><br></br><p>YOUR NEW FILE HAS BEEN UPLOADED</p><br/>VIEW HERE:<a href=${doc.imageUrl}>${doc.imageUrl}</a>`
        })
    } catch (error) {
        console.log(error)
    }
})

const File = mongoose.model("File", fileSchema)
module.exports = File