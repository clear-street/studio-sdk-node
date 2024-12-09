// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Holdings extends APIResource {
  /**
   * List holdings for a given account, filtered on the given query parameters. This
   * endpoint will return either historical or real-time holdings directly from our
   * custodial systems. Positions returned here are can be different than positions
   * returned from the Execution API. While the Execution API returns positions based
   * on trading activity within Studio, our custodial system returns all positions
   * regardless of where trades occur.
   */
  list(
    accountId: string,
    query?: HoldingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldingListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<HoldingListResponse>;
  list(
    accountId: string,
    query: HoldingListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldingListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/holdings`, { query, ...options });
  }
}

export interface HoldingListResponse {
  /**
   * Account ID for the account.
   */
  account_id: string;

  /**
   * Account number for the account.
   */
  account_number: string;

  data: Array<HoldingListResponse.Data>;

  /**
   * Integer in YYYYMMDD representing a date.
   */
  date: number;

  /**
   * Start of day equity.
   */
  sod_equity: number;

  /**
   * For historical holdings, the end of day equity. Omitted for real-time holdings.
   */
  eod_equity?: number;

  /**
   * For real-time holdings, the timestamp reflecting the last update made to the
   * holdings data. Omitted for historical holdings.
   */
  timestamp?: number;
}

export namespace HoldingListResponse {
  export interface Data {
    /**
     * The asset class of the symbol.
     */
    asset_class: 'other' | 'currency' | 'equity' | 'option' | 'debt' | 'fund';

    /**
     * The quantity held for the given symbol. This is an EOD quantity if querying
     * historically, else the current real-time quantity for the current date.
     */
    quantity: string;

    /**
     * The quantity held for the given symbol at the start of the day.
     */
    sod_quantity: string;

    symbol: string;

    /**
     * Description of the symbol.
     */
    symbol_description?: string;
  }
}

export interface HoldingListParams {
  /**
   * The historical date to get holdings for. If omitted, current real-time holdings
   * will be returned.
   */
  date?: number;
}

export declare namespace Holdings {
  export { type HoldingListResponse as HoldingListResponse, type HoldingListParams as HoldingListParams };
}
