const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'pause',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if(!queue) return message.channel.send(`❌ | There is nothing in the queue right now!`)

        queue.pause()
        message.channel.send('Paused the song for you :)')
    }
}