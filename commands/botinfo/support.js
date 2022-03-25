const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');

module.exports = {
        name: 'support',
        description: 'Support Server',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '15',
    run: async (client, message, args) => {
        const embedSupport = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setDescription(`${emoji.linesvg}
> ${emoji.headset_emj} | **Support Server**: [https://discord.gg/svgbot](https://discord.gg/svgbot)
${emoji.linesvg}`)
        .setColor('GOLD')
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp();
        message.reply({ embeds: [embedSupport], allowedMentions: {repliedUser: false} });
    }
}