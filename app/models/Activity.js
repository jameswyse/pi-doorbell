exports.name = 'model.Activity';
exports.version = '1.0.0';

exports.register = function(plugin, options, next) {
  var app   = plugin.app;
  var model = app.model;

  var Trend = model('Activity');

  Trend
    .use(model.plugin('validation'))
    .use(model.plugin('timestamps'))
    .use(model.plugin('mongo'))
    .attr('id')
    .attr('date',     { type: 'date', index: true })
    .attr('category', { type: 'string', index: true })
    .attr('device',   { type: 'string', required: 'true', index: true })
    .attr('message',  { type: 'string' })
    .attr('meta');

  next();
};
