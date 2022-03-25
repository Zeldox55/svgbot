const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const embed = require('../../Utility/commandEmbeds')
const serverSchema = require("../../Models/serverSchema");


module.exports = {
        name: 'kick',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const target =  message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]);
        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS || Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        if(!args[0]) return embed.KickUsage(message, server);
        if(!target) return embed.CantFind(message);
        if(target === message.member || target.id === message.member.id) return embed.SelfKick(message);
        if(target.id === client.user.id) return embed.BotKick(message);
        if(target) {
            if(message.member.roles.highest.position <= target.roles.highest.position ) return embed.CantKick(message, target);
            if(!target.bannable) return embed.Kickable(message, target)
            embed.Kicked(message, target);
            Reason = message.content.split(` `).slice(2).join(' ');
            if(!Reason) { Reason = "None" }
            target.kick({reason: Reason});
         } else {
                embed.CantFind(message);
        }
    }
}
