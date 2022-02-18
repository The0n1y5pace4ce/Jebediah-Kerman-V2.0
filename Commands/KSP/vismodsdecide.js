const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'vismodsdecide',
    description: 'Decide on the visual mods to get for Kerbal Space Program',

    execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('#498BDB')
        .setTitle('Decide Between Visual Mods')
        .setDescription('Use this to decide between visual mods!')
        .addFields(
            {name: 'Astronomers Visual Pack (AVP) vs Spectra', value: 'Spectra has increased performance and fps, however, AVP offers more stunning visuals for those with higher end PCs. Both need EVE Redux to work.'},
            {name: 'TUFX', value: 'TUFX is a must for most players, it adds post processing, making screenshots more beautiful, as well as being easy to create and edit configs.'},
            {name: 'Environmental Visual Enhancements (EVE) vs EVE Redux', value: 'EVE redux is a improved version of EVE which adds the same graphics and details to the game, but at a higher FPS.'},
            {name: 'Parallax', value: 'Parallax is a terrain scatterer that makes the terrain of the planets more realistic, it adds bumps, rocks and much more to the surface of the planets. Only works in the stock system and beyond home, other system mods have their own terrain visuals.'},
            {name: 'Scatterer', value: 'Scatterer is a mod that adds realistic sunrises, sunsets, sunflares and atmospheres to the game, without it, the game looks plain and boring'},
            {name: 'Visual Mods Download Links', value: 'The Following are the download links to the listed mods.'},
            {name: 'AVP Download Link', value: 'https://github.com/themaster402/AstronomersVisualPack/releases/tag/v4.11'},
            {name: 'Spectra Download Link', value: 'https://spacedock.info/mod/1505/Spectra'},
            {name: 'TUFX Download Link', value: 'https://github.com/shadowmage45/TUFX/releases'},
            {name: 'EVE Download Link', value: 'https://github.com/WazWaz/EnvironmentalVisualEnhancements/releases'},
            {name: 'EVE Redux Download Link', value: 'https://github.com/LGhassen/EnvironmentalVisualEnhancements/releases/'},
            {name: 'EVE and EVE Redux Configs (needed for visuals to work), additionally you could use AVP or spectra', value: 'https://github.com/WazWaz/EnvironmentalVisualEnhancements/releases/download/EVE-1.2.2-1/EnvironmentalVisualEnhancements-Configs-1.2.2.1.zip'},
            {name: 'Parallax Download Link', value: 'https://github.com/Gameslinx/Tessellation/releases'},
            {name: 'Scatterer Download Link', value: 'https://github.com/LGhassen/Scatterer/releases'}
        )

        interaction.reply({embeds: [embed], ephemeral: true,})
    }
}