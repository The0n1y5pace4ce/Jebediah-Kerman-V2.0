const { MessageEmbed, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'dvmap',
    description: 'Shows the selected Delta V map',
    options: [
        {
            name: 'map-type',
            description: 'Select a DV map type',
            type: 'STRING',
            required: 'true',
            choices: [
                {
                    name: 'Galileo\'s Planet Pack',
                    value: 'galileo',
                },
                {
                    name: 'JNSQ Planet Pack',
                    value: 'jnsq'
                },
                {
                    name: 'Kerbal sized real solar system (2.5x)',
                    value: 'ksrss'
                },
                {
                    name: 'Real Solar System',
                    value: 'rss'
                },
                {
                    name: 'Stock sized system',
                    value: 'stock'
                }
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const choices = interaction.options.getString('map-type');

        switch(choices) {
            case 'galileo' : {
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Galileo\'s Planet Pack Delta V Map (KSP)')
                .setImage('https://media.discordapp.net/attachments/883250115769434132/921995498662015017/GPP_dVmap.png')
                .setTimestamp()

                interaction.reply({embeds: [embed]});
            }
            break;
            case "jnsq" : {
                const embed2 = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('JNSQ Planet Pack Delta V Map (KSP)')
                .setImage('https://media.discordapp.net/attachments/889064624979324959/921995834676101120/JNSQ_DV-01.png?width=1456&height=1128')
                .setTimestamp()

                interaction.reply({embeds: [embed2]});
            }
            break;
            case 'ksrss' : {
                const embed3 = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('KSRSS Delta V Map (KSP)')
                .setImage('https://media.discordapp.net/attachments/889064624979324959/921995927697358848/dvksrss.png')
                .setTimestamp()

                interaction.reply({embeds: [embed3]});
            }
            break;
            case 'rss' : {
                const embed4 = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Real Solar System Delta V Map (KSP)')
                .setImage('https://media.discordapp.net/attachments/889064624979324959/921996010866241546/RSS_Delta-V_Map.png')
                .setTimestamp()

                interaction.reply({embeds: [embed4]});
            }
            break;
            case 'stock' : {
                const embed5 = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Delta V Map For The Stock KSP System')
                .setImage('https://media.discordapp.net/attachments/889064624979324959/921994810968137728/DV_stock.png?width=797&height=1127')
                .setTimestamp()

                interaction.reply({embeds: [embed5]});
            }
            break;
            
        }
    }

}