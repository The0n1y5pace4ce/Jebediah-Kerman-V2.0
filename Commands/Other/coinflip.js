const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Flip a coin, tell if it is heads or tails',
    execute(interaction) {
        let random = (Math.floor(Math.random() * Math.floor(2)));

        if(random === 0) {
          interaction.reply('I flipped heads!');
        }
        else {
          interaction.reply('I flipped tails!');
        }
    },
};