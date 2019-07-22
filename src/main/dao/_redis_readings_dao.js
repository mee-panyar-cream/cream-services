const redis = require('redis');
const {promisify} = require('util');
const config = require('../config/app_config');


const client = redis.createClient(config.getValue('redis_port','unknown'),
                                  config.getValue('redis_host','unknown'));

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
 * @returns Promise
 */
function saveLastReading(uuid, reading){
    const jsonReading = JSON.stringify(reading);
    const key = deviceKey(uuid);
    console.log('Saving Reading for ', key, jsonReading );
    return setAsync(LAST_READING + uuid, jsonReading );
}

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