#!/usr/bin/env node
"use strict";

var Strings = require('./strings');

var extras = function () {};

/*
Validar correo electronico
*/
extras.validateEmail = function(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports = extras;