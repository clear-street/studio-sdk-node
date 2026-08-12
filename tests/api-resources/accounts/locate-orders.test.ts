// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StudioSDK from '@clear-street/studio-sdk';

const client = new StudioSDK({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locateOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.locateOrders.create('100000', {
      mpid: 'x',
      quantity: '100',
      reference_id: 'my-order-id-123',
      symbol: 'AAPL',
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
    const response = await client.accounts.locateOrders.create('100000', {
      mpid: 'x',
      quantity: '100',
      reference_id: 'my-order-id-123',
      symbol: 'AAPL',
      comments: 'comments',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.accounts.locateOrders.retrieve('12390213', { account_id: '100000' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.accounts.locateOrders.retrieve('12390213', { account_id: '100000' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.accounts.locateOrders.update('12390213', {
      account_id: '100000',
      accept: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.accounts.locateOrders.update('12390213', {
      account_id: '100000',
      accept: true,
    });
  });

  test('list', async () => {
    const responsePromise = client.accounts.locateOrders.list('100000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
