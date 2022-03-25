const { Discord, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const moment = require('moment');
const serverSchema= require("../../Models/serverSchema");

module.exports = {
        name: 'bot',
        description: 'See Bot info',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '15',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});

        const embedBot = new MessageEmbed()
        .setAuthor(client.user.username,client.user.avatarURL())
        .setTitle(`${emoji.lisr} ${client.user.username}'s Info ${emoji.limn}`)
        .setThumbnail(client.user.avatarURL({dynamic : true}))
        .setDescription(`> - ${emoji.SvgLogo_emj} | Bot Name: \`${client.user.tag}\`
> - ${emoji.URLMEN_emj} | Prefix: \`${server?.prefix ?? config.prefix}\`
> - :id: | BotID: \`${client.user.id}\`
> - ${emoji.discordgif_emj} | PING: \`${client.ws.ping}ms\`
> - ${emoji.discordNitro_emj} | Servers: \`${client.guilds.cache.size}\`
> - ${emoji.Account_emj} | Users: \`${client.users.cache.size}\`
> - ${emoji.text_emj} | Channels: \`${client.channels.cache.size}\`
> - :dvd: | CPU Usage: \`${(process.memoryUsage().rss / 1048576).toFixed()} mb\`
> - ${emoji.verifiedBot_emj} | Developers: <@411613098923786241>
> .                                    : <@709089739218616351>
> .                                    : <@571013902230355998>`)
        .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278966289018960/C0BE801D-64FA-4A0E-9AC0-27EC6CD2A5AF.jpg')
        .setTimestamp()
        .setFooter(`Requested By | ${message.author.tag}`,message.author.avatarURL({dynamic : true}))
        .setColor('GOLD');
        
        const rowLink = new MessageActionRow()
        .addComponents(new MessageButton()
        .setLabel('Support Server')
        .setURL('https://discord.gg/svgbot')
        .setStyle('LINK'),
        )
        .addComponents(new MessageButton()
        .setLabel('Add Bot')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=944254831340695582&permissions=8&scope=bot')
        .setStyle('LINK'),
        );
        message.reply({ embeds: [embedBot], allowedMentions: {repliedUser: false}, components: [rowLink] });
    }
}