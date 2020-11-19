// The following code is cited from 
// https://www.youtube.com/watch?v=nTGtiCC3iQM&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=2

const Discord = require('discord.js');

const client = new Discord.Client();


// log function
client.once('ready', () => {
    console.log('RustBoi is online!');
})


// basic custome commands for bot
const prefix = '-';


// Error checking for bot prefix
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
    return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // adding commands
    if(command === 'ping') {
        message.channel.send('pong!')
    }
    else if(command === 'wiki') {
        message.channel.send('https://rustlabs.com')
    }


});
















// client token - access key to the bot
// for safety issues, token will be changed everytime doing a git commit push
client.login('Nzc4NzkxMDA1ODA0NTYwNDM0.X7XHpQ.06zojvunNSfsazucd3H9iTjRx9U');

