import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASS;

async function submitController(request, response){
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })

        const message = request.body.message;
        const name = request.body.name;
        const phone = request.body.mobile;
        const email = request.body.email;

        const mailOptions = {
            from: email,
            to: EMAIL,
            subject: "New Submission in Contact Form",
            text: `Name: ${name}\nE-mail: ${email}\nPhone: ${phone} \nSubject: "New Contact form Submission"\nMessage: ${message}`
        }
        
        await transporter.sendMail(mailOptions);

        return response.status(200).json({success: true});
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export default submitController;