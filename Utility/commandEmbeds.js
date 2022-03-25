const { Message, MessageEmbed } = require("discord.js");
const config = require('../configs/config');
const emoji = require('../configs/emotes.json');


module.exports= {
    Permission: function(message) {
    const Permission = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **You Dont Have Permissions !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [Permission], allowedMentions: {repliedUser: false} });
    },


    BanUsage: function(message, server) {
    const BanUsage = new MessageEmbed()
.setDescription(`**Command: ban**
Bans a member
**Usage:**
${server.prefix ?? config.prefix}ban [user] (reason)
**Examples:**
${server.prefix ?? config.prefix}ban ${message.author}
${server.prefix ?? config.prefix}ban ${message.author} Spamming`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
    message.reply({ embeds: [BanUsage], allowedMentions: {repliedUser: false} });
    },


    CantBan: function(message, target) {
        const CantBan = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **You can't Ban** *${target.user.username}* **!**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantBan], allowedMentions: {repliedUser: false} });
        },


    SelfBan: function(message) {
    const SelfBan = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **You can't ban your self !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [SelfBan], allowedMentions: {repliedUser: false} });
    },


    BotBan: function(message) {
    const BotBan = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **I can't ban my self !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [BotBan], allowedMentions: {repliedUser: false} });
    },


    Bannable: function(message, target) {
    const Bannable = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **I can't ban ${target.user.username} !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [Bannable], allowedMentions: {repliedUser: false} });
    },


    Banned: function(message, target) {
    const Banned = new MessageEmbed()
.setDescription(`> ${emoji.tickgreen} | **${target.user.username} Banned !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('GREEN')
.setTimestamp();
    message.reply({ embeds: [Banned], allowedMentions: {repliedUser: false} });
    },


    CantFind: function(message) {
    const CantFind = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **I can't find this member !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [CantFind] , allowedMentions: {repliedUser: false} });   
    },


    Hide: function(message, channel) {
        const Hide = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${channel} Has been hidden !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Hide] , allowedMentions: {repliedUser: false} });   
    },


    EmbedUsage: function(message, server) {
        const EmbedUsage = new MessageEmbed()
    .setDescription(`**Command: embed**
Say your message in embed
**Usage:**
${server.prefix ?? config.prefix}embed [message]
**Examples:**
${server.prefix ?? config.prefix}embed HELLO
${server.prefix ?? config.prefix}embed HELLO WORLD...`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [EmbedUsage] , allowedMentions: {repliedUser: false} });   
    },


    HideUsage: function(message, server) {
        const HideUsage = new MessageEmbed()
    .setDescription(`**Command: hide**
Hide a channel
**Usage:**
${server.prefix ?? config.prefix}hide (channel)
**Examples:**
${server.prefix ?? config.prefix}hide
${server.prefix ?? config.prefix}hide ${message.channel}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [HideUsage] , allowedMentions: {repliedUser: false} });   
    },


    KickUsage: function(message, server) {
        const KickUsage = new MessageEmbed()
.setDescription(`**Command: kick**
Kick a member
**Usage:**
${server.prefix ?? config.prefix}kick [user] (reason)
**Examples:**
${server.prefix ?? config.prefix}kick ${message.author}
${server.prefix ?? config.prefix}kick ${message.author} Spamming`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [KickUsage] , allowedMentions: {repliedUser: false} });   
    },


    CantKick: function(message, target) {
        const CantKick = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **You can't kick** *${target.user.username}* **!**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantKick], allowedMentions: {repliedUser: false} });
    },


    SelfKick: function(message) {
    const SelfKick = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **You can't kick your self !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [SelfKick], allowedMentions: {repliedUser: false} });
    },


    BotKick: function(message) {
    const BotKick = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **I can't kick my self !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [BotKick], allowedMentions: {repliedUser: false} });
    },


    Kickable: function(message, target) {
        const Kickable = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **I can't ban ${target.user.username} !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Kickable], allowedMentions: {repliedUser: false} });
    },
    
    
    Kicked: function(message, target) {
        const Kicked = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${target.user.username} Kicked !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('GREEN')
    .setTimestamp();
        message.reply({ embeds: [Kicked], allowedMentions: {repliedUser: false} });
    },


    Lock: function(message, channel) {
        const Lock = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${channel} Has been locked !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Lock] , allowedMentions: {repliedUser: false} });   
    },


    LockUsage: function(message, server) {
        const LockUsage = new MessageEmbed()
    .setDescription(`**Command: lock**
Lock a channel
**Usage:**
${server.prefix ?? config.prefix}lock (channel)
**Examples:**
${server.prefix ?? config.prefix}lock
${server.prefix ?? config.prefix}lock ${message.channel}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [LockUsage] , allowedMentions: {repliedUser: false} });   
    },


    MuteUsage: function(message, server) {
        const MuteUsage = new MessageEmbed()
.setDescription(`**Command: mute**
Mute a member
**Usage:**
${server.prefix ?? config.prefix}mute [user] (time)
**Examples:**
${server.prefix ?? config.prefix}mute ${message.author}
${server.prefix ?? config.prefix}mute ${message.author} 1m
${server.prefix ?? config.prefix}mute ${message.author} 1h
${server.prefix ?? config.prefix}mute ${message.author} 1d
${server.prefix ?? config.prefix}mute ${message.author} 1mo
${server.prefix ?? config.prefix}mute ${message.author} 1y`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [MuteUsage] , allowedMentions: {repliedUser: false} });   
    },


    AlreadyMuted: function(message, target) {
        const AlreadyMuted = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **${target.user.username} Already Muted !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [AlreadyMuted] , allowedMentions: {repliedUser: false} });   
    },


    Muted: function(message, target) {
        const Muted = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${target.user.username}  Muted !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Muted] , allowedMentions: {repliedUser: false} });   
    },



    MutedFor: function(message, target, args, ms) {
        const MutedFor = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${target.user.username}  Muted for ${ms(ms(args[1]))} !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [MutedFor] , allowedMentions: {repliedUser: false} });   
    },


    NickUsage: function(message, server) {
        const NickUsage = new MessageEmbed()
.setDescription(`**Command: nick**
Change nickname of member
**Usage:**
${server.prefix ?? config.prefix}nickname [user] [nickname/reset]
**Examples:**
${server.prefix ?? config.prefix}nickname ${message.author} ZELDOX
${server.prefix ?? config.prefix}nickname ${message.author} reset`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [NickUsage] , allowedMentions: {repliedUser: false} });   
    },


    NickLength: function(message, target, args, ms) {
        const NickLength = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **The Max Length in Nickname is 32 character !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [NickLength] , allowedMentions: {repliedUser: false} });   
    },


    CantUpdate: function(message, target) {
        const CantUpdate = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **You can't update ${target.user.username} nickname !**`) 
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantUpdate] , allowedMentions: {repliedUser: false} });   
    },


   CantNick: function(message, target) {
        const CantNick = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **I can't update ${target.user.username} !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantNick] , allowedMentions: {repliedUser: false} });   
    },


    ResetNick: function(message, target) {
        const ResetNick = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${target.user.username} nickname has been reset.**`) 
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [ResetNick] , allowedMentions: {repliedUser: false} });   
    },


    Nick: function(message, target, nickName) {
        const Nick = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${target.user.username} nickname has update to ${nickName}.**`) 
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Nick] , allowedMentions: {repliedUser: false} });   
    },


    SayUsage: function(message, server) {
        const SayUsage = new MessageEmbed()
    .setDescription(`**Command: say**
Say your message*
**Usage:**
${server.prefix ?? config.prefix}say [message]
**Examples:**
${server.prefix ?? config.prefix}say HELLO
${server.prefix ?? config.prefix}say HELLO WORLD...`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [SayUsage] , allowedMentions: {repliedUser: false} });   
    },


    ShowUsage: function(message, server) {
        const ShowUsage = new MessageEmbed()
    .setDescription(`**Command: show**
Show a channel
**Usage:**
${server.prefix ?? config.prefix}show (channel)
**Examples:**
${server.prefix ?? config.prefix}show
${server.prefix ?? config.prefix}show ${message.channel}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [ShowUsage] , allowedMentions: {repliedUser: false} });   
    },


    Show: function(message, channel) {
        const Show = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${channel} Has been showed !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Show] , allowedMentions: {repliedUser: false} });   
    },


    Unlock: function(message, channel) {
        const Unlock = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **${channel} Has been unlocked !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [Unlock] , allowedMentions: {repliedUser: false} });   
    },


    Playing: function(queue, song, textChannel) {
        const Playing = new MessageEmbed()
    .setTitle(`${emoji.Plak_emj} **Playing** ${emoji.Plak_emj}`)
    .setDescription(`[${song.name}](${song.url})`)
    .setFooter(`Requested By ${song.user.username}`, song.user.avatarURL({ dynamic: true }))
    .setThumbnail(song.thumbnail)
    .setTimestamp();
        queue.textChannel.send({ embeds: [Playing] , allowedMentions: {repliedUser: false} });   
    },


    AvatarUsage: function(message, server) {
        const AvatarUsage = new MessageEmbed()
    .setDescription(`**Command: avatar**
Show avatar user
**Usage:**
${server.prefix ?? config.prefix}avatar (user)
**Examples:**
${server.prefix ?? config.prefix}avatar
${server.prefix ?? config.prefix}avatar ${message.author}
${server.prefix ?? config.prefix}avatar ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [AvatarUsage] , allowedMentions: {repliedUser: false} });   
    },


    HelpUsage: function(message, server) {
        const HelpUsage = new MessageEmbed()
    .setDescription(`**Command: help**
Show command list
**Usage:**
${server.prefix ?? config.prefix}help (command)
**Examples:**
${server.prefix ?? config.prefix}help
${server.prefix ?? config.prefix}help avatar`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [HelpUsage] , allowedMentions: {repliedUser: false} });   
    },


    InvitesUsage: function(message, server) {
        const InvitesUsage = new MessageEmbed()
    .setDescription(`**Command: invites**
Show invites count
**Usage:**
${server.prefix ?? config.prefix}invites (user)
**Examples:**
${server.prefix ?? config.prefix}invites
${server.prefix ?? config.prefix}invites ${message.author}
${server.prefix ?? config.prefix}invites ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [InvitesUsage] , allowedMentions: {repliedUser: false} });   
    },


    PingUsage: function(message, server) {
        const PingUsage = new MessageEmbed()
    .setDescription(`**Command: ping**
Show bot ping
**Usage:**
${server.prefix ?? config.prefix}ping (user)
**Examples:**
${server.prefix ?? config.prefix}ping`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [PingUsage] , allowedMentions: {repliedUser: false} });   
    },


    RolesUsage: function(message, server) {
        const RolesUsage = new MessageEmbed()
    .setDescription(`**Command: ping**
Show server roles list
**Usage:**
${server.prefix ?? config.prefix}roles
**Examples:**
${server.prefix ?? config.prefix}roles`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [RolesUsage] , allowedMentions: {repliedUser: false} });   
    },


    ServerUsage: function(message, server) {
        const ServerUsage = new MessageEmbed()
    .setDescription(`**Command: server**
Show server info
**Usage:**
${server.prefix ?? config.prefix}server
**Examples:**
${server.prefix ?? config.prefix}server`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [ServerUsage] , allowedMentions: {repliedUser: false} });   
    },


    UserUsage: function(message, server) {
        const UserUsage = new MessageEmbed()
    .setDescription(`**Command: user**
Show user info
**Usage:**
${server.prefix ?? config.prefix}user (user)
**Examples:**
${server.prefix ?? config.prefix}user
${server.prefix ?? config.prefix}user ${message.author}
${server.prefix ?? config.prefix}user ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [UserUsage] , allowedMentions: {repliedUser: false} });   
    },


    autoroleUsage: function(message, server) {
        const autoroleUsage = new MessageEmbed()
    .setDescription(`**Command: autorole**
Set autorole role
**Usage:**
${server.prefix ?? config.prefix}autorole (set/info/enable/disable)
**Examples:**
${server.prefix ?? config.prefix}autorole
${server.prefix ?? config.prefix}autorole set
${server.prefix ?? config.prefix}autorole info
${server.prefix ?? config.prefix}autorole enable
${server.prefix ?? config.prefix}autorole disable`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [autoroleUsage] , allowedMentions: {repliedUser: false} });   
    },


    autoroleSetUsage: function(message, server) {
        const autoroleSetUsage = new MessageEmbed()
    .setDescription(`**Command: autorole set**
Set autorole role
**Usage:**
${server.prefix ?? config.prefix}autorole set [role]
**Examples:**
${server.prefix ?? config.prefix}autorole set <role>
${server.prefix ?? config.prefix}autorole set <role id>`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [autoroleSetUsage] , allowedMentions: {repliedUser: false} });   
    },


    autoroleSetUsage: function(message, server) {
        const autoroleSetUsage = new MessageEmbed()
    .setDescription(`**Command: autorole set**
Set autorole role
**Usage:**
${server.prefix ?? config.prefix}autorole set [role]
**Examples:**
${server.prefix ?? config.prefix}autorole set <role>
${server.prefix ?? config.prefix}autorole set <role id>`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [autoroleSetUsage] , allowedMentions: {repliedUser: false} });   
    },


    setprefixUsage: function(message, server) {
        const setprefixUsage = new MessageEmbed()
    .setDescription(`**Command: setprefix**
Set prefix bot in server
**Usage:**
${server.prefix ?? config.prefix}setprefix [prefix]
**Examples:**
${server.prefix ?? config.prefix}setprefix #
${server.prefix ?? config.prefix}setprefix default`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [setprefixUsage] , allowedMentions: {repliedUser: false} });   
    },


    welcomeUsage: function(message, server) {
        const welcomeUsage = new MessageEmbed()
    .setDescription(`**Command: welcome**
Set welcome
**Usage:**
${server.prefix ?? config.prefix}welcome (set)
**Examples:**
${server.prefix ?? config.prefix}welcome
${server.prefix ?? config.prefix}welcome set
${server.prefix ?? config.prefix}welcome message
${server.prefix ?? config.prefix}welcome image
${server.prefix ?? config.prefix}welcome enable
${server.prefix ?? config.prefix}welcome disable
${server.prefix ?? config.prefix}welcome info`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [welcomeUsage] , allowedMentions: {repliedUser: false} });   
    },


    welcomeSetUsage: function(message, server) {
        const welcomeSetUsage = new MessageEmbed()
    .setDescription(`**Command: welcome set**
Set welcome channel
**Usage:**
${server.prefix ?? config.prefix}welcome set (channel)
**Examples:**
${server.prefix ?? config.prefix}welcome set ${message.channel}
${server.prefix ?? config.prefix}welcome set ${message.channel.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [welcomeSetUsage] , allowedMentions: {repliedUser: false} });   
    },


    welcomeMessageUsage: function(message, server) {
        const welcomeSetUsage = new MessageEmbed()
    .setDescription(`**Command: welcome message**
Set welcome message
**Usage:**
${server.prefix ?? config.prefix}welcome message (welcome message)
**Examples:**
${server.prefix ?? config.prefix}welcome message welcome <user>
${server.prefix ?? config.prefix}welcome message welcome to <server>
**Attention**
use <user> to mention user in the message
use <server> to show server name in the message`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [welcomeSetUsage] , allowedMentions: {repliedUser: false} });   
    },


    welcomeImageUsage: function(message, server) {
        const welcomeImageUsage = new MessageEmbed()
    .setDescription(`**Command: welcome image**
Set custom welcome image
**Usage:**
${server.prefix ?? config.prefix}welcome image (upload image)
**Examples:**
${server.prefix ?? config.prefix}welcome image (upload image)
**Attention**
The size of image must be 1280 x 720
And the image dimension mest be like this:`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setImage('https://media.discordapp.net/attachments/945013870936879145/955905441827803156/50447862-0D48-438D-9621-4D3371BFB634.png')
.setTimestamp();
        message.reply({ embeds: [welcomeImageUsage] , allowedMentions: {repliedUser: false} });   
    },


    CantFindRole: function(message) {
        const CantFindRole = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **I can't find this role !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantFindRole] , allowedMentions: {repliedUser: false} });   
    },


    RoleAlreadyEquiped: function(message) {
        const RoleAlreadyEquiped = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **This role is already equiped !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [RoleAlreadyEquiped] , allowedMentions: {repliedUser: false} });   
    },


    autoroleSet: function(message, role) {
        const autoroleSet = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreeh} | **Autorole role set to ${role.id}**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [autoroleSet] , allowedMentions: {repliedUser: false} });   
    },


    setRole: function(message) {
        const setRole = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **You need to setup a role**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [setRole] , allowedMentions: {repliedUser: false} });   
    },


    AlreadyOn: function(message) {
        const AlreadyOn = new MessageEmbed()
    .setDescription(`> ${emoji.online} | **The autorole is already On**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [AlreadyOn] , allowedMentions: {repliedUser: false} });   
    },


    autoroleOn: function(message) {
        const autoroleOn = new MessageEmbed()
    .setDescription(`> ${emoji.online} | **The autorole is now On**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [autoroleOn] , allowedMentions: {repliedUser: false} });   
    },


    AlreadyOff: function(message) {
        const AlreadyOff = new MessageEmbed()
    .setDescription(`> ${emoji.dnd} | **The autorole is already Off**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [AlreadyOff] , allowedMentions: {repliedUser: false} });   
    },


    autoroleOff: function(message) {
        const autoroleOff = new MessageEmbed()
    .setDescription(`> ${emoji.dnd} | **The autorole is now Off**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [autoroleOff] , allowedMentions: {repliedUser: false} });   
    },


    CantFindChannel: function(message) {
        const CantFindChannel = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **I can't find this channel !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantFindChannel] , allowedMentions: {repliedUser: false} });   
    },


    ChannelAlreadyEquiped: function(message) {
        const ChannelAlreadyEquiped = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **This channel is already equiped !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [ChannelAlreadyEquiped] , allowedMentions: {repliedUser: false} });   
    },


    WelcomeSet: function(message, channel) {
        const WelcomeSet = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreeh} | **Welcome channel set to <#${channel.id}>**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [WelcomeSet] , allowedMentions: {repliedUser: false} });   
    },

    WelcomeMessage: function(message, Message) {
        const WelcomeMessage = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreeh} | **Welcome message set to \`${Message}\`**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [WelcomeMessage] , allowedMentions: {repliedUser: false} });   
    },



    WelcomeImage: function(message, attachment) {
        const WelcomeImage = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreeh} | **Welcome image set to \`${attachment.url}\`**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [WelcomeImage] , allowedMentions: {repliedUser: false} });   
    },


    setWelcome: function(message) {
        const setWelcome = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **You need to setup a welcome channel**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [setWelcome] , allowedMentions: {repliedUser: false} });   
    },


    WAlreadyOn: function(message) {
        const WAlreadyOn = new MessageEmbed()
    .setDescription(`> ${emoji.online} | **The welcome is already On**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [WAlreadyOn] , allowedMentions: {repliedUser: false} });   
    },


    welcomeOn: function(message) {
        const welcomeOn = new MessageEmbed()
    .setDescription(`> ${emoji.online} | **The welcome is now On**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [welcomeOn] , allowedMentions: {repliedUser: false} });   
    },


    WAlreadyOff: function(message) {
        const WAlreadyOff = new MessageEmbed()
    .setDescription(`> ${emoji.dnd} | **The welcome is already Off**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [WAlreadyOff] , allowedMentions: {repliedUser: false} });   
    },


    welcomeOff: function(message) {
        const welcomeOff = new MessageEmbed()
    .setDescription(`> ${emoji.dnd} | **The welcome is now Off**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [welcomeOff] , allowedMentions: {repliedUser: false} });   
    },


    PrefixAlready: function(message) {
        const PrefixAlready = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **This prefix is already equiped !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [PrefixAlready] , allowedMentions: {repliedUser: false} });   
    },


    DPrefixAlready: function(message) {
        const DPrefixAlready = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **The Default prefix is already equiped !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [DPrefixAlready] , allowedMentions: {repliedUser: false} });   
    },


    maxLength5: function(message) {
        const maxLength5 = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **The max length of prefix is 5 character !**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [maxLength5] , allowedMentions: {repliedUser: false} });   
    },


    prefixSet: function(message, prefix) {
        const prefixSet = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **Prefix set to \`${prefix}\`**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [prefixSet] , allowedMentions: {repliedUser: false} });   
    },


    prefixEdited: function(message, prefix) {
        const prefixEdited = new MessageEmbed()
    .setDescription(`> ${emoji.tickgreen} | **Prefix has edited to \`${prefix}\`**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [prefixEdited] , allowedMentions: {repliedUser: false} });   
    },


    roleUsage: function(message, server) {
        const roleUsage = new MessageEmbed()
    .setDescription(`**Command: role**
add role to user
**Usage:**
${server.prefix ?? config.prefix}role [user] [role]
**Examples:**
${server.prefix ?? config.prefix}role ${message.author} (role)
${server.prefix ?? config.prefix}role ${message.author} (role id)
${server.prefix ?? config.prefix}role ${message.author.id} (role)
${server.prefix ?? config.prefix}role ${message.author.id} (role.id)`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [roleUsage] , allowedMentions: {repliedUser: false} });   
    },


    CantRole: function(message, target) {
        const CantRole = new MessageEmbed()
    .setDescription(`> ${emoji.tickred} | **You can't update role to** *${target.user.username}* **!**`)
    .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
    .setColor('RED')
    .setTimestamp();
        message.reply({ embeds: [CantRole], allowedMentions: {repliedUser: false} });
        },


    SelfRole: function(message) {
    const SelfRole = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **You can't update role to your self !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [SelfRole], allowedMentions: {repliedUser: false} });
    },


    BotRole: function(message) {
    const BotRole = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **I can't update role to my self !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [BotRole], allowedMentions: {repliedUser: false} });
    },


   roleable: function(message, target) {
    const roleable = new MessageEmbed()
.setDescription(`> ${emoji.tickred} | **I can't update role to ${target.user.username} !**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('RED')
.setTimestamp();
    message.reply({ embeds: [roleable], allowedMentions: {repliedUser: false} });
    },


    roleAdd: function(message, target, role) {
    const roleAdd = new MessageEmbed()
.setDescription(`> ${emoji.tickgreen} | **<@&${role.id}> Added to ${target.user.username}**`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setColor('GREEN')
.setTimestamp();
    message.reply({ embeds: [roleAdd], allowedMentions: {repliedUser: false} });
    },


    HelpUsage: function(message, server) {
        const HelpUsage = new MessageEmbed()
    .setDescription(`**Command: help**
Show help command list
**Usage:**
${server.prefix ?? config.prefix}help (command)
**Examples:**
${server.prefix ?? config.prefix}help
${server.prefix ?? config.prefix}help help
${server.prefix ?? config.prefix}help avatar`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [HelpUsage] , allowedMentions: {repliedUser: false} });   
    },


    BotUsage: function(message, server) {
        const BotUsage = new MessageEmbed()
    .setDescription(`**Command: bot**
Show bot info
**Usage:**
${server.prefix ?? config.prefix}bot
**Examples:**
${server.prefix ?? config.prefix}bot`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [BotUsage] , allowedMentions: {repliedUser: false} });   
    },


    invUsage: function(message, server) {
        const invUsage = new MessageEmbed()
    .setDescription(`**Command: inv**
Show bot invite link
**Usage:**
${server.prefix ?? config.prefix}inv
**Examples:**
${server.prefix ?? config.prefix}inv`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [invUsage] , allowedMentions: {repliedUser: false} });   
    },


    reportBugsUsage: function(message, server) {
        const reportBugsUsage = new MessageEmbed()
    .setDescription(`**Command: report-bot**
Report some bugs in the bot
**Usage:**
${server.prefix ?? config.prefix}report-bugs
**Examples:**
${server.prefix ?? config.prefix}report-bugs`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [reportBugsUsage] , allowedMentions: {repliedUser: false} });   
    },


    supportUsage: function(message, server) {
        const supportUsage = new MessageEmbed()
    .setDescription(`**Command: support**
Show bot server support link
**Usage:**
${server.prefix ?? config.prefix}support
**Examples:**
${server.prefix ?? config.prefix}support`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [supportUsage] , allowedMentions: {repliedUser: false} });   
    },


    supportUsage: function(message, server) {
        const supportUsage = new MessageEmbed()
    .setDescription(`**Command: support**
Show bot server support link
**Usage:**
${server.prefix ?? config.prefix}support
**Examples:**
${server.prefix ?? config.prefix}support`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [supportUsage] , allowedMentions: {repliedUser: false} });   
    },


    clearUsage: function(message, server) {
        const clearUsage = new MessageEmbed()
    .setDescription(`**Command: clear**
delete message in chat
**Usage:**
${server.prefix ?? config.prefix}clear (amount)
**Examples:**
${server.prefix ?? config.prefix}clear
${server.prefix ?? config.prefix}clear 10`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [clearUsage] , allowedMentions: {repliedUser: false} });   
    },


    unlockUsage: function(message, server) {
        const unlockUsage = new MessageEmbed()
    .setDescription(`**Command: unlock**
Unlock channel message
**Usage:**
${server.prefix ?? config.prefix}unlock
**Examples:**
${server.prefix ?? config.prefix}unlock
${server.prefix ?? config.prefix}unlock <#${message.channel.id}>`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [unlockUsage] , allowedMentions: {repliedUser: false} });   
    },


    avatarUsage: function(message, server) {
        const avatarUsage = new MessageEmbed()
    .setDescription(`**Command: avatar**
Show user avatar
**Usage:**
${server.prefix ?? config.prefix}avatar (user)
**Examples:**
${server.prefix ?? config.prefix}avatar
${server.prefix ?? config.prefix}avatar ${message.author}
${server.prefix ?? config.prefix}avatar ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [avatarUsage] , allowedMentions: {repliedUser: false} });   
    },


    unmuteUsage: function(message, server) {
        const unmuteUsage = new MessageEmbed()
    .setDescription(`**Command: unmute**
unmute user
**Usage:**
${server.prefix ?? config.prefix}unmute [user]
**Examples:**
${server.prefix ?? config.prefix}unmute ${message.author}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [unmuteUsage] , allowedMentions: {repliedUser: false} });   
    },


    invitesUsage: function(message, server) {
        const invitesUsage = new MessageEmbed()
    .setDescription(`**Command: invites**
Show user invites
**Usage:**
${server.prefix ?? config.prefix}invites (user)
**Examples:**
${server.prefix ?? config.prefix}invites
${server.prefix ?? config.prefix}invites ${message.author}
${server.prefix ?? config.prefix}invites ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [invitesUsage] , allowedMentions: {repliedUser: false} });   
    },


    avatarUsage: function(message, server) {
        const avatarUsage = new MessageEmbed()
    .setDescription(`**Command: avatar**
Show user avatar
**Usage:**
${server.prefix ?? config.prefix}avatar (user)
**Examples:**
${server.prefix ?? config.prefix}avatar
${server.prefix ?? config.prefix}avatar ${message.author}
${server.prefix ?? config.prefix}avatar ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [avatarUsage] , allowedMentions: {repliedUser: false} });   
    },


    pingUsage: function(message, server) {
        const pingUsage = new MessageEmbed()
    .setDescription(`**Command: ping**
Show bot ping
**Usage:**
${server.prefix ?? config.prefix}ping
**Examples:**
${server.prefix ?? config.prefix}ping`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [pingUsage] , allowedMentions: {repliedUser: false} });   
    },


    serverUsage: function(message, server) {
        const serverUsage = new MessageEmbed()
    .setDescription(`**Command: server**
Show bot server
**Usage:**
${server.prefix ?? config.prefix}server
**Examples:**
${server.prefix ?? config.prefix}server`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [serverUsage] , allowedMentions: {repliedUser: false} });   
    },


    userUsage: function(message, server) {
        const userUsage = new MessageEmbed()
    .setDescription(`**Command: user**
Show user user
**Usage:**
${server.prefix ?? config.prefix}user (user)
**Examples:**
${server.prefix ?? config.prefix}user
${server.prefix ?? config.prefix}user ${message.author}
${server.prefix ?? config.prefix}user ${message.author.id}`)
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
.setTimestamp();
        message.reply({ embeds: [userUsage] , allowedMentions: {repliedUser: false} });   
    },
}