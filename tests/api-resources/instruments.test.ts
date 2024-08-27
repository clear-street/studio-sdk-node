// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK, { toFile } from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const studioSDK = new StudioSDK({ bearerToken: 'My Bearer Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource instruments', () => {
  test('retrieve', async () => {
    const responsePromise = studioSDK.instruments.retrieve('AAPL');
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
    await expect(studioSDK.instruments.retrieve('AAPL', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(StudioSDK.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(studioSDK.instruments.retrieve('AAPL', { symbol_format: 'cms' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(StudioSDK.NotFoundError);
  });
});
