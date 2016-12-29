#!/usr/bin/env node
/*
Allow write colors in console
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
Get date and time in format string
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

/* Write log line */
var logger_type = {
    info : 1,
    warn: 2,
    error: 3
};
var logger = function (text, _type, bold) {
  text = bold && colors.bold(text) || text
  var ltype = "";
  if (_type == logger_type.info)
    ltype = colors.green('INFO');
  else if (_type == logger_type.warn)
    ltype = colors.yellow('WARN')
  else if (_type == logger_type.error)
    ltype = colors.red('ERROR')
  else
    ltype = colors.green('INFO');
  var text_result = getDateTime() + '  ' + colors.bold(ltype) + '  ' + text;
  console.log(text_result);
}

logger.info = function (text, bold) {
  logger(text, logger_type.info, bold)
};
logger.warn = function (text, bold) {
  logger(text, logger_type.warn, bold)
};
logger.error = function (text, bold) {
  logger(text, logger_type.error, bold)
};



module.exports.logger_type = logger_type;
module.exports.logger = logger;