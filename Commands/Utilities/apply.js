const { MessageEmbed, CommandInteraction, Client } = require("discord.js");
const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
  name: "apply",
  usage: "/apply",
  description: "Apply for moderator",
  /**
   * 
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {

    const modal = new Modal()
    .setCustomId('application')
    .setTitle('Moderator Application')
    .addComponents(
    new TextInputComponent()
      .setCustomId('gender')
      .setLabel('What is your gender?')
      .setStyle('SHORT')
      .setMinLength(3)
      .setMaxLength(6)
      .setPlaceholder('Male or Female')
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('age')
      .setLabel('What is your age?')
      .setStyle('SHORT')
      .setMinLength(2)
      .setMaxLength(2)
      .setPlaceholder('Must be 13 or above')
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('mod')
      .setLabel('Why do you want to be a moderator?')
      .setStyle('LONG')
      .setMinLength(15)
      .setMaxLength(200)
      .setPlaceholder('Answer in brief.')
      .setRequired(true),
    );
    
    showModal(modal, {
      client: client,
      interaction: interaction
    })
  }
}
