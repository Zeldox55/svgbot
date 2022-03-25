const { Discord, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const embed = require('../../Utility/commandEmbeds')
const serverSchema = require("../../Models/serverSchema");



module.exports = {
        name: 'say',
        description: 'Say your Message',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        let Say = message.content.split(` `).slice(1).join(' ');
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        if(!Say) return embed.SayUsage(message, server);
        message.channel.send(`${Say}`);
    }
}