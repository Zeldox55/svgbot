const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'leave',
        description: '',
        aliases: ["dis", "disconnect"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        client.distube.voices.leave(message)
    }
}