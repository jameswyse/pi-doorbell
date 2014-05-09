console.log('hello world');
var primus = new Primus('http://127.0.0.1:3000');

primus.on('connection', function(spark) {
  console.log('connected');

  spark.on('data', function(data) {
    if(data.doorbell) window.alert('Ring ring ring!');
  });
});

primus.on('disconnection', function(spark) {
  console.log('disconnected');
});
