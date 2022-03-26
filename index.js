const { Discord, Client, Intents, Collection, MessageEmbed, MessageAttachment, Permissions, guild, discord } = require('discord.js');
const config = require('./configs/config');
const fs = require('fs');
const db = require('quick.db');
const path = require("path");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES]});
const mongoose = require("mongoose");
const { DisTube } = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')
const serverModel = require("./Models/serverSchema")
const Canvas = require("canvas");
const embed = require('./Utility/commandEmbeds');
const InvitesTracker = require('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
  fetchGuilds: true,
  fetchVanity: true,
  fetchAuditLogs: true
})
client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [
      new SpotifyPlugin({
        emitEventsAfterFetching: true
      }),
      new SoundCloudPlugin(),
      new YtDlpPlugin()
    ],
    youtubeDL: false
})
const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
  .on('playSong', (queue, song) =>
  embed.Playing(queue, song)
  )
  .on('addSong', (queue, song) =>
    queue.textChannel.send(
      `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send(
      `${client.emotes.success} | Added \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) to queue\n${status(queue)}`
    )
  )
  .on('error', (channel, e) => {
    channel.send(`${client.emotes.error} | An error encountered: ${e.toString().slice(0, 1974)}`)
    console.error(e)
  })
  .on('empty', channel => channel.send('Voice channel is empty! Leaving the channel...'))
  .on('searchNoResult', (message, query) =>
    message.channel.send(`${client.emotes.error} | No result found for \`${query}\`!`)
  )

require("./Utility/ConnectDB.js")();


client.commands = new Collection();
client.aliases = new Collection();


client.emotes = require('./configs/emotes.json')
client.filters = require('./configs/filters.json');

["aliases", "commands"].forEach(cmd => client[cmd] = new Collection());
["commands", "events"].forEach(events => require(`./handlers/${events}`)(client));
client.categories = fs.readdirSync('./commands');


client.on("guildMemberAdd", async(member) => {
  const server = await serverModel.findOne({guildId: member.guild.id});
  if(!server) return;
  if(server.autoroleStatus === "off") return;
  const joinRole = member.guild.roles.cache.find(role => role.id == server.autoroleId);
  if(!joinRole) {
    let Role = await serverModel.findOneAndUpdate({
    guildId: member.guild.id},{
    autoroleId: null,
    autoroleStatus: "off"
    });
    return Role.save();
  }
  if(server.autoroleStatus === "on") {
      member.roles.add(joinRole);
  }
})


client.on("guildMemberAdd", async(member) => {
  const server = await serverModel.findOne({guildId: member.guild.id});
  if(server.welcomeStatus === "off") return;
  const WelcomeChannel = member.guild.channels.cache.find(channel => channel.id == server.welcomeId);
  const { registerFont } = require("canvas");
  registerFont("./Fonts/BebasNeue-Regular.ttf", { family: "myFont" }) 
  if(!WelcomeChannel) {
    let Channel = await serverModel.findOneAndUpdate({
    guildId: member.guild.id},{
    welcomeId: null,
    welcomeStatus: "off"
    });
    return Channel.save();
  }
  if(server.welcomeStatus === "on") {
    if(WelcomeChannel) {
      const canvas = Canvas.createCanvas(1280, 720)
      const ctx = canvas.getContext('2d')
      const channel = member.guild.channels.cache.get(server.welcomeId);
      const background = await Canvas.loadImage(server.welcomeImage)
      let x = 0
      let y = 0
      ctx.drawImage(background, x, y)

      if(member.user.username.length >= 8) {
        Name = member.user.username.split('',7)
        Username = Name.join('') + "...#" + member.user.discriminator
        ctx.fillStyle = '#ffffff';
        ctx.font = "56px 'myFont'";
        ctx.fillText(Username, 650, 393);
      } else {
        Username = member.user.username + "#" + member.user.discriminator
        ctx.fillStyle = '#ffffff';
        ctx.font = "60px 'myFont'";
        ctx.fillText(Username, 650, 393);
      }
      UserID = "ID: " + member.user.id
      ctx.fillStyle = '#ffffff';
      ctx.font = "19px 'myFont'";
      ctx.fillText(UserID, 604, 482);
      const pfp = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }))

      ctx.beginPath();
      ctx.arc(366, 362, 221, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(pfp, 137, 140, 450, 450)
      const attachment = new MessageAttachment(canvas.toBuffer())
      if(server.welcomeMessage !== null ) {
        server.welcomeMessage = server.welcomeMessage.replace('<user>', `<@${member.user.id}>`)
        server.welcomeMessage = server.welcomeMessage.replace('<server>', `${member.guild.name}`)
        channel.send({ files: [attachment] }).then(sent => {
         sent.channel.send({ content: server.welcomeMessage })
        })
      } else {
        channel.send({ files: [attachment] })
      }
    }
  }
})

// EVENTS

client.on('ready', async() => {
    console.log(`${client.user.tag} has Logged !`);
});


client.login(config.token);
