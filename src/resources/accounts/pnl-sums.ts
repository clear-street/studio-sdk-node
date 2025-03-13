// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class PnlSums extends APIResource {
  /**
   * List historical PNL summations for a given account over a given date range,
   * filtered on the given query parameters.
   */
  list(
    accountId: string,
    query: PnlSumListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PnlSumListResponse> {
    return this._client.get(`/accounts/${accountId}/pnl-sums`, { query, ...options });
  }
}

export interface PnlSumListResponse {
  /**
   * Account ID for the account.
   */
  account_id?: string;

  /**
   * Account number for the account.
   */
  account_number?: string;

  data?: Array<PnlSumListResponse.Data>;

  /**
   * Sum of profit and loss from intraday trading activities for the given date range
   * across all symbols.
   */
  day_pnl?: number;

  /**
   * Echoed back from the provided query param.
   */
  ending_date?: number;

  /**
   * The equity at the end of the date range. End of day equity of the ending date in
   * the date range.
   */
  ending_equity?: number;

  /**
   * Entity ID for the legal entity.
   */
  entity_id?: string;

  /**
   * `P&L after netting all realized and unrealized P&L, adjustments, dividends, change in accruals, income and expenses`
   */
  net_pnl?: number;

  /**
   * Sum of profit and loss from previous trading date across all symbols.
   */
  position_pnl?: number;

  /**
   * Sum of profit and loss realized from position closing trading activity across
   * all symbols.
   */
  realized_pnl?: number;

  /**
   * Echoed back from the provided query param.
   */
  starting_date?: number;

  /**
   * The equity at the start of the date range. Start of day equity of the starting
   * date in the date range.
   */
  starting_equity?: number;

  /**
   * `realized_pnl + unrealized_pnl`
   */
  total_pnl?: number;

  /**
   * Sum of profit and loss from market changes across all symbols.
   */
  unrealized_pnl?: number;
}

export namespace PnlSumListResponse {
  export interface Data {
    /**
     * The asset class of the symbol.
     */
    asset_class?: 'other' | 'currency' | 'equity' | 'option' | 'debt' | 'fund';

    /**
     * Sum of the notional bought.
     */
    bought_notional?: number;

    /**
     * Sum of quantity bought.
     */
    bought_quantity?: string;

    /**
     * Sum of profit and loss from intraday trading activities for the given date range
     */
    day_pnl?: number;

    /**
     * `P&L after netting all realized and unrealized P&L, adjustments, dividends, change in accruals, income and expenses`
     */
    net_pnl?: number;

    /**
     * Sum of profit and loss from previous trading date.
     */
    position_pnl?: number;

    /**
     * Sum of profit and loss realized from position closing trading activity.
     */
    realized_pnl?: number;

    /**
     * Sum of the notional sold.
     */
    sold_notional?: number;

    /**
     * Sum of quantity sold.
     */
    sold_quantity?: string;

    symbol?: string;

    /**
     * `realized_pnl + unrealized_pnl`
     */
    total_pnl?: number;

    /**
     * Sum of profit and loss from market changes.
     */
    unrealized_pnl?: number;
  }
}

export interface PnlSumListParams {
  /**
   * The ending date to accumulate PNL data for, inclusive.
   */
  ending_date: number;

  /**
   * The starting date to accumulate PNL data for.
   */
  starting_date: number;
}

export declare namespace PnlSums {
  export { type PnlSumListResponse as PnlSumListResponse, type PnlSumListParams as PnlSumListParams };
}
