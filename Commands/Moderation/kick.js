const { Client, CommandInteraction, MessageEmbed, Guild } = require("discord.js");

module.exports = {
	name: "kick",
	description: "Used to kick a target",
	permission: "KICK_MEMBERS",
	options: [
		{
			name: "target",
			description: "Select a target to kick ",
			type: "USER",
			required: true
		},
		{
			name: "reason",
			description: "Provide a reason to kick that member",
			type: "STRING",
			required: true
		},
	],
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 * @param {Client} client
	 */
	execute(interaction, client ) {
		const { options } = interaction;
		const Target = options.getMember("target");
		const Reason = options.getString("reason");
		const guild = interaction.guild;

		const success = new MessageEmbed()
		.setDescription(`<:yes:895520458152226906> **${Target} was Successfully kicked**\n ||This Member was kicked for ${Reason}||`)
		.setColor("DARK_AQUA")
		if (Target.id ===
            interaction.member.id)
		return interaction.reply({embeds: [new MessageEmbed().setColor("BLUE").setDescription("<:info:896693747570597929> You can't kick yourself")]})

		if (Target.permissions.has("ADMINISTRATOR"))
		return interaction.reply({embeds: [new MessageEmbed().setColor("BLUE").setDescription("<:info:896693747570597929> **LoL** You can't kick an Admin")]})
		
		if (Target.permissions.has("MANAGE_GUILD"))
		return interaction.reply({embeds: [new MessageEmbed().setColor("BLUE").setDescription("<:info:896693747570597929> **LoL** You can't kick a Moderator")]})

        Target.send({embeds: [new MessageEmbed().setColor("BLUE").setDescription(`<:info:896693747570597929> You were kicked from **${guild.name}** for __${Reason}__ `)]})
        

        Target.send({content: "Remember to not to repeat that mistake again you can join using https://discord.gg/R8XGQ3vNbU"})
       
        Target.kick({reason: Reason})

		interaction.reply({embeds:[success]})
	
	}
}