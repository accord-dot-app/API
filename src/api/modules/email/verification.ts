import { generateInviteCode } from '../../../data/models/invite';

export class Verification {
  private codes = new Map<string, VerifyCode>();

  public create(email: string, type: VerifyCode['type'], expiresIn = 5 * 60 * 1000) {
    this.codes.delete(email);

    const value = generateInviteCode(16);
    this.codes.set(email, { type, value });

    setTimeout(() => this.codes.delete(email), expiresIn);

    return value;
  }

  public get(code: string) {
    return this.codes.get(code);
  }
  public delete(email: string) {
    this.codes.delete(email);
  }

  public getEmailFromCode(code: string) {    
    return Array
      .from(this.codes.entries())
      .find(([k,v]) => v.value === code)?.[0];
  }
}

interface VerifyCode {
  type: 'LOGIN' | 'VERIFY_EMAIL' | 'FORGOT_PASSWORD';
  value: string;
}
