var path    = require('path');
var resolve = path.join.bind(null, __dirname, '..');

exports.name     = 'controller.web';
exports.version  = '1.0.0';

exports.register = function(plugin, options, next) {
  var app     = plugin.app;
  var web     = plugin.select('web');

  //
  // Static Files
  //
  web.route({
    method: 'GET',
    path: '/{filename*}',
    config: {
      handler: {
        directory: {
          path:    resolve('../public'),
          listing: false,
          index:   false
        }
      }
    }
  });

  //
  // Homepage
  //
  web.route({
    method: 'get',
    path: '/',
    config: {
      handler: function(request, reply) {
        reply.view('home.html', {});
      }
    }
  });

  next();
};
