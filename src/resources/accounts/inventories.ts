// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Inventories extends APIResource {
  /**
   * Get located inventory for a symbol.
   *
   * @example
   * ```ts
   * const inventory =
   *   await client.accounts.inventories.retrieve('AAPL', {
   *     account_id: '100000',
   *   });
   * ```
   */
  retrieve(
    symbol: string,
    params: InventoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<InventoryRetrieveResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/inventories/${symbol}`, options);
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

export interface InventoryRetrieveParams {
  /**
   * The account ID or account number to get the inventory for.
   */
  account_id: string;
}

export declare namespace Inventories {
  export {
    type InventoryRetrieveResponse as InventoryRetrieveResponse,
    type InventoryRetrieveParams as InventoryRetrieveParams,
  };
}
