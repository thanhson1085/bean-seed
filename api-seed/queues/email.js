'use strict';
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('config');
var consumer = {};
var os = require('os');
var transporter = nodemailer.createTransport(smtpTransport(config.get('mailer')));
var logger = require('../helpers/logger');
consumer.name = os.hostname() + 'email';

var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');

consumer.task = function(job, done){
    var data = job.data;
    var templateDir = path.join(__dirname, '../views/emails/', data.template);
    var letter = new EmailTemplate(templateDir);
    letter.render(data.emailContent, function (err, results) {
        try{
            logger.debug('Send email', data.title);
            transporter.sendMail({
                from: config.get('mailer.from'),
                to: data.to,
                subject: data.title,
                html: results.html
            });
        } catch(e) {
            logger.error(e);
        }
    });
    done();
};

module.exports = consumer;
