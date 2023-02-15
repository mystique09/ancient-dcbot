

delete eval;

module.exports = {
    "name":"ban",
    "description": "Ban abusive users",
    execute(message, args){

        const user = message.mentions.users.first();

        if (user){

            const member = message.guild.member(user);

            if (member){

                member.ban(`Abusive user!`)
                .then(success => {
                    message.reply(`Successfully banned ${user.tag}`);
                    console.log(success);
                })
                .catch(error => {
                    message.reply('I was unable to ban the member');
                });
            } else {

                message.reply(`That user isn't in this guild!`);
            }
        } else {
            
            message.reply(`You didn't mention a user to ban!`);
        }
    }
}