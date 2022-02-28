const { Emojify } = require('discord-gamecord');
const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'emojify',
    description: 'Turn any text into emojis!',
    options: [{
        name: 'text',
        description: 'Enter text to be turned into an emoji',
        type: "STRING",
        required: true,
    }],

    async execute(interaction, client) {
        const Text = interaction.options.getString('text');

        interaction.reply(await Emojify(Text));
    }
    
    
}