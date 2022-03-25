const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const embed = require('../../Utility/commandEmbeds');
const serverSchema = require("../../Models/serverSchema");




module.exports = {
        name: 'setnick',
        description: 'change nickname',
        aliases: ["nick"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const nickName = message.content.split(` `).slice(2).join(' ');
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES || Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        const target =  message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]);
        if(!args[0]) return embed.NickUsage(message, server);
        if(!target) return embed.CantFind(message);
        if(nickName.length > 32) return embed.NickLength(message);
        if(message.member.roles.highest.position <= target.roles.highest.position ) return embedCantUpdate(message, target);
        if(!target.bannable) return embed.CantNick(message, target)
        if(target) {
            if(!nickName) return embed.NickUsage(message);
            if(args[1] === "reset") {
                target.setNickname(null)
                embed.ResetNick(message, target)
                return;
            }
            target.setNickname(nickName)
            embed.Nick(message, target, nickName)
        } else {
            embed.CantFind(message);
        }
    }
}