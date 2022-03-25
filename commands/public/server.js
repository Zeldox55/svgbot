const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const serverSchema= require("../../Models/serverSchema");
const moment = require("moment");
const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    VERY_HIGH: 'Highest'
};


module.exports = {
        name: 'server',
        description: 'See Server Info',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        let premiumTiers; switch (message.guild.premiumTier) {
            case 'NONE': 
            BoostLevel = '0'
            break;
            case 'TIER_1': 
            BoostLevel = '1'
            break;
           case "TIER_2":
               BoostLevel = '2'
            break;
            case "TIER_3":
               BoostLevel = '3'
            break;
        }
        
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const embedServer = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTitle(`${emoji.limn} ${message.guild.name}'s INFO ${emoji.lisr}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`> - ${emoji.CH_Bell} | **Server Name**: \`${message.guild.name}\`
> - :id: | **Server ID**: \`${message.guild.id}\`
> - ${emoji.hand} | **Server Prefix**: \`${server?.prefix ?? config.prefix}\`
> - :calendar: | **Created At**: \`${moment(message.guild.createdAt).format("YYYY/M/D")}\` | \`${moment(message.guild.createdAt).fromNow()}\`
> - ${emoji.king_emj} | **Owner**: <@${message.guild.ownerId}>
> - ${emoji.Account_emj} | **Members**: \`${message.guild.members.cache.size}\`
> - ${emoji.setting_emj} | **All Channels**: \`${message.guild.channels.cache.size}\`
> - ${emoji.text_emj} | **Text Channels**: \`${message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size}\`
> - ${emoji.voice_emj} | **Voice Channels**: \`${message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}\`
> - ${emoji.boost} | **Boost Count**: \`${message.guild.premiumSubscriptionCount || '0'}\`
> - ${emoji.boostLevel} | **Boost Level**: \`${BoostLevel}\`
> - ${emoji.EarlySupporter} | **Verification Level**: \`${verificationLevels[message.guild.verificationLevel]}\`
> - :label: | **Roles Count**: \`${message.guild.roles.cache.size}\`
> - ${emoji.cup}| **Emojis Count**: \`${message.guild.emojis.cache.size}\``)
        .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278909795954749/AADF5BE3-7F92-4D10-9DF7-16297D51275C.jpg')
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp();
        message.reply({ embeds: [embedServer], allowedMentions: {repliedUser: false} });
    }
}