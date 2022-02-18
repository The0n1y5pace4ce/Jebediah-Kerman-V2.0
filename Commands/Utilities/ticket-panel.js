const { Client, Message, MessageEmbed,  MessageButton, MessageActionRow, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'ticket-panel',
    description: "Creates a ticket.",
  /**
   * 
   * @param {CommandInteraction} interaction 
   * @param {Client} client 
   * @param {Message} message 
   */
    async execute(interaction, client, message) {
        const guild = interaction.guild;

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(interaction.guild.name, interaction.guild.iconURL({
                dynamic: true
            }))
            .setDescription(
                "__**How to make a ticket**__\n" +


                "> Click on the reaction that relates to your need\n" +

                "> Once the ticket is made you will be able to type in there"

            )
            .setTitle('Tickets')


        const bt = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('tic')
                .setLabel('🎫 Create Ticket!')
                .setStyle('PRIMARY'),
            );

        interaction.reply({
            embeds: [embed],
            components: [bt]
        });
    }
}