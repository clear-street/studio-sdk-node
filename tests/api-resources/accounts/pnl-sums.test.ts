// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const client = new StudioSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pnlSums', () => {
  test('list: only required params', async () => {
    const responsePromise = client.accounts.pnlSums.list('x', {
      ending_date: 20240101,
      starting_date: 20240101,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.accounts.pnlSums.list('x', {
      ending_date: 20240101,
      starting_date: 20240101,
      symbol: 'AAPL',
      underlying_symbol: 'AAPL',
    });
  });
});
