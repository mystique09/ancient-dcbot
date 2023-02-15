

delete eval;

module.exports = {
    "name":"kick",
    "description": "Kick abusive users",
    execute(message, args){

        const user = message.mentions.users.first();

        if (user){

            const member = message.guild.member(user);

            if (member){

                member.kick(`Abusive user!`)
                .then(success => {
                    message.reply(`Successfully kicked ${user.tag}`);
                    console.log(success);
                })
                .catch(error => {
                    message.reply('I was unable to kick the member!');
                });
            } else {

                message.reply(`That user isn't in this guild!`);
            }
        } else {
            
            message.reply(`You didn't mention a user to kick!`);
        }
    }
}