const mongoose = require("mongoose");
const client = require("discord.js");
const config = require('../configs/config');
const colors = require('colors');

module.exports = async () => {
    try {
        await mongoose.connect(config.mongo_uri, { keepAlive: true, useNewUrlParser: true,
            useUnifiedTopology: true, });
        console.log(`_`.repeat(32));
        console.log(colors.green(`[✔] DataBase Connected Successfully!`));
    } catch (error) {
        console.log(colors.red(`[❌] DataBase Failed To Connect :`, error));
        console.log(`_`.repeat(32));
        client.destroy()
    }
}
