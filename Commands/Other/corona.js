const puppeteer = require("puppeteer");
const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "corona",
    description: "Command will show current amount of corona cases, deaths and recovered",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        
        interaction.reply({ content: "Fetching data...", fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 1000) })
        
        const gettingDataMessage = "Fetching data..."
        
        const CoronaStartEmbed = new MessageEmbed()
            .setTitle("Corona Data")
            .setDescription(`\`\`\`${gettingDataMessage}\`\`\``)
            .setTimestamp()
        
        const CoronaData = await interaction.channel.send({ embeds: [CoronaStartEmbed] })

        async function scrapeInfo(url) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url, {
                waitUntil: "load",
                timeout: 0
            });

            const [CoronaVirusCases] = await page.$x(`/html/body/div[3]/div[2]/div[1]/div/div[4]/div`);
            const txt = await CoronaVirusCases.getProperty('textContent');
            const CurrentAmountOfCoronaCases = await txt.jsonValue();

            const [CoronaVirusDeaths] = await page.$x(`/html/body/div[3]/div[2]/div[1]/div/div[6]/div`);
            const txt2 = await CoronaVirusDeaths.getProperty('textContent');
            const CurrentAmountOfCoronaDeaths = await txt2.jsonValue();

            const [CoronaVirusRecovered] = await page.$x(`/html/body/div[3]/div[2]/div[1]/div/div[7]/div`);
            const txt3 = await CoronaVirusRecovered.getProperty('textContent');
            const CurrentAmountOfCoronaRecovered = await txt3.jsonValue();

            const [CurrentlyInfectedPatients] = await page.$x(`/html/body/div[3]/div[2]/div[1]/div/div[9]/div/div[2]/div/div/div[1]/div[1]`);
            const txt4 = await CurrentlyInfectedPatients.getProperty('textContent');
            const CurrentlyInfectedPatientsAmount = await txt4.jsonValue();

            const [InMildCondition] = await page.$x(`/html/body/div[3]/div[2]/div[1]/div/div[9]/div/div[2]/div/div/div[1]/div[3]/div[1]/span`);
            const txt5 = await InMildCondition.getProperty('textContent');
            const InMildConditionAmount = await txt5.jsonValue();

            const [SeriousOrCritical] = await page.$x(`/html/body/div[3]/div[2]/div[1]/div/div[9]/div/div[2]/div/div/div[1]/div[3]/div[2]/span`);
            const txt6 = await SeriousOrCritical.getProperty('textContent');
            const SeriousOrCriticalAmount = await txt6.jsonValue();

            const CoronaEmbed = new MessageEmbed()
            .setTitle("CORONA DATA")
            .setURL(url)
            .setDescription(
                `\`\`\``
                +
                `COVID-19 CORONAVIRUS PANDEMIC`
                +
                `\n\n`
                +
                `Coronavirus Total Cases:           ${CurrentAmountOfCoronaCases}`
                +
                `\n`
                +
                `Deaths:                            ${CurrentAmountOfCoronaDeaths}`
                +
                `\n`
                +
                `Recovered:                         ${CurrentAmountOfCoronaRecovered}`
                +
                `\n\n`
                +
                `ACTIVE CASES`
                +
                `\n\n`
                +
                `Currently Infected Patients:       ${CurrentlyInfectedPatientsAmount}`
                +
                `\n`
                +
                `in Mild Condition:                 ${InMildConditionAmount}`
                +
                `\n`
                +
                `Serious or Critical:               ${SeriousOrCriticalAmount}`
                +
                `\`\`\``
            )
            .addField("Source:", "`All the data shown above will contain real world data fetched from https://www.worldometers.info/coronavirus/`")
            .setTimestamp()
            .setColor("GREEN")

            CoronaData.edit({embeds: [CoronaEmbed]})

            browser.close();
        }

        setInterval(() => {
            scrapeInfo("https://www.worldometers.info/coronavirus/")
        }, 5000);
    }
}