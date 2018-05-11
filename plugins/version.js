const {current_version} = require('../version.json');

module.exports = class version {
    show() {
        return current_version;
    }
}