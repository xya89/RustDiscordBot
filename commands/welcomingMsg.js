const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'welcome',
    description: "Embeds!",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CE412B')
        .setTitle('Welcome')
        .setDescription('This is a embed for welcoming msgs')
        .addFields(
            {name: 'Msg 1', value: 'Bruh'},
            {name: 'Msg 2', value: 'Bruh1'}, 

        )
        // .setImage(
        //     'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
        // )
        .setFooter('Make sure to check out the msgs');

        message.channel.send(newEmbed);

    }



    

}