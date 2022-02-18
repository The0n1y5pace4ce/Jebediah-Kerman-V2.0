const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kspforums',
    description: 'Sends the link to the KSP forums',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Kerbal Space Program Forums')
        .setURL('https://forum.kerbalspaceprogram.com')
        .setImage('https://i.imgur.com/UmK9Egi.png')
        .setTimestamp()

        interaction.reply({embeds: [embed], ephemeral: true})
    }
}