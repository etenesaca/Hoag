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

dates.getNowUTC = function(miliseconds=false) {
    let date = new Date();
    let timezone = date.toString().split(" ")[5];

    let YY = date.getUTCFullYear();
    let MM = Strings.complete_string(date.getUTCMonth() + 1)
    let DD = Strings.complete_string(date.getUTCDate())

    let H = Strings.complete_string(date.getUTCHours())
    let M = Strings.complete_string(date.getUTCMinutes())
    let S = Strings.complete_string(date.getUTCSeconds())
    let MLS = Strings.complete_string(date.getUTCMilliseconds())

    let res_date = `${YY}-${MM}-${DD} ${H}:${M}:${S}`
    if (miliseconds){
        res_date = res_date + `.${MLS}`
    }
    return res_date;
}

module.exports = dates;