const { Fishy } = require("discord-gamecord");
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fish',
    description: 'Go fishing!!',

    async execute(interaction, client) {
        new Fishy({
            message: interaction,
            fishyMessage: 'You caught a {fish}. I bet it\'d sell for around ${worth}.',
            returnMessage: false
          }).startGame();
    }
}