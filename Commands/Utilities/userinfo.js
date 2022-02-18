const { Client, MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require("discord.js");

module.exports = {
  name: "userinfo",
  description: "Displays the target's information.",
  options: [
    {
      name: "target",
      description: "Select a target.",
      type: "USER",
      required: true,
    },
  ],
  /**
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */
  async execute(interaction, client) {
    const Target = interaction.options.getMember('target')

    var main = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel(`Main info`)
        .setEmoji(`ℹ`)
        .setCustomId(`main`)
        .setDisabled(true)
        .setStyle(`SECONDARY`),
      new MessageButton()
        .setLabel(`Roles info`)
        .setStyle(`DANGER`)
        .setEmoji(`ℹ`)
        .setCustomId(`roles`),
      new MessageButton()
        .setLabel(`Permissions`)
        .setStyle(`SECONDARY`)
        .setEmoji(`ℹ`)
        .setCustomId(`permissions`)

    );

    const Response = new MessageEmbed()
      .setAuthor({ name: `${Target.user.tag}`, iconURL: `${Target.user.displayAvatarURL({ dynamic: true })}` })
      .setThumbnail(`${Target.displayAvatarURL({ dynamic: true })}`)
      .setColor("WHITE")
      .addField("UserID", `${Target.id}`, false)
      .addField("Server Member Since", `<t:${parseInt(Target.joinedTimestamp / 1000)}:R>`, false)
      .addField("Discord User Since", `<t:${parseInt(Target.user.createdTimestamp / 1000)}:R>`, false)
      .addField(`Nickname : `, `**${Target.nickname || `Default`}**`, true)
      .addField(`Presence : `, `**${Target.presence?.status || `offline`}**`, false)
  const Sm = await interaction.reply({ embeds: [Response], components: [main], fetchReply:true });

    const collector = Sm.createMessageComponentCollector();

    collector.on('collect', async i => {
      if (i.user.id === interaction.user.id) {
        if (i.customId === 'main') {
          await i.update({ embeds: [Response], components: [main] })
        }
        if (i.customId === 'roles') {
          var role = new MessageActionRow().addComponents(
            new MessageButton()
              .setLabel(`Main info`)
              .setEmoji(`ℹ`)
              .setCustomId(`main`)
              .setStyle(`SECONDARY`),
            new MessageButton()
              .setLabel(`Roles info`)
              .setStyle(`DANGER`)
              .setDisabled(true)
              .setEmoji(`ℹ`)
              .setCustomId(`roles`),
            new MessageButton()
              .setLabel(`Permissions`)
              .setStyle(`SECONDARY`)
              .setEmoji(`ℹ`)
              .setCustomId(`permissions`)

          );
          const rolee = new MessageEmbed()
            .setAuthor({ name: `${Target.user.tag}`, iconURL: `${Target.user.displayAvatarURL({ dynamic: true })}` })
            .addField(`Roles : `, `${Target.roles.cache.map(r => r).sort((first, second) => second.position - first.position).join(` | `)}`, true)
            .addField(`Highest role : `, `${Target.roles.highest}`, false)
            .setColor(`RANDOM`)
            .setThumbnail(`${Target.displayAvatarURL({ size: 1024, dynamic: true })}`)
          await i.update({ embeds: [rolee], components: [role] })
        }
        if (i.customId === `permissions`) {
          var perms = new MessageActionRow().addComponents(
            new MessageButton()
              .setLabel(`Main info`)
              .setEmoji(`ℹ`)
              .setCustomId(`main`)
              .setStyle(`SECONDARY`),
            new MessageButton()
              .setLabel(`Roles info`)
              .setStyle(`DANGER`)
              .setEmoji(`ℹ`)
              .setCustomId(`roles`),
            new MessageButton()
              .setLabel(`Permissions`)
              .setStyle(`SECONDARY`)
              .setDisabled(true)
              .setEmoji(`ℹ`)
              .setCustomId(`permissions`)

          );
          var eee2 = new MessageEmbed()
            .setAuthor({ name: `${Target.user.tag}`, iconURL: `${Target.user.displayAvatarURL({ dynamic: true })}` })
            .addField(`Permissions : `, `\`\`\`${Target.permissions.toArray().join(` | `)}\`\`\``, true)
            .setColor(`RANDOM`)
            .setThumbnail(`${Target.displayAvatarURL({ size: 1024, dynamic: true })}`)
          await i.update({ embeds: [eee2], components: [perms] })
        }
      } else {
        i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
      }
    })
  }
}