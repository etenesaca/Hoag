#!/usr/bin/env node
"use strict";

var Dates = require('./dates');

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
  var text_result = Dates.getDateTime() + '  ' + colors.bold(ltype) + '  ' + text;
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
logger.logger_type = logger_type;

module.exports = logger;