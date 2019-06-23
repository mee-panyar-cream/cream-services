export function create(event, context, callback) {
    console.log(event);
    try {
      var meterInput = {
          deviceId: event["device-id"],
          readingTime: event["reading-time"],
          reading: {
            voltageV: event.reading["voltage-V"],
            currentA: event.reading["current-A"],
            activePowerW: event.reading["active-power-W"],
            accumulatedPowerKWh: event.reading["accumulated-power-kWh"],
            frequencyHz: event.reading["frequency-Hz"],
            powerFactor: event.reading["power-factor"]
          }
      };
      console.log(meterInput);

      const response = {
        statusCode: 200,
        message: "Meter Input created:"
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
