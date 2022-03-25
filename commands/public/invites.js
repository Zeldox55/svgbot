const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');


module.exports = {
        name: 'invites',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        const target =  message.mentions.members.first() || message.guild.members.cache.find(member => member.id === args[0]) || message.member;
        const invites = await message.guild.invites.fetch();
        const userInv = invites.filter(u => u.inviter && u.inviter.id === target.id );


        let invCodes = "-" + userInv.map(x => x.code).join('\n');
        let i = 0;
        userInv.forEach(inv => i += inv.uses)
        const embedInvites = new MessageEmbed()
        .setAuthor(client.user.username,client.user.avatarURL({ dynamic: true }))
        .setTitle(`${emoji.lisr} ` + target.user.username + `'s Invites ${emoji.limn}`)
        .setThumbnail(target.user.avatarURL({ dynamic: true }))
        .setDescription(`> ${emoji.cup} | **Total Invites**: ${i}
> ${emoji.flesh_emj} | **Invites Codes**:
> \`${invCodes}\``)
        .setColor('GOLD')
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp();
        message.reply({ embeds: [embedInvites], allowedMentions: {repliedUser: false} });
    }
}