// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import * as Core from '@clear-street/studio-sdk/core';
import * as Shared from '@clear-street/studio-sdk/resources/shared';

export class PnlSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PnlSummaryForAccount> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}
