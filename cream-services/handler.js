export const latest = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      "device-id":"46820256-0ed7-4895-b2d4-6691a081b2a5",
      "reading-time" :"tbd",
       "reading" : {
            "voltage-V":123,
            "current-A": 5.6,
             "active-power-W": 688.8,
             "accumulated-power-kWh":9999,
             "frequency-Hz": 50,
             "power-factor": 0.9
       }
      }),
  };
}
