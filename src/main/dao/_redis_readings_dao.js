const redis = require('redis');
const {promisify} = require('util');
const config = require('../config/app_config');

const client = redis.createClient(config.getValue('redis_port','not-configured'),
                                  config.getValue('redis_host','not-configured'));

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const LAST_READING = 'LAST_READING';

client.on('error', function(errorMsg){
    console.log('there is an error! message' , errorMsg);
});

function deviceKey(uuid){
    return LAST_READING + uuid;
}

/**
 * @param {String} uuid 
 * @param {Reading} reading 
 * @returns either a Promise that resolves when the call succeeds or a promise that throws a redis.ReplyError
 * https://github.com/NodeRedis/node_redis#error-handling--v26
 */
function saveLastReading(uuid, reading){
    const jsonReading = JSON.stringify(reading);
    const key = deviceKey(uuid);
    console.log('Saving Reading for ', key, jsonReading );
    return setAsync(LAST_READING + uuid, jsonReading );
}

/**
 * @param {String} uuid 
 * @returns a Promise of a {Reading} . 
 */
function getLastReading(uuid){
    const key = deviceKey(uuid);
    console.log('Get Reading for ' + key);
    var reading = getAsync(LAST_READING + uuid);
    
    const jsonPromise = reading.then(function(val){
        return new Promise(function(resolve, reject){
            resolve(JSON.parse(val))
        });
    })
    return jsonPromise;
}

module.exports.saveLastReading = saveLastReading;
module.exports.getLastReading = getLastReading;