// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK, { toFile } from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const studioSDK = new StudioSDK({ bearerToken: 'My Bearer Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource bulkOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = studioSDK.accounts.bulkOrders.create('x', { orders: [{ order_type: 'limit', side: 'buy', quantity: 'x', time_in_force: 'day', symbol: 'AAPL' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await studioSDK.accounts.bulkOrders.create('x', { orders: [{ reference_id: 'my-order-id-123', order_type: 'limit', side: 'buy', quantity: 'x', price: 'x', stop_price: 'x', time_in_force: 'day', locate_broker: 'x', symbol: 'AAPL', symbol_format: 'cms', strategy: { type: 'sor', start_at: 1710613560668, end_at: 1710613560668, urgency: 'super-passive' } }] });
  });
});
