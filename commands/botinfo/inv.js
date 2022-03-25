const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');

module.exports = {
        name: 'inv',
        description: 'Inv Bot',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '15',
    run: async (client, message, args) => {
        const embedAdd = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setDescription(`${emoji.linesvg}
> ${emoji.plus_emj} | **Add Bot**: [https://svgbot.com/invite](https://discord.com/api/oauth2/authorize?client_id=944254831340695582&permissions=8&scope=bot)
${emoji.linesvg}`)
        .setColor('GOLD')
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp();
        message.reply({ embeds: [embedAdd], allowedMentions: {repliedUser: false} });
    }
}