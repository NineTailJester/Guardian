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

client.login(process.env.NjUxNjE3MzUwMzkwNjQ0NzM3.XecyYA.3jweP6sCRJArCWFmdt8mwBh2-AA);//BOT_TOKEN is the Client Secret
