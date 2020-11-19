module.exports = client => {
    client.on('guildMemberAdd',(member) => {

        const channelID = '723365466990706700'

        console.log(member);

        const message = `Please welcome <@${member.id}> to the server`;

        const channel = member.guild.channels.cache.get(channelID);
        channel.send(message);
    })
}