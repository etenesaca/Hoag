#!/usr/bin/env node
"use strict";

var Strings = require('./strings');

var sql = function () {    
}

/*
Armar un Insert
*/
sql.buildInsert = function (tableName, values) {
    var fvalues = [];
    var fields = []
    for (var i = values.length - 1; i >= 0; i--){
        if (typeof values[i] == 'undefined' || typeof values[i].value == 'undefined')
            continue;

        var _value;
        fields.push(values[i].field);
        
        if (['integer','boolean'].indexOf(values[i].type) > -1)
            _value = values[i].value;
        else if (['string','date'].indexOf(values[i].type) > -1)
            _value = Strings.format("'{0}'", values[i].value);
        fvalues.push(_value);
    }
        
    var query = Strings.format("INSERT INTO {0} ({1}) VALUES ({2});", tableName, fields.join(','), fvalues.join(','));
    return query;
}

module.exports = sql;