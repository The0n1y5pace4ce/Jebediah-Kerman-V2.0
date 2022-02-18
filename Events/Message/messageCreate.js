const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "messageCreate",
  description: 'Placeholder',
  /**
   * @param {Message} message
   * @param {Client} client
   */
  async execute(message, client) {
    if (message.author.bot) return;

    const { content, guild, author, channel } = message;
    const messageContent = content.toLowerCase().split(" ");

    const Filter = ['hi','gm','gn','fuck', 'kraken'];

    messageContent.forEach((word) => {
      if (Filter.includes(word)) {
		  
		  if (word === 'hi'){
		        const Embed = { 
                    description: 'Hello!', 
                    image: {
                        url: 'https://c.tenor.com/pvFJwncehzIAAAAC/hello-there-private-from-penguins-of-madagascar.gif'
                    }
                };
                
		      channel.send({ embeds: [Embed] });
		  }
		  
		  if (word === 'gm'){
      		channel.send({ content: "Rise and Shine!" });
		  }
		  
		  if (word === 'gn'){
      		channel.send({ content: "Sleep Tight!" });
		  }
		  
		  if (word === 'fuck'){
      		channel.send({ content: "You kiss your mother with that mouth?!" });
		  }

      if (word === 'kraken'){
        channel.send({content: "🤣"})
      }
		  
      }
    });
  },
};