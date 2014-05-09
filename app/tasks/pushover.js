exports.name = 'task.pushover';
exports.version = '1.0.0';

exports.register = function(plugin, options, next) {
  var app     = plugin.app;
  var request = app.service.request;
  var url     = 'https://api.pushover.net/1/messages.json';

  function run(job, done) {

    var params = {
      method: 'POST',
      url: url,
      json: true,
      body: {
        token: app.config.get('/env/PUSHOVER_TOKEN'),
        user: app.config.get('/env/PUSHOVER_USER'),
        title: 'Doorbell - Side Gate',
        message: 'Ring! Ring! Ring!',
        priority: 1
      }
    };

    request(params, function(err, res, body) {
      if(err) return done(err);
      return done();
    });
  }

  app.task.define('Notify Pushover', options || {}, run);

  next();
};
