const { MessageActionRow, MessageButton,  MessageEmbed, Message } = require('discord.js');
const client = require("../../Structures/index");// Make sure this path is correct
const { staff } = require("../../Structures/config.json");//  Go to your config.json and add "staff": "staff id here" and then make sure the path is correct.

client.on("interactionCreate", async (interaction, message) => {

    if (interaction.isButton()) {
        if (interaction.customId === 'tic') {

            const guild = interaction.guild;
            
            interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    },
                    {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: '868984164131667978',
                        allow: ['SEND_MESSAGES','VIEW_CHANNEL','MANAGE_MESSAGES','MANAGE_CHANNELS']
                    },
                    {
                        id: '924960939508383794',
                        allow: ['SEND_MESSAGES','VIEW_CHANNEL','MANAGE_MESSAGES','MANAGE_CHANNELS']
                    }
                ],
                type : 'text', parent: '883246281126985768'
            }).then(async channel => {
                channel.send({   
                content: `Welcome <@${interaction.user.id}> <@&${staff}>`,
                embeds: [embed],
                components: [del]})
            }).then(interaction.reply({
                content: 'Created ticket',
                ephemeral: true
            }))




            const embed = new MessageEmbed()
                .setTitle('Ticket')
                .setDescription('Hello there, \n The staff will be here as soon as possible  meanwhile tell us about your issue!\nThank You!')
                .setColor('GREEN')
                .setTimestamp()
                .setAuthor(interaction.guild.name, interaction.guild.iconURL({
                dynamic: true
            }))

            const del = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('del')
                    .setLabel('🗑️ Delete Ticket!')
                    .setStyle('DANGER'),
                );
            interaction.user.send('Your ticket has been opened!');
            setTimeout(() => {
                interaction.channel.bulkDelete(1)
            }, 5000)
        } else if (interaction.customId === 'del') {

            const thread = interaction.channel
            thread.delete();

        }
    }
})