// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK from '@clear-street/studio-sdk';
import { Response } from 'node-fetch';

const client = new StudioSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource regtMarginSimulations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.entities.regtMarginSimulations.create('x', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.entities.regtMarginSimulations.create('x', {
      name: 'name',
      ignore_existing: true,
      prices: [
        { price: 'x', symbol: 'AAPL', symbol_format: 'cms' },
        { price: 'x', symbol: 'AAPL', symbol_format: 'cms' },
        { price: 'x', symbol: 'AAPL', symbol_format: 'cms' },
      ],
      trades: [
        { price: 'x', quantity: 'x', side: 'buy', symbol: 'AAPL', symbol_format: 'cms' },
        { price: 'x', quantity: 'x', side: 'buy', symbol: 'AAPL', symbol_format: 'cms' },
        { price: 'x', quantity: 'x', side: 'buy', symbol: 'AAPL', symbol_format: 'cms' },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.entities.regtMarginSimulations.retrieve(
      'x',
      '6460030d-8ed4-19d3-818e-e87b36e90005',
    );
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
      client.entities.regtMarginSimulations.retrieve('x', '6460030d-8ed4-19d3-818e-e87b36e90005', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(StudioSDK.NotFoundError);
  });
});
