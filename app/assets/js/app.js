var qwery = require('qwery');
var bonzo = require('bonzo');

function $(selector) {
  return bonzo(qwery(selector));
}

var primus = new Primus('http://127.0.0.1:3000');

primus.on('connection', function(spark) {
  console.log('connected');

  spark.on('data', function(data) {
    if(data.doorbell) {
      $('body').css('background', 'green');
      $('.bell').show();

      setTimeout(function() {
        $('body').css('background', '#D6D6D6');
        $('.bell').hide();
      }, 2000);

    }
  });
});

primus.on('disconnection', function(spark) {
  console.log('disconnected');
});
