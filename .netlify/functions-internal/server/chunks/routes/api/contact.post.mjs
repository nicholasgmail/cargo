import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@intlify/utils';
import 'vue-router';
import 'node:url';
import 'ipx';

const contact_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const mail_usr = "polinoburatino@gmail.com";
  const pass = "mwze ufqi zgul mkzz";
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: mail_usr,
      pass
    }
  });
  await transporter.sendMail({
    from: `${body.name} <${body.email}>`,
    to: "kivenko1997@meta.ua",
    subject: `\u041D\u043E\u0432\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434 ${body.name}`,
    text: body.message,
    html: `
      <p><b>\u0406\u043C\u2019\u044F:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F:</b><br/>${body.message}</p>
    `
  });
  return { success: true };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
