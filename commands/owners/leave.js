const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'leave',
        description: 'To Leave The Bot From Server',
        aliases: ["lv"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        if(message.author.id != config.owner) return;
        if(!args[0]) return message.reply({ content: `> ${emoji.warning_emj} **| Please Tap A Server ID !**`, allowedMentions: {repliedUser: false} });
        if(isNaN(args[0])) return message.reply({ content: `> ${emoji.tickred} **| This is not a ID !**`, allowedMentions: {repliedUser: false} });
        let guild = client.guilds.cache.get(args[0]);
        if(!guild) return message.reply({ content: `> ${emoji.tickred} **| I Can't Find This Server**`, allowedMentions: {repliedUser: false} });
        guild.leave();
        message.reply({ content: `> ${emoji.tickgreen} **| ${client.user.username} has Left From ${guild.name}.**`, allowedMentions: {repliedUser: false} });
    }
}