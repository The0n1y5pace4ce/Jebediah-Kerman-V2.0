const { intents, Collection } = require('discord.js');
const DiscordJS = require('discord.js');
const { Mongoose } = require('mongoose');
const { Token } = require("../Structures/config.json");
const { promisify } = require('util');
const { glob } = require('glob');
const Ascii = require('ascii-table');
const { table } = require('console');
const PG = promisify(glob);

const client = new DiscordJS.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_BANS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_VOICE_STATES"
    ]
})

const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddListWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
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