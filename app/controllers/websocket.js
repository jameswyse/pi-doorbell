var Primus = require('primus');

exports.name     = 'controller.websocket';
exports.version  = '1.0.0';

exports.register = function(plugin, options, next) {
  var app     = plugin.app;
  var web     = plugin.select('web');
  var server  = web.servers[0].listener;

  //
  // Create websocket server
  //
  var primus = app.ws = new Primus(server, {
    transformer: 'websockets'
  });

  primus.on('connection', function (spark) {
    console.log('new connection');
  });

  next();
};
