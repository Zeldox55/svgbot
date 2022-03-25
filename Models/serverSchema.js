const { mongoose } = require('mongoose');
const config = require('../configs/config');

const serverSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true,
    upsert: true
  },
  guildName: {
    type: String, 
    require: true 
  },
  invite: {
    type: String, 
    default: "No Link" 
  },
  prefix: {
    type: String,
    default: config.prefix,
  },
  language: {
    type: String,
    default: "english",
  },
  autoroleStatus: {
    type: String,
    default: "off",
  },
  autoroleId: {
    type: String,
    default: null,
  },
  welcomeStatus: {
    type: String,
    default: "off",
  },
  welcomeId: {
    type: String,
    default: null,
  },
  welcomeImage: {
    type: String,
    default: "https://media.discordapp.net/attachments/945013870936879145/955905441827803156/50447862-0D48-438D-9621-4D3371BFB634.png",
  },
  welcomeMessage: {
    type: String,
    default: null,
  }
})

module.exports = mongoose.model('servers', serverSchema);
