// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from './entities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RegtMargins extends APIResource {
  /**
   * Get the latest Reg-T margin calculation for the given entity
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<EntitiesAPI.RegtMargin> {
    return this._client.get(path`/entities/${entityID}/regt-margin`, options);
  }
}
