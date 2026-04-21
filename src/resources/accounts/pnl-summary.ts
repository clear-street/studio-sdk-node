// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from '../entities/entities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PnlSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   *
   * @example
   * ```ts
   * const pnlSummary =
   *   await client.accounts.pnlSummary.retrieve('100000');
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<PnlSummaryRetrieveResponse> {
    return this._client.get(path`/accounts/${accountID}/pnl-summary`, options);
  }
}

export interface PnlSummaryRetrieveResponse extends EntitiesAPI.PnlSummary {
  account_id: string;

  account_number: string;
}

export declare namespace PnlSummary {
  export { type PnlSummaryRetrieveResponse as PnlSummaryRetrieveResponse };
}
