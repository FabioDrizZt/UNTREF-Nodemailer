const nodemailer = require('nodemailer')


// Paso 1: Configurar el transporter usando la cuenta de Ethereal
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'reanna.blick@ethereal.email',
        pass: 'CHe5ZszBQSsQzxAKGZ'
    }
});

// Paso 2: Configurar las opciones del correo
const mailOptions = {
  from: '"Prueba Nodemailer" <nodemailer@prueba.com>', // Remitente
  to: 'asdasd@gmail.com', // Destinatario
  subject: 'Correo de prueba usando Ethereal', // Asunto
  text: 'Este es un correo de prueba usando Ethereal', // Texto
  html: '<b>Este es un correo de prueba usando Ethereal</b>' // Contenido HTML
}

// Paso 3: Enviar el correo
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error('Error enviando el correo: ⛔️', err)
    return
  }
  console.log('Correo enviado: 📧', info.messageId)
  console.log('URL de previsualización:', nodemailer.getTestMessageUrl(info)) // Enlace para ver el correo en Ethereal
})
