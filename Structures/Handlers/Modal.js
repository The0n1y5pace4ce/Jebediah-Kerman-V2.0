const { Client, MessageEmbed } = require("discord.js")

module.exports = async (client) => {
  client.on("modalSubmit", async(modal) => {
    if(modal.customId == 'application') {
      const gender = modal.getTextInputValue('gender')
      const age = modal.getTextInputValue('age')
      const answer = modal.getTextInputValue('mod')

      const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Mod Application Submission`)
      .setDescription(`Sent by <@${modal.member.id}>`)
      .addField("Gender", `${gender}`, true)
      .addField("Age", `${age}`, true)
      .addField("Why do you want to be a mod?", `${answer}`, false)

      const channel = client.channels.cache.get('CHANNEL_ID')

      channel.send({embeds: [embed]})

      await modal.deferReply({ephemeral: true})
      modal.followUp('Your application was successfully submitted.')
    }
  })
}
