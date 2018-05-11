const { feedsx } = require('./feeds.json');
const Discord = require('discord.js');
let embed = new Discord.RichEmbed();

function generate(message,name,index,index2) {
    var count = 0;
    embed.setTitle(name + " Feeds");
    embed.setColor(3447003);
    embed.setFooter("Zeta", "https://genesis331.github.io/zeta-web/logos/ZETA-SMALL-WHITE.png");
    embed.setTimestamp();
    for (var f = 0;f <= feedsx[index].feedlist[index2].listfeed.length - 1;f++) {
        var name = "`//" + feedsx[index].feed[index2] + " " + count + "`";
        var value = "Show feeds from " + feedsx[index].feedlist[index2].listfeed[f].name + ".";
        embed.addField(name,value);
        count += 1;
    }
    var name2 = "`//" + feedsx[index].feed[index2] + "`";
    var value2 = "Show feeds from random news sources.";
    embed.addField(name2,value2);
}

module.exports = class feeds2 {
    source(message,name) {
        var check = 0;
        var index = "";
        var index2 = "";
        for (var i = 0;i <= feedsx.length - 1;i++) {
            for (var t = 0;t <= feedsx[i].feed.length;t++) {
                if (feedsx[i].feed[t] === name) {
                    check = 1;
                    index = i;
                    index2 = t;
                }
            }
        }
        if (check === 1) {
            var e1 = feedsx[index].feedlist[index2].name;
            generate(message,e1,index,index2);
            message.channel.send({embed});
            embed = new Discord.RichEmbed();
            check = 0;
        } else {
            message.channel.send("Feed category not found.");
        }
    }
}