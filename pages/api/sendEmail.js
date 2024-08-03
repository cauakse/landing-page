import { SMTPClient } from 'emailjs';

export default async function handler (req, res) {

    const clientUser = req.body;
    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: `Olá ${clientUser.name}, vejo que você quer alavancar seu site
            hospedado na url: ${clientUser.site}, vou enviar uma mensagem nesse numero:
            ${clientUser.tel} para conversarmos sobre o alavancamento do seu negocio via
            midia ${clientUser.midia}`,
            from: process.env.EMAIL,
            to: clientUser.email,
            cc:"",
            subject: 'testing emailjs',
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({ Message: "Send Mail" });
  }
  