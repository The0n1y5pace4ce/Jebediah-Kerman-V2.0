const { Message, MessageEmbed, Client } = require("discord.js");
const config = require("../../Structures/config.json");

module.exports = {
  name: "messageCreate",
  /**
   *
   * @param {Message} message
   * @param {Client} client
   */
  async execute(message, client) {
    const array = require(`../../Structures/Validation/scam.json`);
    if (array.some((word) => message.content.toLowerCase().includes(word))) {
      message.delete();
      const logChannel = client.channels.cache.get("936829760330403901");
      const Embed = new MessageEmbed()
        .setTitle("Scam detected")
        .setColor(config.Warna)
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .setDescription(`Please don't send any scam messages. Thank you.`)
        .addField(
          "User:",
          `\`\`\`${message.author.tag} (${message.author.id})\`\`\``
        )
        .addField("Message Content:", `\`\`\`${message.content}\`\`\``)
        .setTimestamp();


      logChannel.send({ embeds: [Embed] });
    }
  },
};

