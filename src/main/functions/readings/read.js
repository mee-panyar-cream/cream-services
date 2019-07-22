const dao = require('../../dao/readings_dao_factory').get();
// const process = require('process');

/**
 * Uses Promise style
 * @param {*} event 
 * @param {*} context 
 */
export const latest = async (event, context) => {
  console.log('Event', event)
  console.log('Context', context)
  console.log('Env', process.env)


  const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

    const device_id = event.queryStringParameters['device_id'];
    const result = dao.getLastReading(device_id);
    return result.then(function(val){
      console.debug('Success', val)
      return {
        statusCode: 200,
        headers : headers,
        body: JSON.stringify(val)
      };
    }).catch(function(err){
      console.error(err)
      return response = {
        statusCode: 500,
        body: '{"msg":' + JSON.stringify(err)+ '}'
      };

    });
  

}
