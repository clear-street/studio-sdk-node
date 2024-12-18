// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class EasyBorrows extends APIResource {
  /**
   * List all current easy-to-borrow stock symbols. This list changes dynamically
   * daily.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EasyBorrowListResponse> {
    return this._client.get(`/accounts/${accountId}/easy-borrows`, options);
  }
}

export interface EasyBorrowListResponse {
  data: Array<string>;
}

export declare namespace EasyBorrows {
  export { type EasyBorrowListResponse as EasyBorrowListResponse };
}
