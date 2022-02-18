const { CommandInteraction, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'kspmods',
    description: 'Sends links and info to the most trusted KSP modding websites',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('#DC5032')
        .setTitle('KSP Modding Websites')
        .setDescription('These are the most popular KSP modding websites')
        .addFields(
            {name: 'GITHUB', value: 'https://github.com/'},
            {name: 'SPACEDOCK', value: 'https://spacedock.info/kerbal-space-program'},
            {name: 'CURSEFORGE', value: 'https://www.curseforge.com/kerbal/ksp-mods'},
        )
        .setFooter('There are many more modding websites for KSP, but these are the mods popular and most trusted')

        interaction.reply({embeds: [embed]})
    }
}