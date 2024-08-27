// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EntitiesAPI from './entities';

export class PortfolioMargins extends APIResource {
  /**
   * Get latest portfolio margin calculation for the given entity
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.PortfolioMargin> {
    return this._client.get(`/entities/${entityId}/portfolio-margin`, options);
  }
}
