const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'playskip',
        description: '',
        aliases: ["ps"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const string = args.join(' ')
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
        client.distube.play(message.member.voice.channel, string, {
          member: message.member,
          textChannel: message.channel,
          message,
          skip: true
        })
    }
}