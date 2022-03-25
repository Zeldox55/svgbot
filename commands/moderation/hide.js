const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const embed = require('../../Utility/commandEmbeds')
const serverSchema = require("../../Models/serverSchema");


module.exports = {
        name: 'hide',
        description: 'hide chat',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        let channel = message.mentions.channels.first() || message.channel;
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        channel.permissionOverwrites.edit(message.guild.id, { VIEW_CHANNEL: false });
        embed.Hide(message, channel, server);
    }
}