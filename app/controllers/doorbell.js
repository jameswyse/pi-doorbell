var pfio         = require('piface-node');

exports.name     = 'controller.doorbell';
exports.version  = '1.0.0';

exports.register = function(plugin, options, next) {
  var app       = plugin.app;
  var lastState = 0;
  var timer;

  app.on('started', startListening);
  app.on('stop', stopListening);

  // Starts listening for button presses
  function startListening() {
    pfio.init();
    timer = setInterval(checkInput, 20);
  }

  // Stops listening for button presses
  function stopListening() {
    clearInterval(timer);
    timer = null;
    pfio.deinit();
  }

  // Checks the current state of the button
  function checkInput() {
    var state = pfio.read_input();

    if(state !== lastState) {
      if(state === 128) {
        console.log('\n============================');
        console.log('= RING RING RING RING RING =');
        console.log('============================\n');

        // Write to websocket
        app.ws.write({
          doorbell: true
        });

        // Send notifications
        app.task.now('Notify XBMC');
      }

      lastState = state;
    }
  }

  next();
};
