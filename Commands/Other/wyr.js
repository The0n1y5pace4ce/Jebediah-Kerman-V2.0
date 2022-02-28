const { WouldYouRather } = require("discord-gamecord");
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'wyr',
    description: 'Play would you rather!',

    async execute(interaction, client) {
        new WouldYouRather({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Would You Rather',
              color: '#5865F2',
            },
            thinkMessage: '**Thinking...**',
            buttons: { option1: 'Option 1', option2: 'Option 2' },
            othersMessage: 'You are not allowed to use buttons for this message!',
          }).startGame();
    }
}