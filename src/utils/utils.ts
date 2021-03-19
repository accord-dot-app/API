import { snowflakeToDate } from "../data/snowflake-entity";

export function getNameAcronym(name: string) {
  return name
    .split(' ')
    .slice(0, 3)
    .map(str => str[0])
    .join('');
}

export const validators = {
  minLength: (min: number) => (val: string | any[]) => val.length >= min,
  maxLength: (max: number) => (val: string | any[]) => val.length <= max,
};

export function createdAtToDate(this: any) {
  return snowflakeToDate((this as any)._id);
}