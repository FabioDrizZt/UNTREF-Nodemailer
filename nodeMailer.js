process.loadEnvFile()
const nodemailer = require('nodemailer');

// Paso 1: Definir el transporte
const transporter = nodemailer.createTransport({
  host:process.env.SMTP_SERVER, // (smtp.gmail.com)
  port:process.env.SMTP_PORT, // Puerto SMPT, 465 para SSL (secure)
  secure: true, // True para SSL, cuando el port es 465
  auth: {
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASSWORD
  }
})

// Paso 2: Definir las emailOptions
const emailOptions = {
  from: process.env.EMAIL_USER, // El correo del remitente
  to: 'drizzzt@gmail.com', // Email del destinatario
  subject: 'Probando nodemailer', // Asunto del correo
  text: 'Funciona correctamente el envío de correos' // Cuerpo del mensaje
}

// Paso 3: Enviar el correo:
transporter.sendMail(emailOptions, (err, info) => {
  if (err) {
    console.error('Ha ocurrido un ERROR al enviar el email: ', err);
  } else {
    console.log('Email enviado con exito', info.response);
  }
})