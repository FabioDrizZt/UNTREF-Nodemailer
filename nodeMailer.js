process.loadEnvFile()
const nodemailer = require('nodemailer');

// Paso 1: Definir el transporte
const transporter = nodemailer.createTransport({
  host:process.env.SMTP_SERVER,
  port:process.env.SMTP_PORT,
  secure: true, // True para SSL, cuando el port es 465
  auth: {
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASSWORD
  }
})