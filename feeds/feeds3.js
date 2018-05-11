var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = new XMLHttpRequest();
const { feedsx } = require('./feeds.json');
const Discord = require('discord.js');

function generate(message,feedtitle,feedlink,feedname,feedsite) {
    var feedvalue = `**${feedtitle}**\n \n${feedlink}\n \nSource: ${feedname} (${feedsite})`;
    message.channel.send(feedvalue);
}

function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getFeed(message,index,index2,arg) {
    var url = feedsx[index].feedlist[index2].listfeed[arg].url;
    http.onreadystatechange = function(error) {
        if (http.readyState == 4 && http.status == 200) {
            var xml = http.responseText;
            var xml2js = require('xml2js');
            var parser = new xml2js.Parser({explicitArray : false});
            parser.parseString(xml,function (err, result) {
                var value = JSON.stringify(result);
                var obj = JSON.parse(value);
                var feedtitle = obj.rss.channel.item[0].title;
                var feedlink = obj.rss.channel.item[0].link;
                var feedname = feedsx[index].feedlist[index2].listfeed[arg].name;
                var feedsite = feedsx[index].feedlist[index2].listfeed[arg].site;
                generate(message,feedtitle,feedlink,feedname,feedsite);
            });
        }
    }
    http.open("GET",url,true);
    http.send();
}

module.exports = class feeds3 {
    get(message,name,arg) {
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
            if (arg > feedsx[index].feedlist[index2].listfeed.length - 1) {
                arg = getRandomNum(feedsx[index].feedlist[index2].listfeed.length - 1);
            } else if (arg == undefined) {
                arg = getRandomNum(feedsx[index].feedlist[index2].listfeed.length - 1);
            }
            getFeed(message,index,index2,arg);
            check = 0;
        } else {
            message.channel.send("Feed category not found.");
        }
    }
}