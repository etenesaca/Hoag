#!/usr/bin/env node
"use strict";

var Strings = require('./strings');

var sql = function () {    
}
// Pasar a una tupla para hacer operaciones del SQL
sql.tplstr = function(ids) {
    if (typeof ids == 'undefined' || (typeof ids == 'object' && ids.length == 0))
        return "(0)";
    // Si no es una lista se debe pasar a lista
    if (typeof ids == 'number')
        ids = [ids];
    return Strings.format("({0})", ids.join(','))
};

/*
ARMAR EL QUERY PARA UN INSERT
*/
sql.buildInsert = function (tableName, values) {
    var fvalues = [];
    var fields = []
    for (var i = values.length - 1; i >= 0; i--){
        if (typeof values[i] == 'undefined' || typeof values[i].value == 'undefined' || values[i].value == null)
            continue;

        var _value = values[i].value + "";
        fields.push(values[i].field);
        if (['string','date'].indexOf(values[i].type) > -1)
            _value = Strings.format("'{0}'", values[i].value);
        fvalues.push(_value);
    }
    var query = Strings.format("INSERT INTO {0} \n({1}) \nVALUES \n({2});", tableName, fields.join(', '), fvalues.join(', '));
    return query;
}

/*
ARMAR EL QUERY PARA UN UPDATE
*/
sql.buildUpdate = function (tableName, values, ids) {
    var fvalues = [];
    for (var i = values.length - 1; i >= 0; i--){
        if (typeof values[i] == 'undefined' || typeof values[i].value == 'undefined')
            continue;

        var _value = values[i].value;
        if (['string','date'].indexOf(values[i].type) > -1)
            _value = Strings.format("'{0}'", values[i].value);
        fvalues.push(Strings.format("{0} = {1}", values[i].field, _value));
    }
    var query = Strings.format("UPDATE {0} \nSET \n{1} \nWHERE id in {2};", tableName, fvalues.join(', '), sql.tplstr(ids));
    return query;
}

/*
ARMAR EL QUERY PARA UN DELETE
*/
sql.buildDelete = function (tableName, ids, field) {
    field = field || 'id';
    var query = Strings.format("DELETE FROM {0} \nWHERE {1} in {2};", tableName, field, sql.tplstr(ids));
    return query;
}

module.exports = sql;