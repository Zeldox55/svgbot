const { Discord, MessageEmbed, MessageActionRow, Util } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const moment = require('moment');
const MineSweeper = require('discord.js-minesweeper');


module.exports = {
        name: 'roles',
        description: 'See Server Roles List',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        try {
            const space = "                     ";
            const guildRoles = message.guild.roles.cache.sort((first, second) => second.position - first.position).map(r => `${r.name} ${space.substring(r.name.length)}${r.members.size} Members`).join("\n");
            sentRoles = `${guildRoles}`
            const embedRoles = new MessageEmbed()
            .setAuthor(client.user.username,client.user.avatarURL({ dynamic: true }))
            .setTitle(`${emoji.lisr} ` + message.guild.name + `'s Roles ${emoji.limn}`)
            .setDescription("\`\`\`" + guildRoles + "\`\`\`")
            .setColor('GOLD')
            .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp();
            let rolesSplit = Util.splitMessage(guildRoles,);

            if(guildRoles.length > "1" && guildRoles.length < "2000") {
                message.reply({ content: `\`\`\`${rolesSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else
            if(guildRoles.length > "2000" && guildRoles.length < "4000") {
                message.reply({ content: `\`\`\`${rolesSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else
            if(guildRoles.length > "4000" && guildRoles.length < "6000") {
                message.reply({ content: `\`\`\`${rolesSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[2]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else
            if(guildRoles.length > "6000" && guildRoles.length < "8000") {
                message.reply({ content: `\`\`\`${rolesSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[2]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[3]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else 
            if(guildRoles.length > "8000" && guildRoles.length < "10000") {
                message.reply({ content: `\`\`\`${rolesSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[2]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[3]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${rolesSplit[4]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `This is My Max List`, allowedMentions: {repliedUser: false}, split: true });
            }
        } catch(err) {
            console.log(err)
        }
    }
}