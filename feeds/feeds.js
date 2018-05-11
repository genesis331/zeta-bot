const { feedsx } = require('./feeds.json');
const Discord = require('discord.js');
let embed = new Discord.RichEmbed();

function generate(message,name,index) {
    embed.setTitle(name);
    embed.setColor(3447003);
    embed.setFooter("Zeta", "https://genesis331.github.io/zeta-web/logos/ZETA-SMALL-WHITE.png");
    embed.setTimestamp();
    for (var f = 0;f <= feedsx[index].feedlist.length - 1;f++) {
        var name = "`??" + feedsx[index].feedlist[f].codename + "`";
        var value = "Show feeds about " + feedsx[index].feedlist[f].name + ".";
        embed.addField(name,value);
    }
}

module.exports = class feeds {
    intro(message,name) {
        var check = 0;
        var e1 = "";
        var index = "";
        for (var i = 0;i <= feedsx.length - 1;i++) {
            if (feedsx[i].feedcmd === name) {
                check = 1;
                e1 = feedsx[i].feedname;
                index = i;
            }
        }
        if (check === 1) {
            generate(message,e1,index);
            message.channel.send(message.author + ", here is the list of news sources about " + feedsx[index].feedname + ".");
            message.channel.send({embed});
            embed = new Discord.RichEmbed();
            check = 0;
        } else {
            message.channel.send("Feed category not found.");
        }
    }
}