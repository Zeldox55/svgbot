const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'stop',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`❌ | There is nothing in the queue right now!`)
        queue.stop()
        client.distube.voices.leave(message)
        message.channel.send(`✔ | Stopped!`)
    }
}