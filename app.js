var nails = require('nails-framework');

var app = nails({
  name:    'pi-doorbell',
  desc:    'Raspberry Pi doorbell controller',
  version: '0.0.1',

  base:    __dirname,
  require: require,

  options: {
    config: {
      env:   true,
      pkg:   true,
      argv:  true,
      files: 'app/config/**/*.{js,json}'
    },
    cache:   '/cache',
    logs:    '/logger',
    servers: '/servers',
    plugins: '/plugins'
  }
});

app
  .load('app/models/**/*.js')
  .load('app/controllers/**/*.js')
  .load('app/tasks/**/*.js');

app.start();

function shutdown() {
  app.stop(function() {
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
