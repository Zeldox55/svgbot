const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'avatar',
        description: 'See Avatar User',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const target =  message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]) || message.author;
        if(args[0] === "server") {
            const embedServer = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setDescription(`${emoji.linesvg}
> ${emoji.Account_emj} | **Server Name**: ${message.guild.name}
> :id: | **Server ID**: ${message.guild.id}
`)
            .setTitle('Avatar Link')
            .setURL(message.guild.iconURL({ dynamic: true }))
            .setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
            .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp();
            message.reply({ embeds: [embedServer], allowedMentions: {repliedUser: false} });
        } else if(target) {
            const embedAvatar = new MessageEmbed()
            .setAuthor(client.user.tag, client.user.avatarURL({ dynamic: true }))
            .setDescription(`${emoji.linesvg}
> ${emoji.Account_emj} | **UserName**: ${target.username}
> :id: | **User ID**: ${target.id}`)
            .setTitle('Avatar Link')
            .setURL(target.avatarURL({ dynamic: true }))
            .setImage(target.avatarURL({ dynamic: true, size: 2048 }))
            .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp();
            message.reply({ embeds: [embedAvatar], allowedMentions: {repliedUser: false} });
        }
    }
}