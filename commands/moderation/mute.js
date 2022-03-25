const Discord = require('discord.js');
const { Permissions, member } = require('discord.js');
const config = require('../../configs/config.js');
const ms = require('ms');
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;
const serverSchema = require("../../Models/serverSchema");
const embed = require('../../Utility/commandEmbeds')


module.exports = {
        name: 'mute',
        description: 'Mute a Member',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const target =  message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]);
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if(!muteRole) {
            try{
                muteRole = await message.guild.roles.create({
                      name: 'Muted',
                      reason: 'Muted Role for Mute Command',
                      permissions: []
                })
                message.guild.channels.cache.forEach(async (channel, id) => { await channel.permissionOverwrites.create(muteRole, { SEND_MESSAGES: false });
            });
            } catch(e) {
                console.log(e.stack);
            }
        }

        if(!args[0]) return embed.MuteUsage(message, server)
        if(!target) return embed.CantFind(message);
        if(target.roles.cache.find(role => role.name === 'Muted')) return embed.AlreadyMuted(message, target);
        if(target) {
            if(!args[1]) {
                target.roles.add(muteRole);
                embed.Muted(message, target)
                return
            }
            target.roles.add(muteRole);
            embed.MutedFor(message, target, args, ms)
            setTimeout(function () {
                target.roles.remove(muteRole);
            }, ms(args[1]));
        } else {
            embed.CantFind(message);
        }
    }
}