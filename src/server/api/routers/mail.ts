import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env.mjs";
import nodeMailer from "nodemailer";

export const mailRouter = createTRPCRouter({
    sendmail: publicProcedure.input(z.object({mailAdress: z.string().email()}).required())
    .mutation(async ({input}) => {
        console.log(`sendmail: ${input.mailAdress}`)
        const transporter = nodeMailer.createTransport({
            service: `gmail`,
            auth: {
                user: env.EMAIL_USER,
                pass: env.EMAIL_PASSWORD,
            }
        })

        const mailOptions = {
            from: env.EMAIL_USER,
            to: input.mailAdress,
            subject: `Gegevens Valentino Andric`,
            html: `Gegevens Valentino Andric: <br/><br/>
                <b>Mail:</b> valentinoandric200425@gmail.com<br/>
                <b>Schoolmail:</b> 87788@glr.nl<br/>
                <b>Telefoon:</b> (+31)6-37296714 <br/>
                <b>Adres:</b> Paradijsselpark 230, 2904 PA Capelle Aan Den IJssel <br/>
                <b>Geboortedatum:</b> 25-01-2004 <br/>
                <b>CV:</b> https://valentinoandric.nl/valentinoandriccv.pdf<br/>`,
        }

        const sent = true

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions,(error) => {
                if(error){
                    reject(error)
                }
                resolve(true)
            });
        }) 
            
        // send mail
        return {success: sent}
    })
});
