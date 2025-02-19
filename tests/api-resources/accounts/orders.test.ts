// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const client = new StudioSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.orders.create('x', {
      order_type: 'limit',
      quantity: 'x',
      side: 'buy',
      symbol: 'AAPL',
      time_in_force: 'day',
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
    const response = await client.accounts.orders.create('x', {
      order_type: 'limit',
      quantity: 'x',
      side: 'buy',
      symbol: 'AAPL',
      time_in_force: 'day',
      locate_broker: 'x',
      price: 'x',
      reference_id: 'my-order-id-123',
      stop_price: 'x',
      strategy: { type: 'sor', end_at: 1710613560668, start_at: 1710613560668, urgency: 'super-passive' },
      symbol_format: 'cms',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.accounts.orders.retrieve('x', 'x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.orders.retrieve('x', 'x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.accounts.orders.list('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.orders.list('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      StudioSDK.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.orders.list(
        'x',
        { from: 1710613560668, page_size: 1, page_token: 'page_token', to: 1710613560668 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.accounts.orders.delete('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.orders.delete('x', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      StudioSDK.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.orders.delete(
        'x',
        { symbol: 'AAPL', symbol_format: 'cms' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.accounts.orders.cancel('x', 'x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.orders.cancel('x', 'x', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });

  test('patch: only required params', async () => {
    const responsePromise = client.accounts.orders.patch('x', 'x', { quantity: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('patch: required and optional params', async () => {
    const response = await client.accounts.orders.patch('x', 'x', {
      quantity: 'x',
      price: 'x',
      stop_price: 'x',
    });
  });
});
