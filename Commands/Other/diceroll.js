const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'diceroll',
    description: 'Rolls a dice with a given number of sides, default numebr of sides is 6.',
    usage: '[number of sides]',
    execute(interaction, args) {
        if(!args[0]) {
            args[0] = 6;
          }

          let result = (Math.floor(Math.random() * Math.floor(args[0])));
          interaction.reply({content: `I rolled ${result + 1}!`});
    },
};