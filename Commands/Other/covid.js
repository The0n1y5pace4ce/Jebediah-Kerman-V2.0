//  GNU General Publice Lisence v3.0 - https://www.gnu.org/licenses/gpl-3.0.en.html
//  Credit to: Wilson#0159 on Discord.
//  Removal of this header breaches the license agreement.
//  For more info, refer to the license page linked at the top.

const covidApi = require('novelcovid');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'covid',
    description: 'Get information about covid-19!',
    cooldown: 30000,
    options: [
        {
            name: 'country',
            description: 'Provide a country to look up.',
            type: 'STRING',
            required: true,
        },
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        covidApi.settings({
            baseUrl: 'https://disease.sh',
        });

        const { options } = interaction;
        const country = options.getString('country');
        try {
            const covid = await covidApi.countries({ country: country });

            const covidDescription = stripIndent`
            Country                ::   ${covid.country}
    
            Total Cases            ::   ${covid.cases}
            Cases Today            ::   ${covid.todayCases}
    
            Total Deaths           ::   ${covid.deaths}
            Deaths Today           ::   ${covid.todayDeaths}
    
            Total Recovered        ::   ${covid.recovered}
            Recovered Today        ::   ${covid.todayRecovered}
    
            Cases Per 1 Million    ::   ${covid.casesPerOneMillion}
            Deaths Per 1 Million   ::   ${covid.deathsPerOneMillion}
    
            Total Tests            ::   ${covid.tests}
            Tests Per 1 Million    ::   ${covid.testsPerOneMillion}
    
            Total Population       ::   ${covid.population}
            `;
    
            const covidEmbed = new MessageEmbed()
                .setColor('#cb300d')
                .setTitle(`Covid Information | ${covid.countryInfo.iso2}`)
                .setDescription(`\`\`\`asciidoc\n${covidDescription}\`\`\``)
                .setImage(covid.countryInfo.flag)
                .addField(
                    'Disclaimer:',
                    'The bot, nor the creator of the bot, are reliable for out of date/incorrect information. All information is sourced from https://disease.sh covid API.'
                );
    
            interaction.reply({ embeds: [covidEmbed] });
        } catch (err) {
            interaction.reply({content: `\`\`\`${err}\`\`\``, ephemeral: true})
        }
    },
};