const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
/**
 *  **Servidor SMTP Docker**
 * const transport = nodemailer.createTransport({
 * host: process.env.MAILHOG_HOST,
 * port: "1025",
 * auth: null
 * });
 */

/**
 *  **Servidor SMTP remoto gmail**
 */
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "seuemail@gmail.com",
      pass: "suasenha"
    }
  })
);
const mailOptions = {
  from: "autordoemail@gmail.com",
  to: "quemvaireceber@gmail.com",
  subject: "Funcionou!!",
  text: "Esse e-mail foi enviado por um robô!!."
};
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email enviado: " + info.response);
  }
});
