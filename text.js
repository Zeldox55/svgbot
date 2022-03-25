const { Discord, MessageEmbed } = require('discord.js');
const config = require('../../configs/config.js');
const emoji = require('../../configs/emotes.json');
const embed = require('../../Utility/commandEmbeds')


module.exports = {
        name: '',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
        cooldown: '',
    run: async (client, message, args) => {
    }
}
/*
{
    "languages": ["english", "arabic", "french"],
    "translations": {
        "You_Dont_Have_Permission": {
            "ensglish": "You dont have Permission",
            "arabic": "ليست لديك رتبة",
            "frensh": "Vous n'avez pas la Permission"
        }
    }
}*/