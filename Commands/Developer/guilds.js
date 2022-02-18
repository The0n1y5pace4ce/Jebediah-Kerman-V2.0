const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "guilds",
    description: "Shows Total Guilds/names",
    permission: 'ADMINISTRATOR',

    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const Response = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Guilds')
        .setDescription(`**Total Guilds**: \`${client.guilds.cache.size}\`\n**Total Guilds Names**: \`${client.guilds.cache.map(g => g.name).join(', ')}\``)
        .setFooter(`Requested by ${interaction.member.user.tag}`, interaction.member.user.displayAvatarURL())
        .setTimestamp()

        interaction.reply({embeds: [Response], ephemeral: true});
    }
}