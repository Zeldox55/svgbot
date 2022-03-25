const config = require('../../configs/config.js');
const ms = require('ms');
const serverModel = require("../../Models/serverSchema");
const { Collection, Permissions } = require('discord.js');
const serverSchema = require('../../Models/serverSchema');
const cooldowns = new Map();

// const profileModel = require("../../Models/profileSchema");
// const levelModel = require("../../Models/levelSchema");
// const loadLevel = require("../../economy/level");
// const levelSchema = require('../../Models/levelSchema');

module.exports = async (client, discord, message, guild) => {
    try {
        if(!message.guild.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
        let server = await serverSchema.findOne({ guildId: message.guild.id });
        let prefix = config.prefix;
            if(!server) { 
                let channel = message.guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first();
                let invite = await channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(() => "Missing Permissions").then(async (invite) => {
                await serverModel.create({
                    guildId: message.guild.id,
                    guildName: message.guild.name,
                    invite: invite,
                });
            })
            }
            if(server && server?.prefix) {
                prefix = server?.prefix;
            }
        // let rank = await levelModel.findOne({
        //     userID: message.author.id,
        // });

        // if(!rank) {
        //     rank = await levelModel.create({
        //         userID: message.author.id,
        //         serverID: message.guild.id,
        //     }, {
        //         level: 1,
        //         xp: 0,
        //         lastMessage: Date.now(),
        //     }, {
        //         upsert: true,
        //         new: true
        //     });
        // }

        // const getRandomInt = () => {
        //     let randomFloat = (Math.random() * (10 - 1) + 1).toString();
        //     return parseInt(String(randomFloat.split(".")),10);
        // }

        // if(Date.now() - rank.lastMessage > 60000) {
        //     let level = rank.level;
        //     let xp = rank.xp;
        //     let lastMessage = rank.lastMessage;
        //     let RandomNumber = getRandomInt(1, 10);
        //     xp += RandomNumber;

        //     const xpToNextLevel = 5 * Math.pow(level, 2) + 50 * level + 100;
        //     if(xp >= xpToNextLevel) {
        //         level++;
        //     }
        //     // await levelSchema.updateOne({
        //     //     userID
        //     // }, {
        //     //     level,
        //     //     xp
        //     // })
        // }

        // const target = message.mentions.members.first() || message.author ;
        // let profileData;
        // try {
        //     profileData = await profileModel.findOne({ userID: target.id });
        //     if(!profileData) {
        //         let profile = await profileModel.create({
        //             userID: target.id,
        //             serverID: message.guild.id,
        //             SVGcoins: 1000,
        //         });
        //         profile.save();
        //     }
        // } catch (err) {
        //     console.log(err);
        // }


        try{
            
            if((message.content === client.user.tag) || (message.content === `<!@${client.user.id}>`)){
        message.reply({ content: `My Prefix is ${server.prefix}` })
            }
            if(!message.content.startsWith(prefix) || message.author.bot) return;
            let args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if(!cmd) return;
            var commandfile = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
            if(!commandfile) return;
            if(!cooldowns.has(commandfile.name)) {
                cooldowns.set(commandfile.name, new Collection());
            }

            const current_time = Date.now();
            const time_stamps = cooldowns.get(commandfile.name)
            const cooldown_amount = (commandfile.cooldown) * 1000;
            if(time_stamps.has(message.author.id)) {
                const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

                if(current_time < expiration_time) {
                    const time_left = ms((expiration_time) - Date.now(), {long: true});
                    return message.reply({ content: `**${message.author.username}, CoolDown ( ${time_left} )**` }).then(msg => {
                        setTimeout(() => msg.delete(), 3000)});
                }
            }
            time_stamps.set(message.author.id, current_time);
            setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);


            if (commandfile) await commandfile.run(client, message, args);

        } catch (error) {
            console.log(error);
            message.reply({ content: `This Command Was an Error , Please try again later !`});
        } 

    } catch(error) {
        console.log(error);
    }
};