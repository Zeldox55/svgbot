const { Discord, Permissions } = require('discord.js');
const config = require('../../configs/config.js');
const serverSchema = require("../../Models/serverSchema");


module.exports = {
        name: 'unmute',
        description: 'Unmute a Member',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
        const target = message.mentions.members.first();
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
            if(!args[0]) return message.reply({ content: "Please Mention Someone", allowedMentions: {repliedUser: false} });
            if(target) {
                target.roles.remove(muteRole);
                message.reply({ content: `${target} has been unmuted`, allowedMentions: {repliedUser: false} });
            } else {
                message.reply({ content: 'I cant find this member', allowedMentions: {repliedUser: false} })
            }
    }
}