// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from './entities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PnlSummaries extends APIResource {
  /**
   * Get PNL summary for all accounts in an entity.
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<EntitiesAPI.PnlSummary> {
    return this._client.get(path`/entities/${entityID}/pnl-summary`, options);
  }
}
