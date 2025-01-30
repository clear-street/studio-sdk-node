// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EntitiesAPI from '../entities/entities';

export class PnlSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PnlSummaryRetrieveResponse> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}

export interface PnlSummaryRetrieveResponse extends EntitiesAPI.PnlSummary {
  account_id: string;

  account_number: string;
}

export declare namespace PnlSummary {
  export { type PnlSummaryRetrieveResponse as PnlSummaryRetrieveResponse };
}
