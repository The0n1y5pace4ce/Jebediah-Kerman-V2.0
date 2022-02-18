const { CommandInteraction, Util, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'enlarge',
    description: 'enlarge an emoji',
    options: [
        {
            name: 'emoji',
            description: 'provide the emoji you want to enlarge',
            type: 'STRING',
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     * @returns 
     */
    async execute(interaction, client) {
        const emoji = interaction.options.getString('emoji');

        const parsedEmoji = Util.parseEmoji(emoji)

        if (parsedEmoji) {
            const ex = parsedEmoji.animated ? ".gif" : ".png"
            const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + ex}`
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setFooter({ text: `Requested by ${interaction.user.tag}` })
                .setAuthor({
                    name: `Enlarged ${parsedEmoji.name}`,
                    iconURL: client.user.displayAvatarURL()
                })
                .setImage(url)
            return interaction.reply({ embeds: [embed] })
        } else {
            return interaction.reply({ content: `Please supply a valid emoji!` })
        }
    }
}
