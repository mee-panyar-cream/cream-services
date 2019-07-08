export const latest = async (event, context) => {
  const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

  let rand = Math.random() * 0.1;
  
  return {
    statusCode: 200,
    headers : headers,
    body: JSON.stringify({
      "device-id":"46820256-0ed7-4895-b2d4-6691a081b2a5",
      "reading-time" :"tbd",
       "reading" : {
            "voltage-V": Math.floor(123 * rand),
            "current-A": 5.6 * rand,
             "active-power-W": Math.floor(688.8 * rand),
             "accumulated-power-kWh": Math.floor(9999 * rand),
             "frequency-Hz": 50,
             "power-factor": 0.9
       }
      }),
  };
}
