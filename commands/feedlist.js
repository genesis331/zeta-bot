const { categories } = require('./feedlist.json');
const Discord = require('discord.js');
let embed = new Discord.RichEmbed();

function generate() {
    embed.setTitle("Available Feeds");
    embed.setColor(3447003);
    embed.setFooter("Zeta", "https://genesis331.github.io/zeta-web/logos/ZETA-SMALL-WHITE.png");
    embed.setTimestamp();
    for (var i = 0;i <= categories.length - 1;i++) {
        var name = "`?" + categories[i].command + "`";
        var value = "Show feed list about " + categories[i].name + ".";
        embed.addField(name,value);
    }
}

module.exports = class feedlist {
    show(message) {
        generate();
        message.channel.send(message.author + ", here is the list of feeds available.");
        message.channel.send({embed});
        embed = new Discord.RichEmbed();
    }
}