const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "send-message",
  description: "Send a message to a specific channel.",
  usage: "/send-message",
  permission: "ADMINISTRATOR",
  options: [
    {
      name: "message",
      description: "The message that you want to be sent.",
      type: "STRING",
      required: true,
    },
    {
      name: "channel",
      description: "Select a channel to send the embed to.",
      type: "CHANNEL",
      channelTypes: ["GUILD_TEXT"],
    },
  ],
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    
    const { options } = interaction;

    const message = options.getString("message") || "none";
    const gChannel = options.getChannel("channel") || interaction.channel;

    if (message === "none") {interaction.reply({embeds: [new MessageEmbed().setColor("RED").setTitle("Error ❌").setDescription("Please set a message to be sent!")]})};  //Checking message exists just incase the a field is somehow passed through/
    const sendMessage = await client.channels.cache.get(gChannel.id).send(message);

    interaction.reply({content: 'Sent!',ephemeral: true});
  },
};
