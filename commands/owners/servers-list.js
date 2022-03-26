const { Discord, MessageEmbed, Util, Permissions, InviteStageInstance } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');

const { owner } = require('../../configs/config.js');


module.exports = {
        name: 'servers-list',
        description: 'Sow All Servers Bot',
        aliases: ["sl"],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
        if(message.author.id != owner) return;


        let guilds = client.guilds.cache.map(r => {
            let channel = r.channels.cache.filter(c => c.type == 'GUILD_TEXT').first();
            return { guild: r, invite: channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(() => "Missing Perissions") }
        });

        let result = ""

        for (let i = 0; i < guilds.length; i++) {
            let invite = await guilds[i].invite
            result += `\n▶ | Name:    ${guilds[i].guild.name}\n▶ | Member:  ${guilds[i].guild.memberCount}\n▶ | ID:      ${guilds[i].guild.id} \n▶ | Link:    ${invite.code ?? "Missing Permissions"}\n`
        }
            const resultSplit = Util.splitMessage(result);

            if(result.length > "1" && result.length < "2000") {
                message.reply({ content: `\`\`\`${resultSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else
            if(result.length > "2000" && result.length < "4000") {
                message.reply({ content: `\`\`\`${resultSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else
            if(result.length > "4000" && result.length < "6000") {
                message.reply({ content: `\`\`\`${resultSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[2]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else
            if(result.length > "6000" && result.length < "8000") {
                message.reply({ content: `\`\`\`${resultSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[2]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[3]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
            } else 
            if(result.length > "8000" && result.length < "10000") {
                message.reply({ content: `\`\`\`${resultSplit[0]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[1]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[2]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[3]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });
                message.reply({ content: `\`\`\`${resultSplit[4]}\`\`\``, allowedMentions: {repliedUser: false}, split: true });                    
                message.reply({ content: `This is My Max List`, allowedMentions: {repliedUser: false}, split: true });
            }
    }
}
