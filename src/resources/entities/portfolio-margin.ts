// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import * as Core from '@clear-street/studio-sdk/core';
import * as EntitiesAPI from '@clear-street/studio-sdk/resources/entities/entities';

export class PortfolioMargin extends APIResource {
  /**
   * Get latest portfolio margin calculation for the given entity
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.PortfolioMargin> {
    return this._client.get(`/entities/${entityId}/portfolio-margin`, options);
  }
}
