var redis = require('redis');
var client = redis.createClient('6379','127.0.0.1');

client.on('error', function(errorMsg){
    console.log('there is an error message' , errorMsg);
});

client.set('testkey', 'testvalue', redis.print);
client.get('testkey', function(err, value) {
    if (err) throw err;
    console.log('The fetched value is ' + value);
    client.quit();
});
