const { CommandInteraction, MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "poll",
    description: "Create a poll",
    usage: "/poll",
    permission: "ADMINISTRATOR",
    options: [
      {
          name: "poll",
          description: "Describe the poll you want to make.",
          type: "STRING",
          required: true
      }, 
      {
        name: "channel",
        description: "Select a channel to send the message to.",
        type: "CHANNEL",
        channelTypes: ["GUILD_TEXT"],
      },
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction, client) {
        
        const { options } = interaction;

        const poll = options.getString("poll");
        const gChannel = options.getChannel("channel") || interaction.channel;

        const pollEmbed = new MessageEmbed()
            .setColor("AQUA")
            .setTitle("Poll ð")
            .setDescription(poll)
            .setFooter("Please react with the ð, ð,ð¤·ââï¸based on your opinion.")
            .setTimestamp()

        const sendMessage = await client.channels.cache.get(gChannel.id).send({embeds: [pollEmbed]});
        sendMessage.react("ð")
        sendMessage.react("ð")
        sendMessage.react("ð¤·ââï¸")

        interaction.reply({embeds: [new MessageEmbed().setColor("GREEN").setDescription(`The poll was successfully sent to ${gChannel} â`)],ephemeral: true})
    }
}