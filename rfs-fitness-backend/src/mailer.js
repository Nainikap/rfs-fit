const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) console.error("mailer config error:", error);
  else console.log("mailer config set up");
});

async function sendRegistrationMail({ name, email, contact, timeSlot }) {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "New User Registration",
    html: `
        <h2>New User Registration from Website</h2>
         <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact number:</strong> ${contact}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
        `,
  };

  return transporter.sendMail(mailOptions);
}
module.exports = { sendRegistrationMail };
