import { expect } from 'chai';
import { generateSnowflake, snowflakeToDate } from '../../src/data/snowflake-entity';

describe('data/snowflake-entity', () => {
  it('get snowflake, 2 ids in same ms, snowflake is different', () => {
    const snowflake1 = generateSnowflake();
    const snowflake2 = generateSnowflake();    
    
    expect(snowflake1).to.not.equal(snowflake2);
  });

  it('snowflake to date, get date from snowflake, very similar time', () => {
    const date = new Date();
    const snowflake = generateSnowflake();
    const createdAt = snowflakeToDate(snowflake);
    
    expect(date.toString()).to.equal(createdAt.toString());
  });
});
