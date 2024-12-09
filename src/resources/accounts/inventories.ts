// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Inventories extends APIResource {
  /**
   * Get located inventory for a symbol.
   */
  retrieve(
    accountId: string,
    symbol: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InventoryRetrieveResponse> {
    return this._client.get(`/accounts/${accountId}/inventories/${symbol}`, options);
  }
}

export interface InventoryRetrieveResponse {
  /**
   * Account ID for the account.
   */
  account_id?: string;

  /**
   * Account number for the account.
   */
  account_number?: string;

  /**
   * String representation of quantity.
   */
  available?: string;

  /**
   * String representation of quantity.
   */
  reserved?: string;

  symbol?: string;

  /**
   * String representation of quantity.
   */
  used?: string;
}

export declare namespace Inventories {
  export { type InventoryRetrieveResponse as InventoryRetrieveResponse };
}
