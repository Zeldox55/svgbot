const { Discord, MessageEmbed, Permissions } = require('discord.js');
const ms = require('ms');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const embed = require('../../Utility/commandEmbeds')


module.exports = {
        name: 'clear',
        description: 'Delete Message Chat',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '5',
    run: async (client, message, args) => {
      try {
          if(!message.member.permissions.has([Permissions.FLAGS.MANAGE_MESSAGES || Permissions.FLAGS.ADMINISTRATOR])) return embed.Permission(message);
          let messageCount = args[0];
          let messagecount = messageCount;
          let countParsed = parseInt(messagecount);
          if(!messagecount) { 
            const messages = await message.channel.messages.fetch({limit: 100,});
            const filtred = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 Days"));
            message.channel.bulkDelete(filtred);
            message.channel.send({ content: `> ${emoji.loadingCercle} **| Delting ...**`, allowedMentions: {repliedUser: false} })
            .then(msg => {
              setTimeout(function() {
                msg.edit({ content: `> ${emoji.tickgreen} **| ${filtred.size - 1} Messages Deleted .**`, allowedMentions: {repliedUser: false} })
              }, 1000)
              setTimeout(() => msg.delete(), 3000)
            })
            return;
          }
          if(isNaN(messagecount)) {
            message.reply({ content: `> ${emoji.tickred} **| That is not a Number**`, allowedMentions: {repliedUser: false} }).then(msg => { setTimeout(() => msg.delete(), 3000)})
            return;
          }
          if(messagecount > 100) { message.reply({ content: `> ${emoji.tickred} **| You can only delete between 1 and 100 messages !**`, allowedMentions: {repliedUser: false} }).then(msg => { setTimeout(() => msg.delete(), 3000)})
          return;
          }
          if(messagecount <= 99 ) {
            const messages2 = await message.channel.messages.fetch({limit: countParsed + 1,});
            const filtred2 = messages2.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 Days"));
            message.channel.bulkDelete(filtred2)
            message.channel.send({ content: `> ${emoji.loadingCercle} **| Delting ...**`, allowedMentions: {repliedUser: false} })
            .then(msg => {
              setTimeout(function() {
                msg.edit({ content: `> ${emoji.tickgreen} **| ${filtred2.size - 1} Messages Deleted**`, allowedMentions: {repliedUser: false} })
              }, 1000)
              setTimeout(() => msg.delete(), 3000)
            })
            return;
          }
          if(messagecount = "100"){
            const messages3 = await message.channel.messages.fetch({limit: countParsed,});
            const filtred3 = messages3.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 Days"));
            message.channel.bulkDelete(filtred3)
            message.channel.send({ content: `> ${emoji.loadingCercle} **| Delting ...**`, allowedMentions: {repliedUser: false} })
            .then(msg => {
              setTimeout(function() {
                msg.edit({ content: `> ${emoji.tickgreen} **| ${filtred3.size - 1} Messages Deleted**`, allowedMentions: {repliedUser: false} })
              }, 1000)
              setTimeout(() => msg.delete(), 3000)
            })
            return;
          }
        } catch (err) {
          console.log(err)
        }
    }
}