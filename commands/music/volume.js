const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'volume',
        description: '',
        aliases: ["vol"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`} | There is nothing in the queue right now!`)
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(`❌ | Please enter a valid number!`)
        queue.setVolume(volume)
        message.channel.send(`✔ | Volume set to \`${volume}\``)
    }
}