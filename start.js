const ZetaHelp = require('./commands/help.js');
const help = new ZetaHelp();
const ZetaAbout = require('./commands/about.js');
const about = new ZetaAbout();
const ZetaUptime = require('./plugins/uptime.js');
const uptime = new ZetaUptime();
const ZetaVersion = require('./plugins/version.js');
const version = new ZetaVersion();
const ZetaConfig = require('./config/config.js');
const config = new ZetaConfig();
const ZetaContribute = require('./commands/contribute.js');
const contribute = new ZetaContribute();
const ZetaFeedlist = require('./commands/feedlist.js');
const feedlist = new ZetaFeedlist();
const ZetaContact = require('./commands/contact.js');
const feedback = new ZetaContact();
const ZetaFeeds = require('./feeds/feeds.js');
const feed = new ZetaFeeds();
const ZetaFeeds2 = require('./feeds/feeds2.js');
const feed2 = new ZetaFeeds2();
const ZetaFeeds3 = require('./feeds/feeds3.js');
const feed3 = new ZetaFeeds3();

module.exports = class start {
    config(name) {
        return config.get(name);
    }

    help(message) {
        help.menu(message);
    }

    about(message) {
        about.show(message);
    }

    uptime(message) {
        uptime.start();
    }

    version() {
        return version.show();
    }

    contribute(message) {
        contribute.show(message);
    }

    feedlist(message) {
        feedlist.show(message);
    }

    feedback(message,msg) {
        feedback.send(message,msg);
    }

    feedintro(message,name) {
        feed.intro(message,name);
    }

    feedsource(message,name) {
        feed2.source(message,name);
    }

    feedget(message,name,arg) {
        feed3.get(message,name,arg);
    }
}