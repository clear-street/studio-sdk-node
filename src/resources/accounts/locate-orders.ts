// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LocateOrders extends APIResource {
  /**
   * Create locate order to borrow inventory for short-selling.
   *
   * @example
   * ```ts
   * const locateOrder =
   *   await client.accounts.locateOrders.create('100000', {
   *     mpid: 'x',
   *     quantity: '100',
   *     reference_id: 'my-order-id-123',
   *     symbol: 'AAPL',
   *   });
   * ```
   */
  create(
    accountID: string,
    body: LocateOrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.LocateOrder> {
    return this._client.post(path`/accounts/${accountID}/locate-orders`, { body, ...options });
  }

  /**
   * Get locate order by its unique locate order ID.
   *
   * @example
   * ```ts
   * const locateOrder =
   *   await client.accounts.locateOrders.retrieve('12390213', {
   *     account_id: '100000',
   *   });
   * ```
   */
  retrieve(
    locateOrderID: string,
    params: LocateOrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Shared.LocateOrder> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/locate-orders/${locateOrderID}`, options);
  }

  /**
   * Accept or decline locate order that has been offered.
   *
   * @example
   * ```ts
   * await client.accounts.locateOrders.update('12390213', {
   *   account_id: '100000',
   *   accept: true,
   * });
   * ```
   */
  update(locateOrderID: string, params: LocateOrderUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/locate-orders/${locateOrderID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all locate orders
   *
   * @example
   * ```ts
   * const locateOrders =
   *   await client.accounts.locateOrders.list('100000');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<LocateOrderListResponse> {
    return this._client.get(path`/accounts/${accountID}/locate-orders`, options);
  }
}

export interface LocateOrderListResponse {
  data: Array<Shared.LocateOrder>;
}

export interface LocateOrderCreateParams {
  /**
   * The market participant where the locate will be sent.
   */
  mpid: string;

  /**
   * String representation of quantity.
   */
  quantity: string;

  /**
   * Your unique ID for this locate order.
   */
  reference_id: string;

  symbol: string;

  /**
   * Any additional comments for the locate request.
   */
  comments?: string;
}

export interface LocateOrderRetrieveParams {
  /**
   * The account ID or account number to get the locate order for.
   */
  account_id: string;
}

export interface LocateOrderUpdateParams {
  /**
   * Path param: The account ID or account number to update the locate order for.
   */
  account_id: string;

  /**
   * Body param: Accept or decline the locate order.
   */
  accept: boolean;
}

export declare namespace LocateOrders {
  export {
    type LocateOrderListResponse as LocateOrderListResponse,
    type LocateOrderCreateParams as LocateOrderCreateParams,
    type LocateOrderRetrieveParams as LocateOrderRetrieveParams,
    type LocateOrderUpdateParams as LocateOrderUpdateParams,
  };
}
