const { WebhookClient } = require('discord.js');
const moment = require('moment');
const emoji = require('../../configs/emotes.json');
const webhook =new WebhookClient({ url: 'https://discord.com/api/webhooks/955081904644816906/FhK0MpgQjWFUC3aCX9yVcA9YgyhRaKTqxoM-xe-s7U8uMlWXFtmeW7XHG4gezf13icd1' })

module.exports = (client, error) => {
    console.log(String(error).red.dim);

    const embedError = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setTitle(`${emoji.lisr} Bot Logged in ${emoji.limn}`)
    .setDescription(`> ** - Error, Commands Loaded! - **
> ${emoji.SvgLogo_emj} | **${client.user.username} Has an Error!**
>${emoji.error_emj} | **Error**:
> - **${error}**`)
    .setTimestamp();

    webhook.send({
        content: '@here',
        embeds:  [embedError]
    })
}