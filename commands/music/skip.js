const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'skip',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        try {
          const song = await queue.skip()
          message.channel.send(`✔ | Skipped! Now playing:\n${song.name}`)
        } catch (e) {
          message.channel.send(`❌ | ${e}`)
        }
    }
}