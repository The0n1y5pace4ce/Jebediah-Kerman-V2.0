const { Client, CommandInteraction, MessageEmbed, version: discordjsVersion  } = require("discord.js");
const ms = require('pretty-ms');
const moment = require("moment")
const os = require('os');

module.exports = {
  name: "botinfo",
  description: "Displays information about the bot",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    let model = os.cpus()[0].model;
    let cores = os.cpus().length;
    let platform = os.platform();

    let Response = new MessageEmbed()
    .setTitle("Jebediah Kermans Information")
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({format: 'png'})})
    .setDescription("Below is the bot\'s information")
    .setTimestamp()
    .setColor("AQUA")
    .addField("> Statistics", `\`\`\`js\n Total Guilds: ${client.guilds.cache.size}\n Total Channels: ${client.channels.cache.size}\n Total Emojis: ${client.emojis.cache.size}\n Total Shards : ${client.guilds.cache.size} \`\`\`` )
    .addField("> Other", `\`\`\`js\n Node: ${process.version}\n Platform: ${process.platform}\n Arch: ${process.arch}\n Discord.js: ${discordjsVersion}\n Developer: TheSpaceAce#2107\n ID: 656306365534437386\n Bot Created: ${moment.utc(client.user.createdAt).format("dddd, MMMM Do YYYY")}\n Username :  ${client.user.username}\n Discriminator: ${client.user.discriminator}\n Status : ${status} \`\`\``)
    .addField("> Hosting", `\`\`\`js\n Websocket Ping: ${client.ws.ping}ms\n Uptime: ${ms(client.uptime)}\n Host : Replit\n Monitor : Uptime Robot\n Memory : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\n Cores : ${cores} \n CPU Model : ${model} \`\`\``)
    interaction.reply({embeds: [Response]})
  }
}
let status;
const client = require("../../Structures/index");
switch (client.presence.status) {
  case "online":
    status = "🟢";
    break;
  case "dnd":
    status = "⛔";
    break;
  case "idle":
    status = "🌙";
    break;
  case "offline":
    status = "⚫️";
    break;
}