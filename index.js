const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  serviço: "gmail",
  auth: {
    user: "seuusuario@gmail.com",
    pass: "seupassword"
  }
});

const mailOptions = {
  from: "sender@email.com", // endereço do remetente
  to: "to@email.com", // lista de receptores
  subject: "Subject of your email", // Subject line
  html: "<p>Your html here</p>" // corpo de texto simples
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) console.log(err);
  else console.log(info);
});

/*Fontes: https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799*/
