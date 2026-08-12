// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Creates a new order and sends to our internal systems for execution. Note that a
   * successful call to this endpoint does not necessarily mean your order has been
   * accepted, e.g. a downstream venue might reject your order. You should therefore
   * utilize our WebSocket APIs to listen for changes in order lifecycle events.
   *
   * @example
   * ```ts
   * const order = await client.accounts.orders.create(
   *   '100000',
   *   {
   *     order_type: 'limit',
   *     quantity: '100',
   *     side: 'buy',
   *     symbol: 'AAPL',
   *     time_in_force: 'day',
   *   },
   * );
   * ```
   */
  create(
    accountID: string,
    body: OrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<OrderCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/orders`, { body, ...options });
  }

  /**
   * Get an order that was previously created.
   *
   * @example
   * ```ts
   * const order = await client.accounts.orders.retrieve(
   *   '12390213',
   *   { account_id: '100000' },
   * );
   * ```
   */
  retrieve(
    orderID: string,
    params: OrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * List orders for a given account for the current trading day, filtered on the
   * given query parameters.
   *
   * @example
   * ```ts
   * const orders = await client.accounts.orders.list('100000');
   * ```
   */
  list(
    accountID: string,
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get(path`/accounts/${accountID}/orders`, { query, ...options });
  }

  /**
   * Attempts to cancel all open orders for a given account. Cancelling an order
   * cannot be guaranteed as there might be in-flight executions.
   *
   * @example
   * ```ts
   * const order = await client.accounts.orders.delete('100000');
   * ```
   */
  delete(
    accountID: string,
    params: OrderDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderDeleteResponse> {
    const { symbol, symbol_format } = params ?? {};
    return this._client.delete(path`/accounts/${accountID}/orders`, {
      query: { symbol, symbol_format },
      ...options,
    });
  }

  /**
   * Attempts to cancel an existing order. Cancelling an order cannot be guaranteed
   * as there might be in-flight executions.
   *
   * @example
   * ```ts
   * await client.accounts.orders.cancel('12390213', {
   *   account_id: '100000',
   * });
   * ```
   */
  cancel(orderID: string, params: OrderCancelParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/orders/${orderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Attempts to update an existing order. This can be used to update a subset of an
   * order's attributes, for example price and quantity.
   *
   * @example
   * ```ts
   * await client.accounts.orders.patch('12390213', {
   *   account_id: '100000',
   *   quantity: '100',
   * });
   * ```
   */
  patch(orderID: string, params: OrderPatchParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/orders/${orderID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrderCreateResponse {
  /**
   * An internally generated unique ID for this order.
   */
  order_id: string;
}

export interface OrderRetrieveResponse {
  order: Shared.Order;
}

export interface OrderListResponse {
  data: Array<Shared.Order>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
}

export interface OrderDeleteResponse {
  /**
   * Array of order IDs that were attempted to be cancelled.
   */
  data: Array<string>;
}

export interface OrderCreateParams {
  /**
   * The type of order, can be one of the following:
   *
   * - `limit`: A limit order will execute at-or-better than the limit price you
   *   specify
   * - `market`: An order that will execute at the prevailing market prices
   * - `stop`: A stop order will result in a market order when the market price
   *   reaches the specified stop price
   * - `stop-limit`: A stop limit order will result in a limit order when the market
   *   price reaches the specified stop price
   */
  order_type: 'limit' | 'market' | 'stop' | 'stop-limit';

  /**
   * The maximum quantity to be executed.
   */
  quantity: string;

  /**
   * Buy, sell, sell-short indicator.
   */
  side: 'buy' | 'sell' | 'sell-short';

  /**
   * The symbol this order is for. See `symbol_format` for supported symbol formats.
   */
  symbol: string;

  /**
   * The lifecycle enforcement of this order.
   *
   * - `day`: The order will exist for the duration of the current trading session
   * - `ioc`: The order will immediately be executed or cancelled
   * - `day-plus`: The order will exist only for the duration the current trading
   *   session plus extended hours, if applicable
   * - `at-open`: The order will exist only for the opening auction of the next
   *   session
   * - `at-close`: The order will exist only for the closing auction of the current
   *   session
   */
  time_in_force: 'day' | 'ioc' | 'day-plus' | 'at-open' | 'at-close';

  /**
   * If you're short-selling and using an away broker for a locate, provide the
   * broker name here.
   */
  locate_broker?: string;

  /**
   * Open/Close indicator for option orders.
   */
  open_close_indicator?: 'open' | 'close';

  /**
   * The price to execute at-or-better for limit orders.
   */
  price?: string;

  /**
   * An ID that you provide.
   */
  reference_id?: string;

  /**
   * The price at which stop orders become marketable.
   */
  stop_price?: string;

  /**
   * The execution strategy to use for this order. If not provided, our smart
   * order-router will handle execution for your order.
   */
  strategy?: Shared.Strategy;

  /**
   * Denotes the format of the provided `symbol` field.
   */
  symbol_format?: 'cms' | 'osi';
}

export interface OrderRetrieveParams {
  /**
   * The account ID or account number to get the order for.
   */
  account_id: string;
}

export interface OrderListParams {
  /**
   * Milliseconds since epoch timestamp. This will constrain the search for orders
   * created after this timestamp, inclusively. Timestamps for orders prior the
   * current trading day will be ignored.
   */
  from?: number;

  /**
   * Number of orders to return per page.
   */
  page_size?: number;

  /**
   * Cursor for the page to return.
   */
  page_token?: string;

  /**
   * Milliseconds since epoch timestamp. This will constrain the search for orders
   * created before this timestamp, inclusively. Timestamps for orders beyond the
   * current trading day will be ignored.
   */
  to?: number;
}

export interface OrderDeleteParams {
  /**
   * Cancel orders only for this specific symbol. If this is omitted, all open orders
   * will be cancelled.
   */
  symbol?: string;

  /**
   * Format of the provided symbol.
   */
  symbol_format?: 'cms' | 'osi';
}

export interface OrderCancelParams {
  /**
   * The account ID or account number to attempt to cancel the order for.
   */
  account_id: string;
}

export interface OrderPatchParams {
  /**
   * Path param: The account ID or account number to attempt to update the order for.
   */
  account_id: string;

  /**
   * Body param: The maximum quantity to be executed.
   */
  quantity: string;

  /**
   * Body param: The price to execute at-or-better for limit orders.
   */
  price?: string;

  /**
   * Body param: The price at which stop orders become marketable.
   */
  stop_price?: string;
}

export declare namespace Orders {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderDeleteResponse as OrderDeleteResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderDeleteParams as OrderDeleteParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderPatchParams as OrderPatchParams,
  };
}
