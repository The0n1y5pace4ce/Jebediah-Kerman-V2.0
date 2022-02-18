const { MessageEmbed, Message, WebhookClient } = require('discord.js');

module.exports = {
    name: 'messageUpdate',
    /**
     * 
     * @param {Message} oldMessage 
     * @param {Message} newMessage 
     */
    execute(oldMessage, newMessage) {
        if(oldMessage.author.bot) return;

        if(oldMessage.content === newMessage.content) return;

        const Count = 1950;

        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? '...' : '');
        const Edited = newMessage.content.slice(0, Count) + (newMessage.content.length > 1950 ? '...' : '');

        const Log = new MessageEmbed()
        .setColor('#36393F')
        .setDescription(`📘 A [message](${newMessage.url}) by ${newMessage.author} was **edited** in ${newMessage.channel}\n 
        **Original**: \n ${Original} \n**Edited**:\n ${Edited}`)
        .setFooter(`Member: ${newMessage.author.tag} | ID: ${newMessage.author.id}`);

        new WebhookClient({url: "https://discord.com/api/webhooks/937262775741321227/my3Uqo7hOzCg_CmbvWvIKWKNN_jN8I3hBw7tALBEQ0a-6_JnWFdSo2umciJCBQcsmoDE"}
        ).send({embeds: [Log]}).catch((err) => console.log(err));

    }
}