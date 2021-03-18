import { snowflakeToDate } from "../data/snowflake-entity";

export function getNameAcronym(name: string) {
  return name
    .split(' ')
    .slice(0, 3)
    .map(str => str[0])
    .join('');
}

export function generateInviteCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  const codeLength = 7;
  
  let result = '';
  for (let i = 0; i < codeLength; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

export const validators = {
  minLength: (min: number) => (val: string | any[]) => val.length >= min,
  maxLength: (max: number) => (val: string | any[]) => val.length <= max,
};

export function createdAtToDate(this: any) {
  return snowflakeToDate((this as any)._id);
}