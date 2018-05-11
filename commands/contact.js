var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = new XMLHttpRequest();
const ZetaConfig = require('../config/config.js');
const config = new ZetaConfig();

module.exports = class feedback {
    send(message,msg) {
        var Reporturl = `https://hooks.zapier.com/hooks/catch/${config.get("report_hook")}/?report=${msg}`;
        http.open("POST",Reporturl,true);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                message.channel.send(`${message.author}, thanks for the feedback! Zeta Developers will review it soon.`);
            }
        }
        http.send();
    }
}