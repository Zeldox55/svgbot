const { Discord, MessageEmbed, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const serverModel= require("../../Models/serverSchema");
const embed = require('../../Utility/commandEmbeds');

module.exports = {
        name: 'autorole',
        description: 'To Set a AutoRole',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        
        const role = await message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        const server = await serverModel.findOne({guildId: message.guild.id});

        if(!args[0]) return embed.autoroleUsage(message, server);


        if(args[0] === "set") {
            if(!args[1]) return embed.autoroleSetUsage(message, server);
            if(!role) return embed.CantFindRole(message);
            if(role.id === server.autoroleId) return embed.RoleAlreadyEquiped(message);
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                guildName: message.guild.name,
                autoroleId: role.id,
                autoroleStatus: "on"
            })
            embed.autoroleSet(message, role);
            return;
        }

        if(args[0] === "enable") {
            if(server.autoroleId === null) return embed.setRole(message);
            if(!message.guild.roles.cache.get(server.autoroleId)) {
                await serverModel.findOneAndUpdate({
                    guildId: message.guild.id},{
                    autoroleId: null,
                    autoroleStatus: "off"
                })
                return embed.setRole(message);
            }
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                autoroleStatus: "on"
            })
            if(server.autoroleStatus === "on") return embed.AlreadyOn(message)
            embed.autoroleOn(message);
        }

        if(args[0] === "disable") {
            if(server.autoroleId === null) return embed.setRole(message);
            if(!message.guild.roles.cache.get(server.autoroleId)) {
                await serverModel.findOneAndUpdate({
                    guildId: message.guild.id},{
                    autoroleId: null,
                    autoroleStatus: "off"
                })
                return embed.setRole(message);
            }
            await serverModel.findOneAndUpdate({
                guildId: message.guild.id},{
                autoroleStatus: "off"
            })
            if(server.autoroleStatus === "off") return embed.AlreadyOff(message);
            embed.autoroleOff(message);
        }

        if(args[0] === "info") {
            if(server.autoroleId === null) {
                const role = "none";
                const embedInfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
                .setTitle(`${emoji.lisr} AutoRole INFO ${emoji.limn}`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`> :label: | **Autorole Role**: ${role}
> :information_source: | **AutoRole Status**: ${server.autoroleStatus}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setTimestamp();
                message.reply({ embeds: [embedInfo] });
            } else {
                const role = `<@&${server.autoroleId}>`;
                const embedInfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
                .setTitle(`${emoji.lisr} AutoRole INFO ${emoji.limn}`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`> :label: | **Autorole Role**: ${role}
> :information_source: | **AutoRole Status**: ${server.autoroleStatus}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                .setTimestamp();
                message.reply({ embeds: [embedInfo] });
            }
        }
    }
}