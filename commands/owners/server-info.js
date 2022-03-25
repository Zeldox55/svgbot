const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const serverModel= require("../../Models/serverSchema");
const moment = require("moment");

module.exports = {
        name: 'server-info',
        description: 'Show Server Info by ID',
        aliases: ["si"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        if(message.author.id != config.owner) return;
        if(!args[0]) return message.reply({ content: `> ${emoji.warning_emj} **| Please Tap A Server ID !**`, allowedMentions: {repliedUser: false} });
        if(isNaN(args[0])) return message.reply({ content: `> ${emoji.tickred} **| This is not a ID !**`, allowedMentions: {repliedUser: false} });
        const guild = client.guilds.cache.get(args[0]);
        if(!guild) return message.reply({ content: `> ${emoji.tickred} **| I Can't Find This Server !**`, allowedMentions: {repliedUser: false} });

        const server = await serverModel.findOne({guildId: guild.id});

        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: 'High',
            VERY_HIGH: 'Highest'
        };

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

        if(!server) {
            let channel = guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first();
            let invite = channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(() => "Missing Perissions").then(async (invite) => {
                await serverModel.create({
                    guildId: guild.id,
                    guildName: guild.name,
                    invite: invite.url
                })
            })
            invite.save();
        }

        const embedServerInfo = new MessageEmbed()
        .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
        .setTitle(`${emoji.limn} ${guild.name}'s INFO ${emoji.lisr}`)
        .setDescription(`> - ${emoji.CH_Bell} | **Server Name**: \`${guild.name}\`
> - :id: | **Server ID**: \`${guild.id}\`
> - ${emoji.hand} | **Server Prefix**: \`${server?.prefix ?? config.prefix}\`
> - ${emoji.king_emj} | **Owner**: <@${guild.ownerId}>
> - ${emoji.king_emj} | **Owner ID**: ${guild.ownerId}
> - ${emoji.Account_emj} | **Members**: \`${guild.members.cache.size}\`
> - ${emoji.boost} | **Boost Count**: \`${guild.premiumSubscriptionCount || '0'}\`
> - ${emoji.URLMEN_emj} | **Server Link**: 
> - ${server.invite}
> - :calendar: | **Created At**: \`${moment(guild.createdAt).format("YYYY/M/D")}\` | \`${moment(guild.createdAt).fromNow()}\``)
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp();
        
        message.reply({ embeds: [embedServerInfo], allowedMentions: {repliedUser: false} });
    }
}