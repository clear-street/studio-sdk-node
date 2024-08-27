// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import { isRequestOptions } from '@clear-street/studio-sdk/core';
import { APIPromise } from '@clear-street/studio-sdk/core';
import * as Core from '@clear-street/studio-sdk/core';
import * as EntitiesAPI from '@clear-street/studio-sdk/resources/entities/entities';

export class PnlSummary extends APIResource {
  /**
   * Get PNL summary for a given account.
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.PnlSummary> {
    return this._client.get(`/accounts/${accountId}/pnl-summary`, options);
  }
}
