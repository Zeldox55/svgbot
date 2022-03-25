const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');

module.exports = {
        name: 'ping',
        description: 'Shows bot latency',
        aliases: ["ping"],
        usage: '',
        accessableby: "",
        cooldown: '15',
    run: async (client, message, args) => {
        const latency = `${client.ws.ping}ms`;
        const embed = new MessageEmbed()
        .setTitle(client.user.username + ` Ping `, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`> ${emoji.ping} | **Ping**: ${latency} ${emoji.reseau}`)
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp();
        message.reply({ embeds: [embed], allowedMentions: {repliedUser: false} });

    }
}