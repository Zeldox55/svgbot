const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'play',
        description: 'Play Music',
        aliases: ["p"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args, player) => {
        if (!message.member.voice.channelId) return await message.reply({ content: "You are not in a voice channel!", ephemeral: true });
        const string = args.join(' ')
        if (!string) return message.channel.send(`❌ | Please Enter Your Music Title or URL !`)
        client.distube.play(message.member.voice.channel, string, {
          member: message.member,
          textChannel: message.channel,
          message
        })
    }
}