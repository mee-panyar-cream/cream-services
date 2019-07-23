import * as handler from '../functions/readings/read';
import * as handler from '../functions/readings/read';

test('latest', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await handler.latest(event, context, callback);
});
