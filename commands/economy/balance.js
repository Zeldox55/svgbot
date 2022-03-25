// const Discord = require('discord.js');
// const config = require('../../configs/config.json');


// module.exports = {
//         name: 'balance',
//         description: 'Show SVGcoins Balance',
//         aliases: [""],
//         usage: '',
//         accessableby: "",
//     run: async (client, message, args, profileData) => {
//         let target = message.mentions.members.first() || message.author;
//         if(!target) return message.reply({ content: "I cant find this member" })
//         message.reply({ content: `${target.username} , Your SVG coin Balance is \`${profileData.SVGcoins}\` .` })
//     }
// }