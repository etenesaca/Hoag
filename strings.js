#!/usr/bin/env node
"use strict";

var strings = function () {    
}

/*
Esta funcion sirve para completar una cadena con un numero de ceros hasta que tenga un tamanio

@str = Cadena que se va completar
@num (Opcional) = Numero de caracteres que tiene que tener la cadena final, valor por defecto es 2
@right (opcional) = Indica si se debe llenar a lado Derecho o No, valor por defecto es Falso
@character (opcional) = Es el caracter de relleno, valor por defecto es '0'
*/
strings.complete_string = function(str,num,right,character){
    str = String(str);
    num = num || 2;
    num = parseInt(num);
    character = character || '0';
    character = String(character);
    while(str.length < num){
        if (right==true)
            str = str + character
        else
            str = character + str
    }
    return str;
}
/*
Funcion para reemplar comodines numerico en uan Cadena: {0}, {1}
*/
strings.format = function(str) {
    var args = Array.prototype.slice.call(arguments, 1);
    return str.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
};
/*
Funcion para reemplar comodines con el nombre de una clave JSNO: {name}, {date}
*/
strings.formatJson = function(str, keys) {
    for (var arg in keys)
        str = str.replace(new RegExp("{" + arg + "}", 'g'), keys[arg]);
    return str;
}

module.exports = strings;