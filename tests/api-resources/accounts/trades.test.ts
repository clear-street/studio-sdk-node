// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const client = new StudioSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trades', () => {
  test('retrieve', async () => {
    const responsePromise = client.accounts.trades.retrieve('100000', '12390213');
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
      client.accounts.trades.retrieve('100000', '12390213', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.accounts.trades.list('100000');
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
    await expect(client.accounts.trades.list('100000', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      StudioSDK.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.trades.list(
        '100000',
        { page_size: 1, page_token: 'page_token' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });
});
