import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { pugEngine } from 'nodemailer-pug-engine';
import Log from '../../utils/log';
import { UserTypes } from '../../data/types/entity-types';
import fs from 'fs';

;

export class Email {
  private email: Mail;
  private styles: string;

  private readonly templateDir = __dirname + '/email-templates';  

  constructor() {
    this.styles = fs.readFileSync(`${this.templateDir}/email.css`, 'utf8');
    this.email = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    this.email.verify((error) => (error)
      ? Log.error(error, 'email')
      : Log.info('Logged in to email service', 'email'));
    
    this.email.use('compile', pugEngine({
      templateDir: __dirname + '/email-templates',
      pretty: true,
    }));
  }

  public async send<K extends keyof EmailTemplate>(template: K, ctx: EmailTemplate[K], ...to: string[]) {
    await this.email.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: to.join(', '),
      subject: 'Sending Email using Node.js',
      template,
      ctx: {
        ...ctx,
        styles: this.styles,
      },
    } as any);
  }
}

interface EmailTemplate {
  'verify': {
    expiresIn: number;
    user: UserTypes.Self;
    code: string;
  };
  'verify-email': this['verify'];
} 
