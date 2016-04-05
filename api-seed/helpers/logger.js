'use strict';
var winston = require('winston');
var config = require('config');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: config.get('logs.level'),
            handleExceptions: config.get('logs.handleExceptions'),
            json: false,
            colorize: false,
            timestamp: function() {
                var date = new Date();                          

                var hour = date.getUTCHours();              
                hour = (hour < 10 ? '0' : '') + hour;   

                var min  = date.getUTCMinutes();
                min = (min < 10 ? '0' : '') + min;

                var sec  = date.getUTCSeconds();
                sec = (sec < 10 ? '0' : '') + sec;

                var year = date.getUTCFullYear();

                var month = date.getUTCMonth() + 1;
                month = (month < 10 ? '0' : '') + month;

                var day  = date.getUTCDate();
                day = (day < 10 ? '0' : '') + day;

                var millisecond = date.getUTCMilliseconds();

                return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec + '.' + millisecond;

            },
            formatter: function(options) {
                // Return string will be passed to logger.
                return options.timestamp() + ' ' + options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        }),
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message){
        logger.info(message);
    }
};
