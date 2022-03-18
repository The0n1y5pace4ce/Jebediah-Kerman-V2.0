const { Client, Collection } = require('discord.js');
const client = new Client({intents: 32767});
const DiscordJS = require('discord.js');
const { Mongoose } = require('mongoose');
const { Token } = require("../Structures/config.json");
const { promisify } = require('util');
const { glob } = require('glob');
const Ascii = require('ascii-table');
const { table } = require('console');
const PG = promisify(glob);

const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud')

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddListWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin(),]
});
module.exports = client;

const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client); 


client.commands = new Collection();

["Events", "Commands"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, PG, Ascii);
});


process.on('unhandledRejection', error => { console.error()})

client.login(Token);
