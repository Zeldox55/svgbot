const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const serverSchema= require("../../Models/serverSchema");


module.exports = {
        name: 'report-bugs',
        description: 'Report Bot Problem',
        aliases: ["report"],
        usage: '',
        accessableby: "",
        cooldown: '10800',
    run: async (client, message, args) => {
        const report = message.content.split(" ").slice(1).join(" ");
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const talkedRecently = new Set;

        if(talkedRecently.has(message.author.id)) return message.reply({ content: "You have already Reported bugs please wait the next report in 3 hours " })
        if(!report) return message.reply({ content: `Please Tap your Bugs` }).then(msg => {
            message.delete()
            setTimeout(() => msg.delete(), 5000)});
        const embedReport = new MessageEmbed()
        .setAuthor("NEW BUGS REPORT", client.user.avatarURL({dynamic : true}))
        .setDescription(`${emoji.linesvg}
_   ${emoji.booster_god} **| Bugs Description :**
    ${emoji.flesh_emj} ${report}
_   ${emoji.emoji_1} **| Reported in :**
    ${emoji.flesh_emj} ${message.guild.name}
_   ${emoji.URLMEN_emj} **| Reported by :**
    ${emoji.flesh_emj} <@${message.author.id}>
${emoji.linesvg}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/777156025987629117/789464875549458432/1608293466279.png")
        .setColor("YELLOW")
        .setFooter(`Requested by : @${message.author.tag}`,message.author.avatarURL({dynamic : true}))
        .setTimestamp();
        client.channels.cache.get("945013869355626498").send({ embeds: [embedReport] }).then(function (message) { message.react(`${emoji.tickred}`) 
            message.react(`${emoji.tickgreen}`)});
        message.reply({ content: 'the bugs was reported thank you !' })
    }
}