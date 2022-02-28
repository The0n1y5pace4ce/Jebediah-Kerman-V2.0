const { reverseText } = require("discord-gamecord");
const { CommandInteraction } = require("discord.js");

module.exports = {
    name: 'reverse',
    description: 'Reverse text!',
    options: [{
        name: 'text',
        description: 'Enter the text you wish to reverse',
        type: "STRING",
        required: true,
    }],

    async execute(interaction, client) {
        const Text = interaction.options.getString('text');
        interaction.reply(await reverseText(Text));
    }
}