const { discord, guild, client, MessageEmbed } = require('discord.js');
const serverModel = require('../../Models/serverSchema');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');

module.exports = async (client, discord, guild, chunks) => {
    let channel = guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first();
    let server = await serverModel.findOne({ guildId: guild.id });
    let invite = await channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(() => "Missing Permissions").then(async (invite) => {
            if(!server) {
                let server = await serverModel.create({
                    guildId: guild.id,
                    guildName: guild.name,
                    invite: invite,
                });
            }


    const embedJoin = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setTitle(`${emoji.lisr} ${emoji.green_flesh} | **New Server Joined !** ${emoji.limn}`)
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
>   - ${invite ?? "Missing Permissions"}
> ${emoji.emoji_1} | **Server Counter**:
>   - ${client.guilds.cache.size}`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
    .setTimestamp();
    
    let joinChannel = client.channels.cache.get("953054415877718056");


    joinChannel.send({ content: '@here', embeds: [embedJoin] });

    })
}