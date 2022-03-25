const { Discord, Permissions, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const serverSchema = require('../../Models/serverSchema');
const embed = require('../../Utility/commandEmbeds')


module.exports = {
        name: 'embed',
        description: 'Embed your Message',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id})
        let Args = message.content.split(" ").slice(1).join(' ');
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        if(!Args) return embed.EmbedUsage(message, server);
        let Embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription( ` ${Args} `)
        .setColor('ORANGE')
        message.channel.send({ embeds: [Embed], allowedMentions: {repliedUser: false} });
    }
}