// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class PnlDetails extends APIResource {
  /**
   * List PNL details for a given account.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PnlDetailListResponse> {
    return this._client.get(`/accounts/${accountId}/pnl-details`, options);
  }
}

export interface PnlDetailListResponse {
  data: Array<PnlDetailListResponse.Data>;
}

export namespace PnlDetailListResponse {
  export interface Data {
    /**
     * Account ID for the account.
     */
    account_id: string;

    /**
     * Account number for the account.
     */
    account_number: string;

    /**
     * The asset class of the symbol.
     */
    asset_class: 'other' | 'currency' | 'equity' | 'option' | 'debt' | 'fund';

    /**
     * Quantity of a given instrument bought.
     */
    bought_quantity: string;

    /**
     * Total buys of a given instrument.
     */
    buys: number;

    /**
     * Profit and loss from intraday trading activities.
     */
    day_pnl: number;

    /**
     * Name of the legal entity.
     */
    entity_id: string;

    /**
     * Absolute market value of long and short market values.
     */
    gross_market_value: number;

    /**
     * Market value net of long and short market values.
     */
    net_market_value: number;

    /**
     * Profit and loss from previous trading date.
     */
    overnight_pnl: number;

    /**
     * Price used in this pnl calculation.
     */
    price: number;

    /**
     * String representation of quantity.
     */
    quantity: string;

    /**
     * Profit and loss realized from position closing trading activity.
     */
    realized_pnl: number;

    /**
     * Total sells of a given instrument.
     */
    sells: number;

    /**
     * Market value of a given instrument a the start of a trading day.
     */
    sod_market_value: number;

    /**
     * Price at the start of a trading day.
     */
    sod_price: number;

    /**
     * Quantity of a given instrument at the start of a trading day.
     */
    sod_quantity: string;

    /**
     * Quantity of a given instrument sold.
     */
    sold_quantity: string;

    symbol: string;

    /**
     * Description of the symbol.
     */
    symbol_description: string;

    /**
     * Milliseconds since epoch.
     */
    timestamp: number;

    /**
     * Total fees incurred from trading activities.
     */
    total_fees: number;

    /**
     * `realized_pnl + unrealized_pnl`
     */
    total_pnl: number;

    /**
     * The underlying instrument.
     */
    underlier: string;

    /**
     * Profit and loss from market changes.
     */
    unrealized_pnl: number;
  }
}

export declare namespace PnlDetails {
  export { type PnlDetailListResponse as PnlDetailListResponse };
}
