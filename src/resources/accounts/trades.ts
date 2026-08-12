// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * Get trade a trade by its unique trade ID.
   *
   * @example
   * ```ts
   * const trade = await client.accounts.trades.retrieve(
   *   '12390213',
   *   { account_id: '100000' },
   * );
   * ```
   */
  retrieve(tradeID: string, params: TradeRetrieveParams, options?: RequestOptions): APIPromise<Shared.Trade> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/trades/${tradeID}`, options);
  }

  /**
   * List trades for a given account for the current trading day.
   *
   * @example
   * ```ts
   * const trades = await client.accounts.trades.list('100000');
   * ```
   */
  list(
    accountID: string,
    query: TradeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TradeListResponse> {
    return this._client.get(path`/accounts/${accountID}/trades`, { query, ...options });
  }
}

export interface TradeListResponse {
  data: Array<Shared.Trade>;

  /**
   * Cursor for the next page of results.
   */
  next_page_token?: string;
}

export interface TradeRetrieveParams {
  /**
   * The account ID or account number to get the trade for.
   */
  account_id: string;
}

export interface TradeListParams {
  /**
   * Number of trades to return per page.
   */
  page_size?: number;

  /**
   * Cursor for the page to return.
   */
  page_token?: string;
}

export declare namespace Trades {
  export {
    type TradeListResponse as TradeListResponse,
    type TradeRetrieveParams as TradeRetrieveParams,
    type TradeListParams as TradeListParams,
  };
}
