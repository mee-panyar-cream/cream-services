const dao = require('../../dao/readings_dao_factory').get();

/**
 * Uses callback style
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
export function create(event, context, callback) {
  console.debug('Event', event)
  console.debug('Context', context)

    var data = JSON.parse(event.body);
    try {
      const result = dao.saveLastReading(data["device-id"], data);
      result.then(function(){
        const response = {
          statusCode: 200,
          body: '{"msg":"saved"}'
        };
        callback(null, response);
      }).catch(function(err){
        const response = {
          statusCode: 500,
          body: '{"msg":' + JSON.stringify(err)+ '}'
        };
        callback(null, response);
      });

      
      return;

    } catch (e) {
      console.log(e);
      const response = {
        statusCode: 400,
        message: e.message
      };
      callback(null, response);
      return;
    }
}
