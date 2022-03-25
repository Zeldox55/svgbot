const { Discord, MessageEmbed, MessageActionRow } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const moment = require('moment');


module.exports = {
        name: 'user',
        description: 'See User Info',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '15',
    run: async (client, message, args) => {
        const target =  message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]) || message.member;
        moment.locale("en");
        const embedUser = new MessageEmbed()
        .setAuthor(client.user.username,client.user.avatarURL({ dynamic: true }))
        .setTitle(`${emoji.lisr} ` + target.user.username + `'s Info ${emoji.limn}`)
        .setThumbnail(target.user.avatarURL({ dynamic: true }))
        .setDescription(`> - ${emoji.Account_emj} | **Username**:   \`\`${target.user.tag}\`\`
> - :id: | **User ID**:   \`${target.id}\`
> - :hash: | **Discriminator**:   \`${target.user.discriminator}\`
> - :calendar: | **Created At**:   \`${moment(target.user.createdAt).format("YYYY/M/D")}\` | \`${moment(target.user.createdAt).fromNow()}\`
> - :airplane_arriving: | **Joined Server**:   \`${moment(target.joinedAt).format("YYYY/M/D")}\` | \`${moment(target.joinedAt).fromNow()}\`
> - :label: | **Highest Role**: ${target.roles.highest}`)
        .setColor('GOLD')
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278897770856458/98178608-02AA-4494-BBC4-808F0A693E07.jpg')
        .setTimestamp();
        message.reply({ embeds: [embedUser], allowedMentions: {repliedUser: false} });
    }
}