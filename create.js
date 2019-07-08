export function create(event, context, callback) {
  console.log('Event', event)

    var data = JSON.parse(event.body);
    try {
      var meterInput = {
          deviceId: data["device-id"],
          readingTime: data["reading-time"],
          reading: {
            voltageV: data.reading["voltage-V"],
            currentA: data.reading["current-A"],
            activePowerW: data.reading["active-power-W"],
            accumulatedPowerKWh: data.reading["accumulated-power-kWh"],
            frequencyHz: data.reading["frequency-Hz"],
            powerFactor: data.reading["power-factor"]
          }
      };
      console.log(meterInput);

      const response = {
        statusCode: 200,
        body: '{}'
      };
      callback(null, response);
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
