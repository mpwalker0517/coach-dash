/*
This is the logging setup for this project. Winston is declard and setup here and then functions are exported that utilize the setup.
You are also going to see some crypto stuff. This is not being used for actual security and instead is being used
to convert the request into a hash that I can then output in the log. Its only real purpose is to make it easier when trying to
see what was logged with what request.

*/
const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, simple, printf } = format;
//require('winston-daily-rotate-file');
const crypto = require('crypto');

const myFormat = printf( ({ level, message, timestamp }) => {
    return `{app_name:'VCReg', level:${level}, message:${message}, process_id:0, timestamp: ${timestamp}}`;
  });

const logger = winston.createLogger({
  format: combine(
      timestamp(),
      myFormat
  ),
  transports: [

    //new winston.transports.File({ filename: './Logs/error.log', level: 'error' }),
    //new winston.transports.DailyRotateFile({filename:'./Logs/info-%DATE%.log', datePattern:'YYYY-MM', level: 'info'}),
    //new winston.transports.DailyRotateFile({filename:'./Logs/verbose-%DATE%.log', datePattern:'YYYY-MM-DD', level: 'verbose'}),
    new winston.transports.Console({level:'debug'}),
    new winston.transports.File({ filename: 'combined.log', level:'debug'})
  ],
});

//each level is getting a function to simplify me writing the code.
//winston already allows this but now I get more control
function errors(message){
    logger.error(message)
};

function info(message){
    logger.info(message)
};

function verbose(message){
    logger.verbose(message)
};

function debug(message){
    logger.debug(message)
};

function trace(msg,hash){

  logger.debug(`${hash} | ${msg}`);

};

//This function creates a unique enough hash to more easily track and requests

function getHash(str){

  let string;

  if(typeof str ==="object"){

    string = JSON.stringify(str);

  }else{

    string = str;

  };

  let date = new Date(); //Generate date to make the hash more likely to be different with each submit

  string = `${string}${date.valueOf()}`; //concatenate the date ms with the string

  return crypto.createHash('sha1').update(string).digest('hex').slice(0,8);

};

module.exports.errors = errors;
module.exports.info = info;
module.exports.verbose = verbose;
module.exports.debug = debug;
module.exports.getHash = getHash;
module.exports.trace = trace;