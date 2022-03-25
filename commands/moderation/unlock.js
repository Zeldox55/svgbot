const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const serverSchema = require("../../Models/serverSchema");


module.exports = {
        name: 'unlock',
        description: 'unlock chat',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        let channel = message.mentions.channels.first() || message.channel;
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true });
        embed.Unlock(message, channel);
    }
}