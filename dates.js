#!/usr/bin/env node
"use strict";

var Strings = require('./strings');

var dates = function () {
}

/*
Get date and time in format string
*/
dates.getDateTime = function() {
    var date = new Date();

    var hour = Strings.complete_string(date.getHours())
    var min = Strings.complete_string(date.getMinutes())
    var sec = Strings.complete_string(date.getSeconds())
    var milisec = Strings.complete_string(date.getMilliseconds(),3)

    var year = date.getFullYear();
    var month = Strings.complete_string(date.getMonth() + 1)
    var day = Strings.complete_string(date.getDate())

    var timezone = date.toString().split(" ")[5];
    
    return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec+':'+milisec+" "+timezone;
}

dates.getNowUTC = function() {
    var date = new Date();

    var hour = Strings.complete_string(date.getUTCHours())
    var min = Strings.complete_string(date.getUTCMinutes())
    var sec = Strings.complete_string(date.getUTCSeconds())

    var year = date.getUTCFullYear();
    var month = Strings.complete_string(date.getUTCMonth() + 1)
    var day = Strings.complete_string(date.getUTCDate())

    var timezone = date.toString().split(" ")[5];

    return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
}

module.exports = dates;