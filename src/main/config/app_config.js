/**
 * Abstracts configuration values
 */
module.exports.getValue = function(key, defaultValue){
    console.log('getting', key, defaultValue, process.env);
    
    if ( process.env[key]){
        return process.env[key];
    } else {
        return defaultValue;
    } 
}