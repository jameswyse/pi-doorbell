var xbmc = require('xbmc');

exports.name = 'task.xbmc';
exports.version = '1.0.0';

exports.register = function(plugin, options, next) {
  var app = plugin.app;

  function run(job, done) {

    var connection = new Xbmc.TCPConnection({
      host: '10.0.0.53',
      port: 9090,
      verbose: true
    });

    var api = new Xbmc.XbmcApi();

    api.setConnection(connection);

    api.message(
      'RING RING RING!',
      'Doorbell - Side Gate',
      10000
    );

    return done();
  }

  app.task.define('Notify XBMC', options || {}, run);

  next();
};
