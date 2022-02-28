const { Slots } = require("discord-gamecord");
const { MessageEmbed, CommandInteraction } = require("discord.js");


module.exports = {
    name: 'slots',
    description: 'Play slots',

    async execute(interaction, client) {
        new Slots({
            message: interaction,
            slash_command: true,
            embed: {
                title: '🎰 Slot Machine',
                color: '#5865F2'
            }
        }).startGame();
    }
}