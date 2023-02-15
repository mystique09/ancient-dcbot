

delete eval;

module.exports = {

    name: "prune",
    description: "",

    execute(message, args){

        const amount = parseInt(args[0]);

        message.channel.bulkDelete(amount).then(val =>{
         
            message.reply(`Deleted ${amount} messages.`);

        })
        .catch(error => {
            
            if(isNaN(amount)){

                message.reply("Amount must be a number!");

            }
        });
    }
};