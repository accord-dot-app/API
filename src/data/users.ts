import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';
import { User, UserDocument } from './models/user';

export default class Users extends DBWrapper<string, UserDocument> {
    protected async getOrCreate(id: string) {
        return (await User.findById(id))
            ?.populate('user')
            .execPopulate();
    }
}