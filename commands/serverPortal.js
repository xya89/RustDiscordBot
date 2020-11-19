module.exports= {
    name: 'portal',
    description: "Access server information on BattleMetrics",
    execute(message, args){
        message.channel.send('https://www.battlemetrics.com/servers/rust/2801795');
    }
}