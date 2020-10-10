import DBWrapper from './db-wrapper';
import { GuildMemberDocument } from './models/guild-member';
import { GeneralPermission, Role, RoleDocument, TextChannelPermission, VoiceChannelPermission } from './models/role';

export default class Roles extends DBWrapper<string, RoleDocument> {
    protected async getOrCreate(id: string) {
        return await Role.findById(id).exec();
    }

    async hasPermission(
        member: GuildMemberDocument,
        permission: GeneralPermission | TextChannelPermission | VoiceChannelPermission) {
        const query = member.roleIds.map(_id => ({ _id }));

        let totalPerms = 0;
        totalPerms = (await Role.find(query))
            .map(c => c.permissions)
            .reduce(p => totalPerms | p);        

        /* inherit permissions from lower roles

        moderator perms -> ['KICK_MEMBERS']
        @everyone perms -> ['READ_MESSAGES']

        */
    }
}