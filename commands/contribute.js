module.exports = class contribute {
    show(message) {
        message.channel.send("To contribute to Zeta development, visit https://github.com/genesis331/zeta-bot.\nIf you need help on contributing, kindly read the Zeta's contributor's guide in https://genesis331.github.io/zeta-web/contribute/.", {
            file: "https://genesis331.github.io/zeta-web/logos/ZETA-COVER-TRANSPARENT.png"       
        });
    }
}