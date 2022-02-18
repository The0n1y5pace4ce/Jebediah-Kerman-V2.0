const { CommandInteraction, MessageEmbed, WebhookClient } = require("discord.js");

module.exports = {
    name: "announce",
    description: "Announces whatever you want to announce in the announcement channel.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "title",
            description: "Provide the title of what you want to announce.",
            type: "STRING",
            required: true
        },
        {
            name: "information",
            description: "Provide the information that you want to announce.",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        
        interaction.reply({content: "Sending announcement...", ephemeral: true,})

        const announcer = new WebhookClient({
            url : "Announcement URL"
        });

        const title = interaction.options.getString("title");
        const info = interaction.options.getString("information");

        const announcement = new MessageEmbed()
        .setTitle(`${title}`)
        .setColor("GREEN")
        .setDescription(`${info}`)
        .setTimestamp()

        announcer.send({embeds: [announcement]})

    }
}