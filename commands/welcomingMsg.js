const { DiscordAPIError } = require("discord.js")


// Embed for welcoming messages
module.exports= {
    name: 'welcome',
    description: "Embeds!",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CE412B')
        .setTitle('Kill, Die, Sigh, Repeat')
        .addFields(
            {name: 'Rule 1', value: 'Have a good time rusting'},
            {name: 'Rule 2', value: 'Drink water'}, 
            {name: 'Rule 3', value: 'Repeat the previous two'}, 

        )
        .setImage(
            'https://files.facepunch.com/s/581f25039912.jpg'
        )
        .setFooter('good luck rusting');

        message.channel.send(newEmbed);

    }




}