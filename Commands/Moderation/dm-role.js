//  GNU General Publice Lisence v3.0 - https://www.gnu.org/licenses/gpl-3.0.en.html
//  Credit to: M4HD1#6336 on discord.
//  Removal of this header breaches the license agreement.

//  WARNING
//  • | This command will wait 3 seconds before DMing the next member with the role. This is to prevent harassing the API, which can lead to bans.
//  • | 3 seconds is safe and shouldn't lead to any bans.
//  • | Be aware that for roles being on a lot of members this might take a while, you can lower the waiting time between each DM at your own risk of getting API banned.
//  • | However if you want to decrease the timings, it's your choice. For example to change the 5 second delay to 3 you would change delay(5000) to delay(3000)
//  • | I am not responsible for any API bans as I purposely increased the delays to prevent this.

const { MessageEmbed, Client, CommandInteraction } = require("discord.js");
const { create } = require("sourcebin")

function delay(time) {return new Promise((resolve) => setTimeout(resolve, time))}

module.exports = {
  name: "dm-role",
  description: "Message a user if they have a certain role.",
  usage: "/dm-role",
  disabled: false,
  permission: "ADMINISTRATOR",
  options: [
     {
      name: "role",
      description: "Mention the role",
      type: "ROLE",
      required: true,
    },
    {
      name: "message",
      description: "Provide the message you want the bot to send.",
      type: "STRING",
      required: true,
    },
  ],
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const role = interaction.options.getRole('role');
    const message = interaction.options.getString("message");
    
    const members = interaction.guild.roles.cache.get(role.id).members
    let memberIds = members.map(m => m.id);

    if(memberIds.length == 0)
      return interaction.reply({embeds: [new MessageEmbed().setColor("RED").setDescription(`${role} has been given to 0 members, so I did not attempt to DM anyone.`).setFooter({text: "The w"})], ephemeral: true})

    const Embed = new MessageEmbed().setColor("AQUA")

    var successfulMembers = 0
    var successfulMembersList = []
    var failedMembers = 0
    var failedMembersList = []

    await interaction.reply({embeds: [new MessageEmbed().setColor("AQUA").setDescription(`**Sending dm to all users with the role ${role}**.\n\n> Successful DMs: ${successfulMembers}\n\n> Failed DMs: ${failedMembers}\n\n> Latest member: *Starting dms in 5 seconds.*`).setFooter({text: "Success!"})], fetchReply: true})

    await delay(5000) //This waits 5 seconds before attempting to DM any members. If you want to change it it is in milliseconds so 5000 = 5 seconds.

    for (var i = 0; i < memberIds.length; i++) {
      var member = client.users.cache.get(memberIds[i]);

      try {
        var sendMessage = await member.send({embeds: [new MessageEmbed().setColor("AQUA").setTitle("New role message 📨").setDescription(`${message}`).addFields({name: "Guild", value: `${interaction.guild.name}`, inline: true}, {name: "Role", value: `${role.name}`, inline: true}, {name: "Message Sender", value: `${interaction.member}`, inline: true}).setFooter({text: "Success!"})]})
        successfulMembers += 1
        successfulMembersList.push(member)
      } catch (error) {
        failedMembers += 1
        failedMembersList.push(member)
      }

      interaction.editReply({embeds: [Embed.setDescription(`**Sending dm to all users with the role ${role}**\n\n> Successful DMs: ${successfulMembers}\n\n> Failed DMs: ${failedMembers}\n\n> Latest member: ${member}`).setFooter({text: "Success!"})]})
    
      await delay(3000) //This waits 3 seconds before DMing the next member. If you want to change it it is in milliseconds so 3000 = 3 seconds.
    }
    const failedMembersMapped = failedMembersList.map((m) => m).join(", ") || "None";
    const successfulMembersMapped = successfulMembersList.map((m) => m).join(", ") || "None"

    var failedMembersMessage = failedMembersMapped
    var successfulMembersMessage = successfulMembersMapped

    if (failedMembersMapped.length > 1024) {
      const failedMembersSourcebin = await create([{name: "failedMembers", content: failedMembersMapped}])
      failedMembersMessage = failedMembersSourcebin.url
    }

    if (successfulMembersMapped.length > 1024) {
      const successfulMembersSourcebin = await create([{name: "successfulMembers", content: successfulMembersMapped}])
      successfulMembersMessage = successfulMembersSourcebin.url
    }

    interaction.editReply({content: `${interaction.member}`, embeds: [Embed.setDescription(`**Finished sending dm to all users with the role ${role}**`).addFields({name: "Successful DMs", value: `${successfulMembers}`}, {name: "Failed DMs", value: `${failedMembers}`, inline: true}, {name: "Successful members", value: `${successfulMembersMessage}`}, {name: "Failed members", value: `${failedMembersMessage}`}).setFooter({text: "Success!"})]})
  },
};