const { Emoji } = require("discord.js")

module.exports= {
    name: 'heli',
    description: "Send a Helicopter emoji",

    
    execute(message, args){


        // permission for roles
        if(message.member.roles.cache.has('778810772783628288')){
            message.channel.send("<:mymini:778807755686281237>");

        }

        else{
            message.channel.send('No permission');

            // add member to the role 
            
            message.channel.send('But now you do, try again');
            message.member.roles.add('778810772783628288');

        }

        
    }
}