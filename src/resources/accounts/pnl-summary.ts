// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class PnlSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PnlSummaryForAccount> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}
