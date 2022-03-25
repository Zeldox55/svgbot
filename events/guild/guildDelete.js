const { discord, guild, client, MessageEmbed } = require('discord.js');
const serverModel = require('../../Models/serverSchema');
const emoji = require('../../configs/emotes.json');

module.exports = async (client, discord, guild, chunks) => {
    let server = await serverModel.findOne({ guildId: guild.id });
    let channel = guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first();

    const embedLeave = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setTitle(`${emoji.lisr} ${emoji.red_flesh} | **New Server Leaved !** ${emoji.limn}`)
    .setDescription(`> ${emoji.cup} | **Server Name**:
>   - ${guild.name}
> :id: | **Server ID**:
>   - ${guild.id}
> ${emoji.king_emj} | **Owner Mention**:
>   - <@${guild.ownerId}>
> ${emoji.discordgif_emj} | **Owner ID**:
>   - ${guild.ownerId}
> ${emoji.Account_emj} | **Member Count**:
>   - ${guild.members.cache.size}
> ${emoji.URLMEN_emj} | **Server Link**:
>   - ${server?.invite ?? "No Link"}
> ${emoji.emoji_1} | **Server Counter**:
>   - ${client.guilds.cache.size}`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setTimestamp();
    
    let leaveChannel = client.channels.cache.get("953054460832272404");

    leaveChannel.send({ content: '@here', embeds: [embedLeave] });

    serverModel.findOneAndDelete({
        guildId: guild.id,
    }).exec()
    .catch(console.log);

}