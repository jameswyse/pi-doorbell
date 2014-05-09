exports.name = 'task.notifications';
exports.version = '1.0.0';

exports.register = function(plugin, options, next) {
  var app = plugin.app;

  function run(job, done) {
    done();
  }

  app.task.define('Send Notification', options || {}, run);

  next();
};
