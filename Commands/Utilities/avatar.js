const { CommandInteraction, MessageEmbed } = require("discord.js");
module.exports = {
    name: 'avatar',
    description: 'Get a users avatar!',
    options: [
        {
            name: 'target',
            description: 'Choose the users avatar you would wish to get',
            type: 'USER',
            required: true,
        }
    ],
    execute(interaction) {
        const Target = interaction.options.getUser('target');

        const avatarEmbed = new MessageEmbed()
        .setTitle(`${Target.tag}'s Avatar`)
        .setColor('RANDOM')
        .setImage(`${Target.displayAvatarURL({ dynamic: true })}?size=256`)

        interaction.reply({embeds: [avatarEmbed]})
    }
}
