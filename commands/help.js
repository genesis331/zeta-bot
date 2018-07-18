const { help } = require('./help.json');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

function generate() {
    embed.setTitle("Help Menu");
    embed.setColor(3447003);
    embed.setFooter("Zeta", "https://genesis331.github.io/zeta-web/logos/ZETA-SMALL-WHITE.png");
    embed.setTimestamp();
    for (var i = 0;i <= help.length - 1;i++) {
        var name = "`/" + help[i].command + "`";
        var value = help[i].name;
        embed.addField(name,value);
    }
}

module.exports = class help {
    menu(message) {
        generate();
        message.channel.send("Hi "+ message.author + ", here is the Help Menu!");
        message.channel.send({embed});
        embed = new Discord.RichEmbed();
    }
}
