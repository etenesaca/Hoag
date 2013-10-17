#!/usr/bin/env node
/*
Permitir que se puedan escribir colores en la consola
*/
var colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

/*
Esta funcion sirve para completar una cadena con un numero de ceros hasta que tenga un tamanio

@str = Cadena que se va completar
@num (Opcional) = Numero de caracteres que tiene que tener la cadena final, valor por defecto es 2
@right (opcional) = Indica si se debe llenar a lado Derecho o No, valor por defecto es Falso
@character (opcional) = Es el caracter de relleno, valor por defecto es '0'
*/
complete_string = function(str,num,right,character){
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
Devuelve la fecha y hora actual en un formato String
*/
getDateTime = function() {
    var date = new Date();

    var hour = complete_string(date.getHours())
    var min = complete_string(date.getMinutes())
    var sec = complete_string(date.getSeconds())
    var milisec = complete_string(date.getMilliseconds(),3)

    var year = date.getFullYear();
    var month = complete_string(date.getMonth())
    var day = complete_string(date.getDate())

    var timezone = date.toString().split(" ")[5];

    return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec+':'+milisec+" "+timezone;
}