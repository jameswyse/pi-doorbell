var pfio         = require('piface-node');
var EventEmitter = require('events').EventEmitter;

var emitter    = new EventEmitter();
var prev_state = 0;

// Watch for Ctrl+C
process.on('SIGINT', stopListening);

startListening();

function startListening() {
	pfio.init();
	watchInputs();
}

function stopListening() {
	pfio.deinit();
	process.exit(0);
}

// Watches for state changes
function watchInputs() {
	var state;
	state = pfio.read_input();
	if (state !== prev_state) {
		emitter.emit('changed', state, prev_state);
		prev_state = state;
	}
	setTimeout(watchInputs, 10);
}

emitter.on('changed', function(state, prevState) {
  console.log('Input changed from ' + prevState + ' to ' + state);
});
