var prefix = "<@414604992163610646> ";
var bot_token = `${process.env.BOT_TOKEN}`;
var report_hook = `${process.env.reporthook}`;

module.exports = class config {
    get(name) {
        if (name === "prefix") {
            return prefix;
        } else if (name === "bot_token") {
            return bot_token;
        } else if (name === "report_hook") {
            return report_hook;
        }
    }
}