var second = 0;
var minute = 0;
var hour = 0;
var day = 0;

var days = "";

var hours = "";

var minutes = "";

var seconds = "";

function checkPlural() {
    if (second <= 1) {
        seconds = " second ";
    } else if (second > 1) {
        seconds = " seconds ";
    }

    if (minute <= 1) {
        minutes = " minute ";
    } else {
        minutes = " minutes ";
    }

    if (hour <= 1) {
        hours = " hour ";
    } else {
        hours = " hours ";
    }

    if (day <= 1) {
        days = " day ";
    } else {
        day = " days ";
    }
}

function upTimeStart() {
    setTimeout(function() {
            if (second + 1 !== 60) {
                second += 1;
                upTimeStart();
            } else if (second + 1 === 60) {
                second = 0;
                if (minute + 1 !== 60) {
                    minute += 1;
                    upTimeStart();
                } else if (minute + 1 === 60) {
                    minute = 0;
                    if (hour + 1 !== 24) {
                        hour += 1;
                        upTimeStart();
                    } else if (hour + 1 === 24) {
                        hour = 0;
                        day += 1;
                        upTimeStart();
                    }
                }
            }
    },1000);
    checkPlural();
}

function upTimeShow() {
    var show = day + days + hour + hours + minute + minutes + second + seconds;
    return show;
}

module.exports = class uptime {
    start() {
        upTimeStart();
    }

    show() {
        return upTimeShow();
    }
}