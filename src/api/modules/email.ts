import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { pugEngine } from 'nodemailer-pug-engine';
import Log from '../../utils/log';

export class Email {
  private email: Mail;

  constructor() {
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
      ctx,
    } as any);
  }
}

interface EmailTemplate {
  'verify': {
    username: string;
    code: string;
  }
} 
