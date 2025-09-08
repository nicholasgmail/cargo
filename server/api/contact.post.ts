import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const mail_usr = "polinoburatino@gmail.com"
    const pass = "mwze ufqi zgul mkzz"

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: mail_usr,
            pass: pass
        }
    })
    await transporter.sendMail({
        from: `${body.name} <${body.email}>`,
        to: "kivenko1997@meta.ua",
        subject: `Нове повідомлення від ${body.name}`,
        text: body.message,
        html: `
      <p><b>Ім’я:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Повідомлення:</b><br/>${body.message}</p>
    `
    })

    return { success: true }
})
