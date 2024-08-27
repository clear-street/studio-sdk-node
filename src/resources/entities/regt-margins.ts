// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EntitiesAPI from './entities';

export class RegtMargins extends APIResource {
  /**
   * Get the latest Reg-T margin calculation for the given entity
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EntitiesAPI.RegtMargin> {
    return this._client.get(`/entities/${entityId}/regt-margin`, options);
  }
}
