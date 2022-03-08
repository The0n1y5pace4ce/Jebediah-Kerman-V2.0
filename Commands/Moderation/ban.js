const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'Ban a user',
    options: [
        {
            name: 'target',
            description: 'Select a user to ban',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'Enter the reason for the ban',
            type: 'STRING',
            required: true,
        },
        {
            name: 'messages',
            description: 'Choose the amount of messages to delete',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'Don\'t Delete Any',
                    value: '0'
                },
                {
                    name: '7 Days',
                    value: '7'
                }
            ]
        }
    ],
    execute(interaction) {
        const Target = interaction.options.getUser('target');
        const Reason = interaction.options.getString('reason');
        const messages = interaction.options.getString('messages');

        const bannedEmbed = new MessageEmbed()
        .setTitle('User was banned')
        .setDescription(`${Target.user.tag} was banned by ${interaction.member.tag} \n Reason: ${Reason}`)

        if(Target.id === interaction.member.id) 
        return interaction.reply({content: '<:KEKW:892346646480957441> You cannot ban yourself **LOL**', ephemeral: true})

        if(Target.permissions.has('ADMINISTRATOR'))
        return interaction.reply({content: '<:KEKW:892346646480957441> You cannot ban an administrator **LOL**', ephemeral: true})

        if(Target.permissions.has('MANAGE_GUILD'))
        return interaction.reply({content: '<:KEKW:892346646480957441> You cannot ban a mod **LOL**'})

        Target.ban({ reason: Reason, days: messages})

        interaction.reply({embeds: [bannedEmbed]})
        

    }
}