const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const embed = require('../../Utility/commandEmbeds')
const serverSchema = require("../../Models/serverSchema");


module.exports = {
        name: 'role',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const target =  message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]);
        const role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id === args[1]);
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES || Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(client, message);
        if(!args[0]) return embed.roleUsage(message, server);
        if(!args[1]) return embed.roleUsage(message, server);
        if(!target) return embed.CantFind(message);
        if(!role) return embed.CantFindRole(message);
        if(target === message.member) return embed.SelfRole(message);
        if(target.id === client.user.id) return embed.BotRole(message);
        if(message.member.roles.highest.position <= target.roles.highest.position ) return embed.CantRole(message, target);
        if(!target.bannable) return embed.roleable(message, target);
        target.roles.add(role)
        embed.roleAdd(message, target, role);
    }
}