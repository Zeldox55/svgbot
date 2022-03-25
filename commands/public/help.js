const { Discord, MessageEmbed, MessageButton } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const paginationEmbed = require('discordjs-button-pagination');
const embed = require('../../Utility/commandEmbeds')
const timeout = 120000;
const serverSchema = require("../../Models/serverSchema");
const botdescription = `> **${emoji.CH_Bell} | Our Website [click here](https://www.svgbot.tk)**`;
const botinfo = `> **More Info:**
> ${config.prefix}help help`;


module.exports = {
        name: 'help',
        description: '',
        aliases: ["h"],
        usage: '',
        accessableby: "",
        cooldown: '10',
    run: async (client, message, args) => {
        const server = await serverSchema.findOne({guildId: message.guild.id});
            try{
                if(!args[0]) {
                const embed1 = new MessageEmbed()
                .setAuthor(client.user.username,client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setColor("GOLD")
                .setTitle("")
                .setDescription(`${botdescription}
${emoji.lisr} - **Help List** - ${emoji.limn}**
${emoji.general_emj} | Public                | Page: 2
${emoji.moderation_emj} | Moderation     | Page: 3
${emoji.music_emj} | Music                | Page: 4
${emoji.welcome}| Welcome         | Page: 5
${emoji.autorole} | Autorole          | Page: 6**
${botinfo}`)
                .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278657911210044/78495CA3-95B6-4126-BFA6-446C29AF2549.jpg');
                
                const embed2 = new MessageEmbed()
                .setAuthor(client.user.username,client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setColor("GOLD")
                .setTitle("")
                .setDescription(`${botdescription}
${emoji.linesvg}
> ${emoji.general_emj} **| GENERAL COMMAND** 
**${config.prefix}user
${config.prefix}avatar
${config.prefix}server
${config.prefix}invites
${config.prefix}roles
${config.prefix}bot
${config.prefix}ping
${config.prefix}roles
${config.prefix}inv
${config.prefix}support
${config.prefix}report-bug**
${botinfo}`)
                .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278680044535808/516AC4E8-39D2-4FCC-BB10-6F49F72852C4.jpg');
                
                const embed3 = new MessageEmbed()
                .setAuthor(client.user.username,client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setColor("GOLD")
                .setTitle("")
                .setDescription(`${botdescription}
${emoji.linesvg}
> ${emoji.moderation_emj} **| ADMIN COMMAND**
**${config.prefix}ban
${config.prefix}kick
${config.prefix}mute
${config.prefix}unmute
${config.prefix}say
${config.prefix}hide
${config.prefix}show
${config.prefix}nickname
${config.prefix}role
${config.prefix}embed
${config.prefix}clear
${config.prefix}lock
${config.prefix}unlock
${config.prefix}setprefix**
${botinfo}`)
                .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278850014515200/2A444B83-8861-4469-ABDE-22E37EDA30CC.jpg');
                
                const embed4 = new MessageEmbed()
                .setAuthor(client.user.username,client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setColor("GOLD")
                .setTitle("")
                .setDescription(`${botdescription}
${emoji.linesvg}
> ${emoji.music_emj} **| MUSIC COMMAND**
**${config.prefix}play
${config.prefix}stop
${config.prefix}skip
${config.prefix}pause
${config.prefix}resume
${config.prefix}playskip
${config.prefix}seek
${config.prefix}loop
${config.prefix}nowplaying
${config.prefix}shuffle
${config.prefix}join
${config.prefix}leave
${config.prefix}autoplay
${config.prefix}filters
${config.prefix}volume
${config.prefix}queue**
${botinfo}`)
                .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278696775618652/4BD1A1A6-DF00-494C-A8B7-E7E5080230B8.jpg');
                

                const embed5 = new MessageEmbed()
                .setAuthor(client.user.username,client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setColor("GOLD")
                .setTitle("")
                .setDescription(`${botdescription}
${emoji.linesvg}
> ${emoji.welcome} **| WELCOME COMMAND**
**${config.prefix}welcome set
${config.prefix}welcome message
${config.prefix}welcome image
${config.prefix}welcome enable
${config.prefix}welcome disable
${config.prefix}welcome info**
${botinfo}`)
                .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278696775618652/4BD1A1A6-DF00-494C-A8B7-E7E5080230B8.jpg');


                const embed6 = new MessageEmbed()
                .setAuthor(client.user.username,client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setColor("GOLD")
                .setTitle("")
                .setDescription(`${botdescription}
${emoji.linesvg}
> ${emoji.autorole} **| AUTOROLE COMMAND**
**${config.prefix}autorole set
${config.prefix}autorole enable
${config.prefix}autorole disable
${config.prefix}autorole info**
${botinfo}`)
                .setImage('https://cdn.discordapp.com/attachments/945013879296131094/953278696775618652/4BD1A1A6-DF00-494C-A8B7-E7E5080230B8.jpg');

                const button1 = new MessageButton()
                        .setCustomId('previousbtn')
                        .setLabel('◀')
                        .setStyle('SECONDARY')

                const button2 = new MessageButton()
                        .setCustomId('nextbtn')
                        .setLabel('▶')
                        .setStyle('SECONDARY')

                        pages = [
                        embed1,
                        embed2,
                        embed3,
                        embed4,
                        embed5,
                        embed6,
                        ];

                        buttonList = [
                        button1,
                        button2
                        ]

                        paginationEmbed(message, pages, buttonList, timeout);
                }

                if(args[0]) {
                        if(args[0] === "help") return embed.HelpUsage(message, server); 
                        if(args[0] === "bot") return embed.BotUsage(message, server); 
                        if(args[0] === "inv") return embed.invUsage(message, server); 
                        if(args[0] === "report-bugs") return embed.reportBugsUsage(message, server); 
                        if(args[0] === "support") return embed.supportUsage(message, server); 
                        if(args[0] === "ban") return embed.BanUsage(message, server);
                        if(args[0] === "clear") return embed.clearUsage(message, server);
                        if(args[0] === "embed") return embed.EmbedUsage(message, server);
                        if(args[0] === "hide") return embed.HideUsage(message, server);
                        if(args[0] === "kick") return embed.KickUsage(message, server);
                        if(args[0] === "lock") return embed.LockUsage(message, server);
                        if(args[0] === "mute") return embed.MuteUsage(message, server);
                        if(args[0] === "nickname") return embed.NickUsage(message, server);
                        if(args[0] === "role") return embed.roleUsage(message, server);
                        if(args[0] === "say") return embed.SayUsage(message, server);
                        if(args[0] === "show") return embed.ShowUsage(message, server);
                        if(args[0] === "unlock") return embed.unlockUsage(message, server);
                        if(args[0] === "unmute") return embed.unmuteUsage(message, server);
                        if(args[0] === "avatar") return embed.AvatarUsage(message, server); 
                        if(args[0] === "invites") return embed.invitesUsage(message, server);
                        if(args[0] === "ping") return embed.pingUsage(message, server); 
                        if(args[0] === "roles") return embed.RolesUsage(message, server);
                        if(args[0] === "server") return embed.serverUsage(message, server); 
                        if(args[0] === "user") return embed.userUsage(message, server); 
                        if(args[0] === "autorole") return embed.autoroleUsage(message, server);
                        if(args[0] === "setprefix") return embed.setprefixUsage(message, server);
                        if(args[0] === "welcome") return embed.welcomeUsage(message, server);
                }
        } catch(err) {
                console.log(err);
        }
    }
}