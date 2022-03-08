const { MessageEmbed, CommandInteraction } = require('discord.js');
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    description: 'Get the weather of a selected area',
    options: [
        {
            name: 'location',
            description: 'Choose a location to search for weather',
            type: 'STRING',
            required: true
        }
    ],

    async execute(interaction) {
        const location = interaction.options.getString('location');

        weather.find({search: `${location}`, degreeType: 'C'}, function (error, result){

            if(error) return interaction.channel.send({content: error});

            if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

            const current = result[0].current;
            const location = result[0].location;

            const weatherInfo = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor({ text: `Weather forecast for ${current.observationpoint}`})
            .setThumbnail(current.imageUrl)
            .setColor('DARK_BUT_NOT_BLACK')
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', 'Celsius', true)
            .addField('Temperature', `${current.temperature}°`, true)
            addField('Wind', current.winddisplay, true)
            .addField('Feels like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)

            interaction.reply({embeds: [weatherInfo]});
        });

          
    }


}