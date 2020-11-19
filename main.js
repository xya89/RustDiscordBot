// The following code is cited from 
// https://www.youtube.com/watch?v=nTGtiCC3iQM&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=2

const Discord = require('discord.js');

const client = new Discord.Client();

// basic custome commands for bot
const prefix = '-';

const fs = require('fs');

// stored commands collection
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// loop throught the files
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}




// log function
client.once('ready', () => {
    console.log('RustBoi is online!');
});



// Error checking for bot prefix
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
    return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    // basic command handler
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'wiki') {
        message.channel.send('https://rustlabs.com')
    }
    // adding more commands
    // extract to command to functions
    else if(command === 'portal') {
        client.commands.get('portal').execute(message, args);
    }


});
















// client token - access key to the bot
// for safety issues, token will be changed everytime doing a git commit push
client.login('Nzc4NzkxMDA1ODA0NTYwNDM0.X7XHpQ.06zojvunNSfsazucd3H9iTjRx9U');

