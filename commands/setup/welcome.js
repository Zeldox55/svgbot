const { Discord, MessageEmbed, Permissions } = require('discord.js');
const serverModel= require("../../Models/serverSchema");
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const serverSchema = require("../../Models/serverSchema");
const embed = require('../../Utility/commandEmbeds');


module.exports = {
    name: 'welcome',
    description: '',
    aliases: [""],
    usage: '',
    accessableby: "",
    cooldown: '15',
    run: async (client, message, args) => {
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        const server = await serverModel.findOne({guildId: message.guild.id});
        const channel = await message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if(!args[0]) return embed.welcomeUsage(message, server);
        if(args[0] === "set") {
            if(!args[1]) return embed.welcomeSetUsage(message, server);
            if(!channel) return embed.CantFindChannel(message);
            if(channel.id === server.welcomeId) return embed.ChannelAlreadyEquiped(message);
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                guildName: message.guild.name,
                welcomeId: channel.id,
                welcomeStatus: "on"
            })
            embed.WelcomeSet(message, channel);
            return;
        }

        if(args[0] === "message") {
            if(!args[1]) return embed.welcomeMessageUsage(message, server);
            const Message = message.content.split(` `).slice(2).join(' ');
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                guildName: message.guild.name,
                welcomeMessage: Message
            })
            embed.welcomeMessage(message, Message);
            return;
        }

        if(args[0] === "image") {
            if(message.attachments.size > 0) {
                var attachment = message.attachments.first();
                await serverModel.findOneAndUpdate({
                    guildId: message.guild.id},{
                    guildName: message.guild.name,
                    welcomeImage: attachment.url
                })
                return embed.welcomeImage(message, attachment);
            } else {
                embed.welcomeImageUsage(message, server);
            }
        }

        if(args[0] === "enable") {
            if(server.welcomeId === null) return message.setWelcome(message);
            if(!message.guild.roles.cache.get(server.autoroleId)) {
                await serverModel.findOneAndUpdate({
                    guildId: message.guild.id},{
                    welcomeId: null,
                    welcomeStatus: "off"
                })
                return embed.setWelcome()
            }
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                welcomeStatus: "on"
            })
            if(server.welcomeStatus === "on") return embed.WAlreadyOn(message);
            embed.welcomeOn(message);
        }

        if(args[0] === "disable") {
            if(server.welcomeId === null) return embed.setWelcome(message);
            if(!message.guild.channel.cache.get(server.welcomeId)) {
                await serverModel.findOneAndUpdate({
                    guildId: message.guild.id},{
                    welcomeId: null,
                    welcomeStatus: "off"
                })
                return embed.setWelcome(message);
            }
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                welcomeStatus: "off"
            })
            if(server.welcomeStatus === "off") return embed.WAlreadyOff(message);
            embed.welcomeOff(message);
        }

        if(args[0] === "info") {
            if(server.welcomeId === null && server.welcomeMessage === null) {
                const channel = "none";
                const welcomeMessage = "No Message";
                const embedInfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
                .setTitle(`${emoji.lisr} Welcome INFO ${emoji.limn}`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`> :label: | **Welcome channel**: ${channel}
> :information_source: | **Welcome Status**: ${server.welcomeStatus}
> :incoming_envelope: | **Welcome Message**:
> - ${welcomeMessage}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setTimestamp();
                message.reply({ embeds: [embedInfo] });
            }else if(server.welcomeMessage === null) {
                const welcomeMessage = "No Message";
                const embedInfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
                .setTitle(`${emoji.lisr} Welcome INFO ${emoji.limn}`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`> :label: | **Welcome channel**: <#${server.welcomeId}>
> :information_source: | **Welcome Status**: ${server.welcomeStatus}
> :incoming_envelope: | **Welcome Message**:
> - ${welcomeMessage}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setTimestamp();
                message.reply({ embeds: [embedInfo] });
            } else 
            if(server.welcomeId === null) {
                const channel = "none";
                const embedInfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
                .setTitle(`${emoji.lisr} Welcome INFO ${emoji.limn}`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`> :label: | **Welcome channel**: ${channel}
> :information_source: | **Welcome Status**: ${server.welcomeStatus}
> :incoming_envelope: | **Welcome Message**:
> - ${server.welcomeMessage}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setTimestamp();
                message.reply({ embeds: [embedInfo] });
            } else {
                const channel = `<#${server.welcomeId}>`;
                const embedInfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
                .setTitle(`${emoji.lisr} Welcome INFO ${emoji.limn}`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`> :label: | **Welcome Channel**: ${channel}
> :information_source: | **Welcome Status**: ${server.welcomeStatus}
> :incoming_envelope: | **Welcome Message**:
 - ${server.welcomeMessage}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setTimestamp();
                message.reply({ embeds: [embedInfo] });
            }
        }
    }
}