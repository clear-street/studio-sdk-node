// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const client = new StudioSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulkOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.bulkOrders.create('100000', {
      orders: [{ order_type: 'limit', quantity: '100', side: 'buy', symbol: 'AAPL', time_in_force: 'day' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.accounts.bulkOrders.create('100000', {
      orders: [
        {
          order_type: 'limit',
          quantity: '100',
          side: 'buy',
          symbol: 'AAPL',
          time_in_force: 'day',
          locate_broker: 'x',
          price: '123.99',
          reference_id: 'my-order-id-123',
          stop_price: '123.99',
          strategy: { type: 'sor', end_at: 1710613560668, start_at: 1710613560668, urgency: 'super-passive' },
          symbol_format: 'cms',
        },
      ],
    });
  });
});
