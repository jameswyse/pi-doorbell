var pfio = require('piface-node');

exports.name = 'task.chime';
exports.version = '1.0.0';

exports.register = function(plugin, options, next) {
  var app = plugin.app;

  function run(job, done) {
    pfio.digital_write(0,1);
    setTimeout(function() {
      pfio.digital_write(0,0);
      setTimeout(function() {
        pfio.digital_write(0,1);
        setTimeout(function() {
          pfio.digital_write(0,0);
          return done();
        }, 1000);
      }, 1000);
    }, 1000);
  }

  app.task.define('Ring Chime', options || {}, run);

  next();
};
