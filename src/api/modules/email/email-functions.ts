import { UserTypes } from '../../../data/types/entity-types';
import Deps from '../../../utils/deps';
import { Email } from './email';
import { Verification } from './verification';

export class EmailFunctions {
  constructor(
    private email = Deps.get<Email>(Email),
    private verification = Deps.get<Verification>(Verification),
  ) {}
  
  public async verifyCode(user: UserTypes.Self) {
    const expiresIn = 5 * 60 * 1000;
    await this.email.send('verify', {
      expiresIn,
      user,
      code: this.verification.create(user.email, expiresIn),
    }, user.email as string);
  }
  public async verifyEmail(emailAddress: string, user: UserTypes.Self) {
    const expiresIn = 24 * 60 * 60 * 1000;
    await this.email.send('verify-email', {
      expiresIn,
      user,
      code: this.verification.create(emailAddress),
    }, emailAddress);
  }
}