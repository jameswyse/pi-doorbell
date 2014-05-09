var path    = require('path');
var swig    = require('nails-swig');

var servers = module.exports = [];


servers.push({
  host: '0.0.0.0',
  port: 3000,
  options: {
    labels: ['http', 'web'],
    views: {
      engines: {
        html: {
          module: swig
        }
      },
      path: path.resolve(__dirname, '..', 'templates')
    }
  }
});
