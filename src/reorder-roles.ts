// TODO: remove once roles are fixed
import { Guild } from './data/models/guild';

(async() => {
  const guilds = await Guild
    .find()
    .populate('roles')
    .exec();
  
  for (const guild of guilds) {
    const everyoneIndex = guild.roles.findIndex(r => r.name === '@everyone');    
    if (everyoneIndex === 0) continue;

    const misplacedRole = guild.roles[0];
    const everyoneRole = guild.roles[everyoneIndex];

    console.log('MISPLACED:');    
    console.log(misplacedRole);
    
    guild.roles[0] = everyoneRole;
    guild.roles[everyoneIndex] = misplacedRole;
    await guild.updateOne(guild);
  }
})();