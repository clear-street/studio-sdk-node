// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from './entities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PortfolioMargins extends APIResource {
  /**
   * Get latest portfolio margin calculation for the given entity
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<EntitiesAPI.PortfolioMargin> {
    return this._client.get(path`/entities/${entityID}/portfolio-margin`, options);
  }
}
