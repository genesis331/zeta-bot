const ZetaUptime = require('../plugins/uptime.js');
const uptime = new ZetaUptime();
const ZetaVersion = require('../plugins/version.js');
const version = new ZetaVersion();

module.exports = class about {
    show(message) {
        var count = uptime.show();
        var current = version.show(); 
        message.channel.send(`My name is Zeta, a news bot. \nCurrent version: **${current}** \nUptime: ${count}\nFor more information, visit: https://genesis331.github.io/zeta-web. \nTo contribute to this project, use **/contribute** command to see more information.`, {
            file: "https://genesis331.github.io/zeta-web/logos/ZETA-COVER-TRANSPARENT.png"       
        });
    }
}