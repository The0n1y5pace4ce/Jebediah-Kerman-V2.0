const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'guildCreate',
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const guild = interaction;

        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("The bot joined a new server")
        .setDescription(`${client.user.tag} was added to a new server.`)
        .setFields(
            {name: "Guild Name:", value: `${guild.name}`, inline: true},
            {name: "Guild Members:", value: `${guild.memberCount}`, inline: true},
            {name: "Total Guilds", value: `${client.guilds.cache.size}`},
            {name: "Total Users", value: `${client.users.cache.size}`}
        )
        .setTimestamp();

        const logC = client.channels.cache.get("GUILD_LOGSCANNEL_ID")

        logC.send({ embeds: [embed] })

        const channel = guild.channels.cache.find(
            (c) =>
            c.type === "GUILD_TEXT" &&
            c.permissionsFor(guild.me).has("SEND_MESSAGES")
        );

        await channel.send({ content: `Hi! Thanks for Inviting me!` });
    },
};