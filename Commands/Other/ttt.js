const { TicTacToe } = require("discord-gamecord");
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ttt',
    description: 'Play tic tac toe!',
    options: [{
        name: 'opponent',
        description: 'Choose who you would like to play Tic Tac Toe against',
        type: 'USER',
        required: true,
    }],

    async execute(interaction, client) {
        new TicTacToe({
            message: interaction,
            slash_command: true,
            opponent: interaction.options.getUser('opponent'),
            embed: {
              title: 'Tic Tac Toe',
              overTitle: 'Game Over',
              color: '#5865F2',
            },
            oEmoji: '🔵',
            xEmoji: '❌',
            blankEmoji: '➖',
            oColor: 'PRIMARY',
            xColor: 'DANGER',
            waitMessage: 'Waiting for the opponent...',
            turnMessage: '{emoji} | Its now **{player}** turn!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
            cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
            drawMessage: 'It was a draw!',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
          }).startGame();
    }
}