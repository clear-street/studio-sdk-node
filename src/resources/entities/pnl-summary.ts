// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EntitiesAPI from './entities';

export class PnlSummary extends APIResource {
  /**
   * Get PNL summary for all accounts in an entity.
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.PnlSummary> {
    return this._client.get(`/entities/${entityId}/pnl-summary`, options);
  }
}
