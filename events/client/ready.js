const config = require('../../configs/config.js');
const moment = require('moment');
const emoji = require('../../configs/emotes.json');
const { WebhookClient, MessageEmbed } = require('discord.js');
const webhook =new WebhookClient({ url: 'https://discord.com/api/webhooks/955081904644816906/FhK0MpgQjWFUC3aCX9yVcA9YgyhRaKTqxoM-xe-s7U8uMlWXFtmeW7XHG4gezf13icd1' })

module.exports = async (client, message) => {
    let totalUsers = client.guilds.cache.reduce((users , value) => users + value.memberCount, 0);
    let totalGuilds = client.guilds.cache.size
    let totalChannels = client.channels.cache.size
    //try {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Active, Commands Loaded!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Logged In!`);
    //client.user.setPresence({status: "dnd"});
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Now ` + totalChannels + ` channels, ` + totalGuilds + ` Servers and ` + totalUsers + ` serving  users!`);
    client.user.setActivity(`${config.prefix}help`, { type: 'PLAYING' });


    const embedLogin = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setTitle(`${emoji.lisr} Bot Logged in ${emoji.limn}`)
    .setDescription(`> **Active, Commands Loaded!**
> ${emoji.SvgLogo_emj}   | **${client.user.username} Logged In!**
> ${emoji.discordNitro_emj}   | **Servers**: ${totalGuilds}
> ${emoji.Account_emj}   | **Users**: ${totalUsers}
> ${emoji.text_emj}  | **Channels**: ${totalChannels}
> ${emoji.Timer_emj}   | **Login Time**:
>  -    \`${moment().format('YYYY-MM-DD HH:mm:ss')}\``)
    .setTimestamp();


    /*webhook.send({
        content: '@here',
        embeds: [embedLogin]
    })
    } catch(error) {
        const embedError = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
        .setTitle(`${emoji.lisr} Bot Logged in ${emoji.limn}`)
        .setDescription(`> ** - Error, Commands Loaded! - **
> ${emoji.SvgLogo_emj} | **${client.user.username} Has an Error!**
>${emoji.error_emj}   | **Error**:
> - **${error}**`)
        .setTimestamp();

        webhook.send({
            content: '@here',
            embeds:  [embedError]
           })
    }*/
}
