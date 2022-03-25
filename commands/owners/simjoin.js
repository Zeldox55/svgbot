const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'simjoin',
        description: '',
        aliases: ["sj"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        if(message.author.id != config.owner) return;
        client.emit('guildMemberAdd', message.member);
    }
}