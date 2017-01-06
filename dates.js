#!/usr/bin/env node
"use strict";

var Strings = require('./strings');

/*
Get date and time in format string
*/
var getDateTime = function() {
    var date = new Date();

    var hour = Strings.complete_string(date.getHours())
    var min = Strings.complete_string(date.getMinutes())
    var sec = Strings.complete_string(date.getSeconds())
    var milisec = Strings.complete_string(date.getMilliseconds(),3)

    var year = date.getFullYear();
    var month = Strings.complete_string(date.getMonth())
    var day = Strings.complete_string(date.getDate())

    var timezone = date.toString().split(" ")[5];

    return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec+':'+milisec+" "+timezone;
}

module.exports.getDateTime = getDateTime;