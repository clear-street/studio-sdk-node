// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@clear-street/studio-sdk/resource';
import * as Core from '@clear-street/studio-sdk/core';
import * as EntitiesAPI from '@clear-street/studio-sdk/resources/entities/entities';

export class RegtMargin extends APIResource {
  /**
   * Get the latest Reg-T margin calculation for the given entity
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.RegtMargin> {
    return this._client.get(`/entities/${entityId}/regt-margin`, options);
  }
}
