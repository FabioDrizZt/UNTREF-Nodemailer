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
}).sendMail({
  from: process.env.EMAIL_USER, // El correo del remitente
  to: 'drizzzt@gmail.com', // Email del destinatario
  subject: 'Probando nodemailer', // Asunto del correo
  text: 'Funciona correctamente'
/*   html: `
  <h1 style="color: #4fc">Funciona correctamente el envío de correos</h1>
  <p style="font-size: 20px; text-align: center">Este es un parrafo de prueba</p>
  <img src="https://www.latercera.com/resizer/v2/6O3E6FX56FCYFGW5NZFOKYGNY4.jpg?quality=80&smart=true&auth=cb1335cb6bf0618491cd556ee65855efdd2ab2dae9eb059d2dadd30a41642898&width=690&height=502" alt="Imagen de pikachu" width="100%" />
  ` */
}, (err, info) => {
  if (err) {
    console.error('Ha ocurrido un ERROR al enviar el email: ', err);
  } else {
    console.log('Email enviado con exito', info.response);
  }
})