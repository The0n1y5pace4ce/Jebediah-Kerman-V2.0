const { CommandInteraction, MessageEmbed } = require("discord.js");
const axios                                = require("axios");

module.exports = {
    name: "dadjoke",
    description: "Request a dad joke from ICanHazDadJoke.com",
    options: [
        {
            name: "joke",
            description: "Provide the ID of the joke.",
            type: "STRING",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const joke  = interaction.options.getString("joke") ? `j/${interaction.options.getString("joke")}` : "";
        const embed = new MessageEmbed();
            
        try {
            const response = await axios.get(`https://icanhazdadjoke.com/${joke}`, {
                headers: {"User-Agent":"DiscordJS Axios 0.21.1", Accept: "application/json"}
            });
       
            if (response.data.message) {
                embed.setTitle("🔍 Unable to fetch joke 🔎")
                    .setColor("RED")
                    .setDescription(`${response.data.message}.`);
                return interaction.reply({embeds: [embed], ephemeral: true});
            }

            embed.setColor("RANDOM")
                .setTitle(`😂 Dad joke 😂`)
                .setDescription(response.data.joke)
                .setFooter(`Joke found at https://icanhazdadjoke.com/j/${response.data.id}`)
                .setTimestamp();

            const reply = await interaction.reply({ embeds: [embed], fetchReply: true });
            reply.react("🟢");
            reply.react("🔴");
        } catch (error) {
            embed.setTitle("🔍 Unable to fetch joke 🔎")
                .setColor("RED")
                .setDescription("Unable to establish a connection to the Dad Joke API.");
            interaction.reply({embeds: [embed], ephemeral: true});
        }
    }
}