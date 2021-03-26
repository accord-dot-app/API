import { generateInviteCode } from '../../data/models/invite';

export class Verification {
  private codes = new Map<string, string>();

  public create(email: string, expiresIn = 5 * 60 * 1000) {
    this.codes.delete(email);
    this.codes.set(email, generateInviteCode());

    setTimeout(() => this.codes.delete(email), expiresIn);

    return this.codes.get(email) as string;
  }

  public getEmailFromCode(code: string) {
    return Array
      .from(this.codes.entries())
      .find(([k,v]) => v === code)?.[0];
  }
}