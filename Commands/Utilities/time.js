const { CommandInteraction } = require("discord.js");


module.exports = {
    name: 'time',
    description: 'Tells the current time and date!',
    execute(interaction) {
        const date = new Date();
            // Send date
        const content = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

        const date1 = new Date();
            // Send time
        const content1 = date1.getHours() + ':' + date1.getMinutes() + ':' + date1.getSeconds();

        interaction.reply(content);
        interaction.channel.send(content1)
    }
}