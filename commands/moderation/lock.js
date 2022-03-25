const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const serverSchema = require("../../Models/serverSchema");
const embed = require('../../Utility/commandEmbeds')

module.exports = {
        name: 'lock',
        description: 'lock chat',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        let channel = message.mentions.channels.first() || message.channel;
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false });
        embed.Lock(message, channel)
    }
}