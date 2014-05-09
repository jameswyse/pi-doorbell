var Primus = window.Primus;
var qwery = require('qwery');
var bonzo = require('bonzo');

function $(selector) {
  return bonzo(qwery(selector));
}

var primus = new Primus();

primus.on('open', function(spark) {
  console.log('connected');
});

primus.on('end', function(spark) {
  console.log('disconnected');
});

primus.on('data', function(data) {
  if(data && data.doorbell) {
    $('body').css('background', 'green');
    $('.bell').show();

    setTimeout(function() {
      $('body').css('background', '#D6D6D6');
      $('.bell').hide();
    }, 2000);
  }
});
