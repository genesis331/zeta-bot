const Discord = require('discord.js');
const ZetaStart = require('./start.js');
var bot_token = `${process.env.BOT_TOKEN}`;
const start = new ZetaStart();
const bot = new Discord.Client();
const prefix = start.config("prefix");
const current_version = start.version();

bot.on('ready', (message) => {
    console.log(`Zeta ${current_version} Test`);
    process.exit();
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === '/help') {
        start.help(message);
    }

    else if (command === '/about') {
        start.about(message);
    }

    else if (command === '/contribute') {
        start.contribute(message);
    }

    else if (command === '/feedlist') {
        start.feedlist(message);   
    }

    else if (command.startsWith("//")) {
        const source = message.content.slice(prefix.length + 2);
        const arg = source.split(' ');
        start.feedget(message,arg[0],arg[1]);
    }

    else if (command.startsWith("??")) {
        const msgg = message.content.slice(prefix.length + 2);
        start.feedsource(message,msgg);
    }

    else if (command.startsWith("?")) {
        const msg = message.content.slice(prefix.length + 1);
        start.feedintro(message,msg);
    }

    else if (command === '/contact') {
        var contact = prefix + "/contact ";
        const msg = message.content.slice(contact.length);
        if (msg.length === 0) {
            message.channel.send("Please include your message after /contact.");
        } else if (msg.length !== 0){
            start.feedback(message,msg);
        }
    }

    else {
        message.channel.send("Invalid command. Use `/help` to use available commands.");
    }
});

bot.login(bot_token);
