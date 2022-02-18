const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kspkeybinds',
    description: 'Shows the Keybinds of KSP in a cool way :)',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Keybinds For Kerbal Space Program (without changing it manually)')
        .setImage('https://i.imgur.com/kqQPC1j.png')
        .setTimestamp()

        interaction.reply({embeds: [embed]})
    }
}