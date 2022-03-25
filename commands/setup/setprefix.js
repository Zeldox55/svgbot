const { Permissions } = require("discord.js");
const serverModel= require("../../Models/serverSchema");
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const serverSchema = require("../../Models/serverSchema");
const embed = require('../../Utility/commandEmbeds');

module.exports = {
    name: 'setprefix',
    description: '',
    aliases: [""],
    usage: '',
    accessableby: "",
    cooldown: '15',
    run: async (client, message, args) => {
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return embed.Permission(message);
        const prefix = args[0];
        const { guild, guildId } = message;
        const server = await serverSchema.findOne({guildId});
        if(!server) {        
            await serverSchema.create({
                guildId: guild.id,
                guildName: guild.name,
            });
            
        }
        if(!prefix) return embed.setprefixUsage(message, server);
        if(args[0] === "Default" || prefix === "DEFAULT" || prefix === "default") {
            let prefix = config.prefix;
            serverModel.findOneAndUpdate({ guildId }, { prefix })
            .exec()
            .catch(console.log);
            if(server.prefix === prefix) return embed.DPrefixAlready(message);
            embed.prefixEdited(message, prefix);
        } else if(server) {
            if(prefix.length >5) return embed.maxLength5(message);
            serverModel.findOneAndUpdate({ guildId }, { prefix })
            .exec()
            .catch(console.log);
            if(prefix === server.prefix) return embed.PrefixAlready(message);
            embed.prefixEdited(message, prefix);
        } else {
            if(prefix.length >5) return embed.maxLength5(message);
            serverModel
            .create({
                guildId: guild.id,
                guildName: guild.name,
                prefix,
            })
            embed.prefixSet(message, prefix);
        }

    }
}