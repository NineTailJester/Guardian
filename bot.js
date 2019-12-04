const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjUxNjE3MzUwMzkwNjQ0NzM3.Xecf_w.7EPB3JJwT_luSu729ezp5b0NQEQ);//BOT_TOKEN is the Client Secret
